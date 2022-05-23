// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fmqN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./layout/main/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _index1 = require("./pages/chats/index");
var _indexDefault1 = parcelHelpers.interopDefault(_index1);
var _index2 = require("./modules/chats/components/user/index");
var _index3 = require("./modules/chats/components/messageHeader/index");
var _indexDefault2 = parcelHelpers.interopDefault(_index3);
var _index4 = require("./modules/chats/components/messageField/index");
var _indexDefault3 = parcelHelpers.interopDefault(_index4);
var _index5 = require("./components/input/index");
var _index6 = require("./components/button/index");
var _index7 = require("./components/title/index");
var _index8 = require("./components/link/index");
var _index9 = require("./components/form/index");
var _indexDefault4 = parcelHelpers.interopDefault(_index9);
const root = document.querySelector('#root');
console.warn(location);
switch(location.pathname){
    case '/':
        root.innerHTML = _indexDefault.default.flex;
        const authLayout = document.querySelector('.layout');
        authLayout.innerHTML = _indexDefault4.default;
        const auth = document.querySelector('.form');
        auth.innerHTML = [
            _index7.title.auth,
            _index5.authInputs,
            _index6.authButtonFake,
            _index8.authLink
        ].join(' ');
        break;
    case '/registration':
        root.innerHTML = _indexDefault.default.flex;
        const registrationLayout = document.querySelector('.layout');
        registrationLayout.innerHTML = _indexDefault4.default;
        const registration = document.querySelector('.form');
        registration.innerHTML = [
            _index7.title.registration,
            _index5.regInputs,
            _index6.regButtonFake,
            _index8.regLink
        ].join(' ');
        break;
    case '/chats':
        root.innerHTML = _indexDefault.default.block;
        const chatsLayout = document.querySelector('.layout');
        chatsLayout.innerHTML = _indexDefault1.default.wrapper;
        const wrapper = document.querySelector('.chats');
        wrapper.innerHTML = [
            _indexDefault1.default.menu,
            _indexDefault1.default.field
        ].join(' ');
        const menu = document.querySelector('.chats-menu');
        menu.innerHTML = [
            _indexDefault1.default.menuSettings,
            _indexDefault1.default.menuSettingsUsers
        ].join(' ');
        const menuSettings = document.querySelector('.chats-menu-settings');
        menuSettings.innerHTML = [
            _index2.userSettings,
            _index5.searchInput
        ].join(' ');
        const menuUsers = document.querySelector('.chats-menu-settings-users');
        menuUsers.innerHTML = _index2.usersArray;
        const messageFieldBlock = document.querySelector('.chats-field');
        messageFieldBlock.innerHTML = [
            _indexDefault2.default,
            _indexDefault3.default
        ].join(' ');
        break;
    case '/error':
        root.innerHTML = _indexDefault.default.flex;
        const errorPage = document.querySelector('.layout');
        errorPage.innerHTML = _indexDefault4.default;
        const serverError = document.querySelector('.form');
        serverError.innerHTML = [
            _index7.title.serverError,
            _index7.subtitle.serverErrorMain,
            _index7.subtitle.serverErrorSecondary,
            _index6.goToChatsButtonFake
        ].join(' ');
        break;
    default:
        root.innerHTML = _indexDefault.default.flex;
        const notFoundPage = document.querySelector('.layout');
        notFoundPage.innerHTML = _indexDefault4.default;
        const notFound = document.querySelector('.form');
        notFound.innerHTML = [
            _index7.title.notFound,
            _index7.subtitle.notFoundMain,
            _index7.subtitle.notFoundSecondary,
            _index6.goToChatsButtonFake
        ].join(' ');
}

},{"./layout/main/index":"mI04q","./pages/chats/index":"7duCf","./modules/chats/components/user/index":"vL4Qn","./modules/chats/components/messageHeader/index":"c7xkp","./modules/chats/components/messageField/index":"dWcdC","./components/input/index":"8Cm93","./components/button/index":"f08eE","./components/title/index":"ibW24","./components/link/index":"5bTod","./components/form/index":"gtMo0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mI04q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _main = require("./main");
var _mainDefault = parcelHelpers.interopDefault(_main);
const context = {
    block: {
        className: 'layout'
    },
    flex: {
        className: 'layout -flex'
    }
};
exports.default = {
    block: _mainDefault.default.compile(context.block),
    flex: _mainDefault.default.compile(context.flex)
};

},{"./main":"c67TF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c67TF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _mainTmpl = require("./main.tmpl");
var _mainTmplDefault = parcelHelpers.interopDefault(_mainTmpl);
exports.default = new _templatorDefault.default(_mainTmplDefault.default);

},{"../../utils/templator":"auiru","./main.tmpl":"hkQuL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"auiru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _get = require("./get");
class Templator {
    VALUE_TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    constructor(template){
        this._template = template;
    }
    compile(ctx) {
        return this._compileTemplate(ctx);
    }
    compileArray(array) {
        return array.reduce((preVal, ctx)=>preVal.concat(this._compileTemplate(ctx))
        , '');
    }
    _compileTemplate(ctx) {
        let tmpl = this._template;
        tmpl.match(this.VALUE_TEMPLATE_REGEXP).forEach((value)=>{
            const clearedValue = value.replace(/[{}\s]/gi, '');
            const data = _get.get(ctx, clearedValue);
            const isFunction = typeof data === "function";
            const changedData = isFunction ? `window.${clearedValue}()` : data;
            if (isFunction) window[clearedValue] = data;
            tmpl = tmpl.replace(new RegExp(value, "gi"), changedData);
        });
        return tmpl;
    }
}
exports.default = Templator;

},{"./get":"b3dMR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3dMR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get
);
function get(obj, path, defaultValue) {
    const keys = path.split('.');
    let result = obj;
    for (let key of keys){
        result = result[key];
        if (result === undefined) return defaultValue;
    }
    return result ?? defaultValue;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hkQuL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
    <div class="{{ className }}"></div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7duCf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chats = require("./chats");
var _chatsDefault = parcelHelpers.interopDefault(_chats);
const chatsContext = {
    wrapper: {
        className: 'chats'
    },
    menu: {
        className: 'chats-menu'
    },
    menuSettings: {
        className: 'chats-menu-settings'
    },
    menuSettingsUsers: {
        className: 'chats-menu-settings-users'
    },
    field: {
        className: 'chats-field'
    }
};
exports.default = {
    wrapper: _chatsDefault.default.compile(chatsContext.wrapper),
    menu: _chatsDefault.default.compile(chatsContext.menu),
    menuSettings: _chatsDefault.default.compile(chatsContext.menuSettings),
    menuSettingsUsers: _chatsDefault.default.compile(chatsContext.menuSettingsUsers),
    field: _chatsDefault.default.compile(chatsContext.field)
};

},{"./chats":"e9Ant","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e9Ant":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _chatsTmpl = require("./chats.tmpl");
var _chatsTmplDefault = parcelHelpers.interopDefault(_chatsTmpl);
const tmpl = new _templatorDefault.default(_chatsTmplDefault.default);
exports.default = tmpl;

},{"../../utils/templator":"auiru","./chats.tmpl":"32AZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32AZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<div class="{{ className }}"></div>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vL4Qn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userSettings", ()=>userSettings
);
parcelHelpers.export(exports, "usersArray", ()=>usersArray
);
var _user = require("./user");
var _store = require("../../../../store");
const userSettingsContext = {
    userClassName: 'chats-menu-settings-user_settings',
    avatarClassName: 'user-avatar',
    contentClassName: 'chats-menu-settings-user-content',
    contentTitleClassName: 'user-title',
    contentTitleText: 'Иван Иванов',
    contentMessageClassName: 'user-message',
    contentMessageText: '+7 (909) 967 30 30',
    userClassSettings: 'user-settings'
};
const usersContext = _store.state.users.map((user)=>{
    return {
        userClassName: `chats-menu-settings-user ${_store.state.activeUser === user.id ? '-active' : ''}`,
        avatarClassName: 'user-avatar',
        contentClassName: 'chats-menu-settings-user-content',
        contentTitleClassName: 'user-title',
        contentTitleText: user.name,
        contentMessageClassName: 'user-message',
        contentMessageText: user.message,
        infoClassName: 'flex-column-wrapper',
        infoTimeClassName: 'user-time',
        infoTimeText: user.wasOnline,
        infoNewMessageClassName: `${user.newMessage ? 'user-new_message' : ''}`,
        infoNewMessageText: user.newMessage,
        clickHandler: function() {
            console.warn('userClicked', user);
        }
    };
});
const userSettings = _user.renderedUserSettings.compile(userSettingsContext);
const usersArray = _user.renderedUser.compileArray(usersContext);

},{"./user":"iz7jx","../../../../store":"2FI5H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iz7jx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderedUser", ()=>renderedUser
);
parcelHelpers.export(exports, "renderedUserSettings", ()=>renderedUserSettings
);
var _templator = require("../../../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _userTmpl = require("./user.tmpl");
const renderedUser = new _templatorDefault.default(_userTmpl.user);
const renderedUserSettings = new _templatorDefault.default(_userTmpl.userSettings);

},{"../../../../utils/templator":"auiru","./user.tmpl":"kZBz1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZBz1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userSettings", ()=>userSettings
);
parcelHelpers.export(exports, "user", ()=>user
);
const userSettings = `
    <div class="{{ userClassName }}">
        <div class="{{ avatarClassName }}"></div>
        <div class="{{ contentClassName }}">
            <span class="{{ contentTitleClassName }}">{{ contentTitleText }}</span>
            <span class="{{ contentMessageClassName }}">{{ contentMessageText }}</span>
        </div>
        <div class="{{ userClassSettings }}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2499 12.5701V11.4226L21.6899 10.1626C21.9554 9.9286 22.1296 9.60833 22.1817 9.25836C22.2339 8.90839 22.1606 8.55125 21.9749 8.25006L20.2049 5.25006C20.0734 5.02226 19.8843 4.83305 19.6566 4.70141C19.4288 4.56977 19.1705 4.50033 18.9074 4.50006C18.7444 4.49881 18.5823 4.52414 18.4274 4.57506L16.6049 5.19006C16.2903 4.98097 15.9621 4.79305 15.6224 4.62756L15.2399 2.73756C15.1714 2.39226 14.9835 2.08209 14.7093 1.86134C14.4351 1.64058 14.0919 1.52332 13.7399 1.53006H10.2299C9.87797 1.52332 9.53483 1.64058 9.2606 1.86134C8.98638 2.08209 8.79853 2.39226 8.72995 2.73756L8.34745 4.62756C8.0054 4.79301 7.67467 4.98092 7.35745 5.19006L5.57245 4.54506C5.41592 4.50428 5.25383 4.48908 5.09245 4.50006C4.8294 4.50033 4.57105 4.56977 4.34332 4.70141C4.11558 4.83305 3.92647 5.02226 3.79495 5.25006L2.02495 8.25006C1.84989 8.5508 1.78483 8.90305 1.84093 9.24648C1.89703 9.58991 2.07079 9.90316 2.33245 10.1326L3.74995 11.4301V12.5776L2.33245 13.8376C2.0634 14.0686 1.88489 14.3874 1.82859 14.7375C1.7723 15.0876 1.84187 15.4464 2.02495 15.7501L3.79495 18.7501C3.92647 18.9779 4.11558 19.1671 4.34332 19.2987C4.57105 19.4304 4.8294 19.4998 5.09245 19.5001C5.25546 19.5013 5.41758 19.476 5.57245 19.4251L7.39495 18.8101C7.7096 19.0192 8.03783 19.2071 8.37745 19.3726L8.75995 21.2626C8.82853 21.6079 9.01638 21.918 9.2906 22.1388C9.56483 22.3595 9.90797 22.4768 10.2599 22.4701H13.7999C14.1519 22.4768 14.4951 22.3595 14.7693 22.1388C15.0435 21.918 15.2314 21.6079 15.2999 21.2626L15.6824 19.3726C16.0245 19.2071 16.3552 19.0192 16.6724 18.8101L18.4874 19.4251C18.6423 19.476 18.8044 19.5013 18.9674 19.5001C19.2305 19.4998 19.4888 19.4304 19.7166 19.2987C19.9443 19.1671 20.1334 18.9779 20.2649 18.7501L21.9749 15.7501C22.15 15.4493 22.2151 15.0971 22.159 14.7536C22.1029 14.4102 21.9291 14.097 21.6674 13.8676L20.2499 12.5701ZM18.9074 18.0001L16.3349 17.1301C15.7327 17.6401 15.0445 18.0389 14.3024 18.3076L13.7699 21.0001H10.2299L9.69745 18.3376C8.96126 18.0612 8.27673 17.6632 7.67245 17.1601L5.09245 18.0001L3.32245 15.0001L5.36245 13.2001C5.22377 12.4237 5.22377 11.6289 5.36245 10.8526L3.32245 9.00006L5.09245 6.00006L7.66495 6.87006C8.26715 6.35998 8.9554 5.96125 9.69745 5.69256L10.2299 3.00006H13.7699L14.3024 5.66256C15.0386 5.93888 15.7232 6.33692 16.3274 6.84006L18.9074 6.00006L20.6774 9.00006L18.6374 10.8001C18.7761 11.5764 18.7761 12.3712 18.6374 13.1476L20.6774 15.0001L18.9074 18.0001Z" fill="#3F51B5"/>
                <path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.506 12.5926 16.3937 13.1805 16.1697 13.7292C15.9457 14.2779 15.6145 14.7763 15.1954 15.1954C14.7763 15.6145 14.2779 15.9457 13.7292 16.1697C13.1805 16.3937 12.5926 16.506 12 16.5ZM12 9C11.6035 8.99077 11.2093 9.06205 10.8411 9.20954C10.473 9.35704 10.1386 9.57768 9.85812 9.85812C9.57768 10.1386 9.35704 10.473 9.20954 10.8411C9.06205 11.2093 8.99077 11.6035 9 12C8.99077 12.3965 9.06205 12.7907 9.20954 13.1589C9.35704 13.527 9.57768 13.8615 9.85812 14.1419C10.1386 14.4223 10.473 14.643 10.8411 14.7905C11.2093 14.938 11.6035 15.0092 12 15C12.3965 15.0092 12.7907 14.938 13.1589 14.7905C13.527 14.643 13.8615 14.4223 14.1419 14.1419C14.4223 13.8615 14.643 13.527 14.7905 13.1589C14.938 12.7907 15.0092 12.3965 15 12C15.0092 11.6035 14.938 11.2093 14.7905 10.8411C14.643 10.473 14.4223 10.1386 14.1419 9.85812C13.8615 9.57768 13.527 9.35704 13.1589 9.20954C12.7907 9.06205 12.3965 8.99077 12 9Z" fill="#3F51B5"/>
            </svg>
        </div>
    </div>
`;
const user = `
    <div class="{{ userClassName }}" onclick="{{ clickHandler }}">
        <div class="{{ avatarClassName }}"></div>
        <div class="{{ contentClassName }}">
            <span class="{{ contentTitleClassName }}">{{ contentTitleText }}</span>
            <span class="{{ contentMessageClassName }}">{{ contentMessageText }}</span>
        </div>
        <div class="{{ infoClassName }}">
            <span class="{{ infoTimeClassName }}">{{ infoTimeText }}</span>
            <span class="{{ infoNewMessageClassName }}">{{ infoNewMessageText }}</span>
        </div>
    </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FI5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    settings: {
        auth: {
            login: 'ivan@example.com',
            password: '1234567890'
        },
        registration: {
            email: 'ivan@example.com',
            login: 'ivanivanov',
            first_name: 'Иван',
            second_name: 'Иванов',
            display_name: 'Вано',
            phone: '+79099673030',
            password: '1234567890',
            repeat_password: '1234567890'
        },
        avatar: null,
        oldPassword: null,
        newPassword: null
    },
    activeUser: 5,
    users: [
        {
            id: 0,
            name: 'Кондрат',
            message: 'Ты чего?',
            newMessage: 1,
            wasOnline: '21:14'
        },
        {
            id: 1,
            name: 'Frontend news',
            message: 'Друзья, мы запускаем новую версию продукта',
            newMessage: 4,
            wasOnline: '20:01'
        },
        {
            id: 2,
            name: 'Тёща',
            message: 'А я же говорила...',
            newMessage: '',
            wasOnline: '19:55'
        },
        {
            id: 3,
            name: 'Daily M',
            message: 'Почему вы ещё не создали свою версию',
            newMessage: '',
            wasOnline: '16:01'
        },
        {
            id: 4,
            name: 'Встреча выпускников',
            message: 'Евгений: а может под мост?',
            newMessage: '',
            wasOnline: '14:02'
        },
        {
            id: 5,
            name: 'ЯжДизайнер',
            message: 'Т-текстуры',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 6,
            name: 'Кто-то очень умный',
            message: 'А как вы хотели',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 7,
            name: 'Job for Middle',
            message: 'Ищем миддла в команду',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 8,
            name: 'Андрей',
            message: 'Завтра всё в силе?',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 9,
            name: 'ЯжДизайнер',
            message: 'Т-текстуры',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 10,
            name: 'Кто-то очень умный',
            message: 'А как вы хотели',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 11,
            name: 'Английский язык',
            message: 'Время пришло',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 12,
            name: 'Тёща',
            message: 'А я же говорила...',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 13,
            name: 'Английский язык',
            message: 'Время пришло',
            newMessage: '',
            wasOnline: '21:13'
        },
        {
            id: 14,
            name: 'Тёща',
            message: 'А я же говорила...',
            newMessage: '',
            wasOnline: '21:13'
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7xkp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _messageHeader = require("./messageHeader");
var _messageHeaderDefault = parcelHelpers.interopDefault(_messageHeader);
const context = {
    messageHeader: 'message-header',
    messageHeaderContent: 'message-header-content',
    messageHeaderContentTitle: 'message-header-content-title',
    messageHeaderContentTitleText: 'Daily M',
    messageHeaderContentMessage: 'message-header-content-message',
    messageHeaderContentMessageText: '35 минут',
    messageHeaderMenu: 'message-header-menu'
};
exports.default = _messageHeaderDefault.default.compile(context);

},{"./messageHeader":"498Ss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"498Ss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _messageHeaderTmpl = require("./messageHeader.tmpl");
var _messageHeaderTmplDefault = parcelHelpers.interopDefault(_messageHeaderTmpl);
const tmpl = new _templatorDefault.default(_messageHeaderTmplDefault.default);
exports.default = tmpl;

},{"../../../../utils/templator":"auiru","./messageHeader.tmpl":"8OT9K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OT9K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
    <div class="{{ messageHeader }}">
        <div class="{{ messageHeaderContent }}">
            <span class="{{ messageHeaderContentTitle }}">{{ messageHeaderContentTitleText }}</span>
            <span class="{{ messageHeaderContentMessage }}">был(а) {{ messageHeaderContentMessageText }} назад</span>
        </div>
        <div class="{{ messageHeaderMenu }}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2107 5.03914 10 4.53043 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 18C12.5304 18 13.0391 18.2107 13.4142 18.5858C13.7893 18.9609 14 19.4696 14 20C14 20.5304 13.7893 21.0391 13.4142 21.4142C13.0391 21.7893 12.5304 22 12 22C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18Z" fill="#212121"/>
            </svg>
        </div>
    </div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWcdC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _messageField = require("./messageField");
var _messageFieldDefault = parcelHelpers.interopDefault(_messageField);
const context = {
    messageField: 'message-field',
    messageFieldAttach: 'message-field-attach',
    messageFieldInput: 'message-field-input',
    messageFieldPlaceholder: 'Написать сообщение...'
};
exports.default = _messageFieldDefault.default.compile(context);

},{"./messageField":"cU6tk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cU6tk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _messageFieldTmpl = require("./messageField.tmpl");
var _messageFieldTmplDefault = parcelHelpers.interopDefault(_messageFieldTmpl);
const tmpl = new _templatorDefault.default(_messageFieldTmplDefault.default);
exports.default = tmpl;

},{"../../../../utils/templator":"auiru","./messageField.tmpl":"h0ahO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0ahO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<div class="{{ messageField }}">
    <div class="{{ messageFieldAttach }}">
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6001 12L12.3889 21.2112C11.1102 22.457 9.39234 23.149 7.60717 23.1374C5.82201 23.1258 4.11327 22.4115 2.85094 21.1491C1.58862 19.8868 0.874309 18.1781 0.862693 16.3929C0.851076 14.6077 1.54309 12.8898 2.78888 11.6112L12.2753 2.1248C13.124 1.27611 14.275 0.799316 15.4753 0.799316C16.6755 0.799316 17.8266 1.27611 18.6753 2.1248C19.524 2.97349 20.0008 4.12457 20.0008 5.3248C20.0008 6.52503 19.524 7.67611 18.6753 8.5248L9.46248 17.7376C9.03813 18.1619 8.46259 18.4003 7.86248 18.4003C7.26236 18.4003 6.68682 18.1619 6.26248 17.7376C5.83813 17.3133 5.59974 16.7377 5.59974 16.1376C5.59974 15.5375 5.83813 14.9619 6.26248 14.5376L15.2001 5.6" stroke="#757575"/>
        </svg>
    </div>
    <input class="{{ messageFieldInput }}" placeholder="{{ messageFieldPlaceholder }}">
</div>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Cm93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authInputs", ()=>authInputs
);
parcelHelpers.export(exports, "regInputs", ()=>regInputs
);
parcelHelpers.export(exports, "searchInput", ()=>searchInput
);
var _inputJs = require("../input/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _store = require("../../store");
const authInputsContext = [
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.auth.login,
        inputPlaceholder: 'E-mail',
        inputType: 'email'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.auth.password,
        inputPlaceholder: 'Пароль',
        inputType: 'password'
    }
];
const regInputsContext = [
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.email,
        inputPlaceholder: 'E-mail',
        inputType: 'email'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.login,
        inputPlaceholder: 'Логин',
        inputType: 'text'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.first_name,
        inputPlaceholder: 'Имя',
        inputType: 'text'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.second_name,
        inputPlaceholder: 'Фамилия',
        inputType: 'text'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.display_name,
        inputPlaceholder: 'Отображаемое имя',
        inputType: 'text'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.phone,
        inputPlaceholder: 'Телефон',
        inputType: 'text'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.password,
        inputPlaceholder: 'Пароль',
        inputType: 'password'
    },
    {
        inputClass: 'chats-input',
        inputValue: _store.state.settings.registration.repeat_password,
        inputPlaceholder: 'Повторите пароль',
        inputType: 'password'
    }
];
const searchInputContext = {
    inputClass: 'chats-input-search',
    inputValue: '',
    inputPlaceholder: 'Поиск',
    inputType: 'text'
};
const authInputs = _inputJsDefault.default.compileArray(authInputsContext);
const regInputs = _inputJsDefault.default.compileArray(regInputsContext);
const searchInput = _inputJsDefault.default.compile(searchInputContext);

},{"../input/input.js":"hd4OY","../../store":"2FI5H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hd4OY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _inputTmpl = require("./input.tmpl");
var _inputTmplDefault = parcelHelpers.interopDefault(_inputTmpl);
const tmpl = new _templatorDefault.default(_inputTmplDefault.default);
exports.default = tmpl;

},{"../../utils/templator":"auiru","./input.tmpl":"867JV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"867JV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<input class="{{ inputClass }}" value="{{ inputValue }}" placeholder="{{ inputPlaceholder }}" type="{{ inputType }}">`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f08eE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authButton", ()=>authButton
);
parcelHelpers.export(exports, "authButtonFake", ()=>authButtonFake
);
parcelHelpers.export(exports, "regButton", ()=>regButton
);
parcelHelpers.export(exports, "regButtonFake", ()=>regButtonFake
);
parcelHelpers.export(exports, "goToChatsButton", ()=>goToChatsButton
);
parcelHelpers.export(exports, "goToChatsButtonFake", ()=>goToChatsButtonFake
);
var _button = require("./button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _link = require("../link/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const authButtonContext = {
    className: 'auth-button',
    text: 'ВХОД'
};
const authButtonFakeContext = {
    className: 'auth-button',
    linkName: '/chats',
    targetName: '',
    text: 'ВХОД'
};
const regButtonContext = {
    className: 'auth-button',
    text: 'ВХОД'
};
const regButtonFakeContext = {
    className: 'auth-button',
    linkName: '/',
    targetName: '',
    text: 'ЗАРЕГИСТРИРОВАТЬСЯ'
};
const goToChatsButtonContext = {
    className: 'auth-button',
    text: 'НАЗАД К ЧАТАМ'
};
const goToChatsButtonFakeContext = {
    className: 'auth-button notFound',
    linkName: '/chats',
    targetName: '',
    text: 'НАЗАД К ЧАТАМ'
};
const authButton = _buttonDefault.default.compile(authButtonContext);
const authButtonFake = _linkDefault.default.compile(authButtonFakeContext);
const regButton = _buttonDefault.default.compile(regButtonContext);
const regButtonFake = _linkDefault.default.compile(regButtonFakeContext);
const goToChatsButton = _linkDefault.default.compile(goToChatsButtonContext);
const goToChatsButtonFake = _linkDefault.default.compile(goToChatsButtonFakeContext);

},{"./button":"15n4s","../link/link":"j4xfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"15n4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _buttonTmpl = require("./button.tmpl");
var _buttonTmplDefault = parcelHelpers.interopDefault(_buttonTmpl);
const tmpl = new _templatorDefault.default(_buttonTmplDefault.default);
exports.default = tmpl;

},{"../../utils/templator":"auiru","./button.tmpl":"lPo9h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPo9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<button class={{ className }}>{{ text }}</button>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4xfB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _linkTmpl = require("./link.tmpl");
var _linkTmplDefault = parcelHelpers.interopDefault(_linkTmpl);
const tmpl = new _templatorDefault.default(_linkTmplDefault.default);
exports.default = tmpl;

},{"../../utils/templator":"auiru","./link.tmpl":"jDvWl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDvWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<a class="{{ className }}" href={{ linkName }} target={{ targetName }}>{{ text }}</a>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibW24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "title", ()=>title
);
parcelHelpers.export(exports, "subtitle", ()=>subtitle
);
var _title = require("./title");
var _titleDefault = parcelHelpers.interopDefault(_title);
const context = {
    title: {
        auth: {
            className: 'title-auth',
            text: 'Авторизация'
        },
        registration: {
            className: 'title-auth',
            text: 'Регистрация'
        },
        notFound: {
            className: 'title-error',
            text: '404'
        },
        serverError: {
            className: 'title-error',
            text: '500'
        }
    },
    subtitle: {
        notFoundMain: {
            className: 'subtitle-main',
            text: 'Такой страницы нет'
        },
        notFoundSecondary: {
            className: 'subtitle-secondary',
            text: 'Возможно она была удалена или перенесена на другой адрес.'
        },
        serverErrorMain: {
            className: 'subtitle-main',
            text: 'У нас проблема'
        },
        serverErrorSecondary: {
            className: 'subtitle-secondary',
            text: 'Мы знаем о проблеме и уже чиним сервис. Скоро все заработает.'
        }
    }
};
const title = {
    auth: _titleDefault.default.pageTitle.compile(context.title.auth),
    registration: _titleDefault.default.pageTitle.compile(context.title.registration),
    notFound: _titleDefault.default.pageTitle.compile(context.title.notFound),
    serverError: _titleDefault.default.pageTitle.compile(context.title.serverError)
};
const subtitle = {
    notFoundMain: _titleDefault.default.mainText.compile(context.subtitle.notFoundMain),
    notFoundSecondary: _titleDefault.default.secondaryText.compile(context.subtitle.notFoundSecondary),
    serverErrorMain: _titleDefault.default.mainText.compile(context.subtitle.serverErrorMain),
    serverErrorSecondary: _titleDefault.default.secondaryText.compile(context.subtitle.serverErrorSecondary)
};

},{"./title":"89JKE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89JKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _titleTmpl = require("./title.tmpl");
var _titleTmplDefault = parcelHelpers.interopDefault(_titleTmpl);
exports.default = {
    pageTitle: new _templatorDefault.default(_titleTmplDefault.default.pageTitle),
    mainText: new _templatorDefault.default(_titleTmplDefault.default.mainText),
    secondaryText: new _templatorDefault.default(_titleTmplDefault.default.secondaryText)
};

},{"../../utils/templator":"auiru","./title.tmpl":"4bK6T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4bK6T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    pageTitle: `<h1 class="{{ className }}">{{ text }}</h1>`,
    mainText: `<h2 class="{{ className }}">{{ text }}</h2>`,
    secondaryText: `<span class="{{ className }}">{{ text }}</span>`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bTod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authLink", ()=>authLink
);
parcelHelpers.export(exports, "regLink", ()=>regLink
);
var _link = require("./link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const authLinkContext = {
    className: 'auth-link',
    linkName: '/registration',
    targetName: '',
    text: 'ЕЩЁ НЕ ЗАРЕГИСТРИРОВАНЫ?'
};
const regLinkContext = {
    className: 'auth-link',
    linkName: '/',
    targetName: '',
    text: 'ВОЙТИ'
};
const authLink = _linkDefault.default.compile(authLinkContext);
const regLink = _linkDefault.default.compile(regLinkContext);

},{"./link":"j4xfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtMo0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _form = require("./form");
var _formDefault = parcelHelpers.interopDefault(_form);
const formContext = {
    className: 'form',
    formHandler: ()=>{
        console.warn('form');
    }
};
exports.default = _formDefault.default.compile(formContext);

},{"./form":"lSziR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSziR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templator = require("../../utils/templator");
var _templatorDefault = parcelHelpers.interopDefault(_templator);
var _formTmpl = require("./form.tmpl");
var _formTmplDefault = parcelHelpers.interopDefault(_formTmpl);
const tmpl = new _templatorDefault.default(_formTmplDefault.default);
exports.default = tmpl;

},{"../../utils/templator":"auiru","./form.tmpl":"hTXJx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTXJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `<form class="{{ className }}" action="{{ formHandler }}"></form>`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequireab20")

//# sourceMappingURL=index.975ef6c8.js.map
