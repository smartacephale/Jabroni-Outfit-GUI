var Af = Object.defineProperty;
var Rf = (e, t, n) => t in e ? Af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ft = (e, t, n) => Rf(e, typeof t != "symbol" ? t + "" : t, n);
var Aa = {};
/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const ie = Aa.NODE_ENV !== "production" ? Object.freeze({}) : {}, $n = Aa.NODE_ENV !== "production" ? Object.freeze([]) : [], Ee = () => {
}, or = () => !1, Mt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mr = (e) => e.startsWith("onUpdate:"), re = Object.assign, so = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mf = Object.prototype.hasOwnProperty, ne = (e, t) => Mf.call(e, t), U = Array.isArray, bn = (e) => Xn(e) === "[object Map]", Vn = (e) => Xn(e) === "[object Set]", yl = (e) => Xn(e) === "[object Date]", Pf = (e) => Xn(e) === "[object RegExp]", Q = (e) => typeof e == "function", Y = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", oo = (e) => (le(e) || Q(e)) && Q(e.then) && Q(e.catch), Ra = Object.prototype.toString, Xn = (e) => Ra.call(e), lo = (e) => Xn(e).slice(8, -1), Ma = (e) => Xn(e) === "[object Object]", ao = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zt = /* @__PURE__ */ Ie(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pa = /* @__PURE__ */ Ie(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Hr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $f = /-(\w)/g, de = Hr((e) => e.replace($f, (t, n) => n ? n.toUpperCase() : "")), Lf = /\B([A-Z])/g, Me = Hr(
  (e) => e.replace(Lf, "-$1").toLowerCase()
), vt = Hr((e) => e.charAt(0).toUpperCase() + e.slice(1)), yt = Hr((e) => e ? `on${vt(e)}` : ""), Ke = (e, t) => !Object.is(e, t), Gt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Hn = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, gr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, yr = (e) => {
  const t = Y(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let El;
const co = () => El || (El = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Qt = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, Ff = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Bf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error", Hf = /* @__PURE__ */ Ie(Bf), bl = 2;
function jf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let i = e.split(/(\r?\n)/);
  const r = i.filter((l, a) => a % 2 === 1);
  i = i.filter((l, a) => a % 2 === 0);
  let s = 0;
  const o = [];
  for (let l = 0; l < i.length; l++)
    if (s += i[l].length + (r[l] && r[l].length || 0), s >= t) {
      for (let a = l - bl; a <= l + bl || n > s; a++) {
        if (a < 0 || a >= i.length) continue;
        const c = a + 1;
        o.push(
          `${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${i[a]}`
        );
        const f = i[a].length, u = r[a] && r[a].length || 0;
        if (a === l) {
          const d = t - (s - (f + u)), y = Math.max(
            1,
            n > s ? f - d : n - t
          );
          o.push("   |  " + " ".repeat(d) + "^".repeat(y));
        } else if (a > l) {
          if (n > s) {
            const d = Math.max(Math.min(n - s, f), 1);
            o.push("   |  " + "^".repeat(d));
          }
          s += f + u;
        }
      }
      break;
    }
  return o.join(`
`);
}
function Zn(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Y(i) ? $a(i) : Zn(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Y(e) || le(e))
    return e;
}
const Uf = /;(?![^(]*\))/g, Kf = /:([^]+)/, Wf = /\/\*[^]*?\*\//g;
function $a(e) {
  const t = {};
  return e.replace(Wf, "").split(Uf).forEach((n) => {
    if (n) {
      const i = n.split(Kf);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function qf(e) {
  let t = "";
  if (!e || Y(e))
    return t;
  for (const n in e) {
    const i = e[n];
    if (Y(i) || typeof i == "number") {
      const r = n.startsWith("--") ? n : Me(n);
      t += `${r}:${i};`;
    }
  }
  return t;
}
function Qn(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const i = Qn(e[n]);
      i && (t += i + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function zf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Y(t) && (e.class = Qn(t)), n && (e.style = Zn(n)), e;
}
const Gf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Jf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xf = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", La = /* @__PURE__ */ Ie(Gf), Fa = /* @__PURE__ */ Ie(Jf), Ba = /* @__PURE__ */ Ie(Yf), Zf = /* @__PURE__ */ Ie(Xf), Ha = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qf = /* @__PURE__ */ Ie(Ha), _l = /* @__PURE__ */ Ie(
  Ha + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function uo(e) {
  return !!e || e === "";
}
const ep = /* @__PURE__ */ Ie(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), tp = /* @__PURE__ */ Ie(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function np(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
function ip(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = on(e[i], t[i]);
  return n;
}
function on(e, t) {
  if (e === t) return !0;
  let n = yl(e), i = yl(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), i = Ze(t), n || i)
    return e === t;
  if (n = U(e), i = U(t), n || i)
    return n && i ? ip(e, t) : !1;
  if (n = le(e), i = le(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !on(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function jr(e, t) {
  return e.findIndex((n) => on(n, t));
}
const ja = (e) => !!(e && e.__v_isRef === !0), Ua = (e) => Y(e) ? e : e == null ? "" : U(e) || le(e) && (e.toString === Ra || !Q(e.toString)) ? ja(e) ? Ua(e.value) : JSON.stringify(e, Ka, 2) : String(e), Ka = (e, t) => ja(t) ? Ka(e, t.value) : bn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[ps(i, s) + " =>"] = r, n),
    {}
  )
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ps(n))
} : Ze(t) ? ps(t) : le(t) && !U(t) && !Ma(t) ? String(t) : t, ps = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var _e = {};
function wt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ye;
class fo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ye, !t && Ye && (this.index = (Ye.scopes || (Ye.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = n;
      }
    } else _e.NODE_ENV !== "production" && wt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ye = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function rp(e) {
  return new fo(e);
}
function Wa(e, t = Ye) {
  t && t.active && t.effects.push(e);
}
function qa() {
  return Ye;
}
function sp(e) {
  Ye ? Ye.cleanups.push(e) : _e.NODE_ENV !== "production" && wt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _n;
class jn {
  constructor(t, n, i, r) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Wa(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, cn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (op(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), un();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = en, n = _n;
    try {
      return en = !0, _n = this, this._runnings++, Nl(this), this.fn();
    } finally {
      vl(this), this._runnings--, _n = n, en = t;
    }
  }
  stop() {
    this.active && (Nl(this), vl(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function op(e) {
  return e.value;
}
function Nl(e) {
  e._trackId++, e._depsLength = 0;
}
function vl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      za(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function za(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function lp(e, t) {
  e.effect instanceof jn && (e = e.effect.fn);
  const n = new jn(e, Ee, () => {
    n.dirty && n.run();
  });
  t && (re(n, t), t.scope && Wa(n, t.scope)), (!t || !t.lazy) && n.run();
  const i = n.run.bind(n);
  return i.effect = n, i;
}
function ap(e) {
  e.effect.stop();
}
let en = !0, Cs = 0;
const Ga = [];
function cn() {
  Ga.push(en), en = !1;
}
function un() {
  const e = Ga.pop();
  en = e === void 0 ? !0 : e;
}
function po() {
  Cs++;
}
function ho() {
  for (Cs--; !Cs && Ts.length; )
    Ts.shift()();
}
function Ja(e, t, n) {
  var i;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && za(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, _e.NODE_ENV !== "production" && ((i = e.onTrack) == null || i.call(e, re({ effect: e }, n)));
  }
}
const Ts = [];
function Ya(e, t, n) {
  var i;
  po();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (_e.NODE_ENV !== "production" && ((i = r.onTrigger) == null || i.call(r, re({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ts.push(r.scheduler)));
  }
  ho();
}
const Xa = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Er = /* @__PURE__ */ new WeakMap(), Nn = Symbol(_e.NODE_ENV !== "production" ? "iterate" : ""), Ds = Symbol(_e.NODE_ENV !== "production" ? "Map key iterate" : "");
function Pe(e, t, n) {
  if (en && _n) {
    let i = Er.get(e);
    i || Er.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = Xa(() => i.delete(n))), Ja(
      _n,
      r,
      _e.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function bt(e, t, n, i, r, s) {
  const o = Er.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && U(e)) {
    const a = Number(i);
    o.forEach((c, f) => {
      (f === "length" || !Ze(f) && f >= a) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        U(e) ? ao(n) && l.push(o.get("length")) : (l.push(o.get(Nn)), bn(e) && l.push(o.get(Ds)));
        break;
      case "delete":
        U(e) || (l.push(o.get(Nn)), bn(e) && l.push(o.get(Ds)));
        break;
      case "set":
        bn(e) && l.push(o.get(Nn));
        break;
    }
  po();
  for (const a of l)
    a && Ya(
      a,
      4,
      _e.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: i,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  ho();
}
function cp(e, t) {
  const n = Er.get(e);
  return n && n.get(t);
}
const up = /* @__PURE__ */ Ie("__proto__,__v_isRef,__isVue"), Za = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
), wl = /* @__PURE__ */ fp();
function fp() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = X(this);
      for (let s = 0, o = this.length; s < o; s++)
        Pe(i, "get", s + "");
      const r = i[t](...n);
      return r === -1 || r === !1 ? i[t](...n.map(X)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      cn(), po();
      const i = X(this)[t].apply(this, n);
      return ho(), un(), i;
    };
  }), e;
}
function pp(e) {
  Ze(e) || (e = String(e));
  const t = X(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class Qa {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? oc : sc : s ? rc : ic).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = U(t);
    if (!r) {
      if (o && ne(wl, n))
        return Reflect.get(wl, n, i);
      if (n === "hasOwnProperty")
        return pp;
    }
    const l = Reflect.get(t, n, i);
    return (Ze(n) ? Za.has(n) : up(n)) || (r || Pe(t, "get", n), s) ? l : ke(l) ? o && ao(n) ? l : l.value : le(l) ? r ? go(l) : ei(l) : l;
  }
}
class ec extends Qa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Ot(s);
      if (!_t(i) && !Ot(i) && (s = X(s), i = X(i)), !U(t) && ke(s) && !ke(i))
        return a ? !1 : (s.value = i, !0);
    }
    const o = U(t) && ao(n) ? Number(n) < t.length : ne(t, n), l = Reflect.set(t, n, i, r);
    return t === X(r) && (o ? Ke(i, s) && bt(t, "set", n, i, s) : bt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = ne(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && i && bt(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Ze(n) || !Za.has(n)) && Pe(t, "has", n), i;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      U(t) ? "length" : Nn
    ), Reflect.ownKeys(t);
  }
}
class tc extends Qa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return _e.NODE_ENV !== "production" && wt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return _e.NODE_ENV !== "production" && wt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const dp = /* @__PURE__ */ new ec(), hp = /* @__PURE__ */ new tc(), mp = /* @__PURE__ */ new ec(
  !0
), gp = /* @__PURE__ */ new tc(!0), mo = (e) => e, Ur = (e) => Reflect.getPrototypeOf(e);
function Wi(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const r = X(e), s = X(t);
  n || (Ke(t, s) && Pe(r, "get", t), Pe(r, "get", s));
  const { has: o } = Ur(r), l = i ? mo : n ? yo : Ni;
  if (o.call(r, t))
    return l(e.get(t));
  if (o.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function qi(e, t = !1) {
  const n = this.__v_raw, i = X(n), r = X(e);
  return t || (Ke(e, r) && Pe(i, "has", e), Pe(i, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function zi(e, t = !1) {
  return e = e.__v_raw, !t && Pe(X(e), "iterate", Nn), Reflect.get(e, "size", e);
}
function Ol(e, t = !1) {
  !t && !_t(e) && !Ot(e) && (e = X(e));
  const n = X(this);
  return Ur(n).has.call(n, e) || (n.add(e), bt(n, "add", e, e)), this;
}
function Sl(e, t, n = !1) {
  !n && !_t(t) && !Ot(t) && (t = X(t));
  const i = X(this), { has: r, get: s } = Ur(i);
  let o = r.call(i, e);
  o ? _e.NODE_ENV !== "production" && nc(i, r, e) : (e = X(e), o = r.call(i, e));
  const l = s.call(i, e);
  return i.set(e, t), o ? Ke(t, l) && bt(i, "set", e, t, l) : bt(i, "add", e, t), this;
}
function Cl(e) {
  const t = X(this), { has: n, get: i } = Ur(t);
  let r = n.call(t, e);
  r ? _e.NODE_ENV !== "production" && nc(t, n, e) : (e = X(e), r = n.call(t, e));
  const s = i ? i.call(t, e) : void 0, o = t.delete(e);
  return r && bt(t, "delete", e, void 0, s), o;
}
function Tl() {
  const e = X(this), t = e.size !== 0, n = _e.NODE_ENV !== "production" ? bn(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && bt(e, "clear", void 0, void 0, n), i;
}
function Gi(e, t) {
  return function(i, r) {
    const s = this, o = s.__v_raw, l = X(o), a = t ? mo : e ? yo : Ni;
    return !e && Pe(l, "iterate", Nn), o.forEach((c, f) => i.call(r, a(c), a(f), s));
  };
}
function Ji(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = X(r), o = bn(s), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...i), f = n ? mo : t ? yo : Ni;
    return !t && Pe(
      s,
      "iterate",
      a ? Ds : Nn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: d } = c.next();
        return d ? { value: u, done: d } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Bt(e) {
  return function(...t) {
    if (_e.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      wt(
        `${vt(e)} operation ${n}failed: target is readonly.`,
        X(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yp() {
  const e = {
    get(s) {
      return Wi(this, s);
    },
    get size() {
      return zi(this);
    },
    has: qi,
    add: Ol,
    set: Sl,
    delete: Cl,
    clear: Tl,
    forEach: Gi(!1, !1)
  }, t = {
    get(s) {
      return Wi(this, s, !1, !0);
    },
    get size() {
      return zi(this);
    },
    has: qi,
    add(s) {
      return Ol.call(this, s, !0);
    },
    set(s, o) {
      return Sl.call(this, s, o, !0);
    },
    delete: Cl,
    clear: Tl,
    forEach: Gi(!1, !0)
  }, n = {
    get(s) {
      return Wi(this, s, !0);
    },
    get size() {
      return zi(this, !0);
    },
    has(s) {
      return qi.call(this, s, !0);
    },
    add: Bt("add"),
    set: Bt("set"),
    delete: Bt("delete"),
    clear: Bt("clear"),
    forEach: Gi(!0, !1)
  }, i = {
    get(s) {
      return Wi(this, s, !0, !0);
    },
    get size() {
      return zi(this, !0);
    },
    has(s) {
      return qi.call(this, s, !0);
    },
    add: Bt("add"),
    set: Bt("set"),
    delete: Bt("delete"),
    clear: Bt("clear"),
    forEach: Gi(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = Ji(s, !1, !1), n[s] = Ji(s, !0, !1), t[s] = Ji(s, !1, !0), i[s] = Ji(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  Ep,
  bp,
  _p,
  Np
] = /* @__PURE__ */ yp();
function Kr(e, t) {
  const n = t ? e ? Np : _p : e ? bp : Ep;
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    ne(n, r) && r in i ? n : i,
    r,
    s
  );
}
const vp = {
  get: /* @__PURE__ */ Kr(!1, !1)
}, wp = {
  get: /* @__PURE__ */ Kr(!1, !0)
}, Op = {
  get: /* @__PURE__ */ Kr(!0, !1)
}, Sp = {
  get: /* @__PURE__ */ Kr(!0, !0)
};
function nc(e, t, n) {
  const i = X(n);
  if (i !== n && t.call(e, i)) {
    const r = lo(e);
    wt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap();
function Cp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cp(lo(e));
}
function ei(e) {
  return Ot(e) ? e : Wr(
    e,
    !1,
    dp,
    vp,
    ic
  );
}
function lc(e) {
  return Wr(
    e,
    !1,
    mp,
    wp,
    rc
  );
}
function go(e) {
  return Wr(
    e,
    !0,
    hp,
    Op,
    sc
  );
}
function ut(e) {
  return Wr(
    e,
    !0,
    gp,
    Sp,
    oc
  );
}
function Wr(e, t, n, i, r) {
  if (!le(e))
    return _e.NODE_ENV !== "production" && wt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const o = Tp(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? i : n
  );
  return r.set(e, l), l;
}
function tn(e) {
  return Ot(e) ? tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
function _t(e) {
  return !!(e && e.__v_isShallow);
}
function _i(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function ac(e) {
  return Object.isExtensible(e) && Hn(e, "__v_skip", !0), e;
}
const Ni = (e) => le(e) ? ei(e) : e, yo = (e) => le(e) ? go(e) : e, Dp = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class cc {
  constructor(t, n, i, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new jn(
      () => t(this._value),
      () => Ln(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const t = X(this);
    return (!t._cacheable || t.effect.dirty) && Ke(t._value, t._value = t.effect.run()) && Ln(t, 4), Eo(t), t.effect._dirtyLevel >= 2 && (_e.NODE_ENV !== "production" && this._warnRecursive && wt(Dp, `

getter: `, this.getter), Ln(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function kp(e, t, n = !1) {
  let i, r;
  const s = Q(e);
  s ? (i = e, r = _e.NODE_ENV !== "production" ? () => {
    wt("Write operation failed: computed value is readonly");
  } : Ee) : (i = e.get, r = e.set);
  const o = new cc(i, r, s || !r, n);
  return _e.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
}
function Eo(e) {
  var t;
  en && _n && (e = X(e), Ja(
    _n,
    (t = e.dep) != null ? t : e.dep = Xa(
      () => e.dep = void 0,
      e instanceof cc ? e : void 0
    ),
    _e.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Ln(e, t = 4, n, i) {
  e = X(e);
  const r = e.dep;
  r && Ya(
    r,
    t,
    _e.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: i
    } : void 0
  );
}
function ke(e) {
  return !!(e && e.__v_isRef === !0);
}
function vn(e) {
  return uc(e, !1);
}
function xp(e) {
  return uc(e, !0);
}
function uc(e, t) {
  return ke(e) ? e : new Vp(e, t);
}
class Vp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : X(t), this._value = n ? t : Ni(t);
  }
  get value() {
    return Eo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || _t(t) || Ot(t);
    if (t = n ? t : X(t), Ke(t, this._rawValue)) {
      const i = this._rawValue;
      this._rawValue = t, this._value = n ? t : Ni(t), Ln(this, 4, t, i);
    }
  }
}
function Ip(e) {
  Ln(e, 4, _e.NODE_ENV !== "production" ? e.value : void 0);
}
function bo(e) {
  return ke(e) ? e.value : e;
}
function Ap(e) {
  return Q(e) ? e() : bo(e);
}
const Rp = {
  get: (e, t, n) => bo(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return ke(r) && !ke(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function _o(e) {
  return tn(e) ? e : new Proxy(e, Rp);
}
class Mp {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = t(
      () => Eo(this),
      () => Ln(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function fc(e) {
  return new Mp(e);
}
function Pp(e) {
  _e.NODE_ENV !== "production" && !_i(e) && wt("toRefs() expects a reactive object but received a plain one.");
  const t = U(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = pc(e, n);
  return t;
}
class $p {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return cp(X(this._object), this._key);
  }
}
class Lp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Fp(e, t, n) {
  return ke(e) ? e : Q(e) ? new Lp(e) : le(e) && arguments.length > 1 ? pc(e, t, n) : vn(e);
}
function pc(e, t, n) {
  const i = e[t];
  return ke(i) ? i : new $p(e, t, n);
}
const Bp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Hp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
};
var h = {};
const wn = [];
function pi(e) {
  wn.push(e);
}
function di() {
  wn.pop();
}
let ds = !1;
function k(e, ...t) {
  if (ds) return;
  ds = !0, cn();
  const n = wn.length ? wn[wn.length - 1].component : null, i = n && n.appContext.config.warnHandler, r = jp();
  if (i)
    Nt(
      i,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var o, l;
          return (l = (o = s.toString) == null ? void 0 : o.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${is(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Up(r)), console.warn(...s);
  }
  un(), ds = !1;
}
function jp() {
  let e = wn[wn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function Up(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Kp(n));
  }), t;
}
function Kp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, r = ` at <${is(
    e.component,
    e.type,
    i
  )}`, s = ">" + n;
  return e.props ? [r, ...Wp(e.props), s] : [r + s];
}
function Wp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...dc(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function dc(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ke(t) ? (t = dc(e, X(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = X(t), n ? t : [`${e}=`, t]);
}
function No(e, t) {
  h.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? k(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && k(`${t} is NaN - the duration expression might be incorrect.`));
}
const qp = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  WATCH_GETTER: 2,
  2: "WATCH_GETTER",
  WATCH_CALLBACK: 3,
  3: "WATCH_CALLBACK",
  WATCH_CLEANUP: 4,
  4: "WATCH_CLEANUP",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE"
}, qr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update"
};
function Nt(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    fn(r, t, n);
  }
}
function rt(e, t, n, i) {
  if (Q(e)) {
    const r = Nt(e, t, n, i);
    return r && oo(r) && r.catch((s) => {
      fn(s, t, n);
    }), r;
  }
  if (U(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(rt(e[s], t, n, i));
    return r;
  } else h.NODE_ENV !== "production" && k(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function fn(e, t, n, i = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const o = t.proxy, l = h.NODE_ENV !== "production" ? qr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, o, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      cn(), Nt(
        a,
        null,
        10,
        [e, o, l]
      ), un();
      return;
    }
  }
  zp(e, n, r, i);
}
function zp(e, t, n, i = !0) {
  if (h.NODE_ENV !== "production") {
    const r = qr[t];
    if (n && pi(n), k(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && di(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let vi = !1, ks = !1;
const Le = [];
let Et = 0;
const Fn = [];
let Kt = null, gn = 0;
const hc = /* @__PURE__ */ Promise.resolve();
let vo = null;
const Gp = 100;
function zr(e) {
  const t = vo || hc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jp(e) {
  let t = Et + 1, n = Le.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Le[i], s = Oi(r);
    s < e || s === e && r.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Pi(e) {
  (!Le.length || !Le.includes(
    e,
    vi && e.allowRecurse ? Et + 1 : Et
  )) && (e.id == null ? Le.push(e) : Le.splice(Jp(e.id), 0, e), mc());
}
function mc() {
  !vi && !ks && (ks = !0, vo = hc.then(gc));
}
function Yp(e) {
  const t = Le.indexOf(e);
  t > Et && Le.splice(t, 1);
}
function wi(e) {
  U(e) ? Fn.push(...e) : (!Kt || !Kt.includes(
    e,
    e.allowRecurse ? gn + 1 : gn
  )) && Fn.push(e), mc();
}
function Dl(e, t, n = vi ? Et + 1 : 0) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Le.length; n++) {
    const i = Le[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid || h.NODE_ENV !== "production" && wo(t, i))
        continue;
      Le.splice(n, 1), n--, i();
    }
  }
}
function br(e) {
  if (Fn.length) {
    const t = [...new Set(Fn)].sort(
      (n, i) => Oi(n) - Oi(i)
    );
    if (Fn.length = 0, Kt) {
      Kt.push(...t);
      return;
    }
    for (Kt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gn = 0; gn < Kt.length; gn++) {
      const n = Kt[gn];
      h.NODE_ENV !== "production" && wo(e, n) || n.active !== !1 && n();
    }
    Kt = null, gn = 0;
  }
}
const Oi = (e) => e.id == null ? 1 / 0 : e.id, Xp = (e, t) => {
  const n = Oi(e) - Oi(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function gc(e) {
  ks = !1, vi = !0, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(Xp);
  const t = h.NODE_ENV !== "production" ? (n) => wo(e, n) : Ee;
  try {
    for (Et = 0; Et < Le.length; Et++) {
      const n = Le[Et];
      if (n && n.active !== !1) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        Nt(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    Et = 0, Le.length = 0, br(e), vi = !1, vo = null, (Le.length || Fn.length) && gc(e);
  }
}
function wo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Gp) {
      const i = t.i, r = i && ki(i.type);
      return fn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let nn = !1;
const lr = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (co().__VUE_HMR_RUNTIME__ = {
  createRecord: hs(yc),
  rerender: hs(ed),
  reload: hs(td)
});
const Dn = /* @__PURE__ */ new Map();
function Zp(e) {
  const t = e.type.__hmrId;
  let n = Dn.get(t);
  n || (yc(t, e.type), n = Dn.get(t)), n.instances.add(e);
}
function Qp(e) {
  Dn.get(e.type.__hmrId).instances.delete(e);
}
function yc(e, t) {
  return Dn.has(e) ? !1 : (Dn.set(e, {
    initialDef: _r(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function _r(e) {
  return hu(e) ? e.__vccOpts : e;
}
function ed(e, t) {
  const n = Dn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, _r(i.type).render = t), i.renderCache = [], nn = !0, i.effect.dirty = !0, i.update(), nn = !1;
  }));
}
function td(e, t) {
  const n = Dn.get(e);
  if (!n) return;
  t = _r(t), kl(n.initialDef, t);
  const i = [...n.instances];
  for (let r = 0; r < i.length; r++) {
    const s = i[r], o = _r(s.type);
    let l = lr.get(o);
    l || (o !== n.initialDef && kl(o, t), lr.set(o, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? (s.parent.effect.dirty = !0, Pi(() => {
      s.parent.update(), l.delete(s);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  wi(() => {
    lr.clear();
  });
}
function kl(e, t) {
  re(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function hs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let at, ai = [], xs = !1;
function $i(e, ...t) {
  at ? at.emit(e, ...t) : xs || ai.push({ event: e, args: t });
}
function Oo(e, t) {
  var n, i;
  at = e, at ? (at.enabled = !0, ai.forEach(({ event: r, args: s }) => at.emit(r, ...s)), ai = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Oo(s, t);
  }), setTimeout(() => {
    at || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xs = !0, ai = []);
  }, 3e3)) : (xs = !0, ai = []);
}
function nd(e, t) {
  $i("app:init", e, t, {
    Fragment: Ce,
    Text: At,
    Comment: ye,
    Static: rn
  });
}
function id(e) {
  $i("app:unmount", e);
}
const Vs = /* @__PURE__ */ So(
  "component:added"
  /* COMPONENT_ADDED */
), Ec = /* @__PURE__ */ So(
  "component:updated"
  /* COMPONENT_UPDATED */
), rd = /* @__PURE__ */ So(
  "component:removed"
  /* COMPONENT_REMOVED */
), sd = (e) => {
  at && typeof at.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !at.cleanupBuffer(e) && rd(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function So(e) {
  return (t) => {
    $i(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const od = /* @__PURE__ */ bc(
  "perf:start"
  /* PERFORMANCE_START */
), ld = /* @__PURE__ */ bc(
  "perf:end"
  /* PERFORMANCE_END */
);
function bc(e) {
  return (t, n, i) => {
    $i(e, t.appContext.app, t.uid, t, n, i);
  };
}
function ad(e, t, n) {
  $i(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let be = null, Gr = null;
function Si(e) {
  const t = be;
  return be = e, Gr = e && e.type.__scopeId || null, t;
}
function cd(e) {
  Gr = e;
}
function ud() {
  Gr = null;
}
const fd = (e) => Co;
function Co(e, t = be, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Fs(-1);
    const s = Si(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Si(s), i._d && Fs(1);
    }
    return h.NODE_ENV !== "production" && Ec(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function _c(e) {
  Pa(e) && k("Do not use built-in directive ids as custom directive id: " + e);
}
function pd(e, t) {
  if (be === null)
    return h.NODE_ENV !== "production" && k("withDirectives can only be used inside render functions."), e;
  const n = Fi(be), i = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, o, l, a = ie] = t[r];
    s && (Q(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Yt(o), i.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function gt(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[i];
    a && (cn(), rt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), un());
  }
}
const Wt = Symbol("_leaveCb"), Yi = Symbol("_enterCb");
function To() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xr(() => {
    e.isMounted = !0;
  }), Vo(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Do = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: et,
  onEnter: et,
  onAfterEnter: et,
  onEnterCancelled: et,
  // leave
  onBeforeLeave: et,
  onLeave: et,
  onAfterLeave: et,
  onLeaveCancelled: et,
  // appear
  onBeforeAppear: et,
  onAppear: et,
  onAfterAppear: et,
  onAppearCancelled: et
}, Nc = (e) => {
  const t = e.subTree;
  return t.component ? Nc(t.component) : t;
}, dd = {
  name: "BaseTransition",
  props: Do,
  setup(e, { slots: t }) {
    const n = St(), i = To();
    return () => {
      const r = t.default && Jr(t.default(), !0);
      if (!r || !r.length)
        return;
      let s = r[0];
      if (r.length > 1) {
        let d = !1;
        for (const y of r)
          if (y.type !== ye) {
            if (h.NODE_ENV !== "production" && d) {
              k(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = y, d = !0, h.NODE_ENV === "production") break;
          }
      }
      const o = X(e), { mode: l } = o;
      if (h.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && k(`invalid <transition> mode: ${l}`), i.isLeaving)
        return ms(s);
      const a = xl(s);
      if (!a)
        return ms(s);
      let c = Un(
        a,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      ln(a, c);
      const f = n.subTree, u = f && xl(f);
      if (u && u.type !== ye && !ct(a, u) && Nc(n).type !== ye) {
        const d = Un(
          u,
          o,
          i,
          n
        );
        if (ln(u, d), l === "out-in" && a.type !== ye)
          return i.isLeaving = !0, d.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, ms(s);
        l === "in-out" && a.type !== ye && (d.delayLeave = (y, E, O) => {
          const $ = wc(
            i,
            u
          );
          $[String(u.key)] = u, y[Wt] = () => {
            E(), y[Wt] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = O;
        });
      }
      return s;
    };
  }
}, vc = dd;
function wc(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Un(e, t, n, i, r) {
  const {
    appear: s,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: y,
    onAfterLeave: E,
    onLeaveCancelled: O,
    onBeforeAppear: $,
    onAppear: R,
    onAfterAppear: v,
    onAppearCancelled: g
  } = t, b = String(e.key), N = wc(n, e), x = (_, C) => {
    _ && rt(
      _,
      i,
      9,
      C
    );
  }, T = (_, C) => {
    const P = C[1];
    x(_, C), U(_) ? _.every((S) => S.length <= 1) && P() : _.length <= 1 && P();
  }, V = {
    mode: o,
    persisted: l,
    beforeEnter(_) {
      let C = a;
      if (!n.isMounted)
        if (s)
          C = $ || a;
        else
          return;
      _[Wt] && _[Wt](
        !0
        /* cancelled */
      );
      const P = N[b];
      P && ct(e, P) && P.el[Wt] && P.el[Wt](), x(C, [_]);
    },
    enter(_) {
      let C = c, P = f, S = u;
      if (!n.isMounted)
        if (s)
          C = R || c, P = v || f, S = g || u;
        else
          return;
      let j = !1;
      const G = _[Yi] = (J) => {
        j || (j = !0, J ? x(S, [_]) : x(P, [_]), V.delayedLeave && V.delayedLeave(), _[Yi] = void 0);
      };
      C ? T(C, [_, G]) : G();
    },
    leave(_, C) {
      const P = String(e.key);
      if (_[Yi] && _[Yi](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      x(d, [_]);
      let S = !1;
      const j = _[Wt] = (G) => {
        S || (S = !0, C(), G ? x(O, [_]) : x(E, [_]), _[Wt] = void 0, N[P] === e && delete N[P]);
      };
      N[P] = e, y ? T(y, [_, j]) : j();
    },
    clone(_) {
      const C = Un(
        _,
        t,
        n,
        i,
        r
      );
      return r && r(C), C;
    }
  };
  return V;
}
function ms(e) {
  if (ti(e))
    return e = ot(e), e.children = null, e;
}
function xl(e) {
  if (!ti(e))
    return e;
  if (h.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function ln(e, t) {
  e.shapeFlag & 6 && e.component ? ln(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Jr(e, t = !1, n) {
  let i = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === Ce ? (o.patchFlag & 128 && r++, i = i.concat(
      Jr(o.children, t, l)
    )) : (t || o.type !== ye) && i.push(l != null ? ot(o, { key: l }) : o);
  }
  if (r > 1)
    for (let s = 0; s < i.length; s++)
      i[s].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ko(e, t) {
  return Q(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
const On = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hd(e) {
  Q(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: r = 200,
    timeout: s,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let a = null, c, f = 0;
  const u = () => (f++, a = null, d()), d = () => {
    let y;
    return a || (y = a = t().catch((E) => {
      if (E = E instanceof Error ? E : new Error(String(E)), l)
        return new Promise((O, $) => {
          l(E, () => O(u()), () => $(E), f + 1);
        });
      throw E;
    }).then((E) => {
      if (y !== a && a)
        return a;
      if (h.NODE_ENV !== "production" && !E && k(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), E && (E.__esModule || E[Symbol.toStringTag] === "Module") && (E = E.default), h.NODE_ENV !== "production" && E && !le(E) && !Q(E))
        throw new Error(`Invalid async component load result: ${E}`);
      return c = E, E;
    }));
  };
  return /* @__PURE__ */ ko({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const y = Ne;
      if (c)
        return () => gs(c, y);
      const E = (v) => {
        a = null, fn(
          v,
          y,
          13,
          !i
        );
      };
      if (o && y.suspense || Li)
        return d().then((v) => () => gs(v, y)).catch((v) => (E(v), () => i ? me(i, {
          error: v
        }) : null));
      const O = vn(!1), $ = vn(), R = vn(!!r);
      return r && setTimeout(() => {
        R.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!O.value && !$.value) {
          const v = new Error(
            `Async component timed out after ${s}ms.`
          );
          E(v), $.value = v;
        }
      }, s), d().then(() => {
        O.value = !0, y.parent && ti(y.parent.vnode) && (y.parent.effect.dirty = !0, Pi(y.parent.update));
      }).catch((v) => {
        E(v), $.value = v;
      }), () => {
        if (O.value && c)
          return gs(c, y);
        if ($.value && i)
          return me(i, {
            error: $.value
          });
        if (n && !R.value)
          return me(n);
      };
    }
  });
}
function gs(e, t) {
  const { ref: n, props: i, children: r, ce: s } = t.vnode, o = me(e, i, r);
  return o.ref = n, o.ce = s, delete t.vnode.ce, o;
}
const ti = (e) => e.type.__isKeepAlive, md = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = St(), i = n.ctx;
    if (!i.renderer)
      return () => {
        const v = t.default && t.default();
        return v && v.length === 1 ? v[0] : v;
      };
    const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
    let o = null;
    h.NODE_ENV !== "production" && (n.__v_cache = r);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: f,
        o: { createElement: u }
      }
    } = i, d = u("div");
    i.activate = (v, g, b, N, x) => {
      const T = v.component;
      c(v, g, b, 0, l), a(
        T.vnode,
        v,
        g,
        b,
        T,
        l,
        N,
        v.slotScopeIds,
        x
      ), Ve(() => {
        T.isDeactivated = !1, T.a && Gt(T.a);
        const V = v.props && v.props.onVnodeMounted;
        V && Ge(V, T.parent, v);
      }, l), h.NODE_ENV !== "production" && Vs(T);
    }, i.deactivate = (v) => {
      const g = v.component;
      Sr(g.m), Sr(g.a), c(v, d, null, 1, l), Ve(() => {
        g.da && Gt(g.da);
        const b = v.props && v.props.onVnodeUnmounted;
        b && Ge(b, g.parent, v), g.isDeactivated = !0;
      }, l), h.NODE_ENV !== "production" && Vs(g);
    };
    function y(v) {
      ys(v), f(v, n, l, !0);
    }
    function E(v) {
      r.forEach((g, b) => {
        const N = ki(g.type);
        N && (!v || !v(N)) && O(b);
      });
    }
    function O(v) {
      const g = r.get(v);
      g && (!o || !ct(g, o)) ? y(g) : o && ys(o), r.delete(v), s.delete(v);
    }
    Zr(
      () => [e.include, e.exclude],
      ([v, g]) => {
        v && E((b) => ci(v, b)), g && E((b) => !ci(g, b));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let $ = null;
    const R = () => {
      $ != null && ($s(n.subTree.type) ? Ve(() => {
        r.set($, Xi(n.subTree));
      }, n.subTree.suspense) : r.set($, Xi(n.subTree)));
    };
    return Xr(R), xo(R), Vo(() => {
      r.forEach((v) => {
        const { subTree: g, suspense: b } = n, N = Xi(g);
        if (v.type === N.type && v.key === N.key) {
          ys(N);
          const x = N.component.da;
          x && Ve(x, b);
          return;
        }
        y(v);
      });
    }), () => {
      if ($ = null, !t.default)
        return null;
      const v = t.default(), g = v[0];
      if (v.length > 1)
        return h.NODE_ENV !== "production" && k("KeepAlive should contain exactly one component child."), o = null, v;
      if (!Pt(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return o = null, g;
      let b = Xi(g);
      if (b.type === ye)
        return o = null, b;
      const N = b.type, x = ki(
        On(b) ? b.type.__asyncResolved || {} : N
      ), { include: T, exclude: V, max: _ } = e;
      if (T && (!x || !ci(T, x)) || V && x && ci(V, x))
        return o = b, g;
      const C = b.key == null ? N : b.key, P = r.get(C);
      return b.el && (b = ot(b), g.shapeFlag & 128 && (g.ssContent = b)), $ = C, P ? (b.el = P.el, b.component = P.component, b.transition && ln(b, b.transition), b.shapeFlag |= 512, s.delete(C), s.add(C)) : (s.add(C), _ && s.size > parseInt(_, 10) && O(s.values().next().value)), b.shapeFlag |= 256, o = b, $s(g.type) ? g : b;
    };
  }
}, gd = md;
function ci(e, t) {
  return U(e) ? e.some((n) => ci(n, t)) : Y(e) ? e.split(",").includes(t) : Pf(e) ? e.test(t) : !1;
}
function yd(e, t) {
  Oc(e, "a", t);
}
function Ed(e, t) {
  Oc(e, "da", t);
}
function Oc(e, t, n = Ne) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Yr(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ti(r.parent.vnode) && bd(i, t, n, r), r = r.parent;
  }
}
function bd(e, t, n, i) {
  const r = Yr(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Io(() => {
    so(i[t], r);
  }, n);
}
function ys(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Xi(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Yr(e, t, n = Ne, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      cn();
      const l = Di(n), a = rt(t, n, e, o);
      return l(), un(), a;
    });
    return i ? r.unshift(s) : r.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const r = yt(qr[e].replace(/ hook$/, ""));
    k(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const $t = (e) => (t, n = Ne) => {
  (!Li || e === "sp") && Yr(e, (...i) => t(...i), n);
}, Sc = $t("bm"), Xr = $t("m"), _d = $t("bu"), xo = $t("u"), Vo = $t("bum"), Io = $t("um"), Nd = $t("sp"), vd = $t(
  "rtg"
), wd = $t(
  "rtc"
);
function Od(e, t = Ne) {
  Yr("ec", e, t);
}
const Nr = "components", Sd = "directives";
function Cd(e, t) {
  return Ro(Nr, e, !0, t) || e;
}
const Ao = Symbol.for("v-ndc");
function Td(e) {
  return Y(e) ? Ro(Nr, e, !1) || e : e || Ao;
}
function Dd(e) {
  return Ro(Sd, e);
}
function Ro(e, t, n = !0, i = !1) {
  const r = be || Ne;
  if (r) {
    const s = r.type;
    if (e === Nr) {
      const l = ki(
        s,
        !1
      );
      if (l && (l === t || l === de(t) || l === vt(de(t))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vl(r[e] || s[e], t) || // global registration
      Vl(r.appContext[e], t)
    );
    if (!o && i)
      return s;
    if (h.NODE_ENV !== "production" && n && !o) {
      const l = e === Nr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      k(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return o;
  } else h.NODE_ENV !== "production" && k(
    `resolve${vt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Vl(e, t) {
  return e && (e[t] || e[de(t)] || e[vt(de(t))]);
}
function kd(e, t, n, i) {
  let r;
  const s = n && n[i];
  if (U(e) || Y(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, s && s[o]);
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && k(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s && s[o]);
  } else if (le(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, l) => t(o, l, void 0, s && s[l])
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const c = o[l];
        r[l] = t(e[c], c, l, s && s[l]);
      }
    }
  else
    r = [];
  return n && (n[i] = r), r;
}
function xd(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (U(i))
      for (let r = 0; r < i.length; r++)
        e[i[r].name] = i[r].fn;
    else i && (e[i.name] = i.key ? (...r) => {
      const s = i.fn(...r);
      return s && (s.key = i.key), s;
    } : i.fn);
  }
  return e;
}
function Vd(e, t, n = {}, i, r) {
  if (be.isCE || be.parent && On(be.parent) && be.parent.isCE)
    return t !== "default" && (n.name = t), me("slot", n, i && i());
  let s = e[t];
  h.NODE_ENV !== "production" && s && s.length > 1 && (k(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), ns();
  const o = s && Mo(s(n)), l = Lo(
    Ce,
    {
      key: (n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && i ? "_fb" : "")
    },
    o || (i ? i() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Mo(e) {
  return e.some((t) => Pt(t) ? !(t.type === ye || t.type === Ce && !Mo(t.children)) : !0) ? e : null;
}
function Id(e, t) {
  const n = {};
  if (h.NODE_ENV !== "production" && !le(e))
    return k("v-on with no argument expects an object value."), n;
  for (const i in e)
    n[t && /[A-Z]/.test(i) ? `on:${i}` : yt(i)] = e[i];
  return n;
}
const Is = (e) => e ? cu(e) ? Fi(e) : Is(e.parent) : null, Sn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? ut(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? ut(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? ut(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? ut(e.refs) : e.refs,
    $parent: (e) => Is(e.parent),
    $root: (e) => Is(e.root),
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Pi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zr.bind(e.proxy)),
    $watch: (e) => Ee
  })
), Cc = (e) => e === "_" || e === "$", Es = (e, t) => e !== ie && !e.__isScriptSetup && ne(e, t), hi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: l, appContext: a } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const y = o[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return i[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Es(i, t))
          return o[t] = 1, i[t];
        if (r !== ie && ne(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && ne(c, t)
        )
          return o[t] = 3, s[t];
        if (n !== ie && ne(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const f = Sn[t];
    let u, d;
    if (f)
      return t === "$attrs" ? (Pe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Cr()) : h.NODE_ENV !== "production" && t === "$slots" && Pe(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ie && ne(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ne(d, t)
    )
      return d[t];
    h.NODE_ENV !== "production" && be && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ie && Cc(t[0]) && ne(r, t) ? k(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === be && k(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return Es(r, t) ? (r[t] = n, !0) : h.NODE_ENV !== "production" && r.__isScriptSetup && ne(r, t) ? (k(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== ie && ne(i, t) ? (i[t] = n, !0) : ne(e.props, t) ? (h.NODE_ENV !== "production" && k(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && k(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let l;
    return !!n[o] || e !== ie && ne(e, o) || Es(t, o) || (l = s[0]) && ne(l, o) || ne(i, o) || ne(Sn, o) || ne(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (hi.ownKeys = (e) => (k(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Ad = /* @__PURE__ */ re(
  {},
  hi,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return hi.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !Hf(t);
      return h.NODE_ENV !== "production" && !n && hi.has(e, t) && k(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function Rd(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Sn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Sn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ee
    });
  }), t;
}
function Md(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: Ee
    });
  });
}
function Pd(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(X(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Cc(i[0])) {
        k(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: Ee
      });
    }
  });
}
const In = (e) => k(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function $d() {
  return h.NODE_ENV !== "production" && In("defineProps"), null;
}
function Ld() {
  return h.NODE_ENV !== "production" && In("defineEmits"), null;
}
function Fd(e) {
  h.NODE_ENV !== "production" && In("defineExpose");
}
function Bd(e) {
  h.NODE_ENV !== "production" && In("defineOptions");
}
function Hd() {
  return h.NODE_ENV !== "production" && In("defineSlots"), null;
}
function jd() {
  h.NODE_ENV !== "production" && In("defineModel");
}
function Ud(e, t) {
  return h.NODE_ENV !== "production" && In("withDefaults"), null;
}
function Kd() {
  return Tc().slots;
}
function Wd() {
  return Tc().attrs;
}
function Tc() {
  const e = St();
  return h.NODE_ENV !== "production" && !e && k("useContext() called without active instance."), e.setupContext || (e.setupContext = du(e));
}
function Ci(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qd(e, t) {
  const n = Ci(e);
  for (const i in t) {
    if (i.startsWith("__skip")) continue;
    let r = n[i];
    r ? U(r) || Q(r) ? r = n[i] = { type: r, default: t[i] } : r.default = t[i] : r === null ? r = n[i] = { default: t[i] } : h.NODE_ENV !== "production" && k(`props default key "${i}" has no corresponding declaration.`), r && t[`__skip_${i}`] && (r.skipFactory = !0);
  }
  return n;
}
function zd(e, t) {
  return !e || !t ? e || t : U(e) && U(t) ? e.concat(t) : re({}, Ci(e), Ci(t));
}
function Gd(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) || Object.defineProperty(n, i, {
      enumerable: !0,
      get: () => e[i]
    });
  return n;
}
function Jd(e) {
  const t = St();
  h.NODE_ENV !== "production" && !t && k(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return js(), oo(n) && (n = n.catch((i) => {
    throw Di(t), i;
  })), [n, () => Di(t)];
}
function Yd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !i ? a = t : (a = {}, r.length && r.forEach(
    (c) => vr(a, c, o, !0)
  ), vr(a, t, o)), le(t) && s.set(t, a), a;
}
function vr(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && vr(e, s, n, !0), r && r.forEach(
    (o) => vr(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      h.NODE_ENV !== "production" && k(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Xd[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xd = {
  data: Il,
  props: Rl,
  emits: Rl,
  // objects
  methods: ui,
  computed: ui,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: ui,
  directives: ui,
  // watch
  watch: Qd,
  // provide / inject
  provide: Il,
  inject: Zd
};
function Il(e, t) {
  return t ? e ? function() {
    return re(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zd(e, t) {
  return ui(Al(e), Al(t));
}
function Al(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ui(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rl(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    Ci(e),
    Ci(t ?? {})
  ) : t;
}
function Qd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ue(e[i], t[i]);
  return n;
}
function Dc() {
  return {
    app: null,
    config: {
      isNativeTag: or,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let eh = 0;
function th(e, t) {
  return function(i, r = null) {
    Q(i) || (i = re({}, i)), r != null && !le(r) && (h.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), r = null);
    const s = Dc(), o = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const a = s.app = {
      _uid: eh++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: qs,
      get config() {
        return s.config;
      },
      set config(c) {
        h.NODE_ENV !== "production" && k(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...f) {
        return o.has(c) ? h.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : c && Q(c.install) ? (o.add(c), c.install(a, ...f)) : Q(c) ? (o.add(c), c(a, ...f)) : h.NODE_ENV !== "production" && k(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(c) {
        return h.NODE_ENV !== "production" && k("Mixins are only available in builds supporting Options API"), a;
      },
      component(c, f) {
        return h.NODE_ENV !== "production" && Us(c, s.config), f ? (h.NODE_ENV !== "production" && s.components[c] && k(`Component "${c}" has already been registered in target app.`), s.components[c] = f, a) : s.components[c];
      },
      directive(c, f) {
        return h.NODE_ENV !== "production" && _c(c), f ? (h.NODE_ENV !== "production" && s.directives[c] && k(`Directive "${c}" has already been registered in target app.`), s.directives[c] = f, a) : s.directives[c];
      },
      mount(c, f, u) {
        if (l)
          h.NODE_ENV !== "production" && k(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && c.__vue_app__ && k(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const d = me(i, r);
          return d.appContext = s, u === !0 ? u = "svg" : u === !1 && (u = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            e(
              ot(d),
              c,
              u
            );
          }), f && t ? t(d, c) : e(d, c, u), l = !0, a._container = c, c.__vue_app__ = a, h.NODE_ENV !== "production" && (a._instance = d.component, nd(a, qs)), Fi(d.component);
        }
      },
      unmount() {
        l ? (e(null, a._container), h.NODE_ENV !== "production" && (a._instance = null, id(a)), delete a._container.__vue_app__) : h.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(c, f) {
        return h.NODE_ENV !== "production" && c in s.provides && k(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), s.provides[c] = f, a;
      },
      runWithContext(c) {
        const f = Cn;
        Cn = a;
        try {
          return c();
        } finally {
          Cn = f;
        }
      }
    };
    return a;
  };
}
let Cn = null;
function nh(e, t) {
  if (!Ne)
    h.NODE_ENV !== "production" && k("provide() can only be used inside setup().");
  else {
    let n = Ne.provides;
    const i = Ne.parent && Ne.parent.provides;
    i === n && (n = Ne.provides = Object.create(i)), n[e] = t;
  }
}
function kc(e, t, n = !1) {
  const i = Ne || be;
  if (i || Cn) {
    const r = Cn ? Cn._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(i && i.proxy) : t;
    h.NODE_ENV !== "production" && k(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
function ih() {
  return !!(Ne || be || Cn);
}
const xc = {}, Vc = () => Object.create(xc), Ic = (e) => Object.getPrototypeOf(e) === xc;
function rh(e, t, n, i = !1) {
  const r = {}, s = Vc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ac(e, t, r, s);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  h.NODE_ENV !== "production" && Rc(t || {}, r, e), n ? e.props = i ? r : lc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function sh(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function oh(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = X(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && sh(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let d = f[u];
        if (es(e.emitsOptions, d))
          continue;
        const y = t[d];
        if (a)
          if (ne(s, d))
            y !== s[d] && (s[d] = y, c = !0);
          else {
            const E = de(d);
            r[E] = As(
              a,
              l,
              E,
              y,
              e,
              !1
            );
          }
        else
          y !== s[d] && (s[d] = y, c = !0);
      }
    }
  } else {
    Ac(e, t, r, s) && (c = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !ne(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Me(u)) === u || !ne(t, f))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[u] = As(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (s !== l)
      for (const u in s)
        (!t || !ne(t, u)) && (delete s[u], c = !0);
  }
  c && bt(e.attrs, "set", ""), h.NODE_ENV !== "production" && Rc(t || {}, r, e);
}
function Ac(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Zt(a))
        continue;
      const c = t[a];
      let f;
      r && ne(r, f = de(a)) ? !s || !s.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : es(e.emitsOptions, a) || (!(a in i) || c !== i[a]) && (i[a] = c, o = !0);
    }
  if (s) {
    const a = X(n), c = l || ie;
    for (let f = 0; f < s.length; f++) {
      const u = s[f];
      n[u] = As(
        r,
        a,
        u,
        c[u],
        e,
        !ne(c, u)
      );
    }
  }
  return o;
}
function As(e, t, n, i, r, s) {
  const o = e[n];
  if (o != null) {
    const l = ne(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Q(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const f = Di(r);
          i = c[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        i = a;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Me(n)) && (i = !0));
  }
  return i;
}
function lh(e, t, n = !1) {
  const i = t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, o = {}, l = [];
  if (!s && !!1)
    return le(e) && i.set(e, $n), $n;
  if (U(s))
    for (let f = 0; f < s.length; f++) {
      h.NODE_ENV !== "production" && !Y(s[f]) && k("props must be strings when using array syntax.", s[f]);
      const u = de(s[f]);
      Ml(u) && (o[u] = ie);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !le(s) && k("invalid props options", s);
    for (const f in s) {
      const u = de(f);
      if (Ml(u)) {
        const d = s[f], y = o[u] = U(d) || Q(d) ? { type: d } : re({}, d), E = y.type;
        let O = !1, $ = !0;
        if (U(E))
          for (let R = 0; R < E.length; ++R) {
            const v = E[R], g = Q(v) && v.name;
            if (g === "Boolean") {
              O = !0;
              break;
            } else g === "String" && ($ = !1);
          }
        else
          O = Q(E) && E.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = O, y[
          1
          /* shouldCastTrue */
        ] = $, (O || ne(y, "default")) && l.push(u);
      }
    }
  }
  const c = [o, l];
  return le(e) && i.set(e, c), c;
}
function Ml(e) {
  return e[0] !== "$" && !Zt(e) ? !0 : (h.NODE_ENV !== "production" && k(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ah(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Rc(e, t, n) {
  const i = X(t), r = n.propsOptions[0];
  for (const s in r) {
    let o = r[s];
    o != null && ch(
      s,
      i[s],
      o,
      h.NODE_ENV !== "production" ? ut(i) : i,
      !ne(e, s) && !ne(e, Me(s))
    );
  }
}
function ch(e, t, n, i, r) {
  const { type: s, required: o, validator: l, skipCheck: a } = n;
  if (o && r) {
    k('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (s != null && s !== !0 && !a) {
      let c = !1;
      const f = U(s) ? s : [s], u = [];
      for (let d = 0; d < f.length && !c; d++) {
        const { valid: y, expectedType: E } = fh(t, f[d]);
        u.push(E || ""), c = y;
      }
      if (!c) {
        k(ph(e, t, u));
        return;
      }
    }
    l && !l(t, i) && k('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const uh = /* @__PURE__ */ Ie(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function fh(e, t) {
  let n;
  const i = ah(t);
  if (uh(i)) {
    const r = typeof e;
    n = r === i.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else i === "Object" ? n = le(e) : i === "Array" ? n = U(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function ph(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(vt).join(" | ")}`;
  const r = n[0], s = lo(t), o = Pl(t, r), l = Pl(t, s);
  return n.length === 1 && $l(r) && !dh(r, s) && (i += ` with value ${o}`), i += `, got ${s} `, $l(s) && (i += `with value ${l}.`), i;
}
function Pl(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $l(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function dh(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Mc = (e) => e[0] === "_" || e === "$stable", Po = (e) => U(e) ? e.map(We) : [We(e)], hh = (e, t, n) => {
  if (t._n)
    return t;
  const i = Co((...r) => (h.NODE_ENV !== "production" && Ne && (!n || n.root === Ne.root) && k(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Po(t(...r))), n);
  return i._c = !1, i;
}, Pc = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Mc(r)) continue;
    const s = e[r];
    if (Q(s))
      t[r] = hh(r, s, i);
    else if (s != null) {
      h.NODE_ENV !== "production" && k(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = Po(s);
      t[r] = () => o;
    }
  }
}, $c = (e, t) => {
  h.NODE_ENV !== "production" && !ti(e.vnode) && k(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Po(t);
  e.slots.default = () => n;
}, Rs = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, mh = (e, t, n) => {
  const i = e.slots = Vc();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Rs(i, t, n), n && Hn(i, "_", r, !0)) : Pc(t, i);
  } else t && $c(e, t);
}, gh = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, o = ie;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && nn ? (Rs(r, t, n), bt(e, "set", "$slots")) : n && l === 1 ? s = !1 : Rs(r, t, n) : (s = !t.$stable, Pc(t, r)), o = t;
  } else t && ($c(e, t), o = { default: 1 });
  if (s)
    for (const l in r)
      !Mc(l) && o[l] == null && delete r[l];
};
function wr(e, t, n, i, r = !1) {
  if (U(e)) {
    e.forEach(
      (d, y) => wr(
        d,
        t && (U(t) ? t[y] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (On(i) && !r)
    return;
  const s = i.shapeFlag & 4 ? Fi(i.component) : i.el, o = r ? null : s, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    k(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, f = l.refs === ie ? l.refs = {} : l.refs, u = l.setupState;
  if (c != null && c !== a && (Y(c) ? (f[c] = null, ne(u, c) && (u[c] = null)) : ke(c) && (c.value = null)), Q(a))
    Nt(a, l, 12, [o, f]);
  else {
    const d = Y(a), y = ke(a);
    if (d || y) {
      const E = () => {
        if (e.f) {
          const O = d ? ne(u, a) ? u[a] : f[a] : a.value;
          r ? U(O) && so(O, s) : U(O) ? O.includes(s) || O.push(s) : d ? (f[a] = [s], ne(u, a) && (u[a] = f[a])) : (a.value = [s], e.k && (f[e.k] = a.value));
        } else d ? (f[a] = o, ne(u, a) && (u[a] = o)) : y ? (a.value = o, e.k && (f[e.k] = o)) : h.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (E.id = -1, Ve(E, n)) : E();
    } else h.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
  }
}
const Lc = Symbol("_vte"), yh = (e) => e.__isTeleport, Tn = (e) => e && (e.disabled || e.disabled === ""), Ll = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ms = (e, t) => {
  const n = e && e.to;
  if (Y(n))
    if (t) {
      const i = t(n);
      return h.NODE_ENV !== "production" && !i && !Tn(e) && k(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), i;
    } else
      return h.NODE_ENV !== "production" && k(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return h.NODE_ENV !== "production" && !n && !Tn(e) && k(`Invalid Teleport target: ${n}`), n;
}, Eh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, r, s, o, l, a, c) {
    const {
      mc: f,
      pc: u,
      pbc: d,
      o: { insert: y, querySelector: E, createText: O, createComment: $ }
    } = c, R = Tn(t.props);
    let { shapeFlag: v, children: g, dynamicChildren: b } = t;
    if (h.NODE_ENV !== "production" && nn && (a = !1, b = null), e == null) {
      const N = t.el = h.NODE_ENV !== "production" ? $("teleport start") : O(""), x = t.anchor = h.NODE_ENV !== "production" ? $("teleport end") : O("");
      y(N, n, i), y(x, n, i);
      const T = t.target = Ms(t.props, E), V = Bc(T, t, O, y);
      T ? o === "svg" || Ll(T) ? o = "svg" : (o === "mathml" || Fl(T)) && (o = "mathml") : h.NODE_ENV !== "production" && !R && k("Invalid Teleport target on mount:", T, `(${typeof T})`);
      const _ = (C, P) => {
        v & 16 && f(
          g,
          C,
          P,
          r,
          s,
          o,
          l,
          a
        );
      };
      R ? _(n, x) : T && _(T, V);
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const N = t.anchor = e.anchor, x = t.target = e.target, T = t.targetAnchor = e.targetAnchor, V = Tn(e.props), _ = V ? n : x, C = V ? N : T;
      if (o === "svg" || Ll(x) ? o = "svg" : (o === "mathml" || Fl(x)) && (o = "mathml"), b ? (d(
        e.dynamicChildren,
        b,
        _,
        r,
        s,
        o,
        l
      ), mi(e, t, !0)) : a || u(
        e,
        t,
        _,
        C,
        r,
        s,
        o,
        l,
        !1
      ), R)
        V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Zi(
          t,
          n,
          N,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = t.target = Ms(
          t.props,
          E
        );
        P ? Zi(
          t,
          P,
          null,
          c,
          0
        ) : h.NODE_ENV !== "production" && k(
          "Invalid Teleport target on update:",
          x,
          `(${typeof x})`
        );
      } else V && Zi(
        t,
        x,
        T,
        c,
        1
      );
    }
    Fc(t);
  },
  remove(e, t, n, { um: i, o: { remove: r } }, s) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: f,
      target: u,
      props: d
    } = e;
    if (u && (r(c), r(f)), s && r(a), o & 16) {
      const y = s || !Tn(d);
      for (let E = 0; E < l.length; E++) {
        const O = l[E];
        i(
          O,
          t,
          n,
          y,
          !!O.dynamicChildren
        );
      }
    }
  },
  move: Zi,
  hydrate: bh
};
function Zi(e, t, n, { o: { insert: i }, m: r }, s = 2) {
  s === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: a, children: c, props: f } = e, u = s === 2;
  if (u && i(o, t, n), (!u || Tn(f)) && a & 16)
    for (let d = 0; d < c.length; d++)
      r(
        c[d],
        t,
        n,
        2
      );
  u && i(l, t, n);
}
function bh(e, t, n, i, r, s, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: c, createText: f }
}, u) {
  const d = t.target = Ms(
    t.props,
    a
  );
  if (d) {
    const y = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Tn(t.props))
        t.anchor = u(
          o(e),
          t,
          l(e),
          n,
          i,
          r,
          s
        ), t.targetStart = y, t.targetAnchor = y && o(y);
      else {
        t.anchor = o(e);
        let E = y;
        for (; E; ) {
          if (E && E.nodeType === 8) {
            if (E.data === "teleport start anchor")
              t.targetStart = E;
            else if (E.data === "teleport anchor") {
              t.targetAnchor = E, d._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          E = o(E);
        }
        t.targetAnchor || Bc(d, t, f, c), u(
          y && o(y),
          t,
          d,
          n,
          i,
          r,
          s
        );
      }
    Fc(t);
  }
  return t.anchor && o(t.anchor);
}
const _h = Eh;
function Fc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
function Bc(e, t, n, i) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Lc] = s, e && (i(r, e), i(s, e)), s;
}
let Bl = !1;
const pn = () => {
  Bl || (console.error("Hydration completed but contains mismatches."), Bl = !0);
}, Nh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", vh = (e) => e.namespaceURI.includes("MathML"), Qi = (e) => {
  if (Nh(e)) return "svg";
  if (vh(e)) return "mathml";
}, ri = (e) => e.nodeType === 8;
function wh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: i,
      createText: r,
      nextSibling: s,
      parentNode: o,
      remove: l,
      insert: a,
      createComment: c
    }
  } = e, f = (g, b) => {
    if (!b.hasChildNodes()) {
      h.NODE_ENV !== "production" && k(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, b), br(), b._vnode = g;
      return;
    }
    u(b.firstChild, g, null, null, null), br(), b._vnode = g;
  }, u = (g, b, N, x, T, V = !1) => {
    V = V || !!b.dynamicChildren;
    const _ = ri(g) && g.data === "[", C = () => O(
      g,
      b,
      N,
      x,
      T,
      _
    ), { type: P, ref: S, shapeFlag: j, patchFlag: G } = b;
    let J = g.nodeType;
    b.el = g, h.NODE_ENV !== "production" && (Hn(g, "__vnode", b, !0), Hn(g, "__vueParentComponent", N, !0)), G === -2 && (V = !1, b.dynamicChildren = null);
    let W = null;
    switch (P) {
      case At:
        J !== 3 ? b.children === "" ? (a(b.el = r(""), o(g), g), W = g) : W = C() : (g.data !== b.children && (h.NODE_ENV !== "production" && k(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(b.children)}`
        ), pn(), g.data = b.children), W = s(g));
        break;
      case ye:
        v(g) ? (W = s(g), R(
          b.el = g.content.firstChild,
          g,
          N
        )) : J !== 8 || _ ? W = C() : W = s(g);
        break;
      case rn:
        if (_ && (g = s(g), J = g.nodeType), J === 1 || J === 3) {
          W = g;
          const he = !b.children.length;
          for (let ae = 0; ae < b.staticCount; ae++)
            he && (b.children += W.nodeType === 1 ? W.outerHTML : W.data), ae === b.staticCount - 1 && (b.anchor = W), W = s(W);
          return _ ? s(W) : W;
        } else
          C();
        break;
      case Ce:
        _ ? W = E(
          g,
          b,
          N,
          x,
          T,
          V
        ) : W = C();
        break;
      default:
        if (j & 1)
          (J !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !v(g) ? W = C() : W = d(
            g,
            b,
            N,
            x,
            T,
            V
          );
        else if (j & 6) {
          b.slotScopeIds = T;
          const he = o(g);
          if (_ ? W = $(g) : ri(g) && g.data === "teleport start" ? W = $(g, g.data, "teleport end") : W = s(g), t(
            b,
            he,
            null,
            N,
            x,
            Qi(he),
            V
          ), On(b)) {
            let ae;
            _ ? (ae = me(Ce), ae.anchor = W ? W.previousSibling : he.lastChild) : ae = g.nodeType === 3 ? Bo("") : me("div"), ae.el = g, b.component.subTree = ae;
          }
        } else j & 64 ? J !== 8 ? W = C() : W = b.type.hydrate(
          g,
          b,
          N,
          x,
          T,
          V,
          e,
          y
        ) : j & 128 ? W = b.type.hydrate(
          g,
          b,
          N,
          x,
          Qi(o(g)),
          T,
          V,
          e,
          u
        ) : h.NODE_ENV !== "production" && k("Invalid HostVNode type:", P, `(${typeof P})`);
    }
    return S != null && wr(S, null, x, b), W;
  }, d = (g, b, N, x, T, V) => {
    V = V || !!b.dynamicChildren;
    const { type: _, props: C, patchFlag: P, shapeFlag: S, dirs: j, transition: G } = b, J = _ === "input" || _ === "option";
    if (h.NODE_ENV !== "production" || J || P !== -1) {
      j && gt(b, null, N, "created");
      let W = !1;
      if (v(g)) {
        W = Wc(x, G) && N && N.vnode.props && N.vnode.props.appear;
        const ae = g.content.firstChild;
        W && G.beforeEnter(ae), R(ae, g, N), b.el = g = ae;
      }
      if (S & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let ae = y(
          g.firstChild,
          b,
          g,
          N,
          x,
          T,
          V
        ), Oe = !1;
        for (; ae; ) {
          h.NODE_ENV !== "production" && !Oe && (k(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Oe = !0), pn();
          const dt = ae;
          ae = ae.nextSibling, l(dt);
        }
      } else S & 8 && g.textContent !== b.children && (h.NODE_ENV !== "production" && k(
        "Hydration text content mismatch on",
        g,
        `
  - rendered on server: ${g.textContent}
  - expected on client: ${b.children}`
      ), pn(), g.textContent = b.children);
      if (C) {
        if (h.NODE_ENV !== "production" || J || !V || P & 48) {
          const ae = g.tagName.includes("-");
          for (const Oe in C)
            h.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(j && j.some((dt) => dt.dir.created)) && Oh(g, Oe, C[Oe], b, N) && pn(), (J && (Oe.endsWith("value") || Oe === "indeterminate") || Mt(Oe) && !Zt(Oe) || // force hydrate v-bind with .prop modifiers
            Oe[0] === "." || ae) && i(g, Oe, null, C[Oe], void 0, N);
        } else if (C.onClick)
          i(
            g,
            "onClick",
            null,
            C.onClick,
            void 0,
            N
          );
        else if (P & 4 && tn(C.style))
          for (const ae in C.style) C.style[ae];
      }
      let he;
      (he = C && C.onVnodeBeforeMount) && Ge(he, N, b), j && gt(b, null, N, "beforeMount"), ((he = C && C.onVnodeMounted) || j || W) && eu(() => {
        he && Ge(he, N, b), W && G.enter(g), j && gt(b, null, N, "mounted");
      }, x);
    }
    return g.nextSibling;
  }, y = (g, b, N, x, T, V, _) => {
    _ = _ || !!b.dynamicChildren;
    const C = b.children, P = C.length;
    let S = !1;
    for (let j = 0; j < P; j++) {
      const G = _ ? C[j] : C[j] = We(C[j]), J = G.type === At;
      if (g) {
        if (J && !_) {
          let W = C[j + 1];
          W && (W = We(W)).type === At && (a(
            r(
              g.data.slice(G.children.length)
            ),
            N,
            s(g)
          ), g.data = G.children);
        }
        g = u(
          g,
          G,
          x,
          T,
          V,
          _
        );
      } else J && !G.children ? a(G.el = r(""), N) : (h.NODE_ENV !== "production" && !S && (k(
        "Hydration children mismatch on",
        N,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), S = !0), pn(), n(
        null,
        G,
        N,
        null,
        x,
        T,
        Qi(N),
        V
      ));
    }
    return g;
  }, E = (g, b, N, x, T, V) => {
    const { slotScopeIds: _ } = b;
    _ && (T = T ? T.concat(_) : _);
    const C = o(g), P = y(
      s(g),
      b,
      C,
      N,
      x,
      T,
      V
    );
    return P && ri(P) && P.data === "]" ? s(b.anchor = P) : (pn(), a(b.anchor = c("]"), C, P), P);
  }, O = (g, b, N, x, T, V) => {
    if (h.NODE_ENV !== "production" && k(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : ri(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      b.type
    ), pn(), b.el = null, V) {
      const P = $(g);
      for (; ; ) {
        const S = s(g);
        if (S && S !== P)
          l(S);
        else
          break;
      }
    }
    const _ = s(g), C = o(g);
    return l(g), n(
      null,
      b,
      C,
      _,
      N,
      x,
      Qi(C),
      T
    ), _;
  }, $ = (g, b = "[", N = "]") => {
    let x = 0;
    for (; g; )
      if (g = s(g), g && ri(g) && (g.data === b && x++, g.data === N)) {
        if (x === 0)
          return s(g);
        x--;
      }
    return g;
  }, R = (g, b, N) => {
    const x = b.parentNode;
    x && x.replaceChild(g, b);
    let T = N;
    for (; T; )
      T.vnode.el === b && (T.vnode.el = T.subTree.el = g), T = T.parent;
  }, v = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
  return [f, u];
}
function Oh(e, t, n, i, r) {
  let s, o, l, a;
  if (t === "class")
    l = e.getAttribute("class"), a = Qn(n), Sh(Hl(l || ""), Hl(a)) || (s = o = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = Y(n) ? n : qf(Zn(n));
    const c = jl(l), f = jl(a);
    if (i.dirs)
      for (const { dir: u, value: d } of i.dirs)
        u.name === "show" && !d && f.set("display", "none");
    r && Hc(r, i, f), Ch(c, f) || (s = o = "style");
  } else (e instanceof SVGElement && tp(t) || e instanceof HTMLElement && (_l(t) || ep(t))) && (_l(t) ? (l = e.hasAttribute(t), a = uo(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = np(n) ? String(n) : !1), l !== a && (s = "attribute", o = t));
  if (s) {
    const c = (d) => d === !1 ? "(not rendered)" : `${o}="${d}"`, f = `Hydration ${s} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return k(f, e, u), !0;
  }
  return !1;
}
function Hl(e) {
  return new Set(e.trim().split(/\s+/));
}
function Sh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function jl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [i, r] = n.split(":");
    i = i.trim(), r = r && r.trim(), i && r && t.set(i, r);
  }
  return t;
}
function Ch(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, i] of e)
    if (i !== t.get(n))
      return !1;
  return !0;
}
function Hc(e, t, n) {
  const i = e.subTree;
  if (e.getCssVars && (t === i || i && i.type === Ce && i.children.includes(t))) {
    const r = e.getCssVars();
    for (const s in r)
      n.set(`--${s}`, String(r[s]));
  }
  t === i && e.parent && Hc(e.parent, e.vnode, n);
}
let si, Jt;
function Tt(e, t) {
  e.appContext.config.performance && Or() && Jt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && od(e, t, Or() ? Jt.now() : Date.now());
}
function Dt(e, t) {
  if (e.appContext.config.performance && Or()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    Jt.mark(i), Jt.measure(
      `<${is(e, e.type)}> ${t}`,
      n,
      i
    ), Jt.clearMarks(n), Jt.clearMarks(i);
  }
  h.NODE_ENV !== "production" && ld(e, t, Or() ? Jt.now() : Date.now());
}
function Or() {
  return si !== void 0 || (typeof window < "u" && window.performance ? (si = !0, Jt = window.performance) : si = !1), si;
}
function Th() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ve = eu;
function jc(e) {
  return Kc(e);
}
function Uc(e) {
  return Kc(e, wh);
}
function Kc(e, t) {
  Th();
  const n = co();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Oo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: u,
    nextSibling: d,
    setScopeId: y = Ee,
    insertStaticContent: E
  } = e, O = (p, m, w, A = null, D = null, M = null, B = void 0, L = null, F = h.NODE_ENV !== "production" && nn ? !1 : !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !ct(p, m) && (A = Ki(p), Lt(p, D, M, !0), p = null), m.patchFlag === -2 && (F = !1, m.dynamicChildren = null);
    const { type: I, ref: K, shapeFlag: z } = m;
    switch (I) {
      case At:
        $(p, m, w, A);
        break;
      case ye:
        R(p, m, w, A);
        break;
      case rn:
        p == null ? v(m, w, A, B) : h.NODE_ENV !== "production" && g(p, m, w, B);
        break;
      case Ce:
        j(
          p,
          m,
          w,
          A,
          D,
          M,
          B,
          L,
          F
        );
        break;
      default:
        z & 1 ? x(
          p,
          m,
          w,
          A,
          D,
          M,
          B,
          L,
          F
        ) : z & 6 ? G(
          p,
          m,
          w,
          A,
          D,
          M,
          B,
          L,
          F
        ) : z & 64 || z & 128 ? I.process(
          p,
          m,
          w,
          A,
          D,
          M,
          B,
          L,
          F,
          An
        ) : h.NODE_ENV !== "production" && k("Invalid VNode type:", I, `(${typeof I})`);
    }
    K != null && D && wr(K, p && p.ref, M, m || p, !m);
  }, $ = (p, m, w, A) => {
    if (p == null)
      i(
        m.el = l(m.children),
        w,
        A
      );
    else {
      const D = m.el = p.el;
      m.children !== p.children && c(D, m.children);
    }
  }, R = (p, m, w, A) => {
    p == null ? i(
      m.el = a(m.children || ""),
      w,
      A
    ) : m.el = p.el;
  }, v = (p, m, w, A) => {
    [p.el, p.anchor] = E(
      p.children,
      m,
      w,
      A,
      p.el,
      p.anchor
    );
  }, g = (p, m, w, A) => {
    if (m.children !== p.children) {
      const D = d(p.anchor);
      N(p), [m.el, m.anchor] = E(
        m.children,
        w,
        D,
        A
      );
    } else
      m.el = p.el, m.anchor = p.anchor;
  }, b = ({ el: p, anchor: m }, w, A) => {
    let D;
    for (; p && p !== m; )
      D = d(p), i(p, w, A), p = D;
    i(m, w, A);
  }, N = ({ el: p, anchor: m }) => {
    let w;
    for (; p && p !== m; )
      w = d(p), r(p), p = w;
    r(m);
  }, x = (p, m, w, A, D, M, B, L, F) => {
    m.type === "svg" ? B = "svg" : m.type === "math" && (B = "mathml"), p == null ? T(
      m,
      w,
      A,
      D,
      M,
      B,
      L,
      F
    ) : C(
      p,
      m,
      D,
      M,
      B,
      L,
      F
    );
  }, T = (p, m, w, A, D, M, B, L) => {
    let F, I;
    const { props: K, shapeFlag: z, transition: q, dirs: Z } = p;
    if (F = p.el = o(
      p.type,
      M,
      K && K.is,
      K
    ), z & 8 ? f(F, p.children) : z & 16 && _(
      p.children,
      F,
      null,
      A,
      D,
      bs(p, M),
      B,
      L
    ), Z && gt(p, null, A, "created"), V(F, p, p.scopeId, B, A), K) {
      for (const fe in K)
        fe !== "value" && !Zt(fe) && s(F, fe, null, K[fe], M, A);
      "value" in K && s(F, "value", null, K.value, M), (I = K.onVnodeBeforeMount) && Ge(I, A, p);
    }
    h.NODE_ENV !== "production" && (Hn(F, "__vnode", p, !0), Hn(F, "__vueParentComponent", A, !0)), Z && gt(p, null, A, "beforeMount");
    const te = Wc(D, q);
    te && q.beforeEnter(F), i(F, m, w), ((I = K && K.onVnodeMounted) || te || Z) && Ve(() => {
      I && Ge(I, A, p), te && q.enter(F), Z && gt(p, null, A, "mounted");
    }, D);
  }, V = (p, m, w, A, D) => {
    if (w && y(p, w), A)
      for (let M = 0; M < A.length; M++)
        y(p, A[M]);
    if (D) {
      let M = D.subTree;
      if (h.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && (M = ts(M.children) || M), m === M) {
        const B = D.vnode;
        V(
          p,
          B,
          B.scopeId,
          B.slotScopeIds,
          D.parent
        );
      }
    }
  }, _ = (p, m, w, A, D, M, B, L, F = 0) => {
    for (let I = F; I < p.length; I++) {
      const K = p[I] = L ? qt(p[I]) : We(p[I]);
      O(
        null,
        K,
        m,
        w,
        A,
        D,
        M,
        B,
        L
      );
    }
  }, C = (p, m, w, A, D, M, B) => {
    const L = m.el = p.el;
    h.NODE_ENV !== "production" && (L.__vnode = m);
    let { patchFlag: F, dynamicChildren: I, dirs: K } = m;
    F |= p.patchFlag & 16;
    const z = p.props || ie, q = m.props || ie;
    let Z;
    if (w && dn(w, !1), (Z = q.onVnodeBeforeUpdate) && Ge(Z, w, m, p), K && gt(m, p, w, "beforeUpdate"), w && dn(w, !0), h.NODE_ENV !== "production" && nn && (F = 0, B = !1, I = null), (z.innerHTML && q.innerHTML == null || z.textContent && q.textContent == null) && f(L, ""), I ? (P(
      p.dynamicChildren,
      I,
      L,
      w,
      A,
      bs(m, D),
      M
    ), h.NODE_ENV !== "production" && mi(p, m)) : B || Oe(
      p,
      m,
      L,
      null,
      w,
      A,
      bs(m, D),
      M,
      !1
    ), F > 0) {
      if (F & 16)
        S(L, z, q, w, D);
      else if (F & 2 && z.class !== q.class && s(L, "class", null, q.class, D), F & 4 && s(L, "style", z.style, q.style, D), F & 8) {
        const te = m.dynamicProps;
        for (let fe = 0; fe < te.length; fe++) {
          const ce = te[fe], xe = z[ce], lt = q[ce];
          (lt !== xe || ce === "value") && s(L, ce, xe, lt, D, w);
        }
      }
      F & 1 && p.children !== m.children && f(L, m.children);
    } else !B && I == null && S(L, z, q, w, D);
    ((Z = q.onVnodeUpdated) || K) && Ve(() => {
      Z && Ge(Z, w, m, p), K && gt(m, p, w, "updated");
    }, A);
  }, P = (p, m, w, A, D, M, B) => {
    for (let L = 0; L < m.length; L++) {
      const F = p[L], I = m[L], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(F, I) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      O(
        F,
        I,
        K,
        null,
        A,
        D,
        M,
        B,
        !0
      );
    }
  }, S = (p, m, w, A, D) => {
    if (m !== w) {
      if (m !== ie)
        for (const M in m)
          !Zt(M) && !(M in w) && s(
            p,
            M,
            m[M],
            null,
            D,
            A
          );
      for (const M in w) {
        if (Zt(M)) continue;
        const B = w[M], L = m[M];
        B !== L && M !== "value" && s(p, M, L, B, D, A);
      }
      "value" in w && s(p, "value", m.value, w.value, D);
    }
  }, j = (p, m, w, A, D, M, B, L, F) => {
    const I = m.el = p ? p.el : l(""), K = m.anchor = p ? p.anchor : l("");
    let { patchFlag: z, dynamicChildren: q, slotScopeIds: Z } = m;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nn || z & 2048) && (z = 0, F = !1, q = null), Z && (L = L ? L.concat(Z) : Z), p == null ? (i(I, w, A), i(K, w, A), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      w,
      K,
      D,
      M,
      B,
      L,
      F
    )) : z > 0 && z & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (P(
      p.dynamicChildren,
      q,
      w,
      D,
      M,
      B,
      L
    ), h.NODE_ENV !== "production" ? mi(p, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || D && m === D.subTree) && mi(
        p,
        m,
        !0
        /* shallow */
      )
    )) : Oe(
      p,
      m,
      w,
      K,
      D,
      M,
      B,
      L,
      F
    );
  }, G = (p, m, w, A, D, M, B, L, F) => {
    m.slotScopeIds = L, p == null ? m.shapeFlag & 512 ? D.ctx.activate(
      m,
      w,
      A,
      B,
      F
    ) : J(
      m,
      w,
      A,
      D,
      M,
      B,
      F
    ) : W(p, m, F);
  }, J = (p, m, w, A, D, M, B) => {
    const L = p.component = au(
      p,
      A,
      D
    );
    if (h.NODE_ENV !== "production" && L.type.__hmrId && Zp(L), h.NODE_ENV !== "production" && (pi(p), Tt(L, "mount")), ti(p) && (L.ctx.renderer = An), h.NODE_ENV !== "production" && Tt(L, "init"), uu(L, !1, B), h.NODE_ENV !== "production" && Dt(L, "init"), L.asyncDep) {
      if (D && D.registerDep(L, he, B), !p.el) {
        const F = L.subTree = me(ye);
        R(null, F, m, w);
      }
    } else
      he(
        L,
        p,
        m,
        w,
        D,
        M,
        B
      );
    h.NODE_ENV !== "production" && (di(), Dt(L, "mount"));
  }, W = (p, m, w) => {
    const A = m.component = p.component;
    if (Mh(p, m, w))
      if (A.asyncDep && !A.asyncResolved) {
        h.NODE_ENV !== "production" && pi(m), ae(A, m, w), h.NODE_ENV !== "production" && di();
        return;
      } else
        A.next = m, Yp(A.update), A.effect.dirty = !0, A.update();
    else
      m.el = p.el, A.vnode = m;
  }, he = (p, m, w, A, D, M, B) => {
    const L = () => {
      if (p.isMounted) {
        let { next: K, bu: z, u: q, parent: Z, vnode: te } = p;
        {
          const Rn = qc(p);
          if (Rn) {
            K && (K.el = te.el, ae(p, K, B)), Rn.asyncDep.then(() => {
              p.isUnmounted || L();
            });
            return;
          }
        }
        let fe = K, ce;
        h.NODE_ENV !== "production" && pi(K || p.vnode), dn(p, !1), K ? (K.el = te.el, ae(p, K, B)) : K = te, z && Gt(z), (ce = K.props && K.props.onVnodeBeforeUpdate) && Ge(ce, Z, K, te), dn(p, !0), h.NODE_ENV !== "production" && Tt(p, "render");
        const xe = ar(p);
        h.NODE_ENV !== "production" && Dt(p, "render");
        const lt = p.subTree;
        p.subTree = xe, h.NODE_ENV !== "production" && Tt(p, "patch"), O(
          lt,
          xe,
          // parent may have changed if it's in a teleport
          u(lt.el),
          // anchor may have changed if it's in a fragment
          Ki(lt),
          p,
          D,
          M
        ), h.NODE_ENV !== "production" && Dt(p, "patch"), K.el = xe.el, fe === null && $o(p, xe.el), q && Ve(q, D), (ce = K.props && K.props.onVnodeUpdated) && Ve(
          () => Ge(ce, Z, K, te),
          D
        ), h.NODE_ENV !== "production" && Ec(p), h.NODE_ENV !== "production" && di();
      } else {
        let K;
        const { el: z, props: q } = m, { bm: Z, m: te, parent: fe } = p, ce = On(m);
        if (dn(p, !1), Z && Gt(Z), !ce && (K = q && q.onVnodeBeforeMount) && Ge(K, fe, m), dn(p, !0), z && fs) {
          const xe = () => {
            h.NODE_ENV !== "production" && Tt(p, "render"), p.subTree = ar(p), h.NODE_ENV !== "production" && Dt(p, "render"), h.NODE_ENV !== "production" && Tt(p, "hydrate"), fs(
              z,
              p.subTree,
              p,
              D,
              null
            ), h.NODE_ENV !== "production" && Dt(p, "hydrate");
          };
          ce ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && xe()
          ) : xe();
        } else {
          h.NODE_ENV !== "production" && Tt(p, "render");
          const xe = p.subTree = ar(p);
          h.NODE_ENV !== "production" && Dt(p, "render"), h.NODE_ENV !== "production" && Tt(p, "patch"), O(
            null,
            xe,
            w,
            A,
            p,
            D,
            M
          ), h.NODE_ENV !== "production" && Dt(p, "patch"), m.el = xe.el;
        }
        if (te && Ve(te, D), !ce && (K = q && q.onVnodeMounted)) {
          const xe = m;
          Ve(
            () => Ge(K, fe, xe),
            D
          );
        }
        (m.shapeFlag & 256 || fe && On(fe.vnode) && fe.vnode.shapeFlag & 256) && p.a && Ve(p.a, D), p.isMounted = !0, h.NODE_ENV !== "production" && Vs(p), m = w = A = null;
      }
    }, F = p.effect = new jn(
      L,
      Ee,
      () => Pi(I),
      p.scope
      // track it in component's effect scope
    ), I = p.update = () => {
      F.dirty && F.run();
    };
    I.i = p, I.id = p.uid, dn(p, !0), h.NODE_ENV !== "production" && (F.onTrack = p.rtc ? (K) => Gt(p.rtc, K) : void 0, F.onTrigger = p.rtg ? (K) => Gt(p.rtg, K) : void 0), I();
  }, ae = (p, m, w) => {
    m.component = p;
    const A = p.vnode.props;
    p.vnode = m, p.next = null, oh(p, m.props, A, w), gh(p, m.children, w), cn(), Dl(p), un();
  }, Oe = (p, m, w, A, D, M, B, L, F = !1) => {
    const I = p && p.children, K = p ? p.shapeFlag : 0, z = m.children, { patchFlag: q, shapeFlag: Z } = m;
    if (q > 0) {
      if (q & 128) {
        Ct(
          I,
          z,
          w,
          A,
          D,
          M,
          B,
          L,
          F
        );
        return;
      } else if (q & 256) {
        dt(
          I,
          z,
          w,
          A,
          D,
          M,
          B,
          L,
          F
        );
        return;
      }
    }
    Z & 8 ? (K & 16 && ni(I, D, M), z !== I && f(w, z)) : K & 16 ? Z & 16 ? Ct(
      I,
      z,
      w,
      A,
      D,
      M,
      B,
      L,
      F
    ) : ni(I, D, M, !0) : (K & 8 && f(w, ""), Z & 16 && _(
      z,
      w,
      A,
      D,
      M,
      B,
      L,
      F
    ));
  }, dt = (p, m, w, A, D, M, B, L, F) => {
    p = p || $n, m = m || $n;
    const I = p.length, K = m.length, z = Math.min(I, K);
    let q;
    for (q = 0; q < z; q++) {
      const Z = m[q] = F ? qt(m[q]) : We(m[q]);
      O(
        p[q],
        Z,
        w,
        null,
        D,
        M,
        B,
        L,
        F
      );
    }
    I > K ? ni(
      p,
      D,
      M,
      !0,
      !1,
      z
    ) : _(
      m,
      w,
      A,
      D,
      M,
      B,
      L,
      F,
      z
    );
  }, Ct = (p, m, w, A, D, M, B, L, F) => {
    let I = 0;
    const K = m.length;
    let z = p.length - 1, q = K - 1;
    for (; I <= z && I <= q; ) {
      const Z = p[I], te = m[I] = F ? qt(m[I]) : We(m[I]);
      if (ct(Z, te))
        O(
          Z,
          te,
          w,
          null,
          D,
          M,
          B,
          L,
          F
        );
      else
        break;
      I++;
    }
    for (; I <= z && I <= q; ) {
      const Z = p[z], te = m[q] = F ? qt(m[q]) : We(m[q]);
      if (ct(Z, te))
        O(
          Z,
          te,
          w,
          null,
          D,
          M,
          B,
          L,
          F
        );
      else
        break;
      z--, q--;
    }
    if (I > z) {
      if (I <= q) {
        const Z = q + 1, te = Z < K ? m[Z].el : A;
        for (; I <= q; )
          O(
            null,
            m[I] = F ? qt(m[I]) : We(m[I]),
            w,
            te,
            D,
            M,
            B,
            L,
            F
          ), I++;
      }
    } else if (I > q)
      for (; I <= z; )
        Lt(p[I], D, M, !0), I++;
    else {
      const Z = I, te = I, fe = /* @__PURE__ */ new Map();
      for (I = te; I <= q; I++) {
        const je = m[I] = F ? qt(m[I]) : We(m[I]);
        je.key != null && (h.NODE_ENV !== "production" && fe.has(je.key) && k(
          "Duplicate keys found during update:",
          JSON.stringify(je.key),
          "Make sure keys are unique."
        ), fe.set(je.key, I));
      }
      let ce, xe = 0;
      const lt = q - te + 1;
      let Rn = !1, hl = 0;
      const ii = new Array(lt);
      for (I = 0; I < lt; I++) ii[I] = 0;
      for (I = Z; I <= z; I++) {
        const je = p[I];
        if (xe >= lt) {
          Lt(je, D, M, !0);
          continue;
        }
        let mt;
        if (je.key != null)
          mt = fe.get(je.key);
        else
          for (ce = te; ce <= q; ce++)
            if (ii[ce - te] === 0 && ct(je, m[ce])) {
              mt = ce;
              break;
            }
        mt === void 0 ? Lt(je, D, M, !0) : (ii[mt - te] = I + 1, mt >= hl ? hl = mt : Rn = !0, O(
          je,
          m[mt],
          w,
          null,
          D,
          M,
          B,
          L,
          F
        ), xe++);
      }
      const ml = Rn ? Dh(ii) : $n;
      for (ce = ml.length - 1, I = lt - 1; I >= 0; I--) {
        const je = te + I, mt = m[je], gl = je + 1 < K ? m[je + 1].el : A;
        ii[I] === 0 ? O(
          null,
          mt,
          w,
          gl,
          D,
          M,
          B,
          L,
          F
        ) : Rn && (ce < 0 || I !== ml[ce] ? ht(mt, w, gl, 2) : ce--);
      }
    }
  }, ht = (p, m, w, A, D = null) => {
    const { el: M, type: B, transition: L, children: F, shapeFlag: I } = p;
    if (I & 6) {
      ht(p.component.subTree, m, w, A);
      return;
    }
    if (I & 128) {
      p.suspense.move(m, w, A);
      return;
    }
    if (I & 64) {
      B.move(p, m, w, An);
      return;
    }
    if (B === Ce) {
      i(M, m, w);
      for (let z = 0; z < F.length; z++)
        ht(F[z], m, w, A);
      i(p.anchor, m, w);
      return;
    }
    if (B === rn) {
      b(p, m, w);
      return;
    }
    if (A !== 2 && I & 1 && L)
      if (A === 0)
        L.beforeEnter(M), i(M, m, w), Ve(() => L.enter(M), D);
      else {
        const { leave: z, delayLeave: q, afterLeave: Z } = L, te = () => i(M, m, w), fe = () => {
          z(M, () => {
            te(), Z && Z();
          });
        };
        q ? q(M, te, fe) : fe();
      }
    else
      i(M, m, w);
  }, Lt = (p, m, w, A = !1, D = !1) => {
    const {
      type: M,
      props: B,
      ref: L,
      children: F,
      dynamicChildren: I,
      shapeFlag: K,
      patchFlag: z,
      dirs: q,
      cacheIndex: Z
    } = p;
    if (z === -2 && (D = !1), L != null && wr(L, null, w, p, !0), Z != null && (m.renderCache[Z] = void 0), K & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const te = K & 1 && q, fe = !On(p);
    let ce;
    if (fe && (ce = B && B.onVnodeBeforeUnmount) && Ge(ce, m, p), K & 6)
      If(p.component, w, A);
    else {
      if (K & 128) {
        p.suspense.unmount(w, A);
        return;
      }
      te && gt(p, null, m, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        m,
        w,
        An,
        A
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ce || z > 0 && z & 64) ? ni(
        I,
        m,
        w,
        !1,
        !0
      ) : (M === Ce && z & 384 || !D && K & 16) && ni(F, m, w), A && as(p);
    }
    (fe && (ce = B && B.onVnodeUnmounted) || te) && Ve(() => {
      ce && Ge(ce, m, p), te && gt(p, null, m, "unmounted");
    }, w);
  }, as = (p) => {
    const { type: m, el: w, anchor: A, transition: D } = p;
    if (m === Ce) {
      h.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && D && !D.persisted ? p.children.forEach((B) => {
        B.type === ye ? r(B.el) : as(B);
      }) : Vf(w, A);
      return;
    }
    if (m === rn) {
      N(p);
      return;
    }
    const M = () => {
      r(w), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (p.shapeFlag & 1 && D && !D.persisted) {
      const { leave: B, delayLeave: L } = D, F = () => B(w, M);
      L ? L(p.el, M, F) : F();
    } else
      M();
  }, Vf = (p, m) => {
    let w;
    for (; p !== m; )
      w = d(p), r(p), p = w;
    r(m);
  }, If = (p, m, w) => {
    h.NODE_ENV !== "production" && p.type.__hmrId && Qp(p);
    const { bum: A, scope: D, update: M, subTree: B, um: L, m: F, a: I } = p;
    Sr(F), Sr(I), A && Gt(A), D.stop(), M && (M.active = !1, Lt(B, p, m, w)), L && Ve(L, m), Ve(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), h.NODE_ENV !== "production" && sd(p);
  }, ni = (p, m, w, A = !1, D = !1, M = 0) => {
    for (let B = M; B < p.length; B++)
      Lt(p[B], m, w, A, D);
  }, Ki = (p) => {
    if (p.shapeFlag & 6)
      return Ki(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = d(p.anchor || p.el), w = m && m[Lc];
    return w ? d(w) : m;
  };
  let cs = !1;
  const dl = (p, m, w) => {
    p == null ? m._vnode && Lt(m._vnode, null, null, !0) : O(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      w
    ), m._vnode = p, cs || (cs = !0, Dl(), br(), cs = !1);
  }, An = {
    p: O,
    um: Lt,
    m: ht,
    r: as,
    mt: J,
    mc: _,
    pc: Oe,
    pbc: P,
    n: Ki,
    o: e
  };
  let us, fs;
  return t && ([us, fs] = t(
    An
  )), {
    render: dl,
    hydrate: us,
    createApp: th(dl, us)
  };
}
function bs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function dn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Wc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mi(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (U(i) && U(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = qt(r[s]), l.el = o.el), !n && l.patchFlag !== -2 && mi(o, l)), l.type === At && (l.el = o.el), h.NODE_ENV !== "production" && l.type === ye && !l.el && (l.el = o.el);
    }
}
function Dh(e) {
  const t = e.slice(), n = [0];
  let i, r, s, o, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const c = e[i];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[i] = r, n.push(i);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < c ? s = l + 1 : o = l;
      c < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function qc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qc(t);
}
function Sr(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const zc = Symbol.for("v-scx"), Gc = () => {
  {
    const e = kc(zc);
    return e || h.NODE_ENV !== "production" && k(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function kh(e, t) {
  return Qr(e, null, t);
}
function Jc(e, t) {
  return Qr(
    e,
    null,
    h.NODE_ENV !== "production" ? re({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Yc(e, t) {
  return Qr(
    e,
    null,
    h.NODE_ENV !== "production" ? re({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const er = {};
function Zr(e, t, n) {
  return h.NODE_ENV !== "production" && !Q(t) && k(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Qr(e, t, n);
}
function Qr(e, t, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: l
} = ie) {
  if (t && s) {
    const T = t;
    t = (...V) => {
      T(...V), x();
    };
  }
  h.NODE_ENV !== "production" && i !== void 0 && typeof i == "number" && k(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), h.NODE_ENV !== "production" && !t && (n !== void 0 && k(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && k(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && k(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (T) => {
    k(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = Ne, f = (T) => i === !0 ? T : (
    // for deep: false, only traverse root-level properties
    Yt(T, i === !1 ? 1 : void 0)
  );
  let u, d = !1, y = !1;
  if (ke(e) ? (u = () => e.value, d = _t(e)) : tn(e) ? (u = () => f(e), d = !0) : U(e) ? (y = !0, d = e.some((T) => tn(T) || _t(T)), u = () => e.map((T) => {
    if (ke(T))
      return T.value;
    if (tn(T))
      return f(T);
    if (Q(T))
      return Nt(T, c, 2);
    h.NODE_ENV !== "production" && a(T);
  })) : Q(e) ? t ? u = () => Nt(e, c, 2) : u = () => (E && E(), rt(
    e,
    c,
    3,
    [O]
  )) : (u = Ee, h.NODE_ENV !== "production" && a(e)), t && i) {
    const T = u;
    u = () => Yt(T());
  }
  let E, O = (T) => {
    E = b.onStop = () => {
      Nt(T, c, 4), E = b.onStop = void 0;
    };
  }, $;
  if (Li)
    if (O = Ee, t ? n && rt(t, c, 3, [
      u(),
      y ? [] : void 0,
      O
    ]) : u(), r === "sync") {
      const T = Gc();
      $ = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return Ee;
  let R = y ? new Array(e.length).fill(er) : er;
  const v = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const T = b.run();
        (i || d || (y ? T.some((V, _) => Ke(V, R[_])) : Ke(T, R))) && (E && E(), rt(t, c, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          R === er ? void 0 : y && R[0] === er ? [] : R,
          O
        ]), R = T);
      } else
        b.run();
  };
  v.allowRecurse = !!t;
  let g;
  r === "sync" ? g = v : r === "post" ? g = () => Ve(v, c && c.suspense) : (v.pre = !0, c && (v.id = c.uid), g = () => Pi(v));
  const b = new jn(u, Ee, g), N = qa(), x = () => {
    b.stop(), N && so(N.effects, b);
  };
  return h.NODE_ENV !== "production" && (b.onTrack = o, b.onTrigger = l), t ? n ? v() : R = b.run() : r === "post" ? Ve(
    b.run.bind(b),
    c && c.suspense
  ) : b.run(), $ && $.push(x), x;
}
function Yt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ke(e))
    Yt(e.value, t, n);
  else if (U(e))
    for (let i = 0; i < e.length; i++)
      Yt(e[i], t, n);
  else if (Vn(e) || bn(e))
    e.forEach((i) => {
      Yt(i, t, n);
    });
  else if (Ma(e)) {
    for (const i in e)
      Yt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Yt(e[i], t, n);
  }
  return e;
}
function xh(e, t, n = ie) {
  const i = St();
  if (h.NODE_ENV !== "production" && !i)
    return k("useModel() called without active instance."), vn();
  if (h.NODE_ENV !== "production" && !i.propsOptions[0][t])
    return k(`useModel() called with prop "${t}" which is not declared.`), vn();
  const r = de(t), s = Me(t), o = Xc(e, t), l = fc((a, c) => {
    let f, u = ie, d;
    return Yc(() => {
      const y = e[t];
      Ke(f, y) && (f = y, c());
    }), {
      get() {
        return a(), n.get ? n.get(f) : f;
      },
      set(y) {
        const E = n.set ? n.set(y) : y;
        if (!Ke(E, f) && !(u !== ie && Ke(y, u)))
          return;
        const O = i.vnode.props;
        O && // check if parent has passed v-model
        (t in O || r in O || s in O) && (`onUpdate:${t}` in O || `onUpdate:${r}` in O || `onUpdate:${s}` in O) || (f = y, c()), i.emit(`update:${t}`, E), Ke(y, E) && Ke(y, u) && !Ke(E, d) && c(), u = y, d = E;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? o || ie : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const Xc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Me(t)}Modifiers`];
function Vh(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ie;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(yt(de(t)) in u)) && k(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${yt(de(t))}" prop.`
        );
      else {
        const d = f[t];
        Q(d) && (d(...n) || k(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), o = s && Xc(i, t.slice(7));
  if (o && (o.trim && (r = n.map((f) => Y(f) ? f.trim() : f)), o.number && (r = n.map(gr))), h.NODE_ENV !== "production" && ad(e, t, r), h.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && i[yt(f)] && k(
      `Event "${f}" is emitted in component ${is(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Me(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = i[l = yt(t)] || // also try camelCase event handler (#2249)
  i[l = yt(de(t))];
  !a && s && (a = i[l = yt(Me(t))]), a && rt(
    a,
    e,
    6,
    r
  );
  const c = i[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, rt(
      c,
      e,
      6,
      r
    );
  }
}
function Ih(e, t, n = !1) {
  const i = t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let o = {};
  return !s && !!1 ? (le(e) && i.set(e, null), null) : (U(s) ? s.forEach((a) => o[a] = null) : re(o, s), le(e) && i.set(e, o), o);
}
function es(e, t) {
  return !e || !Mt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Me(t)) || ne(e, t));
}
let Ps = !1;
function Cr() {
  Ps = !0;
}
function ar(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: r,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: f,
    props: u,
    data: d,
    setupState: y,
    ctx: E,
    inheritAttrs: O
  } = e, $ = Si(e);
  let R, v;
  h.NODE_ENV !== "production" && (Ps = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = r || i, x = h.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(N, {
        get(T, V, _) {
          return k(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(T, V, _);
        }
      }) : N;
      R = We(
        c.call(
          x,
          N,
          f,
          h.NODE_ENV !== "production" ? ut(u) : u,
          y,
          d,
          E
        )
      ), v = l;
    } else {
      const N = t;
      h.NODE_ENV !== "production" && l === u && Cr(), R = We(
        N.length > 1 ? N(
          h.NODE_ENV !== "production" ? ut(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Cr(), ut(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : N(
          h.NODE_ENV !== "production" ? ut(u) : u,
          null
        )
      ), v = t.props ? l : Ah(l);
    }
  } catch (N) {
    gi.length = 0, fn(N, e, 1), R = me(ye);
  }
  let g = R, b;
  if (h.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && ([g, b] = Zc(R)), v && O !== !1) {
    const N = Object.keys(v), { shapeFlag: x } = g;
    if (N.length) {
      if (x & 7)
        s && N.some(mr) && (v = Rh(
          v,
          s
        )), g = ot(g, v, !1, !0);
      else if (h.NODE_ENV !== "production" && !Ps && g.type !== ye) {
        const T = Object.keys(l), V = [], _ = [];
        for (let C = 0, P = T.length; C < P; C++) {
          const S = T[C];
          Mt(S) ? mr(S) || V.push(S[2].toLowerCase() + S.slice(3)) : _.push(S);
        }
        _.length && k(
          `Extraneous non-props attributes (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), V.length && k(
          `Extraneous non-emits event listeners (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Ul(g) && k(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = ot(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Ul(g) && k(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), g.transition = n.transition), h.NODE_ENV !== "production" && b ? b(g) : R = g, Si($), R;
}
const Zc = (e) => {
  const t = e.children, n = e.dynamicChildren, i = ts(t, !1);
  if (i) {
    if (h.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return Zc(i);
  } else return [e, void 0];
  const r = t.indexOf(i), s = n ? n.indexOf(i) : -1, o = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [We(i), o];
};
function ts(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (Pt(r)) {
      if (r.type !== ye || r.children === "v-if") {
        if (n)
          return;
        if (n = r, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ts(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ah = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rh = (e, t) => {
  const n = {};
  for (const i in e)
    (!mr(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, Ul = (e) => e.shapeFlag & 7 || e.type === ye;
function Mh(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: o, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (r || l) && nn || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Kl(i, o, c) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        if (o[d] !== i[d] && !es(c, d))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Kl(i, o, c) : !0 : !!o;
  return !1;
}
function Kl(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (t[s] !== e[s] && !es(n, s))
      return !0;
  }
  return !1;
}
function $o({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const $s = (e) => e.__isSuspense;
let Ls = 0;
const Ph = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, i, r, s, o, l, a, c) {
    if (e == null)
      Lh(
        t,
        n,
        i,
        r,
        s,
        o,
        l,
        a,
        c
      );
    else {
      if (s && s.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Fh(
        e,
        t,
        n,
        i,
        r,
        o,
        l,
        a,
        c
      );
    }
  },
  hydrate: Bh,
  normalize: Hh
}, $h = Ph;
function Ti(e, t) {
  const n = e.props && e.props[t];
  Q(n) && n();
}
function Lh(e, t, n, i, r, s, o, l, a) {
  const {
    p: c,
    o: { createElement: f }
  } = a, u = f("div"), d = e.suspense = Qc(
    e,
    r,
    i,
    t,
    u,
    n,
    s,
    o,
    l,
    a
  );
  c(
    null,
    d.pendingBranch = e.ssContent,
    u,
    null,
    i,
    d,
    s,
    o
  ), d.deps > 0 ? (Ti(e, "onPending"), Ti(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    i,
    null,
    // fallback tree will not have suspense context
    s,
    o
  ), Bn(d, e.ssFallback)) : d.resolve(!1, !0);
}
function Fh(e, t, n, i, r, s, o, l, { p: a, um: c, o: { createElement: f } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const d = t.ssContent, y = t.ssFallback, { activeBranch: E, pendingBranch: O, isInFallback: $, isHydrating: R } = u;
  if (O)
    u.pendingBranch = d, ct(d, O) ? (a(
      O,
      d,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : $ && (R || (a(
      E,
      y,
      n,
      i,
      r,
      null,
      // fallback tree will not have suspense context
      s,
      o,
      l
    ), Bn(u, y)))) : (u.pendingId = Ls++, R ? (u.isHydrating = !1, u.activeBranch = O) : c(O, r, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), $ ? (a(
      null,
      d,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      E,
      y,
      n,
      i,
      r,
      null,
      // fallback tree will not have suspense context
      s,
      o,
      l
    ), Bn(u, y))) : E && ct(d, E) ? (a(
      E,
      d,
      n,
      i,
      r,
      u,
      s,
      o,
      l
    ), u.resolve(!0)) : (a(
      null,
      d,
      u.hiddenContainer,
      null,
      r,
      u,
      s,
      o,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (E && ct(d, E))
    a(
      E,
      d,
      n,
      i,
      r,
      u,
      s,
      o,
      l
    ), Bn(u, d);
  else if (Ti(t, "onPending"), u.pendingBranch = d, d.shapeFlag & 512 ? u.pendingId = d.component.suspenseId : u.pendingId = Ls++, a(
    null,
    d,
    u.hiddenContainer,
    null,
    r,
    u,
    s,
    o,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: v, pendingId: g } = u;
    v > 0 ? setTimeout(() => {
      u.pendingId === g && u.fallback(y);
    }, v) : v === 0 && u.fallback(y);
  }
}
let Wl = !1;
function Qc(e, t, n, i, r, s, o, l, a, c, f = !1) {
  h.NODE_ENV !== "production" && !Wl && (Wl = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: d,
    um: y,
    n: E,
    o: { parentNode: O, remove: $ }
  } = c;
  let R;
  const v = jh(e);
  v && t && t.pendingBranch && (R = t.pendingId, t.deps++);
  const g = e.props ? yr(e.props.timeout) : void 0;
  h.NODE_ENV !== "production" && No(g, "Suspense timeout");
  const b = s, N = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: i,
    hiddenContainer: r,
    deps: 0,
    pendingId: Ls++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(x = !1, T = !1) {
      if (h.NODE_ENV !== "production") {
        if (!x && !N.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (N.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: V,
        activeBranch: _,
        pendingBranch: C,
        pendingId: P,
        effects: S,
        parentComponent: j,
        container: G
      } = N;
      let J = !1;
      N.isHydrating ? N.isHydrating = !1 : x || (J = _ && C.transition && C.transition.mode === "out-in", J && (_.transition.afterLeave = () => {
        P === N.pendingId && (d(
          C,
          G,
          s === b ? E(_) : s,
          0
        ), wi(S));
      }), _ && (O(_.el) !== N.hiddenContainer && (s = E(_)), y(_, j, N, !0)), J || d(C, G, s, 0)), Bn(N, C), N.pendingBranch = null, N.isInFallback = !1;
      let W = N.parent, he = !1;
      for (; W; ) {
        if (W.pendingBranch) {
          W.effects.push(...S), he = !0;
          break;
        }
        W = W.parent;
      }
      !he && !J && wi(S), N.effects = [], v && t && t.pendingBranch && R === t.pendingId && (t.deps--, t.deps === 0 && !T && t.resolve()), Ti(V, "onResolve");
    },
    fallback(x) {
      if (!N.pendingBranch)
        return;
      const { vnode: T, activeBranch: V, parentComponent: _, container: C, namespace: P } = N;
      Ti(T, "onFallback");
      const S = E(V), j = () => {
        N.isInFallback && (u(
          null,
          x,
          C,
          S,
          _,
          null,
          // fallback tree will not have suspense context
          P,
          l,
          a
        ), Bn(N, x));
      }, G = x.transition && x.transition.mode === "out-in";
      G && (V.transition.afterLeave = j), N.isInFallback = !0, y(
        V,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), G || j();
    },
    move(x, T, V) {
      N.activeBranch && d(N.activeBranch, x, T, V), N.container = x;
    },
    next() {
      return N.activeBranch && E(N.activeBranch);
    },
    registerDep(x, T, V) {
      const _ = !!N.pendingBranch;
      _ && N.deps++;
      const C = x.vnode.el;
      x.asyncDep.catch((P) => {
        fn(P, x, 0);
      }).then((P) => {
        if (x.isUnmounted || N.isUnmounted || N.pendingId !== x.suspenseId)
          return;
        x.asyncResolved = !0;
        const { vnode: S } = x;
        h.NODE_ENV !== "production" && pi(S), Ks(x, P, !1), C && (S.el = C);
        const j = !C && x.subTree.el;
        T(
          x,
          S,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          O(C || x.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          C ? null : E(x.subTree),
          N,
          o,
          V
        ), j && $(j), $o(x, S.el), h.NODE_ENV !== "production" && di(), _ && --N.deps === 0 && N.resolve();
      });
    },
    unmount(x, T) {
      N.isUnmounted = !0, N.activeBranch && y(
        N.activeBranch,
        n,
        x,
        T
      ), N.pendingBranch && y(
        N.pendingBranch,
        n,
        x,
        T
      );
    }
  };
  return N;
}
function Bh(e, t, n, i, r, s, o, l, a) {
  const c = t.suspense = Qc(
    t,
    i,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    r,
    s,
    o,
    l,
    !0
  ), f = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    s,
    o
  );
  return c.deps === 0 && c.resolve(!1, !0), f;
}
function Hh(e) {
  const { shapeFlag: t, children: n } = e, i = t & 32;
  e.ssContent = ql(
    i ? n.default : n
  ), e.ssFallback = i ? ql(n.fallback) : me(ye);
}
function ql(e) {
  let t;
  if (Q(e)) {
    const n = kn && e._c;
    n && (e._d = !1, ns()), e = e(), n && (e._d = !0, t = Fe, tu());
  }
  if (U(e)) {
    const n = ts(e);
    h.NODE_ENV !== "production" && !n && e.filter((i) => i !== Ao).length > 0 && k("<Suspense> slots expect a single root node."), e = n;
  }
  return e = We(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function eu(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : wi(e);
}
function Bn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, i && i.subTree === n && (i.vnode.el = r, $o(i, r));
}
function jh(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Ce = Symbol.for("v-fgt"), At = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), gi = [];
let Fe = null;
function ns(e = !1) {
  gi.push(Fe = e ? null : []);
}
function tu() {
  gi.pop(), Fe = gi[gi.length - 1] || null;
}
let kn = 1;
function Fs(e) {
  kn += e, e < 0 && Fe && (Fe.hasOnce = !0);
}
function nu(e) {
  return e.dynamicChildren = kn > 0 ? Fe || $n : null, tu(), kn > 0 && Fe && Fe.push(e), e;
}
function Uh(e, t, n, i, r, s) {
  return nu(
    Fo(
      e,
      t,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function Lo(e, t, n, i, r) {
  return nu(
    me(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function Pt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = lr.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Bs;
function Kh(e) {
  Bs = e;
}
const Wh = (...e) => ru(
  ...Bs ? Bs(e, be) : e
), iu = ({ key: e }) => e ?? null, cr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || ke(e) || Q(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function Fo(e, t = null, n = null, i = 0, r = null, s = e === Ce ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && iu(t),
    ref: t && cr(t),
    scopeId: Gr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return l ? (Ho(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Y(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && k("VNode created with invalid key (NaN). VNode type:", a.type), kn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Fe.push(a), a;
}
const me = h.NODE_ENV !== "production" ? Wh : ru;
function ru(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === Ao) && (h.NODE_ENV !== "production" && !e && k(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Pt(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ho(l, n), kn > 0 && !s && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag = -2, l;
  }
  if (hu(e) && (e = e.__vccOpts), t) {
    t = su(t);
    let { class: l, style: a } = t;
    l && !Y(l) && (t.class = Qn(l)), le(a) && (_i(a) && !U(a) && (a = re({}, a)), t.style = Zn(a));
  }
  const o = Y(e) ? 1 : $s(e) ? 128 : yh(e) ? 64 : le(e) ? 4 : Q(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && o & 4 && _i(e) && (e = X(e), k(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Fo(
    e,
    t,
    n,
    i,
    r,
    o,
    s,
    !0
  );
}
function su(e) {
  return e ? _i(e) || Ic(e) ? re({}, e) : e : null;
}
function ot(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: o, children: l, transition: a } = e, c = t ? lu(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && iu(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? U(s) ? s.concat(cr(t)) : [s, cr(t)] : cr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && o === -1 && U(l) ? l.map(ou) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && ln(
    f,
    a.clone(f)
  ), f;
}
function ou(e) {
  const t = ot(e);
  return U(e.children) && (t.children = e.children.map(ou)), t;
}
function Bo(e = " ", t = 0) {
  return me(At, null, e, t);
}
function qh(e, t) {
  const n = me(rn, null, e);
  return n.staticCount = t, n;
}
function zh(e = "", t = !1) {
  return t ? (ns(), Lo(ye, null, e)) : me(ye, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? me(ye) : U(e) ? me(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? qt(e) : me(At, null, String(e));
}
function qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function Ho(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ho(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ic(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Q(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Bo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Qn([t.class, i.class]));
      else if (r === "style")
        t.style = Zn([t.style, i.style]);
      else if (Mt(r)) {
        const s = t[r], o = i[r];
        o && s !== o && !(U(s) && s.includes(o)) && (t[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function Ge(e, t, n, i = null) {
  rt(e, t, 7, [
    n,
    i
  ]);
}
const Gh = Dc();
let Jh = 0;
function au(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || Gh, s = {
    uid: Jh++,
    vnode: e,
    type: i,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new fo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lh(i, r),
    emitsOptions: Ih(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return h.NODE_ENV !== "production" ? s.ctx = Rd(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Vh.bind(null, s), e.ce && e.ce(s), s;
}
let Ne = null;
const St = () => Ne || be;
let Tr, Hs;
{
  const e = co(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  Tr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Li = n
  );
}
const Di = (e) => {
  const t = Ne;
  return Tr(e), e.scope.on(), () => {
    e.scope.off(), Tr(t);
  };
}, js = () => {
  Ne && Ne.scope.off(), Tr(null);
}, Yh = /* @__PURE__ */ Ie("slot,component");
function Us(e, { isNativeTag: t }) {
  (Yh(e) || t(e)) && k(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function cu(e) {
  return e.vnode.shapeFlag & 4;
}
let Li = !1;
function uu(e, t = !1, n = !1) {
  t && Hs(t);
  const { props: i, children: r } = e.vnode, s = cu(e);
  rh(e, i, s, t), mh(e, r, n);
  const o = s ? Xh(e, t) : void 0;
  return t && Hs(!1), o;
}
function Xh(e, t) {
  var n;
  const i = e.type;
  if (h.NODE_ENV !== "production") {
    if (i.name && Us(i.name, e.appContext.config), i.components) {
      const s = Object.keys(i.components);
      for (let o = 0; o < s.length; o++)
        Us(s[o], e.appContext.config);
    }
    if (i.directives) {
      const s = Object.keys(i.directives);
      for (let o = 0; o < s.length; o++)
        _c(s[o]);
    }
    i.compilerOptions && jo() && k(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hi), h.NODE_ENV !== "production" && Md(e);
  const { setup: r } = i;
  if (r) {
    const s = e.setupContext = r.length > 1 ? du(e) : null, o = Di(e);
    cn();
    const l = Nt(
      r,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? ut(e.props) : e.props,
        s
      ]
    );
    if (un(), o(), oo(l)) {
      if (l.then(js, js), t)
        return l.then((a) => {
          Ks(e, a, t);
        }).catch((a) => {
          fn(a, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = i.name) != null ? n : "Anonymous";
        k(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ks(e, l, t);
  } else
    pu(e, t);
}
function Ks(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (h.NODE_ENV !== "production" && Pt(t) && k(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _o(t), h.NODE_ENV !== "production" && Pd(e)) : h.NODE_ENV !== "production" && t !== void 0 && k(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), pu(e, n);
}
let yi, Ws;
function fu(e) {
  yi = e, Ws = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Ad));
  };
}
const jo = () => !yi;
function pu(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && yi && !i.render) {
      const r = i.template || Yd(e).template;
      if (r) {
        h.NODE_ENV !== "production" && Tt(e, "compile");
        const { isCustomElement: s, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = i, c = re(
          re(
            {
              isCustomElement: s,
              delimiters: l
            },
            o
          ),
          a
        );
        i.render = yi(r, c), h.NODE_ENV !== "production" && Dt(e, "compile");
      }
    }
    e.render = i.render || Ee, Ws && Ws(e);
  }
  h.NODE_ENV !== "production" && !i.render && e.render === Ee && !t && (!yi && i.template ? k(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : k("Component is missing template or render function: ", i));
}
const zl = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Cr(), Pe(e, "get", ""), e[t];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function Zh(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Pe(e, "get", "$slots"), t[n];
    }
  });
}
function du(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && k("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (U(n) ? i = "array" : ke(n) && (i = "ref")), i !== "object" && k(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, i;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, zl));
      },
      get slots() {
        return i || (i = Zh(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, zl),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Fi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_o(ac(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Sn)
        return Sn[n](e);
    },
    has(t, n) {
      return n in t || n in Sn;
    }
  })) : e.proxy;
}
const Qh = /(?:^|[-_])(\w)/g, em = (e) => e.replace(Qh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ki(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function is(e, t, n = !1) {
  let i = ki(t);
  if (!i && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (i = r[1]);
  }
  if (!i && e && e.parent) {
    const r = (s) => {
      for (const o in s)
        if (s[o] === t)
          return o;
    };
    i = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return i ? em(i) : n ? "App" : "Anonymous";
}
function hu(e) {
  return Q(e) && "__vccOpts" in e;
}
const tm = (e, t) => {
  const n = kp(e, t, Li);
  if (h.NODE_ENV !== "production") {
    const i = St();
    i && i.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function mu(e, t, n) {
  const i = arguments.length;
  return i === 2 ? le(t) && !U(t) ? Pt(t) ? me(e, null, [t]) : me(e, t) : me(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Pt(n) && (n = [n]), me(e, t, n));
}
function gu() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      return le(u) ? u.__isVue ? ["div", e, "VueInstance"] : ke(u) ? [
        "div",
        {},
        ["span", e, f(u)],
        "<",
        l(u.value),
        ">"
      ] : tn(u) ? [
        "div",
        {},
        ["span", e, _t(u) ? "ShallowReactive" : "Reactive"],
        "<",
        l(u),
        `>${Ot(u) ? " (readonly)" : ""}`
      ] : Ot(u) ? [
        "div",
        {},
        ["span", e, _t(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const d = [];
    u.type.props && u.props && d.push(o("props", X(u.props))), u.setupState !== ie && d.push(o("setup", u.setupState)), u.data !== ie && d.push(o("data", X(u.data)));
    const y = a(u, "computed");
    y && d.push(o("computed", y));
    const E = a(u, "inject");
    return E && d.push(o("injected", E)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), d;
  }
  function o(u, d) {
    return d = re({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((y) => [
          "div",
          {},
          ["span", i, y + ": "],
          l(d[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, d = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", i, u] : le(u) ? ["object", { object: d ? X(u) : u }] : ["span", n, String(u)];
  }
  function a(u, d) {
    const y = u.type;
    if (Q(y))
      return;
    const E = {};
    for (const O in u.ctx)
      c(y, O, d) && (E[O] = u.ctx[O]);
    return E;
  }
  function c(u, d, y) {
    const E = u[y];
    if (U(E) && E.includes(d) || le(E) && d in E || u.extends && c(u.extends, d, y) || u.mixins && u.mixins.some((O) => c(O, d, y)))
      return !0;
  }
  function f(u) {
    return _t(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function nm(e, t, n, i) {
  const r = n[i];
  if (r && yu(r, e))
    return r;
  const s = t();
  return s.memo = e.slice(), s.cacheIndex = i, n[i] = s;
}
function yu(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (Ke(n[i], t[i]))
      return !1;
  return kn > 0 && Fe && Fe.push(e), !0;
}
const qs = "3.4.37", De = h.NODE_ENV !== "production" ? k : Ee, im = qr, rm = (h.NODE_ENV, at), sm = (h.NODE_ENV, Oo), om = {
  createComponentInstance: au,
  setupComponent: uu,
  renderComponentRoot: ar,
  setCurrentRenderingInstance: Si,
  isVNode: Pt,
  normalizeVNode: We,
  getComponentPublicInstance: Fi,
  ensureValidVNode: Mo
}, lm = om, am = null, cm = null, um = null;
var we = {};
const fm = "http://www.w3.org/2000/svg", pm = "http://www.w3.org/1998/Math/MathML", Vt = typeof document < "u" ? document : null, Gl = Vt && /* @__PURE__ */ Vt.createElement("template"), dm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? Vt.createElementNS(fm, e) : t === "mathml" ? Vt.createElementNS(pm, e) : n ? Vt.createElement(e, { is: n }) : Vt.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => Vt.createTextNode(e),
  createComment: (e) => Vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, r, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Gl.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const l = Gl.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ht = "transition", oi = "animation", Kn = Symbol("_vtc"), Uo = (e, { slots: t }) => mu(vc, bu(e), t);
Uo.displayName = "Transition";
const Eu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, hm = Uo.props = /* @__PURE__ */ re(
  {},
  Do,
  Eu
), hn = (e, t = []) => {
  U(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Jl = (e) => e ? U(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function bu(e) {
  const t = {};
  for (const S in e)
    S in Eu || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: c = o,
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, E = mm(r), O = E && E[0], $ = E && E[1], {
    onBeforeEnter: R,
    onEnter: v,
    onEnterCancelled: g,
    onLeave: b,
    onLeaveCancelled: N,
    onBeforeAppear: x = R,
    onAppear: T = v,
    onAppearCancelled: V = g
  } = t, _ = (S, j, G) => {
    Ut(S, j ? f : l), Ut(S, j ? c : o), G && G();
  }, C = (S, j) => {
    S._isLeaving = !1, Ut(S, u), Ut(S, y), Ut(S, d), j && j();
  }, P = (S) => (j, G) => {
    const J = S ? T : v, W = () => _(j, S, G);
    hn(J, [j, W]), Yl(() => {
      Ut(j, S ? a : s), kt(j, S ? f : l), Jl(J) || Xl(j, i, O, W);
    });
  };
  return re(t, {
    onBeforeEnter(S) {
      hn(R, [S]), kt(S, s), kt(S, o);
    },
    onBeforeAppear(S) {
      hn(x, [S]), kt(S, a), kt(S, c);
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(S, j) {
      S._isLeaving = !0;
      const G = () => C(S, j);
      kt(S, u), kt(S, d), Nu(), Yl(() => {
        S._isLeaving && (Ut(S, u), kt(S, y), Jl(b) || Xl(S, i, $, G));
      }), hn(b, [S, G]);
    },
    onEnterCancelled(S) {
      _(S, !1), hn(g, [S]);
    },
    onAppearCancelled(S) {
      _(S, !0), hn(V, [S]);
    },
    onLeaveCancelled(S) {
      C(S), hn(N, [S]);
    }
  });
}
function mm(e) {
  if (e == null)
    return null;
  if (le(e))
    return [_s(e.enter), _s(e.leave)];
  {
    const t = _s(e);
    return [t, t];
  }
}
function _s(e) {
  const t = yr(e);
  return we.NODE_ENV !== "production" && No(t, "<transition> explicit duration"), t;
}
function kt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kn] || (e[Kn] = /* @__PURE__ */ new Set())).add(t);
}
function Ut(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Kn];
  n && (n.delete(t), n.size || (e[Kn] = void 0));
}
function Yl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gm = 0;
function Xl(e, t, n, i) {
  const r = e._endId = ++gm, s = () => {
    r === e._endId && i();
  };
  if (n)
    return setTimeout(s, n);
  const { type: o, timeout: l, propCount: a } = _u(e, t);
  if (!o)
    return i();
  const c = o + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(c, d), s();
  }, d = (y) => {
    y.target === e && ++f >= a && u();
  };
  setTimeout(() => {
    f < a && u();
  }, l + 1), e.addEventListener(c, d);
}
function _u(e, t) {
  const n = window.getComputedStyle(e), i = (E) => (n[E] || "").split(", "), r = i(`${Ht}Delay`), s = i(`${Ht}Duration`), o = Zl(r, s), l = i(`${oi}Delay`), a = i(`${oi}Duration`), c = Zl(l, a);
  let f = null, u = 0, d = 0;
  t === Ht ? o > 0 && (f = Ht, u = o, d = s.length) : t === oi ? c > 0 && (f = oi, u = c, d = a.length) : (u = Math.max(o, c), f = u > 0 ? o > c ? Ht : oi : null, d = f ? f === Ht ? s.length : a.length : 0);
  const y = f === Ht && /\b(transform|all)(,|$)/.test(
    i(`${Ht}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: d,
    hasTransform: y
  };
}
function Zl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Ql(n) + Ql(e[i])));
}
function Ql(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nu() {
  return document.body.offsetHeight;
}
function ym(e, t, n) {
  const i = e[Kn];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Dr = Symbol("_vod"), vu = Symbol("_vsh"), Ko = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Dr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : li(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), li(e, !0), i.enter(e)) : i.leave(e, () => {
      li(e, !1);
    }) : li(e, t));
  },
  beforeUnmount(e, { value: t }) {
    li(e, t);
  }
};
we.NODE_ENV !== "production" && (Ko.name = "show");
function li(e, t) {
  e.style.display = t ? e[Dr] : "none", e[vu] = !t;
}
function Em() {
  Ko.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const wu = Symbol(we.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function bm(e) {
  const t = St();
  if (!t) {
    we.NODE_ENV !== "production" && De("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((s) => Gs(s, r));
  };
  we.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const i = () => {
    const r = e(t.proxy);
    zs(t.subTree, r), n(r);
  };
  Sc(() => {
    Jc(i);
  }), Xr(() => {
    const r = new MutationObserver(i);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), Io(() => r.disconnect());
  });
}
function zs(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      zs(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Gs(e.el, t);
  else if (e.type === Ce)
    e.children.forEach((n) => zs(n, t));
  else if (e.type === rn) {
    let { el: n, anchor: i } = e;
    for (; n && (Gs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Gs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), i += `--${r}: ${t[r]};`;
    n[wu] = i;
  }
}
const _m = /(^|;)\s*display\s*:/;
function Nm(e, t, n) {
  const i = e.style, r = Y(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Y(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && ur(i, l, "");
        }
      else
        for (const o in t)
          n[o] == null && ur(i, o, "");
    for (const o in n)
      o === "display" && (s = !0), ur(i, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = i[wu];
      o && (n += ";" + o), i.cssText = n, s = _m.test(n);
    }
  } else t && e.removeAttribute("style");
  Dr in e && (e[Dr] = s ? i.display : "", e[vu] && (i.display = "none"));
}
const vm = /[^\\];\s*$/, ea = /\s*!important$/;
function ur(e, t, n) {
  if (U(n))
    n.forEach((i) => ur(e, t, i));
  else if (n == null && (n = ""), we.NODE_ENV !== "production" && vm.test(n) && De(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = wm(e, t);
    ea.test(n) ? e.setProperty(
      Me(i),
      n.replace(ea, ""),
      "important"
    ) : e[i] = n;
  }
}
const ta = ["Webkit", "Moz", "ms"], Ns = {};
function wm(e, t) {
  const n = Ns[t];
  if (n)
    return n;
  let i = de(t);
  if (i !== "filter" && i in e)
    return Ns[t] = i;
  i = vt(i);
  for (let r = 0; r < ta.length; r++) {
    const s = ta[r] + i;
    if (s in e)
      return Ns[t] = s;
  }
  return t;
}
const na = "http://www.w3.org/1999/xlink";
function ia(e, t, n, i, r, s = Qf(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(na, t.slice(6, t.length)) : e.setAttributeNS(na, t, n) : n == null || s && !uo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Ze(n) ? String(n) : n
  );
}
function Om(e, t, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    if (n == null) return;
    e[t] = n;
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? "" : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = uo(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (o) {
    we.NODE_ENV !== "production" && !s && De(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      o
    );
  }
  s && e.removeAttribute(t);
}
function It(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Sm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ra = Symbol("_vei");
function Cm(e, t, n, i, r = null) {
  const s = e[ra] || (e[ra] = {}), o = s[t];
  if (i && o)
    o.value = we.NODE_ENV !== "production" ? oa(i, t) : i;
  else {
    const [l, a] = Tm(t);
    if (i) {
      const c = s[t] = xm(
        we.NODE_ENV !== "production" ? oa(i, t) : i,
        r
      );
      It(e, l, c, a);
    } else o && (Sm(e, l, o, a), s[t] = void 0);
  }
}
const sa = /(?:Once|Passive|Capture)$/;
function Tm(e) {
  let t;
  if (sa.test(e)) {
    t = {};
    let i;
    for (; i = e.match(sa); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Me(e.slice(2)), t];
}
let vs = 0;
const Dm = /* @__PURE__ */ Promise.resolve(), km = () => vs || (Dm.then(() => vs = 0), vs = Date.now());
function xm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    rt(
      Vm(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = km(), n;
}
function oa(e, t) {
  return Q(e) || U(e) ? e : (De(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ee);
}
function Vm(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (r) => !r._stopped && i && i(r)
    );
  } else
    return t;
}
const la = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Im = (e, t, n, i, r, s) => {
  const o = r === "svg";
  t === "class" ? ym(e, i, o) : t === "style" ? Nm(e, n, i) : Mt(t) ? mr(t) || Cm(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Am(e, t, i, o)) ? (Om(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ia(e, t, i, o, s, t !== "value")) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ia(e, t, i, o));
};
function Am(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && la(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return la(t) && Y(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ou(e, t, n) {
  const i = /* @__PURE__ */ ko(e, t);
  class r extends rs {
    constructor(o) {
      super(i, o, n);
    }
  }
  return r.def = i, r;
}
/*! #__NO_SIDE_EFFECTS__ */
const Rm = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Ou(e, t, Mu), Mm = typeof HTMLElement < "u" ? HTMLElement : class {
};
class rs extends Mm {
  constructor(t, n = {}, i) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (we.NODE_ENV !== "production" && this.shadowRoot && De(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, zr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), Js(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver((i) => {
      for (const r of i)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (i, r = !1) => {
      const { props: s, styles: o } = i;
      let l;
      if (s && !U(s))
        for (const a in s) {
          const c = s[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = yr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[de(a)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, i = U(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of i.map(de))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(s) {
          this._setProp(r, s);
        }
      });
  }
  _setAttr(t) {
    let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const i = de(t);
    this._numberProps && this._numberProps[i] && (n = yr(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), i && (n === !0 ? this.setAttribute(Me(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Me(t), n + "") : n || this.removeAttribute(Me(t))));
  }
  _update() {
    Js(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = me(this._def, re({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, we.NODE_ENV !== "production" && (n.ceReload = (s) => {
        this._styles && (this._styles.forEach((o) => this.shadowRoot.removeChild(o)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, o) => {
        this.dispatchEvent(
          new CustomEvent(s, {
            detail: o
          })
        );
      };
      n.emit = (s, ...o) => {
        i(s, o), Me(s) !== s && i(Me(s), o);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof rs) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i), we.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(i);
    });
  }
}
function Pm(e = "$style") {
  {
    const t = St();
    if (!t)
      return we.NODE_ENV !== "production" && De("useCssModule must be called inside setup()"), ie;
    const n = t.type.__cssModules;
    if (!n)
      return we.NODE_ENV !== "production" && De("Current instance does not have CSS modules injected."), ie;
    const i = n[e];
    return i || (we.NODE_ENV !== "production" && De(`Current instance does not have CSS module named "${e}".`), ie);
  }
}
const Su = /* @__PURE__ */ new WeakMap(), Cu = /* @__PURE__ */ new WeakMap(), kr = Symbol("_moveCb"), aa = Symbol("_enterCb"), Tu = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ re({}, hm, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = St(), i = To();
    let r, s;
    return xo(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!jm(
        r[0].el,
        n.vnode.el,
        o
      ))
        return;
      r.forEach(Fm), r.forEach(Bm);
      const l = r.filter(Hm);
      Nu(), l.forEach((a) => {
        const c = a.el, f = c.style;
        kt(c, o), f.transform = f.webkitTransform = f.transitionDuration = "";
        const u = c[kr] = (d) => {
          d && d.target !== c || (!d || /transform$/.test(d.propertyName)) && (c.removeEventListener("transitionend", u), c[kr] = null, Ut(c, o));
        };
        c.addEventListener("transitionend", u);
      });
    }), () => {
      const o = X(e), l = bu(o);
      let a = o.tag || Ce;
      if (r = [], s)
        for (let c = 0; c < s.length; c++) {
          const f = s[c];
          f.el && f.el instanceof Element && (r.push(f), ln(
            f,
            Un(
              f,
              l,
              i,
              n
            )
          ), Su.set(
            f,
            f.el.getBoundingClientRect()
          ));
        }
      s = t.default ? Jr(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        f.key != null ? ln(
          f,
          Un(f, l, i, n)
        ) : we.NODE_ENV !== "production" && De("<TransitionGroup> children must be keyed.");
      }
      return me(a, null, s);
    };
  }
}, $m = (e) => delete e.mode;
Tu.props;
const Lm = Tu;
function Fm(e) {
  const t = e.el;
  t[kr] && t[kr](), t[aa] && t[aa]();
}
function Bm(e) {
  Cu.set(e, e.el.getBoundingClientRect());
}
function Hm(e) {
  const t = Su.get(e), n = Cu.get(e), i = t.left - n.left, r = t.top - n.top;
  if (i || r) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${i}px,${r}px)`, s.transitionDuration = "0s", e;
  }
}
function jm(e, t, n) {
  const i = e.cloneNode(), r = e[Kn];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && i.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && i.classList.add(l)), i.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(i);
  const { hasTransform: o } = _u(i);
  return s.removeChild(i), o;
}
const an = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return U(t) ? (n) => Gt(t, n) : t;
};
function Um(e) {
  e.target.composing = !0;
}
function ca(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign"), xr = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, r) {
    e[st] = an(r);
    const s = i || r.props && r.props.type === "number";
    It(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = gr(l)), e[st](l);
    }), n && It(e, "change", () => {
      e.value = e.value.trim();
    }), t || (It(e, "compositionstart", Um), It(e, "compositionend", ca), It(e, "change", ca));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: r, number: s } }, o) {
    if (e[st] = an(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? gr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (i && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Wo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[st] = an(n), It(e, "change", () => {
      const i = e._modelValue, r = Wn(e), s = e.checked, o = e[st];
      if (U(i)) {
        const l = jr(i, r), a = l !== -1;
        if (s && !a)
          o(i.concat(r));
        else if (!s && a) {
          const c = [...i];
          c.splice(l, 1), o(c);
        }
      } else if (Vn(i)) {
        const l = new Set(i);
        s ? l.add(r) : l.delete(r), o(l);
      } else
        o(ku(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ua,
  beforeUpdate(e, t, n) {
    e[st] = an(n), ua(e, t, n);
  }
};
function ua(e, { value: t, oldValue: n }, i) {
  e._modelValue = t, U(t) ? e.checked = jr(t, i.props.value) > -1 : Vn(t) ? e.checked = t.has(i.props.value) : t !== n && (e.checked = on(t, ku(e, !0)));
}
const qo = {
  created(e, { value: t }, n) {
    e.checked = on(t, n.props.value), e[st] = an(n), It(e, "change", () => {
      e[st](Wn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, i) {
    e[st] = an(i), t !== n && (e.checked = on(t, i.props.value));
  }
}, Du = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const r = Vn(t);
    It(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? gr(Wn(o)) : Wn(o)
      );
      e[st](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, zr(() => {
        e._assigning = !1;
      });
    }), e[st] = an(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    fa(e, t);
  },
  beforeUpdate(e, t, n) {
    e[st] = an(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || fa(e, t);
  }
};
function fa(e, t, n) {
  const i = e.multiple, r = U(t);
  if (i && !r && !Vn(t)) {
    we.NODE_ENV !== "production" && De(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, o = e.options.length; s < o; s++) {
    const l = e.options[s], a = Wn(l);
    if (i)
      if (r) {
        const c = typeof a;
        c === "string" || c === "number" ? l.selected = t.some((f) => String(f) === String(a)) : l.selected = jr(t, a) > -1;
      } else
        l.selected = t.has(a);
    else if (on(Wn(l), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Wn(e) {
  return "_value" in e ? e._value : e.value;
}
function ku(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const xu = {
  created(e, t, n) {
    tr(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    tr(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    tr(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    tr(e, t, n, i, "updated");
  }
};
function Vu(e, t) {
  switch (e) {
    case "SELECT":
      return Du;
    case "TEXTAREA":
      return xr;
    default:
      switch (t) {
        case "checkbox":
          return Wo;
        case "radio":
          return qo;
        default:
          return xr;
      }
  }
}
function tr(e, t, n, i, r) {
  const o = Vu(
    e.tagName,
    n.props && n.props.type
  )[r];
  o && o(e, t, n, i);
}
function Km() {
  xr.getSSRProps = ({ value: e }) => ({ value: e }), qo.getSSRProps = ({ value: e }, t) => {
    if (t.props && on(t.props.value, e))
      return { checked: !0 };
  }, Wo.getSSRProps = ({ value: e }, t) => {
    if (U(e)) {
      if (t.props && jr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (Vn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, xu.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Vu(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Wm = ["ctrl", "shift", "alt", "meta"], qm = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Wm.some((n) => e[`${n}Key`] && !t.includes(n))
}, zm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = qm[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...s);
  });
}, Gm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Jm = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = Me(r.key);
    if (t.some((o) => o === s || Gm[o] === s))
      return e(r);
  });
}, Iu = /* @__PURE__ */ re({ patchProp: Im }, dm);
let Ei, pa = !1;
function Au() {
  return Ei || (Ei = jc(Iu));
}
function Ru() {
  return Ei = pa ? Ei : Uc(Iu), pa = !0, Ei;
}
const Js = (...e) => {
  Au().render(...e);
}, Mu = (...e) => {
  Ru().hydrate(...e);
}, Pu = (...e) => {
  const t = Au().createApp(...e);
  we.NODE_ENV !== "production" && (Lu(t), Fu(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const r = Bu(i);
    if (!r) return;
    const s = t._component;
    !Q(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, $u(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
}, Ym = (...e) => {
  const t = Ru().createApp(...e);
  we.NODE_ENV !== "production" && (Lu(t), Fu(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const r = Bu(i);
    if (r)
      return n(r, !0, $u(r));
  }, t;
};
function $u(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Lu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => La(t) || Fa(t) || Ba(t),
    writable: !1
  });
}
function Fu(e) {
  if (jo()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        De(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return De(i), n;
      },
      set() {
        De(i);
      }
    });
  }
}
function Bu(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return we.NODE_ENV !== "production" && !t && De(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return we.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && De(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let da = !1;
const Xm = () => {
  da || (da = !0, Km(), Em());
}, Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: vc,
  BaseTransitionPropsValidators: Do,
  Comment: ye,
  DeprecationTypes: um,
  EffectScope: fo,
  ErrorCodes: qp,
  ErrorTypeStrings: im,
  Fragment: Ce,
  KeepAlive: gd,
  ReactiveEffect: jn,
  Static: rn,
  Suspense: $h,
  Teleport: _h,
  Text: At,
  TrackOpTypes: Bp,
  Transition: Uo,
  TransitionGroup: Lm,
  TriggerOpTypes: Hp,
  VueElement: rs,
  assertNumber: No,
  callWithAsyncErrorHandling: rt,
  callWithErrorHandling: Nt,
  camelize: de,
  capitalize: vt,
  cloneVNode: ot,
  compatUtils: cm,
  computed: tm,
  createApp: Pu,
  createBlock: Lo,
  createCommentVNode: zh,
  createElementBlock: Uh,
  createElementVNode: Fo,
  createHydrationRenderer: Uc,
  createPropsRestProxy: Gd,
  createRenderer: jc,
  createSSRApp: Ym,
  createSlots: xd,
  createStaticVNode: qh,
  createTextVNode: Bo,
  createVNode: me,
  customRef: fc,
  defineAsyncComponent: hd,
  defineComponent: ko,
  defineCustomElement: Ou,
  defineEmits: Ld,
  defineExpose: Fd,
  defineModel: jd,
  defineOptions: Bd,
  defineProps: $d,
  defineSSRCustomElement: Rm,
  defineSlots: Hd,
  devtools: rm,
  effect: lp,
  effectScope: rp,
  getCurrentInstance: St,
  getCurrentScope: qa,
  getTransitionRawChildren: Jr,
  guardReactiveProps: su,
  h: mu,
  handleError: fn,
  hasInjectionContext: ih,
  hydrate: Mu,
  initCustomFormatter: gu,
  initDirectivesForSSR: Xm,
  inject: kc,
  isMemoSame: yu,
  isProxy: _i,
  isReactive: tn,
  isReadonly: Ot,
  isRef: ke,
  isRuntimeOnly: jo,
  isShallow: _t,
  isVNode: Pt,
  markRaw: ac,
  mergeDefaults: qd,
  mergeModels: zd,
  mergeProps: lu,
  nextTick: zr,
  normalizeClass: Qn,
  normalizeProps: zf,
  normalizeStyle: Zn,
  onActivated: yd,
  onBeforeMount: Sc,
  onBeforeUnmount: Vo,
  onBeforeUpdate: _d,
  onDeactivated: Ed,
  onErrorCaptured: Od,
  onMounted: Xr,
  onRenderTracked: wd,
  onRenderTriggered: vd,
  onScopeDispose: sp,
  onServerPrefetch: Nd,
  onUnmounted: Io,
  onUpdated: xo,
  openBlock: ns,
  popScopeId: ud,
  provide: nh,
  proxyRefs: _o,
  pushScopeId: cd,
  queuePostFlushCb: wi,
  reactive: ei,
  readonly: go,
  ref: vn,
  registerRuntimeCompiler: fu,
  render: Js,
  renderList: kd,
  renderSlot: Vd,
  resolveComponent: Cd,
  resolveDirective: Dd,
  resolveDynamicComponent: Td,
  resolveFilter: am,
  resolveTransitionHooks: Un,
  setBlockTracking: Fs,
  setDevtoolsHook: sm,
  setTransitionHooks: ln,
  shallowReactive: lc,
  shallowReadonly: ut,
  shallowRef: xp,
  ssrContextKey: zc,
  ssrUtils: lm,
  stop: ap,
  toDisplayString: Ua,
  toHandlerKey: yt,
  toHandlers: Id,
  toRaw: X,
  toRef: Fp,
  toRefs: Pp,
  toValue: Ap,
  transformVNodeArgs: Kh,
  triggerRef: Ip,
  unref: bo,
  useAttrs: Wd,
  useCssModule: Pm,
  useCssVars: bm,
  useModel: xh,
  useSSRContext: Gc,
  useSlots: Kd,
  useTransitionState: To,
  vModelCheckbox: Wo,
  vModelDynamic: xu,
  vModelRadio: qo,
  vModelSelect: Du,
  vModelText: xr,
  vShow: Ko,
  version: qs,
  warn: De,
  watch: Zr,
  watchEffect: kh,
  watchPostEffect: Jc,
  watchSyncEffect: Yc,
  withAsyncContext: Jd,
  withCtx: Co,
  withDefaults: Ud,
  withDirectives: pd,
  withKeys: Jm,
  withMemo: nm,
  withModifiers: zm,
  withScopeId: fd
}, Symbol.toStringTag, { value: "Module" }));
var H = {};
const xi = Symbol(H.NODE_ENV !== "production" ? "Fragment" : ""), bi = Symbol(H.NODE_ENV !== "production" ? "Teleport" : ""), zo = Symbol(H.NODE_ENV !== "production" ? "Suspense" : ""), Vr = Symbol(H.NODE_ENV !== "production" ? "KeepAlive" : ""), Hu = Symbol(H.NODE_ENV !== "production" ? "BaseTransition" : ""), xn = Symbol(H.NODE_ENV !== "production" ? "openBlock" : ""), ju = Symbol(H.NODE_ENV !== "production" ? "createBlock" : ""), Uu = Symbol(H.NODE_ENV !== "production" ? "createElementBlock" : ""), Go = Symbol(H.NODE_ENV !== "production" ? "createVNode" : ""), Jo = Symbol(H.NODE_ENV !== "production" ? "createElementVNode" : ""), Bi = Symbol(H.NODE_ENV !== "production" ? "createCommentVNode" : ""), Yo = Symbol(H.NODE_ENV !== "production" ? "createTextVNode" : ""), Ku = Symbol(H.NODE_ENV !== "production" ? "createStaticVNode" : ""), Xo = Symbol(H.NODE_ENV !== "production" ? "resolveComponent" : ""), Zo = Symbol(
  H.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Qo = Symbol(H.NODE_ENV !== "production" ? "resolveDirective" : ""), el = Symbol(H.NODE_ENV !== "production" ? "resolveFilter" : ""), tl = Symbol(H.NODE_ENV !== "production" ? "withDirectives" : ""), nl = Symbol(H.NODE_ENV !== "production" ? "renderList" : ""), Wu = Symbol(H.NODE_ENV !== "production" ? "renderSlot" : ""), qu = Symbol(H.NODE_ENV !== "production" ? "createSlots" : ""), ss = Symbol(H.NODE_ENV !== "production" ? "toDisplayString" : ""), Ir = Symbol(H.NODE_ENV !== "production" ? "mergeProps" : ""), il = Symbol(H.NODE_ENV !== "production" ? "normalizeClass" : ""), rl = Symbol(H.NODE_ENV !== "production" ? "normalizeStyle" : ""), Vi = Symbol(H.NODE_ENV !== "production" ? "normalizeProps" : ""), Hi = Symbol(H.NODE_ENV !== "production" ? "guardReactiveProps" : ""), sl = Symbol(H.NODE_ENV !== "production" ? "toHandlers" : ""), Ys = Symbol(H.NODE_ENV !== "production" ? "camelize" : ""), Qm = Symbol(H.NODE_ENV !== "production" ? "capitalize" : ""), Xs = Symbol(H.NODE_ENV !== "production" ? "toHandlerKey" : ""), Ar = Symbol(H.NODE_ENV !== "production" ? "setBlockTracking" : ""), eg = Symbol(H.NODE_ENV !== "production" ? "pushScopeId" : ""), tg = Symbol(H.NODE_ENV !== "production" ? "popScopeId" : ""), ol = Symbol(H.NODE_ENV !== "production" ? "withCtx" : ""), ng = Symbol(H.NODE_ENV !== "production" ? "unref" : ""), ig = Symbol(H.NODE_ENV !== "production" ? "isRef" : ""), ll = Symbol(H.NODE_ENV !== "production" ? "withMemo" : ""), zu = Symbol(H.NODE_ENV !== "production" ? "isMemoSame" : ""), qn = {
  [xi]: "Fragment",
  [bi]: "Teleport",
  [zo]: "Suspense",
  [Vr]: "KeepAlive",
  [Hu]: "BaseTransition",
  [xn]: "openBlock",
  [ju]: "createBlock",
  [Uu]: "createElementBlock",
  [Go]: "createVNode",
  [Jo]: "createElementVNode",
  [Bi]: "createCommentVNode",
  [Yo]: "createTextVNode",
  [Ku]: "createStaticVNode",
  [Xo]: "resolveComponent",
  [Zo]: "resolveDynamicComponent",
  [Qo]: "resolveDirective",
  [el]: "resolveFilter",
  [tl]: "withDirectives",
  [nl]: "renderList",
  [Wu]: "renderSlot",
  [qu]: "createSlots",
  [ss]: "toDisplayString",
  [Ir]: "mergeProps",
  [il]: "normalizeClass",
  [rl]: "normalizeStyle",
  [Vi]: "normalizeProps",
  [Hi]: "guardReactiveProps",
  [sl]: "toHandlers",
  [Ys]: "camelize",
  [Qm]: "capitalize",
  [Xs]: "toHandlerKey",
  [Ar]: "setBlockTracking",
  [eg]: "pushScopeId",
  [tg]: "popScopeId",
  [ol]: "withCtx",
  [ng]: "unref",
  [ig]: "isRef",
  [ll]: "withMemo",
  [zu]: "isMemoSame"
};
function rg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    qn[t] = e[t];
  });
}
const Qe = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function sg(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: Qe
  };
}
function Ii(e, t, n, i, r, s, o, l = !1, a = !1, c = !1, f = Qe) {
  return e && (l ? (e.helper(xn), e.helper(Jn(e.inSSR, c))) : e.helper(Gn(e.inSSR, c)), o && e.helper(tl)), {
    type: 13,
    tag: t,
    props: n,
    children: i,
    patchFlag: r,
    dynamicProps: s,
    directives: o,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: f
  };
}
function ji(e, t = Qe) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function nt(e, t = Qe) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function ve(e, t) {
  return {
    type: 16,
    loc: Qe,
    key: Y(e) ? ee(e, !0) : e,
    value: t
  };
}
function ee(e, t = !1, n = Qe, i = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : i
  };
}
function pt(e, t = Qe) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Te(e, t = [], n = Qe) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function zn(e, t = void 0, n = !1, i = !1, r = Qe) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: i,
    loc: r
  };
}
function Zs(e, t, n, i = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: i,
    loc: Qe
  };
}
function og(e, t, n = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    isVOnce: n,
    loc: Qe
  };
}
function lg(e) {
  return {
    type: 21,
    body: e,
    loc: Qe
  };
}
function Gn(e, t) {
  return e || t ? Go : Jo;
}
function Jn(e, t) {
  return e || t ? ju : Uu;
}
function al(e, { helper: t, removeHelper: n, inSSR: i }) {
  e.isBlock || (e.isBlock = !0, n(Gn(i, e.isComponent)), t(xn), t(Jn(i, e.isComponent)));
}
const ha = new Uint8Array([123, 123]), ma = new Uint8Array([125, 125]);
function ga(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Xe(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function jt(e) {
  return e === 47 || e === 62 || Xe(e);
}
function Rr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ae = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class ag {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = ha, this.delimiterClose = ma, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = ha, this.delimiterClose = ma;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, i = t + 1;
    for (let r = this.newlines.length - 1; r >= 0; r--) {
      const s = this.newlines[r];
      if (t > s) {
        n = r + 2, i = t - s;
        break;
      }
    }
    return {
      column: i,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      jt(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Xe(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const i = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = i;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ae.TitleEnd || this.currentSequence === Ae.TextareaEnd && !this.inSFCRoot ? t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ae.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ae.Cdata.length && (this.state = 28, this.currentSequence = Ae.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ae.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : ga(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    jt(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (jt(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Rr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Xe(t) || (t === 62 ? (H.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ga(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Xe(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, H.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Xe(t) || (H.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Xe(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || jt(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : H.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || jt(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || jt(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || jt(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), H.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || jt(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Xe(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Xe(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Xe(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (H.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ae.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ae.ScriptEnd[3] ? this.startSpecial(Ae.ScriptEnd, 4) : t === Ae.StyleEnd[3] ? this.startSpecial(Ae.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ae.TitleEnd[3] ? this.startSpecial(Ae.TitleEnd, 4) : t === Ae.TextareaEnd[3] ? this.startSpecial(Ae.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ae.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const cg = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Qs(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function sn(e, t) {
  const n = Qs("MODE", t), i = Qs(e, t);
  return n === 3 ? i === !0 : i !== !1;
}
function Yn(e, t, n, ...i) {
  const r = sn(e, t);
  return H.NODE_ENV !== "production" && r && Mr(e, t, n, ...i), r;
}
function Mr(e, t, n, ...i) {
  if (Qs(e, t) === "suppress-warning")
    return;
  const { message: s, link: o } = cg[e], l = `(deprecation ${e}) ${typeof s == "function" ? s(...i) : s}${o ? `
  Details: ${o}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function cl(e) {
  throw e;
}
function Gu(e) {
  H.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function ue(e, t, n, i) {
  const r = H.NODE_ENV !== "production" ? (n || ug)[e] + (i || "") : `https://vuejs.org/error-reference/#compiler-${e}`, s = new SyntaxError(String(r));
  return s.code = e, s.loc = t, s;
}
const ug = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, Je = (e) => e.type === 4 && e.isStatic;
function Ju(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return bi;
    case "Suspense":
    case "suspense":
      return zo;
    case "KeepAlive":
    case "keep-alive":
      return Vr;
    case "BaseTransition":
    case "base-transition":
      return Hu;
  }
}
const fg = /^\d|[^\$\w\xA0-\uFFFF]/, ul = (e) => !fg.test(e), pg = /[A-Za-z_$\xA0-\uFFFF]/, dg = /[\.\?\w$\xA0-\uFFFF]/, hg = /\s+[.[]\s*|\s*[.[]\s+/g, mg = (e) => {
  e = e.trim().replace(hg, (o) => o.trim());
  let t = 0, n = [], i = 0, r = 0, s = null;
  for (let o = 0; o < e.length; o++) {
    const l = e.charAt(o);
    switch (t) {
      case 0:
        if (l === "[")
          n.push(t), t = 1, i++;
        else if (l === "(")
          n.push(t), t = 2, r++;
        else if (!(o === 0 ? pg : dg).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (n.push(t), t = 3, s = l) : l === "[" ? i++ : l === "]" && (--i || (t = n.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          n.push(t), t = 3, s = l;
        else if (l === "(")
          r++;
        else if (l === ")") {
          if (o === e.length - 1)
            return !1;
          --r || (t = n.pop());
        }
        break;
      case 3:
        l === s && (t = n.pop(), s = null);
        break;
    }
  }
  return !i && !r;
}, Yu = mg;
function ya(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function tt(e, t, n = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 7 && (n || r.exp) && (Y(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function Ai(e, t, n = !1, i = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const s = e.props[r];
    if (s.type === 6) {
      if (n) continue;
      if (s.name === t && (s.value || i))
        return s;
    } else if (s.name === "bind" && (s.exp || i) && Xt(s.arg, t))
      return s;
  }
}
function Xt(e, t) {
  return !!(e && Je(e) && e.content === t);
}
function gg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function ws(e) {
  return e.type === 5 || e.type === 2;
}
function yg(e) {
  return e.type === 7 && e.name === "slot";
}
function Pr(e) {
  return e.type === 1 && e.tagType === 3;
}
function $r(e) {
  return e.type === 1 && e.tagType === 2;
}
const Eg = /* @__PURE__ */ new Set([Vi, Hi]);
function Xu(e, t = []) {
  if (e && !Y(e) && e.type === 14) {
    const n = e.callee;
    if (!Y(n) && Eg.has(n))
      return Xu(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Lr(e, t, n) {
  let i, r = e.type === 13 ? e.props : e.arguments[2], s = [], o;
  if (r && !Y(r) && r.type === 14) {
    const l = Xu(r);
    r = l[0], s = l[1], o = s[s.length - 1];
  }
  if (r == null || Y(r))
    i = nt([t]);
  else if (r.type === 14) {
    const l = r.arguments[0];
    !Y(l) && l.type === 15 ? Ea(t, l) || l.properties.unshift(t) : r.callee === sl ? i = Te(n.helper(Ir), [
      nt([t]),
      r
    ]) : r.arguments.unshift(nt([t])), !i && (i = r);
  } else r.type === 15 ? (Ea(t, r) || r.properties.unshift(t), i = r) : (i = Te(n.helper(Ir), [
    nt([t]),
    r
  ]), o && o.callee === Hi && (o = s[s.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = i : e.props = i : o ? o.arguments[0] = i : e.arguments[2] = i;
}
function Ea(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const i = e.key.content;
    n = t.properties.some(
      (r) => r.key.type === 4 && r.key.content === i
    );
  }
  return n;
}
function Ri(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : e.charCodeAt(i).toString())}`;
}
function bg(e) {
  return e.type === 14 && e.callee === ll ? e.arguments[1].returns : e;
}
const _g = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, Zu = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: or,
  isPreTag: or,
  isCustomElement: or,
  onError: cl,
  onWarn: Gu,
  comments: H.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let se = Zu, Mi = null, Rt = "", $e = null, oe = null, ze = "", xt = -1, mn = -1, Fr = 0, zt = !1, eo = null;
const ge = [], pe = new ag(ge, {
  onerr: qe,
  ontext(e, t) {
    nr(Re(e, t), e, t);
  },
  ontextentity(e, t, n) {
    nr(e, t, n);
  },
  oninterpolation(e, t) {
    if (zt)
      return nr(Re(e, t), e, t);
    let n = e + pe.delimiterOpen.length, i = t - pe.delimiterClose.length;
    for (; Xe(Rt.charCodeAt(n)); )
      n++;
    for (; Xe(Rt.charCodeAt(i - 1)); )
      i--;
    let r = Re(n, i);
    r.includes("&") && (r = se.decodeEntities(r, !1)), to({
      type: 5,
      content: pr(r, !1, Se(n, i)),
      loc: Se(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Re(e, t);
    $e = {
      type: 1,
      tag: n,
      ns: se.getNamespace(n, ge[0], se.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Se(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    _a(e);
  },
  onclosetag(e, t) {
    const n = Re(e, t);
    if (!se.isVoidTag(n)) {
      let i = !1;
      for (let r = 0; r < ge.length; r++)
        if (ge[r].tag.toLowerCase() === n.toLowerCase()) {
          i = !0, r > 0 && qe(24, ge[0].loc.start.offset);
          for (let o = 0; o <= r; o++) {
            const l = ge.shift();
            fr(l, t, o < r);
          }
          break;
        }
      i || qe(23, Qu(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = $e.tag;
    $e.isSelfClosing = !0, _a(e), ge[0] && ge[0].tag === t && fr(ge.shift(), e);
  },
  onattribname(e, t) {
    oe = {
      type: 6,
      name: Re(e, t),
      nameLoc: Se(e, t),
      value: void 0,
      loc: Se(e)
    };
  },
  ondirname(e, t) {
    const n = Re(e, t), i = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!zt && i === "" && qe(26, e), zt || i === "")
      oe = {
        type: 6,
        name: n,
        nameLoc: Se(e, t),
        value: void 0,
        loc: Se(e)
      };
    else if (oe = {
      type: 7,
      name: i,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? ["prop"] : [],
      loc: Se(e)
    }, i === "pre") {
      zt = pe.inVPre = !0, eo = $e;
      const r = $e.props;
      for (let s = 0; s < r.length; s++)
        r[s].type === 7 && (r[s] = xg(r[s]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Re(e, t);
    if (zt)
      oe.name += n, yn(oe.nameLoc, t);
    else {
      const i = n[0] !== "[";
      oe.arg = pr(
        i ? n : n.slice(1, -1),
        i,
        Se(e, t),
        i ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Re(e, t);
    if (zt)
      oe.name += "." + n, yn(oe.nameLoc, t);
    else if (oe.name === "slot") {
      const i = oe.arg;
      i && (i.content += "." + n, yn(i.loc, t));
    } else
      oe.modifiers.push(n);
  },
  onattribdata(e, t) {
    ze += Re(e, t), xt < 0 && (xt = e), mn = t;
  },
  onattribentity(e, t, n) {
    ze += e, xt < 0 && (xt = t), mn = n;
  },
  onattribnameend(e) {
    const t = oe.loc.start.offset, n = Re(t, e);
    oe.type === 7 && (oe.rawName = n), $e.props.some(
      (i) => (i.type === 7 ? i.rawName : i.name) === n
    ) && qe(2, t);
  },
  onattribend(e, t) {
    if ($e && oe) {
      if (yn(oe.loc, t), e !== 0)
        if (ze.includes("&") && (ze = se.decodeEntities(
          ze,
          !0
        )), oe.type === 6)
          oe.name === "class" && (ze = tf(ze).trim()), e === 1 && !ze && qe(13, t), oe.value = {
            type: 2,
            content: ze,
            loc: e === 1 ? Se(xt, mn) : Se(xt - 1, mn + 1)
          }, pe.inSFCRoot && $e.tag === "template" && oe.name === "lang" && ze && ze !== "html" && pe.enterRCDATA(Rr("</template"), 0);
        else {
          let n = 0;
          oe.exp = pr(
            ze,
            !1,
            Se(xt, mn),
            0,
            n
          ), oe.name === "for" && (oe.forParseResult = vg(oe.exp));
          let i = -1;
          oe.name === "bind" && (i = oe.modifiers.indexOf("sync")) > -1 && Yn(
            "COMPILER_V_BIND_SYNC",
            se,
            oe.loc,
            oe.rawName
          ) && (oe.name = "model", oe.modifiers.splice(i, 1));
        }
      (oe.type !== 7 || oe.name !== "pre") && $e.props.push(oe);
    }
    ze = "", xt = mn = -1;
  },
  oncomment(e, t) {
    se.comments && to({
      type: 3,
      content: Re(e, t),
      loc: Se(e - 4, t + 3)
    });
  },
  onend() {
    const e = Rt.length;
    if (H.NODE_ENV !== "production" && pe.state !== 1)
      switch (pe.state) {
        case 5:
        case 8:
          qe(5, e);
          break;
        case 3:
        case 4:
          qe(
            25,
            pe.sectionStart
          );
          break;
        case 28:
          pe.currentSequence === Ae.CdataEnd ? qe(6, e) : qe(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          qe(9, e);
          break;
      }
    for (let t = 0; t < ge.length; t++)
      fr(ge[t], e - 1), qe(24, ge[t].loc.start.offset);
  },
  oncdata(e, t) {
    ge[0].ns !== 0 ? nr(Re(e, t), e, t) : qe(1, e - 9);
  },
  onprocessinginstruction(e) {
    (ge[0] ? ge[0].ns : se.ns) === 0 && qe(
      21,
      e - 1
    );
  }
}), ba = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Ng = /^\(|\)$/g;
function vg(e) {
  const t = e.loc, n = e.content, i = n.match(_g);
  if (!i) return;
  const [, r, s] = i, o = (u, d, y = !1) => {
    const E = t.start.offset + d, O = E + u.length;
    return pr(
      u,
      !1,
      Se(E, O),
      0,
      y ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(s.trim(), n.indexOf(s, r.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = r.trim().replace(Ng, "").trim();
  const c = r.indexOf(a), f = a.match(ba);
  if (f) {
    a = a.replace(ba, "").trim();
    const u = f[1].trim();
    let d;
    if (u && (d = n.indexOf(u, c + a.length), l.key = o(u, d, !0)), f[2]) {
      const y = f[2].trim();
      y && (l.index = o(
        y,
        n.indexOf(
          y,
          l.key ? d + u.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = o(a, c, !0)), l;
}
function Re(e, t) {
  return Rt.slice(e, t);
}
function _a(e) {
  pe.inSFCRoot && ($e.innerLoc = Se(e + 1, e + 1)), to($e);
  const { tag: t, ns: n } = $e;
  n === 0 && se.isPreTag(t) && Fr++, se.isVoidTag(t) ? fr($e, e) : (ge.unshift($e), (n === 1 || n === 2) && (pe.inXML = !0)), $e = null;
}
function nr(e, t, n) {
  {
    const s = ge[0] && ge[0].tag;
    s !== "script" && s !== "style" && e.includes("&") && (e = se.decodeEntities(e, !1));
  }
  const i = ge[0] || Mi, r = i.children[i.children.length - 1];
  r && r.type === 2 ? (r.content += e, yn(r.loc, n)) : i.children.push({
    type: 2,
    content: e,
    loc: Se(t, n)
  });
}
function fr(e, t, n = !1) {
  n ? yn(e.loc, Qu(t, 60)) : yn(e.loc, wg(t, 62) + 1), pe.inSFCRoot && (e.children.length ? e.innerLoc.end = re({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = re({}, e.innerLoc.start), e.innerLoc.source = Re(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: i, ns: r } = e;
  zt || (i === "slot" ? e.tagType = 2 : Na(e) ? e.tagType = 3 : Sg(e) && (e.tagType = 1)), pe.inRCDATA || (e.children = ef(e.children, e.tag)), r === 0 && se.isPreTag(i) && Fr--, eo === e && (zt = pe.inVPre = !1, eo = null), pe.inXML && (ge[0] ? ge[0].ns : se.ns) === 0 && (pe.inXML = !1);
  {
    const s = e.props;
    if (H.NODE_ENV !== "production" && sn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      se
    )) {
      let l = !1, a = !1;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        if (f.type === 7 && (f.name === "if" ? l = !0 : f.name === "for" && (a = !0)), l && a) {
          Mr(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            se,
            e.loc
          );
          break;
        }
      }
    }
    if (!pe.inSFCRoot && sn(
      "COMPILER_NATIVE_TEMPLATE",
      se
    ) && e.tag === "template" && !Na(e)) {
      H.NODE_ENV !== "production" && Mr(
        "COMPILER_NATIVE_TEMPLATE",
        se,
        e.loc
      );
      const l = ge[0] || Mi, a = l.children.indexOf(e);
      l.children.splice(a, 1, ...e.children);
    }
    const o = s.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && Yn(
      "COMPILER_INLINE_TEMPLATE",
      se,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: Re(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function wg(e, t) {
  let n = e;
  for (; Rt.charCodeAt(n) !== t && n < Rt.length - 1; ) n++;
  return n;
}
function Qu(e, t) {
  let n = e;
  for (; Rt.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Og = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Na({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Og.has(t[n].name))
        return !0;
  }
  return !1;
}
function Sg({ tag: e, props: t }) {
  if (se.isCustomElement(e))
    return !1;
  if (e === "component" || Cg(e.charCodeAt(0)) || Ju(e) || se.isBuiltInComponent && se.isBuiltInComponent(e) || se.isNativeTag && !se.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (i.type === 6) {
      if (i.name === "is" && i.value) {
        if (i.value.content.startsWith("vue:"))
          return !0;
        if (Yn(
          "COMPILER_IS_ON_ELEMENT",
          se,
          i.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      i.name === "bind" && Xt(i.arg, "is") && Yn(
        "COMPILER_IS_ON_ELEMENT",
        se,
        i.loc
      )
    )
      return !0;
  }
  return !1;
}
function Cg(e) {
  return e > 64 && e < 91;
}
const Tg = /\r\n/g;
function ef(e, t) {
  const n = se.whitespace !== "preserve";
  let i = !1;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (s.type === 2)
      if (Fr)
        s.content = s.content.replace(Tg, `
`);
      else if (Dg(s.content)) {
        const o = e[r - 1] && e[r - 1].type, l = e[r + 1] && e[r + 1].type;
        !o || !l || n && (o === 3 && (l === 3 || l === 1) || o === 1 && (l === 3 || l === 1 && kg(s.content))) ? (i = !0, e[r] = null) : s.content = " ";
      } else n && (s.content = tf(s.content));
  }
  if (Fr && t && se.isPreTag(t)) {
    const r = e[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  return i ? e.filter(Boolean) : e;
}
function Dg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Xe(e.charCodeAt(t)))
      return !1;
  return !0;
}
function kg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function tf(e) {
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++)
    Xe(e.charCodeAt(i)) ? n || (t += " ", n = !0) : (t += e[i], n = !1);
  return t;
}
function to(e) {
  (ge[0] || Mi).children.push(e);
}
function Se(e, t) {
  return {
    start: pe.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : pe.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Re(e, t)
  };
}
function yn(e, t) {
  e.end = pe.getPos(t), e.source = Re(e.start.offset, t);
}
function xg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Se(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function pr(e, t = !1, n, i = 0, r = 0) {
  return ee(e, t, n, i);
}
function qe(e, t, n) {
  se.onError(
    ue(e, Se(t, t), void 0, n)
  );
}
function Vg() {
  pe.reset(), $e = null, oe = null, ze = "", xt = -1, mn = -1, ge.length = 0;
}
function Ig(e, t) {
  if (Vg(), Rt = e, se = re({}, Zu), t) {
    let r;
    for (r in t)
      t[r] != null && (se[r] = t[r]);
  }
  if (H.NODE_ENV !== "production" && !se.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  pe.mode = se.parseMode === "html" ? 1 : se.parseMode === "sfc" ? 2 : 0, pe.inXML = se.ns === 1 || se.ns === 2;
  const n = t && t.delimiters;
  n && (pe.delimiterOpen = Rr(n[0]), pe.delimiterClose = Rr(n[1]));
  const i = Mi = sg([], e);
  return pe.parse(Rt), i.loc = Se(0, e.length), i.children = ef(i.children), Mi = null, i;
}
function Ag(e, t) {
  dr(
    e,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    nf(e, e.children[0])
  );
}
function nf(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !$r(t);
}
function dr(e, t, n = !1) {
  const { children: i } = e, r = i.length;
  let s = 0;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (l.type === 1 && l.tagType === 0) {
      const a = n ? 0 : it(l, t);
      if (a > 0) {
        if (a >= 2) {
          l.codegenNode.patchFlag = -1, l.codegenNode = t.hoist(l.codegenNode), s++;
          continue;
        }
      } else {
        const c = l.codegenNode;
        if (c.type === 13) {
          const f = c.patchFlag;
          if ((f === void 0 || f === 512 || f === 1) && sf(l, t) >= 2) {
            const u = of(l);
            u && (c.props = t.hoist(u));
          }
          c.dynamicProps && (c.dynamicProps = t.hoist(c.dynamicProps));
        }
      }
    }
    if (l.type === 1) {
      const a = l.tagType === 1;
      a && t.scopes.vSlot++, dr(l, t), a && t.scopes.vSlot--;
    } else if (l.type === 11)
      dr(l, t, l.children.length === 1);
    else if (l.type === 9)
      for (let a = 0; a < l.branches.length; a++)
        dr(
          l.branches[a],
          t,
          l.branches[a].children.length === 1
        );
  }
  if (s && t.transformHoist && t.transformHoist(i, t, e), s && s === r && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && U(e.codegenNode.children)) {
    const o = t.hoist(
      ji(e.codegenNode.children)
    );
    t.hmr && (o.content = `[...${o.content}]`), e.codegenNode.children = o;
  }
}
function it(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const i = n.get(e);
      if (i !== void 0)
        return i;
      const r = e.codegenNode;
      if (r.type !== 13 || r.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (r.patchFlag === void 0) {
        let o = 3;
        const l = sf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < o && (o = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = it(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < o && (o = c);
        }
        if (o > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const f = it(c.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < o && (o = f);
            }
          }
        if (r.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(xn), t.removeHelper(
            Jn(t.inSSR, r.isComponent)
          ), r.isBlock = !1, t.helper(Gn(t.inSSR, r.isComponent));
        }
        return n.set(e, o), o;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return it(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let o = 0; o < e.children.length; o++) {
        const l = e.children[o];
        if (Y(l) || Ze(l))
          continue;
        const a = it(l, t);
        if (a === 0)
          return 0;
        a < s && (s = a);
      }
      return s;
    default:
      return 0;
  }
}
const Rg = /* @__PURE__ */ new Set([
  il,
  rl,
  Vi,
  Hi
]);
function rf(e, t) {
  if (e.type === 14 && !Y(e.callee) && Rg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return it(n, t);
    if (n.type === 14)
      return rf(n, t);
  }
  return 0;
}
function sf(e, t) {
  let n = 3;
  const i = of(e);
  if (i && i.type === 15) {
    const { properties: r } = i;
    for (let s = 0; s < r.length; s++) {
      const { key: o, value: l } = r[s], a = it(o, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = it(l, t) : l.type === 14 ? c = rf(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function of(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Mg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  hmr: r = !1,
  cacheHandlers: s = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = Ee,
  isCustomElement: f = Ee,
  expressionPlugins: u = [],
  scopeId: d = null,
  slotted: y = !0,
  ssr: E = !1,
  inSSR: O = !1,
  ssrCssVars: $ = "",
  bindingMetadata: R = ie,
  inline: v = !1,
  isTS: g = !1,
  onError: b = cl,
  onWarn: N = Gu,
  compatConfig: x
}) {
  const T = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), V = {
    // options
    filename: t,
    selfName: T && vt(de(T[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    hmr: r,
    cacheHandlers: s,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: f,
    expressionPlugins: u,
    scopeId: d,
    slotted: y,
    ssr: E,
    inSSR: O,
    ssrCssVars: $,
    bindingMetadata: R,
    inline: v,
    isTS: g,
    onError: b,
    onWarn: N,
    compatConfig: x,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(_) {
      const C = V.helpers.get(_) || 0;
      return V.helpers.set(_, C + 1), _;
    },
    removeHelper(_) {
      const C = V.helpers.get(_);
      if (C) {
        const P = C - 1;
        P ? V.helpers.set(_, P) : V.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${qn[V.helper(_)]}`;
    },
    replaceNode(_) {
      if (H.NODE_ENV !== "production") {
        if (!V.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!V.parent)
          throw new Error("Cannot replace root node.");
      }
      V.parent.children[V.childIndex] = V.currentNode = _;
    },
    removeNode(_) {
      if (H.NODE_ENV !== "production" && !V.parent)
        throw new Error("Cannot remove root node.");
      const C = V.parent.children, P = _ ? C.indexOf(_) : V.currentNode ? V.childIndex : -1;
      if (H.NODE_ENV !== "production" && P < 0)
        throw new Error("node being removed is not a child of current parent");
      !_ || _ === V.currentNode ? (V.currentNode = null, V.onNodeRemoved()) : V.childIndex > P && (V.childIndex--, V.onNodeRemoved()), V.parent.children.splice(P, 1);
    },
    onNodeRemoved: Ee,
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      Y(_) && (_ = ee(_)), V.hoists.push(_);
      const C = ee(
        `_hoisted_${V.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return C.hoisted = _, C;
    },
    cache(_, C = !1) {
      return og(V.cached++, _, C);
    }
  };
  return V.filters = /* @__PURE__ */ new Set(), V;
}
function Pg(e, t) {
  const n = Mg(e, t);
  os(e, n), t.hoistStatic && Ag(e, n), t.ssr || $g(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function $g(e, t) {
  const { helper: n } = t, { children: i } = e;
  if (i.length === 1) {
    const r = i[0];
    if (nf(e, r) && r.codegenNode) {
      const s = r.codegenNode;
      s.type === 13 && al(s, t), e.codegenNode = s;
    } else
      e.codegenNode = r;
  } else if (i.length > 1) {
    let r = 64, s = Qt[64];
    H.NODE_ENV !== "production" && i.filter((o) => o.type !== 3).length === 1 && (r |= 2048, s += `, ${Qt[2048]}`), e.codegenNode = Ii(
      t,
      n(xi),
      void 0,
      e.children,
      r,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function Lg(e, t) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const r = e.children[n];
    Y(r) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = i, os(r, t));
  }
}
function os(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, i = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s](e, t);
    if (o && (U(o) ? i.push(...o) : i.push(o)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Bi);
      break;
    case 5:
      t.ssr || t.helper(ss);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++)
        os(e.branches[s], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Lg(e, t);
      break;
  }
  t.currentNode = e;
  let r = i.length;
  for (; r--; )
    i[r]();
}
function lf(e, t) {
  const n = Y(e) ? (i) => i === e : (i) => e.test(i);
  return (i, r) => {
    if (i.type === 1) {
      const { props: s } = i;
      if (i.tagType === 3 && s.some(yg))
        return;
      const o = [];
      for (let l = 0; l < s.length; l++) {
        const a = s[l];
        if (a.type === 7 && n(a.name)) {
          s.splice(l, 1), l--;
          const c = t(i, a, r);
          c && o.push(c);
        }
      }
      return o;
    }
  };
}
const ls = "/*#__PURE__*/", af = (e) => `${qn[e]}: _${qn[e]}`;
function Fg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: i = !1,
  filename: r = "template.vue.html",
  scopeId: s = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: f = !1,
  isTS: u = !1,
  inSSR: d = !1
}) {
  const y = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: r,
    scopeId: s,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: c,
    ssr: f,
    isTS: u,
    inSSR: d,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(O) {
      return `_${qn[O]}`;
    },
    push(O, $ = -2, R) {
      y.code += O;
    },
    indent() {
      E(++y.indentLevel);
    },
    deindent(O = !1) {
      O ? --y.indentLevel : E(--y.indentLevel);
    },
    newline() {
      E(y.indentLevel);
    }
  };
  function E(O) {
    y.push(
      `
` + "  ".repeat(O),
      0
      /* Start */
    );
  }
  return y;
}
function Bg(e, t = {}) {
  const n = Fg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: i,
    push: r,
    prefixIdentifiers: s,
    indent: o,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: f
  } = n, u = Array.from(e.helpers), d = u.length > 0, y = !s && i !== "module";
  Hg(e, n);
  const O = f ? "ssrRender" : "render", R = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (r(`function ${O}(${R}) {`), o(), y && (r("with (_ctx) {"), o(), d && (r(
    `const { ${u.map(af).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (Os(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (Os(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), Os(e.filters, "filter", n), a()), e.temps > 0) {
    r("let ");
    for (let v = 0; v < e.temps; v++)
      r(`${v > 0 ? ", " : ""}_temp${v}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(
    `
`,
    0
    /* Start */
  ), a()), f || r("return "), e.codegenNode ? Be(e.codegenNode, n) : r("null"), y && (l(), r("}")), l(), r("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Hg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: r,
    newline: s,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, c = l, f = Array.from(e.helpers);
  if (f.length > 0 && (r(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      Go,
      Jo,
      Bi,
      Yo,
      Ku
    ].filter((d) => f.includes(d)).map(af).join(", ");
    r(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  jg(e.hoists, t), s(), r("return ");
}
function Os(e, t, { helper: n, push: i, newline: r, isTS: s }) {
  const o = n(
    t === "filter" ? el : t === "component" ? Xo : Qo
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), i(
      `const ${Ri(a, t)} = ${o}(${JSON.stringify(a)}${c ? ", true" : ""})${s ? "!" : ""}`
    ), l < e.length - 1 && r();
  }
}
function jg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: i, helper: r, scopeId: s, mode: o } = t;
  i();
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    a && (n(
      `const _hoisted_${l + 1} = `
    ), Be(a, t), i());
  }
  t.pure = !1;
}
function Ug(e) {
  return Y(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function fl(e, t) {
  const n = e.length > 3 || H.NODE_ENV !== "production" && e.some((i) => U(i) || !Ug(i));
  t.push("["), n && t.indent(), Ui(e, t, n), n && t.deindent(), t.push("]");
}
function Ui(e, t, n = !1, i = !0) {
  const { push: r, newline: s } = t;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Y(l) ? r(
      l,
      -3
      /* Unknown */
    ) : U(l) ? fl(l, t) : Be(l, t), o < e.length - 1 && (n ? (i && r(","), s()) : i && r(", "));
  }
}
function Be(e, t) {
  if (Y(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Ze(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      H.NODE_ENV !== "production" && ya(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), Be(e.codegenNode, t);
      break;
    case 2:
      Kg(e, t);
      break;
    case 4:
      cf(e, t);
      break;
    case 5:
      Wg(e, t);
      break;
    case 12:
      Be(e.codegenNode, t);
      break;
    case 8:
      uf(e, t);
      break;
    case 3:
      zg(e, t);
      break;
    case 13:
      Gg(e, t);
      break;
    case 14:
      Yg(e, t);
      break;
    case 15:
      Xg(e, t);
      break;
    case 17:
      Zg(e, t);
      break;
    case 18:
      Qg(e, t);
      break;
    case 19:
      ey(e, t);
      break;
    case 20:
      ty(e, t);
      break;
    case 21:
      Ui(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (H.NODE_ENV !== "production")
        return ya(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Kg(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function cf(e, t) {
  const { content: n, isStatic: i } = e;
  t.push(
    i ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Wg(e, t) {
  const { push: n, helper: i, pure: r } = t;
  r && n(ls), n(`${i(ss)}(`), Be(e.content, t), n(")");
}
function uf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    Y(i) ? t.push(
      i,
      -3
      /* Unknown */
    ) : Be(i, t);
  }
}
function qg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), uf(e, t), n("]");
  else if (e.isStatic) {
    const i = ul(e.content) ? e.content : JSON.stringify(e.content);
    n(i, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function zg(e, t) {
  const { push: n, helper: i, pure: r } = t;
  r && n(ls), n(
    `${i(Bi)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Gg(e, t) {
  const { push: n, helper: i, pure: r } = t, {
    tag: s,
    props: o,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: f,
    isBlock: u,
    disableTracking: d,
    isComponent: y
  } = e;
  let E;
  if (a)
    if (H.NODE_ENV !== "production")
      if (a < 0)
        E = a + ` /* ${Qt[a]} */`;
      else {
        const $ = Object.keys(Qt).map(Number).filter((R) => R > 0 && a & R).map((R) => Qt[R]).join(", ");
        E = a + ` /* ${$} */`;
      }
    else
      E = String(a);
  f && n(i(tl) + "("), u && n(`(${i(xn)}(${d ? "true" : ""}), `), r && n(ls);
  const O = u ? Jn(t.inSSR, y) : Gn(t.inSSR, y);
  n(i(O) + "(", -2, e), Ui(
    Jg([s, o, l, E, c]),
    t
  ), n(")"), u && n(")"), f && (n(", "), Be(f, t), n(")"));
}
function Jg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Yg(e, t) {
  const { push: n, helper: i, pure: r } = t, s = Y(e.callee) ? e.callee : i(e.callee);
  r && n(ls), n(s + "(", -2, e), Ui(e.arguments, t), n(")");
}
function Xg(e, t) {
  const { push: n, indent: i, deindent: r, newline: s } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || H.NODE_ENV !== "production" && o.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && i();
  for (let a = 0; a < o.length; a++) {
    const { key: c, value: f } = o[a];
    qg(c, t), n(": "), Be(f, t), a < o.length - 1 && (n(","), s());
  }
  l && r(), n(l ? "}" : " }");
}
function Zg(e, t) {
  fl(e.elements, t);
}
function Qg(e, t) {
  const { push: n, indent: i, deindent: r } = t, { params: s, returns: o, body: l, newline: a, isSlot: c } = e;
  c && n(`_${qn[ol]}(`), n("(", -2, e), U(s) ? Ui(s, t) : s && Be(s, t), n(") => "), (a || l) && (n("{"), i()), o ? (a && n("return "), U(o) ? fl(o, t) : Be(o, t)) : l && Be(l, t), (a || l) && (r(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function ey(e, t) {
  const { test: n, consequent: i, alternate: r, newline: s } = e, { push: o, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !ul(n.content);
    u && o("("), cf(n, t), u && o(")");
  } else
    o("("), Be(n, t), o(")");
  s && l(), t.indentLevel++, s || o(" "), o("? "), Be(i, t), t.indentLevel--, s && c(), s || o(" "), o(": ");
  const f = r.type === 19;
  f || t.indentLevel++, Be(r, t), f || t.indentLevel--, s && a(
    !0
    /* without newline */
  );
}
function ty(e, t) {
  const { push: n, helper: i, indent: r, deindent: s, newline: o } = t;
  n(`_cache[${e.index}] || (`), e.isVOnce && (r(), n(`${i(Ar)}(-1),`), o(), n("(")), n(`_cache[${e.index}] = `), Be(e.value, t), e.isVOnce && (n(`).cacheIndex = ${e.index},`), o(), n(`${i(Ar)}(1),`), o(), n(`_cache[${e.index}]`), s()), n(")");
}
const ny = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), iy = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function En(e, t, n = !1, i = !1) {
  const r = e.content;
  if (r.trim())
    try {
      new Function(
        i ? ` ${r} ` : `return ${n ? `(${r}) => {}` : `(${r})`}`
      );
    } catch (s) {
      let o = s.message;
      const l = r.replace(iy, "").match(ny);
      l && (o = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        ue(
          45,
          e.loc,
          void 0,
          o
        )
      );
    }
}
const ry = (e, t) => {
  if (e.type === 5)
    e.content = Ss(
      e.content,
      t
    );
  else if (e.type === 1)
    for (let n = 0; n < e.props.length; n++) {
      const i = e.props[n];
      if (i.type === 7 && i.name !== "for") {
        const r = i.exp, s = i.arg;
        r && r.type === 4 && !(i.name === "on" && s) && (i.exp = Ss(
          r,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), s && s.type === 4 && !s.isStatic && (i.arg = Ss(s, t));
      }
    }
};
function Ss(e, t, n = !1, i = !1, r = Object.create(t.identifiers)) {
  return H.NODE_ENV !== "production" && En(e, t, n, i), e;
}
const sy = lf(
  /^(if|else|else-if)$/,
  (e, t, n) => oy(e, t, n, (i, r, s) => {
    const o = n.parent.children;
    let l = o.indexOf(i), a = 0;
    for (; l-- >= 0; ) {
      const c = o[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (s)
        i.codegenNode = wa(
          r,
          a,
          n
        );
      else {
        const c = ay(i.codegenNode);
        c.alternate = wa(
          r,
          a + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function oy(e, t, n, i) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc;
    n.onError(
      ue(28, t.loc)
    ), t.exp = ee("true", !1, r);
  }
  if (H.NODE_ENV !== "production" && t.exp && En(t.exp, n), t.name === "if") {
    const r = va(e, t), s = {
      type: 9,
      loc: e.loc,
      branches: [r]
    };
    if (n.replaceNode(s), i)
      return i(s, r, !0);
  } else {
    const r = n.parent.children, s = [];
    let o = r.indexOf(e);
    for (; o-- >= -1; ) {
      const l = r[o];
      if (l && l.type === 3) {
        n.removeNode(l), H.NODE_ENV !== "production" && s.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          ue(30, e.loc)
        ), n.removeNode();
        const a = va(e, t);
        if (H.NODE_ENV !== "production" && s.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...s, ...a.children]), H.NODE_ENV !== "production") {
          const f = a.userKey;
          f && l.branches.forEach(({ userKey: u }) => {
            ly(u, f) && n.onError(
              ue(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = i && i(l, a, !1);
        os(a, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          ue(30, e.loc)
        );
      break;
    }
  }
}
function va(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !tt(e, "for") ? e.children : [e],
    userKey: Ai(e, "key"),
    isTemplateIf: n
  };
}
function wa(e, t, n) {
  return e.condition ? Zs(
    e.condition,
    Oa(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Te(n.helper(Bi), [
      H.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : Oa(e, t, n);
}
function Oa(e, t, n) {
  const { helper: i } = n, r = ve(
    "key",
    ee(
      `${t}`,
      !1,
      Qe,
      2
    )
  ), { children: s } = e, o = s[0];
  if (s.length !== 1 || o.type !== 1)
    if (s.length === 1 && o.type === 11) {
      const a = o.codegenNode;
      return Lr(a, r, n), a;
    } else {
      let a = 64, c = Qt[64];
      return H.NODE_ENV !== "production" && !e.isTemplateIf && s.filter((f) => f.type !== 3).length === 1 && (a |= 2048, c += `, ${Qt[2048]}`), Ii(
        n,
        i(xi),
        nt([r]),
        s,
        a,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const a = o.codegenNode, c = bg(a);
    return c.type === 13 && al(c, n), Lr(c, r, n), a;
  }
}
function ly(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, i = t.exp;
    if (n.type !== i.type || n.type !== 4 || n.isStatic !== i.isStatic || n.content !== i.content)
      return !1;
  }
  return !0;
}
function ay(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const cy = (e, t, n) => {
  const { modifiers: i, loc: r } = e, s = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (s.type !== 4 || !s.isStatic)
      return n.onError(
        ue(
          52,
          s.loc
        )
      ), {
        props: [
          ve(s, ee("", !0, r))
        ]
      };
    ff(e), o = e.exp;
  }
  return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), i.includes("camel") && (s.type === 4 ? s.isStatic ? s.content = de(s.content) : s.content = `${n.helperString(Ys)}(${s.content})` : (s.children.unshift(`${n.helperString(Ys)}(`), s.children.push(")"))), n.inSSR || (i.includes("prop") && Sa(s, "."), i.includes("attr") && Sa(s, "^")), {
    props: [ve(s, o)]
  };
}, ff = (e, t) => {
  const n = e.arg, i = de(n.content);
  e.exp = ee(i, !1, n.loc);
}, Sa = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, uy = lf(
  "for",
  (e, t, n) => {
    const { helper: i, removeHelper: r } = n;
    return fy(e, t, n, (s) => {
      const o = Te(i(nl), [
        s.source
      ]), l = Pr(e), a = tt(e, "memo"), c = Ai(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && ff(c);
      const f = c && (c.type === 6 ? c.value ? ee(c.value.content, !0) : void 0 : c.exp), u = c && f ? ve("key", f) : null, d = s.source.type === 4 && s.source.constType > 0, y = d ? 64 : c ? 128 : 256;
      return s.codegenNode = Ii(
        n,
        i(xi),
        void 0,
        o,
        y,
        void 0,
        void 0,
        !0,
        !d,
        !1,
        e.loc
      ), () => {
        let E;
        const { children: O } = s;
        H.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const g = Ai(v, "key");
            if (g)
              return n.onError(
                ue(
                  33,
                  g.loc
                )
              ), !0;
          }
        });
        const $ = O.length !== 1 || O[0].type !== 1, R = $r(e) ? e : l && e.children.length === 1 && $r(e.children[0]) ? e.children[0] : null;
        if (R ? (E = R.codegenNode, l && u && Lr(E, u, n)) : $ ? E = Ii(
          n,
          i(xi),
          u ? nt([u]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (E = O[0].codegenNode, l && u && Lr(E, u, n), E.isBlock !== !d && (E.isBlock ? (r(xn), r(
          Jn(n.inSSR, E.isComponent)
        )) : r(
          Gn(n.inSSR, E.isComponent)
        )), E.isBlock = !d, E.isBlock ? (i(xn), i(Jn(n.inSSR, E.isComponent))) : i(Gn(n.inSSR, E.isComponent))), a) {
          const v = zn(
            no(s.parseResult, [
              ee("_cached")
            ])
          );
          v.body = lg([
            pt(["const _memo = (", a.exp, ")"]),
            pt([
              "if (_cached",
              ...f ? [" && _cached.key === ", f] : [],
              ` && ${n.helperString(
                zu
              )}(_cached, _memo)) return _cached`
            ]),
            pt(["const _item = ", E]),
            ee("_item.memo = _memo"),
            ee("return _item")
          ]), o.arguments.push(
            v,
            ee("_cache"),
            ee(String(n.cached++))
          );
        } else
          o.arguments.push(
            zn(
              no(s.parseResult),
              E,
              !0
            )
          );
      };
    });
  }
);
function fy(e, t, n, i) {
  if (!t.exp) {
    n.onError(
      ue(31, t.loc)
    );
    return;
  }
  const r = t.forParseResult;
  if (!r) {
    n.onError(
      ue(32, t.loc)
    );
    return;
  }
  pf(r, n);
  const { addIdentifiers: s, removeIdentifiers: o, scopes: l } = n, { source: a, value: c, key: f, index: u } = r, d = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: f,
    objectIndexAlias: u,
    parseResult: r,
    children: Pr(e) ? e.children : [e]
  };
  n.replaceNode(d), l.vFor++;
  const y = i && i(d);
  return () => {
    l.vFor--, y && y();
  };
}
function pf(e, t) {
  e.finalized || (H.NODE_ENV !== "production" && (En(e.source, t), e.key && En(
    e.key,
    t,
    !0
  ), e.index && En(
    e.index,
    t,
    !0
  ), e.value && En(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function no({ value: e, key: t, index: n }, i = []) {
  return py([e, t, n, ...i]);
}
function py(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, i) => n || ee("_".repeat(i + 1), !1));
}
const Ca = ee("undefined", !1), dy = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = tt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, hy = (e, t, n, i) => zn(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : i
);
function my(e, t, n = hy) {
  t.helper(ol);
  const { children: i, loc: r } = e, s = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = tt(e, "slot", !0);
  if (a) {
    const { arg: $, exp: R } = a;
    $ && !Je($) && (l = !0), s.push(
      ve(
        $ || ee("default", !0),
        n(R, void 0, i, r)
      )
    );
  }
  let c = !1, f = !1;
  const u = [], d = /* @__PURE__ */ new Set();
  let y = 0;
  for (let $ = 0; $ < i.length; $++) {
    const R = i[$];
    let v;
    if (!Pr(R) || !(v = tt(R, "slot", !0))) {
      R.type !== 3 && u.push(R);
      continue;
    }
    if (a) {
      t.onError(
        ue(37, v.loc)
      );
      break;
    }
    c = !0;
    const { children: g, loc: b } = R, {
      arg: N = ee("default", !0),
      exp: x,
      loc: T
    } = v;
    let V;
    Je(N) ? V = N ? N.content : "default" : l = !0;
    const _ = tt(R, "for"), C = n(x, _, g, b);
    let P, S;
    if (P = tt(R, "if"))
      l = !0, o.push(
        Zs(
          P.exp,
          ir(N, C, y++),
          Ca
        )
      );
    else if (S = tt(
      R,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let j = $, G;
      for (; j-- && (G = i[j], G.type === 3); )
        ;
      if (G && Pr(G) && tt(G, /^(else-)?if$/)) {
        let J = o[o.length - 1];
        for (; J.alternate.type === 19; )
          J = J.alternate;
        J.alternate = S.exp ? Zs(
          S.exp,
          ir(
            N,
            C,
            y++
          ),
          Ca
        ) : ir(N, C, y++);
      } else
        t.onError(
          ue(30, S.loc)
        );
    } else if (_) {
      l = !0;
      const j = _.forParseResult;
      j ? (pf(j, t), o.push(
        Te(t.helper(nl), [
          j.source,
          zn(
            no(j),
            ir(N, C),
            !0
          )
        ])
      )) : t.onError(
        ue(
          32,
          _.loc
        )
      );
    } else {
      if (V) {
        if (d.has(V)) {
          t.onError(
            ue(
              38,
              T
            )
          );
          continue;
        }
        d.add(V), V === "default" && (f = !0);
      }
      s.push(ve(N, C));
    }
  }
  if (!a) {
    const $ = (R, v) => {
      const g = n(R, void 0, v, r);
      return t.compatConfig && (g.isNonScopedSlot = !0), ve("default", g);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((R) => df(R)) && (f ? t.onError(
      ue(
        39,
        u[0].loc
      )
    ) : s.push(
      $(void 0, u)
    )) : s.push($(void 0, i));
  }
  const E = l ? 2 : hr(e.children) ? 3 : 1;
  let O = nt(
    s.concat(
      ve(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ee(
          E + (H.NODE_ENV !== "production" ? ` /* ${Ff[E]} */` : ""),
          !1
        )
      )
    ),
    r
  );
  return o.length && (O = Te(t.helper(qu), [
    O,
    ji(o)
  ])), {
    slots: O,
    hasDynamicSlots: l
  };
}
function ir(e, t, n) {
  const i = [
    ve("name", e),
    ve("fn", t)
  ];
  return n != null && i.push(
    ve("key", ee(String(n), !0))
  ), nt(i);
}
function hr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || hr(n.children))
          return !0;
        break;
      case 9:
        if (hr(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (hr(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function df(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : df(e.content);
}
const hf = /* @__PURE__ */ new WeakMap(), gy = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: i, props: r } = e, s = e.tagType === 1;
  let o = s ? yy(e, t) : `"${i}"`;
  const l = le(o) && o.callee === Zo;
  let a, c, f = 0, u, d, y, E = (
    // dynamic component may resolve to plain elements
    l || o === bi || o === zo || !s && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject" || i === "math")
  );
  if (r.length > 0) {
    const O = mf(
      e,
      t,
      void 0,
      s,
      l
    );
    a = O.props, f = O.patchFlag, d = O.dynamicPropNames;
    const $ = O.directives;
    y = $ && $.length ? ji(
      $.map((R) => by(R, t))
    ) : void 0, O.shouldUseBlock && (E = !0);
  }
  if (e.children.length > 0)
    if (o === Vr && (E = !0, f |= 1024, H.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      ue(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), s && // Teleport is not a real component and has dedicated runtime handling
    o !== bi && // explained above.
    o !== Vr) {
      const { slots: $, hasDynamicSlots: R } = my(e, t);
      c = $, R && (f |= 1024);
    } else if (e.children.length === 1 && o !== bi) {
      const $ = e.children[0], R = $.type, v = R === 5 || R === 8;
      v && it($, t) === 0 && (f |= 1), v || R === 2 ? c = $ : c = e.children;
    } else
      c = e.children;
  d && d.length && (u = _y(d)), e.codegenNode = Ii(
    t,
    o,
    a,
    c,
    f === 0 ? void 0 : f,
    u,
    y,
    !!E,
    !1,
    s,
    e.loc
  );
};
function yy(e, t, n = !1) {
  let { tag: i } = e;
  const r = io(i), s = Ai(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (s)
    if (r || sn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (s.type === 6 ? l = s.value && ee(s.value.content, !0) : (l = s.exp, l || (l = ee("is", !1, s.arg.loc))), l)
        return Te(t.helper(Zo), [
          l
        ]);
    } else s.type === 6 && s.value.content.startsWith("vue:") && (i = s.value.content.slice(4));
  const o = Ju(i) || t.isBuiltInComponent(i);
  return o ? (n || t.helper(o), o) : (t.helper(Xo), t.components.add(i), Ri(i, "component"));
}
function mf(e, t, n = e.props, i, r, s = !1) {
  const { tag: o, loc: l, children: a } = e;
  let c = [];
  const f = [], u = [], d = a.length > 0;
  let y = !1, E = 0, O = !1, $ = !1, R = !1, v = !1, g = !1, b = !1;
  const N = [], x = (C) => {
    c.length && (f.push(
      nt(Ta(c), l)
    ), c = []), C && f.push(C);
  }, T = () => {
    t.scopes.vFor > 0 && c.push(
      ve(
        ee("ref_for", !0),
        ee("true")
      )
    );
  }, V = ({ key: C, value: P }) => {
    if (Je(C)) {
      const S = C.content, j = Mt(S);
      if (j && (!i || r) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      S.toLowerCase() !== "onclick" && // omit v-model handlers
      S !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Zt(S) && (v = !0), j && Zt(S) && (b = !0), j && P.type === 14 && (P = P.arguments[0]), P.type === 20 || (P.type === 4 || P.type === 8) && it(P, t) > 0)
        return;
      S === "ref" ? O = !0 : S === "class" ? $ = !0 : S === "style" ? R = !0 : S !== "key" && !N.includes(S) && N.push(S), i && (S === "class" || S === "style") && !N.includes(S) && N.push(S);
    } else
      g = !0;
  };
  for (let C = 0; C < n.length; C++) {
    const P = n[C];
    if (P.type === 6) {
      const { loc: S, name: j, nameLoc: G, value: J } = P;
      let W = !0;
      if (j === "ref" && (O = !0, T()), j === "is" && (io(o) || J && J.content.startsWith("vue:") || sn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        ve(
          ee(j, !0, G),
          ee(
            J ? J.content : "",
            W,
            J ? J.loc : S
          )
        )
      );
    } else {
      const { name: S, arg: j, exp: G, loc: J, modifiers: W } = P, he = S === "bind", ae = S === "on";
      if (S === "slot") {
        i || t.onError(
          ue(40, J)
        );
        continue;
      }
      if (S === "once" || S === "memo" || S === "is" || he && Xt(j, "is") && (io(o) || sn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || ae && s)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (he && Xt(j, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        ae && d && Xt(j, "vue:before-update")) && (y = !0), he && Xt(j, "ref") && T(), !j && (he || ae)
      ) {
        if (g = !0, G)
          if (he) {
            if (T(), x(), H.NODE_ENV !== "production" && f.some((Ct) => Ct.type === 15 ? Ct.properties.some(({ key: ht }) => ht.type !== 4 || !ht.isStatic ? !0 : ht.content !== "class" && ht.content !== "style" && !Mt(ht.content)) : !0) && Yn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              J
            ), sn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              f.unshift(G);
              continue;
            }
            f.push(G);
          } else
            x({
              type: 14,
              loc: J,
              callee: t.helper(sl),
              arguments: i ? [G] : [G, "true"]
            });
        else
          t.onError(
            ue(
              he ? 34 : 35,
              J
            )
          );
        continue;
      }
      he && W.includes("prop") && (E |= 32);
      const Oe = t.directiveTransforms[S];
      if (Oe) {
        const { props: dt, needRuntime: Ct } = Oe(P, e, t);
        !s && dt.forEach(V), ae && j && !Je(j) ? x(nt(dt, l)) : c.push(...dt), Ct && (u.push(P), Ze(Ct) && hf.set(P, Ct));
      } else Pa(S) || (u.push(P), d && (y = !0));
    }
  }
  let _;
  if (f.length ? (x(), f.length > 1 ? _ = Te(
    t.helper(Ir),
    f,
    l
  ) : _ = f[0]) : c.length && (_ = nt(
    Ta(c),
    l
  )), g ? E |= 16 : ($ && !i && (E |= 2), R && !i && (E |= 4), N.length && (E |= 8), v && (E |= 32)), !y && (E === 0 || E === 32) && (O || b || u.length > 0) && (E |= 512), !t.inSSR && _)
    switch (_.type) {
      case 15:
        let C = -1, P = -1, S = !1;
        for (let J = 0; J < _.properties.length; J++) {
          const W = _.properties[J].key;
          Je(W) ? W.content === "class" ? C = J : W.content === "style" && (P = J) : W.isHandlerKey || (S = !0);
        }
        const j = _.properties[C], G = _.properties[P];
        S ? _ = Te(
          t.helper(Vi),
          [_]
        ) : (j && !Je(j.value) && (j.value = Te(
          t.helper(il),
          [j.value]
        )), G && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (R || G.value.type === 4 && G.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        G.value.type === 17) && (G.value = Te(
          t.helper(rl),
          [G.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = Te(
          t.helper(Vi),
          [
            Te(t.helper(Hi), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: u,
    patchFlag: E,
    dynamicPropNames: N,
    shouldUseBlock: y
  };
}
function Ta(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const s = r.key.content, o = t.get(s);
    o ? (s === "style" || s === "class" || Mt(s)) && Ey(o, r) : (t.set(s, r), n.push(r));
  }
  return n;
}
function Ey(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ji(
    [e.value, t.value],
    e.loc
  );
}
function by(e, t) {
  const n = [], i = hf.get(e);
  i ? n.push(t.helperString(i)) : (t.helper(Qo), t.directives.add(e.name), n.push(Ri(e.name, "directive")));
  const { loc: r } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const s = ee("true", !1, r);
    n.push(
      nt(
        e.modifiers.map(
          (o) => ve(o, s)
        ),
        r
      )
    );
  }
  return ji(n, e.loc);
}
function _y(e) {
  let t = "[";
  for (let n = 0, i = e.length; n < i; n++)
    t += JSON.stringify(e[n]), n < i - 1 && (t += ", ");
  return t + "]";
}
function io(e) {
  return e === "component" || e === "Component";
}
const Ny = (e, t) => {
  if ($r(e)) {
    const { children: n, loc: i } = e, { slotName: r, slotProps: s } = vy(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      r,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    s && (o[2] = s, l = 3), n.length && (o[3] = zn([], n, !1, !1, i), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = Te(
      t.helper(Wu),
      o,
      i
    );
  }
};
function vy(e, t) {
  let n = '"default"', i;
  const r = [];
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = de(o.name), r.push(o)));
    else if (o.name === "bind" && Xt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = de(o.arg.content);
        n = o.exp = ee(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && Je(o.arg) && (o.arg.content = de(o.arg.content)), r.push(o);
  }
  if (r.length > 0) {
    const { props: s, directives: o } = mf(
      e,
      t,
      r,
      !1,
      !1
    );
    i = s, o.length && t.onError(
      ue(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const wy = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, gf = (e, t, n, i) => {
  const { loc: r, modifiers: s, arg: o } = e;
  !e.exp && !s.length && n.onError(ue(35, r));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let u = o.content;
      H.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(ue(51, o.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const d = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        yt(de(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ee(d, !0, o.loc);
    } else
      l = pt([
        `${n.helperString(Xs)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(Xs)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = Yu(a.content), d = !(u || wy.test(a.content)), y = a.content.includes(";");
    H.NODE_ENV !== "production" && En(
      a,
      n,
      !1,
      y
    ), (d || c && u) && (a = pt([
      `${d ? "$event" : "(...args)"} => ${y ? "{" : "("}`,
      a,
      y ? "}" : ")"
    ]));
  }
  let f = {
    props: [
      ve(
        l,
        a || ee("() => {}", !1, r)
      )
    ]
  };
  return i && (f = i(f)), c && (f.props[0].value = n.cache(f.props[0].value)), f.props.forEach((u) => u.key.isHandlerKey = !0), f;
}, Oy = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let i, r = !1;
      for (let s = 0; s < n.length; s++) {
        const o = n[s];
        if (ws(o)) {
          r = !0;
          for (let l = s + 1; l < n.length; l++) {
            const a = n[l];
            if (ws(a))
              i || (i = n[s] = pt(
                [o],
                o.loc
              )), i.children.push(" + ", a), n.splice(l, 1), l--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!r || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (s) => s.type === 7 && !t.directiveTransforms[s.name]
      ) && e.tag !== "template")))
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          if (ws(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !t.ssr && it(o, t) === 0 && l.push(
              1 + (H.NODE_ENV !== "production" ? ` /* ${Qt[1]} */` : "")
            ), n[s] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: Te(
                t.helper(Yo),
                l
              )
            };
          }
        }
    };
}, Da = /* @__PURE__ */ new WeakSet(), Sy = (e, t) => {
  if (e.type === 1 && tt(e, "once", !0))
    return Da.has(e) || t.inVOnce || t.inSSR ? void 0 : (Da.add(e), t.inVOnce = !0, t.helper(Ar), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, yf = (e, t, n) => {
  const { exp: i, arg: r } = e;
  if (!i)
    return n.onError(
      ue(41, e.loc)
    ), rr();
  const s = i.loc.source, o = i.type === 4 ? i.content : s, l = n.bindingMetadata[s];
  if (l === "props" || l === "props-aliased")
    return n.onError(ue(44, i.loc)), rr();
  if (!o.trim() || !Yu(o) && !!1)
    return n.onError(
      ue(42, i.loc)
    ), rr();
  const c = r || ee("modelValue", !0), f = r ? Je(r) ? `onUpdate:${de(r.content)}` : pt(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let u;
  const d = n.isTS ? "($event: any)" : "$event";
  u = pt([
    `${d} => ((`,
    i,
    ") = $event)"
  ]);
  const y = [
    // modelValue: foo
    ve(c, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    ve(f, u)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const E = e.modifiers.map(($) => (ul($) ? $ : JSON.stringify($)) + ": true").join(", "), O = r ? Je(r) ? `${r.content}Modifiers` : pt([r, ' + "Modifiers"']) : "modelModifiers";
    y.push(
      ve(
        O,
        ee(
          `{ ${E} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return rr(y);
};
function rr(e = []) {
  return { props: e };
}
const Cy = /[\w).+\-_$\]]/, Ty = (e, t) => {
  sn("COMPILER_FILTERS", t) && (e.type === 5 ? Br(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Br(n.exp, t);
  }));
};
function Br(e, t) {
  if (e.type === 4)
    ka(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      typeof i == "object" && (i.type === 4 ? ka(i, t) : i.type === 8 ? Br(e, t) : i.type === 5 && Br(i.content, t));
    }
}
function ka(e, t) {
  const n = e.content;
  let i = !1, r = !1, s = !1, o = !1, l = 0, a = 0, c = 0, f = 0, u, d, y, E, O = [];
  for (y = 0; y < n.length; y++)
    if (d = u, u = n.charCodeAt(y), i)
      u === 39 && d !== 92 && (i = !1);
    else if (r)
      u === 34 && d !== 92 && (r = !1);
    else if (s)
      u === 96 && d !== 92 && (s = !1);
    else if (o)
      u === 47 && d !== 92 && (o = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(y + 1) !== 124 && n.charCodeAt(y - 1) !== 124 && !l && !a && !c)
      E === void 0 ? (f = y + 1, E = n.slice(0, y).trim()) : $();
    else {
      switch (u) {
        case 34:
          r = !0;
          break;
        case 39:
          i = !0;
          break;
        case 96:
          s = !0;
          break;
        case 40:
          c++;
          break;
        case 41:
          c--;
          break;
        case 91:
          a++;
          break;
        case 93:
          a--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (u === 47) {
        let R = y - 1, v;
        for (; R >= 0 && (v = n.charAt(R), v === " "); R--)
          ;
        (!v || !Cy.test(v)) && (o = !0);
      }
    }
  E === void 0 ? E = n.slice(0, y).trim() : f !== 0 && $();
  function $() {
    O.push(n.slice(f, y).trim()), f = y + 1;
  }
  if (O.length) {
    for (H.NODE_ENV !== "production" && Mr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), y = 0; y < O.length; y++)
      E = Dy(E, O[y], t);
    e.content = E, e.ast = void 0;
  }
}
function Dy(e, t, n) {
  n.helper(el);
  const i = t.indexOf("(");
  if (i < 0)
    return n.filters.add(t), `${Ri(t, "filter")}(${e})`;
  {
    const r = t.slice(0, i), s = t.slice(i + 1);
    return n.filters.add(r), `${Ri(r, "filter")}(${e}${s !== ")" ? "," + s : s}`;
  }
}
const xa = /* @__PURE__ */ new WeakSet(), ky = (e, t) => {
  if (e.type === 1) {
    const n = tt(e, "memo");
    return !n || xa.has(e) ? void 0 : (xa.add(e), () => {
      const i = e.codegenNode || t.currentNode.codegenNode;
      i && i.type === 13 && (e.tagType !== 1 && al(i, t), e.codegenNode = Te(t.helper(ll), [
        n.exp,
        zn(void 0, i),
        "_cache",
        String(t.cached++)
      ]));
    });
  }
};
function xy(e) {
  return [
    [
      Sy,
      sy,
      ky,
      uy,
      Ty,
      ...H.NODE_ENV !== "production" ? [ry] : [],
      Ny,
      gy,
      dy,
      Oy
    ],
    {
      on: gf,
      bind: cy,
      model: yf
    }
  ];
}
function Vy(e, t = {}) {
  const n = t.onError || cl, i = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(ue(47)) : i && n(ue(48));
  const r = !1;
  t.cacheHandlers && n(ue(49)), t.scopeId && !i && n(ue(50));
  const s = re({}, t, {
    prefixIdentifiers: r
  }), o = Y(e) ? Ig(e, s) : e, [l, a] = xy();
  return Pg(
    o,
    re({}, s, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: re(
        {},
        a,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Bg(o, s);
}
const Iy = () => ({ props: [] });
var He = {};
const Ef = Symbol(He.NODE_ENV !== "production" ? "vModelRadio" : ""), bf = Symbol(He.NODE_ENV !== "production" ? "vModelCheckbox" : ""), _f = Symbol(He.NODE_ENV !== "production" ? "vModelText" : ""), Nf = Symbol(He.NODE_ENV !== "production" ? "vModelSelect" : ""), ro = Symbol(He.NODE_ENV !== "production" ? "vModelDynamic" : ""), vf = Symbol(He.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""), wf = Symbol(He.NODE_ENV !== "production" ? "vOnKeysGuard" : ""), Of = Symbol(He.NODE_ENV !== "production" ? "vShow" : ""), pl = Symbol(He.NODE_ENV !== "production" ? "Transition" : ""), Sf = Symbol(He.NODE_ENV !== "production" ? "TransitionGroup" : "");
rg({
  [Ef]: "vModelRadio",
  [bf]: "vModelCheckbox",
  [_f]: "vModelText",
  [Nf]: "vModelSelect",
  [ro]: "vModelDynamic",
  [vf]: "withModifiers",
  [wf]: "withKeys",
  [Of]: "vShow",
  [pl]: "Transition",
  [Sf]: "TransitionGroup"
});
let Mn;
function Ay(e, t = !1) {
  return Mn || (Mn = document.createElement("div")), t ? (Mn.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, Mn.children[0].getAttribute("foo")) : (Mn.innerHTML = e, Mn.textContent);
}
const Ry = {
  parseMode: "html",
  isVoidTag: Zf,
  isNativeTag: (e) => La(e) || Fa(e) || Ba(e),
  isPreTag: (e) => e === "pre",
  decodeEntities: Ay,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return pl;
    if (e === "TransitionGroup" || e === "transition-group")
      return Sf;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let i = t ? t.ns : n;
    if (t && i === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (r) => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")
        ) && (i = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
    else t && i === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (i = 0);
    if (i === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return i;
  }
}, My = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ee("style", !0, t.loc),
      exp: Py(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Py = (e, t) => {
  const n = $a(e);
  return ee(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function ft(e, t) {
  return ue(
    e,
    t,
    He.NODE_ENV !== "production" ? $y : void 0
  );
}
const $y = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, Ly = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ft(53, r)
  ), t.children.length && (n.onError(
    ft(54, r)
  ), t.children.length = 0), {
    props: [
      ve(
        ee("innerHTML", !0, r),
        i || ee("", !0)
      )
    ]
  };
}, Fy = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ft(55, r)
  ), t.children.length && (n.onError(
    ft(56, r)
  ), t.children.length = 0), {
    props: [
      ve(
        ee("textContent", !0),
        i ? it(i, n) > 0 ? i : Te(
          n.helperString(ss),
          [i],
          r
        ) : ee("", !0)
      )
    ]
  };
}, By = (e, t, n) => {
  const i = yf(e, t, n);
  if (!i.props.length || t.tagType === 1)
    return i;
  e.arg && n.onError(
    ft(
      58,
      e.arg.loc
    )
  );
  function r() {
    const l = tt(t, "bind");
    l && Xt(l.arg, "value") && n.onError(
      ft(
        60,
        l.loc
      )
    );
  }
  const { tag: s } = t, o = n.isCustomElement(s);
  if (s === "input" || s === "textarea" || s === "select" || o) {
    let l = _f, a = !1;
    if (s === "input" || o) {
      const c = Ai(t, "type");
      if (c) {
        if (c.type === 7)
          l = ro;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              l = Ef;
              break;
            case "checkbox":
              l = bf;
              break;
            case "file":
              a = !0, n.onError(
                ft(
                  59,
                  e.loc
                )
              );
              break;
            default:
              He.NODE_ENV !== "production" && r();
              break;
          }
      } else gg(t) ? l = ro : He.NODE_ENV !== "production" && r();
    } else s === "select" ? l = Nf : He.NODE_ENV !== "production" && r();
    a || (i.needRuntime = n.helper(l));
  } else
    n.onError(
      ft(
        57,
        e.loc
      )
    );
  return i.props = i.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), i;
}, Hy = /* @__PURE__ */ Ie("passive,once,capture"), jy = /* @__PURE__ */ Ie(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Uy = /* @__PURE__ */ Ie("left,right"), Cf = /* @__PURE__ */ Ie(
  "onkeyup,onkeydown,onkeypress",
  !0
), Ky = (e, t, n, i) => {
  const r = [], s = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    a === "native" && Yn(
      "COMPILER_V_ON_NATIVE",
      n,
      i
    ) || Hy(a) ? o.push(a) : Uy(a) ? Je(e) ? Cf(e.content) ? r.push(a) : s.push(a) : (r.push(a), s.push(a)) : jy(a) ? s.push(a) : r.push(a);
  }
  return {
    keyModifiers: r,
    nonKeyModifiers: s,
    eventOptionModifiers: o
  };
}, Va = (e, t) => Je(e) && e.content.toLowerCase() === "onclick" ? ee(t, !0) : e.type !== 4 ? pt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Wy = (e, t, n) => gf(e, t, n, (i) => {
  const { modifiers: r } = e;
  if (!r.length) return i;
  let { key: s, value: o } = i.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Ky(s, r, n, e.loc);
  if (a.includes("right") && (s = Va(s, "onContextmenu")), a.includes("middle") && (s = Va(s, "onMouseup")), a.length && (o = Te(n.helper(vf), [
    o,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!Je(s) || Cf(s.content)) && (o = Te(n.helper(wf), [
    o,
    JSON.stringify(l)
  ])), c.length) {
    const f = c.map(vt).join("");
    s = Je(s) ? ee(`${s.content}${f}`, !0) : pt(["(", s, `) + "${f}"`]);
  }
  return {
    props: [ve(s, o)]
  };
}), qy = (e, t, n) => {
  const { exp: i, loc: r } = e;
  return i || n.onError(
    ft(61, r)
  ), {
    props: [],
    needRuntime: n.helper(Of)
  };
}, zy = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === pl)
    return () => {
      if (!e.children.length)
        return;
      Tf(e) && t.onError(
        ft(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const i = e.children[0];
      if (i.type === 1)
        for (const r of i.props)
          r.type === 7 && r.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function Tf(e) {
  const t = e.children = e.children.filter(
    (i) => i.type !== 3 && !(i.type === 2 && !i.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Tf);
}
const Gy = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (He.NODE_ENV !== "production" && t.onError(
    ft(
      63,
      e.loc
    )
  ), t.removeNode());
}, Jy = [
  My,
  ...He.NODE_ENV !== "production" ? [zy] : []
], Yy = {
  cloak: Iy,
  html: Ly,
  text: Fy,
  model: By,
  // override compiler-core
  on: Wy,
  // override compiler-core
  show: qy
};
function Xy(e, t = {}) {
  return Vy(
    e,
    re({}, Ry, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Gy,
        ...Jy,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: re(
        {},
        Yy,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var fi = {};
function Zy() {
  gu();
}
fi.NODE_ENV !== "production" && Zy();
const Ia = /* @__PURE__ */ new WeakMap();
function Qy(e) {
  let t = Ia.get(e ?? ie);
  return t || (t = /* @__PURE__ */ Object.create(null), Ia.set(e ?? ie, t)), t;
}
function eE(e, t) {
  if (!Y(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return fi.NODE_ENV !== "production" && De("invalid template option: ", e), Ee;
  const n = e, i = Qy(t), r = i[n];
  if (r)
    return r;
  if (e[0] === "#") {
    const c = document.querySelector(e);
    fi.NODE_ENV !== "production" && !c && De(`Template element not found or is empty: ${e}`), e = c ? c.innerHTML : "";
  }
  const s = re(
    {
      hoistStatic: !0,
      onError: fi.NODE_ENV !== "production" ? l : void 0,
      onWarn: fi.NODE_ENV !== "production" ? (c) => l(c, !0) : Ee
    },
    t
  );
  !s.isCustomElement && typeof customElements < "u" && (s.isCustomElement = (c) => !!customElements.get(c));
  const { code: o } = Xy(e, s);
  function l(c, f = !1) {
    const u = f ? c.message : `Template compilation error: ${c.message}`, d = c.loc && jf(
      e,
      c.loc.start.offset,
      c.loc.end.offset
    );
    De(d ? `${u}
${d}` : u);
  }
  const a = new Function("Vue", o)(Zm);
  return a._rc = !0, i[n] = a;
}
fu(eE);
class tE {
  constructor(t, n = "state_acephale") {
    Ft(this, "state");
    Ft(this, "trySetFromLocalStorage", () => {
      const t = localStorage.getItem(this.key);
      if (t !== null) {
        const n = JSON.parse(t);
        Object.assign(this.state, n);
      }
    });
    this.key = n, this.key = n, this.state = ei(t), this.sync(), this.watchPersistence();
  }
  sync() {
    this.trySetFromLocalStorage(), window.addEventListener("focus", this.trySetFromLocalStorage);
  }
  watchPersistence() {
    Zr(this.state, (t) => {
      this.saveToLocalStorage(this.key, t);
    });
  }
  saveToLocalStorage(t, n) {
    localStorage.setItem(t, JSON.stringify(n));
  }
}
function nE(e, t) {
  return Number.isInteger(Number.parseInt(e)) ? Number.parseInt(e) : t;
}
function Df(e) {
  const t = document.getElementsByTagName("head")[0];
  if (!t)
    return;
  const n = document.createElement("style");
  n.type = "text/css", n.innerHTML = e.replace(/;/g, " !important;"), t.appendChild(n);
}
function iE(e) {
  const t = new DOMParser().parseFromString(e, "text/html").body;
  return t.children.length > 1 ? t : t.firstElementChild;
}
const Pn = {
  EXCLUDE: {
    filterExclude: { value: !1, persistent: !0, watch: !0 },
    filterExcludeWords: { value: "", persistent: !0, watch: "filterExclude" }
  },
  INCLUDE: {
    filterInclude: { value: !1, persistent: !0, watch: !0 },
    filterIncludeWords: { value: "", persistent: !0, watch: "filterInclude" }
  },
  MISC: {
    infiniteScrollEnabled: { value: !0, persistent: !0, watch: !0 },
    uiEnabled: { value: !0, persistent: !0, watch: !0 }
  },
  DURATION_FILTER: {
    filterDuration: { value: !1, persistent: !0, watch: !0 },
    filterDurationFrom: { value: 0, type: "number", persistent: !0, watch: "filterDuration" },
    filterDurationTo: { value: 600, type: "number", persistent: !0, watch: "filterDuration" }
  },
  PRIVACY_FILTER: {
    filterPrivate: { value: !1, persistent: !0, watch: !0 },
    filterPublic: { value: !1, persistent: !0, watch: !0 }
  },
  PAGINATION: {
    pagIndexLast: { value: 1, persistent: !1, watch: !0 },
    pagIndexCur: { value: 1, persistent: !1, watch: !0 }
  }
}, kf = Object.assign({}, Pn.EXCLUDE, Pn.INCLUDE, Pn.MISC, Pn.PAGINATION), rE = Object.assign({}, kf, Pn.DURATION_FILTER), cE = Object.assign({}, rE, Pn.PRIVACY_FILTER);
class uE {
  constructor(t = kf) {
    Ft(this, "callbacks", []);
    Ft(this, "state");
    Ft(this, "stateLocale");
    Ft(this, "parseState", (t) => {
      const n = {}, i = {};
      Object.entries(t).forEach(([r, s]) => {
        (s.persistent ? n : i)[r] = s.value;
      }), Object.assign(this, {
        state: new tE(n).state,
        stateLocale: ei(i)
      }), Object.entries(t).forEach(([r, s]) => {
        if (!s.watch) return;
        const o = s.persistent ? this.state : this.stateLocale;
        Zr(() => o[r], (l, a) => {
          s.type === "number" && (o[r] = nE(l, a));
          const c = typeof s.watch == "boolean";
          if (c || o[s.watch]) {
            const f = c ? r : s.watch;
            this.notify({ [f]: o[f] });
          }
        }, { deep: !0 });
      });
    });
    this.parseState(t);
  }
  subscribe(t) {
    this.callbacks.push(t);
  }
  notify(t) {
    this.callbacks.forEach((n) => n(t));
  }
}
const xf = {
  excludeFilter: [
    { type: "checkbox", model: "state.filterExclude", label: "exclude" },
    { type: "text", model: "state.filterExcludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  includeFilter: [
    { type: "checkbox", model: "state.filterInclude", label: "include" },
    { type: "text", model: "state.filterIncludeWords", placeholder: "regexp: word, word1|word2, f:full_word..." }
  ],
  infiniteScroll: [
    { type: "checkbox", model: "state.infiniteScrollEnabled", label: "infinite scroll" },
    { type: "span", innerText: "{{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}", "v-if": "stateLocale.pagIndexLast > 1" }
  ],
  durationFilter: [
    { type: "checkbox", model: "state.filterDuration", label: "duration" },
    { type: "number", model: "state.filterDurationFrom", step: "10", min: "0", max: "72000", labelBefore: "from" },
    { type: "number", model: "state.filterDurationTo", step: "10", min: "0", max: "72000", labelBefore: "to" }
  ]
}, sE = (e) => Object.entries(xf).reduce((t, [n, i], r) => (r === 2 && Object.assign(t, e), Object.assign(t, { [n]: i }), t), {}), fE = sE({
  privateFilter: [
    { type: "checkbox", model: "state.filterPrivate", label: "private" },
    { type: "checkbox", model: "state.filterPublic", label: "public" }
  ]
}), oE = '#tapermonkey-app *,#tapermonkey-app :before,#tapermonkey-app :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}#tapermonkey-app :before,#tapermonkey-app :after{--tw-content: ""}#tapermonkey-app html,#tapermonkey-app :host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}#tapermonkey-app body{margin:0;line-height:inherit}#tapermonkey-app hr{height:0;color:inherit;border-top-width:1px}#tapermonkey-app abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}#tapermonkey-app h1,#tapermonkey-app h2,#tapermonkey-app h3,#tapermonkey-app h4,#tapermonkey-app h5,#tapermonkey-app h6{font-size:inherit;font-weight:inherit}#tapermonkey-app a{color:inherit;text-decoration:inherit}#tapermonkey-app b,#tapermonkey-app strong{font-weight:bolder}#tapermonkey-app code,#tapermonkey-app kbd,#tapermonkey-app samp,#tapermonkey-app pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}#tapermonkey-app small{font-size:80%}#tapermonkey-app sub,#tapermonkey-app sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}#tapermonkey-app sub{bottom:-.25em}#tapermonkey-app sup{top:-.5em}#tapermonkey-app table{text-indent:0;border-color:inherit;border-collapse:collapse}#tapermonkey-app button,#tapermonkey-app input,#tapermonkey-app optgroup,#tapermonkey-app select,#tapermonkey-app textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}#tapermonkey-app button,#tapermonkey-app select{text-transform:none}#tapermonkey-app button,#tapermonkey-app input:where([type=button]),#tapermonkey-app input:where([type=reset]),#tapermonkey-app input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}#tapermonkey-app :-moz-focusring{outline:auto}#tapermonkey-app :-moz-ui-invalid{box-shadow:none}#tapermonkey-app progress{vertical-align:baseline}#tapermonkey-app ::-webkit-inner-spin-button,#tapermonkey-app ::-webkit-outer-spin-button{height:auto}#tapermonkey-app [type=search]{-webkit-appearance:textfield;outline-offset:-2px}#tapermonkey-app ::-webkit-search-decoration{-webkit-appearance:none}#tapermonkey-app ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}#tapermonkey-app summary{display:list-item}#tapermonkey-app blockquote,#tapermonkey-app dl,#tapermonkey-app dd,#tapermonkey-app h1,#tapermonkey-app h2,#tapermonkey-app h3,#tapermonkey-app h4,#tapermonkey-app h5,#tapermonkey-app h6,#tapermonkey-app hr,#tapermonkey-app figure,#tapermonkey-app p,#tapermonkey-app pre{margin:0}#tapermonkey-app fieldset{margin:0;padding:0}#tapermonkey-app legend{padding:0}#tapermonkey-app ol,#tapermonkey-app ul,#tapermonkey-app menu{list-style:none;margin:0;padding:0}#tapermonkey-app dialog{padding:0}#tapermonkey-app textarea{resize:vertical}#tapermonkey-app input::-moz-placeholder,#tapermonkey-app textarea::-moz-placeholder{opacity:1;color:#9ca3af}#tapermonkey-app input::placeholder,#tapermonkey-app textarea::placeholder{opacity:1;color:#9ca3af}#tapermonkey-app button,#tapermonkey-app [role=button]{cursor:pointer}#tapermonkey-app :disabled{cursor:default}#tapermonkey-app img,#tapermonkey-app svg,#tapermonkey-app video,#tapermonkey-app canvas,#tapermonkey-app audio,#tapermonkey-app iframe,#tapermonkey-app embed,#tapermonkey-app object{display:block;vertical-align:middle}#tapermonkey-app img,#tapermonkey-app video{max-width:100%;height:auto}#tapermonkey-app [hidden]{display:none}#tapermonkey-app *,#tapermonkey-app :before,#tapermonkey-app :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }#tapermonkey-app ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }#tapermonkey-app .fixed{position:fixed}#tapermonkey-app .bottom-0{bottom:0}#tapermonkey-app .right-0{right:0}#tapermonkey-app .m-1{margin:.25rem}#tapermonkey-app .m-2{margin:.5rem}#tapermonkey-app .m-auto{margin:auto}#tapermonkey-app .mx-2{margin-left:.5rem;margin-right:.5rem}#tapermonkey-app .ml-2{margin-left:.5rem}#tapermonkey-app .ml-auto{margin-left:auto}#tapermonkey-app .mr-2{margin-right:.5rem}#tapermonkey-app .mr-4{margin-right:1rem}#tapermonkey-app .inline-block{display:inline-block}#tapermonkey-app .flex{display:flex}#tapermonkey-app .hidden{display:none}#tapermonkey-app .size-auto{width:auto;height:auto}#tapermonkey-app .h-7{height:1.75rem}#tapermonkey-app .h-8{height:2rem}#tapermonkey-app .w-24{width:6rem}#tapermonkey-app .w-7{width:1.75rem}#tapermonkey-app .w-full{width:100%}#tapermonkey-app .max-w-full{max-width:100%}#tapermonkey-app .cursor-pointer{cursor:pointer}#tapermonkey-app .items-center{align-items:center}#tapermonkey-app .rounded{border-radius:.25rem}#tapermonkey-app .rounded-sm{border-radius:.125rem}#tapermonkey-app .bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-700{--tw-bg-opacity: 1;background-color:rgb(63 63 70 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-800{--tw-bg-opacity: 1;background-color:rgb(39 39 42 / var(--tw-bg-opacity))}#tapermonkey-app .bg-zinc-900{--tw-bg-opacity: 1;background-color:rgb(24 24 27 / var(--tw-bg-opacity))}#tapermonkey-app .fill-gray-600{fill:#4b5563}#tapermonkey-app .stroke-gray-400{stroke:#9ca3af}#tapermonkey-app .p-2{padding:.5rem}#tapermonkey-app .px-2{padding-left:.5rem;padding-right:.5rem}#tapermonkey-app .px-3{padding-left:.75rem;padding-right:.75rem}#tapermonkey-app .py-1{padding-top:.25rem;padding-bottom:.25rem}#tapermonkey-app .py-2{padding-top:.5rem;padding-bottom:.5rem}#tapermonkey-app .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}#tapermonkey-app .text-zinc-300{--tw-text-opacity: 1;color:rgb(212 212 216 / var(--tw-text-opacity))}#tapermonkey-app .accent-gray-700{accent-color:#374151}#tapermonkey-app .outline-none{outline:2px solid transparent;outline-offset:2px}#tapermonkey-app .invert{--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.checked:invert-0:checked{--tw-invert: invert(0);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover:bg-gray-600:hover{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.hover:bg-zinc-600:hover{--tw-bg-opacity: 1;background-color:rgb(82 82 91 / var(--tw-bg-opacity))}.hover:bg-zinc-900:hover{--tw-bg-opacity: 1;background-color:rgb(24 24 27 / var(--tw-bg-opacity))}.focus:outline-gray-600:focus{outline-color:#4b5563}';
Df(oE);
Df(`
      #tapermonkey-app input, #tapermonkey-app button { color: rgb(212,212,216); }
      #tapermonkey-app input::placeholder { color: #9ca3af; }
      #tapermonkey-app button { background-color: rgb(55, 65, 81); }
      #tapermonkey-app input[type="checkbox"] { margin-right: .5rem; }
      #tapermonkey-app .flex.items-center:first-child:hover { background: #3741512b; }
      #tapermonkey-app input[type="text"]:hover { background: #52525b; }
      #tapermonkey-app input[type="number"]:hover { background: #4b5563; }
      #tapermonkey-app button:hover { background: #4b5563; }`);
const sr = {
  container: "flex items-center bg-zinc-900 py-2 px-2 m-1 font-mono rounded",
  text: "w-full h-8 text-zinc-300 px-3 py-2 mx-2 rounded-sm bg-zinc-700 outline-none focus:outline-gray-600 hover:bg-zinc-600",
  checkbox: "mx-2 size-auto invert checked:invert-0 accent-gray-700",
  number: "w-24 h-8 text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 outline-none focus:outline-gray-600",
  button: "mx-2 size-auto text-zinc-300 rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 ml-auto",
  span: "text-zinc-300 ml-auto mr-4",
  label: "text-zinc-300 flex font-mono",
  labelBefore: "text-zinc-300 mx-2 font-mono"
};
function lE(e) {
  const t = {}, n = ({ type: r, model: s, innerText: o, label: l, labelBefore: a, callback: c, ...f }) => {
    if (r === "button" && !c) return "";
    const u = /checkbox|text|number/.test(r), d = u ? "input" : r, y = u ? s : (Math.random() * 1e7 | 0).toString(16), E = {
      id: y,
      "v-model": u ? s : "",
      type: u ? r : "",
      "@click": c ? `cb${y}` : "",
      class: sr[r],
      ...f
    };
    c && (E[":style"] = `{ backgroundColor: cbState.cb${y} ? 'blue' : '' }`), c && (t[`cb${y}`] = c);
    const O = Object.entries(E).filter(([v, g]) => g).map(([v, g]) => `${v}="${g}"`).join(" "), $ = `<${d} ${O}>${o || ""}${u ? "" : `</${d}>`}`;
    let R = $;
    if (l || a) {
      const v = `<label for="${E.id}" class="${a ? sr.labelBefore : sr.label}">${l || a}</label>`;
      R = (a ? [v, $] : [$, v]).join(`
`);
    }
    return R;
  };
  return { parsedScheme: Object.values(e).map((r) => {
    const s = r.map((o) => n(o)).join(`
`);
    return `<div class="${sr.container}">${s}</div>`;
  }).join(`
`), callbacks: t };
}
class pE {
  constructor({ state: t, stateLocale: n }, i = xf) {
    Ft(this, "template", (t) => `
  <div class="fixed bottom-0 right-0 z-9999 rounded bg-zinc-800 max-w-full p-2 m-2"
    :class="state.hidden ? 'hover:bg-gray-600' : ''" v-if="state.uiEnabled">

    <div class="flex items-center cursor-pointer py-1 px-2 m-1 rounded"
      :class="!state.hidden ? 'hover:bg-zinc-900' : ''" @click="state.hidden = !state.hidden">
      <span class="m-auto flex mono">
        <span v-if="state.hidden && stateLocale.pagIndexLast > 1" class="px-3 py-2 mr-2 bg-gray-700 text-zinc-300 font-mono rounded ">
          {{ stateLocale.pagIndexCur }}/{{ stateLocale.pagIndexLast }}
        </span>
        <svg v-if="state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
        <svg v-if="!state.hidden" class="h-7 w-7 fill-gray-600 stroke-gray-400" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </span>
    </div>

    <template v-if="!state.hidden">${t}</template>
  </div>`);
    const r = iE('<div id="tapermonkey-app" style="position: relative; z-index: 999999;"></div>');
    document.body.appendChild(r);
    const { parsedScheme: s, callbacks: o } = lE(i), l = this.template(s);
    Pu({
      setup: () => {
        const c = ei(Object.keys(o).reduce(
          (f, u) => (f[u] = !1, f),
          {}
        ));
        return Object.entries(o).forEach(([f, u]) => {
          o[f] = async () => {
            await u(), c[f] = !0;
          };
        }), { state: t, stateLocale: n, ...o, cbState: c };
      },
      template: l
    }).mount("#tapermonkey-app");
  }
}
export {
  xf as DefaultScheme,
  uE as JabroniOutfitStore,
  pE as JabroniOutfitUI,
  fE as defaultSchemeWithPrivateFilter,
  kf as defaultStateInclExclMiscPagination,
  rE as defaultStateWithDuration,
  cE as defaultStateWithDurationAndPrivacy,
  sE as extendDefaultScheme
};
