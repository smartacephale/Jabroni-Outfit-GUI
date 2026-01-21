import type { SourceCodeTransformer } from "unocss";

export function transformerPrefix(
	prefix: string,
	compileClassTrigger = ":uno:",
): SourceCodeTransformer {
	return {
		name: "prefix-transformer",
		enforce: "pre",
		transform(code) {
			const s = code.toString();
			const regex = /(?<=class="|:class=")([^"']+)/g;
			let match = regex.exec(s);

			const setPrefix = (s: string) => {
				if (s.includes(":")) {
					return s.replace(
						/([\w|-]+:)(.*)/,
						(_, b, c) => `${b}${setPrefix(c)}`,
					);
				}
				return `${prefix}${s}`;
			};

			while (match !== null) {
				const start = match.index;
				const end = start + match[0].length;
				const original = match[0];

				const prefixed = original
					.split(/\s+/)
					.filter((val) => val.trim() !== "")
					.map((cls) => {
						if (cls === compileClassTrigger) return cls;
						if (cls.startsWith(prefix)) return cls;
						return setPrefix(cls);
					})
					.join(" ");

				code.overwrite(start, end, prefixed);
				match = regex.exec(s);
			}
		},
	};
}
