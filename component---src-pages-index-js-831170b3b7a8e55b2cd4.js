(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(132),s=a(222),o=a.n(s),l=a(135),c=a(101),d=a(136),u=function(e){var t=e.homeLink,a=e.menuLinks;return n.a.createElement("header",{className:"mainheader"},n.a.createElement("header",{className:"mainheader"},n.a.createElement("div",{className:"mainheader__inner"},n.a.createElement(c.a,{className:"mainheader__mainlink",to:"/"},t),a.length&&n.a.createElement(d.a,{menuLinks:a}))))},f=a(225),m=(a(216),function(e){var t=Object(f.a)(!1),a=function(e){return"dark"===e?t.enable():t.disable()};return n.a.createElement("div",{className:"themeswitch"},n.a.createElement("button",{className:"themeswitch__button themeswitch__button--light",onClick:function(){return a("light")}},"☀"),n.a.createElement("button",{className:"themeswitch__button themeswitch__button--dark",onClick:function(){return a("dark")}},"☾"))}),g=(a(217),function(e){var t=e.data,a=e.heroTitle,r=e.heroText,s=i.data.site;return n.a.createElement("div",{className:"hero"},n.a.createElement(l.a,null,n.a.createElement("div",{className:"hero__image"},n.a.createElement(o.a,{fluid:t.file.childImageSharp.fluid})),n.a.createElement("div",{className:"hero__text"},n.a.createElement("h1",null,a),r)),n.a.createElement(l.a,null,n.a.createElement(m,null)),n.a.createElement(u,{homeLink:"JoAlfie",menuLinks:s.siteMetadata.menuLinks}))});a.d(t,"query",(function(){return p}));var h=n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"developer. creative. swordswoman. sailor.")),p=(t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{data:t,heroTitle:"Hi, I'm Jo Alfie",heroText:h}))},"489237479")},222:function(e,t,a){"use strict";a(12),a(13),a(8),a(102),a(144),a(223);var r=a(20);t.__esModule=!0,t.default=void 0;var n,i=r(a(77)),s=r(a(78)),o=r(a(145)),l=r(a(146)),c=r(a(0)),d=r(a(46)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,b=p&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(j,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},j=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:N?1:0,transition:C?"opacity "+b+"ms":"none"},o),V="boolean"==typeof p?"lightgray":p,_={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&_,{},o,{},f),T={title:t,alt:this.state.isVisible?"":a,style:z,className:m};if(g){var M=g,x=M[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),V&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&_)}),x.base64&&c.default.createElement(I,{src:x.base64,spreadProps:T,imageVariants:M,generateSources:L}),x.tracedSVG&&c.default.createElement(I,{src:x.tracedSVG,spreadProps:T,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(M),c.default.createElement(j,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:w},x,{imageVariants:M}))}}))}if(h){var P=h,q=P[0],J=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete J.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},C&&_)}),q.base64&&c.default.createElement(I,{src:q.base64,spreadProps:T,imageVariants:P,generateSources:L}),q.tracedSVG&&c.default.createElement(I,{src:q.tracedSVG,spreadProps:T,imageVariants:P,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(P),c.default.createElement(j,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:P}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:C,sizes:R,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=N;t.default=V},223:function(e,t,a){"use strict";a(147)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},224:function(e,t,a){"use strict";(function(e){var r=a(0);t.a=function(t,a,n){void 0===n&&(n=e);var i=Object(r.useRef)();Object(r.useEffect)((function(){i.current=a}),[a]),Object(r.useEffect)((function(){if(n&&n.addEventListener){var e=function(e){return i.current(e)};return n.addEventListener(t,e),function(){n.removeEventListener(t,e)}}}),[t,n])}}).call(this,a(143))},225:function(e,t,a){"use strict";(function(e){var r=a(224),n=a(0),i=a(226),s=function(){},o={classList:{add:s,remove:s}},l=function(t,a,r){void 0===r&&(r=e);var s=t?Object(i.a)(t,a):n.useState,l=r.matchMedia?r.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return l.addListener&&l.addListener(t)},removeEventListener:function(e,t){return l.removeListener&&l.removeListener(t)}},d="(prefers-color-scheme: dark)"===l.media,u=r.document&&r.document.body||o;return{usePersistedDarkModeState:s,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=u),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(r){e.classList.add(r?t:a),e.classList.remove(r?a:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return d?l.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,i=t.classNameDark,s=t.classNameLight,o=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var d=t.storageProvider,u=t.global,f=Object(n.useMemo)((function(){return l(c,d,u)}),[c,d,u]),m=f.getDefaultOnChange,g=f.mediaQueryEventTarget,h=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(e)),p=h[0],b=h[1],v=Object(n.useMemo)((function(){return o||m(a,i,s)}),[o,a,i,s,m]);return Object(n.useEffect)((function(){v(p)}),[v,p]),Object(r.a)("change",(function(e){return b(e.matches)}),g),{value:p,enable:Object(n.useCallback)((function(){return b(!0)}),[b]),disable:Object(n.useCallback)((function(){return b(!1)}),[b]),toggle:Object(n.useCallback)((function(){return b((function(e){return!e}))}),[b])}}}).call(this,a(143))},226:function(e,t,a){"use strict";(function(e){a(28),a(21);var r=a(0),n=a(224),i={},s=function(e,t,a){return i[e]||(i[e]={callbacks:[],value:a}),i[e].callbacks.push(t),{deregister:function(){var a=i[e].callbacks,r=a.indexOf(t);r>-1&&a.splice(r,1)},emit:function(a){i[e].value!==a&&(i[e].value=a,i[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};t.a=function(t,a){if(void 0===a&&(a=e.localStorage),a){var i=(o=a,{get:function(e,t){var a=o.getItem(e);return null===a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,a){var i=a.get,o=a.set,l=Object(r.useRef)(null),c=Object(r.useState)((function(){return i(t,e)})),d=c[0],u=c[1];return Object(n.a)("storage",(function(e){var a=e.key,r=JSON.parse(e.newValue);a===t&&d!==r&&u(r)})),Object(r.useEffect)((function(){return l.current=s(t,u,e),function(){l.current.deregister()}}),[]),Object(r.useEffect)((function(){o(t,d),l.current.emit(d)}),[d]),[d,u]}(e,t,i)}}var o;return r.useState}}).call(this,a(143))}}]);
//# sourceMappingURL=component---src-pages-index-js-831170b3b7a8e55b2cd4.js.map