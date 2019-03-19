!function(e){function t(t){for(var r,l,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)l=u[f],o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(a&&a(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=c;i.push([0,1]),n()}([function(e,t,n){e.exports=n(4)},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(1),n(2);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(e,n){var o,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u=this,o=!(c=i(t).call(this,e))||"object"!==r(c)&&"function"!=typeof c?l(u):c,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(l(o),"game",void 0),o}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,Phaser.Scene),n=t,(c=[{key:"preload",value:function(){}},{key:"setTimerEvent",value:function(e,t,n,r){return this.time.delayedCall(Phaser.Math.Between(e,t),n,r||[],this)}}])&&o(n.prototype,c),s&&o(n,s),t}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).call(this,"BootScene"))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,c),n=t,(r=[{key:"preload",value:function(){}},{key:"init",value:function(){}},{key:"create",value:function(){this.scene.start("GameScene",{})}},{key:"update",value:function(e,t){}}])&&a(n.prototype,r),o&&a(n,o),t}(),b={type:Phaser.AUTO,scale:{parent:"game-container",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:640,height:360},render:{pixelArt:!0,roundPixels:!0},disableContextMenu:!0},d=5,v=50,w=!0;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"x",void 0),g(this,"y",void 0),g(this,"index",void 0),g(this,"willChange",void 0),g(this,"alive",void 0),g(this,"neighbours",void 0),this.x=t,this.y=n,this.alive=!0,this.neighbours=[]}var t,n,r;return t=e,(n=[{key:"step",value:function(){this.calculateCellState()}},{key:"postStep",value:function(){this.willChange&&(this.alive=!this.alive,this.willChange=!1)}},{key:"calculateCellState",value:function(){var e=this.neighbours.filter(function(e){return e.alive}).length;this.alive?(e<2&&(this.willChange=!0),e>3&&(this.willChange=!0)):3===e&&(this.willChange=!0)}}])&&m(t.prototype,n),r&&m(t,r),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(e,n){var r,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=!(i=j(t).call(this,"GameScene"))||"object"!==S(i)&&"function"!=typeof i?_(o):i,C(_(r),"stepAccumulator",void 0),C(_(r),"cells",[]),C(_(r),"stepNumber",void 0),C(_(r),"uiText",void 0),C(_(r),"steppingPaused",!1),C(_(r),"blitter",void 0),C(_(r),"renderTexture",void 0),C(_(r),"cellRowWidth",void 0),C(_(r),"cellColumnHeight",void 0),r}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,c),n=t,(r=[{key:"preload",value:function(){}},{key:"init",value:function(){var e=this.add.graphics();e.setVisible(!1).fillStyle(65280,1).fillRect(0,0,d,d),this.renderTexture=this.add.renderTexture(0,0,d,d),this.renderTexture.draw(e).saveTexture("block"),e.destroy()}},{key:"create",value:function(){var e=this,t=this.scale.gameSize.width,n=this.scale.gameSize.height,r=d;this.cellColumnHeight=n/r,this.cellRowWidth=t/r,this.stepAccumulator=0,this.stepNumber=0,this.blitter=this.add.blitter(0,0,"block"),this.uiText=this.add.text(5,5,"Step 0",{font:"10px monospace"}).setShadow(1,1,"#000",0).setDepth(10);for(var o=0;o<n;o+=r)for(var i=0;i<t;i+=r){new Phaser.Display.Color(0,Phaser.Math.Between(100,255),0,1).color;var l=new O(i,o);l.index=this.cells.length,this.cells.push(l)}this.cells.forEach(function(t){t.neighbours=e.getCellNeighbours(t)}),this.input.keyboard.on("keyup-SPACE",function(){return e.steppingPaused=!e.steppingPaused}),this.input.on("pointerup",function(){e.scale.isFullscreen||e.scale.startFullscreen()}),this.scale.on(Phaser.Scale.Events.ENTER_FULLSCREEN,function(){screen.orientation.lock("landscape-primary")})}},{key:"update",value:function(e,t){if(this.stepAccumulator+=t,this.stepAccumulator>v&&!this.steppingPaused&&(this.stepAccumulator=0,this.stepNumber++,this.step(),this.uiText.setText("Step ".concat(this.stepNumber))),this.input.activePointer.isDown){var n=this.worldXyToCell(this.input.activePointer.worldX,this.input.activePointer.worldY);n&&(n.alive=!0)}}},{key:"worldXyToCell",value:function(e,t){var n=Phaser.Math.Snap.To(e,d),r=Phaser.Math.Snap.To(t,d)/d*this.cellRowWidth+n/d;return r>=0&&r<this.cells.length?this.cells[r]:null}},{key:"step",value:function(){var e=this;this.cells.forEach(function(e){e.step()});var t=this.cells.filter(function(e){return e.willChange});t.forEach(function(e){return e.postStep()}),t.length<this.cells.length/33&&this.seedCells(),this.blitter.clear(),this.cells.map(function(t){t.alive&&e.blitter.create(t.x,t.y)})}},{key:"seedCells",value:function(){this.cells.forEach(function(e){1===Phaser.Math.Between(1,10)&&(e.alive=!0)})}},{key:"getCellNeighbours",value:function(e){var t=[],n=-1;return(n=this.wrapCell(e.index-this.cellRowWidth-1))&&t.push(this.cells[n]),(n=this.wrapCell(e.index-this.cellRowWidth))&&t.push(this.cells[n]),(n=this.wrapCell(e.index-this.cellRowWidth+1))&&t.push(this.cells[n]),(n=this.wrapCell(e.index-1))&&t.push(this.cells[n]),(n=this.wrapCell(e.index+1))&&t.push(this.cells[n]),(n=this.wrapCell(e.index+this.cellRowWidth-1))&&t.push(this.cells[n]),(n=this.wrapCell(e.index+this.cellRowWidth))&&t.push(this.cells[n]),(n=this.wrapCell(e.index+this.cellRowWidth+1))&&t.push(this.cells[n]),t}},{key:"wrapCell",value:function(e){return e>this.cells.length-1?w?e-this.cells.length:null:e<0?w?e+this.cells.length:null:e}}])&&P(n.prototype,r),o&&P(n,o),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"KokoGame",function(){return W});var N=new(n(3));N.setMode(0),N.domElement.style.position="absolute",N.domElement.style.right="0px",N.domElement.style.top="0px",document.body.appendChild(N.domElement);var W=function(e){function t(e){var n,r,o,i,l,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=T(t).call(this,e))||"object"!==E(o)&&"function"!=typeof o?R(r):o,i=R(n),u=!1,(l="debug")in i?Object.defineProperty(i,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[l]=u,n.events.on("prestep",function(){N.begin()}),n.events.on("postrender",function(){N.end()}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,Phaser.Game),t}();window.onload=function(){var e=new W(b);e.scene.add("BootScene",y,!0),e.scene.add("GameScene",k,!1)}}]);