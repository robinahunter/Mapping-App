import{db as _,dc as R,n as I,dd as C,de as Q,df as v,bh as Z,b_ as A,ap as P,aX as G,bY as N,dg as M,dh as z,L,di as k,dj as B,dk as J,dl as W}from"./index-3T8NnAdH.js";import{m as H}from"./FeatureStore-gS43Cdgh.js";import{W as U,x as E,j as b}from"./QueryEngine-QXCYjOy3.js";import{I as V,N as Y,E as K}from"./geojson-de3eryWH.js";import{o as X,a as ee,i as te}from"./clientSideDefaults-zJ7_vD_h.js";import{I as se,p as T,d as w,f as F,w as O}from"./sourceUtils-oWll5V3F.js";import"./BoundsStore-DSYVvWPu.js";import"./PooledRBush-yvWXTK5L.js";import"./quickselect-X97ywmUd.js";import"./optimizedFeatureQueryEngineAdapter-tByZWg6M.js";import"./WhereClause-rvxfqIBA.js";import"./TimeOnly-9DDBccWC.js";import"./json-v6EOeNTY.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-qIGSl3HI.js";import"./utils-6esXKgtb.js";import"./generateRendererUtils-OiKFgbvL.js";import"./date-be_IQzZd.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Te{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=V(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],u=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let h=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const l=new R(o);let d=l.get(h);d?(d.type!=="esriFieldTypeString"&&(d.type="esriFieldTypeOID"),d.editable=!1,d.nullable=!1,h=d.name):(d={alias:h,name:h,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(d));const y={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!C.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==d.name){const g=Q(a);g!==void 0&&(y[a.name]=g)}a.length==null&&(a.length=v(a))}if(r){if(r.startTimeField){const a=l.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=l.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=l.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?X(p):void 0,j=l.dateFields.length?{timeZoneIANA:Z}:null,f={warnings:n,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:ee(y),extent:void 0,geometryType:p,objectIdField:h,fields:o,hasZ:!!u,timeInfo:r,dateFieldsTimeReference:j}};this._queryEngine=new U({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:u,objectIdField:h,spatialReference:m,timeInfo:r,featureStore:new H({geometryType:p,hasM:!1,hasZ:u}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(d);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=te(y,h);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const $=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany($);const{fullExtent:D,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=D,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([se(t,n),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=A(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),P(i)||G.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=Y(e,{geometryType:t,hasZ:n,objectIdField:s});if(!N(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=M(b(z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await L(t,{responseType:"json",query:{...n},signal:e})).data;return K(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const u=this._createDefaultAttributes(),p=T(s,u,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(u,o.attributes,!0),o.attributes=u,o.objectId=u[n],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),n!=null&&n.length&&this._applyUpdateEdits(i,n),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(w(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:u}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:u,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:u,spatialReference:p,featureStore:h,fieldsIndex:m}=this._queryEngine,r=[];for(const l of t){if(l.geometry&&s!==k(l.geometry)){n.push(F("Incorrect geometry type."));continue}const d=this._createDefaultAttributes(),y=T(m,d,l.attributes);if(y)n.push(y);else{if(this._assignObjectId(d,l.attributes),l.attributes=d,l.uid!=null){const c=l.attributes[u];e.uidToObjectId[l.uid]=c}if(l.geometry!=null){const c=l.geometry.spatialReference??p;l.geometry=b(O(l.geometry,c),c,p)}r.push(l),n.push(w(l.attributes[u]))}}h.addMany(B([],r,s,o,i,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:o,spatialReference:u,featureStore:p,fieldsIndex:h}=this._queryEngine;for(const m of t){const{attributes:r,geometry:l}=m,d=r==null?void 0:r[o];if(d==null){e.push(F(`Identifier field ${o} missing`));continue}if(!p.has(d)){e.push(F(`Feature with object id ${d} missing`));continue}const y=J(p.getFeature(d),n,i,s);if(l!=null){if(n!==k(l)){e.push(F("Incorrect geometry type."));continue}const c=l.spatialReference??u;y.geometry=b(O(l,c),c,u)}if(r){const c=T(h,y.attributes,r);if(c){e.push(c);continue}}p.add(W(y,n,i,s,o)),e.push(w(d))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Te as default};
