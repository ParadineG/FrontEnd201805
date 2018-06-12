"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('helper.ts');
var Helper;
(function (Helper) {
    var _this = this;
    var _cacheHTML = new Map();
    Helper.fetchContent = function (file) { return __awaiter(_this, void 0, void 0, function () {
        var response, templateHTML;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(file)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    templateHTML = _a.sent();
                    // try catch
                    return [2 /*return*/, templateHTML];
            }
        });
    }); };
    Helper.getHTMLTemplate = function (name) { return __awaiter(_this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!_cacheHTML.has(name)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Helper.fetchContent("templates/" + name + "-template.html")];
                case 1:
                    content = _a.sent();
                    if (content) {
                        _cacheHTML.set(name, content);
                    }
                    else {
                        alert('error');
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/, _cacheHTML.get(name)];
            }
        });
    }); };
    Helper.parseHTMLString = function (target, mustache, content) {
        return target.replace(new RegExp(mustache, 'g'), content);
    };
})(Helper || (Helper = {}));
console.log('page.ts');
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());
///<reference path='helper.ts' />
///<reference path='page.ts' />
console.log('acquireItems.ts');
var AcquireItems = /** @class */ (function (_super) {
    __extends(AcquireItems, _super);
    function AcquireItems() {
        var _this = _super.call(this) || this;
        _this._posts = [];
        _this._cacheDOM();
        return _this;
    }
    AcquireItems.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, temp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate('acquire-items')];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                            this._module = document.querySelector('main');
                            if (this._module) {
                                temp = this._module.querySelector('template');
                                if (temp) {
                                    this._microTempate = temp.innerHTML;
                                }
                                this._list = this._module.querySelector('#main-item-list');
                                this._input = this._module.querySelector('input');
                                this._bindEvents();
                                this._render();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AcquireItems.prototype._bindEvents = function () {
        if (this._input) {
            this._input.addEventListener('input', this._render.bind(this, this._input));
        }
    };
    AcquireItems.prototype._render = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var data, dataHTML_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Helper.fetchContent('/data/featuredPosts.php')];
                    case 1:
                        data = _a.sent();
                        if (data && this._list) {
                            this._posts = JSON.parse(data);
                            dataHTML_1 = '';
                            this._posts.forEach(function (value) {
                                var parsePass1 = Helper.parseHTMLString(_this._microTempate, '{{cardTitle}}', value.name);
                                var parsePass2 = Helper.parseHTMLString(parsePass1, '{{cardDescription}}', value.description);
                                var parsePass3 = Helper.parseHTMLString(parsePass2, '{{cardLink}}', "/data/" + value.photo);
                                var parsePass4 = Helper.parseHTMLString(parsePass3, '{{cardPrice}}', value.price + "\u20AC");
                                if (filter) {
                                    if (value.name.toLowerCase().includes(filter.value.toLowerCase())) {
                                        dataHTML_1 += parsePass4;
                                    }
                                }
                                else {
                                    dataHTML_1 += parsePass4;
                                }
                            });
                            this._list.innerHTML = dataHTML_1;
                            //           if (this._module) {
                            //             this._module.innerText = this._posts[0].description;
                            //            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AcquireItems;
}(Page));
///<reference path='helper.ts' />
///<reference path='page.ts' />
console.log('provideitem.ts');
var Provideitem = /** @class */ (function (_super) {
    __extends(Provideitem, _super);
    function Provideitem() {
        var _this = _super.call(this) || this;
        _this._posts = [];
        _this._cacheDOM();
        return _this;
    }
    Provideitem.prototype._cacheDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._module = document.querySelector('main');
                        _a = this;
                        return [4 /*yield*/, Helper.getHTMLTemplate('provide-item')];
                    case 1:
                        _a._template = _b.sent();
                        if (this._module && this._template) {
                            this._module.outerHTML = this._template;
                        }
                        this._bindEvents();
                        this._render();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provideitem.prototype._bindEvents = function () {
    };
    Provideitem.prototype._render = function () {
    };
    return Provideitem;
}(Page));
///<reference path='page.ts' />
///<reference path='acquireItems.ts' />
///<reference path='provideItem.ts' />
console.log('main.ts');
var App = /** @class */ (function () {
    function App() {
        this._mainNavLinks = [{ name: 'Acquire items', link: '#acquire/items' },
            { name: 'Provide item', link: '#provide/item' },
            { name: 'Acquire services', link: '#acquire/services' },
            { name: 'Provide service', link: '#provide/service' }];
        this._navLinks = [];
        this._page;
        this._navLinks = this._mainNavLinks /*, ...this_footerNavLinks*/.slice();
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    App.prototype._setup = function () {
        this._urlChanged();
    };
    App.prototype._urlChanged = function () {
        console.log(window.location.hash);
        if (window.location.hash === this._mainNavLinks[0].link) {
            this._page = new AcquireItems();
        }
        else if (window.location.hash === this._mainNavLinks[1].link) {
            this._page = new Provideitem();
        }
        else if (window.location.hash === '') {
            this._page = new AcquireItems();
        }
        else {
            this._page = new AcquireItems();
        }
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=app.js.map