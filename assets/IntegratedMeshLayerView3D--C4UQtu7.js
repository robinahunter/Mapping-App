import{a1 as n,P as p,a2 as m,e as i,y as o,a3 as l,c as d}from"./index-3T8NnAdH.js";import{E as c}from"./I3SMeshView3D-eKWjdZC0.js";import{n as u}from"./LayerView3D-oCVojPzq.js";import{u as h}from"./LayerView-Z1CfWGJB.js";import"./I3SOverrides-u50n92bt.js";import"./I3SNode-8_NcpF40.js";import"./I3SUtil-ULMHbqnT.js";import"./I3SBinaryReader-Rh-nT4VS.js";import"./ReactiveSet-u9gY8pMi.js";import"./meshFeatureSet-qI6M0MGu.js";import"./External-i1-TBD3g.js";import"./FeatureLayerView3D-xoB7pwPB.js";import"./FeatureLayerViewBase3D-zIG0tPqJ.js";import"./HeatmapDensity.glsl-PQYkyDLe.js";import"./dehydratedFeatureComparison-TL8HUJB8.js";import"./queryForSymbologySnapping-5Rdc2L2o.js";import"./elevationInfoUtils-WwYDl0RG.js";import"./hash-SS5GKVPY.js";import"./Graphics3DObjectStates-HsNjVCdK.js";import"./optimizedFeatureQueryEngineAdapter-tByZWg6M.js";import"./PooledRBush-yvWXTK5L.js";import"./quickselect-X97ywmUd.js";import"./popupUtils-yFlrYs8w.js";import"./floorFilterUtils-zOdaZIyV.js";import"./QueryEngine-QXCYjOy3.js";import"./WhereClause-rvxfqIBA.js";import"./TimeOnly-9DDBccWC.js";import"./json-v6EOeNTY.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-qIGSl3HI.js";import"./utils-6esXKgtb.js";import"./generateRendererUtils-OiKFgbvL.js";import"./FeatureStore-gS43Cdgh.js";import"./BoundsStore-DSYVvWPu.js";import"./projectExtentUtils-q079KP9N.js";import"./query-V4m9SKOV.js";import"./pbfQueryUtils-Nxn0EGYJ.js";import"./pbf-Io4d7WfJ.js";import"./EventedSet-z8mxXDQ8.js";import"./RefreshableLayerView-7b4Yeyyw.js";import"./SceneModification-hsxdBUyt.js";import"./persistable-Rz6eyoJH.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-fWks7ZjQ.js";import"./SceneLayerWorker-er8femDY.js";const g=.2;let r=class extends c(u(h)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,e,a,s;return((s=(a=(e=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:e.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new m;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(l)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([d("esri.views.3d.layers.SceneLayerView3D")],r);const pt=r;export{pt as default};
