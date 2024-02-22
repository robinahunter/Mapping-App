import{aX as U,e as o,y as c,e2 as $,cD as S,Q as m,b6 as g,R as L,S as V,bz as P,c as C,c4 as M,gQ as z,p as k,gR as q,gS as F,gT as J,I as _,n as y,L as w,a4 as D,B as R}from"./index-fEcifWCc.js";import{i as A}from"./originUtils-1w5HeAJR.js";import{r as B}from"./I3SIndexInfo-MUgwJ0n5.js";import{i as N}from"./saveAPIKeyUtils-PYadD5Eu.js";import{u as Q,p as Z}from"./saveUtils-9dM7s6DB.js";let H=null;function X(){return H}const T="esri.layers.mixins.SceneService",I=U.getLogger(T),re=u=>{let n=class extends u{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=M(async(e,t,i)=>{switch(e){case v.SAVE:return this._save(t);case v.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return S.fromJSON(e.spatialReference);{const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new S(r):null}}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const s=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return g.fromJSON(s,i)}const r=t.store,a=this._readSpatialReference(t);return a==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(s=>s<x)?null:new g({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var a;const i=(a=this.portalItem)==null?void 0:a.title;if(this.sublayerTitleMode==="item-title")return z(this.url,t.name);let r=t.name;if(!r&&this.url){const s=k(this.url);s!=null&&(r=s.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),q(r)}set url(e){const t=F({layer:this,url:e,nonStandardUrlAllowed:!1,logger:I});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){J(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=_(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=B(this.parsedUrl.path,this.rootNode,e,this.apiKey,I,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,a;if((e==null?void 0:e.type)==="page"){const s=e.rootIndex%e.pageSize,p=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[s];if(((r=p==null?void 0:p.obb)==null?void 0:r.center)==null||p.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(p.obb.center[0]<x||this.fullExtent==null||this.fullExtent.hasZ)return;const d=p.obb.halfSize,h=p.obb.center[2],l=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.fullExtent.zmin=h-l,this.fullExtent.zmax=h+l}else if((e==null?void 0:e.type)==="node"){const s=(a=e.rootNode)==null?void 0:a.mbs;if(!Array.isArray(s)||s.length!==4||s[0]<x)return;const p=s[2],d=s[3],{fullExtent:h}=this;h&&(h.zmin=p-d,h.zmax=p+d)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await w(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var a;const t=await w(((a=this.parsedUrl)==null?void 0:a.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await w(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,s,p)=>p.indexOf(a)===s),i===f.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){var d;const i={...E,...t};let r=D.from(e);if(!r)throw new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");N(r),r.id&&(r=r.clone(),r.id=null);const a=r.portal||R.getDefault();await this._ensureLoadBeforeSave(),r.type=b,r.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(p,s,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,f.newItem),await a.signIn(),await((d=a.user)==null?void 0:d.addItem({item:r,folder:i==null?void 0:i.folder,data:p})),await Q(this.resourceReferences,s,null),this.portalItem=r,A(s),s.portalItem=r,r}async _save(e){const t={...E,...e};if(!this.portalItem)throw new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(N(this.portalItem),this.portalItem.type!==b)throw new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${b}"`);await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&_(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||R.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,f.existingItem),await Z(this.portalItem,r,this.resourceReferences,i,null),A(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){var d,h;let r=((d=t.messages)==null?void 0:d.filter(l=>l.type==="error").map(l=>new y(l.name,l.message,l.details)))??[];(h=i==null?void 0:i.validationOptions)!=null&&h.ignoreUnsupported&&(r=r.filter(l=>l.name!=="layer:unsupported"&&l.name!=="symbol:unsupported"&&l.name!=="symbol-layer:unsupported"&&l.name!=="property:unsupported"&&l.name!=="url:unsupported"&&l.name!=="scenemodification:unsupported"));const a=i==null?void 0:i.validationOptions,s=a==null?void 0:a.enabled,p=X();if(s&&p){const l=(await p()).validate(e,i.portalItemLayerType);if(l.length>0){const O=`Layer item did not validate:
${l.join(`
`)}`;if(I.error(`_validateAgainstJSONSchema(): ${O}`),a.failPolicy==="throw"){const K=l.map(j=>new y("sceneservice:schema-validation",j)).concat(r);throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:K})}}}if(r.length>0)throw new y("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return o([c($)],n.prototype,"id",void 0),o([c({type:S})],n.prototype,"spatialReference",void 0),o([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],n.prototype,"readSpatialReference",null),o([c({type:g})],n.prototype,"fullExtent",void 0),o([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],n.prototype,"readFullExtent",null),o([c({readOnly:!0,type:L})],n.prototype,"heightModelInfo",void 0),o([c({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],n.prototype,"minScale",void 0),o([c({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],n.prototype,"maxScale",void 0),o([c({readOnly:!0})],n.prototype,"version",void 0),o([m("version",["store.version"])],n.prototype,"readVersion",null),o([c({type:String,json:{read:{source:"copyrightText"}}})],n.prototype,"copyright",void 0),o([c({type:String,json:{read:!1}})],n.prototype,"sublayerTitleMode",void 0),o([c({type:String})],n.prototype,"title",void 0),o([m("portal-item","title")],n.prototype,"readTitlePortalItem",null),o([m("service","title",["name"])],n.prototype,"readTitleService",null),o([c({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],n.prototype,"layerId",void 0),o([c(V)],n.prototype,"url",null),o([P("url")],n.prototype,"writeUrl",null),o([c()],n.prototype,"parsedUrl",null),o([c({readOnly:!0})],n.prototype,"store",void 0),o([c({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],n.prototype,"rootNode",void 0),n=o([C(T)],n),n},x=-1e38;var f;(function(u){u[u.existingItem=0]="existingItem",u[u.newItem=1]="newItem"})(f||(f={}));const b="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var v;(function(u){u[u.SAVE=0]="SAVE",u[u.SAVE_AS=1]="SAVE_AS"})(v||(v={}));export{re as E,v as P};