import{fc as v,fd as S,fe as j,ff as W,fg as k,fh as q,ca as F,cb as A,cc as M,an as X,W as Y,c4 as B,ap as $,aX as y,aw as Z,fi as J,bX as L,b6 as H,fj as K,fk as Q,b$ as N,fl as ee,c0 as te,e_ as ae,fm as C,O as D,c6 as O,cg as ie,ch as z,dY as se,fn as x,cd as re,fo as ne,fp as oe,bk as le,e as w,y as R,c as he}from"./index-3T8NnAdH.js";import{n as de}from"./LayerView3D-oCVojPzq.js";import{l as ce}from"./projectExtentUtils-q079KP9N.js";import{g as ue}from"./ImageMaterial.glsl-4yDSHPsM.js";import{u as ge}from"./LayerView-Z1CfWGJB.js";import{a as me}from"./RefreshableLayerView-7b4Yeyyw.js";function fe(a,e,t){const i=v(a)/S(a),s={width:t,height:t};return i>1.0001?s.height=t/i:i<.9999&&(s.width=t*i),s.width=Math.round(s.width/(v(a)/v(e))),s.height=Math.round(s.height/(S(a)/S(e))),s}function V(a,e){return j(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function pe(a,e,t){if(!W(e,t))return V(a,t);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],s=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],l=t[2]-t[0],n=t[3]-t[1],r=s[0]>0&&s[2]>0?3:2,h=i[0]>0&&i[2]>0?3:2,o=(h+1)*(r+1),c=k(3*o),u=q(2*o),d=new Array(6*(h*r-1));let E=0,I=0,P=0,g=0,f=0;for(let p=0;p<4;p++){const G=i[p];if(G<=0)continue;let b=0;for(let _=0;_<4;_++){const T=s[_];T<=0||(c[I++]=t[0]+b,c[I++]=t[1]+E,c[I++]=-1,u[P++]=b/l,u[P++]=E/n,_<3&&p<3&&(_!==1||p!==1)&&(d[f++]=g,d[f++]=g+1,d[f++]=g+r+1,d[f++]=g+1,d[f++]=g+r+2,d[f++]=g+r+1),g++,b+=T)}E+=G}const U=new Array(d.length);return new F(a,[[A.POSITION,new M(c,d,3,!0)],[A.NORMAL,new M(_e,U,3,!0)],[A.UV0,new M(u,d,2,!0)]])}const _e=[0,0,1];let m=class extends me(de(ge)){constructor(){super(...arguments),this.drapeSourceType=X.RasterImage,this.updatePolicy=Y.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=B(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{$(e)||y.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(Z(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ce(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach((t,i)=>{this._overlays[i]=t,this._updateImageExtent(t,i)})}_updateImageExtent(a,e){const t=this._clippedExtent(a.extent,we);if(t==null)return;const i=fe(a.extent,t,a.resolution);let s=a.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const r=l.imageMaxWidth,h=l.imageMaxHeight;if(i.width>r){const o=r/i.width;i.height=Math.floor(i.height*o),i.width=r,s*=o}if(i.height>h){const o=h/i.height;i.width=Math.floor(i.width*o),i.height=h,s*=o}}const n=this._extents[e];n&&J(n.extent,t)&&this._imageSizeEquals(t,n.imageSize,i)||(this._extents[e]={extent:L(t),imageSize:i,pixelRatio:s},this.suspended||this._fetch(e).catch(r=>{$(r)||y.getLogger(this).error(r)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await Promise.allSettled(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,i=this.view.scale;if(i<t||e>0&&i>e)return!1}return!0}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new H(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await K(this._images,async(t,i)=>{t&&(await a(t,e),await this._createStageObjects(i,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const i=v(a)/this.maximumDataResolution.x,s=S(a)/this.maximumDataResolution.y,l=i/e.width,n=s/e.height,r=i/t.width,h=s/t.height,o=Math.abs(l-r),c=Math.abs(n-h),u=Q.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=u&&c<=u}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],i=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:L(i)});const s=this._images[a];s.loadingAbortController=N(s.loadingAbortController);const l=new H(i[0],i[1],i[2],i[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(a);const n=new AbortController;s.loadingAbortController=n,ee(e,()=>n.abort());const r=n.signal,h=this._waitFetchReady(r).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:r},{height:c,width:u}=t.imageSize;return this.layer.fetchImage(l,u,c,o)}).then(o=>{if(te(r))throw y.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ae();return this.processResult(s,o)}).then(()=>{C(s.renderExtent,i)});s.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{D(r),await this._createStageObjects(a,s.image,r)}).catch(o=>{throw o&&!$(o)&&y.getLogger(this).error(o),o}).finally(()=>{h===s.loadingPromise&&(s.loadingPromise=null,s.loadingAbortController=null)}))}_clearImage(a){const e=this._images[a];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],O.UPDATE),e.renderGeometry=null);const t=this.view._stage,i=e.texture;i==null||i.unload(),t.remove(i),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const i=this.view._stage,s=this._images[a],l=()=>{var n;(n=s.texture)==null||n.unload(),i.remove(s.texture),s.texture=null,s.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],O.UPDATE),s.renderGeometry=null)};if(e){const n=new ie(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let r;if(await se(this._images[a===x.INNER?x.OUTER:x.INNER].loadingPromise),D(t),l(),await i.schedule(()=>n.load(i.renderView.renderingContext),t),i.add(n),s.texture=n,s.material==null?(s.material=new ue({transparent:!0,textureId:n.id}),i.add(s.material)):s.material.setParameters({textureId:n.id}),a===x.INNER)r=V(s.material,s.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();r=pe(s.material,h,s.renderExtent)}s.renderGeometry=new re(r),s.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],O.UPDATE)}else l(),i.remove(s.material),s.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return ne(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return C(e,a);const t=this.view.basemapTerrain;return t.ready?oe(a,t.extent,e):C(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await le(()=>this.view.stationary,a),D(a)}};w([R()],m.prototype,"layer",void 0),w([R()],m.prototype,"suspended",void 0),w([R({readOnly:!0})],m.prototype,"fullExtentInLocalViewSpatialReference",void 0),w([R()],m.prototype,"updating",void 0),m=w([he("esri.views.3d.layers.DynamicLayerView3D")],m);const Ie=m,we=L();export{Ie as N};
