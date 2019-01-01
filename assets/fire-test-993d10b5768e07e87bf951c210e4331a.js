"use strict"
define("fire-test/app",["exports","fire-test/resolver","ember-load-initializers","fire-test/config/environment"],function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,r.default)(n,i.default.modulePrefix)
var o=n
e.default=o}),define("fire-test/components/fire-component",["exports","@ember-decorators/object"],function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){var t,i=k(e.key)
"method"===e.kind?(t={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"===r(i)?"":i,configurable:!0})):"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0})
var n={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t}
return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function s(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var r=t.descriptor
if("field"===t.kind){var i=t.initializer
r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)}function d(e,t,r){var i=t[e.placement]
if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")")
i.push(e.key)}function u(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor}
return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t}function p(e){var t
if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=h(e)
return b(e,"finisher","An element descriptor"),b(e,"extras","An element descriptor"),t})}function h(e){var t=String(e.kind)
if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"')
var r=k(e.key),i=String(e.placement)
if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"')
var n=e.descriptor
b(e,"elements","An element descriptor")
var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)}
return"field"!==t?b(e,"initializer","A method descriptor"):(b(n,"get","The property descriptor of a field descriptor"),b(n,"set","The property descriptor of a field descriptor"),b(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function m(e){return{element:h(e),finisher:g(e,"finisher"),extras:p(e.extras)}}function v(e){var t={kind:"class",elements:e.map(u)}
return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t}function y(e){var t=String(e.kind)
if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"')
b(e,"key","A class descriptor"),b(e,"placement","A class descriptor"),b(e,"descriptor","A class descriptor"),b(e,"initializer","A class descriptor"),b(e,"extras","A class descriptor")
var r=g(e,"finisher")
return{elements:p(e.elements),finisher:r}}function b(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}function g(e,t){var r=e[t]
if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function")
return r}function k(e){var t=function(e,t){if("object"!==r(e)||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!==r(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"===r(t)?t:String(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w,x,_,E,P,j,O,F,T=(w=null,x=function(e,a){return{F:function(t){function s(){var t,n,a,l;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,s)
for(var c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d]
return a=this,n=!(l=(t=i(s)).call.apply(t,[this].concat(f)))||"object"!==r(l)&&"function"!=typeof l?o(a):l,e(o(o(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(s,a),s}(),d:[{kind:"field",key:"eternalFlame",value:function(){return!0}},{kind:"method",key:"didInsertElement",value:function(){this._buildPixels(),this.image=this.context.createImageData(this.canvas.width,this.canvas.height),this.startFire(),this._loop()}},{kind:"method",decorators:[t.action],key:"startFire",value:function(){for(var e=this.canvas.height-5;e<this.canvas.height;e++)for(var t=0;t<this.canvas.width;t++)this.pixels[e][t]=255}},{kind:"method",decorators:[t.action],key:"toggleEternalFlame",value:function(){this.startFire(),this.toggleProperty("eternalFlame")}},{kind:"method",key:"_buildPixels",value:function(){this.pixels=[]
for(var e=0;e<this.canvas.height;e++){for(var t=[],r=0;r<this.canvas.width;r++)t.push(0)
this.pixels.push(t)}}},{kind:"method",key:"_loop",value:function(){var e=this
setTimeout(function(){e._renderFire()},1)}},{kind:"method",key:"_renderFire",value:function(){this._growFire(),this._drawFire(),this._loop()}},{kind:"method",key:"_growFire",value:function(){for(var e=0;e<this.canvas.height;e++)for(var t=0;t<this.canvas.width;t++)0!==this.pixels[e][t]&&this._growPixel(e,t)}},{kind:"method",key:"_growPixel",value:function(e,t){var r=this.pixels[e][t],i=Math.round(2*Math.random()),n=t+(i-1),o=e-(i+1),a=5.5-Math.round(r/51)
o<0&&(o=0),n<0&&(n=0),n>this.canvas.width&&(n=this.canvas.width-1),this.eternalFlame&&e===this.canvas.height-1||(this.pixels[e][t]=r-a),this.pixels[o][n]=this.pixels[e][t]-1}},{kind:"method",key:"_drawFire",value:function(){for(var e=0;e<this.canvas.height;e++)for(var t=0;t<this.canvas.width;t++)this._setImagePixel(e,t,this.pixels[e][t])
this.context.putImageData(this.image,0,0)}},{kind:"method",key:"_setImagePixel",value:function(e,t,r){var i=e*this.canvas.width*4+4*t
r<178.5?(this.image.data[i]=r,this.image.data[i+1]=0,this.image.data[i+2]=0):r<255?(this.image.data[i]=255,this.image.data[i+1]=1.7*(r-153),this.image.data[i+2]=0):255===r&&(this.image.data[i]=255,this.image.data[i+1]=255,this.image.data[i+2]=255),this.image.data[i+3]=255}},{kind:"get",key:"canvas",value:function(){return this._canvas||(this._canvas=this.element.querySelector("canvas")),this._canvas}},{kind:"get",key:"context",value:function(){return this._context||(this._context=this.canvas.getContext("2d")),this.canvas.getContext("2d")}}]}},_=Ember.Component,O=x(function(e){(function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&f(e,t)})})})(e,F.elements)},_),F=function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]}
if(e.forEach(function(e){d(e,n)}),e.forEach(function(e){if(!l(e))return r.push(e)
var t=function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement]
a.splice(a.indexOf(e.key),1)
var s=u(e),l=m((0,n[o])(s)||s)
d(e=l.element,t),l.finisher&&i.push(l.finisher)
var c=l.extras
if(c){for(var f=0;f<c.length;f++)d(c[f],t)
r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}}(e,n)
r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),!t)return{elements:r,finishers:i}
var o=function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=v(e),o=y((0,t[i])(n)||n)
if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements
for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}}(r,t)
return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i]
if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.")
n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").")
n.decorators=o.decorators}s(o,n)}else t.push(o)}return t}(O.d.map(a)),w),E=O.F,P=F.elements,j=E.prototype,["method","field"].forEach(function(e){P.forEach(function(t){var r=t.placement
if(t.kind===e&&("static"===r||"prototype"===r)){var i="static"===r?E:j
f(i,t)}})}),function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e)
if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.")
e=i}}return e}(O.F,F.finishers))
e.default=T}),define("fire-test/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("fire-test/initializers/export-application-global",["exports","fire-test/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var i,n=t.default.exportApplicationGlobal
i="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),r[i]||(r[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var i={name:"export-application-global",initialize:r}
e.default=i}),define("fire-test/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("fire-test/router",["exports","fire-test/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){})
var i=r
e.default=i}),define("fire-test/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("fire-test/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"kJMfzBmK",block:'{"symbols":[],"statements":[[1,[21,"fire-component"],false]],"hasEval":false}',meta:{moduleName:"fire-test/templates/application.hbs"}})
e.default=t}),define("fire-test/templates/components/fire-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"/7g3OOlz",block:'{"symbols":[],"statements":[[7,"canvas"],[11,"width","500"],[11,"height","300"],[9],[10],[4,"if",[[23,["eternalFlame"]]],null,{"statements":[[7,"button"],[9],[0,"Temporal Flame"],[3,"action",[[22,0,[]],"toggleEternalFlame"],[["on"],["click"]]],[10]],"parameters":[]},{"statements":[[7,"button"],[9],[0,"Add more fire!"],[3,"action",[[22,0,[]],"startFire"],[["on"],["click"]]],[10],[7,"button"],[9],[0,"Eternal Flame"],[3,"action",[[22,0,[]],"toggleEternalFlame"],[["on"],["click"]]],[10]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"fire-test/templates/components/fire-component.hbs"}})
e.default=t}),define("fire-test/config/environment",[],function(){try{var e="fire-test/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("fire-test/app").default.create({})
