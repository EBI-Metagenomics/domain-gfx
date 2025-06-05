var DomainGfx = (function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 392))
  );
})([
  function (t, e, r) {
    var n = r(2),
      i = r(13).f,
      o = r(15),
      a = r(16),
      s = r(98),
      l = r(136),
      u = r(60);
    t.exports = function (t, e) {
      var r,
        c,
        f,
        h,
        d,
        p = t.target,
        v = t.global,
        g = t.stat;
      if ((r = v ? n : g ? n[p] || s(p, {}) : (n[p] || {}).prototype))
        for (c in e) {
          if (
            ((h = e[c]),
            (f = t.noTargetGet ? (d = i(r, c)) && d.value : r[c]),
            !u(v ? c : p + (g ? '.' : '#') + c, t.forced) && void 0 !== f)
          ) {
            if (typeof h == typeof f) continue;
            l(h, f);
          }
          (t.sham || (f && f.sham)) && o(h, 'sham', !0), a(r, c, h, t);
        }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r('object' == typeof globalThis && globalThis) ||
        r('object' == typeof window && window) ||
        r('object' == typeof self && self) ||
        r('object' == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    }.call(this, r(133)));
  },
  function (t, e) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    };
  },
  function (t, e, r) {
    var n = r(1);
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, r) {
    var n = r(2),
      i = r(101),
      o = r(11),
      a = r(56),
      s = r(105),
      l = r(138),
      u = i('wks'),
      c = n.Symbol,
      f = l ? c : (c && c.withoutSetter) || a;
    t.exports = function (t) {
      return (
        o(u, t) || (s && o(c, t) ? (u[t] = c[t]) : (u[t] = f('Symbol.' + t))),
        u[t]
      );
    };
  },
  function (t, e, r) {
    var n = r(27),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(127),
      o = r(5),
      a = r(2),
      s = r(3),
      l = r(11),
      u = r(66),
      c = r(15),
      f = r(16),
      h = r(9).f,
      d = r(28),
      p = r(40),
      v = r(6),
      g = r(56),
      m = a.Int8Array,
      y = m && m.prototype,
      b = a.Uint8ClampedArray,
      w = b && b.prototype,
      x = m && d(m),
      S = y && d(y),
      C = Object.prototype,
      k = C.isPrototypeOf,
      T = v('toStringTag'),
      A = g('TYPED_ARRAY_TAG'),
      L = i && !!p && 'Opera' !== u(a.opera),
      O = !1,
      M = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      },
      E = { BigInt64Array: 8, BigUint64Array: 8 },
      _ = function (t) {
        if (!s(t)) return !1;
        var e = u(t);
        return l(M, e) || l(E, e);
      };
    for (n in M) a[n] || (L = !1);
    if (
      (!L || 'function' != typeof x || x === Function.prototype) &&
      ((x = function () {
        throw TypeError('Incorrect invocation');
      }),
      L)
    )
      for (n in M) a[n] && p(a[n], x);
    if ((!L || !S || S === C) && ((S = x.prototype), L))
      for (n in M) a[n] && p(a[n].prototype, S);
    if ((L && d(w) !== S && p(w, S), o && !l(S, T)))
      for (n in ((O = !0),
      h(S, T, {
        get: function () {
          return s(this) ? this[A] : void 0;
        },
      }),
      M))
        a[n] && c(a[n], A, n);
    t.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: L,
      TYPED_ARRAY_TAG: O && A,
      aTypedArray: function (t) {
        if (_(t)) return t;
        throw TypeError('Target is not a typed array');
      },
      aTypedArrayConstructor: function (t) {
        if (p) {
          if (k.call(x, t)) return t;
        } else
          for (var e in M)
            if (l(M, n)) {
              var r = a[e];
              if (r && (t === r || k.call(r, t))) return t;
            }
        throw TypeError('Target is not a typed array constructor');
      },
      exportTypedArrayMethod: function (t, e, r) {
        if (o) {
          if (r)
            for (var n in M) {
              var i = a[n];
              i && l(i.prototype, t) && delete i.prototype[t];
            }
          (S[t] && !r) || f(S, t, r ? e : (L && y[t]) || e);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var n, i;
        if (o) {
          if (p) {
            if (r) for (n in M) (i = a[n]) && l(i, t) && delete i[t];
            if (x[t] && !r) return;
            try {
              return f(x, t, r ? e : (L && m[t]) || e);
            } catch (t) {}
          }
          for (n in M) !(i = a[n]) || (i[t] && !r) || f(i, t, e);
        }
      },
      isView: function (t) {
        if (!s(t)) return !1;
        var e = u(t);
        return 'DataView' === e || l(M, e) || l(E, e);
      },
      isTypedArray: _,
      TypedArray: x,
      TypedArrayPrototype: S,
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = r(134),
      o = r(4),
      a = r(29),
      s = Object.defineProperty;
    e.f = n
      ? s
      : function (t, e, r) {
          if ((o(t), (e = a(e, !0)), o(r), i))
            try {
              return s(t, e, r);
            } catch (t) {}
          if ('get' in r || 'set' in r)
            throw TypeError('Accessors not supported');
          return 'value' in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(14);
    t.exports = function (t) {
      return Object(n(t));
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var n = r(39),
      i = r(55),
      o = r(10),
      a = r(7),
      s = r(62),
      l = [].push,
      u = function (t) {
        var e = 1 == t,
          r = 2 == t,
          u = 3 == t,
          c = 4 == t,
          f = 6 == t,
          h = 7 == t,
          d = 5 == t || f;
        return function (p, v, g, m) {
          for (
            var y,
              b,
              w = o(p),
              x = i(w),
              S = n(v, g, 3),
              C = a(x.length),
              k = 0,
              T = m || s,
              A = e ? T(p, C) : r || h ? T(p, 0) : void 0;
            C > k;
            k++
          )
            if ((d || k in x) && ((b = S((y = x[k]), k, w)), t))
              if (e) A[k] = b;
              else if (b)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return k;
                  case 2:
                    l.call(A, y);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    l.call(A, y);
                }
          return f ? -1 : u || c ? c : A;
        };
      };
    t.exports = {
      forEach: u(0),
      map: u(1),
      filter: u(2),
      some: u(3),
      every: u(4),
      find: u(5),
      findIndex: u(6),
      filterOut: u(7),
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = r(75),
      o = r(32),
      a = r(22),
      s = r(29),
      l = r(11),
      u = r(134),
      c = Object.getOwnPropertyDescriptor;
    e.f = n
      ? c
      : function (t, e) {
          if (((t = a(t)), (e = s(e, !0)), u))
            try {
              return c(t, e);
            } catch (t) {}
          if (l(t, e)) return o(!i.f.call(t, e), t[e]);
        };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = r(9),
      o = r(32);
    t.exports = n
      ? function (t, e, r) {
          return i.f(t, e, o(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(15),
      o = r(11),
      a = r(98),
      s = r(99),
      l = r(17),
      u = l.get,
      c = l.enforce,
      f = String(String).split('String');
    (t.exports = function (t, e, r, s) {
      var l,
        u = !!s && !!s.unsafe,
        h = !!s && !!s.enumerable,
        d = !!s && !!s.noTargetGet;
      'function' == typeof r &&
        ('string' != typeof e || o(r, 'name') || i(r, 'name', e),
        (l = c(r)).source ||
          (l.source = f.join('string' == typeof e ? e : ''))),
        t !== n
          ? (u ? !d && t[e] && (h = !0) : delete t[e],
            h ? (t[e] = r) : i(t, e, r))
          : h
          ? (t[e] = r)
          : a(e, r);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && u(this).source) || s(this);
    });
  },
  function (t, e, r) {
    var n,
      i,
      o,
      a = r(135),
      s = r(2),
      l = r(3),
      u = r(15),
      c = r(11),
      f = r(100),
      h = r(76),
      d = r(57),
      p = s.WeakMap;
    if (a) {
      var v = f.state || (f.state = new p()),
        g = v.get,
        m = v.has,
        y = v.set;
      (n = function (t, e) {
        return (e.facade = t), y.call(v, t, e), e;
      }),
        (i = function (t) {
          return g.call(v, t) || {};
        }),
        (o = function (t) {
          return m.call(v, t);
        });
    } else {
      var b = h('state');
      (d[b] = !0),
        (n = function (t, e) {
          return (e.facade = t), u(t, b, e), e;
        }),
        (i = function (t) {
          return c(t, b) ? t[b] : {};
        }),
        (o = function (t) {
          return c(t, b);
        });
    }
    t.exports = {
      set: n,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : n(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!l(e) || (r = i(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function');
      return t;
    };
  },
  function (t, e, r) {
    var n = r(58),
      i = r(11),
      o = r(141),
      a = r(9).f;
    t.exports = function (t) {
      var e = n.Symbol || (n.Symbol = {});
      i(e, t) || a(e, t, { value: o.f(t) });
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = r(1),
      o = r(11),
      a = Object.defineProperty,
      s = {},
      l = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (o(s, t)) return s[t];
      e || (e = {});
      var r = [][t],
        u = !!o(e, 'ACCESSORS') && e.ACCESSORS,
        c = o(e, 0) ? e[0] : l,
        f = o(e, 1) ? e[1] : void 0;
      return (s[t] =
        !!r &&
        !i(function () {
          if (u && !n) return !0;
          var t = { length: -1 };
          u ? a(t, 1, { enumerable: !0, get: l }) : (t[1] = 1), r.call(t, c, f);
        }));
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(95),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = n.a || i || Function('return this')();
    e.a = o;
  },
  function (t, e, r) {
    var n = r(55),
      i = r(14);
    t.exports = function (t) {
      return n(i(t));
    };
  },
  function (t, e, r) {
    var n = r(58),
      i = r(2),
      o = function (t) {
        return 'function' == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(n[t]) || o(i[t])
        : (n[t] && n[t][e]) || (i[t] && i[t][e]);
    };
  },
  function (t, e, r) {
    var n = r(14),
      i = /"/g;
    t.exports = function (t, e, r, o) {
      var a = String(n(t)),
        s = '<' + e;
      return (
        '' !== r &&
          (s += ' ' + r + '="' + String(o).replace(i, '&quot;') + '"'),
        s + '>' + a + '</' + e + '>'
      );
    };
  },
  function (t, e, r) {
    var n = r(1);
    t.exports = function (t) {
      return n(function () {
        var e = ''[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function (t, e, r) {
    var n = r(11),
      i = r(10),
      o = r(76),
      a = r(108),
      s = o('IE_PROTO'),
      l = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = i(t)),
            n(t, s)
              ? t[s]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? l
              : null
          );
        };
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ('function' == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(9).f,
      i = r(11),
      o = r(6)('toStringTag');
    t.exports = function (t, e, r) {
      t &&
        !i((t = r ? t : t.prototype), o) &&
        n(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    var n,
      i = r(4),
      o = r(106),
      a = r(103),
      s = r(57),
      l = r(139),
      u = r(97),
      c = r(76),
      f = c('IE_PROTO'),
      h = function () {},
      d = function (t) {
        return '<script>' + t + '</script>';
      },
      p = function () {
        try {
          n = document.domain && new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        p = n
          ? (function (t) {
              t.write(d('')), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(n)
          : (((e = u('iframe')).style.display = 'none'),
            l.appendChild(e),
            (e.src = String('javascript:')),
            (t = e.contentWindow.document).open(),
            t.write(d('document.F=Object')),
            t.close(),
            t.F);
        for (var r = a.length; r--; ) delete p.prototype[a[r]];
        return p();
      };
    (s[f] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((h.prototype = i(t)),
                (r = new h()),
                (h.prototype = null),
                (r[f] = t))
              : (r = p()),
            void 0 === e ? r : o(r, e)
          );
        });
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(1),
      o = r(45),
      a = r(3),
      s = r(10),
      l = r(7),
      u = r(46),
      c = r(62),
      f = r(67),
      h = r(6),
      d = r(68),
      p = h('isConcatSpreadable'),
      v =
        d >= 51 ||
        !i(function () {
          var t = [];
          return (t[p] = !1), t.concat()[0] !== t;
        }),
      g = f('concat'),
      m = function (t) {
        if (!a(t)) return !1;
        var e = t[p];
        return void 0 !== e ? !!e : o(t);
      };
    n(
      { target: 'Array', proto: !0, forced: !v || !g },
      {
        concat: function (t) {
          var e,
            r,
            n,
            i,
            o,
            a = s(this),
            f = c(a, 0),
            h = 0;
          for (e = -1, n = arguments.length; e < n; e++)
            if (m((o = -1 === e ? a : arguments[e]))) {
              if (h + (i = l(o.length)) > 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              for (r = 0; r < i; r++, h++) r in o && u(f, h, o[r]);
            } else {
              if (h >= 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              u(f, h++, o);
            }
          return (f.length = h), f;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        n(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(4),
      i = r(18),
      o = r(6)('species');
    t.exports = function (t, e) {
      var r,
        a = n(t).constructor;
      return void 0 === a || null == (r = n(a)[o]) ? e : i(r);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(2),
      o = r(5),
      a = r(128),
      s = r(8),
      l = r(93),
      u = r(43),
      c = r(32),
      f = r(15),
      h = r(7),
      d = r(176),
      p = r(177),
      v = r(29),
      g = r(11),
      m = r(66),
      y = r(3),
      b = r(31),
      w = r(40),
      x = r(44).f,
      S = r(178),
      C = r(12).forEach,
      k = r(51),
      T = r(9),
      A = r(13),
      L = r(17),
      O = r(89),
      M = L.get,
      E = L.set,
      _ = T.f,
      N = A.f,
      I = Math.round,
      j = i.RangeError,
      P = l.ArrayBuffer,
      R = l.DataView,
      D = s.NATIVE_ARRAY_BUFFER_VIEWS,
      F = s.TYPED_ARRAY_TAG,
      W = s.TypedArray,
      z = s.TypedArrayPrototype,
      B = s.aTypedArrayConstructor,
      H = s.isTypedArray,
      U = function (t, e) {
        for (var r = 0, n = e.length, i = new (B(t))(n); n > r; ) i[r] = e[r++];
        return i;
      },
      V = function (t, e) {
        _(t, e, {
          get: function () {
            return M(this)[e];
          },
        });
      },
      G = function (t) {
        var e;
        return (
          t instanceof P ||
          'ArrayBuffer' == (e = m(t)) ||
          'SharedArrayBuffer' == e
        );
      },
      q = function (t, e) {
        return (
          H(t) && 'symbol' != typeof e && e in t && String(+e) == String(e)
        );
      },
      $ = function (t, e) {
        return q(t, (e = v(e, !0))) ? c(2, t[e]) : N(t, e);
      },
      Y = function (t, e, r) {
        return !(q(t, (e = v(e, !0))) && y(r) && g(r, 'value')) ||
          g(r, 'get') ||
          g(r, 'set') ||
          r.configurable ||
          (g(r, 'writable') && !r.writable) ||
          (g(r, 'enumerable') && !r.enumerable)
          ? _(t, e, r)
          : ((t[e] = r.value), t);
      };
    o
      ? (D ||
          ((A.f = $),
          (T.f = Y),
          V(z, 'buffer'),
          V(z, 'byteOffset'),
          V(z, 'byteLength'),
          V(z, 'length')),
        n(
          { target: 'Object', stat: !0, forced: !D },
          { getOwnPropertyDescriptor: $, defineProperty: Y }
        ),
        (t.exports = function (t, e, r) {
          var o = t.match(/\d+$/)[0] / 8,
            s = t + (r ? 'Clamped' : '') + 'Array',
            l = 'get' + t,
            c = 'set' + t,
            v = i[s],
            g = v,
            m = g && g.prototype,
            T = {},
            A = function (t, e) {
              _(t, e, {
                get: function () {
                  return (function (t, e) {
                    var r = M(t);
                    return r.view[l](e * o + r.byteOffset, !0);
                  })(this, e);
                },
                set: function (t) {
                  return (function (t, e, n) {
                    var i = M(t);
                    r && (n = (n = I(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                      i.view[c](e * o + i.byteOffset, n, !0);
                  })(this, e, t);
                },
                enumerable: !0,
              });
            };
          D
            ? a &&
              ((g = e(function (t, e, r, n) {
                return (
                  u(t, g, s),
                  O(
                    y(e)
                      ? G(e)
                        ? void 0 !== n
                          ? new v(e, p(r, o), n)
                          : void 0 !== r
                          ? new v(e, p(r, o))
                          : new v(e)
                        : H(e)
                        ? U(g, e)
                        : S.call(g, e)
                      : new v(d(e)),
                    t,
                    g
                  )
                );
              })),
              w && w(g, W),
              C(x(v), function (t) {
                t in g || f(g, t, v[t]);
              }),
              (g.prototype = m))
            : ((g = e(function (t, e, r, n) {
                u(t, g, s);
                var i,
                  a,
                  l,
                  c = 0,
                  f = 0;
                if (y(e)) {
                  if (!G(e)) return H(e) ? U(g, e) : S.call(g, e);
                  (i = e), (f = p(r, o));
                  var v = e.byteLength;
                  if (void 0 === n) {
                    if (v % o) throw j('Wrong length');
                    if ((a = v - f) < 0) throw j('Wrong length');
                  } else if ((a = h(n) * o) + f > v) throw j('Wrong length');
                  l = a / o;
                } else (l = d(e)), (i = new P((a = l * o)));
                for (
                  E(t, {
                    buffer: i,
                    byteOffset: f,
                    byteLength: a,
                    length: l,
                    view: new R(i),
                  });
                  c < l;

                )
                  A(t, c++);
              })),
              w && w(g, W),
              (m = g.prototype = b(z))),
            m.constructor !== g && f(m, 'constructor', g),
            F && f(m, F, s),
            (T[s] = g),
            n({ global: !0, forced: g != v, sham: !D }, T),
            'BYTES_PER_ELEMENT' in g || f(g, 'BYTES_PER_ELEMENT', o),
            'BYTES_PER_ELEMENT' in m || f(m, 'BYTES_PER_ELEMENT', o),
            k(s);
        }))
      : (t.exports = function () {});
  },
  function (t, e, r) {
    var n = r(27),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? i(r + e, 0) : o(r, e);
    };
  },
  function (t, e, r) {
    var n = r(18);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, r) {
    var n = r(4),
      i = r(142);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, o) {
              return n(r), i(o), e ? t.call(r, o) : (r.__proto__ = o), r;
            };
          })()
        : void 0);
  },
  function (t, e, r) {
    var n = r(4),
      i = r(109),
      o = r(7),
      a = r(39),
      s = r(65),
      l = r(143),
      u = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    t.exports = function (t, e, r) {
      var c,
        f,
        h,
        d,
        p,
        v,
        g,
        m = r && r.that,
        y = !(!r || !r.AS_ENTRIES),
        b = !(!r || !r.IS_ITERATOR),
        w = !(!r || !r.INTERRUPTED),
        x = a(e, m, 1 + y + w),
        S = function (t) {
          return c && l(c), new u(!0, t);
        },
        C = function (t) {
          return y
            ? (n(t), w ? x(t[0], t[1], S) : x(t[0], t[1]))
            : w
            ? x(t, S)
            : x(t);
        };
      if (b) c = t;
      else {
        if ('function' != typeof (f = s(t)))
          throw TypeError('Target is not iterable');
        if (i(f)) {
          for (h = 0, d = o(t.length); d > h; h++)
            if ((p = C(t[h])) && p instanceof u) return p;
          return new u(!1);
        }
        c = f.call(t);
      }
      for (v = c.next; !(g = v.call(c)).done; ) {
        try {
          p = C(g.value);
        } catch (t) {
          throw (l(c), t);
        }
        if ('object' == typeof p && p && p instanceof u) return p;
      }
      return new u(!1);
    };
  },
  function (t, e, r) {
    var n = r(6),
      i = r(31),
      o = r(9),
      a = n('unscopables'),
      s = Array.prototype;
    null == s[a] && o.f(s, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        s[a][t] = !0;
      });
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
      return t;
    };
  },
  function (t, e, r) {
    var n = r(137),
      i = r(103).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(33);
    t.exports =
      Array.isArray ||
      function (t) {
        return 'Array' == n(t);
      };
  },
  function (t, e, r) {
    'use strict';
    var n = r(29),
      i = r(9),
      o = r(32);
    t.exports = function (t, e, r) {
      var a = n(e);
      a in t ? i.f(t, a, o(0, r)) : (t[a] = r);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(22),
      i = r(42),
      o = r(64),
      a = r(17),
      s = r(114),
      l = a.set,
      u = a.getterFor('Array Iterator');
    (t.exports = s(
      Array,
      'Array',
      function (t, e) {
        l(this, { type: 'Array Iterator', target: n(t), index: 0, kind: e });
      },
      function () {
        var t = u(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == r
          ? { value: n, done: !1 }
          : 'values' == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      'values'
    )),
      (o.Arguments = o.Array),
      i('keys'),
      i('values'),
      i('entries');
  },
  function (t, e, r) {
    var n = r(57),
      i = r(3),
      o = r(11),
      a = r(9).f,
      s = r(56),
      l = r(69),
      u = s('meta'),
      c = 0,
      f =
        Object.isExtensible ||
        function () {
          return !0;
        },
      h = function (t) {
        a(t, u, { value: { objectID: 'O' + ++c, weakData: {} } });
      },
      d = (t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!i(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, u)) {
            if (!f(t)) return 'F';
            if (!e) return 'E';
            h(t);
          }
          return t[u].objectID;
        },
        getWeakData: function (t, e) {
          if (!o(t, u)) {
            if (!f(t)) return !0;
            if (!e) return !1;
            h(t);
          }
          return t[u].weakData;
        },
        onFreeze: function (t) {
          return l && d.REQUIRED && f(t) && !o(t, u) && h(t), t;
        },
      });
    n[u] = !0;
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(2),
      o = r(23),
      a = r(26),
      s = r(5),
      l = r(105),
      u = r(138),
      c = r(1),
      f = r(11),
      h = r(45),
      d = r(3),
      p = r(4),
      v = r(10),
      g = r(22),
      m = r(29),
      y = r(32),
      b = r(31),
      w = r(61),
      x = r(44),
      S = r(140),
      C = r(104),
      k = r(13),
      T = r(9),
      A = r(75),
      L = r(15),
      O = r(16),
      M = r(101),
      E = r(76),
      _ = r(57),
      N = r(56),
      I = r(6),
      j = r(141),
      P = r(19),
      R = r(30),
      D = r(17),
      F = r(12).forEach,
      W = E('hidden'),
      z = I('toPrimitive'),
      B = D.set,
      H = D.getterFor('Symbol'),
      U = Object.prototype,
      V = i.Symbol,
      G = o('JSON', 'stringify'),
      q = k.f,
      $ = T.f,
      Y = S.f,
      K = A.f,
      X = M('symbols'),
      J = M('op-symbols'),
      Z = M('string-to-symbol-registry'),
      Q = M('symbol-to-string-registry'),
      tt = M('wks'),
      et = i.QObject,
      rt = !et || !et.prototype || !et.prototype.findChild,
      nt =
        s &&
        c(function () {
          return (
            7 !=
            b(
              $({}, 'a', {
                get: function () {
                  return $(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, r) {
              var n = q(U, e);
              n && delete U[e], $(t, e, r), n && t !== U && $(U, e, n);
            }
          : $,
      it = function (t, e) {
        var r = (X[t] = b(V.prototype));
        return (
          B(r, { type: 'Symbol', tag: t, description: e }),
          s || (r.description = e),
          r
        );
      },
      ot = u
        ? function (t) {
            return 'symbol' == typeof t;
          }
        : function (t) {
            return Object(t) instanceof V;
          },
      at = function (t, e, r) {
        t === U && at(J, e, r), p(t);
        var n = m(e, !0);
        return (
          p(r),
          f(X, n)
            ? (r.enumerable
                ? (f(t, W) && t[W][n] && (t[W][n] = !1),
                  (r = b(r, { enumerable: y(0, !1) })))
                : (f(t, W) || $(t, W, y(1, {})), (t[W][n] = !0)),
              nt(t, n, r))
            : $(t, n, r)
        );
      },
      st = function (t, e) {
        p(t);
        var r = g(e),
          n = w(r).concat(ft(r));
        return (
          F(n, function (e) {
            (s && !lt.call(r, e)) || at(t, e, r[e]);
          }),
          t
        );
      },
      lt = function (t) {
        var e = m(t, !0),
          r = K.call(this, e);
        return (
          !(this === U && f(X, e) && !f(J, e)) &&
          (!(r || !f(this, e) || !f(X, e) || (f(this, W) && this[W][e])) || r)
        );
      },
      ut = function (t, e) {
        var r = g(t),
          n = m(e, !0);
        if (r !== U || !f(X, n) || f(J, n)) {
          var i = q(r, n);
          return (
            !i || !f(X, n) || (f(r, W) && r[W][n]) || (i.enumerable = !0), i
          );
        }
      },
      ct = function (t) {
        var e = Y(g(t)),
          r = [];
        return (
          F(e, function (t) {
            f(X, t) || f(_, t) || r.push(t);
          }),
          r
        );
      },
      ft = function (t) {
        var e = t === U,
          r = Y(e ? J : g(t)),
          n = [];
        return (
          F(r, function (t) {
            !f(X, t) || (e && !f(U, t)) || n.push(X[t]);
          }),
          n
        );
      };
    (l ||
      (O(
        (V = function () {
          if (this instanceof V) throw TypeError('Symbol is not a constructor');
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = N(t),
            r = function (t) {
              this === U && r.call(J, t),
                f(this, W) && f(this[W], e) && (this[W][e] = !1),
                nt(this, e, y(1, t));
            };
          return s && rt && nt(U, e, { configurable: !0, set: r }), it(e, t);
        }).prototype,
        'toString',
        function () {
          return H(this).tag;
        }
      ),
      O(V, 'withoutSetter', function (t) {
        return it(N(t), t);
      }),
      (A.f = lt),
      (T.f = at),
      (k.f = ut),
      (x.f = S.f = ct),
      (C.f = ft),
      (j.f = function (t) {
        return it(I(t), t);
      }),
      s &&
        ($(V.prototype, 'description', {
          configurable: !0,
          get: function () {
            return H(this).description;
          },
        }),
        a || O(U, 'propertyIsEnumerable', lt, { unsafe: !0 }))),
    n({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: V }),
    F(w(tt), function (t) {
      P(t);
    }),
    n(
      { target: 'Symbol', stat: !0, forced: !l },
      {
        for: function (t) {
          var e = String(t);
          if (f(Z, e)) return Z[e];
          var r = V(e);
          return (Z[e] = r), (Q[r] = e), r;
        },
        keyFor: function (t) {
          if (!ot(t)) throw TypeError(t + ' is not a symbol');
          if (f(Q, t)) return Q[t];
        },
        useSetter: function () {
          rt = !0;
        },
        useSimple: function () {
          rt = !1;
        },
      }
    ),
    n(
      { target: 'Object', stat: !0, forced: !l, sham: !s },
      {
        create: function (t, e) {
          return void 0 === e ? b(t) : st(b(t), e);
        },
        defineProperty: at,
        defineProperties: st,
        getOwnPropertyDescriptor: ut,
      }
    ),
    n(
      { target: 'Object', stat: !0, forced: !l },
      { getOwnPropertyNames: ct, getOwnPropertySymbols: ft }
    ),
    n(
      {
        target: 'Object',
        stat: !0,
        forced: c(function () {
          C.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return C.f(v(t));
        },
      }
    ),
    G) &&
      n(
        {
          target: 'JSON',
          stat: !0,
          forced:
            !l ||
            c(function () {
              var t = V();
              return (
                '[null]' != G([t]) ||
                '{}' != G({ a: t }) ||
                '{}' != G(Object(t))
              );
            }),
        },
        {
          stringify: function (t, e, r) {
            for (var n, i = [t], o = 1; arguments.length > o; )
              i.push(arguments[o++]);
            if (((n = e), (d(e) || void 0 !== t) && !ot(t)))
              return (
                h(e) ||
                  (e = function (t, e) {
                    if (
                      ('function' == typeof n && (e = n.call(this, t, e)),
                      !ot(e))
                    )
                      return e;
                  }),
                (i[1] = e),
                G.apply(null, i)
              );
          },
        }
      );
    V.prototype[z] || L(V.prototype, z, V.prototype.valueOf),
      R(V, 'Symbol'),
      (_[W] = !0);
  },
  function (t, e, r) {
    var n = r(33),
      i = r(2);
    t.exports = 'process' == n(i.process);
  },
  function (t, e, r) {
    'use strict';
    var n = r(23),
      i = r(9),
      o = r(6),
      a = r(5),
      s = o('species');
    t.exports = function (t) {
      var e = n(t),
        r = i.f;
      a &&
        e &&
        !e[s] &&
        r(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(4);
    t.exports = function () {
      var t = n(this),
        e = '';
      return (
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.dotAll && (e += 's'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      );
    };
  },
  function (t, e, r) {
    var n = r(14),
      i = '[' + r(88) + ']',
      o = RegExp('^' + i + i + '*'),
      a = RegExp(i + i + '*$'),
      s = function (t) {
        return function (e) {
          var r = String(n(e));
          return (
            1 & t && (r = r.replace(o, '')), 2 & t && (r = r.replace(a, '')), r
          );
        };
      };
    t.exports = { start: s(1), end: s(2), trim: s(3) };
  },
  function (t, e, r) {
    var n = r(16);
    t.exports = function (t, e, r) {
      for (var i in e) n(t, i, e[i], r);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(33),
      o = ''.split;
    t.exports = n(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == i(t) ? o.call(t, '') : Object(t);
        }
      : Object;
  },
  function (t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++r + n).toString(36)
      );
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(22),
      i = r(7),
      o = r(38),
      a = function (t) {
        return function (e, r, a) {
          var s,
            l = n(e),
            u = i(l.length),
            c = o(a, u);
          if (t && r != r) {
            for (; u > c; ) if ((s = l[c++]) != s) return !0;
          } else
            for (; u > c; c++)
              if ((t || c in l) && l[c] === r) return t || c || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e, r) {
    var n = r(1),
      i = /#|\.prototype\./,
      o = function (t, e) {
        var r = s[a(t)];
        return r == u || (r != l && ('function' == typeof e ? n(e) : !!e));
      },
      a = (o.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase();
      }),
      s = (o.data = {}),
      l = (o.NATIVE = 'N'),
      u = (o.POLYFILL = 'P');
    t.exports = o;
  },
  function (t, e, r) {
    var n = r(137),
      i = r(103);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(3),
      i = r(45),
      o = r(6)('species');
    t.exports = function (t, e) {
      var r;
      return (
        i(t) &&
          ('function' != typeof (r = t.constructor) ||
          (r !== Array && !i(r.prototype))
            ? n(r) && null === (r = r[o]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(5),
      o = r(2),
      a = r(11),
      s = r(3),
      l = r(9).f,
      u = r(136),
      c = o.Symbol;
    if (
      i &&
      'function' == typeof c &&
      (!('description' in c.prototype) || void 0 !== c().description)
    ) {
      var f = {},
        h = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof h ? new c(t) : void 0 === t ? c() : c(t);
          return '' === t && (f[e] = !0), e;
        };
      u(h, c);
      var d = (h.prototype = c.prototype);
      d.constructor = h;
      var p = d.toString,
        v = 'Symbol(test)' == String(c('test')),
        g = /^Symbol\((.*)\)[^)]+$/;
      l(d, 'description', {
        configurable: !0,
        get: function () {
          var t = s(this) ? this.valueOf() : this,
            e = p.call(t);
          if (a(f, t)) return '';
          var r = v ? e.slice(7, -1) : e.replace(g, '$1');
          return '' === r ? void 0 : r;
        },
      }),
        n({ global: !0, forced: !0 }, { Symbol: h });
    }
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(66),
      i = r(64),
      o = r(6)('iterator');
    t.exports = function (t) {
      if (null != t) return t[o] || t['@@iterator'] || i[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(110),
      i = r(33),
      o = r(6)('toStringTag'),
      a =
        'Arguments' ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = n
      ? i
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), o))
            ? r
            : a
            ? i(e)
            : 'Object' == (n = i(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : n;
        };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(6),
      o = r(68),
      a = i('species');
    t.exports = function (t) {
      return (
        o >= 51 ||
        !n(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n,
      i,
      o = r(2),
      a = r(78),
      s = o.process,
      l = s && s.versions,
      u = l && l.v8;
    u
      ? (i = (n = u.split('.'))[0] + n[1])
      : a &&
        (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
        (n = a.match(/Chrome\/(\d+)/)) &&
        (i = n[1]),
      (t.exports = i && +i);
  },
  function (t, e, r) {
    var n = r(1);
    t.exports = !n(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(10),
      o = r(61);
    n(
      {
        target: 'Object',
        stat: !0,
        forced: r(1)(function () {
          o(1);
        }),
      },
      {
        keys: function (t) {
          return o(i(t));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(110),
      i = r(16),
      o = r(241);
    n || i(Object.prototype, 'toString', o, { unsafe: !0 });
  },
  function (t, e, r) {
    var n = r(3),
      i = r(33),
      o = r(6)('match');
    t.exports = function (t) {
      var e;
      return n(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(84);
    n({ target: 'RegExp', proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  function (t, e, r) {
    'use strict';
    var n = r(82).charAt,
      i = r(17),
      o = r(114),
      a = i.set,
      s = i.getterFor('String Iterator');
    o(
      String,
      'String',
      function (t) {
        a(this, { type: 'String Iterator', string: String(t), index: 0 });
      },
      function () {
        var t,
          e = s(this),
          r = e.string,
          i = e.index;
        return i >= r.length
          ? { value: void 0, done: !0 }
          : ((t = n(r, i)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !n.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, r) {
    var n = r(101),
      i = r(56),
      o = n('keys');
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e, r) {
    var n = r(6)('iterator'),
      i = !1;
    try {
      var o = 0,
        a = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            i = !0;
          },
        };
      (a[n] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var o = {};
        (o[n] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(o);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    var n = r(23);
    t.exports = n('navigator', 'userAgent') || '';
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).filter,
      o = r(67),
      a = r(20),
      s = o('filter'),
      l = a('filter');
    n(
      { target: 'Array', proto: !0, forced: !s || !l },
      {
        filter: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(18),
      i = r(10),
      o = r(55),
      a = r(7),
      s = function (t) {
        return function (e, r, s, l) {
          n(r);
          var u = i(e),
            c = o(u),
            f = a(u.length),
            h = t ? f - 1 : 0,
            d = t ? -1 : 1;
          if (s < 2)
            for (;;) {
              if (h in c) {
                (l = c[h]), (h += d);
                break;
              }
              if (((h += d), t ? h < 0 : f <= h))
                throw TypeError('Reduce of empty array with no initial value');
            }
          for (; t ? h >= 0 : f > h; h += d) h in c && (l = r(l, c[h], h, u));
          return l;
        };
      };
    t.exports = { left: s(!1), right: s(!0) };
  },
  function (t, e, r) {
    'use strict';
    var n = r(26),
      i = r(2),
      o = r(1);
    t.exports =
      n ||
      !o(function () {
        var t = Math.random();
        __defineSetter__.call(null, t, function () {}), delete i[t];
      });
  },
  function (t, e, r) {
    var n = r(27),
      i = r(14),
      o = function (t) {
        return function (e, r) {
          var o,
            a,
            s = String(i(e)),
            l = n(r),
            u = s.length;
          return l < 0 || l >= u
            ? t
              ? ''
              : void 0
            : (o = s.charCodeAt(l)) < 55296 ||
              o > 56319 ||
              l + 1 === u ||
              (a = s.charCodeAt(l + 1)) < 56320 ||
              a > 57343
            ? t
              ? s.charAt(l)
              : o
            : t
            ? s.slice(l, l + 2)
            : a - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  function (t, e, r) {
    'use strict';
    r(73);
    var n = r(16),
      i = r(1),
      o = r(6),
      a = r(84),
      s = r(15),
      l = o('species'),
      u = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: '7' }), t;
          }),
          '7' !== ''.replace(t, '$<a>')
        );
      }),
      c = '$0' === 'a'.replace(/./, '$0'),
      f = o('replace'),
      h = !!/./[f] && '' === /./[f]('a', '$0'),
      d = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var r = 'ab'.split(t);
        return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
      });
    t.exports = function (t, e, r, f) {
      var p = o(t),
        v = !i(function () {
          var e = {};
          return (
            (e[p] = function () {
              return 7;
            }),
            7 != ''[t](e)
          );
        }),
        g =
          v &&
          !i(function () {
            var e = !1,
              r = /a/;
            return (
              'split' === t &&
                (((r = {}).constructor = {}),
                (r.constructor[l] = function () {
                  return r;
                }),
                (r.flags = ''),
                (r[p] = /./[p])),
              (r.exec = function () {
                return (e = !0), null;
              }),
              r[p](''),
              !e
            );
          });
      if (
        !v ||
        !g ||
        ('replace' === t && (!u || !c || h)) ||
        ('split' === t && !d)
      ) {
        var m = /./[p],
          y = r(
            p,
            ''[t],
            function (t, e, r, n, i) {
              return e.exec === a
                ? v && !i
                  ? { done: !0, value: m.call(e, r, n) }
                  : { done: !0, value: t.call(r, e, n) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: c,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h,
            }
          ),
          b = y[0],
          w = y[1];
        n(String.prototype, t, b),
          n(
            RegExp.prototype,
            p,
            2 == e
              ? function (t, e) {
                  return w.call(t, this, e);
                }
              : function (t) {
                  return w.call(t, this);
                }
          );
      }
      f && s(RegExp.prototype[p], 'sham', !0);
    };
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      o = r(52),
      a = r(85),
      s = RegExp.prototype.exec,
      l = String.prototype.replace,
      u = s,
      c =
        ((n = /a/),
        (i = /b*/g),
        s.call(n, 'a'),
        s.call(i, 'a'),
        0 !== n.lastIndex || 0 !== i.lastIndex),
      f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
      h = void 0 !== /()??/.exec('')[1];
    (c || h || f) &&
      (u = function (t) {
        var e,
          r,
          n,
          i,
          a = this,
          u = f && a.sticky,
          d = o.call(a),
          p = a.source,
          v = 0,
          g = t;
        return (
          u &&
            (-1 === (d = d.replace('y', '')).indexOf('g') && (d += 'g'),
            (g = String(t).slice(a.lastIndex)),
            a.lastIndex > 0 &&
              (!a.multiline || (a.multiline && '\n' !== t[a.lastIndex - 1])) &&
              ((p = '(?: ' + p + ')'), (g = ' ' + g), v++),
            (r = new RegExp('^(?:' + p + ')', d))),
          h && (r = new RegExp('^' + p + '$(?!\\s)', d)),
          c && (e = a.lastIndex),
          (n = s.call(u ? r : a, g)),
          u
            ? n
              ? ((n.input = n.input.slice(v)),
                (n[0] = n[0].slice(v)),
                (n.index = a.lastIndex),
                (a.lastIndex += n[0].length))
              : (a.lastIndex = 0)
            : c && n && (a.lastIndex = a.global ? n.index + n[0].length : e),
          h &&
            n &&
            n.length > 1 &&
            l.call(n[0], r, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0);
            }),
          n
        );
      }),
      (t.exports = u);
  },
  function (t, e, r) {
    'use strict';
    var n = r(1);
    function i(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = n(function () {
      var t = i('a', 'y');
      return (t.lastIndex = 2), null != t.exec('abcd');
    })),
      (e.BROKEN_CARET = n(function () {
        var t = i('^r', 'gy');
        return (t.lastIndex = 2), null != t.exec('str');
      }));
  },
  function (t, e, r) {
    'use strict';
    var n = r(82).charAt;
    t.exports = function (t, e, r) {
      return e + (r ? n(t, e).length : 1);
    };
  },
  function (t, e, r) {
    var n = r(33),
      i = r(84);
    t.exports = function (t, e) {
      var r = t.exec;
      if ('function' == typeof r) {
        var o = r.call(t, e);
        if ('object' != typeof o)
          throw TypeError(
            'RegExp exec method returned something other than an Object or null'
          );
        return o;
      }
      if ('RegExp' !== n(t))
        throw TypeError('RegExp#exec called on incompatible receiver');
      return i.call(t, e);
    };
  },
  function (t, e) {
    t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
  },
  function (t, e, r) {
    var n = r(3),
      i = r(40);
    t.exports = function (t, e, r) {
      var o, a;
      return (
        i &&
          'function' == typeof (o = e.constructor) &&
          o !== r &&
          n((a = o.prototype)) &&
          a !== r.prototype &&
          i(t, a),
        t
      );
    };
  },
  function (t, e) {
    var r = Math.expm1,
      n = Math.exp;
    t.exports =
      !r ||
      r(10) > 22025.465794806718 ||
      r(10) < 22025.465794806718 ||
      -2e-17 != r(-2e-17)
        ? function (t) {
            return 0 == (t = +t)
              ? t
              : t > -1e-6 && t < 1e-6
              ? t + (t * t) / 2
              : n(t) - 1;
          }
        : r;
  },
  function (t, e, r) {
    'use strict';
    var n = r(18),
      i = function (t) {
        var e, r;
        (this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r)
            throw TypeError('Bad Promise constructor');
          (e = t), (r = n);
        })),
          (this.resolve = n(e)),
          (this.reject = n(r));
      };
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(2),
      o = r(60),
      a = r(16),
      s = r(48),
      l = r(41),
      u = r(43),
      c = r(3),
      f = r(1),
      h = r(77),
      d = r(30),
      p = r(89);
    t.exports = function (t, e, r) {
      var v = -1 !== t.indexOf('Map'),
        g = -1 !== t.indexOf('Weak'),
        m = v ? 'set' : 'add',
        y = i[t],
        b = y && y.prototype,
        w = y,
        x = {},
        S = function (t) {
          var e = b[t];
          a(
            b,
            t,
            'add' == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : 'delete' == t
              ? function (t) {
                  return !(g && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : 'get' == t
              ? function (t) {
                  return g && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : 'has' == t
              ? function (t) {
                  return !(g && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function (t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        o(
          t,
          'function' != typeof y ||
            !(
              g ||
              (b.forEach &&
                !f(function () {
                  new y().entries().next();
                }))
            )
        )
      )
        (w = r.getConstructor(e, t, v, m)), (s.REQUIRED = !0);
      else if (o(t, !0)) {
        var C = new w(),
          k = C[m](g ? {} : -0, 1) != C,
          T = f(function () {
            C.has(1);
          }),
          A = h(function (t) {
            new y(t);
          }),
          L =
            !g &&
            f(function () {
              for (var t = new y(), e = 5; e--; ) t[m](e, e);
              return !t.has(-0);
            });
        A ||
          (((w = e(function (e, r) {
            u(e, w, t);
            var n = p(new y(), e, w);
            return null != r && l(r, n[m], { that: n, AS_ENTRIES: v }), n;
          })).prototype = b),
          (b.constructor = w)),
          (T || L) && (S('delete'), S('has'), v && S('get')),
          (L || k) && S(m),
          g && b.clear && delete b.clear;
      }
      return (
        (x[t] = w),
        n({ global: !0, forced: w != y }, x),
        d(w, t),
        g || r.setStrong(w, t, v),
        w
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(2),
      i = r(5),
      o = r(127),
      a = r(15),
      s = r(54),
      l = r(1),
      u = r(43),
      c = r(27),
      f = r(7),
      h = r(176),
      d = r(329),
      p = r(28),
      v = r(40),
      g = r(44).f,
      m = r(9).f,
      y = r(111),
      b = r(30),
      w = r(17),
      x = w.get,
      S = w.set,
      C = n.ArrayBuffer,
      k = C,
      T = n.DataView,
      A = T && T.prototype,
      L = Object.prototype,
      O = n.RangeError,
      M = d.pack,
      E = d.unpack,
      _ = function (t) {
        return [255 & t];
      },
      N = function (t) {
        return [255 & t, (t >> 8) & 255];
      },
      I = function (t) {
        return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
      },
      j = function (t) {
        return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
      },
      P = function (t) {
        return M(t, 23, 4);
      },
      R = function (t) {
        return M(t, 52, 8);
      },
      D = function (t, e) {
        m(t.prototype, e, {
          get: function () {
            return x(this)[e];
          },
        });
      },
      F = function (t, e, r, n) {
        var i = h(r),
          o = x(t);
        if (i + e > o.byteLength) throw O('Wrong index');
        var a = x(o.buffer).bytes,
          s = i + o.byteOffset,
          l = a.slice(s, s + e);
        return n ? l : l.reverse();
      },
      W = function (t, e, r, n, i, o) {
        var a = h(r),
          s = x(t);
        if (a + e > s.byteLength) throw O('Wrong index');
        for (
          var l = x(s.buffer).bytes, u = a + s.byteOffset, c = n(+i), f = 0;
          f < e;
          f++
        )
          l[u + f] = c[o ? f : e - f - 1];
      };
    if (o) {
      if (
        !l(function () {
          C(1);
        }) ||
        !l(function () {
          new C(-1);
        }) ||
        l(function () {
          return new C(), new C(1.5), new C(NaN), 'ArrayBuffer' != C.name;
        })
      ) {
        for (
          var z,
            B = ((k = function (t) {
              return u(this, k), new C(h(t));
            }).prototype = C.prototype),
            H = g(C),
            U = 0;
          H.length > U;

        )
          (z = H[U++]) in k || a(k, z, C[z]);
        B.constructor = k;
      }
      v && p(A) !== L && v(A, L);
      var V = new T(new k(2)),
        G = A.setInt8;
      V.setInt8(0, 2147483648),
        V.setInt8(1, 2147483649),
        (!V.getInt8(0) && V.getInt8(1)) ||
          s(
            A,
            {
              setInt8: function (t, e) {
                G.call(this, t, (e << 24) >> 24);
              },
              setUint8: function (t, e) {
                G.call(this, t, (e << 24) >> 24);
              },
            },
            { unsafe: !0 }
          );
    } else
      (k = function (t) {
        u(this, k, 'ArrayBuffer');
        var e = h(t);
        S(this, { bytes: y.call(new Array(e), 0), byteLength: e }),
          i || (this.byteLength = e);
      }),
        (T = function (t, e, r) {
          u(this, T, 'DataView'), u(t, k, 'DataView');
          var n = x(t).byteLength,
            o = c(e);
          if (o < 0 || o > n) throw O('Wrong offset');
          if (o + (r = void 0 === r ? n - o : f(r)) > n)
            throw O('Wrong length');
          S(this, { buffer: t, byteLength: r, byteOffset: o }),
            i ||
              ((this.buffer = t), (this.byteLength = r), (this.byteOffset = o));
        }),
        i &&
          (D(k, 'byteLength'),
          D(T, 'buffer'),
          D(T, 'byteLength'),
          D(T, 'byteOffset')),
        s(T.prototype, {
          getInt8: function (t) {
            return (F(this, 1, t)[0] << 24) >> 24;
          },
          getUint8: function (t) {
            return F(this, 1, t)[0];
          },
          getInt16: function (t) {
            var e = F(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (((e[1] << 8) | e[0]) << 16) >> 16;
          },
          getUint16: function (t) {
            var e = F(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (e[1] << 8) | e[0];
          },
          getInt32: function (t) {
            return j(
              F(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          getUint32: function (t) {
            return (
              j(F(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>>
              0
            );
          },
          getFloat32: function (t) {
            return E(
              F(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
              23
            );
          },
          getFloat64: function (t) {
            return E(
              F(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
              52
            );
          },
          setInt8: function (t, e) {
            W(this, 1, t, _, e);
          },
          setUint8: function (t, e) {
            W(this, 1, t, _, e);
          },
          setInt16: function (t, e) {
            W(this, 2, t, N, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint16: function (t, e) {
            W(this, 2, t, N, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setInt32: function (t, e) {
            W(this, 4, t, I, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint32: function (t, e) {
            W(this, 4, t, I, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat32: function (t, e) {
            W(this, 4, t, P, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat64: function (t, e) {
            W(this, 8, t, R, e, arguments.length > 2 ? arguments[2] : void 0);
          },
        });
    b(k, 'ArrayBuffer'),
      b(T, 'DataView'),
      (t.exports = { ArrayBuffer: k, DataView: T });
  },
  function (t, e, r) {
    var n = r(2),
      i = r(179),
      o = r(47),
      a = r(15),
      s = r(6),
      l = s('iterator'),
      u = s('toStringTag'),
      c = o.values;
    for (var f in i) {
      var h = n[f],
        d = h && h.prototype;
      if (d) {
        if (d[l] !== c)
          try {
            a(d, l, c);
          } catch (t) {
            d[l] = c;
          }
        if ((d[u] || a(d, u, f), i[f]))
          for (var p in o)
            if (d[p] !== o[p])
              try {
                a(d, p, o[p]);
              } catch (t) {
                d[p] = o[p];
              }
      }
    }
  },
  function (t, e, r) {
    'use strict';
    (function (t) {
      var r = 'object' == typeof t && t && t.Object === Object && t;
      e.a = r;
    }.call(this, r(133)));
  },
  function (t, e, r) {
    'use strict';
    (function (t) {
      var n = r(21),
        i = r(182),
        o =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        a = o && 'object' == typeof t && t && !t.nodeType && t,
        s = a && a.exports === o ? n.a.Buffer : void 0,
        l = (s ? s.isBuffer : void 0) || i.a;
      e.a = l;
    }.call(this, r(130)(t)));
  },
  function (t, e, r) {
    var n = r(2),
      i = r(3),
      o = n.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(15);
    t.exports = function (t, e) {
      try {
        i(n, t, e);
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var n = r(100),
      i = Function.toString;
    'function' != typeof n.inspectSource &&
      (n.inspectSource = function (t) {
        return i.call(t);
      }),
      (t.exports = n.inspectSource);
  },
  function (t, e, r) {
    var n = r(2),
      i = r(98),
      o = n['__core-js_shared__'] || i('__core-js_shared__', {});
    t.exports = o;
  },
  function (t, e, r) {
    var n = r(26),
      i = r(100);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.8.1',
      mode: n ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, e, r) {
    var n = r(23),
      i = r(44),
      o = r(104),
      a = r(4);
    t.exports =
      n('Reflect', 'ownKeys') ||
      function (t) {
        var e = i.f(a(t)),
          r = o.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var n = r(1);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        return !String(Symbol());
      });
  },
  function (t, e, r) {
    var n = r(5),
      i = r(9),
      o = r(4),
      a = r(61);
    t.exports = n
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var r, n = a(e), s = n.length, l = 0; s > l; )
            i.f(t, (r = n[l++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    r(19)('iterator');
  },
  function (t, e, r) {
    var n = r(1);
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var n = r(6),
      i = r(64),
      o = n('iterator'),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || a[o] === t);
    };
  },
  function (t, e, r) {
    var n = {};
    (n[r(6)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(n));
  },
  function (t, e, r) {
    'use strict';
    var n = r(10),
      i = r(38),
      o = r(7);
    t.exports = function (t) {
      for (
        var e = n(this),
          r = o(e.length),
          a = arguments.length,
          s = i(a > 1 ? arguments[1] : void 0, r),
          l = a > 2 ? arguments[2] : void 0,
          u = void 0 === l ? r : i(l, r);
        u > s;

      )
        e[s++] = t;
      return e;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(149);
    n({ target: 'Array', proto: !0, forced: [].forEach != i }, { forEach: i });
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).map,
      o = r(67),
      a = r(20),
      s = o('map'),
      l = a('map');
    n(
      { target: 'Array', proto: !0, forced: !s || !l },
      {
        map: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(115),
      o = r(28),
      a = r(40),
      s = r(30),
      l = r(15),
      u = r(16),
      c = r(6),
      f = r(26),
      h = r(64),
      d = r(153),
      p = d.IteratorPrototype,
      v = d.BUGGY_SAFARI_ITERATORS,
      g = c('iterator'),
      m = function () {
        return this;
      };
    t.exports = function (t, e, r, c, d, y, b) {
      i(r, e, c);
      var w,
        x,
        S,
        C = function (t) {
          if (t === d && O) return O;
          if (!v && t in A) return A[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        k = e + ' Iterator',
        T = !1,
        A = t.prototype,
        L = A[g] || A['@@iterator'] || (d && A[d]),
        O = (!v && L) || C(d),
        M = ('Array' == e && A.entries) || L;
      if (
        (M &&
          ((w = o(M.call(new t()))),
          p !== Object.prototype &&
            w.next &&
            (f ||
              o(w) === p ||
              (a ? a(w, p) : 'function' != typeof w[g] && l(w, g, m)),
            s(w, k, !0, !0),
            f && (h[k] = m))),
        'values' == d &&
          L &&
          'values' !== L.name &&
          ((T = !0),
          (O = function () {
            return L.call(this);
          })),
        (f && !b) || A[g] === O || l(A, g, O),
        (h[e] = O),
        d)
      )
        if (
          ((x = {
            values: C('values'),
            keys: y ? O : C('keys'),
            entries: C('entries'),
          }),
          b)
        )
          for (S in x) (v || T || !(S in A)) && u(A, S, x[S]);
        else n({ target: e, proto: !0, forced: v || T }, x);
      return x;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(153).IteratorPrototype,
      i = r(31),
      o = r(32),
      a = r(30),
      s = r(64),
      l = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var u = e + ' Iterator';
      return (
        (t.prototype = i(n, { next: o(1, r) })), a(t, u, !1, !0), (s[u] = l), t
      );
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(22),
      a = r(13).f,
      s = r(5),
      l = i(function () {
        a(1);
      });
    n(
      { target: 'Object', stat: !0, forced: !s || l, sham: !s },
      {
        getOwnPropertyDescriptor: function (t, e) {
          return a(o(t), e);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      o = r(102),
      a = r(22),
      s = r(13),
      l = r(46);
    n(
      { target: 'Object', stat: !0, sham: !i },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, r, n = a(t), i = s.f, u = o(n), c = {}, f = 0;
            u.length > f;

          )
            void 0 !== (r = i(n, (e = u[f++]))) && l(c, e, r);
          return c;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(72);
    t.exports = function (t) {
      if (n(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(6)('match');
    t.exports = function (t) {
      var e = /./;
      try {
        '/./'[t](e);
      } catch (r) {
        try {
          return (e[n] = !1), '/./'[t](e);
        } catch (t) {}
      }
      return !1;
    };
  },
  function (t, e, r) {
    var n = r(7),
      i = r(121),
      o = r(14),
      a = Math.ceil,
      s = function (t) {
        return function (e, r, s) {
          var l,
            u,
            c = String(o(e)),
            f = c.length,
            h = void 0 === s ? ' ' : String(s),
            d = n(r);
          return d <= f || '' == h
            ? c
            : ((l = d - f),
              (u = i.call(h, a(l / h.length))).length > l &&
                (u = u.slice(0, l)),
              t ? c + u : u + c);
        };
      };
    t.exports = { start: s(!1), end: s(!0) };
  },
  function (t, e, r) {
    'use strict';
    var n = r(27),
      i = r(14);
    t.exports =
      ''.repeat ||
      function (t) {
        var e = String(i(this)),
          r = '',
          o = n(t);
        if (o < 0 || o == 1 / 0)
          throw RangeError('Wrong number of repetitions');
        for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (r += e);
        return r;
      };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(88);
    t.exports = function (t) {
      return n(function () {
        return !!i[t]() || '​᠎' != '​᠎'[t]() || i[t].name !== t;
      });
    };
  },
  function (t, e) {
    t.exports =
      Math.sign ||
      function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
  },
  function (t, e, r) {
    var n,
      i,
      o,
      a = r(2),
      s = r(1),
      l = r(39),
      u = r(139),
      c = r(97),
      f = r(171),
      h = r(50),
      d = a.location,
      p = a.setImmediate,
      v = a.clearImmediate,
      g = a.process,
      m = a.MessageChannel,
      y = a.Dispatch,
      b = 0,
      w = {},
      x = function (t) {
        if (w.hasOwnProperty(t)) {
          var e = w[t];
          delete w[t], e();
        }
      },
      S = function (t) {
        return function () {
          x(t);
        };
      },
      C = function (t) {
        x(t.data);
      },
      k = function (t) {
        a.postMessage(t + '', d.protocol + '//' + d.host);
      };
    (p && v) ||
      ((p = function (t) {
        for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
        return (
          (w[++b] = function () {
            ('function' == typeof t ? t : Function(t)).apply(void 0, e);
          }),
          n(b),
          b
        );
      }),
      (v = function (t) {
        delete w[t];
      }),
      h
        ? (n = function (t) {
            g.nextTick(S(t));
          })
        : y && y.now
        ? (n = function (t) {
            y.now(S(t));
          })
        : m && !f
        ? ((o = (i = new m()).port2),
          (i.port1.onmessage = C),
          (n = l(o.postMessage, o, 1)))
        : a.addEventListener &&
          'function' == typeof postMessage &&
          !a.importScripts &&
          d &&
          'file:' !== d.protocol &&
          !s(k)
        ? ((n = k), a.addEventListener('message', C, !1))
        : (n =
            'onreadystatechange' in c('script')
              ? function (t) {
                  u.appendChild(c('script')).onreadystatechange = function () {
                    u.removeChild(this), x(t);
                  };
                }
              : function (t) {
                  setTimeout(S(t), 0);
                })),
      (t.exports = { set: p, clear: v });
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(92),
      i = r(174);
    t.exports = n(
      'Set',
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      i
    );
  },
  function (t, e) {
    t.exports =
      'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView;
  },
  function (t, e, r) {
    var n = r(2),
      i = r(1),
      o = r(77),
      a = r(8).NATIVE_ARRAY_BUFFER_VIEWS,
      s = n.ArrayBuffer,
      l = n.Int8Array;
    t.exports =
      !a ||
      !i(function () {
        l(1);
      }) ||
      !i(function () {
        new l(-1);
      }) ||
      !o(function (t) {
        new l(), new l(null), new l(1.5), new l(t);
      }, !0) ||
      i(function () {
        return 1 !== new l(new s(2), 1, void 0).length;
      });
  },
  function (t, e, r) {
    var n = r(2),
      i = r(179),
      o = r(149),
      a = r(15);
    for (var s in i) {
      var l = n[s],
        u = l && l.prototype;
      if (u && u.forEach !== o)
        try {
          a(u, 'forEach', o);
        } catch (t) {
          u.forEach = o;
        }
    }
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, r) {
    t.exports = (function () {
      'use strict';
      var t = navigator.userAgent,
        e = navigator.platform,
        r = /gecko\/\d/i.test(t),
        n = /MSIE \d/.test(t),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t),
        o = /Edge\/(\d+)/.exec(t),
        a = n || i || o,
        s = a && (n ? document.documentMode || 6 : +(o || i)[1]),
        l = !o && /WebKit\//.test(t),
        u = l && /Qt\/\d+\.\d+/.test(t),
        c = !o && /Chrome\//.test(t),
        f = /Opera\//.test(t),
        h = /Apple Computer/.test(navigator.vendor),
        d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t),
        p = /PhantomJS/.test(t),
        v = !o && /AppleWebKit/.test(t) && /Mobile\/\w+/.test(t),
        g = /Android/.test(t),
        m =
          v || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t),
        y = v || /Mac/.test(e),
        b = /\bCrOS\b/.test(t),
        w = /win/i.test(e),
        x = f && t.match(/Version\/(\d*\.\d*)/);
      x && (x = Number(x[1])), x && x >= 15 && ((f = !1), (l = !0));
      var S = y && (u || (f && (null == x || x < 12.11))),
        C = r || (a && s >= 9);
      function k(t) {
        return new RegExp('(^|\\s)' + t + '(?:$|\\s)\\s*');
      }
      var T,
        A = function (t, e) {
          var r = t.className,
            n = k(e).exec(r);
          if (n) {
            var i = r.slice(n.index + n[0].length);
            t.className = r.slice(0, n.index) + (i ? n[1] + i : '');
          }
        };
      function L(t) {
        for (var e = t.childNodes.length; e > 0; --e)
          t.removeChild(t.firstChild);
        return t;
      }
      function O(t, e) {
        return L(t).appendChild(e);
      }
      function M(t, e, r, n) {
        var i = document.createElement(t);
        if (
          (r && (i.className = r),
          n && (i.style.cssText = n),
          'string' == typeof e)
        )
          i.appendChild(document.createTextNode(e));
        else if (e) for (var o = 0; o < e.length; ++o) i.appendChild(e[o]);
        return i;
      }
      function E(t, e, r, n) {
        var i = M(t, e, r, n);
        return i.setAttribute('role', 'presentation'), i;
      }
      function _(t, e) {
        if ((3 == e.nodeType && (e = e.parentNode), t.contains))
          return t.contains(e);
        do {
          if ((11 == e.nodeType && (e = e.host), e == t)) return !0;
        } while ((e = e.parentNode));
      }
      function N() {
        var t;
        try {
          t = document.activeElement;
        } catch (e) {
          t = document.body || null;
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
          t = t.shadowRoot.activeElement;
        return t;
      }
      function I(t, e) {
        var r = t.className;
        k(e).test(r) || (t.className += (r ? ' ' : '') + e);
      }
      function j(t, e) {
        for (var r = t.split(' '), n = 0; n < r.length; n++)
          r[n] && !k(r[n]).test(e) && (e += ' ' + r[n]);
        return e;
      }
      T = document.createRange
        ? function (t, e, r, n) {
            var i = document.createRange();
            return i.setEnd(n || t, r), i.setStart(t, e), i;
          }
        : function (t, e, r) {
            var n = document.body.createTextRange();
            try {
              n.moveToElementText(t.parentNode);
            } catch (t) {
              return n;
            }
            return (
              n.collapse(!0),
              n.moveEnd('character', r),
              n.moveStart('character', e),
              n
            );
          };
      var P = function (t) {
        t.select();
      };
      function R(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function () {
          return t.apply(null, e);
        };
      }
      function D(t, e, r) {
        for (var n in (e || (e = {}), t))
          !t.hasOwnProperty(n) ||
            (!1 === r && e.hasOwnProperty(n)) ||
            (e[n] = t[n]);
        return e;
      }
      function F(t, e, r, n, i) {
        null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
        for (var o = n || 0, a = i || 0; ; ) {
          var s = t.indexOf('\t', o);
          if (s < 0 || s >= e) return a + (e - o);
          (a += s - o), (a += r - (a % r)), (o = s + 1);
        }
      }
      v
        ? (P = function (t) {
            (t.selectionStart = 0), (t.selectionEnd = t.value.length);
          })
        : a &&
          (P = function (t) {
            try {
              t.select();
            } catch (t) {}
          });
      var W = function () {
        (this.id = null),
          (this.f = null),
          (this.time = 0),
          (this.handler = R(this.onTimeout, this));
      };
      function z(t, e) {
        for (var r = 0; r < t.length; ++r) if (t[r] == e) return r;
        return -1;
      }
      (W.prototype.onTimeout = function (t) {
        (t.id = 0),
          t.time <= +new Date()
            ? t.f()
            : setTimeout(t.handler, t.time - +new Date());
      }),
        (W.prototype.set = function (t, e) {
          this.f = e;
          var r = +new Date() + t;
          (!this.id || r < this.time) &&
            (clearTimeout(this.id),
            (this.id = setTimeout(this.handler, t)),
            (this.time = r));
        });
      var B = {
          toString: function () {
            return 'CodeMirror.Pass';
          },
        },
        H = { scroll: !1 },
        U = { origin: '*mouse' },
        V = { origin: '+move' };
      function G(t, e, r) {
        for (var n = 0, i = 0; ; ) {
          var o = t.indexOf('\t', n);
          -1 == o && (o = t.length);
          var a = o - n;
          if (o == t.length || i + a >= e) return n + Math.min(a, e - i);
          if (((i += o - n), (n = o + 1), (i += r - (i % r)) >= e)) return n;
        }
      }
      var q = [''];
      function $(t) {
        for (; q.length <= t; ) q.push(Y(q) + ' ');
        return q[t];
      }
      function Y(t) {
        return t[t.length - 1];
      }
      function K(t, e) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = e(t[n], n);
        return r;
      }
      function X() {}
      function J(t, e) {
        var r;
        return (
          Object.create
            ? (r = Object.create(t))
            : ((X.prototype = t), (r = new X())),
          e && D(e, r),
          r
        );
      }
      var Z = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Q(t) {
        return (
          /\w/.test(t) ||
          (t > '' && (t.toUpperCase() != t.toLowerCase() || Z.test(t)))
        );
      }
      function tt(t, e) {
        return e ? !!(e.source.indexOf('\\w') > -1 && Q(t)) || e.test(t) : Q(t);
      }
      function et(t) {
        for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
        return !0;
      }
      var rt = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function nt(t) {
        return t.charCodeAt(0) >= 768 && rt.test(t);
      }
      function it(t, e, r) {
        for (; (r < 0 ? e > 0 : e < t.length) && nt(t.charAt(e)); ) e += r;
        return e;
      }
      function ot(t, e, r) {
        for (var n = e > r ? -1 : 1; ; ) {
          if (e == r) return e;
          var i = (e + r) / 2,
            o = n < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == e) return t(o) ? e : r;
          t(o) ? (r = o) : (e = o + n);
        }
      }
      var at = null;
      function st(t, e, r) {
        var n;
        at = null;
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.from < e && o.to > e) return i;
          o.to == e && (o.from != o.to && 'before' == r ? (n = i) : (at = i)),
            o.from == e &&
              (o.from != o.to && 'before' != r ? (n = i) : (at = i));
        }
        return null != n ? n : at;
      }
      var lt = (function () {
        var t = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          e = /[stwN]/,
          r = /[LRr]/,
          n = /[Lb1n]/,
          i = /[1n]/;
        function o(t, e, r) {
          (this.level = t), (this.from = e), (this.to = r);
        }
        return function (a, s) {
          var l = 'ltr' == s ? 'L' : 'R';
          if (0 == a.length || ('ltr' == s && !t.test(a))) return !1;
          for (var u, c = a.length, f = [], h = 0; h < c; ++h)
            f.push(
              (u = a.charCodeAt(h)) <= 247
                ? 'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN'.charAt(
                    u
                  )
                : 1424 <= u && u <= 1524
                ? 'R'
                : 1536 <= u && u <= 1785
                ? 'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'.charAt(
                    u - 1536
                  )
                : 1774 <= u && u <= 2220
                ? 'r'
                : 8192 <= u && u <= 8203
                ? 'w'
                : 8204 == u
                ? 'b'
                : 'L'
            );
          for (var d = 0, p = l; d < c; ++d) {
            var v = f[d];
            'm' == v ? (f[d] = p) : (p = v);
          }
          for (var g = 0, m = l; g < c; ++g) {
            var y = f[g];
            '1' == y && 'r' == m
              ? (f[g] = 'n')
              : r.test(y) && ((m = y), 'r' == y && (f[g] = 'R'));
          }
          for (var b = 1, w = f[0]; b < c - 1; ++b) {
            var x = f[b];
            '+' == x && '1' == w && '1' == f[b + 1]
              ? (f[b] = '1')
              : ',' != x ||
                w != f[b + 1] ||
                ('1' != w && 'n' != w) ||
                (f[b] = w),
              (w = x);
          }
          for (var S = 0; S < c; ++S) {
            var C = f[S];
            if (',' == C) f[S] = 'N';
            else if ('%' == C) {
              var k = void 0;
              for (k = S + 1; k < c && '%' == f[k]; ++k);
              for (
                var T =
                    (S && '!' == f[S - 1]) || (k < c && '1' == f[k])
                      ? '1'
                      : 'N',
                  A = S;
                A < k;
                ++A
              )
                f[A] = T;
              S = k - 1;
            }
          }
          for (var L = 0, O = l; L < c; ++L) {
            var M = f[L];
            'L' == O && '1' == M ? (f[L] = 'L') : r.test(M) && (O = M);
          }
          for (var E = 0; E < c; ++E)
            if (e.test(f[E])) {
              var _ = void 0;
              for (_ = E + 1; _ < c && e.test(f[_]); ++_);
              for (
                var N = 'L' == (E ? f[E - 1] : l),
                  I = N == ('L' == (_ < c ? f[_] : l)) ? (N ? 'L' : 'R') : l,
                  j = E;
                j < _;
                ++j
              )
                f[j] = I;
              E = _ - 1;
            }
          for (var P, R = [], D = 0; D < c; )
            if (n.test(f[D])) {
              var F = D;
              for (++D; D < c && n.test(f[D]); ++D);
              R.push(new o(0, F, D));
            } else {
              var W = D,
                z = R.length,
                B = 'rtl' == s ? 1 : 0;
              for (++D; D < c && 'L' != f[D]; ++D);
              for (var H = W; H < D; )
                if (i.test(f[H])) {
                  W < H && (R.splice(z, 0, new o(1, W, H)), (z += B));
                  var U = H;
                  for (++H; H < D && i.test(f[H]); ++H);
                  R.splice(z, 0, new o(2, U, H)), (z += B), (W = H);
                } else ++H;
              W < D && R.splice(z, 0, new o(1, W, D));
            }
          return (
            'ltr' == s &&
              (1 == R[0].level &&
                (P = a.match(/^\s+/)) &&
                ((R[0].from = P[0].length),
                R.unshift(new o(0, 0, P[0].length))),
              1 == Y(R).level &&
                (P = a.match(/\s+$/)) &&
                ((Y(R).to -= P[0].length),
                R.push(new o(0, c - P[0].length, c)))),
            'rtl' == s ? R.reverse() : R
          );
        };
      })();
      function ut(t, e) {
        var r = t.order;
        return null == r && (r = t.order = lt(t.text, e)), r;
      }
      var ct = [],
        ft = function (t, e, r) {
          if (t.addEventListener) t.addEventListener(e, r, !1);
          else if (t.attachEvent) t.attachEvent('on' + e, r);
          else {
            var n = t._handlers || (t._handlers = {});
            n[e] = (n[e] || ct).concat(r);
          }
        };
      function ht(t, e) {
        return (t._handlers && t._handlers[e]) || ct;
      }
      function dt(t, e, r) {
        if (t.removeEventListener) t.removeEventListener(e, r, !1);
        else if (t.detachEvent) t.detachEvent('on' + e, r);
        else {
          var n = t._handlers,
            i = n && n[e];
          if (i) {
            var o = z(i, r);
            o > -1 && (n[e] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function pt(t, e) {
        var r = ht(t, e);
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), i = 0;
            i < r.length;
            ++i
          )
            r[i].apply(null, n);
      }
      function vt(t, e, r) {
        return (
          'string' == typeof e &&
            (e = {
              type: e,
              preventDefault: function () {
                this.defaultPrevented = !0;
              },
            }),
          pt(t, r || e.type, t, e),
          xt(e) || e.codemirrorIgnore
        );
      }
      function gt(t) {
        var e = t._handlers && t._handlers.cursorActivity;
        if (e)
          for (
            var r =
                t.curOp.cursorActivityHandlers ||
                (t.curOp.cursorActivityHandlers = []),
              n = 0;
            n < e.length;
            ++n
          )
            -1 == z(r, e[n]) && r.push(e[n]);
      }
      function mt(t, e) {
        return ht(t, e).length > 0;
      }
      function yt(t) {
        (t.prototype.on = function (t, e) {
          ft(this, t, e);
        }),
          (t.prototype.off = function (t, e) {
            dt(this, t, e);
          });
      }
      function bt(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function wt(t) {
        t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
      }
      function xt(t) {
        return null != t.defaultPrevented
          ? t.defaultPrevented
          : 0 == t.returnValue;
      }
      function St(t) {
        bt(t), wt(t);
      }
      function Ct(t) {
        return t.target || t.srcElement;
      }
      function kt(t) {
        var e = t.which;
        return (
          null == e &&
            (1 & t.button
              ? (e = 1)
              : 2 & t.button
              ? (e = 3)
              : 4 & t.button && (e = 2)),
          y && t.ctrlKey && 1 == e && (e = 3),
          e
        );
      }
      var Tt,
        At,
        Lt = (function () {
          if (a && s < 9) return !1;
          var t = M('div');
          return 'draggable' in t || 'dragDrop' in t;
        })();
      function Ot(t) {
        if (null == Tt) {
          var e = M('span', '​');
          O(t, M('span', [e, document.createTextNode('x')])),
            0 != t.firstChild.offsetHeight &&
              (Tt = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(a && s < 8));
        }
        var r = Tt
          ? M('span', '​')
          : M(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            );
        return r.setAttribute('cm-text', ''), r;
      }
      function Mt(t) {
        if (null != At) return At;
        var e = O(t, document.createTextNode('AخA')),
          r = T(e, 0, 1).getBoundingClientRect(),
          n = T(e, 1, 2).getBoundingClientRect();
        return L(t), !(!r || r.left == r.right) && (At = n.right - r.right < 3);
      }
      var Et,
        _t =
          3 != '\n\nb'.split(/\n/).length
            ? function (t) {
                for (var e = 0, r = [], n = t.length; e <= n; ) {
                  var i = t.indexOf('\n', e);
                  -1 == i && (i = t.length);
                  var o = t.slice(e, '\r' == t.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf('\r');
                  -1 != a
                    ? (r.push(o.slice(0, a)), (e += a + 1))
                    : (r.push(o), (e = i + 1));
                }
                return r;
              }
            : function (t) {
                return t.split(/\r\n?|\n/);
              },
        Nt = window.getSelection
          ? function (t) {
              try {
                return t.selectionStart != t.selectionEnd;
              } catch (t) {
                return !1;
              }
            }
          : function (t) {
              var e;
              try {
                e = t.ownerDocument.selection.createRange();
              } catch (t) {}
              return (
                !(!e || e.parentElement() != t) &&
                0 != e.compareEndPoints('StartToEnd', e)
              );
            },
        It =
          'oncopy' in (Et = M('div')) ||
          (Et.setAttribute('oncopy', 'return;'),
          'function' == typeof Et.oncopy),
        jt = null,
        Pt = {},
        Rt = {};
      function Dt(t, e) {
        arguments.length > 2 &&
          (e.dependencies = Array.prototype.slice.call(arguments, 2)),
          (Pt[t] = e);
      }
      function Ft(t) {
        if ('string' == typeof t && Rt.hasOwnProperty(t)) t = Rt[t];
        else if (t && 'string' == typeof t.name && Rt.hasOwnProperty(t.name)) {
          var e = Rt[t.name];
          'string' == typeof e && (e = { name: e }),
            ((t = J(e, t)).name = e.name);
        } else {
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
            return Ft('application/xml');
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
            return Ft('application/json');
        }
        return 'string' == typeof t ? { name: t } : t || { name: 'null' };
      }
      function Wt(t, e) {
        e = Ft(e);
        var r = Pt[e.name];
        if (!r) return Wt(t, 'text/plain');
        var n = r(t, e);
        if (zt.hasOwnProperty(e.name)) {
          var i = zt[e.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]));
        }
        if (
          ((n.name = e.name),
          e.helperType && (n.helperType = e.helperType),
          e.modeProps)
        )
          for (var a in e.modeProps) n[a] = e.modeProps[a];
        return n;
      }
      var zt = {};
      function Bt(t, e) {
        D(e, zt.hasOwnProperty(t) ? zt[t] : (zt[t] = {}));
      }
      function Ht(t, e) {
        if (!0 === e) return e;
        if (t.copyState) return t.copyState(e);
        var r = {};
        for (var n in e) {
          var i = e[n];
          i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
      }
      function Ut(t, e) {
        for (var r; t.innerMode && (r = t.innerMode(e)) && r.mode != t; )
          (e = r.state), (t = r.mode);
        return r || { mode: t, state: e };
      }
      function Vt(t, e, r) {
        return !t.startState || t.startState(e, r);
      }
      var Gt = function (t, e, r) {
        (this.pos = this.start = 0),
          (this.string = t),
          (this.tabSize = e || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = r);
      };
      function qt(t, e) {
        if ((e -= t.first) < 0 || e >= t.size)
          throw new Error(
            'There is no line ' + (e + t.first) + ' in the document.'
          );
        for (var r = t; !r.lines; )
          for (var n = 0; ; ++n) {
            var i = r.children[n],
              o = i.chunkSize();
            if (e < o) {
              r = i;
              break;
            }
            e -= o;
          }
        return r.lines[e];
      }
      function $t(t, e, r) {
        var n = [],
          i = e.line;
        return (
          t.iter(e.line, r.line + 1, function (t) {
            var o = t.text;
            i == r.line && (o = o.slice(0, r.ch)),
              i == e.line && (o = o.slice(e.ch)),
              n.push(o),
              ++i;
          }),
          n
        );
      }
      function Yt(t, e, r) {
        var n = [];
        return (
          t.iter(e, r, function (t) {
            n.push(t.text);
          }),
          n
        );
      }
      function Kt(t, e) {
        var r = e - t.height;
        if (r) for (var n = t; n; n = n.parent) n.height += r;
      }
      function Xt(t) {
        if (null == t.parent) return null;
        for (
          var e = t.parent, r = z(e.lines, t), n = e.parent;
          n;
          e = n, n = n.parent
        )
          for (var i = 0; n.children[i] != e; ++i)
            r += n.children[i].chunkSize();
        return r + e.first;
      }
      function Jt(t, e) {
        var r = t.first;
        t: do {
          for (var n = 0; n < t.children.length; ++n) {
            var i = t.children[n],
              o = i.height;
            if (e < o) {
              t = i;
              continue t;
            }
            (e -= o), (r += i.chunkSize());
          }
          return r;
        } while (!t.lines);
        for (var a = 0; a < t.lines.length; ++a) {
          var s = t.lines[a].height;
          if (e < s) break;
          e -= s;
        }
        return r + a;
      }
      function Zt(t, e) {
        return e >= t.first && e < t.first + t.size;
      }
      function Qt(t, e) {
        return String(t.lineNumberFormatter(e + t.firstLineNumber));
      }
      function te(t, e, r) {
        if ((void 0 === r && (r = null), !(this instanceof te)))
          return new te(t, e, r);
        (this.line = t), (this.ch = e), (this.sticky = r);
      }
      function ee(t, e) {
        return t.line - e.line || t.ch - e.ch;
      }
      function re(t, e) {
        return t.sticky == e.sticky && 0 == ee(t, e);
      }
      function ne(t) {
        return te(t.line, t.ch);
      }
      function ie(t, e) {
        return ee(t, e) < 0 ? e : t;
      }
      function oe(t, e) {
        return ee(t, e) < 0 ? t : e;
      }
      function ae(t, e) {
        return Math.max(t.first, Math.min(e, t.first + t.size - 1));
      }
      function se(t, e) {
        if (e.line < t.first) return te(t.first, 0);
        var r = t.first + t.size - 1;
        return e.line > r
          ? te(r, qt(t, r).text.length)
          : (function (t, e) {
              var r = t.ch;
              return null == r || r > e
                ? te(t.line, e)
                : r < 0
                ? te(t.line, 0)
                : t;
            })(e, qt(t, e.line).text.length);
      }
      function le(t, e) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = se(t, e[n]);
        return r;
      }
      (Gt.prototype.eol = function () {
        return this.pos >= this.string.length;
      }),
        (Gt.prototype.sol = function () {
          return this.pos == this.lineStart;
        }),
        (Gt.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Gt.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Gt.prototype.eat = function (t) {
          var e = this.string.charAt(this.pos);
          if ('string' == typeof t ? e == t : e && (t.test ? t.test(e) : t(e)))
            return ++this.pos, e;
        }),
        (Gt.prototype.eatWhile = function (t) {
          for (var e = this.pos; this.eat(t); );
          return this.pos > e;
        }),
        (Gt.prototype.eatSpace = function () {
          for (
            var t = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > t;
        }),
        (Gt.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }),
        (Gt.prototype.skipTo = function (t) {
          var e = this.string.indexOf(t, this.pos);
          if (e > -1) return (this.pos = e), !0;
        }),
        (Gt.prototype.backUp = function (t) {
          this.pos -= t;
        }),
        (Gt.prototype.column = function () {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = F(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? F(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Gt.prototype.indentation = function () {
          return (
            F(this.string, null, this.tabSize) -
            (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (Gt.prototype.match = function (t, e, r) {
          if ('string' != typeof t) {
            var n = this.string.slice(this.pos).match(t);
            return n && n.index > 0
              ? null
              : (n && !1 !== e && (this.pos += n[0].length), n);
          }
          var i = function (t) {
            return r ? t.toLowerCase() : t;
          };
          if (i(this.string.substr(this.pos, t.length)) == i(t))
            return !1 !== e && (this.pos += t.length), !0;
        }),
        (Gt.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }),
        (Gt.prototype.hideFirstChars = function (t, e) {
          this.lineStart += t;
          try {
            return e();
          } finally {
            this.lineStart -= t;
          }
        }),
        (Gt.prototype.lookAhead = function (t) {
          var e = this.lineOracle;
          return e && e.lookAhead(t);
        }),
        (Gt.prototype.baseToken = function () {
          var t = this.lineOracle;
          return t && t.baseToken(this.pos);
        });
      var ue = function (t, e) {
          (this.state = t), (this.lookAhead = e);
        },
        ce = function (t, e, r, n) {
          (this.state = e),
            (this.doc = t),
            (this.line = r),
            (this.maxLookAhead = n || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      function fe(t, e, r, n) {
        var i = [t.state.modeGen],
          o = {};
        we(
          t,
          e.text,
          t.doc.mode,
          r,
          function (t, e) {
            return i.push(t, e);
          },
          o,
          n
        );
        for (
          var a = r.state,
            s = function (n) {
              r.baseTokens = i;
              var s = t.state.overlays[n],
                l = 1,
                u = 0;
              (r.state = !0),
                we(
                  t,
                  e.text,
                  s.mode,
                  r,
                  function (t, e) {
                    for (var r = l; u < t; ) {
                      var n = i[l];
                      n > t && i.splice(l, 1, t, i[l + 1], n),
                        (l += 2),
                        (u = Math.min(t, n));
                    }
                    if (e)
                      if (s.opaque)
                        i.splice(r, l - r, t, 'overlay ' + e), (l = r + 2);
                      else
                        for (; r < l; r += 2) {
                          var o = i[r + 1];
                          i[r + 1] = (o ? o + ' ' : '') + 'overlay ' + e;
                        }
                  },
                  o
                ),
                (r.state = a),
                (r.baseTokens = null),
                (r.baseTokenPos = 1);
            },
            l = 0;
          l < t.state.overlays.length;
          ++l
        )
          s(l);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function he(t, e, r) {
        if (!e.styles || e.styles[0] != t.state.modeGen) {
          var n = de(t, Xt(e)),
            i =
              e.text.length > t.options.maxHighlightLength &&
              Ht(t.doc.mode, n.state),
            o = fe(t, e, n);
          i && (n.state = i),
            (e.stateAfter = n.save(!i)),
            (e.styles = o.styles),
            o.classes
              ? (e.styleClasses = o.classes)
              : e.styleClasses && (e.styleClasses = null),
            r === t.doc.highlightFrontier &&
              (t.doc.modeFrontier = Math.max(
                t.doc.modeFrontier,
                ++t.doc.highlightFrontier
              ));
        }
        return e.styles;
      }
      function de(t, e, r) {
        var n = t.doc,
          i = t.display;
        if (!n.mode.startState) return new ce(n, !0, e);
        var o = (function (t, e, r) {
            for (
              var n,
                i,
                o = t.doc,
                a = r ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100),
                s = e;
              s > a;
              --s
            ) {
              if (s <= o.first) return o.first;
              var l = qt(o, s - 1),
                u = l.stateAfter;
              if (
                u &&
                (!r ||
                  s + (u instanceof ue ? u.lookAhead : 0) <= o.modeFrontier)
              )
                return s;
              var c = F(l.text, null, t.options.tabSize);
              (null == i || n > c) && ((i = s - 1), (n = c));
            }
            return i;
          })(t, e, r),
          a = o > n.first && qt(n, o - 1).stateAfter,
          s = a ? ce.fromSaved(n, a, o) : new ce(n, Vt(n.mode), o);
        return (
          n.iter(o, e, function (r) {
            pe(t, r.text, s);
            var n = s.line;
            (r.stateAfter =
              n == e - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
                ? s.save()
                : null),
              s.nextLine();
          }),
          r && (n.modeFrontier = s.line),
          s
        );
      }
      function pe(t, e, r, n) {
        var i = t.doc.mode,
          o = new Gt(e, t.options.tabSize, r);
        for (o.start = o.pos = n || 0, '' == e && ve(i, r.state); !o.eol(); )
          ge(i, o, r.state), (o.start = o.pos);
      }
      function ve(t, e) {
        if (t.blankLine) return t.blankLine(e);
        if (t.innerMode) {
          var r = Ut(t, e);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function ge(t, e, r, n) {
        for (var i = 0; i < 10; i++) {
          n && (n[0] = Ut(t, r).mode);
          var o = t.token(e, r);
          if (e.pos > e.start) return o;
        }
        throw new Error('Mode ' + t.name + ' failed to advance stream.');
      }
      (ce.prototype.lookAhead = function (t) {
        var e = this.doc.getLine(this.line + t);
        return null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e;
      }),
        (ce.prototype.baseToken = function (t) {
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= t; )
            this.baseTokenPos += 2;
          var e = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: e && e.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - t,
          };
        }),
        (ce.prototype.nextLine = function () {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ce.fromSaved = function (t, e, r) {
          return e instanceof ue
            ? new ce(t, Ht(t.mode, e.state), r, e.lookAhead)
            : new ce(t, Ht(t.mode, e), r);
        }),
        (ce.prototype.save = function (t) {
          var e = !1 !== t ? Ht(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ue(e, this.maxLookAhead) : e;
        });
      var me = function (t, e, r) {
        (this.start = t.start),
          (this.end = t.pos),
          (this.string = t.current()),
          (this.type = e || null),
          (this.state = r);
      };
      function ye(t, e, r, n) {
        var i,
          o,
          a = t.doc,
          s = a.mode,
          l = qt(a, (e = se(a, e)).line),
          u = de(t, e.line, r),
          c = new Gt(l.text, t.options.tabSize, u);
        for (n && (o = []); (n || c.pos < e.ch) && !c.eol(); )
          (c.start = c.pos),
            (i = ge(s, c, u.state)),
            n && o.push(new me(c, i, Ht(a.mode, u.state)));
        return n ? o : new me(c, i, u.state);
      }
      function be(t, e) {
        if (t)
          for (;;) {
            var r = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!r) break;
            t = t.slice(0, r.index) + t.slice(r.index + r[0].length);
            var n = r[1] ? 'bgClass' : 'textClass';
            null == e[n]
              ? (e[n] = r[2])
              : new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(e[n]) ||
                (e[n] += ' ' + r[2]);
          }
        return t;
      }
      function we(t, e, r, n, i, o, a) {
        var s = r.flattenSpans;
        null == s && (s = t.options.flattenSpans);
        var l,
          u = 0,
          c = null,
          f = new Gt(e, t.options.tabSize, n),
          h = t.options.addModeClass && [null];
        for ('' == e && be(ve(r, n.state), o); !f.eol(); ) {
          if (
            (f.pos > t.options.maxHighlightLength
              ? ((s = !1),
                a && pe(t, e, n, f.pos),
                (f.pos = e.length),
                (l = null))
              : (l = be(ge(r, f, n.state, h), o)),
            h)
          ) {
            var d = h[0].name;
            d && (l = 'm-' + (l ? d + ' ' + l : d));
          }
          if (!s || c != l) {
            for (; u < f.start; ) i((u = Math.min(f.start, u + 5e3)), c);
            c = l;
          }
          f.start = f.pos;
        }
        for (; u < f.pos; ) {
          var p = Math.min(f.pos, u + 5e3);
          i(p, c), (u = p);
        }
      }
      var xe = !1,
        Se = !1;
      function Ce(t, e, r) {
        (this.marker = t), (this.from = e), (this.to = r);
      }
      function ke(t, e) {
        if (t)
          for (var r = 0; r < t.length; ++r) {
            var n = t[r];
            if (n.marker == e) return n;
          }
      }
      function Te(t, e) {
        for (var r, n = 0; n < t.length; ++n)
          t[n] != e && (r || (r = [])).push(t[n]);
        return r;
      }
      function Ae(t, e) {
        if (e.full) return null;
        var r = Zt(t, e.from.line) && qt(t, e.from.line).markedSpans,
          n = Zt(t, e.to.line) && qt(t, e.to.line).markedSpans;
        if (!r && !n) return null;
        var i = e.from.ch,
          o = e.to.ch,
          a = 0 == ee(e.from, e.to),
          s = (function (t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= e : o.from < e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || !o.marker.insertLeft))
                ) {
                  var s =
                    null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                  (n || (n = [])).push(new Ce(a, o.from, s ? null : o.to));
                }
              }
            return n;
          })(r, i, a),
          l = (function (t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= e : o.to > e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || o.marker.insertLeft))
                ) {
                  var s =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= e : o.from < e);
                  (n || (n = [])).push(
                    new Ce(
                      a,
                      s ? null : o.from - e,
                      null == o.to ? null : o.to - e
                    )
                  );
                }
              }
            return n;
          })(n, o, a),
          u = 1 == e.text.length,
          c = Y(e.text).length + (u ? i : 0);
        if (s)
          for (var f = 0; f < s.length; ++f) {
            var h = s[f];
            if (null == h.to) {
              var d = ke(l, h.marker);
              d ? u && (h.to = null == d.to ? null : d.to + c) : (h.to = i);
            }
          }
        if (l)
          for (var p = 0; p < l.length; ++p) {
            var v = l[p];
            null != v.to && (v.to += c),
              null == v.from
                ? ke(s, v.marker) ||
                  ((v.from = c), u && (s || (s = [])).push(v))
                : ((v.from += c), u && (s || (s = [])).push(v));
          }
        s && (s = Le(s)), l && l != s && (l = Le(l));
        var g = [s];
        if (!u) {
          var m,
            y = e.text.length - 2;
          if (y > 0 && s)
            for (var b = 0; b < s.length; ++b)
              null == s[b].to &&
                (m || (m = [])).push(new Ce(s[b].marker, null, null));
          for (var w = 0; w < y; ++w) g.push(m);
          g.push(l);
        }
        return g;
      }
      function Le(t) {
        for (var e = 0; e < t.length; ++e) {
          var r = t[e];
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            t.splice(e--, 1);
        }
        return t.length ? t : null;
      }
      function Oe(t) {
        var e = t.markedSpans;
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.detachLine(t);
          t.markedSpans = null;
        }
      }
      function Me(t, e) {
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.attachLine(t);
          t.markedSpans = e;
        }
      }
      function Ee(t) {
        return t.inclusiveLeft ? -1 : 0;
      }
      function _e(t) {
        return t.inclusiveRight ? 1 : 0;
      }
      function Ne(t, e) {
        var r = t.lines.length - e.lines.length;
        if (0 != r) return r;
        var n = t.find(),
          i = e.find(),
          o = ee(n.from, i.from) || Ee(t) - Ee(e);
        if (o) return -o;
        var a = ee(n.to, i.to) || _e(t) - _e(e);
        return a || e.id - t.id;
      }
      function Ie(t, e) {
        var r,
          n = Se && t.markedSpans;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            (i = n[o]).marker.collapsed &&
              null == (e ? i.from : i.to) &&
              (!r || Ne(r, i.marker) < 0) &&
              (r = i.marker);
        return r;
      }
      function je(t) {
        return Ie(t, !0);
      }
      function Pe(t) {
        return Ie(t, !1);
      }
      function Re(t, e) {
        var r,
          n = Se && t.markedSpans;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var o = n[i];
            o.marker.collapsed &&
              (null == o.from || o.from < e) &&
              (null == o.to || o.to > e) &&
              (!r || Ne(r, o.marker) < 0) &&
              (r = o.marker);
          }
        return r;
      }
      function De(t, e, r, n, i) {
        var o = qt(t, e),
          a = Se && o.markedSpans;
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var l = a[s];
            if (l.marker.collapsed) {
              var u = l.marker.find(0),
                c = ee(u.from, r) || Ee(l.marker) - Ee(i),
                f = ee(u.to, n) || _e(l.marker) - _e(i);
              if (
                !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                ((c <= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? ee(u.to, r) >= 0
                    : ee(u.to, r) > 0)) ||
                  (c >= 0 &&
                    (l.marker.inclusiveRight && i.inclusiveLeft
                      ? ee(u.from, n) <= 0
                      : ee(u.from, n) < 0)))
              )
                return !0;
            }
          }
      }
      function Fe(t) {
        for (var e; (e = je(t)); ) t = e.find(-1, !0).line;
        return t;
      }
      function We(t, e) {
        var r = qt(t, e),
          n = Fe(r);
        return r == n ? e : Xt(n);
      }
      function ze(t, e) {
        if (e > t.lastLine()) return e;
        var r,
          n = qt(t, e);
        if (!Be(t, n)) return e;
        for (; (r = Pe(n)); ) n = r.find(1, !0).line;
        return Xt(n) + 1;
      }
      function Be(t, e) {
        var r = Se && e.markedSpans;
        if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                He(t, e, n)
              )
                return !0;
            }
      }
      function He(t, e, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0);
          return He(t, n.line, ke(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == e.text.length) return !0;
        for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
          if (
            (i = e.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == r.to &&
            (null == i.to || i.to != r.from) &&
            (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            He(t, e, i)
          )
            return !0;
      }
      function Ue(t) {
        for (
          var e = 0, r = (t = Fe(t)).parent, n = 0;
          n < r.lines.length;
          ++n
        ) {
          var i = r.lines[n];
          if (i == t) break;
          e += i.height;
        }
        for (var o = r.parent; o; o = (r = o).parent)
          for (var a = 0; a < o.children.length; ++a) {
            var s = o.children[a];
            if (s == r) break;
            e += s.height;
          }
        return e;
      }
      function Ve(t) {
        if (0 == t.height) return 0;
        for (var e, r = t.text.length, n = t; (e = je(n)); ) {
          var i = e.find(0, !0);
          (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = t; (e = Pe(n)); ) {
          var o = e.find(0, !0);
          (r -= n.text.length - o.from.ch),
            (r += (n = o.to.line).text.length - o.to.ch);
        }
        return r;
      }
      function Ge(t) {
        var e = t.display,
          r = t.doc;
        (e.maxLine = qt(r, r.first)),
          (e.maxLineLength = Ve(e.maxLine)),
          (e.maxLineChanged = !0),
          r.iter(function (t) {
            var r = Ve(t);
            r > e.maxLineLength && ((e.maxLineLength = r), (e.maxLine = t));
          });
      }
      var qe = function (t, e, r) {
        (this.text = t), Me(this, e), (this.height = r ? r(this) : 1);
      };
      function $e(t) {
        (t.parent = null), Oe(t);
      }
      (qe.prototype.lineNo = function () {
        return Xt(this);
      }),
        yt(qe);
      var Ye = {},
        Ke = {};
      function Xe(t, e) {
        if (!t || /^\s*$/.test(t)) return null;
        var r = e.addModeClass ? Ke : Ye;
        return r[t] || (r[t] = t.replace(/\S+/g, 'cm-$&'));
      }
      function Je(t, e) {
        var r = E('span', null, null, l ? 'padding-right: .1px' : null),
          n = {
            pre: E('pre', [r], 'CodeMirror-line'),
            content: r,
            col: 0,
            pos: 0,
            cm: t,
            trailingSpace: !1,
            splitSpaces: t.getOption('lineWrapping'),
          };
        e.measure = {};
        for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
          var o = i ? e.rest[i - 1] : e.line,
            a = void 0;
          (n.pos = 0),
            (n.addToken = Qe),
            Mt(t.display.measure) &&
              (a = ut(o, t.doc.direction)) &&
              (n.addToken = tr(n.addToken, a)),
            (n.map = []),
            rr(o, n, he(t, o, e != t.display.externalMeasured && Xt(o))),
            o.styleClasses &&
              (o.styleClasses.bgClass &&
                (n.bgClass = j(o.styleClasses.bgClass, n.bgClass || '')),
              o.styleClasses.textClass &&
                (n.textClass = j(o.styleClasses.textClass, n.textClass || ''))),
            0 == n.map.length &&
              n.map.push(0, 0, n.content.appendChild(Ot(t.display.measure))),
            0 == i
              ? ((e.measure.map = n.map), (e.measure.cache = {}))
              : ((e.measure.maps || (e.measure.maps = [])).push(n.map),
                (e.measure.caches || (e.measure.caches = [])).push({}));
        }
        if (l) {
          var s = n.content.lastChild;
          (/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector('.cm-tab'))) &&
            (n.content.className = 'cm-tab-wrap-hack');
        }
        return (
          pt(t, 'renderLine', t, e.line, n.pre),
          n.pre.className &&
            (n.textClass = j(n.pre.className, n.textClass || '')),
          n
        );
      }
      function Ze(t) {
        var e = M('span', '•', 'cm-invalidchar');
        return (
          (e.title = '\\u' + t.charCodeAt(0).toString(16)),
          e.setAttribute('aria-label', e.title),
          e
        );
      }
      function Qe(t, e, r, n, i, o, l) {
        if (e) {
          var u,
            c = t.splitSpaces
              ? (function (t, e) {
                  if (t.length > 1 && !/  /.test(t)) return t;
                  for (var r = e, n = '', i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    ' ' != o ||
                      !r ||
                      (i != t.length - 1 && 32 != t.charCodeAt(i + 1)) ||
                      (o = ' '),
                      (n += o),
                      (r = ' ' == o);
                  }
                  return n;
                })(e, t.trailingSpace)
              : e,
            f = t.cm.state.specialChars,
            h = !1;
          if (f.test(e)) {
            u = document.createDocumentFragment();
            for (var d = 0; ; ) {
              f.lastIndex = d;
              var p = f.exec(e),
                v = p ? p.index - d : e.length - d;
              if (v) {
                var g = document.createTextNode(c.slice(d, d + v));
                a && s < 9 ? u.appendChild(M('span', [g])) : u.appendChild(g),
                  t.map.push(t.pos, t.pos + v, g),
                  (t.col += v),
                  (t.pos += v);
              }
              if (!p) break;
              d += v + 1;
              var m = void 0;
              if ('\t' == p[0]) {
                var y = t.cm.options.tabSize,
                  b = y - (t.col % y);
                (m = u.appendChild(M('span', $(b), 'cm-tab'))).setAttribute(
                  'role',
                  'presentation'
                ),
                  m.setAttribute('cm-text', '\t'),
                  (t.col += b);
              } else
                '\r' == p[0] || '\n' == p[0]
                  ? ((m = u.appendChild(
                      M('span', '\r' == p[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', p[0]),
                    (t.col += 1))
                  : ((m = t.cm.options.specialCharPlaceholder(
                      p[0]
                    )).setAttribute('cm-text', p[0]),
                    a && s < 9
                      ? u.appendChild(M('span', [m]))
                      : u.appendChild(m),
                    (t.col += 1));
              t.map.push(t.pos, t.pos + 1, m), t.pos++;
            }
          } else
            (t.col += e.length),
              (u = document.createTextNode(c)),
              t.map.push(t.pos, t.pos + e.length, u),
              a && s < 9 && (h = !0),
              (t.pos += e.length);
          if (
            ((t.trailingSpace = 32 == c.charCodeAt(e.length - 1)),
            r || n || i || h || o || l)
          ) {
            var w = r || '';
            n && (w += n), i && (w += i);
            var x = M('span', [u], w, o);
            if (l)
              for (var S in l)
                l.hasOwnProperty(S) &&
                  'style' != S &&
                  'class' != S &&
                  x.setAttribute(S, l[S]);
            return t.content.appendChild(x);
          }
          t.content.appendChild(u);
        }
      }
      function tr(t, e) {
        return function (r, n, i, o, a, s, l) {
          i = i ? i + ' cm-force-border' : 'cm-force-border';
          for (var u = r.pos, c = u + n.length; ; ) {
            for (
              var f = void 0, h = 0;
              h < e.length && !((f = e[h]).to > u && f.from <= u);
              h++
            );
            if (f.to >= c) return t(r, n, i, o, a, s, l);
            t(r, n.slice(0, f.to - u), i, o, null, s, l),
              (o = null),
              (n = n.slice(f.to - u)),
              (u = f.to);
          }
        };
      }
      function er(t, e, r, n) {
        var i = !n && r.widgetNode;
        i && t.map.push(t.pos, t.pos + e, i),
          !n &&
            t.cm.display.input.needsContentAttribute &&
            (i || (i = t.content.appendChild(document.createElement('span'))),
            i.setAttribute('cm-marker', r.id)),
          i && (t.cm.display.input.setUneditable(i), t.content.appendChild(i)),
          (t.pos += e),
          (t.trailingSpace = !1);
      }
      function rr(t, e, r) {
        var n = t.markedSpans,
          i = t.text,
          o = 0;
        if (n)
          for (
            var a, s, l, u, c, f, h, d = i.length, p = 0, v = 1, g = '', m = 0;
            ;

          ) {
            if (m == p) {
              (l = u = c = s = ''), (h = null), (f = null), (m = 1 / 0);
              for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                var x = n[w],
                  S = x.marker;
                if ('bookmark' == S.type && x.from == p && S.widgetNode)
                  y.push(S);
                else if (
                  x.from <= p &&
                  (null == x.to ||
                    x.to > p ||
                    (S.collapsed && x.to == p && x.from == p))
                ) {
                  if (
                    (null != x.to &&
                      x.to != p &&
                      m > x.to &&
                      ((m = x.to), (u = '')),
                    S.className && (l += ' ' + S.className),
                    S.css && (s = (s ? s + ';' : '') + S.css),
                    S.startStyle && x.from == p && (c += ' ' + S.startStyle),
                    S.endStyle &&
                      x.to == m &&
                      (b || (b = [])).push(S.endStyle, x.to),
                    S.title && ((h || (h = {})).title = S.title),
                    S.attributes)
                  )
                    for (var C in S.attributes)
                      (h || (h = {}))[C] = S.attributes[C];
                  S.collapsed && (!f || Ne(f.marker, S) < 0) && (f = x);
                } else x.from > p && m > x.from && (m = x.from);
              }
              if (b)
                for (var k = 0; k < b.length; k += 2)
                  b[k + 1] == m && (u += ' ' + b[k]);
              if (!f || f.from == p)
                for (var T = 0; T < y.length; ++T) er(e, 0, y[T]);
              if (f && (f.from || 0) == p) {
                if (
                  (er(
                    e,
                    (null == f.to ? d + 1 : f.to) - p,
                    f.marker,
                    null == f.from
                  ),
                  null == f.to)
                )
                  return;
                f.to == p && (f = !1);
              }
            }
            if (p >= d) break;
            for (var A = Math.min(d, m); ; ) {
              if (g) {
                var L = p + g.length;
                if (!f) {
                  var O = L > A ? g.slice(0, A - p) : g;
                  e.addToken(
                    e,
                    O,
                    a ? a + l : l,
                    c,
                    p + O.length == m ? u : '',
                    s,
                    h
                  );
                }
                if (L >= A) {
                  (g = g.slice(A - p)), (p = A);
                  break;
                }
                (p = L), (c = '');
              }
              (g = i.slice(o, (o = r[v++]))), (a = Xe(r[v++], e.cm.options));
            }
          }
        else
          for (var M = 1; M < r.length; M += 2)
            e.addToken(e, i.slice(o, (o = r[M])), Xe(r[M + 1], e.cm.options));
      }
      function nr(t, e, r) {
        (this.line = e),
          (this.rest = (function (t) {
            for (var e, r; (e = Pe(t)); )
              (t = e.find(1, !0).line), (r || (r = [])).push(t);
            return r;
          })(e)),
          (this.size = this.rest ? Xt(Y(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = Be(t, e));
      }
      function ir(t, e, r) {
        for (var n, i = [], o = e; o < r; o = n) {
          var a = new nr(t.doc, qt(t.doc, o), o);
          (n = o + a.size), i.push(a);
        }
        return i;
      }
      var or = null,
        ar = null;
      function sr(t, e) {
        var r = ht(t, e);
        if (r.length) {
          var n,
            i = Array.prototype.slice.call(arguments, 2);
          or
            ? (n = or.delayedCallbacks)
            : ar
            ? (n = ar)
            : ((n = ar = []), setTimeout(lr, 0));
          for (
            var o = function (t) {
                n.push(function () {
                  return r[t].apply(null, i);
                });
              },
              a = 0;
            a < r.length;
            ++a
          )
            o(a);
        }
      }
      function lr() {
        var t = ar;
        ar = null;
        for (var e = 0; e < t.length; ++e) t[e]();
      }
      function ur(t, e, r, n) {
        for (var i = 0; i < e.changes.length; i++) {
          var o = e.changes[i];
          'text' == o
            ? hr(t, e)
            : 'gutter' == o
            ? pr(t, e, r, n)
            : 'class' == o
            ? dr(t, e)
            : 'widget' == o && vr(t, e, n);
        }
        e.changes = null;
      }
      function cr(t) {
        return (
          t.node == t.text &&
            ((t.node = M('div', null, null, 'position: relative')),
            t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
            t.node.appendChild(t.text),
            a && s < 8 && (t.node.style.zIndex = 2)),
          t.node
        );
      }
      function fr(t, e) {
        var r = t.display.externalMeasured;
        return r && r.line == e.line
          ? ((t.display.externalMeasured = null),
            (e.measure = r.measure),
            r.built)
          : Je(t, e);
      }
      function hr(t, e) {
        var r = e.text.className,
          n = fr(t, e);
        e.text == e.node && (e.node = n.pre),
          e.text.parentNode.replaceChild(n.pre, e.text),
          (e.text = n.pre),
          n.bgClass != e.bgClass || n.textClass != e.textClass
            ? ((e.bgClass = n.bgClass), (e.textClass = n.textClass), dr(t, e))
            : r && (e.text.className = r);
      }
      function dr(t, e) {
        !(function (t, e) {
          var r = e.bgClass
            ? e.bgClass + ' ' + (e.line.bgClass || '')
            : e.line.bgClass;
          if ((r && (r += ' CodeMirror-linebackground'), e.background))
            r
              ? (e.background.className = r)
              : (e.background.parentNode.removeChild(e.background),
                (e.background = null));
          else if (r) {
            var n = cr(e);
            (e.background = n.insertBefore(M('div', null, r), n.firstChild)),
              t.display.input.setUneditable(e.background);
          }
        })(t, e),
          e.line.wrapClass
            ? (cr(e).className = e.line.wrapClass)
            : e.node != e.text && (e.node.className = '');
        var r = e.textClass
          ? e.textClass + ' ' + (e.line.textClass || '')
          : e.line.textClass;
        e.text.className = r || '';
      }
      function pr(t, e, r, n) {
        if (
          (e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
          e.gutterBackground &&
            (e.node.removeChild(e.gutterBackground),
            (e.gutterBackground = null)),
          e.line.gutterClass)
        ) {
          var i = cr(e);
          (e.gutterBackground = M(
            'div',
            null,
            'CodeMirror-gutter-background ' + e.line.gutterClass,
            'left: ' +
              (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
              'px; width: ' +
              n.gutterTotalWidth +
              'px'
          )),
            t.display.input.setUneditable(e.gutterBackground),
            i.insertBefore(e.gutterBackground, e.text);
        }
        var o = e.line.gutterMarkers;
        if (t.options.lineNumbers || o) {
          var a = cr(e),
            s = (e.gutter = M(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                'px'
            ));
          if (
            (t.display.input.setUneditable(s),
            a.insertBefore(s, e.text),
            e.line.gutterClass && (s.className += ' ' + e.line.gutterClass),
            !t.options.lineNumbers ||
              (o && o['CodeMirror-linenumbers']) ||
              (e.lineNumber = s.appendChild(
                M(
                  'div',
                  Qt(t.options, r),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    n.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    t.display.lineNumInnerWidth +
                    'px'
                )
              )),
            o)
          )
            for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
              var u = t.display.gutterSpecs[l].className,
                c = o.hasOwnProperty(u) && o[u];
              c &&
                s.appendChild(
                  M(
                    'div',
                    [c],
                    'CodeMirror-gutter-elt',
                    'left: ' +
                      n.gutterLeft[u] +
                      'px; width: ' +
                      n.gutterWidth[u] +
                      'px'
                  )
                );
            }
        }
      }
      function vr(t, e, r) {
        e.alignable && (e.alignable = null);
        for (
          var n = k('CodeMirror-linewidget'), i = e.node.firstChild, o = void 0;
          i;
          i = o
        )
          (o = i.nextSibling), n.test(i.className) && e.node.removeChild(i);
        mr(t, e, r);
      }
      function gr(t, e, r, n) {
        var i = fr(t, e);
        return (
          (e.text = e.node = i.pre),
          i.bgClass && (e.bgClass = i.bgClass),
          i.textClass && (e.textClass = i.textClass),
          dr(t, e),
          pr(t, e, r, n),
          mr(t, e, n),
          e.node
        );
      }
      function mr(t, e, r) {
        if ((yr(t, e.line, e, r, !0), e.rest))
          for (var n = 0; n < e.rest.length; n++) yr(t, e.rest[n], e, r, !1);
      }
      function yr(t, e, r, n, i) {
        if (e.widgets)
          for (var o = cr(r), a = 0, s = e.widgets; a < s.length; ++a) {
            var l = s[a],
              u = M(
                'div',
                [l.node],
                'CodeMirror-linewidget' + (l.className ? ' ' + l.className : '')
              );
            l.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
              br(l, u, r, n),
              t.display.input.setUneditable(u),
              i && l.above
                ? o.insertBefore(u, r.gutter || r.text)
                : o.appendChild(u),
              sr(l, 'redraw');
          }
      }
      function br(t, e, r, n) {
        if (t.noHScroll) {
          (r.alignable || (r.alignable = [])).push(e);
          var i = n.wrapperWidth;
          (e.style.left = n.fixedPos + 'px'),
            t.coverGutter ||
              ((i -= n.gutterTotalWidth),
              (e.style.paddingLeft = n.gutterTotalWidth + 'px')),
            (e.style.width = i + 'px');
        }
        t.coverGutter &&
          ((e.style.zIndex = 5),
          (e.style.position = 'relative'),
          t.noHScroll || (e.style.marginLeft = -n.gutterTotalWidth + 'px'));
      }
      function wr(t) {
        if (null != t.height) return t.height;
        var e = t.doc.cm;
        if (!e) return 0;
        if (!_(document.body, t.node)) {
          var r = 'position: relative;';
          t.coverGutter &&
            (r += 'margin-left: -' + e.display.gutters.offsetWidth + 'px;'),
            t.noHScroll &&
              (r += 'width: ' + e.display.wrapper.clientWidth + 'px;'),
            O(e.display.measure, M('div', [t.node], null, r));
        }
        return (t.height = t.node.parentNode.offsetHeight);
      }
      function xr(t, e) {
        for (var r = Ct(e); r != t.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) ||
            (r.parentNode == t.sizer && r != t.mover)
          )
            return !0;
      }
      function Sr(t) {
        return t.lineSpace.offsetTop;
      }
      function Cr(t) {
        return t.mover.offsetHeight - t.lineSpace.offsetHeight;
      }
      function kr(t) {
        if (t.cachedPaddingH) return t.cachedPaddingH;
        var e = O(t.measure, M('pre', 'x', 'CodeMirror-line-like')),
          r = window.getComputedStyle
            ? window.getComputedStyle(e)
            : e.currentStyle,
          n = {
            left: parseInt(r.paddingLeft),
            right: parseInt(r.paddingRight),
          };
        return isNaN(n.left) || isNaN(n.right) || (t.cachedPaddingH = n), n;
      }
      function Tr(t) {
        return 50 - t.display.nativeBarWidth;
      }
      function Ar(t) {
        return t.display.scroller.clientWidth - Tr(t) - t.display.barWidth;
      }
      function Lr(t) {
        return t.display.scroller.clientHeight - Tr(t) - t.display.barHeight;
      }
      function Or(t, e, r) {
        if (t.line == e) return { map: t.measure.map, cache: t.measure.cache };
        for (var n = 0; n < t.rest.length; n++)
          if (t.rest[n] == e)
            return { map: t.measure.maps[n], cache: t.measure.caches[n] };
        for (var i = 0; i < t.rest.length; i++)
          if (Xt(t.rest[i]) > r)
            return {
              map: t.measure.maps[i],
              cache: t.measure.caches[i],
              before: !0,
            };
      }
      function Mr(t, e, r, n) {
        return Nr(t, _r(t, e), r, n);
      }
      function Er(t, e) {
        if (e >= t.display.viewFrom && e < t.display.viewTo)
          return t.display.view[cn(t, e)];
        var r = t.display.externalMeasured;
        return r && e >= r.lineN && e < r.lineN + r.size ? r : void 0;
      }
      function _r(t, e) {
        var r = Xt(e),
          n = Er(t, r);
        n && !n.text
          ? (n = null)
          : n && n.changes && (ur(t, n, r, on(t)), (t.curOp.forceUpdate = !0)),
          n ||
            (n = (function (t, e) {
              var r = Xt((e = Fe(e))),
                n = (t.display.externalMeasured = new nr(t.doc, e, r));
              n.lineN = r;
              var i = (n.built = Je(t, n));
              return (n.text = i.pre), O(t.display.lineMeasure, i.pre), n;
            })(t, e));
        var i = Or(n, e, r);
        return {
          line: e,
          view: n,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1,
        };
      }
      function Nr(t, e, r, n, i) {
        e.before && (r = -1);
        var o,
          l = r + (n || '');
        return (
          e.cache.hasOwnProperty(l)
            ? (o = e.cache[l])
            : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
              e.hasHeights ||
                ((function (t, e, r) {
                  var n = t.options.lineWrapping,
                    i = n && Ar(t);
                  if (!e.measure.heights || (n && e.measure.width != i)) {
                    var o = (e.measure.heights = []);
                    if (n) {
                      e.measure.width = i;
                      for (
                        var a = e.text.firstChild.getClientRects(), s = 0;
                        s < a.length - 1;
                        s++
                      ) {
                        var l = a[s],
                          u = a[s + 1];
                        Math.abs(l.bottom - u.bottom) > 2 &&
                          o.push((l.bottom + u.top) / 2 - r.top);
                      }
                    }
                    o.push(r.bottom - r.top);
                  }
                })(t, e.view, e.rect),
                (e.hasHeights = !0)),
              (o = (function (t, e, r, n) {
                var i,
                  o = Pr(e.map, r, n),
                  l = o.node,
                  u = o.start,
                  c = o.end,
                  f = o.collapse;
                if (3 == l.nodeType) {
                  for (var h = 0; h < 4; h++) {
                    for (; u && nt(e.line.text.charAt(o.coverStart + u)); ) --u;
                    for (
                      ;
                      o.coverStart + c < o.coverEnd &&
                      nt(e.line.text.charAt(o.coverStart + c));

                    )
                      ++c;
                    if (
                      (i =
                        a && s < 9 && 0 == u && c == o.coverEnd - o.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : Rr(T(l, u, c).getClientRects(), n)).left ||
                      i.right ||
                      0 == u
                    )
                      break;
                    (c = u), (u -= 1), (f = 'right');
                  }
                  a &&
                    s < 11 &&
                    (i = (function (t, e) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function (t) {
                          if (null != jt) return jt;
                          var e = O(t, M('span', 'x')),
                            r = e.getBoundingClientRect(),
                            n = T(e, 0, 1).getBoundingClientRect();
                          return (jt = Math.abs(r.left - n.left) > 1);
                        })(t)
                      )
                        return e;
                      var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: e.left * r,
                        right: e.right * r,
                        top: e.top * n,
                        bottom: e.bottom * n,
                      };
                    })(t.display.measure, i));
                } else {
                  var d;
                  u > 0 && (f = n = 'right'),
                    (i =
                      t.options.lineWrapping &&
                      (d = l.getClientRects()).length > 1
                        ? d['right' == n ? d.length - 1 : 0]
                        : l.getBoundingClientRect());
                }
                if (a && s < 9 && !u && (!i || (!i.left && !i.right))) {
                  var p = l.parentNode.getClientRects()[0];
                  i = p
                    ? {
                        left: p.left,
                        right: p.left + nn(t.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : jr;
                }
                for (
                  var v = i.top - e.rect.top,
                    g = i.bottom - e.rect.top,
                    m = (v + g) / 2,
                    y = e.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(m < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  S = {
                    left: ('right' == f ? i.right : i.left) - e.rect.left,
                    right: ('left' == f ? i.left : i.right) - e.rect.left,
                    top: w,
                    bottom: x,
                  };
                return (
                  i.left || i.right || (S.bogus = !0),
                  t.options.singleCursorHeightPerLine ||
                    ((S.rtop = v), (S.rbottom = g)),
                  S
                );
              })(t, e, r, n)).bogus || (e.cache[l] = o)),
          {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
          }
        );
      }
      var Ir,
        jr = { left: 0, right: 0, top: 0, bottom: 0 };
      function Pr(t, e, r) {
        for (var n, i, o, a, s, l, u = 0; u < t.length; u += 3)
          if (
            ((s = t[u]),
            (l = t[u + 1]),
            e < s
              ? ((i = 0), (o = 1), (a = 'left'))
              : e < l
              ? (o = 1 + (i = e - s))
              : (u == t.length - 3 || (e == l && t[u + 3] > e)) &&
                ((i = (o = l - s) - 1), e >= l && (a = 'right')),
            null != i)
          ) {
            if (
              ((n = t[u + 2]),
              s == l && r == (n.insertLeft ? 'left' : 'right') && (a = r),
              'left' == r && 0 == i)
            )
              for (; u && t[u - 2] == t[u - 3] && t[u - 1].insertLeft; )
                (n = t[2 + (u -= 3)]), (a = 'left');
            if ('right' == r && i == l - s)
              for (
                ;
                u < t.length - 3 &&
                t[u + 3] == t[u + 4] &&
                !t[u + 5].insertLeft;

              )
                (n = t[(u += 3) + 2]), (a = 'right');
            break;
          }
        return {
          node: n,
          start: i,
          end: o,
          collapse: a,
          coverStart: s,
          coverEnd: l,
        };
      }
      function Rr(t, e) {
        var r = jr;
        if ('left' == e)
          for (var n = 0; n < t.length && (r = t[n]).left == r.right; n++);
        else
          for (var i = t.length - 1; i >= 0 && (r = t[i]).left == r.right; i--);
        return r;
      }
      function Dr(t) {
        if (
          t.measure &&
          ((t.measure.cache = {}), (t.measure.heights = null), t.rest)
        )
          for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
      }
      function Fr(t) {
        (t.display.externalMeasure = null), L(t.display.lineMeasure);
        for (var e = 0; e < t.display.view.length; e++) Dr(t.display.view[e]);
      }
      function Wr(t) {
        Fr(t),
          (t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null),
          t.options.lineWrapping || (t.display.maxLineChanged = !0),
          (t.display.lineNumChars = null);
      }
      function zr() {
        return c && g
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function Br() {
        return c && g
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function Hr(t) {
        var e = 0;
        if (t.widgets)
          for (var r = 0; r < t.widgets.length; ++r)
            t.widgets[r].above && (e += wr(t.widgets[r]));
        return e;
      }
      function Ur(t, e, r, n, i) {
        if (!i) {
          var o = Hr(e);
          (r.top += o), (r.bottom += o);
        }
        if ('line' == n) return r;
        n || (n = 'local');
        var a = Ue(e);
        if (
          ('local' == n ? (a += Sr(t.display)) : (a -= t.display.viewOffset),
          'page' == n || 'window' == n)
        ) {
          var s = t.display.lineSpace.getBoundingClientRect();
          a += s.top + ('window' == n ? 0 : Br());
          var l = s.left + ('window' == n ? 0 : zr());
          (r.left += l), (r.right += l);
        }
        return (r.top += a), (r.bottom += a), r;
      }
      function Vr(t, e, r) {
        if ('div' == r) return e;
        var n = e.left,
          i = e.top;
        if ('page' == r) (n -= zr()), (i -= Br());
        else if ('local' == r || !r) {
          var o = t.display.sizer.getBoundingClientRect();
          (n += o.left), (i += o.top);
        }
        var a = t.display.lineSpace.getBoundingClientRect();
        return { left: n - a.left, top: i - a.top };
      }
      function Gr(t, e, r, n, i) {
        return n || (n = qt(t.doc, e.line)), Ur(t, n, Mr(t, n, e.ch, i), r);
      }
      function qr(t, e, r, n, i, o) {
        function a(e, a) {
          var s = Nr(t, i, e, a ? 'right' : 'left', o);
          return a ? (s.left = s.right) : (s.right = s.left), Ur(t, n, s, r);
        }
        (n = n || qt(t.doc, e.line)), i || (i = _r(t, n));
        var s = ut(n, t.doc.direction),
          l = e.ch,
          u = e.sticky;
        if (
          (l >= n.text.length
            ? ((l = n.text.length), (u = 'before'))
            : l <= 0 && ((l = 0), (u = 'after')),
          !s)
        )
          return a('before' == u ? l - 1 : l, 'before' == u);
        function c(t, e, r) {
          return a(r ? t - 1 : t, (1 == s[e].level) != r);
        }
        var f = st(s, l, u),
          h = at,
          d = c(l, f, 'before' == u);
        return null != h && (d.other = c(l, h, 'before' != u)), d;
      }
      function $r(t, e) {
        var r = 0;
        (e = se(t.doc, e)),
          t.options.lineWrapping || (r = nn(t.display) * e.ch);
        var n = qt(t.doc, e.line),
          i = Ue(n) + Sr(t.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
      }
      function Yr(t, e, r, n, i) {
        var o = te(t, e, r);
        return (o.xRel = i), n && (o.outside = n), o;
      }
      function Kr(t, e, r) {
        var n = t.doc;
        if ((r += t.display.viewOffset) < 0)
          return Yr(n.first, 0, null, -1, -1);
        var i = Jt(n, r),
          o = n.first + n.size - 1;
        if (i > o)
          return Yr(n.first + n.size - 1, qt(n, o).text.length, null, 1, 1);
        e < 0 && (e = 0);
        for (var a = qt(n, i); ; ) {
          var s = Qr(t, a, i, e, r),
            l = Re(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
          if (!l) return s;
          var u = l.find(1);
          if (u.line == i) return u;
          a = qt(n, (i = u.line));
        }
      }
      function Xr(t, e, r, n) {
        n -= Hr(e);
        var i = e.text.length,
          o = ot(
            function (e) {
              return Nr(t, r, e - 1).bottom <= n;
            },
            i,
            0
          );
        return {
          begin: o,
          end: (i = ot(
            function (e) {
              return Nr(t, r, e).top > n;
            },
            o,
            i
          )),
        };
      }
      function Jr(t, e, r, n) {
        return (
          r || (r = _r(t, e)), Xr(t, e, r, Ur(t, e, Nr(t, r, n), 'line').top)
        );
      }
      function Zr(t, e, r, n) {
        return !(t.bottom <= r) && (t.top > r || (n ? t.left : t.right) > e);
      }
      function Qr(t, e, r, n, i) {
        i -= Ue(e);
        var o = _r(t, e),
          a = Hr(e),
          s = 0,
          l = e.text.length,
          u = !0,
          c = ut(e, t.doc.direction);
        if (c) {
          var f = (t.options.lineWrapping ? en : tn)(t, e, r, o, c, n, i);
          (s = (u = 1 != f.level) ? f.from : f.to - 1),
            (l = u ? f.to : f.from - 1);
        }
        var h,
          d,
          p = null,
          v = null,
          g = ot(
            function (e) {
              var r = Nr(t, o, e);
              return (
                (r.top += a),
                (r.bottom += a),
                !!Zr(r, n, i, !1) &&
                  (r.top <= i && r.left <= n && ((p = e), (v = r)), !0)
              );
            },
            s,
            l
          ),
          m = !1;
        if (v) {
          var y = n - v.left < v.right - n,
            b = y == u;
          (g = p + (b ? 0 : 1)),
            (d = b ? 'after' : 'before'),
            (h = y ? v.left : v.right);
        } else {
          u || (g != l && g != s) || g++,
            (d =
              0 == g
                ? 'after'
                : g == e.text.length
                ? 'before'
                : Nr(t, o, g - (u ? 1 : 0)).bottom + a <= i == u
                ? 'after'
                : 'before');
          var w = qr(t, te(r, g, d), 'line', e, o);
          (h = w.left), (m = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
        }
        return Yr(r, (g = it(e.text, g, 1)), d, m, n - h);
      }
      function tn(t, e, r, n, i, o, a) {
        var s = ot(
            function (s) {
              var l = i[s],
                u = 1 != l.level;
              return Zr(
                qr(
                  t,
                  te(r, u ? l.to : l.from, u ? 'before' : 'after'),
                  'line',
                  e,
                  n
                ),
                o,
                a,
                !0
              );
            },
            0,
            i.length - 1
          ),
          l = i[s];
        if (s > 0) {
          var u = 1 != l.level,
            c = qr(
              t,
              te(r, u ? l.from : l.to, u ? 'after' : 'before'),
              'line',
              e,
              n
            );
          Zr(c, o, a, !0) && c.top > a && (l = i[s - 1]);
        }
        return l;
      }
      function en(t, e, r, n, i, o, a) {
        var s = Xr(t, e, n, a),
          l = s.begin,
          u = s.end;
        /\s/.test(e.text.charAt(u - 1)) && u--;
        for (var c = null, f = null, h = 0; h < i.length; h++) {
          var d = i[h];
          if (!(d.from >= u || d.to <= l)) {
            var p = Nr(
                t,
                n,
                1 != d.level ? Math.min(u, d.to) - 1 : Math.max(l, d.from)
              ).right,
              v = p < o ? o - p + 1e9 : p - o;
            (!c || f > v) && ((c = d), (f = v));
          }
        }
        return (
          c || (c = i[i.length - 1]),
          c.from < l && (c = { from: l, to: c.to, level: c.level }),
          c.to > u && (c = { from: c.from, to: u, level: c.level }),
          c
        );
      }
      function rn(t) {
        if (null != t.cachedTextHeight) return t.cachedTextHeight;
        if (null == Ir) {
          Ir = M('pre', null, 'CodeMirror-line-like');
          for (var e = 0; e < 49; ++e)
            Ir.appendChild(document.createTextNode('x')),
              Ir.appendChild(M('br'));
          Ir.appendChild(document.createTextNode('x'));
        }
        O(t.measure, Ir);
        var r = Ir.offsetHeight / 50;
        return r > 3 && (t.cachedTextHeight = r), L(t.measure), r || 1;
      }
      function nn(t) {
        if (null != t.cachedCharWidth) return t.cachedCharWidth;
        var e = M('span', 'xxxxxxxxxx'),
          r = M('pre', [e], 'CodeMirror-line-like');
        O(t.measure, r);
        var n = e.getBoundingClientRect(),
          i = (n.right - n.left) / 10;
        return i > 2 && (t.cachedCharWidth = i), i || 10;
      }
      function on(t) {
        for (
          var e = t.display,
            r = {},
            n = {},
            i = e.gutters.clientLeft,
            o = e.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        ) {
          var s = t.display.gutterSpecs[a].className;
          (r[s] = o.offsetLeft + o.clientLeft + i), (n[s] = o.clientWidth);
        }
        return {
          fixedPos: an(e),
          gutterTotalWidth: e.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: e.wrapper.clientWidth,
        };
      }
      function an(t) {
        return (
          t.scroller.getBoundingClientRect().left -
          t.sizer.getBoundingClientRect().left
        );
      }
      function sn(t) {
        var e = rn(t.display),
          r = t.options.lineWrapping,
          n =
            r &&
            Math.max(5, t.display.scroller.clientWidth / nn(t.display) - 3);
        return function (i) {
          if (Be(t.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return r ? o + (Math.ceil(i.text.length / n) || 1) * e : o + e;
        };
      }
      function ln(t) {
        var e = t.doc,
          r = sn(t);
        e.iter(function (t) {
          var e = r(t);
          e != t.height && Kt(t, e);
        });
      }
      function un(t, e, r, n) {
        var i = t.display;
        if (!r && 'true' == Ct(e).getAttribute('cm-not-content')) return null;
        var o,
          a,
          s = i.lineSpace.getBoundingClientRect();
        try {
          (o = e.clientX - s.left), (a = e.clientY - s.top);
        } catch (t) {
          return null;
        }
        var l,
          u = Kr(t, o, a);
        if (n && u.xRel > 0 && (l = qt(t.doc, u.line).text).length == u.ch) {
          var c = F(l, l.length, t.options.tabSize) - l.length;
          u = te(
            u.line,
            Math.max(
              0,
              Math.round((o - kr(t.display).left) / nn(t.display)) - c
            )
          );
        }
        return u;
      }
      function cn(t, e) {
        if (e >= t.display.viewTo) return null;
        if ((e -= t.display.viewFrom) < 0) return null;
        for (var r = t.display.view, n = 0; n < r.length; n++)
          if ((e -= r[n].size) < 0) return n;
      }
      function fn(t, e, r, n) {
        null == e && (e = t.doc.first),
          null == r && (r = t.doc.first + t.doc.size),
          n || (n = 0);
        var i = t.display;
        if (
          (n &&
            r < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > e) &&
            (i.updateLineNumbers = e),
          (t.curOp.viewChanged = !0),
          e >= i.viewTo)
        )
          Se && We(t.doc, e) < i.viewTo && dn(t);
        else if (r <= i.viewFrom)
          Se && ze(t.doc, r + n) > i.viewFrom
            ? dn(t)
            : ((i.viewFrom += n), (i.viewTo += n));
        else if (e <= i.viewFrom && r >= i.viewTo) dn(t);
        else if (e <= i.viewFrom) {
          var o = pn(t, r, r + n, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += n))
            : dn(t);
        } else if (r >= i.viewTo) {
          var a = pn(t, e, e, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : dn(t);
        } else {
          var s = pn(t, e, e, -1),
            l = pn(t, r, r + n, 1);
          s && l
            ? ((i.view = i.view
                .slice(0, s.index)
                .concat(ir(t, s.lineN, l.lineN))
                .concat(i.view.slice(l.index))),
              (i.viewTo += n))
            : dn(t);
        }
        var u = i.externalMeasured;
        u &&
          (r < u.lineN
            ? (u.lineN += n)
            : e < u.lineN + u.size && (i.externalMeasured = null));
      }
      function hn(t, e, r) {
        t.curOp.viewChanged = !0;
        var n = t.display,
          i = t.display.externalMeasured;
        if (
          (i &&
            e >= i.lineN &&
            e < i.lineN + i.size &&
            (n.externalMeasured = null),
          !(e < n.viewFrom || e >= n.viewTo))
        ) {
          var o = n.view[cn(t, e)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == z(a, r) && a.push(r);
          }
        }
      }
      function dn(t) {
        (t.display.viewFrom = t.display.viewTo = t.doc.first),
          (t.display.view = []),
          (t.display.viewOffset = 0);
      }
      function pn(t, e, r, n) {
        var i,
          o = cn(t, e),
          a = t.display.view;
        if (!Se || r == t.doc.first + t.doc.size) return { index: o, lineN: r };
        for (var s = t.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
        if (s != e) {
          if (n > 0) {
            if (o == a.length - 1) return null;
            (i = s + a[o].size - e), o++;
          } else i = s - e;
          (e += i), (r += i);
        }
        for (; We(t.doc, r) != r; ) {
          if (o == (n < 0 ? 0 : a.length - 1)) return null;
          (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
      }
      function vn(t) {
        for (var e = t.display.view, r = 0, n = 0; n < e.length; n++) {
          var i = e[n];
          i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
      }
      function gn(t) {
        t.display.input.showSelection(t.display.input.prepareSelection());
      }
      function mn(t, e) {
        void 0 === e && (e = !0);
        for (
          var r = t.doc,
            n = {},
            i = (n.cursors = document.createDocumentFragment()),
            o = (n.selection = document.createDocumentFragment()),
            a = 0;
          a < r.sel.ranges.length;
          a++
        )
          if (e || a != r.sel.primIndex) {
            var s = r.sel.ranges[a];
            if (
              !(
                s.from().line >= t.display.viewTo ||
                s.to().line < t.display.viewFrom
              )
            ) {
              var l = s.empty();
              (l || t.options.showCursorWhenSelecting) && yn(t, s.head, i),
                l || wn(t, s, o);
            }
          }
        return n;
      }
      function yn(t, e, r) {
        var n = qr(
            t,
            e,
            'div',
            null,
            null,
            !t.options.singleCursorHeightPerLine
          ),
          i = r.appendChild(M('div', ' ', 'CodeMirror-cursor'));
        if (
          ((i.style.left = n.left + 'px'),
          (i.style.top = n.top + 'px'),
          (i.style.height =
            Math.max(0, n.bottom - n.top) * t.options.cursorHeight + 'px'),
          n.other)
        ) {
          var o = r.appendChild(
            M('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
          );
          (o.style.display = ''),
            (o.style.left = n.other.left + 'px'),
            (o.style.top = n.other.top + 'px'),
            (o.style.height = 0.85 * (n.other.bottom - n.other.top) + 'px');
        }
      }
      function bn(t, e) {
        return t.top - e.top || t.left - e.left;
      }
      function wn(t, e, r) {
        var n = t.display,
          i = t.doc,
          o = document.createDocumentFragment(),
          a = kr(t.display),
          s = a.left,
          l = Math.max(n.sizerWidth, Ar(t) - n.sizer.offsetLeft) - a.right,
          u = 'ltr' == i.direction;
        function c(t, e, r, n) {
          e < 0 && (e = 0),
            (e = Math.round(e)),
            (n = Math.round(n)),
            o.appendChild(
              M(
                'div',
                null,
                'CodeMirror-selected',
                'position: absolute; left: ' +
                  t +
                  'px;\n                             top: ' +
                  e +
                  'px; width: ' +
                  (null == r ? l - t : r) +
                  'px;\n                             height: ' +
                  (n - e) +
                  'px'
              )
            );
        }
        function f(e, r, n) {
          var o,
            a,
            f = qt(i, e),
            h = f.text.length;
          function d(r, n) {
            return Gr(t, te(e, r), 'div', f, n);
          }
          function p(e, r, n) {
            var i = Jr(t, f, null, e),
              o = ('ltr' == r) == ('after' == n) ? 'left' : 'right';
            return d(
              'after' == n
                ? i.begin
                : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1),
              o
            )[o];
          }
          var v = ut(f, i.direction);
          return (
            (function (t, e, r, n) {
              if (!t) return n(e, r, 'ltr', 0);
              for (var i = !1, o = 0; o < t.length; ++o) {
                var a = t[o];
                ((a.from < r && a.to > e) || (e == r && a.to == e)) &&
                  (n(
                    Math.max(a.from, e),
                    Math.min(a.to, r),
                    1 == a.level ? 'rtl' : 'ltr',
                    o
                  ),
                  (i = !0));
              }
              i || n(e, r, 'ltr');
            })(v, r || 0, null == n ? h : n, function (t, e, i, f) {
              var g = 'ltr' == i,
                m = d(t, g ? 'left' : 'right'),
                y = d(e - 1, g ? 'right' : 'left'),
                b = null == r && 0 == t,
                w = null == n && e == h,
                x = 0 == f,
                S = !v || f == v.length - 1;
              if (y.top - m.top <= 3) {
                var C = (u ? w : b) && S,
                  k = (u ? b : w) && x ? s : (g ? m : y).left,
                  T = C ? l : (g ? y : m).right;
                c(k, m.top, T - k, m.bottom);
              } else {
                var A, L, O, M;
                g
                  ? ((A = u && b && x ? s : m.left),
                    (L = u ? l : p(t, i, 'before')),
                    (O = u ? s : p(e, i, 'after')),
                    (M = u && w && S ? l : y.right))
                  : ((A = u ? p(t, i, 'before') : s),
                    (L = !u && b && x ? l : m.right),
                    (O = !u && w && S ? s : y.left),
                    (M = u ? p(e, i, 'after') : l)),
                  c(A, m.top, L - A, m.bottom),
                  m.bottom < y.top && c(s, m.bottom, null, y.top),
                  c(O, y.top, M - O, y.bottom);
              }
              (!o || bn(m, o) < 0) && (o = m),
                bn(y, o) < 0 && (o = y),
                (!a || bn(m, a) < 0) && (a = m),
                bn(y, a) < 0 && (a = y);
            }),
            { start: o, end: a }
          );
        }
        var h = e.from(),
          d = e.to();
        if (h.line == d.line) f(h.line, h.ch, d.ch);
        else {
          var p = qt(i, h.line),
            v = qt(i, d.line),
            g = Fe(p) == Fe(v),
            m = f(h.line, h.ch, g ? p.text.length + 1 : null).end,
            y = f(d.line, g ? 0 : null, d.ch).start;
          g &&
            (m.top < y.top - 2
              ? (c(m.right, m.top, null, m.bottom),
                c(s, y.top, y.left, y.bottom))
              : c(m.right, m.top, y.left - m.right, m.bottom)),
            m.bottom < y.top && c(s, m.bottom, null, y.top);
        }
        r.appendChild(o);
      }
      function xn(t) {
        if (t.state.focused) {
          var e = t.display;
          clearInterval(e.blinker);
          var r = !0;
          (e.cursorDiv.style.visibility = ''),
            t.options.cursorBlinkRate > 0
              ? (e.blinker = setInterval(function () {
                  t.hasFocus() || Tn(t),
                    (e.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden');
                }, t.options.cursorBlinkRate))
              : t.options.cursorBlinkRate < 0 &&
                (e.cursorDiv.style.visibility = 'hidden');
        }
      }
      function Sn(t) {
        t.hasFocus() || (t.display.input.focus(), t.state.focused || kn(t));
      }
      function Cn(t) {
        (t.state.delayingBlurEvent = !0),
          setTimeout(function () {
            t.state.delayingBlurEvent &&
              ((t.state.delayingBlurEvent = !1), t.state.focused && Tn(t));
          }, 100);
      }
      function kn(t, e) {
        t.state.delayingBlurEvent &&
          !t.state.draggingText &&
          (t.state.delayingBlurEvent = !1),
          'nocursor' != t.options.readOnly &&
            (t.state.focused ||
              (pt(t, 'focus', t, e),
              (t.state.focused = !0),
              I(t.display.wrapper, 'CodeMirror-focused'),
              t.curOp ||
                t.display.selForContextMenu == t.doc.sel ||
                (t.display.input.reset(),
                l &&
                  setTimeout(function () {
                    return t.display.input.reset(!0);
                  }, 20)),
              t.display.input.receivedFocus()),
            xn(t));
      }
      function Tn(t, e) {
        t.state.delayingBlurEvent ||
          (t.state.focused &&
            (pt(t, 'blur', t, e),
            (t.state.focused = !1),
            A(t.display.wrapper, 'CodeMirror-focused')),
          clearInterval(t.display.blinker),
          setTimeout(function () {
            t.state.focused || (t.display.shift = !1);
          }, 150));
      }
      function An(t) {
        for (
          var e = t.display, r = e.lineDiv.offsetTop, n = 0;
          n < e.view.length;
          n++
        ) {
          var i = e.view[n],
            o = t.options.lineWrapping,
            l = void 0,
            u = 0;
          if (!i.hidden) {
            if (a && s < 8) {
              var c = i.node.offsetTop + i.node.offsetHeight;
              (l = c - r), (r = c);
            } else {
              var f = i.node.getBoundingClientRect();
              (l = f.bottom - f.top),
                !o &&
                  i.text.firstChild &&
                  (u =
                    i.text.firstChild.getBoundingClientRect().right -
                    f.left -
                    1);
            }
            var h = i.line.height - l;
            if (
              (h > 0.005 || h < -0.005) &&
              (Kt(i.line, l), Ln(i.line), i.rest)
            )
              for (var d = 0; d < i.rest.length; d++) Ln(i.rest[d]);
            if (u > t.display.sizerWidth) {
              var p = Math.ceil(u / nn(t.display));
              p > t.display.maxLineLength &&
                ((t.display.maxLineLength = p),
                (t.display.maxLine = i.line),
                (t.display.maxLineChanged = !0));
            }
          }
        }
      }
      function Ln(t) {
        if (t.widgets)
          for (var e = 0; e < t.widgets.length; ++e) {
            var r = t.widgets[e],
              n = r.node.parentNode;
            n && (r.height = n.offsetHeight);
          }
      }
      function On(t, e, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : t.scroller.scrollTop;
        n = Math.floor(n - Sr(t));
        var i = r && null != r.bottom ? r.bottom : n + t.wrapper.clientHeight,
          o = Jt(e, n),
          a = Jt(e, i);
        if (r && r.ensure) {
          var s = r.ensure.from.line,
            l = r.ensure.to.line;
          s < o
            ? ((o = s), (a = Jt(e, Ue(qt(e, s)) + t.wrapper.clientHeight)))
            : Math.min(l, e.lastLine()) >= a &&
              ((o = Jt(e, Ue(qt(e, l)) - t.wrapper.clientHeight)), (a = l));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function Mn(t, e) {
        var r = t.display,
          n = rn(t.display);
        e.top < 0 && (e.top = 0);
        var i =
            t.curOp && null != t.curOp.scrollTop
              ? t.curOp.scrollTop
              : r.scroller.scrollTop,
          o = Lr(t),
          a = {};
        e.bottom - e.top > o && (e.bottom = e.top + o);
        var s = t.doc.height + Cr(r),
          l = e.top < n,
          u = e.bottom > s - n;
        if (e.top < i) a.scrollTop = l ? 0 : e.top;
        else if (e.bottom > i + o) {
          var c = Math.min(e.top, (u ? s : e.bottom) - o);
          c != i && (a.scrollTop = c);
        }
        var f = t.options.fixedGutter ? 0 : r.gutters.offsetWidth,
          h =
            t.curOp && null != t.curOp.scrollLeft
              ? t.curOp.scrollLeft
              : r.scroller.scrollLeft - f,
          d = Ar(t) - r.gutters.offsetWidth,
          p = e.right - e.left > d;
        return (
          p && (e.right = e.left + d),
          e.left < 10
            ? (a.scrollLeft = 0)
            : e.left < h
            ? (a.scrollLeft = Math.max(0, e.left + f - (p ? 0 : 10)))
            : e.right > d + h - 3 &&
              (a.scrollLeft = e.right + (p ? 0 : 10) - d),
          a
        );
      }
      function En(t, e) {
        null != e &&
          (In(t),
          (t.curOp.scrollTop =
            (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) +
            e));
      }
      function _n(t) {
        In(t);
        var e = t.getCursor();
        t.curOp.scrollToPos = {
          from: e,
          to: e,
          margin: t.options.cursorScrollMargin,
        };
      }
      function Nn(t, e, r) {
        (null == e && null == r) || In(t),
          null != e && (t.curOp.scrollLeft = e),
          null != r && (t.curOp.scrollTop = r);
      }
      function In(t) {
        var e = t.curOp.scrollToPos;
        e &&
          ((t.curOp.scrollToPos = null),
          jn(t, $r(t, e.from), $r(t, e.to), e.margin));
      }
      function jn(t, e, r, n) {
        var i = Mn(t, {
          left: Math.min(e.left, r.left),
          top: Math.min(e.top, r.top) - n,
          right: Math.max(e.right, r.right),
          bottom: Math.max(e.bottom, r.bottom) + n,
        });
        Nn(t, i.scrollLeft, i.scrollTop);
      }
      function Pn(t, e) {
        Math.abs(t.doc.scrollTop - e) < 2 ||
          (r || li(t, { top: e }), Rn(t, e, !0), r && li(t), ni(t, 100));
      }
      function Rn(t, e, r) {
        (e = Math.max(
          0,
          Math.min(
            t.display.scroller.scrollHeight - t.display.scroller.clientHeight,
            e
          )
        )),
          (t.display.scroller.scrollTop != e || r) &&
            ((t.doc.scrollTop = e),
            t.display.scrollbars.setScrollTop(e),
            t.display.scroller.scrollTop != e &&
              (t.display.scroller.scrollTop = e));
      }
      function Dn(t, e, r, n) {
        (e = Math.max(
          0,
          Math.min(
            e,
            t.display.scroller.scrollWidth - t.display.scroller.clientWidth
          )
        )),
          ((r ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) &&
            !n) ||
            ((t.doc.scrollLeft = e),
            fi(t),
            t.display.scroller.scrollLeft != e &&
              (t.display.scroller.scrollLeft = e),
            t.display.scrollbars.setScrollLeft(e));
      }
      function Fn(t) {
        var e = t.display,
          r = e.gutters.offsetWidth,
          n = Math.round(t.doc.height + Cr(t.display));
        return {
          clientHeight: e.scroller.clientHeight,
          viewHeight: e.wrapper.clientHeight,
          scrollWidth: e.scroller.scrollWidth,
          clientWidth: e.scroller.clientWidth,
          viewWidth: e.wrapper.clientWidth,
          barLeft: t.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + Tr(t) + e.barHeight,
          nativeBarWidth: e.nativeBarWidth,
          gutterWidth: r,
        };
      }
      var Wn = function (t, e, r) {
        this.cm = r;
        var n = (this.vert = M(
            'div',
            [M('div', null, null, 'min-width: 1px')],
            'CodeMirror-vscrollbar'
          )),
          i = (this.horiz = M(
            'div',
            [M('div', null, null, 'height: 100%; min-height: 1px')],
            'CodeMirror-hscrollbar'
          ));
        (n.tabIndex = i.tabIndex = -1),
          t(n),
          t(i),
          ft(n, 'scroll', function () {
            n.clientHeight && e(n.scrollTop, 'vertical');
          }),
          ft(i, 'scroll', function () {
            i.clientWidth && e(i.scrollLeft, 'horizontal');
          }),
          (this.checkedZeroWidth = !1),
          a &&
            s < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
      };
      (Wn.prototype.update = function (t) {
        var e = t.scrollWidth > t.clientWidth + 1,
          r = t.scrollHeight > t.clientHeight + 1,
          n = t.nativeBarWidth;
        if (r) {
          (this.vert.style.display = 'block'),
            (this.vert.style.bottom = e ? n + 'px' : '0');
          var i = t.viewHeight - (e ? n : 0);
          this.vert.firstChild.style.height =
            Math.max(0, t.scrollHeight - t.clientHeight + i) + 'px';
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0');
        if (e) {
          (this.horiz.style.display = 'block'),
            (this.horiz.style.right = r ? n + 'px' : '0'),
            (this.horiz.style.left = t.barLeft + 'px');
          var o = t.viewWidth - t.barLeft - (r ? n : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, t.scrollWidth - t.clientWidth + o) + 'px';
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0');
        return (
          !this.checkedZeroWidth &&
            t.clientHeight > 0 &&
            (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: r ? n : 0, bottom: e ? n : 0 }
        );
      }),
        (Wn.prototype.setScrollLeft = function (t) {
          this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        (Wn.prototype.setScrollTop = function (t) {
          this.vert.scrollTop != t && (this.vert.scrollTop = t),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        (Wn.prototype.zeroWidthHack = function () {
          var t = y && !d ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = t),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new W()),
            (this.disableVert = new W());
        }),
        (Wn.prototype.enableZeroWidthBar = function (t, e, r) {
          (t.style.pointerEvents = 'auto'),
            e.set(1e3, function n() {
              var i = t.getBoundingClientRect();
              ('vert' == r
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  )) != t
                ? (t.style.pointerEvents = 'none')
                : e.set(1e3, n);
            });
        }),
        (Wn.prototype.clear = function () {
          var t = this.horiz.parentNode;
          t.removeChild(this.horiz), t.removeChild(this.vert);
        });
      var zn = function () {};
      function Bn(t, e) {
        e || (e = Fn(t));
        var r = t.display.barWidth,
          n = t.display.barHeight;
        Hn(t, e);
        for (
          var i = 0;
          (i < 4 && r != t.display.barWidth) || n != t.display.barHeight;
          i++
        )
          r != t.display.barWidth && t.options.lineWrapping && An(t),
            Hn(t, Fn(t)),
            (r = t.display.barWidth),
            (n = t.display.barHeight);
      }
      function Hn(t, e) {
        var r = t.display,
          n = r.scrollbars.update(e);
        (r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
          (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
          (r.heightForcer.style.borderBottom =
            n.bottom + 'px solid transparent'),
          n.right && n.bottom
            ? ((r.scrollbarFiller.style.display = 'block'),
              (r.scrollbarFiller.style.height = n.bottom + 'px'),
              (r.scrollbarFiller.style.width = n.right + 'px'))
            : (r.scrollbarFiller.style.display = ''),
          n.bottom &&
          t.options.coverGutterNextToScrollbar &&
          t.options.fixedGutter
            ? ((r.gutterFiller.style.display = 'block'),
              (r.gutterFiller.style.height = n.bottom + 'px'),
              (r.gutterFiller.style.width = e.gutterWidth + 'px'))
            : (r.gutterFiller.style.display = '');
      }
      (zn.prototype.update = function () {
        return { bottom: 0, right: 0 };
      }),
        (zn.prototype.setScrollLeft = function () {}),
        (zn.prototype.setScrollTop = function () {}),
        (zn.prototype.clear = function () {});
      var Un = { native: Wn, null: zn };
      function Vn(t) {
        t.display.scrollbars &&
          (t.display.scrollbars.clear(),
          t.display.scrollbars.addClass &&
            A(t.display.wrapper, t.display.scrollbars.addClass)),
          (t.display.scrollbars = new Un[t.options.scrollbarStyle](
            function (e) {
              t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                ft(e, 'mousedown', function () {
                  t.state.focused &&
                    setTimeout(function () {
                      return t.display.input.focus();
                    }, 0);
                }),
                e.setAttribute('cm-not-content', 'true');
            },
            function (e, r) {
              'horizontal' == r ? Dn(t, e) : Pn(t, e);
            },
            t
          )),
          t.display.scrollbars.addClass &&
            I(t.display.wrapper, t.display.scrollbars.addClass);
      }
      var Gn = 0;
      function qn(t) {
        var e;
        (t.curOp = {
          cm: t,
          viewChanged: !1,
          startHeight: t.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Gn,
        }),
          (e = t.curOp),
          or
            ? or.ops.push(e)
            : (e.ownsGroup = or = { ops: [e], delayedCallbacks: [] });
      }
      function $n(t) {
        var e = t.curOp;
        e &&
          (function (t, e) {
            var r = t.ownsGroup;
            if (r)
              try {
                !(function (t) {
                  var e = t.delayedCallbacks,
                    r = 0;
                  do {
                    for (; r < e.length; r++) e[r].call(null);
                    for (var n = 0; n < t.ops.length; n++) {
                      var i = t.ops[n];
                      if (i.cursorActivityHandlers)
                        for (
                          ;
                          i.cursorActivityCalled <
                          i.cursorActivityHandlers.length;

                        )
                          i.cursorActivityHandlers[
                            i.cursorActivityCalled++
                          ].call(null, i.cm);
                    }
                  } while (r < e.length);
                })(r);
              } finally {
                (or = null), e(r);
              }
          })(e, function (t) {
            for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
            !(function (t) {
              for (var e = t.ops, r = 0; r < e.length; r++) Yn(e[r]);
              for (var n = 0; n < e.length; n++) Kn(e[n]);
              for (var i = 0; i < e.length; i++) Xn(e[i]);
              for (var o = 0; o < e.length; o++) Jn(e[o]);
              for (var a = 0; a < e.length; a++) Zn(e[a]);
            })(t);
          });
      }
      function Yn(t) {
        var e = t.cm,
          r = e.display;
        !(function (t) {
          var e = t.display;
          !e.scrollbarsClipped &&
            e.scroller.offsetWidth &&
            ((e.nativeBarWidth =
              e.scroller.offsetWidth - e.scroller.clientWidth),
            (e.heightForcer.style.height = Tr(t) + 'px'),
            (e.sizer.style.marginBottom = -e.nativeBarWidth + 'px'),
            (e.sizer.style.borderRightWidth = Tr(t) + 'px'),
            (e.scrollbarsClipped = !0));
        })(e),
          t.updateMaxLine && Ge(e),
          (t.mustUpdate =
            t.viewChanged ||
            t.forceUpdate ||
            null != t.scrollTop ||
            (t.scrollToPos &&
              (t.scrollToPos.from.line < r.viewFrom ||
                t.scrollToPos.to.line >= r.viewTo)) ||
            (r.maxLineChanged && e.options.lineWrapping)),
          (t.update =
            t.mustUpdate &&
            new oi(
              e,
              t.mustUpdate && { top: t.scrollTop, ensure: t.scrollToPos },
              t.forceUpdate
            ));
      }
      function Kn(t) {
        t.updatedDisplay = t.mustUpdate && ai(t.cm, t.update);
      }
      function Xn(t) {
        var e = t.cm,
          r = e.display;
        t.updatedDisplay && An(e),
          (t.barMeasure = Fn(e)),
          r.maxLineChanged &&
            !e.options.lineWrapping &&
            ((t.adjustWidthTo =
              Mr(e, r.maxLine, r.maxLine.text.length).left + 3),
            (e.display.sizerWidth = t.adjustWidthTo),
            (t.barMeasure.scrollWidth = Math.max(
              r.scroller.clientWidth,
              r.sizer.offsetLeft + t.adjustWidthTo + Tr(e) + e.display.barWidth
            )),
            (t.maxScrollLeft = Math.max(
              0,
              r.sizer.offsetLeft + t.adjustWidthTo - Ar(e)
            ))),
          (t.updatedDisplay || t.selectionChanged) &&
            (t.preparedSelection = r.input.prepareSelection());
      }
      function Jn(t) {
        var e = t.cm;
        null != t.adjustWidthTo &&
          ((e.display.sizer.style.minWidth = t.adjustWidthTo + 'px'),
          t.maxScrollLeft < e.doc.scrollLeft &&
            Dn(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0),
          (e.display.maxLineChanged = !1));
        var r = t.focus && t.focus == N();
        t.preparedSelection &&
          e.display.input.showSelection(t.preparedSelection, r),
          (t.updatedDisplay || t.startHeight != e.doc.height) &&
            Bn(e, t.barMeasure),
          t.updatedDisplay && ci(e, t.barMeasure),
          t.selectionChanged && xn(e),
          e.state.focused && t.updateInput && e.display.input.reset(t.typing),
          r && Sn(t.cm);
      }
      function Zn(t) {
        var e = t.cm,
          r = e.display,
          n = e.doc;
        t.updatedDisplay && si(e, t.update),
          null == r.wheelStartX ||
            (null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos) ||
            (r.wheelStartX = r.wheelStartY = null),
          null != t.scrollTop && Rn(e, t.scrollTop, t.forceScroll),
          null != t.scrollLeft && Dn(e, t.scrollLeft, !0, !0),
          t.scrollToPos &&
            (function (t, e) {
              if (!vt(t, 'scrollCursorIntoView')) {
                var r = t.display,
                  n = r.sizer.getBoundingClientRect(),
                  i = null;
                if (
                  (e.top + n.top < 0
                    ? (i = !0)
                    : e.bottom + n.top >
                        (window.innerHeight ||
                          document.documentElement.clientHeight) && (i = !1),
                  null != i && !p)
                ) {
                  var o = M(
                    'div',
                    '​',
                    null,
                    'position: absolute;\n                         top: ' +
                      (e.top - r.viewOffset - Sr(t.display)) +
                      'px;\n                         height: ' +
                      (e.bottom - e.top + Tr(t) + r.barHeight) +
                      'px;\n                         left: ' +
                      e.left +
                      'px; width: ' +
                      Math.max(2, e.right - e.left) +
                      'px;'
                  );
                  t.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    t.display.lineSpace.removeChild(o);
                }
              }
            })(
              e,
              (function (t, e, r, n) {
                var i;
                null == n && (n = 0),
                  t.options.lineWrapping ||
                    e != r ||
                    (r =
                      'before' ==
                      (e = e.ch
                        ? te(
                            e.line,
                            'before' == e.sticky ? e.ch - 1 : e.ch,
                            'after'
                          )
                        : e).sticky
                        ? te(e.line, e.ch + 1, 'before')
                        : e);
                for (var o = 0; o < 5; o++) {
                  var a = !1,
                    s = qr(t, e),
                    l = r && r != e ? qr(t, r) : s,
                    u = Mn(
                      t,
                      (i = {
                        left: Math.min(s.left, l.left),
                        top: Math.min(s.top, l.top) - n,
                        right: Math.max(s.left, l.left),
                        bottom: Math.max(s.bottom, l.bottom) + n,
                      })
                    ),
                    c = t.doc.scrollTop,
                    f = t.doc.scrollLeft;
                  if (
                    (null != u.scrollTop &&
                      (Pn(t, u.scrollTop),
                      Math.abs(t.doc.scrollTop - c) > 1 && (a = !0)),
                    null != u.scrollLeft &&
                      (Dn(t, u.scrollLeft),
                      Math.abs(t.doc.scrollLeft - f) > 1 && (a = !0)),
                    !a)
                  )
                    break;
                }
                return i;
              })(
                e,
                se(n, t.scrollToPos.from),
                se(n, t.scrollToPos.to),
                t.scrollToPos.margin
              )
            );
        var i = t.maybeHiddenMarkers,
          o = t.maybeUnhiddenMarkers;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].lines.length || pt(i[a], 'hide');
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length && pt(o[s], 'unhide');
        r.wrapper.offsetHeight && (n.scrollTop = e.display.scroller.scrollTop),
          t.changeObjs && pt(e, 'changes', e, t.changeObjs),
          t.update && t.update.finish();
      }
      function Qn(t, e) {
        if (t.curOp) return e();
        qn(t);
        try {
          return e();
        } finally {
          $n(t);
        }
      }
      function ti(t, e) {
        return function () {
          if (t.curOp) return e.apply(t, arguments);
          qn(t);
          try {
            return e.apply(t, arguments);
          } finally {
            $n(t);
          }
        };
      }
      function ei(t) {
        return function () {
          if (this.curOp) return t.apply(this, arguments);
          qn(this);
          try {
            return t.apply(this, arguments);
          } finally {
            $n(this);
          }
        };
      }
      function ri(t) {
        return function () {
          var e = this.cm;
          if (!e || e.curOp) return t.apply(this, arguments);
          qn(e);
          try {
            return t.apply(this, arguments);
          } finally {
            $n(e);
          }
        };
      }
      function ni(t, e) {
        t.doc.highlightFrontier < t.display.viewTo &&
          t.state.highlight.set(e, R(ii, t));
      }
      function ii(t) {
        var e = t.doc;
        if (!(e.highlightFrontier >= t.display.viewTo)) {
          var r = +new Date() + t.options.workTime,
            n = de(t, e.highlightFrontier),
            i = [];
          e.iter(
            n.line,
            Math.min(e.first + e.size, t.display.viewTo + 500),
            function (o) {
              if (n.line >= t.display.viewFrom) {
                var a = o.styles,
                  s =
                    o.text.length > t.options.maxHighlightLength
                      ? Ht(e.mode, n.state)
                      : null,
                  l = fe(t, o, n, !0);
                s && (n.state = s), (o.styles = l.styles);
                var u = o.styleClasses,
                  c = l.classes;
                c ? (o.styleClasses = c) : u && (o.styleClasses = null);
                for (
                  var f =
                      !a ||
                      a.length != o.styles.length ||
                      (u != c &&
                        (!u ||
                          !c ||
                          u.bgClass != c.bgClass ||
                          u.textClass != c.textClass)),
                    h = 0;
                  !f && h < a.length;
                  ++h
                )
                  f = a[h] != o.styles[h];
                f && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
              } else
                o.text.length <= t.options.maxHighlightLength &&
                  pe(t, o.text, n),
                  (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine();
              if (+new Date() > r) return ni(t, t.options.workDelay), !0;
            }
          ),
            (e.highlightFrontier = n.line),
            (e.modeFrontier = Math.max(e.modeFrontier, n.line)),
            i.length &&
              Qn(t, function () {
                for (var e = 0; e < i.length; e++) hn(t, i[e], 'text');
              });
        }
      }
      var oi = function (t, e, r) {
        var n = t.display;
        (this.viewport = e),
          (this.visible = On(n, t.doc, e)),
          (this.editorIsHidden = !n.wrapper.offsetWidth),
          (this.wrapperHeight = n.wrapper.clientHeight),
          (this.wrapperWidth = n.wrapper.clientWidth),
          (this.oldDisplayWidth = Ar(t)),
          (this.force = r),
          (this.dims = on(t)),
          (this.events = []);
      };
      function ai(t, e) {
        var r = t.display,
          n = t.doc;
        if (e.editorIsHidden) return dn(t), !1;
        if (
          !e.force &&
          e.visible.from >= r.viewFrom &&
          e.visible.to <= r.viewTo &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
          r.renderedView == r.view &&
          0 == vn(t)
        )
          return !1;
        hi(t) && (dn(t), (e.dims = on(t)));
        var i = n.first + n.size,
          o = Math.max(e.visible.from - t.options.viewportMargin, n.first),
          a = Math.min(i, e.visible.to + t.options.viewportMargin);
        r.viewFrom < o &&
          o - r.viewFrom < 20 &&
          (o = Math.max(n.first, r.viewFrom)),
          r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)),
          Se && ((o = We(t.doc, o)), (a = ze(t.doc, a)));
        var s =
          o != r.viewFrom ||
          a != r.viewTo ||
          r.lastWrapHeight != e.wrapperHeight ||
          r.lastWrapWidth != e.wrapperWidth;
        !(function (t, e, r) {
          var n = t.display;
          0 == n.view.length || e >= n.viewTo || r <= n.viewFrom
            ? ((n.view = ir(t, e, r)), (n.viewFrom = e))
            : (n.viewFrom > e
                ? (n.view = ir(t, e, n.viewFrom).concat(n.view))
                : n.viewFrom < e && (n.view = n.view.slice(cn(t, e))),
              (n.viewFrom = e),
              n.viewTo < r
                ? (n.view = n.view.concat(ir(t, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, cn(t, r)))),
            (n.viewTo = r);
        })(t, o, a),
          (r.viewOffset = Ue(qt(t.doc, r.viewFrom))),
          (t.display.mover.style.top = r.viewOffset + 'px');
        var u = vn(t);
        if (
          !s &&
          0 == u &&
          !e.force &&
          r.renderedView == r.view &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
        )
          return !1;
        var c = (function (t) {
          if (t.hasFocus()) return null;
          var e = N();
          if (!e || !_(t.display.lineDiv, e)) return null;
          var r = { activeElt: e };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              _(t.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        })(t);
        return (
          u > 4 && (r.lineDiv.style.display = 'none'),
          (function (t, e, r) {
            var n = t.display,
              i = t.options.lineNumbers,
              o = n.lineDiv,
              a = o.firstChild;
            function s(e) {
              var r = e.nextSibling;
              return (
                l && y && t.display.currentWheelTarget == e
                  ? (e.style.display = 'none')
                  : e.parentNode.removeChild(e),
                r
              );
            }
            for (var u = n.view, c = n.viewFrom, f = 0; f < u.length; f++) {
              var h = u[f];
              if (h.hidden);
              else if (h.node && h.node.parentNode == o) {
                for (; a != h.node; ) a = s(a);
                var d = i && null != e && e <= c && h.lineNumber;
                h.changes &&
                  (z(h.changes, 'gutter') > -1 && (d = !1), ur(t, h, c, r)),
                  d &&
                    (L(h.lineNumber),
                    h.lineNumber.appendChild(
                      document.createTextNode(Qt(t.options, c))
                    )),
                  (a = h.node.nextSibling);
              } else {
                var p = gr(t, h, c, r);
                o.insertBefore(p, a);
              }
              c += h.size;
            }
            for (; a; ) a = s(a);
          })(t, r.updateLineNumbers, e.dims),
          u > 4 && (r.lineDiv.style.display = ''),
          (r.renderedView = r.view),
          (function (t) {
            if (
              t &&
              t.activeElt &&
              t.activeElt != N() &&
              (t.activeElt.focus(),
              !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) &&
                t.anchorNode &&
                _(document.body, t.anchorNode) &&
                _(document.body, t.focusNode))
            ) {
              var e = window.getSelection(),
                r = document.createRange();
              r.setEnd(t.anchorNode, t.anchorOffset),
                r.collapse(!1),
                e.removeAllRanges(),
                e.addRange(r),
                e.extend(t.focusNode, t.focusOffset);
            }
          })(c),
          L(r.cursorDiv),
          L(r.selectionDiv),
          (r.gutters.style.height = r.sizer.style.minHeight = 0),
          s &&
            ((r.lastWrapHeight = e.wrapperHeight),
            (r.lastWrapWidth = e.wrapperWidth),
            ni(t, 400)),
          (r.updateLineNumbers = null),
          !0
        );
      }
      function si(t, e) {
        for (var r = e.viewport, n = !0; ; n = !1) {
          if (n && t.options.lineWrapping && e.oldDisplayWidth != Ar(t))
            n && (e.visible = On(t.display, t.doc, r));
          else if (
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(t.doc.height + Cr(t.display) - Lr(t), r.top),
              }),
            (e.visible = On(t.display, t.doc, r)),
            e.visible.from >= t.display.viewFrom &&
              e.visible.to <= t.display.viewTo)
          )
            break;
          if (!ai(t, e)) break;
          An(t);
          var i = Fn(t);
          gn(t), Bn(t, i), ci(t, i), (e.force = !1);
        }
        e.signal(t, 'update', t),
          (t.display.viewFrom == t.display.reportedViewFrom &&
            t.display.viewTo == t.display.reportedViewTo) ||
            (e.signal(
              t,
              'viewportChange',
              t,
              t.display.viewFrom,
              t.display.viewTo
            ),
            (t.display.reportedViewFrom = t.display.viewFrom),
            (t.display.reportedViewTo = t.display.viewTo));
      }
      function li(t, e) {
        var r = new oi(t, e);
        if (ai(t, r)) {
          An(t), si(t, r);
          var n = Fn(t);
          gn(t), Bn(t, n), ci(t, n), r.finish();
        }
      }
      function ui(t) {
        var e = t.gutters.offsetWidth;
        t.sizer.style.marginLeft = e + 'px';
      }
      function ci(t, e) {
        (t.display.sizer.style.minHeight = e.docHeight + 'px'),
          (t.display.heightForcer.style.top = e.docHeight + 'px'),
          (t.display.gutters.style.height =
            e.docHeight + t.display.barHeight + Tr(t) + 'px');
      }
      function fi(t) {
        var e = t.display,
          r = e.view;
        if (e.alignWidgets || (e.gutters.firstChild && t.options.fixedGutter)) {
          for (
            var n = an(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
              i = e.gutters.offsetWidth,
              o = n + 'px',
              a = 0;
            a < r.length;
            a++
          )
            if (!r[a].hidden) {
              t.options.fixedGutter &&
                (r[a].gutter && (r[a].gutter.style.left = o),
                r[a].gutterBackground &&
                  (r[a].gutterBackground.style.left = o));
              var s = r[a].alignable;
              if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
            }
          t.options.fixedGutter && (e.gutters.style.left = n + i + 'px');
        }
      }
      function hi(t) {
        if (!t.options.lineNumbers) return !1;
        var e = t.doc,
          r = Qt(t.options, e.first + e.size - 1),
          n = t.display;
        if (r.length != n.lineNumChars) {
          var i = n.measure.appendChild(
              M(
                'div',
                [M('div', r)],
                'CodeMirror-linenumber CodeMirror-gutter-elt'
              )
            ),
            o = i.firstChild.offsetWidth,
            a = i.offsetWidth - o;
          return (
            (n.lineGutter.style.width = ''),
            (n.lineNumInnerWidth =
              Math.max(o, n.lineGutter.offsetWidth - a) + 1),
            (n.lineNumWidth = n.lineNumInnerWidth + a),
            (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
            (n.lineGutter.style.width = n.lineNumWidth + 'px'),
            ui(t.display),
            !0
          );
        }
        return !1;
      }
      function di(t, e) {
        for (var r = [], n = !1, i = 0; i < t.length; i++) {
          var o = t[i],
            a = null;
          if (
            ('string' != typeof o && ((a = o.style), (o = o.className)),
            'CodeMirror-linenumbers' == o)
          ) {
            if (!e) continue;
            n = !0;
          }
          r.push({ className: o, style: a });
        }
        return (
          e &&
            !n &&
            r.push({ className: 'CodeMirror-linenumbers', style: null }),
          r
        );
      }
      function pi(t) {
        var e = t.gutters,
          r = t.gutterSpecs;
        L(e), (t.lineGutter = null);
        for (var n = 0; n < r.length; ++n) {
          var i = r[n],
            o = i.className,
            a = i.style,
            s = e.appendChild(M('div', null, 'CodeMirror-gutter ' + o));
          a && (s.style.cssText = a),
            'CodeMirror-linenumbers' == o &&
              ((t.lineGutter = s),
              (s.style.width = (t.lineNumWidth || 1) + 'px'));
        }
        (e.style.display = r.length ? '' : 'none'), ui(t);
      }
      function vi(t) {
        pi(t.display), fn(t), fi(t);
      }
      function gi(t, e, n, i) {
        var o = this;
        (this.input = n),
          (o.scrollbarFiller = M('div', null, 'CodeMirror-scrollbar-filler')),
          o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
          (o.gutterFiller = M('div', null, 'CodeMirror-gutter-filler')),
          o.gutterFiller.setAttribute('cm-not-content', 'true'),
          (o.lineDiv = E('div', null, 'CodeMirror-code')),
          (o.selectionDiv = M(
            'div',
            null,
            null,
            'position: relative; z-index: 1'
          )),
          (o.cursorDiv = M('div', null, 'CodeMirror-cursors')),
          (o.measure = M('div', null, 'CodeMirror-measure')),
          (o.lineMeasure = M('div', null, 'CodeMirror-measure')),
          (o.lineSpace = E(
            'div',
            [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
            null,
            'position: relative; outline: none'
          ));
        var u = E('div', [o.lineSpace], 'CodeMirror-lines');
        (o.mover = M('div', [u], null, 'position: relative')),
          (o.sizer = M('div', [o.mover], 'CodeMirror-sizer')),
          (o.sizerWidth = null),
          (o.heightForcer = M(
            'div',
            null,
            null,
            'position: absolute; height: 50px; width: 1px;'
          )),
          (o.gutters = M('div', null, 'CodeMirror-gutters')),
          (o.lineGutter = null),
          (o.scroller = M(
            'div',
            [o.sizer, o.heightForcer, o.gutters],
            'CodeMirror-scroll'
          )),
          o.scroller.setAttribute('tabIndex', '-1'),
          (o.wrapper = M(
            'div',
            [o.scrollbarFiller, o.gutterFiller, o.scroller],
            'CodeMirror'
          )),
          a &&
            s < 8 &&
            ((o.gutters.style.zIndex = -1),
            (o.scroller.style.paddingRight = 0)),
          l || (r && m) || (o.scroller.draggable = !0),
          t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)),
          (o.viewFrom = o.viewTo = e.first),
          (o.reportedViewFrom = o.reportedViewTo = e.first),
          (o.view = []),
          (o.renderedView = null),
          (o.externalMeasured = null),
          (o.viewOffset = 0),
          (o.lastWrapHeight = o.lastWrapWidth = 0),
          (o.updateLineNumbers = null),
          (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
          (o.scrollbarsClipped = !1),
          (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
          (o.alignWidgets = !1),
          (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
          (o.maxLine = null),
          (o.maxLineLength = 0),
          (o.maxLineChanged = !1),
          (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
          (o.shift = !1),
          (o.selForContextMenu = null),
          (o.activeTouch = null),
          (o.gutterSpecs = di(i.gutters, i.lineNumbers)),
          pi(o),
          n.init(o);
      }
      (oi.prototype.signal = function (t, e) {
        mt(t, e) && this.events.push(arguments);
      }),
        (oi.prototype.finish = function () {
          for (var t = 0; t < this.events.length; t++)
            pt.apply(null, this.events[t]);
        });
      var mi = 0,
        yi = null;
      function bi(t) {
        var e = t.wheelDeltaX,
          r = t.wheelDeltaY;
        return (
          null == e &&
            t.detail &&
            t.axis == t.HORIZONTAL_AXIS &&
            (e = t.detail),
          null == r && t.detail && t.axis == t.VERTICAL_AXIS
            ? (r = t.detail)
            : null == r && (r = t.wheelDelta),
          { x: e, y: r }
        );
      }
      function wi(t) {
        var e = bi(t);
        return (e.x *= yi), (e.y *= yi), e;
      }
      function xi(t, e) {
        var n = bi(e),
          i = n.x,
          o = n.y,
          a = t.display,
          s = a.scroller,
          u = s.scrollWidth > s.clientWidth,
          c = s.scrollHeight > s.clientHeight;
        if ((i && u) || (o && c)) {
          if (o && y && l)
            t: for (var h = e.target, d = a.view; h != s; h = h.parentNode)
              for (var p = 0; p < d.length; p++)
                if (d[p].node == h) {
                  t.display.currentWheelTarget = h;
                  break t;
                }
          if (i && !r && !f && null != yi)
            return (
              o && c && Pn(t, Math.max(0, s.scrollTop + o * yi)),
              Dn(t, Math.max(0, s.scrollLeft + i * yi)),
              (!o || (o && c)) && bt(e),
              void (a.wheelStartX = null)
            );
          if (o && null != yi) {
            var v = o * yi,
              g = t.doc.scrollTop,
              m = g + a.wrapper.clientHeight;
            v < 0
              ? (g = Math.max(0, g + v - 50))
              : (m = Math.min(t.doc.height, m + v + 50)),
              li(t, { top: g, bottom: m });
          }
          mi < 20 &&
            (null == a.wheelStartX
              ? ((a.wheelStartX = s.scrollLeft),
                (a.wheelStartY = s.scrollTop),
                (a.wheelDX = i),
                (a.wheelDY = o),
                setTimeout(function () {
                  if (null != a.wheelStartX) {
                    var t = s.scrollLeft - a.wheelStartX,
                      e = s.scrollTop - a.wheelStartY,
                      r =
                        (e && a.wheelDY && e / a.wheelDY) ||
                        (t && a.wheelDX && t / a.wheelDX);
                    (a.wheelStartX = a.wheelStartY = null),
                      r && ((yi = (yi * mi + r) / (mi + 1)), ++mi);
                  }
                }, 200))
              : ((a.wheelDX += i), (a.wheelDY += o)));
        }
      }
      a ? (yi = -0.53) : r ? (yi = 15) : c ? (yi = -0.7) : h && (yi = -1 / 3);
      var Si = function (t, e) {
        (this.ranges = t), (this.primIndex = e);
      };
      (Si.prototype.primary = function () {
        return this.ranges[this.primIndex];
      }),
        (Si.prototype.equals = function (t) {
          if (t == this) return !0;
          if (
            t.primIndex != this.primIndex ||
            t.ranges.length != this.ranges.length
          )
            return !1;
          for (var e = 0; e < this.ranges.length; e++) {
            var r = this.ranges[e],
              n = t.ranges[e];
            if (!re(r.anchor, n.anchor) || !re(r.head, n.head)) return !1;
          }
          return !0;
        }),
        (Si.prototype.deepCopy = function () {
          for (var t = [], e = 0; e < this.ranges.length; e++)
            t[e] = new Ci(ne(this.ranges[e].anchor), ne(this.ranges[e].head));
          return new Si(t, this.primIndex);
        }),
        (Si.prototype.somethingSelected = function () {
          for (var t = 0; t < this.ranges.length; t++)
            if (!this.ranges[t].empty()) return !0;
          return !1;
        }),
        (Si.prototype.contains = function (t, e) {
          e || (e = t);
          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (ee(e, n.from()) >= 0 && ee(t, n.to()) <= 0) return r;
          }
          return -1;
        });
      var Ci = function (t, e) {
        (this.anchor = t), (this.head = e);
      };
      function ki(t, e, r) {
        var n = t && t.options.selectionsMayTouch,
          i = e[r];
        e.sort(function (t, e) {
          return ee(t.from(), e.from());
        }),
          (r = z(e, i));
        for (var o = 1; o < e.length; o++) {
          var a = e[o],
            s = e[o - 1],
            l = ee(s.to(), a.from());
          if (n && !a.empty() ? l > 0 : l >= 0) {
            var u = oe(s.from(), a.from()),
              c = ie(s.to(), a.to()),
              f = s.empty() ? a.from() == a.head : s.from() == s.head;
            o <= r && --r, e.splice(--o, 2, new Ci(f ? c : u, f ? u : c));
          }
        }
        return new Si(e, r);
      }
      function Ti(t, e) {
        return new Si([new Ci(t, e || t)], 0);
      }
      function Ai(t) {
        return t.text
          ? te(
              t.from.line + t.text.length - 1,
              Y(t.text).length + (1 == t.text.length ? t.from.ch : 0)
            )
          : t.to;
      }
      function Li(t, e) {
        if (ee(t, e.from) < 0) return t;
        if (ee(t, e.to) <= 0) return Ai(e);
        var r = t.line + e.text.length - (e.to.line - e.from.line) - 1,
          n = t.ch;
        return t.line == e.to.line && (n += Ai(e).ch - e.to.ch), te(r, n);
      }
      function Oi(t, e) {
        for (var r = [], n = 0; n < t.sel.ranges.length; n++) {
          var i = t.sel.ranges[n];
          r.push(new Ci(Li(i.anchor, e), Li(i.head, e)));
        }
        return ki(t.cm, r, t.sel.primIndex);
      }
      function Mi(t, e, r) {
        return t.line == e.line
          ? te(r.line, t.ch - e.ch + r.ch)
          : te(r.line + (t.line - e.line), t.ch);
      }
      function Ei(t) {
        (t.doc.mode = Wt(t.options, t.doc.modeOption)), _i(t);
      }
      function _i(t) {
        t.doc.iter(function (t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }),
          (t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
          ni(t, 100),
          t.state.modeGen++,
          t.curOp && fn(t);
      }
      function Ni(t, e) {
        return (
          0 == e.from.ch &&
          0 == e.to.ch &&
          '' == Y(e.text) &&
          (!t.cm || t.cm.options.wholeLineUpdateBefore)
        );
      }
      function Ii(t, e, r, n) {
        function i(t) {
          return r ? r[t] : null;
        }
        function o(t, r, i) {
          !(function (t, e, r, n) {
            (t.text = e),
              t.stateAfter && (t.stateAfter = null),
              t.styles && (t.styles = null),
              null != t.order && (t.order = null),
              Oe(t),
              Me(t, r);
            var i = n ? n(t) : 1;
            i != t.height && Kt(t, i);
          })(t, r, i, n),
            sr(t, 'change', t, e);
        }
        function a(t, e) {
          for (var r = [], o = t; o < e; ++o) r.push(new qe(u[o], i(o), n));
          return r;
        }
        var s = e.from,
          l = e.to,
          u = e.text,
          c = qt(t, s.line),
          f = qt(t, l.line),
          h = Y(u),
          d = i(u.length - 1),
          p = l.line - s.line;
        if (e.full)
          t.insert(0, a(0, u.length)), t.remove(u.length, t.size - u.length);
        else if (Ni(t, e)) {
          var v = a(0, u.length - 1);
          o(f, f.text, d),
            p && t.remove(s.line, p),
            v.length && t.insert(s.line, v);
        } else if (c == f)
          if (1 == u.length)
            o(c, c.text.slice(0, s.ch) + h + c.text.slice(l.ch), d);
          else {
            var g = a(1, u.length - 1);
            g.push(new qe(h + c.text.slice(l.ch), d, n)),
              o(c, c.text.slice(0, s.ch) + u[0], i(0)),
              t.insert(s.line + 1, g);
          }
        else if (1 == u.length)
          o(c, c.text.slice(0, s.ch) + u[0] + f.text.slice(l.ch), i(0)),
            t.remove(s.line + 1, p);
        else {
          o(c, c.text.slice(0, s.ch) + u[0], i(0)),
            o(f, h + f.text.slice(l.ch), d);
          var m = a(1, u.length - 1);
          p > 1 && t.remove(s.line + 1, p - 1), t.insert(s.line + 1, m);
        }
        sr(t, 'change', t, e);
      }
      function ji(t, e, r) {
        !(function t(n, i, o) {
          if (n.linked)
            for (var a = 0; a < n.linked.length; ++a) {
              var s = n.linked[a];
              if (s.doc != i) {
                var l = o && s.sharedHist;
                (r && !l) || (e(s.doc, l), t(s.doc, n, l));
              }
            }
        })(t, null, !0);
      }
      function Pi(t, e) {
        if (e.cm) throw new Error('This document is already in use.');
        (t.doc = e),
          (e.cm = t),
          ln(t),
          Ei(t),
          Ri(t),
          t.options.lineWrapping || Ge(t),
          (t.options.mode = e.modeOption),
          fn(t);
      }
      function Ri(t) {
        ('rtl' == t.doc.direction ? I : A)(t.display.lineDiv, 'CodeMirror-rtl');
      }
      function Di(t) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = t || 1);
      }
      function Fi(t, e) {
        var r = { from: ne(e.from), to: Ai(e), text: $t(t, e.from, e.to) };
        return (
          Ui(t, r, e.from.line, e.to.line + 1),
          ji(
            t,
            function (t) {
              return Ui(t, r, e.from.line, e.to.line + 1);
            },
            !0
          ),
          r
        );
      }
      function Wi(t) {
        for (; t.length && Y(t).ranges; ) t.pop();
      }
      function zi(t, e, r, n) {
        var i = t.history;
        i.undone.length = 0;
        var o,
          a,
          s = +new Date();
        if (
          (i.lastOp == n ||
            (i.lastOrigin == e.origin &&
              e.origin &&
              (('+' == e.origin.charAt(0) &&
                i.lastModTime >
                  s - (t.cm ? t.cm.options.historyEventDelay : 500)) ||
                '*' == e.origin.charAt(0)))) &&
          (o = (function (t, e) {
            return e
              ? (Wi(t.done), Y(t.done))
              : t.done.length && !Y(t.done).ranges
              ? Y(t.done)
              : t.done.length > 1 && !t.done[t.done.length - 2].ranges
              ? (t.done.pop(), Y(t.done))
              : void 0;
          })(i, i.lastOp == n))
        )
          (a = Y(o.changes)),
            0 == ee(e.from, e.to) && 0 == ee(e.from, a.to)
              ? (a.to = Ai(e))
              : o.changes.push(Fi(t, e));
        else {
          var l = Y(i.done);
          for (
            (l && l.ranges) || Hi(t.sel, i.done),
              o = { changes: [Fi(t, e)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(r),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = s),
          (i.lastOp = i.lastSelOp = n),
          (i.lastOrigin = i.lastSelOrigin = e.origin),
          a || pt(t, 'historyAdded');
      }
      function Bi(t, e, r, n) {
        var i = t.history,
          o = n && n.origin;
        r == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function (t, e, r, n) {
              var i = e.charAt(0);
              return (
                '*' == i ||
                ('+' == i &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - t.history.lastSelTime <=
                    (t.cm ? t.cm.options.historyEventDelay : 500))
              );
            })(t, o, Y(i.done), e)))
          ? (i.done[i.done.length - 1] = e)
          : Hi(e, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = r),
          n && !1 !== n.clearRedo && Wi(i.undone);
      }
      function Hi(t, e) {
        var r = Y(e);
        (r && r.ranges && r.equals(t)) || e.push(t);
      }
      function Ui(t, e, r, n) {
        var i = e['spans_' + t.id],
          o = 0;
        t.iter(
          Math.max(t.first, r),
          Math.min(t.first + t.size, n),
          function (r) {
            r.markedSpans &&
              ((i || (i = e['spans_' + t.id] = {}))[o] = r.markedSpans),
              ++o;
          }
        );
      }
      function Vi(t) {
        if (!t) return null;
        for (var e, r = 0; r < t.length; ++r)
          t[r].marker.explicitlyCleared
            ? e || (e = t.slice(0, r))
            : e && e.push(t[r]);
        return e ? (e.length ? e : null) : t;
      }
      function Gi(t, e) {
        var r = (function (t, e) {
            var r = e['spans_' + t.id];
            if (!r) return null;
            for (var n = [], i = 0; i < e.text.length; ++i) n.push(Vi(r[i]));
            return n;
          })(t, e),
          n = Ae(t, e);
        if (!r) return n;
        if (!n) return r;
        for (var i = 0; i < r.length; ++i) {
          var o = r[i],
            a = n[i];
          if (o && a)
            t: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], u = 0; u < o.length; ++u)
                if (o[u].marker == l.marker) continue t;
              o.push(l);
            }
          else a && (r[i] = a);
        }
        return r;
      }
      function qi(t, e, r) {
        for (var n = [], i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.ranges) n.push(r ? Si.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              s = [];
            n.push({ changes: s });
            for (var l = 0; l < a.length; ++l) {
              var u = a[l],
                c = void 0;
              if ((s.push({ from: u.from, to: u.to, text: u.text }), e))
                for (var f in u)
                  (c = f.match(/^spans_(\d+)$/)) &&
                    z(e, Number(c[1])) > -1 &&
                    ((Y(s)[f] = u[f]), delete u[f]);
            }
          }
        }
        return n;
      }
      function $i(t, e, r, n) {
        if (n) {
          var i = t.anchor;
          if (r) {
            var o = ee(e, i) < 0;
            o != ee(r, i) < 0
              ? ((i = e), (e = r))
              : o != ee(e, r) < 0 && (e = r);
          }
          return new Ci(i, e);
        }
        return new Ci(r || e, e);
      }
      function Yi(t, e, r, n, i) {
        null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
          Qi(t, new Si([$i(t.sel.primary(), e, r, i)], 0), n);
      }
      function Ki(t, e, r) {
        for (
          var n = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0;
          o < t.sel.ranges.length;
          o++
        )
          n[o] = $i(t.sel.ranges[o], e[o], null, i);
        Qi(t, ki(t.cm, n, t.sel.primIndex), r);
      }
      function Xi(t, e, r, n) {
        var i = t.sel.ranges.slice(0);
        (i[e] = r), Qi(t, ki(t.cm, i, t.sel.primIndex), n);
      }
      function Ji(t, e, r, n) {
        Qi(t, Ti(e, r), n);
      }
      function Zi(t, e, r) {
        var n = t.history.done,
          i = Y(n);
        i && i.ranges ? ((n[n.length - 1] = e), to(t, e, r)) : Qi(t, e, r);
      }
      function Qi(t, e, r) {
        to(t, e, r), Bi(t, t.sel, t.cm ? t.cm.curOp.id : NaN, r);
      }
      function to(t, e, r) {
        (mt(t, 'beforeSelectionChange') ||
          (t.cm && mt(t.cm, 'beforeSelectionChange'))) &&
          (e = (function (t, e, r) {
            var n = {
              ranges: e.ranges,
              update: function (e) {
                this.ranges = [];
                for (var r = 0; r < e.length; r++)
                  this.ranges[r] = new Ci(se(t, e[r].anchor), se(t, e[r].head));
              },
              origin: r && r.origin,
            };
            return (
              pt(t, 'beforeSelectionChange', t, n),
              t.cm && pt(t.cm, 'beforeSelectionChange', t.cm, n),
              n.ranges != e.ranges ? ki(t.cm, n.ranges, n.ranges.length - 1) : e
            );
          })(t, e, r));
        var n =
          (r && r.bias) ||
          (ee(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
        eo(t, no(t, e, n, !0)), (r && !1 === r.scroll) || !t.cm || _n(t.cm);
      }
      function eo(t, e) {
        e.equals(t.sel) ||
          ((t.sel = e),
          t.cm &&
            ((t.cm.curOp.updateInput = 1),
            (t.cm.curOp.selectionChanged = !0),
            gt(t.cm)),
          sr(t, 'cursorActivity', t));
      }
      function ro(t) {
        eo(t, no(t, t.sel, null, !1));
      }
      function no(t, e, r, n) {
        for (var i, o = 0; o < e.ranges.length; o++) {
          var a = e.ranges[o],
            s = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
            l = oo(t, a.anchor, s && s.anchor, r, n),
            u = oo(t, a.head, s && s.head, r, n);
          (i || l != a.anchor || u != a.head) &&
            (i || (i = e.ranges.slice(0, o)), (i[o] = new Ci(l, u)));
        }
        return i ? ki(t.cm, i, e.primIndex) : e;
      }
      function io(t, e, r, n, i) {
        var o = qt(t, e.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var s = o.markedSpans[a],
              l = s.marker,
              u = 'selectLeft' in l ? !l.selectLeft : l.inclusiveLeft,
              c = 'selectRight' in l ? !l.selectRight : l.inclusiveRight;
            if (
              (null == s.from || (u ? s.from <= e.ch : s.from < e.ch)) &&
              (null == s.to || (c ? s.to >= e.ch : s.to > e.ch))
            ) {
              if (i && (pt(l, 'beforeCursorEnter'), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }
                break;
              }
              if (!l.atomic) continue;
              if (r) {
                var f = l.find(n < 0 ? 1 : -1),
                  h = void 0;
                if (
                  ((n < 0 ? c : u) &&
                    (f = ao(t, f, -n, f && f.line == e.line ? o : null)),
                  f &&
                    f.line == e.line &&
                    (h = ee(f, r)) &&
                    (n < 0 ? h < 0 : h > 0))
                )
                  return io(t, f, e, n, i);
              }
              var d = l.find(n < 0 ? -1 : 1);
              return (
                (n < 0 ? u : c) &&
                  (d = ao(t, d, n, d.line == e.line ? o : null)),
                d ? io(t, d, e, n, i) : null
              );
            }
          }
        return e;
      }
      function oo(t, e, r, n, i) {
        var o = n || 1,
          a =
            io(t, e, r, o, i) ||
            (!i && io(t, e, r, o, !0)) ||
            io(t, e, r, -o, i) ||
            (!i && io(t, e, r, -o, !0));
        return a || ((t.cantEdit = !0), te(t.first, 0));
      }
      function ao(t, e, r, n) {
        return r < 0 && 0 == e.ch
          ? e.line > t.first
            ? se(t, te(e.line - 1))
            : null
          : r > 0 && e.ch == (n || qt(t, e.line)).text.length
          ? e.line < t.first + t.size - 1
            ? te(e.line + 1, 0)
            : null
          : new te(e.line, e.ch + r);
      }
      function so(t) {
        t.setSelection(te(t.firstLine(), 0), te(t.lastLine()), H);
      }
      function lo(t, e, r) {
        var n = {
          canceled: !1,
          from: e.from,
          to: e.to,
          text: e.text,
          origin: e.origin,
          cancel: function () {
            return (n.canceled = !0);
          },
        };
        return (
          r &&
            (n.update = function (e, r, i, o) {
              e && (n.from = se(t, e)),
                r && (n.to = se(t, r)),
                i && (n.text = i),
                void 0 !== o && (n.origin = o);
            }),
          pt(t, 'beforeChange', t, n),
          t.cm && pt(t.cm, 'beforeChange', t.cm, n),
          n.canceled
            ? (t.cm && (t.cm.curOp.updateInput = 2), null)
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
      }
      function uo(t, e, r) {
        if (t.cm) {
          if (!t.cm.curOp) return ti(t.cm, uo)(t, e, r);
          if (t.cm.state.suppressEdits) return;
        }
        if (
          !(mt(t, 'beforeChange') || (t.cm && mt(t.cm, 'beforeChange'))) ||
          (e = lo(t, e, !0))
        ) {
          var n =
            xe &&
            !r &&
            (function (t, e, r) {
              var n = null;
              if (
                (t.iter(e.line, r.line + 1, function (t) {
                  if (t.markedSpans)
                    for (var e = 0; e < t.markedSpans.length; ++e) {
                      var r = t.markedSpans[e].marker;
                      !r.readOnly ||
                        (n && -1 != z(n, r)) ||
                        (n || (n = [])).push(r);
                    }
                }),
                !n)
              )
                return null;
              for (var i = [{ from: e, to: r }], o = 0; o < n.length; ++o)
                for (var a = n[o], s = a.find(0), l = 0; l < i.length; ++l) {
                  var u = i[l];
                  if (!(ee(u.to, s.from) < 0 || ee(u.from, s.to) > 0)) {
                    var c = [l, 1],
                      f = ee(u.from, s.from),
                      h = ee(u.to, s.to);
                    (f < 0 || (!a.inclusiveLeft && !f)) &&
                      c.push({ from: u.from, to: s.from }),
                      (h > 0 || (!a.inclusiveRight && !h)) &&
                        c.push({ from: s.to, to: u.to }),
                      i.splice.apply(i, c),
                      (l += c.length - 3);
                  }
                }
              return i;
            })(t, e.from, e.to);
          if (n)
            for (var i = n.length - 1; i >= 0; --i)
              co(t, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [''] : e.text,
                origin: e.origin,
              });
          else co(t, e);
        }
      }
      function co(t, e) {
        if (1 != e.text.length || '' != e.text[0] || 0 != ee(e.from, e.to)) {
          var r = Oi(t, e);
          zi(t, e, r, t.cm ? t.cm.curOp.id : NaN), po(t, e, r, Ae(t, e));
          var n = [];
          ji(t, function (t, r) {
            r || -1 != z(n, t.history) || (yo(t.history, e), n.push(t.history)),
              po(t, e, null, Ae(t, e));
          });
        }
      }
      function fo(t, e, r) {
        var n = t.cm && t.cm.state.suppressEdits;
        if (!n || r) {
          for (
            var i,
              o = t.history,
              a = t.sel,
              s = 'undo' == e ? o.done : o.undone,
              l = 'undo' == e ? o.undone : o.done,
              u = 0;
            u < s.length &&
            ((i = s[u]), r ? !i.ranges || i.equals(t.sel) : i.ranges);
            u++
          );
          if (u != s.length) {
            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
              if (!(i = s.pop()).ranges) {
                if (n) return void s.push(i);
                break;
              }
              if ((Hi(i, l), r && !i.equals(t.sel)))
                return void Qi(t, i, { clearRedo: !1 });
              a = i;
            }
            var c = [];
            Hi(a, l),
              l.push({ changes: c, generation: o.generation }),
              (o.generation = i.generation || ++o.maxGeneration);
            for (
              var f =
                  mt(t, 'beforeChange') || (t.cm && mt(t.cm, 'beforeChange')),
                h = function (r) {
                  var n = i.changes[r];
                  if (((n.origin = e), f && !lo(t, n, !1)))
                    return (s.length = 0), {};
                  c.push(Fi(t, n));
                  var o = r ? Oi(t, n) : Y(s);
                  po(t, n, o, Gi(t, n)),
                    !r &&
                      t.cm &&
                      t.cm.scrollIntoView({ from: n.from, to: Ai(n) });
                  var a = [];
                  ji(t, function (t, e) {
                    e ||
                      -1 != z(a, t.history) ||
                      (yo(t.history, n), a.push(t.history)),
                      po(t, n, null, Gi(t, n));
                  });
                },
                d = i.changes.length - 1;
              d >= 0;
              --d
            ) {
              var p = h(d);
              if (p) return p.v;
            }
          }
        }
      }
      function ho(t, e) {
        if (
          0 != e &&
          ((t.first += e),
          (t.sel = new Si(
            K(t.sel.ranges, function (t) {
              return new Ci(
                te(t.anchor.line + e, t.anchor.ch),
                te(t.head.line + e, t.head.ch)
              );
            }),
            t.sel.primIndex
          )),
          t.cm)
        ) {
          fn(t.cm, t.first, t.first - e, e);
          for (var r = t.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            hn(t.cm, n, 'gutter');
        }
      }
      function po(t, e, r, n) {
        if (t.cm && !t.cm.curOp) return ti(t.cm, po)(t, e, r, n);
        if (e.to.line < t.first)
          ho(t, e.text.length - 1 - (e.to.line - e.from.line));
        else if (!(e.from.line > t.lastLine())) {
          if (e.from.line < t.first) {
            var i = e.text.length - 1 - (t.first - e.from.line);
            ho(t, i),
              (e = {
                from: te(t.first, 0),
                to: te(e.to.line + i, e.to.ch),
                text: [Y(e.text)],
                origin: e.origin,
              });
          }
          var o = t.lastLine();
          e.to.line > o &&
            (e = {
              from: e.from,
              to: te(o, qt(t, o).text.length),
              text: [e.text[0]],
              origin: e.origin,
            }),
            (e.removed = $t(t, e.from, e.to)),
            r || (r = Oi(t, e)),
            t.cm
              ? (function (t, e, r) {
                  var n = t.doc,
                    i = t.display,
                    o = e.from,
                    a = e.to,
                    s = !1,
                    l = o.line;
                  t.options.lineWrapping ||
                    ((l = Xt(Fe(qt(n, o.line)))),
                    n.iter(l, a.line + 1, function (t) {
                      if (t == i.maxLine) return (s = !0), !0;
                    })),
                    n.sel.contains(e.from, e.to) > -1 && gt(t),
                    Ii(n, e, r, sn(t)),
                    t.options.lineWrapping ||
                      (n.iter(l, o.line + e.text.length, function (t) {
                        var e = Ve(t);
                        e > i.maxLineLength &&
                          ((i.maxLine = t),
                          (i.maxLineLength = e),
                          (i.maxLineChanged = !0),
                          (s = !1));
                      }),
                      s && (t.curOp.updateMaxLine = !0)),
                    (function (t, e) {
                      if (
                        ((t.modeFrontier = Math.min(t.modeFrontier, e)),
                        !(t.highlightFrontier < e - 10))
                      ) {
                        for (var r = t.first, n = e - 1; n > r; n--) {
                          var i = qt(t, n).stateAfter;
                          if (
                            i &&
                            (!(i instanceof ue) || n + i.lookAhead < e)
                          ) {
                            r = n + 1;
                            break;
                          }
                        }
                        t.highlightFrontier = Math.min(t.highlightFrontier, r);
                      }
                    })(n, o.line),
                    ni(t, 400);
                  var u = e.text.length - (a.line - o.line) - 1;
                  e.full
                    ? fn(t)
                    : o.line != a.line || 1 != e.text.length || Ni(t.doc, e)
                    ? fn(t, o.line, a.line + 1, u)
                    : hn(t, o.line, 'text');
                  var c = mt(t, 'changes'),
                    f = mt(t, 'change');
                  if (f || c) {
                    var h = {
                      from: o,
                      to: a,
                      text: e.text,
                      removed: e.removed,
                      origin: e.origin,
                    };
                    f && sr(t, 'change', t, h),
                      c &&
                        (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(
                          h
                        );
                  }
                  t.display.selForContextMenu = null;
                })(t.cm, e, n)
              : Ii(t, e, n),
            to(t, r, H),
            t.cantEdit && oo(t, te(t.firstLine(), 0)) && (t.cantEdit = !1);
        }
      }
      function vo(t, e, r, n, i) {
        var o;
        n || (n = r),
          ee(n, r) < 0 && ((r = (o = [n, r])[0]), (n = o[1])),
          'string' == typeof e && (e = t.splitLines(e)),
          uo(t, { from: r, to: n, text: e, origin: i });
      }
      function go(t, e, r, n) {
        r < t.line ? (t.line += n) : e < t.line && ((t.line = e), (t.ch = 0));
      }
      function mo(t, e, r, n) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
            for (var s = 0; s < o.ranges.length; s++)
              go(o.ranges[s].anchor, e, r, n), go(o.ranges[s].head, e, r, n);
          } else {
            for (var l = 0; l < o.changes.length; ++l) {
              var u = o.changes[l];
              if (r < u.from.line)
                (u.from = te(u.from.line + n, u.from.ch)),
                  (u.to = te(u.to.line + n, u.to.ch));
              else if (e <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (t.splice(0, i + 1), (i = 0));
          }
        }
      }
      function yo(t, e) {
        var r = e.from.line,
          n = e.to.line,
          i = e.text.length - (n - r) - 1;
        mo(t.done, r, n, i), mo(t.undone, r, n, i);
      }
      function bo(t, e, r, n) {
        var i = e,
          o = e;
        return (
          'number' == typeof e ? (o = qt(t, ae(t, e))) : (i = Xt(e)),
          null == i ? null : (n(o, i) && t.cm && hn(t.cm, i, r), o)
        );
      }
      function wo(t) {
        (this.lines = t), (this.parent = null);
        for (var e = 0, r = 0; r < t.length; ++r)
          (t[r].parent = this), (e += t[r].height);
        this.height = e;
      }
      function xo(t) {
        this.children = t;
        for (var e = 0, r = 0, n = 0; n < t.length; ++n) {
          var i = t[n];
          (e += i.chunkSize()), (r += i.height), (i.parent = this);
        }
        (this.size = e), (this.height = r), (this.parent = null);
      }
      (Ci.prototype.from = function () {
        return oe(this.anchor, this.head);
      }),
        (Ci.prototype.to = function () {
          return ie(this.anchor, this.head);
        }),
        (Ci.prototype.empty = function () {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (wo.prototype = {
          chunkSize: function () {
            return this.lines.length;
          },
          removeInner: function (t, e) {
            for (var r = t, n = t + e; r < n; ++r) {
              var i = this.lines[r];
              (this.height -= i.height), $e(i), sr(i, 'delete');
            }
            this.lines.splice(t, e);
          },
          collapse: function (t) {
            t.push.apply(t, this.lines);
          },
          insertInner: function (t, e, r) {
            (this.height += r),
              (this.lines = this.lines
                .slice(0, t)
                .concat(e)
                .concat(this.lines.slice(t)));
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
          },
          iterN: function (t, e, r) {
            for (var n = t + e; t < n; ++t) if (r(this.lines[t])) return !0;
          },
        }),
        (xo.prototype = {
          chunkSize: function () {
            return this.size;
          },
          removeInner: function (t, e) {
            this.size -= e;
            for (var r = 0; r < this.children.length; ++r) {
              var n = this.children[r],
                i = n.chunkSize();
              if (t < i) {
                var o = Math.min(e, i - t),
                  a = n.height;
                if (
                  (n.removeInner(t, o),
                  (this.height -= a - n.height),
                  i == o && (this.children.splice(r--, 1), (n.parent = null)),
                  0 == (e -= o))
                )
                  break;
                t = 0;
              } else t -= i;
            }
            if (
              this.size - e < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof wo))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new wo(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function (t) {
            for (var e = 0; e < this.children.length; ++e)
              this.children[e].collapse(t);
          },
          insertInner: function (t, e, r) {
            (this.size += e.length), (this.height += r);
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (t <= o) {
                if ((i.insertInner(t, e, r), i.lines && i.lines.length > 50)) {
                  for (
                    var a = (i.lines.length % 25) + 25, s = a;
                    s < i.lines.length;

                  ) {
                    var l = new wo(i.lines.slice(s, (s += 25)));
                    (i.height -= l.height),
                      this.children.splice(++n, 0, l),
                      (l.parent = this);
                  }
                  (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                }
                break;
              }
              t -= o;
            }
          },
          maybeSpill: function () {
            if (!(this.children.length <= 10)) {
              var t = this;
              do {
                var e = new xo(t.children.splice(t.children.length - 5, 5));
                if (t.parent) {
                  (t.size -= e.size), (t.height -= e.height);
                  var r = z(t.parent.children, t);
                  t.parent.children.splice(r + 1, 0, e);
                } else {
                  var n = new xo(t.children);
                  (n.parent = t), (t.children = [n, e]), (t = n);
                }
                e.parent = t.parent;
              } while (t.children.length > 10);
              t.parent.maybeSpill();
            }
          },
          iterN: function (t, e, r) {
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (t < o) {
                var a = Math.min(e, o - t);
                if (i.iterN(t, a, r)) return !0;
                if (0 == (e -= a)) break;
                t = 0;
              } else t -= o;
            }
          },
        });
      var So = function (t, e, r) {
        if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
        (this.doc = t), (this.node = e);
      };
      function Co(t, e, r) {
        Ue(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) && En(t, r);
      }
      (So.prototype.clear = function () {
        var t = this.doc.cm,
          e = this.line.widgets,
          r = this.line,
          n = Xt(r);
        if (null != n && e) {
          for (var i = 0; i < e.length; ++i) e[i] == this && e.splice(i--, 1);
          e.length || (r.widgets = null);
          var o = wr(this);
          Kt(r, Math.max(0, r.height - o)),
            t &&
              (Qn(t, function () {
                Co(t, r, -o), hn(t, n, 'widget');
              }),
              sr(t, 'lineWidgetCleared', t, this, n));
        }
      }),
        (So.prototype.changed = function () {
          var t = this,
            e = this.height,
            r = this.doc.cm,
            n = this.line;
          this.height = null;
          var i = wr(this) - e;
          i &&
            (Be(this.doc, n) || Kt(n, n.height + i),
            r &&
              Qn(r, function () {
                (r.curOp.forceUpdate = !0),
                  Co(r, n, i),
                  sr(r, 'lineWidgetChanged', r, t, Xt(n));
              }));
        }),
        yt(So);
      var ko = 0,
        To = function (t, e) {
          (this.lines = []), (this.type = e), (this.doc = t), (this.id = ++ko);
        };
      function Ao(t, e, r, n, i) {
        if (n && n.shared)
          return (function (t, e, r, n, i) {
            (n = D(n)).shared = !1;
            var o = [Ao(t, e, r, n, i)],
              a = o[0],
              s = n.widgetNode;
            return (
              ji(t, function (t) {
                s && (n.widgetNode = s.cloneNode(!0)),
                  o.push(Ao(t, se(t, e), se(t, r), n, i));
                for (var l = 0; l < t.linked.length; ++l)
                  if (t.linked[l].isParent) return;
                a = Y(o);
              }),
              new Lo(o, a)
            );
          })(t, e, r, n, i);
        if (t.cm && !t.cm.curOp) return ti(t.cm, Ao)(t, e, r, n, i);
        var o = new To(t, i),
          a = ee(e, r);
        if ((n && D(n, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
          return o;
        if (
          (o.replacedWith &&
            ((o.collapsed = !0),
            (o.widgetNode = E('span', [o.replacedWith], 'CodeMirror-widget')),
            n.handleMouseEvents ||
              o.widgetNode.setAttribute('cm-ignore-events', 'true'),
            n.insertLeft && (o.widgetNode.insertLeft = !0)),
          o.collapsed)
        ) {
          if (
            De(t, e.line, e, r, o) ||
            (e.line != r.line && De(t, r.line, e, r, o))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            );
          Se = !0;
        }
        o.addToHistory &&
          zi(t, { from: e, to: r, origin: 'markText' }, t.sel, NaN);
        var s,
          l = e.line,
          u = t.cm;
        if (
          (t.iter(l, r.line + 1, function (t) {
            u &&
              o.collapsed &&
              !u.options.lineWrapping &&
              Fe(t) == u.display.maxLine &&
              (s = !0),
              o.collapsed && l != e.line && Kt(t, 0),
              (function (t, e) {
                (t.markedSpans = t.markedSpans
                  ? t.markedSpans.concat([e])
                  : [e]),
                  e.marker.attachLine(t);
              })(
                t,
                new Ce(o, l == e.line ? e.ch : null, l == r.line ? r.ch : null)
              ),
              ++l;
          }),
          o.collapsed &&
            t.iter(e.line, r.line + 1, function (e) {
              Be(t, e) && Kt(e, 0);
            }),
          o.clearOnEnter &&
            ft(o, 'beforeCursorEnter', function () {
              return o.clear();
            }),
          o.readOnly &&
            ((xe = !0),
            (t.history.done.length || t.history.undone.length) &&
              t.clearHistory()),
          o.collapsed && ((o.id = ++ko), (o.atomic = !0)),
          u)
        ) {
          if ((s && (u.curOp.updateMaxLine = !0), o.collapsed))
            fn(u, e.line, r.line + 1);
          else if (
            o.className ||
            o.startStyle ||
            o.endStyle ||
            o.css ||
            o.attributes ||
            o.title
          )
            for (var c = e.line; c <= r.line; c++) hn(u, c, 'text');
          o.atomic && ro(u.doc), sr(u, 'markerAdded', u, o);
        }
        return o;
      }
      (To.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          var t = this.doc.cm,
            e = t && !t.curOp;
          if ((e && qn(t), mt(this, 'clear'))) {
            var r = this.find();
            r && sr(this, 'clear', r.from, r.to);
          }
          for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o],
              s = ke(a.markedSpans, this);
            t && !this.collapsed
              ? hn(t, Xt(a), 'text')
              : t &&
                (null != s.to && (i = Xt(a)), null != s.from && (n = Xt(a))),
              (a.markedSpans = Te(a.markedSpans, s)),
              null == s.from &&
                this.collapsed &&
                !Be(this.doc, a) &&
                t &&
                Kt(a, rn(t.display));
          }
          if (t && this.collapsed && !t.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var u = Fe(this.lines[l]),
                c = Ve(u);
              c > t.display.maxLineLength &&
                ((t.display.maxLine = u),
                (t.display.maxLineLength = c),
                (t.display.maxLineChanged = !0));
            }
          null != n && t && this.collapsed && fn(t, n, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), t && ro(t.doc)),
            t && sr(t, 'markerCleared', t, this, n, i),
            e && $n(t),
            this.parent && this.parent.clear();
        }
      }),
        (To.prototype.find = function (t, e) {
          var r, n;
          null == t && 'bookmark' == this.type && (t = 1);
          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
              a = ke(o.markedSpans, this);
            if (null != a.from && ((r = te(e ? o : Xt(o), a.from)), -1 == t))
              return r;
            if (null != a.to && ((n = te(e ? o : Xt(o), a.to)), 1 == t))
              return n;
          }
          return r && { from: r, to: n };
        }),
        (To.prototype.changed = function () {
          var t = this,
            e = this.find(-1, !0),
            r = this,
            n = this.doc.cm;
          e &&
            n &&
            Qn(n, function () {
              var i = e.line,
                o = Xt(e.line),
                a = Er(n, o);
              if (
                (a &&
                  (Dr(a),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !Be(r.doc, i) && null != r.height)
              ) {
                var s = r.height;
                r.height = null;
                var l = wr(r) - s;
                l && Kt(i, i.height + l);
              }
              sr(n, 'markerChanged', n, t);
            });
        }),
        (To.prototype.attachLine = function (t) {
          if (!this.lines.length && this.doc.cm) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers && -1 != z(e.maybeHiddenMarkers, this)) ||
              (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(t);
        }),
        (To.prototype.detachLine = function (t) {
          if (
            (this.lines.splice(z(this.lines, t), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this);
          }
        }),
        yt(To);
      var Lo = function (t, e) {
        (this.markers = t), (this.primary = e);
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      };
      function Oo(t) {
        return t.findMarks(
          te(t.first, 0),
          t.clipPos(te(t.lastLine())),
          function (t) {
            return t.parent;
          }
        );
      }
      function Mo(t) {
        for (
          var e = function (e) {
              var r = t[e],
                n = [r.primary.doc];
              ji(r.primary.doc, function (t) {
                return n.push(t);
              });
              for (var i = 0; i < r.markers.length; i++) {
                var o = r.markers[i];
                -1 == z(n, o.doc) &&
                  ((o.parent = null), r.markers.splice(i--, 1));
              }
            },
            r = 0;
          r < t.length;
          r++
        )
          e(r);
      }
      (Lo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var t = 0; t < this.markers.length; ++t) this.markers[t].clear();
          sr(this, 'clear');
        }
      }),
        (Lo.prototype.find = function (t, e) {
          return this.primary.find(t, e);
        }),
        yt(Lo);
      var Eo = 0,
        _o = function (t, e, r, n, i) {
          if (!(this instanceof _o)) return new _o(t, e, r, n, i);
          null == r && (r = 0),
            xo.call(this, [new wo([new qe('', null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r);
          var o = te(r, 0);
          (this.sel = Ti(o)),
            (this.history = new Di(null)),
            (this.id = ++Eo),
            (this.modeOption = e),
            (this.lineSep = n),
            (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof t && (t = this.splitLines(t)),
            Ii(this, { from: o, to: o, text: t }),
            Qi(this, Ti(o), H);
        };
      (_o.prototype = J(xo.prototype, {
        constructor: _o,
        iter: function (t, e, r) {
          r
            ? this.iterN(t - this.first, e - t, r)
            : this.iterN(this.first, this.first + this.size, t);
        },
        insert: function (t, e) {
          for (var r = 0, n = 0; n < e.length; ++n) r += e[n].height;
          this.insertInner(t - this.first, e, r);
        },
        remove: function (t, e) {
          this.removeInner(t - this.first, e);
        },
        getValue: function (t) {
          var e = Yt(this, this.first, this.first + this.size);
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        setValue: ri(function (t) {
          var e = te(this.first, 0),
            r = this.first + this.size - 1;
          uo(
            this,
            {
              from: e,
              to: te(r, qt(this, r).text.length),
              text: this.splitLines(t),
              origin: 'setValue',
              full: !0,
            },
            !0
          ),
            this.cm && Nn(this.cm, 0, 0),
            Qi(this, Ti(e), H);
        }),
        replaceRange: function (t, e, r, n) {
          vo(this, t, (e = se(this, e)), (r = r ? se(this, r) : e), n);
        },
        getRange: function (t, e, r) {
          var n = $t(this, se(this, t), se(this, e));
          return !1 === r ? n : n.join(r || this.lineSeparator());
        },
        getLine: function (t) {
          var e = this.getLineHandle(t);
          return e && e.text;
        },
        getLineHandle: function (t) {
          if (Zt(this, t)) return qt(this, t);
        },
        getLineNumber: function (t) {
          return Xt(t);
        },
        getLineHandleVisualStart: function (t) {
          return 'number' == typeof t && (t = qt(this, t)), Fe(t);
        },
        lineCount: function () {
          return this.size;
        },
        firstLine: function () {
          return this.first;
        },
        lastLine: function () {
          return this.first + this.size - 1;
        },
        clipPos: function (t) {
          return se(this, t);
        },
        getCursor: function (t) {
          var e = this.sel.primary();
          return null == t || 'head' == t
            ? e.head
            : 'anchor' == t
            ? e.anchor
            : 'end' == t || 'to' == t || !1 === t
            ? e.to()
            : e.from();
        },
        listSelections: function () {
          return this.sel.ranges;
        },
        somethingSelected: function () {
          return this.sel.somethingSelected();
        },
        setCursor: ri(function (t, e, r) {
          Ji(this, se(this, 'number' == typeof t ? te(t, e || 0) : t), null, r);
        }),
        setSelection: ri(function (t, e, r) {
          Ji(this, se(this, t), se(this, e || t), r);
        }),
        extendSelection: ri(function (t, e, r) {
          Yi(this, se(this, t), e && se(this, e), r);
        }),
        extendSelections: ri(function (t, e) {
          Ki(this, le(this, t), e);
        }),
        extendSelectionsBy: ri(function (t, e) {
          Ki(this, le(this, K(this.sel.ranges, t)), e);
        }),
        setSelections: ri(function (t, e, r) {
          if (t.length) {
            for (var n = [], i = 0; i < t.length; i++)
              n[i] = new Ci(se(this, t[i].anchor), se(this, t[i].head));
            null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
              Qi(this, ki(this.cm, n, e), r);
          }
        }),
        addSelection: ri(function (t, e, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new Ci(se(this, t), se(this, e || t))),
            Qi(this, ki(this.cm, n, n.length - 1), r);
        }),
        getSelection: function (t) {
          for (var e, r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = $t(this, r[n].from(), r[n].to());
            e = e ? e.concat(i) : i;
          }
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        getSelections: function (t) {
          for (var e = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = $t(this, r[n].from(), r[n].to());
            !1 !== t && (i = i.join(t || this.lineSeparator())), (e[n] = i);
          }
          return e;
        },
        replaceSelection: function (t, e, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = t;
          this.replaceSelections(n, e, r || '+input');
        },
        replaceSelections: ri(function (t, e, r) {
          for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            n[o] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(t[o]),
              origin: r,
            };
          }
          for (
            var s =
                e &&
                'end' != e &&
                (function (t, e, r) {
                  for (
                    var n = [], i = te(t.first, 0), o = i, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var s = e[a],
                      l = Mi(s.from, i, o),
                      u = Mi(Ai(s), i, o);
                    if (((i = s.to), (o = u), 'around' == r)) {
                      var c = t.sel.ranges[a],
                        f = ee(c.head, c.anchor) < 0;
                      n[a] = new Ci(f ? u : l, f ? l : u);
                    } else n[a] = new Ci(l, l);
                  }
                  return new Si(n, t.sel.primIndex);
                })(this, n, e),
              l = n.length - 1;
            l >= 0;
            l--
          )
            uo(this, n[l]);
          s ? Zi(this, s) : this.cm && _n(this.cm);
        }),
        undo: ri(function () {
          fo(this, 'undo');
        }),
        redo: ri(function () {
          fo(this, 'redo');
        }),
        undoSelection: ri(function () {
          fo(this, 'undo', !0);
        }),
        redoSelection: ri(function () {
          fo(this, 'redo', !0);
        }),
        setExtending: function (t) {
          this.extend = t;
        },
        getExtending: function () {
          return this.extend;
        },
        historySize: function () {
          for (
            var t = this.history, e = 0, r = 0, n = 0;
            n < t.done.length;
            n++
          )
            t.done[n].ranges || ++e;
          for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++r;
          return { undo: e, redo: r };
        },
        clearHistory: function () {
          var t = this;
          (this.history = new Di(this.history.maxGeneration)),
            ji(
              this,
              function (e) {
                return (e.history = t.history);
              },
              !0
            );
        },
        markClean: function () {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (t) {
          return (
            t &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          );
        },
        isClean: function (t) {
          return this.history.generation == (t || this.cleanGeneration);
        },
        getHistory: function () {
          return {
            done: qi(this.history.done),
            undone: qi(this.history.undone),
          };
        },
        setHistory: function (t) {
          var e = (this.history = new Di(this.history.maxGeneration));
          (e.done = qi(t.done.slice(0), null, !0)),
            (e.undone = qi(t.undone.slice(0), null, !0));
        },
        setGutterMarker: ri(function (t, e, r) {
          return bo(this, t, 'gutter', function (t) {
            var n = t.gutterMarkers || (t.gutterMarkers = {});
            return (n[e] = r), !r && et(n) && (t.gutterMarkers = null), !0;
          });
        }),
        clearGutter: ri(function (t) {
          var e = this;
          this.iter(function (r) {
            r.gutterMarkers &&
              r.gutterMarkers[t] &&
              bo(e, r, 'gutter', function () {
                return (
                  (r.gutterMarkers[t] = null),
                  et(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function (t) {
          var e;
          if ('number' == typeof t) {
            if (!Zt(this, t)) return null;
            if (((e = t), !(t = qt(this, t)))) return null;
          } else if (null == (e = Xt(t))) return null;
          return {
            line: e,
            handle: t,
            text: t.text,
            gutterMarkers: t.gutterMarkers,
            textClass: t.textClass,
            bgClass: t.bgClass,
            wrapClass: t.wrapClass,
            widgets: t.widgets,
          };
        },
        addLineClass: ri(function (t, e, r) {
          return bo(this, t, 'gutter' == e ? 'gutter' : 'class', function (t) {
            var n =
              'text' == e
                ? 'textClass'
                : 'background' == e
                ? 'bgClass'
                : 'gutter' == e
                ? 'gutterClass'
                : 'wrapClass';
            if (t[n]) {
              if (k(r).test(t[n])) return !1;
              t[n] += ' ' + r;
            } else t[n] = r;
            return !0;
          });
        }),
        removeLineClass: ri(function (t, e, r) {
          return bo(this, t, 'gutter' == e ? 'gutter' : 'class', function (t) {
            var n =
                'text' == e
                  ? 'textClass'
                  : 'background' == e
                  ? 'bgClass'
                  : 'gutter' == e
                  ? 'gutterClass'
                  : 'wrapClass',
              i = t[n];
            if (!i) return !1;
            if (null == r) t[n] = null;
            else {
              var o = i.match(k(r));
              if (!o) return !1;
              var a = o.index + o[0].length;
              t[n] =
                i.slice(0, o.index) +
                  (o.index && a != i.length ? ' ' : '') +
                  i.slice(a) || null;
            }
            return !0;
          });
        }),
        addLineWidget: ri(function (t, e, r) {
          return (function (t, e, r, n) {
            var i = new So(t, r, n),
              o = t.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              bo(t, e, 'widget', function (e) {
                var r = e.widgets || (e.widgets = []);
                if (
                  (null == i.insertAt
                    ? r.push(i)
                    : r.splice(
                        Math.min(r.length, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = e),
                  o && !Be(t, e))
                ) {
                  var n = Ue(e) < t.scrollTop;
                  Kt(e, e.height + wr(i)),
                    n && En(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              o &&
                sr(
                  o,
                  'lineWidgetAdded',
                  o,
                  i,
                  'number' == typeof e ? e : Xt(e)
                ),
              i
            );
          })(this, t, e, r);
        }),
        removeLineWidget: function (t) {
          t.clear();
        },
        markText: function (t, e, r) {
          return Ao(
            this,
            se(this, t),
            se(this, e),
            r,
            (r && r.type) || 'range'
          );
        },
        setBookmark: function (t, e) {
          var r = {
            replacedWith: e && (null == e.nodeType ? e.widget : e),
            insertLeft: e && e.insertLeft,
            clearWhenEmpty: !1,
            shared: e && e.shared,
            handleMouseEvents: e && e.handleMouseEvents,
          };
          return Ao(this, (t = se(this, t)), t, r, 'bookmark');
        },
        findMarksAt: function (t) {
          var e = [],
            r = qt(this, (t = se(this, t)).line).markedSpans;
          if (r)
            for (var n = 0; n < r.length; ++n) {
              var i = r[n];
              (null == i.from || i.from <= t.ch) &&
                (null == i.to || i.to >= t.ch) &&
                e.push(i.marker.parent || i.marker);
            }
          return e;
        },
        findMarks: function (t, e, r) {
          (t = se(this, t)), (e = se(this, e));
          var n = [],
            i = t.line;
          return (
            this.iter(t.line, e.line + 1, function (o) {
              var a = o.markedSpans;
              if (a)
                for (var s = 0; s < a.length; s++) {
                  var l = a[s];
                  (null != l.to && i == t.line && t.ch >= l.to) ||
                    (null == l.from && i != t.line) ||
                    (null != l.from && i == e.line && l.from >= e.ch) ||
                    (r && !r(l.marker)) ||
                    n.push(l.marker.parent || l.marker);
                }
              ++i;
            }),
            n
          );
        },
        getAllMarks: function () {
          var t = [];
          return (
            this.iter(function (e) {
              var r = e.markedSpans;
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && t.push(r[n].marker);
            }),
            t
          );
        },
        posFromIndex: function (t) {
          var e,
            r = this.first,
            n = this.lineSeparator().length;
          return (
            this.iter(function (i) {
              var o = i.text.length + n;
              if (o > t) return (e = t), !0;
              (t -= o), ++r;
            }),
            se(this, te(r, e))
          );
        },
        indexFromPos: function (t) {
          var e = (t = se(this, t)).ch;
          if (t.line < this.first || t.ch < 0) return 0;
          var r = this.lineSeparator().length;
          return (
            this.iter(this.first, t.line, function (t) {
              e += t.text.length + r;
            }),
            e
          );
        },
        copy: function (t) {
          var e = new _o(
            Yt(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (e.scrollTop = this.scrollTop),
            (e.scrollLeft = this.scrollLeft),
            (e.sel = this.sel),
            (e.extend = !1),
            t &&
              ((e.history.undoDepth = this.history.undoDepth),
              e.setHistory(this.getHistory())),
            e
          );
        },
        linkedDoc: function (t) {
          t || (t = {});
          var e = this.first,
            r = this.first + this.size;
          null != t.from && t.from > e && (e = t.from),
            null != t.to && t.to < r && (r = t.to);
          var n = new _o(
            Yt(this, e, r),
            t.mode || this.modeOption,
            e,
            this.lineSep,
            this.direction
          );
          return (
            t.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: t.sharedHist,
            }),
            (n.linked = [
              { doc: this, isParent: !0, sharedHist: t.sharedHist },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n.find(),
                  o = t.clipPos(i.from),
                  a = t.clipPos(i.to);
                if (ee(o, a)) {
                  var s = Ao(t, o, a, n.primary, n.primary.type);
                  n.markers.push(s), (s.parent = n);
                }
              }
            })(n, Oo(this)),
            n
          );
        },
        unlinkDoc: function (t) {
          if ((t instanceof La && (t = t.doc), this.linked))
            for (var e = 0; e < this.linked.length; ++e)
              if (this.linked[e].doc == t) {
                this.linked.splice(e, 1), t.unlinkDoc(this), Mo(Oo(this));
                break;
              }
          if (t.history == this.history) {
            var r = [t.id];
            ji(
              t,
              function (t) {
                return r.push(t.id);
              },
              !0
            ),
              (t.history = new Di(null)),
              (t.history.done = qi(this.history.done, r)),
              (t.history.undone = qi(this.history.undone, r));
          }
        },
        iterLinkedDocs: function (t) {
          ji(this, t);
        },
        getMode: function () {
          return this.mode;
        },
        getEditor: function () {
          return this.cm;
        },
        splitLines: function (t) {
          return this.lineSep ? t.split(this.lineSep) : _t(t);
        },
        lineSeparator: function () {
          return this.lineSep || '\n';
        },
        setDirection: ri(function (t) {
          var e;
          'rtl' != t && (t = 'ltr'),
            t != this.direction &&
              ((this.direction = t),
              this.iter(function (t) {
                return (t.order = null);
              }),
              this.cm &&
                Qn((e = this.cm), function () {
                  Ri(e), fn(e);
                }));
        }),
      })),
        (_o.prototype.eachLine = _o.prototype.iter);
      var No = 0;
      function Io(t) {
        var e = this;
        if ((jo(e), !vt(e, t) && !xr(e.display, t))) {
          bt(t), a && (No = +new Date());
          var r = un(e, t, !0),
            n = t.dataTransfer.files;
          if (r && !e.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var i = n.length,
                  o = Array(i),
                  s = 0,
                  l = function () {
                    ++s == i &&
                      ti(e, function () {
                        var t = {
                          from: (r = se(e.doc, r)),
                          to: r,
                          text: e.doc.splitLines(
                            o
                              .filter(function (t) {
                                return null != t;
                              })
                              .join(e.doc.lineSeparator())
                          ),
                          origin: 'paste',
                        };
                        uo(e.doc, t),
                          Zi(e.doc, Ti(se(e.doc, r), se(e.doc, Ai(t))));
                      })();
                  },
                  u = function (t, r) {
                    if (
                      e.options.allowDropFileTypes &&
                      -1 == z(e.options.allowDropFileTypes, t.type)
                    )
                      l();
                    else {
                      var n = new FileReader();
                      (n.onerror = function () {
                        return l();
                      }),
                        (n.onload = function () {
                          var t = n.result;
                          /[\x00-\x08\x0e-\x1f]{2}/.test(t) || (o[r] = t), l();
                        }),
                        n.readAsText(t);
                    }
                  },
                  c = 0;
                c < n.length;
                c++
              )
                u(n[c], c);
            else {
              if (e.state.draggingText && e.doc.sel.contains(r) > -1)
                return (
                  e.state.draggingText(t),
                  void setTimeout(function () {
                    return e.display.input.focus();
                  }, 20)
                );
              try {
                var f = t.dataTransfer.getData('Text');
                if (f) {
                  var h;
                  if (
                    (e.state.draggingText &&
                      !e.state.draggingText.copy &&
                      (h = e.listSelections()),
                    to(e.doc, Ti(r, r)),
                    h)
                  )
                    for (var d = 0; d < h.length; ++d)
                      vo(e.doc, '', h[d].anchor, h[d].head, 'drag');
                  e.replaceSelection(f, 'around', 'paste'),
                    e.display.input.focus();
                }
              } catch (t) {}
            }
        }
      }
      function jo(t) {
        t.display.dragCursor &&
          (t.display.lineSpace.removeChild(t.display.dragCursor),
          (t.display.dragCursor = null));
      }
      function Po(t) {
        if (document.getElementsByClassName) {
          for (
            var e = document.getElementsByClassName('CodeMirror'),
              r = [],
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n].CodeMirror;
            i && r.push(i);
          }
          r.length &&
            r[0].operation(function () {
              for (var e = 0; e < r.length; e++) t(r[e]);
            });
        }
      }
      var Ro = !1;
      function Do() {
        var t;
        Ro ||
          (ft(window, 'resize', function () {
            null == t &&
              (t = setTimeout(function () {
                (t = null), Po(Fo);
              }, 100));
          }),
          ft(window, 'blur', function () {
            return Po(Tn);
          }),
          (Ro = !0));
      }
      function Fo(t) {
        var e = t.display;
        (e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
          (e.scrollbarsClipped = !1),
          t.setSize();
      }
      for (
        var Wo = {
            3: 'Pause',
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Esc',
            32: 'Space',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            44: 'PrintScrn',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Mod',
            92: 'Mod',
            93: 'Mod',
            106: '*',
            107: '=',
            109: '-',
            110: '.',
            111: '/',
            145: 'ScrollLock',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            224: 'Mod',
            63232: 'Up',
            63233: 'Down',
            63234: 'Left',
            63235: 'Right',
            63272: 'Delete',
            63273: 'Home',
            63275: 'End',
            63276: 'PageUp',
            63277: 'PageDown',
            63302: 'Insert',
          },
          zo = 0;
        zo < 10;
        zo++
      )
        Wo[zo + 48] = Wo[zo + 96] = String(zo);
      for (var Bo = 65; Bo <= 90; Bo++) Wo[Bo] = String.fromCharCode(Bo);
      for (var Ho = 1; Ho <= 12; Ho++) Wo[Ho + 111] = Wo[Ho + 63235] = 'F' + Ho;
      var Uo = {};
      function Vo(t) {
        var e,
          r,
          n,
          i,
          o = t.split(/-(?!$)/);
        t = o[o.length - 1];
        for (var a = 0; a < o.length - 1; a++) {
          var s = o[a];
          if (/^(cmd|meta|m)$/i.test(s)) i = !0;
          else if (/^a(lt)?$/i.test(s)) e = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
          else {
            if (!/^s(hift)?$/i.test(s))
              throw new Error('Unrecognized modifier name: ' + s);
            n = !0;
          }
        }
        return (
          e && (t = 'Alt-' + t),
          r && (t = 'Ctrl-' + t),
          i && (t = 'Cmd-' + t),
          n && (t = 'Shift-' + t),
          t
        );
      }
      function Go(t) {
        var e = {};
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var n = t[r];
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
            if ('...' == n) {
              delete t[r];
              continue;
            }
            for (var i = K(r.split(' '), Vo), o = 0; o < i.length; o++) {
              var a = void 0,
                s = void 0;
              o == i.length - 1
                ? ((s = i.join(' ')), (a = n))
                : ((s = i.slice(0, o + 1).join(' ')), (a = '...'));
              var l = e[s];
              if (l) {
                if (l != a) throw new Error('Inconsistent bindings for ' + s);
              } else e[s] = a;
            }
            delete t[r];
          }
        for (var u in e) t[u] = e[u];
        return t;
      }
      function qo(t, e, r, n) {
        var i = (e = Xo(e)).call ? e.call(t, n) : e[t];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && r(i)) return 'handled';
        if (e.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(e.fallthrough))
            return qo(t, e.fallthrough, r, n);
          for (var o = 0; o < e.fallthrough.length; o++) {
            var a = qo(t, e.fallthrough[o], r, n);
            if (a) return a;
          }
        }
      }
      function $o(t) {
        var e = 'string' == typeof t ? t : Wo[t.keyCode];
        return 'Ctrl' == e || 'Alt' == e || 'Shift' == e || 'Mod' == e;
      }
      function Yo(t, e, r) {
        var n = t;
        return (
          e.altKey && 'Alt' != n && (t = 'Alt-' + t),
          (S ? e.metaKey : e.ctrlKey) && 'Ctrl' != n && (t = 'Ctrl-' + t),
          (S ? e.ctrlKey : e.metaKey) && 'Mod' != n && (t = 'Cmd-' + t),
          !r && e.shiftKey && 'Shift' != n && (t = 'Shift-' + t),
          t
        );
      }
      function Ko(t, e) {
        if (f && 34 == t.keyCode && t.char) return !1;
        var r = Wo[t.keyCode];
        return (
          null != r &&
          !t.altGraphKey &&
          (3 == t.keyCode && t.code && (r = t.code), Yo(r, t, e))
        );
      }
      function Xo(t) {
        return 'string' == typeof t ? Uo[t] : t;
      }
      function Jo(t, e) {
        for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
          for (var o = e(r[i]); n.length && ee(o.from, Y(n).to) <= 0; ) {
            var a = n.pop();
            if (ee(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          n.push(o);
        }
        Qn(t, function () {
          for (var e = n.length - 1; e >= 0; e--)
            vo(t.doc, '', n[e].from, n[e].to, '+delete');
          _n(t);
        });
      }
      function Zo(t, e, r) {
        var n = it(t.text, e + r, r);
        return n < 0 || n > t.text.length ? null : n;
      }
      function Qo(t, e, r) {
        var n = Zo(t, e.ch, r);
        return null == n ? null : new te(e.line, n, r < 0 ? 'after' : 'before');
      }
      function ta(t, e, r, n, i) {
        if (t) {
          'rtl' == e.doc.direction && (i = -i);
          var o = ut(r, e.doc.direction);
          if (o) {
            var a,
              s = i < 0 ? Y(o) : o[0],
              l = i < 0 == (1 == s.level) ? 'after' : 'before';
            if (s.level > 0 || 'rtl' == e.doc.direction) {
              var u = _r(e, r);
              a = i < 0 ? r.text.length - 1 : 0;
              var c = Nr(e, u, a).top;
              (a = ot(
                function (t) {
                  return Nr(e, u, t).top == c;
                },
                i < 0 == (1 == s.level) ? s.from : s.to - 1,
                a
              )),
                'before' == l && (a = Zo(r, a, 1));
            } else a = i < 0 ? s.to : s.from;
            return new te(n, a, l);
          }
        }
        return new te(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
      }
      (Uo.basic = {
        Left: 'goCharLeft',
        Right: 'goCharRight',
        Up: 'goLineUp',
        Down: 'goLineDown',
        End: 'goLineEnd',
        Home: 'goLineStartSmart',
        PageUp: 'goPageUp',
        PageDown: 'goPageDown',
        Delete: 'delCharAfter',
        Backspace: 'delCharBefore',
        'Shift-Backspace': 'delCharBefore',
        Tab: 'defaultTab',
        'Shift-Tab': 'indentAuto',
        Enter: 'newlineAndIndent',
        Insert: 'toggleOverwrite',
        Esc: 'singleSelection',
      }),
        (Uo.pcDefault = {
          'Ctrl-A': 'selectAll',
          'Ctrl-D': 'deleteLine',
          'Ctrl-Z': 'undo',
          'Shift-Ctrl-Z': 'redo',
          'Ctrl-Y': 'redo',
          'Ctrl-Home': 'goDocStart',
          'Ctrl-End': 'goDocEnd',
          'Ctrl-Up': 'goLineUp',
          'Ctrl-Down': 'goLineDown',
          'Ctrl-Left': 'goGroupLeft',
          'Ctrl-Right': 'goGroupRight',
          'Alt-Left': 'goLineStart',
          'Alt-Right': 'goLineEnd',
          'Ctrl-Backspace': 'delGroupBefore',
          'Ctrl-Delete': 'delGroupAfter',
          'Ctrl-S': 'save',
          'Ctrl-F': 'find',
          'Ctrl-G': 'findNext',
          'Shift-Ctrl-G': 'findPrev',
          'Shift-Ctrl-F': 'replace',
          'Shift-Ctrl-R': 'replaceAll',
          'Ctrl-[': 'indentLess',
          'Ctrl-]': 'indentMore',
          'Ctrl-U': 'undoSelection',
          'Shift-Ctrl-U': 'redoSelection',
          'Alt-U': 'redoSelection',
          fallthrough: 'basic',
        }),
        (Uo.emacsy = {
          'Ctrl-F': 'goCharRight',
          'Ctrl-B': 'goCharLeft',
          'Ctrl-P': 'goLineUp',
          'Ctrl-N': 'goLineDown',
          'Alt-F': 'goWordRight',
          'Alt-B': 'goWordLeft',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          'Ctrl-V': 'goPageDown',
          'Shift-Ctrl-V': 'goPageUp',
          'Ctrl-D': 'delCharAfter',
          'Ctrl-H': 'delCharBefore',
          'Alt-D': 'delWordAfter',
          'Alt-Backspace': 'delWordBefore',
          'Ctrl-K': 'killLine',
          'Ctrl-T': 'transposeChars',
          'Ctrl-O': 'openLine',
        }),
        (Uo.macDefault = {
          'Cmd-A': 'selectAll',
          'Cmd-D': 'deleteLine',
          'Cmd-Z': 'undo',
          'Shift-Cmd-Z': 'redo',
          'Cmd-Y': 'redo',
          'Cmd-Home': 'goDocStart',
          'Cmd-Up': 'goDocStart',
          'Cmd-End': 'goDocEnd',
          'Cmd-Down': 'goDocEnd',
          'Alt-Left': 'goGroupLeft',
          'Alt-Right': 'goGroupRight',
          'Cmd-Left': 'goLineLeft',
          'Cmd-Right': 'goLineRight',
          'Alt-Backspace': 'delGroupBefore',
          'Ctrl-Alt-Backspace': 'delGroupAfter',
          'Alt-Delete': 'delGroupAfter',
          'Cmd-S': 'save',
          'Cmd-F': 'find',
          'Cmd-G': 'findNext',
          'Shift-Cmd-G': 'findPrev',
          'Cmd-Alt-F': 'replace',
          'Shift-Cmd-Alt-F': 'replaceAll',
          'Cmd-[': 'indentLess',
          'Cmd-]': 'indentMore',
          'Cmd-Backspace': 'delWrappedLineLeft',
          'Cmd-Delete': 'delWrappedLineRight',
          'Cmd-U': 'undoSelection',
          'Shift-Cmd-U': 'redoSelection',
          'Ctrl-Up': 'goDocStart',
          'Ctrl-Down': 'goDocEnd',
          fallthrough: ['basic', 'emacsy'],
        }),
        (Uo.default = y ? Uo.macDefault : Uo.pcDefault);
      var ea = {
        selectAll: so,
        singleSelection: function (t) {
          return t.setSelection(t.getCursor('anchor'), t.getCursor('head'), H);
        },
        killLine: function (t) {
          return Jo(t, function (e) {
            if (e.empty()) {
              var r = qt(t.doc, e.head.line).text.length;
              return e.head.ch == r && e.head.line < t.lastLine()
                ? { from: e.head, to: te(e.head.line + 1, 0) }
                : { from: e.head, to: te(e.head.line, r) };
            }
            return { from: e.from(), to: e.to() };
          });
        },
        deleteLine: function (t) {
          return Jo(t, function (e) {
            return {
              from: te(e.from().line, 0),
              to: se(t.doc, te(e.to().line + 1, 0)),
            };
          });
        },
        delLineLeft: function (t) {
          return Jo(t, function (t) {
            return { from: te(t.from().line, 0), to: t.from() };
          });
        },
        delWrappedLineLeft: function (t) {
          return Jo(t, function (e) {
            var r = t.charCoords(e.head, 'div').top + 5;
            return {
              from: t.coordsChar({ left: 0, top: r }, 'div'),
              to: e.from(),
            };
          });
        },
        delWrappedLineRight: function (t) {
          return Jo(t, function (e) {
            var r = t.charCoords(e.head, 'div').top + 5,
              n = t.coordsChar(
                { left: t.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
            return { from: e.from(), to: n };
          });
        },
        undo: function (t) {
          return t.undo();
        },
        redo: function (t) {
          return t.redo();
        },
        undoSelection: function (t) {
          return t.undoSelection();
        },
        redoSelection: function (t) {
          return t.redoSelection();
        },
        goDocStart: function (t) {
          return t.extendSelection(te(t.firstLine(), 0));
        },
        goDocEnd: function (t) {
          return t.extendSelection(te(t.lastLine()));
        },
        goLineStart: function (t) {
          return t.extendSelectionsBy(
            function (e) {
              return ra(t, e.head.line);
            },
            { origin: '+move', bias: 1 }
          );
        },
        goLineStartSmart: function (t) {
          return t.extendSelectionsBy(
            function (e) {
              return na(t, e.head);
            },
            { origin: '+move', bias: 1 }
          );
        },
        goLineEnd: function (t) {
          return t.extendSelectionsBy(
            function (e) {
              return (function (t, e) {
                var r = qt(t.doc, e),
                  n = (function (t) {
                    for (var e; (e = Pe(t)); ) t = e.find(1, !0).line;
                    return t;
                  })(r);
                return n != r && (e = Xt(n)), ta(!0, t, r, e, -1);
              })(t, e.head.line);
            },
            { origin: '+move', bias: -1 }
          );
        },
        goLineRight: function (t) {
          return t.extendSelectionsBy(function (e) {
            var r = t.cursorCoords(e.head, 'div').top + 5;
            return t.coordsChar(
              { left: t.display.lineDiv.offsetWidth + 100, top: r },
              'div'
            );
          }, V);
        },
        goLineLeft: function (t) {
          return t.extendSelectionsBy(function (e) {
            var r = t.cursorCoords(e.head, 'div').top + 5;
            return t.coordsChar({ left: 0, top: r }, 'div');
          }, V);
        },
        goLineLeftSmart: function (t) {
          return t.extendSelectionsBy(function (e) {
            var r = t.cursorCoords(e.head, 'div').top + 5,
              n = t.coordsChar({ left: 0, top: r }, 'div');
            return n.ch < t.getLine(n.line).search(/\S/) ? na(t, e.head) : n;
          }, V);
        },
        goLineUp: function (t) {
          return t.moveV(-1, 'line');
        },
        goLineDown: function (t) {
          return t.moveV(1, 'line');
        },
        goPageUp: function (t) {
          return t.moveV(-1, 'page');
        },
        goPageDown: function (t) {
          return t.moveV(1, 'page');
        },
        goCharLeft: function (t) {
          return t.moveH(-1, 'char');
        },
        goCharRight: function (t) {
          return t.moveH(1, 'char');
        },
        goColumnLeft: function (t) {
          return t.moveH(-1, 'column');
        },
        goColumnRight: function (t) {
          return t.moveH(1, 'column');
        },
        goWordLeft: function (t) {
          return t.moveH(-1, 'word');
        },
        goGroupRight: function (t) {
          return t.moveH(1, 'group');
        },
        goGroupLeft: function (t) {
          return t.moveH(-1, 'group');
        },
        goWordRight: function (t) {
          return t.moveH(1, 'word');
        },
        delCharBefore: function (t) {
          return t.deleteH(-1, 'codepoint');
        },
        delCharAfter: function (t) {
          return t.deleteH(1, 'char');
        },
        delWordBefore: function (t) {
          return t.deleteH(-1, 'word');
        },
        delWordAfter: function (t) {
          return t.deleteH(1, 'word');
        },
        delGroupBefore: function (t) {
          return t.deleteH(-1, 'group');
        },
        delGroupAfter: function (t) {
          return t.deleteH(1, 'group');
        },
        indentAuto: function (t) {
          return t.indentSelection('smart');
        },
        indentMore: function (t) {
          return t.indentSelection('add');
        },
        indentLess: function (t) {
          return t.indentSelection('subtract');
        },
        insertTab: function (t) {
          return t.replaceSelection('\t');
        },
        insertSoftTab: function (t) {
          for (
            var e = [], r = t.listSelections(), n = t.options.tabSize, i = 0;
            i < r.length;
            i++
          ) {
            var o = r[i].from(),
              a = F(t.getLine(o.line), o.ch, n);
            e.push($(n - (a % n)));
          }
          t.replaceSelections(e);
        },
        defaultTab: function (t) {
          t.somethingSelected()
            ? t.indentSelection('add')
            : t.execCommand('insertTab');
        },
        transposeChars: function (t) {
          return Qn(t, function () {
            for (var e = t.listSelections(), r = [], n = 0; n < e.length; n++)
              if (e[n].empty()) {
                var i = e[n].head,
                  o = qt(t.doc, i.line).text;
                if (o)
                  if (
                    (i.ch == o.length && (i = new te(i.line, i.ch - 1)),
                    i.ch > 0)
                  )
                    (i = new te(i.line, i.ch + 1)),
                      t.replaceRange(
                        o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                        te(i.line, i.ch - 2),
                        i,
                        '+transpose'
                      );
                  else if (i.line > t.doc.first) {
                    var a = qt(t.doc, i.line - 1).text;
                    a &&
                      ((i = new te(i.line, 1)),
                      t.replaceRange(
                        o.charAt(0) +
                          t.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        te(i.line - 1, a.length - 1),
                        i,
                        '+transpose'
                      ));
                  }
                r.push(new Ci(i, i));
              }
            t.setSelections(r);
          });
        },
        newlineAndIndent: function (t) {
          return Qn(t, function () {
            for (var e = t.listSelections(), r = e.length - 1; r >= 0; r--)
              t.replaceRange(
                t.doc.lineSeparator(),
                e[r].anchor,
                e[r].head,
                '+input'
              );
            e = t.listSelections();
            for (var n = 0; n < e.length; n++)
              t.indentLine(e[n].from().line, null, !0);
            _n(t);
          });
        },
        openLine: function (t) {
          return t.replaceSelection('\n', 'start');
        },
        toggleOverwrite: function (t) {
          return t.toggleOverwrite();
        },
      };
      function ra(t, e) {
        var r = qt(t.doc, e),
          n = Fe(r);
        return n != r && (e = Xt(n)), ta(!0, t, n, e, 1);
      }
      function na(t, e) {
        var r = ra(t, e.line),
          n = qt(t.doc, r.line),
          i = ut(n, t.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(r.ch, n.text.search(/\S/)),
            a = e.line == r.line && e.ch <= o && e.ch;
          return te(r.line, a ? 0 : o, r.sticky);
        }
        return r;
      }
      function ia(t, e, r) {
        if ('string' == typeof e && !(e = ea[e])) return !1;
        t.display.input.ensurePolled();
        var n = t.display.shift,
          i = !1;
        try {
          t.isReadOnly() && (t.state.suppressEdits = !0),
            r && (t.display.shift = !1),
            (i = e(t) != B);
        } finally {
          (t.display.shift = n), (t.state.suppressEdits = !1);
        }
        return i;
      }
      var oa = new W();
      function aa(t, e, r, n) {
        var i = t.state.keySeq;
        if (i) {
          if ($o(e)) return 'handled';
          if (
            (/\'$/.test(e)
              ? (t.state.keySeq = null)
              : oa.set(50, function () {
                  t.state.keySeq == i &&
                    ((t.state.keySeq = null), t.display.input.reset());
                }),
            sa(t, i + ' ' + e, r, n))
          )
            return !0;
        }
        return sa(t, e, r, n);
      }
      function sa(t, e, r, n) {
        var i = (function (t, e, r) {
          for (var n = 0; n < t.state.keyMaps.length; n++) {
            var i = qo(e, t.state.keyMaps[n], r, t);
            if (i) return i;
          }
          return (
            (t.options.extraKeys && qo(e, t.options.extraKeys, r, t)) ||
            qo(e, t.options.keyMap, r, t)
          );
        })(t, e, n);
        return (
          'multi' == i && (t.state.keySeq = e),
          'handled' == i && sr(t, 'keyHandled', t, e, r),
          ('handled' != i && 'multi' != i) || (bt(r), xn(t)),
          !!i
        );
      }
      function la(t, e) {
        var r = Ko(e, !0);
        return (
          !!r &&
          (e.shiftKey && !t.state.keySeq
            ? aa(t, 'Shift-' + r, e, function (e) {
                return ia(t, e, !0);
              }) ||
              aa(t, r, e, function (e) {
                if ('string' == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                  return ia(t, e);
              })
            : aa(t, r, e, function (e) {
                return ia(t, e);
              }))
        );
      }
      var ua = null;
      function ca(t) {
        var e = this;
        if (
          !(
            (t.target && t.target != e.display.input.getField()) ||
            ((e.curOp.focus = N()), vt(e, t))
          )
        ) {
          a && s < 11 && 27 == t.keyCode && (t.returnValue = !1);
          var n = t.keyCode;
          e.display.shift = 16 == n || t.shiftKey;
          var i = la(e, t);
          f &&
            ((ua = i ? n : null),
            i ||
              88 != n ||
              It ||
              !(y ? t.metaKey : t.ctrlKey) ||
              e.replaceSelection('', null, 'cut')),
            r &&
              !y &&
              !i &&
              46 == n &&
              t.shiftKey &&
              !t.ctrlKey &&
              document.execCommand &&
              document.execCommand('cut'),
            18 != n ||
              /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
              (function (t) {
                var e = t.display.lineDiv;
                function r(t) {
                  (18 != t.keyCode && t.altKey) ||
                    (A(e, 'CodeMirror-crosshair'),
                    dt(document, 'keyup', r),
                    dt(document, 'mouseover', r));
                }
                I(e, 'CodeMirror-crosshair'),
                  ft(document, 'keyup', r),
                  ft(document, 'mouseover', r);
              })(e);
        }
      }
      function fa(t) {
        16 == t.keyCode && (this.doc.sel.shift = !1), vt(this, t);
      }
      function ha(t) {
        var e = this;
        if (
          !(
            (t.target && t.target != e.display.input.getField()) ||
            xr(e.display, t) ||
            vt(e, t) ||
            (t.ctrlKey && !t.altKey) ||
            (y && t.metaKey)
          )
        ) {
          var r = t.keyCode,
            n = t.charCode;
          if (f && r == ua) return (ua = null), void bt(t);
          if (!f || (t.which && !(t.which < 10)) || !la(e, t)) {
            var i = String.fromCharCode(null == n ? r : n);
            '\b' != i &&
              ((function (t, e, r) {
                return aa(t, "'" + r + "'", e, function (e) {
                  return ia(t, e, !0);
                });
              })(e, t, i) ||
                e.display.input.onKeyPress(t));
          }
        }
      }
      var da,
        pa,
        va = function (t, e, r) {
          (this.time = t), (this.pos = e), (this.button = r);
        };
      function ga(t) {
        var e = this,
          r = e.display;
        if (!(vt(e, t) || (r.activeTouch && r.input.supportsTouch())))
          if ((r.input.ensurePolled(), (r.shift = t.shiftKey), xr(r, t)))
            l ||
              ((r.scroller.draggable = !1),
              setTimeout(function () {
                return (r.scroller.draggable = !0);
              }, 100));
          else if (!ba(e, t)) {
            var n = un(e, t),
              i = kt(t),
              o = n
                ? (function (t, e) {
                    var r = +new Date();
                    return pa && pa.compare(r, t, e)
                      ? ((da = pa = null), 'triple')
                      : da && da.compare(r, t, e)
                      ? ((pa = new va(r, t, e)), (da = null), 'double')
                      : ((da = new va(r, t, e)), (pa = null), 'single');
                  })(n, i)
                : 'single';
            window.focus(),
              1 == i && e.state.selectingText && e.state.selectingText(t),
              (n &&
                (function (t, e, r, n, i) {
                  var o = 'Click';
                  return (
                    'double' == n
                      ? (o = 'Double' + o)
                      : 'triple' == n && (o = 'Triple' + o),
                    aa(
                      t,
                      Yo(
                        (o =
                          (1 == e ? 'Left' : 2 == e ? 'Middle' : 'Right') + o),
                        i
                      ),
                      i,
                      function (e) {
                        if (('string' == typeof e && (e = ea[e]), !e))
                          return !1;
                        var n = !1;
                        try {
                          t.isReadOnly() && (t.state.suppressEdits = !0),
                            (n = e(t, r) != B);
                        } finally {
                          t.state.suppressEdits = !1;
                        }
                        return n;
                      }
                    )
                  );
                })(e, i, n, o, t)) ||
                (1 == i
                  ? n
                    ? (function (t, e, r, n) {
                        a ? setTimeout(R(Sn, t), 0) : (t.curOp.focus = N());
                        var i,
                          o = (function (t, e, r) {
                            var n = t.getOption('configureMouse'),
                              i = n ? n(t, e, r) : {};
                            if (null == i.unit) {
                              var o = b ? r.shiftKey && r.metaKey : r.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == e
                                ? 'char'
                                : 'double' == e
                                ? 'word'
                                : 'line';
                            }
                            return (
                              (null == i.extend || t.doc.extend) &&
                                (i.extend = t.doc.extend || r.shiftKey),
                              null == i.addNew &&
                                (i.addNew = y ? r.metaKey : r.ctrlKey),
                              null == i.moveOnDrag &&
                                (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)),
                              i
                            );
                          })(t, r, n),
                          u = t.doc.sel;
                        t.options.dragDrop &&
                        Lt &&
                        !t.isReadOnly() &&
                        'single' == r &&
                        (i = u.contains(e)) > -1 &&
                        (ee((i = u.ranges[i]).from(), e) < 0 || e.xRel > 0) &&
                        (ee(i.to(), e) > 0 || e.xRel < 0)
                          ? (function (t, e, r, n) {
                              var i = t.display,
                                o = !1,
                                u = ti(t, function (e) {
                                  l && (i.scroller.draggable = !1),
                                    (t.state.draggingText = !1),
                                    t.state.delayingBlurEvent &&
                                      (t.hasFocus()
                                        ? (t.state.delayingBlurEvent = !1)
                                        : Cn(t)),
                                    dt(i.wrapper.ownerDocument, 'mouseup', u),
                                    dt(i.wrapper.ownerDocument, 'mousemove', c),
                                    dt(i.scroller, 'dragstart', f),
                                    dt(i.scroller, 'drop', u),
                                    o ||
                                      (bt(e),
                                      n.addNew ||
                                        Yi(t.doc, r, null, null, n.extend),
                                      (l && !h) || (a && 9 == s)
                                        ? setTimeout(function () {
                                            i.wrapper.ownerDocument.body.focus({
                                              preventScroll: !0,
                                            }),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                c = function (t) {
                                  o =
                                    o ||
                                    Math.abs(e.clientX - t.clientX) +
                                      Math.abs(e.clientY - t.clientY) >=
                                      10;
                                },
                                f = function () {
                                  return (o = !0);
                                };
                              l && (i.scroller.draggable = !0),
                                (t.state.draggingText = u),
                                (u.copy = !n.moveOnDrag),
                                ft(i.wrapper.ownerDocument, 'mouseup', u),
                                ft(i.wrapper.ownerDocument, 'mousemove', c),
                                ft(i.scroller, 'dragstart', f),
                                ft(i.scroller, 'drop', u),
                                (t.state.delayingBlurEvent = !0),
                                setTimeout(function () {
                                  return i.input.focus();
                                }, 20),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                            })(t, n, e, o)
                          : (function (t, e, r, n) {
                              a && Cn(t);
                              var i = t.display,
                                o = t.doc;
                              bt(e);
                              var s,
                                l,
                                u = o.sel,
                                c = u.ranges;
                              if (
                                (n.addNew && !n.extend
                                  ? ((l = o.sel.contains(r)),
                                    (s = l > -1 ? c[l] : new Ci(r, r)))
                                  : ((s = o.sel.primary()),
                                    (l = o.sel.primIndex)),
                                'rectangle' == n.unit)
                              )
                                n.addNew || (s = new Ci(r, r)),
                                  (r = un(t, e, !0, !0)),
                                  (l = -1);
                              else {
                                var f = ma(t, r, n.unit);
                                s = n.extend
                                  ? $i(s, f.anchor, f.head, n.extend)
                                  : f;
                              }
                              n.addNew
                                ? -1 == l
                                  ? ((l = c.length),
                                    Qi(o, ki(t, c.concat([s]), l), {
                                      scroll: !1,
                                      origin: '*mouse',
                                    }))
                                  : c.length > 1 &&
                                    c[l].empty() &&
                                    'char' == n.unit &&
                                    !n.extend
                                  ? (Qi(
                                      o,
                                      ki(
                                        t,
                                        c.slice(0, l).concat(c.slice(l + 1)),
                                        0
                                      ),
                                      { scroll: !1, origin: '*mouse' }
                                    ),
                                    (u = o.sel))
                                  : Xi(o, l, s, U)
                                : ((l = 0),
                                  Qi(o, new Si([s], 0), U),
                                  (u = o.sel));
                              var h = r;
                              function d(e) {
                                if (0 != ee(h, e))
                                  if (((h = e), 'rectangle' == n.unit)) {
                                    for (
                                      var i = [],
                                        a = t.options.tabSize,
                                        c = F(qt(o, r.line).text, r.ch, a),
                                        f = F(qt(o, e.line).text, e.ch, a),
                                        d = Math.min(c, f),
                                        p = Math.max(c, f),
                                        v = Math.min(r.line, e.line),
                                        g = Math.min(
                                          t.lastLine(),
                                          Math.max(r.line, e.line)
                                        );
                                      v <= g;
                                      v++
                                    ) {
                                      var m = qt(o, v).text,
                                        y = G(m, d, a);
                                      d == p
                                        ? i.push(new Ci(te(v, y), te(v, y)))
                                        : m.length > y &&
                                          i.push(
                                            new Ci(te(v, y), te(v, G(m, p, a)))
                                          );
                                    }
                                    i.length || i.push(new Ci(r, r)),
                                      Qi(
                                        o,
                                        ki(
                                          t,
                                          u.ranges.slice(0, l).concat(i),
                                          l
                                        ),
                                        { origin: '*mouse', scroll: !1 }
                                      ),
                                      t.scrollIntoView(e);
                                  } else {
                                    var b,
                                      w = s,
                                      x = ma(t, e, n.unit),
                                      S = w.anchor;
                                    ee(x.anchor, S) > 0
                                      ? ((b = x.head),
                                        (S = oe(w.from(), x.anchor)))
                                      : ((b = x.anchor),
                                        (S = ie(w.to(), x.head)));
                                    var C = u.ranges.slice(0);
                                    (C[l] = (function (t, e) {
                                      var r = e.anchor,
                                        n = e.head,
                                        i = qt(t.doc, r.line);
                                      if (0 == ee(r, n) && r.sticky == n.sticky)
                                        return e;
                                      var o = ut(i);
                                      if (!o) return e;
                                      var a = st(o, r.ch, r.sticky),
                                        s = o[a];
                                      if (s.from != r.ch && s.to != r.ch)
                                        return e;
                                      var l,
                                        u =
                                          a +
                                          ((s.from == r.ch) == (1 != s.level)
                                            ? 0
                                            : 1);
                                      if (0 == u || u == o.length) return e;
                                      if (n.line != r.line)
                                        l =
                                          (n.line - r.line) *
                                            ('ltr' == t.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var c = st(o, n.ch, n.sticky),
                                          f =
                                            c - a ||
                                            (n.ch - r.ch) *
                                              (1 == s.level ? -1 : 1);
                                        l =
                                          c == u - 1 || c == u ? f < 0 : f > 0;
                                      }
                                      var h = o[u + (l ? -1 : 0)],
                                        d = l == (1 == h.level),
                                        p = d ? h.from : h.to,
                                        v = d ? 'after' : 'before';
                                      return r.ch == p && r.sticky == v
                                        ? e
                                        : new Ci(new te(r.line, p, v), n);
                                    })(t, new Ci(se(o, S), b))),
                                      Qi(o, ki(t, C, l), U);
                                  }
                              }
                              var p = i.wrapper.getBoundingClientRect(),
                                v = 0;
                              function g(e) {
                                (t.state.selectingText = !1),
                                  (v = 1 / 0),
                                  e && (bt(e), i.input.focus()),
                                  dt(i.wrapper.ownerDocument, 'mousemove', m),
                                  dt(i.wrapper.ownerDocument, 'mouseup', y),
                                  (o.history.lastSelOrigin = null);
                              }
                              var m = ti(t, function (e) {
                                  0 !== e.buttons && kt(e)
                                    ? (function e(r) {
                                        var a = ++v,
                                          s = un(
                                            t,
                                            r,
                                            !0,
                                            'rectangle' == n.unit
                                          );
                                        if (s)
                                          if (0 != ee(s, h)) {
                                            (t.curOp.focus = N()), d(s);
                                            var l = On(i, o);
                                            (s.line >= l.to ||
                                              s.line < l.from) &&
                                              setTimeout(
                                                ti(t, function () {
                                                  v == a && e(r);
                                                }),
                                                150
                                              );
                                          } else {
                                            var u =
                                              r.clientY < p.top
                                                ? -20
                                                : r.clientY > p.bottom
                                                ? 20
                                                : 0;
                                            u &&
                                              setTimeout(
                                                ti(t, function () {
                                                  v == a &&
                                                    ((i.scroller.scrollTop += u),
                                                    e(r));
                                                }),
                                                50
                                              );
                                          }
                                      })(e)
                                    : g(e);
                                }),
                                y = ti(t, g);
                              (t.state.selectingText = y),
                                ft(i.wrapper.ownerDocument, 'mousemove', m),
                                ft(i.wrapper.ownerDocument, 'mouseup', y);
                            })(t, n, e, o);
                      })(e, n, o, t)
                    : Ct(t) == r.scroller && bt(t)
                  : 2 == i
                  ? (n && Yi(e.doc, n),
                    setTimeout(function () {
                      return r.input.focus();
                    }, 20))
                  : 3 == i && (C ? e.display.input.onContextMenu(t) : Cn(e)));
          }
      }
      function ma(t, e, r) {
        if ('char' == r) return new Ci(e, e);
        if ('word' == r) return t.findWordAt(e);
        if ('line' == r)
          return new Ci(te(e.line, 0), se(t.doc, te(e.line + 1, 0)));
        var n = r(t, e);
        return new Ci(n.from, n.to);
      }
      function ya(t, e, r, n) {
        var i, o;
        if (e.touches) (i = e.touches[0].clientX), (o = e.touches[0].clientY);
        else
          try {
            (i = e.clientX), (o = e.clientY);
          } catch (t) {
            return !1;
          }
        if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right))
          return !1;
        n && bt(e);
        var a = t.display,
          s = a.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !mt(t, r)) return xt(e);
        o -= s.top - a.viewOffset;
        for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
          var u = a.gutters.childNodes[l];
          if (u && u.getBoundingClientRect().right >= i)
            return (
              pt(t, r, t, Jt(t.doc, o), t.display.gutterSpecs[l].className, e),
              xt(e)
            );
        }
      }
      function ba(t, e) {
        return ya(t, e, 'gutterClick', !0);
      }
      function wa(t, e) {
        xr(t.display, e) ||
          (function (t, e) {
            return (
              !!mt(t, 'gutterContextMenu') && ya(t, e, 'gutterContextMenu', !1)
            );
          })(t, e) ||
          vt(t, e, 'contextmenu') ||
          C ||
          t.display.input.onContextMenu(e);
      }
      function xa(t) {
        (t.display.wrapper.className =
          t.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          t.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          Wr(t);
      }
      va.prototype.compare = function (t, e, r) {
        return this.time + 400 > t && 0 == ee(e, this.pos) && r == this.button;
      };
      var Sa = {
          toString: function () {
            return 'CodeMirror.Init';
          },
        },
        Ca = {},
        ka = {};
      function Ta(t, e, r) {
        if (!e != !(r && r != Sa)) {
          var n = t.display.dragFunctions,
            i = e ? ft : dt;
          i(t.display.scroller, 'dragstart', n.start),
            i(t.display.scroller, 'dragenter', n.enter),
            i(t.display.scroller, 'dragover', n.over),
            i(t.display.scroller, 'dragleave', n.leave),
            i(t.display.scroller, 'drop', n.drop);
        }
      }
      function Aa(t) {
        t.options.lineWrapping
          ? (I(t.display.wrapper, 'CodeMirror-wrap'),
            (t.display.sizer.style.minWidth = ''),
            (t.display.sizerWidth = null))
          : (A(t.display.wrapper, 'CodeMirror-wrap'), Ge(t)),
          ln(t),
          fn(t),
          Wr(t),
          setTimeout(function () {
            return Bn(t);
          }, 100);
      }
      function La(t, e) {
        var r = this;
        if (!(this instanceof La)) return new La(t, e);
        (this.options = e = e ? D(e) : {}), D(Ca, e, !1);
        var n = e.value;
        'string' == typeof n
          ? (n = new _o(n, e.mode, null, e.lineSeparator, e.direction))
          : e.mode && (n.modeOption = e.mode),
          (this.doc = n);
        var i = new La.inputStyles[e.inputStyle](this),
          o = (this.display = new gi(t, n, i, e));
        for (var u in ((o.wrapper.CodeMirror = this),
        xa(this),
        e.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        Vn(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new W(),
          keySeq: null,
          specialChars: null,
        }),
        e.autofocus && !m && o.input.focus(),
        a &&
          s < 11 &&
          setTimeout(function () {
            return r.display.input.reset(!0);
          }, 20),
        (function (t) {
          var e = t.display;
          ft(e.scroller, 'mousedown', ti(t, ga)),
            ft(
              e.scroller,
              'dblclick',
              a && s < 11
                ? ti(t, function (e) {
                    if (!vt(t, e)) {
                      var r = un(t, e);
                      if (r && !ba(t, e) && !xr(t.display, e)) {
                        bt(e);
                        var n = t.findWordAt(r);
                        Yi(t.doc, n.anchor, n.head);
                      }
                    }
                  })
                : function (e) {
                    return vt(t, e) || bt(e);
                  }
            ),
            ft(e.scroller, 'contextmenu', function (e) {
              return wa(t, e);
            }),
            ft(e.input.getField(), 'contextmenu', function (r) {
              e.scroller.contains(r.target) || wa(t, r);
            });
          var r,
            n = { end: 0 };
          function i() {
            e.activeTouch &&
              ((r = setTimeout(function () {
                return (e.activeTouch = null);
              }, 1e3)),
              ((n = e.activeTouch).end = +new Date()));
          }
          function o(t, e) {
            if (null == e.left) return !0;
            var r = e.left - t.left,
              n = e.top - t.top;
            return r * r + n * n > 400;
          }
          ft(e.scroller, 'touchstart', function (i) {
            if (
              !vt(t, i) &&
              !(function (t) {
                if (1 != t.touches.length) return !1;
                var e = t.touches[0];
                return e.radiusX <= 1 && e.radiusY <= 1;
              })(i) &&
              !ba(t, i)
            ) {
              e.input.ensurePolled(), clearTimeout(r);
              var o = +new Date();
              (e.activeTouch = {
                start: o,
                moved: !1,
                prev: o - n.end <= 300 ? n : null,
              }),
                1 == i.touches.length &&
                  ((e.activeTouch.left = i.touches[0].pageX),
                  (e.activeTouch.top = i.touches[0].pageY));
            }
          }),
            ft(e.scroller, 'touchmove', function () {
              e.activeTouch && (e.activeTouch.moved = !0);
            }),
            ft(e.scroller, 'touchend', function (r) {
              var n = e.activeTouch;
              if (
                n &&
                !xr(e, r) &&
                null != n.left &&
                !n.moved &&
                new Date() - n.start < 300
              ) {
                var a,
                  s = t.coordsChar(e.activeTouch, 'page');
                (a =
                  !n.prev || o(n, n.prev)
                    ? new Ci(s, s)
                    : !n.prev.prev || o(n, n.prev.prev)
                    ? t.findWordAt(s)
                    : new Ci(te(s.line, 0), se(t.doc, te(s.line + 1, 0)))),
                  t.setSelection(a.anchor, a.head),
                  t.focus(),
                  bt(r);
              }
              i();
            }),
            ft(e.scroller, 'touchcancel', i),
            ft(e.scroller, 'scroll', function () {
              e.scroller.clientHeight &&
                (Pn(t, e.scroller.scrollTop),
                Dn(t, e.scroller.scrollLeft, !0),
                pt(t, 'scroll', t));
            }),
            ft(e.scroller, 'mousewheel', function (e) {
              return xi(t, e);
            }),
            ft(e.scroller, 'DOMMouseScroll', function (e) {
              return xi(t, e);
            }),
            ft(e.wrapper, 'scroll', function () {
              return (e.wrapper.scrollTop = e.wrapper.scrollLeft = 0);
            }),
            (e.dragFunctions = {
              enter: function (e) {
                vt(t, e) || St(e);
              },
              over: function (e) {
                vt(t, e) ||
                  ((function (t, e) {
                    var r = un(t, e);
                    if (r) {
                      var n = document.createDocumentFragment();
                      yn(t, r, n),
                        t.display.dragCursor ||
                          ((t.display.dragCursor = M(
                            'div',
                            null,
                            'CodeMirror-cursors CodeMirror-dragcursors'
                          )),
                          t.display.lineSpace.insertBefore(
                            t.display.dragCursor,
                            t.display.cursorDiv
                          )),
                        O(t.display.dragCursor, n);
                    }
                  })(t, e),
                  St(e));
              },
              start: function (e) {
                return (function (t, e) {
                  if (a && (!t.state.draggingText || +new Date() - No < 100))
                    St(e);
                  else if (
                    !vt(t, e) &&
                    !xr(t.display, e) &&
                    (e.dataTransfer.setData('Text', t.getSelection()),
                    (e.dataTransfer.effectAllowed = 'copyMove'),
                    e.dataTransfer.setDragImage && !h)
                  ) {
                    var r = M(
                      'img',
                      null,
                      null,
                      'position: fixed; left: 0; top: 0;'
                    );
                    (r.src =
                      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                      f &&
                        ((r.width = r.height = 1),
                        t.display.wrapper.appendChild(r),
                        (r._top = r.offsetTop)),
                      e.dataTransfer.setDragImage(r, 0, 0),
                      f && r.parentNode.removeChild(r);
                  }
                })(t, e);
              },
              drop: ti(t, Io),
              leave: function (e) {
                vt(t, e) || jo(t);
              },
            });
          var l = e.input.getField();
          ft(l, 'keyup', function (e) {
            return fa.call(t, e);
          }),
            ft(l, 'keydown', ti(t, ca)),
            ft(l, 'keypress', ti(t, ha)),
            ft(l, 'focus', function (e) {
              return kn(t, e);
            }),
            ft(l, 'blur', function (e) {
              return Tn(t, e);
            });
        })(this),
        Do(),
        qn(this),
        (this.curOp.forceUpdate = !0),
        Pi(this, n),
        (e.autofocus && !m) || this.hasFocus()
          ? setTimeout(function () {
              r.hasFocus() && !r.state.focused && kn(r);
            }, 20)
          : Tn(this),
        ka))
          ka.hasOwnProperty(u) && ka[u](this, e[u], Sa);
        hi(this), e.finishInit && e.finishInit(this);
        for (var c = 0; c < Oa.length; ++c) Oa[c](this);
        $n(this),
          l &&
            e.lineWrapping &&
            'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
            (o.lineDiv.style.textRendering = 'auto');
      }
      (La.defaults = Ca), (La.optionHandlers = ka);
      var Oa = [];
      function Ma(t, e, r, n) {
        var i,
          o = t.doc;
        null == r && (r = 'add'),
          'smart' == r && (o.mode.indent ? (i = de(t, e).state) : (r = 'prev'));
        var a = t.options.tabSize,
          s = qt(o, e),
          l = F(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var u,
          c = s.text.match(/^\s*/)[0];
        if (n || /\S/.test(s.text)) {
          if (
            'smart' == r &&
            ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == B ||
              u > 150)
          ) {
            if (!n) return;
            r = 'prev';
          }
        } else (u = 0), (r = 'not');
        'prev' == r
          ? (u = e > o.first ? F(qt(o, e - 1).text, null, a) : 0)
          : 'add' == r
          ? (u = l + t.options.indentUnit)
          : 'subtract' == r
          ? (u = l - t.options.indentUnit)
          : 'number' == typeof r && (u = l + r),
          (u = Math.max(0, u));
        var f = '',
          h = 0;
        if (t.options.indentWithTabs)
          for (var d = Math.floor(u / a); d; --d) (h += a), (f += '\t');
        if ((h < u && (f += $(u - h)), f != c))
          return (
            vo(o, f, te(e, 0), te(e, c.length), '+input'),
            (s.stateAfter = null),
            !0
          );
        for (var p = 0; p < o.sel.ranges.length; p++) {
          var v = o.sel.ranges[p];
          if (v.head.line == e && v.head.ch < c.length) {
            var g = te(e, c.length);
            Xi(o, p, new Ci(g, g));
            break;
          }
        }
      }
      La.defineInitHook = function (t) {
        return Oa.push(t);
      };
      var Ea = null;
      function _a(t) {
        Ea = t;
      }
      function Na(t, e, r, n, i) {
        var o = t.doc;
        (t.display.shift = !1), n || (n = o.sel);
        var a = +new Date() - 200,
          s = 'paste' == i || t.state.pasteIncoming > a,
          l = _t(e),
          u = null;
        if (s && n.ranges.length > 1)
          if (Ea && Ea.text.join('\n') == e) {
            if (n.ranges.length % Ea.text.length == 0) {
              u = [];
              for (var c = 0; c < Ea.text.length; c++)
                u.push(o.splitLines(Ea.text[c]));
            }
          } else
            l.length == n.ranges.length &&
              t.options.pasteLinesPerSelection &&
              (u = K(l, function (t) {
                return [t];
              }));
        for (
          var f = t.curOp.updateInput, h = n.ranges.length - 1;
          h >= 0;
          h--
        ) {
          var d = n.ranges[h],
            p = d.from(),
            v = d.to();
          d.empty() &&
            (r && r > 0
              ? (p = te(p.line, p.ch - r))
              : t.state.overwrite && !s
              ? (v = te(
                  v.line,
                  Math.min(qt(o, v.line).text.length, v.ch + Y(l).length)
                ))
              : s &&
                Ea &&
                Ea.lineWise &&
                Ea.text.join('\n') == l.join('\n') &&
                (p = v = te(p.line, 0)));
          var g = {
            from: p,
            to: v,
            text: u ? u[h % u.length] : l,
            origin:
              i || (s ? 'paste' : t.state.cutIncoming > a ? 'cut' : '+input'),
          };
          uo(t.doc, g), sr(t, 'inputRead', t, g);
        }
        e && !s && ja(t, e),
          _n(t),
          t.curOp.updateInput < 2 && (t.curOp.updateInput = f),
          (t.curOp.typing = !0),
          (t.state.pasteIncoming = t.state.cutIncoming = -1);
      }
      function Ia(t, e) {
        var r = t.clipboardData && t.clipboardData.getData('Text');
        if (r)
          return (
            t.preventDefault(),
            e.isReadOnly() ||
              e.options.disableInput ||
              Qn(e, function () {
                return Na(e, r, 0, null, 'paste');
              }),
            !0
          );
      }
      function ja(t, e) {
        if (t.options.electricChars && t.options.smartIndent)
          for (var r = t.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];
            if (
              !(
                i.head.ch > 100 ||
                (n && r.ranges[n - 1].head.line == i.head.line)
              )
            ) {
              var o = t.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var s = 0; s < o.electricChars.length; s++)
                  if (e.indexOf(o.electricChars.charAt(s)) > -1) {
                    a = Ma(t, i.head.line, 'smart');
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    qt(t.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = Ma(t, i.head.line, 'smart'));
              a && sr(t, 'electricInput', t, i.head.line);
            }
          }
      }
      function Pa(t) {
        for (var e = [], r = [], n = 0; n < t.doc.sel.ranges.length; n++) {
          var i = t.doc.sel.ranges[n].head.line,
            o = { anchor: te(i, 0), head: te(i + 1, 0) };
          r.push(o), e.push(t.getRange(o.anchor, o.head));
        }
        return { text: e, ranges: r };
      }
      function Ra(t, e, r, n) {
        t.setAttribute('autocorrect', r ? '' : 'off'),
          t.setAttribute('autocapitalize', n ? '' : 'off'),
          t.setAttribute('spellcheck', !!e);
      }
      function Da() {
        var t = M(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          e = M(
            'div',
            [t],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
        return (
          l ? (t.style.width = '1000px') : t.setAttribute('wrap', 'off'),
          v && (t.style.border = '1px solid black'),
          Ra(t),
          e
        );
      }
      function Fa(t, e, r, n, i) {
        var o = e,
          a = r,
          s = qt(t, e.line),
          l = i && 'rtl' == t.direction ? -r : r;
        function u(o) {
          var a, u;
          if ('codepoint' == n) {
            var c = s.text.charCodeAt(e.ch + (n > 0 ? 0 : -1));
            a = isNaN(c)
              ? null
              : new te(
                  e.line,
                  Math.max(
                    0,
                    Math.min(
                      s.text.length,
                      e.ch + r * (c >= 55296 && c < 56320 ? 2 : 1)
                    )
                  ),
                  -r
                );
          } else
            a = i
              ? (function (t, e, r, n) {
                  var i = ut(e, t.doc.direction);
                  if (!i) return Qo(e, r, n);
                  r.ch >= e.text.length
                    ? ((r.ch = e.text.length), (r.sticky = 'before'))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
                  var o = st(i, r.ch, r.sticky),
                    a = i[o];
                  if (
                    'ltr' == t.doc.direction &&
                    a.level % 2 == 0 &&
                    (n > 0 ? a.to > r.ch : a.from < r.ch)
                  )
                    return Qo(e, r, n);
                  var s,
                    l = function (t, r) {
                      return Zo(e, t instanceof te ? t.ch : t, r);
                    },
                    u = function (r) {
                      return t.options.lineWrapping
                        ? ((s = s || _r(t, e)), Jr(t, e, s, r))
                        : { begin: 0, end: e.text.length };
                    },
                    c = u('before' == r.sticky ? l(r, -1) : r.ch);
                  if ('rtl' == t.doc.direction || 1 == a.level) {
                    var f = (1 == a.level) == n < 0,
                      h = l(r, f ? 1 : -1);
                    if (
                      null != h &&
                      (f
                        ? h <= a.to && h <= c.end
                        : h >= a.from && h >= c.begin)
                    ) {
                      var d = f ? 'before' : 'after';
                      return new te(r.line, h, d);
                    }
                  }
                  var p = function (t, e, n) {
                      for (
                        var o = function (t, e) {
                          return e
                            ? new te(r.line, l(t, 1), 'before')
                            : new te(r.line, t, 'after');
                        };
                        t >= 0 && t < i.length;
                        t += e
                      ) {
                        var a = i[t],
                          s = e > 0 == (1 != a.level),
                          u = s ? n.begin : l(n.end, -1);
                        if (a.from <= u && u < a.to) return o(u, s);
                        if (
                          ((u = s ? a.from : l(a.to, -1)),
                          n.begin <= u && u < n.end)
                        )
                          return o(u, s);
                      }
                    },
                    v = p(o + n, n, c);
                  if (v) return v;
                  var g = n > 0 ? c.end : l(c.begin, -1);
                  return null == g ||
                    (n > 0 && g == e.text.length) ||
                    !(v = p(n > 0 ? 0 : i.length - 1, n, u(g)))
                    ? null
                    : v;
                })(t.cm, s, e, r)
              : Qo(s, e, r);
          if (null == a) {
            if (
              o ||
              (u = e.line + l) < t.first ||
              u >= t.first + t.size ||
              ((e = new te(u, e.ch, e.sticky)), !(s = qt(t, u)))
            )
              return !1;
            e = ta(i, t.cm, s, e.line, l);
          } else e = a;
          return !0;
        }
        if ('char' == n || 'codepoint' == n) u();
        else if ('column' == n) u(!0);
        else if ('word' == n || 'group' == n)
          for (
            var c = null,
              f = 'group' == n,
              h = t.cm && t.cm.getHelper(e, 'wordChars'),
              d = !0;
            !(r < 0) || u(!d);
            d = !1
          ) {
            var p = s.text.charAt(e.ch) || '\n',
              v = tt(p, h)
                ? 'w'
                : f && '\n' == p
                ? 'n'
                : !f || /\s/.test(p)
                ? null
                : 'p';
            if ((!f || d || v || (v = 's'), c && c != v)) {
              r < 0 && ((r = 1), u(), (e.sticky = 'after'));
              break;
            }
            if ((v && (c = v), r > 0 && !u(!d))) break;
          }
        var g = oo(t, e, o, a, !0);
        return re(o, g) && (g.hitSide = !0), g;
      }
      function Wa(t, e, r, n) {
        var i,
          o,
          a = t.doc,
          s = e.left;
        if ('page' == n) {
          var l = Math.min(
              t.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            u = Math.max(l - 0.5 * rn(t.display), 3);
          i = (r > 0 ? e.bottom : e.top) + r * u;
        } else 'line' == n && (i = r > 0 ? e.bottom + 3 : e.top - 3);
        for (; (o = Kr(t, s, i)).outside; ) {
          if (r < 0 ? i <= 0 : i >= a.height) {
            o.hitSide = !0;
            break;
          }
          i += 5 * r;
        }
        return o;
      }
      var za = function (t) {
        (this.cm = t),
          (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
          (this.polling = new W()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null);
      };
      function Ba(t, e) {
        var r = Er(t, e.line);
        if (!r || r.hidden) return null;
        var n = qt(t.doc, e.line),
          i = Or(r, n, e.line),
          o = ut(n, t.doc.direction),
          a = 'left';
        o && (a = st(o, e.ch) % 2 ? 'right' : 'left');
        var s = Pr(i.map, e.ch, a);
        return (s.offset = 'right' == s.collapse ? s.end : s.start), s;
      }
      function Ha(t, e) {
        return e && (t.bad = !0), t;
      }
      function Ua(t, e, r) {
        var n;
        if (e == t.display.lineDiv) {
          if (!(n = t.display.lineDiv.childNodes[r]))
            return Ha(t.clipPos(te(t.display.viewTo - 1)), !0);
          (e = null), (r = 0);
        } else
          for (n = e; ; n = n.parentNode) {
            if (!n || n == t.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == t.display.lineDiv) break;
          }
        for (var i = 0; i < t.display.view.length; i++) {
          var o = t.display.view[i];
          if (o.node == n) return Va(o, e, r);
        }
      }
      function Va(t, e, r) {
        var n = t.text.firstChild,
          i = !1;
        if (!e || !_(n, e)) return Ha(te(Xt(t.line), 0), !0);
        if (e == n && ((i = !0), (e = n.childNodes[r]), (r = 0), !e)) {
          var o = t.rest ? Y(t.rest) : t.line;
          return Ha(te(Xt(o), o.text.length), i);
        }
        var a = 3 == e.nodeType ? e : null,
          s = e;
        for (
          a ||
          1 != e.childNodes.length ||
          3 != e.firstChild.nodeType ||
          ((a = e.firstChild), r && (r = a.nodeValue.length));
          s.parentNode != n;

        )
          s = s.parentNode;
        var l = t.measure,
          u = l.maps;
        function c(e, r, n) {
          for (var i = -1; i < (u ? u.length : 0); i++)
            for (var o = i < 0 ? l.map : u[i], a = 0; a < o.length; a += 3) {
              var s = o[a + 2];
              if (s == e || s == r) {
                var c = Xt(i < 0 ? t.line : t.rest[i]),
                  f = o[a] + n;
                return (n < 0 || s != e) && (f = o[a + (n ? 1 : 0)]), te(c, f);
              }
            }
        }
        var f = c(a, s, r);
        if (f) return Ha(f, i);
        for (
          var h = s.nextSibling, d = a ? a.nodeValue.length - r : 0;
          h;
          h = h.nextSibling
        ) {
          if ((f = c(h, h.firstChild, 0))) return Ha(te(f.line, f.ch - d), i);
          d += h.textContent.length;
        }
        for (var p = s.previousSibling, v = r; p; p = p.previousSibling) {
          if ((f = c(p, p.firstChild, -1))) return Ha(te(f.line, f.ch + v), i);
          v += p.textContent.length;
        }
      }
      (za.prototype.init = function (t) {
        var e = this,
          r = this,
          n = r.cm,
          i = (r.div = t.lineDiv);
        function o(t) {
          for (var e = t.target; e; e = e.parentNode) {
            if (e == i) return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(e.className)) break;
          }
          return !1;
        }
        function a(t) {
          if (o(t) && !vt(n, t)) {
            if (n.somethingSelected())
              _a({ lineWise: !1, text: n.getSelections() }),
                'cut' == t.type && n.replaceSelection('', null, 'cut');
            else {
              if (!n.options.lineWiseCopyCut) return;
              var e = Pa(n);
              _a({ lineWise: !0, text: e.text }),
                'cut' == t.type &&
                  n.operation(function () {
                    n.setSelections(e.ranges, 0, H),
                      n.replaceSelection('', null, 'cut');
                  });
            }
            if (t.clipboardData) {
              t.clipboardData.clearData();
              var a = Ea.text.join('\n');
              if (
                (t.clipboardData.setData('Text', a),
                t.clipboardData.getData('Text') == a)
              )
                return void t.preventDefault();
            }
            var s = Da(),
              l = s.firstChild;
            n.display.lineSpace.insertBefore(s, n.display.lineSpace.firstChild),
              (l.value = Ea.text.join('\n'));
            var u = document.activeElement;
            P(l),
              setTimeout(function () {
                n.display.lineSpace.removeChild(s),
                  u.focus(),
                  u == i && r.showPrimarySelection();
              }, 50);
          }
        }
        Ra(
          i,
          n.options.spellcheck,
          n.options.autocorrect,
          n.options.autocapitalize
        ),
          ft(i, 'paste', function (t) {
            !o(t) ||
              vt(n, t) ||
              Ia(t, n) ||
              (s <= 11 &&
                setTimeout(
                  ti(n, function () {
                    return e.updateFromDOM();
                  }),
                  20
                ));
          }),
          ft(i, 'compositionstart', function (t) {
            e.composing = { data: t.data, done: !1 };
          }),
          ft(i, 'compositionupdate', function (t) {
            e.composing || (e.composing = { data: t.data, done: !1 });
          }),
          ft(i, 'compositionend', function (t) {
            e.composing &&
              (t.data != e.composing.data && e.readFromDOMSoon(),
              (e.composing.done = !0));
          }),
          ft(i, 'touchstart', function () {
            return r.forceCompositionEnd();
          }),
          ft(i, 'input', function () {
            e.composing || e.readFromDOMSoon();
          }),
          ft(i, 'copy', a),
          ft(i, 'cut', a);
      }),
        (za.prototype.screenReaderLabelChanged = function (t) {
          t
            ? this.div.setAttribute('aria-label', t)
            : this.div.removeAttribute('aria-label');
        }),
        (za.prototype.prepareSelection = function () {
          var t = mn(this.cm, !1);
          return (t.focus = document.activeElement == this.div), t;
        }),
        (za.prototype.showSelection = function (t, e) {
          t &&
            this.cm.display.view.length &&
            ((t.focus || e) && this.showPrimarySelection(),
            this.showMultipleSelections(t));
        }),
        (za.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (za.prototype.showPrimarySelection = function () {
          var t = this.getSelection(),
            e = this.cm,
            n = e.doc.sel.primary(),
            i = n.from(),
            o = n.to();
          if (
            e.display.viewTo == e.display.viewFrom ||
            i.line >= e.display.viewTo ||
            o.line < e.display.viewFrom
          )
            t.removeAllRanges();
          else {
            var a = Ua(e, t.anchorNode, t.anchorOffset),
              s = Ua(e, t.focusNode, t.focusOffset);
            if (
              !a ||
              a.bad ||
              !s ||
              s.bad ||
              0 != ee(oe(a, s), i) ||
              0 != ee(ie(a, s), o)
            ) {
              var l = e.display.view,
                u = (i.line >= e.display.viewFrom && Ba(e, i)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                c = o.line < e.display.viewTo && Ba(e, o);
              if (!c) {
                var f = l[l.length - 1].measure,
                  h = f.maps ? f.maps[f.maps.length - 1] : f.map;
                c = {
                  node: h[h.length - 1],
                  offset: h[h.length - 2] - h[h.length - 3],
                };
              }
              if (u && c) {
                var d,
                  p = t.rangeCount && t.getRangeAt(0);
                try {
                  d = T(u.node, u.offset, c.offset, c.node);
                } catch (t) {}
                d &&
                  (!r && e.state.focused
                    ? (t.collapse(u.node, u.offset),
                      d.collapsed || (t.removeAllRanges(), t.addRange(d)))
                    : (t.removeAllRanges(), t.addRange(d)),
                  p && null == t.anchorNode
                    ? t.addRange(p)
                    : r && this.startGracePeriod()),
                  this.rememberSelection();
              } else t.removeAllRanges();
            }
          }
        }),
        (za.prototype.startGracePeriod = function () {
          var t = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function () {
              (t.gracePeriod = !1),
                t.selectionChanged() &&
                  t.cm.operation(function () {
                    return (t.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (za.prototype.showMultipleSelections = function (t) {
          O(this.cm.display.cursorDiv, t.cursors),
            O(this.cm.display.selectionDiv, t.selection);
        }),
        (za.prototype.rememberSelection = function () {
          var t = this.getSelection();
          (this.lastAnchorNode = t.anchorNode),
            (this.lastAnchorOffset = t.anchorOffset),
            (this.lastFocusNode = t.focusNode),
            (this.lastFocusOffset = t.focusOffset);
        }),
        (za.prototype.selectionInEditor = function () {
          var t = this.getSelection();
          if (!t.rangeCount) return !1;
          var e = t.getRangeAt(0).commonAncestorContainer;
          return _(this.div, e);
        }),
        (za.prototype.focus = function () {
          'nocursor' != this.cm.options.readOnly &&
            ((this.selectionInEditor() && document.activeElement == this.div) ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (za.prototype.blur = function () {
          this.div.blur();
        }),
        (za.prototype.getField = function () {
          return this.div;
        }),
        (za.prototype.supportsTouch = function () {
          return !0;
        }),
        (za.prototype.receivedFocus = function () {
          var t = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : Qn(this.cm, function () {
                return (t.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, function e() {
              t.cm.state.focused &&
                (t.pollSelection(),
                t.polling.set(t.cm.options.pollInterval, e));
            });
        }),
        (za.prototype.selectionChanged = function () {
          var t = this.getSelection();
          return (
            t.anchorNode != this.lastAnchorNode ||
            t.anchorOffset != this.lastAnchorOffset ||
            t.focusNode != this.lastFocusNode ||
            t.focusOffset != this.lastFocusOffset
          );
        }),
        (za.prototype.pollSelection = function () {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var t = this.getSelection(),
              e = this.cm;
            if (
              g &&
              c &&
              this.cm.display.gutterSpecs.length &&
              (function (t) {
                for (var e = t; e; e = e.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0;
                return !1;
              })(t.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: 'keydown',
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              );
            if (!this.composing) {
              this.rememberSelection();
              var r = Ua(e, t.anchorNode, t.anchorOffset),
                n = Ua(e, t.focusNode, t.focusOffset);
              r &&
                n &&
                Qn(e, function () {
                  Qi(e.doc, Ti(r, n), H),
                    (r.bad || n.bad) && (e.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (za.prototype.pollContent = function () {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var t,
            e,
            r,
            n = this.cm,
            i = n.display,
            o = n.doc.sel.primary(),
            a = o.from(),
            s = o.to();
          if (
            (0 == a.ch &&
              a.line > n.firstLine() &&
              (a = te(a.line - 1, qt(n.doc, a.line - 1).length)),
            s.ch == qt(n.doc, s.line).text.length &&
              s.line < n.lastLine() &&
              (s = te(s.line + 1, 0)),
            a.line < i.viewFrom || s.line > i.viewTo - 1)
          )
            return !1;
          a.line == i.viewFrom || 0 == (t = cn(n, a.line))
            ? ((e = Xt(i.view[0].line)), (r = i.view[0].node))
            : ((e = Xt(i.view[t].line)), (r = i.view[t - 1].node.nextSibling));
          var l,
            u,
            c = cn(n, s.line);
          if (
            (c == i.view.length - 1
              ? ((l = i.viewTo - 1), (u = i.lineDiv.lastChild))
              : ((l = Xt(i.view[c + 1].line) - 1),
                (u = i.view[c + 1].node.previousSibling)),
            !r)
          )
            return !1;
          for (
            var f = n.doc.splitLines(
                (function (t, e, r, n, i) {
                  var o = '',
                    a = !1,
                    s = t.doc.lineSeparator(),
                    l = !1;
                  function u() {
                    a && ((o += s), l && (o += s), (a = l = !1));
                  }
                  function c(t) {
                    t && (u(), (o += t));
                  }
                  function f(e) {
                    if (1 == e.nodeType) {
                      var r = e.getAttribute('cm-text');
                      if (r) return void c(r);
                      var o,
                        h = e.getAttribute('cm-marker');
                      if (h) {
                        var d = t.findMarks(
                          te(n, 0),
                          te(i + 1, 0),
                          ((g = +h),
                          function (t) {
                            return t.id == g;
                          })
                        );
                        return void (
                          d.length &&
                          (o = d[0].find(0)) &&
                          c($t(t.doc, o.from, o.to).join(s))
                        );
                      }
                      if ('false' == e.getAttribute('contenteditable')) return;
                      var p = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                      if (
                        !/^br$/i.test(e.nodeName) &&
                        0 == e.textContent.length
                      )
                        return;
                      p && u();
                      for (var v = 0; v < e.childNodes.length; v++)
                        f(e.childNodes[v]);
                      /^(pre|p)$/i.test(e.nodeName) && (l = !0), p && (a = !0);
                    } else
                      3 == e.nodeType &&
                        c(
                          e.nodeValue
                            .replace(/\u200b/g, '')
                            .replace(/\u00a0/g, ' ')
                        );
                    var g;
                  }
                  for (; f(e), e != r; ) (e = e.nextSibling), (l = !1);
                  return o;
                })(n, r, u, e, l)
              ),
              h = $t(n.doc, te(e, 0), te(l, qt(n.doc, l).text.length));
            f.length > 1 && h.length > 1;

          )
            if (Y(f) == Y(h)) f.pop(), h.pop(), l--;
            else {
              if (f[0] != h[0]) break;
              f.shift(), h.shift(), e++;
            }
          for (
            var d = 0,
              p = 0,
              v = f[0],
              g = h[0],
              m = Math.min(v.length, g.length);
            d < m && v.charCodeAt(d) == g.charCodeAt(d);

          )
            ++d;
          for (
            var y = Y(f),
              b = Y(h),
              w = Math.min(
                y.length - (1 == f.length ? d : 0),
                b.length - (1 == h.length ? d : 0)
              );
            p < w &&
            y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

          )
            ++p;
          if (1 == f.length && 1 == h.length && e == a.line)
            for (
              ;
              d &&
              d > a.ch &&
              y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

            )
              d--, p++;
          (f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, '')),
            (f[0] = f[0].slice(d).replace(/\u200b+$/, ''));
          var x = te(e, d),
            S = te(l, h.length ? Y(h).length - p : 0);
          return f.length > 1 || f[0] || ee(x, S)
            ? (vo(n.doc, f, x, S, '+input'), !0)
            : void 0;
        }),
        (za.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }),
        (za.prototype.reset = function () {
          this.forceCompositionEnd();
        }),
        (za.prototype.forceCompositionEnd = function () {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (za.prototype.readFromDOMSoon = function () {
          var t = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function () {
              if (((t.readDOMTimeout = null), t.composing)) {
                if (!t.composing.done) return;
                t.composing = null;
              }
              t.updateFromDOM();
            }, 80));
        }),
        (za.prototype.updateFromDOM = function () {
          var t = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            Qn(this.cm, function () {
              return fn(t.cm);
            });
        }),
        (za.prototype.setUneditable = function (t) {
          t.contentEditable = 'false';
        }),
        (za.prototype.onKeyPress = function (t) {
          0 == t.charCode ||
            this.composing ||
            (t.preventDefault(),
            this.cm.isReadOnly() ||
              ti(this.cm, Na)(
                this.cm,
                String.fromCharCode(
                  null == t.charCode ? t.keyCode : t.charCode
                ),
                0
              ));
        }),
        (za.prototype.readOnlyChanged = function (t) {
          this.div.contentEditable = String('nocursor' != t);
        }),
        (za.prototype.onContextMenu = function () {}),
        (za.prototype.resetPosition = function () {}),
        (za.prototype.needsContentAttribute = !0);
      var Ga = function (t) {
        (this.cm = t),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new W()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (Ga.prototype.init = function (t) {
        var e = this,
          r = this,
          n = this.cm;
        this.createField(t);
        var i = this.textarea;
        function o(t) {
          if (!vt(n, t)) {
            if (n.somethingSelected())
              _a({ lineWise: !1, text: n.getSelections() });
            else {
              if (!n.options.lineWiseCopyCut) return;
              var e = Pa(n);
              _a({ lineWise: !0, text: e.text }),
                'cut' == t.type
                  ? n.setSelections(e.ranges, null, H)
                  : ((r.prevInput = ''), (i.value = e.text.join('\n')), P(i));
            }
            'cut' == t.type && (n.state.cutIncoming = +new Date());
          }
        }
        t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
          v && (i.style.width = '0px'),
          ft(i, 'input', function () {
            a && s >= 9 && e.hasSelection && (e.hasSelection = null), r.poll();
          }),
          ft(i, 'paste', function (t) {
            vt(n, t) ||
              Ia(t, n) ||
              ((n.state.pasteIncoming = +new Date()), r.fastPoll());
          }),
          ft(i, 'cut', o),
          ft(i, 'copy', o),
          ft(t.scroller, 'paste', function (e) {
            if (!xr(t, e) && !vt(n, e)) {
              if (!i.dispatchEvent)
                return (n.state.pasteIncoming = +new Date()), void r.focus();
              var o = new Event('paste');
              (o.clipboardData = e.clipboardData), i.dispatchEvent(o);
            }
          }),
          ft(t.lineSpace, 'selectstart', function (e) {
            xr(t, e) || bt(e);
          }),
          ft(i, 'compositionstart', function () {
            var t = n.getCursor('from');
            r.composing && r.composing.range.clear(),
              (r.composing = {
                start: t,
                range: n.markText(t, n.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          ft(i, 'compositionend', function () {
            r.composing &&
              (r.poll(), r.composing.range.clear(), (r.composing = null));
          });
      }),
        (Ga.prototype.createField = function (t) {
          (this.wrapper = Da()), (this.textarea = this.wrapper.firstChild);
        }),
        (Ga.prototype.screenReaderLabelChanged = function (t) {
          t
            ? this.textarea.setAttribute('aria-label', t)
            : this.textarea.removeAttribute('aria-label');
        }),
        (Ga.prototype.prepareSelection = function () {
          var t = this.cm,
            e = t.display,
            r = t.doc,
            n = mn(t);
          if (t.options.moveInputWithCursor) {
            var i = qr(t, r.sel.primary().head, 'div'),
              o = e.wrapper.getBoundingClientRect(),
              a = e.lineDiv.getBoundingClientRect();
            (n.teTop = Math.max(
              0,
              Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (n.teLeft = Math.max(
                0,
                Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return n;
        }),
        (Ga.prototype.showSelection = function (t) {
          var e = this.cm.display;
          O(e.cursorDiv, t.cursors),
            O(e.selectionDiv, t.selection),
            null != t.teTop &&
              ((this.wrapper.style.top = t.teTop + 'px'),
              (this.wrapper.style.left = t.teLeft + 'px'));
        }),
        (Ga.prototype.reset = function (t) {
          if (!this.contextMenuPending && !this.composing) {
            var e = this.cm;
            if (e.somethingSelected()) {
              this.prevInput = '';
              var r = e.getSelection();
              (this.textarea.value = r),
                e.state.focused && P(this.textarea),
                a && s >= 9 && (this.hasSelection = r);
            } else
              t ||
                ((this.prevInput = this.textarea.value = ''),
                a && s >= 9 && (this.hasSelection = null));
          }
        }),
        (Ga.prototype.getField = function () {
          return this.textarea;
        }),
        (Ga.prototype.supportsTouch = function () {
          return !1;
        }),
        (Ga.prototype.focus = function () {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!m || N() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (t) {}
        }),
        (Ga.prototype.blur = function () {
          this.textarea.blur();
        }),
        (Ga.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Ga.prototype.receivedFocus = function () {
          this.slowPoll();
        }),
        (Ga.prototype.slowPoll = function () {
          var t = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function () {
              t.poll(), t.cm.state.focused && t.slowPoll();
            });
        }),
        (Ga.prototype.fastPoll = function () {
          var t = !1,
            e = this;
          (e.pollingFast = !0),
            e.polling.set(20, function r() {
              e.poll() || t
                ? ((e.pollingFast = !1), e.slowPoll())
                : ((t = !0), e.polling.set(60, r));
            });
        }),
        (Ga.prototype.poll = function () {
          var t = this,
            e = this.cm,
            r = this.textarea,
            n = this.prevInput;
          if (
            this.contextMenuPending ||
            !e.state.focused ||
            (Nt(r) && !n && !this.composing) ||
            e.isReadOnly() ||
            e.options.disableInput ||
            e.state.keySeq
          )
            return !1;
          var i = r.value;
          if (i == n && !e.somethingSelected()) return !1;
          if (
            (a && s >= 9 && this.hasSelection === i) ||
            (y && /[\uf700-\uf7ff]/.test(i))
          )
            return e.display.input.reset(), !1;
          if (e.doc.sel == e.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || n || (n = '​'), 8666 == o))
              return this.reset(), this.cm.execCommand('undo');
          }
          for (
            var l = 0, u = Math.min(n.length, i.length);
            l < u && n.charCodeAt(l) == i.charCodeAt(l);

          )
            ++l;
          return (
            Qn(e, function () {
              Na(
                e,
                i.slice(l),
                n.length - l,
                null,
                t.composing ? '*compose' : null
              ),
                i.length > 1e3 || i.indexOf('\n') > -1
                  ? (r.value = t.prevInput = '')
                  : (t.prevInput = i),
                t.composing &&
                  (t.composing.range.clear(),
                  (t.composing.range = e.markText(
                    t.composing.start,
                    e.getCursor('to'),
                    { className: 'CodeMirror-composing' }
                  )));
            }),
            !0
          );
        }),
        (Ga.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Ga.prototype.onKeyPress = function () {
          a && s >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Ga.prototype.onContextMenu = function (t) {
          var e = this,
            r = e.cm,
            n = r.display,
            i = e.textarea;
          e.contextMenuPending && e.contextMenuPending();
          var o = un(r, t),
            u = n.scroller.scrollTop;
          if (o && !f) {
            r.options.resetSelectionOnContextMenu &&
              -1 == r.doc.sel.contains(o) &&
              ti(r, Qi)(r.doc, Ti(o), H);
            var c,
              h = i.style.cssText,
              d = e.wrapper.style.cssText,
              p = e.wrapper.offsetParent.getBoundingClientRect();
            if (
              ((e.wrapper.style.cssText = 'position: static'),
              (i.style.cssText =
                'position: absolute; width: 30px; height: 30px;\n      top: ' +
                (t.clientY - p.top - 5) +
                'px; left: ' +
                (t.clientX - p.left - 5) +
                'px;\n      z-index: 1000; background: ' +
                (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
              l && (c = window.scrollY),
              n.input.focus(),
              l && window.scrollTo(null, c),
              n.input.reset(),
              r.somethingSelected() || (i.value = e.prevInput = ' '),
              (e.contextMenuPending = m),
              (n.selForContextMenu = r.doc.sel),
              clearTimeout(n.detectingSelectAll),
              a && s >= 9 && g(),
              C)
            ) {
              St(t);
              var v = function () {
                dt(window, 'mouseup', v), setTimeout(m, 20);
              };
              ft(window, 'mouseup', v);
            } else setTimeout(m, 50);
          }
          function g() {
            if (null != i.selectionStart) {
              var t = r.somethingSelected(),
                o = '​' + (t ? i.value : '');
              (i.value = '⇚'),
                (i.value = o),
                (e.prevInput = t ? '' : '​'),
                (i.selectionStart = 1),
                (i.selectionEnd = o.length),
                (n.selForContextMenu = r.doc.sel);
            }
          }
          function m() {
            if (
              e.contextMenuPending == m &&
              ((e.contextMenuPending = !1),
              (e.wrapper.style.cssText = d),
              (i.style.cssText = h),
              a &&
                s < 9 &&
                n.scrollbars.setScrollTop((n.scroller.scrollTop = u)),
              null != i.selectionStart)
            ) {
              (!a || (a && s < 9)) && g();
              var t = 0,
                o = function () {
                  n.selForContextMenu == r.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  '​' == e.prevInput
                    ? ti(r, so)(r)
                    : t++ < 10
                    ? (n.detectingSelectAll = setTimeout(o, 500))
                    : ((n.selForContextMenu = null), n.input.reset());
                };
              n.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }),
        (Ga.prototype.readOnlyChanged = function (t) {
          t || this.reset(),
            (this.textarea.disabled = 'nocursor' == t),
            (this.textarea.readOnly = !!t);
        }),
        (Ga.prototype.setUneditable = function () {}),
        (Ga.prototype.needsContentAttribute = !1),
        (function (t) {
          var e = t.optionHandlers;
          function r(r, n, i, o) {
            (t.defaults[r] = n),
              i &&
                (e[r] = o
                  ? function (t, e, r) {
                      r != Sa && i(t, e, r);
                    }
                  : i);
          }
          (t.defineOption = r),
            (t.Init = Sa),
            r(
              'value',
              '',
              function (t, e) {
                return t.setValue(e);
              },
              !0
            ),
            r(
              'mode',
              null,
              function (t, e) {
                (t.doc.modeOption = e), Ei(t);
              },
              !0
            ),
            r('indentUnit', 2, Ei, !0),
            r('indentWithTabs', !1),
            r('smartIndent', !0),
            r(
              'tabSize',
              4,
              function (t) {
                _i(t), Wr(t), fn(t);
              },
              !0
            ),
            r('lineSeparator', null, function (t, e) {
              if (((t.doc.lineSep = e), e)) {
                var r = [],
                  n = t.doc.first;
                t.doc.iter(function (t) {
                  for (var i = 0; ; ) {
                    var o = t.text.indexOf(e, i);
                    if (-1 == o) break;
                    (i = o + e.length), r.push(te(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  vo(t.doc, e, r[i], te(r[i].line, r[i].ch + e.length));
              }
            }),
            r(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
              function (t, e, r) {
                (t.state.specialChars = new RegExp(
                  e.source + (e.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  r != Sa && t.refresh();
              }
            ),
            r(
              'specialCharPlaceholder',
              Ze,
              function (t) {
                return t.refresh();
              },
              !0
            ),
            r('electricChars', !0),
            r(
              'inputStyle',
              m ? 'contenteditable' : 'textarea',
              function () {
                throw new Error(
                  'inputStyle can not (yet) be changed in a running editor'
                );
              },
              !0
            ),
            r(
              'spellcheck',
              !1,
              function (t, e) {
                return (t.getInputField().spellcheck = e);
              },
              !0
            ),
            r(
              'autocorrect',
              !1,
              function (t, e) {
                return (t.getInputField().autocorrect = e);
              },
              !0
            ),
            r(
              'autocapitalize',
              !1,
              function (t, e) {
                return (t.getInputField().autocapitalize = e);
              },
              !0
            ),
            r('rtlMoveVisually', !w),
            r('wholeLineUpdateBefore', !0),
            r(
              'theme',
              'default',
              function (t) {
                xa(t), vi(t);
              },
              !0
            ),
            r('keyMap', 'default', function (t, e, r) {
              var n = Xo(e),
                i = r != Sa && Xo(r);
              i && i.detach && i.detach(t, n),
                n.attach && n.attach(t, i || null);
            }),
            r('extraKeys', null),
            r('configureMouse', null),
            r('lineWrapping', !1, Aa, !0),
            r(
              'gutters',
              [],
              function (t, e) {
                (t.display.gutterSpecs = di(e, t.options.lineNumbers)), vi(t);
              },
              !0
            ),
            r(
              'fixedGutter',
              !0,
              function (t, e) {
                (t.display.gutters.style.left = e ? an(t.display) + 'px' : '0'),
                  t.refresh();
              },
              !0
            ),
            r(
              'coverGutterNextToScrollbar',
              !1,
              function (t) {
                return Bn(t);
              },
              !0
            ),
            r(
              'scrollbarStyle',
              'native',
              function (t) {
                Vn(t),
                  Bn(t),
                  t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                  t.display.scrollbars.setScrollLeft(t.doc.scrollLeft);
              },
              !0
            ),
            r(
              'lineNumbers',
              !1,
              function (t, e) {
                (t.display.gutterSpecs = di(t.options.gutters, e)), vi(t);
              },
              !0
            ),
            r('firstLineNumber', 1, vi, !0),
            r(
              'lineNumberFormatter',
              function (t) {
                return t;
              },
              vi,
              !0
            ),
            r('showCursorWhenSelecting', !1, gn, !0),
            r('resetSelectionOnContextMenu', !0),
            r('lineWiseCopyCut', !0),
            r('pasteLinesPerSelection', !0),
            r('selectionsMayTouch', !1),
            r('readOnly', !1, function (t, e) {
              'nocursor' == e && (Tn(t), t.display.input.blur()),
                t.display.input.readOnlyChanged(e);
            }),
            r('screenReaderLabel', null, function (t, e) {
              (e = '' === e ? null : e),
                t.display.input.screenReaderLabelChanged(e);
            }),
            r(
              'disableInput',
              !1,
              function (t, e) {
                e || t.display.input.reset();
              },
              !0
            ),
            r('dragDrop', !0, Ta),
            r('allowDropFileTypes', null),
            r('cursorBlinkRate', 530),
            r('cursorScrollMargin', 0),
            r('cursorHeight', 1, gn, !0),
            r('singleCursorHeightPerLine', !0, gn, !0),
            r('workTime', 100),
            r('workDelay', 100),
            r('flattenSpans', !0, _i, !0),
            r('addModeClass', !1, _i, !0),
            r('pollInterval', 100),
            r('undoDepth', 200, function (t, e) {
              return (t.doc.history.undoDepth = e);
            }),
            r('historyEventDelay', 1250),
            r(
              'viewportMargin',
              10,
              function (t) {
                return t.refresh();
              },
              !0
            ),
            r('maxHighlightLength', 1e4, _i, !0),
            r('moveInputWithCursor', !0, function (t, e) {
              e || t.display.input.resetPosition();
            }),
            r('tabindex', null, function (t, e) {
              return (t.display.input.getField().tabIndex = e || '');
            }),
            r('autofocus', null),
            r(
              'direction',
              'ltr',
              function (t, e) {
                return t.doc.setDirection(e);
              },
              !0
            ),
            r('phrases', null);
        })(La),
        (function (t) {
          var e = t.optionHandlers,
            r = (t.helpers = {});
          (t.prototype = {
            constructor: t,
            focus: function () {
              window.focus(), this.display.input.focus();
            },
            setOption: function (t, r) {
              var n = this.options,
                i = n[t];
              (n[t] == r && 'mode' != t) ||
                ((n[t] = r),
                e.hasOwnProperty(t) && ti(this, e[t])(this, r, i),
                pt(this, 'optionChange', this, t));
            },
            getOption: function (t) {
              return this.options[t];
            },
            getDoc: function () {
              return this.doc;
            },
            addKeyMap: function (t, e) {
              this.state.keyMaps[e ? 'push' : 'unshift'](Xo(t));
            },
            removeKeyMap: function (t) {
              for (var e = this.state.keyMaps, r = 0; r < e.length; ++r)
                if (e[r] == t || e[r].name == t) return e.splice(r, 1), !0;
            },
            addOverlay: ei(function (e, r) {
              var n = e.token ? e : t.getMode(this.options, e);
              if (n.startState)
                throw new Error('Overlays may not be stateful.');
              !(function (t, e, r) {
                for (var n = 0, i = r(e); n < t.length && r(t[n]) <= i; ) n++;
                t.splice(n, 0, e);
              })(
                this.state.overlays,
                {
                  mode: n,
                  modeSpec: e,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function (t) {
                  return t.priority;
                }
              ),
                this.state.modeGen++,
                fn(this);
            }),
            removeOverlay: ei(function (t) {
              for (var e = this.state.overlays, r = 0; r < e.length; ++r) {
                var n = e[r].modeSpec;
                if (n == t || ('string' == typeof t && n.name == t))
                  return e.splice(r, 1), this.state.modeGen++, void fn(this);
              }
            }),
            indentLine: ei(function (t, e, r) {
              'string' != typeof e &&
                'number' != typeof e &&
                (e =
                  null == e
                    ? this.options.smartIndent
                      ? 'smart'
                      : 'prev'
                    : e
                    ? 'add'
                    : 'subtract'),
                Zt(this.doc, t) && Ma(this, t, e, r);
            }),
            indentSelection: ei(function (t) {
              for (
                var e = this.doc.sel.ranges, r = -1, n = 0;
                n < e.length;
                n++
              ) {
                var i = e[n];
                if (i.empty())
                  i.head.line > r &&
                    (Ma(this, i.head.line, t, !0),
                    (r = i.head.line),
                    n == this.doc.sel.primIndex && _n(this));
                else {
                  var o = i.from(),
                    a = i.to(),
                    s = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                  for (var l = s; l < r; ++l) Ma(this, l, t);
                  var u = this.doc.sel.ranges;
                  0 == o.ch &&
                    e.length == u.length &&
                    u[n].from().ch > 0 &&
                    Xi(this.doc, n, new Ci(o, u[n].to()), H);
                }
              }
            }),
            getTokenAt: function (t, e) {
              return ye(this, t, e);
            },
            getLineTokens: function (t, e) {
              return ye(this, te(t), e, !0);
            },
            getTokenTypeAt: function (t) {
              t = se(this.doc, t);
              var e,
                r = he(this, qt(this.doc, t.line)),
                n = 0,
                i = (r.length - 1) / 2,
                o = t.ch;
              if (0 == o) e = r[2];
              else
                for (;;) {
                  var a = (n + i) >> 1;
                  if ((a ? r[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(r[2 * a + 1] < o)) {
                      e = r[2 * a + 2];
                      break;
                    }
                    n = a + 1;
                  }
                }
              var s = e ? e.indexOf('overlay ') : -1;
              return s < 0 ? e : 0 == s ? null : e.slice(0, s - 1);
            },
            getModeAt: function (e) {
              var r = this.doc.mode;
              return r.innerMode
                ? t.innerMode(r, this.getTokenAt(e).state).mode
                : r;
            },
            getHelper: function (t, e) {
              return this.getHelpers(t, e)[0];
            },
            getHelpers: function (t, e) {
              var n = [];
              if (!r.hasOwnProperty(e)) return n;
              var i = r[e],
                o = this.getModeAt(t);
              if ('string' == typeof o[e]) i[o[e]] && n.push(i[o[e]]);
              else if (o[e])
                for (var a = 0; a < o[e].length; a++) {
                  var s = i[o[e][a]];
                  s && n.push(s);
                }
              else
                o.helperType && i[o.helperType]
                  ? n.push(i[o.helperType])
                  : i[o.name] && n.push(i[o.name]);
              for (var l = 0; l < i._global.length; l++) {
                var u = i._global[l];
                u.pred(o, this) && -1 == z(n, u.val) && n.push(u.val);
              }
              return n;
            },
            getStateAfter: function (t, e) {
              var r = this.doc;
              return de(
                this,
                (t = ae(r, null == t ? r.first + r.size - 1 : t)) + 1,
                e
              ).state;
            },
            cursorCoords: function (t, e) {
              var r = this.doc.sel.primary();
              return qr(
                this,
                null == t
                  ? r.head
                  : 'object' == typeof t
                  ? se(this.doc, t)
                  : t
                  ? r.from()
                  : r.to(),
                e || 'page'
              );
            },
            charCoords: function (t, e) {
              return Gr(this, se(this.doc, t), e || 'page');
            },
            coordsChar: function (t, e) {
              return Kr(this, (t = Vr(this, t, e || 'page')).left, t.top);
            },
            lineAtHeight: function (t, e) {
              return (
                (t = Vr(this, { top: t, left: 0 }, e || 'page').top),
                Jt(this.doc, t + this.display.viewOffset)
              );
            },
            heightAtLine: function (t, e, r) {
              var n,
                i = !1;
              if ('number' == typeof t) {
                var o = this.doc.first + this.doc.size - 1;
                t < this.doc.first
                  ? (t = this.doc.first)
                  : t > o && ((t = o), (i = !0)),
                  (n = qt(this.doc, t));
              } else n = t;
              return (
                Ur(this, n, { top: 0, left: 0 }, e || 'page', r || i).top +
                (i ? this.doc.height - Ue(n) : 0)
              );
            },
            defaultTextHeight: function () {
              return rn(this.display);
            },
            defaultCharWidth: function () {
              return nn(this.display);
            },
            getViewport: function () {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function (t, e, r, n, i) {
              var o,
                a,
                s,
                l = this.display,
                u = (t = qr(this, se(this.doc, t))).bottom,
                c = t.left;
              if (
                ((e.style.position = 'absolute'),
                e.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(e),
                l.sizer.appendChild(e),
                'over' == n)
              )
                u = t.top;
              else if ('above' == n || 'near' == n) {
                var f = Math.max(l.wrapper.clientHeight, this.doc.height),
                  h = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
                ('above' == n || t.bottom + e.offsetHeight > f) &&
                t.top > e.offsetHeight
                  ? (u = t.top - e.offsetHeight)
                  : t.bottom + e.offsetHeight <= f && (u = t.bottom),
                  c + e.offsetWidth > h && (c = h - e.offsetWidth);
              }
              (e.style.top = u + 'px'),
                (e.style.left = e.style.right = ''),
                'right' == i
                  ? ((c = l.sizer.clientWidth - e.offsetWidth),
                    (e.style.right = '0px'))
                  : ('left' == i
                      ? (c = 0)
                      : 'middle' == i &&
                        (c = (l.sizer.clientWidth - e.offsetWidth) / 2),
                    (e.style.left = c + 'px')),
                r &&
                  ((o = this),
                  (a = {
                    left: c,
                    top: u,
                    right: c + e.offsetWidth,
                    bottom: u + e.offsetHeight,
                  }),
                  null != (s = Mn(o, a)).scrollTop && Pn(o, s.scrollTop),
                  null != s.scrollLeft && Dn(o, s.scrollLeft));
            },
            triggerOnKeyDown: ei(ca),
            triggerOnKeyPress: ei(ha),
            triggerOnKeyUp: fa,
            triggerOnMouseDown: ei(ga),
            execCommand: function (t) {
              if (ea.hasOwnProperty(t)) return ea[t].call(null, this);
            },
            triggerElectric: ei(function (t) {
              ja(this, t);
            }),
            findPosH: function (t, e, r, n) {
              var i = 1;
              e < 0 && ((i = -1), (e = -e));
              for (
                var o = se(this.doc, t), a = 0;
                a < e && !(o = Fa(this.doc, o, i, r, n)).hitSide;
                ++a
              );
              return o;
            },
            moveH: ei(function (t, e) {
              var r = this;
              this.extendSelectionsBy(function (n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? Fa(r.doc, n.head, t, e, r.options.rtlMoveVisually)
                  : t < 0
                  ? n.from()
                  : n.to();
              }, V);
            }),
            deleteH: ei(function (t, e) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection('', null, '+delete')
                : Jo(this, function (r) {
                    var i = Fa(n, r.head, t, e, !1);
                    return t < 0
                      ? { from: i, to: r.head }
                      : { from: r.head, to: i };
                  });
            }),
            findPosV: function (t, e, r, n) {
              var i = 1,
                o = n;
              e < 0 && ((i = -1), (e = -e));
              for (var a = se(this.doc, t), s = 0; s < e; ++s) {
                var l = qr(this, a, 'div');
                if (
                  (null == o ? (o = l.left) : (l.left = o),
                  (a = Wa(this, l, i, r)).hitSide)
                )
                  break;
              }
              return a;
            },
            moveV: ei(function (t, e) {
              var r = this,
                n = this.doc,
                i = [],
                o =
                  !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function (a) {
                  if (o) return t < 0 ? a.from() : a.to();
                  var s = qr(r, a.head, 'div');
                  null != a.goalColumn && (s.left = a.goalColumn),
                    i.push(s.left);
                  var l = Wa(r, s, t, e);
                  return (
                    'page' == e &&
                      a == n.sel.primary() &&
                      En(r, Gr(r, l, 'div').top - s.top),
                    l
                  );
                }, V),
                i.length)
              )
                for (var a = 0; a < n.sel.ranges.length; a++)
                  n.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function (t) {
              var e = qt(this.doc, t.line).text,
                r = t.ch,
                n = t.ch;
              if (e) {
                var i = this.getHelper(t, 'wordChars');
                ('before' != t.sticky && n != e.length) || !r ? ++n : --r;
                for (
                  var o = e.charAt(r),
                    a = tt(o, i)
                      ? function (t) {
                          return tt(t, i);
                        }
                      : /\s/.test(o)
                      ? function (t) {
                          return /\s/.test(t);
                        }
                      : function (t) {
                          return !/\s/.test(t) && !tt(t);
                        };
                  r > 0 && a(e.charAt(r - 1));

                )
                  --r;
                for (; n < e.length && a(e.charAt(n)); ) ++n;
              }
              return new Ci(te(t.line, r), te(t.line, n));
            },
            toggleOverwrite: function (t) {
              (null != t && t == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? I(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : A(this.display.cursorDiv, 'CodeMirror-overwrite'),
                pt(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function () {
              return this.display.input.getField() == N();
            },
            isReadOnly: function () {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ei(function (t, e) {
              Nn(this, t, e);
            }),
            getScrollInfo: function () {
              var t = this.display.scroller;
              return {
                left: t.scrollLeft,
                top: t.scrollTop,
                height: t.scrollHeight - Tr(this) - this.display.barHeight,
                width: t.scrollWidth - Tr(this) - this.display.barWidth,
                clientHeight: Lr(this),
                clientWidth: Ar(this),
              };
            },
            scrollIntoView: ei(function (t, e) {
              null == t
                ? ((t = { from: this.doc.sel.primary().head, to: null }),
                  null == e && (e = this.options.cursorScrollMargin))
                : 'number' == typeof t
                ? (t = { from: te(t, 0), to: null })
                : null == t.from && (t = { from: t, to: null }),
                t.to || (t.to = t.from),
                (t.margin = e || 0),
                null != t.from.line
                  ? (function (t, e) {
                      In(t), (t.curOp.scrollToPos = e);
                    })(this, t)
                  : jn(this, t.from, t.to, t.margin);
            }),
            setSize: ei(function (t, e) {
              var r = this,
                n = function (t) {
                  return 'number' == typeof t || /^\d+$/.test(String(t))
                    ? t + 'px'
                    : t;
                };
              null != t && (this.display.wrapper.style.width = n(t)),
                null != e && (this.display.wrapper.style.height = n(e)),
                this.options.lineWrapping && Fr(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (t) {
                if (t.widgets)
                  for (var e = 0; e < t.widgets.length; e++)
                    if (t.widgets[e].noHScroll) {
                      hn(r, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                pt(this, 'refresh', this);
            }),
            operation: function (t) {
              return Qn(this, t);
            },
            startOperation: function () {
              return qn(this);
            },
            endOperation: function () {
              return $n(this);
            },
            refresh: ei(function () {
              var t = this.display.cachedTextHeight;
              fn(this),
                (this.curOp.forceUpdate = !0),
                Wr(this),
                Nn(this, this.doc.scrollLeft, this.doc.scrollTop),
                ui(this.display),
                (null == t ||
                  Math.abs(t - rn(this.display)) > 0.5 ||
                  this.options.lineWrapping) &&
                  ln(this),
                pt(this, 'refresh', this);
            }),
            swapDoc: ei(function (t) {
              var e = this.doc;
              return (
                (e.cm = null),
                this.state.selectingText && this.state.selectingText(),
                Pi(this, t),
                Wr(this),
                this.display.input.reset(),
                Nn(this, t.scrollLeft, t.scrollTop),
                (this.curOp.forceScroll = !0),
                sr(this, 'swapDoc', this, e),
                e
              );
            }),
            phrase: function (t) {
              var e = this.options.phrases;
              return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t;
            },
            getInputField: function () {
              return this.display.input.getField();
            },
            getWrapperElement: function () {
              return this.display.wrapper;
            },
            getScrollerElement: function () {
              return this.display.scroller;
            },
            getGutterElement: function () {
              return this.display.gutters;
            },
          }),
            yt(t),
            (t.registerHelper = function (e, n, i) {
              r.hasOwnProperty(e) || (r[e] = t[e] = { _global: [] }),
                (r[e][n] = i);
            }),
            (t.registerGlobalHelper = function (e, n, i, o) {
              t.registerHelper(e, n, o), r[e]._global.push({ pred: i, val: o });
            });
        })(La);
      var qa = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var $a in _o.prototype)
        _o.prototype.hasOwnProperty($a) &&
          z(qa, $a) < 0 &&
          (La.prototype[$a] = (function (t) {
            return function () {
              return t.apply(this.doc, arguments);
            };
          })(_o.prototype[$a]));
      return (
        yt(_o),
        (La.inputStyles = { textarea: Ga, contenteditable: za }),
        (La.defineMode = function (t) {
          La.defaults.mode || 'null' == t || (La.defaults.mode = t),
            Dt.apply(this, arguments);
        }),
        (La.defineMIME = function (t, e) {
          Rt[t] = e;
        }),
        La.defineMode('null', function () {
          return {
            token: function (t) {
              return t.skipToEnd();
            },
          };
        }),
        La.defineMIME('text/plain', 'null'),
        (La.defineExtension = function (t, e) {
          La.prototype[t] = e;
        }),
        (La.defineDocExtension = function (t, e) {
          _o.prototype[t] = e;
        }),
        (La.fromTextArea = function (t, e) {
          if (
            (((e = e ? D(e) : {}).value = t.value),
            !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
            !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
            null == e.autofocus)
          ) {
            var r = N();
            e.autofocus =
              r == t ||
              (null != t.getAttribute('autofocus') && r == document.body);
          }
          function n() {
            t.value = s.getValue();
          }
          var i;
          if (t.form && (ft(t.form, 'submit', n), !e.leaveSubmitMethodAlone)) {
            var o = t.form;
            i = o.submit;
            try {
              var a = (o.submit = function () {
                n(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (t) {}
          }
          (e.finishInit = function (r) {
            (r.save = n),
              (r.getTextArea = function () {
                return t;
              }),
              (r.toTextArea = function () {
                (r.toTextArea = isNaN),
                  n(),
                  t.parentNode.removeChild(r.getWrapperElement()),
                  (t.style.display = ''),
                  t.form &&
                    (dt(t.form, 'submit', n),
                    e.leaveSubmitMethodAlone ||
                      'function' != typeof t.form.submit ||
                      (t.form.submit = i));
              });
          }),
            (t.style.display = 'none');
          var s = La(function (e) {
            return t.parentNode.insertBefore(e, t.nextSibling);
          }, e);
          return s;
        }),
        (function (t) {
          (t.off = dt),
            (t.on = ft),
            (t.wheelEventPixels = wi),
            (t.Doc = _o),
            (t.splitLines = _t),
            (t.countColumn = F),
            (t.findColumn = G),
            (t.isWordChar = Q),
            (t.Pass = B),
            (t.signal = pt),
            (t.Line = qe),
            (t.changeEnd = Ai),
            (t.scrollbarModel = Un),
            (t.Pos = te),
            (t.cmpPos = ee),
            (t.modes = Pt),
            (t.mimeModes = Rt),
            (t.resolveMode = Ft),
            (t.getMode = Wt),
            (t.modeExtensions = zt),
            (t.extendMode = Bt),
            (t.copyState = Ht),
            (t.startState = Vt),
            (t.innerMode = Ut),
            (t.commands = ea),
            (t.keyMap = Uo),
            (t.keyName = Ko),
            (t.isModifierKey = $o),
            (t.lookupKey = qo),
            (t.normalizeKeyMap = Go),
            (t.StringStream = Gt),
            (t.SharedTextMarker = Lo),
            (t.TextMarker = To),
            (t.LineWidget = So),
            (t.e_preventDefault = bt),
            (t.e_stopPropagation = wt),
            (t.e_stop = St),
            (t.addClass = I),
            (t.contains = _),
            (t.rmClass = A),
            (t.keyNames = Wo);
        })(La),
        (La.version = '5.58.3'),
        La
      );
    })();
  },
  function (t, e, r) {
    'use strict';
    (function (t) {
      var n = r(95),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && n.a.process,
        s = (function () {
          try {
            var t = o && o.require && o.require('util').types;
            return t || (a && a.binding && a.binding('util'));
          } catch (t) {}
        })();
      e.a = s;
    }.call(this, r(130)(t)));
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(5),
      i = r(1),
      o = r(97);
    t.exports =
      !n &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(2),
      i = r(99),
      o = n.WeakMap;
    t.exports = 'function' == typeof o && /native code/.test(i(o));
  },
  function (t, e, r) {
    var n = r(11),
      i = r(102),
      o = r(13),
      a = r(9);
    t.exports = function (t, e) {
      for (var r = i(e), s = a.f, l = o.f, u = 0; u < r.length; u++) {
        var c = r[u];
        n(t, c) || s(t, c, l(e, c));
      }
    };
  },
  function (t, e, r) {
    var n = r(11),
      i = r(22),
      o = r(59).indexOf,
      a = r(57);
    t.exports = function (t, e) {
      var r,
        s = i(t),
        l = 0,
        u = [];
      for (r in s) !n(a, r) && n(s, r) && u.push(r);
      for (; e.length > l; ) n(s, (r = e[l++])) && (~o(u, r) || u.push(r));
      return u;
    };
  },
  function (t, e, r) {
    var n = r(105);
    t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, r) {
    var n = r(23);
    t.exports = n('document', 'documentElement');
  },
  function (t, e, r) {
    var n = r(22),
      i = r(44).f,
      o = {}.toString,
      a =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return a && '[object Window]' == o.call(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(n(t));
    };
  },
  function (t, e, r) {
    var n = r(6);
    e.f = n;
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = function (t) {
      if (!n(t) && null !== t)
        throw TypeError("Can't set " + String(t) + ' as a prototype');
      return t;
    };
  },
  function (t, e, r) {
    var n = r(4);
    t.exports = function (t) {
      var e = t.return;
      if (void 0 !== e) return n(e.call(t)).value;
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(145);
    n(
      {
        target: 'Array',
        stat: !0,
        forced: !r(77)(function (t) {
          Array.from(t);
        }),
      },
      { from: i }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(39),
      i = r(10),
      o = r(200),
      a = r(109),
      s = r(7),
      l = r(46),
      u = r(65);
    t.exports = function (t) {
      var e,
        r,
        c,
        f,
        h,
        d,
        p = i(t),
        v = 'function' == typeof this ? this : Array,
        g = arguments.length,
        m = g > 1 ? arguments[1] : void 0,
        y = void 0 !== m,
        b = u(p),
        w = 0;
      if (
        (y && (m = n(m, g > 2 ? arguments[2] : void 0, 2)),
        null == b || (v == Array && a(b)))
      )
        for (r = new v((e = s(p.length))); e > w; w++)
          (d = y ? m(p[w], w) : p[w]), l(r, w, d);
      else
        for (h = (f = b.call(p)).next, r = new v(); !(c = h.call(f)).done; w++)
          (d = y ? o(f, m, [c.value, w], !0) : c.value), l(r, w, d);
      return (r.length = w), r;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(10),
      i = r(38),
      o = r(7),
      a = Math.min;
    t.exports =
      [].copyWithin ||
      function (t, e) {
        var r = n(this),
          s = o(r.length),
          l = i(t, s),
          u = i(e, s),
          c = arguments.length > 2 ? arguments[2] : void 0,
          f = a((void 0 === c ? s : i(c, s)) - u, s - l),
          h = 1;
        for (
          u < l && l < u + f && ((h = -1), (u += f - 1), (l += f - 1));
          f-- > 0;

        )
          u in r ? (r[l] = r[u]) : delete r[l], (l += h), (u += h);
        return r;
      };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(111),
      o = r(42);
    n({ target: 'Array', proto: !0 }, { fill: i }), o('fill');
  },
  function (t, e, r) {
    'use strict';
    var n = r(45),
      i = r(7),
      o = r(39),
      a = function (t, e, r, s, l, u, c, f) {
        for (var h, d = l, p = 0, v = !!c && o(c, f, 3); p < s; ) {
          if (p in r) {
            if (((h = v ? v(r[p], p, e) : r[p]), u > 0 && n(h)))
              d = a(t, e, h, i(h.length), d, u - 1) - 1;
            else {
              if (d >= 9007199254740991)
                throw TypeError('Exceed the acceptable array length');
              t[d] = h;
            }
            d++;
          }
          p++;
        }
        return d;
      };
    t.exports = a;
  },
  function (t, e, r) {
    'use strict';
    var n = r(12).forEach,
      i = r(35),
      o = r(20),
      a = i('forEach'),
      s = o('forEach');
    t.exports =
      a && s
        ? [].forEach
        : function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, r) {
    'use strict';
    var n = r(22),
      i = r(27),
      o = r(7),
      a = r(35),
      s = r(20),
      l = Math.min,
      u = [].lastIndexOf,
      c = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
      f = a('lastIndexOf'),
      h = s('indexOf', { ACCESSORS: !0, 1: 0 }),
      d = c || !f || !h;
    t.exports = d
      ? function (t) {
          if (c) return u.apply(this, arguments) || 0;
          var e = n(this),
            r = o(e.length),
            a = r - 1;
          for (
            arguments.length > 1 && (a = l(a, i(arguments[1]))),
              a < 0 && (a = r + a);
            a >= 0;
            a--
          )
            if (a in e && e[a] === t) return a || 0;
          return -1;
        }
      : u;
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(3),
      o = r(45),
      a = r(38),
      s = r(7),
      l = r(22),
      u = r(46),
      c = r(6),
      f = r(67),
      h = r(20),
      d = f('slice'),
      p = h('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
      v = c('species'),
      g = [].slice,
      m = Math.max;
    n(
      { target: 'Array', proto: !0, forced: !d || !p },
      {
        slice: function (t, e) {
          var r,
            n,
            c,
            f = l(this),
            h = s(f.length),
            d = a(t, h),
            p = a(void 0 === e ? h : e, h);
          if (
            o(f) &&
            ('function' != typeof (r = f.constructor) ||
            (r !== Array && !o(r.prototype))
              ? i(r) && null === (r = r[v]) && (r = void 0)
              : (r = void 0),
            r === Array || void 0 === r)
          )
            return g.call(f, d, p);
          for (
            n = new (void 0 === r ? Array : r)(m(p - d, 0)), c = 0;
            d < p;
            d++, c++
          )
            d in f && u(n, c, f[d]);
          return (n.length = c), n;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(18),
      o = r(10),
      a = r(1),
      s = r(35),
      l = [],
      u = l.sort,
      c = a(function () {
        l.sort(void 0);
      }),
      f = a(function () {
        l.sort(null);
      }),
      h = s('sort');
    n(
      { target: 'Array', proto: !0, forced: c || !f || !h },
      {
        sort: function (t) {
          return void 0 === t ? u.call(o(this)) : u.call(o(this), i(t));
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      o,
      a = r(28),
      s = r(15),
      l = r(11),
      u = r(6),
      c = r(26),
      f = u('iterator'),
      h = !1;
    [].keys &&
      ('next' in (o = [].keys())
        ? (i = a(a(o))) !== Object.prototype && (n = i)
        : (h = !0)),
      null == n && (n = {}),
      c ||
        l(n, f) ||
        s(n, f, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h });
  },
  function (t, e, r) {
    'use strict';
    var n = r(18),
      i = r(3),
      o = [].slice,
      a = {},
      s = function (t, e, r) {
        if (!(e in a)) {
          for (var n = [], i = 0; i < e; i++) n[i] = 'a[' + i + ']';
          a[e] = Function('C,a', 'return new C(' + n.join(',') + ')');
        }
        return a[e](t, r);
      };
    t.exports =
      Function.bind ||
      function (t) {
        var e = n(this),
          r = o.call(arguments, 1),
          a = function () {
            var n = r.concat(o.call(arguments));
            return this instanceof a ? s(e, n.length, n) : e.apply(t, n);
          };
        return i(e.prototype) && (a.prototype = e.prototype), a;
      };
  },
  function (t, e, r) {
    var n = r(5),
      i = r(9).f,
      o = Function.prototype,
      a = o.toString,
      s = /^\s*function ([^ (]*)/;
    n &&
      !('name' in o) &&
      i(o, 'name', {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(s)[1];
          } catch (t) {
            return '';
          }
        },
      });
  },
  function (t, e, r) {
    'use strict';
    var n = r(5),
      i = r(1),
      o = r(61),
      a = r(104),
      s = r(75),
      l = r(10),
      u = r(55),
      c = Object.assign,
      f = Object.defineProperty;
    t.exports =
      !c ||
      i(function () {
        if (
          n &&
          1 !==
            c(
              { b: 1 },
              c(
                f({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    f(this, 'b', { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          r = Symbol();
        return (
          (t[r] = 7),
          'abcdefghijklmnopqrst'.split('').forEach(function (t) {
            e[t] = t;
          }),
          7 != c({}, t)[r] || 'abcdefghijklmnopqrst' != o(c({}, e)).join('')
        );
      })
        ? function (t, e) {
            for (
              var r = l(t), i = arguments.length, c = 1, f = a.f, h = s.f;
              i > c;

            )
              for (
                var d,
                  p = u(arguments[c++]),
                  v = f ? o(p).concat(f(p)) : o(p),
                  g = v.length,
                  m = 0;
                g > m;

              )
                (d = v[m++]), (n && !h.call(p, d)) || (r[d] = p[d]);
            return r;
          }
        : c;
  },
  function (t, e, r) {
    var n = r(5),
      i = r(61),
      o = r(22),
      a = r(75).f,
      s = function (t) {
        return function (e) {
          for (var r, s = o(e), l = i(s), u = l.length, c = 0, f = []; u > c; )
            (r = l[c++]), (n && !a.call(s, r)) || f.push(t ? [r, s[r]] : s[r]);
          return f;
        };
      };
    t.exports = { entries: s(!0), values: s(!1) };
  },
  function (t, e) {
    t.exports =
      Object.is ||
      function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      };
  },
  function (t, e, r) {
    'use strict';
    var n = r(83),
      i = r(4),
      o = r(7),
      a = r(14),
      s = r(86),
      l = r(87);
    n('match', 1, function (t, e, r) {
      return [
        function (e) {
          var r = a(this),
            n = null == e ? void 0 : e[t];
          return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
        },
        function (t) {
          var n = r(e, t, this);
          if (n.done) return n.value;
          var a = i(t),
            u = String(this);
          if (!a.global) return l(a, u);
          var c = a.unicode;
          a.lastIndex = 0;
          for (var f, h = [], d = 0; null !== (f = l(a, u)); ) {
            var p = String(f[0]);
            (h[d] = p),
              '' === p && (a.lastIndex = s(u, o(a.lastIndex), c)),
              d++;
          }
          return 0 === d ? null : h;
        },
      ];
    });
  },
  function (t, e, r) {
    var n = r(78);
    t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);
  },
  function (t, e, r) {
    'use strict';
    var n = r(83),
      i = r(4),
      o = r(10),
      a = r(7),
      s = r(27),
      l = r(14),
      u = r(86),
      c = r(87),
      f = Math.max,
      h = Math.min,
      d = Math.floor,
      p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      v = /\$([$&'`]|\d\d?)/g;
    n('replace', 2, function (t, e, r, n) {
      var g = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        m = n.REPLACE_KEEPS_$0,
        y = g ? '$' : '$0';
      return [
        function (r, n) {
          var i = l(this),
            o = null == r ? void 0 : r[t];
          return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
        },
        function (t, n) {
          if ((!g && m) || ('string' == typeof n && -1 === n.indexOf(y))) {
            var o = r(e, t, this, n);
            if (o.done) return o.value;
          }
          var l = i(t),
            d = String(this),
            p = 'function' == typeof n;
          p || (n = String(n));
          var v = l.global;
          if (v) {
            var w = l.unicode;
            l.lastIndex = 0;
          }
          for (var x = []; ; ) {
            var S = c(l, d);
            if (null === S) break;
            if ((x.push(S), !v)) break;
            '' === String(S[0]) && (l.lastIndex = u(d, a(l.lastIndex), w));
          }
          for (var C, k = '', T = 0, A = 0; A < x.length; A++) {
            S = x[A];
            for (
              var L = String(S[0]),
                O = f(h(s(S.index), d.length), 0),
                M = [],
                E = 1;
              E < S.length;
              E++
            )
              M.push(void 0 === (C = S[E]) ? C : String(C));
            var _ = S.groups;
            if (p) {
              var N = [L].concat(M, O, d);
              void 0 !== _ && N.push(_);
              var I = String(n.apply(void 0, N));
            } else I = b(L, d, O, M, _, n);
            O >= T && ((k += d.slice(T, O) + I), (T = O + L.length));
          }
          return k + d.slice(T);
        },
      ];
      function b(t, r, n, i, a, s) {
        var l = n + t.length,
          u = i.length,
          c = v;
        return (
          void 0 !== a && ((a = o(a)), (c = p)),
          e.call(s, c, function (e, o) {
            var s;
            switch (o.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return t;
              case '`':
                return r.slice(0, n);
              case "'":
                return r.slice(l);
              case '<':
                s = a[o.slice(1, -1)];
                break;
              default:
                var c = +o;
                if (0 === c) return e;
                if (c > u) {
                  var f = d(c / 10);
                  return 0 === f
                    ? e
                    : f <= u
                    ? void 0 === i[f - 1]
                      ? o.charAt(1)
                      : i[f - 1] + o.charAt(1)
                    : e;
                }
                s = i[c - 1];
            }
            return void 0 === s ? '' : s;
          })
        );
      }
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(16),
      i = r(4),
      o = r(1),
      a = r(52),
      s = RegExp.prototype,
      l = s.toString,
      u = o(function () {
        return '/a/b' != l.call({ source: 'a', flags: 'b' });
      }),
      c = 'toString' != l.name;
    (u || c) &&
      n(
        RegExp.prototype,
        'toString',
        function () {
          var t = i(this),
            e = String(t.source),
            r = t.flags;
          return (
            '/' +
            e +
            '/' +
            String(
              void 0 === r && t instanceof RegExp && !('flags' in s)
                ? a.call(t)
                : r
            )
          );
        },
        { unsafe: !0 }
      );
  },
  function (t, e, r) {
    var n = r(2),
      i = r(53).trim,
      o = r(88),
      a = n.parseInt,
      s = /^[+-]?0[Xx]/,
      l = 8 !== a(o + '08') || 22 !== a(o + '0x16');
    t.exports = l
      ? function (t, e) {
          var r = i(String(t));
          return a(r, e >>> 0 || (s.test(r) ? 16 : 10));
        }
      : a;
  },
  function (t, e, r) {
    var n = r(2),
      i = r(53).trim,
      o = r(88),
      a = n.parseFloat,
      s = 1 / a(o + '-0') != -1 / 0;
    t.exports = s
      ? function (t) {
          var e = i(String(t)),
            r = a(e);
          return 0 === r && '-' == e.charAt(0) ? -0 : r;
        }
      : a;
  },
  function (t, e, r) {
    'use strict';
    var n = r(5),
      i = r(2),
      o = r(60),
      a = r(16),
      s = r(11),
      l = r(33),
      u = r(89),
      c = r(29),
      f = r(1),
      h = r(31),
      d = r(44).f,
      p = r(13).f,
      v = r(9).f,
      g = r(53).trim,
      m = i.Number,
      y = m.prototype,
      b = 'Number' == l(h(y)),
      w = function (t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          l,
          u = c(t, !1);
        if ('string' == typeof u && u.length > 2)
          if (43 === (e = (u = g(u)).charCodeAt(0)) || 45 === e) {
            if (88 === (r = u.charCodeAt(2)) || 120 === r) return NaN;
          } else if (48 === e) {
            switch (u.charCodeAt(1)) {
              case 66:
              case 98:
                (n = 2), (i = 49);
                break;
              case 79:
              case 111:
                (n = 8), (i = 55);
                break;
              default:
                return +u;
            }
            for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
              if ((l = o.charCodeAt(s)) < 48 || l > i) return NaN;
            return parseInt(o, n);
          }
        return +u;
      };
    if (o('Number', !m(' 0o1') || !m('0b1') || m('+0x1'))) {
      for (
        var x,
          S = function (t) {
            var e = arguments.length < 1 ? 0 : t,
              r = this;
            return r instanceof S &&
              (b
                ? f(function () {
                    y.valueOf.call(r);
                  })
                : 'Number' != l(r))
              ? u(new m(w(e)), r, S)
              : w(e);
          },
          C = n
            ? d(m)
            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                ','
              ),
          k = 0;
        C.length > k;
        k++
      )
        s(m, (x = C[k])) && !s(S, x) && v(S, x, p(m, x));
      (S.prototype = y), (y.constructor = S), a(i, 'Number', S);
    }
  },
  function (t, e, r) {
    r(0)({ target: 'Number', stat: !0 }, { isFinite: r(282) });
  },
  function (t, e, r) {
    var n = r(3),
      i = Math.floor;
    t.exports = function (t) {
      return !n(t) && isFinite(t) && i(t) === t;
    };
  },
  function (t, e, r) {
    var n = r(33);
    t.exports = function (t) {
      if ('number' != typeof t && 'Number' != n(t))
        throw TypeError('Incorrect invocation');
      return +t;
    };
  },
  function (t, e) {
    var r = Math.log;
    t.exports =
      Math.log1p ||
      function (t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : r(1 + t);
      };
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n.Promise;
  },
  function (t, e, r) {
    var n = r(78);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
  },
  function (t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      l,
      u,
      c,
      f = r(2),
      h = r(13).f,
      d = r(124).set,
      p = r(171),
      v = r(50),
      g = f.MutationObserver || f.WebKitMutationObserver,
      m = f.document,
      y = f.process,
      b = f.Promise,
      w = h(f, 'queueMicrotask'),
      x = w && w.value;
    x ||
      ((n = function () {
        var t, e;
        for (v && (t = y.domain) && t.exit(); i; ) {
          (e = i.fn), (i = i.next);
          try {
            e();
          } catch (t) {
            throw (i ? a() : (o = void 0), t);
          }
        }
        (o = void 0), t && t.enter();
      }),
      !p && !v && g && m
        ? ((s = !0),
          (l = m.createTextNode('')),
          new g(n).observe(l, { characterData: !0 }),
          (a = function () {
            l.data = s = !s;
          }))
        : b && b.resolve
        ? ((u = b.resolve(void 0)),
          (c = u.then),
          (a = function () {
            c.call(u, n);
          }))
        : (a = v
            ? function () {
                y.nextTick(n);
              }
            : function () {
                d.call(f, n);
              })),
      (t.exports =
        x ||
        function (t) {
          var e = { fn: t, next: void 0 };
          o && (o.next = e), i || ((i = e), a()), (o = e);
        });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(3),
      o = r(91);
    t.exports = function (t, e) {
      if ((n(t), i(e) && e.constructor === t)) return e;
      var r = o.f(t);
      return (0, r.resolve)(e), r.promise;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(9).f,
      i = r(31),
      o = r(54),
      a = r(39),
      s = r(43),
      l = r(41),
      u = r(114),
      c = r(51),
      f = r(5),
      h = r(48).fastKey,
      d = r(17),
      p = d.set,
      v = d.getterFor;
    t.exports = {
      getConstructor: function (t, e, r, u) {
        var c = t(function (t, n) {
            s(t, c, e),
              p(t, {
                type: e,
                index: i(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              f || (t.size = 0),
              null != n && l(n, t[u], { that: t, AS_ENTRIES: r });
          }),
          d = v(e),
          g = function (t, e, r) {
            var n,
              i,
              o = d(t),
              a = m(t, e);
            return (
              a
                ? (a.value = r)
                : ((o.last = a = {
                    index: (i = h(e, !0)),
                    key: e,
                    value: r,
                    previous: (n = o.last),
                    next: void 0,
                    removed: !1,
                  }),
                  o.first || (o.first = a),
                  n && (n.next = a),
                  f ? o.size++ : t.size++,
                  'F' !== i && (o.index[i] = a)),
              t
            );
          },
          m = function (t, e) {
            var r,
              n = d(t),
              i = h(e);
            if ('F' !== i) return n.index[i];
            for (r = n.first; r; r = r.next) if (r.key == e) return r;
          };
        return (
          o(c.prototype, {
            clear: function () {
              for (var t = d(this), e = t.index, r = t.first; r; )
                (r.removed = !0),
                  r.previous && (r.previous = r.previous.next = void 0),
                  delete e[r.index],
                  (r = r.next);
              (t.first = t.last = void 0), f ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = d(this),
                r = m(this, t);
              if (r) {
                var n = r.next,
                  i = r.previous;
                delete e.index[r.index],
                  (r.removed = !0),
                  i && (i.next = n),
                  n && (n.previous = i),
                  e.first == r && (e.first = n),
                  e.last == r && (e.last = i),
                  f ? e.size-- : this.size--;
              }
              return !!r;
            },
            forEach: function (t) {
              for (
                var e,
                  r = d(this),
                  n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (e = e ? e.next : r.first);

              )
                for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!m(this, t);
            },
          }),
          o(
            c.prototype,
            r
              ? {
                  get: function (t) {
                    var e = m(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return g(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return g(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          f &&
            n(c.prototype, 'size', {
              get: function () {
                return d(this).size;
              },
            }),
          c
        );
      },
      setStrong: function (t, e, r) {
        var n = e + ' Iterator',
          i = v(e),
          o = v(n);
        u(
          t,
          e,
          function (t, e) {
            p(this, { type: n, target: t, state: i(t), kind: e, last: void 0 });
          },
          function () {
            for (var t = o(this), e = t.kind, r = t.last; r && r.removed; )
              r = r.previous;
            return t.target && (t.last = r = r ? r.next : t.state.first)
              ? 'keys' == e
                ? { value: r.key, done: !1 }
                : 'values' == e
                ? { value: r.value, done: !1 }
                : { value: [r.key, r.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          r ? 'entries' : 'values',
          !r,
          !0
        ),
          c(e);
      },
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(54),
      i = r(48).getWeakData,
      o = r(4),
      a = r(3),
      s = r(43),
      l = r(41),
      u = r(12),
      c = r(11),
      f = r(17),
      h = f.set,
      d = f.getterFor,
      p = u.find,
      v = u.findIndex,
      g = 0,
      m = function (t) {
        return t.frozen || (t.frozen = new y());
      },
      y = function () {
        this.entries = [];
      },
      b = function (t, e) {
        return p(t.entries, function (t) {
          return t[0] === e;
        });
      };
    (y.prototype = {
      get: function (t) {
        var e = b(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!b(this, t);
      },
      set: function (t, e) {
        var r = b(this, t);
        r ? (r[1] = e) : this.entries.push([t, e]);
      },
      delete: function (t) {
        var e = v(this.entries, function (e) {
          return e[0] === t;
        });
        return ~e && this.entries.splice(e, 1), !!~e;
      },
    }),
      (t.exports = {
        getConstructor: function (t, e, r, u) {
          var f = t(function (t, n) {
              s(t, f, e),
                h(t, { type: e, id: g++, frozen: void 0 }),
                null != n && l(n, t[u], { that: t, AS_ENTRIES: r });
            }),
            p = d(e),
            v = function (t, e, r) {
              var n = p(t),
                a = i(o(e), !0);
              return !0 === a ? m(n).set(e, r) : (a[n.id] = r), t;
            };
          return (
            n(f.prototype, {
              delete: function (t) {
                var e = p(this);
                if (!a(t)) return !1;
                var r = i(t);
                return !0 === r
                  ? m(e).delete(t)
                  : r && c(r, e.id) && delete r[e.id];
              },
              has: function (t) {
                var e = p(this);
                if (!a(t)) return !1;
                var r = i(t);
                return !0 === r ? m(e).has(t) : r && c(r, e.id);
              },
            }),
            n(
              f.prototype,
              r
                ? {
                    get: function (t) {
                      var e = p(this);
                      if (a(t)) {
                        var r = i(t);
                        return !0 === r ? m(e).get(t) : r ? r[e.id] : void 0;
                      }
                    },
                    set: function (t, e) {
                      return v(this, t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return v(this, t, !0);
                    },
                  }
            ),
            f
          );
        },
      });
  },
  function (t, e, r) {
    var n = r(27),
      i = r(7);
    t.exports = function (t) {
      if (void 0 === t) return 0;
      var e = n(t),
        r = i(e);
      if (e !== r) throw RangeError('Wrong length or index');
      return r;
    };
  },
  function (t, e, r) {
    var n = r(334);
    t.exports = function (t, e) {
      var r = n(t);
      if (r % e) throw RangeError('Wrong offset');
      return r;
    };
  },
  function (t, e, r) {
    var n = r(10),
      i = r(7),
      o = r(65),
      a = r(109),
      s = r(39),
      l = r(8).aTypedArrayConstructor;
    t.exports = function (t) {
      var e,
        r,
        u,
        c,
        f,
        h,
        d = n(t),
        p = arguments.length,
        v = p > 1 ? arguments[1] : void 0,
        g = void 0 !== v,
        m = o(d);
      if (null != m && !a(m))
        for (h = (f = m.call(d)).next, d = []; !(c = h.call(f)).done; )
          d.push(c.value);
      for (
        g && p > 2 && (v = s(v, arguments[2], 2)),
          r = i(d.length),
          u = new (l(this))(r),
          e = 0;
        r > e;
        e++
      )
        u[e] = g ? v(d[e], e) : d[e];
      return u;
    };
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(6),
      o = r(26),
      a = i('iterator');
    t.exports = !n(function () {
      var t = new URL('b?a=1&b=2&c=3', 'http://a'),
        e = t.searchParams,
        r = '';
      return (
        (t.pathname = 'c%20d'),
        e.forEach(function (t, n) {
          e.delete('b'), (r += n + t);
        }),
        (o && !t.toJSON) ||
          !e.sort ||
          'http://a/c%20d?a=1&c=3' !== t.href ||
          '3' !== e.get('c') ||
          'a=1' !== String(new URLSearchParams('?a=1')) ||
          !e[a] ||
          'a' !== new URL('https://a@b').username ||
          'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
          'xn--e1aybc' !== new URL('http://тест').host ||
          '#%D0%B1' !== new URL('http://a#б').hash ||
          'a1c3' !== r ||
          'x' !== new URL('http://x', void 0).host
      );
    });
  },
  function (t, e, r) {
    'use strict';
    r(47);
    var n = r(0),
      i = r(23),
      o = r(180),
      a = r(16),
      s = r(54),
      l = r(30),
      u = r(115),
      c = r(17),
      f = r(43),
      h = r(11),
      d = r(39),
      p = r(66),
      v = r(4),
      g = r(3),
      m = r(31),
      y = r(32),
      b = r(388),
      w = r(65),
      x = r(6),
      S = i('fetch'),
      C = i('Headers'),
      k = x('iterator'),
      T = c.set,
      A = c.getterFor('URLSearchParams'),
      L = c.getterFor('URLSearchParamsIterator'),
      O = /\+/g,
      M = Array(4),
      E = function (t) {
        return (
          M[t - 1] || (M[t - 1] = RegExp('((?:%[\\da-f]{2}){' + t + '})', 'gi'))
        );
      },
      _ = function (t) {
        try {
          return decodeURIComponent(t);
        } catch (e) {
          return t;
        }
      },
      N = function (t) {
        var e = t.replace(O, ' '),
          r = 4;
        try {
          return decodeURIComponent(e);
        } catch (t) {
          for (; r; ) e = e.replace(E(r--), _);
          return e;
        }
      },
      I = /[!'()~]|%20/g,
      j = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
      },
      P = function (t) {
        return j[t];
      },
      R = function (t) {
        return encodeURIComponent(t).replace(I, P);
      },
      D = function (t, e) {
        if (e)
          for (var r, n, i = e.split('&'), o = 0; o < i.length; )
            (r = i[o++]).length &&
              ((n = r.split('=')),
              t.push({ key: N(n.shift()), value: N(n.join('=')) }));
      },
      F = function (t) {
        (this.entries.length = 0), D(this.entries, t);
      },
      W = function (t, e) {
        if (t < e) throw TypeError('Not enough arguments');
      },
      z = u(
        function (t, e) {
          T(this, {
            type: 'URLSearchParamsIterator',
            iterator: b(A(t).entries),
            kind: e,
          });
        },
        'Iterator',
        function () {
          var t = L(this),
            e = t.kind,
            r = t.iterator.next(),
            n = r.value;
          return (
            r.done ||
              (r.value =
                'keys' === e
                  ? n.key
                  : 'values' === e
                  ? n.value
                  : [n.key, n.value]),
            r
          );
        }
      ),
      B = function () {
        f(this, B, 'URLSearchParams');
        var t,
          e,
          r,
          n,
          i,
          o,
          a,
          s,
          l,
          u = arguments.length > 0 ? arguments[0] : void 0,
          c = this,
          d = [];
        if (
          (T(c, {
            type: 'URLSearchParams',
            entries: d,
            updateURL: function () {},
            updateSearchParams: F,
          }),
          void 0 !== u)
        )
          if (g(u))
            if ('function' == typeof (t = w(u)))
              for (r = (e = t.call(u)).next; !(n = r.call(e)).done; ) {
                if (
                  (a = (o = (i = b(v(n.value))).next).call(i)).done ||
                  (s = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError('Expected sequence with length 2');
                d.push({ key: a.value + '', value: s.value + '' });
              }
            else for (l in u) h(u, l) && d.push({ key: l, value: u[l] + '' });
          else
            D(
              d,
              'string' == typeof u
                ? '?' === u.charAt(0)
                  ? u.slice(1)
                  : u
                : u + ''
            );
      },
      H = B.prototype;
    s(
      H,
      {
        append: function (t, e) {
          W(arguments.length, 2);
          var r = A(this);
          r.entries.push({ key: t + '', value: e + '' }), r.updateURL();
        },
        delete: function (t) {
          W(arguments.length, 1);
          for (
            var e = A(this), r = e.entries, n = t + '', i = 0;
            i < r.length;

          )
            r[i].key === n ? r.splice(i, 1) : i++;
          e.updateURL();
        },
        get: function (t) {
          W(arguments.length, 1);
          for (var e = A(this).entries, r = t + '', n = 0; n < e.length; n++)
            if (e[n].key === r) return e[n].value;
          return null;
        },
        getAll: function (t) {
          W(arguments.length, 1);
          for (
            var e = A(this).entries, r = t + '', n = [], i = 0;
            i < e.length;
            i++
          )
            e[i].key === r && n.push(e[i].value);
          return n;
        },
        has: function (t) {
          W(arguments.length, 1);
          for (var e = A(this).entries, r = t + '', n = 0; n < e.length; )
            if (e[n++].key === r) return !0;
          return !1;
        },
        set: function (t, e) {
          W(arguments.length, 1);
          for (
            var r,
              n = A(this),
              i = n.entries,
              o = !1,
              a = t + '',
              s = e + '',
              l = 0;
            l < i.length;
            l++
          )
            (r = i[l]).key === a &&
              (o ? i.splice(l--, 1) : ((o = !0), (r.value = s)));
          o || i.push({ key: a, value: s }), n.updateURL();
        },
        sort: function () {
          var t,
            e,
            r,
            n = A(this),
            i = n.entries,
            o = i.slice();
          for (i.length = 0, r = 0; r < o.length; r++) {
            for (t = o[r], e = 0; e < r; e++)
              if (i[e].key > t.key) {
                i.splice(e, 0, t);
                break;
              }
            e === r && i.push(t);
          }
          n.updateURL();
        },
        forEach: function (t) {
          for (
            var e,
              r = A(this).entries,
              n = d(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            i < r.length;

          )
            n((e = r[i++]).value, e.key, this);
        },
        keys: function () {
          return new z(this, 'keys');
        },
        values: function () {
          return new z(this, 'values');
        },
        entries: function () {
          return new z(this, 'entries');
        },
      },
      { enumerable: !0 }
    ),
      a(H, k, H.entries),
      a(
        H,
        'toString',
        function () {
          for (var t, e = A(this).entries, r = [], n = 0; n < e.length; )
            (t = e[n++]), r.push(R(t.key) + '=' + R(t.value));
          return r.join('&');
        },
        { enumerable: !0 }
      ),
      l(B, 'URLSearchParams'),
      n({ global: !0, forced: !o }, { URLSearchParams: B }),
      o ||
        'function' != typeof S ||
        'function' != typeof C ||
        n(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              var e,
                r,
                n,
                i = [t];
              return (
                arguments.length > 1 &&
                  (g((e = arguments[1])) &&
                    ((r = e.body),
                    'URLSearchParams' === p(r) &&
                      ((n = e.headers ? new C(e.headers) : new C()).has(
                        'content-type'
                      ) ||
                        n.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8'
                        ),
                      (e = m(e, { body: y(0, String(r)), headers: y(0, n) })))),
                  i.push(e)),
                S.apply(this, i)
              );
            },
          }
        ),
      (t.exports = { URLSearchParams: B, getState: A });
  },
  function (t, e, r) {
    'use strict';
    e.a = function () {
      return !1;
    };
  },
  function (t, e, r) {
    'use strict';
    (function (t) {
      var n = r(21),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i ? n.a.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      e.a = function (t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = s ? s(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    }.call(this, r(130)(t)));
  },
  function (t) {
    t.exports = JSON.parse(
      '{"length":950,"regions":[{"modelStart":5,"modelEnd":292,"colour":"#2dcf00","endStyle":"jagged","startStyle":"jagged","display":true,"end":361,"aliEnd":361,"href":"/family/PF00082","text":"Peptidase_S8","modelLength":307,"metadata":{"scoreName":"e-value","score":"1.3e-38","description":"Subtilase family","accession":"PF00082","end":587,"database":"pfam","aliEnd":573,"identifier":"Peptidase_S8","type":"Domain","aliStart":163,"start":159},"type":"pfama","aliStart":163,"start":159},{"modelStart":5,"modelEnd":292,"colour":"#2dcf00","endStyle":"jagged","startStyle":"jagged","display":true,"end":587,"aliEnd":573,"href":"/family/PF00082","text":"Peptidase_S8","modelLength":307,"metadata":{"scoreName":"e-value","score":"1.3e-38","description":"Subtilase family","accession":"PF00082","end":587,"database":"pfam","aliEnd":573,"identifier":"Peptidase_S8","type":"Domain","aliStart":163,"start":159},"type":"pfama","aliStart":470,"start":470},{"modelStart":12,"modelEnd":100,"colour":"#ff5353","endStyle":"curved","startStyle":"jagged","display":true,"end":469,"aliEnd":469,"href":"/family/PF02225","text":"PA","modelLength":100,"metadata":{"scoreName":"e-value","score":"7.1e-09","description":"PA domain","accession":"PF02225","end":469,"database":"pfam","aliEnd":469,"identifier":"PA","type":"Family","aliStart":385,"start":362},"type":"pfama","aliStart":385,"start":362},{"modelStart":1,"modelEnd":112,"colour":"#5b5bff","endStyle":"curved","startStyle":"curved","display":true,"end":726,"aliEnd":726,"href":"/family/PF06280","text":"DUF1034","modelLength":112,"metadata":{"scoreName":"e-value","score":"1.1e-13","description":"Fn3-like domain (DUF1034)","accession":"PF06280","end":726,"database":"pfam","aliEnd":726,"identifier":"DUF1034","type":"Domain","aliStart":613,"start":613},"type":"pfama","aliStart":613,"start":613}],"markups":[{"lineColour":"#ff0000","colour":"#000000","display":true,"end":470,"v_align":"top","metadata":{"database":"pfam","type":"Link between discontinous regions","end":470,"start":361},"type":"Nested","start":361},{"lineColour":"#333333","colour":"#e469fe","display":true,"residue":"S","headStyle":"diamond","v_align":"top","type":"Pfam predicted active site","metadata":{"database":"pfam","description":"S Pfam predicted active site","start":538},"start":538},{"lineColour":"#333333","colour":"#e469fe","display":true,"residue":"D","headStyle":"diamond","v_align":"top","type":"Pfam predicted active site","metadata":{"database":"pfam","description":"D Pfam predicted active site","start":185},"start":185},{"lineColour":"#333333","colour":"#e469fe","display":true,"residue":"H","headStyle":"diamond","v_align":"top","type":"Pfam predicted active site","metadata":{"database":"pfam","description":"H Pfam predicted active site","start":235},"start":235}],"metadata":{"database":"uniprot","identifier":"Q560V8_CRYNE","organism":"Cryptococcus neoformans (Filobasidiella neoformans)","description":"Putative uncharacterized protein","taxid":5207,"accession":"Q560V8"},"motifs":[{"colour":"#ffa500","metadata":{"database":"Phobius","type":"sig_p","end":23,"start":1},"type":"sig_p","display":true,"end":23,"start":1},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"2.5100","end":21,"start":3},"type":"low_complexity","display":false,"end":21,"start":3},{"colour":"#86bcff","metadata":{"database":"seg","type":"low_complexity","score":"1.4900","end":156,"start":134},"type":"low_complexity","display":true,"end":156,"start":134},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"2.0200","end":187,"start":173},"type":"low_complexity","display":false,"end":187,"start":173},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"2.0800","end":218,"start":207},"type":"low_complexity","display":false,"end":218,"start":207},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"2.1300","end":231,"start":220},"type":"low_complexity","display":false,"end":231,"start":220},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"2.0000","end":554,"start":538},"type":"low_complexity","display":false,"end":554,"start":538},{"colour":"#86bcff","metadata":{"database":"seg","type":"low_complexity","score":"1.9100","end":590,"start":578},"type":"low_complexity","display":true,"end":590,"start":588},{"colour":"#00ffff","metadata":{"database":"seg","type":"low_complexity","score":"1.7600","end":831,"start":822},"type":"low_complexity","display":false,"end":831,"start":822},{"colour":["#ff7ff0","#f2ff7f","#7ff2ff"],"href":"/pfamb/PB075017","type":"pfamb","metadata":{"database":"pfam","identifier":"Pfam-B_75017","type":"Pfam-B","start":791,"end":949,"accession":"PB075017"},"start":791,"end":949,"display":true}]}'
    );
  },
  function (t, e, r) {
    r(186), r(382);
    var n = r(58);
    t.exports = n;
  },
  function (t, e, r) {
    r(49),
      r(187),
      r(63),
      r(188),
      r(189),
      r(107),
      r(190),
      r(191),
      r(192),
      r(193),
      r(194),
      r(195),
      r(196),
      r(197),
      r(198),
      r(199),
      r(144),
      r(201),
      r(202),
      r(34),
      r(203),
      r(204),
      r(147),
      r(79),
      r(205),
      r(206),
      r(207),
      r(208),
      r(112),
      r(209),
      r(210),
      r(211),
      r(212),
      r(113),
      r(213),
      r(214),
      r(215),
      r(151),
      r(216),
      r(152),
      r(217),
      r(218),
      r(219),
      r(220),
      r(47),
      r(221),
      r(155),
      r(222),
      r(223),
      r(224),
      r(225),
      r(226),
      r(227),
      r(228),
      r(229),
      r(230),
      r(116),
      r(117),
      r(231),
      r(232),
      r(233),
      r(234),
      r(235),
      r(236),
      r(70),
      r(237),
      r(238),
      r(239),
      r(240),
      r(71),
      r(242),
      r(243),
      r(244),
      r(245),
      r(246),
      r(247),
      r(248),
      r(249),
      r(250),
      r(159),
      r(251),
      r(252),
      r(253),
      r(254),
      r(161),
      r(255),
      r(256),
      r(257),
      r(258),
      r(259),
      r(260),
      r(74),
      r(261),
      r(262),
      r(263),
      r(264),
      r(265),
      r(266),
      r(267),
      r(268),
      r(269),
      r(270),
      r(271),
      r(272),
      r(273),
      r(274),
      r(275),
      r(73),
      r(276),
      r(277),
      r(278),
      r(162),
      r(279),
      r(280),
      r(165),
      r(281),
      r(166),
      r(283),
      r(284),
      r(285),
      r(286),
      r(287),
      r(288),
      r(289),
      r(290),
      r(291),
      r(292),
      r(293),
      r(294),
      r(295),
      r(296),
      r(297),
      r(298),
      r(299),
      r(301),
      r(302),
      r(303),
      r(304),
      r(305),
      r(306),
      r(307),
      r(308),
      r(309),
      r(310),
      r(311),
      r(312),
      r(313),
      r(315),
      r(316),
      r(318),
      r(319),
      r(320),
      r(322),
      r(323),
      r(324),
      r(325),
      r(126),
      r(326),
      r(327),
      r(328),
      r(330),
      r(331),
      r(332),
      r(333),
      r(335),
      r(336),
      r(337),
      r(338),
      r(339),
      r(340),
      r(341),
      r(342),
      r(343),
      r(344),
      r(345),
      r(346),
      r(347),
      r(348),
      r(349),
      r(350),
      r(351),
      r(352),
      r(353),
      r(354),
      r(355),
      r(356),
      r(357),
      r(358),
      r(359),
      r(360),
      r(361),
      r(362),
      r(363),
      r(364),
      r(365),
      r(366),
      r(367),
      r(368),
      r(369),
      r(370),
      r(371),
      r(372),
      r(373),
      r(374),
      r(375),
      r(376),
      r(377),
      r(378),
      r(379),
      r(380),
      r(381);
    var n = r(58);
    t.exports = n;
  },
  function (t, e, r) {
    r(19)('asyncIterator');
  },
  function (t, e, r) {
    r(19)('hasInstance');
  },
  function (t, e, r) {
    r(19)('isConcatSpreadable');
  },
  function (t, e, r) {
    r(19)('match');
  },
  function (t, e, r) {
    r(19)('matchAll');
  },
  function (t, e, r) {
    r(19)('replace');
  },
  function (t, e, r) {
    r(19)('search');
  },
  function (t, e, r) {
    r(19)('species');
  },
  function (t, e, r) {
    r(19)('split');
  },
  function (t, e, r) {
    r(19)('toPrimitive');
  },
  function (t, e, r) {
    r(19)('toStringTag');
  },
  function (t, e, r) {
    r(19)('unscopables');
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(28),
      o = r(40),
      a = r(31),
      s = r(15),
      l = r(32),
      u = r(41),
      c = function (t, e) {
        var r = this;
        if (!(r instanceof c)) return new c(t, e);
        o && (r = o(new Error(void 0), i(r))),
          void 0 !== e && s(r, 'message', String(e));
        var n = [];
        return u(t, n.push, { that: n }), s(r, 'errors', n), r;
      };
    (c.prototype = a(Error.prototype, {
      constructor: l(5, c),
      message: l(5, ''),
      name: l(5, 'AggregateError'),
    })),
      n({ global: !0 }, { AggregateError: c });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(143);
    t.exports = function (t, e, r, o) {
      try {
        return o ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        throw (i(t), e);
      }
    };
  },
  function (t, e, r) {
    r(0)({ target: 'Array', stat: !0 }, { isArray: r(45) });
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(1),
      o = r(46);
    n(
      {
        target: 'Array',
        stat: !0,
        forced: i(function () {
          function t() {}
          return !(Array.of.call(t) instanceof t);
        }),
      },
      {
        of: function () {
          for (
            var t = 0,
              e = arguments.length,
              r = new ('function' == typeof this ? this : Array)(e);
            e > t;

          )
            o(r, t, arguments[t++]);
          return (r.length = e), r;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(146),
      o = r(42);
    n({ target: 'Array', proto: !0 }, { copyWithin: i }), o('copyWithin');
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).every,
      o = r(35),
      a = r(20),
      s = o('every'),
      l = a('every');
    n(
      { target: 'Array', proto: !0, forced: !s || !l },
      {
        every: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).find,
      o = r(42),
      a = r(20),
      s = !0,
      l = a('find');
    'find' in [] &&
      Array(1).find(function () {
        s = !1;
      }),
      n(
        { target: 'Array', proto: !0, forced: s || !l },
        {
          find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o('find');
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).findIndex,
      o = r(42),
      a = r(20),
      s = !0,
      l = a('findIndex');
    'findIndex' in [] &&
      Array(1).findIndex(function () {
        s = !1;
      }),
      n(
        { target: 'Array', proto: !0, forced: s || !l },
        {
          findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o('findIndex');
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(148),
      o = r(10),
      a = r(7),
      s = r(27),
      l = r(62);
    n(
      { target: 'Array', proto: !0 },
      {
        flat: function () {
          var t = arguments.length ? arguments[0] : void 0,
            e = o(this),
            r = a(e.length),
            n = l(e, 0);
          return (n.length = i(n, e, e, r, 0, void 0 === t ? 1 : s(t))), n;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(148),
      o = r(10),
      a = r(7),
      s = r(18),
      l = r(62);
    n(
      { target: 'Array', proto: !0 },
      {
        flatMap: function (t) {
          var e,
            r = o(this),
            n = a(r.length);
          return (
            s(t),
            ((e = l(r, 0)).length = i(
              e,
              r,
              r,
              n,
              0,
              1,
              t,
              arguments.length > 1 ? arguments[1] : void 0
            )),
            e
          );
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(59).includes,
      o = r(42);
    n(
      {
        target: 'Array',
        proto: !0,
        forced: !r(20)('indexOf', { ACCESSORS: !0, 1: 0 }),
      },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o('includes');
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(59).indexOf,
      o = r(35),
      a = r(20),
      s = [].indexOf,
      l = !!s && 1 / [1].indexOf(1, -0) < 0,
      u = o('indexOf'),
      c = a('indexOf', { ACCESSORS: !0, 1: 0 });
    n(
      { target: 'Array', proto: !0, forced: l || !u || !c },
      {
        indexOf: function (t) {
          return l
            ? s.apply(this, arguments) || 0
            : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(55),
      o = r(22),
      a = r(35),
      s = [].join,
      l = i != Object,
      u = a('join', ',');
    n(
      { target: 'Array', proto: !0, forced: l || !u },
      {
        join: function (t) {
          return s.call(o(this), void 0 === t ? ',' : t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(150);
    n(
      { target: 'Array', proto: !0, forced: i !== [].lastIndexOf },
      { lastIndexOf: i }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(80).left,
      o = r(35),
      a = r(20),
      s = r(68),
      l = r(50),
      u = o('reduce'),
      c = a('reduce', { 1: 0 });
    n(
      {
        target: 'Array',
        proto: !0,
        forced: !u || !c || (!l && s > 79 && s < 83),
      },
      {
        reduce: function (t) {
          return i(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(80).right,
      o = r(35),
      a = r(20),
      s = r(68),
      l = r(50),
      u = o('reduceRight'),
      c = a('reduce', { 1: 0 });
    n(
      {
        target: 'Array',
        proto: !0,
        forced: !u || !c || (!l && s > 79 && s < 83),
      },
      {
        reduceRight: function (t) {
          return i(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(45),
      o = [].reverse,
      a = [1, 2];
    n(
      { target: 'Array', proto: !0, forced: String(a) === String(a.reverse()) },
      {
        reverse: function () {
          return i(this) && (this.length = this.length), o.call(this);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(12).some,
      o = r(35),
      a = r(20),
      s = o('some'),
      l = a('some');
    n(
      { target: 'Array', proto: !0, forced: !s || !l },
      {
        some: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(38),
      o = r(27),
      a = r(7),
      s = r(10),
      l = r(62),
      u = r(46),
      c = r(67),
      f = r(20),
      h = c('splice'),
      d = f('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
      p = Math.max,
      v = Math.min;
    n(
      { target: 'Array', proto: !0, forced: !h || !d },
      {
        splice: function (t, e) {
          var r,
            n,
            c,
            f,
            h,
            d,
            g = s(this),
            m = a(g.length),
            y = i(t, m),
            b = arguments.length;
          if (
            (0 === b
              ? (r = n = 0)
              : 1 === b
              ? ((r = 0), (n = m - y))
              : ((r = b - 2), (n = v(p(o(e), 0), m - y))),
            m + r - n > 9007199254740991)
          )
            throw TypeError('Maximum allowed length exceeded');
          for (c = l(g, n), f = 0; f < n; f++)
            (h = y + f) in g && u(c, f, g[h]);
          if (((c.length = n), r < n)) {
            for (f = y; f < m - n; f++)
              (d = f + r), (h = f + n) in g ? (g[d] = g[h]) : delete g[d];
            for (f = m; f > m - n + r; f--) delete g[f - 1];
          } else if (r > n)
            for (f = m - n; f > y; f--)
              (d = f + r - 1),
                (h = f + n - 1) in g ? (g[d] = g[h]) : delete g[d];
          for (f = 0; f < r; f++) g[f + y] = arguments[f + 2];
          return (g.length = m - n + r), c;
        },
      }
    );
  },
  function (t, e, r) {
    r(51)('Array');
  },
  function (t, e, r) {
    r(42)('flat');
  },
  function (t, e, r) {
    r(42)('flatMap');
  },
  function (t, e, r) {
    r(0)({ target: 'Function', proto: !0 }, { bind: r(154) });
  },
  function (t, e, r) {
    'use strict';
    var n = r(3),
      i = r(9),
      o = r(28),
      a = r(6)('hasInstance'),
      s = Function.prototype;
    a in s ||
      i.f(s, a, {
        value: function (t) {
          if ('function' != typeof this || !n(t)) return !1;
          if (!n(this.prototype)) return t instanceof this;
          for (; (t = o(t)); ) if (this.prototype === t) return !0;
          return !1;
        },
      });
  },
  function (t, e, r) {
    r(0)({ global: !0 }, { globalThis: r(2) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(156);
    n(
      { target: 'Object', stat: !0, forced: Object.assign !== i },
      { assign: i }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Object', stat: !0, sham: !r(5) }, { create: r(31) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5);
    n(
      { target: 'Object', stat: !0, forced: !i, sham: !i },
      { defineProperty: r(9).f }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5);
    n(
      { target: 'Object', stat: !0, forced: !i, sham: !i },
      { defineProperties: r(106) }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(157).entries;
    n(
      { target: 'Object', stat: !0 },
      {
        entries: function (t) {
          return i(t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(69),
      o = r(1),
      a = r(3),
      s = r(48).onFreeze,
      l = Object.freeze;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: o(function () {
          l(1);
        }),
        sham: !i,
      },
      {
        freeze: function (t) {
          return l && a(t) ? l(s(t)) : t;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(41),
      o = r(46);
    n(
      { target: 'Object', stat: !0 },
      {
        fromEntries: function (t) {
          var e = {};
          return (
            i(
              t,
              function (t, r) {
                o(e, t, r);
              },
              { AS_ENTRIES: !0 }
            ),
            e
          );
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(140).f;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: i(function () {
          return !Object.getOwnPropertyNames(1);
        }),
      },
      { getOwnPropertyNames: o }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(10),
      a = r(28),
      s = r(108);
    n(
      {
        target: 'Object',
        stat: !0,
        forced: i(function () {
          a(1);
        }),
        sham: !s,
      },
      {
        getPrototypeOf: function (t) {
          return a(o(t));
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Object', stat: !0 }, { is: r(158) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(3),
      a = Object.isExtensible;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: i(function () {
          a(1);
        }),
      },
      {
        isExtensible: function (t) {
          return !!o(t) && (!a || a(t));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(3),
      a = Object.isFrozen;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: i(function () {
          a(1);
        }),
      },
      {
        isFrozen: function (t) {
          return !o(t) || (!!a && a(t));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(3),
      a = Object.isSealed;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: i(function () {
          a(1);
        }),
      },
      {
        isSealed: function (t) {
          return !o(t) || (!!a && a(t));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(3),
      o = r(48).onFreeze,
      a = r(69),
      s = r(1),
      l = Object.preventExtensions;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: s(function () {
          l(1);
        }),
        sham: !a,
      },
      {
        preventExtensions: function (t) {
          return l && i(t) ? l(o(t)) : t;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(3),
      o = r(48).onFreeze,
      a = r(69),
      s = r(1),
      l = Object.seal;
    n(
      {
        target: 'Object',
        stat: !0,
        forced: s(function () {
          l(1);
        }),
        sham: !a,
      },
      {
        seal: function (t) {
          return l && i(t) ? l(o(t)) : t;
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Object', stat: !0 }, { setPrototypeOf: r(40) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(157).values;
    n(
      { target: 'Object', stat: !0 },
      {
        values: function (t) {
          return i(t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(110),
      i = r(66);
    t.exports = n
      ? {}.toString
      : function () {
          return '[object ' + i(this) + ']';
        };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(5),
      o = r(81),
      a = r(10),
      s = r(18),
      l = r(9);
    i &&
      n(
        { target: 'Object', proto: !0, forced: o },
        {
          __defineGetter__: function (t, e) {
            l.f(a(this), t, { get: s(e), enumerable: !0, configurable: !0 });
          },
        }
      );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(5),
      o = r(81),
      a = r(10),
      s = r(18),
      l = r(9);
    i &&
      n(
        { target: 'Object', proto: !0, forced: o },
        {
          __defineSetter__: function (t, e) {
            l.f(a(this), t, { set: s(e), enumerable: !0, configurable: !0 });
          },
        }
      );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(5),
      o = r(81),
      a = r(10),
      s = r(29),
      l = r(28),
      u = r(13).f;
    i &&
      n(
        { target: 'Object', proto: !0, forced: o },
        {
          __lookupGetter__: function (t) {
            var e,
              r = a(this),
              n = s(t, !0);
            do {
              if ((e = u(r, n))) return e.get;
            } while ((r = l(r)));
          },
        }
      );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(5),
      o = r(81),
      a = r(10),
      s = r(29),
      l = r(28),
      u = r(13).f;
    i &&
      n(
        { target: 'Object', proto: !0, forced: o },
        {
          __lookupSetter__: function (t) {
            var e,
              r = a(this),
              n = s(t, !0);
            do {
              if ((e = u(r, n))) return e.set;
            } while ((r = l(r)));
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(38),
      o = String.fromCharCode,
      a = String.fromCodePoint;
    n(
      { target: 'String', stat: !0, forced: !!a && 1 != a.length },
      {
        fromCodePoint: function (t) {
          for (var e, r = [], n = arguments.length, a = 0; n > a; ) {
            if (((e = +arguments[a++]), i(e, 1114111) !== e))
              throw RangeError(e + ' is not a valid code point');
            r.push(
              e < 65536
                ? o(e)
                : o(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320)
            );
          }
          return r.join('');
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(22),
      o = r(7);
    n(
      { target: 'String', stat: !0 },
      {
        raw: function (t) {
          for (
            var e = i(t.raw),
              r = o(e.length),
              n = arguments.length,
              a = [],
              s = 0;
            r > s;

          )
            a.push(String(e[s++])), s < n && a.push(String(arguments[s]));
          return a.join('');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(82).codeAt;
    n(
      { target: 'String', proto: !0 },
      {
        codePointAt: function (t) {
          return i(this, t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(0),
      o = r(13).f,
      a = r(7),
      s = r(118),
      l = r(14),
      u = r(119),
      c = r(26),
      f = ''.endsWith,
      h = Math.min,
      d = u('endsWith');
    i(
      {
        target: 'String',
        proto: !0,
        forced:
          !!(
            c ||
            d ||
            ((n = o(String.prototype, 'endsWith')), !n || n.writable)
          ) && !d,
      },
      {
        endsWith: function (t) {
          var e = String(l(this));
          s(t);
          var r = arguments.length > 1 ? arguments[1] : void 0,
            n = a(e.length),
            i = void 0 === r ? n : h(a(r), n),
            o = String(t);
          return f ? f.call(e, o, i) : e.slice(i - o.length, i) === o;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(118),
      o = r(14);
    n(
      { target: 'String', proto: !0, forced: !r(119)('includes') },
      {
        includes: function (t) {
          return !!~String(o(this)).indexOf(
            i(t),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(115),
      o = r(14),
      a = r(7),
      s = r(18),
      l = r(4),
      u = r(33),
      c = r(72),
      f = r(52),
      h = r(15),
      d = r(1),
      p = r(6),
      v = r(36),
      g = r(86),
      m = r(17),
      y = r(26),
      b = p('matchAll'),
      w = m.set,
      x = m.getterFor('RegExp String Iterator'),
      S = RegExp.prototype,
      C = S.exec,
      k = ''.matchAll,
      T =
        !!k &&
        !d(function () {
          'a'.matchAll(/./);
        }),
      A = i(
        function (t, e, r, n) {
          w(this, {
            type: 'RegExp String Iterator',
            regexp: t,
            string: e,
            global: r,
            unicode: n,
            done: !1,
          });
        },
        'RegExp String',
        function () {
          var t = x(this);
          if (t.done) return { value: void 0, done: !0 };
          var e = t.regexp,
            r = t.string,
            n = (function (t, e) {
              var r,
                n = t.exec;
              if ('function' == typeof n) {
                if ('object' != typeof (r = n.call(t, e)))
                  throw TypeError('Incorrect exec result');
                return r;
              }
              return C.call(t, e);
            })(e, r);
          return null === n
            ? { value: void 0, done: (t.done = !0) }
            : t.global
            ? ('' == String(n[0]) &&
                (e.lastIndex = g(r, a(e.lastIndex), t.unicode)),
              { value: n, done: !1 })
            : ((t.done = !0), { value: n, done: !1 });
        }
      ),
      L = function (t) {
        var e,
          r,
          n,
          i,
          o,
          s,
          u = l(this),
          c = String(t);
        return (
          (e = v(u, RegExp)),
          void 0 === (r = u.flags) &&
            u instanceof RegExp &&
            !('flags' in S) &&
            (r = f.call(u)),
          (n = void 0 === r ? '' : String(r)),
          (i = new e(e === RegExp ? u.source : u, n)),
          (o = !!~n.indexOf('g')),
          (s = !!~n.indexOf('u')),
          (i.lastIndex = a(u.lastIndex)),
          new A(i, c, o, s)
        );
      };
    n(
      { target: 'String', proto: !0, forced: T },
      {
        matchAll: function (t) {
          var e,
            r,
            n,
            i = o(this);
          if (null != t) {
            if (
              c(t) &&
              !~String(o('flags' in S ? t.flags : f.call(t))).indexOf('g')
            )
              throw TypeError('`.matchAll` does not allow non-global regexes');
            if (T) return k.apply(i, arguments);
            if (
              (void 0 === (r = t[b]) && y && 'RegExp' == u(t) && (r = L),
              null != r)
            )
              return s(r).call(t, i);
          } else if (T) return k.apply(i, arguments);
          return (
            (e = String(i)),
            (n = new RegExp(t, 'g')),
            y ? L.call(n, e) : n[b](e)
          );
        },
      }
    ),
      y || b in S || h(S, b, L);
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(120).end;
    n(
      { target: 'String', proto: !0, forced: r(160) },
      {
        padEnd: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(120).start;
    n(
      { target: 'String', proto: !0, forced: r(160) },
      {
        padStart: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'String', proto: !0 }, { repeat: r(121) });
  },
  function (t, e, r) {
    'use strict';
    var n = r(83),
      i = r(4),
      o = r(14),
      a = r(158),
      s = r(87);
    n('search', 1, function (t, e, r) {
      return [
        function (e) {
          var r = o(this),
            n = null == e ? void 0 : e[t];
          return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
        },
        function (t) {
          var n = r(e, t, this);
          if (n.done) return n.value;
          var o = i(t),
            l = String(this),
            u = o.lastIndex;
          a(u, 0) || (o.lastIndex = 0);
          var c = s(o, l);
          return (
            a(o.lastIndex, u) || (o.lastIndex = u), null === c ? -1 : c.index
          );
        },
      ];
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(83),
      i = r(72),
      o = r(4),
      a = r(14),
      s = r(36),
      l = r(86),
      u = r(7),
      c = r(87),
      f = r(84),
      h = r(1),
      d = [].push,
      p = Math.min,
      v = !h(function () {
        return !RegExp(4294967295, 'y');
      });
    n(
      'split',
      2,
      function (t, e, r) {
        var n;
        return (
          (n =
            'c' == 'abbc'.split(/(b)*/)[1] ||
            4 != 'test'.split(/(?:)/, -1).length ||
            2 != 'ab'.split(/(?:ab)*/).length ||
            4 != '.'.split(/(.?)(.?)/).length ||
            '.'.split(/()()/).length > 1 ||
            ''.split(/.?/).length
              ? function (t, r) {
                  var n = String(a(this)),
                    o = void 0 === r ? 4294967295 : r >>> 0;
                  if (0 === o) return [];
                  if (void 0 === t) return [n];
                  if (!i(t)) return e.call(n, t, o);
                  for (
                    var s,
                      l,
                      u,
                      c = [],
                      h =
                        (t.ignoreCase ? 'i' : '') +
                        (t.multiline ? 'm' : '') +
                        (t.unicode ? 'u' : '') +
                        (t.sticky ? 'y' : ''),
                      p = 0,
                      v = new RegExp(t.source, h + 'g');
                    (s = f.call(v, n)) &&
                    !(
                      (l = v.lastIndex) > p &&
                      (c.push(n.slice(p, s.index)),
                      s.length > 1 &&
                        s.index < n.length &&
                        d.apply(c, s.slice(1)),
                      (u = s[0].length),
                      (p = l),
                      c.length >= o)
                    );

                  )
                    v.lastIndex === s.index && v.lastIndex++;
                  return (
                    p === n.length
                      ? (!u && v.test('')) || c.push('')
                      : c.push(n.slice(p)),
                    c.length > o ? c.slice(0, o) : c
                  );
                }
              : '0'.split(void 0, 0).length
              ? function (t, r) {
                  return void 0 === t && 0 === r ? [] : e.call(this, t, r);
                }
              : e),
          [
            function (e, r) {
              var i = a(this),
                o = null == e ? void 0 : e[t];
              return void 0 !== o ? o.call(e, i, r) : n.call(String(i), e, r);
            },
            function (t, i) {
              var a = r(n, t, this, i, n !== e);
              if (a.done) return a.value;
              var f = o(t),
                h = String(this),
                d = s(f, RegExp),
                g = f.unicode,
                m =
                  (f.ignoreCase ? 'i' : '') +
                  (f.multiline ? 'm' : '') +
                  (f.unicode ? 'u' : '') +
                  (v ? 'y' : 'g'),
                y = new d(v ? f : '^(?:' + f.source + ')', m),
                b = void 0 === i ? 4294967295 : i >>> 0;
              if (0 === b) return [];
              if (0 === h.length) return null === c(y, h) ? [h] : [];
              for (var w = 0, x = 0, S = []; x < h.length; ) {
                y.lastIndex = v ? x : 0;
                var C,
                  k = c(y, v ? h : h.slice(x));
                if (
                  null === k ||
                  (C = p(u(y.lastIndex + (v ? 0 : x)), h.length)) === w
                )
                  x = l(h, x, g);
                else {
                  if ((S.push(h.slice(w, x)), S.length === b)) return S;
                  for (var T = 1; T <= k.length - 1; T++)
                    if ((S.push(k[T]), S.length === b)) return S;
                  x = w = C;
                }
              }
              return S.push(h.slice(w)), S;
            },
          ]
        );
      },
      !v
    );
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(0),
      o = r(13).f,
      a = r(7),
      s = r(118),
      l = r(14),
      u = r(119),
      c = r(26),
      f = ''.startsWith,
      h = Math.min,
      d = u('startsWith');
    i(
      {
        target: 'String',
        proto: !0,
        forced:
          !!(
            c ||
            d ||
            ((n = o(String.prototype, 'startsWith')), !n || n.writable)
          ) && !d,
      },
      {
        startsWith: function (t) {
          var e = String(l(this));
          s(t);
          var r = a(h(arguments.length > 1 ? arguments[1] : void 0, e.length)),
            n = String(t);
          return f ? f.call(e, n, r) : e.slice(r, r + n.length) === n;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(53).trim;
    n(
      { target: 'String', proto: !0, forced: r(122)('trim') },
      {
        trim: function () {
          return i(this);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(53).start,
      o = r(122)('trimStart'),
      a = o
        ? function () {
            return i(this);
          }
        : ''.trimStart;
    n(
      { target: 'String', proto: !0, forced: o },
      { trimStart: a, trimLeft: a }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(53).end,
      o = r(122)('trimEnd'),
      a = o
        ? function () {
            return i(this);
          }
        : ''.trimEnd;
    n({ target: 'String', proto: !0, forced: o }, { trimEnd: a, trimRight: a });
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('anchor') },
      {
        anchor: function (t) {
          return i(this, 'a', 'name', t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('big') },
      {
        big: function () {
          return i(this, 'big', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('blink') },
      {
        blink: function () {
          return i(this, 'blink', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('bold') },
      {
        bold: function () {
          return i(this, 'b', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('fixed') },
      {
        fixed: function () {
          return i(this, 'tt', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('fontcolor') },
      {
        fontcolor: function (t) {
          return i(this, 'font', 'color', t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('fontsize') },
      {
        fontsize: function (t) {
          return i(this, 'font', 'size', t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('italics') },
      {
        italics: function () {
          return i(this, 'i', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('link') },
      {
        link: function (t) {
          return i(this, 'a', 'href', t);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('small') },
      {
        small: function () {
          return i(this, 'small', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('strike') },
      {
        strike: function () {
          return i(this, 'strike', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('sub') },
      {
        sub: function () {
          return i(this, 'sub', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(24);
    n(
      { target: 'String', proto: !0, forced: r(25)('sup') },
      {
        sup: function () {
          return i(this, 'sup', '', '');
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(14),
      o = r(72),
      a = r(52),
      s = r(6),
      l = r(26),
      u = s('replace'),
      c = RegExp.prototype;
    n(
      { target: 'String', proto: !0 },
      {
        replaceAll: function t(e, r) {
          var n,
            s,
            f,
            h,
            d,
            p,
            v,
            g,
            m = i(this);
          if (null != e) {
            if (
              (n = o(e)) &&
              !~String(i('flags' in c ? e.flags : a.call(e))).indexOf('g')
            )
              throw TypeError(
                '`.replaceAll` does not allow non-global regexes'
              );
            if (void 0 !== (s = e[u])) return s.call(e, m, r);
            if (l && n) return String(m).replace(e, r);
          }
          if (((f = String(m)), '' === (h = String(e))))
            return t.call(f, /(?:)/g, r);
          if (((d = f.split(h)), 'function' != typeof r))
            return d.join(String(r));
          for (v = (p = d[0]).length, g = 1; g < d.length; g++)
            (p += String(r(h, v, f))),
              (v += h.length + d[g].length),
              (p += d[g]);
          return p;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(5),
      i = r(2),
      o = r(60),
      a = r(89),
      s = r(9).f,
      l = r(44).f,
      u = r(72),
      c = r(52),
      f = r(85),
      h = r(16),
      d = r(1),
      p = r(17).set,
      v = r(51),
      g = r(6)('match'),
      m = i.RegExp,
      y = m.prototype,
      b = /a/g,
      w = /a/g,
      x = new m(b) !== b,
      S = f.UNSUPPORTED_Y;
    if (
      n &&
      o(
        'RegExp',
        !x ||
          S ||
          d(function () {
            return (w[g] = !1), m(b) != b || m(w) == w || '/a/i' != m(b, 'i');
          })
      )
    ) {
      for (
        var C = function (t, e) {
            var r,
              n = this instanceof C,
              i = u(t),
              o = void 0 === e;
            if (!n && i && t.constructor === C && o) return t;
            x
              ? i && !o && (t = t.source)
              : t instanceof C && (o && (e = c.call(t)), (t = t.source)),
              S &&
                (r = !!e && e.indexOf('y') > -1) &&
                (e = e.replace(/y/g, ''));
            var s = a(x ? new m(t, e) : m(t, e), n ? this : y, C);
            return S && r && p(s, { sticky: r }), s;
          },
          k = function (t) {
            (t in C) ||
              s(C, t, {
                configurable: !0,
                get: function () {
                  return m[t];
                },
                set: function (e) {
                  m[t] = e;
                },
              });
          },
          T = l(m),
          A = 0;
        T.length > A;

      )
        k(T[A++]);
      (y.constructor = C), (C.prototype = y), h(i, 'RegExp', C);
    }
    v('RegExp');
  },
  function (t, e, r) {
    var n = r(5),
      i = r(9),
      o = r(52),
      a = r(85).UNSUPPORTED_Y;
    n &&
      ('g' != /./g.flags || a) &&
      i.f(RegExp.prototype, 'flags', { configurable: !0, get: o });
  },
  function (t, e, r) {
    var n = r(5),
      i = r(85).UNSUPPORTED_Y,
      o = r(9).f,
      a = r(17).get,
      s = RegExp.prototype;
    n &&
      i &&
      o(RegExp.prototype, 'sticky', {
        configurable: !0,
        get: function () {
          if (this !== s) {
            if (this instanceof RegExp) return !!a(this).sticky;
            throw TypeError('Incompatible receiver, RegExp required');
          }
        },
      });
  },
  function (t, e, r) {
    'use strict';
    r(73);
    var n,
      i,
      o = r(0),
      a = r(3),
      s =
        ((n = !1),
        ((i = /[ac]/).exec = function () {
          return (n = !0), /./.exec.apply(this, arguments);
        }),
        !0 === i.test('abc') && n),
      l = /./.test;
    o(
      { target: 'RegExp', proto: !0, forced: !s },
      {
        test: function (t) {
          if ('function' != typeof this.exec) return l.call(this, t);
          var e = this.exec(t);
          if (null !== e && !a(e))
            throw new Error(
              'RegExp exec method returned something other than an Object or null'
            );
          return !!e;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(163);
    n({ global: !0, forced: parseInt != i }, { parseInt: i });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(164);
    n({ global: !0, forced: parseFloat != i }, { parseFloat: i });
  },
  function (t, e, r) {
    r(0)({ target: 'Number', stat: !0 }, { EPSILON: Math.pow(2, -52) });
  },
  function (t, e, r) {
    var n = r(2).isFinite;
    t.exports =
      Number.isFinite ||
      function (t) {
        return 'number' == typeof t && n(t);
      };
  },
  function (t, e, r) {
    r(0)({ target: 'Number', stat: !0 }, { isInteger: r(167) });
  },
  function (t, e, r) {
    r(0)(
      { target: 'Number', stat: !0 },
      {
        isNaN: function (t) {
          return t != t;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(167),
      o = Math.abs;
    n(
      { target: 'Number', stat: !0 },
      {
        isSafeInteger: function (t) {
          return i(t) && o(t) <= 9007199254740991;
        },
      }
    );
  },
  function (t, e, r) {
    r(0)(
      { target: 'Number', stat: !0 },
      { MAX_SAFE_INTEGER: 9007199254740991 }
    );
  },
  function (t, e, r) {
    r(0)(
      { target: 'Number', stat: !0 },
      { MIN_SAFE_INTEGER: -9007199254740991 }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(164);
    n(
      { target: 'Number', stat: !0, forced: Number.parseFloat != i },
      { parseFloat: i }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(163);
    n(
      { target: 'Number', stat: !0, forced: Number.parseInt != i },
      { parseInt: i }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(27),
      o = r(168),
      a = r(121),
      s = r(1),
      l = (1).toFixed,
      u = Math.floor,
      c = function (t, e, r) {
        return 0 === e
          ? r
          : e % 2 == 1
          ? c(t, e - 1, r * t)
          : c(t * t, e / 2, r);
      };
    n(
      {
        target: 'Number',
        proto: !0,
        forced:
          (l &&
            ('0.000' !== (8e-5).toFixed(3) ||
              '1' !== (0.9).toFixed(0) ||
              '1.25' !== (1.255).toFixed(2) ||
              '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
          !s(function () {
            l.call({});
          }),
      },
      {
        toFixed: function (t) {
          var e,
            r,
            n,
            s,
            l = o(this),
            f = i(t),
            h = [0, 0, 0, 0, 0, 0],
            d = '',
            p = '0',
            v = function (t, e) {
              for (var r = -1, n = e; ++r < 6; )
                (n += t * h[r]), (h[r] = n % 1e7), (n = u(n / 1e7));
            },
            g = function (t) {
              for (var e = 6, r = 0; --e >= 0; )
                (r += h[e]), (h[e] = u(r / t)), (r = (r % t) * 1e7);
            },
            m = function () {
              for (var t = 6, e = ''; --t >= 0; )
                if ('' !== e || 0 === t || 0 !== h[t]) {
                  var r = String(h[t]);
                  e = '' === e ? r : e + a.call('0', 7 - r.length) + r;
                }
              return e;
            };
          if (f < 0 || f > 20) throw RangeError('Incorrect fraction digits');
          if (l != l) return 'NaN';
          if (l <= -1e21 || l >= 1e21) return String(l);
          if ((l < 0 && ((d = '-'), (l = -l)), l > 1e-21))
            if (
              ((r =
                (e =
                  (function (t) {
                    for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
                    for (; r >= 2; ) (e += 1), (r /= 2);
                    return e;
                  })(l * c(2, 69, 1)) - 69) < 0
                  ? l * c(2, -e, 1)
                  : l / c(2, e, 1)),
              (r *= 4503599627370496),
              (e = 52 - e) > 0)
            ) {
              for (v(0, r), n = f; n >= 7; ) v(1e7, 0), (n -= 7);
              for (v(c(10, n, 1), 0), n = e - 1; n >= 23; )
                g(1 << 23), (n -= 23);
              g(1 << n), v(1, 1), g(2), (p = m());
            } else v(0, r), v(1 << -e, 0), (p = m() + a.call('0', f));
          return (p =
            f > 0
              ? d +
                ((s = p.length) <= f
                  ? '0.' + a.call('0', f - s) + p
                  : p.slice(0, s - f) + '.' + p.slice(s - f))
              : d + p);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(1),
      o = r(168),
      a = (1).toPrecision;
    n(
      {
        target: 'Number',
        proto: !0,
        forced:
          i(function () {
            return '1' !== a.call(1, void 0);
          }) ||
          !i(function () {
            a.call({});
          }),
      },
      {
        toPrecision: function (t) {
          return void 0 === t ? a.call(o(this)) : a.call(o(this), t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(169),
      o = Math.acosh,
      a = Math.log,
      s = Math.sqrt,
      l = Math.LN2;
    n(
      {
        target: 'Math',
        stat: !0,
        forced:
          !o || 710 != Math.floor(o(Number.MAX_VALUE)) || o(1 / 0) != 1 / 0,
      },
      {
        acosh: function (t) {
          return (t = +t) < 1
            ? NaN
            : t > 94906265.62425156
            ? a(t) + l
            : i(t - 1 + s(t - 1) * s(t + 1));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.asinh,
      o = Math.log,
      a = Math.sqrt;
    n(
      { target: 'Math', stat: !0, forced: !(i && 1 / i(0) > 0) },
      {
        asinh: function t(e) {
          return isFinite((e = +e)) && 0 != e
            ? e < 0
              ? -t(-e)
              : o(e + a(e * e + 1))
            : e;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.atanh,
      o = Math.log;
    n(
      { target: 'Math', stat: !0, forced: !(i && 1 / i(-0) < 0) },
      {
        atanh: function (t) {
          return 0 == (t = +t) ? t : o((1 + t) / (1 - t)) / 2;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(123),
      o = Math.abs,
      a = Math.pow;
    n(
      { target: 'Math', stat: !0 },
      {
        cbrt: function (t) {
          return i((t = +t)) * a(o(t), 1 / 3);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.floor,
      o = Math.log,
      a = Math.LOG2E;
    n(
      { target: 'Math', stat: !0 },
      {
        clz32: function (t) {
          return (t >>>= 0) ? 31 - i(o(t + 0.5) * a) : 32;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90),
      o = Math.cosh,
      a = Math.abs,
      s = Math.E;
    n(
      { target: 'Math', stat: !0, forced: !o || o(710) === 1 / 0 },
      {
        cosh: function (t) {
          var e = i(a(t) - 1) + 1;
          return (e + 1 / (e * s * s)) * (s / 2);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90);
    n({ target: 'Math', stat: !0, forced: i != Math.expm1 }, { expm1: i });
  },
  function (t, e, r) {
    r(0)({ target: 'Math', stat: !0 }, { fround: r(300) });
  },
  function (t, e, r) {
    var n = r(123),
      i = Math.abs,
      o = Math.pow,
      a = o(2, -52),
      s = o(2, -23),
      l = o(2, 127) * (2 - s),
      u = o(2, -126);
    t.exports =
      Math.fround ||
      function (t) {
        var e,
          r,
          o = i(t),
          c = n(t);
        return o < u
          ? c * (o / u / s + 1 / a - 1 / a) * u * s
          : (r = (e = (1 + s / a) * o) - (e - o)) > l || r != r
          ? c * (1 / 0)
          : c * r;
      };
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.hypot,
      o = Math.abs,
      a = Math.sqrt;
    n(
      { target: 'Math', stat: !0, forced: !!i && i(1 / 0, NaN) !== 1 / 0 },
      {
        hypot: function (t, e) {
          for (var r, n, i = 0, s = 0, l = arguments.length, u = 0; s < l; )
            u < (r = o(arguments[s++]))
              ? ((i = i * (n = u / r) * n + 1), (u = r))
              : (i += r > 0 ? (n = r / u) * n : r);
          return u === 1 / 0 ? 1 / 0 : u * a(i);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = Math.imul;
    n(
      {
        target: 'Math',
        stat: !0,
        forced: i(function () {
          return -5 != o(4294967295, 5) || 2 != o.length;
        }),
      },
      {
        imul: function (t, e) {
          var r = +t,
            n = +e,
            i = 65535 & r,
            o = 65535 & n;
          return (
            0 |
            (i * o +
              ((((65535 & (r >>> 16)) * o + i * (65535 & (n >>> 16))) << 16) >>>
                0))
          );
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.log,
      o = Math.LOG10E;
    n(
      { target: 'Math', stat: !0 },
      {
        log10: function (t) {
          return i(t) * o;
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Math', stat: !0 }, { log1p: r(169) });
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.log,
      o = Math.LN2;
    n(
      { target: 'Math', stat: !0 },
      {
        log2: function (t) {
          return i(t) / o;
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Math', stat: !0 }, { sign: r(123) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1),
      o = r(90),
      a = Math.abs,
      s = Math.exp,
      l = Math.E;
    n(
      {
        target: 'Math',
        stat: !0,
        forced: i(function () {
          return -2e-17 != Math.sinh(-2e-17);
        }),
      },
      {
        sinh: function (t) {
          return a((t = +t)) < 1
            ? (o(t) - o(-t)) / 2
            : (s(t - 1) - s(-t - 1)) * (l / 2);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90),
      o = Math.exp;
    n(
      { target: 'Math', stat: !0 },
      {
        tanh: function (t) {
          var e = i((t = +t)),
            r = i(-t);
          return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (o(t) + o(-t));
        },
      }
    );
  },
  function (t, e, r) {
    r(30)(Math, 'Math', !0);
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.ceil,
      o = Math.floor;
    n(
      { target: 'Math', stat: !0 },
      {
        trunc: function (t) {
          return (t > 0 ? o : i)(t);
        },
      }
    );
  },
  function (t, e, r) {
    r(0)(
      { target: 'Date', stat: !0 },
      {
        now: function () {
          return new Date().getTime();
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(1),
      o = r(10),
      a = r(29);
    n(
      {
        target: 'Date',
        proto: !0,
        forced: i(function () {
          return (
            null !== new Date(NaN).toJSON() ||
            1 !==
              Date.prototype.toJSON.call({
                toISOString: function () {
                  return 1;
                },
              })
          );
        }),
      },
      {
        toJSON: function (t) {
          var e = o(this),
            r = a(e);
          return 'number' != typeof r || isFinite(r) ? e.toISOString() : null;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(314);
    n(
      { target: 'Date', proto: !0, forced: Date.prototype.toISOString !== i },
      { toISOString: i }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(120).start,
      o = Math.abs,
      a = Date.prototype,
      s = a.getTime,
      l = a.toISOString;
    t.exports =
      n(function () {
        return '0385-07-25T07:06:39.999Z' != l.call(new Date(-50000000000001));
      }) ||
      !n(function () {
        l.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(s.call(this))) throw RangeError('Invalid time value');
            var t = this.getUTCFullYear(),
              e = this.getUTCMilliseconds(),
              r = t < 0 ? '-' : t > 9999 ? '+' : '';
            return (
              r +
              i(o(t), r ? 6 : 4, 0) +
              '-' +
              i(this.getUTCMonth() + 1, 2, 0) +
              '-' +
              i(this.getUTCDate(), 2, 0) +
              'T' +
              i(this.getUTCHours(), 2, 0) +
              ':' +
              i(this.getUTCMinutes(), 2, 0) +
              ':' +
              i(this.getUTCSeconds(), 2, 0) +
              '.' +
              i(e, 3, 0) +
              'Z'
            );
          }
        : l;
  },
  function (t, e, r) {
    var n = r(16),
      i = Date.prototype,
      o = i.toString,
      a = i.getTime;
    new Date(NaN) + '' != 'Invalid Date' &&
      n(i, 'toString', function () {
        var t = a.call(this);
        return t == t ? o.call(this) : 'Invalid Date';
      });
  },
  function (t, e, r) {
    var n = r(15),
      i = r(317),
      o = r(6)('toPrimitive'),
      a = Date.prototype;
    o in a || n(a, o, i);
  },
  function (t, e, r) {
    'use strict';
    var n = r(4),
      i = r(29);
    t.exports = function (t) {
      if ('string' !== t && 'number' !== t && 'default' !== t)
        throw TypeError('Incorrect hint');
      return i(n(this), 'number' !== t);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(23),
      o = r(1),
      a = i('JSON', 'stringify'),
      s = /[\uD800-\uDFFF]/g,
      l = /^[\uD800-\uDBFF]$/,
      u = /^[\uDC00-\uDFFF]$/,
      c = function (t, e, r) {
        var n = r.charAt(e - 1),
          i = r.charAt(e + 1);
        return (l.test(t) && !u.test(i)) || (u.test(t) && !l.test(n))
          ? '\\u' + t.charCodeAt(0).toString(16)
          : t;
      },
      f = o(function () {
        return (
          '"\\udf06\\ud834"' !== a('\udf06\ud834') ||
          '"\\udead"' !== a('\udead')
        );
      });
    a &&
      n(
        { target: 'JSON', stat: !0, forced: f },
        {
          stringify: function (t, e, r) {
            var n = a.apply(null, arguments);
            return 'string' == typeof n ? n.replace(s, c) : n;
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(2);
    r(30)(n.JSON, 'JSON', !0);
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      o,
      a,
      s = r(0),
      l = r(26),
      u = r(2),
      c = r(23),
      f = r(170),
      h = r(16),
      d = r(54),
      p = r(30),
      v = r(51),
      g = r(3),
      m = r(18),
      y = r(43),
      b = r(99),
      w = r(41),
      x = r(77),
      S = r(36),
      C = r(124).set,
      k = r(172),
      T = r(173),
      A = r(321),
      L = r(91),
      O = r(125),
      M = r(17),
      E = r(60),
      _ = r(6),
      N = r(50),
      I = r(68),
      j = _('species'),
      P = 'Promise',
      R = M.get,
      D = M.set,
      F = M.getterFor(P),
      W = f,
      z = u.TypeError,
      B = u.document,
      H = u.process,
      U = c('fetch'),
      V = L.f,
      G = V,
      q = !!(B && B.createEvent && u.dispatchEvent),
      $ = 'function' == typeof PromiseRejectionEvent,
      Y = E(P, function () {
        if (!(b(W) !== String(W))) {
          if (66 === I) return !0;
          if (!N && !$) return !0;
        }
        if (l && !W.prototype.finally) return !0;
        if (I >= 51 && /native code/.test(W)) return !1;
        var t = W.resolve(1),
          e = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        return (
          ((t.constructor = {})[j] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      K =
        Y ||
        !x(function (t) {
          W.all(t).catch(function () {});
        }),
      X = function (t) {
        var e;
        return !(!g(t) || 'function' != typeof (e = t.then)) && e;
      },
      J = function (t, e) {
        if (!t.notified) {
          t.notified = !0;
          var r = t.reactions;
          k(function () {
            for (var n = t.value, i = 1 == t.state, o = 0; r.length > o; ) {
              var a,
                s,
                l,
                u = r[o++],
                c = i ? u.ok : u.fail,
                f = u.resolve,
                h = u.reject,
                d = u.domain;
              try {
                c
                  ? (i || (2 === t.rejection && et(t), (t.rejection = 1)),
                    !0 === c
                      ? (a = n)
                      : (d && d.enter(), (a = c(n)), d && (d.exit(), (l = !0))),
                    a === u.promise
                      ? h(z('Promise-chain cycle'))
                      : (s = X(a))
                      ? s.call(a, f, h)
                      : f(a))
                  : h(n);
              } catch (t) {
                d && !l && d.exit(), h(t);
              }
            }
            (t.reactions = []), (t.notified = !1), e && !t.rejection && Q(t);
          });
        }
      },
      Z = function (t, e, r) {
        var n, i;
        q
          ? (((n = B.createEvent('Event')).promise = e),
            (n.reason = r),
            n.initEvent(t, !1, !0),
            u.dispatchEvent(n))
          : (n = { promise: e, reason: r }),
          !$ && (i = u['on' + t])
            ? i(n)
            : 'unhandledrejection' === t && A('Unhandled promise rejection', r);
      },
      Q = function (t) {
        C.call(u, function () {
          var e,
            r = t.facade,
            n = t.value;
          if (
            tt(t) &&
            ((e = O(function () {
              N
                ? H.emit('unhandledRejection', n, r)
                : Z('unhandledrejection', r, n);
            })),
            (t.rejection = N || tt(t) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      tt = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      et = function (t) {
        C.call(u, function () {
          var e = t.facade;
          N ? H.emit('rejectionHandled', e) : Z('rejectionhandled', e, t.value);
        });
      },
      rt = function (t, e, r) {
        return function (n) {
          t(e, n, r);
        };
      },
      nt = function (t, e, r) {
        t.done ||
          ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), J(t, !0));
      },
      it = function (t, e, r) {
        if (!t.done) {
          (t.done = !0), r && (t = r);
          try {
            if (t.facade === e) throw z("Promise can't be resolved itself");
            var n = X(e);
            n
              ? k(function () {
                  var r = { done: !1 };
                  try {
                    n.call(e, rt(it, r, t), rt(nt, r, t));
                  } catch (e) {
                    nt(r, e, t);
                  }
                })
              : ((t.value = e), (t.state = 1), J(t, !1));
          } catch (e) {
            nt({ done: !1 }, e, t);
          }
        }
      };
    Y &&
      ((W = function (t) {
        y(this, W, P), m(t), n.call(this);
        var e = R(this);
        try {
          t(rt(it, e), rt(nt, e));
        } catch (t) {
          nt(e, t);
        }
      }),
      ((n = function (t) {
        D(this, {
          type: P,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = d(W.prototype, {
        then: function (t, e) {
          var r = F(this),
            n = V(S(this, W));
          return (
            (n.ok = 'function' != typeof t || t),
            (n.fail = 'function' == typeof e && e),
            (n.domain = N ? H.domain : void 0),
            (r.parent = !0),
            r.reactions.push(n),
            0 != r.state && J(r, !1),
            n.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new n(),
          e = R(t);
        (this.promise = t),
          (this.resolve = rt(it, e)),
          (this.reject = rt(nt, e));
      }),
      (L.f = V = function (t) {
        return t === W || t === o ? new i(t) : G(t);
      }),
      l ||
        'function' != typeof f ||
        ((a = f.prototype.then),
        h(
          f.prototype,
          'then',
          function (t, e) {
            var r = this;
            return new W(function (t, e) {
              a.call(r, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        ),
        'function' == typeof U &&
          s(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return T(W, U.apply(u, arguments));
              },
            }
          ))),
      s({ global: !0, wrap: !0, forced: Y }, { Promise: W }),
      p(W, P, !1, !0),
      v(P),
      (o = c(P)),
      s(
        { target: P, stat: !0, forced: Y },
        {
          reject: function (t) {
            var e = V(this);
            return e.reject.call(void 0, t), e.promise;
          },
        }
      ),
      s(
        { target: P, stat: !0, forced: l || Y },
        {
          resolve: function (t) {
            return T(l && this === o ? W : this, t);
          },
        }
      ),
      s(
        { target: P, stat: !0, forced: K },
        {
          all: function (t) {
            var e = this,
              r = V(e),
              n = r.resolve,
              i = r.reject,
              o = O(function () {
                var r = m(e.resolve),
                  o = [],
                  a = 0,
                  s = 1;
                w(t, function (t) {
                  var l = a++,
                    u = !1;
                  o.push(void 0),
                    s++,
                    r.call(e, t).then(function (t) {
                      u || ((u = !0), (o[l] = t), --s || n(o));
                    }, i);
                }),
                  --s || n(o);
              });
            return o.error && i(o.value), r.promise;
          },
          race: function (t) {
            var e = this,
              r = V(e),
              n = r.reject,
              i = O(function () {
                var i = m(e.resolve);
                w(t, function (t) {
                  i.call(e, t).then(r.resolve, n);
                });
              });
            return i.error && n(i.value), r.promise;
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = function (t, e) {
      var r = n.console;
      r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(18),
      o = r(91),
      a = r(125),
      s = r(41);
    n(
      { target: 'Promise', stat: !0 },
      {
        allSettled: function (t) {
          var e = this,
            r = o.f(e),
            n = r.resolve,
            l = r.reject,
            u = a(function () {
              var r = i(e.resolve),
                o = [],
                a = 0,
                l = 1;
              s(t, function (t) {
                var i = a++,
                  s = !1;
                o.push(void 0),
                  l++,
                  r.call(e, t).then(
                    function (t) {
                      s ||
                        ((s = !0),
                        (o[i] = { status: 'fulfilled', value: t }),
                        --l || n(o));
                    },
                    function (t) {
                      s ||
                        ((s = !0),
                        (o[i] = { status: 'rejected', reason: t }),
                        --l || n(o));
                    }
                  );
              }),
                --l || n(o);
            });
          return u.error && l(u.value), r.promise;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(18),
      o = r(23),
      a = r(91),
      s = r(125),
      l = r(41);
    n(
      { target: 'Promise', stat: !0 },
      {
        any: function (t) {
          var e = this,
            r = a.f(e),
            n = r.resolve,
            u = r.reject,
            c = s(function () {
              var r = i(e.resolve),
                a = [],
                s = 0,
                c = 1,
                f = !1;
              l(t, function (t) {
                var i = s++,
                  l = !1;
                a.push(void 0),
                  c++,
                  r.call(e, t).then(
                    function (t) {
                      l || f || ((f = !0), n(t));
                    },
                    function (t) {
                      l ||
                        f ||
                        ((l = !0),
                        (a[i] = t),
                        --c ||
                          u(
                            new (o('AggregateError'))(
                              a,
                              'No one promise resolved'
                            )
                          ));
                    }
                  );
              }),
                --c ||
                  u(new (o('AggregateError'))(a, 'No one promise resolved'));
            });
          return c.error && u(c.value), r.promise;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(26),
      o = r(170),
      a = r(1),
      s = r(23),
      l = r(36),
      u = r(173),
      c = r(16);
    n(
      {
        target: 'Promise',
        proto: !0,
        real: !0,
        forced:
          !!o &&
          a(function () {
            o.prototype.finally.call({ then: function () {} }, function () {});
          }),
      },
      {
        finally: function (t) {
          var e = l(this, s('Promise')),
            r = 'function' == typeof t;
          return this.then(
            r
              ? function (r) {
                  return u(e, t()).then(function () {
                    return r;
                  });
                }
              : t,
            r
              ? function (r) {
                  return u(e, t()).then(function () {
                    throw r;
                  });
                }
              : t
          );
        },
      }
    ),
      i ||
        'function' != typeof o ||
        o.prototype.finally ||
        c(o.prototype, 'finally', s('Promise').prototype.finally);
  },
  function (t, e, r) {
    'use strict';
    var n = r(92),
      i = r(174);
    t.exports = n(
      'Map',
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      i
    );
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(2),
      o = r(54),
      a = r(48),
      s = r(92),
      l = r(175),
      u = r(3),
      c = r(17).enforce,
      f = r(135),
      h = !i.ActiveXObject && 'ActiveXObject' in i,
      d = Object.isExtensible,
      p = function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      v = (t.exports = s('WeakMap', p, l));
    if (f && h) {
      (n = l.getConstructor(p, 'WeakMap', !0)), (a.REQUIRED = !0);
      var g = v.prototype,
        m = g.delete,
        y = g.has,
        b = g.get,
        w = g.set;
      o(g, {
        delete: function (t) {
          if (u(t) && !d(t)) {
            var e = c(this);
            return (
              e.frozen || (e.frozen = new n()),
              m.call(this, t) || e.frozen.delete(t)
            );
          }
          return m.call(this, t);
        },
        has: function (t) {
          if (u(t) && !d(t)) {
            var e = c(this);
            return (
              e.frozen || (e.frozen = new n()),
              y.call(this, t) || e.frozen.has(t)
            );
          }
          return y.call(this, t);
        },
        get: function (t) {
          if (u(t) && !d(t)) {
            var e = c(this);
            return (
              e.frozen || (e.frozen = new n()),
              y.call(this, t) ? b.call(this, t) : e.frozen.get(t)
            );
          }
          return b.call(this, t);
        },
        set: function (t, e) {
          if (u(t) && !d(t)) {
            var r = c(this);
            r.frozen || (r.frozen = new n()),
              y.call(this, t) ? w.call(this, t, e) : r.frozen.set(t, e);
          } else w.call(this, t, e);
          return this;
        },
      });
    }
  },
  function (t, e, r) {
    'use strict';
    r(92)(
      'WeakSet',
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      r(175)
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(2),
      o = r(93),
      a = r(51),
      s = o.ArrayBuffer;
    n({ global: !0, forced: i.ArrayBuffer !== s }, { ArrayBuffer: s }),
      a('ArrayBuffer');
  },
  function (t, e) {
    var r = Math.abs,
      n = Math.pow,
      i = Math.floor,
      o = Math.log,
      a = Math.LN2;
    t.exports = {
      pack: function (t, e, s) {
        var l,
          u,
          c,
          f = new Array(s),
          h = 8 * s - e - 1,
          d = (1 << h) - 1,
          p = d >> 1,
          v = 23 === e ? n(2, -24) - n(2, -77) : 0,
          g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
          m = 0;
        for (
          (t = r(t)) != t || t === 1 / 0
            ? ((u = t != t ? 1 : 0), (l = d))
            : ((l = i(o(t) / a)),
              t * (c = n(2, -l)) < 1 && (l--, (c *= 2)),
              (t += l + p >= 1 ? v / c : v * n(2, 1 - p)) * c >= 2 &&
                (l++, (c /= 2)),
              l + p >= d
                ? ((u = 0), (l = d))
                : l + p >= 1
                ? ((u = (t * c - 1) * n(2, e)), (l += p))
                : ((u = t * n(2, p - 1) * n(2, e)), (l = 0)));
          e >= 8;
          f[m++] = 255 & u, u /= 256, e -= 8
        );
        for (
          l = (l << e) | u, h += e;
          h > 0;
          f[m++] = 255 & l, l /= 256, h -= 8
        );
        return (f[--m] |= 128 * g), f;
      },
      unpack: function (t, e) {
        var r,
          i = t.length,
          o = 8 * i - e - 1,
          a = (1 << o) - 1,
          s = a >> 1,
          l = o - 7,
          u = i - 1,
          c = t[u--],
          f = 127 & c;
        for (c >>= 7; l > 0; f = 256 * f + t[u], u--, l -= 8);
        for (
          r = f & ((1 << -l) - 1), f >>= -l, l += e;
          l > 0;
          r = 256 * r + t[u], u--, l -= 8
        );
        if (0 === f) f = 1 - s;
        else {
          if (f === a) return r ? NaN : c ? -1 / 0 : 1 / 0;
          (r += n(2, e)), (f -= s);
        }
        return (c ? -1 : 1) * r * n(2, f - e);
      },
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(8);
    n(
      { target: 'ArrayBuffer', stat: !0, forced: !i.NATIVE_ARRAY_BUFFER_VIEWS },
      { isView: i.isView }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(1),
      o = r(93),
      a = r(4),
      s = r(38),
      l = r(7),
      u = r(36),
      c = o.ArrayBuffer,
      f = o.DataView,
      h = c.prototype.slice;
    n(
      {
        target: 'ArrayBuffer',
        proto: !0,
        unsafe: !0,
        forced: i(function () {
          return !new c(2).slice(1, void 0).byteLength;
        }),
      },
      {
        slice: function (t, e) {
          if (void 0 !== h && void 0 === e) return h.call(a(this), t);
          for (
            var r = a(this).byteLength,
              n = s(t, r),
              i = s(void 0 === e ? r : e, r),
              o = new (u(this, c))(l(i - n)),
              d = new f(this),
              p = new f(o),
              v = 0;
            n < i;

          )
            p.setUint8(v++, d.getUint8(n++));
          return o;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(93);
    n({ global: !0, forced: !r(127) }, { DataView: i.DataView });
  },
  function (t, e, r) {
    r(37)('Int8', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    var n = r(27);
    t.exports = function (t) {
      var e = n(t);
      if (e < 0) throw RangeError("The argument can't be less than 0");
      return e;
    };
  },
  function (t, e, r) {
    r(37)('Uint8', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)(
      'Uint8',
      function (t) {
        return function (e, r, n) {
          return t(this, e, r, n);
        };
      },
      !0
    );
  },
  function (t, e, r) {
    r(37)('Int16', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)('Uint16', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)('Int32', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)('Uint32', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)('Float32', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(37)('Float64', function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(128);
    (0, r(8).exportTypedArrayStaticMethod)('from', r(178), n);
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(128),
      o = n.aTypedArrayConstructor;
    (0, n.exportTypedArrayStaticMethod)(
      'of',
      function () {
        for (var t = 0, e = arguments.length, r = new (o(this))(e); e > t; )
          r[t] = arguments[t++];
        return r;
      },
      i
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(146),
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('copyWithin', function (t, e) {
      return i.call(
        o(this),
        t,
        e,
        arguments.length > 2 ? arguments[2] : void 0
      );
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).every,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('every', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(111),
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('fill', function (t) {
      return i.apply(o(this), arguments);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).filter,
      o = r(36),
      a = n.aTypedArray,
      s = n.aTypedArrayConstructor;
    (0, n.exportTypedArrayMethod)('filter', function (t) {
      for (
        var e = i(a(this), t, arguments.length > 1 ? arguments[1] : void 0),
          r = o(this, this.constructor),
          n = 0,
          l = e.length,
          u = new (s(r))(l);
        l > n;

      )
        u[n] = e[n++];
      return u;
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).find,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('find', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).findIndex,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('findIndex', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).forEach,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('forEach', function (t) {
      i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(59).includes,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('includes', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(59).indexOf,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('indexOf', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(2),
      i = r(8),
      o = r(47),
      a = r(6)('iterator'),
      s = n.Uint8Array,
      l = o.values,
      u = o.keys,
      c = o.entries,
      f = i.aTypedArray,
      h = i.exportTypedArrayMethod,
      d = s && s.prototype[a],
      p = !!d && ('values' == d.name || null == d.name),
      v = function () {
        return l.call(f(this));
      };
    h('entries', function () {
      return c.call(f(this));
    }),
      h('keys', function () {
        return u.call(f(this));
      }),
      h('values', v, !p),
      h(a, v, !p);
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = n.aTypedArray,
      o = n.exportTypedArrayMethod,
      a = [].join;
    o('join', function (t) {
      return a.apply(i(this), arguments);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(150),
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('lastIndexOf', function (t) {
      return i.apply(o(this), arguments);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).map,
      o = r(36),
      a = n.aTypedArray,
      s = n.aTypedArrayConstructor;
    (0, n.exportTypedArrayMethod)('map', function (t) {
      return i(
        a(this),
        t,
        arguments.length > 1 ? arguments[1] : void 0,
        function (t, e) {
          return new (s(o(t, t.constructor)))(e);
        }
      );
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(80).left,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('reduce', function (t) {
      return i(
        o(this),
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(80).right,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('reduceRight', function (t) {
      return i(
        o(this),
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = n.aTypedArray,
      o = n.exportTypedArrayMethod,
      a = Math.floor;
    o('reverse', function () {
      for (var t, e = i(this).length, r = a(e / 2), n = 0; n < r; )
        (t = this[n]), (this[n++] = this[--e]), (this[e] = t);
      return this;
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(7),
      o = r(177),
      a = r(10),
      s = r(1),
      l = n.aTypedArray;
    (0, n.exportTypedArrayMethod)(
      'set',
      function (t) {
        l(this);
        var e = o(arguments.length > 1 ? arguments[1] : void 0, 1),
          r = this.length,
          n = a(t),
          s = i(n.length),
          u = 0;
        if (s + e > r) throw RangeError('Wrong length');
        for (; u < s; ) this[e + u] = n[u++];
      },
      s(function () {
        new Int8Array(1).set({});
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(36),
      o = r(1),
      a = n.aTypedArray,
      s = n.aTypedArrayConstructor,
      l = n.exportTypedArrayMethod,
      u = [].slice;
    l(
      'slice',
      function (t, e) {
        for (
          var r = u.call(a(this), t, e),
            n = i(this, this.constructor),
            o = 0,
            l = r.length,
            c = new (s(n))(l);
          l > o;

        )
          c[o] = r[o++];
        return c;
      },
      o(function () {
        new Int8Array(1).slice();
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(12).some,
      o = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('some', function (t) {
      return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = n.aTypedArray,
      o = n.exportTypedArrayMethod,
      a = [].sort;
    o('sort', function (t) {
      return a.call(i(this), t);
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(8),
      i = r(7),
      o = r(38),
      a = r(36),
      s = n.aTypedArray;
    (0, n.exportTypedArrayMethod)('subarray', function (t, e) {
      var r = s(this),
        n = r.length,
        l = o(t, n);
      return new (a(r, r.constructor))(
        r.buffer,
        r.byteOffset + l * r.BYTES_PER_ELEMENT,
        i((void 0 === e ? n : o(e, n)) - l)
      );
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(2),
      i = r(8),
      o = r(1),
      a = n.Int8Array,
      s = i.aTypedArray,
      l = i.exportTypedArrayMethod,
      u = [].toLocaleString,
      c = [].slice,
      f =
        !!a &&
        o(function () {
          u.call(new a(1));
        });
    l(
      'toLocaleString',
      function () {
        return u.apply(f ? c.call(s(this)) : s(this), arguments);
      },
      o(function () {
        return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
      }) ||
        !o(function () {
          a.prototype.toLocaleString.call([1, 2]);
        })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(8).exportTypedArrayMethod,
      i = r(1),
      o = r(2).Uint8Array,
      a = (o && o.prototype) || {},
      s = [].toString,
      l = [].join;
    i(function () {
      s.call({});
    }) &&
      (s = function () {
        return l.call(this);
      });
    var u = a.toString != s;
    n('toString', s, u);
  },
  function (t, e, r) {
    var n = r(0),
      i = r(23),
      o = r(18),
      a = r(4),
      s = r(1),
      l = i('Reflect', 'apply'),
      u = Function.apply;
    n(
      {
        target: 'Reflect',
        stat: !0,
        forced: !s(function () {
          l(function () {});
        }),
      },
      {
        apply: function (t, e, r) {
          return o(t), a(r), l ? l(t, e, r) : u.call(t, e, r);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(23),
      o = r(18),
      a = r(4),
      s = r(3),
      l = r(31),
      u = r(154),
      c = r(1),
      f = i('Reflect', 'construct'),
      h = c(function () {
        function t() {}
        return !(f(function () {}, [], t) instanceof t);
      }),
      d = !c(function () {
        f(function () {});
      }),
      p = h || d;
    n(
      { target: 'Reflect', stat: !0, forced: p, sham: p },
      {
        construct: function (t, e) {
          o(t), a(e);
          var r = arguments.length < 3 ? t : o(arguments[2]);
          if (d && !h) return f(t, e, r);
          if (t == r) {
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
            }
            var n = [null];
            return n.push.apply(n, e), new (u.apply(t, n))();
          }
          var i = r.prototype,
            c = l(s(i) ? i : Object.prototype),
            p = Function.apply.call(t, c, e);
          return s(p) ? p : c;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      o = r(4),
      a = r(29),
      s = r(9);
    n(
      {
        target: 'Reflect',
        stat: !0,
        forced: r(1)(function () {
          Reflect.defineProperty(s.f({}, 1, { value: 1 }), 1, { value: 2 });
        }),
        sham: !i,
      },
      {
        defineProperty: function (t, e, r) {
          o(t);
          var n = a(e, !0);
          o(r);
          try {
            return s.f(t, n, r), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(4),
      o = r(13).f;
    n(
      { target: 'Reflect', stat: !0 },
      {
        deleteProperty: function (t, e) {
          var r = o(i(t), e);
          return !(r && !r.configurable) && delete t[e];
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(3),
      o = r(4),
      a = r(11),
      s = r(13),
      l = r(28);
    n(
      { target: 'Reflect', stat: !0 },
      {
        get: function t(e, r) {
          var n,
            u,
            c = arguments.length < 3 ? e : arguments[2];
          return o(e) === c
            ? e[r]
            : (n = s.f(e, r))
            ? a(n, 'value')
              ? n.value
              : void 0 === n.get
              ? void 0
              : n.get.call(c)
            : i((u = l(e)))
            ? t(u, r, c)
            : void 0;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      o = r(4),
      a = r(13);
    n(
      { target: 'Reflect', stat: !0, sham: !i },
      {
        getOwnPropertyDescriptor: function (t, e) {
          return a.f(o(t), e);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(4),
      o = r(28);
    n(
      { target: 'Reflect', stat: !0, sham: !r(108) },
      {
        getPrototypeOf: function (t) {
          return o(i(t));
        },
      }
    );
  },
  function (t, e, r) {
    r(0)(
      { target: 'Reflect', stat: !0 },
      {
        has: function (t, e) {
          return e in t;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(4),
      o = Object.isExtensible;
    n(
      { target: 'Reflect', stat: !0 },
      {
        isExtensible: function (t) {
          return i(t), !o || o(t);
        },
      }
    );
  },
  function (t, e, r) {
    r(0)({ target: 'Reflect', stat: !0 }, { ownKeys: r(102) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(23),
      o = r(4);
    n(
      { target: 'Reflect', stat: !0, sham: !r(69) },
      {
        preventExtensions: function (t) {
          o(t);
          try {
            var e = i('Object', 'preventExtensions');
            return e && e(t), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(4),
      o = r(3),
      a = r(11),
      s = r(1),
      l = r(9),
      u = r(13),
      c = r(28),
      f = r(32);
    n(
      {
        target: 'Reflect',
        stat: !0,
        forced: s(function () {
          var t = function () {},
            e = l.f(new t(), 'a', { configurable: !0 });
          return !1 !== Reflect.set(t.prototype, 'a', 1, e);
        }),
      },
      {
        set: function t(e, r, n) {
          var s,
            h,
            d = arguments.length < 4 ? e : arguments[3],
            p = u.f(i(e), r);
          if (!p) {
            if (o((h = c(e)))) return t(h, r, n, d);
            p = f(0);
          }
          if (a(p, 'value')) {
            if (!1 === p.writable || !o(d)) return !1;
            if ((s = u.f(d, r))) {
              if (s.get || s.set || !1 === s.writable) return !1;
              (s.value = n), l.f(d, r, s);
            } else l.f(d, r, f(0, n));
            return !0;
          }
          return void 0 !== p.set && (p.set.call(d, n), !0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(4),
      o = r(142),
      a = r(40);
    a &&
      n(
        { target: 'Reflect', stat: !0 },
        {
          setPrototypeOf: function (t, e) {
            i(t), o(e);
            try {
              return a(t, e), !0;
            } catch (t) {
              return !1;
            }
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      o = r(30);
    n({ global: !0 }, { Reflect: {} }), o(i.Reflect, 'Reflect', !0);
  },
  function (t, e, r) {
    r(129), r(94), r(383), r(384), r(385), r(386), r(389), r(181);
    var n = r(58);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      o = r(124);
    n(
      {
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: !i.setImmediate || !i.clearImmediate,
      },
      { setImmediate: o.set, clearImmediate: o.clear }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      o = r(172),
      a = r(50),
      s = i.process;
    n(
      { global: !0, enumerable: !0, noTargetGet: !0 },
      {
        queueMicrotask: function (t) {
          var e = a && s.domain;
          o(e ? e.bind(t) : t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      o = r(78),
      a = [].slice,
      s = function (t) {
        return function (e, r) {
          var n = arguments.length > 2,
            i = n ? a.call(arguments, 2) : void 0;
          return t(
            n
              ? function () {
                  ('function' == typeof e ? e : Function(e)).apply(this, i);
                }
              : e,
            r
          );
        };
      };
    n(
      { global: !0, bind: !0, forced: /MSIE .\./.test(o) },
      { setTimeout: s(i.setTimeout), setInterval: s(i.setInterval) }
    );
  },
  function (t, e, r) {
    'use strict';
    r(74);
    var n,
      i = r(0),
      o = r(5),
      a = r(180),
      s = r(2),
      l = r(106),
      u = r(16),
      c = r(43),
      f = r(11),
      h = r(156),
      d = r(145),
      p = r(82).codeAt,
      v = r(387),
      g = r(30),
      m = r(181),
      y = r(17),
      b = s.URL,
      w = m.URLSearchParams,
      x = m.getState,
      S = y.set,
      C = y.getterFor('URL'),
      k = Math.floor,
      T = Math.pow,
      A = /[A-Za-z]/,
      L = /[\d+-.A-Za-z]/,
      O = /\d/,
      M = /^(0x|0X)/,
      E = /^[0-7]+$/,
      _ = /^\d+$/,
      N = /^[\dA-Fa-f]+$/,
      I = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      j = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      P = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      R = /[\u0009\u000A\u000D]/g,
      D = function (t, e) {
        var r, n, i;
        if ('[' == e.charAt(0)) {
          if (']' != e.charAt(e.length - 1)) return 'Invalid host';
          if (!(r = W(e.slice(1, -1)))) return 'Invalid host';
          t.host = r;
        } else if ($(t)) {
          if (((e = v(e)), I.test(e))) return 'Invalid host';
          if (null === (r = F(e))) return 'Invalid host';
          t.host = r;
        } else {
          if (j.test(e)) return 'Invalid host';
          for (r = '', n = d(e), i = 0; i < n.length; i++) r += G(n[i], B);
          t.host = r;
        }
      },
      F = function (t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          l = t.split('.');
        if ((l.length && '' == l[l.length - 1] && l.pop(), (e = l.length) > 4))
          return t;
        for (r = [], n = 0; n < e; n++) {
          if ('' == (i = l[n])) return t;
          if (
            ((o = 10),
            i.length > 1 &&
              '0' == i.charAt(0) &&
              ((o = M.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
            '' === i)
          )
            a = 0;
          else {
            if (!(10 == o ? _ : 8 == o ? E : N).test(i)) return t;
            a = parseInt(i, o);
          }
          r.push(a);
        }
        for (n = 0; n < e; n++)
          if (((a = r[n]), n == e - 1)) {
            if (a >= T(256, 5 - e)) return null;
          } else if (a > 255) return null;
        for (s = r.pop(), n = 0; n < r.length; n++) s += r[n] * T(256, 3 - n);
        return s;
      },
      W = function (t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          l = [0, 0, 0, 0, 0, 0, 0, 0],
          u = 0,
          c = null,
          f = 0,
          h = function () {
            return t.charAt(f);
          };
        if (':' == h()) {
          if (':' != t.charAt(1)) return;
          (f += 2), (c = ++u);
        }
        for (; h(); ) {
          if (8 == u) return;
          if (':' != h()) {
            for (e = r = 0; r < 4 && N.test(h()); )
              (e = 16 * e + parseInt(h(), 16)), f++, r++;
            if ('.' == h()) {
              if (0 == r) return;
              if (((f -= r), u > 6)) return;
              for (n = 0; h(); ) {
                if (((i = null), n > 0)) {
                  if (!('.' == h() && n < 4)) return;
                  f++;
                }
                if (!O.test(h())) return;
                for (; O.test(h()); ) {
                  if (((o = parseInt(h(), 10)), null === i)) i = o;
                  else {
                    if (0 == i) return;
                    i = 10 * i + o;
                  }
                  if (i > 255) return;
                  f++;
                }
                (l[u] = 256 * l[u] + i), (2 != ++n && 4 != n) || u++;
              }
              if (4 != n) return;
              break;
            }
            if (':' == h()) {
              if ((f++, !h())) return;
            } else if (h()) return;
            l[u++] = e;
          } else {
            if (null !== c) return;
            f++, (c = ++u);
          }
        }
        if (null !== c)
          for (a = u - c, u = 7; 0 != u && a > 0; )
            (s = l[u]), (l[u--] = l[c + a - 1]), (l[c + --a] = s);
        else if (8 != u) return;
        return l;
      },
      z = function (t) {
        var e, r, n, i;
        if ('number' == typeof t) {
          for (e = [], r = 0; r < 4; r++) e.unshift(t % 256), (t = k(t / 256));
          return e.join('.');
        }
        if ('object' == typeof t) {
          for (
            e = '',
              n = (function (t) {
                for (var e = null, r = 1, n = null, i = 0, o = 0; o < 8; o++)
                  0 !== t[o]
                    ? (i > r && ((e = n), (r = i)), (n = null), (i = 0))
                    : (null === n && (n = o), ++i);
                return i > r && ((e = n), (r = i)), e;
              })(t),
              r = 0;
            r < 8;
            r++
          )
            (i && 0 === t[r]) ||
              (i && (i = !1),
              n === r
                ? ((e += r ? ':' : '::'), (i = !0))
                : ((e += t[r].toString(16)), r < 7 && (e += ':')));
          return '[' + e + ']';
        }
        return t;
      },
      B = {},
      H = h({}, B, { ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1 }),
      U = h({}, H, { '#': 1, '?': 1, '{': 1, '}': 1 }),
      V = h({}, U, {
        '/': 1,
        ':': 1,
        ';': 1,
        '=': 1,
        '@': 1,
        '[': 1,
        '\\': 1,
        ']': 1,
        '^': 1,
        '|': 1,
      }),
      G = function (t, e) {
        var r = p(t, 0);
        return r > 32 && r < 127 && !f(e, t) ? t : encodeURIComponent(t);
      },
      q = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      $ = function (t) {
        return f(q, t.scheme);
      },
      Y = function (t) {
        return '' != t.username || '' != t.password;
      },
      K = function (t) {
        return !t.host || t.cannotBeABaseURL || 'file' == t.scheme;
      },
      X = function (t, e) {
        var r;
        return (
          2 == t.length &&
          A.test(t.charAt(0)) &&
          (':' == (r = t.charAt(1)) || (!e && '|' == r))
        );
      },
      J = function (t) {
        var e;
        return (
          t.length > 1 &&
          X(t.slice(0, 2)) &&
          (2 == t.length ||
            '/' === (e = t.charAt(2)) ||
            '\\' === e ||
            '?' === e ||
            '#' === e)
        );
      },
      Z = function (t) {
        var e = t.path,
          r = e.length;
        !r || ('file' == t.scheme && 1 == r && X(e[0], !0)) || e.pop();
      },
      Q = function (t) {
        return '.' === t || '%2e' === t.toLowerCase();
      },
      tt = {},
      et = {},
      rt = {},
      nt = {},
      it = {},
      ot = {},
      at = {},
      st = {},
      lt = {},
      ut = {},
      ct = {},
      ft = {},
      ht = {},
      dt = {},
      pt = {},
      vt = {},
      gt = {},
      mt = {},
      yt = {},
      bt = {},
      wt = {},
      xt = function (t, e, r, i) {
        var o,
          a,
          s,
          l,
          u,
          c = r || tt,
          h = 0,
          p = '',
          v = !1,
          g = !1,
          m = !1;
        for (
          r ||
            ((t.scheme = ''),
            (t.username = ''),
            (t.password = ''),
            (t.host = null),
            (t.port = null),
            (t.path = []),
            (t.query = null),
            (t.fragment = null),
            (t.cannotBeABaseURL = !1),
            (e = e.replace(P, ''))),
            e = e.replace(R, ''),
            o = d(e);
          h <= o.length;

        ) {
          switch (((a = o[h]), c)) {
            case tt:
              if (!a || !A.test(a)) {
                if (r) return 'Invalid scheme';
                c = rt;
                continue;
              }
              (p += a.toLowerCase()), (c = et);
              break;
            case et:
              if (a && (L.test(a) || '+' == a || '-' == a || '.' == a))
                p += a.toLowerCase();
              else {
                if (':' != a) {
                  if (r) return 'Invalid scheme';
                  (p = ''), (c = rt), (h = 0);
                  continue;
                }
                if (
                  r &&
                  ($(t) != f(q, p) ||
                    ('file' == p && (Y(t) || null !== t.port)) ||
                    ('file' == t.scheme && !t.host))
                )
                  return;
                if (((t.scheme = p), r))
                  return void (
                    $(t) &&
                    q[t.scheme] == t.port &&
                    (t.port = null)
                  );
                (p = ''),
                  'file' == t.scheme
                    ? (c = dt)
                    : $(t) && i && i.scheme == t.scheme
                    ? (c = nt)
                    : $(t)
                    ? (c = st)
                    : '/' == o[h + 1]
                    ? ((c = it), h++)
                    : ((t.cannotBeABaseURL = !0), t.path.push(''), (c = yt));
              }
              break;
            case rt:
              if (!i || (i.cannotBeABaseURL && '#' != a))
                return 'Invalid scheme';
              if (i.cannotBeABaseURL && '#' == a) {
                (t.scheme = i.scheme),
                  (t.path = i.path.slice()),
                  (t.query = i.query),
                  (t.fragment = ''),
                  (t.cannotBeABaseURL = !0),
                  (c = wt);
                break;
              }
              c = 'file' == i.scheme ? dt : ot;
              continue;
            case nt:
              if ('/' != a || '/' != o[h + 1]) {
                c = ot;
                continue;
              }
              (c = lt), h++;
              break;
            case it:
              if ('/' == a) {
                c = ut;
                break;
              }
              c = mt;
              continue;
            case ot:
              if (((t.scheme = i.scheme), a == n))
                (t.username = i.username),
                  (t.password = i.password),
                  (t.host = i.host),
                  (t.port = i.port),
                  (t.path = i.path.slice()),
                  (t.query = i.query);
              else if ('/' == a || ('\\' == a && $(t))) c = at;
              else if ('?' == a)
                (t.username = i.username),
                  (t.password = i.password),
                  (t.host = i.host),
                  (t.port = i.port),
                  (t.path = i.path.slice()),
                  (t.query = ''),
                  (c = bt);
              else {
                if ('#' != a) {
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    t.path.pop(),
                    (c = mt);
                  continue;
                }
                (t.username = i.username),
                  (t.password = i.password),
                  (t.host = i.host),
                  (t.port = i.port),
                  (t.path = i.path.slice()),
                  (t.query = i.query),
                  (t.fragment = ''),
                  (c = wt);
              }
              break;
            case at:
              if (!$(t) || ('/' != a && '\\' != a)) {
                if ('/' != a) {
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (c = mt);
                  continue;
                }
                c = ut;
              } else c = lt;
              break;
            case st:
              if (((c = lt), '/' != a || '/' != p.charAt(h + 1))) continue;
              h++;
              break;
            case lt:
              if ('/' != a && '\\' != a) {
                c = ut;
                continue;
              }
              break;
            case ut:
              if ('@' == a) {
                v && (p = '%40' + p), (v = !0), (s = d(p));
                for (var y = 0; y < s.length; y++) {
                  var b = s[y];
                  if (':' != b || m) {
                    var w = G(b, V);
                    m ? (t.password += w) : (t.username += w);
                  } else m = !0;
                }
                p = '';
              } else if (
                a == n ||
                '/' == a ||
                '?' == a ||
                '#' == a ||
                ('\\' == a && $(t))
              ) {
                if (v && '' == p) return 'Invalid authority';
                (h -= d(p).length + 1), (p = ''), (c = ct);
              } else p += a;
              break;
            case ct:
            case ft:
              if (r && 'file' == t.scheme) {
                c = vt;
                continue;
              }
              if (':' != a || g) {
                if (
                  a == n ||
                  '/' == a ||
                  '?' == a ||
                  '#' == a ||
                  ('\\' == a && $(t))
                ) {
                  if ($(t) && '' == p) return 'Invalid host';
                  if (r && '' == p && (Y(t) || null !== t.port)) return;
                  if ((l = D(t, p))) return l;
                  if (((p = ''), (c = gt), r)) return;
                  continue;
                }
                '[' == a ? (g = !0) : ']' == a && (g = !1), (p += a);
              } else {
                if ('' == p) return 'Invalid host';
                if ((l = D(t, p))) return l;
                if (((p = ''), (c = ht), r == ft)) return;
              }
              break;
            case ht:
              if (!O.test(a)) {
                if (
                  a == n ||
                  '/' == a ||
                  '?' == a ||
                  '#' == a ||
                  ('\\' == a && $(t)) ||
                  r
                ) {
                  if ('' != p) {
                    var x = parseInt(p, 10);
                    if (x > 65535) return 'Invalid port';
                    (t.port = $(t) && x === q[t.scheme] ? null : x), (p = '');
                  }
                  if (r) return;
                  c = gt;
                  continue;
                }
                return 'Invalid port';
              }
              p += a;
              break;
            case dt:
              if (((t.scheme = 'file'), '/' == a || '\\' == a)) c = pt;
              else {
                if (!i || 'file' != i.scheme) {
                  c = mt;
                  continue;
                }
                if (a == n)
                  (t.host = i.host),
                    (t.path = i.path.slice()),
                    (t.query = i.query);
                else if ('?' == a)
                  (t.host = i.host),
                    (t.path = i.path.slice()),
                    (t.query = ''),
                    (c = bt);
                else {
                  if ('#' != a) {
                    J(o.slice(h).join('')) ||
                      ((t.host = i.host), (t.path = i.path.slice()), Z(t)),
                      (c = mt);
                    continue;
                  }
                  (t.host = i.host),
                    (t.path = i.path.slice()),
                    (t.query = i.query),
                    (t.fragment = ''),
                    (c = wt);
                }
              }
              break;
            case pt:
              if ('/' == a || '\\' == a) {
                c = vt;
                break;
              }
              i &&
                'file' == i.scheme &&
                !J(o.slice(h).join('')) &&
                (X(i.path[0], !0) ? t.path.push(i.path[0]) : (t.host = i.host)),
                (c = mt);
              continue;
            case vt:
              if (a == n || '/' == a || '\\' == a || '?' == a || '#' == a) {
                if (!r && X(p)) c = mt;
                else if ('' == p) {
                  if (((t.host = ''), r)) return;
                  c = gt;
                } else {
                  if ((l = D(t, p))) return l;
                  if (('localhost' == t.host && (t.host = ''), r)) return;
                  (p = ''), (c = gt);
                }
                continue;
              }
              p += a;
              break;
            case gt:
              if ($(t)) {
                if (((c = mt), '/' != a && '\\' != a)) continue;
              } else if (r || '?' != a)
                if (r || '#' != a) {
                  if (a != n && ((c = mt), '/' != a)) continue;
                } else (t.fragment = ''), (c = wt);
              else (t.query = ''), (c = bt);
              break;
            case mt:
              if (
                a == n ||
                '/' == a ||
                ('\\' == a && $(t)) ||
                (!r && ('?' == a || '#' == a))
              ) {
                if (
                  ('..' === (u = (u = p).toLowerCase()) ||
                  '%2e.' === u ||
                  '.%2e' === u ||
                  '%2e%2e' === u
                    ? (Z(t), '/' == a || ('\\' == a && $(t)) || t.path.push(''))
                    : Q(p)
                    ? '/' == a || ('\\' == a && $(t)) || t.path.push('')
                    : ('file' == t.scheme &&
                        !t.path.length &&
                        X(p) &&
                        (t.host && (t.host = ''), (p = p.charAt(0) + ':')),
                      t.path.push(p)),
                  (p = ''),
                  'file' == t.scheme && (a == n || '?' == a || '#' == a))
                )
                  for (; t.path.length > 1 && '' === t.path[0]; )
                    t.path.shift();
                '?' == a
                  ? ((t.query = ''), (c = bt))
                  : '#' == a && ((t.fragment = ''), (c = wt));
              } else p += G(a, U);
              break;
            case yt:
              '?' == a
                ? ((t.query = ''), (c = bt))
                : '#' == a
                ? ((t.fragment = ''), (c = wt))
                : a != n && (t.path[0] += G(a, B));
              break;
            case bt:
              r || '#' != a
                ? a != n &&
                  ("'" == a && $(t)
                    ? (t.query += '%27')
                    : (t.query += '#' == a ? '%23' : G(a, B)))
                : ((t.fragment = ''), (c = wt));
              break;
            case wt:
              a != n && (t.fragment += G(a, H));
          }
          h++;
        }
      },
      St = function (t) {
        var e,
          r,
          n = c(this, St, 'URL'),
          i = arguments.length > 1 ? arguments[1] : void 0,
          a = String(t),
          s = S(n, { type: 'URL' });
        if (void 0 !== i)
          if (i instanceof St) e = C(i);
          else if ((r = xt((e = {}), String(i)))) throw TypeError(r);
        if ((r = xt(s, a, null, e))) throw TypeError(r);
        var l = (s.searchParams = new w()),
          u = x(l);
        u.updateSearchParams(s.query),
          (u.updateURL = function () {
            s.query = String(l) || null;
          }),
          o ||
            ((n.href = kt.call(n)),
            (n.origin = Tt.call(n)),
            (n.protocol = At.call(n)),
            (n.username = Lt.call(n)),
            (n.password = Ot.call(n)),
            (n.host = Mt.call(n)),
            (n.hostname = Et.call(n)),
            (n.port = _t.call(n)),
            (n.pathname = Nt.call(n)),
            (n.search = It.call(n)),
            (n.searchParams = jt.call(n)),
            (n.hash = Pt.call(n)));
      },
      Ct = St.prototype,
      kt = function () {
        var t = C(this),
          e = t.scheme,
          r = t.username,
          n = t.password,
          i = t.host,
          o = t.port,
          a = t.path,
          s = t.query,
          l = t.fragment,
          u = e + ':';
        return (
          null !== i
            ? ((u += '//'),
              Y(t) && (u += r + (n ? ':' + n : '') + '@'),
              (u += z(i)),
              null !== o && (u += ':' + o))
            : 'file' == e && (u += '//'),
          (u += t.cannotBeABaseURL ? a[0] : a.length ? '/' + a.join('/') : ''),
          null !== s && (u += '?' + s),
          null !== l && (u += '#' + l),
          u
        );
      },
      Tt = function () {
        var t = C(this),
          e = t.scheme,
          r = t.port;
        if ('blob' == e)
          try {
            return new URL(e.path[0]).origin;
          } catch (t) {
            return 'null';
          }
        return 'file' != e && $(t)
          ? e + '://' + z(t.host) + (null !== r ? ':' + r : '')
          : 'null';
      },
      At = function () {
        return C(this).scheme + ':';
      },
      Lt = function () {
        return C(this).username;
      },
      Ot = function () {
        return C(this).password;
      },
      Mt = function () {
        var t = C(this),
          e = t.host,
          r = t.port;
        return null === e ? '' : null === r ? z(e) : z(e) + ':' + r;
      },
      Et = function () {
        var t = C(this).host;
        return null === t ? '' : z(t);
      },
      _t = function () {
        var t = C(this).port;
        return null === t ? '' : String(t);
      },
      Nt = function () {
        var t = C(this),
          e = t.path;
        return t.cannotBeABaseURL ? e[0] : e.length ? '/' + e.join('/') : '';
      },
      It = function () {
        var t = C(this).query;
        return t ? '?' + t : '';
      },
      jt = function () {
        return C(this).searchParams;
      },
      Pt = function () {
        var t = C(this).fragment;
        return t ? '#' + t : '';
      },
      Rt = function (t, e) {
        return { get: t, set: e, configurable: !0, enumerable: !0 };
      };
    if (
      (o &&
        l(Ct, {
          href: Rt(kt, function (t) {
            var e = C(this),
              r = String(t),
              n = xt(e, r);
            if (n) throw TypeError(n);
            x(e.searchParams).updateSearchParams(e.query);
          }),
          origin: Rt(Tt),
          protocol: Rt(At, function (t) {
            var e = C(this);
            xt(e, String(t) + ':', tt);
          }),
          username: Rt(Lt, function (t) {
            var e = C(this),
              r = d(String(t));
            if (!K(e)) {
              e.username = '';
              for (var n = 0; n < r.length; n++) e.username += G(r[n], V);
            }
          }),
          password: Rt(Ot, function (t) {
            var e = C(this),
              r = d(String(t));
            if (!K(e)) {
              e.password = '';
              for (var n = 0; n < r.length; n++) e.password += G(r[n], V);
            }
          }),
          host: Rt(Mt, function (t) {
            var e = C(this);
            e.cannotBeABaseURL || xt(e, String(t), ct);
          }),
          hostname: Rt(Et, function (t) {
            var e = C(this);
            e.cannotBeABaseURL || xt(e, String(t), ft);
          }),
          port: Rt(_t, function (t) {
            var e = C(this);
            K(e) || ('' == (t = String(t)) ? (e.port = null) : xt(e, t, ht));
          }),
          pathname: Rt(Nt, function (t) {
            var e = C(this);
            e.cannotBeABaseURL || ((e.path = []), xt(e, t + '', gt));
          }),
          search: Rt(It, function (t) {
            var e = C(this);
            '' == (t = String(t))
              ? (e.query = null)
              : ('?' == t.charAt(0) && (t = t.slice(1)),
                (e.query = ''),
                xt(e, t, bt)),
              x(e.searchParams).updateSearchParams(e.query);
          }),
          searchParams: Rt(jt),
          hash: Rt(Pt, function (t) {
            var e = C(this);
            '' != (t = String(t))
              ? ('#' == t.charAt(0) && (t = t.slice(1)),
                (e.fragment = ''),
                xt(e, t, wt))
              : (e.fragment = null);
          }),
        }),
      u(
        Ct,
        'toJSON',
        function () {
          return kt.call(this);
        },
        { enumerable: !0 }
      ),
      u(
        Ct,
        'toString',
        function () {
          return kt.call(this);
        },
        { enumerable: !0 }
      ),
      b)
    ) {
      var Dt = b.createObjectURL,
        Ft = b.revokeObjectURL;
      Dt &&
        u(St, 'createObjectURL', function (t) {
          return Dt.apply(b, arguments);
        }),
        Ft &&
          u(St, 'revokeObjectURL', function (t) {
            return Ft.apply(b, arguments);
          });
    }
    g(St, 'URL'), i({ global: !0, forced: !a, sham: !o }, { URL: St });
  },
  function (t, e, r) {
    'use strict';
    var n = /[^\0-\u007E]/,
      i = /[.\u3002\uFF0E\uFF61]/g,
      o = 'Overflow: input needs wider integers to process',
      a = Math.floor,
      s = String.fromCharCode,
      l = function (t) {
        return t + 22 + 75 * (t < 26);
      },
      u = function (t, e, r) {
        var n = 0;
        for (t = r ? a(t / 700) : t >> 1, t += a(t / e); t > 455; n += 36)
          t = a(t / 35);
        return a(n + (36 * t) / (t + 38));
      },
      c = function (t) {
        var e,
          r,
          n = [],
          i = (t = (function (t) {
            for (var e = [], r = 0, n = t.length; r < n; ) {
              var i = t.charCodeAt(r++);
              if (i >= 55296 && i <= 56319 && r < n) {
                var o = t.charCodeAt(r++);
                56320 == (64512 & o)
                  ? e.push(((1023 & i) << 10) + (1023 & o) + 65536)
                  : (e.push(i), r--);
              } else e.push(i);
            }
            return e;
          })(t)).length,
          c = 128,
          f = 0,
          h = 72;
        for (e = 0; e < t.length; e++) (r = t[e]) < 128 && n.push(s(r));
        var d = n.length,
          p = d;
        for (d && n.push('-'); p < i; ) {
          var v = 2147483647;
          for (e = 0; e < t.length; e++) (r = t[e]) >= c && r < v && (v = r);
          var g = p + 1;
          if (v - c > a((2147483647 - f) / g)) throw RangeError(o);
          for (f += (v - c) * g, c = v, e = 0; e < t.length; e++) {
            if ((r = t[e]) < c && ++f > 2147483647) throw RangeError(o);
            if (r == c) {
              for (var m = f, y = 36; ; y += 36) {
                var b = y <= h ? 1 : y >= h + 26 ? 26 : y - h;
                if (m < b) break;
                var w = m - b,
                  x = 36 - b;
                n.push(s(l(b + (w % x)))), (m = a(w / x));
              }
              n.push(s(l(m))), (h = u(f, g, p == d)), (f = 0), ++p;
            }
          }
          ++f, ++c;
        }
        return n.join('');
      };
    t.exports = function (t) {
      var e,
        r,
        o = [],
        a = t.toLowerCase().replace(i, '.').split('.');
      for (e = 0; e < a.length; e++)
        (r = a[e]), o.push(n.test(r) ? 'xn--' + c(r) : r);
      return o.join('.');
    };
  },
  function (t, e, r) {
    var n = r(4),
      i = r(65);
    t.exports = function (t) {
      var e = i(t);
      if ('function' != typeof e)
        throw TypeError(String(t) + ' is not iterable');
      return n(e.call(t));
    };
  },
  function (t, e, r) {
    'use strict';
    r(0)(
      { target: 'URL', proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return URL.prototype.toString.call(this);
        },
      }
    );
  },
  function (t, e, r) {
    var n = (function (t) {
      'use strict';
      var e = Object.prototype,
        r = e.hasOwnProperty,
        n = 'function' == typeof Symbol ? Symbol : {},
        i = n.iterator || '@@iterator',
        o = n.asyncIterator || '@@asyncIterator',
        a = n.toStringTag || '@@toStringTag';
      function s(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        s({}, '');
      } catch (t) {
        s = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function l(t, e, r, n) {
        var i = e && e.prototype instanceof f ? e : f,
          o = Object.create(i.prototype),
          a = new C(n || []);
        return (
          (o._invoke = (function (t, e, r) {
            var n = 'suspendedStart';
            return function (i, o) {
              if ('executing' === n)
                throw new Error('Generator is already running');
              if ('completed' === n) {
                if ('throw' === i) throw o;
                return T();
              }
              for (r.method = i, r.arg = o; ; ) {
                var a = r.delegate;
                if (a) {
                  var s = w(a, r);
                  if (s) {
                    if (s === c) continue;
                    return s;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                n = 'executing';
                var l = u(t, e, r);
                if ('normal' === l.type) {
                  if (
                    ((n = r.done ? 'completed' : 'suspendedYield'), l.arg === c)
                  )
                    continue;
                  return { value: l.arg, done: r.done };
                }
                'throw' === l.type &&
                  ((n = 'completed'), (r.method = 'throw'), (r.arg = l.arg));
              }
            };
          })(t, r, a)),
          o
        );
      }
      function u(t, e, r) {
        try {
          return { type: 'normal', arg: t.call(e, r) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = l;
      var c = {};
      function f() {}
      function h() {}
      function d() {}
      var p = {};
      p[i] = function () {
        return this;
      };
      var v = Object.getPrototypeOf,
        g = v && v(v(k([])));
      g && g !== e && r.call(g, i) && (p = g);
      var m = (d.prototype = f.prototype = Object.create(p));
      function y(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        var n;
        this._invoke = function (i, o) {
          function a() {
            return new e(function (n, a) {
              !(function n(i, o, a, s) {
                var l = u(t[i], t, o);
                if ('throw' !== l.type) {
                  var c = l.arg,
                    f = c.value;
                  return f && 'object' == typeof f && r.call(f, '__await')
                    ? e.resolve(f.__await).then(
                        function (t) {
                          n('next', t, a, s);
                        },
                        function (t) {
                          n('throw', t, a, s);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (c.value = t), a(c);
                        },
                        function (t) {
                          return n('throw', t, a, s);
                        }
                      );
                }
                s(l.arg);
              })(i, o, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = void 0),
              w(t, e),
              'throw' === e.method)
            )
              return c;
            (e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return c;
        }
        var n = u(r, t.iterator, e.arg);
        if ('throw' === n.type)
          return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), c;
        var i = n.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
              (e.delegate = null),
              c)
            : i
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            c);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function S(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function k(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = m.constructor = d),
        (d.constructor = h),
        (h.displayName = s(d, a, 'GeneratorFunction')),
        (t.isGeneratorFunction = function (t) {
          var e = 'function' == typeof t && t.constructor;
          return (
            !!e &&
            (e === h || 'GeneratorFunction' === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, d)
              : ((t.__proto__ = d), s(t, a, 'GeneratorFunction')),
            (t.prototype = Object.create(m)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        y(b.prototype),
        (b.prototype[o] = function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, i, o) {
          void 0 === o && (o = Promise);
          var a = new b(l(e, r, n, i), o);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        y(m),
        s(m, a, 'Generator'),
        (m[i] = function () {
          return this;
        }),
        (m.toString = function () {
          return '[object Generator]';
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = k),
        (C.prototype = {
          constructor: C,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !t)
            )
              for (var e in this)
                't' === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = 'next'), (e.arg = void 0)),
                !!n
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion;
              if ('root' === o.tryLoc) return n('end');
              if (o.tryLoc <= this.prev) {
                var s = r.call(o, 'catchLoc'),
                  l = r.call(o, 'finallyLoc');
                if (s && l) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (
                i.tryLoc <= this.prev &&
                r.call(i, 'finallyLoc') &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ('break' === t || 'continue' === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = 'next'), (this.next = o.finallyLoc), c)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              c
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), S(r), c;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var i = n.arg;
                  S(r);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
              'next' === this.method && (this.arg = void 0),
              c
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(n);
    }
  },
  function (t, e, r) {
    !(function (t) {
      'use strict';
      t.defineMode('javascript', function (e, r) {
        var n,
          i,
          o = e.indentUnit,
          a = r.statementIndent,
          s = r.jsonld,
          l = r.json || s,
          u = r.typescript,
          c = r.wordCharacters || /[\w$\xa1-\uffff]/,
          f = (function () {
            function t(t) {
              return { type: t, style: 'keyword' };
            }
            var e = t('keyword a'),
              r = t('keyword b'),
              n = t('keyword c'),
              i = t('keyword d'),
              o = t('operator'),
              a = { type: 'atom', style: 'atom' };
            return {
              if: t('if'),
              while: e,
              with: e,
              else: r,
              do: r,
              try: r,
              finally: r,
              return: i,
              break: i,
              continue: i,
              new: t('new'),
              delete: n,
              void: n,
              throw: n,
              debugger: t('debugger'),
              var: t('var'),
              const: t('var'),
              let: t('var'),
              function: t('function'),
              catch: t('catch'),
              for: t('for'),
              switch: t('switch'),
              case: t('case'),
              default: t('default'),
              in: o,
              typeof: o,
              instanceof: o,
              true: a,
              false: a,
              null: a,
              undefined: a,
              NaN: a,
              Infinity: a,
              this: t('this'),
              class: t('class'),
              super: t('atom'),
              yield: n,
              export: t('export'),
              import: t('import'),
              extends: n,
              await: n,
            };
          })(),
          h = /[+\-*&%=<>!?|~^@]/,
          d = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function p(t, e, r) {
          return (n = t), (i = r), e;
        }
        function v(t, e) {
          var r,
            n = t.next();
          if ('"' == n || "'" == n)
            return (
              (e.tokenize =
                ((r = n),
                function (t, e) {
                  var n,
                    i = !1;
                  if (s && '@' == t.peek() && t.match(d))
                    return (e.tokenize = v), p('jsonld-keyword', 'meta');
                  for (; null != (n = t.next()) && (n != r || i); )
                    i = !i && '\\' == n;
                  return i || (e.tokenize = v), p('string', 'string');
                })),
              e.tokenize(t, e)
            );
          if ('.' == n && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
            return p('number', 'number');
          if ('.' == n && t.match('..')) return p('spread', 'meta');
          if (/[\[\]{}\(\),;\:\.]/.test(n)) return p(n);
          if ('=' == n && t.eat('>')) return p('=>', 'operator');
          if ('0' == n && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
            return p('number', 'number');
          if (/\d/.test(n))
            return (
              t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
              p('number', 'number')
            );
          if ('/' == n)
            return t.eat('*')
              ? ((e.tokenize = g), g(t, e))
              : t.eat('/')
              ? (t.skipToEnd(), p('comment', 'comment'))
              : $t(t, e, 1)
              ? ((function (t) {
                  for (var e, r = !1, n = !1; null != (e = t.next()); ) {
                    if (!r) {
                      if ('/' == e && !n) return;
                      '[' == e ? (n = !0) : n && ']' == e && (n = !1);
                    }
                    r = !r && '\\' == e;
                  }
                })(t),
                t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                p('regexp', 'string-2'))
              : (t.eat('='), p('operator', 'operator', t.current()));
          if ('`' == n) return (e.tokenize = m), m(t, e);
          if ('#' == n && '!' == t.peek())
            return t.skipToEnd(), p('meta', 'meta');
          if ('#' == n && t.eatWhile(c)) return p('variable', 'property');
          if (
            ('<' == n && t.match('!--')) ||
            ('-' == n &&
              t.match('->') &&
              !/\S/.test(t.string.slice(0, t.start)))
          )
            return t.skipToEnd(), p('comment', 'comment');
          if (h.test(n))
            return (
              ('>' == n && e.lexical && '>' == e.lexical.type) ||
                (t.eat('=')
                  ? ('!' != n && '=' != n) || t.eat('=')
                  : /[<>*+\-|&?]/.test(n) && (t.eat(n), '>' == n && t.eat(n))),
              '?' == n && t.eat('.')
                ? p('.')
                : p('operator', 'operator', t.current())
            );
          if (c.test(n)) {
            t.eatWhile(c);
            var i = t.current();
            if ('.' != e.lastType) {
              if (f.propertyIsEnumerable(i)) {
                var o = f[i];
                return p(o.type, o.style, i);
              }
              if (
                'async' == i &&
                t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
              )
                return p('async', 'keyword', i);
            }
            return p('variable', 'variable', i);
          }
        }
        function g(t, e) {
          for (var r, n = !1; (r = t.next()); ) {
            if ('/' == r && n) {
              e.tokenize = v;
              break;
            }
            n = '*' == r;
          }
          return p('comment', 'comment');
        }
        function m(t, e) {
          for (var r, n = !1; null != (r = t.next()); ) {
            if (!n && ('`' == r || ('$' == r && t.eat('{')))) {
              e.tokenize = v;
              break;
            }
            n = !n && '\\' == r;
          }
          return p('quasi', 'string-2', t.current());
        }
        function y(t, e) {
          e.fatArrowAt && (e.fatArrowAt = null);
          var r = t.string.indexOf('=>', t.start);
          if (!(r < 0)) {
            if (u) {
              var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                t.string.slice(t.start, r)
              );
              n && (r = n.index);
            }
            for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
              var s = t.string.charAt(a),
                l = '([{}])'.indexOf(s);
              if (l >= 0 && l < 3) {
                if (!i) {
                  ++a;
                  break;
                }
                if (0 == --i) {
                  '(' == s && (o = !0);
                  break;
                }
              } else if (l >= 3 && l < 6) ++i;
              else if (c.test(s)) o = !0;
              else if (/["'\/`]/.test(s))
                for (; ; --a) {
                  if (0 == a) return;
                  if (
                    t.string.charAt(a - 1) == s &&
                    '\\' != t.string.charAt(a - 2)
                  ) {
                    a--;
                    break;
                  }
                }
              else if (o && !i) {
                ++a;
                break;
              }
            }
            o && !i && (e.fatArrowAt = a);
          }
        }
        var b = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          'jsonld-keyword': !0,
        };
        function w(t, e, r, n, i, o) {
          (this.indented = t),
            (this.column = e),
            (this.type = r),
            (this.prev = i),
            (this.info = o),
            null != n && (this.align = n);
        }
        function x(t, e) {
          for (var r = t.localVars; r; r = r.next) if (r.name == e) return !0;
          for (var n = t.context; n; n = n.prev)
            for (r = n.vars; r; r = r.next) if (r.name == e) return !0;
        }
        var S = { state: null, column: null, marked: null, cc: null };
        function C() {
          for (var t = arguments.length - 1; t >= 0; t--)
            S.cc.push(arguments[t]);
        }
        function k() {
          return C.apply(null, arguments), !0;
        }
        function T(t, e) {
          for (var r = e; r; r = r.next) if (r.name == t) return !0;
          return !1;
        }
        function A(t) {
          var e = S.state;
          if (((S.marked = 'def'), e.context))
            if ('var' == e.lexical.info && e.context && e.context.block) {
              var n = (function t(e, r) {
                if (r) {
                  if (r.block) {
                    var n = t(e, r.prev);
                    return n ? (n == r.prev ? r : new O(n, r.vars, !0)) : null;
                  }
                  return T(e, r.vars) ? r : new O(r.prev, new M(e, r.vars), !1);
                }
                return null;
              })(t, e.context);
              if (null != n) return void (e.context = n);
            } else if (!T(t, e.localVars))
              return void (e.localVars = new M(t, e.localVars));
          r.globalVars &&
            !T(t, e.globalVars) &&
            (e.globalVars = new M(t, e.globalVars));
        }
        function L(t) {
          return (
            'public' == t ||
            'private' == t ||
            'protected' == t ||
            'abstract' == t ||
            'readonly' == t
          );
        }
        function O(t, e, r) {
          (this.prev = t), (this.vars = e), (this.block = r);
        }
        function M(t, e) {
          (this.name = t), (this.next = e);
        }
        var E = new M('this', new M('arguments', null));
        function _() {
          (S.state.context = new O(S.state.context, S.state.localVars, !1)),
            (S.state.localVars = E);
        }
        function N() {
          (S.state.context = new O(S.state.context, S.state.localVars, !0)),
            (S.state.localVars = null);
        }
        function I() {
          (S.state.localVars = S.state.context.vars),
            (S.state.context = S.state.context.prev);
        }
        function j(t, e) {
          var r = function () {
            var r = S.state,
              n = r.indented;
            if ('stat' == r.lexical.type) n = r.lexical.indented;
            else
              for (var i = r.lexical; i && ')' == i.type && i.align; i = i.prev)
                n = i.indented;
            r.lexical = new w(n, S.stream.column(), t, null, r.lexical, e);
          };
          return (r.lex = !0), r;
        }
        function P() {
          var t = S.state;
          t.lexical.prev &&
            (')' == t.lexical.type && (t.indented = t.lexical.indented),
            (t.lexical = t.lexical.prev));
        }
        function R(t) {
          return function e(r) {
            return r == t
              ? k()
              : ';' == t || '}' == r || ')' == r || ']' == r
              ? C()
              : k(e);
          };
        }
        function D(t, e) {
          return 'var' == t
            ? k(j('vardef', e), yt, R(';'), P)
            : 'keyword a' == t
            ? k(j('form'), B, D, P)
            : 'keyword b' == t
            ? k(j('form'), D, P)
            : 'keyword d' == t
            ? S.stream.match(/^\s*$/, !1)
              ? k()
              : k(j('stat'), U, R(';'), P)
            : 'debugger' == t
            ? k(R(';'))
            : '{' == t
            ? k(j('}'), N, ot, P, I)
            : ';' == t
            ? k()
            : 'if' == t
            ? ('else' == S.state.lexical.info &&
                S.state.cc[S.state.cc.length - 1] == P &&
                S.state.cc.pop()(),
              k(j('form'), B, D, P, kt))
            : 'function' == t
            ? k(Ot)
            : 'for' == t
            ? k(j('form'), Tt, D, P)
            : 'class' == t || (u && 'interface' == e)
            ? ((S.marked = 'keyword'),
              k(j('form', 'class' == t ? t : e), It, P))
            : 'variable' == t
            ? u && 'declare' == e
              ? ((S.marked = 'keyword'), k(D))
              : u &&
                ('module' == e || 'enum' == e || 'type' == e) &&
                S.stream.match(/^\s*\w/, !1)
              ? ((S.marked = 'keyword'),
                'enum' == e
                  ? k(Gt)
                  : 'type' == e
                  ? k(Et, R('operator'), ct, R(';'))
                  : k(j('form'), bt, R('{'), j('}'), ot, P, P))
              : u && 'namespace' == e
              ? ((S.marked = 'keyword'), k(j('form'), W, D, P))
              : u && 'abstract' == e
              ? ((S.marked = 'keyword'), k(D))
              : k(j('stat'), Z)
            : 'switch' == t
            ? k(j('form'), B, R('{'), j('}', 'switch'), N, ot, P, P, I)
            : 'case' == t
            ? k(W, R(':'))
            : 'default' == t
            ? k(R(':'))
            : 'catch' == t
            ? k(j('form'), _, F, D, P, I)
            : 'export' == t
            ? k(j('stat'), Dt, P)
            : 'import' == t
            ? k(j('stat'), Wt, P)
            : 'async' == t
            ? k(D)
            : '@' == e
            ? k(W, D)
            : C(j('stat'), W, R(';'), P);
        }
        function F(t) {
          if ('(' == t) return k(_t, R(')'));
        }
        function W(t, e) {
          return H(t, e, !1);
        }
        function z(t, e) {
          return H(t, e, !0);
        }
        function B(t) {
          return '(' != t ? C() : k(j(')'), U, R(')'), P);
        }
        function H(t, e, r) {
          if (S.state.fatArrowAt == S.stream.start) {
            var n = r ? K : Y;
            if ('(' == t) return k(_, j(')'), nt(_t, ')'), P, R('=>'), n, I);
            if ('variable' == t) return C(_, bt, R('=>'), n, I);
          }
          var i = r ? G : V;
          return b.hasOwnProperty(t)
            ? k(i)
            : 'function' == t
            ? k(Ot, i)
            : 'class' == t || (u && 'interface' == e)
            ? ((S.marked = 'keyword'), k(j('form'), Nt, P))
            : 'keyword c' == t || 'async' == t
            ? k(r ? z : W)
            : '(' == t
            ? k(j(')'), U, R(')'), P, i)
            : 'operator' == t || 'spread' == t
            ? k(r ? z : W)
            : '[' == t
            ? k(j(']'), Vt, P, i)
            : '{' == t
            ? it(tt, '}', null, i)
            : 'quasi' == t
            ? C(q, i)
            : 'new' == t
            ? k(
                (function (t) {
                  return function (e) {
                    return '.' == e
                      ? k(t ? J : X)
                      : 'variable' == e && u
                      ? k(vt, t ? G : V)
                      : C(t ? z : W);
                  };
                })(r)
              )
            : 'import' == t
            ? k(W)
            : k();
        }
        function U(t) {
          return t.match(/[;\}\)\],]/) ? C() : C(W);
        }
        function V(t, e) {
          return ',' == t ? k(U) : G(t, e, !1);
        }
        function G(t, e, r) {
          var n = 0 == r ? V : G,
            i = 0 == r ? W : z;
          return '=>' == t
            ? k(_, r ? K : Y, I)
            : 'operator' == t
            ? /\+\+|--/.test(e) || (u && '!' == e)
              ? k(n)
              : u && '<' == e && S.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? k(j('>'), nt(ct, '>'), P, n)
              : '?' == e
              ? k(W, R(':'), i)
              : k(i)
            : 'quasi' == t
            ? C(q, n)
            : ';' != t
            ? '(' == t
              ? it(z, ')', 'call', n)
              : '.' == t
              ? k(Q, n)
              : '[' == t
              ? k(j(']'), U, R(']'), P, n)
              : u && 'as' == e
              ? ((S.marked = 'keyword'), k(ct, n))
              : 'regexp' == t
              ? ((S.state.lastType = S.marked = 'operator'),
                S.stream.backUp(S.stream.pos - S.stream.start - 1),
                k(i))
              : void 0
            : void 0;
        }
        function q(t, e) {
          return 'quasi' != t
            ? C()
            : '${' != e.slice(e.length - 2)
            ? k(q)
            : k(W, $);
        }
        function $(t) {
          if ('}' == t)
            return (S.marked = 'string-2'), (S.state.tokenize = m), k(q);
        }
        function Y(t) {
          return y(S.stream, S.state), C('{' == t ? D : W);
        }
        function K(t) {
          return y(S.stream, S.state), C('{' == t ? D : z);
        }
        function X(t, e) {
          if ('target' == e) return (S.marked = 'keyword'), k(V);
        }
        function J(t, e) {
          if ('target' == e) return (S.marked = 'keyword'), k(G);
        }
        function Z(t) {
          return ':' == t ? k(P, D) : C(V, R(';'), P);
        }
        function Q(t) {
          if ('variable' == t) return (S.marked = 'property'), k();
        }
        function tt(t, e) {
          return 'async' == t
            ? ((S.marked = 'property'), k(tt))
            : 'variable' == t || 'keyword' == S.style
            ? ((S.marked = 'property'),
              'get' == e || 'set' == e
                ? k(et)
                : (u &&
                    S.state.fatArrowAt == S.stream.start &&
                    (r = S.stream.match(/^\s*:\s*/, !1)) &&
                    (S.state.fatArrowAt = S.stream.pos + r[0].length),
                  k(rt)))
            : 'number' == t || 'string' == t
            ? ((S.marked = s ? 'property' : S.style + ' property'), k(rt))
            : 'jsonld-keyword' == t
            ? k(rt)
            : u && L(e)
            ? ((S.marked = 'keyword'), k(tt))
            : '[' == t
            ? k(W, at, R(']'), rt)
            : 'spread' == t
            ? k(z, rt)
            : '*' == e
            ? ((S.marked = 'keyword'), k(tt))
            : ':' == t
            ? C(rt)
            : void 0;
          var r;
        }
        function et(t) {
          return 'variable' != t ? C(rt) : ((S.marked = 'property'), k(Ot));
        }
        function rt(t) {
          return ':' == t ? k(z) : '(' == t ? C(Ot) : void 0;
        }
        function nt(t, e, r) {
          function n(i, o) {
            if (r ? r.indexOf(i) > -1 : ',' == i) {
              var a = S.state.lexical;
              return (
                'call' == a.info && (a.pos = (a.pos || 0) + 1),
                k(function (r, n) {
                  return r == e || n == e ? C() : C(t);
                }, n)
              );
            }
            return i == e || o == e
              ? k()
              : r && r.indexOf(';') > -1
              ? C(t)
              : k(R(e));
          }
          return function (r, i) {
            return r == e || i == e ? k() : C(t, n);
          };
        }
        function it(t, e, r) {
          for (var n = 3; n < arguments.length; n++) S.cc.push(arguments[n]);
          return k(j(e, r), nt(t, e), P);
        }
        function ot(t) {
          return '}' == t ? k() : C(D, ot);
        }
        function at(t, e) {
          if (u) {
            if (':' == t) return k(ct);
            if ('?' == e) return k(at);
          }
        }
        function st(t, e) {
          if (u && (':' == t || 'in' == e)) return k(ct);
        }
        function lt(t) {
          if (u && ':' == t)
            return S.stream.match(/^\s*\w+\s+is\b/, !1) ? k(W, ut, ct) : k(ct);
        }
        function ut(t, e) {
          if ('is' == e) return (S.marked = 'keyword'), k();
        }
        function ct(t, e) {
          return 'keyof' == e || 'typeof' == e || 'infer' == e
            ? ((S.marked = 'keyword'), k('typeof' == e ? z : ct))
            : 'variable' == t || 'void' == e
            ? ((S.marked = 'type'), k(pt))
            : '|' == e || '&' == e
            ? k(ct)
            : 'string' == t || 'number' == t || 'atom' == t
            ? k(pt)
            : '[' == t
            ? k(j(']'), nt(ct, ']', ','), P, pt)
            : '{' == t
            ? k(j('}'), nt(ht, '}', ',;'), P, pt)
            : '(' == t
            ? k(nt(dt, ')'), ft, pt)
            : '<' == t
            ? k(nt(ct, '>'), ct)
            : void 0;
        }
        function ft(t) {
          if ('=>' == t) return k(ct);
        }
        function ht(t, e) {
          return 'variable' == t || 'keyword' == S.style
            ? ((S.marked = 'property'), k(ht))
            : '?' == e || 'number' == t || 'string' == t
            ? k(ht)
            : ':' == t
            ? k(ct)
            : '[' == t
            ? k(R('variable'), st, R(']'), ht)
            : '(' == t
            ? C(Mt, ht)
            : void 0;
        }
        function dt(t, e) {
          return ('variable' == t && S.stream.match(/^\s*[?:]/, !1)) || '?' == e
            ? k(dt)
            : ':' == t
            ? k(ct)
            : 'spread' == t
            ? k(dt)
            : C(ct);
        }
        function pt(t, e) {
          return '<' == e
            ? k(j('>'), nt(ct, '>'), P, pt)
            : '|' == e || '.' == t || '&' == e
            ? k(ct)
            : '[' == t
            ? k(ct, R(']'), pt)
            : 'extends' == e || 'implements' == e
            ? ((S.marked = 'keyword'), k(ct))
            : '?' == e
            ? k(ct, R(':'), ct)
            : void 0;
        }
        function vt(t, e) {
          if ('<' == e) return k(j('>'), nt(ct, '>'), P, pt);
        }
        function gt() {
          return C(ct, mt);
        }
        function mt(t, e) {
          if ('=' == e) return k(ct);
        }
        function yt(t, e) {
          return 'enum' == e
            ? ((S.marked = 'keyword'), k(Gt))
            : C(bt, at, St, Ct);
        }
        function bt(t, e) {
          return u && L(e)
            ? ((S.marked = 'keyword'), k(bt))
            : 'variable' == t
            ? (A(e), k())
            : 'spread' == t
            ? k(bt)
            : '[' == t
            ? it(xt, ']')
            : '{' == t
            ? it(wt, '}')
            : void 0;
        }
        function wt(t, e) {
          return 'variable' != t || S.stream.match(/^\s*:/, !1)
            ? ('variable' == t && (S.marked = 'property'),
              'spread' == t
                ? k(bt)
                : '}' == t
                ? C()
                : '[' == t
                ? k(W, R(']'), R(':'), wt)
                : k(R(':'), bt, St))
            : (A(e), k(St));
        }
        function xt() {
          return C(bt, St);
        }
        function St(t, e) {
          if ('=' == e) return k(z);
        }
        function Ct(t) {
          if (',' == t) return k(yt);
        }
        function kt(t, e) {
          if ('keyword b' == t && 'else' == e)
            return k(j('form', 'else'), D, P);
        }
        function Tt(t, e) {
          return 'await' == e ? k(Tt) : '(' == t ? k(j(')'), At, P) : void 0;
        }
        function At(t) {
          return 'var' == t ? k(yt, Lt) : 'variable' == t ? k(Lt) : C(Lt);
        }
        function Lt(t, e) {
          return ')' == t
            ? k()
            : ';' == t
            ? k(Lt)
            : 'in' == e || 'of' == e
            ? ((S.marked = 'keyword'), k(W, Lt))
            : C(W, Lt);
        }
        function Ot(t, e) {
          return '*' == e
            ? ((S.marked = 'keyword'), k(Ot))
            : 'variable' == t
            ? (A(e), k(Ot))
            : '(' == t
            ? k(_, j(')'), nt(_t, ')'), P, lt, D, I)
            : u && '<' == e
            ? k(j('>'), nt(gt, '>'), P, Ot)
            : void 0;
        }
        function Mt(t, e) {
          return '*' == e
            ? ((S.marked = 'keyword'), k(Mt))
            : 'variable' == t
            ? (A(e), k(Mt))
            : '(' == t
            ? k(_, j(')'), nt(_t, ')'), P, lt, I)
            : u && '<' == e
            ? k(j('>'), nt(gt, '>'), P, Mt)
            : void 0;
        }
        function Et(t, e) {
          return 'keyword' == t || 'variable' == t
            ? ((S.marked = 'type'), k(Et))
            : '<' == e
            ? k(j('>'), nt(gt, '>'), P)
            : void 0;
        }
        function _t(t, e) {
          return (
            '@' == e && k(W, _t),
            'spread' == t
              ? k(_t)
              : u && L(e)
              ? ((S.marked = 'keyword'), k(_t))
              : u && 'this' == t
              ? k(at, St)
              : C(bt, at, St)
          );
        }
        function Nt(t, e) {
          return 'variable' == t ? It(t, e) : jt(t, e);
        }
        function It(t, e) {
          if ('variable' == t) return A(e), k(jt);
        }
        function jt(t, e) {
          return '<' == e
            ? k(j('>'), nt(gt, '>'), P, jt)
            : 'extends' == e || 'implements' == e || (u && ',' == t)
            ? ('implements' == e && (S.marked = 'keyword'), k(u ? ct : W, jt))
            : '{' == t
            ? k(j('}'), Pt, P)
            : void 0;
        }
        function Pt(t, e) {
          return 'async' == t ||
            ('variable' == t &&
              ('static' == e || 'get' == e || 'set' == e || (u && L(e))) &&
              S.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((S.marked = 'keyword'), k(Pt))
            : 'variable' == t || 'keyword' == S.style
            ? ((S.marked = 'property'), k(Rt, Pt))
            : 'number' == t || 'string' == t
            ? k(Rt, Pt)
            : '[' == t
            ? k(W, at, R(']'), Rt, Pt)
            : '*' == e
            ? ((S.marked = 'keyword'), k(Pt))
            : u && '(' == t
            ? C(Mt, Pt)
            : ';' == t || ',' == t
            ? k(Pt)
            : '}' == t
            ? k()
            : '@' == e
            ? k(W, Pt)
            : void 0;
        }
        function Rt(t, e) {
          if ('?' == e) return k(Rt);
          if (':' == t) return k(ct, St);
          if ('=' == e) return k(z);
          var r = S.state.lexical.prev;
          return C(r && 'interface' == r.info ? Mt : Ot);
        }
        function Dt(t, e) {
          return '*' == e
            ? ((S.marked = 'keyword'), k(Ut, R(';')))
            : 'default' == e
            ? ((S.marked = 'keyword'), k(W, R(';')))
            : '{' == t
            ? k(nt(Ft, '}'), Ut, R(';'))
            : C(D);
        }
        function Ft(t, e) {
          return 'as' == e
            ? ((S.marked = 'keyword'), k(R('variable')))
            : 'variable' == t
            ? C(z, Ft)
            : void 0;
        }
        function Wt(t) {
          return 'string' == t ? k() : '(' == t ? C(W) : C(zt, Bt, Ut);
        }
        function zt(t, e) {
          return '{' == t
            ? it(zt, '}')
            : ('variable' == t && A(e),
              '*' == e && (S.marked = 'keyword'),
              k(Ht));
        }
        function Bt(t) {
          if (',' == t) return k(zt, Bt);
        }
        function Ht(t, e) {
          if ('as' == e) return (S.marked = 'keyword'), k(zt);
        }
        function Ut(t, e) {
          if ('from' == e) return (S.marked = 'keyword'), k(W);
        }
        function Vt(t) {
          return ']' == t ? k() : C(nt(z, ']'));
        }
        function Gt() {
          return C(j('form'), bt, R('{'), j('}'), nt(qt, '}'), P, P);
        }
        function qt() {
          return C(bt, St);
        }
        function $t(t, e, r) {
          return (
            (e.tokenize == v &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                e.lastType
              )) ||
            ('quasi' == e.lastType &&
              /\{\s*$/.test(t.string.slice(0, t.pos - (r || 0))))
          );
        }
        return (
          (I.lex = !0),
          (P.lex = !0),
          {
            startState: function (t) {
              var e = {
                tokenize: v,
                lastType: 'sof',
                cc: [],
                lexical: new w((t || 0) - o, 0, 'block', !1),
                localVars: r.localVars,
                context: r.localVars && new O(null, null, !1),
                indented: t || 0,
              };
              return (
                r.globalVars &&
                  'object' == typeof r.globalVars &&
                  (e.globalVars = r.globalVars),
                e
              );
            },
            token: function (t, e) {
              if (
                (t.sol() &&
                  (e.lexical.hasOwnProperty('align') || (e.lexical.align = !1),
                  (e.indented = t.indentation()),
                  y(t, e)),
                e.tokenize != g && t.eatSpace())
              )
                return null;
              var r = e.tokenize(t, e);
              return 'comment' == n
                ? r
                : ((e.lastType =
                    'operator' != n || ('++' != i && '--' != i) ? n : 'incdec'),
                  (function (t, e, r, n, i) {
                    var o = t.cc;
                    for (
                      S.state = t,
                        S.stream = i,
                        S.marked = null,
                        S.cc = o,
                        S.style = e,
                        t.lexical.hasOwnProperty('align') ||
                          (t.lexical.align = !0);
                      ;

                    )
                      if ((o.length ? o.pop() : l ? W : D)(r, n)) {
                        for (; o.length && o[o.length - 1].lex; ) o.pop()();
                        return S.marked
                          ? S.marked
                          : 'variable' == r && x(t, n)
                          ? 'variable-2'
                          : e;
                      }
                  })(e, r, n, i, t));
            },
            indent: function (e, n) {
              if (e.tokenize == g || e.tokenize == m) return t.Pass;
              if (e.tokenize != v) return 0;
              var i,
                s = n && n.charAt(0),
                l = e.lexical;
              if (!/^\s*else\b/.test(n))
                for (var u = e.cc.length - 1; u >= 0; --u) {
                  var c = e.cc[u];
                  if (c == P) l = l.prev;
                  else if (c != kt) break;
                }
              for (
                ;
                ('stat' == l.type || 'form' == l.type) &&
                ('}' == s ||
                  ((i = e.cc[e.cc.length - 1]) &&
                    (i == V || i == G) &&
                    !/^[,\.=+\-*:?[\(]/.test(n)));

              )
                l = l.prev;
              a && ')' == l.type && 'stat' == l.prev.type && (l = l.prev);
              var f = l.type,
                d = s == f;
              return 'vardef' == f
                ? l.indented +
                    ('operator' == e.lastType || ',' == e.lastType
                      ? l.info.length + 1
                      : 0)
                : 'form' == f && '{' == s
                ? l.indented
                : 'form' == f
                ? l.indented + o
                : 'stat' == f
                ? l.indented +
                  ((function (t, e) {
                    return (
                      'operator' == t.lastType ||
                      ',' == t.lastType ||
                      h.test(e.charAt(0)) ||
                      /[,.]/.test(e.charAt(0))
                    );
                  })(e, n)
                    ? a || o
                    : 0)
                : 'switch' != l.info || d || 0 == r.doubleIndentSwitch
                ? l.align
                  ? l.column + (d ? 0 : 1)
                  : l.indented + (d ? 0 : o)
                : l.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: l ? null : '/*',
            blockCommentEnd: l ? null : '*/',
            blockCommentContinue: l ? null : ' * ',
            lineComment: l ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: l ? 'json' : 'javascript',
            jsonldMode: s,
            jsonMode: l,
            expressionAllowed: $t,
            skipExpression: function (t) {
              var e = t.cc[t.cc.length - 1];
              (e != W && e != z) || t.cc.pop();
            },
          }
        );
      }),
        t.registerHelper('wordChars', 'javascript', /[\w$]/),
        t.defineMIME('text/javascript', 'javascript'),
        t.defineMIME('text/ecmascript', 'javascript'),
        t.defineMIME('application/javascript', 'javascript'),
        t.defineMIME('application/x-javascript', 'javascript'),
        t.defineMIME('application/ecmascript', 'javascript'),
        t.defineMIME('application/json', { name: 'javascript', json: !0 }),
        t.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
        t.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
        t.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
        t.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: !0,
        });
    })(r(131));
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    r(185), r(390);
    var n = r(131),
      i = r.n(n);
    r(391), r(152);
    var o = function () {
      (this.__data__ = []), (this.size = 0);
    };
    var a = function (t, e) {
      return t === e || (t != t && e != e);
    };
    var s = function (t, e) {
        for (var r = t.length; r--; ) if (a(t[r][0], e)) return r;
        return -1;
      },
      l = Array.prototype.splice;
    var u = function (t) {
      var e = this.__data__,
        r = s(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : l.call(e, r, 1), --this.size, !0)
      );
    };
    var c = function (t) {
      var e = this.__data__,
        r = s(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
    var f = function (t) {
      return s(this.__data__, t) > -1;
    };
    var h = function (t, e) {
      var r = this.__data__,
        n = s(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    };
    function d(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (d.prototype.clear = o),
      (d.prototype.delete = u),
      (d.prototype.get = c),
      (d.prototype.has = f),
      (d.prototype.set = h);
    var p = d;
    var v = function () {
      (this.__data__ = new p()), (this.size = 0);
    };
    var g = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    };
    var m = function (t) {
      return this.__data__.get(t);
    };
    var y = function (t) {
        return this.__data__.has(t);
      },
      b = r(21),
      w = b.a.Symbol,
      x = Object.prototype,
      S = x.hasOwnProperty,
      C = x.toString,
      k = w ? w.toStringTag : void 0;
    var T = function (t) {
        var e = S.call(t, k),
          r = t[k];
        try {
          t[k] = void 0;
          var n = !0;
        } catch (t) {}
        var i = C.call(t);
        return n && (e ? (t[k] = r) : delete t[k]), i;
      },
      A = Object.prototype.toString;
    var L = function (t) {
        return A.call(t);
      },
      O = w ? w.toStringTag : void 0;
    var M = function (t) {
      return null == t
        ? void 0 === t
          ? '[object Undefined]'
          : '[object Null]'
        : O && O in Object(t)
        ? T(t)
        : L(t);
    };
    var E = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
    var _,
      N = function (t) {
        if (!E(t)) return !1;
        var e = M(t);
        return (
          '[object Function]' == e ||
          '[object GeneratorFunction]' == e ||
          '[object AsyncFunction]' == e ||
          '[object Proxy]' == e
        );
      },
      I = b.a['__core-js_shared__'],
      j = (_ = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + _
        : '';
    var P = function (t) {
        return !!j && j in t;
      },
      R = Function.prototype.toString;
    var D = function (t) {
        if (null != t) {
          try {
            return R.call(t);
          } catch (t) {}
          try {
            return t + '';
          } catch (t) {}
        }
        return '';
      },
      F = /^\[object .+?Constructor\]$/,
      W = Function.prototype,
      z = Object.prototype,
      B = W.toString,
      H = z.hasOwnProperty,
      U = RegExp(
        '^' +
          B.call(H)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    var V = function (t) {
      return !(!E(t) || P(t)) && (N(t) ? U : F).test(D(t));
    };
    var G = function (t, e) {
      return null == t ? void 0 : t[e];
    };
    var q = function (t, e) {
        var r = G(t, e);
        return V(r) ? r : void 0;
      },
      $ = q(b.a, 'Map'),
      Y = q(Object, 'create');
    var K = function () {
      (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
    };
    var X = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      },
      J = Object.prototype.hasOwnProperty;
    var Z = function (t) {
        var e = this.__data__;
        if (Y) {
          var r = e[t];
          return '__lodash_hash_undefined__' === r ? void 0 : r;
        }
        return J.call(e, t) ? e[t] : void 0;
      },
      Q = Object.prototype.hasOwnProperty;
    var tt = function (t) {
      var e = this.__data__;
      return Y ? void 0 !== e[t] : Q.call(e, t);
    };
    var et = function (t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = Y && void 0 === e ? '__lodash_hash_undefined__' : e),
        this
      );
    };
    function rt(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (rt.prototype.clear = K),
      (rt.prototype.delete = X),
      (rt.prototype.get = Z),
      (rt.prototype.has = tt),
      (rt.prototype.set = et);
    var nt = rt;
    var it = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new nt(),
          map: new ($ || p)(),
          string: new nt(),
        });
    };
    var ot = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
    var at = function (t, e) {
      var r = t.__data__;
      return ot(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    };
    var st = function (t) {
      var e = at(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
    var lt = function (t) {
      return at(this, t).get(t);
    };
    var ut = function (t) {
      return at(this, t).has(t);
    };
    var ct = function (t, e) {
      var r = at(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    };
    function ft(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (ft.prototype.clear = it),
      (ft.prototype.delete = st),
      (ft.prototype.get = lt),
      (ft.prototype.has = ut),
      (ft.prototype.set = ct);
    var ht = ft;
    var dt = function (t, e) {
      var r = this.__data__;
      if (r instanceof p) {
        var n = r.__data__;
        if (!$ || n.length < 199)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new ht(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    };
    function pt(t) {
      var e = (this.__data__ = new p(t));
      this.size = e.size;
    }
    (pt.prototype.clear = v),
      (pt.prototype.delete = g),
      (pt.prototype.get = m),
      (pt.prototype.has = y),
      (pt.prototype.set = dt);
    var vt = pt,
      gt = (function () {
        try {
          var t = q(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    var mt = function (t, e, r) {
      '__proto__' == e && gt
        ? gt(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
    var yt = function (t, e, r) {
      ((void 0 !== r && !a(t[e], r)) || (void 0 === r && !(e in t))) &&
        mt(t, e, r);
    };
    var bt = (function (t) {
        return function (e, r, n) {
          for (var i = -1, o = Object(e), a = n(e), s = a.length; s--; ) {
            var l = a[t ? s : ++i];
            if (!1 === r(o[l], l, o)) break;
          }
          return e;
        };
      })(),
      wt = r(183),
      xt = b.a.Uint8Array;
    var St = function (t) {
      var e = new t.constructor(t.byteLength);
      return new xt(e).set(new xt(t)), e;
    };
    var Ct = function (t, e) {
      var r = e ? St(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.length);
    };
    var kt = function (t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
        return e;
      },
      Tt = Object.create,
      At = (function () {
        function t() {}
        return function (e) {
          if (!E(e)) return {};
          if (Tt) return Tt(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    var Lt = (function (t, e) {
        return function (r) {
          return t(e(r));
        };
      })(Object.getPrototypeOf, Object),
      Ot = Object.prototype;
    var Mt = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || Ot);
    };
    var Et = function (t) {
      return 'function' != typeof t.constructor || Mt(t) ? {} : At(Lt(t));
    };
    var _t = function (t) {
      return null != t && 'object' == typeof t;
    };
    var Nt = function (t) {
        return _t(t) && '[object Arguments]' == M(t);
      },
      It = Object.prototype,
      jt = It.hasOwnProperty,
      Pt = It.propertyIsEnumerable,
      Rt = Nt(
        (function () {
          return arguments;
        })()
      )
        ? Nt
        : function (t) {
            return _t(t) && jt.call(t, 'callee') && !Pt.call(t, 'callee');
          },
      Dt = Array.isArray;
    var Ft = function (t) {
      return (
        'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      );
    };
    var Wt = function (t) {
      return null != t && Ft(t.length) && !N(t);
    };
    var zt = function (t) {
        return _t(t) && Wt(t);
      },
      Bt = r(96),
      Ht = Function.prototype,
      Ut = Object.prototype,
      Vt = Ht.toString,
      Gt = Ut.hasOwnProperty,
      qt = Vt.call(Object);
    var $t = function (t) {
        if (!_t(t) || '[object Object]' != M(t)) return !1;
        var e = Lt(t);
        if (null === e) return !0;
        var r = Gt.call(e, 'constructor') && e.constructor;
        return 'function' == typeof r && r instanceof r && Vt.call(r) == qt;
      },
      Yt = {};
    (Yt['[object Float32Array]'] = Yt['[object Float64Array]'] = Yt[
      '[object Int8Array]'
    ] = Yt['[object Int16Array]'] = Yt['[object Int32Array]'] = Yt[
      '[object Uint8Array]'
    ] = Yt['[object Uint8ClampedArray]'] = Yt['[object Uint16Array]'] = Yt[
      '[object Uint32Array]'
    ] = !0),
      (Yt['[object Arguments]'] = Yt['[object Array]'] = Yt[
        '[object ArrayBuffer]'
      ] = Yt['[object Boolean]'] = Yt['[object DataView]'] = Yt[
        '[object Date]'
      ] = Yt['[object Error]'] = Yt['[object Function]'] = Yt[
        '[object Map]'
      ] = Yt['[object Number]'] = Yt['[object Object]'] = Yt[
        '[object RegExp]'
      ] = Yt['[object Set]'] = Yt['[object String]'] = Yt[
        '[object WeakMap]'
      ] = !1);
    var Kt = function (t) {
      return _t(t) && Ft(t.length) && !!Yt[M(t)];
    };
    var Xt = function (t) {
        return function (e) {
          return t(e);
        };
      },
      Jt = r(132),
      Zt = Jt.a && Jt.a.isTypedArray,
      Qt = Zt ? Xt(Zt) : Kt;
    var te = function (t, e) {
        if (
          ('constructor' !== e || 'function' != typeof t[e]) &&
          '__proto__' != e
        )
          return t[e];
      },
      ee = Object.prototype.hasOwnProperty;
    var re = function (t, e, r) {
      var n = t[e];
      (ee.call(t, e) && a(n, r) && (void 0 !== r || e in t)) || mt(t, e, r);
    };
    var ne = function (t, e, r, n) {
      var i = !r;
      r || (r = {});
      for (var o = -1, a = e.length; ++o < a; ) {
        var s = e[o],
          l = n ? n(r[s], t[s], s, r, t) : void 0;
        void 0 === l && (l = t[s]), i ? mt(r, s, l) : re(r, s, l);
      }
      return r;
    };
    var ie = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      },
      oe = /^(?:0|[1-9]\d*)$/;
    var ae = function (t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ('number' == r || ('symbol' != r && oe.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      },
      se = Object.prototype.hasOwnProperty;
    var le = function (t, e) {
      var r = Dt(t),
        n = !r && Rt(t),
        i = !r && !n && Object(Bt.a)(t),
        o = !r && !n && !i && Qt(t),
        a = r || n || i || o,
        s = a ? ie(t.length, String) : [],
        l = s.length;
      for (var u in t)
        (!e && !se.call(t, u)) ||
          (a &&
            ('length' == u ||
              (i && ('offset' == u || 'parent' == u)) ||
              (o &&
                ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
              ae(u, l))) ||
          s.push(u);
      return s;
    };
    var ue = function (t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      },
      ce = Object.prototype.hasOwnProperty;
    var fe = function (t) {
      if (!E(t)) return ue(t);
      var e = Mt(t),
        r = [];
      for (var n in t)
        ('constructor' != n || (!e && ce.call(t, n))) && r.push(n);
      return r;
    };
    var he = function (t) {
      return Wt(t) ? le(t, !0) : fe(t);
    };
    var de = function (t) {
      return ne(t, he(t));
    };
    var pe = function (t, e, r, n, i, o, a) {
      var s = te(t, r),
        l = te(e, r),
        u = a.get(l);
      if (u) yt(t, r, u);
      else {
        var c = o ? o(s, l, r + '', t, e, a) : void 0,
          f = void 0 === c;
        if (f) {
          var h = Dt(l),
            d = !h && Object(Bt.a)(l),
            p = !h && !d && Qt(l);
          (c = l),
            h || d || p
              ? Dt(s)
                ? (c = s)
                : zt(s)
                ? (c = kt(s))
                : d
                ? ((f = !1), (c = Object(wt.a)(l, !0)))
                : p
                ? ((f = !1), (c = Ct(l, !0)))
                : (c = [])
              : $t(l) || Rt(l)
              ? ((c = s), Rt(s) ? (c = de(s)) : (E(s) && !N(s)) || (c = Et(l)))
              : (f = !1);
        }
        f && (a.set(l, c), i(c, l, n, o, a), a.delete(l)), yt(t, r, c);
      }
    };
    var ve = function t(e, r, n, i, o) {
      e !== r &&
        bt(
          r,
          function (a, s) {
            if ((o || (o = new vt()), E(a))) pe(e, r, s, n, t, i, o);
            else {
              var l = i ? i(te(e, s), a, s + '', e, r, o) : void 0;
              void 0 === l && (l = a), yt(e, s, l);
            }
          },
          he
        );
    };
    var ge = function (t) {
      return t;
    };
    var me = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      },
      ye = Math.max;
    var be = function (t, e, r) {
      return (
        (e = ye(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = ye(n.length - e, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[e + i];
          i = -1;
          for (var s = Array(e + 1); ++i < e; ) s[i] = n[i];
          return (s[e] = r(a)), me(t, this, s);
        }
      );
    };
    var we = function (t) {
        return function () {
          return t;
        };
      },
      xe = gt
        ? function (t, e) {
            return gt(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: we(e),
              writable: !0,
            });
          }
        : ge,
      Se = Date.now;
    var Ce = (function (t) {
      var e = 0,
        r = 0;
      return function () {
        var n = Se(),
          i = 16 - (n - r);
        if (((r = n), i > 0)) {
          if (++e >= 800) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    })(xe);
    var ke = function (t, e) {
      return Ce(be(t, e, ge), t + '');
    };
    var Te = function (t, e, r) {
      if (!E(r)) return !1;
      var n = typeof e;
      return (
        !!('number' == n
          ? Wt(r) && ae(e, r.length)
          : 'string' == n && e in r) && a(r[e], t)
      );
    };
    var Ae = (function (t) {
        return ke(function (e, r) {
          var n = -1,
            i = r.length,
            o = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (
            o = t.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
              a && Te(r[0], r[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
              e = Object(e);
            ++n < i;

          ) {
            var s = r[n];
            s && t(e, s, n, o);
          }
          return e;
        });
      })(function (t, e, r) {
        ve(t, e, r);
      }),
      Le = (r(34), r(49), r(63), r(71), 0),
      Oe = function () {
        return 'domain-gfx-id-'.concat(++Le);
      },
      Me = window && window.Symbol ? Symbol('lib namespace') : '_'.concat(Oe()),
      Ee = function (t) {
        return {
          set: function (e, r) {
            t.setAttribute('data-'.concat(e), r);
          },
          get: function (e) {
            return t.getAttribute('data-'.concat(e));
          },
        };
      };
    r(79), r(112), r(116), r(117), r(70), r(129);
    function _e(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Ne(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? _e(Object(r), !0).forEach(function (e) {
              Ie(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : _e(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Ie(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function je(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Pe(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Re,
      De = 'domain_gfx__tooltip',
      Fe = function t(e) {
        if (!e) throw new Error('No entity found in the whole tree');
        return Ee(e).get('entity')
          ? e.getBoundingClientRect()
          : t(e.parentNode);
      },
      We = function (t, e) {
        var r = t.left + t.width / 2 - e.width / 2;
        r = r < 0 ? 0 : Math.min(r, window.innerWidth - e.width);
        var n = t.top - e.height;
        return { x: Math.round(r), y: Math.round(n) };
      },
      ze = function (t) {
        var e = document.createElement('div');
        return (
          e.classList.add(''.concat(De, '___container')), (e.innerHTML = t), e
        );
      },
      Be = (function () {
        function t() {
          var e = this;
          if (
            ((function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            Pe(this, '_promoteTarget', function (t) {
              return function (r) {
                r.target !== t ||
                  e._promoted ||
                  (e._container.style.willChange = 'transform');
              };
            }),
            Pe(this, '_demoteTarget', function (t) {
              return function (r) {
                var n = r.target,
                  i = r.relatedTarget;
                n === t &&
                  e._promoted &&
                  ((i && i === e._container) ||
                    (e._container.style.willChange = ''));
              };
            }),
            Pe(this, '_replaceTooltipContent', function (t) {
              (e._current = ze(
                (function (t) {
                  var e,
                    r,
                    n = Ne(Ne({}, t), t.metadata || {}),
                    i = n.identifier || n.type || n.accession || '',
                    o = n.accession || '',
                    a = n.description,
                    s = n.database || n.source,
                    l = n.start,
                    u = n.targetStart || n.tStart || n.tstart,
                    c = n.targetEnd || n.tEnd || n.tend,
                    f = n.queryStart || n.qStart || n.qstart,
                    h = n.queryEnd || n.qEnd || n.qend;
                  if (
                    (n.start &&
                      n.end &&
                      ((e = ''.concat(n.start, ' - ').concat(n.end)),
                      n.aliStart &&
                        n.aliEnd &&
                        (e += ' (alignment region '
                          .concat(n.aliStart, ' - ')
                          .concat(n.aliEnd, ')'))),
                    n.modelStart)
                  ) {
                    var d = 0;
                    n.modelStart > 1 &&
                      (d = (100 * (n.modelStart - 1)) / n.modelLength),
                      (r = '\n      1<span style="width: 100px;" class="domain">\n        <span class="alignment" style="\n          width: '
                        .concat(
                          (100 * (n.modelEnd - n.modelStart + 1)) /
                            n.modelLength,
                          'px;\n          margin-left: '
                        )
                        .concat(d, 'px;\n          background-color: ')
                        .concat(n.color, ';\n        "></span>\n      </span>')
                        .concat(n.end, '\n    '));
                  }
                  return '\n    <table>\n      <thead>\n        <tr>\n          <th colspan="2">\n            '
                    .concat(i || (u && 'Match coordinates'), '\n            ')
                    .concat(
                      o && o !== i ? ' ('.concat(o, ')') : '',
                      '\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        '
                    )
                    .concat(
                      a
                        ? '\n        <tr>\n          <td>Description:</td>\n          <td>'.concat(
                            a,
                            '</td>\n        </tr>\n        '
                          )
                        : '',
                      '\n        '
                    )
                    .concat(
                      e
                        ? '\n        <tr>\n          <td>Coordinates:</td>\n          <td>'.concat(
                            e,
                            '</td>\n        </tr>\n        '
                          )
                        : '',
                      '\n        '
                    )
                    .concat(
                      r
                        ? '\n        <tr>\n          <td>Model Match:</td>\n          <td class="coordinates">'.concat(
                            r,
                            '</td>\n        </tr>\n        '
                          )
                        : '',
                      '\n        '
                    )
                    .concat(
                      !e && l
                        ? '\n        <tr>\n          <td>Position:</td>\n          <td>'.concat(
                            l,
                            '</td>\n        </tr>\n        '
                          )
                        : '',
                      '\n        '
                    )
                    .concat(
                      s
                        ? '\n        <tr>\n          <td>Source:</td>\n          <td>'.concat(
                            s,
                            '</td>\n        </tr>\n        '
                          )
                        : '',
                      '\n        '
                    )
                    .concat(
                      u
                        ? '\n        <tr>\n          <td>Target:</td>\n          <td>'
                            .concat(u)
                            .concat(
                              c ? ' - '.concat(c) : '',
                              '</td>\n        </tr>\n        '
                            )
                        : '',
                      '\n        '
                    )
                    .concat(
                      f
                        ? '\n        <tr>\n          <td>Query:</td>\n          <td>'
                            .concat(f)
                            .concat(
                              h ? ' - '.concat(h) : '',
                              '</td>\n        </tr>\n        '
                            )
                        : '',
                      '\n      </tbody>\n    </table>\n  '
                    );
                })(t)
              )),
                e._container.replaceChild(
                  e._current,
                  e._container.firstElementChild
                );
            }),
            Pe(this, '_hide', function () {
              e._container.classList.add('hidden'), (e._visible = !1);
            }),
            Pe(this, '_display', function (t) {
              var r = t.x,
                n = t.y;
              (e._container.style.transform = 'translate('
                .concat(r, 'px, ')
                .concat(n + 5, 'px)')),
                e._container.classList.remove('hidden');
            }),
            Pe(this, '_handleMouseOver', function (t) {
              var r = t.target[Me];
              e._currentData !== r &&
                (e._currentData || r) &&
                ((e._currentData = r),
                e._replaceTooltipContent(r),
                e._display(
                  We(Fe(t.target), e._container.getBoundingClientRect())
                ));
            }),
            Pe(this, '_handleMouseOut', function (t) {
              if (t.target[Me] && t.relatedTarget !== e._container) {
                var r = t.relatedTarget[Me];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        We(
                          Fe(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              }
            }),
            window)
          ) {
            var r = document.createElement('div');
            r.classList.add(De),
              r.classList.add('hidden'),
              (r.style.position = 'fixed'),
              (r.style.left = '0'),
              (r.style.top = '0');
            var n = ze('<p>placeholder</p>');
            if (
              (r.appendChild(n),
              (this._current = n),
              (this._container = r),
              !document.body)
            )
              throw new Error('No body in document');
            if (
              (document.body.appendChild(r),
              (this._promoted = !1),
              !document.head)
            )
              throw new Error('No head in document');
            document.head.appendChild(
              (function (t) {
                var e = t.className,
                  r = t.acceptedMargin,
                  n = document.createElement('style');
                return (
                  (n.textContent = '\n.'
                    .concat(e, ' {\n  padding-bottom: ')
                    .concat(r, 'px;\n  font-family: Sans-Serif;\n}\n.')
                    .concat(
                      e,
                      '.hidden {\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transform: translate(-999px, -999px);\n  transform: translate(200vw, 200vh);\n}\n.'
                    )
                    .concat(
                      e,
                      '___container {\n  border-style: solid;\n  border-color: #dedede;\n  border-width: 1px 2px 2px 1px;\n  border-radius: 0.2em;\n  background-color: #fff;\n  margin-bottom: '
                    )
                    .concat(r, 'px;\n}\n.')
                    .concat(e, ' thead {\n  background-color: #dedede;\n}\n.')
                    .concat(
                      e,
                      ' td:first-of-type {\n  font-weight: bold;\n}\n.'
                    )
                    .concat(e, ' th {\n  text-align: left;\n}\n.')
                    .concat(
                      e,
                      ' .coordinates {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.'
                    )
                    .concat(
                      e,
                      ' .domain {\n  margin: 0 0.5em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 0.5em;\n  background-color: black;\n}\n.'
                    )
                    .concat(
                      e,
                      ' .alignment {\n  display: inline-block;\n  margin-left: 0;\n  height: 1em;\n  border-radius: 0.2em;\n  background-color: grey;\n}'
                    )),
                  n
                );
              })({ className: De, acceptedMargin: 5 })
            ),
              r.addEventListener('mouseleave', function (t) {
                var r = t.relatedTarget[Me];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        We(
                          Fe(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              });
          }
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: 'attachToCanvas',
              value: function (t) {
                var e = this,
                  r = this._promoteTarget(t),
                  n = this._demoteTarget(t);
                return (
                  t.addEventListener('mouseenter', r),
                  t.addEventListener('mouseleave', n),
                  t.addEventListener('mouseover', this._handleMouseOver),
                  t.addEventListener('mousemove', this._handleMouseOver),
                  t.addEventListener('mouseout', this._handleMouseOut),
                  function () {
                    t.removeEventListener('mouseenter', r),
                      t.removeEventListener('mouseleave', n),
                      t.removeEventListener('mouseover', e._handleMouseOver),
                      t.removeEventListener('mousemove', e._handleMouseOver),
                      t.removeEventListener('mouseout', e._handleMouseOut);
                  }
                );
              },
            },
          ]) && je(e.prototype, r),
          n && je(e, n),
          t
        );
      })(),
      He = function () {
        return Re || (Re = new Be()), Re;
      },
      Ue =
        (r(144),
        r(47),
        r(151),
        r(155),
        r(165),
        r(166),
        r(162),
        r(126),
        r(74),
        r(94),
        function (t) {
          return function (e) {
            for (
              var r = document.createElementNS('http://www.w3.org/2000/svg', t),
                n = Object.keys(e || {}),
                i = 0,
                o = n;
              i < o.length;
              i++
            ) {
              var a = o[i],
                s = e[a];
              (s || 0 === s) && r.setAttribute(a, String(s));
            }
            for (
              var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
              c < l;
              c++
            )
              u[c - 1] = arguments[c];
            for (var f = 0, h = u; f < h.length; f++) {
              var d = h[f];
              d &&
                r.appendChild(
                  d instanceof Node ? d : document.createTextNode(d)
                );
            }
            return r;
          };
        }),
      Ve = Ue('svg'),
      Ge = Ue('circle'),
      qe = Ue('defs'),
      $e = Ue('linearGradient'),
      Ye = Ue('g'),
      Ke = Ue('mask'),
      Xe = Ue('path'),
      Je = Ue('rect'),
      Ze = Ue('stop'),
      Qe = Ue('text'),
      tr = Ue('filter'),
      er = Ue('feGaussianBlur'),
      rr = Ue('feSpecularLighting'),
      nr = Ue('fePointLight'),
      ir = Ue('feComposite');
    function or(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function ar(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var sr = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'm0,0';
          or(this, t), (this._data = e);
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: 'add',
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '';
                return (this._data += t), this;
              },
            },
            {
              key: 'finish',
              value: function (t) {
                return t && (this._data += 'z'), this._data;
              },
            },
            {
              key: 'close',
              value: function () {
                return this.finish(!0);
              },
            },
          ]) && ar(e.prototype, r),
          n && ar(e, n),
          t
        );
      })(),
      lr = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t
          ? 'v'.concat(e)
          : 0 === e
          ? 'h'.concat(t)
          : 'l'.concat(t, ',').concat(e);
      },
      ur = function (t) {
        return lr(0, t);
      },
      cr = function (t) {
        var e = t.style,
          r = t.color,
          n = t.isOnTop;
        switch (e) {
          case 'diamond':
            return (function (t, e) {
              var r = new sr('m0,'.concat(e ? -10 : 6))
                .add(lr(2, 2))
                .add(lr(-2, 2))
                .add(lr(-2, -2))
                .close();
              return Xe({ d: r, fill: t });
            })(r, n);
          case 'circle':
            return (function (t, e) {
              return Ge({ cx: 0, cy: e ? -8 : 8, r: 1.5, fill: t });
            })(r, n);
          case 'arrow':
            return (function (t, e) {
              var r;
              return (
                (r = e
                  ? new sr('m-2,'.concat(-6))
                      .add(lr(2, -2))
                      .add(lr(2, 2))
                      .finish()
                  : new sr('m-2,'.concat(6))
                      .add(lr(2, 2))
                      .add(lr(2, -2))
                      .finish()),
                Xe({ stroke: t, fill: 'none', d: r })
              );
            })(r, n);
          case 'pointer':
            return (function (t, e) {
              var r;
              return (
                (r = e
                  ? new sr('m-2,'.concat(-4.5))
                      .add(lr(2, 2))
                      .add(lr(2, -2))
                      .finish()
                  : new sr('m-2,'.concat(4.5))
                      .add(lr(2, -2))
                      .add(lr(2, 2))
                      .finish()),
                Xe({ stroke: t, fill: 'none', d: r })
              );
            })(r, n);
          case 'line':
            return (function (t, e) {
              return Xe({
                stroke: t,
                d: new sr('m0,'.concat(8 * (e ? -1 : 1) - 1.5))
                  .add(ur(3))
                  .finish(),
              });
            })(r, n);
          case 'square':
          default:
            return (function (t, e) {
              return Je({
                x: -1.5,
                y: e ? -9.5 : 6.5,
                width: 3,
                height: 3,
                fill: t,
              });
            })(r, n);
        }
      },
      fr = function (t, e) {
        var r,
          n = t.start,
          i = t.end,
          o = t.v_align,
          a = t.vAlign,
          s = t.level,
          l = void 0 === s ? 0 : s,
          u = t.lineColor,
          c = t.headColor,
          f = t.color,
          h = t.headStyle,
          d = /top/i.test(o || a),
          p = new sr().add(ur((1.5 * l + 8) * (d ? -1 : 1)));
        return (
          i &&
            (p = p
              .add(((r = (i - n) * e), lr(r, 0)))
              .add(ur((1.5 * l + 8) * (d ? 1 : -1)))),
          (p = p.finish()),
          Ye(
            null,
            Xe({ d: p, fill: 'none', stroke: u || (i && f) || 'black' }),
            !i && cr({ color: c || (!i && f) || 'black', style: h, isOnTop: d })
          )
        );
      };
    r(147), r(113);
    function hr(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return dr(t);
        })(t) ||
        (function (t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return dr(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          'Object' === r && t.constructor && (r = t.constructor.name);
          if ('Map' === r || 'Set' === r) return Array.from(t);
          if (
            'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return dr(t, e);
        })(t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function dr(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var pr = function (t) {
        var e = t;
        1 === e.length && (e[1] = e[0]);
        var r = 100 / (e.length - 1);
        return e.map(function (t, e) {
          return Ze({ offset: ''.concat(e * r, '%'), 'stop-color': t });
        });
      },
      vr = function (t) {
        for (var e = [], r = t.length, n = 100 / r, i = 0; i < r; i++)
          e.push(Ze({ offset: ''.concat(i * n, '%'), 'stop-color': t[i] })),
            e.push(
              Ze({ offset: ''.concat(i * n + n, '%'), 'stop-color': t[i] })
            );
        return e;
      },
      gr = function (t, e) {
        var r = Oe();
        return {
          gradientId: r,
          gradientElement: $e.apply(
            void 0,
            [{ id: r, x1: 0, x2: 0, y1: 0, y2: 1 }].concat(hr((e ? pr : vr)(t)))
          ),
        };
      };
    r(107), r(73), r(159);
    function mr(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError('Expected a function');
      var r = function () {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (mr.Cache || ht)()), r;
    }
    mr.Cache = ht;
    var yr,
      br = mr;
    function wr(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(n = (a = s.next()).done) &&
              (r.push(a.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return xr(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          'Object' === r && t.constructor && (r = t.constructor.name);
          if ('Map' === r || 'Set' === r) return Array.from(t);
          if (
            'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return xr(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function xr(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    window &&
      document &&
      window.getComputedStyle &&
      ((yr = document.createElement('p')).style.opacity = '0');
    var Sr = /rgba?\((\d+), (\d+), (\d+)/,
      Cr = br(function (t) {
        if (!yr) return 'black';
        var e = (function (t) {
          if (!yr || !document.body) return { r: 255, g: 255, b: 255 };
          (yr.style.background = t), document.body.appendChild(yr);
          var e = wr(window.getComputedStyle(yr).backgroundColor.match(Sr), 4),
            r = e[1],
            n = e[2],
            i = e[3];
          return (
            document.body && document.body.removeChild(yr),
            { r: +r, g: +n, b: +i }
          );
        })(t);
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128
          ? 'black'
          : 'white';
      }),
      kr = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t
          ? 'v'.concat(e)
          : 0 === e
          ? 'h'.concat(t)
          : 'l'.concat(t, ',').concat(e);
      },
      Tr = function (t) {
        return kr(t, 0);
      },
      Ar = function (t) {
        return kr(0, t);
      },
      Lr = function (t, e, r, n, i, o, a) {
        return 'A'
          .concat(t, ',')
          .concat(e, ',')
          .concat(r, ',')
          .concat(n, ',')
          .concat(i, ',')
          .concat(o, ',')
          .concat(a);
      },
      Or = function (t) {
        var e = t.start,
          r = t.end,
          n = t.startStyle,
          i = t.endStyle,
          o = t.fill,
          a = t.residueWidth,
          s = t.mask,
          l = t.filter,
          u = (r - e) * a - 10,
          c = new sr('m'.concat(5, ',0'))
            .add(
              (function (t) {
                return Tr(t);
              })(u)
            )
            .add(
              (function (t, e) {
                switch (t.toLowerCase()) {
                  case 'jagged':
                    return (
                      Tr(5) +
                      kr(-2.5, 2.5) +
                      kr(2.5, 2.5) +
                      kr(-2.5, 2.5) +
                      kr(2.5, 2.5) +
                      Tr(-5)
                    );
                  case 'arrow':
                    return kr(5, 5) + kr(-5, 5);
                  case 'curved':
                    return Lr(5, 5, 0, 0, 1, e + 5, 10);
                  case 'straight':
                  default:
                    return Tr(5) + Ar(10) + Tr(-5);
                }
              })(i || '', u)
            )
            .add(
              (function (t) {
                return Tr(-t);
              })(u)
            )
            .add(
              (function (t) {
                switch (t.toLowerCase()) {
                  case 'jagged':
                    return (
                      Tr(-5) +
                      kr(2.5, -2.5) +
                      kr(-2.5, -2.5) +
                      kr(2.5, -2.5) +
                      kr(-2.5, -2.5) +
                      Tr(5)
                    );
                  case 'arrow':
                    return kr(-5, -5) + kr(5, -5);
                  case 'curved':
                    return Lr(5, 5, 0, 0, 1, 5, 0);
                  case 'straight':
                  default:
                    return Tr(-5) + Ar(-10) + Tr(5);
                }
              })(n || '')
            )
            .close();
        return Xe({ d: c, fill: o, mask: s, filter: l });
      },
      Mr = function (t, e, r, n) {
        var i = t.start,
          o = t.aliStart,
          a = t.aliEnd,
          s = t.end,
          l = t.startStyle,
          u = t.endStyle,
          c = t.color,
          f = t.text,
          h = t.textColor,
          d = t.gradient,
          p = (function (t) {
            var e = t.start,
              r = t.aliStart,
              n = t.aliEnd,
              i = t.end,
              o = t.residueWidth,
              a = Oe();
            return {
              maskId: a,
              maskElement: Ke(
                {
                  id: a,
                  x: 0,
                  y: 0,
                  width: (i - e) * o,
                  height: 10,
                  fill: '#fff',
                },
                Je({
                  x: 0,
                  y: 0,
                  width: (r - e) * o,
                  height: 10,
                  opacity: 0.6,
                }),
                Je({
                  x: (r - e) * o,
                  y: 0,
                  width: (n - r) * o,
                  height: 10,
                  opacity: 1,
                }),
                Je({
                  x: (n - e) * o,
                  y: 0,
                  width: (i - n) * o,
                  height: 10,
                  opacity: 0.6,
                })
              ),
            };
          })({
            start: i,
            aliStart: o || i,
            aliEnd: a || s,
            end: s,
            residueWidth: e,
          }),
          v = p.maskId;
        n(p.maskElement);
        var g = c,
          m = {};
        Array.isArray(g) &&
          (n((m = gr(g, d)).gradientElement),
          (g = 'url(#'.concat(m.gradientId, ')')));
        var y = Qe(
          {
            x: ((s - i) * e) / 2,
            y: 8,
            'text-anchor': 'middle',
            'font-size': 7.5,
            'font-family': 'Sans-Serif',
            fill: h || Cr(Array.isArray(c) ? c[0] : c),
            opacity: 0,
          },
          f || ''
        );
        return (
          Ee(y).set('maxwidth', (s - i) * e),
          Ye(
            null,
            Or({
              start: i,
              end: s,
              startStyle: l,
              endStyle: u,
              residueWidth: e,
              fill: g,
              mask: 'url(#'.concat(v, ')'),
              filter: r && 'url(#'.concat(r, ')'),
            }),
            f ? y : null
          )
        );
      };
    function Er(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function _r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Er(Object(r), !0).forEach(function (e) {
              Nr(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Er(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Nr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Ir(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(n = (a = s.next()).done) &&
              (r.push(a.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        })(t, e) ||
        Dr(t, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function jr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Pr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Rr(t, e) {
      var r;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (r = Dr(t)) ||
          (e && t && 'number' == typeof t.length)
        ) {
          r && (t = r);
          var n = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: i,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var o,
        a = !0,
        s = !1;
      return {
        s: function () {
          r = t[Symbol.iterator]();
        },
        n: function () {
          var t = r.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (s = !0), (o = t);
        },
        f: function () {
          try {
            a || null == r.return || r.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function Dr(t, e) {
      if (t) {
        if ('string' == typeof t) return Fr(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          'Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r
            ? Array.from(t)
            : 'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? Fr(t, e)
            : void 0
        );
      }
    }
    function Fr(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var Wr = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (window && (e.tooltip || e.metadata || r)) {
          var n,
            i = Rr(t.querySelectorAll(':not(g)'));
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var o = n.value;
              o[Me] = e;
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
        }
      },
      zr = (function () {
        function t(e) {
          var r = this,
            n = e.width,
            i = e.height,
            o = e.spotlight,
            a = void 0 === o || o;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            Pr(this, '_addToDefs', function (t) {
              return r._defs.appendChild(t);
            }),
            Pr(this, 'drawMarkup', function (t, e, n) {
              if (t.end && !Number.isFinite(t.level)) {
                var i,
                  o = new Set([0, 1, -1]),
                  a = Rr(n);
                try {
                  for (a.s(); !(i = a.n()).done; ) {
                    var s = i.value;
                    t.start < s.end && o.delete(s.level);
                  }
                } catch (t) {
                  a.e(t);
                } finally {
                  a.f();
                }
                var l = Ir(o, 1)[0];
                t.level = l || 0;
              }
              var u = Ye(
                { transform: 'translate('.concat(t.start * e, ', 10)') },
                fr(t, e)
              );
              Ee(u).set('entity', 'markup'), Wr(u, t), r._canvas.appendChild(u);
            }),
            Pr(this, 'drawSequence', function (t) {
              var e = Ye(
                { transform: 'translate(0 10)' },
                (function (t) {
                  var e = t.position,
                    r = e.x,
                    n = e.y,
                    i = t.length,
                    o = t.height,
                    a = t.color;
                  return Je({
                    x: r,
                    y: n,
                    width: i,
                    height: o,
                    fill: a || '#d8d8d8',
                    rx: o / 2,
                    ry: o / 2,
                  });
                })({
                  position: { x: 0, y: -2.5 },
                  length: t,
                  height: 5,
                  color: '#d8d8d8',
                })
              );
              Ee(e).set('entity', 'sequence'), r._canvas.appendChild(e);
            }),
            Pr(this, 'drawHit', function (t, e) {
              var n = Ye(
                { transform: 'translate('.concat(t.tstart * e, ', 16)') },
                (function (t) {
                  var e = t.position,
                    r = e.x,
                    n = e.y,
                    i = t.length,
                    o = t.height,
                    a = t.color;
                  return Je({
                    x: r,
                    y: n,
                    width: i,
                    height: o,
                    fill: a || 'black',
                  });
                })({
                  position: { x: 0, y: 0 },
                  length: (t.tend - t.tstart) * e,
                  height: 2,
                  color: t.color,
                })
              );
              Ee(n).set('entity', 'hit'),
                Wr(n, t, !0),
                r._canvas.appendChild(n);
            }),
            Pr(this, 'drawRegion', function (t, e) {
              var n = Ye(
                { transform: 'translate('.concat(t.start * e, ', 5)') },
                Mr(t, e, r._spotlight, r._addToDefs)
              );
              Ee(n).set('entity', 'region'), Wr(n, t), r._canvas.appendChild(n);
              var i = n.querySelector('[data-maxwidth]');
              i &&
                (i.getBBox().width <= +(Ee(i).get('maxwidth') - 0)
                  ? i.setAttribute('opacity', 1)
                  : i.parentElement && i.parentElement.removeChild(i));
            }),
            Pr(this, 'drawMotif', function (t, e) {
              var n = Ye(
                { transform: 'translate('.concat(t.start * e, ', 6)') },
                (function (t, e) {
                  var r = t.position,
                    n = r.x,
                    i = r.y,
                    o = t.length,
                    a = t.height,
                    s = t.color,
                    l = t.gradient,
                    u = { x: n, y: i, width: o, height: a, opacity: 0.5 };
                  if (!Array.isArray(s))
                    return Je(_r(_r({}, u), {}, { fill: s || 'gray' }));
                  var c = gr(s, l),
                    f = c.gradientId;
                  return (
                    e(c.gradientElement),
                    Je(_r(_r({}, u), {}, { fill: 'url(#'.concat(f, ')') }))
                  );
                })(
                  {
                    position: { x: 0, y: 0 },
                    length: (t.end - t.start) * e,
                    height: 8,
                    color: t.color,
                    gradient: t.gradient,
                  },
                  r._addToDefs
                )
              );
              Ee(n).set('entity', 'motif'), Wr(n, t), r._canvas.appendChild(n);
            }),
            (this._spotlight = a && Oe()),
            (this._defs = qe(
              null,
              this._spotlight &&
                tr(
                  {
                    id: this._spotlight,
                    filterUnits: 'objectBoundingBox',
                    x: -0.1,
                    y: -0.1,
                    width: 5,
                    height: 5,
                  },
                  er({
                    in: 'SourceAlpha',
                    stdDeviation: 1,
                    result: 'alpha_blur',
                  }),
                  rr(
                    {
                      in: 'alpha_blur',
                      surfaceScale: 5,
                      specularConstant: 1.5,
                      specularExponent: 12,
                      'lighting-color': '#ddd',
                      result: 'light',
                    },
                    nr({ x: -100, y: -200, z: 100 })
                  ),
                  ir({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
                )
            )),
            (this._canvas = Ve(
              { width: n, height: i, viewBox: '0 0 '.concat(n, ' ').concat(i) },
              this._defs
            )),
            (this._canvas.style.width = ''.concat(2 * n, 'px')),
            (this._canvas.style.height = ''.concat(2 * i, 'px'));
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: 'canvas',
              get: function () {
                return this._canvas;
              },
            },
          ]) && jr(e.prototype, r),
          n && jr(e, n),
          t
        );
      })();
    r(161);
    function Br(t) {
      return (Br =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var Hr = new Set([
        'start',
        'end',
        'aliStart',
        'aliEnd',
        'modelStart',
        'modelEnd',
        'length',
        'level',
        'tStart',
        'tEnd',
        'qStart',
        'qEnd',
        'tstart',
        'tend',
        'qstart',
        'qend',
      ]),
      Ur = /(^.*colo)u(r.*$)/i,
      Vr = /^f(alse)?$/i,
      Gr = function t(e) {
        for (var r = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
          var o = i[n],
            a = e[o],
            s = o,
            l = a;
          if (Hr.has(s) && ((l = +l), isNaN(l)))
            throw new Error(
              'expected key '
                .concat(o, ' to be a number, not ')
                .concat(String(a), ')')
            );
          Ur.test(s) && (s = s.replace(Ur, '$1$2')),
            'display' === s && (l = 'string' == typeof l ? !Vr.test(l) : !!l),
            l &&
              (Array.isArray(l)
                ? (l = l.map(function (e) {
                    return e && 'object' === Br(e) ? t(e) : e;
                  }))
                : 'object' === Br(l) && (l = t(l))),
            (r[s] = l);
        }
        return r;
      };
    function qr(t, e) {
      var r;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (r = (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return $r(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === r && t.constructor && (r = t.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(t);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return $r(t, e);
          })(t)) ||
          (e && t && 'number' == typeof t.length)
        ) {
          r && (t = r);
          var n = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: i,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var o,
        a = !0,
        s = !1;
      return {
        s: function () {
          r = t[Symbol.iterator]();
        },
        n: function () {
          var t = r.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (s = !0), (o = t);
        },
        f: function () {
          try {
            a || null == r.return || r.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function $r(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function Yr(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function Kr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Xr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Jr = function (t) {
        var e = t.hidden,
          r = t.display;
        return e || !(void 0 === r || r);
      },
      Zr = (function () {
        function t() {
          var e = this,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = r.data,
            i = void 0 === n ? {} : n,
            o = r.parent,
            a = r.params,
            s = void 0 === a ? {} : a;
          Yr(this, t),
            Xr(this, '_draw', function () {
              var t,
                r = [],
                n = !1,
                i = qr(
                  (e._data.markups || []).sort(function (t, e) {
                    return t.start - e.start;
                  })
                );
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var o = t.value;
                  Jr(o) ||
                    (e._renderer.drawMarkup(
                      o,
                      e._params.image.width.residue,
                      r
                    ),
                    (n |= !(!o.tooltip && !o.metadata)),
                    o.end && r.push(o));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              e._renderer.drawSequence(
                e._data.length * e._params.image.width.residue
              );
              var a,
                s = qr(e._data.hits || []);
              try {
                for (s.s(); !(a = s.n()).done; ) {
                  var l = a.value;
                  Jr(l) ||
                    (e._renderer.drawHit(l, e._params.image.width.residue),
                    (n = !0));
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
              var u,
                c = qr(e._data.regions || []);
              try {
                for (c.s(); !(u = c.n()).done; ) {
                  var f = u.value;
                  Jr(f) ||
                    (e._renderer.drawRegion(f, e._params.image.width.residue),
                    (n |= !(!f.tooltip && !f.metadata)));
                }
              } catch (t) {
                c.e(t);
              } finally {
                c.f();
              }
              var h,
                d = qr(e._data.motifs || []);
              try {
                for (d.s(); !(h = d.n()).done; ) {
                  var p = h.value;
                  Jr(p) ||
                    (e._renderer.drawMotif(p, e._params.image.width.residue),
                    (n |= !(!p.tooltip && !p.metadata)));
                }
              } catch (t) {
                d.e(t);
              } finally {
                d.f();
              }
              n && (e._detach = He().attachToCanvas(e._renderer.canvas));
            }),
            Xr(this, '_createCanvas', function () {
              return (
                (e._renderer = new zr({
                  width: e._computeWidth(e._data, e._params),
                  height: e._computeHeight(),
                })),
                e._renderer.canvas
              );
            }),
            Xr(this, 'delete', function () {
              e._detach && (e._detach(), (e._detach = null)),
                e._parent.removeChild(e._canvas),
                (e._canvas = e._parent = null);
            }),
            (this._data = Gr(i)),
            (this._parent = o),
            (this._params = Ae(
              {},
              {
                image: {
                  headSize: {
                    circle: 3,
                    square: 5,
                    diamond: 4,
                    arrow: 3,
                    pointer: 3,
                    line: 3,
                  },
                  sequenceEndPadding: 2,
                  offset: { x: 0, y: 0 },
                  increment: {
                    lollipopToLollipop: 7,
                    bridgeToBridge: 2,
                    bridgeToLollipop: 5,
                  },
                  largeJaggedSteps: 6,
                  fontSize: '10px',
                  height: { markup: 20, region: 20, motif: 14 },
                  opacity: { motif: 0.6, env: 0.6 },
                  labelPadding: 3,
                  width: { residue: 0.5 },
                  scale: { x: 1, y: 1 },
                  highlight: { weight: 1, color: '#000' },
                },
                options: {
                  baseUrl: '',
                  imageMap: !0,
                  labels: !0,
                  tips: !0,
                  tipStyle: 'pfam',
                  newCanvas: !0,
                },
              },
              s
            )),
            (this._canvas = this._createCanvas()),
            this._parent.appendChild(this._canvas),
            this._draw();
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: '_computeWidth',
              value: function (t, e) {
                var r = t.length,
                  n = void 0 === r ? 0 : r,
                  i = e.image,
                  o = i.width,
                  a = i.sequenceEndPadding;
                return n * o.residue + a;
              },
            },
            {
              key: '_computeHeight',
              value: function () {
                return 20;
              },
            },
            {
              key: 'data',
              get: function () {
                return this._data;
              },
              set: function (t) {
                this._data = Gr(t);
                var e = this._canvas;
                return (
                  (this._canvas = this._createCanvas()),
                  this._parent.replaceChild(this._canvas, e),
                  this._draw(),
                  this._data
                );
              },
            },
          ]) && Kr(e.prototype, r),
          n && Kr(e, n),
          t
        );
      })();
    try {
      document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: Zr }));
    } catch (t) {}
    var Qr = function () {
      return b.a.Date.now();
    };
    var tn = function (t) {
        return 'symbol' == typeof t || (_t(t) && '[object Symbol]' == M(t));
      },
      en = /^\s+|\s+$/g,
      rn = /^[-+]0x[0-9a-f]+$/i,
      nn = /^0b[01]+$/i,
      on = /^0o[0-7]+$/i,
      an = parseInt;
    var sn = function (t) {
        if ('number' == typeof t) return t;
        if (tn(t)) return NaN;
        if (E(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = E(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(en, '');
        var r = nn.test(t);
        return r || on.test(t)
          ? an(t.slice(2), r ? 2 : 8)
          : rn.test(t)
          ? NaN
          : +t;
      },
      ln = Math.max,
      un = Math.min;
    var cn,
      fn = function (t, e, r) {
        var n,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = !1,
          f = !1,
          h = !0;
        if ('function' != typeof t) throw new TypeError('Expected a function');
        function d(e) {
          var r = n,
            o = i;
          return (n = i = void 0), (u = e), (a = t.apply(o, r));
        }
        function p(t) {
          return (u = t), (s = setTimeout(g, e)), c ? d(t) : a;
        }
        function v(t) {
          var r = t - l;
          return void 0 === l || r >= e || r < 0 || (f && t - u >= o);
        }
        function g() {
          var t = Qr();
          if (v(t)) return m(t);
          s = setTimeout(
            g,
            (function (t) {
              var r = e - (t - l);
              return f ? un(r, o - (t - u)) : r;
            })(t)
          );
        }
        function m(t) {
          return (s = void 0), h && n ? d(t) : ((n = i = void 0), a);
        }
        function y() {
          var t = Qr(),
            r = v(t);
          if (((n = arguments), (i = this), (l = t), r)) {
            if (void 0 === s) return p(l);
            if (f) return clearTimeout(s), (s = setTimeout(g, e)), d(l);
          }
          return void 0 === s && (s = setTimeout(g, e)), a;
        }
        return (
          (e = sn(e) || 0),
          E(r) &&
            ((c = !!r.leading),
            (o = (f = 'maxWait' in r) ? ln(sn(r.maxWait) || 0, e) : o),
            (h = 'trailing' in r ? !!r.trailing : h)),
          (y.cancel = function () {
            void 0 !== s && clearTimeout(s), (u = 0), (n = l = i = s = void 0);
          }),
          (y.flush = function () {
            return void 0 === s ? a : m(Qr());
          }),
          y
        );
      },
      hn = r(184),
      dn = document.querySelector('.data textarea'),
      pn = document.querySelector('.visu'),
      vn = document.querySelector('.invalid'),
      gn = function (t) {
        var e,
          r = t.getValue();
        try {
          e = JSON.parse(r);
        } catch (t) {
          return vn.classList.remove('hidden'), void console.error(t);
        }
        cn ? (cn.data = e) : (cn = new Zr({ parent: pn, data: e })),
          vn.classList.add('hidden');
      };
    dn.value = JSON.stringify(hn, null, 2);
    var mn = i.a.fromTextArea(dn, { lineNumbers: !0 });
    mn.on('change', fn(gn, 1e3)), gn(mn);
  },
]);
//# sourceMappingURL=domain-gfx.legacy.js.map
