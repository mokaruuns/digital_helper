(window.webpackJsonp = window.webpackJsonp || []).push([[64], {
    1064: function (e, t, r) {
        "use strict";
        r.r(t);
        r(12), r(10), r(6), r(5), r(11);
        var n = r(4), o = (r(102), r(708)), c = r(31);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, r)
            }
            return t
        }

        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function (t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        var h = {
            name: "WideHeaderSearch",
            components: {SearchResults: o.a},
            props: {isActive: {type: Boolean, default: !1}},
            data: function () {
                return {search: "", showCategories: !1, activeCategories: []}
            },
            computed: l(l({}, Object(c.c)(["searchReceived"])), {}, {
                showContent: function () {
                    return this.showCategories || this.searchReceived
                }
            }),
            watch: {
                isActive: function (e) {
                    var t = this;
                    e && this.$nextTick((function () {
                        var input = t.$refs.input;
                        input && input.focus()
                    }))
                }, search: function (e) {
                    this.searchHandler(e)
                }
            },
            methods: l(l({}, Object(c.b)(["searchText", "clearSearch"])), {}, {
                outsideClickHandler: function () {
                    this.closeHandler()
                }, searchHandler: function (e) {
                    var t = void 0 !== e ? e : this.search;
                    !t || t.length < 3 ? this.clearSearch() : this.searchText({str: t, filters: this.getFilters()})
                }, getFilters: function () {
                    var e = "";
                    return this.activeCategories && this.activeCategories.forEach((function (t) {
                        e += "&filter[index][]=".concat(t)
                    })), e
                }, changeCategoriesHandler: function (e) {
                    this.activeCategories = e, this.searchHandler()
                }, showCategoriesHandler: function () {
                    this.showCategories = !this.showCategories
                }, closeHandler: function () {
                    this.showCategories = !1, this.clearSearchHandler(), this.$emit("close")
                }, clearSearchHandler: function () {
                    this.search = "", this.activeCategories = [], this.clearSearch()
                }
            })
        }, v = (r(913), r(17)), f = Object(v.a)(h, (function () {
            var e = this, t = e.$createElement, r = e._self._c || t;
            return r("div", {
                staticClass: "wide-header-search",
                class: {active: e.isActive}
            }, [e.isActive ? r("div", {
                staticClass: "catcher",
                on: {click: e.outsideClickHandler}
            }) : e._e(), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isActive,
                    expression: "!isActive"
                }], staticClass: "search-button", on: {
                    click: function (t) {
                        return e.$emit("active")
                    }
                }
            }), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isActive,
                    expression: "isActive"
                }], staticClass: "search-main"
            }, [r("div", {staticClass: "searching-block"}, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.search,
                    expression: "search"
                }],
                ref: "input",
                staticClass: "searching-input",
                attrs: {placeholder: "Поиск по сайту"},
                domProps: {value: e.search},
                on: {
                    input: function (t) {
                        t.target.composing || (e.search = t.target.value)
                    }
                }
            }), e._v(" "), r("div", {
                staticClass: "searching-switcher",
                on: {click: e.showCategoriesHandler}
            }, [r("div", {staticClass: "searching-switcher-label"}, [e._v("\n                    Выбрать раздел\n                ")]), e._v(" "), r("div", {
                staticClass: "searching-switcher-arrow",
                class: {open: e.showCategories}
            })]), e._v(" "), r("div", {
                staticClass: "searching-close-button",
                on: {click: e.closeHandler}
            }, [e._v("\n                Закрыть\n            ")])]), e._v(" "), e.showContent ? r("div", {staticClass: "content"}, [r("SearchResults", {
                attrs: {
                    "show-categories": e.showCategories,
                    search: e.search
                }, on: {change: e.changeCategoriesHandler, clear: e.clearSearchHandler, navigate: e.closeHandler}
            })], 1) : e._e()])])
        }), [], !1, null, "fb93c8d0", null).exports, m = r(696);

        function w(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, r)
            }
            return t
        }

        function k(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? w(Object(source), !0).forEach((function (t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        var x = {
            name: "WideHeader",
            components: {SocialLinks: r(458).a, Buttons: m.a, HeaderSearch: f},
            model: {prop: "isMenuActive", event: "change"},
            props: {isMenuActive: Boolean},
            data: function () {
                return {
                    listItems: [{
                        title: "Обучение",
                        route: "/edu/courses",
                        pathName: "edu-courses-page"
                    }, {
                        title: "Программа «Наставничество»",
                        route: "/mentoring",
                        pathName: "mentoring"
                    }, {
                        title: "Конкурсы",
                        route: "/competitions",
                        pathName: "competitions-contests-page"
                    }, {
                        title: "Истории успеха",
                        route: "/success",
                        pathName: "success-page"
                    }, {title: "Трудоустройство", link: "https://trudvsem.ru", blank: !0}, {
                        title: "Галерея",
                        route: "/gallery",
                        pathName: "gallery-page"
                    }], showSearch: !1
                }
            },
            watch: {
                $route: function () {
                    this.$emit("change", !1)
                }
            },
            mounted: function () {
                this.takeMeasurements()
            },
            updated: function () {
                this.takeMeasurements()
            },
            methods: k(k({}, Object(c.d)(["setHeaderHeight"])), {}, {
                takeMeasurements: function () {
                    var e = this;
                    this.$nextTick((function () {
                        if (e.$refs.refHeader) {
                            var element = e.$refs.refHeader;
                            if (element) {
                                var t = element.offsetHeight;
                                e.setHeaderHeight(t)
                            }
                        } else console.log("Desktop header already removed!")
                    }))
                }
            })
        }, y = (r(916), Object(v.a)(x, (function () {
            var e = this, t = e.$createElement, r = e._self._c || t;
            return r("div", {ref: "refHeader", staticClass: "wide-header"}, [r("nuxt-link", {
                staticClass: "logo",
                attrs: {to: {name: "index"}, "no-prefetch": ""}
            }), e._v(" "), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.showSearch,
                    expression: "!showSearch"
                }], staticClass: "nav"
            }, [r("nuxt-link", {
                attrs: {
                    to: {name: "about-us"},
                    "no-prefetch": ""
                }
            }, [e._v("\n            О нас\n        ")]), e._v(" "), r("nuxt-link", {
                attrs: {
                    to: {name: "supervisory-board"},
                    "no-prefetch": ""
                }
            }, [e._v("\n            Наблюдательный совет\n        ")]), e._v(" "), r("nuxt-link", {
                attrs: {
                    to: {name: "contacts"},
                    "no-prefetch": ""
                }
            }, [e._v("\n            Контакты\n        ")]), e._v(" "), r("nuxt-link", {
                attrs: {
                    to: {name: "news-page"},
                    "no-prefetch": ""
                }
            }, [e._v("\n            Новости\n        ")])], 1), e._v(" "), r("SocialLinks", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.showSearch,
                    expression: "!showSearch"
                }],
                staticClass: "social-links",
                attrs: {vk: "", ok: "", tg: "", fb: "", inst: "", youtube: "", size: "small"}
            }), e._v(" "), r("HeaderSearch", {
                staticClass: "search",
                attrs: {"is-active": e.showSearch},
                on: {
                    active: function (t) {
                        e.showSearch = !0
                    }, close: function (t) {
                        e.showSearch = !1
                    }
                }
            }), e._v(" "), r("Buttons"), e._v(" "), r("div", {
                staticClass: "burger", on: {
                    click: function (t) {
                        return e.$emit("change", !0)
                    }
                }
            }), e._v(" "), r("div", {
                staticClass: "menu-bg", class: {active: e.isMenuActive}, on: {
                    click: function (t) {
                        return e.$emit("change", !1)
                    }
                }
            }, [r("div", {staticClass: "menu"}, [r("div", [r("div", {staticClass: "menu-header"}, [r("div", {staticClass: "logo"}), e._v(" "), r("div", {
                staticClass: "close",
                on: {
                    click: function (t) {
                        return e.$emit("change", !1)
                    }
                }
            })]), e._v(" "), r("div", {staticClass: "menu-list"}, e._l(e.listItems, (function (t, n) {
                return r("div", {key: n, staticClass: "menu-list__item"}, [t.link ? r("a", {
                    attrs: {
                        href: t.link,
                        target: t.blank ? "__blank" : ""
                    }
                }, [e._v("\n                            " + e._s(t.title) + "\n                        ")]) : r("nuxt-link", {
                    attrs: {
                        to: {name: t.pathName},
                        "no-prefetch": ""
                    }
                }, [e._v("\n                            " + e._s(t.title) + "\n                        ")])], 1)
            })), 0)]), e._v(" "), r("div", [r("div", {staticClass: "menu-nav"}, [r("nuxt-link", {
                attrs: {
                    to: {name: "about-us"},
                    "no-prefetch": ""
                }
            }, [e._v("\n                        О нас\n                    ")]), e._v(" "), r("nuxt-link", {
                attrs: {
                    to: {name: "supervisory-board"},
                    "no-prefetch": ""
                }
            }, [e._v("\n                        Наблюдательный совет\n                    ")]), e._v(" "), r("nuxt-link", {
                attrs: {
                    to: {name: "contacts"},
                    "no-prefetch": ""
                }
            }, [e._v("\n                        Контакты\n                    ")])], 1), e._v(" "), r("div", {staticClass: "menu-social"}, [r("nuxt-link", {
                staticClass: "vk",
                attrs: {to: "/vk", "no-prefetch": ""}
            }), e._v(" "), r("nuxt-link", {
                staticClass: "ok",
                attrs: {to: "/ok", "no-prefetch": ""}
            }), e._v(" "), r("nuxt-link", {
                staticClass: "ig",
                attrs: {to: "/inst", "no-prefetch": ""}
            }), e._v(" "), r("nuxt-link", {
                staticClass: "fb",
                attrs: {to: "/facebook", "no-prefetch": ""}
            }), e._v(" "), r("nuxt-link", {
                staticClass: "yt",
                attrs: {to: "/youtube", "no-prefetch": ""}
            })], 1)])])])], 1)
        }), [], !1, null, "6d183bea", null));
        t.default = y.exports
    }, 472: function (e, t, r) {
        var content = r(517);
        "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
        (0, r(19).default)("302146b6", content, !0, {sourceMap: !1})
    }, 516: function (e, t, r) {
        "use strict";
        var n = r(472);
        r.n(n).a
    }, 517: function (e, t, r) {
        (t = r(18)(!1)).push([e.i, ".buttons[data-v-5fc845d6]{display:flex;align-items:center;height:100%}.buttons>*[data-v-5fc845d6]{margin-left:1rem}.box[data-v-5fc845d6]{display:flex;justify-content:center;align-items:center;width:3rem;height:3rem;border-radius:.3rem;border:1px solid;color:#63b5e6}.icon[data-v-5fc845d6]{width:50%;height:50%}.icon *[data-v-5fc845d6]{color:#3874e0}.auth[data-v-5fc845d6]{display:flex;justify-content:center;align-items:center;height:3rem;width:8rem;border-radius:.2rem;color:#fff;background-color:#3874e0;cursor:pointer;padding:.51875rem}.auth[data-v-5fc845d6]:hover{background-color:#356ed5}.auth span[data-v-5fc845d6]{width:100%;text-overflow:ellipsis;overflow:hidden;display:block;text-align:center;white-space:nowrap}", ""]), e.exports = t
    }, 614: function (e, t, r) {
        var content = r(914);
        "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
        (0, r(19).default)("21b68abf", content, !0, {sourceMap: !1})
    }, 615: function (e, t, r) {
        var content = r(917);
        "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
        (0, r(19).default)("23d40268", content, !0, {sourceMap: !1})
    }, 696: function (e, t, r) {
        "use strict";
        r(12), r(10), r(6), r(5), r(11);
        var n = r(4), o = r(31);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, r)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function (t) {
                    Object(n.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        var l = {
            name: "Buttons", methods: d(d({}, Object(o.b)(["login"])), {}, {
                authClicked: function () {
                    this.login()
                }
            })
        }, h = (r(516), r(17)), component = Object(h.a)(l, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "buttons"}, [t("div", [t("div", {
                staticClass: "auth",
                on: {click: this.authClicked}
            }, [this._v("Войти")])])])
        }), [], !1, null, "5fc845d6", null);
        t.a = component.exports
    }, 913: function (e, t, r) {
        "use strict";
        var n = r(614);
        r.n(n).a
    }, 914: function (e, t, r) {
        var n = r(18), o = r(47), c = r(915), d = r(701), l = r(702);
        t = n(!1);
        var h = o(c), v = o(d), f = o(l);
        t.push([e.i, ".wide-header-search[data-v-fb93c8d0]{position:relative;font-family:Proxima Nova,sans-serif}.wide-header-search .catcher[data-v-fb93c8d0]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:transparent}.wide-header-search .search-main[data-v-fb93c8d0]{position:relative;z-index:2;background:#fff}.wide-header-search.active[data-v-fb93c8d0]{width:100%}.wide-header-search .search-button[data-v-fb93c8d0]{width:3rem;height:3rem;margin-left:auto;cursor:pointer;background:#fff url(" + h + ") no-repeat 50%/75%}.wide-header-search .searching-block[data-v-fb93c8d0]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding:.6225rem 1.245rem;border:1px solid #d2d5d9;border-radius:.2075rem}.wide-header-search .searching-input[data-v-fb93c8d0]{flex:1 1 auto;margin-right:.83rem;border:none;outline:none;font-family:Proxima Nova,sans-serif;font-size:.93375rem;line-height:1.34875rem;color:#2a2626}.wide-header-search .searching-input[data-v-fb93c8d0]::-moz-placeholder{color:#98a0a9}.wide-header-search .searching-input[data-v-fb93c8d0]:-ms-input-placeholder{color:#98a0a9}.wide-header-search .searching-input[data-v-fb93c8d0]::-ms-input-placeholder{color:#98a0a9}.wide-header-search .searching-input[data-v-fb93c8d0]::placeholder{color:#98a0a9}.wide-header-search .searching-contorls-row[data-v-fb93c8d0],.wide-header-search .searching-switcher[data-v-fb93c8d0]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center}.wide-header-search .searching-switcher[data-v-fb93c8d0]{cursor:pointer}.wide-header-search .searching-switcher-label[data-v-fb93c8d0]{font-weight:600;font-size:.83rem;line-height:1.245rem;color:#3874e0}.wide-header-search .searching-switcher-label[data-v-fb93c8d0]:hover{color:#356ed5}.wide-header-search .searching-switcher-arrow[data-v-fb93c8d0]{width:.6225rem;height:.31125rem;margin-left:.51875rem;background:url(" + v + ") no-repeat 50%/contain;transition:trasform .2s}.wide-header-search .searching-switcher-arrow.open[data-v-fb93c8d0]{transform:rotate(180deg);transition:trasform .2s}.wide-header-search .searching-back-button[data-v-fb93c8d0]{width:.51875rem;height:.83rem;margin-right:.77812rem;background:url(" + f + ") no-repeat 50%/contain;cursor:pointer}.wide-header-search .searching-close-button[data-v-fb93c8d0]{margin-left:1.55625rem;font-size:.77812rem;line-height:1.14125rem;color:#98a0a9;cursor:pointer}.wide-header-search .searching-close-button[data-v-fb93c8d0]:hover{color:#2a2626}.wide-header-search .content[data-v-fb93c8d0]{position:absolute;top:3.00875rem;left:0;right:0;overflow-y:auto;max-height:27.33812rem;padding:1.245rem 1.245rem 2.075rem;border-radius:0 0 .83rem .83rem;background:#fff;box-shadow:0 .15562rem .83rem rgba(155,161,166,.24)}.wide-header-search .content[data-v-fb93c8d0]::-webkit-scrollbar{height:auto;width:.3rem}.wide-header-search .content[data-v-fb93c8d0]::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:.3rem}.wide-header-search .content[data-v-fb93c8d0]::-webkit-scrollbar-track{background:none}", ""]), e.exports = t
    }, 915: function (e, t, r) {
        e.exports = r.p + "img/search-red.f24d957.svg"
    }, 916: function (e, t, r) {
        "use strict";
        var n = r(615);
        r.n(n).a
    }, 917: function (e, t, r) {
        var n = r(18), o = r(47), c = r(703), d = r(704), l = r(706), h = r(705);
        t = n(!1);
        var v = o(c), f = o(d), m = o(l), w = o(h);
        t.push([e.i, "a[data-v-6d183bea]{color:#2a2626}.wide-header[data-v-6d183bea]{height:5rem;display:flex;position:fixed;z-index:999;top:0}.logo[data-v-6d183bea]{flex:0 0 auto;width:10rem;background:url(" + v + ") no-repeat 50%;background-size:75%}.logo[data-v-6d183bea],.nav[data-v-6d183bea]{display:flex;height:100%}.nav[data-v-6d183bea]{justify-content:space-between;align-items:center;width:30rem;margin-left:1rem;margin-right:2rem}.nav>*[data-v-6d183bea]{font-size:.9rem;font-weight:700;padding-bottom:.3rem;border-bottom:1px solid transparent}.nav[data-v-6d183bea]>:hover{border-bottom:1px solid #63b5e6}.nav .old[data-v-6d183bea]{color:grey;cursor:pointer;font-weight:400}.social-links[data-v-6d183bea]{margin-right:auto}.burger[data-v-6d183bea]{flex:0 0 auto;width:5rem;height:100%;cursor:pointer;background:url(" + f + ") no-repeat 50%;background-size:40%}.menu-bg[data-v-6d183bea]{position:fixed;top:0;left:0;width:100rem;height:100vh;z-index:5;pointer-events:none;background-color:rgba(0,0,0,.6);opacity:0;transition:.5s}.menu-bg .menu[data-v-6d183bea]{display:flex;flex-direction:column;justify-content:space-between;background-image:url(" + m + ");background-size:cover;width:20rem;height:100%;position:absolute;top:0;right:-20rem;transition:.5s}.menu-bg .menu .menu-header[data-v-6d183bea]{height:5rem;display:flex;justify-content:space-between;margin-bottom:5rem}.menu-bg .menu .menu-header .close[data-v-6d183bea]{width:5rem;background:url(" + w + ") no-repeat 50%;background-size:30%;cursor:pointer}.menu-bg .menu .menu-list[data-v-6d183bea]{display:flex;flex-direction:column;justify-content:space-between;padding-left:1.2rem}.menu-bg .menu .menu-list a[data-v-6d183bea]:hover{color:#000}.menu-bg .menu .menu-list *[data-v-6d183bea]{color:#3874e0}.menu-bg .menu .menu-list__item[data-v-6d183bea]{padding:1rem 0}.menu-bg .menu .menu-nav[data-v-6d183bea]{display:flex;flex-direction:column;justify-content:space-between;padding-left:1.2rem}.menu-bg .menu .menu-nav a[data-v-6d183bea]{line-height:2rem}.menu-bg .menu .menu-nav[data-v-6d183bea]>:hover{color:#3874e0}.menu-bg .menu .menu-social[data-v-6d183bea]{display:flex;align-items:center;height:3rem;padding-left:1.2rem;margin-bottom:2rem}.menu-bg .menu .menu-social>*[data-v-6d183bea]{display:flex;width:1.8rem;height:1.8rem;background-repeat:no-repeat;background-size:cover;margin-right:.5rem}.menu-bg.active[data-v-6d183bea]{opacity:1;pointer-events:auto}.menu-bg.active .menu[data-v-6d183bea]{right:0}", ""]), e.exports = t
    }
}]);