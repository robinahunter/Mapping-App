import{I as l,b as y}from"./utils-6PQNt6eR.js";import{eK as o,q as p,i as f,z as v}from"./index-3T8NnAdH.js";import{u as i}from"./saveUtils-uNg-QZYW.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-bwzF29BG.js";import"./resourceUtils-hD8c4EAa.js";const n="Group Layer",d="group-layer-save",I="group-layer-save-as",s=f.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function g(e){return{isValid:v(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function P(e,r){r.title||(r.title=e.title),p(r,s)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:g,createJSONContext:t=>o(t,e),createItemData:u,errorNamePrefix:d,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function b(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>o(a,e),createItemData:u,errorNamePrefix:I,newItem:r,setItemProperties:P,saveResources:(a,m)=>i(e.resourceReferences,m)},t)}export{$ as save,b as saveAs};
