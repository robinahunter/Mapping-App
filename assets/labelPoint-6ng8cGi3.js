import{dr as b,gw as Q,cq as et,cr as st,co as it,cp as ht,cn as nt,aP as U,gx as rt,gy as ot,gz as at,bX as Z,gA as pt,gB as ct}from"./index-3T8NnAdH.js";class H{static fromOptimized(t,e,i=!1,h=!1){return new T().initialize(t,e,i,h,1)}static fromJSON(t,e=!1,i=!1){const[h,n]=X(t);return new G().initialize(h,n,e,i,1)}static fromOptimizedCIM(t,e,i=!1,h=!1){return new Y().initialize(t,e,i,h,1)}static fromJSONCIM(t,e=!1,i=!1){const[h,n]=X(t);return new B().initialize(h,n,e,i,1)}static fromFeatureSetReader(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimized(e,i):null}static fromFeatureSetReaderCIM(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimizedCIM(e,i):null}static createEmptyOptimized(t,e=!1,i=!1){return new T().initialize(new b,t,e,i,1)}static createEmptyJSON(t,e=!1,i=!1){return new G().initialize([],t,e,i,1)}static createEmptyOptimizedCIM(t,e=!1,i=!1){return new Y().initialize(new b,t,e,i,1)}static createEmptyJSONCIM(t,e=!1,i=!1){return new B().initialize([],t,e,i,1)}asJSON(){const t=Q(this);return this.geometryType==="esriGeometryEnvelope"?{xmin:t[0][0][0],ymin:t[0][0][1],xmax:t[0][2][0],ymax:t[0][2][1]}:this.geometryType==="esriGeometryMultipoint"?{points:t.flat()}:this.geometryType==="esriGeometryPoint"?{x:t[0][0][0],y:t[0][0][1]}:this.geometryType==="esriGeometryPolygon"?{rings:t}:{paths:t}}getCurrentRingArea(){if(!this||this.pathSize<3)return 0;let t,e,i=0;if(this.seekPathStart(),!this.nextPoint())return 0;t=this.x,e=this.y;const h=t,n=e;for(;this.nextPoint();)i+=(t-this.x)*(e+this.y),t=this.x,e=this.y;return i+=(t-h)*(e+n),-.5*i}invertY(){this.yFactor*=-1}}let T=class K extends H{constructor(){super(...arguments),this._end=-1}initialize(t,e,i,h,n){return this.hasZ=i,this.hasM=h,this.geometryType=e,this._stride=2+Number(i)+Number(h),this._geometry=t,this._pathIndex=-1,this._pathOffset=0,this._pointOffset=-this._stride,this._end=-1,this.yFactor=n,this}reset(){this.initialize(this._geometry,this.geometryType,this.hasZ,this.hasM,this.yFactor)}seekPath(t){if(t>=0&&t<this.totalSize){if(this._pathIndex<t)for(;this._pathIndex<t&&this.nextPath(););else if(this._pathIndex>t)for(;this._pathIndex>t&&this.prevPath(););return!0}return!1}seekPathStart(){this._pointOffset=this._pathOffset-this._stride}seekPathEnd(){this._pointOffset=this._end}seekInPath(t){const e=this._pathOffset+t*this._stride;return e>=0&&e<this._end&&(this._pointOffset=e,!0)}nextPoint(){return(this._pointOffset+=this._stride)<this._end}prevPoint(){return(this._pointOffset-=this._stride)>=this._pathOffset}nextPath(){if(this._pathIndex>=0){const e=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex];this._pathOffset+=this._stride*e}this._pointOffset=this._pathOffset-this._stride;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex+1];return this._end=this._pointOffset+this._stride+this._stride*t,++this._pathIndex<this.totalSize}prevPath(){this._end=this._pathOffset;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex-1];return this._pathOffset-=this._stride*t,this._pointOffset=this._pathOffset-this._stride,--this._pathIndex>=0}pathLength(){const t=this._end,e=this._stride,i=this._geometry.coords;let h=0;for(let n=this._pathOffset+e;n<t;n+=e){const o=i[n-e],r=i[n-e+1],a=i[n]-o,c=i[n+1]-r;h+=Math.sqrt(a*a+c*c)}return h}startPath(){this._geometry.lengths.push(0)}pushPath(t){this.startPath(),this.pushPoints(t)}pushPoint(t){for(let e=0;e<this._stride;++e)this._geometry.coords.push(t[e]);this._geometry.lengths[this.totalSize-1]++}pushXY(t,e){this._geometry.coords.push(t,e),this._geometry.lengths[this.totalSize-1]++}pushPoints(t){for(const e of t)for(let i=0;i<this._stride;++i)this._geometry.coords.push(e[i]);this._geometry.lengths[this.totalSize-1]+=t.length}pushCursor(t){const e=t.asOptimized();this._geometry.coords.push(...e.coords),this._geometry.lengths.push(...e.lengths)}asOptimized(){const t=this._geometry.clone();if(this.yFactor!==1)for(let e=1;e<t.coords.length;e+=this._stride)t.coords[e]*=this.yFactor;return this.geometryType==="esriGeometryPoint"&&(t.lengths.length=0),t}isClosed(){const t=this._geometry.coords,e=this._pathOffset,i=this._end-this._stride;for(let h=0;h<this._stride;h++)if(t[e+h]!==t[i+h])return!1;return!0}clone(){return new K().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._geometry.coords.length/this._stride}get pathSize(){const{lengths:t}=this._geometry;return this._pathIndex<0||this._pathIndex>t.length-1?0:t[this._pathIndex]}get totalSize(){return this._geometry.lengths.length}get x(){return this._geometry.coords[this._pointOffset]}set x(t){this._geometry.coords[this._pointOffset]=t}get y(){return this.yFactor*this._geometry.coords[this._pointOffset+1]}set y(t){this._geometry.coords[this._pointOffset+1]=this.yFactor*t}get z(){return this._geometry.coords[this._pointOffset+2]}set z(t){this._geometry.coords[this._pointOffset+2]=t}get m(){const t=this.hasZ?3:2;return this._geometry.coords[this._pointOffset+t]}set m(t){this._geometry.coords[this._pointOffset+3]=t}get pathIndex(){return this._pathIndex}get _coordIndex(){return this._pointOffset/this._stride}};function ut(s){const t=[s.x,s.y];return s.z&&t.push(s.z),s.m&&t.push(s.m),t}function X(s){return et(s)?[s.rings,"esriGeometryPolygon"]:st(s)?[s.paths,"esriGeometryPolyline"]:it(s)?[[s.points],"esriGeometryMultipoint"]:ht(s)?[[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]],"esriGeometryEnvelope"]:nt(s)?[[[ut(s)]],"esriGeometryPoint"]:[[],"esriGeometryPolyline"]}let G=class V extends H{initialize(t,e,i,h,n){return this._paths=t,this.geometryType=e,this.hasZ=i,this.hasM=h,this._pathIndex=this._pointIndex=-1,this.yFactor=n,this._mIndex=this.hasZ?3:2,this}reset(){this._pathIndex=this._pointIndex=-1}seekPath(t){return t>=0&&t<this.totalSize&&(this._pathIndex=t,this._pointIndex=-1,this._currentPath=this._paths[t],!0)}seekPathStart(){this._pointIndex=-1}seekPathEnd(){this._pointIndex=this._currentPath.length}seekInPath(t){return t>=0&&t<this._currentPath.length&&(this._pointIndex=t,this._currentPoint=this._currentPath[this._pointIndex],!0)}nextPoint(){return this._currentPoint=this._currentPath[++this._pointIndex],this._pointIndex<this._currentPath.length}prevPoint(){return this._currentPoint=this._currentPath[--this._pointIndex],this._pointIndex>=0}nextPath(){return this._pointIndex=-1,this._currentPath=this._paths[++this._pathIndex],this._pathIndex<this.totalSize}prevPath(){return this._pointIndex=-1,this._currentPath=this._paths[--this._pathIndex],this._pathIndex>=0}pathLength(){const t=this._currentPath.length,e=this._currentPath;let i=0;for(let h=1;h<t;h++){const n=e[h-1],o=e[h],r=n[0],a=n[1],c=o[0]-r,u=o[1]-a;i+=Math.sqrt(c*c+u*u)}return i}startPath(){this._paths.push([])}pushPath(t){this._paths.push(t)}pushPoint(t){this._paths[this.totalSize-1].push(t)}pushXY(t,e){this._paths[this.totalSize-1].push([t,e])}pushPoints(t){this._paths[this.totalSize-1].push(...t)}pushCursor(t){const e=Q(t);for(const i of e)this.pushPath(i)}asOptimized(){const t=new b;if(this.geometryType==="esriGeometryPoint")t.coords.push(...this._paths[0][0]),t.lengths.length=0;else for(const e of this._paths){for(const i of e)t.coords.push(i[0]),t.coords.push(i[1]*this.yFactor),this.hasZ&&t.coords.push(i[2]),this.hasM&&t.coords.push(i[this._mIndex]);t.lengths.push(e.length)}return t}isClosed(){const t=this._currentPath[0],e=this._currentPath[this._currentPath.length-1];for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}clone(){return new V().initialize(U(this._paths),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._paths.map(t=>t.length).reduce((t,e)=>t+e)}get pathSize(){return this._pathIndex<0||this._pathIndex>this.totalSize-1?-1:this._paths[this._pathIndex].length}get totalSize(){return this._paths.length}get x(){return this._currentPoint[0]}set x(t){this._currentPoint[0]=t}get y(){return this.yFactor*this._currentPoint[1]}set y(t){this._currentPoint[1]=this.yFactor*t}get z(){return this._currentPoint[2]}set z(t){this._currentPoint[2]=t}get m(){return this._currentPoint[this._mIndex]}set m(t){this._currentPoint[this._mIndex]=t}get pathIndex(){return this._pathIndex}};const S=4,M=1;let Y=class W extends T{initialize(t,e,i,h,n){return super.initialize(t,e,i,h,n),this._controlPoints||(this._controlPoints=this._controlPoints=new Array(this.totalSize).fill(void 0).map(o=>new Set)),this}startPath(){super.startPath(),this._controlPoints.push(new Set)}clone(){const t=new W().initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor);return t._controlPoints=this._controlPoints,t}setControlPoint(){this._controlPoints[this.pathIndex].add(this._coordIndex)}getControlPoint(){return this._controlPoints[this.pathIndex].has(this._coordIndex)}setControlPointAt(t){this._controlPoints[this.pathIndex].add(t)}getControlPointAt(t){return this._controlPoints[this.pathIndex].has(t)}},B=class tt extends G{initialize(t,e,i,h,n){return super.initialize(t,e,i,h,n)}clone(){return new tt().initialize(U(this._paths),this.geometryType,this.hasZ,this.hasM,1)}setControlPoint(){this._paths[this.pathIndex][this._pointIndex][S]=M}getControlPoint(){return this._paths[this.pathIndex][this._pointIndex][S]===M}setControlPointAt(t){this._paths[this.pathIndex][t][S]=M}getControlPointAt(t){return this._paths[this.pathIndex][t][S]===M}};const _t=100*222045e-21;function mt(s){if(s.totalSize===0)return null;const t=rt(s);if(!t)return null;const e=4*(Math.abs(t[0])+Math.abs(t[2])+Math.abs(t[1])+Math.abs(t[3])+1)*_t;let i=0,h=0;s.reset();for(let m=0;s.nextPath();m++){const g=s.getCurrentRingArea();g>h&&(h=g,i=m)}if(s.seekPath(i),s.pathSize===0)return null;s.seekPathStart();const n=ot(s);if(Math.abs(h)<=2*e*e)return[(n[0]+n[2])/2,(n[1]+n[3])/2];s.seekPathStart();const o=at(s,Z());if(o===null)return null;if(s.totalPoints<4)return o;const r=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],a=[NaN,NaN,NaN,NaN],c=[NaN,NaN,NaN,NaN];let u=!1,p=z(o,s,!0);p.distance===0&&(u=!0,r[0][0]=o[0],r[0][1]=o[1],p=z(o,s,!1)),a[0]=p.distance,c[0]=0;const f=[NaN,NaN];let l=!1,y=.25,d=-1,_=NaN;do if(_=NaN,r[1]=F(s,$(n[0],n[2],y),e,t),isNaN(r[1][0])||isNaN(r[1][1])||(p=z(r[1],s,!1),_=p.distance),!isNaN(_)&&_>e&&k(r[1],s))l=!0,a[1]=_,c[1]=N(r[1],o);else if(!isNaN(_)&&_>d&&(d=_,f[0]=r[1][0],f[1]=r[1][1]),y-=.01,y<.1){if(!(d>=0))break;l=!0,a[1]=d,r[1][0]=f[0],r[1][1]=f[1],c[1]=N(r[1],o)}while(!l);l=!1,y=.5,d=-1;let v=.01,A=1;do if(_=NaN,r[2]=F(s,$(n[0],n[2],y),e,t),isNaN(r[2][0])||isNaN(r[2][1])||(p=z(r[2],s,!1),_=p.distance),!isNaN(_)&&_>e&&k(r[2],s))l=!0,a[2]=_,c[2]=N(r[2],o);else if(!isNaN(_)&&_>d)d=_,f[0]=r[2][0],f[1]=r[2][1];else if(_>d&&(d=_,f[0]=r[2][0],f[1]=r[2][1]),y=.5+v*A,v+=.01,A*=-1,y<.3||y>.7){if(!(d>=0))break;l=!0,a[2]=d,r[2][0]=f[0],r[2][1]=f[1],c[2]=N(r[2],o)}while(!l);l=!1,y=.75,d=-1;do if(_=NaN,r[3]=F(s,$(n[0],n[2],y),e,t),isNaN(r[3][0])||isNaN(r[3][1])||(p=z(r[3],s,!1),_=p.distance),!isNaN(_)&&_>e&&k(r[3],s))l=!0,a[3]=_,c[3]=N(r[3],o);else if(_>d&&(d=_,f[0]=r[3][0],f[1]=r[3][1]),y+=.01,y>.9){if(!(d>=0))break;l=!0,a[3]=d,r[3][0]=f[0],r[3][1]=f[1],c[3]=N(r[3],o)}while(!l);const P=[0,1,2,3],O=u?0:1;let E;for(let m=O;m<4;m++)for(let g=O;g<3;g++){const R=c[g],D=c[g+1];ft(R,D)>0&&(E=P[g],P[g]=P[g+1],P[g+1]=E,c[g]=D,c[g+1]=R)}let q=O,J=0,I=0;for(let m=O;m<4;m++){switch(m){case 0:I=2*a[P[m]];break;case 1:I=1.66666666*a[P[m]];break;case 2:I=1.33333333*a[P[m]];break;case 3:I=a[P[m]]}I>J&&(J=I,q=P[m])}return r[q]}function k(s,t){let e,i,h,n,o=0;for(t.reset();t.nextPath()&&t.nextPoint();)for(e=t.x,i=t.y;t.nextPoint();e=h,i=n)h=t.x,n=t.y,i>s[1]!=n>s[1]&&((h-e)*(s[1]-i)-(n-i)*(s[0]-e)>0?o++:o--);return o!==0}function z(s,t,e){if(e&&k(s,t))return{coord:s,distance:0};let i=1/0,h=0,n=0,o=[0,0],r=[0,0];const a=[0,0];for(t.reset();t.nextPath()&&t.nextPoint();)if(!(t.pathSize<2))for(o[0]=t.x,o[1]=t.y;t.nextPoint();o=r){r=[t.x,t.y],pt(a,s,o,r);const c=N(s,a);c<i&&(i=c,h=a[0],n=a[1])}return{coord:[h,n],distance:Math.sqrt(i)}}function F(s,t,e,i){const h=[t,0];let n=1/0,o=1/0,r=!1,a=!1;const c=[[t,i[1]-1],[t,i[3]+1]],u=[0,0],p=[0,0],f=[0,0],l=[[0,0],[0,0]],y=Z();for(s.reset();s.nextPath()&&s.nextPoint();)if(!(s.pathSize<2))for(l[0][0]=s.x,l[0][1]=s.y;s.nextPoint();l[0][0]=l[1][0],l[0][1]=l[1][1]){if(l[1][0]=s.x,l[1][1]=s.y,lt(y,l)===null||(p[0]=c[0][0],p[1]=c[0][1],f[0]=c[1][0],f[1]=c[1][1],dt(y,p,f)===0)||!ct(c[0],c[1],l[0],l[1],u))continue;const d=u[1];n>o?d<n&&(n=d,r=!0):d<o&&(o=d,a=!0)}return r&&a?h[1]=(n+o)/2:h[0]=h[1]=NaN,h}function lt(s,t){if(t.length<2)return null;s||(s=Z());const[e,i]=t[0],[h,n]=t[1];return s[0]=Math.min(e,h),s[1]=Math.min(i,n),s[2]=Math.max(e,h),s[3]=Math.max(i,n),s}const w=1,C=4,L=3,j=12;function dt(s,t,e){let i=x(t,s),h=x(e,s);const n=s[0],o=s[1],r=s[2],a=s[3];if(i&h)return 0;if(!(i|h))return 4;const c=(i?1:0)|(h?2:0);do{const u=e[0]-t[0],p=e[1]-t[1];if(u>p)i&L?(i&w?(t[1]+=p*(n-t[0])/u,t[0]=n):(t[1]+=p*(r-t[0])/u,t[0]=r),i=x(t,s)):h&L?(h&w?(e[1]+=p*(n-e[0])/u,e[0]=n):(e[1]+=p*(r-e[0])/u,e[0]=r),h=x(e,s)):i?(i&C?(t[0]+=u*(o-t[1])/p,t[1]=o):(t[0]+=u*(a-t[1])/p,t[1]=a),i=x(t,s)):(h&C?(e[0]+=u*(o-e[1])/p,e[1]=o):(e[0]+=u*(a-e[1])/p,e[1]=a),h=x(e,s));else if(i&j?(i&C?(t[0]+=u*(o-t[1])/p,t[1]=o):(t[0]+=u*(a-t[1])/p,t[1]=a),i=x(t,s)):h&j?(h&C?(e[0]+=u*(o-e[1])/p,e[1]=o):(e[0]+=u*(a-e[1])/p,e[1]=a),h=x(e,s)):i?(i&w?(t[1]+=p*(n-t[0])/u,t[0]=n):(t[1]+=p*(r-t[0])/u,t[0]=r),i=x(t,s)):(h&w?(e[1]+=p*(n-e[0])/u,e[0]=n):(e[1]+=p*(r-e[0])/u,e[0]=r),h=x(e,s)),i&h)return 0}while(i|h);return c}function x(s,t){return(s[0]<t[0]?1:0)|(s[0]>t[2]?1:0)<<1|(s[1]<t[1]?1:0)<<2|(s[1]>t[3]?1:0)<<3}function $(s,t,e){return s+(t-s)*e}function N(s,t){return(s[0]-t[0])*(s[0]-t[0])+(s[1]-t[1])*(s[1]-t[1])}function ft(s,t){if(s<t)return-1;if(s>t)return 1;if(s===t)return 0;const e=isNaN(s),i=isNaN(t);return e<i?-1:e>i?1:0}export{H as a,mt as l};
