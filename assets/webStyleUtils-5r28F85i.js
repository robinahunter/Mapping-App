import{n as c,eL as u,K as r,eM as b,eN as i,eO as m,B as f,I as p,eP as w,eQ as d,eR as h,eS as $,eT as g}from"./index-IMuz--7_.js";async function M(e,n,a){if(!e.name)throw new c("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&e.styleName==="Esri2DPointSymbolsStyle")return N(e,a);try{return S(await u(e,n,a),e.name,n,a)}catch(t){return r(t),null}}async function N(e,n){const a=b.replaceAll(/\{SymbolName\}/gi,e.name);try{const t=await i(a,n);return m(t.data)}catch(t){return r(t),null}}async function S(e,n,a,t){const y={portal:(a==null?void 0:a.portal)!=null?a.portal:f.getDefault(),url:p(e.baseUrl),origin:"portal-item"},o=w(n,e.data);if(!o)throw new c("symbolstyleutils:symbol-name-not-found",`The symbol name '${n}' could not be found`,{symbolName:n});let s=d(h(o,"cimRef"),y);$()&&(s=g(s));try{const l=await i(s,t);return m(l.data)}catch(l){return r(l),null}}export{M as fetchCIMSymbolReference};