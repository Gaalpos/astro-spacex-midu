import{l as j}from"./preact.module.Bpx4AEmL.js";var l,r,s,E,H=0,U=[],u=j,y=u.__b,A=u.__r,F=u.diffed,g=u.__c,k=u.unmount,q=u.__;function C(_,t){u.__h&&u.__h(r,_,H||t),H=0;var o=r.__H||(r.__H={__:[],__h:[]});return _>=o.__.length&&o.__.push({}),o.__[_]}function P(_){return H=1,w(b,_)}function w(_,t,o){var i=C(l++,2);if(i.t=_,!i.__c&&(i.__=[b(void 0,t),function(c){var e=i.__N?i.__N[0]:i.__[0],f=i.t(e,c);e!==f&&(i.__N=[f,i.__[1]],i.__c.setState({}))}],i.__c=r,!r.u)){var a=function(c,e,f){if(!i.__c.__H)return!0;var v=i.__c.__H.__.filter(function(n){return!!n.__c});if(v.every(function(n){return!n.__N}))return!h||h.call(this,c,e,f);var N=!1;return v.forEach(function(n){if(n.__N){var W=n.__[0];n.__=n.__N,n.__N=void 0,W!==n.__[0]&&(N=!0)}}),!(!N&&i.__c.props===c)&&(!h||h.call(this,c,e,f))};r.u=!0;var h=r.shouldComponentUpdate,p=r.componentWillUpdate;r.componentWillUpdate=function(c,e,f){if(this.__e){var v=h;h=void 0,a(c,e,f),h=v}p&&p.call(this,c,e,f)},r.shouldComponentUpdate=a}return i.__N||i.__}function S(_,t){var o=C(l++,7);return B(o.__H,t)&&(o.__=_(),o.__H=t,o.__h=_),o.__}function x(){for(var _;_=U.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(m),_.__H.__h.forEach(d),_.__H.__h=[]}catch(t){_.__H.__h=[],u.__e(t,_.__v)}}u.__b=function(_){r=null,y&&y(_)},u.__=function(_,t){_&&t.__k&&t.__k.__m&&(_.__m=t.__k.__m),q&&q(_,t)},u.__r=function(_){A&&A(_),l=0;var t=(r=_.__c).__H;t&&(s===r?(t.__h=[],r.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.i=o.__N=void 0})):(t.__h.forEach(m),t.__h.forEach(d),t.__h=[],l=0)),s=r},u.diffed=function(_){F&&F(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(U.push(t)!==1&&E===u.requestAnimationFrame||((E=u.requestAnimationFrame)||z)(x)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.i=void 0})),s=r=null},u.__c=function(_,t){t.some(function(o){try{o.__h.forEach(m),o.__h=o.__h.filter(function(i){return!i.__||d(i)})}catch(i){t.some(function(a){a.__h&&(a.__h=[])}),t=[],u.__e(i,o.__v)}}),g&&g(_,t)},u.unmount=function(_){k&&k(_);var t,o=_.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{m(i)}catch(a){t=a}}),o.__H=void 0,t&&u.__e(t,o.__v))};var T=typeof requestAnimationFrame=="function";function z(_){var t,o=function(){clearTimeout(i),T&&cancelAnimationFrame(t),setTimeout(_)},i=setTimeout(o,100);T&&(t=requestAnimationFrame(o))}function m(_){var t=r,o=_.__c;typeof o=="function"&&(_.__c=void 0,o()),r=t}function d(_){var t=r;_.__c=_.__(),r=t}function B(_,t){return!_||_.length!==t.length||t.some(function(o,i){return o!==_[i]})}function b(_,t){return typeof t=="function"?t(_):t}export{S as T,P as h};
