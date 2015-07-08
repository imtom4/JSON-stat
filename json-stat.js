/*

JSON-stat Javascript Toolkit v. 0.8.1
http://json-stat.org
https://github.com/badosa/JSON-stat

Copyright 2015 Xavier Badosa (http://xavierbadosa.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied. See the License for the specific language governing
permissions and limitations under the License.

*/
function JSONstat(t,e){return window===this?new JSONstat.jsonstat(t,e):void 0}var JSONstat=JSONstat||{}
JSONstat.version="0.8.1",function(){"use strict"
function t(t){return"[object Array]"===Object.prototype.toString.call(t)}function e(e,n){var i,s,r,l=function(t,e){var n,i,s=e!==!1
if(window.XDomainRequest&&/^(http(s)?:)?\/\//.test(t)){if(!s)return
i=new XDomainRequest,i.onload=function(){n=JSON.parse(i.responseText),e.call(JSONstat(n))},i.open("GET",t),i.send()}else if(i=new XMLHttpRequest,i.onreadystatechange=function(){if(4===i.readyState){var t=i.status
n=t&&i.responseText&&(t>=200&&300>t||304===t)?JSON.parse(i.responseText):null,s&&e.call(JSONstat(n))}},i.open("GET",t,s),i.send(null),!s)return n},a=function(e,n){var i,s=[]
if("string"==typeof e&&(e=[e]),t(e)){if(e.length===n)return e
if(1===e.length){for(i=0;n>i;i++)s.push(e[0])
return s}}for(i=0;n>i;i++){var r=void 0===e[i]?null:e[i]
s.push(r)}return s}
if(this.length=0,this.id=[],null!==e&&void 0!==e)switch(this["class"]=e["class"]||"bundle",this["class"]){case"bundle":var o=[],u=0
if(this.error=null,this.length=0,"string"==typeof e&&e.length>0&&(e=l(e,"function"==typeof n?n:!1)),null===e||"object"!=typeof e)return
if(e.hasOwnProperty("error"))return void(this.error=e.error)
if("dataset"===e["class"]||"collection"===e["class"])return JSONstat(e)
for(s in e)u++,o.push(s)
this.__tree__=e,this.length=u,this.id=o
break
case"dataset":e.hasOwnProperty("__tree__")||(delete e["class"],e={__tree__:e}),this.__tree__=i=e.__tree__,this.label=i.label||null,this.note=i.note||null,this.link=i.link||null,this.href=i.href||null,this.updated=i.updated||null,this.source=i.source||null,this.extension=i.extension||null
var h,f=0
if(i.hasOwnProperty("value")&&t(i.value))f=i.value.length
else if(i.hasOwnProperty("status")&&t(i.status))f=i.status.length
else if(i.hasOwnProperty("dimension")){var c=i.dimension.size,d=1
for(h=c.length;h--;)d*=c[h]
f=d}if(this.value=a(i.value,f),this.status=i.hasOwnProperty("status")?a(i.status,f):null,i.hasOwnProperty("dimension")){if(!t(i.dimension.id)||!t(i.dimension.size)||i.dimension.id.length!=i.dimension.size.length)return
var p=i.dimension,v=p.role||null,g=p.id,y=p.size.length,_=function(t){v.hasOwnProperty(t)||(v[t]=null)}
if(this.length=y,this.id=g,v&&(_("time"),_("geo"),_("metric"),_("classification")),v&&null===v.classification){var b=[],m=["time","geo","metric"],w=function(t,e){for(var n=e.length;n--;)if(t===e[n])return!0
return!1}
for(h=0;3>h;h++){var O=v[m[h]]
null!==O&&(b=b.concat(O))}for(v.classification=[],h=0;y>h;h++)w(g[h],b)||v.classification.push(g[h])
0===v.classification.length&&(v.classification=null)}this.role=v,this.n=f
for(var x=0,S=this.length;S>x;x++)if(p[p.id[x]].category.hasOwnProperty("index")){if(t(p[p.id[x]].category.index)){var k={},P=p[p.id[x]].category.index
for(r=P.length,z=0;r>z;z++)k[P[z]]=z
p[p.id[x]].category.index=k}}else{var D=0
p[p.id[x]].category.index={}
for(s in p[p.id[x]].category.label)p[p.id[x]].category.index[s]=D++}}else this.length=0
break
case"dimension":i=e.__tree__
var j=[],J=i.category
if(!e.hasOwnProperty("__tree__")||!i.hasOwnProperty("category"))return
if(!J.hasOwnProperty("label")){J.label={}
for(s in J.index)J.label[s]=s}for(s in J.index)j[J.index[s]]=s
this.__tree__=i,this.label=i.label||null,this.note=i.note||null,this.link=i.link||null,this.href=i.href||null,this.id=j,this.length=j.length,this.role=e.role,this.hierarchy=J.hasOwnProperty("child"),this.extension=i.extension||null
break
case"category":var N=e.child
this.id=N,this.length=null===N?0:N.length,this.index=e.index,this.label=e.label,this.note=e.note||null,this.unit=e.unit,this.coordinates=e.coord
break
case"collection":if(this.length=0,this.label=e.label||null,this.note=e.note||null,this.link=e.link||null,this.href=e.href||null,this.updated=e.updated||null,this.source=e.source||null,this.extension=e.extension||null,null!==this.link&&e.link.item){var T=e.link.item
if(this.length=t(T)?T.length:0,this.length)for(var z=0;z<this.length;z++)this.id[z]=T[z].href}}}e.prototype.Item=function(t){if(null===this||"collection"!==this["class"]||!this.length)return null
if("number"==typeof t)return t>this.length||0>t?null:this.link.item[t]
var e,n=[]
"object"==typeof t?t["class"]?e=function(t,e,i){i["class"]===t.link.item[e]["class"]&&n.push(t.link.item[e])}:t.follow&&(e=function(t,e){n.push(JSONstat(t.id[e]))}):e=function(t,e){n.push(t.link.item[e])}
for(var i=0;i<this.length;i++)e(this,i,t)
return n},e.prototype.Dataset=function(t){if(null===this)return null
if("dataset"===this["class"])return void 0!==t?this:[this]
if("bundle"!==this["class"])return null
if(void 0===t){for(var n=[],i=0,s=this.id.length;s>i;i++)n.push(this.Dataset(this.id[i]))
return n}if("number"==typeof t){var r=this.id[t]
return void 0!==r?this.Dataset(r):null}var l=this.__tree__[t]
return void 0===l?null:new e({"class":"dataset",__tree__:l})},e.prototype.Dimension=function(t){var n,i=[],s=this.id.length,r=function(t,e){var n=t.role
if(null!==n)for(var i in n)for(var s=null!==n[i]?n[i].length:0;s--;)if(n[i][s]===e)return i
return null}
if(null===this||"dataset"!==this["class"])return null
if(void 0===t){for(n=0;s>n;n++)i.push(this.Dimension(this.id[n]))
return i}if("number"==typeof t){var l=this.id[t]
return void 0!==l?this.Dimension(l):null}var a=this.__tree__.dimension
if(void 0===a)return null
if("object"==typeof t){if(t.hasOwnProperty("role")){for(n=0;s>n;n++){var o=this.id[n]
r(a,o)===t.role&&i.push(this.Dimension(o))}return void 0===i[0]?null:i}return null}var u=a[t]
return void 0===u?null:new e({"class":"dimension",__tree__:u,role:r(a,t)})},e.prototype.Category=function(t){if(null===this||"dimension"!==this["class"])return null
if(void 0===t){for(var n=[],i=0,s=this.id.length;s>i;i++)n.push(this.Category(this.id[i]))
return n}if("number"==typeof t){var r=this.id[t]
return void 0!==r?this.Category(r):null}var l=this.__tree__.category
if(void 0===l)return null
var a=l.index[t]
if(void 0===a)return null
var o=l.unit&&l.unit[t]||null,u=l.coordinates&&l.coordinates[t]||null,h=l.child&&l.child[t]||null,f=l.note&&l.note[t]||null
return new e({"class":"category",index:a,label:l.label[t],note:f,child:h,unit:o,coord:u})},e.prototype.Data=function(e){var n,i,s=[],r=function(t){for(var e in t)if(t.hasOwnProperty(e))return e},l=function(t,e){for(var n=[],i=t.dimension,s=i.id,l=0,a=s.length;a>l;l++){var o=s[l],u=e[o]
n.push("string"==typeof u?u:1===i.size[l]?r(i[o].category.index):null)}return n}
if(null===this||"dataset"!==this["class"])return null
if(void 0===e){for(i=this.value.length,n=0;i>n;n++)s.push(this.Data(n))
return s}if("number"==typeof e){var a=this.value[e]
return void 0!==a?{value:a,status:this.status?this.status[e]:null}:null}var o=this.__tree__,u=o.dimension.size,h=u.length
if(t(e)){if(this.length!==e.length)return null
var f=1,c=0,d=[],p=[]
for(n=0;h>n;n++)if(void 0!==e[n]){if("number"!=typeof e[n]||e[n]>=u[n])return null
f*=n>0?u[h-n]:1,c+=f*e[h-n-1]}else d.push(n),p.push(u[n])
if(d.length>1)return null
if(1===d.length){for(var v=0,g=p[0];g>v;v++){var y=[]
for(n=0;h>n;n++)y.push(n!==d[0]?e[n]:v)
s.push(this.Data(y))}return s}return{value:this.value[c],status:this.status?this.status[c]:null}}var _=l(o,e),b=[],m=o.dimension
for(i=_.length,n=0;i>n;n++)b.push(m[m.id[n]].category.index[_[n]])
return this.Data(b)},e.prototype.toTable=function(t,e){if(null===this||"dataset"!==this["class"])return null
1==arguments.length&&"function"==typeof t&&(e=t,t=null)
var n,i,s,r,l,a=this.__tree__
if(t=t||{field:"label",content:"label",vlabel:"Value",slabel:"Status",type:"array",status:!1},"function"==typeof e){n=this.toTable(t)
var o=[],u="array"!==t.type?0:1,h="object"!==t.type?n.slice(u):n.rows.slice(0)
for(l=h.length,i=0;l>i;i++){var f=e.call(this,h[i],i)
void 0!==f&&o.push(f)}return"object"===t.type?{cols:n.cols,rows:o}:("array"===t.type&&o.unshift(n[0]),o)}if("arrobj"===t.type){n=this.toTable({field:"id",content:t.content,status:t.status})
var c=[],d=n.shift()
for(l=n.length,i=0;l>i;i++){var p={}
for(s=n[i].length;s--;)p[d[s]]=n[i][s]
c.push(p)}return c}var v,g,y,_,b="id"===t.field
if("object"===t.type){var m="number"==typeof this.value[0]||null===this.value[0]?"number":"string"
v=function(t,e){var n=b&&t||e||t
z.push({id:t,label:n,type:"string"})},g=function(t,e,n){var i=b&&"value"||t||"Value",s=b&&"status"||e||"Status"
n&&z.push({id:"status",label:s,type:"string"}),z.push({id:"value",label:i,type:m})},y=function(t){B.push({v:t})},_=function(t){B.push({v:t}),V.push({c:B})}}else v=function(t,e){var n=b&&t||e||t
z.push(n)},g=function(t,e,n){var i=b&&"value"||t||"Value",s=b&&"status"||e||"Status"
n&&z.push(s),z.push(i),T.push(z)},y=function(t){B.push(t)},_=function(t){B.push(t),T.push(B)}
var w=a.dimension,O=w.id,x=O.length,S=w.size
if(x!=S.length)return!1
var k=[],P=1,D=1,j=[],J=[],N=[],T=[],z=[],V=[]
for(i=0;x>i;i++){var q=O[i],C=w[q].label
v(q,C),P*=S[i],D*=S[i]
var R=[]
for(s=0;s<S[i];s++)for(var X in w[O[i]].category.index)if(w[O[i]].category.index[X]===s){var E="id"!==t.content&&w[O[i]].category.label?w[O[i]].category.label[X]:X
R.push(E)}k.push(R),j.push(D)}for(g(t.vlabel,t.slabel,t.status),l=k.length,i=0;l>i;i++){for(var G=[],A=0,H=k[i].length;H>A;A++)for(var I=0;I<P/j[i];I++)G.push(k[i][A])
J.push(G)}for(i=0,l=J.length;l>i;i++){var L=[],M=0
for(r=0;P>r;r++)L.push(J[i][M]),M++,M===J[i].length&&(M=0)
N.push(L)}for(r=0;P>r;r++){var B=[]
l=J.length
for(var F=0;l>F;F++)y(N[F][r])
t.status&&y(this.status?this.status[r]:null),_(this.value[r])}return"object"===t.type?{cols:z,rows:V}:T},e.prototype.node=function(){return this.__tree__},e.prototype.toString=function(){return this["class"]},e.prototype.toValue=function(){return this.length},JSONstat.jsonstat=e}()
