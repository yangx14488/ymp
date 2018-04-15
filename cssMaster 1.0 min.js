"use strict"

/*

  欢迎使用 样式大师

  * 已兼容某些众所周知的浏览器
  * 不需要任何前置
  * 不生成内含繁杂样式的 <style> 标签
  * 版本 1.0
  * 作者：肖肖夫斯基（yangx14488@foxmail.com）



  Thank you for using cssMaster

  * It can run by IE11
  * Do not use any pre-plugins
  * Does not create <style> tags with cumbersome styles
  * Version 1.0
  * Author：肖肖夫斯基（yangx14488@foxmail.com）

*/

var ycss=(function(_c){var styles=[],db={},init=false,doc=document;db.src=[];function initialization(o){var c=Element.prototype,n="yangx14488sCssplugins";init=true;c[n]=c.appendChild;c.appendChild=function(e){this[n](e);if(e.tagName!=="LINK")return;srcM(e.ycss,e);e.setAttribute("ycss",e.ycss)};db.head=doc.getElementsByTagName("head")[0];screenDATA();function cache(n,t){_T(o[n],t)&&(_c[n]=o[n])};cache("width","number");cache("resize","boolean");cache("success","function");cache("fail","function");if(_c.resize)window.addEventListener("resize",resize);window.addEventListener("load",fortag)};function screenDATA(){db.dwidth=document.documentElement.clientWidth;db.dheight=document.documentElement.clientHeight};function _T(e,v){var c=typeof(e);return v?c===v:c};function rem(e,o){db.head.removeChild(e);if(_T(o.css,"undefined")){_c.fail&&_c.fail(o.src)}else{cstyle(o);_c.success&&_c.success(o.src)}}function cstyle(o){let l=o.link;if(l.yblob&&l.yblob.close)l.yblob.close();if(l.href)URL.revokeObjectURL(l.href);l.yblob=new Blob([o.css],{type:"text/css"});l.href=URL.createObjectURL(l.yblob);l.rel="stylesheet";l.type="text/css"}function resize(){db.resizeTime=new Date().getTime();if(!db.interval){db.interval=setInterval(function(){var i,o;if(new Date().getTime()-db.resizeTime<500)return;screenDATA();for(i=0;i<db.src.length;i++){o=db.src[i];o.css=cssrxp(o.txt);cstyle(o)}clearInterval(db.interval);delete(db.interval)},30)}}function MIOE(obj){return function(){this.removeEventListener("load",arguments.call);var cdoc=this.document||this.contentDocument,cbody=cdoc&&cdoc.body,css="";if(!cbody||cdoc.title.match(/found/)){obj.css=void 0;obj.txt=void 0;rem(this,obj);return}css=((cbody.children&&cbody.children[0])||cbody).innerHTML;obj.txt=css;obj.css=cssrxp(css);rem(this,obj)}}function srcM(src,ele){var css,i;ele.removeAttribute("ycss");if(!_T(src,"string")||src.length===0)return 0;for(i=0;i<db.src.length;i++){if(db.src[i].src===src)return 0};css=db.src[db.src.push({src:src,link:ele})-1];loader(css);return 1}function loader(obj){var i=doc.createElement("iframe");i.src=obj.src;i.addEventListener("load",MIOE(obj));i.style.display="none";db.head.appendChild(i)}function cssrxp(css){function toNum(str,st,ft){return parseFloat(str.substring(st,ft))};css=css.replace(/[0-9]+rpx/g,function(e){e=toNum(e,0,e.length-3);return Math.floor(e*db.dwidth/_c.width)+"px"});css=css.replace(/&gt;/g,">");css=css.replace(/[0-9]+ysw/g,function(e){return db.dwidth*toNum(e,0,e.length-3)+"px"});css=css.replace(/[0-9]+ysh/g,function(e){return db.dheight*toNum(e,0,e.length-3)+"px"});return css}function fortag(){var doc=document,ycss=doc.getElementsByTagName("link"),i;for(i=0;i<ycss.length;i++){srcM(ycss[i].getAttribute("ycss"),ycss[i])}};return function(o){if(_T(o)!=="object")return 1;if(init)return"错误：已经被初始化";initialization(o);fortag()}})({width:750,resize:true})
