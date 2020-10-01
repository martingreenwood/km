/**
 * File base.js.
 *
 * Theme features
 * global jQuery
 */


/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
; window.Modernizr = function (a, b, c) { function x(a) { j.cssText = a } function y(a, b) { return x(prefixes.join(a + ";") + (b || "")) } function z(a, b) { return typeof a === b } function A(a, b) { return !!~("" + a).indexOf(b) } function B(a, b) { for (var d in a) { var e = a[d]; if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function C(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f } return !1 } function D(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + n.join(d + " ") + d).split(" "); return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c)) } var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w; !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) { return v.call(a, b) } : w = function (a, b) { return b in a && z(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = t.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(t.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(t.call(arguments))) }; return e }), p.cssanimations = function () { return D("animationName") }; for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u)); return e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) w(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, x(""), i = k = null, function (a, b) { function l(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a } function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b } function o(a, c, d) { c || (c = b); if (k) return c.createElement(a); d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g } function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++)d.createElement(f[e]); return d } function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) } function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p }; a.html5 = s, r(b) }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) { return B([a]) }, e.testAllProps = D, e.prefixed = function (a, b, c) { return b ? D(a, b, c) : D(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e }(this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++)c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);


 /**
 * pathLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

	'use strict';

	function PathLoader( el ) {
		this.el = el;
		// clear stroke
		this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
	}

	PathLoader.prototype._draw = function( val ) {
		this.el.style.strokeDashoffset = this.el.getTotalLength() * ( 1 - val );
	}

	PathLoader.prototype.setProgress = function( val, callback ) {
		this._draw(val);
		if( callback && typeof callback === 'function' ) {
			// give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
			setTimeout( callback, 200 );
		}
	}

	PathLoader.prototype.setProgressFn = function( fn ) {
		if( typeof fn === 'function' ) { fn( this ); }
	}

	// add to global namespace
	window.PathLoader = PathLoader;

})( window );

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 * fork https://github.com/zuk/jquery.inview
 */
(function(e){function m(){var b=window.innerHeight;if(b)return b;var f=document.compatMode;if(f||!e.support.boxModel)b="CSS1Compat"===f?document.documentElement.clientHeight:document.body.clientHeight;return b}var n=function(b,f){function e(){null!==a?c=!0:(c=!1,b(),a=setTimeout(function(){a=null;c&&e()},f))}var c=!1,a=null;return e}(function(){var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=b+m(),g=[];e.each(e.cache,function(){this.events&&this.events.inview&&
g.push(this.handle.elem)});e(g).each(function(){var c=e(this),a;a=0;for(var d=this;d;d=d.offsetParent)a+=d.offsetTop;var d=c.height(),k=a+d,d=c.data("inview")||!1,h=c.data("offset")||0,g=a>b&&k<f,l=k+h>b&&a<b,h=a-h<f&&k>f;g||l||h||a<b&&k>f?(a=h?"top":l?"bottom":"both",d&&d===a||(c.data("inview",a),c.trigger("inview",[!0,a]))):!g&&d&&(c.data("inview",!1),c.trigger("inview",[!1]))})},100);e(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview",n)})(jQuery);


// RELLAX
(function(q,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():q.Rellax=g()})("undefined"!==typeof window?window:global,function(){var q=function(g,u){function C(){if(3===a.options.breakpoints.length&&Array.isArray(a.options.breakpoints)){var f=!0,c=!0,b;a.options.breakpoints.forEach(function(a){"number"!==typeof a&&(c=!1);null!==b&&a<b&&(f=!1);b=a});if(f&&c)return}a.options.breakpoints=[576,768,1201];console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}
var a=Object.create(q.prototype),l=0,v=0,m=0,n=0,d=[],w=!0,A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},p=null,x=!1;try{var k=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,k);window.removeEventListener("testPassive",null,k)}catch(f){}var D=window.cancelAnimationFrame||window.mozCancelAnimationFrame||
clearTimeout,E=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var c=["Webkit","Moz","ms"],b;for(b in c)if(void 0!==a.style[c[b]+"Transform"])return c[b]+"Transform"}return"transform"}();a.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}};u&&Object.keys(u).forEach(function(d){a.options[d]=
u[d]});u&&u.breakpoints&&C();g||(g=".rellax");k="string"===typeof g?document.querySelectorAll(g):[g];if(0<k.length){a.elems=k;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(k=document.querySelector(a.options.wrapper))a.options.wrapper=k;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var F,B=function(){for(var f=0;f<d.length;f++)a.elems[f].style.cssText=d[f].style;d=[];v=window.innerHeight;n=window.innerWidth;f=a.options.breakpoints;F=n<f[0]?"xs":n>=f[0]&&n<
f[1]?"sm":n>=f[1]&&n<f[2]?"md":"lg";H();for(f=0;f<a.elems.length;f++){var c=void 0,b=a.elems[f],e=b.getAttribute("data-rellax-percentage"),y=b.getAttribute("data-rellax-speed"),t=b.getAttribute("data-rellax-xs-speed"),g=b.getAttribute("data-rellax-mobile-speed"),h=b.getAttribute("data-rellax-tablet-speed"),k=b.getAttribute("data-rellax-desktop-speed"),l=b.getAttribute("data-rellax-vertical-speed"),m=b.getAttribute("data-rellax-horizontal-speed"),p=b.getAttribute("data-rellax-vertical-scroll-axis"),
q=b.getAttribute("data-rellax-horizontal-scroll-axis"),u=b.getAttribute("data-rellax-zindex")||0,x=b.getAttribute("data-rellax-min"),A=b.getAttribute("data-rellax-max"),C=b.getAttribute("data-rellax-min-x"),D=b.getAttribute("data-rellax-max-x"),E=b.getAttribute("data-rellax-min-y"),L=b.getAttribute("data-rellax-max-y"),r=!0;t||g||h||k?c={xs:t,sm:g,md:h,lg:k}:r=!1;t=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&
(t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var z=a.options.vertical?e||a.options.center?t:0:0,I=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;t=z+b.getBoundingClientRect().top;g=b.clientHeight||b.offsetHeight||b.scrollHeight;h=I+b.getBoundingClientRect().left;k=b.clientWidth||b.offsetWidth||b.scrollWidth;
z=e?e:(z-t+v)/(g+v);e=e?e:(I-h+n)/(k+n);a.options.center&&(z=e=.5);c=r&&null!==c[F]?Number(c[F]):y?y:a.options.speed;l=l?l:a.options.verticalSpeed;m=m?m:a.options.horizontalSpeed;p=p?p:a.options.verticalScrollAxis;q=q?q:a.options.horizontalScrollAxis;y=J(e,z,c,l,m);b=b.style.cssText;r="";if(e=/transform\s*:/i.exec(b))r=b.slice(e.index),r=(e=r.indexOf(";"))?" "+r.slice(11,e).replace(/\s/g,""):" "+r.slice(11).replace(/\s/g,"");d.push({baseX:y.x,baseY:y.y,top:t,left:h,height:g,width:k,speed:c,verticalSpeed:l,
horizontalSpeed:m,verticalScrollAxis:p,horizontalScrollAxis:q,style:b,transform:r,zindex:u,min:x,max:A,minX:C,maxX:D,minY:E,maxY:L})}K();w&&(window.addEventListener("resize",B),w=!1,G())},H=function(){var d=l,c=m;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;m=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;
a.options.relativeToWrapper&&(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||c!=m&&a.options.horizontal?!0:!1},J=function(d,c,b,e,g){var f={};d=100*(g?g:b)*(1-d);c=100*(e?e:b)*(1-c);f.x=a.options.round?Math.round(d):Math.round(100*d)/100;f.y=a.options.round?Math.round(c):Math.round(100*c)/100;return f},h=function(){window.removeEventListener("resize",h);window.removeEventListener("orientationchange",
h);(a.options.wrapper?a.options.wrapper:window).removeEventListener("scroll",h);(a.options.wrapper?a.options.wrapper:document).removeEventListener("touchmove",h);p=A(G)},G=function(){H()&&!1===w?(K(),p=A(G)):(p=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),(a.options.wrapper?a.options.wrapper:window).addEventListener("scroll",h,x?{passive:!0}:!1),(a.options.wrapper?a.options.wrapper:document).addEventListener("touchmove",h,x?{passive:!0}:!1))},K=function(){for(var f,
c=0;c<a.elems.length;c++){var b=d[c].verticalScrollAxis.toLowerCase(),e=d[c].horizontalScrollAxis.toLowerCase();f=-1!=b.indexOf("x")?l:0;b=-1!=b.indexOf("y")?l:0;var g=-1!=e.indexOf("x")?m:0;e=-1!=e.indexOf("y")?m:0;f=J((f+g-d[c].left+n)/(d[c].width+n),(b+e-d[c].top+v)/(d[c].height+v),d[c].speed,d[c].verticalSpeed,d[c].horizontalSpeed);e=f.y-d[c].baseY;b=f.x-d[c].baseX;null!==d[c].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=d[c].min?d[c].min:e),a.options.horizontal&&!a.options.vertical&&
(b=b<=d[c].min?d[c].min:b));null!=d[c].minY&&(e=e<=d[c].minY?d[c].minY:e);null!=d[c].minX&&(b=b<=d[c].minX?d[c].minX:b);null!==d[c].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=d[c].max?d[c].max:e),a.options.horizontal&&!a.options.vertical&&(b=b>=d[c].max?d[c].max:b));null!=d[c].maxY&&(e=e>=d[c].maxY?d[c].maxY:e);null!=d[c].maxX&&(b=b>=d[c].maxX?d[c].maxX:b);a.elems[c].style[E]="translate3d("+(a.options.horizontal?b:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+d[c].zindex+"px) "+d[c].transform}a.options.callback(f)};
a.destroy=function(){for(var f=0;f<a.elems.length;f++)a.elems[f].style.cssText=d[f].style;w||(window.removeEventListener("resize",B),w=!0);D(p);p=null};B();a.refresh=B;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return q});


( function( $ ) {

    // INVIEW
    // --------------------------------------
    $(".the-date, .the-invite, .an-image, .the-manor, .the-venue, .the-travel, .the-lodging, .the-lodging--other, .the-credits, .the-reminder").bind("inview", function (event, visible, topOrBottomOrBoth) {
        if (visible == true) {
        $(this).addClass("in-viewport");
            if (topOrBottomOrBoth == "top") {
                $(this).addClass("in-viewport--top");
            } else if (topOrBottomOrBoth == "bottom") {
                $(this).addClass("in-viewport--bottom");
            } else {
                $(this).addClass("in-viewport--full");
            }
        } else {
        }
    });

    $(window).load(function () {
        $("[data-bg]").each(function () {
            $(this).css(
                "background-image",
                "url(" + $(this).data("bg") + ")"
            );
        });
    });

    var rellax = new Rellax(".rellax", {
        center: true
    });


    var support = { animations: Modernizr.cssanimations },
        container = document.querySelector('.page'),
        header = container.querySelector('header.pre-loader'),
        loader = new PathLoader(document.getElementById('page-loader-circle')),
        animEndEventNames = { 'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend' },
        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

    function init() {
        var onEndInitialAnimation = function () {
            if (support.animations) {
                this.removeEventListener(animEndEventName, onEndInitialAnimation);
            }

            startLoading();
        };

        // disable scrolling
        window.addEventListener('scroll', noscroll);

        // initial animation
        classie.add(container, 'loading');

        if (support.animations) {
            container.addEventListener(animEndEventName, onEndInitialAnimation);
        }
        else {
            onEndInitialAnimation();
        }
    }

    function startLoading() {
        // simulate loading something..
        var simulationFn = function (instance) {
            var progress = 0,
                interval = setInterval(function () {
                    progress = Math.min(progress + Math.random() * 0.1, 1);

                    instance.setProgress(progress);

                    // reached the end
                    if (progress === 1) {
                        classie.remove(container, 'loading');
                        classie.add(container, 'loaded');
                        clearInterval(interval);

                        var onEndHeaderAnimation = function (ev) {
                            if (support.animations) {
                                if (ev.target !== header) return;
                                this.removeEventListener(animEndEventName, onEndHeaderAnimation);
                            }

                            classie.add(document.body, 'layout-switch');
                            window.removeEventListener('scroll', noscroll);
                        };

                        if (support.animations) {
                            header.addEventListener(animEndEventName, onEndHeaderAnimation);
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80);
        };

        loader.setProgressFn(simulationFn);
    }

    function noscroll() {
        window.scrollTo(0, 0);
    }

    init();

}(jQuery));