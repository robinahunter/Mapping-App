import{L as j,ec as m,hV as l,aR as y,aQ as p}from"./index-3T8NnAdH.js";import{t as R}from"./query-V4m9SKOV.js";import"./pbfQueryUtils-Nxn0EGYJ.js";import"./pbf-Io4d7WfJ.js";function h(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=m(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function F(r,t,e){const a=await f(r,t,e),o=a.data,s=o.geometryType,n=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...a,data:c}}async function b(r,t,e){const a=await f(r,t,e,{returnCountOnly:!0}),o=a.data,s={};for(const n of o.relatedRecordGroups)n.objectId!=null&&(s[n.objectId]=n.count);return{...a,data:s}}async function f(r,t,e={},a){const o=R({...r.query,f:"json",...a,...h(t,a)});return j(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function N(r,t,e){t=l.from(t);const a=y(r);return F(a,t,e).then(o=>{const s=o.data,n={};return Object.keys(s).forEach(c=>n[c]=p.fromJSON(s[c])),n})}async function g(r,t,e){t=l.from(t);const a=y(r);return b(a,t,{...e}).then(o=>o.data)}export{N as executeRelationshipQuery,g as executeRelationshipQueryForCount};
