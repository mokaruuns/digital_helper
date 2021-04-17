(window.webpackJsonp = window.webpackJsonp || []).push([[33], {
    1097: function (e, t, n) {
        "use strict";
        n.r(t);
        n(12), n(10), n(11), n(6), n(5), n(22), n(7);
        var r = n(0), o = n(4), c = n(31);

        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function (t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        var O = {name: "Main",
            components: {
                MobileMain: function () {
                    return n.e(56).then(n.bind(null, 1052))
                }, WideMain: function () {
                    return n.e(55).then(n.bind(null, 1051))
                }
            },
            head: function () {
                return {link: [{rel: "canonical", href: "https://".concat(this.$config.rsvDomain, "/")}]}
            },
            computed: f(f({}, Object(c.c)(["isMobile"])), {}, {
                version: function () {
                    return this.isMobile ? "MobileMain" : "WideMain"
                }
            }),
            fetch: function () {
                var e = this;
                return Object(r.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e.loadRMain(), t.next = 3, Promise.all([e.loadMillionStories(), e.loadMainItems("contests"), e.loadMainItems("events"), e.loadMainItems("internship")]);
                            case 3:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            methods: f(f({}, Object(c.b)(["loadRMain", "loadMillionStories"])), Object(c.b)("competitions", ["loadMainItems"]))
        }, d = n(17), component = Object(d.a)(O, (function () {
            var e = this.$createElement;
            return (this._self._c || e)(this.version, {key: this.version, tag: "component"})
        }), [], !1, null, null, null);
        t.default = component.exports
    }
}]);