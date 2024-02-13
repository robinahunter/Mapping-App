import{iO as G,iP as J,cW as j,iQ as Q,iR as V,O as B,iS as K,iT as M,g1 as D,iU as Z,L as $,af as ee,iV as te,iW as Y}from"./index-3T8NnAdH.js";import{d as ae,n as F,l as N,t as q,a as ie,r as re,b as se,e as ne,j as oe,V as ce,Q as he}from"./cimAnalyzer-w9LaSiMP.js";import{r as le,e as me}from"./rasterizingUtils-3mX1BIQj.js";import"./labelPoint-6ng8cGi3.js";import"./number-sTjsTbdA.js";import"./BidiEngine-8z8MVveq.js";class ge{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const o=this._resourceMap.get(e);if(o)return{width:o.width,height:o.height};let a=this._inFlightResourceMap.get(e);return a?a.then(i=>({width:i.width,height:i.height})):(a=G(e,t),this._inFlightResourceMap.set(e,a),a.then(i=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,i),{width:i.width,height:i.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return J(e)}}const ue=512;class fe{constructor(e){this._resourceManager=e,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return this._lazyRasterizationCanvas==null&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(e,t,o){if(e.type==="simple-fill"||e.type==="esriSFS"){const[r,l,p]=le(this._rasterizationCanvas,e.style,t);return{size:[l,p],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:j(Math.ceil(t))}}if(e.type==="simple-line"||e.type==="esriSLS"||e.type==="line"&&e.dashTemplate){let r,l;if(e.type==="simple-line"||e.type==="esriSLS")switch(r=ae(e.style,e.cap),e.cap){case"butt":l="Butt";break;case"square":l="Square";break;default:l="Round"}else r=e.dashTemplate,l=e.cim.capStyle;const[p,f,d]=me(r,l);return{size:[f,d],image:new Uint32Array(p.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let a,i=null,c=null,n=1;if(e.type==="simple-marker"||e.type==="esriSMS"||e.type==="line-marker"?(a=F.fromSimpleMarker(e),c=N(a)):e.cim&&e.cim.type==="CIMHatchFill"?(a=F.fromCIMHatchFill(e.cim,t),i=new q(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin),n=t):e.cim.markerPlacement&&e.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(a=F.fromCIMInsidePolygon(e.cim),i=new q(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):(a=e.cim,e.avoidSDFRasterization||(c=N(a))),c&&!o){const[r,l,p]=ie(c);return r?{size:[l,p],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:n}:null}const[s,y,m,g,u]=F.rasterize(this._rasterizationCanvas,a,i,this._resourceManager,!o);return s?{size:[y,m],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:g,anchorY:u}:null}rasterizeImageResource(e,t,o,a){this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");o instanceof ImageData?i.putImageData(o,0,0):(o.setAttribute("width",`${e}px`),o.setAttribute("height",`${t}px`),i.drawImage(o,0,0,e,t));const c=i.getImageData(0,0,e,t),n=new Uint8Array(c.data);if(a){for(const r of a)if(r&&r.oldColor&&r.oldColor.length===4&&r.newColor&&r.newColor.length===4){const[l,p,f,d]=r.oldColor,[z,h,I,w]=r.newColor;if(l===z&&p===h&&f===I&&d===w)continue;for(let C=0;C<n.length;C+=4)l===n[C]&&p===n[C+1]&&f===n[C+2]&&d===n[C+3]&&(n[C]=z,n[C+1]=h,n[C+2]=I,n[C+3]=w)}}let s;for(let r=0;r<n.length;r+=4)s=n[r+3]/255,n[r]=n[r]*s,n[r+1]=n[r+1]*s,n[r+2]=n[r+2]*s;let y=n,m=e,g=t;const u=ue;if(m>=u||g>=u){const r=m/g;r>1?(m=u,g=Math.round(u/r)):(g=u,m=Math.round(u*r)),y=new Uint8Array(4*m*g);const l=new Uint8ClampedArray(y.buffer);Q(n,e,t,l,m,g,!1)}return{size:[m,g],image:new Uint32Array(y.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}const T=R=>R!=null&&R.scaleFactor?R.scaleFactor:1,de=96/72;class be{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new re,this._cimResourceManager=new ge,this._rasterizer=new fe(this._cimResourceManager)}get _imageDataCanvas(){return this._lazyImageDataCanvas??(this._lazyImageDataCanvas=document.createElement("canvas")),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,o,a,i,c,n,s,y){if(!e)return null;const{data:m}=e;if(!m||m.type!=="CIMSymbolReference"||!m.symbol)return null;const{symbol:g}=m;c||(c=V(g));const u=await se.resolveSymbolOverrides(m,t,this._spatialReference,i,c,n,s),r=this._imageDataCanvas,l=this._cimResourceManager,p=[];F.fetchResources(u,l,p),F.fetchFonts(u,l,p),p.length>0&&await Promise.all(p);const{width:f,height:d}=o,z=ye(c,f,d,a),h=F.getEnvelope(u,z,l);if(!h)return null;const I=(window.devicePixelRatio||1)*de;let w=1,C=0,b=0;switch(g.type){case"CIMPointSymbol":case"CIMTextSymbol":{let k=1;h.width>f&&(k=f/h.width);let _=1;h.height>d&&(_=d/h.height),a==="preview"&&(h.width<f&&(k=f/h.width),h.height<d&&(_=d/h.height)),w=Math.min(k,_),C=h.x+h.width/2,b=h.y+h.height/2}break;case"CIMLineSymbol":{(y||h.height>d)&&(w=d/h.height),b=h.y+h.height/2;const k=h.x*w+f/2,_=(h.x+h.width)*w+f/2,{paths:x}=z;x[0][0][0]-=k/w,x[0][2][0]-=(_-f)/w}break;case"CIMPolygonSymbol":{C=h.x+h.width/2,b=h.y+h.height/2;const k=h.x*w+f/2,_=(h.x+h.width)*w+f/2,x=h.y*w+d/2,X=(h.y+h.height)*w+d/2,{rings:S}=z;k<0&&(S[0][0][0]-=k,S[0][3][0]-=k,S[0][4][0]-=k),x<0&&(S[0][0][1]+=x,S[0][1][1]+=x,S[0][4][1]+=x),_>f&&(S[0][1][0]-=_-f,S[0][2][0]-=_-f),X>d&&(S[0][2][1]+=X-d,S[0][3][1]+=X-d)}}r.width=f*I,r.height=d*I;const v=1;r.width+=2*v,r.height+=2*v;const P=this._imageDataContext,A=he.createIdentity();return A.translate(-C,-b),A.scale(w*I,-w*I),A.translate(f*I/2+v,d*I/2+v),P.clearRect(0,0,r.width,r.height),new ne(P,l,A,!0).drawSymbol(u,z),P.getImageData(0,0,r.width,r.height)}async analyzeCIMSymbol3D(e,t,o,a,i){const c=[],n=t?{geometryType:a,spatialReference:this._spatialReference,fields:t}:null,s=[];F.fetchFonts(e.data.symbol,this._cimResourceManager,s),await Promise.all(s);const y=new oe(this._cimResourceManager,n);let m;await y.analyzeSymbolReference(e.data,this._avoidSDF,c),B(i);for(const g of c)g.cim.type!=="CIMPictureMarker"&&g.cim.type!=="CIMPictureFill"&&g.cim.type!=="CIMPictureStroke"||(m||(m=[]),m.push(this._fetchPictureMarkerResource(g,i))),o&&g.type==="text"&&typeof g.text=="string"&&g.text.includes("[")&&(g.text=K(o,g.text,g.cim.textCase));return m&&await Promise.all(m),c}rasterizeCIMSymbol3D(e,t,o,a,i,c){const n=[];for(const s of e){a&&typeof a.scaleFactor=="function"&&(a.scaleFactor=a.scaleFactor(t,i,c));const y=this._getRasterizedResource(s,t,o,a,i,c);if(!y)continue;let m=0,g=y.anchorX||0,u=y.anchorY||0,r=!1,l=0,p=0;if(o==="esriGeometryPoint"){const f=T(a);if(l=M(s.offsetX,t,i,c)*f||0,p=M(s.offsetY,t,i,c)*f||0,s.type==="marker")m=M(s.rotation,t,i,c)||0,r=s.rotateClockwise??!1;else if(s.type==="text"){if(m=M(s.angle,t,i,c)||0,s.horizontalAlignment!==void 0)switch(s.horizontalAlignment){case"left":g=-.5;break;case"right":g=.5;break;default:g=0}if(s.verticalAlignment!==void 0)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}y!=null&&n.push({angle:m,rotateClockWise:r,anchorX:g,anchorY:u,offsetX:l,offsetY:p,rasterizedResource:y})}return this.getSymbolImage(n)}getSymbolImage(e){const t=document.createElement("canvas"),o=t.getContext("2d");let a=0,i=0,c=0,n=0;const s=[];for(let u=0;u<e.length;u++){const r=e[u],l=r.rasterizedResource;if(!l)continue;const p=l.size,f=r.offsetX,d=r.offsetY,z=r.anchorX,h=r.anchorY,I=r.rotateClockWise||!1;let w=r.angle,C=D(f)-p[0]*(.5+z),b=D(d)-p[1]*(.5+h),v=C+p[0],P=b+p[1];if(w){I&&(w=-w);const _=Math.sin(w*Math.PI/180),x=Math.cos(w*Math.PI/180),X=C*x-b*_,S=C*_+b*x,O=C*x-P*_,U=C*_+P*x,H=v*x-P*_,L=v*_+P*x,W=v*x-b*_,E=v*_+b*x;C=Math.min(X,O,H,W),b=Math.min(S,U,L,E),v=Math.max(X,O,H,W),P=Math.max(S,U,L,E)}a=C<a?C:a,i=b<i?b:i,c=v>c?v:c,n=P>n?P:n;const A=o.createImageData(l.size[0],l.size[1]);A.data.set(new Uint8ClampedArray(l.image.buffer));const k={offsetX:f,offsetY:d,rotateClockwise:I,angle:w,rasterizedImage:A,anchorX:z,anchorY:h};s.push(k)}t.width=c-a,t.height=n-i;const y=-a,m=n;for(let u=0;u<s.length;u++){const r=s[u],l=this._imageDataToCanvas(r.rasterizedImage),p=r.rasterizedImage.width,f=r.rasterizedImage.height,d=y-p*(.5+r.anchorX),z=m-f*(.5-r.anchorY);if(r.angle){const h=(360-r.angle)*Math.PI/180;o.save(),o.translate(D(r.offsetX),-D(r.offsetY)),o.translate(y,m),o.rotate(h),o.translate(-y,-m),o.drawImage(l,d,z),o.restore()}else o.drawImage(l,d+D(r.offsetX),z-D(r.offsetY))}const g=new Z({x:y/t.width-.5,y:m/t.height-.5});return{imageData:t.width!==0&&t.height!==0?o.getImageData(0,0,t.width,t.height):o.createImageData(1,1),anchorPosition:g}}async _fetchPictureMarkerResource(e,t){const o=e.materialHash;if(!this._pictureMarkerCache.get(o)){const a=(await $(e.cim.url,{responseType:"image",signal:t==null?void 0:t.signal})).data;this._pictureMarkerCache.set(o,a)}}_imageDataToCanvas(e){const t=this._imageDataCanvas,o=this._imageDataContext;return t.width=e.width,t.height=e.height,o.putImageData(e,0,0),t}_imageTo32Array(e,t,o,a){const i=this._imageDataCanvas,c=this._imageDataContext;if(i.width=t,i.height=o,c.drawImage(e,0,0,t,o),a){c.save();const n=new ee(a);c.fillStyle=n.toHex(),c.globalCompositeOperation="multiply",c.fillRect(0,0,t,o),c.globalCompositeOperation="destination-atop",c.drawImage(e,0,0,t,o),c.restore()}return new Uint32Array(c.getImageData(0,0,t,o).data.buffer)}_getRasterizedResource(e,t,o,a,i,c){let n,s,y;if(e.type==="text")return this._rasterizeTextResource(e,t,a,i,c);({analyzedCIM:n,hash:s}=pe(e,t,i,c));const u=T(a);if(e.cim.type==="CIMPictureMarker"){const p=M(e.size,t,i,c)*u,{image:f,width:d,height:z}=this._getPictureResource(e,p,M(e.color,t,i,c));return y={image:f,size:[d,z],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},y}te(n,u,{preserveOutlineWidth:!1});const r=n;s+=o,a&&(s+=JSON.stringify(a));const l=this._resourceCache;return l.has(s)?l.get(s):(y=this._rasterizer.rasterizeJSONResource({cim:r,type:e.type,url:e.url,mosaicHash:s,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),l.set(s,y),y)}_rasterizeTextResource(e,t,o,a,i){var b,v,P;const c=T(o),n=M(e.text,t,a,i);if(!n||n.length===0)return null;const s=e.cim,y=M((s==null?void 0:s.fontFamilyName)||e.fontName,t,a,i),m=M(((b=s==null?void 0:s.font)==null?void 0:b.style)||e.style,t,a,i),g=M(((v=s==null?void 0:s.font)==null?void 0:v.weight)||e.weight,t,a,i),u=M(((P=s==null?void 0:s.font)==null?void 0:P.decoration)||e.decoration,t,a,i),r=M(e.size,t,a,i)*c,l=M(e.horizontalAlignment,t,a,i),p=M(e.verticalAlignment,t,a,i),f=Y(M(e.color,t,a,i)),d=Y(M(e.outlineColor,t,a,i)),z=M(e.outlineSize,t,a,i),h=e.backgroundColor!=null?Y(e.backgroundColor):null,I=e.borderLineColor!=null?Y(e.borderLineColor):null,w=e.borderLineWidth!=null?e.borderLineWidth:null,C={color:f,size:r,horizontalAlignment:l,verticalAlignment:p,font:{family:y,style:m,weight:g,decoration:u},halo:{size:z||0,color:d,style:m},backgroundColor:h,borderLine:I!=null&&w!=null?{color:I,size:w}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(n,C)}_getPictureResource(e,t,o){const a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;const i=a.height/a.width,c=t?i>1?D(t):D(t)/i:a.width,n=t?i>1?D(t)*i:D(t):a.height;return{image:this._imageTo32Array(a,c,n,o),width:c,height:n}}}function ye(R,e,t,o){const i=-e/2+1,c=e/2-1,n=t/2-1,s=-t/2+1;switch(R){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[c,0]]]};default:return o==="legend"?{rings:[[[i,n],[c,0],[c,s],[i,s],[i,n]]]}:{rings:[[[i,n],[c,n],[c,s],[i,s],[i,n]]]}}}function pe(R,e,t,o){let a,i;return typeof R.materialHash=="function"?(a=(0,R.materialHash)(e,t,o),i=ce(R.cim,R.materialOverrides)):(a=R.materialHash,i=R.cim),{analyzedCIM:i,hash:a}}export{be as CIMSymbolRasterizer};
