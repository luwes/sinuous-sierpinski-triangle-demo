(function () {
  'use strict';

  const n=[];let t,o;function r(){return !!t}function u(n){const o=t,r=()=>{};t=r,a(r);const u=n(()=>{S(r),t=void 0;});return t=o,u}function c(n){const o=t;t=void 0;const r=n();return t=o,r}function i(t){o=[];const r=t();let u=o;return o=void 0,u.forEach(t=>{if(t.t!==n){const o=t.t;t.t=n,t(o);}}),r}function e(r){function u(c){if(0===arguments.length)return t&&!u.o.has(t)&&(u.o.add(t),t.u.push(u)),r;if(o)return u.t===n&&o.push(u),u.t=c,c;r=c;const i=t;return t=void 0,u.i=new Set(u.o),u.i.forEach(n=>n.s=!1),u.i.forEach(n=>{n.s||n();}),t=i,r}return(u.$o=!0,u.o=new Set,u.t=n,u)}function f(n,o){function r(){const u=t;t&&t.__c.push(r);const c=r.__c;return S(r),r.s=!0,t=r,o=n(o),c.forEach(n=>{-1===r.__c.indexOf(n)&&(n.s=!0);}),function n(t){return t.reduce((t,o)=>t.concat(o,n(o.__c)),[])}(r.__c).forEach(n=>{n.s&&n.u.forEach(t=>{t.i&&t.i.delete(n);});}),t=u,o}return n.v=r,a(r),r(),function(){return r.s?r.u.forEach(n=>n()):o=r(),o}}function s(n){return t&&t.S.push(n),n}function d(n){return f(n),()=>S(n.v)}function v(n){S(n.v);}function S(n){n.__c.forEach(S),n.u.forEach(t=>{t.o.delete(n);}),n.S.forEach(n=>n()),a(n);}function a(n){n.u=[],n.__c=[],n.S=[];}//# sourceMappingURL=observable.js.map

  var n$1 = /*#__PURE__*/Object.freeze({
    S: f,
    cleanup: s,
    computed: f,
    isListening: r,
    o: e,
    observable: e,
    root: u,
    sample: c,
    subscribe: d,
    transaction: i,
    unsubscribe: v
  });

  const e$1={},s$1=[],f$1="__g";function i$1(n,t,o,e){if(o){if(t){if(!e){const t=(e=o.previousSibling||n.lastChild)[f$1];if(t)for(e=e.previousSibling;e&&e[f$1]!==t;)e=e.previousSibling;}let t;for(;e&&e!==o;)t=e.nextSibling,n.removeChild(e),e[f$1]=0,e=t;}}else n.textContent="";}let r$1=0;function u$1(n,t,o,u,c){n=o&&o.parentNode||n;const l=typeof t;return t===u||(!t&&0!==t||!0===t?(i$1(n,u,o,c),u=null):u&&"string"!=typeof u||!("string"===l||"number"===l&&(t+=""))?"function"===l?e$1.subscribe((function(){u=e$1.insert(n,t(),o,u);})):(i$1(n,u,o,c),t instanceof Node||(t=e$1.h(s$1,t)),11===t.nodeType&&t.firstChild!==t.lastChild&&(t.firstChild[f$1]=t.lastChild[f$1]=++r$1),n.insertBefore(t,o||null),u=t):(null!=u&&n.firstChild?o?(o.previousSibling||n.lastChild).data=t:n.firstChild.data=t:o?n.insertBefore(document.createTextNode(t),o):n.textContent=t,u=t)),u}function c$1(n,t,o,s,f){if(!n||"attrs"===n&&(s=!0))for(n in t)c$1(n,t[n],o,s,f);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?t.$t?t.$t(2,c$1,o,n):e$1.subscribe(()=>{c$1(n,t(),o,s,f);}):f?o.style.setProperty(n,t):s||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?o.setAttribute(n,t):"style"===n?"string"==typeof t?o.style.cssText=t:c$1(null,t,o,s,!0):("class"===n&&(n+="Name"),o[n]=t):function(n,t,o){t=t.slice(2);const s=e$1.cleanup(()=>n.removeEventListener(t,l));o?n.addEventListener(t,l):s(),(n.t||(n.t={}))[t]=o;}(o,n,t);}function l(n){return this.t[n.type](n)}function a$1(n,t){for(let t in n)e$1[t]=n[t];function o(){const n=s$1.slice.call(arguments);let o;return n.forEach((function e(s){const f=typeof s;if(null==s);else if("string"===f)o?o.appendChild(document.createTextNode(s)):o=t?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s);else if(Array.isArray(s))o||(o=document.createDocumentFragment()),s.forEach(e);else if(s instanceof Node)o?o.appendChild(s):o=s;else if("object"===f)c$1(null,s,o,t);else if("function"===f)if(o){const n=o.appendChild(document.createTextNode(""));s.$t?s.$t(1,u$1,o,""):u$1(o,s,n);}else o=s.apply(null,n.splice(1));else o.appendChild(document.createTextNode(""+s));})),o}return e$1.insert=u$1,e$1.property=c$1,e$1.h=o,o}const m=a$1(n$1),p=a$1(n$1,!0),d$1=e;//# sourceMappingURL=sinuous.js.map

  /* Adapted from Solid Sierpinski Triangle Demo - The MIT License - Ryan Carniato */
  const TARGET = 25;

  const dePrioritize = signal => {
    let i, t;
    const delayed = d$1(signal());
    const box = {
      current: null
    };

    const method = () => {
      cancelIdleCallback(i);
      clearTimeout(t);
      t = null;
      delayed(box.current);
    };

    d(() => {
      box.current = signal();
      cancelIdleCallback(i);
      if (!t) t = setTimeout(method, ~~(Math.random() * 4 + 1) * 100);
      i = requestIdleCallback(method);
    });
    return delayed;
  };

  const TriangleDemo = () => {
    const elapsed = d$1(0);
    const seconds = d$1(0);

    const scale = () => {
      const e = elapsed() / 1000 % 10;
      return 1 + (e > 5 ? 10 - e : e) / 10;
    };

    const start = Date.now();
    setInterval(() => seconds(seconds() % 10 + 1), 1000);

    const update = () => {
      elapsed(Date.now() - start);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    const style = () => ({
      transform: 'scaleX(' + scale() / 2.1 + ') scaleY(0.7) translateZ(0.1px)'
    });

    return m("div", {
      "class": "container",
      style: style
    }, m(Triangle, {
      x: 0,
      y: 0,
      s: 1000,
      seconds: seconds
    }));
  };

  const Triangle = ({
    x,
    y,
    s,
    seconds
  }) => {
    if (s <= TARGET) {
      return m(Dot, {
        x: x - TARGET / 2,
        y: y - TARGET / 2,
        s: TARGET,
        text: seconds
      });
    }

    s = s / 2;
    if (s === 125) seconds = dePrioritize(seconds); // var slowDown = true;
    // if (slowDown) {
    //   var e = performance.now() + 0.8;
    //   while (performance.now() < e) {
    //     // Artificially long execution time.
    //   }
    // }

    return m([m(Triangle, {
      x: x,
      y: y - s / 2,
      s: s,
      seconds: seconds
    }), m(Triangle, {
      x: x - s,
      y: y + s / 2,
      s: s,
      seconds: seconds
    }), m(Triangle, {
      x: x + s,
      y: y + s / 2,
      s: s,
      seconds: seconds
    })]);
  };

  const Dot = ({
    x,
    y,
    s,
    text
  }) => {
    const hover = d$1(false);

    const onEnter = () => hover(true);

    const onExit = () => hover(false);

    s = s * 1.3;

    const style = () => ({
      width: s + 'px',
      height: s + 'px',
      left: x + 'px',
      top: y + 'px',
      'border-radius': s / 2 + 'px',
      'line-height': s + 'px',
      background: hover() ? '#ff0' : '#61dafb'
    });

    return m("div", {
      "class": "dot",
      style: style,
      onmouseenter: onEnter,
      onmouseleave: onExit
    }, () => hover() ? '**' + text() + '**' : text());
  };

  document.body.appendChild(TriangleDemo());

}());
