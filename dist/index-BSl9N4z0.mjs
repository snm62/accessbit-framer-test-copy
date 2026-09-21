(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$2(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$2;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$1.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$1.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$2;
}
var H$3 = G$2.prototype = new F$1();
H$3.constructor = G$2;
C$3(H$3, E$1.prototype);
H$3.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$3(a2, b2) {
  return { $$typeof: l$2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$2;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$3 = /\/+/g;
function Q$1(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2) a2 = null;
  var h2 = false;
  if (null === a2) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a2.$$typeof) {
        case l$2:
        case n$2:
          h2 = true;
      }
  }
  if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$1(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$3, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
    return a3;
  })) : null != c2 && (O$2(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$3, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
    k2 = a2[g2];
    var f2 = d2 + Q$1(k2, g2);
    h2 += R$2(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (null == a2) return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$3(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status) return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$1 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$2 };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.act = X$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$3({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$1, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$3, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$3 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$1 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2) m$3.call(a2, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a2[d2];
      if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length) return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C3 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
        if (0 > g2(C3, c2)) n2 < e2 && 0 > g2(x2, C3) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C3, a2[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z3 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H3(a2) {
    B2 = false;
    G2(a2);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H3, b2.startTime - a2);
    }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z3 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H3, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z3 = false;
    }
  }
  var N3 = false, O2 = null, L2 = -1, P3 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P3 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N3 = false, O2 = null);
      }
    } else N3 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a2) {
    O2 = a2;
    N3 || (N3 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z3 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P3 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H3, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z3 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa$1 = reactExports, ca$1 = schedulerExports;
function p$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da$1 = /* @__PURE__ */ new Set(), ea$1 = {};
function fa(a2, b2) {
  ha$1(a2, b2);
  ha$1(a2 + "Capture", b2);
}
function ha$1(a2, b2) {
  ea$1[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++) da$1.add(b2[a2]);
}
var ia$1 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la$1 = {}, ma = {};
function oa$1(a2) {
  if (ja.call(ma, a2)) return true;
  if (ja.call(la$1, a2)) return false;
  if (ka.test(a2)) return ma[a2] = true;
  la$1[a2] = true;
  return false;
}
function pa$1(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa$1(a2, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$2(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new v$2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new v$2(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new v$2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra$1 = /[\-:]([a-z])/g;
function sa$1(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra$1,
    sa$1
  );
  z$2[b2] = new v$2(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$2[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$2[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta$1(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa$1(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua$1 = aa$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va$1 = Symbol.for("react.element"), wa$1 = Symbol.for("react.portal"), ya$1 = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba$1 = Symbol.for("react.provider"), Ca$1 = Symbol.for("react.context"), Da$1 = Symbol.for("react.forward_ref"), Ea$1 = Symbol.for("react.suspense"), Fa$1 = Symbol.for("react.suspense_list"), Ga$1 = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia$1 = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$1 = Object.assign, La;
function Ma$1(a2) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a2;
}
var Na$1 = false;
function Oa(a2, b2) {
  if (!a2 || Na$1) return "";
  Na$1 = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a2, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a2.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na$1 = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma$1(a2) : "";
}
function Pa$1(a2) {
  switch (a2.tag) {
    case 5:
      return Ma$1(a2.type);
    case 16:
      return Ma$1("Lazy");
    case 13:
      return Ma$1("Suspense");
    case 19:
      return Ma$1("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2) return null;
  if ("function" === typeof a2) return a2.displayName || a2.name || null;
  if ("string" === typeof a2) return a2;
  switch (a2) {
    case ya$1:
      return "Fragment";
    case wa$1:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea$1:
      return "Suspense";
    case Fa$1:
      return "SuspenseList";
  }
  if ("object" === typeof a2) switch (a2.$$typeof) {
    case Ca$1:
      return (a2.displayName || "Context") + ".Consumer";
    case Ba$1:
      return (a2._context.displayName || "Context") + ".Provider";
    case Da$1:
      var b2 = a2.render;
      a2 = a2.displayName;
      a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      return a2;
    case Ga$1:
      return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
    case Ha:
      b2 = a2._payload;
      a2 = a2._init;
      try {
        return Qa(a2(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra$1(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va$1(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2) return false;
  var b2 = a2._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa$1(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2) return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya$1(a2, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za$1(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta$1(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
  } else a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa$1(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$1(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
    for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
  }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$1(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb) throw Error(p$1(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib) return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
      a2 = !d2;
      break a;
    default:
      a2 = false;
  }
  if (a2) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia$1) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a2) {
  Lb = false;
}
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2) throw Error(p$1(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2) throw Error(p$1(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a2;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$1(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$1(190));
  }
  if (3 !== c2.tag) throw Error(p$1(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2) return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca$1.unstable_scheduleCallback, bc = ca$1.unstable_cancelCallback, cc = ca$1.unstable_shouldYield, dc = ca$1.unstable_requestPaint, B$1 = ca$1.unstable_now, ec = ca$1.unstable_getCurrentPriorityLevel, fc = ca$1.unstable_ImmediatePriority, gc = ca$1.unstable_UserBlockingPriority, hc = ca$1.unstable_NormalPriority, ic = ca$1.unstable_LowPriority, jc = ca$1.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$2 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn) return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca$1.unstable_scheduleCallback(ca$1.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua$1.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
  else if (c2 = b2.tag, 13 === c2) {
    a2 = Wb(b2);
    if (null !== a2) return a2;
    a2 = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a2 = null;
  } else b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2) return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia$1 && "CompositionEvent" in window, be$1 = null;
ia$1 && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia$1 && "TextEvent" in window && !be$1, de$1 = ia$1 && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee = String.fromCharCode(32), fe$1 = false;
function ge$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je$1(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$1 = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe$1 ? null : a2;
    default:
      return null;
  }
}
function ke$1(a2, b2) {
  if (ie$1) return "compositionend" === a2 || !ae$1 && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a2.type] : "textarea" === b2 ? true : false;
}
function ne$1(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a2) {
  se$1(a2, 0);
}
function te$1(a2) {
  var b2 = ue$1(a2);
  if (Wa(b2)) return a2;
}
function ve$1(a2, b2) {
  if ("change" === a2) return b2;
}
var we = false;
if (ia$1) {
  var xe$1;
  if (ia$1) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze$1.oninput;
    }
    xe$1 = ye$1;
  } else xe$1 = false;
  we = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be), qe$1 = pe$1 = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a2, xb(a2));
    Jb(re$1, b2);
  }
}
function Ce$1(a2, b2, c2) {
  "focusin" === a2 ? (Ae$1(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae$1();
}
function De$1(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te$1(qe$1);
}
function Ee(a2, b2) {
  if ("click" === a2) return te$1(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2) return te$1(b2);
}
function Ge$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie$1(a2, b2) {
  if (He$1(a2, b2)) return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$1(a2[e2], b2[e2])) return false;
  }
  return true;
}
function Je$1(a2) {
  for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
  return a2;
}
function Ke$1(a2, b2) {
  var c2 = Je$1(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a2 = window, b2 = Xa$1(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a2 = b2.contentWindow;
    else break;
    b2 = Xa$1(a2.document);
  }
  return b2;
}
function Ne$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe$1(a2) {
  var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$1(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke$1(c2, f2);
        var g2 = Ke$1(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe$1 = ia$1 && "documentMode" in document && 11 >= document.documentMode, Qe$1 = null, Re = null, Se$1 = null, Te$1 = false;
function Ue$1(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe$1 || Qe$1 !== Xa$1(d2) || (d2 = Qe$1, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$1 && Ie$1(Se$1, d2) || (Se$1 = d2, d2 = oe$1(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe$1)));
}
function Ve$1(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia$1 && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a2) {
  if (Xe$1[a2]) return Xe$1[a2];
  if (!We$1[a2]) return a2;
  var b2 = We$1[a2], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$1) return Xe$1[a2] = b2[c2];
  return a2;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha$1("onMouseEnter", ["mouseout", "mouseover"]);
ha$1("onMouseLeave", ["mouseout", "mouseover"]);
ha$1("onPointerEnter", ["pointerout", "pointerover"]);
ha$1("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$1(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$2(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da$1.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u2 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na2 = ve$1;
        else if (me$1(h3)) if (we) na2 = Fe$1;
        else {
          na2 = De$1;
          var xa2 = Ce$1;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na2 = Ee);
        if (na2 && (na2 = na2(a2, d3))) {
          ne$1(g3, na2, c2, e3);
          break a;
        }
        xa2 && xa2(a2, h3, d3);
        "focusout" === a2 && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa2 = d3 ? ue$1(d3) : window;
      switch (a2) {
        case "focusin":
          if (me$1(xa2) || "true" === xa2.contentEditable) Qe$1 = xa2, Re = d3, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re = Qe$1 = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$1) break;
        case "keydown":
        case "keyup":
          Ue$1(g3, c2, e3);
      }
      var $a;
      if (ae$1) b: {
        switch (a2) {
          case "compositionstart":
            var ba2 = "onCompositionStart";
            break b;
          case "compositionend":
            ba2 = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba2 = "onCompositionUpdate";
            break b;
        }
        ba2 = void 0;
      }
      else ie$1 ? ge$1(a2, c2) && (ba2 = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba2 = "onCompositionStart");
      ba2 && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa2 = oe$1(d3, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a2, null, c2, e3), g3.push({ event: ba2, listeners: xa2 }), $a ? ba2.data = $a : ($a = he$1(c2), null !== $a && (ba2.data = $a))));
      if ($a = ce$1 ? je$1(a2, c2) : ke$1(a2, c2)) d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$1(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$1(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2) return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2) throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a2.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a2;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2) return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
        if (c2 = a2[Of]) return c2;
        a2 = Mf(a2);
      }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue$1(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
  throw Error(p$1(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E(Wf);
  E(H$2);
}
function ag(a2, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$1(168));
  G$1(H$2, b2);
  G$1(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$1(108, Ra$1(a2) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$1(H$2, a2);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2) throw Error(p$1(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E(Wf), E(H$2), G$1(H$2, a2)) : E(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$2;
    try {
      var c2 = eg;
      for (C$2 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$1) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2)) throw Error(p$1(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, xg = a2);
      }
    } else {
      if (Dg(a2)) throw Error(p$1(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg) return false;
  if (!I$1) return Fg(a2), I$1 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2)) throw Hg(), Error(p$1(418));
    for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2) throw Error(p$1(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$1 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua$1.ReactCurrentBatchConfig;
function Lg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$1(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2) throw Error(p$1(284));
    if (!c2._owner) throw Error(p$1(290, a2));
  }
  return a2;
}
function Mg(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$1(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function Og(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Pg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya$1) return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Lg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va$1:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
        case wa$1:
          return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Mg(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va$1:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa$1:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      Mg(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va$1:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa$1:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I$1 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$1(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$1 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya$1 && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va$1:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya$1) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya$1 ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa$1:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a3, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a3;
                a3 = d3;
                break a;
              } else {
                c2(a3, d3);
                break;
              }
              else b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a3, d3, f3, h3);
      if (Ka(f3)) return t2(a3, d3, f3, h3);
      Mg(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b2 = Wg.current;
  E(Wg);
  a2._currentValue = b2;
}
function bh(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2) break;
    a2 = a2.return;
  }
}
function ch(a2, b2) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b2 = a2._currentValue;
  if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$1(308));
    Yg = a2;
    Xg.dependencies = { lanes: 0, firstContext: a2 };
  } else Yg = Yg.next = a2;
  return b2;
}
var fh = null;
function gh(a2) {
  null === fh ? fh = [a2] : fh.push(a2);
}
function hh(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a2, d2);
}
function ih(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function mh(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a2, c2);
}
function oh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function ph(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function sh(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
    var d2 = a2[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$1(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a2) {
  if (a2 === th) throw Error(p$1(174));
  return a2;
}
function yh(a2, b2) {
  G$1(wh, b2);
  G$1(vh, a2);
  G$1(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E(uh);
  G$1(uh, b2);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$1(vh, a2), G$1(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (E(uh), E(vh));
}
var L$1 = Uf(0);
function Ch(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua$1.ReactCurrentDispatcher, Gh = ua$1.ReactCurrentBatchConfig, Hh = 0, M$1 = null, N$2 = null, O$1 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$2() {
  throw Error(p$1(321));
}
function Mh(a2, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He$1(a2[c2], b2[c2])) return false;
  return true;
}
function Nh(a2, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
  a2 = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$1(301));
      f2 += 1;
      O$1 = N$2 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$2 && null !== N$2.next;
  Hh = 0;
  O$1 = N$2 = M$1 = null;
  Ih = false;
  if (b2) throw Error(p$1(300));
  return a2;
}
function Sh() {
  var a2 = 0 !== Kh;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$1 ? M$1.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  return O$1;
}
function Uh() {
  if (null === N$2) {
    var a2 = M$1.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else a2 = N$2.next;
  var b2 = null === O$1 ? M$1.memoizedState : O$1.next;
  if (null !== b2) O$1 = b2, N$2 = a2;
  else {
    if (null === a2) throw Error(p$1(310));
    N$2 = a2;
    a2 = { memoizedState: N$2.memoizedState, baseState: N$2.baseState, baseQueue: N$2.baseQueue, queue: N$2.queue, next: null };
    null === O$1 ? M$1.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  }
  return O$1;
}
function Vh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = N$2, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$1.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$1(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, M$1.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$1(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = M$1, d2 = Uh(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$1 && O$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi$1(9, ci$1.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q) throw Error(p$1(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function ci$1(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi$1(a2);
}
function ai(a2, b2, c2) {
  return c2(function() {
    ei(b2) && fi$1(a2);
  });
}
function ei(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$1(a2, c2);
  } catch (d2) {
    return true;
  }
}
function fi$1(a2) {
  var b2 = ih(a2, 1);
  null !== b2 && gi(b2, a2, 1, -1);
}
function hi(a2) {
  var b2 = Th();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ii.bind(null, M$1, a2);
  return [b2.memoizedState, a2];
}
function bi$1(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a2, b2, c2, d2) {
  var e2 = Th();
  M$1.flags |= a2;
  e2.memoizedState = bi$1(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li$1(a2, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$2) {
    var g2 = N$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi$1(b2, c2, f2, d2);
      return;
    }
  }
  M$1.flags |= a2;
  e2.memoizedState = bi$1(1 | b2, c2, f2, d2);
}
function mi(a2, b2) {
  return ki(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return li$1(2048, 8, a2, b2);
}
function ni(a2, b2) {
  return li$1(4, 2, a2, b2);
}
function oi$1(a2, b2) {
  return li$1(4, 4, a2, b2);
}
function pi(a2, b2) {
  if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
    b2.current = null;
  };
}
function qi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return li$1(4, 4, pi.bind(null, b2, a2), c2);
}
function ri$1() {
}
function si$1(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ti(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function ui$1(a2, b2, c2) {
  if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), M$1.lanes |= c2, rh |= c2, a2.baseState = true);
  return b2;
}
function vi(a2, b2) {
  var c2 = C$2;
  C$2 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$2 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi$1(a2, b2, c2) {
  var d2 = yi(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, c2);
  else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
    var e2 = R$1();
    gi(c2, a2, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a2, b2, c2) {
  var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He$1(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a2, b2, e2, d2);
    null !== c2 && (e2 = R$1(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a2) {
  var b2 = a2.alternate;
  return a2 === M$1 || null !== b2 && b2 === M$1;
}
function Ai(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Bi(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$2, useContext: P$2, useEffect: P$2, useImperativeHandle: P$2, useInsertionEffect: P$2, useLayoutEffect: P$2, useMemo: P$2, useReducer: P$2, useRef: P$2, useState: P$2, useDebugValue: P$2, useDeferredValue: P$2, useTransition: P$2, useMutableSource: P$2, useSyncExternalStore: P$2, useId: P$2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ki(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ki(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = xi$1.bind(null, M$1, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: hi, useDebugValue: ri$1, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi(false), b2 = a2[0];
  a2 = vi.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = M$1, e2 = Th();
  if (I$1) {
    if (void 0 === c2) throw Error(p$1(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q) throw Error(p$1(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  bi$1(9, ci$1.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = Q.identifierPrefix;
  if (I$1) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si$1,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi$1,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri$1,
  useDeferredValue: function(a2) {
    var b2 = Uh();
    return ui$1(b2, N$2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si$1, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi$1, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri$1, useDeferredValue: function(a2) {
  var b2 = Uh();
  return null === N$2 ? b2.memoizedState = a2 : ui$1(b2, N$2.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a2, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci$1(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
function Di(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = R$1(), d2 = yi(a2), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a2, e2, d2);
  null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
} };
function Fi(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
}
function Gi(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii$1(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function Ji(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa$1(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Ki(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi$1 = d2);
    Li(a2, b2);
  };
  return c2;
}
function Qi(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a2, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ti$1.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ui(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Vi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi = ua$1.ReactCurrentOwner, dh = false;
function Xi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
}
function Yi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a2, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$1 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, d2, e2);
  return b2.child;
}
function $i(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
    a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$1;
    if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = Pg(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$1(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
    else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
  }
  return cj(a2, b2, c2, d2, e2);
}
function dj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(ej, fj), fj |= a2, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$1(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(ej, fj), fj |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function gj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a2, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$1 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, c2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii$1(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci$1(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a2, b2, c2, d2, f2, e2);
}
function jj(a2, b2, c2, d2, e2, f2) {
  gj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function lj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a2, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function oj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
  G$1(L$1, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a2, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a2.child, null, c2);
  a2 = qj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function rj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$1(422))), sj(a2, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$1(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (dh || h2) {
    d2 = Q;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$1(421)));
    return sj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$1 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a2.return, b2, c2);
}
function wj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a2, b2, d2.children, c2);
  d2 = L$1.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
      if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
      else if (19 === a2.tag) vj(a2, c2, b2);
      else if (null !== a2.child) {
        a2.child.return = a2;
        a2 = a2.child;
        continue;
      }
      if (a2 === b2) break a;
      for (; null === a2.sibling; ) {
        if (null === a2.return || a2.return === b2) break a;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      a2 = a2.sibling;
    }
    d2 &= 1;
  }
  G$1(L$1, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a2 = e2.alternate;
        if (null !== a2 && null === Ch(a2)) {
          b2.child = e2;
          break;
        }
        a2 = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a2;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a2 && b2.child !== a2.child) throw Error(p$1(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = Pg(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$1(L$1, L$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
        G$1(L$1, L$1.current & 1);
        a2 = Zi(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$1(L$1, L$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2) return xj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(L$1, L$1.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi(a2, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya$1(a2, e2);
        d2 = Ya$1(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea$1.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea$1.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a2, b2) {
  if (!I$1) switch (a2.tailMode) {
    case "hidden":
      b2 = a2.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a2.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a2.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
  }
}
function S$1(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E(Wf);
      E(H$2);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a2, b2);
      S$1(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$1(166));
          S$1(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za$1(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a2
            ), e2 = ["children", "" + h2]) : ea$1.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va$1(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va$1(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          zj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a2);
                D$2("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$2("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a2
                );
                D$2("load", a2);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za$1(a2, d2);
                e2 = Ya$1(a2, d2);
                D$2("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                D$2("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$2("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea$1.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a2) : null != k2 && ta$1(a2, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va$1(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va$1(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$1(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2) switch (a2.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                break;
              case 5:
                true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$1(b2);
      return null;
    case 13:
      E(L$1);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2) throw Error(p$1(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$1(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L$1.current & 1) ? 0 === T$2 && (T$2 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return ah(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E(L$1);
      f2 = b2.memoizedState;
      if (null === f2) return S$1(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
          g2 = Ch(a2);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
            G$1(L$1, L$1.current & 1 | 2);
            return b2.child;
          }
          a2 = a2.sibling;
        }
        null !== f2.tail && B$1() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a2 = Ch(g2), null !== a2) {
          if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1) return S$1(b2), null;
        } else 2 * B$1() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = L$1.current, G$1(L$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b2.tag));
}
function Ij(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), E(Wf), E(H$2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E(L$1);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate) throw Error(p$1(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E(L$1), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$1(a2, b2, d2);
  }
  else c2.current = null;
}
function Mj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Nj = false;
function Oj(a2, b2) {
  Cf = dd;
  a2 = Me$1();
  if (Ne$1(a2)) {
    if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else a: {
      c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a2) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; ) if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V = a2;
  else for (; null !== V; ) {
    b2 = V;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci$1(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$1(163));
      }
    } catch (F2) {
      W$1(b2, b2.return, F2);
    }
    a2 = b2.sibling;
    if (null !== a2) {
      a2.return = b2.return;
      V = a2;
      break;
    }
    V = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Sj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Sj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Uj(a2) {
  a: for (; ; ) {
    for (; null === a2.sibling; ) {
      if (null === a2.return || Tj(a2.return)) return null;
      a2 = a2.return;
    }
    a2.sibling.return = a2.return;
    for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
      if (a2.flags & 2) continue a;
      if (null === a2.child || 4 === a2.tag) continue a;
      else a2.child.return = a2, a2 = a2.child;
    }
    if (!(a2.flags & 2)) return a2.stateNode;
  }
}
function Vj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
}
var X$1 = null, Xj = false;
function Yj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
}
function Zj(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$1 || Lj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Xj;
      X$1 = null;
      Yj(a2, b2, c2);
      X$1 = d2;
      Xj = e2;
      null !== X$1 && (Xj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Xj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Xj;
      X$1 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b2, c2);
      X$1 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a2, b2, c2);
      break;
    case 1:
      if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$1(c2, b2, h2);
      }
      Yj(a2, b2, c2);
      break;
    case 21:
      Yj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a2, b2, c2), U$1 = d2) : Yj(a2, b2, c2);
      break;
    default:
      Yj(a2, b2, c2);
  }
}
function ak(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a2, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$1 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$1 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$1) throw Error(p$1(160));
      Zj(f2, g2, e2);
      X$1 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$1(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
}
function dk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta$1(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        if (null === a2.stateNode) throw Error(p$1(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$1(a2, a2.return, t2);
      }
      break;
    case 4:
      ck(b2, a2);
      ek(a2);
      break;
    case 13:
      ck(b2, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$1()));
      d2 & 4 && ak(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a2), U$1 = l2) : ck(b2, a2);
      ek(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V = a2, m2 = a2.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$1(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a2; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$1(a2, a2.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$1(a2, a2.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a2) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a2) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a2);
      ek(a2);
      d2 & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a2
      ), ek(a2);
  }
}
function ek(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$1(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a2);
          Wj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
          Vj(a2, h2, g2);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b2, c2) {
  V = a2;
  ik(a2);
}
function ik(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Jj;
        var l2 = U$1;
        Jj = g2;
        if ((U$1 = k2) && !l2) for (V = e2; null !== V; ) g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V = k2) : jk(e2);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e2;
        Jj = h2;
        U$1 = l2;
      }
      kk(a2);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a2);
  }
}
function kk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci$1(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$1(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function gk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a2) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function jk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var lk = Math.ceil, mk = ua$1.ReactCurrentDispatcher, nk = ua$1.ReactCurrentOwner, ok = ua$1.ReactCurrentBatchConfig, K$1 = 0, Q = null, Y$1 = null, Z$1 = 0, fj = 0, ej = Uf(0), T$2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi$1 = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$1() {
  return 0 !== (K$1 & 6) ? B$1() : -1 !== Ak ? Ak : Ak = B$1();
}
function yi(a2) {
  if (0 === (a2.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a2 = C$2;
  if (0 !== a2) return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function gi(a2, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
  Ac(a2, c2, d2);
  if (0 === (K$1 & 2) || a2 !== Q) a2 === Q && (0 === (K$1 & 2) && (qk |= c2), 4 === T$2 && Ck(a2, Z$1)), Dk(a2, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$1() + 500, fg && jg());
}
function Dk(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === Q ? Z$1 : 0);
  if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Gk(a2, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  var c2 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c2) return null;
  var d2 = uc(a2, a2 === Q ? Z$1 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q !== a2 || Z$1 !== b2) uk = null, Gj = B$1() + 500, Kk(a2, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a2, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e2;
    null !== Y$1 ? b2 = 0 : (Q = null, Z$1 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
    if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$1()), c2;
    if (6 === b2) Ck(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc(a2, 0)) break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R$1();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Dk(a2, B$1());
  return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b2) {
  var c2 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
  a2 = Ik(a2, b2);
  2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a2;
}
function Fj(a2) {
  null === tk ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He$1(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a2, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a2) {
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  Hk();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1)) return Dk(a2, B$1()), null;
  var c2 = Ik(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B$1()), c2;
  if (6 === c2) throw Error(p$1(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Pk(a2, tk, uk);
  Dk(a2, B$1());
  return null;
}
function Qk(a2, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a2(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Gj = B$1() + 500, fg && jg());
  }
}
function Rk(a2) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = ok.transition, d2 = C$2;
  try {
    if (ok.transition = null, C$2 = 1, a2) return a2();
  } finally {
    C$2 = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1) for (c2 = Y$1.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H$2);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L$1);
        break;
      case 19:
        E(L$1);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q = a2;
  Y$1 = a2 = Pg(a2.current, null);
  Z$1 = fj = b2;
  T$2 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a2;
}
function Mk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$1 = N$2 = M$1 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        pk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na2) {
      b2 = na2;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return null === a2 ? Rh : a2;
}
function tj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2) T$2 = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z$1);
}
function Ik(a2, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Jk();
  if (Q !== a2 || Z$1 !== b2) uk = null, Kk(a2, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K$1 = c2;
  mk.current = d2;
  if (null !== Y$1) throw Error(p$1(261));
  Q = null;
  Z$1 = 0;
  return T$2;
}
function Tk() {
  for (; null !== Y$1; ) Uk(Y$1);
}
function Lk() {
  for (; null !== Y$1 && !cc(); ) Uk(Y$1);
}
function Uk(a2) {
  var b2 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Sk(a2) : Y$1 = b2;
  nk.current = null;
}
function Sk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$2 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Pk(a2, b2, c2) {
  var d2 = C$2, e2 = ok.transition;
  try {
    ok.transition = null, C$2 = 1, Wk(a2, b2, c2, d2);
  } finally {
    ok.transition = e2, C$2 = d2;
  }
  return null;
}
function Wk(a2, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p$1(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2) return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current) throw Error(p$1(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === Q && (Y$1 = Q = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$2;
    C$2 = 1;
    var h2 = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a2, c2);
    dk(c2, a2);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    hk(c2);
    dc();
    K$1 = h2;
    C$2 = g2;
    ok.transition = f2;
  } else a2.current = c2;
  vk && (vk = false, wk = a2, xk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a2, B$1());
  if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a2 = Pi$1, Pi$1 = null, a2;
  0 !== (xk & 1) && 0 !== a2.tag && Hk();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a2 = Dc(xk), b2 = ok.transition, c2 = C$2;
    try {
      ok.transition = null;
      C$2 = 16 > a2 ? 16 : a2;
      if (null === wk) var d2 = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p$1(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V = a2.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V = g2;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a2.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V = u2;
          else b: for (g2 = w2; null !== V; ) {
            h2 = V;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na2) {
              W$1(h2, h2.return, na2);
            }
            if (h2 === g2) {
              V = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V = F2;
              break b;
            }
            V = h2.return;
          }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a2);
        } catch (na2) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$2 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a2, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a2, b2, 1);
  a2 = nh(a2, b2, 1);
  b2 = R$1();
  null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag) Xk(a2, a2, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a2, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a2 = Ji(c2, a2);
        a2 = Qi(b2, a2, 1);
        b2 = nh(b2, a2, 1);
        a2 = R$1();
        null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti$1(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$1();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  Q === a2 && (Z$1 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - fk ? Kk(a2, 0) : rk |= c2);
  Dk(a2, b2);
}
function Yk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$1();
  a2 = ih(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
}
function uj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a2, c2);
}
function bk(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a2, c2);
}
var Vk;
Vk = function(a2, b2, c2) {
  if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
    dh = 0 !== (a2.flags & 131072) ? true : false;
  }
  else dh = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii$1(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a2 = Ci$1(d2, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci$1(d2.type, a2), c2);
            break a;
        }
        throw Error(p$1(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci$1(d2, e2), cj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci$1(d2, e2), hj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a2) throw Error(p$1(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a2, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$1(423)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$1(424)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
          Xi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return oj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci$1(d2, e2), Yi(a2, b2, d2, e2, c2);
    case 7:
      return Xi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He$1(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$1(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci$1(d2, b2.pendingProps), e2 = Ci$1(d2.type, e2), $i(a2, b2, d2, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci$1(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii$1(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
    case 19:
      return xj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$1(156, b2.tag));
};
function Fk(a2, b2) {
  return ac(a2, b2);
}
function $k(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new $k(a2, b2, c2, d2);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if ("function" === typeof a2) return aj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da$1) return 11;
    if (a2 === Ga$1) return 14;
  }
  return 2;
}
function Pg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Rg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2) aj(a2) && (g2 = 1);
  else if ("string" === typeof a2) g2 = 5;
  else a: switch (a2) {
    case ya$1:
      return Tg(c2.children, e2, f2, b2);
    case za:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa:
      return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
    case Ea$1:
      return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea$1, a2.lanes = f2, a2;
    case Fa$1:
      return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa$1, a2.lanes = f2, a2;
    case Ia$1:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
        case Ba$1:
          g2 = 10;
          break a;
        case Ca$1:
          g2 = 9;
          break a;
        case Da$1:
          g2 = 11;
          break a;
        case Ga$1:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$1(130, null == a2 ? a2 : typeof a2, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function pj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia$1;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function Qg(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Sg(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function al(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new al(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a2;
}
function cl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa$1, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function dl(a2) {
  if (!a2) return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p$1(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$1(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2)) return bg(a2, c2, b2);
  }
  return b2;
}
function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = dl(null);
  c2 = a2.current;
  d2 = R$1();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Dk(a2, d2);
  return a2;
}
function fl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = R$1(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = nh(e2, b2, g2);
  null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
  return g2;
}
function gl(a2) {
  a2 = a2.current;
  if (!a2.child) return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a2, b2) {
  hl(a2, b2);
  (a2 = a2.alternate) && hl(a2, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ll(a2) {
  this._internalRoot = a2;
}
ml.prototype.render = ll.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$1(409));
  fl(a2, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Rk(function() {
      fl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a2) {
  this._internalRoot = a2;
}
ml.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function pl() {
}
function ql(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = gl(g2);
        f2.call(a3);
      };
    }
    var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk();
    return g2;
  }
  for (; e2 = a2.lastChild; ) a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = gl(k2);
      h2.call(a3);
    };
  }
  var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = gl(g2);
        h2.call(a3);
      };
    }
    fl(b2, g2, a2, e2);
  } else g2 = ql(c2, b2, a2, e2, d2);
  return gl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$1()), 0 === (K$1 & 6) && (Gj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a2, 1);
        if (null !== b3) {
          var c3 = R$1();
          gi(b3, a2, 1, c3);
        }
      }), il(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = ih(a2, 134217728);
    if (null !== b2) {
      var c2 = R$1();
      gi(b2, a2, 134217728, c2);
    }
    il(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = yi(a2), c2 = ih(a2, b2);
    if (null !== c2) {
      var d2 = R$1();
      gi(c2, a2, b2, d2);
    }
    il(a2, b2);
  }
};
Hc = function() {
  return C$2;
};
Ic = function(a2, b2) {
  var c2 = C$2;
  try {
    return C$2 = a2, b2();
  } finally {
    C$2 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$1(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua$1.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a2) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$1(200));
  return cl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!nl(a2)) throw Error(p$1(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2) return null;
  if (1 === a2.nodeType) return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render) throw Error(p$1(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$1(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Rk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!nl(a2)) throw Error(p$1(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!ol(a2)) throw Error(p$1(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$1(200));
  if (null == a2 || void 0 === a2._reactInternals) throw Error(p$1(38));
  return rl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    this.#provider = provider;
  }
  setTimeout(callback, delay) {
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_2, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (a2 && b2 && typeof a2 === "object" && typeof b2 === "object") {
    return Object.keys(b2).every((key) => partialMatchKey(a2[key], b2[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a2, b2) {
  if (a2 === b2) {
    return a2;
  }
  const array = isPlainArray(a2) && isPlainArray(b2);
  if (!array && !(isPlainObject(a2) && isPlainObject(b2))) return b2;
  const aItems = array ? a2 : Object.keys(a2);
  const aSize = aItems.length;
  const bItems = array ? b2 : Object.keys(b2);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i27 = 0; i27 < bSize; i27++) {
    const key = array ? i27 : bItems[i27];
    const aItem = a2[key];
    const bItem = b2[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i27 < aSize : hasOwn.call(a2, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v2 = replaceEqualDeep(aItem, bItem);
    copy[key] = v2;
    if (v2 === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a2 : copy;
}
function shallowEqualObjects(a2, b2) {
  if (!b2 || Object.keys(a2).length !== Object.keys(b2).length) {
    return false;
  }
  for (const key in a2) {
    if (a2[key] !== b2[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o2) {
  if (!hasObjectPrototype(o2)) {
    return false;
  }
  const ctor = o2.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o2) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn2) => {
      notifyFn = fn2;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn2) => {
      batchNotifyFn = fn2;
    },
    setScheduler: (fn2) => {
      scheduleFn = fn2;
    }
  };
}
var notifyManager = createNotifyManager();
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      config.onCancel?.(error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved()) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};
var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState$1(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState$1(this.options);
      if (defaultState.data !== void 0) {
        this.setData(defaultState.data, {
          updatedAt: defaultState.dataUpdatedAt,
          manual: true
        });
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.observers.find((x2) => x2.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x2) => x2.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x2) => x2 !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#retryer?.status() !== "rejected") {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x2) => x2.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    this.#retryer = createRetryer({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        if (false) ;
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      this.#cache.config.onSuccess?.(data, this);
      this.#cache.config.onSettled?.(
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      this.#cache.config.onError?.(
        error,
        this
      );
      this.#cache.config.onSettled?.(
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var QueryObserver = class extends Subscribable {
  constructor(client2, options) {
    super();
    this.options = options;
    this.#client = client2;
    this.#selectError = null;
    this.#currentThenable = pendingThenable();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked?.(key);
        if (key === "promise" && !this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
          this.#currentThenable.reject(
            new Error(
              "experimental_prefetchInRender feature flag is not enabled"
            )
          );
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = resolveStaleTime(
      this.options.staleTime,
      this.#currentQuery
    );
    if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
      return;
    }
    const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = timeoutManager.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = timeoutManager.setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      timeoutManager.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      timeoutManager.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = replaceData(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = pendingThenable();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
var Mutation = class extends Removable {
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x2) => x2 !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this
        );
        const context = await this.options.onMutate?.(variables);
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this
      );
      await this.options.onSuccess?.(data, variables, this.state.context);
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this
      );
      await this.options.onSettled?.(data, null, variables, this.state.context);
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client2, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client2.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m2) => m2.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m2) => m2 !== mutation && m2.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x2) => x2.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}
var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client2, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client: client2,
        queryKey,
        queryHash,
        options: client2.defaultQueryOptions(options),
        state,
        defaultOptions: client2.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
var QueryClientContext = reactExports.createContext(
  void 0
);
var useQueryClient = (queryClient2) => {
  const client2 = reactExports.useContext(QueryClientContext);
  if (!client2) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client2;
};
var QueryClientProvider = ({
  client: client2,
  children
}) => {
  reactExports.useEffect(() => {
    client2.mount();
    return () => {
      client2.unmount();
    };
  }, [client2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client2, children });
};
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp2 = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp2(originalStaleTime(...args)) : clamp2(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient2) {
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client2 = useQueryClient();
  const defaultedOptions = client2.defaultQueryOptions(options);
  client2.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client2.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client2,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client2.getQueryCache().get(defaultedOptions.queryHash),
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  client2.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      client2.getQueryCache().get(defaultedOptions.queryHash)?.promise
    );
    promise?.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient2) {
  return useBaseQuery(options, QueryObserver);
}
var te = class extends Error {
  name = this.constructor.name;
}, W = class extends Error {
  name = this.constructor.name;
};
var pt = Symbol(), mt = Symbol(), Fn = Symbol(), Sn = Symbol(), Nn = Symbol(), gt = Symbol(), yt = Symbol(), o = { initialState: Fn, marshal: Sn, unmarshal: Nn }, Ue = "INTERNAL_", Oe = `${Ue}getAiServiceInfo`, ze = `${Ue}sendTrackingEvent`, $$1 = `${Ue}getHTMLForNode`, j$1 = `${Ue}setHTMLForNode`;
function Ge(i27) {
  return i27 !== void 0;
}
function oi(i27) {
  return i27 === void 0;
}
function p(i27) {
  return i27 === null;
}
function ri(i27) {
  return i27 !== null;
}
function ie(i27) {
  return i27 === true || i27 === false;
}
function u$1(i27) {
  return typeof i27 == "string";
}
function ne(i27) {
  return typeof i27 == "function";
}
function f$1(i27) {
  return typeof i27 == "object" && i27 !== null && !Array.isArray(i27);
}
function Ke(i27) {
  if (typeof i27 != "object" || i27 === null) return false;
  let e2 = Object.getPrototypeOf(i27);
  return e2 === null || e2 === Object.prototype;
}
function ht(i27) {
  return Array.isArray(i27);
}
function He(i27, e2) {
  throw new Error(i27 ? `Unexpected value: ${i27}` : "Application entered invalid state");
}
function l(i27, ...e2) {
  if (i27) return;
  let t2 = Error("Assertion Error" + (e2.length > 0 ? ": " + e2.join(" ") : ""));
  if (t2.stack) try {
    let n2 = t2.stack.split(`
`);
    n2[1]?.includes("assert") ? (n2.splice(1, 1), t2.stack = n2.join(`
`)) : n2[0]?.includes("assert") && (n2.splice(0, 1), t2.stack = n2.join(`
`));
  } catch {
  }
  throw t2;
}
function g$1(i27) {
  for (let e2 of Reflect.ownKeys(i27)) {
    let t2 = i27[e2];
    !t2 || typeof t2 != "object" && !ne(t2) || g$1(t2);
  }
  return Object.freeze(i27);
}
function si(i27, e2) {
  if (i27 === e2) return true;
  if (i27.length !== e2.length) return false;
  for (let t2 = 0; t2 < i27.length; t2++) if (i27[t2] !== e2[t2]) return false;
  return true;
}
function li(i27) {
  return [i27.slice(0, -1), i27.at(-1)];
}
var s$1 = "__class";
var ae = class i {
  id;
  url;
  extension;
  constructor(e2) {
    this.url = e2.url, this.id = e2.id, this.extension = e2.extension;
  }
  static [o.unmarshal](e2, t2) {
    return new i(t2);
  }
  [o.marshal]() {
    return { [s$1]: "FileAsset", id: this.id, url: this.url, extension: this.extension };
  }
};
var M = class i2 {
  id;
  url;
  thumbnailUrl;
  altText;
  resolution;
  #e;
  #t;
  constructor(e2, t2) {
    this.#t = e2, this.url = t2.url, this.id = t2.id, this.thumbnailUrl = t2.thumbnailUrl, this.altText = t2.altText, this.resolution = t2.resolution;
  }
  static [o.unmarshal](e2, t2) {
    return new i2(e2, t2);
  }
  [o.marshal]() {
    return { [s$1]: "ImageAsset", id: this.id, url: this.url, thumbnailUrl: this.thumbnailUrl, altText: this.altText, resolution: this.resolution };
  }
  cloneWithAttributes({ altText: e2, resolution: t2 }) {
    return new i2(this.#t, { [s$1]: "ImageAsset", id: this.id, url: this.url, thumbnailUrl: this.thumbnailUrl, altText: e2 ?? this.altText, resolution: t2 ?? this.resolution });
  }
  async measure() {
    return Wn(this.url);
  }
  async getData() {
    if (this.#e && this.#e.bytes.length > 0) return this.#e;
    let e2 = await this.#t.invoke("getImageData", { id: this.id, resolution: this.resolution });
    if (!e2) throw new Error("Failed to load image data");
    return this.#e = e2, e2;
  }
  async loadBitmap() {
    let { mimeType: e2, bytes: t2 } = await this.getData(), n2 = new Blob([t2], { type: e2 });
    return createImageBitmap(n2);
  }
  async loadImage() {
    let e2 = await this.getData(), t2 = URL.createObjectURL(new Blob([e2.bytes]));
    return new Promise((n2, a2) => {
      let r2 = new Image();
      r2.onload = () => n2(r2), r2.onerror = () => a2(), r2.src = t2;
    });
  }
};
function w$1(i27) {
  return i27.type === "bytes" ? [i27.bytes.buffer] : [];
}
function An(i27) {
  if (!f$1(i27)) return false;
  let e2 = "bytes", t2 = "mimeType";
  return !(!(e2 in i27) || !(t2 in i27) || !(i27[e2] instanceof Uint8Array) || !u$1(i27[t2]));
}
async function oe(i27) {
  if (i27 instanceof File) return bt(i27);
  let e2 = await ui(i27.image);
  return { name: i27.name, altText: i27.altText, resolution: i27.resolution, preferredImageRendering: i27.preferredImageRendering, ...e2 };
}
async function ft(i27) {
  if (i27 instanceof File) return bt(i27);
  let e2 = await ui(i27.file);
  return { name: i27.name, ...e2 };
}
async function ui(i27) {
  return i27 instanceof File ? bt(i27) : An(i27) ? { type: "bytes", mimeType: i27.mimeType, bytes: i27.bytes } : { type: "url", url: i27 };
}
function Ct(i27) {
  return Promise.all(i27.map(oe));
}
async function bt(i27) {
  return new Promise((e2, t2) => {
    let n2 = new FileReader();
    n2.onload = (a2) => {
      let r2 = i27.type, d2 = a2.target?.result;
      if (!d2 || !(d2 instanceof ArrayBuffer)) {
        t2(new Error("Failed to read file, arrayBuffer is null"));
        return;
      }
      let y2 = new Uint8Array(d2);
      e2({ bytes: y2, mimeType: r2, type: "bytes", name: i27.name });
    }, n2.onerror = (a2) => {
      t2(a2);
    }, n2.readAsArrayBuffer(i27);
  });
}
async function Wn(i27) {
  let e2 = i27 instanceof File, t2 = e2 ? URL.createObjectURL(i27) : i27, n2 = new Image();
  return n2.crossOrigin = "anonymous", new Promise((a2, r2) => {
    n2.onload = () => {
      a2({ width: n2.naturalWidth, height: n2.naturalHeight });
    }, n2.onerror = (d2) => {
      r2(d2);
    }, n2.src = t2;
  }).finally(() => {
    e2 && URL.revokeObjectURL(t2);
  });
}
var $e = class {
};
var En = "unsupported", re = class i3 extends $e {
  type = En;
  #e;
  constructor(e2) {
    super(), this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i3(t2);
  }
  [o.marshal]() {
    return this.#e;
  }
};
var v$1 = class i4 {
  selector;
  family;
  weight;
  style;
  constructor(e2) {
    this.selector = e2.selector, this.family = e2.family, this.weight = e2.weight, this.style = e2.style;
  }
  static [o.unmarshal](e2, t2) {
    let n2 = ci.get(t2.selector);
    if (n2) return n2;
    let a2 = new i4(t2);
    return ci.set(t2.selector, a2), a2;
  }
  [o.marshal]() {
    return { [s$1]: "Font", selector: this.selector, family: this.family, weight: this.weight, style: this.style };
  }
}, ci = /* @__PURE__ */ new Map();
var Ln = "LinearGradient", Un = "RadialGradient", On = "ConicGradient", q = class {
  #e;
  get stops() {
    return this.#e.stops;
  }
  constructor(e2) {
    this.#e = e2;
  }
  cloneWithAttributes(e2) {
    let t2 = this.constructor;
    return new t2({ ...this.#e, ...e2 });
  }
}, se = class i5 extends q {
  [s$1] = Ln;
  #e;
  get angle() {
    return this.#e.angle;
  }
  constructor(e2) {
    super(e2), this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i5({ ...t2, stops: c$1(e2, t2.stops) });
  }
  [o.marshal]() {
    return D$1({ ...this.#e, [s$1]: this[s$1] });
  }
  toCSS() {
    let e2 = this.#e.stops.map((t2) => (l(u$1(t2.color), "ColorStyle not supported yet"), `${t2.color} ${t2.position * 100}%`)).join(", ");
    return `linear-gradient(${this.angle}deg, ${e2})`;
  }
}, le = class i6 extends q {
  [s$1] = Un;
  #e;
  get width() {
    return this.#e.width;
  }
  get height() {
    return this.#e.height;
  }
  get x() {
    return this.#e.x;
  }
  get y() {
    return this.#e.y;
  }
  constructor(e2) {
    super(e2), this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i6({ ...t2, stops: c$1(e2, t2.stops) });
  }
  [o.marshal]() {
    return D$1({ ...this.#e, [s$1]: this[s$1] });
  }
  toCSS() {
    let e2 = this.stops.map((t2, n2) => {
      l(u$1(t2.color), "ColorStyle not supported yet");
      let a2 = this.stops[n2 + 1], r2 = t2.position === 1 && a2?.position === 1 ? t2.position - 1e-4 : t2.position;
      return `${t2.color} ${r2 * 100}%`;
    }).join(", ");
    return `radial-gradient(${this.width} ${this.height} at ${this.x} ${this.y}, ${e2})`;
  }
}, de = class i7 extends q {
  [s$1] = On;
  #e;
  get angle() {
    return this.#e.angle;
  }
  get x() {
    return this.#e.x;
  }
  get y() {
    return this.#e.y;
  }
  constructor(e2) {
    super(e2), this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i7({ ...t2, stops: c$1(e2, t2.stops) });
  }
  [o.marshal]() {
    return D$1({ ...this.#e, [s$1]: this[s$1] });
  }
  toCSS() {
    let e2 = this.stops.map((t2) => (l(u$1(t2.color), "ColorStyle not supported yet"), `${t2.color} ${t2.position * 360}deg`)).join(", ");
    return `conic-gradient(from ${this.angle}deg at ${this.x} ${this.y}, ${e2})`;
  }
};
var zn = "ColorStyle";
function je(i27) {
  return f$1(i27) ? i27[s$1] === zn : false;
}
var L = class i8 {
  id;
  name;
  path;
  light;
  dark;
  #e;
  constructor(e2, t2) {
    this.id = t2.id, this.name = t2.name, this.light = t2.light, this.dark = t2.dark, this.path = t2.path, this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i8(e2, t2);
  }
  [o.marshal]() {
    return { [s$1]: "ColorStyle", id: this.id, name: this.name, light: this.light, dark: this.dark, path: this.path };
  }
  async setAttributes(e2) {
    let t2 = await this.#e.invoke("setColorStyleAttributes", this.id, e2);
    return t2 ? new i8(this.#e, t2) : null;
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
  async remove() {
    return this.#e.invoke("removeColorStyle", this.id);
  }
};
function X(i27) {
  return i27 instanceof L;
}
var ue = class i9 {
  id;
  name;
  path;
  tag;
  font;
  boldFont;
  italicFont;
  boldItalicFont;
  color;
  transform;
  alignment;
  decoration;
  decorationColor;
  decorationThickness;
  decorationStyle;
  decorationSkipInk;
  decorationOffset;
  balance;
  breakpoints;
  minWidth;
  fontSize;
  letterSpacing;
  lineHeight;
  paragraphSpacing;
  #e;
  constructor(e2, t2) {
    this.id = t2.id, this.name = t2.name, this.path = t2.path, this.tag = t2.tag, this.font = v$1[o.unmarshal](e2, t2.font), this.boldFont = t2.boldFont && v$1[o.unmarshal](e2, t2.boldFont), this.italicFont = t2.italicFont && v$1[o.unmarshal](e2, t2.italicFont), this.boldItalicFont = t2.boldItalicFont && v$1[o.unmarshal](e2, t2.boldItalicFont), this.color = je(t2.color) ? L[o.unmarshal](e2, t2.color) : t2.color, this.transform = t2.transform, this.alignment = t2.alignment, this.decoration = t2.decoration, this.decorationColor = je(t2.decorationColor) ? L[o.unmarshal](e2, t2.decorationColor) : t2.decorationColor, this.decorationThickness = t2.decorationThickness, this.decorationStyle = t2.decorationStyle, this.decorationSkipInk = t2.decorationSkipInk, this.decorationOffset = t2.decorationOffset, this.balance = t2.balance, this.breakpoints = t2.breakpoints, this.minWidth = t2.minWidth, this.fontSize = t2.fontSize, this.letterSpacing = t2.letterSpacing, this.lineHeight = t2.lineHeight, this.paragraphSpacing = t2.paragraphSpacing, this.#e = e2;
  }
  static [o.unmarshal](e2, t2) {
    return new i9(e2, t2);
  }
  [o.marshal]() {
    return { [s$1]: "TextStyle", id: this.id, name: this.name, path: this.path, tag: this.tag, font: this.font[o.marshal](), boldFont: this.boldFont?.[o.marshal]() ?? null, italicFont: this.italicFont?.[o.marshal]() ?? null, boldItalicFont: this.boldItalicFont?.[o.marshal]() ?? null, color: X(this.color) ? this.color[o.marshal]() : this.color, transform: this.transform, alignment: this.alignment, decoration: this.decoration, decorationColor: X(this.decorationColor) ? this.decorationColor[o.marshal]() : this.decorationColor, decorationThickness: this.decorationThickness, decorationStyle: this.decorationStyle, decorationSkipInk: this.decorationSkipInk, decorationOffset: this.decorationOffset, balance: this.balance, breakpoints: this.breakpoints, minWidth: this.minWidth, fontSize: this.fontSize, letterSpacing: this.letterSpacing, lineHeight: this.lineHeight, paragraphSpacing: this.paragraphSpacing };
  }
  async setAttributes(e2) {
    let t2 = await this.#e.invoke("setTextStyleAttributes", this.id, e2);
    return t2 ? new i9(this.#e, t2) : null;
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
  async remove() {
    return this.#e.invoke("removeTextStyle", this.id);
  }
};
var C$1 = class C {
  #e;
  #t;
  get nodeId() {
    return this.#t.nodeId;
  }
  get nodeType() {
    return this.#t.nodeType;
  }
  get id() {
    return this.#t.id;
  }
  get name() {
    return this.#t.name;
  }
  get description() {
    return this.#t.description ?? null;
  }
  constructor(e2, t2) {
    this.#e = e2, this.#t = t2;
  }
  async setAttributes(e2) {
    let t2 = await this.#e.invoke("updateVariable", this.nodeId, this.id, { ...e2, type: this.type });
    if (p(t2)) return null;
    let n2 = this.constructor;
    return new n2(this.#e, t2);
  }
  async remove() {
    await this.#e.invoke("removeVariables", this.nodeId, [this.id]);
  }
}, b$1 = "Variable";
function x$1(i27) {
  let e2 = i27.at(0);
  return l(!oi(e2)), `${e2.toLowerCase()}${i27.slice(1, -b$1.length)}`;
}
var Kn = `Boolean${b$1}`, Hn = x$1(Kn), ce = class i10 extends C$1 {
  type = Hn;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i10(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, $n = `Number${b$1}`, jn = x$1($n), pe = class i11 extends C$1 {
  type = jn;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i11(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, qn = `String${b$1}`, Xn = x$1(qn), me = class i12 extends C$1 {
  type = Xn;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i12(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, Yn = `FormattedText${b$1}`, Zn = x$1(Yn), ge = class i13 extends C$1 {
  type = Zn;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i13(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, _n = `Enum${b$1}`, Jn = x$1(_n), R = class i14 {
  #e;
  #t;
  #i;
  #n;
  get id() {
    return this.#n.id;
  }
  get name() {
    return this.#n.name;
  }
  get nameByLocale() {
    return this.#n.nameByLocale;
  }
  constructor(e2, t2, n2, a2) {
    this.#e = e2, this.#t = t2, this.#i = n2, this.#n = a2;
  }
  async setAttributes(e2) {
    let t2 = await this.#e.invoke("updateEnumCase", this.#t, this.#i, this.id, e2);
    return t2 ? new i14(this.#e, this.#t, this.#i, t2) : null;
  }
  async remove() {
    await this.#e.invoke("removeEnumCase", this.#t, this.#i, this.id);
  }
}, ye = class i15 extends C$1 {
  type = Jn;
  #e;
  #t;
  #i;
  get cases() {
    return this.#i || (this.#i = g$1(this.#t.cases.map((e2) => new R(this.#e, this.nodeId, this.id, e2)))), this.#i;
  }
  constructor(e2, t2) {
    super(e2, t2), this.#e = e2, this.#t = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i15(e2, t2);
  }
  [o.marshal]() {
    return this.#t;
  }
  async addCase(e2) {
    let t2 = await this.#e.invoke("addEnumCase", this.nodeId, this.id, e2);
    return t2 ? new R(this.#e, this.nodeId, this.id, t2) : null;
  }
  async setCaseOrder(e2) {
    await this.#e.invoke("setEnumCaseOrder", this.nodeId, this.id, e2);
  }
}, Qn = `Color${b$1}`, ea = x$1(Qn), he = class i16 extends C$1 {
  type = ea;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i16(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, ta = `Image${b$1}`, ia = x$1(ta), fe = class i17 extends C$1 {
  type = ia;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i17(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, na = `File${b$1}`, aa = x$1(na), Ce = class i18 extends C$1 {
  type = aa;
  #e;
  get allowedFileTypes() {
    return this.#e.allowedFileTypes;
  }
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i18(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, oa = `Link${b$1}`, ra = x$1(oa), be = class i19 extends C$1 {
  type = ra;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i19(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, sa = `Date${b$1}`, la = x$1(sa), Te = class i20 extends C$1 {
  type = la;
  #e;
  get displayTime() {
    return this.#e.displayTime;
  }
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i20(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, da = `Border${b$1}`, ua = x$1(da), Ie = class i21 extends C$1 {
  type = ua;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i21(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
}, ca = `Unsupported${b$1}`, pa = x$1(ca), xe = class i22 extends C$1 {
  type = pa;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2;
  }
  static [o.unmarshal](e2, t2) {
    return new i22(e2, t2);
  }
  [o.marshal]() {
    return this.#e;
  }
};
function ga(i27) {
  return f$1(i27) && o.marshal in i27;
}
function D$1(i27) {
  if (ga(i27)) return i27[o.marshal]();
  if (ht(i27)) return i27.map(D$1);
  if (Ke(i27)) {
    let e2 = {};
    for (let t2 of Object.keys(i27)) e2[t2] = D$1(i27[t2]);
    return e2;
  }
  return i27;
}
var fi = { ColorStyle: L, ConicGradient: de, FileAsset: ae, Font: v$1, ImageAsset: M, LinearGradient: se, RadialGradient: le, TextStyle: ue, BooleanVariable: ce, BorderVariable: Ie, ColorVariable: he, DateVariable: Te, EnumVariable: ye, FileVariable: Ce, FormattedTextVariable: ge, ImageVariable: fe, LinkVariable: be, NumberVariable: pe, StringVariable: me, UnsupportedVariable: xe, UnsupportedComputedValue: re };
function ya(i27) {
  return Ke(i27) && u$1(i27[s$1]) && i27[s$1] in fi;
}
function c$1(i27, e2) {
  if (ya(e2)) return fi[e2[s$1]][o.unmarshal](i27, e2);
  if (ht(e2)) return e2.map((t2) => c$1(i27, t2));
  if (Ke(e2)) {
    let t2 = {};
    for (let n2 of Object.keys(e2)) t2[n2] = c$1(i27, e2[n2]);
    return t2;
  }
  return e2;
}
function ha(i27) {
  return i27.type === "separator";
}
function qe(i27, e2) {
  let t2 = [];
  for (let n2 of i27) {
    if (ha(n2)) {
      t2.push(n2);
      continue;
    }
    let { onAction: a2, ...r2 } = n2, d2 = r2;
    if (n2.onAction) {
      let y2 = Math.random();
      e2.set(y2, n2.onAction), d2.actionId = y2;
    }
    n2.submenu && (d2.submenu = qe(n2.submenu, e2)), t2.push(d2);
  }
  return t2;
}
var Xe = "type", Ci = { [Xe]: "pluginReadySignal" }, Ca = "pluginReadyResponse";
var ba = { methodResponse: true, subscriptionMessage: true, permissionUpdate: true, menuAction: true };
function bi(i27) {
  return f$1(i27) && u$1(i27[Xe]) && i27[Xe] in ba;
}
function Ti(i27) {
  return f$1(i27) && i27[Xe] === Ca;
}
var S = class {
  #e;
  #t;
  #i;
  get id() {
    return this.#i.id;
  }
  get name() {
    return this.#i.name;
  }
  constructor(e2, t2, n2) {
    this.#e = e2, this.#t = t2, this.#i = n2;
  }
  async setAttributes(e2) {
    let t2 = { ...e2, type: this.type, id: this.id }, [n2] = await this.#e.invoke("addCollectionFields2", this.#t, [t2]);
    if (l(Ge(n2)), p(n2)) return null;
    l(n2.type === this.type);
    let a2 = this.constructor;
    return new a2(this.#e, this.#t, n2);
  }
  async remove() {
    await this.#e.invoke("removeCollectionFields", this.#t, [this.id]);
  }
}, F = class extends S {
  #e;
  get required() {
    return this.#e.required;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
}, Ye = class extends S {
  type = Pt;
}, Ze = class extends S {
  type = Ft;
}, _e = class extends S {
  type = Dt;
}, Je = class extends F {
  type = St;
  #e;
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
  get basedOn() {
    return this.#e.basedOn;
  }
}, Qe = class extends F {
  type = Nt;
}, Pe = class extends F {
  type = vt;
}, et = class extends F {
  type = kt;
}, tt = class extends F {
  type = At;
  #e;
  get displayTime() {
    return this.#e.displayTime;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
}, it = class extends S {
  type = Rt;
}, Fe = class extends S {
  type = Bt;
}, nt = class extends F {
  type = Wt;
  #e;
  get allowedFileTypes() {
    return this.#e.allowedFileTypes;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
}, at = class extends S {
  type = Et;
  #e;
  #t;
  #i;
  #n;
  get cases() {
    return this.#n || (this.#n = this.#i.cases.map((e2) => new R(this.#e, this.#t, this.id, e2)), g$1(this.#n)), this.#n;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = e2, this.#t = t2, this.#i = n2;
  }
  async addCase(e2) {
    let t2 = await this.#e.invoke("addEnumCase", this.#t, this.id, e2);
    return t2 ? new R(this.#e, this.#t, this.id, t2) : null;
  }
  async setCaseOrder(e2) {
    await this.#e.invoke("setEnumCaseOrder", this.#t, this.id, e2);
  }
}, ot = class extends F {
  type = Mt;
  #e;
  get collectionId() {
    return this.#e.collectionId;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
}, rt = class extends F {
  type = wt;
  #e;
  get collectionId() {
    return this.#e.collectionId;
  }
  constructor(e2, t2, n2) {
    super(e2, t2, n2), this.#e = n2;
  }
}, It = class extends F {
  type = Vt;
  fields;
  constructor(e2, t2, n2) {
    super(e2, t2, n2);
    let a2 = n2.fields[0];
    this.fields = [new Pe(e2, t2, a2)];
  }
};
function xt(i27, e2, t2) {
  return i27.map((n2) => {
    switch (n2.type) {
      case Pt:
        return new Ye(e2, t2, n2);
      case Ft:
        return new Ze(e2, t2, n2);
      case Dt:
        return new _e(e2, t2, n2);
      case St:
        return new Je(e2, t2, n2);
      case Nt:
        return new Qe(e2, t2, n2);
      case vt:
        return new Pe(e2, t2, n2);
      case kt:
        return new et(e2, t2, n2);
      case At:
        return new tt(e2, t2, n2);
      case Rt:
        return new it(e2, t2, n2);
      case Bt:
        return new Fe(e2, t2, n2);
      case Wt:
        return new nt(e2, t2, n2);
      case Et:
        return new at(e2, t2, n2);
      case Mt:
        return new ot(e2, t2, n2);
      case wt:
        return new rt(e2, t2, n2);
      case Vt:
        return new It(e2, t2, n2);
      default:
        return new Fe(e2, t2, n2);
    }
  });
}
var Ii = "action";
function Ia(i27) {
  return !!i27 && Ii in i27 && u$1(i27[Ii]);
}
function xi(i27) {
  return Object.keys(i27).reduce((e2, t2) => {
    let n2 = i27[t2];
    return Ia(n2) && (e2[t2] = n2), e2;
  }, {});
}
var xa = { array: false, boolean: false, collectionReference: false, color: false, date: false, enum: false, file: false, formattedText: false, image: true, link: false, multiCollectionReference: false, number: false, string: false, unsupported: false };
function Pa(i27) {
  return xa[i27];
}
function Fa(i27) {
  return Pa(i27.type);
}
var Pt = "boolean", Ft = "color", Dt = "number", St = "string", Nt = "formattedText", vt = "image", Vt = "array", kt = "link", At = "date", Wt = "file", Et = "enum", Mt = "collectionReference", wt = "multiCollectionReference", Rt = "divider", Bt = "unsupported";
function Da(i27) {
  return i27.map((e2) => {
    if (e2.type !== "enum") return e2;
    let t2 = e2.cases.map((n2) => {
      let a2 = n2.nameByLocale ? xi(n2.nameByLocale) : void 0;
      return { ...n2, nameByLocale: a2 };
    });
    return { ...e2, cases: t2 };
  });
}
function Pi(i27, e2) {
  let t2 = {};
  for (let n2 in i27) {
    let a2 = i27[n2];
    if (!a2) continue;
    if (a2.type !== "array") {
      t2[n2] = c$1(e2, a2);
      continue;
    }
    let r2 = a2.value.map((d2) => {
      let y2 = Pi(d2.fieldData, e2), we2 = {};
      for (let k2 in y2) {
        let A2 = y2[k2];
        l(A2 && Fa(A2), "Unsupported array item field data entry"), we2[k2] = A2;
      }
      return { ...d2, fieldData: we2 };
    });
    t2[n2] = { ...a2, value: r2 };
  }
  return t2;
}
var Y = class {
  id;
  name;
  readonly;
  managedBy;
  #e;
  constructor(e2, t2) {
    this.id = e2.id, this.name = e2.name, this.readonly = e2.readonly, l(e2.managedBy !== "user", "Managed Collection can only be managed by a plugin"), this.managedBy = e2.managedBy, this.#e = t2, g$1(this);
  }
  async getItemIds() {
    return this.#e.invoke("getManagedCollectionItemIds", this.id);
  }
  async setItemOrder(e2) {
    return this.#e.invoke("setManagedCollectionItemOrder", this.id, e2);
  }
  async getFields() {
    return this.#e.invoke("getManagedCollectionFields2", this.id);
  }
  async setFields(e2) {
    let t2 = Da(e2);
    return this.#e.invoke("setManagedCollectionFields", this.id, t2);
  }
  async addItems(e2) {
    return this.#e.invoke("addManagedCollectionItems2", this.id, e2);
  }
  async removeItems(e2) {
    return this.#e.invoke("removeManagedCollectionItems", this.id, e2);
  }
  async setAsActive() {
    return this.#e.invoke("setActiveCollection", this.id);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
  async navigateTo(e2) {
    return this.#e.invoke("navigateTo", this.id, e2);
  }
}, U = class {
  id;
  name;
  slugFieldName;
  slugFieldBasedOn;
  readonly;
  managedBy;
  #e;
  constructor(e2, t2) {
    this.id = e2.id, this.name = e2.name, this.slugFieldName = e2.slugFieldName, this.slugFieldBasedOn = e2.slugFieldBasedOn, this.readonly = e2.readonly, this.managedBy = e2.managedBy, this.#e = t2, g$1(this);
  }
  async setItemOrder(e2) {
    return this.#e.invoke("setCollectionItemOrder", this.id, e2);
  }
  async getFields() {
    let e2 = await this.#e.invoke("getCollectionFields2", this.id, true);
    return xt(e2, this.#e, this.id);
  }
  async addFields(e2) {
    let t2 = await this.#e.invoke("addCollectionFields2", this.id, e2);
    return l(t2.every(ri)), xt(t2, this.#e, this.id);
  }
  async removeFields(e2) {
    return this.#e.invoke("removeCollectionFields", this.id, e2);
  }
  async setFieldOrder(e2) {
    return this.#e.invoke("setCollectionFieldOrder", this.id, e2);
  }
  async getItems() {
    return (await this.#e.invoke("getCollectionItems2", this.id)).map((t2) => new De(t2, this.#e));
  }
  async addItems(e2) {
    await this.#e.invoke("addCollectionItems2", this.id, e2);
  }
  async removeItems(e2) {
    return this.#e.invoke("removeCollectionItems", e2);
  }
  async setAsActive() {
    return this.#e.invoke("setActiveCollection", this.id);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
  async navigateTo(e2) {
    return this.#e.invoke("navigateTo", this.id, e2);
  }
}, De = class i23 {
  id;
  nodeId;
  slug;
  slugByLocale;
  draft;
  fieldData;
  #e;
  constructor(e2, t2) {
    let n2 = Pi(e2.fieldData, t2);
    this.id = e2.externalId ?? e2.nodeId, this.nodeId = e2.nodeId, this.slug = e2.slug, this.slugByLocale = e2.slugByLocale, this.draft = e2.draft ?? false, this.fieldData = n2, this.#e = t2, g$1(this);
  }
  async remove() {
    return this.#e.invoke("removeCollectionItems", [this.id]);
  }
  async setAttributes(e2) {
    let t2 = await this.#e.invoke("setCollectionItemAttributes2", this.id, e2);
    return t2 ? new i23(t2, this.#e) : null;
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
  async navigateTo(e2) {
    return this.#e.invoke("navigateTo", this.nodeId, e2);
  }
};
var en = "isVariant";
function an(i27) {
  if (!(en in i27)) return false;
  let e2 = i27[en];
  return ie(e2);
}
function Lt(i27) {
  return an(i27) ? i27.isVariant : false;
}
function on(i27) {
  return !an(i27) || !Lt(i27) ? false : !p(i27.gesture);
}
var tn = "isBreakpoint";
function Na(i27) {
  if (!(tn in i27)) return false;
  let e2 = i27[tn];
  return ie(e2);
}
function rn(i27) {
  return Na(i27) ? i27.isBreakpoint : false;
}
var P$1 = class P {
  id;
  originalId;
  #e;
  constructor(e2, t2) {
    this.id = e2.id, this.originalId = e2.originalId ?? null, this.#e = t2;
  }
  get isReplica() {
    return this.originalId !== null;
  }
  async remove() {
    return this.#e.invoke("removeNodes2", [this.id]);
  }
  async select() {
    return this.#e.invoke("setSelection", [this.id]);
  }
  async clone() {
    if (this[s$1] === "UnknownNode") throw Error("Can not clone unknown node");
    return this.#e.cloneNode(this.id);
  }
  async setAttributes(e2) {
    if (this[s$1] === "UnknownNode") throw Error("Can not set attributes on unknown node");
    return this.#e.setAttributes(this.id, e2);
  }
  async getRect() {
    return this.#e.invoke("getRect", this.id);
  }
  async zoomIntoView(e2) {
    return this.#e.invoke("zoomIntoView", [this.id], e2);
  }
  async navigateTo(e2) {
    return this.#e.invoke("navigateTo", this.id, e2);
  }
  async getParent() {
    return this.#e.getParent(this.id);
  }
  async getChildren() {
    return O(this) ? Promise.resolve([]) : this.#e.getChildren(this.id);
  }
  async getNodesWithType(e2) {
    return O(this) ? Promise.resolve([]) : (await this.#e.invoke("getNodesWithType", this.id, e2)).map((n2) => m$1(n2, this.#e));
  }
  async getNodesWithAttribute(e2) {
    return O(this) ? Promise.resolve([]) : (await this.#e.invoke("getNodesWithAttribute", this.id, e2)).map((n2) => m$1(n2, this.#e));
  }
  async getNodesWithAttributeSet(e2) {
    return O(this) ? Promise.resolve([]) : (await this.#e.invoke("getNodesWithAttributeSet", this.id, e2)).map((n2) => m$1(n2, this.#e));
  }
  async *walk() {
    if (yield this, !O(this)) for (let e2 of await this.getChildren()) yield* e2.walk();
  }
  async getPluginData(e2) {
    return this.#e.invoke("getPluginDataForNode", this.id, e2);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginDataForNode", this.id, e2, t2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeysForNode", this.id);
  }
}, N$1 = class N extends P$1 {
  [s$1] = "FrameNode";
  name;
  visible;
  locked;
  backgroundColor;
  backgroundImage;
  backgroundGradient;
  rotation;
  opacity;
  borderRadius;
  border;
  imageRendering;
  position;
  top;
  right;
  bottom;
  left;
  centerX;
  centerY;
  width;
  height;
  maxWidth;
  minWidth;
  maxHeight;
  minHeight;
  aspectRatio;
  zIndex;
  link;
  linkOpenInNewTab;
  overflow;
  overflowX;
  overflowY;
  layout;
  gap;
  padding;
  stackDirection;
  stackDistribution;
  stackAlignment;
  stackWrapEnabled;
  gridColumnCount;
  gridRowCount;
  gridAlignment;
  gridColumnWidthType;
  gridColumnWidth;
  gridColumnMinWidth;
  gridRowHeightType;
  gridRowHeight;
  gridItemFillCellWidth;
  gridItemFillCellHeight;
  gridItemHorizontalAlignment;
  gridItemVerticalAlignment;
  gridItemColumnSpan;
  gridItemRowSpan;
  isVariant;
  isPrimaryVariant;
  isBreakpoint;
  isPrimaryBreakpoint;
  inheritsFromId;
  gesture;
  constructor(e2, t2) {
    super(e2, t2), this.name = e2.name ?? null, this.visible = e2.visible ?? true, this.locked = e2.locked ?? false, this.backgroundColor = c$1(t2, e2.backgroundColor) ?? null, this.backgroundImage = c$1(t2, e2.backgroundImage) ?? null, this.rotation = e2.rotation ?? 0, this.opacity = e2.opacity ?? 1, this.borderRadius = e2.borderRadius ?? null, this.border = c$1(t2, e2.border) ?? null, this.backgroundGradient = c$1(t2, e2.backgroundGradient) ?? null, this.imageRendering = e2.imageRendering ?? null, this.position = e2.position, this.left = e2.left ?? null, this.right = e2.right ?? null, this.top = e2.top ?? null, this.bottom = e2.bottom ?? null, this.centerX = e2.centerX ?? null, this.centerY = e2.centerY ?? null, this.width = e2.width ?? null, this.height = e2.height ?? null, this.maxWidth = e2.maxWidth ?? null, this.minWidth = e2.minWidth ?? null, this.maxHeight = e2.maxHeight ?? null, this.minHeight = e2.minHeight ?? null, this.aspectRatio = e2.aspectRatio ?? null, this.zIndex = e2.zIndex ?? null, this.link = e2.link ?? null, this.linkOpenInNewTab = e2.linkOpenInNewTab ?? null, this.overflow = e2.overflow ?? null, this.overflowX = e2.overflowX ?? null, this.overflowY = e2.overflowY ?? null, this.layout = e2.layout ?? null, this.gap = e2.gap ?? null, this.padding = e2.padding ?? null, this.stackDirection = e2.stackDirection ?? null, this.stackDistribution = e2.stackDistribution ?? null, this.stackAlignment = e2.stackAlignment ?? null, this.stackWrapEnabled = e2.stackWrapEnabled ?? null, this.gridColumnCount = e2.gridColumnCount ?? null, this.gridRowCount = e2.gridRowCount ?? null, this.gridAlignment = e2.gridAlignment ?? null, this.gridColumnWidthType = e2.gridColumnWidthType ?? null, this.gridColumnWidth = e2.gridColumnWidth ?? null, this.gridColumnMinWidth = e2.gridColumnMinWidth ?? null, this.gridRowHeightType = e2.gridRowHeightType ?? null, this.gridRowHeight = e2.gridRowHeight ?? null, this.gridItemFillCellWidth = e2.gridItemFillCellWidth ?? null, this.gridItemFillCellHeight = e2.gridItemFillCellHeight ?? null, this.gridItemHorizontalAlignment = e2.gridItemHorizontalAlignment ?? null, this.gridItemVerticalAlignment = e2.gridItemVerticalAlignment ?? null, this.gridItemColumnSpan = e2.gridItemColumnSpan ?? null, this.gridItemRowSpan = e2.gridItemRowSpan ?? null, this.inheritsFromId = e2.inheritsFromId ?? null, this.gesture = e2.gesture ?? null, this.isVariant = e2.isVariant ?? false, this.isPrimaryVariant = e2.isPrimaryVariant ?? false, this.isBreakpoint = e2.isBreakpoint ?? false, this.isPrimaryBreakpoint = e2.isPrimaryBreakpoint ?? false, g$1(this);
  }
}, z$1 = class z extends P$1 {
  [s$1] = "TextNode";
  name;
  visible;
  locked;
  rotation;
  opacity;
  zIndex;
  font;
  inlineTextStyle;
  position;
  top;
  right;
  bottom;
  left;
  centerX;
  centerY;
  width;
  height;
  maxWidth;
  minWidth;
  maxHeight;
  minHeight;
  link;
  linkOpenInNewTab;
  gridItemFillCellWidth;
  gridItemFillCellHeight;
  gridItemHorizontalAlignment;
  gridItemVerticalAlignment;
  gridItemColumnSpan;
  gridItemRowSpan;
  overflow;
  overflowX;
  overflowY;
  textTruncation;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2, this.name = e2.name ?? null, this.visible = e2.visible ?? true, this.locked = e2.locked ?? false, this.rotation = e2.rotation ?? 0, this.opacity = e2.opacity ?? 1, this.zIndex = e2.zIndex ?? null, this.font = c$1(t2, e2.font) ?? null, this.inlineTextStyle = c$1(t2, e2.inlineTextStyle) ?? null, this.position = e2.position, this.left = e2.left ?? null, this.right = e2.right ?? null, this.top = e2.top ?? null, this.bottom = e2.bottom ?? null, this.centerX = e2.centerX ?? null, this.centerY = e2.centerY ?? null, this.width = e2.width ?? null, this.height = e2.height ?? null, this.maxWidth = e2.maxWidth ?? null, this.minWidth = e2.minWidth ?? null, this.maxHeight = e2.maxHeight ?? null, this.minHeight = e2.minHeight ?? null, this.link = e2.link ?? null, this.linkOpenInNewTab = e2.linkOpenInNewTab ?? null, this.overflow = e2.overflow ?? null, this.overflowX = e2.overflowX ?? null, this.overflowY = e2.overflowY ?? null, this.textTruncation = e2.textTruncation ?? null, this.gridItemFillCellWidth = e2.gridItemFillCellWidth ?? null, this.gridItemFillCellHeight = e2.gridItemFillCellHeight ?? null, this.gridItemHorizontalAlignment = e2.gridItemHorizontalAlignment ?? null, this.gridItemVerticalAlignment = e2.gridItemVerticalAlignment ?? null, this.gridItemColumnSpan = e2.gridItemColumnSpan ?? null, this.gridItemRowSpan = e2.gridItemRowSpan ?? null, g$1(this);
  }
  async setText(e2) {
    await this.#e.invoke("setTextForNode", this.id, e2);
  }
  async getText() {
    return this.#e.invoke("getTextForNode", this.id);
  }
  async setHTML(e2) {
    await this.#e.invoke(j$1, this.id, e2), await new Promise((t2) => {
      setTimeout(t2, 30);
    });
  }
  async getHTML() {
    return this.#e.invoke($$1, this.id);
  }
}, Se = class extends P$1 {
  [s$1] = "SVGNode";
  name;
  visible;
  locked;
  svg;
  rotation;
  opacity;
  position;
  top;
  right;
  bottom;
  left;
  centerX;
  centerY;
  width;
  height;
  constructor(e2, t2) {
    super(e2, t2), this.name = e2.name ?? null, this.visible = e2.visible ?? true, this.locked = e2.locked ?? false, this.svg = e2.svg, this.rotation = e2.rotation ?? 0, this.opacity = e2.opacity ?? 1, this.position = e2.position, this.left = e2.left ?? null, this.right = e2.right ?? null, this.top = e2.top ?? null, this.bottom = e2.bottom ?? null, this.centerX = e2.centerX ?? null, this.centerY = e2.centerY ?? null, this.width = e2.width ?? null, this.height = e2.height ?? null, g$1(this);
  }
}, Ne = class extends P$1 {
  [s$1] = "VectorSetItemNode";
  name;
  visible;
  locked;
  top;
  right;
  bottom;
  left;
  centerX;
  centerY;
  width;
  height;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2, this.name = e2.name ?? null, this.visible = e2.visible ?? true, this.locked = e2.locked ?? false, this.top = e2.top ?? null, this.right = e2.right ?? null, this.bottom = e2.bottom ?? null, this.left = e2.left ?? null, this.centerX = e2.centerX ?? null, this.centerY = e2.centerY ?? null, this.width = e2.width ?? null, this.height = e2.height ?? null, g$1(this);
  }
  async getSVG() {
    return this.#e.invoke("getSVGForNode", this.id);
  }
}, ve = class extends P$1 {
  [s$1] = "ComponentInstanceNode";
  name;
  visible;
  locked;
  componentIdentifier;
  insertURL;
  componentName;
  controls;
  rotation;
  opacity;
  position;
  top;
  right;
  bottom;
  left;
  centerX;
  centerY;
  width;
  height;
  maxWidth;
  minWidth;
  maxHeight;
  minHeight;
  aspectRatio;
  #e;
  #t;
  #i;
  get typedControls() {
    return this.#i || (this.#i = c$1(this.#e, this.#t.typedControls) ?? {}), this.#i;
  }
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2, this.#t = e2, this.name = e2.name ?? null, this.visible = e2.visible ?? true, this.locked = e2.locked ?? false, this.componentIdentifier = e2.componentIdentifier, this.componentName = e2.componentName ?? null, this.insertURL = e2.insertURL ?? null, this.controls = c$1(t2, e2.controls) ?? {}, this.rotation = e2.rotation ?? 0, this.opacity = e2.opacity ?? 1, this.position = e2.position, this.left = e2.left ?? null, this.right = e2.right ?? null, this.top = e2.top ?? null, this.bottom = e2.bottom ?? null, this.centerX = e2.centerX ?? null, this.centerY = e2.centerY ?? null, this.width = e2.width ?? null, this.height = e2.height ?? null, this.maxWidth = e2.maxWidth ?? null, this.minWidth = e2.minWidth ?? null, this.maxHeight = e2.maxHeight ?? null, this.minHeight = e2.minHeight ?? null, this.aspectRatio = e2.aspectRatio ?? null, g$1(this);
  }
  async getRuntimeError() {
    return this.#e.invoke("getRuntimeErrorForCodeComponentNode", this.id);
  }
}, G = class extends P$1 {
  [s$1] = "WebPageNode";
  #e;
  path;
  collectionId;
  constructor(e2, t2) {
    super(e2, t2), this.path = e2.path ?? null, this.collectionId = e2.collectionId ?? null, this.#e = t2, g$1(this);
  }
  getBreakpointSuggestions() {
    return this.#e.invoke("getBreakpointSuggestionsForWebPage", this.id);
  }
  async addBreakpoint(e2, t2) {
    let n2 = await this.#e.invoke("addBreakpointToWebPage", this.id, e2, t2), a2 = m$1(n2, this.#e);
    return l(a2 instanceof N$1), l(rn(a2), "Expected node to be a FrameNode"), a2;
  }
  async getActiveCollectionItem() {
    let e2 = await this.#e.invoke("getActiveCollectionItemForWebPage", this.id);
    return e2 ? new De(e2, this.#e) : null;
  }
}, K = class extends P$1 {
  [s$1] = "ComponentNode";
  name;
  componentIdentifier;
  insertURL;
  componentName;
  #e;
  constructor(e2, t2) {
    super(e2, t2), this.#e = t2, this.componentIdentifier = e2.componentIdentifier, this.insertURL = e2.insertURL ?? null, this.componentName = e2.componentName ?? null, this.name = e2.name ?? null, g$1(this);
  }
  async addVariant(e2, t2) {
    let n2 = await this.#e.invoke("addVariantToComponent", this.id, e2, t2);
    if (!n2) throw new Error("Failed to add variant to component");
    let a2 = m$1(n2, this.#e);
    return l(a2 instanceof N$1), l(Lt(a2), "Node is not a component variant"), a2;
  }
  async addGestureVariant(e2, t2, n2) {
    let a2 = await this.#e.invoke("addGestureVariantToComponent", this.id, e2, t2, n2);
    if (!a2) throw new Error("Failed to add state to component");
    let r2 = m$1(a2, this.#e);
    return l(r2 instanceof N$1), l(on(r2), "Node is not a gesture variant"), r2;
  }
  async getVariables() {
    let e2 = await this.#e.invoke("getVariables", this.id);
    return c$1(this.#e, e2);
  }
  async addVariables(e2) {
    let t2 = await this.#e.invoke("addVariables", this.id, D$1(e2));
    return c$1(this.#e, t2);
  }
  async removeVariables(e2) {
    await this.#e.invoke("removeVariables", this.id, e2);
  }
  async setVariableOrder(e2) {
    await this.#e.invoke("setVariableOrder", this.id, e2);
  }
}, Ve = class extends P$1 {
  [s$1] = "VectorSetNode";
  name;
  constructor(e2, t2) {
    super(e2, t2), this.name = e2.name ?? null, g$1(this);
  }
}, H$1 = class H extends P$1 {
  [s$1] = "DesignPageNode";
  name;
  constructor(e2, t2) {
    super(e2, t2), this.name = e2.name ?? null, g$1(this);
  }
}, ke = class extends P$1 {
  [s$1] = "UnknownNode";
  constructor(e2, t2) {
    super(e2, t2), g$1(this);
  }
};
function m$1(i27, e2) {
  switch (i27[s$1]) {
    case "DesignPageNode":
      return new H$1(i27, e2);
    case "WebPageNode":
      return new G(i27, e2);
    case "ComponentNode":
      return new K(i27, e2);
    case "VectorSetNode":
      return new Ve(i27, e2);
    case "VectorSetItemNode":
      return new Ne(i27, e2);
    case "ComponentInstanceNode":
      return new ve(i27, e2);
    case "FrameNode":
      return new N$1(i27, e2);
    case "SVGNode":
      return new Se(i27, e2);
    case "TextNode":
      return new z$1(i27, e2);
    case "UnknownNode":
      return new ke(i27, e2);
    default:
      return new ke(i27, e2);
  }
}
function st(i27) {
  return i27 instanceof N$1;
}
function sn(i27) {
  return i27 instanceof z$1;
}
function ln(i27) {
  return i27 instanceof Se;
}
function Z(i27) {
  return i27 instanceof ve;
}
function dn(i27) {
  return i27 instanceof G;
}
function un(i27) {
  return i27 instanceof K;
}
function cn(i27) {
  return i27 instanceof H$1;
}
function pn(i27) {
  return i27 instanceof Ve;
}
function mn(i27) {
  return i27 instanceof Ne;
}
function O(i27) {
  return i27 instanceof ke;
}
function Ae(i27) {
  return !!(st(i27) || sn(i27) || Z(i27) || ln(i27) || mn(i27) || O(i27));
}
function Ut(i27) {
  return !!(dn(i27) || cn(i27) || un(i27) || pn(i27) || O(i27));
}
var Ot = Symbol(), zt = Symbol(), Gt = Symbol(), Kt = Symbol(), Ht = Symbol(), $t = Symbol(), jt = Symbol();
var va = ["unstable_getCodeFile", "unstable_getCodeFiles", "unstable_getCodeFileVersionContent", "unstable_getCodeFileLint2", "unstable_getCodeFileTypecheck2", "unstable_getCodeFileVersions", "lintCode"], Va = ["closeNotification", "closePlugin", "setCloseWarning", "getActiveCollection", "getActiveLocale", "getActiveManagedCollection", "getCanvasRoot", "getChildren", "getCollection", "getCollectionFields", "getCollectionFields2", "getCollectionItems", "getCollectionItems2", "getCollections", "getColorStyle", "getColorStyles", "getCurrentUser", "getCurrentUser2", "getCustomCode", "getDefaultLocale", "getFont", "getFonts", "getImage", "getImageData", "getLocales", "getLocalizationGroups", "getManagedCollection", "getManagedCollectionFields", "getManagedCollectionFields2", "getManagedCollectionItemIds", "getManagedCollections", "getNode", "getNodesWithAttribute", "getNodesWithAttributeSet", "getNodesWithType", "getParent", "getPluginData", "getPluginDataForNode", "getPluginDataKeys", "getPluginDataKeysForNode", "getProjectInfo", "getProjectInfo2", "getPublishInfo", "getRect", "getSelection", "getSVGForNode", "getText", "getTextForNode", "getTextStyle", "getTextStyles", "hideUI", "setBackgroundMessage", "notify", "onPointerDown", "setActiveCollection", "setSelection", "showUI", "getCodeFileVersionContent", "typecheckCode", "getCodeFileVersions", "getCodeFiles", "getCodeFile", "getRedirects", "uploadFile", "uploadFiles", "uploadImage", "uploadImages", "zoomIntoView", "navigateTo", "getRuntimeErrorForModule", "getRuntimeErrorForCodeComponentNode", "showProgressOnInstances", "removeProgressFromInstances", "addComponentInstancePlaceholder", "updateComponentInstancePlaceholder", "removeComponentInstancePlaceholder", "setMenu", "showContextMenu", "getBreakpointSuggestionsForWebPage", "getActiveCollectionItemForWebPage", "getVariables", "getVectorSets", "getVectorSetItems", "getVectorSetItemVariables", "getChangedPaths", "getChangeContributors", "getDeployments", Oe, ze, $$1, "getAiServiceInfo", "sendTrackingEvent", ...va];
new Set(Va);
var We = { addComponentInstance: ["addComponentInstance"], addComponentInstancePlaceholder: [], addDetachedComponentLayers: ["addDetachedComponentLayers"], addImage: ["addImage"], addImages: ["addImages"], addSVG: ["addSVG"], addText: ["addText"], addRedirects: ["addRedirects"], getRedirects: [], removeRedirects: ["removeRedirects"], setRedirectOrder: ["setRedirectOrder"], subscribeToRedirects: [], cloneNode: ["cloneNode"], closePlugin: [], createColorStyle: ["createColorStyle"], createFrameNode: ["createNode"], createTextNode: ["createNode"], createComponentNode: ["createNode"], createTextStyle: ["createTextStyle"], createDesignPage: ["createDesignPage"], createWebPage: ["createWebPage"], getActiveCollection: [], getActiveLocale: [], getActiveManagedCollection: [], getCanvasRoot: [], getChildren: [], getCollection: [], getCollections: [], getColorStyle: [], getColorStyles: [], getCurrentUser: [], getCustomCode: [], getDefaultLocale: [], getFont: [], getFonts: [], getImage: [], getLocales: [], getLocalizationGroups: [], getManagedCollection: [], getManagedCollections: [], getNode: [], getNodesWithAttribute: [], getNodesWithAttributeSet: [], getNodesWithType: [], getParent: [], getPluginData: [], getPluginDataKeys: [], getProjectInfo: [], getPublishInfo: [], getRect: [], getSelection: [], getText: [], getTextStyle: [], getTextStyles: [], hideUI: [], setBackgroundMessage: [], setCloseWarning: [], lintCode: [], makeDraggable: ["onDragEnd", "onDragStart", "onDrag", "setDragData", "preloadDetachedComponentLayers", "preloadImageUrlForInsertion", "preloadDragPreviewImage"], notify: [], preloadDetachedComponentLayers: ["preloadDetachedComponentLayers"], preloadDragPreviewImage: ["preloadDragPreviewImage"], preloadImageUrlForInsertion: ["preloadImageUrlForInsertion"], removeNode: ["removeNodes2"], removeNodes: ["removeNodes2"], setAttributes: ["setAttributes"], setCustomCode: ["setCustomCode"], setImage: ["setImage"], setLocalizationData: ["setLocalizationData"], setMenu: [], showContextMenu: [], setParent: ["setParent"], setPluginData: ["setPluginData"], setSelection: [], setText: ["setText"], typecheckCode: [], showUI: [], subscribeToCanvasRoot: [], subscribeToColorStyles: [], subscribeToCustomCode: [], subscribeToImage: [], subscribeToPublishInfo: [], subscribeToSelection: [], subscribeToText: [], subscribeToTextStyles: [], createCodeFile: ["createCodeFile"], unstable_ensureMinimumDependencyVersion: ["unstable_ensureMinimumDependencyVersion"], getCodeFiles: [], getCodeFile: [], subscribeToCodeFiles: [], subscribeToOpenCodeFile: [], uploadFile: [], uploadFiles: [], uploadImage: [], uploadImages: [], zoomIntoView: [], navigateTo: [], getVectorSets: [], "VectorSet.getItems": [], "VectorSetItem.getVariables": [], "Node.navigateTo": [], "CodeFile.navigateTo": [], "Collection.navigateTo": [], "ManagedCollection.navigateTo": [], "CollectionItem.navigateTo": [], "ComponentInstanceNode.getRuntimeError": [], "ImageAsset.cloneWithAttributes": [], "ImageAsset.getData": [], "ImageAsset.loadBitmap": [], "ImageAsset.loadImage": [], "ImageAsset.measure": [], "CodeFile.remove": ["removeCodeFile"], "CodeFile.rename": ["renameCodeFile"], "CodeFile.setFileContent": ["setCodeFileContent"], "CodeFile.getVersions": [], "CodeFile.showProgressOnInstances": [], "CodeFile.removeProgressFromInstances": [], "CodeFile.lint": [], "CodeFile.typecheck": [], "CodeFileVersion.getContent": [], "ComponentInstancePlaceholder.setAttributes": [], "ComponentInstancePlaceholder.remove": [], "ComponentInstancePlaceholder.replaceWithComponentInstance": ["replaceComponentInstancePlaceholderWithComponentInstance"], "Field.remove": ["removeCollectionFields"], "Field.setAttributes": ["addCollectionFields2"], "EnumField.addCase": ["addEnumCase"], "EnumField.setCaseOrder": ["setEnumCaseOrder"], "Collection.addFields": ["addCollectionFields2"], "Collection.addItems": ["addCollectionItems2"], "Collection.getFields": [], "Collection.getItems": [], "Collection.getPluginData": [], "Collection.getPluginDataKeys": [], "Collection.removeFields": ["removeCollectionFields"], "Collection.removeItems": ["removeCollectionItems"], "Collection.setAsActive": [], "Collection.setFieldOrder": ["setCollectionFieldOrder"], "Collection.setItemOrder": ["setCollectionItemOrder"], "Collection.setPluginData": ["setPluginDataForNode"], "CollectionItem.getPluginData": [], "CollectionItem.getPluginDataKeys": [], "CollectionItem.remove": ["removeCollectionItems"], "CollectionItem.setAttributes": ["setCollectionItemAttributes2"], "CollectionItem.setPluginData": ["setPluginDataForNode"], "ManagedCollection.addItems": ["addManagedCollectionItems2"], "ManagedCollection.getFields": [], "ManagedCollection.getItemIds": [], "ManagedCollection.getPluginData": [], "ManagedCollection.getPluginDataKeys": [], "ManagedCollection.removeItems": ["removeManagedCollectionItems"], "ManagedCollection.setAsActive": [], "ManagedCollection.setFields": ["setManagedCollectionFields"], "ManagedCollection.setItemOrder": ["setManagedCollectionItemOrder"], "ManagedCollection.setPluginData": ["setPluginDataForNode"], "Node.clone": ["cloneNode"], "Node.getChildren": [], "Node.getNodesWithAttribute": [], "Node.getNodesWithAttributeSet": [], "Node.getNodesWithType": [], "Node.getParent": [], "Node.getPluginData": [], "Node.getPluginDataKeys": [], "Node.getRect": [], "Node.remove": ["removeNodes2"], "Node.select": [], "Node.setAttributes": ["setAttributes"], "Node.setPluginData": ["setPluginDataForNode"], "Node.walk": [], "Node.zoomIntoView": [], "TextNode.getText": [], "TextNode.setText": ["setTextForNode"], "TextNode.setHTML": [j$1], "TextNode.getHTML": [], "ComponentNode.addVariant": ["addVariantToComponent"], "ComponentNode.addGestureVariant": ["addGestureVariantToComponent"], "ComponentNode.getVariables": [], "ComponentNode.addVariables": ["addVariables"], "ComponentNode.removeVariables": ["removeVariables"], "WebPageNode.getBreakpointSuggestions": [], "WebPageNode.addBreakpoint": ["addBreakpointToWebPage"], "WebPageNode.getActiveCollectionItem": [], "ColorStyle.getPluginData": [], "ColorStyle.getPluginDataKeys": [], "ColorStyle.remove": ["removeColorStyle"], "ColorStyle.setAttributes": ["setColorStyleAttributes"], "ColorStyle.setPluginData": ["setPluginDataForNode"], "TextStyle.getPluginData": [], "TextStyle.getPluginDataKeys": [], "TextStyle.remove": ["removeTextStyle"], "TextStyle.setAttributes": ["setTextStyleAttributes"], "TextStyle.setPluginData": ["setPluginDataForNode"], "Variable.setAttributes": ["updateVariable"], "Variable.remove": ["removeVariables"], "ComponentNode.setVariableOrder": ["setVariableOrder"], "EnumCase.remove": ["removeEnumCase"], "EnumCase.setAttributes": ["updateEnumCase"], "EnumVariable.addCase": ["addEnumCase"], "EnumVariable.setCaseOrder": ["setEnumCaseOrder"], createCollection: ["createCollection"], createManagedCollection: ["createManagedCollection"], [pt]: [], [mt]: [], [gt]: [], [yt]: [], [Ot]: ["publish"], [zt]: [], [Gt]: ["deploy"], [Kt]: [], [Ht]: [], [$t]: ["createManagedCollection"], [jt]: [] }, lt = [];
for (let i27 of Object.keys(We)) We[i27].length !== 0 && lt.push(i27);
g$1(lt);
function qt(i27) {
  let e2 = {};
  for (let t2 of lt) {
    let n2 = We[t2];
    e2[t2] = n2.every((a2) => i27[a2]);
  }
  return e2;
}
function yn() {
  let i27 = {};
  for (let e2 of lt) i27[e2] = true;
  return i27;
}
var _$1 = null;
function hn(i27) {
  if (typeof window > "u") return;
  if (!_$1) {
    let t2 = document.createElement("style");
    document.head.appendChild(t2), _$1 = t2.sheet;
  }
  if (!_$1) {
    i27();
    return;
  }
  let e2 = _$1.insertRule("* { transition: none !important; animation: none !important; }");
  i27(), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      _$1 && _$1.deleteRule(e2);
    });
  });
}
var dt = class {
  methodInvocationId = 0;
  notificationId = 0;
  postMessage;
  methodResponseHandlers = /* @__PURE__ */ new Map();
  mode;
  subscriptions = /* @__PURE__ */ new Map();
  perMethodPermissionMap;
  permissionSubscriptions = /* @__PURE__ */ new Set();
  messageTypesCheckedInIsAllowedTo = /* @__PURE__ */ new Set();
  showUncheckedPermissionToasts = true;
  environmentInfo = null;
  initialState;
  menuItemOnActionCallbackMap = /* @__PURE__ */ new Map();
  contextMenuItemOnActionCallbackMap = /* @__PURE__ */ new Map();
  rejectAllPending(e2) {
    for (let [t2, n2] of this.methodResponseHandlers) n2.reject(e2), this.methodResponseHandlers.delete(t2);
  }
  constructor(e2) {
    if (!e2) {
      this.postMessage = () => {
      }, this.mode = "canvas", this.perMethodPermissionMap = yn(), this.initialState = { mode: "canvas", intent: "plugin/open" };
      return;
    }
    switch (e2.transport.onMessage(this.onMessage), typeof window < "u" && (window.addEventListener("error", (t2) => {
      t2.error instanceof W && (t2.preventDefault(), t2.stopImmediatePropagation());
    }), window.addEventListener("unhandledrejection", (t2) => {
      t2.reason instanceof W && (t2.preventDefault(), t2.stopImmediatePropagation());
    })), this.mode = e2.mode, this.initialState = e2.initialState ?? { mode: e2.mode, intent: "plugin/open" }, this.environmentInfo = e2.environmentInfo, this.perMethodPermissionMap = qt(e2.permissionMap), this.postMessage = (t2, n2) => e2.transport.send(t2, n2), this.mode) {
      case "canvas":
      case "image":
      case "editImage":
      case "configureManagedCollection":
      case "syncManagedCollection":
      case "collection":
      case "localization":
      case "code":
        typeof window < "u" && window.addEventListener("pointerdown", () => {
          this.invoke("onPointerDown");
        }), e2.theme && this.applyPluginTheme(e2.theme), this.subscribe("theme", this.applyPluginTheme);
        break;
      case "api":
        break;
      default:
        He(this.mode);
    }
  }
  async invoke(e2, ...t2) {
    return this.invokeTransferable(e2, void 0, ...t2);
  }
  async invokeTransferable(e2, t2, ...n2) {
    return new Promise((r2, d2) => {
      let y2 = { type: "methodInvocation", methodName: e2, id: this.methodInvocationId, args: n2.map(D$1) };
      this.methodInvocationId += 1, this.methodResponseHandlers.set(y2.id, { resolve: r2, reject: d2 }), this.postMessage(y2, t2);
    });
  }
  subscribe(e2, t2) {
    this.postMessage({ type: "subscribe", topic: e2 });
    let n2 = this.subscriptions.get(e2) ?? /* @__PURE__ */ new Set();
    return n2.add(t2), this.subscriptions.set(e2, n2), () => {
      let a2 = this.subscriptions.get(e2) ?? /* @__PURE__ */ new Set();
      a2.delete(t2), a2.size === 0 && this.postMessage({ type: "unsubscribe", topic: e2 }), this.subscriptions.set(e2, a2);
    };
  }
  onMessage = (e2) => {
    let t2 = e2?.data ?? e2;
    if (bi(t2)) switch (t2.type) {
      case "permissionUpdate": {
        this.perMethodPermissionMap = qt(t2.permissionMap);
        for (let n2 of this.permissionSubscriptions) n2();
        break;
      }
      case "methodResponse": {
        let n2 = this.methodResponseHandlers.get(t2.id);
        if (!n2) throw new Error(`No handler for response with id ${t2.id}`);
        this.methodResponseHandlers.delete(t2.id), u$1(t2.error) ? n2.reject(new te(t2.error)) : n2.resolve(t2.result);
        break;
      }
      case "subscriptionMessage": {
        let { topic: n2, payload: a2 } = t2, r2 = this.subscriptions.get(n2);
        if (!r2) throw new Error("Received a subscription message but no handler present");
        for (let d2 of r2) d2(a2);
        break;
      }
      case "menuAction": {
        let n2 = this.getOnActionFromCallbackMap(t2.actionId, t2.actionType);
        if (!n2) throw new Error("Menu action received for an unknown menu item");
        n2();
        break;
      }
      default:
        He(t2);
    }
  };
  getOnActionFromCallbackMap(e2, t2) {
    switch (t2) {
      case "pluginMenu":
        return this.menuItemOnActionCallbackMap.get(e2);
      case "contextMenu":
        return this.contextMenuItemOnActionCallbackMap.get(e2);
      default:
        He(t2);
    }
  }
  applyPluginTheme = (e2) => {
    hn(() => {
      document.body.setAttribute("data-framer-theme", e2.mode);
      for (let t2 in e2.tokens) document.body.style.setProperty(t2, e2.tokens[t2]);
    });
  };
  async cloneNode(e2) {
    let t2 = await this.invoke("cloneNode", e2);
    return t2 ? m$1(t2, this) : null;
  }
  async setAttributes(e2, t2) {
    let n2 = await this.invoke("setAttributes", e2, t2);
    return n2 ? m$1(n2, this) : null;
  }
  async getParent(e2) {
    let t2 = await this.invoke("getParent", e2);
    return t2 ? m$1(t2, this) : null;
  }
  async getChildren(e2) {
    return (await this.invoke("getChildren", e2)).map((n2) => {
      let a2 = m$1(n2, this);
      return l(Ae(a2)), a2;
    });
  }
  notify = (e2, t2) => {
    let n2 = `notification-${this.notificationId}`;
    return this.notificationId += 1, this.invoke("notify", e2, { notificationId: n2, variant: t2?.variant ?? "info", buttonText: t2?.button?.text, durationMs: t2?.durationMs }).then((a2) => {
      a2 === "actionButtonClicked" && t2?.button?.onClick && t2.button.onClick(), t2?.onDisappear && t2.onDisappear();
    }), { close: () => this.invoke("closeNotification", n2) };
  };
  async setMenu(e2) {
    this.menuItemOnActionCallbackMap = /* @__PURE__ */ new Map();
    let t2 = qe(e2, this.menuItemOnActionCallbackMap);
    await this.invoke("setMenu", t2);
  }
  async showContextMenu(e2, t2) {
    this.contextMenuItemOnActionCallbackMap = /* @__PURE__ */ new Map();
    let n2 = qe(e2, this.contextMenuItemOnActionCallbackMap);
    await this.invoke("showContextMenu", n2, t2);
  }
};
var Xt = class {
  #e;
  #t;
  get id() {
    return this.#e.id;
  }
  get name() {
    return this.#e.name;
  }
  get createdAt() {
    return this.#e.createdAt;
  }
  get createdBy() {
    return this.#e.createdBy;
  }
  constructor(e2, t2) {
    this.#t = t2, this.#e = e2;
  }
  async getContent() {
    return await this.#t.invoke("getCodeFileVersionContent", this.#e.fileId, this.#e.id);
  }
}, B = class i24 {
  #e;
  #t;
  get id() {
    return this.#e.id;
  }
  get name() {
    return this.#e.name;
  }
  get path() {
    return this.#e.path;
  }
  get content() {
    return this.#e.content;
  }
  get exports() {
    return this.#e.exports;
  }
  get versionId() {
    return this.#e.versionId;
  }
  constructor(e2, t2) {
    this.#t = t2, this.#e = e2;
  }
  async setFileContent(e2) {
    let t2 = await this.#t.invoke("setCodeFileContent", this.id, e2);
    return new i24(t2, this.#t);
  }
  async rename(e2) {
    let t2 = await this.#t.invoke("renameCodeFile", this.id, e2);
    return new i24(t2, this.#t);
  }
  async remove() {
    return this.#t.invoke("removeCodeFile", this.id);
  }
  async getVersions() {
    return (await this.#t.invoke("getCodeFileVersions", this.id)).map((t2) => new Xt(t2, this.#t));
  }
  async showProgressOnInstances(e2) {
    return this.#t.invoke("showProgressOnInstances", this.id, e2);
  }
  async removeProgressFromInstances() {
    return this.#t.invoke("removeProgressFromInstances", this.id);
  }
  async lint(e2) {
    return Promise.resolve([]);
  }
  async typecheck(e2) {
    return await this.#t.invoke("typecheckCode", this.name, this.content, e2, this.id);
  }
  async navigateTo() {
    return this.#t.invoke("navigateTo", this.id);
  }
};
var Ea = /* @__PURE__ */ (() => {
  let i27 = null;
  return { disableUntilMouseUp: () => {
    if (i27) return;
    i27 = document.createElement("style"), i27.textContent = "* { pointer-events: none !important; user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(i27);
    let e2 = () => {
      i27 && (document.head.removeChild(i27), i27 = null, a2());
    }, t2 = (r2) => {
      r2.buttons > 0 && r2.buttons & 1 || e2();
    }, n2 = () => {
      e2();
    };
    window.addEventListener("pointerup", t2, true), window.addEventListener("pointermove", t2, true), window.addEventListener("blur", n2);
    function a2() {
      window.removeEventListener("pointerup", t2, true), window.removeEventListener("pointermove", t2, true), window.removeEventListener("blur", n2);
    }
  } };
})(), fn = 5, Ma = /* @__PURE__ */ (() => {
  let i27 = 1;
  return { next: () => `drag-${i27++}` };
})();
function wa() {
}
function Cn(i27, e2, t2, n2) {
  if (i27.mode !== "canvas") return wa;
  let a2 = Ma.next(), r2 = document.body.style.cursor, d2 = { type: "idle" }, y2 = document.body, we2 = T$1.subscribeToIsAllowedTo("makeDraggable", (h2) => {
    h2 || ni2();
  }), k2 = (h2) => {
    T$1.isAllowedTo("makeDraggable") && d2.type !== "idle" && (d2.type === "dragging" && i27.invoke("onDragEnd", { ...h2, dragSessionId: a2 }).then((I2) => {
      try {
        n2?.(I2);
      } catch {
      }
    }).catch((I2) => {
      if (I2 instanceof Error) {
        n2?.({ status: "error", reason: I2.message });
        return;
      }
      if (typeof I2 == "string") {
        n2?.({ status: "error", reason: I2 });
        return;
      }
      n2?.({ status: "error" });
    }), ni2());
  }, A2 = (h2) => {
    if (!T$1.isAllowedTo("makeDraggable") || d2.type === "idle") return;
    if (!(h2.buttons > 0 && !!(h2.buttons & 1))) {
      k2({ cancelled: false });
      return;
    }
    let { clientX: Re2, clientY: Q2 } = h2;
    if (d2.type === "pointerDown") {
      let ee2 = Re2 - d2.dragStart.mouse.x, ai2 = Q2 - d2.dragStart.mouse.y;
      if (Math.abs(ee2) < fn && Math.abs(ai2) < fn) return;
      d2 = { type: "dragging", dragStart: d2.dragStart }, i27.invoke("onDragStart", d2.dragStart), document.getSelection()?.empty(), Ea.disableUntilMouseUp();
    }
    y2.setPointerCapture(h2.pointerId);
    let Be2 = { x: Re2, y: Q2 };
    i27.invoke("onDrag", { dragSessionId: a2, mouse: Be2 }).then((ee2) => {
      d2.type === "dragging" && (document.body.style.cursor = ee2 ?? "");
    });
  }, Qt = (h2) => {
    h2.key === "Escape" && k2({ cancelled: true });
  }, ei2 = () => {
    k2({ cancelled: true });
  }, ti2 = (h2) => {
    if (!T$1.isAllowedTo("makeDraggable")) return;
    k2({ cancelled: true });
    let I2 = e2.getBoundingClientRect(), Re2 = { x: I2.x, y: I2.y, width: I2.width, height: I2.height }, Q2, Be2 = e2.querySelectorAll("svg");
    if (Be2.length === 1) {
      let Le2 = Be2.item(0).getBoundingClientRect();
      Q2 = { x: Le2.x, y: Le2.y, width: Le2.width, height: Le2.height };
    }
    let ee2 = { x: h2.clientX, y: h2.clientY };
    d2 = { type: "pointerDown", dragStart: { dragSessionId: a2, elementRect: Re2, svgRect: Q2, mouse: ee2 } }, i27.invoke("setDragData", a2, t2()), y2.addEventListener("pointermove", A2, true), y2.addEventListener("pointerup", A2, true), window.addEventListener("keydown", Qt, true), window.addEventListener("blur", ei2);
  }, ii2 = () => {
    if (!T$1.isAllowedTo("makeDraggable")) return;
    let h2 = t2();
    h2.type === "detachedComponentLayers" && i27.invoke("preloadDetachedComponentLayers", h2.url), h2.type === "image" && i27.invoke("preloadImageUrlForInsertion", h2.image), h2.previewImage && i27.invoke("preloadDragPreviewImage", h2.previewImage);
  };
  e2.addEventListener("pointerdown", ti2), e2.addEventListener("mouseenter", ii2);
  function ni2() {
    d2 = { type: "idle" }, document.body.style.cursor = r2, y2.removeEventListener("pointermove", A2, true), y2.removeEventListener("pointerup", A2, true), window.removeEventListener("keydown", Qt, true), window.removeEventListener("blur", ei2);
  }
  return () => {
    e2.removeEventListener("pointerdown", ti2), e2.removeEventListener("mouseenter", ii2), k2({ cancelled: true }), we2();
  };
}
var J = class i26 {
  #e;
  #t;
  get id() {
    return this.#e.id;
  }
  get from() {
    return this.#e.from;
  }
  get to() {
    return this.#e.to;
  }
  get expandToAllLocales() {
    return this.#e.expandToAllLocales;
  }
  constructor(e2, t2) {
    this.#t = t2, this.#e = e2;
  }
  remove() {
    return this.#t.invoke("removeRedirects", [this.id]);
  }
  async setAttributes(e2) {
    let t2 = { ...e2, id: this.id }, [n2] = await this.#t.invoke("addRedirects", [t2]);
    return l(Ge(n2)), p(n2) ? null : new i26(n2, this.#t);
  }
};
var Me = class {
  #e;
  constructor(e2) {
    this.#e = e2;
  }
  get mode() {
    return this.#e.mode;
  }
  isAllowedTo(...e2) {
    return e2.every((t2) => this.#e.perMethodPermissionMap[t2]);
  }
  subscribeToIsAllowedTo(...e2) {
    let [t2, n2] = li(e2), a2 = this.isAllowedTo(...t2), r2 = () => {
      let d2 = this.isAllowedTo(...t2);
      d2 !== a2 && (a2 = d2, n2(a2));
    };
    return this.#e.permissionSubscriptions.add(r2), () => {
      this.#e.permissionSubscriptions.delete(r2);
    };
  }
  async showUI(e2) {
    return this.#e.invoke("showUI", e2);
  }
  async hideUI() {
    return this.#e.invoke("hideUI");
  }
  async setBackgroundMessage(e2) {
    return this.#e.invoke("setBackgroundMessage", e2);
  }
  closePlugin(e2, t2) {
    throw this.#e.invoke("closePlugin", e2, t2), new W();
  }
  async getCurrentUser() {
    return this.#e.invoke("getCurrentUser2");
  }
  async getProjectInfo() {
    return this.#e.invoke("getProjectInfo2");
  }
  async getSelection() {
    return (await this.#e.invoke("getSelection")).map((t2) => {
      let n2 = m$1(t2, this.#e);
      return l(Ae(n2)), n2;
    });
  }
  async setSelection(e2) {
    let t2 = u$1(e2) ? [e2] : Array.from(e2);
    return this.#e.invoke("setSelection", t2);
  }
  subscribeToSelection(e2) {
    return this.#e.subscribe("selection", (t2) => {
      let n2 = t2.map((a2) => {
        let r2 = m$1(a2, this.#e);
        return l(Ae(r2)), r2;
      });
      e2(n2);
    });
  }
  async getCanvasRoot() {
    let e2 = await this.#e.invoke("getCanvasRoot"), t2 = m$1(e2, this.#e);
    return l(Ut(t2)), t2;
  }
  subscribeToCanvasRoot(e2) {
    return this.#e.subscribe("canvasRoot", (t2) => {
      let n2 = m$1(t2, this.#e);
      l(Ut(n2)), e2(n2);
    });
  }
  async getPublishInfo() {
    return this.#e.invoke("getPublishInfo");
  }
  subscribeToPublishInfo(e2) {
    return this.#e.subscribe("publishInfo", e2);
  }
  async createFrameNode(e2, t2) {
    let n2 = await this.#e.invoke("createNode", "FrameNode", t2 ?? null, e2);
    if (!n2) return null;
    let a2 = m$1(n2, this.#e);
    return l(a2 instanceof N$1), a2;
  }
  async removeNodes(e2) {
    return this.#e.invoke("removeNodes2", e2);
  }
  async removeNode(e2) {
    return this.removeNodes([e2]);
  }
  async cloneNode(e2) {
    return this.#e.cloneNode(e2);
  }
  async getNode(e2) {
    let t2 = await this.#e.invoke("getNode", e2);
    return t2 ? m$1(t2, this.#e) : null;
  }
  async getParent(e2) {
    return this.#e.getParent(e2);
  }
  async getChildren(e2) {
    return this.#e.getChildren(e2);
  }
  async getRect(e2) {
    return this.#e.invoke("getRect", e2);
  }
  async zoomIntoView(e2, t2) {
    let n2 = u$1(e2) ? [e2] : Array.from(e2);
    return this.#e.invoke("zoomIntoView", n2, t2);
  }
  async setAttributes(e2, t2) {
    return this.#e.setAttributes(e2, t2);
  }
  async setParent(e2, t2, n2) {
    return this.#e.invoke("setParent", e2, t2, n2);
  }
  async getNodesWithType(e2) {
    return (await this.#e.invoke("getNodesWithType", null, e2)).map((n2) => m$1(n2, this.#e));
  }
  async getNodesWithAttribute(e2) {
    return (await this.#e.invoke("getNodesWithAttribute", null, e2)).map((n2) => m$1(n2, this.#e));
  }
  async getNodesWithAttributeSet(e2) {
    return (await this.#e.invoke("getNodesWithAttributeSet", null, e2)).map((n2) => m$1(n2, this.#e));
  }
  async getImage() {
    let e2 = await this.#e.invoke("getImage");
    return e2 ? c$1(this.#e, e2) : null;
  }
  subscribeToImage(e2) {
    return this.#e.subscribe("image", (t2) => {
      if (!t2) {
        e2(null);
        return;
      }
      e2(c$1(this.#e, t2));
    });
  }
  async addImage(e2) {
    let t2 = await oe(e2), n2 = w$1(t2);
    return this.#e.invokeTransferable("addImage", n2, t2);
  }
  async setImage(e2) {
    let t2 = await oe(e2), n2 = w$1(t2);
    return this.#e.invokeTransferable("setImage", n2, t2);
  }
  async uploadImage(e2) {
    let t2 = await oe(e2), n2 = w$1(t2), a2 = await this.#e.invokeTransferable("uploadImage", n2, t2);
    return c$1(this.#e, a2);
  }
  async addImages(e2) {
    let t2 = await Ct(e2), n2 = t2.flatMap(w$1);
    await this.#e.invokeTransferable("addImages", n2, t2);
  }
  async uploadImages(e2) {
    let t2 = await Ct(e2), n2 = t2.flatMap(w$1), a2 = await this.#e.invokeTransferable("uploadImages", n2, t2);
    return c$1(this.#e, a2);
  }
  async uploadFile(e2) {
    let t2 = await ft(e2), n2 = await this.#e.invokeTransferable("uploadFile", w$1(t2), t2);
    return c$1(this.#e, n2);
  }
  async uploadFiles(e2) {
    let t2 = await Promise.all(e2.map(ft)), n2 = t2.flatMap(w$1), a2 = await this.#e.invokeTransferable("uploadFiles", n2, t2);
    return c$1(this.#e, a2);
  }
  async addSVG(e2) {
    return this.#e.invoke("addSVG", e2);
  }
  async addComponentInstance({ url: e2, attributes: t2, parentId: n2 }) {
    let a2 = await this.#e.invoke("addComponentInstance", { url: e2, attributes: t2, parentId: n2 }), r2 = m$1(a2, this.#e);
    return l(Z(r2)), r2;
  }
  async addDetachedComponentLayers({ url: e2, layout: t2, attributes: n2 }) {
    let a2 = await this.#e.invoke("addDetachedComponentLayers", { url: e2, layout: t2, attributes: n2 }), r2 = m$1(a2, this.#e);
    return l(st(r2)), r2;
  }
  async preloadDetachedComponentLayers(e2) {
    await this.#e.invoke("preloadDetachedComponentLayers", e2);
  }
  async preloadImageUrlForInsertion(e2) {
    await this.#e.invoke("preloadImageUrlForInsertion", e2);
  }
  async preloadDragPreviewImage(e2) {
    await this.#e.invoke("preloadDragPreviewImage", e2);
  }
  async getText() {
    return this.#e.invoke("getText");
  }
  async setText(e2) {
    return this.#e.invoke("setText", e2);
  }
  async addText(e2, t2) {
    return this.#e.invoke("addText", e2, t2);
  }
  async setCustomCode(e2) {
    return this.#e.invoke("setCustomCode", e2);
  }
  async getCustomCode() {
    return this.#e.invoke("getCustomCode");
  }
  subscribeToCustomCode(e2) {
    return this.#e.subscribe("customCode", e2);
  }
  subscribeToText(e2) {
    return this.#e.subscribe("text", e2);
  }
  makeDraggable(e2, t2, n2) {
    return Cn(this.#e, e2, t2, n2);
  }
  async getActiveManagedCollection() {
    let e2 = await this.#e.invoke("getActiveManagedCollection");
    return l(e2, "Collection data must be defined"), new Y(e2, this.#e);
  }
  async getManagedCollection() {
    return this.getActiveManagedCollection();
  }
  async getManagedCollections() {
    let e2 = await this.#e.invoke("getManagedCollections");
    return l(e2, "Collections data must be defined"), e2.map((t2) => new Y(t2, this.#e));
  }
  async getCollection(e2) {
    let t2 = await this.#e.invoke("getCollection", e2);
    return t2 ? new U(t2, this.#e) : null;
  }
  async getActiveCollection() {
    let e2 = await this.#e.invoke("getActiveCollection");
    return e2 ? new U(e2, this.#e) : null;
  }
  async getCollections() {
    return (await this.#e.invoke("getCollections")).map((t2) => new U(t2, this.#e));
  }
  notify = (e2, t2) => this.#e.notify(e2, t2);
  async getPluginData(e2) {
    return this.#e.invoke("getPluginData", e2);
  }
  async setPluginData(e2, t2) {
    return this.#e.invoke("setPluginData", e2, t2);
  }
  async getPluginDataKeys() {
    return this.#e.invoke("getPluginDataKeys");
  }
  async getColorStyles() {
    let e2 = await this.#e.invoke("getColorStyles");
    return c$1(this.#e, e2);
  }
  async getColorStyle(e2) {
    let t2 = await this.#e.invoke("getColorStyle", e2);
    return t2 ? c$1(this.#e, t2) : null;
  }
  async createColorStyle(e2) {
    let t2 = await this.#e.invoke("createColorStyle", e2);
    return c$1(this.#e, t2);
  }
  subscribeToColorStyles(e2) {
    return this.#e.subscribe("colorStyles", (t2) => {
      let n2 = c$1(this.#e, t2);
      return e2(n2);
    });
  }
  async getTextStyles() {
    let e2 = await this.#e.invoke("getTextStyles");
    return c$1(this.#e, e2);
  }
  async getTextStyle(e2) {
    let t2 = await this.#e.invoke("getTextStyle", e2);
    return t2 ? c$1(this.#e, t2) : null;
  }
  async createTextStyle(e2) {
    let t2 = await this.#e.invoke("createTextStyle", e2);
    return c$1(this.#e, t2);
  }
  subscribeToTextStyles(e2) {
    return this.#e.subscribe("textStyles", (t2) => {
      let n2 = c$1(this.#e, t2);
      return e2(n2);
    });
  }
  async getFont(e2, t2) {
    let n2 = await this.#e.invoke("getFont", e2, t2);
    return n2 ? c$1(this.#e, n2) : null;
  }
  async getFonts() {
    let e2 = await this.#e.invoke("getFonts");
    return c$1(this.#e, e2);
  }
  getLocales() {
    return this.#e.invoke("getLocales");
  }
  getDefaultLocale() {
    return this.#e.invoke("getDefaultLocale");
  }
  getActiveLocale() {
    return this.#e.invoke("getActiveLocale");
  }
  async getLocalizationGroups() {
    return this.#e.invoke("getLocalizationGroups");
  }
  setLocalizationData(e2) {
    return this.#e.invoke("setLocalizationData", e2);
  }
  async getRedirects() {
    return (await this.#e.invoke("getRedirects")).map((t2) => new J(t2, this.#e));
  }
  subscribeToRedirects(e2) {
    return this.#e.subscribe("redirects", (t2) => {
      let n2 = t2.map((a2) => new J(a2, this.#e));
      return e2(n2);
    });
  }
  async addRedirects(e2) {
    return (await this.#e.invoke("addRedirects", e2)).map((n2) => new J(n2, this.#e));
  }
  async removeRedirects(e2) {
    return this.#e.invoke("removeRedirects", e2);
  }
  async setRedirectOrder(e2) {
    return this.#e.invoke("setRedirectOrder", e2);
  }
  async createCodeFile(e2, t2, n2) {
    let a2 = await this.#e.invoke("createCodeFile", e2, t2, n2);
    return new B(a2, this.#e);
  }
  async getCodeFiles() {
    let e2 = await this.#e.invoke("getCodeFiles"), t2 = [];
    for (let n2 of e2) t2.push(new B(n2, this.#e));
    return t2;
  }
  async getCodeFile(e2) {
    let t2 = await this.#e.invoke("getCodeFile", e2);
    return t2 ? new B(t2, this.#e) : null;
  }
  lintCode(e2, t2, n2) {
    return Promise.resolve([]);
  }
  typecheckCode(e2, t2, n2, a2) {
    return this.#e.invoke("typecheckCode", e2, t2, n2, a2);
  }
  subscribeToCodeFiles(e2) {
    return this.#e.subscribe("codeFiles", (t2) => {
      let n2 = t2?.map((a2) => new B(a2, this.#e));
      return e2(n2);
    });
  }
  setMenu(e2) {
    return this.#e.setMenu(e2);
  }
  showContextMenu(e2, t2) {
    return this.#e.showContextMenu(e2, t2);
  }
  async unstable_ensureMinimumDependencyVersion(e2, t2) {
    return this.#e.invoke("unstable_ensureMinimumDependencyVersion", e2, t2);
  }
  async navigateTo(e2, t2) {
    return this.#e.invoke("navigateTo", e2, t2);
  }
  subscribeToOpenCodeFile(e2) {
    return this.#e.subscribe("openCodeFile", (t2) => {
      let n2 = t2 ? new B(t2, this.#e) : null;
      return e2(n2);
    });
  }
  async createDesignPage(e2) {
    let t2 = await this.#e.invoke("createDesignPage", e2), n2 = m$1(t2, this.#e);
    return l(n2 instanceof H$1, "Expected node to be a DesignPageNode"), n2;
  }
  async createWebPage(e2) {
    let t2 = await this.#e.invoke("createWebPage", e2), n2 = m$1(t2, this.#e);
    return l(n2 instanceof G, "Expected node to be a WebPageNode"), n2;
  }
  async createCollection(e2) {
    let t2 = await this.#e.invoke("createCollection", e2);
    return new U(t2, this.#e);
  }
  async createManagedCollection(e2) {
    let t2 = await this.#e.invoke("createManagedCollection", e2);
    return new Y(t2, this.#e);
  }
  async setCloseWarning(e2) {
    return this.#e.invoke("setCloseWarning", e2);
  }
  get [o.initialState]() {
    return this.#e.initialState;
  }
};
var Zt = class {
  constructor(e2) {
    this.origin = e2;
  }
  send(e2, t2) {
    window.parent.postMessage(e2, this.origin, t2);
  }
  onMessage(e2) {
    window.addEventListener("message", e2);
  }
};
async function Ra() {
  return new Promise((i27) => {
    function e2({ data: t2, origin: n2 }) {
      if (!Ti(t2)) return;
      window.removeEventListener("message", e2);
      let r2 = { transport: new Zt(n2), mode: t2.mode, permissionMap: t2.permissionMap, environmentInfo: t2.environmentInfo, origin: n2, theme: t2.theme ?? null, initialState: t2.initialState };
      i27(r2);
    }
    window.addEventListener("message", e2), window.parent.postMessage(Ci, "*");
  });
}
async function Ba() {
  return typeof window < "u" ? Ra() : null;
}
var Tn = await Ba(), T$1 = Tn ? new Me(new dt(Tn)) : new Proxy({}, { get(i27, e2) {
  throw new Error(`Cannot access framer.${String(e2)} in server runtime. Use createFramerInstance() with a custom transport.`);
} });
function _t(...i27) {
  let [e2, t2] = reactExports.useState(() => T$1.isAllowedTo(...i27)), [n2, a2] = reactExports.useState(i27);
  return si(i27, n2) || (t2(T$1.isAllowedTo(...i27)), a2(i27)), reactExports.useEffect(() => {
    let r2 = T$1.subscribeToIsAllowedTo(...n2, (d2) => {
      t2(d2);
    });
    return () => {
      r2();
    };
  }, [n2]), e2;
}
function Jt(i27, e2, t2) {
  let n2 = _t("makeDraggable"), a2 = Ga(() => ne(e2) ? e2() : e2);
  reactExports.useEffect(() => {
    if (!n2) return;
    let r2 = i27.current;
    if (r2 instanceof HTMLElement) return T$1.makeDraggable(r2, a2, t2);
  }, [n2, a2, t2]);
}
function Ga(i27) {
  let e2 = reactExports.useRef(i27);
  return e2.current = i27, reactExports.useCallback((...t2) => e2.current(...t2), []);
}
reactExports.forwardRef(function({ data: e2, children: t2, onDragComplete: n2, ...a2 }, r2) {
  let d2 = reactExports.useRef(null);
  if (Jt(d2, e2, n2), reactExports.isValidElement(t2)) {
    let y2 = Object.assign({}, a2);
    return f$1(t2.props) && Object.assign(y2, t2.props), y2.ref = Za(d2, r2, t2.ref), reactExports.cloneElement(t2, y2);
  }
  return reactExports.Children.count(t2) > 1 && reactExports.Children.only(t2), null;
});
var Xa = "current";
function Ya(i27) {
  return f$1(i27) && Xa in i27;
}
function Za(...i27) {
  return (e2) => {
    for (let t2 of i27) ne(t2) ? t2(e2) : Ya(t2) && (t2.current = e2);
  };
}
const framerAdapter = {
  name: "framer",
  async getSiteId() {
    try {
      const info = await T$1.getProjectInfo();
      return info.id;
    } catch (err) {
      T$1.notify("AccessBit could not read project info. Please try again.", { variant: "error" });
      throw err;
    }
  },
  async getSiteInfo() {
    try {
      const info = await T$1.getProjectInfo();
      return {
        siteId: info.id,
        siteName: info.name ?? void 0
      };
    } catch (err) {
      T$1.notify("AccessBit could not read project info. Please try again.", { variant: "error" });
      throw err;
    }
  },
  async getPublishInfo() {
    try {
      const info = await T$1.getPublishInfo();
      return {
        productionUrl: info?.production?.url ?? null,
        stagingUrl: info?.staging?.url ?? null
      };
    } catch (err) {
      T$1.notify("AccessBit could not read publish info. Please try again.", { variant: "error" });
      throw err;
    }
  },
  canInjectScript() {
    return T$1.isAllowedTo("setCustomCode");
  },
  async injectScript({ html, location = "headStart" }) {
    if (!T$1.isAllowedTo("setCustomCode")) {
      T$1.notify("AccessBit needs Custom Code permission to install the widget. Please ask a site owner to grant it in Framer.", { variant: "error" });
      return false;
    }
    try {
      T$1.setCustomCode({ html, location });
    } catch (err) {
      console.error("[platform/framer] setCustomCode failed:", err);
      return false;
    }
    return true;
  },
  showPluginUI({ width = 800, height = 600, position = "top right" }) {
    void T$1.showUI({ width, height, position });
  }
};
const platform = framerAdapter;
const leftLines = new URL("data:image/svg+xml,%3csvg%20width='334'%20height='391'%20viewBox='0%200%20334%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20opacity='0.3'%20d='M333%20233L274.375%20176.84C262.089%20165.07%20245.733%20158.5%20228.719%20158.5H133.095C110.08%20158.5%2088.727%20146.511%2076.745%20126.86L2.86102e-06%201.00002'%20stroke='url(%23paint0_linear_2001_149)'/%3e%3cpath%20opacity='0.3'%20d='M333%20158L274.375%20214.16C262.089%20225.93%20245.733%20232.5%20228.719%20232.5H133.095C110.08%20232.5%2088.727%20244.489%2076.745%20264.14L2.86102e-06%20390'%20stroke='url(%23paint1_linear_2001_149)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2001_149'%20x1='341.5'%20y1='242'%20x2='-2.1144e-05'%20y2='117'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230A081B'/%3e%3cstop%20offset='1'%20stop-color='%233CB4E5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_2001_149'%20x1='305'%20y1='175'%20x2='-2.19651e-05'%20y2='274'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230A081B'/%3e%3cstop%20offset='1'%20stop-color='%233CB4E5'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
const rightLines = new URL("data:image/svg+xml,%3csvg%20width='334'%20height='391'%20viewBox='0%200%20334%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20opacity='0.3'%20d='M1%20233L59.6249%20176.84C71.911%20165.07%2088.2675%20158.5%20105.281%20158.5H200.905C223.92%20158.5%20245.273%20146.511%20257.255%20126.86L334%201.00002'%20stroke='url(%23paint0_linear_2001_146)'/%3e%3cpath%20opacity='0.3'%20d='M1%20158L59.6249%20214.16C71.911%20225.93%2088.2675%20232.5%20105.281%20232.5H200.905C223.92%20232.5%20245.273%20244.489%20257.255%20264.14L334%20390'%20stroke='url(%23paint1_linear_2001_146)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2001_146'%20x1='-7.5'%20y1='242'%20x2='334'%20y2='117'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230A081B'/%3e%3cstop%20offset='1'%20stop-color='%233CB4E5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_2001_146'%20x1='29'%20y1='175'%20x2='334'%20y2='274'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230A081B'/%3e%3cstop%20offset='1'%20stop-color='%233CB4E5'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
const tutorialThumb = new URL("/assets/tutorial-thumbnail--A5RnQEz.svg", import.meta.url).href;
const playButton = new URL("/assets/play-button-Dj4O2NV2.svg", import.meta.url).href;
const WelcomeScreen = ({
  requestOTP: requestOTP2,
  verifyOTP,
  authenticated,
  isCheckingAuth: parentIsChecking,
  handleWelcomeScreen
}) => {
  const [step, setStep] = reactExports.useState(authenticated ? "done" : "email");
  const [email, setEmail] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [helpOpen, setHelpOpen] = reactExports.useState(false);
  const helpTriggerRef = reactExports.useRef(null);
  const helpDropdownRef = reactExports.useRef(null);
  const isCheckingAuth = parentIsChecking ?? false;
  reactExports.useEffect(() => {
    if (authenticated) setStep("done");
  }, [authenticated]);
  reactExports.useEffect(() => {
    const onSuccess = () => setStep("done");
    window.addEventListener("accessbit-auth-success", onSuccess);
    return () => window.removeEventListener("accessbit-auth-success", onSuccess);
  }, []);
  reactExports.useEffect(() => {
    if (!helpOpen) return;
    const handleClickOutside = (e2) => {
      const inTrigger = helpTriggerRef.current?.contains(e2.target);
      const inDropdown = helpDropdownRef.current?.contains(e2.target);
      if (!inTrigger && !inDropdown) setHelpOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [helpOpen]);
  const handleSendCode = async () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const publishInfo = await platform.getPublishInfo();
      if (!publishInfo.productionUrl && !publishInfo.stagingUrl) {
        setError("Please publish your Framer site first, then come back to authorize.");
        setIsLoading(false);
        return;
      }
      await requestOTP2(email.trim());
      setStep("otp");
    } catch (err) {
      const msg = err?.message || "";
      setError(msg === "Failed to fetch" ? "Could not reach the server. Make sure the Framer worker is deployed." : msg || "Failed to send code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleVerifyCode = async () => {
    if (!otp.trim()) {
      setError("Please enter the verification code.");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      await verifyOTP(email.trim(), otp.trim());
    } catch (err) {
      setError(err?.message || "Invalid code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleResend = async () => {
    setError(null);
    setOtp("");
    setIsLoading(true);
    try {
      await requestOTP2(email.trim());
      setError(null);
    } catch (err) {
      setError(err?.message || "Failed to resend code.");
    } finally {
      setIsLoading(false);
    }
  };
  const renderInstructions = () => {
    if (isCheckingAuth) return "Checking your account...";
    if (step === "done") return "You're connected! Click Next to customize your widget.";
    if (step === "otp") return `We sent a 6-digit code to ${email}. Enter it below.`;
    return "Enter your email to connect your AccessBit account.";
  };
  const renderForm = () => {
    if (isCheckingAuth) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "welcome-authorize-btn", disabled: true, children: "Loading..." });
    }
    if (step === "done") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "welcome-authorize-btn", onClick: handleWelcomeScreen, children: "Next" });
    }
    if (step === "email") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "otp-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "otp-input-field",
            type: "email",
            placeholder: "your@email.com",
            value: email,
            onChange: (e2) => {
              setEmail(e2.target.value);
              setError(null);
            },
            onKeyDown: (e2) => e2.key === "Enter" && handleSendCode(),
            disabled: isLoading,
            autoFocus: true
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "otp-error", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "welcome-authorize-btn",
            onClick: handleSendCode,
            disabled: isLoading,
            children: isLoading ? "Sending..." : "Send Code"
          }
        )
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "otp-form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "otp-input-field otp-code",
          type: "text",
          inputMode: "numeric",
          maxLength: 6,
          placeholder: "000000",
          value: otp,
          onChange: (e2) => {
            setOtp(e2.target.value.replace(/\D/g, ""));
            setError(null);
          },
          onKeyDown: (e2) => e2.key === "Enter" && handleVerifyCode(),
          disabled: isLoading,
          autoFocus: true
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "otp-error", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "welcome-authorize-btn",
          onClick: handleVerifyCode,
          disabled: isLoading,
          children: isLoading ? "Verifying..." : "Verify"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "otp-resend-btn", onClick: handleResend, disabled: isLoading, children: "Resend code" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "otp-disclosure", children: "We'll save your site info to set up your accessibility widget." })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "welcome-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "welcome-main-content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: leftLines, alt: "", className: "welcome-bg-lines-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rightLines, alt: "", className: "welcome-bg-lines-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: helpTriggerRef, className: "help-trigger", onClick: () => setHelpOpen((o2) => !o2), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: { width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", flexShrink: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0.5", y: "0.5", width: "17", height: "17", rx: "8.5", fill: "#191728", stroke: "#33304A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.96387 7.60141C5.96387 7.01874 6.08677 6.49069 6.33259 6.01726C6.58751 5.53474 6.94713 5.15691 7.41145 4.88378C7.88487 4.61065 8.43568 4.47409 9.06387 4.47409C9.64655 4.47409 10.1609 4.57879 10.607 4.78819C11.0532 4.99759 11.3946 5.28437 11.6313 5.64854C11.8771 6.01271 12 6.42696 12 6.89128C12 7.44664 11.8816 7.90185 11.6449 8.25692C11.4082 8.61198 11.0805 8.93519 10.6617 9.22652C10.2065 9.54517 9.88326 9.81375 9.69207 10.0323C9.50088 10.2416 9.40528 10.5148 9.40528 10.8516V11.2067H8.35374V10.7287C8.35374 10.3919 8.41747 10.1005 8.54493 9.85472C8.67239 9.6089 8.82716 9.40861 9.00925 9.25384C9.20044 9.08996 9.46901 8.88966 9.81498 8.65295C10.1518 8.41624 10.4022 8.17043 10.5661 7.91551C10.7391 7.66059 10.8256 7.35559 10.8256 7.00053C10.8256 6.56352 10.6617 6.20846 10.3339 5.93533C10.0153 5.65309 9.59647 5.51198 9.07753 5.51198C8.48575 5.51198 8.00778 5.70317 7.64361 6.08555C7.28854 6.46793 7.11101 6.97321 7.11101 7.60141H5.96387ZM8.12158 13.4327C8.12158 13.2051 8.19441 13.023 8.34008 12.8864C8.48575 12.7408 8.67239 12.6679 8.9 12.6679C9.1276 12.6679 9.31424 12.7408 9.45991 12.8864C9.60558 13.023 9.67841 13.2051 9.67841 13.4327C9.67841 13.6603 9.60558 13.8469 9.45991 13.9926C9.31424 14.1292 9.1276 14.1975 8.9 14.1975C8.67239 14.1975 8.48575 14.1292 8.34008 13.9926C8.19441 13.8469 8.12158 13.6603 8.12158 13.4327Z", fill: "white" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "help-trigger-text", children: "Need help ?" })
    ] }),
    helpOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: helpDropdownRef, className: "help-dropdown", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "help-dropdown-heading", children: "Help" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.youtube.com/watch?v=EXTnI4GxN6g", target: "_blank", rel: "noopener noreferrer", className: "help-dropdown-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 4.5L11.5 8L6 11.5V4.5Z", style: { fill: "currentColor" } }) }),
        "Watch tutorial"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.accessbit.io/help-center", target: "_blank", rel: "noopener noreferrer", className: "help-dropdown-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "2", width: "10", height: "12", rx: "1", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5.5", y1: "5.5", x2: "10.5", y2: "5.5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5.5", y1: "8", x2: "10.5", y2: "8", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5.5", y1: "10.5", x2: "8.5", y2: "10.5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" })
        ] }),
        "Check docs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.accessbit.io/contact", target: "_blank", rel: "noopener noreferrer", className: "help-dropdown-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "5.5", r: "2.5", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 13.5C2.5 11.015 5.015 9 8 9C10.985 9 13.5 11.015 13.5 13.5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", fill: "none" })
        ] }),
        "Get support"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.accessbit.io/contact", target: "_blank", rel: "noopener noreferrer", className: "help-dropdown-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V10C14 10.5523 13.5523 11 13 11H5.5L2 14V3Z", stroke: "currentColor", strokeWidth: "1.2", fill: "none", strokeLinejoin: "round" }) }),
        "Send feedback"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "welcome-center-wrapper", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "welcome-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "welcome-title", children: [
          "Welcome to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "welcome-title-highlight", children: "AccessBit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "welcome-instructions", children: renderInstructions() })
      ] }),
      renderForm(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.youtube.com/watch?v=EXTnI4GxN6g",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "tutorial-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tutorial-thumbnail", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tutorialThumb, alt: "Tutorial thumbnail", className: "tutorial-thumb-img" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: playButton,
                alt: "",
                style: { position: "absolute", top: "55px", left: "78px", width: "66px", height: "38px", zIndex: 10, pointerEvents: "none", display: "block" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tutorial-info", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tutorial-badge", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", fill: "#FF0000" }) }),
                "Tutorial"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tutorial-title", children: "How to Install AccessBit Accessibility Widget in Framer | Setup & Customization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tutorial-subtitle", children: "Welcome to AccessBit for Framer! 🎉" })
            ] })
          ]
        }
      )
    ] })
  ] }) });
};
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
var n, u, t, i25, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function s(n2, l2) {
  for (var u2 in l2) {
    n2[u2] = l2[u2];
  }
  return n2;
}
function a(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h(n2, l2, u2) {
  var t2, i27, r2, o2, f2 = arguments;
  if (l2 = s({}, l2), arguments.length > 3) {
    for (u2 = [u2], t2 = 3; t2 < arguments.length; t2++) {
      u2.push(f2[t2]);
    }
  }
  if (null != u2 && (l2.children = u2), null != n2 && null != n2.defaultProps) {
    for (i27 in n2.defaultProps) {
      void 0 === l2[i27] && (l2[i27] = n2.defaultProps[i27]);
    }
  }
  return o2 = l2.key, null != (r2 = l2.ref) && delete l2.ref, null != o2 && delete l2.key, v(n2, l2, o2, r2);
}
function v(l2, u2, t2, i27) {
  var r2 = { type: l2, props: u2, key: t2, ref: i27, __k: null, __p: null, __b: 0, __e: null, l: null, __c: null, constructor: void 0 };
  return n.vnode && n.vnode(r2), r2;
}
function d(n2) {
  return n2.children;
}
function y(n2) {
  if (null == n2 || "boolean" == typeof n2) {
    return null;
  }
  if ("string" == typeof n2 || "number" == typeof n2) {
    return v(null, n2, null, null);
  }
  if (null != n2.__e || null != n2.__c) {
    var l2 = v(n2.type, n2.props, n2.key, null);
    return l2.__e = n2.__e, l2;
  }
  return n2;
}
function m(n2, l2) {
  this.props = n2, this.context = l2;
}
function w(n2, l2) {
  if (null == l2) {
    return n2.__p ? w(n2.__p, n2.__p.__k.indexOf(n2) + 1) : null;
  }
  for (var u2; l2 < n2.__k.length; l2++) {
    if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      return u2.__e;
    }
  }
  return "function" == typeof n2.type ? w(n2) : null;
}
function g(n2) {
  var l2, u2;
  if (null != (n2 = n2.__p) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) {
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    }
    return g(n2);
  }
}
function k(l2) {
  (!l2.__d && (l2.__d = true) && 1 === u.push(l2) || i25 !== n.debounceRendering) && (i25 = n.debounceRendering, (n.debounceRendering || t)(_));
}
function _() {
  var n2, l2, t2, i27, r2, o2, f2, e2;
  for (u.sort(function(n3, l3) {
    return l3.__v.__b - n3.__v.__b;
  }); n2 = u.pop(); ) {
    n2.__d && (t2 = void 0, i27 = void 0, o2 = (r2 = (l2 = n2).__v).__e, f2 = l2.__P, e2 = l2.u, l2.u = false, f2 && (t2 = [], i27 = $(f2, r2, s({}, r2), l2.__n, void 0 !== f2.ownerSVGElement, null, t2, e2, null == o2 ? w(r2) : o2), j(t2, r2), i27 != o2 && g(r2)));
  }
}
function b(n2, l2, u2, t2, i27, r2, o2, c2, s2) {
  var h2, v2, p2, d2, y2, m2, g2, k2 = u2 && u2.__k || e, _2 = k2.length;
  if (c2 == f && (c2 = null != r2 ? r2[0] : _2 ? w(u2, 0) : null), h2 = 0, l2.__k = x(l2.__k, function(u3) {
    if (null != u3) {
      if (u3.__p = l2, u3.__b = l2.__b + 1, null === (p2 = k2[h2]) || p2 && u3.key == p2.key && u3.type === p2.type) {
        k2[h2] = void 0;
      } else {
        for (v2 = 0; v2 < _2; v2++) {
          if ((p2 = k2[v2]) && u3.key == p2.key && u3.type === p2.type) {
            k2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      }
      if (d2 = $(n2, u3, p2 = p2 || f, t2, i27, r2, o2, null, c2, s2), (v2 = u3.ref) && p2.ref != v2 && (g2 || (g2 = [])).push(v2, u3.__c || d2, u3), null != d2) {
        if (null == m2 && (m2 = d2), null != u3.l) {
          d2 = u3.l, u3.l = null;
        } else if (r2 == p2 || d2 != c2 || null == d2.parentNode) {
          n: if (null == c2 || c2.parentNode !== n2) {
            n2.appendChild(d2);
          } else {
            for (y2 = c2, v2 = 0; (y2 = y2.nextSibling) && v2 < _2; v2 += 2) {
              if (y2 == d2) {
                break n;
              }
            }
            n2.insertBefore(d2, c2);
          }
          "option" == l2.type && (n2.value = "");
        }
        c2 = d2.nextSibling, "function" == typeof l2.type && (l2.l = d2);
      }
    }
    return h2++, u3;
  }), l2.__e = m2, null != r2 && "function" != typeof l2.type) {
    for (h2 = r2.length; h2--; ) {
      null != r2[h2] && a(r2[h2]);
    }
  }
  for (h2 = _2; h2--; ) {
    null != k2[h2] && D(k2[h2], k2[h2]);
  }
  if (g2) {
    for (h2 = 0; h2 < g2.length; h2++) {
      A(g2[h2], g2[++h2], g2[++h2]);
    }
  }
}
function x(n2, l2, u2) {
  if (null == u2 && (u2 = []), null == n2 || "boolean" == typeof n2) {
    l2 && u2.push(l2(null));
  } else if (Array.isArray(n2)) {
    for (var t2 = 0; t2 < n2.length; t2++) {
      x(n2[t2], l2, u2);
    }
  } else {
    u2.push(l2 ? l2(y(n2)) : n2);
  }
  return u2;
}
function C2(n2, l2, u2, t2, i27) {
  var r2;
  for (r2 in u2) {
    r2 in l2 || N2(n2, r2, null, u2[r2], t2);
  }
  for (r2 in l2) {
    i27 && "function" != typeof l2[r2] || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || N2(n2, r2, l2[r2], u2[r2], t2);
  }
}
function P2(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = "number" == typeof u2 && false === c.test(l2) ? u2 + "px" : null == u2 ? "" : u2;
}
function N2(n2, l2, u2, t2, i27) {
  var r2, o2, f2, e2, c2;
  if ("key" === (l2 = i27 ? "className" === l2 ? "class" : l2 : "class" === l2 ? "className" : l2) || "children" === l2) ;
  else if ("style" === l2) {
    if (r2 = n2.style, "string" == typeof u2) {
      r2.cssText = u2;
    } else {
      if ("string" == typeof t2 && (r2.cssText = "", t2 = null), t2) {
        for (o2 in t2) {
          u2 && o2 in u2 || P2(r2, o2, "");
        }
      }
      if (u2) {
        for (f2 in u2) {
          t2 && u2[f2] === t2[f2] || P2(r2, f2, u2[f2]);
        }
      }
    }
  } else {
    "o" === l2[0] && "n" === l2[1] ? (e2 = l2 !== (l2 = l2.replace(/Capture$/, "")), c2 = l2.toLowerCase(), l2 = (c2 in n2 ? c2 : l2).slice(2), u2 ? (t2 || n2.addEventListener(l2, T, e2), (n2.t || (n2.t = {}))[l2] = u2) : n2.removeEventListener(l2, T, e2)) : "list" !== l2 && "tagName" !== l2 && "form" !== l2 && !i27 && l2 in n2 ? n2[l2] = null == u2 ? "" : u2 : "function" != typeof u2 && "dangerouslySetInnerHTML" !== l2 && (l2 !== (l2 = l2.replace(/^xlink:?/, "")) ? null == u2 || false === u2 ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : null == u2 || false === u2 ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
  }
}
function T(l2) {
  return this.t[l2.type](n.event ? n.event(l2) : l2);
}
function $(l2, u2, t2, i27, r2, o2, f2, e2, c2, a2) {
  var h2, v2, p2, y2, w2, g2, k2, _2, C3, P3, N3 = u2.type;
  if (void 0 !== u2.constructor) {
    return null;
  }
  (h2 = n.__b) && h2(u2);
  try {
    n: if ("function" == typeof N3) {
      if (_2 = u2.props, C3 = (h2 = N3.contextType) && i27[h2.__c], P3 = h2 ? C3 ? C3.props.value : h2.__p : i27, t2.__c ? k2 = (v2 = u2.__c = t2.__c).__p = v2.__E : ("prototype" in N3 && N3.prototype.render ? u2.__c = v2 = new N3(_2, P3) : (u2.__c = v2 = new m(_2, P3), v2.constructor = N3, v2.render = H2), C3 && C3.sub(v2), v2.props = _2, v2.state || (v2.state = {}), v2.context = P3, v2.__n = i27, p2 = v2.__d = true, v2.__h = []), null == v2.__s && (v2.__s = v2.state), null != N3.getDerivedStateFromProps && s(v2.__s == v2.state ? v2.__s = s({}, v2.__s) : v2.__s, N3.getDerivedStateFromProps(_2, v2.__s)), p2) {
        null == N3.getDerivedStateFromProps && null != v2.componentWillMount && v2.componentWillMount(), null != v2.componentDidMount && f2.push(v2);
      } else {
        if (null == N3.getDerivedStateFromProps && null == e2 && null != v2.componentWillReceiveProps && v2.componentWillReceiveProps(_2, P3), !e2 && null != v2.shouldComponentUpdate && false === v2.shouldComponentUpdate(_2, v2.__s, P3)) {
          for (v2.props = _2, v2.state = v2.__s, v2.__d = false, v2.__v = u2, u2.__e = null != c2 ? c2 !== t2.__e ? c2 : t2.__e : null, u2.__k = t2.__k, h2 = 0; h2 < u2.__k.length; h2++) {
            u2.__k[h2] && (u2.__k[h2].__p = u2);
          }
          break n;
        }
        null != v2.componentWillUpdate && v2.componentWillUpdate(_2, v2.__s, P3);
      }
      for (y2 = v2.props, w2 = v2.state, v2.context = P3, v2.props = _2, v2.state = v2.__s, (h2 = n.__r) && h2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, h2 = v2.render(v2.props, v2.state, v2.context), u2.__k = x(null != h2 && h2.type == d && null == h2.key ? h2.props.children : h2), null != v2.getChildContext && (i27 = s(s({}, i27), v2.getChildContext())), p2 || null == v2.getSnapshotBeforeUpdate || (g2 = v2.getSnapshotBeforeUpdate(y2, w2)), b(l2, u2, t2, i27, r2, o2, f2, c2, a2), v2.base = u2.__e; h2 = v2.__h.pop(); ) {
        v2.__s && (v2.state = v2.__s), h2.call(v2);
      }
      p2 || null == y2 || null == v2.componentDidUpdate || v2.componentDidUpdate(y2, w2, g2), k2 && (v2.__E = v2.__p = null);
    } else {
      u2.__e = z2(t2.__e, u2, t2, i27, r2, o2, f2, a2);
    }
    (h2 = n.diffed) && h2(u2);
  } catch (l3) {
    n.__e(l3, u2, t2);
  }
  return u2.__e;
}
function j(l2, u2) {
  for (var t2; t2 = l2.pop(); ) {
    try {
      t2.componentDidMount();
    } catch (l3) {
      n.__e(l3, t2.__v);
    }
  }
  n.__c && n.__c(u2);
}
function z2(n2, l2, u2, t2, i27, r2, o2, c2) {
  var s2, a2, h2, v2, p2 = u2.props, d2 = l2.props;
  if (i27 = "svg" === l2.type || i27, null == n2 && null != r2) {
    for (s2 = 0; s2 < r2.length; s2++) {
      if (null != (a2 = r2[s2]) && (null === l2.type ? 3 === a2.nodeType : a2.localName === l2.type)) {
        n2 = a2, r2[s2] = null;
        break;
      }
    }
  }
  if (null == n2) {
    if (null === l2.type) {
      return document.createTextNode(d2);
    }
    n2 = i27 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type), r2 = null;
  }
  return null === l2.type ? p2 !== d2 && (null != r2 && (r2[r2.indexOf(n2)] = null), n2.data = d2) : l2 !== u2 && (null != r2 && (r2 = e.slice.call(n2.childNodes)), h2 = (p2 = u2.props || f).dangerouslySetInnerHTML, v2 = d2.dangerouslySetInnerHTML, c2 || (v2 || h2) && (v2 && h2 && v2.__html == h2.__html || (n2.innerHTML = v2 && v2.__html || "")), C2(n2, d2, p2, i27, c2), l2.__k = l2.props.children, v2 || b(n2, l2, u2, t2, "foreignObject" !== l2.type && i27, r2, o2, f, c2), c2 || ("value" in d2 && void 0 !== d2.value && d2.value !== n2.value && (n2.value = null == d2.value ? "" : d2.value), "checked" in d2 && void 0 !== d2.checked && d2.checked !== n2.checked && (n2.checked = d2.checked))), n2;
}
function A(l2, u2, t2) {
  try {
    "function" == typeof l2 ? l2(u2) : l2.current = u2;
  } catch (l3) {
    n.__e(l3, t2);
  }
}
function D(l2, u2, t2) {
  var i27, r2, o2;
  if (n.unmount && n.unmount(l2), (i27 = l2.ref) && A(i27, null, u2), t2 || "function" == typeof l2.type || (t2 = null != (r2 = l2.__e)), l2.__e = l2.l = null, null != (i27 = l2.__c)) {
    if (i27.componentWillUnmount) {
      try {
        i27.componentWillUnmount();
      } catch (l3) {
        n.__e(l3, u2);
      }
    }
    i27.base = i27.__P = null;
  }
  if (i27 = l2.__k) {
    for (o2 = 0; o2 < i27.length; o2++) {
      i27[o2] && D(i27[o2], u2, t2);
    }
  }
  null != r2 && a(r2);
}
function H2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function I(l2, u2, t2) {
  var i27, o2, c2;
  n.__p && n.__p(l2, u2), o2 = (i27 = t2 === r) ? null : u2.__k, l2 = h(d, null, [l2]), c2 = [], $(u2, i27 ? u2.__k = l2 : u2.__k = l2, o2 || f, f, void 0 !== u2.ownerSVGElement, o2 ? null : e.slice.call(u2.childNodes), c2, false, f, i27), j(c2, l2);
}
n = {}, m.prototype.setState = function(n2, l2) {
  var u2 = this.__s !== this.state && this.__s || (this.__s = s({}, this.state));
  ("function" != typeof n2 || (n2 = n2(u2, this.props))) && s(u2, n2), null != n2 && this.__v && (this.u = false, l2 && this.__h.push(l2), k(this));
}, m.prototype.forceUpdate = function(n2) {
  this.__v && (n2 && this.__h.push(n2), this.u = true, k(this));
}, m.prototype.render = d, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i25 = n.debounceRendering, n.__e = function(n2, l2, u2) {
  for (var t2; l2 = l2.__p; ) {
    if ((t2 = l2.__c) && !t2.__p) {
      try {
        if (t2.constructor && null != t2.constructor.getDerivedStateFromError) {
          t2.setState(t2.constructor.getDerivedStateFromError(n2));
        } else {
          if (null == t2.componentDidCatch) {
            continue;
          }
          t2.componentDidCatch(n2);
        }
        return k(t2.__E = t2);
      } catch (l3) {
        n2 = l3;
      }
    }
  }
  throw n2;
}, r = f;
function _defineProperties(target, props) {
  for (var i27 = 0; i27 < props.length; i27++) {
    var descriptor = props[i27];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) {
      descriptor.writable = true;
    }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) {
    _defineProperties(Constructor.prototype, protoProps);
  }
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    var arguments$1 = arguments;
    for (var i27 = 1; i27 < arguments.length; i27++) {
      var source = arguments$1[i27];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH_3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH_4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var REGEX_FUNCTIONAL_RGB = new RegExp("rgb" + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_RGBA = new RegExp("rgba" + PERMISSIVE_MATCH_4);
var REGEX_FUNCTIONAL_HSL = new RegExp("hsl" + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_HSLA = new RegExp("hsla" + PERMISSIVE_MATCH_4);
var HEX_START = "^(?:#?|0x?)";
var HEX_INT_SINGLE = "([0-9a-fA-F]{1})";
var HEX_INT_DOUBLE = "([0-9a-fA-F]{2})";
var REGEX_HEX_3 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + "$");
var REGEX_HEX_4 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + "$");
var REGEX_HEX_6 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + "$");
var REGEX_HEX_8 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + "$");
var KELVIN_MIN = 2e3;
var KELVIN_MAX = 4e4;
var log = Math.log, round = Math.round, floor = Math.floor;
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function parseUnit(str, max) {
  var isPercentage = str.indexOf("%") > -1;
  var num = parseFloat(str);
  return isPercentage ? max / 100 * num : num;
}
function parseHexInt(str) {
  return parseInt(str, 16);
}
function intToHex(_int) {
  return _int.toString(16).padStart(2, "0");
}
var IroColor = /* @__PURE__ */ function() {
  function IroColor2(value, onChange) {
    this.$ = {
      h: 0,
      s: 0,
      v: 0,
      a: 1
    };
    if (value) {
      this.set(value);
    }
    this.onChange = onChange;
    this.initialValue = _extends({}, this.$);
  }
  var _proto = IroColor2.prototype;
  _proto.set = function set(value) {
    if (typeof value === "string") {
      if (/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(value)) {
        this.hexString = value;
      } else if (/^rgba?/.test(value)) {
        this.rgbString = value;
      } else if (/^hsla?/.test(value)) {
        this.hslString = value;
      }
    } else if (typeof value === "object") {
      if (value instanceof IroColor2) {
        this.hsva = value.hsva;
      } else if ("r" in value && "g" in value && "b" in value) {
        this.rgb = value;
      } else if ("h" in value && "s" in value && "v" in value) {
        this.hsv = value;
      } else if ("h" in value && "s" in value && "l" in value) {
        this.hsl = value;
      } else if ("kelvin" in value) {
        this.kelvin = value.kelvin;
      }
    } else {
      throw new Error("Invalid color value");
    }
  };
  _proto.setChannel = function setChannel(format, channel, value) {
    var _extends2;
    this[format] = _extends({}, this[format], (_extends2 = {}, _extends2[channel] = value, _extends2));
  };
  _proto.reset = function reset() {
    this.hsva = this.initialValue;
  };
  _proto.clone = function clone() {
    return new IroColor2(this);
  };
  _proto.unbind = function unbind() {
    this.onChange = void 0;
  };
  IroColor2.hsvToRgb = function hsvToRgb(hsv) {
    var h2 = hsv.h / 60;
    var s2 = hsv.s / 100;
    var v2 = hsv.v / 100;
    var i27 = floor(h2);
    var f2 = h2 - i27;
    var p2 = v2 * (1 - s2);
    var q2 = v2 * (1 - f2 * s2);
    var t2 = v2 * (1 - (1 - f2) * s2);
    var mod3 = i27 % 6;
    var r2 = [v2, q2, p2, p2, t2, v2][mod3];
    var g2 = [t2, v2, v2, q2, p2, p2][mod3];
    var b2 = [p2, p2, t2, v2, v2, q2][mod3];
    return {
      r: clamp(r2 * 255, 0, 255),
      g: clamp(g2 * 255, 0, 255),
      b: clamp(b2 * 255, 0, 255)
    };
  };
  IroColor2.rgbToHsv = function rgbToHsv(rgb) {
    var r2 = rgb.r / 255;
    var g2 = rgb.g / 255;
    var b2 = rgb.b / 255;
    var max = Math.max(r2, g2, b2);
    var min = Math.min(r2, g2, b2);
    var delta = max - min;
    var hue = 0;
    var value = max;
    var saturation = max === 0 ? 0 : delta / max;
    switch (max) {
      case min:
        hue = 0;
        break;
      case r2:
        hue = (g2 - b2) / delta + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        hue = (b2 - r2) / delta + 2;
        break;
      case b2:
        hue = (r2 - g2) / delta + 4;
        break;
    }
    return {
      h: hue * 60 % 360,
      s: clamp(saturation * 100, 0, 100),
      v: clamp(value * 100, 0, 100)
    };
  };
  IroColor2.hsvToHsl = function hsvToHsl(hsv) {
    var s2 = hsv.s / 100;
    var v2 = hsv.v / 100;
    var l2 = (2 - s2) * v2;
    var divisor = l2 <= 1 ? l2 : 2 - l2;
    var saturation = divisor < 1e-9 ? 0 : s2 * v2 / divisor;
    return {
      h: hsv.h,
      s: clamp(saturation * 100, 0, 100),
      l: clamp(l2 * 50, 0, 100)
    };
  };
  IroColor2.hslToHsv = function hslToHsv(hsl) {
    var l2 = hsl.l * 2;
    var s2 = hsl.s * (l2 <= 100 ? l2 : 200 - l2) / 100;
    var saturation = l2 + s2 < 1e-9 ? 0 : 2 * s2 / (l2 + s2);
    return {
      h: hsl.h,
      s: clamp(saturation * 100, 0, 100),
      v: clamp((l2 + s2) / 2, 0, 100)
    };
  };
  IroColor2.kelvinToRgb = function kelvinToRgb(kelvin) {
    var temp = kelvin / 100;
    var r2, g2, b2;
    if (temp < 66) {
      r2 = 255;
      g2 = -155.25485562709179 - 0.44596950469579133 * (g2 = temp - 2) + 104.49216199393888 * log(g2);
      b2 = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b2 = temp - 10) + 115.67994401066147 * log(b2);
    } else {
      r2 = 351.97690566805693 + 0.114206453784165 * (r2 = temp - 55) - 40.25366309332127 * log(r2);
      g2 = 325.4494125711974 + 0.07943456536662342 * (g2 = temp - 50) - 28.0852963507957 * log(g2);
      b2 = 255;
    }
    return {
      r: clamp(floor(r2), 0, 255),
      g: clamp(floor(g2), 0, 255),
      b: clamp(floor(b2), 0, 255)
    };
  };
  IroColor2.rgbToKelvin = function rgbToKelvin(rgb) {
    var r2 = rgb.r, b2 = rgb.b;
    var eps = 0.4;
    var minTemp = KELVIN_MIN;
    var maxTemp = KELVIN_MAX;
    var temp;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      var _rgb = IroColor2.kelvinToRgb(temp);
      if (_rgb.b / _rgb.r >= b2 / r2) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return temp;
  };
  _createClass(IroColor2, [{
    key: "hsv",
    get: function get() {
      var value = this.$;
      return {
        h: value.h,
        s: value.s,
        v: value.v
      };
    },
    set: function set(newValue) {
      var oldValue = this.$;
      newValue = _extends({}, oldValue, newValue);
      if (this.onChange) {
        var changes = {
          h: false,
          v: false,
          s: false,
          a: false
        };
        for (var key in oldValue) {
          changes[key] = newValue[key] != oldValue[key];
        }
        this.$ = newValue;
        if (changes.h || changes.s || changes.v || changes.a) {
          this.onChange(this, changes);
        }
      } else {
        this.$ = newValue;
      }
    }
  }, {
    key: "hsva",
    get: function get() {
      return _extends({}, this.$);
    },
    set: function set(value) {
      this.hsv = value;
    }
  }, {
    key: "hue",
    get: function get() {
      return this.$.h;
    },
    set: function set(value) {
      this.hsv = {
        h: value
      };
    }
  }, {
    key: "saturation",
    get: function get() {
      return this.$.s;
    },
    set: function set(value) {
      this.hsv = {
        s: value
      };
    }
  }, {
    key: "value",
    get: function get() {
      return this.$.v;
    },
    set: function set(value) {
      this.hsv = {
        v: value
      };
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.$.a;
    },
    set: function set(value) {
      this.hsv = _extends({}, this.hsv, {
        a: value
      });
    }
  }, {
    key: "kelvin",
    get: function get() {
      return IroColor2.rgbToKelvin(this.rgb);
    },
    set: function set(value) {
      this.rgb = IroColor2.kelvinToRgb(value);
    }
  }, {
    key: "red",
    get: function get() {
      var rgb = this.rgb;
      return rgb.r;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        r: value
      });
    }
  }, {
    key: "green",
    get: function get() {
      var rgb = this.rgb;
      return rgb.g;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        g: value
      });
    }
  }, {
    key: "blue",
    get: function get() {
      var rgb = this.rgb;
      return rgb.b;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        b: value
      });
    }
  }, {
    key: "rgb",
    get: function get() {
      var _IroColor$hsvToRgb = IroColor2.hsvToRgb(this.$), r2 = _IroColor$hsvToRgb.r, g2 = _IroColor$hsvToRgb.g, b2 = _IroColor$hsvToRgb.b;
      return {
        r: round(r2),
        g: round(g2),
        b: round(b2)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor2.rgbToHsv(value), {
        a: value.a === void 0 ? 1 : value.a
      });
    }
  }, {
    key: "rgba",
    get: function get() {
      return _extends({}, this.rgb, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.rgb = value;
    }
  }, {
    key: "hsl",
    get: function get() {
      var _IroColor$hsvToHsl = IroColor2.hsvToHsl(this.$), h2 = _IroColor$hsvToHsl.h, s2 = _IroColor$hsvToHsl.s, l2 = _IroColor$hsvToHsl.l;
      return {
        h: round(h2),
        s: round(s2),
        l: round(l2)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor2.hslToHsv(value), {
        a: value.a === void 0 ? 1 : value.a
      });
    }
  }, {
    key: "hsla",
    get: function get() {
      return _extends({}, this.hsl, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.hsl = value;
    }
  }, {
    key: "rgbString",
    get: function get() {
      var rgb = this.rgb;
      return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    },
    set: function set(value) {
      var match;
      var r2, g2, b2, a2 = 1;
      if (match = REGEX_FUNCTIONAL_RGB.exec(value)) {
        r2 = parseUnit(match[1], 255);
        g2 = parseUnit(match[2], 255);
        b2 = parseUnit(match[3], 255);
      } else if (match = REGEX_FUNCTIONAL_RGBA.exec(value)) {
        r2 = parseUnit(match[1], 255);
        g2 = parseUnit(match[2], 255);
        b2 = parseUnit(match[3], 255);
        a2 = parseUnit(match[4], 1);
      }
      if (match) {
        this.rgb = {
          r: r2,
          g: g2,
          b: b2,
          a: a2
        };
      } else {
        throw new Error("Invalid rgb string");
      }
    }
  }, {
    key: "rgbaString",
    get: function get() {
      var rgba = this.rgba;
      return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
    },
    set: function set(value) {
      this.rgbString = value;
    }
  }, {
    key: "hexString",
    get: function get() {
      var rgb = this.rgb;
      return "#" + intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
    },
    set: function set(value) {
      var match;
      var r2, g2, b2, a2 = 255;
      if (match = REGEX_HEX_3.exec(value)) {
        r2 = parseHexInt(match[1]) * 17;
        g2 = parseHexInt(match[2]) * 17;
        b2 = parseHexInt(match[3]) * 17;
      } else if (match = REGEX_HEX_4.exec(value)) {
        r2 = parseHexInt(match[1]) * 17;
        g2 = parseHexInt(match[2]) * 17;
        b2 = parseHexInt(match[3]) * 17;
        a2 = parseHexInt(match[4]) * 17;
      } else if (match = REGEX_HEX_6.exec(value)) {
        r2 = parseHexInt(match[1]);
        g2 = parseHexInt(match[2]);
        b2 = parseHexInt(match[3]);
      } else if (match = REGEX_HEX_8.exec(value)) {
        r2 = parseHexInt(match[1]);
        g2 = parseHexInt(match[2]);
        b2 = parseHexInt(match[3]);
        a2 = parseHexInt(match[4]);
      }
      if (match) {
        this.rgb = {
          r: r2,
          g: g2,
          b: b2,
          a: a2 / 255
        };
      } else {
        throw new Error("Invalid hex string");
      }
    }
  }, {
    key: "hex8String",
    get: function get() {
      var rgba = this.rgba;
      return "#" + intToHex(rgba.r) + intToHex(rgba.g) + intToHex(rgba.b) + intToHex(floor(rgba.a * 255));
    },
    set: function set(value) {
      this.hexString = value;
    }
  }, {
    key: "hslString",
    get: function get() {
      var hsl = this.hsl;
      return "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
    },
    set: function set(value) {
      var match;
      var h2, s2, l2, a2 = 1;
      if (match = REGEX_FUNCTIONAL_HSL.exec(value)) {
        h2 = parseUnit(match[1], 360);
        s2 = parseUnit(match[2], 100);
        l2 = parseUnit(match[3], 100);
      } else if (match = REGEX_FUNCTIONAL_HSLA.exec(value)) {
        h2 = parseUnit(match[1], 360);
        s2 = parseUnit(match[2], 100);
        l2 = parseUnit(match[3], 100);
        a2 = parseUnit(match[4], 1);
      }
      if (match) {
        this.hsl = {
          h: h2,
          s: s2,
          l: l2,
          a: a2
        };
      } else {
        throw new Error("Invalid hsl string");
      }
    }
  }, {
    key: "hslaString",
    get: function get() {
      var hsla = this.hsla;
      return "hsla(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
    },
    set: function set(value) {
      this.hslString = value;
    }
  }]);
  return IroColor2;
}();
var sliderDefaultOptions = {
  sliderShape: "bar",
  sliderType: "value",
  minTemperature: 2200,
  maxTemperature: 11e3
};
function getSliderDimensions(props) {
  var _sliderSize;
  var width = props.width, sliderSize = props.sliderSize, borderWidth = props.borderWidth, handleRadius = props.handleRadius, padding = props.padding, sliderShape = props.sliderShape;
  var ishorizontal = props.layoutDirection === "horizontal";
  sliderSize = (_sliderSize = sliderSize) != null ? _sliderSize : padding * 2 + handleRadius * 2;
  if (sliderShape === "circle") {
    return {
      handleStart: props.padding + props.handleRadius,
      handleRange: width - padding * 2 - handleRadius * 2,
      width,
      height: width,
      cx: width / 2,
      cy: width / 2,
      radius: width / 2 - borderWidth / 2
    };
  } else {
    return {
      handleStart: sliderSize / 2,
      handleRange: width - sliderSize,
      radius: sliderSize / 2,
      x: 0,
      y: 0,
      width: ishorizontal ? sliderSize : width,
      height: ishorizontal ? width : sliderSize
    };
  }
}
function getCurrentSliderValue(props, color) {
  var hsva = color.hsva;
  var rgb = color.rgb;
  switch (props.sliderType) {
    case "red":
      return rgb.r / 2.55;
    case "green":
      return rgb.g / 2.55;
    case "blue":
      return rgb.b / 2.55;
    case "alpha":
      return hsva.a * 100;
    case "kelvin":
      var minTemperature = props.minTemperature, maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      var percent = (color.kelvin - minTemperature) / temperatureRange * 100;
      return Math.max(0, Math.min(percent, 100));
    case "hue":
      return hsva.h /= 3.6;
    case "saturation":
      return hsva.s;
    case "value":
    default:
      return hsva.v;
  }
}
function getSliderValueFromInput(props, x2, y2) {
  var _getSliderDimensions = getSliderDimensions(props), handleRange = _getSliderDimensions.handleRange, handleStart = _getSliderDimensions.handleStart;
  var handlePos;
  if (props.layoutDirection === "horizontal") {
    handlePos = -1 * y2 + handleRange + handleStart;
  } else {
    handlePos = x2 - handleStart;
  }
  handlePos = Math.max(Math.min(handlePos, handleRange), 0);
  var percent = Math.round(100 / handleRange * handlePos);
  switch (props.sliderType) {
    case "kelvin":
      var minTemperature = props.minTemperature, maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      return minTemperature + temperatureRange * (percent / 100);
    case "alpha":
      return percent / 100;
    case "hue":
      return percent * 3.6;
    case "red":
    case "blue":
    case "green":
      return percent * 2.55;
    default:
      return percent;
  }
}
function getSliderHandlePosition(props, color) {
  var _getSliderDimensions2 = getSliderDimensions(props), width = _getSliderDimensions2.width, height = _getSliderDimensions2.height, handleRange = _getSliderDimensions2.handleRange, handleStart = _getSliderDimensions2.handleStart;
  var ishorizontal = props.layoutDirection === "horizontal";
  var sliderValue = getCurrentSliderValue(props, color);
  var midPoint = ishorizontal ? width / 2 : height / 2;
  var handlePos = handleStart + sliderValue / 100 * handleRange;
  if (ishorizontal) {
    handlePos = -1 * handlePos + handleRange + handleStart * 2;
  }
  return {
    x: ishorizontal ? midPoint : handlePos,
    y: ishorizontal ? handlePos : midPoint
  };
}
function getSliderGradient(props, color) {
  var hsv = color.hsv;
  var rgb = color.rgb;
  switch (props.sliderType) {
    case "red":
      return [[0, "rgb(0," + rgb.g + "," + rgb.b + ")"], [100, "rgb(255," + rgb.g + "," + rgb.b + ")"]];
    case "green":
      return [[0, "rgb(" + rgb.r + ",0," + rgb.b + ")"], [100, "rgb(" + rgb.r + ",255," + rgb.b + ")"]];
    case "blue":
      return [[0, "rgb(" + rgb.r + "," + rgb.g + ",0)"], [100, "rgb(" + rgb.r + "," + rgb.g + ",255)"]];
    case "alpha":
      return [[0, "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0)"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"]];
    case "kelvin":
      var stops = [];
      var min = props.minTemperature;
      var max = props.maxTemperature;
      var numStops = 8;
      var range = max - min;
      for (var kelvin = min, stop = 0; kelvin < max; kelvin += range / numStops, stop += 1) {
        var _IroColor$kelvinToRgb = IroColor.kelvinToRgb(kelvin), r2 = _IroColor$kelvinToRgb.r, g2 = _IroColor$kelvinToRgb.g, b2 = _IroColor$kelvinToRgb.b;
        stops.push([100 / numStops * stop, "rgb(" + r2 + "," + g2 + "," + b2 + ")"]);
      }
      return stops;
    case "hue":
      return [[0, "#f00"], [16.666, "#ff0"], [33.333, "#0f0"], [50, "#0ff"], [66.666, "#00f"], [83.333, "#f0f"], [100, "#f00"]];
    case "saturation":
      var noSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 0,
        v: hsv.v
      });
      var fullSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 100,
        v: hsv.v
      });
      return [[0, "hsl(" + noSat.h + "," + noSat.s + "%," + noSat.l + "%)"], [100, "hsl(" + fullSat.h + "," + fullSat.s + "%," + fullSat.l + "%)"]];
    case "value":
    default:
      var hsl = IroColor.hsvToHsl({
        h: hsv.h,
        s: hsv.s,
        v: 100
      });
      return [[0, "#000"], [100, "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)"]];
  }
}
var TAU = Math.PI * 2;
var mod = function mod2(a2, n2) {
  return (a2 % n2 + n2) % n2;
};
var dist = function dist2(x2, y2) {
  return Math.sqrt(x2 * x2 + y2 * y2);
};
function getHandleRange(props) {
  return props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
}
function isInputInsideWheel(props, x2, y2) {
  var _getWheelDimensions = getWheelDimensions(props), cx = _getWheelDimensions.cx, cy = _getWheelDimensions.cy;
  var r2 = props.width / 2;
  return dist(cx - x2, cy - y2) < r2;
}
function getWheelDimensions(props) {
  var r2 = props.width / 2;
  return {
    width: props.width,
    radius: r2 - props.borderWidth,
    cx: r2,
    cy: r2
  };
}
function translateWheelAngle(props, angle, invert) {
  var wheelAngle = props.wheelAngle;
  var wheelDirection = props.wheelDirection;
  if (invert && wheelDirection === "clockwise") {
    angle = wheelAngle + angle;
  } else if (wheelDirection === "clockwise") {
    angle = 360 - wheelAngle + angle;
  } else if (invert && wheelDirection === "anticlockwise") {
    angle = wheelAngle + 180 - angle;
  } else if (wheelDirection === "anticlockwise") {
    angle = wheelAngle - angle;
  }
  return mod(angle, 360);
}
function getWheelHandlePosition(props, color) {
  var hsv = color.hsv;
  var _getWheelDimensions2 = getWheelDimensions(props), cx = _getWheelDimensions2.cx, cy = _getWheelDimensions2.cy;
  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.wheelDirection === "clockwise" ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction
  };
}
function getWheelValueFromInput(props, x2, y2) {
  var _getWheelDimensions3 = getWheelDimensions(props), cx = _getWheelDimensions3.cx, cy = _getWheelDimensions3.cy;
  var handleRange = getHandleRange(props);
  x2 = cx - x2;
  y2 = cy - y2;
  var hue = translateWheelAngle(props, Math.atan2(-y2, -x2) * (360 / TAU));
  var handleDist = Math.min(dist(x2, y2), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round(100 / handleRange * handleDist)
  };
}
function getBoxDimensions(props) {
  var width = props.width, boxHeight = props.boxHeight, padding = props.padding, handleRadius = props.handleRadius;
  return {
    width,
    height: boxHeight != null ? boxHeight : width,
    radius: padding + handleRadius
  };
}
function getBoxValueFromInput(props, x2, y2) {
  var _getBoxDimensions = getBoxDimensions(props), width = _getBoxDimensions.width, height = _getBoxDimensions.height, radius = _getBoxDimensions.radius;
  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  var percentX = (x2 - handleStart) / handleRangeX * 100;
  var percentY = (y2 - handleStart) / handleRangeY * 100;
  return {
    s: Math.max(0, Math.min(percentX, 100)),
    v: Math.max(0, Math.min(100 - percentY, 100))
  };
}
function getBoxHandlePosition(props, color) {
  var _getBoxDimensions2 = getBoxDimensions(props), width = _getBoxDimensions2.width, height = _getBoxDimensions2.height, radius = _getBoxDimensions2.radius;
  var hsv = color.hsv;
  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  return {
    x: handleStart + hsv.s / 100 * handleRangeX,
    y: handleStart + (handleRangeY - hsv.v / 100 * handleRangeY)
  };
}
function getBoxGradients(props, color) {
  var hue = color.hue;
  return [
    // saturation gradient
    [[0, "#fff"], [100, "hsl(" + hue + ",100%,50%)"]],
    // lightness gradient
    [[0, "rgba(0,0,0,0)"], [100, "#000"]]
  ];
}
var BASE_ELEMENTS;
function resolveSvgUrl(url) {
  if (!BASE_ELEMENTS) {
    BASE_ELEMENTS = document.getElementsByTagName("base");
  }
  var ua2 = window.navigator.userAgent;
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua2);
  var isIos = /iPhone|iPod|iPad/i.test(ua2);
  var location = window.location;
  return (isSafari || isIos) && BASE_ELEMENTS.length > 0 ? location.protocol + "//" + location.host + location.pathname + location.search + url : url;
}
function getHandleAtPoint(props, x2, y2, handlePositions) {
  for (var i27 = 0; i27 < handlePositions.length; i27++) {
    var dX = handlePositions[i27].x - x2;
    var dY = handlePositions[i27].y - y2;
    var dist3 = Math.sqrt(dX * dX + dY * dY);
    if (dist3 < props.handleRadius) {
      return i27;
    }
  }
  return null;
}
function cssBorderStyles(props) {
  return {
    boxSizing: "border-box",
    border: props.borderWidth + "px solid " + props.borderColor
  };
}
function cssGradient(type, direction, stops) {
  return type + "-gradient(" + direction + ", " + stops.map(function(_ref) {
    var o2 = _ref[0], col = _ref[1];
    return col + " " + o2 + "%";
  }).join(",") + ")";
}
function cssValue(value) {
  if (typeof value === "string") {
    return value;
  }
  return value + "px";
}
var iroColorPickerOptionDefaults = {
  width: 300,
  height: 300,
  color: "#fff",
  colors: [],
  padding: 6,
  layoutDirection: "vertical",
  borderColor: "#fff",
  borderWidth: 0,
  handleRadius: 8,
  activeHandleRadius: null,
  handleSvg: null,
  handleProps: {
    x: 0,
    y: 0
  },
  wheelLightness: true,
  wheelAngle: 0,
  wheelDirection: "anticlockwise",
  sliderSize: null,
  sliderMargin: 12,
  boxHeight: null
};
var SECONDARY_EVENTS = [
  "mousemove",
  "touchmove",
  "mouseup",
  "touchend"
  /* TouchEnd */
];
var IroComponentWrapper = /* @__PURE__ */ function(Component) {
  function IroComponentWrapper2(props) {
    Component.call(this, props);
    this.uid = (Math.random() + 1).toString(36).substring(5);
  }
  if (Component) IroComponentWrapper2.__proto__ = Component;
  IroComponentWrapper2.prototype = Object.create(Component && Component.prototype);
  IroComponentWrapper2.prototype.constructor = IroComponentWrapper2;
  IroComponentWrapper2.prototype.render = function render(props) {
    var eventHandler = this.handleEvent.bind(this);
    var rootProps = {
      onMouseDown: eventHandler,
      // https://github.com/jaames/iro.js/issues/126
      // https://github.com/preactjs/preact/issues/2113#issuecomment-553408767
      ontouchstart: eventHandler
    };
    var isHorizontal = props.layoutDirection === "horizontal";
    var margin = props.margin === null ? props.sliderMargin : props.margin;
    var rootStyles = {
      overflow: "visible",
      display: isHorizontal ? "inline-block" : "block"
    };
    if (props.index > 0) {
      rootStyles[isHorizontal ? "marginLeft" : "marginTop"] = margin;
    }
    return h(d, null, props.children(this.uid, rootProps, rootStyles));
  };
  IroComponentWrapper2.prototype.handleEvent = function handleEvent(e2) {
    var this$1$1 = this;
    var inputHandler = this.props.onInput;
    var bounds = this.base.getBoundingClientRect();
    e2.preventDefault();
    var point = e2.touches ? e2.changedTouches[0] : e2;
    var x2 = point.clientX - bounds.left;
    var y2 = point.clientY - bounds.top;
    switch (e2.type) {
      case "mousedown":
      case "touchstart":
        var result = inputHandler(
          x2,
          y2,
          0
          /* Start */
        );
        if (result !== false) {
          SECONDARY_EVENTS.forEach(function(event) {
            document.addEventListener(event, this$1$1, { passive: false });
          });
        }
        break;
      case "mousemove":
      case "touchmove":
        inputHandler(
          x2,
          y2,
          1
          /* Move */
        );
        break;
      case "mouseup":
      case "touchend":
        inputHandler(
          x2,
          y2,
          2
          /* End */
        );
        SECONDARY_EVENTS.forEach(function(event) {
          document.removeEventListener(event, this$1$1, { passive: false });
        });
        break;
    }
  };
  return IroComponentWrapper2;
}(m);
function IroHandle(props) {
  var radius = props.r;
  var url = props.url;
  var cx = radius;
  var cy = radius;
  return h(
    "svg",
    { className: "IroHandle IroHandle--" + props.index + " " + (props.isActive ? "IroHandle--isActive" : ""), style: {
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0);",
      transform: "translate(" + cssValue(props.x) + ", " + cssValue(props.y) + ")",
      willChange: "transform",
      top: cssValue(-radius),
      left: cssValue(-radius),
      width: cssValue(radius * 2),
      height: cssValue(radius * 2),
      position: "absolute",
      overflow: "visible"
    } },
    url && h("use", Object.assign({ xlinkHref: resolveSvgUrl(url) }, props.props)),
    !url && h("circle", { cx, cy, r: radius, fill: "none", "stroke-width": 2, stroke: "#000" }),
    !url && h("circle", { cx, cy, r: radius - 2, fill: props.fill, "stroke-width": 2, stroke: "#fff" })
  );
}
IroHandle.defaultProps = {
  fill: "none",
  x: 0,
  y: 0,
  r: 8,
  url: null,
  props: { x: 0, y: 0 }
};
function IroSlider(props) {
  var activeIndex = props.activeIndex;
  var activeColor = activeIndex !== void 0 && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
  var ref = getSliderDimensions(props);
  var width = ref.width;
  var height = ref.height;
  var radius = ref.radius;
  var handlePos = getSliderHandlePosition(props, activeColor);
  var gradient = getSliderGradient(props, activeColor);
  function handleInput(x2, y2, type) {
    var value = getSliderValueFromInput(props, x2, y2);
    props.parent.inputActive = true;
    activeColor[props.sliderType] = value;
    props.onInput(type, props.id);
  }
  return h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function(uid, rootProps, rootStyles) {
    return h(
      "div",
      Object.assign({}, rootProps, { className: "IroSlider", style: Object.assign(
        {},
        {
          position: "relative",
          width: cssValue(width),
          height: cssValue(height),
          borderRadius: cssValue(radius),
          // checkered bg to represent alpha
          background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
          backgroundSize: "8px 8px"
        },
        rootStyles
      ) }),
      h("div", { className: "IroSliderGradient", style: Object.assign(
        {},
        {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: cssValue(radius),
          background: cssGradient("linear", props.layoutDirection === "horizontal" ? "to top" : "to right", gradient)
        },
        cssBorderStyles(props)
      ) }),
      h(IroHandle, { isActive: true, index: activeColor.index, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePos.x, y: handlePos.y })
    );
  });
}
IroSlider.defaultProps = Object.assign({}, sliderDefaultOptions);
function IroBox(props) {
  var ref = getBoxDimensions(props);
  var width = ref.width;
  var height = ref.height;
  var radius = ref.radius;
  var colors = props.colors;
  var colorPicker = props.parent;
  var activeIndex = props.activeIndex;
  var activeColor = activeIndex !== void 0 && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
  var gradients = getBoxGradients(props, activeColor);
  var handlePositions = colors.map(function(color) {
    return getBoxHandlePosition(props, color);
  });
  function handleInput(x2, y2, inputType) {
    if (inputType === 0) {
      var activeHandle = getHandleAtPoint(props, x2, y2, handlePositions);
      if (activeHandle !== null) {
        colorPicker.setActiveColor(activeHandle);
      } else {
        colorPicker.inputActive = true;
        activeColor.hsv = getBoxValueFromInput(props, x2, y2);
        props.onInput(inputType, props.id);
      }
    } else if (inputType === 1) {
      colorPicker.inputActive = true;
      activeColor.hsv = getBoxValueFromInput(props, x2, y2);
    }
    props.onInput(inputType, props.id);
  }
  return h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function(uid, rootProps, rootStyles) {
    return h(
      "div",
      Object.assign({}, rootProps, { className: "IroBox", style: Object.assign(
        {},
        {
          width: cssValue(width),
          height: cssValue(height),
          position: "relative"
        },
        rootStyles
      ) }),
      h("div", { className: "IroBox", style: Object.assign(
        {},
        {
          width: "100%",
          height: "100%",
          borderRadius: cssValue(radius)
        },
        cssBorderStyles(props),
        { background: cssGradient("linear", "to bottom", gradients[1]) + "," + cssGradient("linear", "to right", gradients[0]) }
      ) }),
      colors.filter(function(color) {
        return color !== activeColor;
      }).map(function(color) {
        return h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y });
      }),
      h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y })
    );
  });
}
var HUE_GRADIENT_CLOCKWISE = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)";
var HUE_GRADIENT_ANTICLOCKWISE = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
function IroWheel(props) {
  var ref = getWheelDimensions(props);
  var width = ref.width;
  var colors = props.colors;
  props.borderWidth;
  var colorPicker = props.parent;
  var activeColor = props.color;
  var hsv = activeColor.hsv;
  var handlePositions = colors.map(function(color) {
    return getWheelHandlePosition(props, color);
  });
  var circleStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    boxSizing: "border-box"
  };
  function handleInput(x2, y2, inputType) {
    if (inputType === 0) {
      if (!isInputInsideWheel(props, x2, y2)) {
        return false;
      }
      var activeHandle = getHandleAtPoint(props, x2, y2, handlePositions);
      if (activeHandle !== null) {
        colorPicker.setActiveColor(activeHandle);
      } else {
        colorPicker.inputActive = true;
        activeColor.hsv = getWheelValueFromInput(props, x2, y2);
        props.onInput(inputType, props.id);
      }
    } else if (inputType === 1) {
      colorPicker.inputActive = true;
      activeColor.hsv = getWheelValueFromInput(props, x2, y2);
    }
    props.onInput(inputType, props.id);
  }
  return h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function(uid, rootProps, rootStyles) {
    return h(
      "div",
      Object.assign({}, rootProps, { className: "IroWheel", style: Object.assign(
        {},
        {
          width: cssValue(width),
          height: cssValue(width),
          position: "relative"
        },
        rootStyles
      ) }),
      h("div", { className: "IroWheelHue", style: Object.assign(
        {},
        circleStyles,
        {
          transform: "rotateZ(" + (props.wheelAngle + 90) + "deg)",
          background: props.wheelDirection === "clockwise" ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE
        }
      ) }),
      h("div", { className: "IroWheelSaturation", style: Object.assign(
        {},
        circleStyles,
        { background: "radial-gradient(circle closest-side, #fff, transparent)" }
      ) }),
      props.wheelLightness && h("div", { className: "IroWheelLightness", style: Object.assign(
        {},
        circleStyles,
        {
          background: "#000",
          opacity: 1 - hsv.v / 100
        }
      ) }),
      h("div", { className: "IroWheelBorder", style: Object.assign(
        {},
        circleStyles,
        cssBorderStyles(props)
      ) }),
      colors.filter(function(color) {
        return color !== activeColor;
      }).map(function(color) {
        return h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y });
      }),
      h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y })
    );
  });
}
function createWidget(WidgetComponent) {
  var widgetFactory = function(parent, props) {
    var widget;
    var widgetRoot = document.createElement("div");
    I(h(WidgetComponent, Object.assign(
      {},
      { ref: function(ref) {
        return widget = ref;
      } },
      props
    )), widgetRoot);
    function mountWidget() {
      var container = parent instanceof Element ? parent : document.querySelector(parent);
      container.appendChild(widget.base);
      widget.onMount(container);
    }
    if (document.readyState !== "loading") {
      mountWidget();
    } else {
      document.addEventListener("DOMContentLoaded", mountWidget);
    }
    return widget;
  };
  widgetFactory.prototype = WidgetComponent.prototype;
  Object.assign(widgetFactory, WidgetComponent);
  widgetFactory.__component = WidgetComponent;
  return widgetFactory;
}
var IroColorPicker = /* @__PURE__ */ function(Component) {
  function IroColorPicker2(props) {
    var this$1$1 = this;
    Component.call(this, props);
    this.colors = [];
    this.inputActive = false;
    this.events = {};
    this.activeEvents = {};
    this.deferredEvents = {};
    this.id = props.id;
    var colors = props.colors.length > 0 ? props.colors : [props.color];
    colors.forEach(function(colorValue) {
      return this$1$1.addColor(colorValue);
    });
    this.setActiveColor(0);
    this.state = Object.assign(
      {},
      props,
      {
        color: this.color,
        colors: this.colors,
        layout: props.layout
      }
    );
  }
  if (Component) IroColorPicker2.__proto__ = Component;
  IroColorPicker2.prototype = Object.create(Component && Component.prototype);
  IroColorPicker2.prototype.constructor = IroColorPicker2;
  IroColorPicker2.prototype.addColor = function addColor(color, index) {
    if (index === void 0) index = this.colors.length;
    var newColor = new IroColor(color, this.onColorChange.bind(this));
    this.colors.splice(index, 0, newColor);
    this.colors.forEach(function(color2, index2) {
      return color2.index = index2;
    });
    if (this.state) {
      this.setState({ colors: this.colors });
    }
    this.deferredEmit("color:init", newColor);
  };
  IroColorPicker2.prototype.removeColor = function removeColor(index) {
    var color = this.colors.splice(index, 1)[0];
    color.unbind();
    this.colors.forEach(function(color2, index2) {
      return color2.index = index2;
    });
    if (this.state) {
      this.setState({ colors: this.colors });
    }
    if (color.index === this.color.index) {
      this.setActiveColor(0);
    }
    this.emit("color:remove", color);
  };
  IroColorPicker2.prototype.setActiveColor = function setActiveColor(index) {
    this.color = this.colors[index];
    if (this.state) {
      this.setState({ color: this.color });
    }
    this.emit("color:setActive", this.color);
  };
  IroColorPicker2.prototype.setColors = function setColors(newColorValues, activeColorIndex) {
    var this$1$1 = this;
    if (activeColorIndex === void 0) activeColorIndex = 0;
    this.colors.forEach(function(color) {
      return color.unbind();
    });
    this.colors = [];
    newColorValues.forEach(function(colorValue) {
      return this$1$1.addColor(colorValue);
    });
    this.setActiveColor(activeColorIndex);
    this.emit("color:setAll", this.colors);
  };
  IroColorPicker2.prototype.on = function on2(eventList, callback) {
    var this$1$1 = this;
    var events = this.events;
    (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function(eventType) {
      (events[eventType] || (events[eventType] = [])).push(callback);
      if (this$1$1.deferredEvents[eventType]) {
        this$1$1.deferredEvents[eventType].forEach(function(args) {
          callback.apply(null, args);
        });
        this$1$1.deferredEvents[eventType] = [];
      }
    });
  };
  IroColorPicker2.prototype.off = function off(eventList, callback) {
    var this$1$1 = this;
    (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function(eventType) {
      var callbackList = this$1$1.events[eventType];
      if (callbackList) {
        callbackList.splice(callbackList.indexOf(callback), 1);
      }
    });
  };
  IroColorPicker2.prototype.emit = function emit(eventType) {
    var this$1$1 = this;
    var args = [], len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];
    var activeEvents = this.activeEvents;
    var isEventActive = activeEvents.hasOwnProperty(eventType) ? activeEvents[eventType] : false;
    if (!isEventActive) {
      activeEvents[eventType] = true;
      var callbackList = this.events[eventType] || [];
      callbackList.forEach(function(fn2) {
        return fn2.apply(this$1$1, args);
      });
      activeEvents[eventType] = false;
    }
  };
  IroColorPicker2.prototype.deferredEmit = function deferredEmit(eventType) {
    var ref;
    var args = [], len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];
    var deferredEvents = this.deferredEvents;
    (ref = this).emit.apply(ref, [eventType].concat(args));
    (deferredEvents[eventType] || (deferredEvents[eventType] = [])).push(args);
  };
  IroColorPicker2.prototype.setOptions = function setOptions(newOptions) {
    this.setState(newOptions);
  };
  IroColorPicker2.prototype.resize = function resize(width) {
    this.setOptions({ width });
  };
  IroColorPicker2.prototype.reset = function reset() {
    this.colors.forEach(function(color) {
      return color.reset();
    });
    this.setState({ colors: this.colors });
  };
  IroColorPicker2.prototype.onMount = function onMount(container) {
    this.el = container;
    this.deferredEmit("mount", this);
  };
  IroColorPicker2.prototype.onColorChange = function onColorChange(color, changes) {
    this.setState({ color: this.color });
    if (this.inputActive) {
      this.inputActive = false;
      this.emit("input:change", color, changes);
    }
    this.emit("color:change", color, changes);
  };
  IroColorPicker2.prototype.emitInputEvent = function emitInputEvent(type, originId) {
    if (type === 0) {
      this.emit("input:start", this.color, originId);
    } else if (type === 1) {
      this.emit("input:move", this.color, originId);
    } else if (type === 2) {
      this.emit("input:end", this.color, originId);
    }
  };
  IroColorPicker2.prototype.render = function render(props, state) {
    var this$1$1 = this;
    var layout = state.layout;
    if (!Array.isArray(layout)) {
      switch (layout) {
        default:
          layout = [
            { component: IroWheel },
            { component: IroSlider }
          ];
      }
      if (state.transparency) {
        layout.push({
          component: IroSlider,
          options: {
            sliderType: "alpha"
          }
        });
      }
    }
    return h("div", { class: "IroColorPicker", id: state.id, style: {
      display: state.display
    } }, layout.map(function(ref, componentIndex) {
      var UiComponent = ref.component;
      var options = ref.options;
      return h(UiComponent, Object.assign({}, state, options, { ref: void 0, onInput: this$1$1.emitInputEvent.bind(this$1$1), parent: this$1$1, index: componentIndex }));
    }));
  };
  return IroColorPicker2;
}(m);
IroColorPicker.defaultProps = Object.assign(
  {},
  iroColorPickerOptionDefaults,
  {
    colors: [],
    display: "block",
    id: null,
    layout: "default",
    margin: null
  }
);
var IroColorPickerWidget = createWidget(IroColorPicker);
var iro;
(function(iro2) {
  iro2.version = "5.5.2";
  iro2.Color = IroColor;
  iro2.ColorPicker = IroColorPickerWidget;
  (function(ui2) {
    ui2.h = h;
    ui2.ComponentBase = IroComponentWrapper;
    ui2.Handle = IroHandle;
    ui2.Slider = IroSlider;
    ui2.Wheel = IroWheel;
    ui2.Box = IroBox;
  })(iro2.ui || (iro2.ui = {}));
})(iro || (iro = {}));
var iro$1 = iro;
const whitearrow$1 = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
const mobile = new URL("data:image/svg+xml,%3csvg%20width='18'%20height='22'%20viewBox='0%200%2018%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20d='M17%206V16C17%2020%2016%2021%2012%2021H6C2%2021%201%2020%201%2016V6C1%202%202%201%206%201H12C16%201%2017%202%2017%206Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%204.5H7'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%2018.1C9.85604%2018.1%2010.55%2017.406%2010.55%2016.55C10.55%2015.694%209.85604%2015%209%2015C8.14396%2015%207.45%2015.694%207.45%2016.55C7.45%2017.406%208.14396%2018.1%209%2018.1Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e", import.meta.url).href;
const monitor = new URL("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.44%202H17.55C21.11%202%2022%202.89%2022%206.44V12.77C22%2016.33%2021.11%2017.21%2017.56%2017.21H6.44C2.89%2017.22%202%2016.33%202%2012.78V6.44C2%202.89%202.89%202%206.44%202Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2017.22V22'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2013H22'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.5%2022H16.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", import.meta.url).href;
const icon1$1 = new URL("/assets/Accessibility-sUzXFXgh.webp", import.meta.url).href;
const ALLOWED_LINK_PROTOCOLS = /* @__PURE__ */ new Set(["https:", "http:"]);
const isValidStatementLink = (url) => {
  if (!url) return true;
  try {
    return ALLOWED_LINK_PROTOCOLS.has(new URL(url).protocol);
  } catch {
    return false;
  }
};
const CustomizationScreen = ({ onBack, onNext, existingCustomizationData, isLoadingExistingData = false }) => {
  const [isDesktopView, setIsDesktopView] = reactExports.useState(true);
  const [openDropdown, setOpenDropdown] = reactExports.useState(null);
  const [accessibilityStatementLink, setAccessibilityStatementLink] = reactExports.useState("");
  const [linkError, setLinkError] = reactExports.useState(null);
  const [triggerVerticalPosition, setTriggerVerticalPosition] = reactExports.useState("Bottom");
  const [triggerButtonSize, setTriggerButtonSize] = reactExports.useState("Medium");
  const [triggerButtonShape, setTriggerButtonShape] = reactExports.useState("Circle");
  const [triggerHorizontalOffset, setTriggerHorizontalOffset] = reactExports.useState("0px");
  const [hideTriggerButton, setHideTriggerButton] = reactExports.useState("No");
  const [triggerVerticalOffset, setTriggerVerticalOffset] = reactExports.useState("0px");
  const [triggerHorizontalPosition, setTriggerHorizontalPosition] = reactExports.useState("Left");
  const [btnColor, setBtnColor] = reactExports.useState("#007bff");
  const [showOnMobile, setShowOnMobile] = reactExports.useState("Show");
  const [mobileTriggerHorizontalPosition, setMobileTriggerHorizontalPosition] = reactExports.useState("Left");
  const [mobileTriggerVerticalPosition, setMobileTriggerVerticalPosition] = reactExports.useState("Bottom");
  const [mobileTriggerSize, setMobileTriggerSize] = reactExports.useState("Medium");
  const [mobileTriggerShape, setMobileTriggerShape] = reactExports.useState("Rounded");
  const [mobileTriggerHorizontalOffset, setMobileTriggerHorizontalOffset] = reactExports.useState("0");
  const [mobileTriggerVerticalOffset, setMobileTriggerVerticalOffset] = reactExports.useState("0");
  const [selectedIcon, setSelectedIcon] = reactExports.useState("accessibility");
  const [selectedIconName, setSelectedIconName] = reactExports.useState("Accessibility");
  const [btnOpen, setBtnOpen] = reactExports.useState(false);
  const [hexInput, setHexInput] = reactExports.useState("#007bff");
  const btnPickerInstance = reactExports.useRef(null);
  const btnDropdownRef = reactExports.useRef(null);
  const btnPickerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (existingCustomizationData) {
      setAccessibilityStatementLink(existingCustomizationData.accessibilityStatementLink || "");
      setTriggerVerticalPosition(existingCustomizationData.triggerVerticalPosition || "Bottom");
      setTriggerButtonSize(existingCustomizationData.triggerButtonSize || "Medium");
      setTriggerButtonShape(existingCustomizationData.triggerButtonShape || "Circle");
      setTriggerHorizontalOffset(existingCustomizationData.triggerHorizontalOffset || "0px");
      setHideTriggerButton(existingCustomizationData.hideTriggerButton || "No");
      setTriggerVerticalOffset(existingCustomizationData.triggerVerticalOffset || "0px");
      setTriggerHorizontalPosition(existingCustomizationData.triggerHorizontalPosition || "Left");
      setBtnColor(existingCustomizationData.triggerButtonColor || "#007bff");
      setShowOnMobile(existingCustomizationData.showOnMobile || "Show");
      setMobileTriggerHorizontalPosition(existingCustomizationData.mobileTriggerHorizontalPosition || "Left");
      setMobileTriggerVerticalPosition(existingCustomizationData.mobileTriggerVerticalPosition || "Bottom");
      setMobileTriggerSize(existingCustomizationData.mobileTriggerSize || "Medium");
      setMobileTriggerShape(existingCustomizationData.mobileTriggerShape || "Rounded");
      setMobileTriggerHorizontalOffset(existingCustomizationData.mobileTriggerHorizontalOffset || "0");
      setMobileTriggerVerticalOffset(existingCustomizationData.mobileTriggerVerticalOffset || "0");
      setSelectedIcon(existingCustomizationData.selectedIcon || "accessibility");
      setSelectedIconName(existingCustomizationData.selectedIconName || "Accessibility");
    }
  }, [existingCustomizationData]);
  reactExports.useEffect(() => {
    if (!btnPickerInstance.current && btnPickerRef.current) {
      btnPickerInstance.current = iro$1.ColorPicker(btnPickerRef.current, { width: 100, color: btnColor, borderWidth: 2, borderColor: "#ccc" });
    }
    if (btnPickerInstance.current) {
      btnPickerInstance.current.off("color:change");
      btnPickerInstance.current.on("color:change", (newColor) => handleColorChange(newColor.hexString));
    }
    return () => {
      if (btnPickerInstance.current) {
        btnPickerInstance.current.off("color:change");
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (btnOpen && btnPickerInstance.current) btnPickerInstance.current.color.set(btnColor);
  }, [btnOpen]);
  reactExports.useEffect(() => {
    setHexInput(btnColor);
  }, [btnColor]);
  const isCompleteHex = (v2) => /^#[0-9a-fA-F]{6}$/.test(v2);
  const handleHexInputChange = (rawValue) => {
    let next = rawValue.trim();
    if (next && !next.startsWith("#")) next = "#" + next;
    if (next.length > 7) next = next.substring(0, 7);
    setHexInput(next);
    if (isCompleteHex(next)) {
      setBtnColor(next);
      if (btnPickerInstance.current) {
        try {
          btnPickerInstance.current.color.set(next);
        } catch {
        }
      }
    }
  };
  const handleHexInputBlur = () => {
    if (!isCompleteHex(hexInput)) {
      setHexInput(btnColor);
    }
  };
  const handleHexInputKeyDown = (e2) => {
    if (e2.key === "Enter") {
      e2.target.blur();
    }
  };
  reactExports.useEffect(() => {
    function handleGlobalClickOutside(event) {
      if (btnOpen && btnDropdownRef.current && !btnDropdownRef.current.contains(event.target) && btnPickerRef.current && !btnPickerRef.current.contains(event.target)) {
        setBtnOpen(false);
      }
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if (openDropdown === key) setOpenDropdown(null);
        }
      });
    }
    document.addEventListener("mousedown", handleGlobalClickOutside);
    return () => document.removeEventListener("mousedown", handleGlobalClickOutside);
  }, [btnOpen, openDropdown]);
  const dropdownRefs = {
    triggerHorizontalPosition: reactExports.useRef(null),
    triggerVerticalPosition: reactExports.useRef(null),
    triggerButtonSize: reactExports.useRef(null),
    triggerButtonShape: reactExports.useRef(null),
    triggerHorizontalOffset: reactExports.useRef(null),
    hideTriggerButton: reactExports.useRef(null),
    triggerVerticalOffset: reactExports.useRef(null),
    showOnMobile: reactExports.useRef(null),
    mobileTriggerHorizontalPosition: reactExports.useRef(null),
    mobileTriggerVerticalPosition: reactExports.useRef(null),
    mobileTriggerSize: reactExports.useRef(null),
    mobileTriggerShape: reactExports.useRef(null),
    mobileTriggerHorizontalOffset: reactExports.useRef(null),
    mobileTriggerVerticalOffset: reactExports.useRef(null)
  };
  const positionOptions = [
    { label: "Left", value: "Left" },
    { label: "Right", value: "Right" }
  ];
  const verticalPositionOptions = [
    { label: "Top", value: "Top" },
    { label: "Middle", value: "Middle" },
    { label: "Bottom", value: "Bottom" }
  ];
  const sizeOptions = [
    { label: "Small", value: "Small" },
    { label: "Medium", value: "Medium" },
    { label: "Large", value: "Large" }
  ];
  const shapeOptions = [
    { label: "Circle", value: "Circle" },
    { label: "Square", value: "Square" },
    { label: "Rounded", value: "Rounded" }
  ];
  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" }
  ];
  const showOptions = [
    { label: "Show", value: "Show" },
    { label: "Hide", value: "Hide" }
  ];
  const mobileVerticalPositionOptions = [
    { label: "Top", value: "Top" },
    { label: "Middle", value: "Middle" },
    { label: "Bottom", value: "Bottom" }
  ];
  const mobileShapeOptions = [
    { label: "Rounded", value: "Rounded" },
    { label: "Square", value: "Square" },
    { label: "Circle", value: "Circle" }
  ];
  const getLabel = (opts, val) => (opts.find((o2) => o2.value === val) || {}).label || val;
  const handleNextPayment = async () => {
    if (!isValidStatementLink(accessibilityStatementLink)) {
      setLinkError("Please enter a valid URL starting with https:// or http://");
      return;
    }
    try {
      const customizationData = {
        // Map your state variables to the customization object
        triggerButtonColor: btnColor,
        triggerButtonShape,
        triggerButtonSize,
        triggerHorizontalPosition,
        triggerVerticalPosition,
        triggerHorizontalOffset,
        triggerVerticalOffset,
        hideTriggerButton,
        selectedIcon,
        selectedIconName,
        showOnMobile,
        mobileTriggerButtonColor: btnColor,
        // Use same color as desktop
        mobileTriggerShape,
        mobileTriggerSize,
        mobileTriggerHorizontalPosition,
        mobileTriggerVerticalPosition,
        mobileTriggerHorizontalOffset,
        mobileTriggerVerticalOffset,
        accessibilityStatementLink
      };
      onNext(customizationData);
    } catch (error) {
    }
  };
  const handleColorChange = (color) => {
    setBtnColor(color);
  };
  const handleShapeChange = (shape) => {
    setTriggerButtonShape(shape);
  };
  const handlePositionChange = (position) => {
    setTriggerHorizontalPosition(position);
  };
  const handleVerticalPositionChange = (position) => {
    setTriggerVerticalPosition(position);
  };
  const renderDropdown = (type, label, value, options, onPick) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `custom-select ${openDropdown === type ? "open" : ""}`, ref: dropdownRefs[type], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "selected",
          onClick: () => setOpenDropdown(openDropdown === type ? null : type),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getLabel(options, value) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "dropdown-icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      ),
      openDropdown === type && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "options", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          onClick: () => {
            onPick(opt.value);
            setOpenDropdown(null);
          },
          children: opt.label
        },
        opt.value
      )) })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "customization-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "customization-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "back-btn", onClick: onBack, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whitearrow$1, alt: "", style: { transform: "rotate(180deg)", width: "14px", height: "15px", marginRight: "8px" } }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "next-btn", onClick: handleNextPayment, children: [
          "Next",
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whitearrow$1, alt: "", style: { width: "14px", height: "15px", marginLeft: "8px" } })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step-navigation", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step active", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-number", children: "STEP 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-name", children: "Customization" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-number", children: "STEP 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-name", children: "Publish" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "left-panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Customization AccessWidget Interface" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "interface-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Accessibility Statement Link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "https://example.com/accessibility",
                value: accessibilityStatementLink,
                onChange: (e2) => {
                  const val = e2.target.value;
                  setAccessibilityStatementLink(val);
                  setLinkError(isValidStatementLink(val) ? null : "Please enter a valid URL starting with https:// or http://");
                },
                onBlur: () => {
                  if (!isValidStatementLink(accessibilityStatementLink)) {
                    setLinkError("Please enter a valid URL starting with https:// or http://");
                  }
                },
                style: linkError ? { borderColor: "#ef4444" } : void 0
              }
            ),
            linkError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#ef4444", fontSize: "12px", marginTop: "4px" }, children: linkError })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Customizing AccessWidget Trigger" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trigger-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Background Color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "color-picker-dropdown", ref: btnDropdownRef, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "color-picker-button", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      className: "color-picker-hex-input",
                      value: hexInput,
                      onChange: (e2) => handleHexInputChange(e2.target.value),
                      onBlur: handleHexInputBlur,
                      onKeyDown: handleHexInputKeyDown,
                      spellCheck: false,
                      autoComplete: "off",
                      "aria-label": "Hex color code",
                      placeholder: "#rrggbb",
                      maxLength: 7
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "color-preview",
                      style: { backgroundColor: btnColor },
                      onClick: () => setBtnOpen(!btnOpen),
                      "aria-label": btnOpen ? "Close color wheel" : "Open color wheel"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `color-picker-container ${btnOpen ? "visible" : "hidden"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: btnPickerRef }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Vertical Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("triggerVerticalPosition", "", triggerVerticalPosition, verticalPositionOptions, handleVerticalPositionChange) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Button Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("triggerButtonSize", "", triggerButtonSize, sizeOptions, setTriggerButtonSize) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Button Shape" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("triggerButtonShape", "", triggerButtonShape, shapeOptions, handleShapeChange) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Hide Trigger Button" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("hideTriggerButton", "", hideTriggerButton, yesNoOptions, setHideTriggerButton) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Horizontal Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("triggerHorizontalPosition", "", triggerHorizontalPosition, positionOptions, handlePositionChange) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Horizontal Offset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "50",
                  value: triggerHorizontalOffset.replace("px", ""),
                  onChange: (e2) => setTriggerHorizontalOffset(String(Math.min(50, Math.max(0, Number(e2.target.value)))) + "px"),
                  className: "offset-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Vertical Offset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "50",
                  value: triggerVerticalOffset.replace("px", ""),
                  onChange: (e2) => setTriggerVerticalOffset(String(Math.min(50, Math.max(0, Number(e2.target.value)))) + "px"),
                  className: "offset-input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Customizing AccessWidget for Mobile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Show On Mobile?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("showOnMobile", "", showOnMobile, showOptions, setShowOnMobile) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Mobile Trigger Horizontal Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("mobileTriggerHorizontalPosition", "", mobileTriggerHorizontalPosition, positionOptions, setMobileTriggerHorizontalPosition) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Mobile Trigger Vertical Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("mobileTriggerVerticalPosition", "", mobileTriggerVerticalPosition, mobileVerticalPositionOptions, setMobileTriggerVerticalPosition) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Mobile Trigger Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("mobileTriggerSize", "", mobileTriggerSize, sizeOptions, setMobileTriggerSize) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Trigger Mobile Shape" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-select-container", children: renderDropdown("mobileTriggerShape", "", mobileTriggerShape, mobileShapeOptions, setMobileTriggerShape) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Mobile Trigger Horizontal Offset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "50",
                  value: mobileTriggerHorizontalOffset,
                  onChange: (e2) => setMobileTriggerHorizontalOffset(String(Math.min(50, Math.max(0, Number(e2.target.value))))),
                  className: "offset-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Mobile Trigger Vertical Offset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "50",
                  value: mobileTriggerVerticalOffset,
                  onChange: (e2) => setMobileTriggerVerticalOffset(String(Math.min(50, Math.max(0, Number(e2.target.value))))),
                  className: "offset-input"
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right-panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "device-selector", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `device-btn ${isDesktopView ? "active" : ""}`,
                onClick: () => setIsDesktopView(true),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: monitor, alt: "" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `device-btn ${!isDesktopView ? "active" : ""}`,
                onClick: () => setIsDesktopView(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mobile, alt: "" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "10px" }, children: isDesktopView ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-window desktop-preview", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "browser-window", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "browser-controls", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "traffic-lights", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light red" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light yellow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light green" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "browser-content", children: hideTriggerButton === "No" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "accessibility-widget",
              style: {
                left: triggerHorizontalPosition === "Left" ? `calc(9px + ${parseInt(triggerHorizontalOffset) * 0.2}px)` : triggerHorizontalPosition === "Right" ? "auto" : "50%",
                right: triggerHorizontalPosition === "Right" ? `calc(9px + ${parseInt(triggerHorizontalOffset) * 0.2}px)` : "auto",
                top: triggerVerticalPosition === "Top" ? `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : "auto",
                bottom: triggerVerticalPosition === "Bottom" ? `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : "auto",
                transform: triggerHorizontalPosition === "Center" ? triggerVerticalPosition === "Middle" ? "translateX(-50%)" : "translateX(-50%)" : triggerVerticalPosition === "Middle" ? "translateY(-13%)" : "none"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `widget-trigger ${triggerButtonShape.toLowerCase()} ${triggerButtonSize.toLowerCase()}`,
                  style: { backgroundColor: btnColor },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: icon1$1,
                      alt: "Accessibility Icon",
                      className: "widget-icon"
                    }
                  )
                }
              )
            }
          ) })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-window mobile-preview", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-browser-window", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-browser-content", children: showOnMobile === "Show" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mobile-trigger-widget",
            style: {
              left: mobileTriggerHorizontalPosition === "Left" ? `calc(8px + ${Math.round(parseInt(mobileTriggerHorizontalOffset) * 0.4)}px)` : mobileTriggerHorizontalPosition === "Right" ? "auto" : "50%",
              right: mobileTriggerHorizontalPosition === "Right" ? `calc(8px + ${Math.round(parseInt(mobileTriggerHorizontalOffset) * 0.4)}px)` : "auto",
              top: mobileTriggerVerticalPosition === "Top" ? `calc(10px + ${Math.round(parseInt(mobileTriggerVerticalOffset) * 0.4)}px)` : mobileTriggerVerticalPosition === "Middle" ? "50%" : "auto",
              bottom: mobileTriggerVerticalPosition === "Bottom" ? `calc(10px + ${Math.round(parseInt(mobileTriggerVerticalOffset) * 0.4)}px)` : "auto",
              transform: mobileTriggerHorizontalPosition === "Center" ? mobileTriggerVerticalPosition === "Middle" ? "translateX(-50%)" : "translateX(-50%)" : mobileTriggerVerticalPosition === "Middle" ? "translateY(-50%)" : "none"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `mobile-widget-trigger ${mobileTriggerShape === "Rounded" ? "round" : mobileTriggerShape.toLowerCase()} ${mobileTriggerSize.toLowerCase()}`,
                style: { backgroundColor: btnColor },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: icon1$1,
                    alt: "Accessibility Icon",
                    className: "mobile-widget-icon"
                  }
                )
              }
            )
          }
        ) }) }) }) })
      ] })
    ] })
  ] });
};
const FRAMER_WORKER_URL = "https://accessbit-framer.web-8fb.workers.dev";
const framerEndpoints = {
  otp: {
    request: () => `${FRAMER_WORKER_URL}/email/request-otp`,
    verify: () => `${FRAMER_WORKER_URL}/email/verify-otp`,
    registerSite: () => `${FRAMER_WORKER_URL}/api/register-site`
  },
  site: {
    publish: (siteId) => `${FRAMER_WORKER_URL}/api/publish?siteId=${encodeURIComponent(siteId)}`,
    settings: (siteId) => `${FRAMER_WORKER_URL}/api/settings?siteId=${encodeURIComponent(siteId)}`,
    domain: () => `${FRAMER_WORKER_URL}/api/domain`,
    registerScript: (siteId) => `${FRAMER_WORKER_URL}/api/register-script?siteId=${encodeURIComponent(siteId)}`,
    applyScript: (siteId) => `${FRAMER_WORKER_URL}/api/apply-script?siteId=${encodeURIComponent(siteId)}`,
    checkPayment: (domain) => `${FRAMER_WORKER_URL}/api/check-payment?domain=${encodeURIComponent(domain)}`
  }
};
const FRAMER_TOKEN_KEY = "accessbit-framer-token";
let inMemorySessionToken = null;
let inMemorySessionTokenExpiry = null;
let sessionTokenRefreshPromise = null;
const SESSION_TOKEN_BUFFER_MS = 60 * 1e3;
const decodeJWTPayload = (token) => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    return JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
};
const loadStoredFramerToken = () => {
  try {
    const token = localStorage.getItem(FRAMER_TOKEN_KEY);
    if (!token) return null;
    const payload = decodeJWTPayload(token);
    if (!payload) return null;
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1e3)) {
      localStorage.removeItem(FRAMER_TOKEN_KEY);
      return null;
    }
    return token;
  } catch {
    return null;
  }
};
const setInMemorySessionToken = (token) => {
  if (!token) {
    inMemorySessionToken = null;
    inMemorySessionTokenExpiry = null;
    return;
  }
  inMemorySessionToken = token;
  const payload = decodeJWTPayload(token);
  inMemorySessionTokenExpiry = payload?.exp ? payload.exp * 1e3 : Date.now() + 30 * 24 * 60 * 60 * 1e3;
};
const clearInMemorySessionToken = () => setInMemorySessionToken(null);
const hasUsableSessionToken = () => {
  if (!inMemorySessionToken) return false;
  if (!inMemorySessionTokenExpiry) return true;
  return inMemorySessionTokenExpiry - Date.now() > SESSION_TOKEN_BUFFER_MS;
};
const refreshSessionToken = async () => {
  if (sessionTokenRefreshPromise) return sessionTokenRefreshPromise;
  sessionTokenRefreshPromise = (async () => {
    const stored = loadStoredFramerToken();
    if (stored) {
      setInMemorySessionToken(stored);
      return stored;
    }
    throw new Error("Session expired. Please log in again.");
  })();
  try {
    return await sessionTokenRefreshPromise;
  } finally {
    sessionTokenRefreshPromise = null;
  }
};
const getValidSessionToken = async () => {
  if (hasUsableSessionToken()) return inMemorySessionToken;
  return refreshSessionToken();
};
const makeAuthenticatedRequest = async (url, options = {}) => {
  const token = await getValidSessionToken();
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    clearInMemorySessionToken();
    throw new Error("Session expired. Please log in again.");
  }
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Request failed: ${response.status} - ${errorData.error || "Unknown error"}`);
  }
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};
const requestOTP = async (email, firstName) => {
  const res = await fetch(framerEndpoints.otp.request(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.trim().toLowerCase(), firstName: firstName?.trim() || "" })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Failed to send verification code.");
};
const verifyOTPNetwork = async (email, otp) => {
  const res = await fetch(framerEndpoints.otp.verify(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      otp: otp.trim()
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Verification failed.");
  const token = data.token || "";
  const user = {
    firstName: data.user?.firstName || "",
    email: data.user?.email || email,
    siteId: ""
  };
  return { token, user };
};
const registerSite = async () => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error("No site information available");
  const result = await makeAuthenticatedRequest(framerEndpoints.otp.registerSite(), {
    method: "POST",
    body: JSON.stringify({
      siteId: siteInfo.siteId,
      siteName: siteInfo.siteName || null
    })
  });
  if (result?.token) {
    setInMemorySessionToken(result.token);
    localStorage.setItem(FRAMER_TOKEN_KEY, result.token);
  }
  return result;
};
const publishSettings = async (customizationData, accessibilityProfiles) => {
  const [siteInfo, publishInfo] = await Promise.all([
    platform.getSiteInfo(),
    platform.getPublishInfo().catch(() => ({ stagingUrl: null, productionUrl: null }))
  ]);
  if (!siteInfo?.siteId) throw new Error("No site information available");
  return makeAuthenticatedRequest(
    framerEndpoints.site.publish(siteInfo.siteId),
    {
      method: "POST",
      body: JSON.stringify({
        customization: customizationData,
        accessibilityProfiles,
        stagingUrl: publishInfo.stagingUrl || null,
        productionUrl: publishInfo.productionUrl || null
      })
    }
  );
};
const getPublishedSettings = async () => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error("No site information available");
  return makeAuthenticatedRequest(framerEndpoints.site.settings(siteInfo.siteId), { method: "GET" });
};
const connectCustomDomain = async (domain) => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error("No site information available");
  return makeAuthenticatedRequest(framerEndpoints.site.domain(), {
    method: "POST",
    body: JSON.stringify({ siteId: siteInfo.siteId, customDomain: domain })
  });
};
const registerAccessibilityScript = async () => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error("No site information available");
  return makeAuthenticatedRequest(framerEndpoints.site.registerScript(siteInfo.siteId), { method: "POST" });
};
const applyAccessibilityScript = async (params) => {
  const siteInfo = await platform.getSiteInfo();
  if (!siteInfo?.siteId) throw new Error("No site information available");
  return makeAuthenticatedRequest(framerEndpoints.site.applyScript(siteInfo.siteId), {
    method: "POST",
    body: JSON.stringify(params)
  });
};
const dispatchAuthSuccess = (detail) => {
  window.dispatchEvent(new CustomEvent("accessbit-auth-success", { detail }));
};
function useAuth() {
  const queryClient2 = useQueryClient();
  const { data: authState, isLoading: isAuthLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      if (localStorage.getItem("explicitly_logged_out")) {
        return { user: { firstName: "", email: "" } };
      }
      const token = loadStoredFramerToken();
      if (!token) return { user: { firstName: "", email: "" } };
      const payload = decodeJWTPayload(token);
      if (!payload) return { user: { firstName: "", email: "" } };
      return {
        user: {
          firstName: payload.firstName || "",
          email: payload.email || "",
          siteId: payload.siteId || ""
        }
      };
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: 1e3 * 60 * 60
  });
  const logout = () => {
    localStorage.setItem("explicitly_logged_out", "true");
    localStorage.removeItem(FRAMER_TOKEN_KEY);
    clearInMemorySessionToken();
    queryClient2.setQueryData(["auth"], { user: { firstName: "", email: "" } });
    queryClient2.clear();
  };
  const processAuthSuccessFromData = (token, user) => {
    try {
      setInMemorySessionToken(token);
      localStorage.setItem(FRAMER_TOKEN_KEY, token);
      localStorage.removeItem("explicitly_logged_out");
      queryClient2.clear();
      queryClient2.setQueryData(["auth"], { user });
      dispatchAuthSuccess(user);
    } catch {
    }
  };
  const verifyOTP = async (email, otp) => {
    const { token, user } = await verifyOTPNetwork(email, otp);
    processAuthSuccessFromData(token, user);
    try {
      const result = await registerSite();
      if (result?.siteId && result?.token) {
        queryClient2.setQueryData(["auth"], (prev) => ({
          user: {
            firstName: prev?.user?.firstName || "",
            email: prev?.user?.email || "",
            siteId: result.siteId
          }
        }));
      }
    } catch {
    }
  };
  const attemptSilentAuth = async () => {
    try {
      if (localStorage.getItem("explicitly_logged_out")) return false;
      const token = loadStoredFramerToken();
      if (!token) return false;
      setInMemorySessionToken(token);
      const payload = decodeJWTPayload(token);
      queryClient2.setQueryData(["auth"], {
        user: {
          firstName: payload?.firstName || "",
          email: payload?.email || "",
          siteId: payload?.siteId || ""
        }
      });
      return true;
    } catch {
      return false;
    }
  };
  const attemptAutoRefresh = async () => {
    try {
      if (localStorage.getItem("explicitly_logged_out")) return false;
      return await attemptSilentAuth();
    } catch {
      return false;
    }
  };
  const getSessionToken = async () => getValidSessionToken();
  return {
    user: authState?.user || { firstName: "", email: "" },
    isAuthLoading,
    logout,
    requestOTP,
    verifyOTP,
    makeAuthenticatedRequest,
    publishSettings,
    connectCustomDomain,
    getPublishedSettings,
    registerAccessibilityScript,
    applyAccessibilityScript,
    attemptAutoRefresh,
    getSessionToken
  };
}
const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
const icon1 = new URL("/assets/Accessibility-sUzXFXgh.webp", import.meta.url).href;
const icon2 = new URL("data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.1118%204.01346C7.3468%204.20476%205.12755%206.50567%205.00531%209.30399C4.99153%209.61182%205.00531%209.91617%205.03802%2010.2136L5.23601%2011.1666C7.19529%2011.7371%208.6329%2013.5632%208.6329%2015.7232C8.6329%2017.1876%207.97177%2018.4989%206.93532%2019.3685L7.06617%2020.0051C7.68942%2020.6798%208.60363%2021.0764%209.60738%2020.9877C11.0932%2020.8572%2012.2932%2019.6363%2012.4137%2018.1355C12.4154%2018.1094%2012.4172%2018.0833%2012.4189%2018.0572C12.517%2016.3006%2013.2728%2014.6658%2014.4763%2013.3945C15.4215%2012.398%2016%2011.0449%2016%209.55616C16%206.35958%2013.3262%203.79084%2010.1118%204.01346ZM12.7512%2011.8101C12.684%2011.8779%2012.5962%2011.911%2012.5067%2011.911C12.4172%2011.911%2012.3311%2011.8779%2012.2639%2011.8101C12.1296%2011.6745%2012.1296%2011.4536%2012.2639%2011.3179C13.2109%2010.3614%2013.2109%208.80485%2012.2639%207.85005C11.317%206.89351%209.77782%206.89351%208.8309%207.85005C8.6966%207.9857%208.47795%207.9857%208.34366%207.85005C8.20937%207.71439%208.20937%207.49352%208.34366%207.35786C9.55917%206.13002%2011.5357%206.13002%2012.7512%207.35786C13.9667%208.58571%2013.9667%2010.5823%2012.7512%2011.8101Z'%20fill='white'/%3e%3cpath%20opacity='0.4'%20d='M3.81742%2012.0081C1.71277%2012.0081%200%2013.7208%200%2015.8255C0%2017.9301%201.71277%2019.6429%203.81742%2019.6429C5.92208%2019.6429%207.63485%2017.9301%207.63485%2015.8255C7.63485%2013.7208%205.92208%2012.0081%203.81742%2012.0081ZM0.699803%2015.8255C0.699803%2014.1075%202.09766%2012.7079%203.81742%2012.7079C4.56621%2012.7079%205.25377%2012.9738%205.79262%2013.4147L1.40835%2017.7989C0.967477%2017.2601%200.701552%2016.5725%200.701552%2015.8237L0.699803%2015.8255ZM3.81742%2018.9431C3.09838%2018.9431%202.43881%2018.6964%201.91046%2018.287L6.27723%2013.9203C6.68662%2014.4486%206.9333%2015.1082%206.9333%2015.8272C6.9333%2017.5452%205.53544%2018.9449%203.81567%2018.9449L3.81742%2018.9431Z'%20fill='white'/%3e%3cpath%20opacity='0.4'%20d='M19.9811%206.93439C18.9734%203.43363%2016.1322%200.781373%2012.5667%200.00984068C12.3306%20-0.040895%2012.0979%200.109563%2012.0471%200.345746C11.9964%200.581929%2012.1469%200.814614%2012.383%200.865349C15.6336%201.56865%2018.2246%203.98647%2019.1431%207.17757C19.1991%207.37002%2019.3741%207.49423%2019.563%207.49423C19.6033%207.49423%2019.6435%207.48898%2019.6837%207.47674C19.9164%207.41025%2020.0494%207.16707%2019.9829%206.93614L19.9811%206.93439Z'%20fill='white'/%3e%3cpath%20opacity='0.4'%20d='M11.9736%201.81355C11.7374%201.76282%2011.5047%201.91327%2011.454%202.14946C11.4033%202.38564%2011.5537%202.61832%2011.7899%202.66906C14.4719%203.24815%2016.6098%205.24258%2017.3673%207.87734C17.4233%208.06979%2017.5983%208.194%2017.7872%208.194C17.8274%208.194%2017.8677%208.18875%2017.9079%208.17651C18.1406%208.11003%2018.2736%207.86685%2018.2071%207.63591C17.3586%204.69149%2014.9705%202.46087%2011.9736%201.8153V1.81355Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const icon3 = new URL("data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20d='M6.82782%205.86328H4.30447C3.57381%205.86328%202.979%206.45808%202.979%207.18875V11.4683C2.979%2011.6506%203.12812%2011.7997%203.31037%2011.7997C3.49262%2011.7997%203.64174%2011.6506%203.64174%2011.4683V7.18875C3.64174%206.82259%203.93831%206.52601%204.30447%206.52601H6.82782C7.01007%206.52601%207.15919%206.3769%207.15919%206.19465C7.15919%206.0124%207.01007%205.86328%206.82782%205.86328Z'%20fill='white'/%3e%3cpath%20d='M17.5591%209.22339C17.3768%209.22339%2017.2277%209.3725%2017.2277%209.55475V13.8161C17.2277%2014.1823%2016.9311%2014.4789%2016.565%2014.4789H14.0416C13.8594%2014.4789%2013.7103%2014.628%2013.7103%2014.8102C13.7103%2014.9925%2013.8594%2015.1416%2014.0416%2015.1416H16.565C17.2956%2015.1416%2017.8904%2014.5468%2017.8904%2013.8161V9.55475C17.8904%209.3725%2017.7413%209.22339%2017.5591%209.22339Z'%20fill='white'/%3e%3cpath%20d='M11.0974%209.83972H9.77197V11.1652H11.0974V9.83972Z'%20fill='white'/%3e%3cpath%20d='M8.4465%209.83972H7.12103V11.1652H8.4465V9.83972Z'%20fill='white'/%3e%3cpath%20d='M13.7484%209.83972H12.4229V11.1652H13.7484V9.83972Z'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M12.8504%2017.0933L11.4967%2017.6583C11.684%2017.1463%2011.8861%2016.5913%2011.8861%2016.5913C11.9656%2016.3991%2011.9756%2016.1837%2011.8861%2015.9816L11.3377%2014.7539C10.9119%2013.8675%209.59636%2014.401%209.91613%2015.3354L10.2624%2016.2616L9.80346%2017.2954L8.0174%2017.2888L7.58%2016.7321C7.74071%2016.2881%207.76722%2015.8225%207.67444%2015.3818L9.59967%2014.7373C9.94429%2014.6213%2010.1514%2014.2717%2010.0884%2013.9139C10.0255%2013.556%209.70902%2013.2992%209.34618%2013.3091L5.46588%2013.4201C5.05002%2013.3853%204.63581%2013.4533%204.25805%2013.6173L0%2015.4431V19.9878L2.38252%2018.7038L8.73315%2020.8974C8.89055%2020.9802%209.06949%2021.0217%209.25837%2020.9885L12.9664%2020.3573C13.3656%2020.2877%2013.649%2019.9182%2013.6009%2019.5106C13.5529%2019.0964%2013.1834%2018.8015%2012.7725%2018.8363L13.4866%2018.49C13.8494%2018.3127%2014.0184%2017.8803%2013.861%2017.5026C13.697%2017.1115%2013.248%2016.926%2012.8553%2017.09L12.8504%2017.0933Z'%20fill='white'/%3e%3cpath%20d='M18.6559%202.29621L12.3053%200.102565C12.1479%200.0197233%2011.969%20-0.0216975%2011.7801%200.0114391L8.07209%200.642691C7.6728%200.712278%207.38948%201.08175%207.43753%201.48933C7.48558%201.90354%207.85505%202.19845%208.26594%202.16366L7.55185%202.50994C7.189%202.68722%207.02001%203.11965%207.17741%203.49741C7.34143%203.88842%207.79043%204.07399%208.1831%203.90996L9.53673%203.34498C9.34951%203.85694%209.14738%204.41198%209.14738%204.41198C9.06785%204.60417%209.05791%204.81956%209.14738%205.02169L9.69579%206.2494C10.1216%207.13581%2011.4371%206.60231%2011.1173%205.66786L10.7711%204.74169L11.23%203.70783L13.0161%203.71445L13.4535%204.27115C13.2928%204.71518%2013.2663%205.18075%2013.359%205.62147L11.4338%206.26597C11.0892%206.38195%2010.8821%206.73154%2010.945%207.08942C11.008%207.44729%2011.3245%207.7041%2011.6873%207.69416L15.5676%207.58315C15.9835%207.61795%2016.3977%207.55001%2016.7754%207.38599L21.0335%205.56016V1.01216L18.651%202.29621H18.6559Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const icon4 = new URL("/assets/icon4-Dyfd3j-n.svg", import.meta.url).href;
const icon5 = new URL("data:image/svg+xml,%3csvg%20width='27'%20height='16'%20viewBox='0%200%2027%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.5379%206.47155L27%204.36144L20.4371%202.17449C18.4287%200.938749%2016.0611%200%2013.5003%200C6.16893%200%200.405597%207.69483%200.162603%208.0209C-0.109468%208.39058%20-0.0326235%208.9098%200.33706%209.18187C0.704668%209.45394%201.22596%209.37502%201.49803%209.00741C1.55203%208.93472%206.99553%201.65942%2013.4982%201.65942C20.0009%201.65942%2025.4444%208.93265%2025.4984%209.00741C25.6604%209.22756%2025.9117%209.34387%2026.1672%209.34387C26.3396%209.34387%2026.5119%209.29195%2026.6594%209.18187C27.0291%208.9098%2027.108%208.38851%2026.8338%208.0209C26.7695%207.93367%2026.3084%207.32099%2025.5358%206.47155H25.5379Z'%20fill='white'/%3e%3cpath%20d='M13.6041%2013.6037C8.46801%2013.6037%203.77842%209.22977%203.26128%208.73132L2.10861%209.9276C3.0349%2010.8186%207.93633%2015.2652%2013.6041%2015.2652C19.2719%2015.2652%2023.9179%2010.8871%2024.813%2010.0086L23.65%208.82271C22.8358%209.62023%2018.5222%2013.6037%2013.6041%2013.6037Z'%20fill='white'/%3e%3cpath%20opacity='0.5'%20d='M16.2192%207.63259C16.2192%206.05265%2014.9369%204.77039%2013.357%204.77039C11.777%204.77039%2010.4948%206.05265%2010.4948%207.63259C10.4948%209.21252%2011.777%2010.4948%2013.357%2010.4948C14.9369%2010.4948%2016.2192%209.21252%2016.2192%207.63259ZM11.8473%207.63259C11.8473%207.45268%2011.9929%207.30548%2012.1745%207.30548H14.5018C14.6817%207.30548%2014.8289%207.45268%2014.8289%207.63259C14.8289%207.8125%2014.6817%207.9597%2014.5018%207.9597H12.1745C11.9929%207.9597%2011.8473%207.8125%2011.8473%207.63259Z'%20fill='white'/%3e%3cpath%20opacity='0.7'%20d='M13.3569%2012.4029C10.7264%2012.4029%208.58661%2010.263%208.58661%207.63252C8.58661%205.00202%2010.7264%202.86218%2013.3569%202.86218C15.9874%202.86218%2018.1273%205.00202%2018.1273%207.63252C18.1273%2010.263%2015.9874%2012.4029%2013.3569%2012.4029ZM13.3569%203.64101C11.1567%203.64101%209.36544%205.43232%209.36544%207.63252C9.36544%209.83272%2011.1567%2011.624%2013.3569%2011.624C15.5571%2011.624%2017.3485%209.83272%2017.3485%207.63252C17.3485%205.43232%2015.5571%203.64101%2013.3569%203.64101Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const icon6 = new URL("data:image/svg+xml,%3csvg%20width='17'%20height='20'%20viewBox='0%200%2017%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.64613%2011.8454C6.60558%2011.8454%205.56504%2011.8454%204.5245%2011.8454C4.14066%2011.8454%204.13603%2011.8365%204.10366%2011.4611C4.01117%2010.4155%203.90943%209.37442%203.81694%208.32884C3.72907%207.35027%203.6597%206.37171%203.57183%205.39315C3.50246%204.58438%203.41922%203.78008%203.3406%202.97132C3.33135%202.89536%203.28973%202.81939%203.24811%202.7479C2.86889%202.09553%202.92438%201.29123%203.41459%200.714814C3.9418%200.0981854%204.62624%20-0.125231%205.43555%200.0669071C6.20787%200.250108%206.75357%200.862269%206.85069%201.60401C6.97555%202.52448%206.42522%203.35559%205.49105%203.62369C5.35231%203.66391%205.30606%203.71306%205.31069%203.84711C5.33844%204.88823%205.36618%205.92935%205.38931%206.97047C5.38931%207.15814%205.47255%207.20729%205.65291%207.20729C6.89231%207.20282%208.13171%207.20729%209.37574%207.20729C9.69483%207.20729%209.70408%207.21622%209.70408%207.5156C9.70408%207.88647%209.69483%208.26181%209.70408%208.63268C9.71333%208.84269%209.63934%208.91866%209.41736%208.91866C8.32132%208.90972%207.22991%208.91866%206.13387%208.90972C5.91652%208.90972%205.84715%208.96781%205.86102%209.17335C5.87952%209.41911%205.87489%209.66487%205.86102%209.91062C5.84715%2010.1162%205.95351%2010.1385%206.12925%2010.1385C7.6785%2010.1385%209.22775%2010.1385%2010.777%2010.1385C11.2071%2010.1385%2011.6418%2010.143%2012.0719%2010.1385C12.2338%2010.1385%2012.3216%2010.1877%2012.3817%2010.3351C12.9321%2011.6667%2013.4917%2012.9938%2014.0512%2014.3253C14.2362%2014.7677%2014.4305%2015.2056%2014.6062%2015.648C14.6617%2015.782%2014.7218%2015.8222%2014.879%2015.7775C15.2999%2015.6569%2015.73%2015.5675%2016.1508%2015.4558C16.2896%2015.4201%2016.3635%2015.4513%2016.419%2015.5809C16.5994%2016.0054%2016.7844%2016.4344%2016.974%2016.8544C17.0295%2016.9795%2016.9971%2017.0465%2016.8676%2017.0912C15.8918%2017.3861%2014.916%2017.6855%2013.9402%2017.9849C13.783%2018.034%2013.7183%2017.9581%2013.6628%2017.833C13.3622%2017.1314%2013.0523%2016.4344%2012.7517%2015.7328C12.2153%2014.4907%2011.6834%2013.2485%2011.1562%2012.0018C11.0961%2011.8588%2011.0082%2011.8186%2010.8602%2011.8186C9.78733%2011.8231%208.71904%2011.8186%207.64613%2011.8186C7.64613%2011.8275%207.64613%2011.8365%207.64613%2011.8499V11.8454Z'%20fill='white'/%3e%3cpath%20opacity='0.5'%20d='M3.78833%207.00454C3.81151%207.1996%203.83468%207.36744%203.84395%207.53528C3.87176%208.00252%203.8903%208.46976%203.92738%208.937C3.94129%209.11845%203.8764%209.25001%203.75125%209.37702C3.1348%2010.003%202.62031%2010.6971%202.30513%2011.5182C1.67013%2013.1558%201.92042%2014.6618%203.11162%2015.9637C4.36308%2017.3382%205.97606%2017.9416%207.83934%2017.7919C9.49404%2017.6603%2010.7316%2016.8166%2011.5937%2015.4466C11.844%2015.0519%2012.034%2014.621%2012.2704%2014.1719C12.3075%2014.2445%2012.3492%2014.3035%2012.3677%2014.367C12.5763%2015.0701%2012.7849%2015.7732%2012.9888%2016.4763C13.012%2016.5535%2012.9981%2016.6623%2012.9564%2016.7213C12.0665%2017.9325%2010.9911%2018.9305%209.56356%2019.5157C8.18233%2020.0827%206.76401%2020.1553%205.33643%2019.7153C3.28312%2019.0847%201.7721%2017.81%200.766306%2015.9547C0.279629%2015.0701%200.0247035%2014.1175%200.00152844%2013.1149C-0.0262816%2011.8629%200.325979%2010.7016%201.01196%209.64013C1.68867%208.59678%202.5925%207.77117%203.62611%207.07258C3.66319%207.0499%203.7049%207.03629%203.7837%207L3.78833%207.00454Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const icon7 = new URL("data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.4466%206.78579C12.3295%206.90156%2012.1928%206.99804%2012.0757%207.11381C11.3728%207.82772%2010.6895%208.54163%209.96714%209.25554C9.45953%209.75721%208.79573%209.7958%208.36621%209.39061C7.89765%208.94683%207.8586%208.2908%208.36621%207.76983C9.45953%206.61214%2010.5724%205.45444%2011.7243%204.35463C11.939%204.14239%2012.3295%204.1038%2012.6614%204.04591C13.5204%203.89155%2014.2233%204.1038%2014.4966%205.02995C14.5357%205.12643%2014.6137%205.2229%2014.7309%205.35797C14.9456%204.99136%2015.1409%204.66335%2015.3556%204.35463C15.4728%204.21957%2015.668%204.0845%2015.8437%204.06521C16.1952%204.02662%2016.5661%204.04591%2016.9175%204.06521C17.5618%204.1038%2017.9913%204.4704%2017.9913%205.08784C18.0108%206.86297%2017.9913%208.61881%2017.9913%2010.3939C17.9913%2010.8763%2017.7375%2011.2236%2017.2494%2011.3587C16.9175%2011.4359%2016.859%2011.6095%2016.8785%2011.9182C16.8785%2013.4425%2016.8785%2014.9668%2016.8785%2016.4911C16.8785%2017.07%2016.8199%2017.591%2016.2147%2017.8804C15.6094%2018.1505%2015.1409%2017.919%2014.7309%2017.4366C14.6528%2017.5138%2014.5747%2017.5717%2014.5161%2017.6295C14.1452%2017.9962%2013.6961%2018.1119%2013.2276%2017.8804C12.759%2017.6681%2012.5833%2017.2822%2012.5833%2016.7806C12.5833%2013.6934%2012.5833%2010.6062%2012.5833%207.519C12.5833%207.30675%2012.5833%207.09451%2012.5833%206.86297L12.4466%206.80509V6.78579Z'%20fill='white'/%3e%3cpath%20opacity='0.5'%20d='M9.8811%204.66302C8.32774%204.13514%206.88944%204.29155%205.64292%205.38643C4.77994%206.14894%204.31969%207.12651%204.28133%208.2996C4.2238%209.80506%204.79912%2010.9977%205.98811%2011.858C7.1771%2012.7182%208.50034%2012.816%209.8811%2012.3076C9.97699%2013.6958%209.93863%2015.0058%209.59344%2016.2766C9.40167%2016.9413%209.40167%2017%208.69211%2017C8.28939%2017%207.88666%2017%207.50312%2016.9413C7.33052%2016.9022%207.19628%2016.6872%207.08122%2016.5308C7.02368%2016.4526%207.02368%2016.3157%207.00451%2016.1984C6.67849%2014.6734%206.67849%2014.6734%205.25937%2014.2237C5.12513%2014.1846%204.91418%2014.2432%204.77994%2014.3214C4.35804%2014.5756%203.93614%2014.8689%203.51424%2015.1035C3.39918%2015.1622%203.14987%2015.1622%203.07316%2015.1035C2.65126%2014.7125%202.22936%2014.3019%201.86499%2013.8718C1.78828%2013.774%201.78828%2013.5394%201.86499%2013.4221C2.07594%2013.0115%202.34442%2012.6205%202.59373%2012.2099C2.65126%2012.1121%202.7855%2011.9948%202.74715%2011.9166C2.51702%2011.3105%202.28689%2010.724%202.01841%2010.1374C1.98006%2010.0592%201.78828%2010.0592%201.65404%2010.0397C1.25132%209.94192%200.829418%209.88327%200.445872%209.74641C0.273276%209.68775%200.0623262%209.47268%200.0431489%209.29672C-0.014383%208.76883%20-0.014383%208.22139%200.0431489%207.6935C0.0431489%207.53709%200.292454%207.40023%200.445872%207.26337C0.484227%207.22427%200.560936%207.24382%200.637645%207.22427C1.66043%207.00268%202.35721%206.39659%202.72797%205.40598C2.76632%205.28867%202.72797%205.09316%202.67044%204.9563C2.42113%204.52616%202.17183%204.09603%201.88417%203.6659C1.73075%203.45083%201.71157%203.25532%201.90335%203.0598C2.28689%202.68833%202.63208%202.27775%203.03481%201.92582C3.14987%201.82806%203.41835%201.88672%203.61013%201.88672C3.66766%201.88672%203.72519%201.94537%203.76354%201.98447C4.56899%202.72743%205.45115%202.9425%206.39083%202.25819C6.54425%202.14089%206.73602%201.98447%206.79356%201.80851C6.9278%201.35883%206.96615%200.889592%207.11957%200.439908C7.1771%200.263945%207.38805%200.0488787%207.54147%200.0293272C8.07843%20-0.00977573%208.6154%20-0.00977573%209.17154%200.0293272C9.30578%200.0293272%209.49755%200.166187%209.53591%200.283496C9.95781%201.6912%2010.0921%203.13801%209.93863%204.66302H9.8811Z'%20fill='white'/%3e%3cpath%20d='M14.4732%203C13.639%203%2013%202.33936%2013%201.48232C13%200.660983%2013.6922%20-0.0175106%2014.5087%200.000344543C15.3429%200.0181996%2016.0174%200.696693%2015.9997%201.51803C15.9997%202.33936%2015.3074%203%2014.4732%203Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const icon8 = new URL("data:image/svg+xml,%3csvg%20width='34'%20height='13'%20viewBox='0%200%2034%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.9231%2012.2515C24.7975%2012.5142%2024.6091%2012.7245%2024.9231%2012.9347C25.2371%2013.0924%2025.551%2012.9347%2025.7394%2012.777C26.0534%2012.4617%2026.3046%2012.1463%2026.5557%2011.831C27.4976%2010.3069%2027.8744%208.62504%2028%206.68045C27.7488%204.73585%2027.3093%202.58103%2025.6766%200.794098C25.2998%200.373645%2024.8603%20-0.257035%2024.2323%200.110861C23.6044%200.478758%2024.4207%200.951768%2024.6719%201.26711C26.8069%204.15773%2027.3721%207.15346%2025.9278%2010.3594C25.6138%2010.9901%2025.2371%2011.6208%2024.8603%2012.2515H24.9231Z'%20fill='white'/%3e%3cpath%20d='M31.6716%2012.9244C32.1076%2013.1855%2032.3982%2012.7155%2032.592%2012.3498C33.5607%2010.6785%2034.0451%208.90274%2033.9967%206.91805C33.9967%204.67221%2033.1732%201.90408%2032.156%200.598357C31.9138%200.284984%2031.5748%20-0.185075%2031.1873%200.0760689C30.7513%200.389442%2031.1873%200.755044%2031.381%201.01619C33.5607%204.56775%2033.7061%208.17154%2031.817%2011.932C31.6716%2012.2454%2031.1873%2012.611%2031.6716%2012.9244Z'%20fill='white'/%3e%3cpath%20d='M28.6498%2012.9236C29.0904%2013.1873%2029.3842%2012.7127%2029.5801%2012.3437C30.6083%2010.6564%2030.8531%208.70556%2031%206.80743C31%204.90929%2030.2656%202.22026%2029.2863%200.796657C28.9925%200.374849%2028.6498%20-0.257864%2028.1602%200.111218C27.7195%200.427575%2028.307%200.849383%2028.5029%201.21847C30.4614%204.75111%2030.6573%208.28376%2028.7967%2011.9219C28.6498%2012.2382%2028.2091%2012.66%2028.6498%2012.9236Z'%20fill='white'/%3e%3cpath%20d='M11.4023%200.174093C10.2069%20-0.276776%208.6629%200.174093%207.86599%201.22612C6.47138%203.12979%205.12658%205.08355%203.78178%206.98721C2.63621%208.5903%201.54045%2010.1433%200.394877%2011.7464C0.14584%2012.0971%20-0.402041%2012.7483%200.494492%2012.8485C1.68987%2012.9988%203.08448%2013.3495%203.98101%2011.9468C4.32966%2011.3957%204.87754%2011.1953%205.47523%2011.1953C6.32196%2011.1953%207.21849%2011.1953%208.06522%2011.1953C8.76252%2011.1953%209.26059%2011.3957%209.45982%2012.1472C9.75867%2013.0489%2010.5058%2012.9487%2011.2031%2012.8485C12%2012.7984%2012%2012.1472%2012%2011.546C12%209.84271%2012%208.13943%2012%206.43615C12%204.73287%2012%203.02959%2012%201.32631C12%200.825347%2012%200.324382%2011.3525%200.123996L11.4023%200.174093ZM9.36021%206.73673C9.36021%208.5903%208.91194%208.99107%207.36791%208.74059C6.67061%208.6404%206.42157%208.33982%206.82003%207.63847C7.3181%206.88702%207.81618%206.13557%208.31425%205.38413C8.46368%205.13364%208.56329%204.83307%208.91194%204.88316C9.3104%204.93326%209.36021%205.33403%209.36021%205.63461C9.36021%205.98528%209.36021%206.38606%209.36021%206.73673Z'%20fill='white'/%3e%3cpath%20d='M15.3735%2012.9962C16.5508%2012.9455%2017.7281%2012.9962%2018.9054%2012.7428C21.3581%2012.2866%2023.0259%2010.766%2023.7126%208.28226C24.3994%205.84926%2023.8598%203.619%2022.0448%201.79425C20.1317%20-0.131879%2017.7281%20-0.0305035%2015.3245%200.020184C14.3924%200.020184%2014%200.425685%2014%201.38875C14%203.06144%2014%204.73413%2014%206.40682C14%208.1302%2014%209.85357%2014%2011.577C14%2012.5907%2014.3924%2013.0469%2015.3735%2012.9962ZM16.4036%204.12588C16.4036%203.2135%2016.9432%202.90938%2017.7771%202.90938C19.445%203.01075%2020.9656%204.63275%2020.9656%206.45751C20.9656%208.23157%2019.494%209.90426%2017.8262%2010.0563C16.9432%2010.107%2016.4036%209.7522%2016.4036%208.78914C16.4036%208.02882%2016.4036%207.26851%2016.4036%206.50819C16.4036%205.69719%2016.4036%204.93688%2016.4036%204.12588Z'%20fill='white'/%3e%3c/svg%3e", import.meta.url).href;
const footerBrandSvg = new URL("/assets/footer-brand-5OsP1tkI.svg", import.meta.url).href;
const footerPoweredSvg = new URL("/assets/footer-powered-B-71xs9u.svg", import.meta.url).href;
const iconOptions = [
  { id: "accessibility", label: icon1, name: "Accessibility" },
  { id: "person", label: icon2, name: "Person" },
  { id: "wheelchair", label: icon3, name: "Wheelchair" },
  { id: "ad", label: icon4, name: "AD" },
  { id: "eye", label: icon5, name: "Eye" },
  { id: "ramp", label: icon6, name: "Ramp" },
  { id: "gear", label: icon7, name: "Gear" },
  { id: "ad-triple", label: icon8, name: "AD)))" }
];
const STRIPE_PORTAL_URL = "https://billing.stripe.com/p/login/3cI8wRgGjaLt0MY3x64Ni00";
const TRUSTED_STRIPE_URLS = /* @__PURE__ */ new Set([
  STRIPE_PORTAL_URL
]);
function openTrustedStripeUrl(url) {
  if (!TRUSTED_STRIPE_URLS.has(url)) return;
  window.open(url, "_blank", "noopener,noreferrer");
}
const PublishScreen = ({ onBack, customizationData }) => {
  const { publishSettings: publishSettings2, makeAuthenticatedRequest: makeAuthenticatedRequest2 } = useAuth();
  const [showPreviewPanel, setShowPreviewPanel] = reactExports.useState(true);
  const [showPublishModal, setShowPublishModal] = reactExports.useState(false);
  const [isPublishing, setIsPublishing] = reactExports.useState(false);
  const [publishError, setPublishError] = reactExports.useState(null);
  const [publishSuccess, setPublishSuccess] = reactExports.useState(false);
  const [hasSubscription, setHasSubscription] = reactExports.useState(null);
  const [isCheckingSubscription, setIsCheckingSubscription] = reactExports.useState(true);
  const [isAnnual, setIsAnnual] = reactExports.useState(true);
  const [siteDomain, setSiteDomain] = reactExports.useState("");
  const [accessibilityProfiles, setAccessibilityProfiles] = reactExports.useState({
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    blindUsers: false,
    reduceMotion: false
  });
  const handleToggle = (profile) => {
    setAccessibilityProfiles((prev) => {
      const nextValue = !prev[profile];
      if (profile === "keyboardNavigation" || profile === "blindUsers") {
        return {
          ...prev,
          keyboardNavigation: nextValue,
          blindUsers: nextValue
        };
      }
      return {
        ...prev,
        [profile]: nextValue
      };
    });
  };
  const handlePublish = () => {
    setPublishSuccess(false);
    setPublishError(null);
    setShowPublishModal(true);
  };
  const handleConfirmPublish = async () => {
    setIsPublishing(true);
    setPublishError(null);
    setPublishSuccess(false);
    try {
      const siteInfo = await platform.getSiteInfo();
      if (!siteInfo?.siteId) throw new Error("Could not read Framer project ID.");
      const publishData = await publishSettings2(customizationData, accessibilityProfiles);
      if (!publishData?.siteId) {
        throw new Error("Could not save settings to server. Please try again.");
      }
      const widgetUrl = "https://accessbit.pages.dev/widget.js";
      const safeSiteId = typeof publishData.siteId === "string" ? publishData.siteId : "";
      const safeSiteToken = typeof publishData.siteToken === "string" ? publishData.siteToken : "";
      if (!safeSiteId) throw new Error("Invalid site ID returned from server.");
      const scriptHtml = `<script src="${widgetUrl}?siteId=${encodeURIComponent(safeSiteId)}&siteToken=${encodeURIComponent(safeSiteToken)}&platform=framer" defer><\/script>`;
      const injected = await platform.injectScript({ html: scriptHtml, location: "bodyEnd" });
      if (!injected) {
        const msg = platform.canInjectScript() ? "Settings saved, but the script could not be injected. Please try again." : "Settings saved, but AccessBit needs Custom Code permission to install the widget. Please ask a site owner to grant it in Framer.";
        setPublishError(msg);
        return;
      }
      setPublishSuccess("Accessibility settings published and script installed in your site footer!");
      setShowPublishModal(false);
      setTimeout(() => setPublishSuccess(false), 8e3);
    } catch (error) {
      setPublishError(error instanceof Error ? error.message : "Failed to publish settings");
    } finally {
      setIsPublishing(false);
    }
  };
  const handleCancelPublish = () => {
    setShowPublishModal(false);
  };
  const handleReset = () => {
    setAccessibilityProfiles({
      seizureSafe: false,
      visionImpaired: false,
      adhdFriendly: false,
      cognitiveDisability: false,
      keyboardNavigation: false,
      blindUsers: false,
      reduceMotion: false
    });
  };
  const handleHideInference = () => {
    setShowPreviewPanel(false);
  };
  reactExports.useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        setIsCheckingSubscription(true);
        const publishInfo = await platform.getPublishInfo();
        const productionUrl = publishInfo.productionUrl || "";
        const stagingUrl = publishInfo.stagingUrl || "";
        const extractDomain = (url) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "").split("/")[0];
        const customDomain = extractDomain(productionUrl);
        const stagingDomain = extractDomain(stagingUrl);
        const domain = customDomain || stagingDomain;
        const isStaging = !customDomain || customDomain.includes(".framer.app") || customDomain.includes(".framer.com") || customDomain.includes("localhost") || customDomain.includes("127.0.0.1");
        setSiteDomain(domain);
        if (isStaging) {
          setHasSubscription(false);
          return;
        }
        const response = await makeAuthenticatedRequest2(
          framerEndpoints.site.checkPayment(domain),
          { method: "GET" }
        );
        setHasSubscription(response?.hasAccess === true);
      } catch (err) {
        console.error("[AccessBit] checkSubscriptionStatus error:", err);
        T$1.notify("AccessBit could not check your subscription. Please reopen the plugin and try again.", { variant: "error" });
        setHasSubscription(false);
      } finally {
        setIsCheckingSubscription(false);
      }
    };
    checkSubscriptionStatus();
  }, []);
  const handleCancelSubscription = () => {
    openTrustedStripeUrl(STRIPE_PORTAL_URL);
  };
  const handlePurchaseNow = () => {
    try {
      const jwt = loadStoredFramerToken();
      const payload = jwt ? decodeJWTPayload(jwt) : null;
      const email = payload?.email || payload?.sub || "";
      const plan = isAnnual ? "annually" : "monthly";
      const encoded = btoa(JSON.stringify({ email, plan, platform: "framer", domain: siteDomain }));
      window.open(`https://accounts.accessbit.io/checkout?d=${encodeURIComponent(encoded)}`, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("[AccessBit] handlePurchaseNow error:", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "publish-screen", style: { paddingTop: "0" }, children: [
    showPublishModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "publish-modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "publish-modal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "publish-modal-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This will publish your accessibility settings and install the AccessBit widget on your site." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Click confirm to proceed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "publish-modal-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "confirm-btn",
            onClick: handleConfirmPublish,
            disabled: isPublishing,
            children: isPublishing ? "Publishing..." : "Confirm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "cancel-btn",
            onClick: handleCancelPublish,
            disabled: isPublishing,
            children: "Cancel"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "publish-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-buttons", style: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "back-btn", onClick: onBack, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whitearrow, alt: "", style: { transform: "rotate(180deg)", width: "14px", height: "15px", marginRight: "8px" } }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          isCheckingSubscription && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#a3a3a3",
            fontSize: "14px",
            fontWeight: "500"
          }, children: "Checking subscription..." }),
          hasSubscription === true && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "cancel-subscription-link",
              onClick: handleCancelSubscription,
              role: "button",
              tabIndex: 0,
              onKeyDown: (e2) => {
                if (e2.key === "Enter" || e2.key === " ") {
                  e2.preventDefault();
                  handleCancelSubscription();
                }
              },
              children: "Cancel Subscription"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "publish-btn",
              onClick: handlePublish,
              children: [
                hasSubscription === true ? "Publish to live domain" : "Publish to Staging",
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: whitearrow, alt: "", style: { width: "14px", height: "15px", marginLeft: "8px" } })
              ]
            }
          )
        ] })
      ] })
    ] }),
    publishSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "success-toast", style: {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "rgba(10, 8, 27, 1)",
      color: "#ffffff",
      padding: "16px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      zIndex: 1e4,
      maxWidth: "400px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      animation: "slideInRight 0.3s ease-out"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#10b981",
        flexShrink: 0
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "14px", lineHeight: "1.5" }, children: typeof publishSuccess === "string" ? publishSuccess : "Accessibility settings published successfully!" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step-navigation", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step completed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-number", children: "STEP 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-name", children: "Customization" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step active", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-number", children: "STEP 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-name", children: "Publish" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Preview" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-window1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "browser-window", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "browser-controls", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "traffic-lights", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light red" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light yellow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "traffic-light green" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "browser-content", children: [
            showPreviewPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `accessibility-modal ${customizationData?.triggerHorizontalPosition === "Left" ? "position-left" : customizationData?.triggerHorizontalPosition === "Right" ? "position-right" : "position-center"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-preview-header", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-preview-close-container", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "ab-preview-close-btn",
                        onClick: () => setShowPreviewPanel(false),
                        "aria-label": "Close accessibility panel",
                        type: "button",
                        children: "×"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-preview-lang", "aria-label": "Select language", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-preview-flag", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 30", width: "16", height: "12", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 v30 h60 v-30 z", fill: "#012169" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L60,30 M60,0 L0,30", stroke: "#fff", strokeWidth: "6" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L60,30 M60,0 L0,30", stroke: "#C8102E", strokeWidth: "4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30,0 v30 M0,15 h60", stroke: "#fff", strokeWidth: "10" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30,0 v30 M0,15 h60", stroke: "#C8102E", strokeWidth: "6" })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-preview-lang-text", children: "English" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-preview-lang-arrow", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "6", height: "4", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M0.666748 0.666666L4.66675 4.66667L8.66675 0.666666",
                          stroke: "white",
                          strokeWidth: "1.1",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      ) }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Accessibility Controls" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-preview-actions", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-preview-actions-row", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            className: "action-btn reset-settings-btn",
                            onClick: handleReset,
                            "aria-label": "Reset all accessibility settings",
                            type: "button",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reset-settings-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M2 8C2 9.18669 2.35189 10.3467 3.01118 11.3334C3.67047 12.3201 4.60754 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.32263 2.00631 4.71265 2.66082 3.50667 3.82667L2 5.33333",
                                    stroke: "white",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M2 2V5.33333H5.33333",
                                    stroke: "white",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                  }
                                )
                              ] }) }),
                              "Reset Settings"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "action-btn statement-btn", type: "button", "aria-label": "View accessibility statement", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "statement-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M10.0001 1.33334H4.00008C3.64646 1.33334 3.30732 1.47381 3.05727 1.72386C2.80722 1.97391 2.66675 2.31305 2.66675 2.66667V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V4.66667L10.0001 1.33334Z",
                                stroke: "white",
                                strokeWidth: "1.33333",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M9.33325 1.33334V4C9.33325 4.35362 9.47373 4.69276 9.72378 4.94281C9.97383 5.19286 10.313 5.33334 10.6666 5.33334H13.3333",
                                stroke: "white",
                                strokeWidth: "1.33333",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6.66659 6H5.33325", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.6666 8.66667H5.33325", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.6666 11.3333H5.33325", stroke: "white", strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" })
                          ] }) }),
                          "Statement"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-preview-actions-row ab-preview-actions-row--center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          className: "action-btn hide-interface-btn",
                          onClick: handleHideInference,
                          "aria-label": "Hide accessibility interface",
                          type: "button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hide-interface-btn-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M7.15527 3.384C8.7082 3.19894 10.279 3.52721 11.6279 4.3187C12.9767 5.11019 14.0294 6.32138 14.6253 7.76733C14.6808 7.91701 14.6808 8.08166 14.6253 8.23133C14.3803 8.82533 14.0565 9.38367 13.6626 9.89133",
                                  stroke: "white",
                                  strokeWidth: "1.33333",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M9.38942 9.43866C9.01222 9.80298 8.50702 10.0046 7.98262 10C7.45823 9.99546 6.9566 9.78512 6.58579 9.4143C6.21497 9.04349 6.00463 8.54186 6.00008 8.01747C5.99552 7.49307 6.19711 6.98787 6.56142 6.61066",
                                  stroke: "white",
                                  strokeWidth: "1.33333",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M11.6527 11.666C10.7683 12.1899 9.78165 12.5173 8.75959 12.6263C7.73752 12.7352 6.70398 12.623 5.7291 12.2973C4.75422 11.9715 3.86081 11.4399 3.10949 10.7385C2.35816 10.0371 1.76651 9.18224 1.37468 8.232C1.31912 8.08232 1.31912 7.91768 1.37468 7.768C1.96577 6.33457 3.00579 5.1315 4.33868 4.33933",
                                  stroke: "white",
                                  strokeWidth: "1.33333",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M1.33325 1.33334L14.6666 14.6667",
                                  stroke: "white",
                                  strokeWidth: "1.33333",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round"
                                }
                              )
                            ] }) }),
                            "Hide Interface"
                          ]
                        }
                      ) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ab-preview-content", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ab-preview-title", children: "Accessibility Adjustments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-list", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.seizureSafe ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M6.5 1.5L2.5 8H7L5.5 14.5L13 6.5H8.5L10 1.5H6.5Z",
                            stroke: "black",
                            strokeWidth: "1.2",
                            strokeLinejoin: "round"
                          }
                        ) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Seizure Safe Profile" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Clear flashes & reduces color" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "seizureSafe", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "seizureSafe",
                              checked: accessibilityProfiles.seizureSafe,
                              onChange: () => handleToggle("seizureSafe")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.reduceMotion ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 43 43",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21.5", cy: "21.5", r: "21.5", fill: "#ECEDED" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21.5", cy: "21.5", r: "21", stroke: "black", strokeOpacity: "0.1" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M13.2854 27.1478C13.2854 27.0302 13.2816 26.9164 13.2863 26.8028C13.2955 26.5779 13.2888 26.3497 13.3263 26.1292C13.3875 25.7694 13.5787 25.4669 13.8327 25.2114C14.0382 25.0049 14.2636 24.8183 14.4802 24.6228C14.5003 24.6047 14.5269 24.5903 14.5398 24.5681C14.6089 24.4485 14.7169 24.4422 14.8398 24.4443C15.1889 24.4502 15.5382 24.446 15.8874 24.4458C15.9172 24.4457 15.9469 24.4458 15.9935 24.4458C15.9715 25.0389 15.6353 25.4367 15.1876 25.8002C15.2828 25.8002 15.3502 25.8006 15.4176 25.8001C15.7757 25.7976 16.1342 25.8048 16.4917 25.7888C16.7545 25.7771 16.9501 25.6262 17.1057 25.4214C17.1111 25.4142 17.1163 25.4068 17.1211 25.3992C17.1784 25.3079 17.2159 25.1811 17.2984 25.1352C17.3815 25.0889 17.5093 25.1221 17.6175 25.122C18.5387 25.1218 19.4599 25.1261 20.3811 25.1207C21.3076 25.1152 22.2015 24.9396 23.0498 24.5621C23.2987 24.4513 23.5332 24.3078 23.7743 24.1794C23.8032 24.164 23.8326 24.1498 23.8699 24.1309C23.9464 24.401 24.0149 24.6668 24.0976 24.928C24.1853 25.2051 24.3188 25.4598 24.5148 25.6783C24.5897 25.7617 24.6828 25.8016 24.7943 25.8015C25.3422 25.801 25.8901 25.8007 26.4379 25.8002C26.4549 25.8002 26.472 25.7977 26.5141 25.7943C26.4531 25.7388 26.4101 25.6948 26.3622 25.6569C26.1358 25.4773 25.9069 25.3003 25.7456 25.0542C25.5911 24.8186 25.4896 24.5632 25.484 24.279C25.4697 23.5618 25.5651 22.8645 25.8861 22.2125C26.1467 21.6832 26.5433 21.2757 27.0306 20.9516C27.4775 20.6544 27.9702 20.444 28.4496 20.2087C28.8878 19.9937 29.3203 19.7681 29.6779 19.4292C29.8299 19.2851 29.9604 19.118 30.099 18.96C30.1752 18.8733 30.2051 18.7795 30.1879 18.6561C30.1391 18.306 30.0514 17.9727 29.8361 17.6854C29.5986 17.3683 29.2703 17.1878 28.8954 17.088C28.5435 16.9943 28.1848 16.9661 27.8224 17.0121C27.5032 17.0526 27.2586 17.2265 27.0833 17.4818C26.7976 17.8975 26.5231 18.3216 26.2593 18.7517C25.7986 19.503 25.2968 20.2208 24.6563 20.8331C24.0339 21.4282 23.3306 21.9063 22.5613 22.2902C21.5394 22.8002 20.4574 23.1264 19.3416 23.3521C18.5782 23.5065 17.8079 23.616 17.0319 23.6692C16.2969 23.7196 15.5596 23.7552 14.8231 23.7587C14.3896 23.7608 14.0353 23.9032 13.7317 24.1895C13.5596 24.3517 13.4101 24.5378 13.2508 24.7135C13.2328 24.7333 13.2168 24.7548 13.1964 24.7797C12.8035 24.5552 12.4131 24.3322 12 24.0961C12.1492 23.8959 12.2851 23.6985 12.4365 23.5139C12.6689 23.2304 12.9464 22.9956 13.2564 22.7989C13.2834 22.7818 13.3066 22.7411 13.3109 22.7086C13.3676 22.2833 13.4871 21.8808 13.7404 21.5282C13.7845 21.4669 13.8548 21.4252 13.9071 21.3689C13.9317 21.3425 13.9601 21.3008 13.9564 21.2698C13.9006 20.8039 13.9101 20.3381 13.965 19.8739C14.086 18.8511 14.4386 17.9232 15.1164 17.1337C15.5667 16.6091 16.1061 16.1963 16.7153 15.8729C17.4298 15.4937 18.1934 15.2609 18.986 15.118C19.5264 15.0206 20.0728 14.9799 20.6208 15.0095C21.6714 15.0661 22.6389 15.3654 23.4739 16.0294C23.8254 16.309 24.1217 16.6386 24.3639 17.0172C24.3814 17.0446 24.4106 17.0766 24.4395 17.0828C24.7989 17.1608 25.1309 17.3004 25.4357 17.5224C25.4732 17.462 25.5082 17.407 25.5419 17.3512C25.8063 16.9126 26.117 16.5141 26.5248 16.1969C27.0721 15.7713 27.6926 15.5968 28.3805 15.6431C28.8295 15.6733 29.2676 15.751 29.6862 15.9236C30.5268 16.27 31.0829 16.8808 31.3756 17.7367C31.531 18.1912 31.5838 18.6608 31.5728 19.1387C31.5718 19.181 31.5546 19.2262 31.5341 19.2643C31.0809 20.1107 30.4076 20.7345 29.5668 21.1805C29.148 21.4027 28.7161 21.6001 28.2912 21.8108C27.9752 21.9675 27.6689 22.1398 27.4157 22.3913C27.0971 22.7076 26.9382 23.101 26.8805 23.5373C26.8522 23.7513 26.8439 23.9685 26.8364 24.1846C26.8347 24.2339 26.8605 24.2994 26.8966 24.3321C27.0747 24.4937 27.2682 24.6388 27.4421 24.8045C27.8489 25.1922 28.1144 25.6624 28.1697 26.2258C28.1995 26.529 28.175 26.8374 28.175 27.1548C28.1395 27.1548 28.1041 27.1548 28.0687 27.1548C27.012 27.1548 25.9552 27.143 24.8987 27.1586C24.0997 27.1705 23.5604 26.7747 23.1572 26.1328C23.1275 26.0855 23.1108 26.03 23.0861 25.9739C22.9026 26.0353 22.7225 26.0984 22.5407 26.1559C21.8566 26.3723 21.1537 26.4707 20.4379 26.4748C19.6341 26.4794 18.8303 26.4754 18.0265 26.4776C17.9861 26.4777 17.9324 26.4899 17.9073 26.5171C17.4934 26.9654 16.9758 27.1568 16.3741 27.1552C15.3717 27.1526 14.3692 27.1546 13.3667 27.1544C13.3432 27.1544 13.3198 27.1507 13.2854 27.1478Z",
                                  fill: "black"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M29.1583 18.1889C29.1503 18.5743 28.8483 18.8597 28.4552 18.8533C28.1043 18.8477 27.7993 18.5291 27.807 18.1762C27.8153 17.794 28.1203 17.494 28.4947 17.4998C28.8671 17.5055 29.1661 17.816 29.1583 18.1889Z",
                                  fill: "black"
                                }
                              )
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Reduce Motion" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Disable animations and transitions" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "reduceMotion", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "reduceMotion",
                              checked: accessibilityProfiles.reduceMotion,
                              onChange: () => handleToggle("reduceMotion")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.visionImpaired ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon vision-impaired-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: "M1 8C2.7 5.5 5 4 8 4C11 4 13.3 5.5 15 8C13.3 10.5 11 12 8 12C5 12 2.7 10.5 1 8Z",
                              fill: "none",
                              stroke: "black",
                              strokeWidth: "1.2"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "vision-impaired-pupil", cx: "8", cy: "8", r: "2.2", fill: "black" })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Vision Impaired Profile" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enhances text readability and visual clarity" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "visionImpaired", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "visionImpaired",
                              checked: accessibilityProfiles.visionImpaired,
                              onChange: () => handleToggle("visionImpaired")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.adhdFriendly ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon ab-icon-adhd", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "3", width: "12", height: "10", rx: "2", stroke: "black", strokeWidth: "1.2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 8H14", stroke: "black", strokeWidth: "1.2" })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "ADHD Friendly Profile" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "More focus & fewer distractions" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "adhdFriendly", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "adhdFriendly",
                              checked: accessibilityProfiles.adhdFriendly,
                              onChange: () => handleToggle("adhdFriendly")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.cognitiveDisability ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 43 43",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21.5", cy: "21.5", r: "21.5", fill: "#ECEDED" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21.5", cy: "21.5", r: "21", stroke: "black", strokeOpacity: "0.1" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M22.0001 24.5C23.3808 24.5 24.5001 23.3807 24.5001 22C24.5001 20.6193 23.3808 19.5 22.0001 19.5C20.6194 19.5 19.5001 20.6193 19.5001 22C19.5001 23.3807 20.6194 24.5 22.0001 24.5Z",
                                  fill: "black"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M22.8334 15.3909V13.6667H21.1667V15.3909C19.7002 15.5778 18.3373 16.2465 17.2919 17.2919C16.2465 18.3372 15.5779 19.7002 15.3909 21.1667H13.6667V22.8334H15.3909C15.5777 24.2999 16.2463 25.6629 17.2918 26.7083C18.3372 27.7538 19.7002 28.4224 21.1667 28.6092V30.3334H22.8334V28.6092C24.3 28.4224 25.663 27.7538 26.7084 26.7083C27.7538 25.6629 28.4224 24.2999 28.6092 22.8334H30.3334V21.1667H28.6092C28.4223 19.7002 27.7536 18.3372 26.7083 17.2919C25.6629 16.2465 24.2999 15.5778 22.8334 15.3909ZM22.0001 27C19.2426 27 17.0001 24.7575 17.0001 22C17.0001 19.2425 19.2426 17 22.0001 17C24.7576 17 27.0001 19.2425 27.0001 22C27.0001 24.7575 24.7576 27 22.0001 27Z",
                                  fill: "black"
                                }
                              )
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Cognitive Disability Profile" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Assists with reading & focusing" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "cognitiveDisability", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "cognitiveDisability",
                              checked: accessibilityProfiles.cognitiveDisability,
                              onChange: () => handleToggle("cognitiveDisability")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.keyboardNavigation ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon keyboard-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 43 43", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "kb-ring-off", cx: "21.5", cy: "21.5", r: "20.5", fill: "#ECEDED" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "kb-ring-off", cx: "21.5", cy: "21.5", r: "20", stroke: "black", strokeOpacity: "0.1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "kb-ring-on", cx: "21.5", cy: "21.5", r: "19.5", fill: "#D9F8F0", stroke: "#01CE9C", strokeWidth: "2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(15,15)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              className: "kb-path",
                              d: "M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z",
                              fill: "black"
                            }
                          ) })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Keyboard Navigation (Motor)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This profile prompts automatically for keyboard users." })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "keyboardNavigation", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "keyboardNavigation",
                              checked: accessibilityProfiles.keyboardNavigation,
                              onChange: () => handleToggle("keyboardNavigation")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `profile-item ${accessibilityProfiles.blindUsers ? "is-on" : ""}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ab-profile-item-icon blind-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 43 43", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "blind-ring-off", cx: "21.5", cy: "21.5", r: "20.5", fill: "#ECEDED" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "blind-ring-off", cx: "21.5", cy: "21.5", r: "20", stroke: "black", strokeOpacity: "0.1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "blind-ring-on", cx: "21.5", cy: "21.5", r: "19.5", fill: "#D9F8F0", stroke: "#01CE9C", strokeWidth: "2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(15,15)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              className: "blind-path",
                              d: "M8 7L2 7L2 0H0L0 8C0 8.26522 0.105356 8.51957 0.292892 8.70711C0.480429 8.89464 0.734783 9 1 9H8V12L13 8L8 4L8 7Z",
                              fill: "black"
                            }
                          ) })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Blind Users (Screen Reader)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimize website for screen-readers" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ab-toggle-switch", htmlFor: "blindUsers", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "blindUsers",
                              checked: accessibilityProfiles.blindUsers,
                              onChange: () => handleToggle("blindUsers")
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ab-slider" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-footer", "aria-hidden": "true", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        className: "panel-footer-link panel-footer-link--brand",
                        src: footerBrandSvg,
                        alt: ""
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        className: "panel-footer-link panel-footer-link--powered",
                        src: footerPoweredSvg,
                        alt: ""
                      }
                    )
                  ] })
                ]
              }
            ),
            customizationData?.hideTriggerButton !== "Yes" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "accessibility-widget",
                style: {
                  left: customizationData?.triggerHorizontalPosition === "Left" ? `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || "0px")}px)` : customizationData?.triggerHorizontalPosition === "Right" ? "auto" : "50%",
                  right: customizationData?.triggerHorizontalPosition === "Right" ? `calc(10px + ${parseInt(customizationData?.triggerHorizontalOffset || "0px")}px)` : "auto",
                  top: customizationData?.triggerVerticalPosition === "Top" ? `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || "0px")}px)` : "auto",
                  bottom: customizationData?.triggerVerticalPosition === "Bottom" ? `calc(10px + ${parseInt(customizationData?.triggerVerticalOffset || "0px")}px)` : "auto",
                  transform: customizationData?.triggerHorizontalPosition === "Center" ? customizationData?.triggerVerticalPosition === "Middle" ? "translateX(-50%)" : "translateX(-50%)" : customizationData?.triggerVerticalPosition === "Middle" ? "translateY(-50%)" : "none"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `widget-trigger ${customizationData?.triggerButtonShape?.toLowerCase() || "circle"} ${customizationData?.triggerButtonSize?.toLowerCase() || "medium"}`,
                    style: { backgroundColor: customizationData?.triggerButtonColor || "#007bff" },
                    onClick: () => setShowPreviewPanel(!showPreviewPanel),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: iconOptions.find((icon) => icon.id === customizationData?.selectedIcon)?.label || icon1,
                        alt: "Accessibility Icon",
                        className: "widget-icon"
                      }
                    )
                  }
                )
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "publish-page-payment-panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Subscription" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "publish-page-payment-window", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "payment-card publish-page-payment-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pricing-flex publish-page-pricing-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pricing-single-column", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-price", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price-number", children: [
              "$",
              isAnnual ? "19" : "24"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price-period", children: [
              "/",
              isAnnual ? "month: Purchased Annually" : "month"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `payment-toggle ${isAnnual ? "annually" : "monthly"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `toggle-option ${!isAnnual ? "active" : ""}`,
                onClick: () => setIsAnnual(false),
                children: "Monthly"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `toggle-option ${isAnnual ? "active" : ""}`,
                onClick: () => setIsAnnual(true),
                children: "Annually"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "savings-info", style: { opacity: isAnnual ? 1 : 0, visibility: isAnnual ? "visible" : "hidden" }, children: "You Save 20%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "secondary-price", children: [
            "$",
            isAnnual ? "19" : "24",
            "/month",
            isAnnual ? ": Purchased Annually" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "purchase-btn",
              onClick: handlePurchaseNow,
              children: "Purchase Now"
            }
          )
        ] }) }) }) })
      ] })
    ] })
  ] });
};
const App = () => {
  const [currentScreen, setCurrentScreen] = reactExports.useState("welcome");
  const [customizationData, setCustomizationData] = reactExports.useState(null);
  const [isLoadingExistingData, setIsLoadingExistingData] = reactExports.useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = reactExports.useState(true);
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [hasInitialized, setHasInitialized] = reactExports.useState(false);
  const { requestOTP: requestOTP2, verifyOTP, getPublishedSettings: getPublishedSettings2, attemptAutoRefresh } = useAuth();
  reactExports.useEffect(() => {
    const onAuthSuccess = () => setIsAuthenticated(true);
    window.addEventListener("accessbit-auth-success", onAuthSuccess);
    return () => window.removeEventListener("accessbit-auth-success", onAuthSuccess);
  }, []);
  reactExports.useEffect(() => {
    if (hasInitialized) return;
    setHasInitialized(true);
    const initializeApp = async () => {
      setIsCheckingAuth(true);
      try {
        const ok2 = await attemptAutoRefresh();
        if (ok2) {
          const token = loadStoredFramerToken();
          const payload = token ? decodeJWTPayload(token) : null;
          const currentSite = await platform.getSiteInfo().catch(() => null);
          const isSameProject = payload?.siteId && currentSite?.siteId && payload.siteId === currentSite.siteId;
          setIsAuthenticated(!!isSameProject);
        } else {
          setIsAuthenticated(false);
        }
        setCurrentScreen("welcome");
      } catch {
        setIsAuthenticated(false);
        setCurrentScreen("welcome");
      } finally {
        setIsCheckingAuth(false);
      }
    };
    initializeApp();
  }, [hasInitialized]);
  reactExports.useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;
    const loadSettings = async () => {
      setIsLoadingExistingData(true);
      try {
        const existingSettings = await getPublishedSettings2();
        if (!cancelled && existingSettings?.customization) {
          setCustomizationData(existingSettings.customization);
        }
      } catch {
      } finally {
        if (!cancelled) setIsLoadingExistingData(false);
      }
    };
    loadSettings();
    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);
  const handleWelcomeScreen = () => setCurrentScreen("customization");
  const handleBackToWelcome = () => setCurrentScreen("welcome");
  const handleBackToCustomization = () => setCurrentScreen("customization");
  const handleNextToPublish = (data) => {
    setCustomizationData(data);
    setCurrentScreen("publish");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", height: "100%" }, children: currentScreen === "welcome" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    WelcomeScreen,
    {
      requestOTP: requestOTP2,
      verifyOTP,
      authenticated: isAuthenticated,
      isCheckingAuth,
      handleWelcomeScreen
    }
  ) : currentScreen === "customization" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    CustomizationScreen,
    {
      onBack: handleBackToWelcome,
      onNext: handleNextToPublish,
      existingCustomizationData: customizationData,
      isLoadingExistingData
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    PublishScreen,
    {
      onBack: handleBackToCustomization,
      customizationData: customizationData || {}
    }
  ) });
};
void T$1.showUI({
  position: "top right",
  width: 800,
  height: 600
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
const root = client.createRoot(
  document.getElementById("root")
);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
