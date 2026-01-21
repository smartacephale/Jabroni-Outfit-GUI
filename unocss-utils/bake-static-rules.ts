import fs from 'node:fs';
import path from 'node:path';
import { createGenerator, presetWind3, type StaticRule } from 'unocss';

const getFiles = (dir: string, fileExtensions: string[]): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(filePath, fileExtensions));
    } else if (fileExtensions.includes(path.extname(filePath))) {
      results.push(filePath);
    }
  });
  return results;
};

export async function bakeStaticRules(fileExtensions: string[] = ['.vue']) {
  const uno = await createGenerator({
    presets: [presetWind3()],
  });

  const files = getFiles(path.join(process.cwd(), 'src'), fileExtensions);
  const allTokens = new Set<string>();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    await uno.applyExtractors(content, file, allTokens);
  }

  const staticRules: StaticRule[] = [];

  const result = await uno.generate(allTokens, { preflights: false });

  for (const sheet of result.matched) {
    const token = sheet;
    const generated = await uno.generate(token, {
      preflights: false,
      minify: true,
    });

    const cssBodyMatch = generated.css.match(/\{([^}]+)\}/);
    if (!cssBodyMatch) continue;

    const cssBody = cssBodyMatch[1] || '';
    const ruleObject: Record<string, string> = {};

    const rawEntries = cssBody.split(';').filter(Boolean);

    for (const entry of rawEntries) {
      const colonIndex = entry.indexOf(':');
      if (colonIndex === -1) continue;

      const prop = entry.slice(0, colonIndex).trim();
      let val = entry
        .slice(colonIndex + 1)
        .trim()
        .replace(/\s*!important/g, '');

      val = val.replace(/(-?[\d.]+)rem/g, (_, v) => `${parseFloat(v) * 16}px`);

      val = val.replace(/var\(--un-[^)]+\)/g, '1');

      ruleObject[prop] = val;
    }

    if (Object.keys(ruleObject).length > 0) {
      staticRules.push([token, ruleObject]);
    }
  }

  return staticRules;
}
