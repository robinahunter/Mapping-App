import{aR as y,au as _,b6 as T,e as a,y as c,e$ as D,c as A,g as Q,I as w,aO as P,aQ as j,eA as d,_ as n,aJ as f,aK as h,n as q}from"./index-IMuz--7_.js";import{n as L,s as $}from"./executeForIds-SZ6picCf.js";import{x as J}from"./query-fAITVXuT.js";import{a as N}from"./executeQueryJSON-14tQ3IGK.js";import{n as z}from"./executeQueryPBF-f6Ug8Wdg.js";async function C(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(i=>({count:i.data.count,extent:T.fromJSON(i.data.extent)}))}let s=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return w(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,i=P("featurelayer-pbf-statistics"),l=!o||i;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await N(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-1BaSP8s2.js"),__vite__mapDeps([0,1,2,3])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return $(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-IMuz--7_.js").then(i=>i.x8),__vite__mapDeps([1,2])),n(()=>import("./executeRelationshipQuery-B9kFisTi.js"),__vite__mapDeps([4,1,2,5,6,7]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-IMuz--7_.js").then(i=>i.x8),__vite__mapDeps([1,2])),n(()=>import("./executeRelationshipQuery-B9kFisTi.js"),__vite__mapDeps([4,1,2,5,6,7]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await d(n(()=>import("./queryAttachments-aFk33WYD.js"),__vite__mapDeps([8,1,2,5,6,7,9])),t),l=y(this.url);return i(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-C35KkdzX.js"),__vite__mapDeps([10,1,2,11,5,6,7])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-aut4zDEg.js"),__vite__mapDeps([12,1,2,11,5,6,7])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-UJk-O_Jz.js"),__vite__mapDeps([13,1,2,11,5,6,7])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-lQRSU7Fd.js"),__vite__mapDeps([14,1,2,11,5,6,7])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of i){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:F,translationY:b,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(u,m,S,F,b,x,O,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],s.prototype,"dynamicDataSource",void 0),a([c()],s.prototype,"fieldsIndex",void 0),a([c()],s.prototype,"gdbVersion",void 0),a([c()],s.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],s.prototype,"parsedUrl",null),a([c()],s.prototype,"pbfSupported",void 0),a([c()],s.prototype,"queryAttachmentsSupported",void 0),a([c()],s.prototype,"sourceSpatialReference",void 0),a([c({type:String})],s.prototype,"url",void 0),s=a([A("esri.tasks.QueryTask")],s);const K=s;export{K as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/meshFeatureSet-1BaSP8s2.js","assets/index-IMuz--7_.js","assets/index-hqRHS7Sz.css","assets/External-xesRMyNP.js","assets/executeRelationshipQuery-B9kFisTi.js","assets/query-fAITVXuT.js","assets/pbfQueryUtils-lnmvuL22.js","assets/pbf-xj77QlV0.js","assets/queryAttachments-aFk33WYD.js","assets/AttachmentInfo-wb8MXz3K.js","assets/executeTopFeaturesQuery-C35KkdzX.js","assets/queryTopFeatures-q1-38HAg.js","assets/executeForTopIds-aut4zDEg.js","assets/executeForTopExtents-UJk-O_Jz.js","assets/executeForTopCount-lQRSU7Fd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}