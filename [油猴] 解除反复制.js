// ==UserScript==
// @name         解除反复制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    'use strict';

    let add = HTMLElement.prototype.addEventListener ;
    let adc = HTMLElement.prototype.appendChild ;
    let head = document.getElementsByTagName( "head" )[0] ;

    // 判断根节点是否为head
    function parentIsHead ( node ) {
        if ( !node.parentElement ) {
            return false ;
        } else {
            if ( node.parentElement == head ) {
                return true ;
            } else {
                return parentIsHead( node.parentElement ) ;
            }
        }
    } ;

    // 取消复制样式
    function openSelect ( node ) {
        if ( window.getComputedStyle(node,null)["userSelect"] === "none" ) {
            node.style.userSelect = "text" ;
        } ;
        if ( window.getComputedStyle(node,null)["webkitUserSelect"] === "none" ) {
            node.style.webkitUserSelect = "text" ;
        } ;
    }

    // 子节点递归
    function loop( c ) {
        if ( c instanceof HTMLCollection ) {
            for ( let emt of c ) {
                if ( emt.style != null ) {
                    openSelect( emt ) ;
                }
                loop( emt.children ) ;
            } ;
        } ;
    } ;

    // 监听复制事件
    HTMLElement.prototype.addEventListener = function ( ) {
        if ( arguments[0] != "copy" ) {
            return add.call( this, ...arguments ) ;
        }
    } ;

    // 监听节点添加
    HTMLElement.prototype.appendChild = function ( ) {
       for ( let emt of arguments ) {
           if ( emt.style != null && !parentIsHead( emt ) ) {
               openSelect( emt ) ;
           }
        } ;
        return adc.call( this, ...arguments ) ;
    } ;

    // 模拟
    for ( let i in adc ) { HTMLElement.prototype.addEventListener[i] = add[i] ; }
    for ( let i in adc ) { HTMLElement.prototype.appendChild[i] = adc[i] ; }

    try {
        loop( document.body.children ) ;
    } catch ( ignore ) {
    } ;

    // window加载完成
    window.addEventListener( "load", function( ) {
        loop( document.body.children ) ;
        console.log( "已解除反复制功能" ) ;
    } ) ;

})();
