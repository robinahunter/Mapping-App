import{n as c,e as i,y,c as h}from"./index-3T8NnAdH.js";import{n as u}from"./LayerView3D-oCVojPzq.js";import{o as v}from"./TiledLayerView3D-_zR3NFAf.js";import{u as f}from"./LayerView-Z1CfWGJB.js";let e=class extends v(u(f)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var r,s,l,a,n;const t=(s=(r=this.view)==null?void 0:r.map)==null?void 0:s.allLayers,d=t&&t.includes(this.layer),o=(n=(a=(l=this.view)==null?void 0:l.map)==null?void 0:a.ground)==null?void 0:n.layers,m=o&&o.includes(this.layer);if(d&&!m){const p=new c("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(p))}this._addTilingSchemeMatchPromise()}};i([y()],e.prototype,"layer",void 0),i([y()],e.prototype,"tileInfo",null),e=i([h("esri.views.3d.layers.ElevationLayerView3D")],e);const x=e;export{x as default};
