import{di as C,ec as W,eb as Y,c2 as K,e as l,y as c,l4 as X,eF as ee,b6 as k,cD as te,ed as re,c as V,by as H,d2 as se,a2 as G,Q as ie,bz as ne,hk as oe,aR as ae,a_ as le,d1 as ue,d0 as pe,L as ye,g as ce,c4 as he,bq as fe,n as T,aw as P,Y as de,k as L,e7 as U,_ as me,iv as ge,br as be,aO as we,l5 as ve,kt as xe,g0 as $e}from"./index-3T8NnAdH.js";import{n as A}from"./floorFilterUtils-zOdaZIyV.js";import{n as Se}from"./sublayerUtils-CFARZOrx.js";import{n as Fe,p as Ee}from"./popupUtils-yFlrYs8w.js";function _(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Oe(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function z(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Oe(t.stops):e}function Re(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:a,minSize:u}=o;return(z(a,t)+z(u,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function Q(t){var n,o;const e=t==null?void 0:t.renderer,s=(n=t==null?void 0:t.event)==null?void 0:n.pointerType,i=s==="touch"?9:6;if(!e)return i;const r="visualVariables"in e?Re(i,e.visualVariables):i;if(e.type==="simple")return _(r,e.symbol);if(e.type==="unique-value"){let a=r;return(o=e.uniqueValueInfos)==null||o.forEach(u=>{a=_(a,u.symbol)}),a}if(e.type==="class-breaks"){let a=r;return e.classBreakInfos.forEach(u=>{a=_(a,u.symbol)}),a}return e.type==="dot-density"||e.type,r}function je(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,layerOption:a,mapExtent:u,maxAllowableOffset:p,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:F,spatialReference:$,timeExtent:x,tolerance:m,width:E}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:v}=Pe(t),j=(e==null?void 0:e.geometry)!=null?e.geometry:null,w={geometryPrecision:n,maxAllowableOffset:p,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:F,tolerance:m},O=j&&j.toJSON()||r;w.imageDisplay=`${E},${o},${s}`,i&&(w.gdbVersion=i),O&&(delete O.spatialReference,w.geometry=JSON.stringify(O),w.geometryType=C(O));const M=$??(O==null?void 0:O.spatialReference)??(u==null?void 0:u.spatialReference);if(M&&(w.sr=W(M)),w.time=x?[x.start,x.end].join(","):null,u){const{xmin:q,ymin:B,xmax:D,ymax:Z}=u;w.mapExtent=`${q},${B},${D},${Z}`}return b&&(w.layerDefs=b),g&&!b&&(w.dynamicLayers=g),w.layers=a==="popup"?"visible":a,v&&!g&&(w.layers+=`:${v.join(",")}`),w}function Pe(t){var $,x;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:a}=t,u=(x=($=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:$.layer)==null?void 0:x.serviceSublayers,p=o==="popup",y={},f=Y({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],F=m=>{const E=f===0,g=m.minScale===0||f<=m.minScale,b=m.maxScale===0||f>=m.maxScale;if(m.visible&&(E||g&&b))if(m.sublayers)m.sublayers.forEach(F);else{if((n==null?void 0:n.includes(m.id))===!1||p&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(F),r&&!h.length)y.layerIds=[];else{const m=Se(h,u,a),E=h.map(g=>{const b=A(s,g);return g.toExportImageJSON(b)});if(m)y.dynamicLayers=JSON.stringify(E);else{if(r){let b=h.map(({id:v})=>v);n&&(b=b.filter(v=>n.includes(v))),y.layerIds=b}else n!=null&&n.length&&(y.layerIds=n);const g=_e(s,h);if(g!=null&&g.length){const b={};for(const v of g)v.definitionExpression&&(b[v.id]=v.definitionExpression);Object.keys(b).length&&(y.layerDefs=JSON.stringify(b))}}}return y}function _e(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=A(t,r),o=K(n,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var I;let d=I=class extends H{static from(t){return se(I,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};l([c({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),l([c()],d.prototype,"floors",void 0),l([c({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),l([c({types:X,json:{read:ee,write:!0}})],d.prototype,"geometry",void 0),l([c({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),l([c({type:Number,json:{write:!0}})],d.prototype,"height",void 0),l([c({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),l([c({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),l([c({type:k,json:{write:!0}})],d.prototype,"mapExtent",void 0),l([c({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),l([c({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),l([c({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),l([c({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),l([c({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),l([c({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),l([c({type:te,json:{write:!0}})],d.prototype,"spatialReference",void 0),l([c()],d.prototype,"sublayers",void 0),l([c({type:re,json:{write:!0}})],d.prototype,"timeExtent",void 0),l([c({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),l([c({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=I=l([V("esri.rest.support.IdentifyParameters")],d);const J=d;let S=class extends H{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return G.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=oe.toJSON(i.type))}};l([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),l([c({type:G})],S.prototype,"feature",void 0),l([ie("feature",["attributes","geometry"])],S.prototype,"readFeature",null),l([ne("feature")],S.prototype,"writeFeature",null),l([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),l([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=l([V("esri.rest.support.IdentifyResult")],S);const Ne=S;async function Ie(t,e,s){const i=(e=Ge(e)).geometry?[e.geometry]:[],r=ae(t);return r.path+="/identify",le(i).then(n=>{const o=je(e,{geometry:n==null?void 0:n[0]}),a=ue({...r.query,f:"json",...o}),u=pe(a,s);return ye(r.path,u).then(Ve).then(p=>Ae(p,e.sublayers))})}function Ve(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Ne.fromJSON(s)),e}function Ge(t){return t=J.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let N=null;function Je(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=he(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([fe(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var o,a;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Me(s.sublayers,i,e);if(!r.length)return[];const n=await Le(s,r);if(!((((a=(o=s.capabilities)==null?void 0:o.operations)==null?void 0:a.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return P();let s=null;if(t instanceof G?s=[t]:de.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(L),!(s!=null&&s.length))return P();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),P(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{var p;o||(o=new U);let a=null;const u="visualVariables"in n?(p=n.visualVariables)==null?void 0:p.find(y=>y.type==="size"):void 0;u&&(N||(N=(await me(()=>import("./index-3T8NnAdH.js").then(y=>y.x4),__vite__mapDeps([0,1]))).getSize),a=N(u,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),a||(a="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16),s.includes(r)&&(r.symbol=new U({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const p of i)if(!this._featuresResolutions.has(p)||this._featuresResolutions.get(p)>n){const y=p.sourceLayer;ge(o,y,()=>new Map).set(p.getObjectId(),p)}const a=Array.from(o,([p,y])=>{const f=p.createQuery();return f.objectIds=[...y.keys()],f.outFields=[p.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=n,f.outSpatialReference=s.spatialReference,p.queryFeatures(f)}),u=await Promise.all(a);if(!this.destroyed)for(const{features:p}of u)for(const y of p){const f=y.sourceLayer,h=o.get(f).get(y.getObjectId());h&&i.includes(h)&&(h.geometry=y.geometry,r(h,"geometry"),this._featuresResolutions.set(h,n))}}_getTargetResolution(t){const e=t*be(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await Ie(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,u=s!=null?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:$})=>$.load().catch(()=>{})));const p=Math.min(we("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce(($,x)=>x.renderer?Q({renderer:x.renderer,event:u}):$,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,p),f=ve(a,o),h=Math.round(y.width/f),F=new k({xmin:y.center.x-f*h,ymin:y.center.y-f*h,xmax:y.center.x+f*h,ymax:y.center.y+f*h,spatialReference:y.spatialReference});return new J({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:F,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:p,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,o=e.map(async({sublayer:a,popupTemplate:u})=>{var v;if(await a.load().catch(()=>{}),a.capabilities&&!a.capabilities.operations.supportsQuery)return[];const p=a.createQuery(),y=Q({renderer:a.renderer,event:n}),f=this.createFetchPopupFeaturesQueryGeometry(t,y),h=new Set,[F]=await Promise.all([Fe(a,u),(v=a.renderer)==null?void 0:v.collectRequiredFields(h,a.fieldsIndex)]);xe(h,a.fieldsIndex,F);const $=Array.from(h).sort();if(p.geometry=f,p.outFields=$,p.timeExtent=r,i){const j=i.clone(),w=A(j,a);w!=null&&(p.where=p.where?`(${p.where}) AND (${w})`:w)}const x=this._getTargetResolution(f.width/y),m=await Te(u),E=a.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(u);E||(p.maxAllowableOffset=x);let{features:g}=await a.queryFeatures(p);const b=E?0:x;g=await Ue(a,g);for(const j of g)this._featuresResolutions.set(j,b);return g});return(await Promise.allSettled(o)).reduce((a,u)=>u.status==="fulfilled"?[...a,...u.value]:a,[]).filter(L)}};function Me(t,e,s){const i=[];if(!t)return i;const r=n=>{const o=n.minScale===0||e<=n.minScale,a=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&a){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const u=Ee(n,{...s,defaultPopupTemplateEnabled:!1});u!=null&&i.unshift({sublayer:n,popupTemplate:u})}}};return t.map(r),i}function Te(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?$e():Promise.resolve()}async function Le(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}l([c({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([c({constructOnly:!0})],R.prototype,"layerView",void 0),l([c({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),l([c({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),l([c({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=l([V("esri.views.layers.support.MapService")],R);export{R as G,Je as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-3T8NnAdH.js","assets/index-Vh02goE1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
