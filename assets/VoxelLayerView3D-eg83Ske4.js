import{n as y,bY as v,cy as T,Z as l,P as E,cz as r,cA as V,cB as A,cC as x,cD as I,cE as M,cF as L,cG as D,cH as P,aX as w,e as b,y as _,c as F,cI as g}from"./index-IMuz--7_.js";import{n as $}from"./LayerView3D-zcyDr_cZ.js";import{i as C}from"./PopupSceneLayerView-ulkqT64G.js";import{u as R}from"./LayerView-DKwH4Oam.js";import"./popupUtils-x4XvOzEU.js";var i;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(i||(i={}));const h=g(),S=g();let c=class extends C($(R)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e;return((e=this.layer.parsedUrl)==null?void 0:e.path)??""}get wasmLayerId(){return this._wasmLayerId}initialize(){var u;if(this._dbgFlags.add(i.Error),this.view.viewingMode!=="local")throw new y("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!((u=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)!=null&&u.textureFloat))throw new y("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!v(e,this.view.spatialReference))throw new y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,a=this.layer.getVolume(s),o=this.layer.getVariable(s);if(a!=null&&o!=null){const d=a.dimensions[0],t=a.dimensions[1],m=a.zDimension;if(m>1){const f=a.dimensions[m],W=d.size*t.size*f.size;let p=1;switch(o.renderingFormat.type){case"Int16":case"UInt16":p=2;break;case"Int32":case"UInt32":case"Float32":p=4}this._futureMemory=p*W}}const n=T(this).then(d=>{this._wasmLayerId=d,this._suspendedHandle=l(()=>this.suspended,t=>{const m=r(this.view);m&&m.setEnabled(this,!t)},E),this.addHandles([l(()=>this.layer.renderMode,t=>this._pushRenderModeToWasm(t)),l(()=>this.layer.currentVariableId,t=>this._pushCurrentVariableIdToWasm(t)),l(()=>this.layer.getSections(),t=>this._pushSectionsToWasm(t)),l(()=>this.layer.getVariableStyles(),t=>this._pushVariableStylesToWasm(t)),l(()=>this.layer.getVolumeStyles(),t=>this._pushVolumeStylesToWasm(t)),l(()=>this.layer.enableDynamicSections,t=>this._pushEnableDynamicSectionsToWasm(t)),l(()=>this.layer.enableIsosurfaces,t=>this._pushEnableIsosurfacesToWasm(t)),l(()=>this.layer.enableSections,t=>this._pushEnableSectionsToWasm(t)),l(()=>this.layer.enableSlices,t=>this._pushEnableSlicesToWasm(t)),l(()=>this.slicePlaneEnabled,t=>this._pushAnalysisSliceToWasm(t,this.view.slicePlane)),l(()=>this.view.slicePlane,t=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,t))])}).catch(d=>{if(V(this),this._wasmLayerId=-1,d===-1)throw new y("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(d===-2)throw new y("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(n)}destroy(){V(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}whenGraphicBounds(e,s){const a=e.attributes["Voxel.WorldPosition"];if(a){const o=A(),n=JSON.parse(a);if(x(n,this.view.renderSpatialReference,S,this.view.spatialReference||I.WGS84))return M(o,S),Promise.resolve({boundingBox:o,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=r(this.view);e==null||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=r(this.view);e==null||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){const e=r(this.view);return(e==null?void 0:e.getLayerTimes(this))??[]}getCurrentLayerTimeIndex(){const e=r(this.view);return(e==null?void 0:e.getCurrentLayerTimeIndex(this))??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setRenderMode(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setStaticSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setCurrentVariable(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setVariableStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const a=s??this.layer.enableSlices;for(let o=0;o<e.length;++o){const n=e[o];for(const u of n.slices)u.enabled=u.enabled&&a}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const a=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(a?"have WASM":"don't have WASM!!!"));let o=!1;if(a){if(s){const n=s.origin;L(h,s.basis1,s.basis2),D(h,h),o=a.setAnalysisSlice(this,e,n,h)}else P(h,0,0,1),o=a.setAnalysisSlice(this,!1,h,h);o||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableDynamicSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const a=this.layer.getVolumeStyles();this._accountForEnableSlices(a,e),s.setVolumeStyles(this,a)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableIsosurfaces(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?w.getLogger(this).error(s):w.getLogger(this).warn(s))}};b([_()],c.prototype,"layer",void 0),b([_()],c.prototype,"baseUrl",null),b([_({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),c=b([F("esri.views.3d.layers.VoxelLayerView3D")],c);const O=c;export{O as default};