import{eo as i,ep as f,L as p}from"./index-3T8NnAdH.js";import{t as d}from"./query-V4m9SKOV.js";import{l}from"./AttachmentInfo-5OSeat_h.js";import"./pbfQueryUtils-Nxn0EGYJ.js";import"./pbf-Io4d7WfJ.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function A(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:u}=r,h=i(f(`${n.path}/${o}/attachments/${u}`)),m=l.fromJSON(r);m.set({url:h,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function g(n,t,e){let a={query:d({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function k(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{g as executeAttachmentQuery,k as fetchAttachments,A as processAttachmentQueryResult};
