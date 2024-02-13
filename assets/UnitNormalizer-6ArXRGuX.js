import{e as V}from"./Segment-TeMlAb70.js";import{n as G,f3 as X,kC as g,kD as Y,kE as Z,cD as tt,kF as et,cH as nt,fH as st,fG as at,kG as it,kH as rt,kI as x,br as S}from"./index-3T8NnAdH.js";const gt={readOnly:!0,get(){return V(this.view)}};var j;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(j||(j={}));function H(t){if(!t)return null;if(Y(t)&&t.wkid){const n=Z[t.wkid];if(n)return n}const e=t.wkt2||t.wkt;if(e){const n=ot(e);if(n)return n}return null}function ot(t){const e=et.exec(t);if(!e||e.length!==2)return null;const n=e[1].split(",");if(!n||n.length<3)return null;const s=parseFloat(n[1]),a=parseFloat(n[2]);return isNaN(s)||isNaN(a)?null:{a:s,f:a===0?0:1/a}}function ct(t){const e=H(t??tt.WGS84);if(ht(e))return e;const n=e.a*(1-e.f);return Object.assign(e,{b:n,eSq:1-(n/e.a)**2,radius:(2*e.a+n)/3,densificationRatio:1e4/((2*e.a+n)/3)})}function ht(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function lt(t){return H(t)!==null}function vt(t,e="meters"){if(!t)throw new G("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(s=>!lt(s.spatialReference)))throw new G("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let s=0;s<t.length;s++){const a=t[s],{spatialReference:m}=a,v=a.type==="polyline"?a.paths:a.rings;let r=0;for(let z=0;z<v.length;z++){const o=v[z];let f=0;for(let M=1;M<o.length;M++){const _=o[M-1][0],$=o[M][0],k=o[M-1][1],h=o[M][1];if(k!==h||_!==$){const c=new ut;ft(c,[_,k],[$,h],m),f+=c.distance}}r+=f}r=X(r,"meters",e),n.push(r)}return n}class ut{constructor(e=0,n=void 0,s=void 0){this.distance=e,this.azimuth=n,this.reverseAzimuth=s}}function ft(t,e,n,s){const a=e[0]*g,m=e[1]*g,v=n[0]*g,r=n[1]*g,{a:z,b:o,f,radius:M}=ct(s),_=v-a,$=Math.atan((1-f)*Math.tan(m)),k=Math.atan((1-f)*Math.tan(r)),h=Math.sin($),c=Math.cos($),R=Math.sin(k),l=Math.cos(k);let q,w,p,i,A,D,b,N,P,U,y=1e3,u=_;do{if(b=Math.sin(u),N=Math.cos(u),p=Math.sqrt(l*b*(l*b)+(c*R-h*l*N)*(c*R-h*l*N)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;A=h*R+c*l*N,D=Math.atan2(p,A),P=c*l*b/p,w=1-P*P,i=A-2*h*R/w,isNaN(i)&&(i=0),U=f/16*w*(4+f*(4-3*w)),q=u,u=_+(1-U)*f*P*(D+U*p*(i+U*A*(2*i*i-1)))}while(Math.abs(u-q)>1e-12&&--y>0);if(y===0){const B=M,J=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(v-a))*B,F=v-a,K=Math.sin(F)*Math.cos(r),L=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(F),Q=Math.atan2(K,L);return t.azimuth=Q/g,t.distance=J,t.reverseAzimuth=void 0,t}const d=w*(z*z-o*o)/(o*o),E=d/1024*(256+d*(d*(74-47*d)-128)),O=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(D-E*p*(i+E/4*(A*(2*i*i-1)-E/6*i*(4*p*p-3)*(4*i*i-3)))),T=Math.atan2(l*Math.sin(u),c*R-h*l*Math.cos(u)),W=Math.atan2(c*Math.sin(u),c*R*Math.cos(u)-h*l);return t.azimuth=T/g,t.distance=O,t.reverseAzimuth=W/g,t}function zt(t,e){if(nt(e,0,0,0),t.length>0){for(let n=0;n<t.length;++n)st(e,e,t[n]);at(e,e,1/t.length)}}function Rt(t,e,n,s){s.projectToRenderScreen(t,C),s.projectToRenderScreen(e,I),it(n,pt,Mt),rt(n,n)}const C=x(),Mt=C,I=x(),pt=I;class _t{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=S(this._spatialReference,1),this._metersPerElevationUnit=S(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}export{lt as M,ut as R,_t as a,ft as b,gt as c,j as e,Rt as i,zt as t,vt as y};
