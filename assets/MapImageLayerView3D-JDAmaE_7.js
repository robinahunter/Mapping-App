import{e as i,y as o,c1 as a,c as p}from"./index-QKDh7r3m.js";import{N as m}from"./DynamicLayerView3D-In95UNW4.js";import{m as n}from"./ExportImageParameters-XJfHyYr4.js";import{G as l}from"./MapServiceLayerViewHelper-PKvcCG-d.js";import{r as h}from"./drapedUtils-8o_VuVGi.js";import"./LayerView3D-qHMDAALM.js";import"./projectExtentUtils--YRD9814.js";import"./ImageMaterial.glsl-xUDT_7AB.js";import"./LayerView-GxW6Dkws.js";import"./RefreshableLayerView-oRk_5aeR.js";import"./floorFilterUtils-zOdaZIyV.js";import"./sublayerUtils-jMG50JQ4.js";import"./popupUtils--X7ICmub.js";const u=t=>{let e=class extends t{initialize(){this.exportImageParameters=new n({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var r;return((r=this.view)==null?void 0:r.floors)??null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}};return i([o()],e.prototype,"exportImageParameters",void 0),i([o({readOnly:!0})],e.prototype,"floors",null),i([o({readOnly:!0})],e.prototype,"exportImageVersion",null),i([o()],e.prototype,"layer",void 0),i([o()],e.prototype,"suspended",void 0),i([o(a)],e.prototype,"timeExtent",void 0),e=i([p("esri.views.layers.MapImageLayerView")],e),e};let s=class extends u(m){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new l({createFetchPopupFeaturesQueryGeometry:(t,e)=>h(t,e,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};s=i([p("esri.views.3d.layers.MapImageLayerView3D")],s);const E=s;export{E as default};