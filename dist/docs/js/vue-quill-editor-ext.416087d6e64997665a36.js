webpackJsonp([2],{115:function(t,e,i){"use strict";(function(t){var n=i(2),o=i.n(n),l=t||o.a,r=l.import("attributors/style/size"),s=["10px","12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px"];r.whitelist=s;var a=l.import("parchment"),u=["1.0","1.2","1.4","1.6","1.8","2.0","2.4","2.6","2.8","3.0","4.0","5.0"],d={scope:a.Scope.INLINE,whitelist:u},p=new a.Attributor.Class("lineheight","ql-lineheight",d),c=new a.Attributor.Style("lineheight","line-height",d),h=["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px"],g={scope:a.Scope.INLINE,whitelist:h},f=new a.Attributor.Class("letterspacing","ql-letterspacing",g),m=new a.Attributor.Style("letterspacing","letter-spacing",g),y=function(){l.register(r,!0),a.register(p),a.register(c),a.register(f),a.register(m)};e.a={sizeList:s,sizeStyle:r,lineHeightClass:p,lineHeightStyle:c,lineHeightList:u,letterSpacingClass:f,letterSpacingStyle:m,letterSpacingList:h,register:y}}).call(e,i(2))},116:function(t,e,i){"use strict";e.a={theme:"snow",boundary:document.body,modules:{imageResize:{modules:["Resize","DisplaySize"]},toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:[!1,"10px","12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],[{lineheight:["1.0","1.2","1.5","1.6","1.8","2.0","2.4","2.8","3.0","4.0","5.0"]}],[{letterspacing:["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px"]}]]},placeholder:"Insert text here ...",readOnly:!1}},118:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){i.d(e,"Quill",function(){return s}),i.d(e,"install",function(){return a});var n=i(2),o=i.n(n),l=i(55),r=i.n(l);i.d(e,"quillEditor",function(){return r.a});var s=t||o.a,a=function(t,e){e&&(r.a.props.globalOptions.default=function(){return e}),t.component(r.a.name,r.a)},u={Quill:s,quillEditor:r.a,install:a};e.default=u}.call(e,i(2))},119:function(t,e,i){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px solid red",backgroundColor:"rgba(255,255,255,0.5)"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"red",border:"1px solid red",boxSizing:"border-box",opacity:"0.80"},cropBtnStyles:{backgroundColor:"#cccccc",width:"80px",height:"30px",position:"absolute",lineHeight:"30px",cursor:"pointer",textAlign:"center",borderRadius:"5px",zIndex:"1000"},btnResizeStyles:{backgroundColor:"#cccccc",width:"80px",height:"30px",position:"absolute",lineHeight:"30px",cursor:"pointer",textAlign:"center",borderRadius:"5px"}}},120:function(t,e,i){"use strict";(function(t){var n=i(16),o=i.n(n),l=i(17),r=i.n(l),s=i(132),a=i.n(s),u=i(241),d=i.n(u),p=i(119),c=i(121),h=i(123),g=i(122),f={DisplaySize:c.a,Toolbar:h.a,Resize:g.a},m=function(){function e(i){var n=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,e),this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map(function(t){return new(f[t]||t)(n)}),n.modules.forEach(function(t){t.onCreate()}),n.onUpdate()},this.onUpdate=function(){n.repositionElements(),n.modules.forEach(function(t){t.onUpdate()})},this.removeModules=function(){n.modules.forEach(function(t){t.onDestroy()}),n.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target)}else n.img&&n.hide()},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules()},this.onCropBtnClick=function(){"crop"===n.options.mode?n.doCrop():(n.options.mode="crop",n.cropBtn.innerText="确认裁剪",n.btnResize.style.display="none")},this.doCrop=function(){n.cropBtn.innerText="裁剪中";var t=new Image;t.setAttribute("crossOrigin","Anonymous"),t.crossOrigin="Anonymous",t.src=n.img.src,t.onload=function(){var e=document.createElement("canvas"),i=n.overlay.getBoundingClientRect(),o=n.img.getBoundingClientRect(),l=o.width/n.img.naturalWidth;e.width=i.width,e.height=i.height,e.getContext("2d").drawImage(t,i.left-o.left,i.top-o.top,i.width/l,i.height/l,0,0,e.width,e.height),n.options.upload&&e.toBlob(function(t){n.options.upload(t,function(t){n.img.src=t,n.hide()})})}},this.onScroll=function(t){n.repositionElements()},this.repositionBtnCrop=function(t,e,i){var l={left:e.left-t.left-1+i.scrollLeft+e.width-5-80+"px",top:e.top-t.top-i.scrollTop+10+"px"};o()(n.cropBtn.style,l)},this.repositionBtnResize=function(t,e,i){var l={left:e.left-t.left-1+i.scrollLeft+e.width-5-80+"px",top:e.top-t.top-i.scrollTop+10+40+"px"};o()(n.btnResize.style,l)},this.showOverlay=function(){n.overlay&&n.hideOverlay();var t=n.img.getBoundingClientRect();n.position={left:t.left,top:t.top,width:t.width,height:t.height},n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.quill.root.addEventListener("scroll",n.onScroll,!1),n.overlay=document.createElement("div"),o()(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.btnResize=document.createElement("div"),n.btnResize.innerHTML="调整大小",o()(n.btnResize.style,n.options.btnResizeStyles),n.quill.root.parentNode.appendChild(n.btnResize),n.repositionElements(),n.btnResize.addEventListener("click",n.onBtnResizeClick)},this.onBtnResizeClick=function(t){"resize"===n.options.mode?n.hide():(n.options.mode="resize",n.btnResize.innerText="确认大小")},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,n.quill.root.parentNode.removeChild(n.btnResize),n.btnResize=void 0,n.options.mode=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.quill.root.removeEventListener("scroll",n.onScroll),n.setUserSelect(""))},this.repositionElements=function(){n.overlay&&n.img&&n.repositionResize()},this.repositionResize=function(){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),i=t.getBoundingClientRect();o()(n.overlay.style,{left:e.left-i.left-1+t.scrollLeft+"px",top:e.top-i.top-t.scrollTop+"px",width:e.width+"px",height:e.height+"px"}),n.repositionBtnResize(i,e,t)},this.repositionCrop=function(){var t=n.quill.root,e=n.position,i=t.getBoundingClientRect(),l={left:e.left-i.left-1+t.scrollLeft+"px",top:e.top-i.top-t.scrollTop+"px",width:e.width+"px",height:e.height+"px"};o()(n.overlay.style,l),n.repositionBtnCrop(i,e,t),n.repositionBtnResize(i,e,t)},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t})},this.checkImage=function(e){n.img&&(46!==e.keyCode&&8!==e.keyCode||t.find(n.img).deleteAt(0),n.hide())},this.quill=i;var s=!1;l.modules&&(s=l.modules.slice()),this.options=d()({},l,p.a),!1!==s&&(this.options.modules=s),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]}return a()(e,[{key:"data2blob",value:function(t){for(var e=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(e.length),o=new Uint8Array(n),l=0;l<e.length;l++)o[l]=e.charCodeAt(l);return new Blob([o],{type:i})}}]),e}();e.a=m,t&&t.register("modules/imageResize",m)}).call(e,i(2))},121:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var n=i(16),o=i.n(n),l=i(34),r=i.n(l),s=i(17),a=i.n(s),u=i(36),d=i.n(u),p=i(35),c=i.n(p),h=i(33),g=function(t){function e(){var t,i,n,l;a()(this,e);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return i=n=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(u))),n.onCreate=function(){n.display=document.createElement("div"),o()(n.display.style,n.options.displayStyles),n.overlay.appendChild(n.display)},n.onDestroy=function(){},n.onUpdate=function(){if(n.display&&n.overlay){var t=n.getCurrentSize();if(n.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)o()(n.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===n.overlay.style.float){var e=n.display.getBoundingClientRect();o()(n.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var i=n.display.getBoundingClientRect();o()(n.display.style,{right:"-"+(i.width+4)+"px",bottom:"-"+(i.height+4)+"px",left:"auto"})}}},n.getCurrentSize=function(){return[n.overlay.getBoundingClientRect().width,n.overlay.getBoundingClientRect().height]},l=i,d()(n,l)}return c()(e,t),e}(h.a)},122:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var n=i(16),o=i.n(n),l=i(34),r=i.n(l),s=i(17),a=i.n(s),u=i(36),d=i.n(u),p=i(35),c=i.n(p),h=i(33),g=function(t){function e(){var t,i,n,l;a()(this,e);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return i=n=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(u))),n.onCreate=function(){n.boxes=[],n.addBox("nwse-resize"),n.addBox("nesw-resize"),n.addBox("nwse-resize"),n.addBox("nesw-resize"),n.positionBoxes()},n.onDestroy=function(){n.setCursor("")},n.positionBoxes=function(){var t=-parseFloat(n.options.handleStyles.width)/2+"px",e=-parseFloat(n.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach(function(t,e){o()(n.boxes[e].style,t)})},n.addBox=function(t){var e=document.createElement("div");o()(e.style,n.options.handleStyles),e.style.cursor=t,e.style.width=n.options.handleStyles.width+"px",e.style.height=n.options.handleStyles.height+"px",e.addEventListener("mousedown",n.handleMousedown,!1),n.overlay.appendChild(e),n.boxes.push(e)},n.handleMousedown=function(t){n.dragBox=t.target,n.dragStartX=t.clientX,n.dragStartY=t.clientY,"crop"===n.options.mode?n.preDrag=o()({},n.position):n.preDrag=o()({},{width:n.img.width}),n.setCursor(n.dragBox.style.cursor),document.addEventListener("mousemove",n.handleDrag,!1),document.addEventListener("mouseup",n.handleMouseup,!1)},n.handleMouseup=function(){n.setCursor(""),document.removeEventListener("mousemove",n.handleDrag),document.removeEventListener("mouseup",n.handleMouseup)},n.handleDrag=function(t){n.img&&("resize"===n.options.mode?n.handleModeResize(t):"crop"===n.options.mode&&n.handleModeCrop(t),n.requestUpdate())},n.handleModeCrop=function(t){var e=t.clientX-n.dragStartX,i=t.clientY-n.dragStartY,o=n.position.width,l=n.position.height,r=n.position.top,s=n.position.left,a=n.img.getBoundingClientRect();n.dragBox===n.boxes[0]&&(o=Math.round(n.preDrag.width-e),l=Math.round(n.preDrag.height-i),s=Math.round(n.preDrag.left+e),r=Math.round(n.preDrag.top+i),s<a.left&&(s=a.left),r<a.top&&(r=a.top),r>a.top+a.height-20&&(r=a.top+a.height-20),s>a.left+a.width-20&&(s=a.left+a.width-20)),n.dragBox===n.boxes[1]&&(o=Math.round(n.preDrag.width+e),l=Math.round(n.preDrag.height-i),r=Math.round(n.preDrag.top+i),r<a.top&&(r=a.top),s+o>a.width+a.left&&(o=a.width+a.left-s),r>a.top+a.height-20&&(r=a.top+a.height-20)),n.dragBox===n.boxes[2]&&(o=Math.round(n.preDrag.width+e),l=Math.round(n.preDrag.height+i),s+o>a.width+a.left&&(o=a.width+a.left-s)),n.dragBox===n.boxes[3]&&(o=Math.round(n.preDrag.width-e),l=Math.round(n.preDrag.height+i),s=Math.round(n.preDrag.left+e),s<a.left&&(s=a.left),s>a.left+a.width-20&&(s=a.left+a.width-20)),o<20&&(o=20),l<20&&(l=20),o>a.width&&(o=a.width),l>a.height&&(l=a.height),s<a.left&&(s=a.left),r<a.top&&(r=a.top),n.position.width=o,n.position.height=l,n.position.top=r,n.position.left=s},n.handleModeResize=function(t){var e=t.clientX-n.dragStartX;n.dragBox===n.boxes[0]||n.dragBox===n.boxes[3]?n.img.width=Math.round(n.preDrag.width-e):n.img.width=Math.round(n.preDrag.width+e)},n.setCursor=function(t){[document.body,n.img].forEach(function(e){e.style.cursor=t})},l=i,d()(n,l)}return c()(e,t),e}(h.a)},123:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return S});var n=i(16),o=i.n(n),l=i(34),r=i.n(l),s=i(17),a=i.n(s),u=i(36),d=i.n(u),p=i(35),c=i.n(p),h=i(248),g=i.n(h),f=i(247),m=i.n(f),y=i(249),x=i.n(y),v=i(33),b=t.imports.parchment,w=new b.Attributor.Style("float","float"),C=new b.Attributor.Style("margin","margin"),q=new b.Attributor.Style("display","display"),S=function(t){function e(){var t,i,n,l;a()(this,e);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return i=n=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(u))),n.onCreate=function(){n.toolbar=document.createElement("div"),o()(n.toolbar.style,n.options.toolbarStyles),n.overlay.appendChild(n.toolbar),n._defineAlignments(),n._addToolbarButtons()},n.onDestroy=function(){},n.onUpdate=function(){},n._defineAlignments=function(){n.alignments=[{icon:g.a,apply:function(){q.add(n.img,"inline"),w.add(n.img,"left"),C.add(n.img,"0 1em 1em 0")},isApplied:function(){return"left"===w.value(n.img)}},{icon:m.a,apply:function(){q.add(n.img,"block"),w.remove(n.img),C.add(n.img,"auto")},isApplied:function(){return"auto"===C.value(n.img)}},{icon:x.a,apply:function(){q.add(n.img,"inline"),w.add(n.img,"right"),C.add(n.img,"0 0 1em 1em")},isApplied:function(){return"right"===w.value(n.img)}}]},n._addToolbarButtons=function(){var t=[];n.alignments.forEach(function(e,i){var l=document.createElement("span");t.push(l),l.innerHTML=e.icon,l.addEventListener("click",function(){t.forEach(function(t){return t.style.filter=""}),e.isApplied()?(w.remove(n.img),C.remove(n.img),q.remove(n.img)):(n._selectButton(l),e.apply()),n.requestUpdate()}),o()(l.style,n.options.toolbarButtonStyles),i>0&&(l.style.borderLeftWidth="0"),o()(l.children[0].style,n.options.toolbarButtonSvgStyles),e.isApplied()&&n._selectButton(l),n.toolbar.appendChild(l)})},n._selectButton=function(t){t.style.filter="invert(20%)"},l=i,d()(n,l)}return c()(e,t),e}(v.a)}).call(e,i(2))},125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=i(126),o=i.n(n),l=i(16),r=i.n(l),s=i(180),a=i.n(s),u=i(2),d=i.n(u),p=i(116),c=i(120),h=i(115),g=t||d.a;g.register("modules/imageResize",c.a),h.a.register(),"function"!=typeof r.a&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l])}return i},writable:!0,configurable:!0}),e.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:p.a}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{toJSON:function(t){return JSON.parse(o()(t))},initialize:function(){var t=this;this.$el&&(this._options=a()({},this.defaultOptions,this.globalOptions,this.options),this.quill=new g(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),this.quill.on("text-change",function(e,i,n){var o=t.$refs.editor.children[0].innerHTML,l=t.quill,r=t.quill.getText();"<p><br></p>"===o&&(o=""),t._content=o,t.$emit("input",t._content),t.$emit("change",{html:o,text:r,quill:l})}),this.$emit("ready",this.quill))}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}}.call(e,i(2))},247:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},248:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},249:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),i("div",{ref:"editor"})],2)},staticRenderFns:[]}},33:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var n=i(17),o=i.n(n),l=function t(e){o()(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.position=e.position,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},55:function(t,e,i){var n=i(54)(i(125),i(253),null,null,null);t.exports=n.exports}},[118]);
//# sourceMappingURL=vue-quill-editor-ext.416087d6e64997665a36.js.map