!(function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? (module.exports = t()) : (e.Phaser = t());
})(this, function () {
  function e() {
    return (t.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array), t.Matrix;
  }
  var t = t || {},
    n = n || {
      VERSION: "1.1.4",
      DEV_VERSION: "1.1.4",
      GAMES: [],
      AUTO: 0,
      CANVAS: 1,
      WEBGL: 2,
      HEADLESS: 3,
      SPRITE: 0,
      BUTTON: 1,
      BULLET: 2,
      GRAPHICS: 3,
      TEXT: 4,
      TILESPRITE: 5,
      BITMAPTEXT: 6,
      GROUP: 7,
      RENDERTEXTURE: 8,
      TILEMAP: 9,
      TILEMAPLAYER: 10,
      EMITTER: 11,
      POLYGON: 12,
      BITMAPDATA: 13,
      CANVAS_FILTER: 14,
      WEBGL_FILTER: 15,
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      UP: 3,
      DOWN: 4,
      CANVAS_PX_ROUND: !1,
      CANVAS_CLEAR_RECT: !0,
    };
  (t.InteractionManager = function () {}),
    (n.Utils = {
      shuffle: function (e) {
        for (var t = e.length - 1; t > 0; t--) {
          var n = Math.floor(Math.random() * (t + 1)),
            r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        return e;
      },
      pad: function (e, t, n, r) {
        if ("undefined" == typeof t) var t = 0;
        if ("undefined" == typeof n) var n = " ";
        if ("undefined" == typeof r) var r = 3;
        var i = 0;
        if (t + 1 >= e.length)
          switch (r) {
            case 1:
              e = Array(t + 1 - e.length).join(n) + e;
              break;
            case 3:
              var s = Math.ceil((i = t - e.length) / 2),
                o = i - s;
              e = Array(o + 1).join(n) + e + Array(s + 1).join(n);
              break;
            default:
              e += Array(t + 1 - e.length).join(n);
          }
        return e;
      },
      isPlainObject: function (e) {
        if ("object" != typeof e || e.nodeType || e === e.window) return !1;
        try {
          if (e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (t) {
          return !1;
        }
        return !0;
      },
      extend: function () {
        var e,
          t,
          r,
          i,
          s,
          o,
          u = arguments[0] || {},
          a = 1,
          f = arguments.length,
          l = !1;
        for ("boolean" == typeof u && ((l = u), (u = arguments[1] || {}), (a = 2)), f === a && ((u = this), --a); f > a; a++)
          if (null != (e = arguments[a]))
            for (t in e)
              (r = u[t]),
                (i = e[t]),
                u !== i &&
                  (l && i && (n.Utils.isPlainObject(i) || (s = Array.isArray(i)))
                    ? (s ? ((s = !1), (o = r && Array.isArray(r) ? r : [])) : (o = r && n.Utils.isPlainObject(r) ? r : {}), (u[t] = n.Utils.extend(l, o, i)))
                    : void 0 !== i && (u[t] = i));
        return u;
      },
    }),
    (t.hex2rgb = function (e) {
      return [((e >> 16) & 255) / 255, ((e >> 8) & 255) / 255, (255 & e) / 255];
    }),
    "function" != typeof Function.prototype.bind &&
      (Function.prototype.bind = (function () {
        var e = Array.prototype.slice;
        return function (t) {
          function n() {
            var o = i.concat(e.call(arguments));
            r.apply(this instanceof n ? this : t, o);
          }
          var r = this,
            i = e.call(arguments, 1);
          if ("function" != typeof r) throw new TypeError();
          return (
            (n.prototype = (function s(e) {
              return e && (s.prototype = e), this instanceof s ? void 0 : new s();
            })(r.prototype)),
            n
          );
        };
      })()),
    Array.isArray ||
      (Array.isArray = function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      }),
    e(),
    (t.mat3 = {}),
    (t.mat3.create = function () {
      var e = new t.Matrix(9);
      return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = 1), (e[5] = 0), (e[6] = 0), (e[7] = 0), (e[8] = 1), e;
    }),
    (t.mat3.identity = function (e) {
      return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = 1), (e[5] = 0), (e[6] = 0), (e[7] = 0), (e[8] = 1), e;
    }),
    (t.mat4 = {}),
    (t.mat4.create = function () {
      var e = new t.Matrix(16);
      return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = 0), (e[5] = 1), (e[6] = 0), (e[7] = 0), (e[8] = 0), (e[9] = 0), (e[10] = 1), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), e;
    }),
    (t.mat3.multiply = function (e, t, n) {
      n || (n = e);
      var r = e[0],
        i = e[1],
        s = e[2],
        o = e[3],
        u = e[4],
        a = e[5],
        f = e[6],
        l = e[7],
        c = e[8],
        h = t[0],
        p = t[1],
        d = t[2],
        v = t[3],
        m = t[4],
        g = t[5],
        y = t[6],
        b = t[7],
        w = t[8];
      return (
        (n[0] = h * r + p * o + d * f),
        (n[1] = h * i + p * u + d * l),
        (n[2] = h * s + p * a + d * c),
        (n[3] = v * r + m * o + g * f),
        (n[4] = v * i + m * u + g * l),
        (n[5] = v * s + m * a + g * c),
        (n[6] = y * r + b * o + w * f),
        (n[7] = y * i + b * u + w * l),
        (n[8] = y * s + b * a + w * c),
        n
      );
    }),
    (t.mat3.clone = function (e) {
      var n = new t.Matrix(9);
      return (n[0] = e[0]), (n[1] = e[1]), (n[2] = e[2]), (n[3] = e[3]), (n[4] = e[4]), (n[5] = e[5]), (n[6] = e[6]), (n[7] = e[7]), (n[8] = e[8]), n;
    }),
    (t.mat3.transpose = function (e, t) {
      if (!t || e === t) {
        var n = e[1],
          r = e[2],
          i = e[5];
        return (e[1] = e[3]), (e[2] = e[6]), (e[3] = n), (e[5] = e[7]), (e[6] = r), (e[7] = i), e;
      }
      return (t[0] = e[0]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = e[1]), (t[4] = e[4]), (t[5] = e[7]), (t[6] = e[2]), (t[7] = e[5]), (t[8] = e[8]), t;
    }),
    (t.mat3.toMat4 = function (e, n) {
      return (
        n || (n = t.mat4.create()),
        (n[15] = 1),
        (n[14] = 0),
        (n[13] = 0),
        (n[12] = 0),
        (n[11] = 0),
        (n[10] = e[8]),
        (n[9] = e[7]),
        (n[8] = e[6]),
        (n[7] = 0),
        (n[6] = e[5]),
        (n[5] = e[4]),
        (n[4] = e[3]),
        (n[3] = 0),
        (n[2] = e[2]),
        (n[1] = e[1]),
        (n[0] = e[0]),
        n
      );
    }),
    (t.mat4.create = function () {
      var e = new t.Matrix(16);
      return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = 0), (e[5] = 1), (e[6] = 0), (e[7] = 0), (e[8] = 0), (e[9] = 0), (e[10] = 1), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), e;
    }),
    (t.mat4.transpose = function (e, t) {
      if (!t || e === t) {
        var n = e[1],
          r = e[2],
          i = e[3],
          s = e[6],
          o = e[7],
          u = e[11];
        return (e[1] = e[4]), (e[2] = e[8]), (e[3] = e[12]), (e[4] = n), (e[6] = e[9]), (e[7] = e[13]), (e[8] = r), (e[9] = s), (e[11] = e[14]), (e[12] = i), (e[13] = o), (e[14] = u), e;
      }
      return (
        (t[0] = e[0]),
        (t[1] = e[4]),
        (t[2] = e[8]),
        (t[3] = e[12]),
        (t[4] = e[1]),
        (t[5] = e[5]),
        (t[6] = e[9]),
        (t[7] = e[13]),
        (t[8] = e[2]),
        (t[9] = e[6]),
        (t[10] = e[10]),
        (t[11] = e[14]),
        (t[12] = e[3]),
        (t[13] = e[7]),
        (t[14] = e[11]),
        (t[15] = e[15]),
        t
      );
    }),
    (t.mat4.multiply = function (e, t, n) {
      n || (n = e);
      var r = e[0],
        i = e[1],
        s = e[2],
        o = e[3],
        u = e[4],
        a = e[5],
        f = e[6],
        l = e[7],
        c = e[8],
        h = e[9],
        p = e[10],
        d = e[11],
        v = e[12],
        m = e[13],
        g = e[14],
        y = e[15],
        b = t[0],
        w = t[1],
        E = t[2],
        S = t[3];
      return (
        (n[0] = b * r + w * u + E * c + S * v),
        (n[1] = b * i + w * a + E * h + S * m),
        (n[2] = b * s + w * f + E * p + S * g),
        (n[3] = b * o + w * l + E * d + S * y),
        (b = t[4]),
        (w = t[5]),
        (E = t[6]),
        (S = t[7]),
        (n[4] = b * r + w * u + E * c + S * v),
        (n[5] = b * i + w * a + E * h + S * m),
        (n[6] = b * s + w * f + E * p + S * g),
        (n[7] = b * o + w * l + E * d + S * y),
        (b = t[8]),
        (w = t[9]),
        (E = t[10]),
        (S = t[11]),
        (n[8] = b * r + w * u + E * c + S * v),
        (n[9] = b * i + w * a + E * h + S * m),
        (n[10] = b * s + w * f + E * p + S * g),
        (n[11] = b * o + w * l + E * d + S * y),
        (b = t[12]),
        (w = t[13]),
        (E = t[14]),
        (S = t[15]),
        (n[12] = b * r + w * u + E * c + S * v),
        (n[13] = b * i + w * a + E * h + S * m),
        (n[14] = b * s + w * f + E * p + S * g),
        (n[15] = b * o + w * l + E * d + S * y),
        n
      );
    }),
    (t.Point = function (e, t) {
      (this.x = e || 0), (this.y = t || 0);
    }),
    (t.Point.prototype.clone = function () {
      return new t.Point(this.x, this.y);
    }),
    (t.Point.prototype.constructor = t.Point),
    (t.Rectangle = function (e, t, n, r) {
      (this.x = e || 0), (this.y = t || 0), (this.width = n || 0), (this.height = r || 0);
    }),
    (t.Rectangle.prototype.clone = function () {
      return new t.Rectangle(this.x, this.y, this.width, this.height);
    }),
    (t.Rectangle.prototype.contains = function (e, t) {
      if (this.width <= 0 || this.height <= 0) return !1;
      var n = this.x;
      if (e >= n && e <= n + this.width) {
        var r = this.y;
        if (t >= r && t <= r + this.height) return !0;
      }
      return !1;
    }),
    (t.Rectangle.prototype.constructor = t.Rectangle),
    (t.Polygon = function (e) {
      if ((e instanceof Array || (e = Array.prototype.slice.call(arguments)), "number" == typeof e[0])) {
        for (var n = [], r = 0, i = e.length; i > r; r += 2) n.push(new t.Point(e[r], e[r + 1]));
        e = n;
      }
      this.points = e;
    }),
    (t.Polygon.prototype.clone = function () {
      for (var e = [], n = 0; n < this.points.length; n++) e.push(this.points[n].clone());
      return new t.Polygon(e);
    }),
    (t.Polygon.prototype.contains = function (e, t) {
      for (var n = !1, r = 0, i = this.points.length - 1; r < this.points.length; i = r++) {
        var s = this.points[r].x,
          o = this.points[r].y,
          u = this.points[i].x,
          a = this.points[i].y,
          f = o > t != a > t && ((u - s) * (t - o)) / (a - o) + s > e;
        f && (n = !n);
      }
      return n;
    }),
    (t.Polygon.prototype.constructor = t.Polygon),
    (t.DisplayObject = function () {
      (this.last = this),
        (this.first = this),
        (this.position = new t.Point()),
        (this.scale = new t.Point(1, 1)),
        (this.pivot = new t.Point(0, 0)),
        (this.rotation = 0),
        (this.alpha = 1),
        (this.visible = !0),
        (this.hitArea = null),
        (this.buttonMode = !1),
        (this.renderable = !1),
        (this.parent = null),
        (this.stage = null),
        (this.worldAlpha = 1),
        (this._interactive = !1),
        (this.defaultCursor = "pointer"),
        (this.worldTransform = t.mat3.create()),
        (this.localTransform = t.mat3.create()),
        (this.color = []),
        (this.dynamic = !0),
        (this._sr = 0),
        (this._cr = 1),
        (this.filterArea = new t.Rectangle(0, 0, 1, 1));
    }),
    (t.DisplayObject.prototype.constructor = t.DisplayObject),
    (t.DisplayObject.prototype.setInteractive = function (e) {
      this.interactive = e;
    }),
    Object.defineProperty(t.DisplayObject.prototype, "interactive", {
      get: function () {
        return this._interactive;
      },
      set: function (e) {
        (this._interactive = e), this.stage && (this.stage.dirty = !0);
      },
    }),
    Object.defineProperty(t.DisplayObject.prototype, "mask", {
      get: function () {
        return this._mask;
      },
      set: function (e) {
        e ? (this._mask ? ((e.start = this._mask.start), (e.end = this._mask.end)) : (this.addFilter(e), (e.renderable = !1))) : (this.removeFilter(this._mask), (this._mask.renderable = !0)), (this._mask = e);
      },
    }),
    Object.defineProperty(t.DisplayObject.prototype, "filters", {
      get: function () {
        return this._filters;
      },
      set: function (e) {
        if (e) {
          this._filters && this.removeFilter(this._filters), this.addFilter(e);
          for (var t = [], n = 0; n < e.length; n++) for (var r = e[n].passes, i = 0; i < r.length; i++) t.push(r[i]);
          e.start.filterPasses = t;
        } else this._filters && this.removeFilter(this._filters);
        this._filters = e;
      },
    }),
    (t.DisplayObject.prototype.addFilter = function (e) {
      var n = new t.FilterBlock(),
        r = new t.FilterBlock();
      (e.start = n), (e.end = r), (n.data = e), (r.data = e), (n.first = n.last = this), (r.first = r.last = this), (n.open = !0), (n.target = this);
      var i,
        s,
        o = n,
        u = n;
      (s = this.first._iPrev),
        s ? ((i = s._iNext), (o._iPrev = s), (s._iNext = o)) : (i = this),
        i && ((i._iPrev = u), (u._iNext = i)),
        (o = r),
        (u = r),
        (i = null),
        (s = null),
        (s = this.last),
        (i = s._iNext),
        i && ((i._iPrev = u), (u._iNext = i)),
        (o._iPrev = s),
        (s._iNext = o);
      for (var a = this, f = this.last; a; ) a.last === f && (a.last = r), (a = a.parent);
      (this.first = n), this.__renderGroup && this.__renderGroup.addFilterBlocks(n, r);
    }),
    (t.DisplayObject.prototype.removeFilter = function (e) {
      var t = e.start,
        n = t._iNext,
        r = t._iPrev;
      n && (n._iPrev = r), r && (r._iNext = n), (this.first = t._iNext);
      var i = e.end;
      (n = i._iNext), (r = i._iPrev), n && (n._iPrev = r), (r._iNext = n);
      for (var s = i._iPrev, o = this; o.last === i && ((o.last = s), (o = o.parent)); );
      this.__renderGroup && this.__renderGroup.removeFilterBlocks(t, i);
    }),
    (t.DisplayObject.prototype.updateTransform = function () {
      this.rotation !== this.rotationCache && ((this.rotationCache = this.rotation), (this._sr = Math.sin(this.rotation)), (this._cr = Math.cos(this.rotation)));
      var e = this.localTransform,
        n = this.parent.worldTransform,
        r = this.worldTransform;
      (e[0] = this._cr * this.scale.x), (e[1] = -this._sr * this.scale.y), (e[3] = this._sr * this.scale.x), (e[4] = this._cr * this.scale.y);
      var i = this.pivot.x,
        s = this.pivot.y,
        o = e[0],
        u = e[1],
        a = this.position.x - e[0] * i - s * e[1],
        f = e[3],
        l = e[4],
        c = this.position.y - e[4] * s - i * e[3],
        h = n[0],
        p = n[1],
        d = n[2],
        v = n[3],
        m = n[4],
        g = n[5];
      (e[2] = a),
        (e[5] = c),
        (r[0] = h * o + p * f),
        (r[1] = h * u + p * l),
        (r[2] = h * a + p * c + d),
        (r[3] = v * o + m * f),
        (r[4] = v * u + m * l),
        (r[5] = v * a + m * c + g),
        (this.worldAlpha = this.alpha * this.parent.worldAlpha),
        (this.vcount = t.visibleCount);
    }),
    (t.visibleCount = 0),
    (t.DisplayObjectContainer = function () {
      t.DisplayObject.call(this), (this.children = []);
    }),
    (t.DisplayObjectContainer.prototype = Object.create(t.DisplayObject.prototype)),
    (t.DisplayObjectContainer.prototype.constructor = t.DisplayObjectContainer),
    (t.DisplayObjectContainer.prototype.addChild = function (e) {
      if ((e.parent && e.parent !== this && e.parent.removeChild(e), (e.parent = this), this.children.push(e), this.stage)) {
        var t = e;
        do t.interactive && (this.stage.dirty = !0), (t.stage = this.stage), (t = t._iNext);
        while (t);
      }
      var n,
        r,
        i = e.first,
        s = e.last;
      (r = this._filters || this._mask ? this.last._iPrev : this.last), (n = r._iNext);
      for (var o = this, u = r; o; ) o.last === u && (o.last = e.last), (o = o.parent);
      n && ((n._iPrev = s), (s._iNext = n)), (i._iPrev = r), (r._iNext = i), this.__renderGroup && (e.__renderGroup && e.__renderGroup.removeDisplayObjectAndChildren(e), this.__renderGroup.addDisplayObjectAndChildren(e));
    }),
    (t.DisplayObjectContainer.prototype.addChildAt = function (e, t) {
      if (!(t >= 0 && t <= this.children.length)) throw new Error(e + " The index " + t + " supplied is out of bounds " + this.children.length);
      if ((void 0 !== e.parent && e.parent.removeChild(e), (e.parent = this), this.stage)) {
        var n = e;
        do n.interactive && (this.stage.dirty = !0), (n.stage = this.stage), (n = n._iNext);
        while (n);
      }
      var r,
        i,
        s = e.first,
        o = e.last;
      if (t === this.children.length) {
        i = this.last;
        for (var u = this, a = this.last; u; ) u.last === a && (u.last = e.last), (u = u.parent);
      } else i = 0 === t ? this : this.children[t - 1].last;
      (r = i._iNext),
        r && ((r._iPrev = o), (o._iNext = r)),
        (s._iPrev = i),
        (i._iNext = s),
        this.children.splice(t, 0, e),
        this.__renderGroup && (e.__renderGroup && e.__renderGroup.removeDisplayObjectAndChildren(e), this.__renderGroup.addDisplayObjectAndChildren(e));
    }),
    (t.DisplayObjectContainer.prototype.swapChildren = function (e, t) {
      if (e !== t) {
        var n = this.children.indexOf(e),
          r = this.children.indexOf(t);
        if (0 > n || 0 > r) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
        this.removeChild(e), this.removeChild(t), r > n ? (this.addChildAt(t, n), this.addChildAt(e, r)) : (this.addChildAt(e, r), this.addChildAt(t, n));
      }
    }),
    (t.DisplayObjectContainer.prototype.getChildAt = function (e) {
      if (e >= 0 && e < this.children.length) return this.children[e];
      throw new Error("Both the supplied DisplayObjects must be a child of the caller " + this);
    }),
    (t.DisplayObjectContainer.prototype.removeChild = function (e) {
      var t = this.children.indexOf(e);
      if (-1 === t) throw new Error(e + " The supplied DisplayObject must be a child of the caller " + this);
      var n = e.first,
        r = e.last,
        i = r._iNext,
        s = n._iPrev;
      if ((i && (i._iPrev = s), (s._iNext = i), this.last === r)) for (var o = n._iPrev, u = this; u.last === r && ((u.last = o), (u = u.parent)); );
      if (((r._iNext = null), (n._iPrev = null), this.stage)) {
        var a = e;
        do a.interactive && (this.stage.dirty = !0), (a.stage = null), (a = a._iNext);
        while (a);
      }
      e.__renderGroup && e.__renderGroup.removeDisplayObjectAndChildren(e), (e.parent = void 0), this.children.splice(t, 1);
    }),
    (t.DisplayObjectContainer.prototype.updateTransform = function () {
      if (this.visible) {
        t.DisplayObject.prototype.updateTransform.call(this);
        for (var e = 0, n = this.children.length; n > e; e++) this.children[e].updateTransform();
      }
    }),
    (t.blendModes = {}),
    (t.blendModes.NORMAL = 0),
    (t.blendModes.SCREEN = 1),
    (t.Sprite = function (e) {
      t.DisplayObjectContainer.call(this),
        (this.anchor = new t.Point()),
        (this.texture = e),
        (this.blendMode = t.blendModes.NORMAL),
        (this._width = 0),
        (this._height = 0),
        e.baseTexture.hasLoaded ? (this.updateFrame = !0) : ((this.onTextureUpdateBind = this.onTextureUpdate.bind(this)), this.texture.addEventListener("update", this.onTextureUpdateBind)),
        (this.renderable = !0);
    }),
    (t.Sprite.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.Sprite.prototype.constructor = t.Sprite),
    Object.defineProperty(t.Sprite.prototype, "width", {
      get: function () {
        return this.scale.x * this.texture.frame.width;
      },
      set: function (e) {
        (this.scale.x = e / this.texture.frame.width), (this._width = e);
      },
    }),
    Object.defineProperty(t.Sprite.prototype, "height", {
      get: function () {
        return this.scale.y * this.texture.frame.height;
      },
      set: function (e) {
        (this.scale.y = e / this.texture.frame.height), (this._height = e);
      },
    }),
    (t.Sprite.prototype.setTexture = function (e) {
      this.texture.baseTexture !== e.baseTexture ? ((this.textureChange = !0), (this.texture = e), this.__renderGroup && this.__renderGroup.updateTexture(this)) : (this.texture = e), (this.updateFrame = !0);
    }),
    (t.Sprite.prototype.onTextureUpdate = function () {
      this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), (this.updateFrame = !0);
    }),
    (t.Sprite.fromFrame = function (e) {
      var n = t.TextureCache[e];
      if (!n) throw new Error('The frameId "' + e + '" does not exist in the texture cache' + this);
      return new t.Sprite(n);
    }),
    (t.Sprite.fromImage = function (e) {
      var n = t.Texture.fromImage(e);
      return new t.Sprite(n);
    }),
    (t.Stage = function (e) {
      t.DisplayObjectContainer.call(this),
        (this.worldTransform = t.mat3.create()),
        (this.interactive = !0),
        (this.interactionManager = new t.InteractionManager(this)),
        (this.dirty = !0),
        (this.__childrenAdded = []),
        (this.__childrenRemoved = []),
        (this.stage = this),
        (this.stage.hitArea = new t.Rectangle(0, 0, 1e5, 1e5)),
        this.setBackgroundColor(e),
        (this.worldVisible = !0);
    }),
    (t.Stage.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.Stage.prototype.constructor = t.Stage),
    (t.Stage.prototype.setInteractionDelegate = function (e) {
      this.interactionManager.setTargetDomElement(e);
    }),
    (t.Stage.prototype.updateTransform = function () {
      (this.worldAlpha = 1), (this.vcount = t.visibleCount);
      for (var e = 0, n = this.children.length; n > e; e++) this.children[e].updateTransform();
      this.dirty && ((this.dirty = !1), (this.interactionManager.dirty = !0)), this.interactive && this.interactionManager.update();
    }),
    (t.Stage.prototype.setBackgroundColor = function (e) {
      (this.backgroundColor = e || 0), (this.backgroundColorSplit = t.hex2rgb(this.backgroundColor));
      var n = this.backgroundColor.toString(16);
      (n = "000000".substr(0, 6 - n.length) + n), (this.backgroundColorString = "#" + n);
    }),
    (t.Stage.prototype.getMousePosition = function () {
      return this.interactionManager.mouse.global;
    }),
    (t.CustomRenderable = function () {
      t.DisplayObject.call(this), (this.renderable = !0);
    }),
    (t.CustomRenderable.prototype = Object.create(t.DisplayObject.prototype)),
    (t.CustomRenderable.prototype.constructor = t.CustomRenderable),
    (t.CustomRenderable.prototype.renderCanvas = function () {}),
    (t.CustomRenderable.prototype.initWebGL = function () {}),
    (t.CustomRenderable.prototype.renderWebGL = function () {}),
    (t.Strip = function (e, n, r) {
      t.DisplayObjectContainer.call(this), (this.texture = e), (this.blendMode = t.blendModes.NORMAL);
      try {
        (this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1])), (this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])), (this.colors = new Float32Array([1, 1, 1, 1])), (this.indices = new Uint16Array([0, 1, 2, 3]));
      } catch (i) {
        (this.uvs = [0, 1, 1, 1, 1, 0, 0, 1]), (this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0]), (this.colors = [1, 1, 1, 1]), (this.indices = [0, 1, 2, 3]);
      }
      (this.width = n),
        (this.height = r),
        e.baseTexture.hasLoaded
          ? ((this.width = this.texture.frame.width), (this.height = this.texture.frame.height), (this.updateFrame = !0))
          : ((this.onTextureUpdateBind = this.onTextureUpdate.bind(this)), this.texture.addEventListener("update", this.onTextureUpdateBind)),
        (this.renderable = !0);
    }),
    (t.Strip.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.Strip.prototype.constructor = t.Strip),
    (t.Strip.prototype.setTexture = function (e) {
      (this.texture = e), (this.width = e.frame.width), (this.height = e.frame.height), (this.updateFrame = !0);
    }),
    (t.Strip.prototype.onTextureUpdate = function () {
      this.updateFrame = !0;
    }),
    (t.Rope = function (e, n) {
      t.Strip.call(this, e), (this.points = n);
      try {
        (this.verticies = new Float32Array(4 * n.length)), (this.uvs = new Float32Array(4 * n.length)), (this.colors = new Float32Array(2 * n.length)), (this.indices = new Uint16Array(2 * n.length));
      } catch (r) {
        (this.verticies = new Array(4 * n.length)), (this.uvs = new Array(4 * n.length)), (this.colors = new Array(2 * n.length)), (this.indices = new Array(2 * n.length));
      }
      this.refresh();
    }),
    (t.Rope.prototype = Object.create(t.Strip.prototype)),
    (t.Rope.prototype.constructor = t.Rope),
    (t.Rope.prototype.refresh = function () {
      var e = this.points;
      if (!(e.length < 1)) {
        var t = this.uvs,
          n = e[0],
          r = this.indices,
          i = this.colors;
        (this.count -= 0.2), (t[0] = 0), (t[1] = 1), (t[2] = 0), (t[3] = 1), (i[0] = 1), (i[1] = 1), (r[0] = 0), (r[1] = 1);
        for (var s, o, u, a = e.length, f = 1; a > f; f++)
          (s = e[f]),
            (o = 4 * f),
            (u = f / (a - 1)),
            f % 2 ? ((t[o] = u), (t[o + 1] = 0), (t[o + 2] = u), (t[o + 3] = 1)) : ((t[o] = u), (t[o + 1] = 0), (t[o + 2] = u), (t[o + 3] = 1)),
            (o = 2 * f),
            (i[o] = 1),
            (i[o + 1] = 1),
            (o = 2 * f),
            (r[o] = o),
            (r[o + 1] = o + 1),
            (n = s);
      }
    }),
    (t.Rope.prototype.updateTransform = function () {
      var e = this.points;
      if (!(e.length < 1)) {
        var n,
          r = e[0],
          i = { x: 0, y: 0 };
        this.count -= 0.2;
        var s = this.verticies;
        (s[0] = r.x + i.x), (s[1] = r.y + i.y), (s[2] = r.x - i.x), (s[3] = r.y - i.y);
        for (var o, u, a, f, l, c = e.length, h = 1; c > h; h++)
          (o = e[h]),
            (u = 4 * h),
            (n = h < e.length - 1 ? e[h + 1] : o),
            (i.y = -(n.x - r.x)),
            (i.x = n.y - r.y),
            (a = 10 * (1 - h / (c - 1))),
            a > 1 && (a = 1),
            (f = Math.sqrt(i.x * i.x + i.y * i.y)),
            (l = this.texture.height / 2),
            (i.x /= f),
            (i.y /= f),
            (i.x *= l),
            (i.y *= l),
            (s[u] = o.x + i.x),
            (s[u + 1] = o.y + i.y),
            (s[u + 2] = o.x - i.x),
            (s[u + 3] = o.y - i.y),
            (r = o);
        t.DisplayObjectContainer.prototype.updateTransform.call(this);
      }
    }),
    (t.Rope.prototype.setTexture = function (e) {
      (this.texture = e), (this.updateFrame = !0);
    }),
    (t.TilingSprite = function (e, n, r) {
      t.DisplayObjectContainer.call(this),
        (this.texture = e),
        (this.width = n),
        (this.height = r),
        (this.tileScale = new t.Point(1, 1)),
        (this.tilePosition = new t.Point(0, 0)),
        (this.renderable = !0),
        (this.blendMode = t.blendModes.NORMAL);
    }),
    (t.TilingSprite.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.TilingSprite.prototype.constructor = t.TilingSprite),
    (t.TilingSprite.prototype.setTexture = function (e) {
      (this.texture = e), (this.updateFrame = !0);
    }),
    (t.TilingSprite.prototype.onTextureUpdate = function () {
      this.updateFrame = !0;
    }),
    (t.AbstractFilter = function (e, t) {
      (this.passes = [this]), (this.dirty = !0), (this.padding = 0), (this.uniforms = t || {}), (this.fragmentSrc = e || []);
    }),
    (t.FilterBlock = function () {
      (this.visible = !0), (this.renderable = !0);
    }),
    (t.Graphics = function () {
      t.DisplayObjectContainer.call(this), (this.renderable = !0), (this.fillAlpha = 1), (this.lineWidth = 0), (this.lineColor = "black"), (this.graphicsData = []), (this.currentPath = { points: [] });
    }),
    (t.Graphics.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.Graphics.prototype.constructor = t.Graphics),
    (t.Graphics.prototype.lineStyle = function (e, n, r) {
      this.currentPath.points.length || this.graphicsData.pop(),
        (this.lineWidth = e || 0),
        (this.lineColor = n || 0),
        (this.lineAlpha = arguments.length < 3 ? 1 : r),
        (this.currentPath = { lineWidth: this.lineWidth, lineColor: this.lineColor, lineAlpha: this.lineAlpha, fillColor: this.fillColor, fillAlpha: this.fillAlpha, fill: this.filling, points: [], type: t.Graphics.POLY }),
        this.graphicsData.push(this.currentPath);
    }),
    (t.Graphics.prototype.moveTo = function (e, n) {
      this.currentPath.points.length || this.graphicsData.pop(),
        (this.currentPath = this.currentPath =
          { lineWidth: this.lineWidth, lineColor: this.lineColor, lineAlpha: this.lineAlpha, fillColor: this.fillColor, fillAlpha: this.fillAlpha, fill: this.filling, points: [], type: t.Graphics.POLY }),
        this.currentPath.points.push(e, n),
        this.graphicsData.push(this.currentPath);
    }),
    (t.Graphics.prototype.lineTo = function (e, t) {
      this.currentPath.points.push(e, t), (this.dirty = !0);
    }),
    (t.Graphics.prototype.beginFill = function (e, t) {
      (this.filling = !0), (this.fillColor = e || 0), (this.fillAlpha = arguments.length < 2 ? 1 : t);
    }),
    (t.Graphics.prototype.endFill = function () {
      (this.filling = !1), (this.fillColor = null), (this.fillAlpha = 1);
    }),
    (t.Graphics.prototype.drawRect = function (e, n, r, i) {
      this.currentPath.points.length || this.graphicsData.pop(),
        (this.currentPath = { lineWidth: this.lineWidth, lineColor: this.lineColor, lineAlpha: this.lineAlpha, fillColor: this.fillColor, fillAlpha: this.fillAlpha, fill: this.filling, points: [e, n, r, i], type: t.Graphics.RECT }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (t.Graphics.prototype.drawCircle = function (e, n, r) {
      this.currentPath.points.length || this.graphicsData.pop(),
        (this.currentPath = { lineWidth: this.lineWidth, lineColor: this.lineColor, lineAlpha: this.lineAlpha, fillColor: this.fillColor, fillAlpha: this.fillAlpha, fill: this.filling, points: [e, n, r, r], type: t.Graphics.CIRC }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (t.Graphics.prototype.drawEllipse = function (e, n, r, i) {
      this.currentPath.points.length || this.graphicsData.pop(),
        (this.currentPath = { lineWidth: this.lineWidth, lineColor: this.lineColor, lineAlpha: this.lineAlpha, fillColor: this.fillColor, fillAlpha: this.fillAlpha, fill: this.filling, points: [e, n, r, i], type: t.Graphics.ELIP }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (t.Graphics.prototype.clear = function () {
      (this.lineWidth = 0), (this.filling = !1), (this.dirty = !0), (this.clearDirty = !0), (this.graphicsData = []), (this.bounds = null);
    }),
    (t.Graphics.prototype.updateFilterBounds = function () {
      if (!this.bounds) {
        for (var e, n, r, i = 1 / 0, s = -1 / 0, o = 1 / 0, u = -1 / 0, a = 0; a < this.graphicsData.length; a++) {
          var f = this.graphicsData[a],
            l = f.type,
            c = f.lineWidth;
          if (((e = f.points), l === t.Graphics.RECT)) {
            (n = e.x - c / 2), (r = e.y - c / 2);
            var h = e.width + c,
              p = e.height + c;
            (i = i > n ? n : i), (s = n + h > s ? n + h : s), (o = o > r ? n : o), (u = r + p > u ? r + p : u);
          } else if (l === t.Graphics.CIRC || l === t.Graphics.ELIP) {
            (n = e.x), (r = e.y);
            var d = e.radius + c / 2;
            (i = i > n - d ? n - d : i), (s = n + d > s ? n + d : s), (o = o > r - d ? r - d : o), (u = r + d > u ? r + d : u);
          } else for (var v = 0; v < e.length; v += 2) (n = e[v]), (r = e[v + 1]), (i = i > n - c ? n - c : i), (s = n + c > s ? n + c : s), (o = o > r - c ? r - c : o), (u = r + c > u ? r + c : u);
        }
        this.bounds = new t.Rectangle(i, o, s - i, u - o);
      }
    }),
    (t.Graphics.POLY = 0),
    (t.Graphics.RECT = 1),
    (t.Graphics.CIRC = 2),
    (t.Graphics.ELIP = 3),
    (t.CanvasGraphics = function () {}),
    (t.CanvasGraphics.renderGraphics = function (e, n) {
      for (var r = e.worldAlpha, i = "", s = 0; s < e.graphicsData.length; s++) {
        var o = e.graphicsData[s],
          u = o.points;
        if (((n.strokeStyle = i = "#" + ("00000" + (0 | o.lineColor).toString(16)).substr(-6)), (n.lineWidth = o.lineWidth), o.type === t.Graphics.POLY)) {
          n.beginPath(), n.moveTo(u[0], u[1]);
          for (var a = 1; a < u.length / 2; a++) n.lineTo(u[2 * a], u[2 * a + 1]);
          u[0] === u[u.length - 2] && u[1] === u[u.length - 1] && n.closePath(),
            o.fill && ((n.globalAlpha = o.fillAlpha * r), (n.fillStyle = i = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6)), n.fill()),
            o.lineWidth && ((n.globalAlpha = o.lineAlpha * r), n.stroke());
        } else if (o.type === t.Graphics.RECT)
          (o.fillColor || 0 === o.fillColor) && ((n.globalAlpha = o.fillAlpha * r), (n.fillStyle = i = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6)), n.fillRect(u[0], u[1], u[2], u[3])),
            o.lineWidth && ((n.globalAlpha = o.lineAlpha * r), n.strokeRect(u[0], u[1], u[2], u[3]));
        else if (o.type === t.Graphics.CIRC)
          n.beginPath(),
            n.arc(u[0], u[1], u[2], 0, 2 * Math.PI),
            n.closePath(),
            o.fill && ((n.globalAlpha = o.fillAlpha * r), (n.fillStyle = i = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6)), n.fill()),
            o.lineWidth && ((n.globalAlpha = o.lineAlpha * r), n.stroke());
        else if (o.type === t.Graphics.ELIP) {
          var f = o.points,
            l = 2 * f[2],
            c = 2 * f[3],
            h = f[0] - l / 2,
            p = f[1] - c / 2;
          n.beginPath();
          var d = 0.5522848,
            v = (l / 2) * d,
            m = (c / 2) * d,
            g = h + l,
            y = p + c,
            b = h + l / 2,
            w = p + c / 2;
          n.moveTo(h, w),
            n.bezierCurveTo(h, w - m, b - v, p, b, p),
            n.bezierCurveTo(b + v, p, g, w - m, g, w),
            n.bezierCurveTo(g, w + m, b + v, y, b, y),
            n.bezierCurveTo(b - v, y, h, w + m, h, w),
            n.closePath(),
            o.fill && ((n.globalAlpha = o.fillAlpha * r), (n.fillStyle = i = "#" + ("00000" + (0 | o.fillColor).toString(16)).substr(-6)), n.fill()),
            o.lineWidth && ((n.globalAlpha = o.lineAlpha * r), n.stroke());
        }
      }
    }),
    (t.CanvasGraphics.renderGraphicsMask = function (e, n) {
      var r = e.graphicsData.length;
      if (0 !== r) {
        r > 1 && ((r = 1), window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
        for (var i = 0; 1 > i; i++) {
          var s = e.graphicsData[i],
            o = s.points;
          if (s.type === t.Graphics.POLY) {
            n.beginPath(), n.moveTo(o[0], o[1]);
            for (var u = 1; u < o.length / 2; u++) n.lineTo(o[2 * u], o[2 * u + 1]);
            o[0] === o[o.length - 2] && o[1] === o[o.length - 1] && n.closePath();
          } else if (s.type === t.Graphics.RECT) n.beginPath(), n.rect(o[0], o[1], o[2], o[3]), n.closePath();
          else if (s.type === t.Graphics.CIRC) n.beginPath(), n.arc(o[0], o[1], o[2], 0, 2 * Math.PI), n.closePath();
          else if (s.type === t.Graphics.ELIP) {
            var a = s.points,
              f = 2 * a[2],
              l = 2 * a[3],
              c = a[0] - f / 2,
              h = a[1] - l / 2;
            n.beginPath();
            var p = 0.5522848,
              d = (f / 2) * p,
              v = (l / 2) * p,
              m = c + f,
              g = h + l,
              y = c + f / 2,
              b = h + l / 2;
            n.moveTo(c, b), n.bezierCurveTo(c, b - v, y - d, h, y, h), n.bezierCurveTo(y + d, h, m, b - v, m, b), n.bezierCurveTo(m, b + v, y + d, g, y, g), n.bezierCurveTo(y - d, g, c, b + v, c, b), n.closePath();
          }
        }
      }
    }),
    (t.CanvasRenderer = function (e, t, n, r) {
      (this.transparent = r),
        (this.width = e || 800),
        (this.height = t || 600),
        (this.view = n || document.createElement("canvas")),
        (this.context = this.view.getContext("2d")),
        (this.smoothProperty = null),
        "imageSmoothingEnabled" in this.context
          ? (this.smoothProperty = "imageSmoothingEnabled")
          : "webkitImageSmoothingEnabled" in this.context
          ? (this.smoothProperty = "webkitImageSmoothingEnabled")
          : "mozImageSmoothingEnabled" in this.context
          ? (this.smoothProperty = "mozImageSmoothingEnabled")
          : "oImageSmoothingEnabled" in this.context && (this.smoothProperty = "oImageSmoothingEnabled"),
        (this.scaleMode = null),
        (this.refresh = !0),
        (this.view.width = this.width),
        (this.view.height = this.height),
        (this.count = 0);
    }),
    (t.CanvasRenderer.prototype.constructor = t.CanvasRenderer),
    (t.CanvasRenderer.prototype.render = function (e) {
      (t.texturesToUpdate = []),
        (t.texturesToDestroy = []),
        t.visibleCount++,
        e.updateTransform(),
        this.view.style.backgroundColor === e.backgroundColorString || this.transparent || (this.view.style.backgroundColor = e.backgroundColorString),
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.clearRect(0, 0, this.width, this.height),
        this.renderDisplayObject(e),
        e.interactive && (e._interactiveEventsAdded || ((e._interactiveEventsAdded = !0), e.interactionManager.setTarget(this))),
        t.Texture.frameUpdates.length > 0 && (t.Texture.frameUpdates = []);
    }),
    (t.CanvasRenderer.prototype.resize = function (e, t) {
      (this.width = e), (this.height = t), (this.view.width = e), (this.view.height = t);
    }),
    (t.CanvasRenderer.prototype.renderDisplayObject = function (e) {
      var n,
        r = this.context;
      r.globalCompositeOperation = "source-over";
      var i = e.last._iNext;
      e = e.first;
      do
        if (((n = e.worldTransform), e.visible))
          if (e.renderable) {
            if (e instanceof t.Sprite) {
              var s = e.texture.frame;
              s &&
                s.width &&
                s.height &&
                e.texture.baseTexture.source &&
                ((r.globalAlpha = e.worldAlpha),
                r.setTransform(n[0], n[3], n[1], n[4], n[2], n[5]),
                this.smoothProperty && this.scaleMode !== e.texture.baseTexture.scaleMode && ((this.scaleMode = e.texture.baseTexture.scaleMode), (r[this.smoothProperty] = this.scaleMode === t.BaseTexture.SCALE_MODE.LINEAR)),
                r.drawImage(e.texture.baseTexture.source, s.x, s.y, s.width, s.height, e.anchor.x * -s.width, e.anchor.y * -s.height, s.width, s.height));
            } else if (e instanceof t.Strip) r.setTransform(n[0], n[3], n[1], n[4], n[2], n[5]), this.renderStrip(e);
            else if (e instanceof t.TilingSprite) r.setTransform(n[0], n[3], n[1], n[4], n[2], n[5]), this.renderTilingSprite(e);
            else if (e instanceof t.CustomRenderable) r.setTransform(n[0], n[3], n[1], n[4], n[2], n[5]), e.renderCanvas(this);
            else if (e instanceof t.Graphics) r.setTransform(n[0], n[3], n[1], n[4], n[2], n[5]), t.CanvasGraphics.renderGraphics(e, r);
            else if (e instanceof t.FilterBlock && e.data instanceof t.Graphics) {
              var o = e.data;
              if (e.open) {
                r.save();
                var u = o.alpha,
                  a = o.worldTransform;
                r.setTransform(a[0], a[3], a[1], a[4], a[2], a[5]), (o.worldAlpha = 0.5), (r.worldAlpha = 0), t.CanvasGraphics.renderGraphicsMask(o, r), r.clip(), (o.worldAlpha = u);
              } else r.restore();
            }
            e = e._iNext;
          } else e = e._iNext;
        else e = e.last._iNext;
      while (e !== i);
    }),
    (t.CanvasRenderer.prototype.renderStripFlat = function (e) {
      var t = this.context,
        n = e.verticies,
        r = n.length / 2;
      this.count++, t.beginPath();
      for (var i = 1; r - 2 > i; i++) {
        var s = 2 * i,
          o = n[s],
          u = n[s + 2],
          a = n[s + 4],
          f = n[s + 1],
          l = n[s + 3],
          c = n[s + 5];
        t.moveTo(o, f), t.lineTo(u, l), t.lineTo(a, c);
      }
      (t.fillStyle = "#FF0000"), t.fill(), t.closePath();
    }),
    (t.CanvasRenderer.prototype.renderTilingSprite = function (e) {
      var t = this.context;
      (t.globalAlpha = e.worldAlpha), e.__tilePattern || (e.__tilePattern = t.createPattern(e.texture.baseTexture.source, "repeat")), t.beginPath();
      var n = e.tilePosition,
        r = e.tileScale;
      t.scale(r.x, r.y), t.translate(n.x, n.y), (t.fillStyle = e.__tilePattern), t.fillRect(-n.x, -n.y, e.width / r.x, e.height / r.y), t.scale(1 / r.x, 1 / r.y), t.translate(-n.x, -n.y), t.closePath();
    }),
    (t.CanvasRenderer.prototype.renderStrip = function (e) {
      var t = this.context,
        n = e.verticies,
        r = e.uvs,
        i = n.length / 2;
      this.count++;
      for (var s = 1; i - 2 > s; s++) {
        var o = 2 * s,
          u = n[o],
          a = n[o + 2],
          f = n[o + 4],
          l = n[o + 1],
          c = n[o + 3],
          h = n[o + 5],
          p = r[o] * e.texture.width,
          d = r[o + 2] * e.texture.width,
          v = r[o + 4] * e.texture.width,
          m = r[o + 1] * e.texture.height,
          g = r[o + 3] * e.texture.height,
          y = r[o + 5] * e.texture.height;
        t.save(), t.beginPath(), t.moveTo(u, l), t.lineTo(a, c), t.lineTo(f, h), t.closePath(), t.clip();
        var b = p * g + m * v + d * y - g * v - m * d - p * y,
          w = u * g + m * f + a * y - g * f - m * a - u * y,
          E = p * a + u * v + d * f - a * v - u * d - p * f,
          S = p * g * f + m * a * v + u * d * y - u * g * v - m * d * f - p * a * y,
          x = l * g + m * h + c * y - g * h - m * c - l * y,
          T = p * c + l * v + d * h - c * v - l * d - p * h,
          N = p * g * h + m * c * v + l * d * y - l * g * v - m * d * h - p * c * y;
        t.transform(w / b, x / b, E / b, T / b, S / b, N / b), t.drawImage(e.texture.baseTexture.source, 0, 0), t.restore();
      }
    }),
    (t.PixiShader = function () {
      (this.program = null),
        (this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;", "}"]),
        (this.textureCount = 0);
    }),
    (t.PixiShader.prototype.init = function () {
      var e = t.compileProgram(this.vertexSrc || t.PixiShader.defaultVertexSrc, this.fragmentSrc),
        n = t.gl;
      n.useProgram(e),
        (this.uSampler = n.getUniformLocation(e, "uSampler")),
        (this.projectionVector = n.getUniformLocation(e, "projectionVector")),
        (this.offsetVector = n.getUniformLocation(e, "offsetVector")),
        (this.dimensions = n.getUniformLocation(e, "dimensions")),
        (this.aVertexPosition = n.getAttribLocation(e, "aVertexPosition")),
        (this.colorAttribute = n.getAttribLocation(e, "aColor")),
        (this.aTextureCoord = n.getAttribLocation(e, "aTextureCoord"));
      for (var r in this.uniforms) this.uniforms[r].uniformLocation = n.getUniformLocation(e, r);
      this.initUniforms(), (this.program = e);
    }),
    (t.PixiShader.prototype.initUniforms = function () {
      this.textureCount = 1;
      var e;
      for (var n in this.uniforms) {
        e = this.uniforms[n];
        var r = e.type;
        "sampler2D" === r
          ? ((e._init = !1), null !== e.value && this.initSampler2D(e))
          : "mat2" === r || "mat3" === r || "mat4" === r
          ? ((e.glMatrix = !0), (e.glValueLength = 1), "mat2" === r ? (e.glFunc = t.gl.uniformMatrix2fv) : "mat3" === r ? (e.glFunc = t.gl.uniformMatrix3fv) : "mat4" === r && (e.glFunc = t.gl.uniformMatrix4fv))
          : ((e.glFunc = t.gl["uniform" + r]), (e.glValueLength = "2f" === r || "2i" === r ? 2 : "3f" === r || "3i" === r ? 3 : "4f" === r || "4i" === r ? 4 : 1));
      }
    }),
    (t.PixiShader.prototype.initSampler2D = function (e) {
      if (e.value && e.value.baseTexture && e.value.baseTexture.hasLoaded) {
        if ((t.gl.activeTexture(t.gl["TEXTURE" + this.textureCount]), t.gl.bindTexture(t.gl.TEXTURE_2D, e.value.baseTexture._glTexture), e.textureData)) {
          var n = e.textureData,
            r = n.magFilter ? n.magFilter : t.gl.LINEAR,
            i = n.minFilter ? n.minFilter : t.gl.LINEAR,
            s = n.wrapS ? n.wrapS : t.gl.CLAMP_TO_EDGE,
            o = n.wrapT ? n.wrapT : t.gl.CLAMP_TO_EDGE,
            u = n.luminance ? t.gl.LUMINANCE : t.gl.RGBA;
          if ((n.repeat && ((s = t.gl.REPEAT), (o = t.gl.REPEAT)), t.gl.pixelStorei(t.gl.UNPACK_FLIP_Y_WEBGL, !1), n.width)) {
            var a = n.width ? n.width : 512,
              f = n.height ? n.height : 2,
              l = n.border ? n.border : 0;
            t.gl.texImage2D(t.gl.TEXTURE_2D, 0, u, a, f, l, u, t.gl.UNSIGNED_BYTE, null);
          } else t.gl.texImage2D(t.gl.TEXTURE_2D, 0, u, t.gl.RGBA, t.gl.UNSIGNED_BYTE, e.value.baseTexture.source);
          t.gl.texParameteri(t.gl.TEXTURE_2D, t.gl.TEXTURE_MAG_FILTER, r),
            t.gl.texParameteri(t.gl.TEXTURE_2D, t.gl.TEXTURE_MIN_FILTER, i),
            t.gl.texParameteri(t.gl.TEXTURE_2D, t.gl.TEXTURE_WRAP_S, s),
            t.gl.texParameteri(t.gl.TEXTURE_2D, t.gl.TEXTURE_WRAP_T, o);
        }
        t.gl.uniform1i(e.uniformLocation, this.textureCount), (e._init = !0), this.textureCount++;
      }
    }),
    (t.PixiShader.prototype.syncUniforms = function () {
      this.textureCount = 1;
      var e;
      for (var n in this.uniforms)
        (e = this.uniforms[n]),
          1 === e.glValueLength
            ? e.glMatrix === !0
              ? e.glFunc.call(t.gl, e.uniformLocation, e.transpose, e.value)
              : e.glFunc.call(t.gl, e.uniformLocation, e.value)
            : 2 === e.glValueLength
            ? e.glFunc.call(t.gl, e.uniformLocation, e.value.x, e.value.y)
            : 3 === e.glValueLength
            ? e.glFunc.call(t.gl, e.uniformLocation, e.value.x, e.value.y, e.value.z)
            : 4 === e.glValueLength
            ? e.glFunc.call(t.gl, e.uniformLocation, e.value.x, e.value.y, e.value.z, e.value.w)
            : "sampler2D" === e.type &&
              (e._init
                ? (t.gl.activeTexture(t.gl["TEXTURE" + this.textureCount]), t.gl.bindTexture(t.gl.TEXTURE_2D, e.value.baseTexture._glTexture), t.gl.uniform1i(e.uniformLocation, this.textureCount), this.textureCount++)
                : this.initSampler2D(e));
    }),
    (t.PixiShader.defaultVertexSrc = [
      "attribute vec2 aVertexPosition;",
      "attribute vec2 aTextureCoord;",
      "attribute float aColor;",
      "uniform vec2 projectionVector;",
      "uniform vec2 offsetVector;",
      "varying vec2 vTextureCoord;",
      "varying float vColor;",
      "const vec2 center = vec2(-1.0, 1.0);",
      "void main(void) {",
      "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);",
      "   vTextureCoord = aTextureCoord;",
      "   vColor = aColor;",
      "}",
    ]),
    (t.PrimitiveShader = function () {
      (this.program = null),
        (this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"]),
        (this.vertexSrc = [
          "attribute vec2 aVertexPosition;",
          "attribute vec4 aColor;",
          "uniform mat3 translationMatrix;",
          "uniform vec2 projectionVector;",
          "uniform vec2 offsetVector;",
          "uniform float alpha;",
          "varying vec4 vColor;",
          "void main(void) {",
          "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);",
          "   v -= offsetVector.xyx;",
          "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);",
          "   vColor = aColor  * alpha;",
          "}",
        ]);
    }),
    (t.PrimitiveShader.prototype.init = function () {
      var e = t.compileProgram(this.vertexSrc, this.fragmentSrc),
        n = t.gl;
      n.useProgram(e),
        (this.projectionVector = n.getUniformLocation(e, "projectionVector")),
        (this.offsetVector = n.getUniformLocation(e, "offsetVector")),
        (this.aVertexPosition = n.getAttribLocation(e, "aVertexPosition")),
        (this.colorAttribute = n.getAttribLocation(e, "aColor")),
        (this.translationMatrix = n.getUniformLocation(e, "translationMatrix")),
        (this.alpha = n.getUniformLocation(e, "alpha")),
        (this.program = e);
    }),
    (t.StripShader = function () {
      (this.program = null),
        (this.fragmentSrc = [
          "precision mediump float;",
          "varying vec2 vTextureCoord;",
          "varying float vColor;",
          "uniform float alpha;",
          "uniform sampler2D uSampler;",
          "void main(void) {",
          "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));",
          "   gl_FragColor = gl_FragColor * alpha;",
          "}",
        ]),
        (this.vertexSrc = [
          "attribute vec2 aVertexPosition;",
          "attribute vec2 aTextureCoord;",
          "attribute float aColor;",
          "uniform mat3 translationMatrix;",
          "uniform vec2 projectionVector;",
          "uniform vec2 offsetVector;",
          "varying vec2 vTextureCoord;",
          "varying float vColor;",
          "void main(void) {",
          "   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);",
          "   v -= offsetVector.xyx;",
          "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);",
          "   vTextureCoord = aTextureCoord;",
          "   vColor = aColor;",
          "}",
        ]);
    }),
    (t.StripShader.prototype.init = function () {
      var e = t.compileProgram(this.vertexSrc, this.fragmentSrc),
        n = t.gl;
      n.useProgram(e),
        (this.uSampler = n.getUniformLocation(e, "uSampler")),
        (this.projectionVector = n.getUniformLocation(e, "projectionVector")),
        (this.offsetVector = n.getUniformLocation(e, "offsetVector")),
        (this.colorAttribute = n.getAttribLocation(e, "aColor")),
        (this.aVertexPosition = n.getAttribLocation(e, "aVertexPosition")),
        (this.aTextureCoord = n.getAttribLocation(e, "aTextureCoord")),
        (this.translationMatrix = n.getUniformLocation(e, "translationMatrix")),
        (this.alpha = n.getUniformLocation(e, "alpha")),
        (this.program = e);
    }),
    (t._batchs = []),
    (t._getBatch = function (e) {
      return 0 === t._batchs.length ? new t.WebGLBatch(e) : t._batchs.pop();
    }),
    (t._returnBatch = function (e) {
      e.clean(), t._batchs.push(e);
    }),
    (t._restoreBatchs = function (e) {
      for (var n = 0; n < t._batchs.length; n++) t._batchs[n].restoreLostContext(e);
    }),
    (t.WebGLBatch = function (e) {
      (this.gl = e),
        (this.size = 0),
        (this.vertexBuffer = e.createBuffer()),
        (this.indexBuffer = e.createBuffer()),
        (this.uvBuffer = e.createBuffer()),
        (this.colorBuffer = e.createBuffer()),
        (this.blendMode = t.blendModes.NORMAL),
        (this.dynamicSize = 1);
    }),
    (t.WebGLBatch.prototype.constructor = t.WebGLBatch),
    (t.WebGLBatch.prototype.clean = function () {
      (this.verticies = []), (this.uvs = []), (this.indices = []), (this.colors = []), (this.dynamicSize = 1), (this.texture = null), (this.last = null), (this.size = 0), (this.head = null), (this.tail = null);
    }),
    (t.WebGLBatch.prototype.restoreLostContext = function (e) {
      (this.gl = e), (this.vertexBuffer = e.createBuffer()), (this.indexBuffer = e.createBuffer()), (this.uvBuffer = e.createBuffer()), (this.colorBuffer = e.createBuffer());
    }),
    (t.WebGLBatch.prototype.init = function (e) {
      (e.batch = this), (this.dirty = !0), (this.blendMode = e.blendMode), (this.texture = e.texture.baseTexture), (this.head = e), (this.tail = e), (this.size = 1), this.growBatch();
    }),
    (t.WebGLBatch.prototype.insertBefore = function (e, t) {
      this.size++, (e.batch = this), (this.dirty = !0);
      var n = t.__prev;
      (t.__prev = e), (e.__next = t), n ? ((e.__prev = n), (n.__next = e)) : (this.head = e);
    }),
    (t.WebGLBatch.prototype.insertAfter = function (e, t) {
      this.size++, (e.batch = this), (this.dirty = !0);
      var n = t.__next;
      (t.__next = e), (e.__prev = t), n ? ((e.__next = n), (n.__prev = e)) : (this.tail = e);
    }),
    (t.WebGLBatch.prototype.remove = function (e) {
      return (
        this.size--,
        0 === this.size
          ? ((e.batch = null), (e.__prev = null), void (e.__next = null))
          : (e.__prev ? (e.__prev.__next = e.__next) : ((this.head = e.__next), (this.head.__prev = null)),
            e.__next ? (e.__next.__prev = e.__prev) : ((this.tail = e.__prev), (this.tail.__next = null)),
            (e.batch = null),
            (e.__next = null),
            (e.__prev = null),
            void (this.dirty = !0))
      );
    }),
    (t.WebGLBatch.prototype.split = function (e) {
      this.dirty = !0;
      var n = new t.WebGLBatch(this.gl);
      n.init(e), (n.texture = this.texture), (n.tail = this.tail), (this.tail = e.__prev), (this.tail.__next = null), (e.__prev = null);
      for (var r = 0; e; ) r++, (e.batch = n), (e = e.__next);
      return (n.size = r), (this.size -= r), n;
    }),
    (t.WebGLBatch.prototype.merge = function (e) {
      (this.dirty = !0), (this.tail.__next = e.head), (e.head.__prev = this.tail), (this.size += e.size), (this.tail = e.tail);
      for (var t = e.head; t; ) (t.batch = this), (t = t.__next);
    }),
    (t.WebGLBatch.prototype.growBatch = function () {
      var e = this.gl;
      (this.dynamicSize = 1 === this.size ? 1 : 1.5 * this.size),
        (this.verticies = new Float32Array(8 * this.dynamicSize)),
        e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.verticies, e.DYNAMIC_DRAW),
        (this.uvs = new Float32Array(8 * this.dynamicSize)),
        e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.uvs, e.DYNAMIC_DRAW),
        (this.dirtyUVS = !0),
        (this.colors = new Float32Array(4 * this.dynamicSize)),
        e.bindBuffer(e.ARRAY_BUFFER, this.colorBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.colors, e.DYNAMIC_DRAW),
        (this.dirtyColors = !0),
        (this.indices = new Uint16Array(6 * this.dynamicSize));
      for (var t = this.indices.length / 6, n = 0; t > n; n++) {
        var r = 6 * n,
          i = 4 * n;
        (this.indices[r + 0] = i + 0), (this.indices[r + 1] = i + 1), (this.indices[r + 2] = i + 2), (this.indices[r + 3] = i + 0), (this.indices[r + 4] = i + 2), (this.indices[r + 5] = i + 3);
      }
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW);
    }),
    (t.WebGLBatch.prototype.refresh = function () {
      this.dynamicSize < this.size && this.growBatch();
      for (var e, t, n = 0, r = this.head; r; ) {
        e = 8 * n;
        var i = r.texture,
          s = i.frame,
          o = i.baseTexture.width,
          u = i.baseTexture.height;
        (this.uvs[e + 0] = s.x / o),
          (this.uvs[e + 1] = s.y / u),
          (this.uvs[e + 2] = (s.x + s.width) / o),
          (this.uvs[e + 3] = s.y / u),
          (this.uvs[e + 4] = (s.x + s.width) / o),
          (this.uvs[e + 5] = (s.y + s.height) / u),
          (this.uvs[e + 6] = s.x / o),
          (this.uvs[e + 7] = (s.y + s.height) / u),
          (r.updateFrame = !1),
          (t = 4 * n),
          (this.colors[t] = this.colors[t + 1] = this.colors[t + 2] = this.colors[t + 3] = r.worldAlpha),
          (r = r.__next),
          n++;
      }
      (this.dirtyUVS = !0), (this.dirtyColors = !0);
    }),
    (t.WebGLBatch.prototype.update = function () {
      for (var e, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g = 0, y = this.head, b = this.verticies, w = this.uvs, E = this.colors; y; ) {
        if (y.vcount === t.visibleCount) {
          if (
            ((n = y.texture.frame.width),
            (r = y.texture.frame.height),
            (i = y.anchor.x),
            (s = y.anchor.y),
            (o = n * (1 - i)),
            (u = n * -i),
            (a = r * (1 - s)),
            (f = r * -s),
            (l = 8 * g),
            (e = y.worldTransform),
            (c = e[0]),
            (h = e[3]),
            (p = e[1]),
            (d = e[4]),
            (v = e[2]),
            (m = e[5]),
            (b[l + 0] = c * u + p * f + v),
            (b[l + 1] = d * f + h * u + m),
            (b[l + 2] = c * o + p * f + v),
            (b[l + 3] = d * f + h * o + m),
            (b[l + 4] = c * o + p * a + v),
            (b[l + 5] = d * a + h * o + m),
            (b[l + 6] = c * u + p * a + v),
            (b[l + 7] = d * a + h * u + m),
            y.updateFrame || y.texture.updateFrame)
          ) {
            this.dirtyUVS = !0;
            var S = y.texture,
              x = S.frame,
              T = S.baseTexture.width,
              N = S.baseTexture.height;
            (w[l + 0] = x.x / T),
              (w[l + 1] = x.y / N),
              (w[l + 2] = (x.x + x.width) / T),
              (w[l + 3] = x.y / N),
              (w[l + 4] = (x.x + x.width) / T),
              (w[l + 5] = (x.y + x.height) / N),
              (w[l + 6] = x.x / T),
              (w[l + 7] = (x.y + x.height) / N),
              (y.updateFrame = !1);
          }
          if (y.cacheAlpha !== y.worldAlpha) {
            y.cacheAlpha = y.worldAlpha;
            var C = 4 * g;
            (E[C] = E[C + 1] = E[C + 2] = E[C + 3] = y.worldAlpha), (this.dirtyColors = !0);
          }
        } else (l = 8 * g), (b[l + 0] = b[l + 1] = b[l + 2] = b[l + 3] = b[l + 4] = b[l + 5] = b[l + 6] = b[l + 7] = 0);
        g++, (y = y.__next);
      }
    }),
    (t.WebGLBatch.prototype.render = function (e, n) {
      if (((e = e || 0), void 0 === n && (n = this.size), this.dirty && (this.refresh(), (this.dirty = !1)), 0 !== this.size)) {
        this.update();
        var r = this.gl,
          i = t.defaultShader;
        r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer),
          r.bufferSubData(r.ARRAY_BUFFER, 0, this.verticies),
          r.vertexAttribPointer(i.aVertexPosition, 2, r.FLOAT, !1, 0, 0),
          r.bindBuffer(r.ARRAY_BUFFER, this.uvBuffer),
          this.dirtyUVS && ((this.dirtyUVS = !1), r.bufferSubData(r.ARRAY_BUFFER, 0, this.uvs)),
          r.vertexAttribPointer(i.aTextureCoord, 2, r.FLOAT, !1, 0, 0),
          r.activeTexture(r.TEXTURE0),
          r.bindTexture(r.TEXTURE_2D, this.texture._glTexture),
          r.bindBuffer(r.ARRAY_BUFFER, this.colorBuffer),
          this.dirtyColors && ((this.dirtyColors = !1), r.bufferSubData(r.ARRAY_BUFFER, 0, this.colors)),
          r.vertexAttribPointer(i.colorAttribute, 1, r.FLOAT, !1, 0, 0),
          r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var s = n - e;
        r.drawElements(r.TRIANGLES, 6 * s, r.UNSIGNED_SHORT, 2 * e * 6);
      }
    }),
    (t.WebGLFilterManager = function (e) {
      (this.transparent = e), (this.filterStack = []), (this.texturePool = []), (this.offsetX = 0), (this.offsetY = 0), this.initShaderBuffers();
    }),
    (t.WebGLFilterManager.prototype.begin = function (e, t) {
      (this.width = 2 * e.x), (this.height = 2 * -e.y), (this.buffer = t);
    }),
    (t.WebGLFilterManager.prototype.pushFilter = function (e) {
      var n = t.gl;
      this.filterStack.push(e);
      var r = e.filterPasses[0];
      (this.offsetX += e.target.filterArea.x), (this.offsetY += e.target.filterArea.y);
      var i = this.texturePool.pop();
      i ? i.resize(this.width, this.height) : (i = new t.FilterTexture(this.width, this.height)), n.bindTexture(n.TEXTURE_2D, i.texture), this.getBounds(e.target);
      var s = e.target.filterArea,
        o = r.padding;
      (s.x -= o),
        (s.y -= o),
        (s.width += 2 * o),
        (s.height += 2 * o),
        s.x < 0 && (s.x = 0),
        s.width > this.width && (s.width = this.width),
        s.y < 0 && (s.y = 0),
        s.height > this.height && (s.height = this.height),
        n.bindFramebuffer(n.FRAMEBUFFER, i.frameBuffer),
        n.viewport(0, 0, s.width, s.height),
        (t.projection.x = s.width / 2),
        (t.projection.y = -s.height / 2),
        (t.offset.x = -s.x),
        (t.offset.y = -s.y),
        n.uniform2f(t.defaultShader.projectionVector, s.width / 2, -s.height / 2),
        n.uniform2f(t.defaultShader.offsetVector, -s.x, -s.y),
        n.colorMask(!0, !0, !0, !0),
        n.clearColor(0, 0, 0, 0),
        n.clear(n.COLOR_BUFFER_BIT),
        (e._glFilterTexture = i);
    }),
    (t.WebGLFilterManager.prototype.popFilter = function () {
      var e = t.gl,
        n = this.filterStack.pop(),
        r = n.target.filterArea,
        i = n._glFilterTexture;
      if (n.filterPasses.length > 1) {
        e.viewport(0, 0, r.width, r.height),
          e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
          (this.vertexArray[0] = 0),
          (this.vertexArray[1] = r.height),
          (this.vertexArray[2] = r.width),
          (this.vertexArray[3] = r.height),
          (this.vertexArray[4] = 0),
          (this.vertexArray[5] = 0),
          (this.vertexArray[6] = r.width),
          (this.vertexArray[7] = 0),
          e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertexArray),
          e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer),
          (this.uvArray[2] = r.width / this.width),
          (this.uvArray[5] = r.height / this.height),
          (this.uvArray[6] = r.width / this.width),
          (this.uvArray[7] = r.height / this.height),
          e.bufferSubData(e.ARRAY_BUFFER, 0, this.uvArray);
        var s = i,
          o = this.texturePool.pop();
        o || (o = new t.FilterTexture(this.width, this.height)), e.bindFramebuffer(e.FRAMEBUFFER, o.frameBuffer), e.clear(e.COLOR_BUFFER_BIT), e.disable(e.BLEND);
        for (var u = 0; u < n.filterPasses.length - 1; u++) {
          var a = n.filterPasses[u];
          e.bindFramebuffer(e.FRAMEBUFFER, o.frameBuffer), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s.texture), this.applyFilterPass(a, r, r.width, r.height);
          var f = s;
          (s = o), (o = f);
        }
        e.enable(e.BLEND), (i = s), this.texturePool.push(o);
      }
      var l = n.filterPasses[n.filterPasses.length - 1];
      (this.offsetX -= r.x), (this.offsetY -= r.y);
      var c = this.width,
        h = this.height,
        p = 0,
        d = 0,
        v = this.buffer;
      if (0 === this.filterStack.length) e.colorMask(!0, !0, !0, this.transparent);
      else {
        var m = this.filterStack[this.filterStack.length - 1];
        (r = m.target.filterArea), (c = r.width), (h = r.height), (p = r.x), (d = r.y), (v = m._glFilterTexture.frameBuffer);
      }
      (t.projection.x = c / 2), (t.projection.y = -h / 2), (t.offset.x = p), (t.offset.y = d), (r = n.target.filterArea);
      var g = r.x - p,
        y = r.y - d;
      e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
        (this.vertexArray[0] = g),
        (this.vertexArray[1] = y + r.height),
        (this.vertexArray[2] = g + r.width),
        (this.vertexArray[3] = y + r.height),
        (this.vertexArray[4] = g),
        (this.vertexArray[5] = y),
        (this.vertexArray[6] = g + r.width),
        (this.vertexArray[7] = y),
        e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertexArray),
        e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer),
        (this.uvArray[2] = r.width / this.width),
        (this.uvArray[5] = r.height / this.height),
        (this.uvArray[6] = r.width / this.width),
        (this.uvArray[7] = r.height / this.height),
        e.bufferSubData(e.ARRAY_BUFFER, 0, this.uvArray),
        e.viewport(0, 0, c, h),
        e.bindFramebuffer(e.FRAMEBUFFER, v),
        e.activeTexture(e.TEXTURE0),
        e.bindTexture(e.TEXTURE_2D, i.texture),
        this.applyFilterPass(l, r, c, h),
        e.useProgram(t.defaultShader.program),
        e.uniform2f(t.defaultShader.projectionVector, c / 2, -h / 2),
        e.uniform2f(t.defaultShader.offsetVector, -p, -d),
        this.texturePool.push(i),
        (n._glFilterTexture = null);
    }),
    (t.WebGLFilterManager.prototype.applyFilterPass = function (e, n, r, i) {
      var s = t.gl,
        o = e.shader;
      o || ((o = new t.PixiShader()), (o.fragmentSrc = e.fragmentSrc), (o.uniforms = e.uniforms), o.init(), (e.shader = o)),
        s.useProgram(o.program),
        s.uniform2f(o.projectionVector, r / 2, -i / 2),
        s.uniform2f(o.offsetVector, 0, 0),
        e.uniforms.dimensions &&
          ((e.uniforms.dimensions.value[0] = this.width), (e.uniforms.dimensions.value[1] = this.height), (e.uniforms.dimensions.value[2] = this.vertexArray[0]), (e.uniforms.dimensions.value[3] = this.vertexArray[5])),
        o.syncUniforms(),
        s.bindBuffer(s.ARRAY_BUFFER, this.vertexBuffer),
        s.vertexAttribPointer(o.aVertexPosition, 2, s.FLOAT, !1, 0, 0),
        s.bindBuffer(s.ARRAY_BUFFER, this.uvBuffer),
        s.vertexAttribPointer(o.aTextureCoord, 2, s.FLOAT, !1, 0, 0),
        s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        s.drawElements(s.TRIANGLES, 6, s.UNSIGNED_SHORT, 0);
    }),
    (t.WebGLFilterManager.prototype.initShaderBuffers = function () {
      var e = t.gl;
      (this.vertexBuffer = e.createBuffer()),
        (this.uvBuffer = e.createBuffer()),
        (this.indexBuffer = e.createBuffer()),
        (this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.vertexArray, e.STATIC_DRAW),
        (this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer),
        e.bufferData(e.ARRAY_BUFFER, this.uvArray, e.STATIC_DRAW),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), e.STATIC_DRAW);
    }),
    (t.WebGLFilterManager.prototype.getBounds = function (e) {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C = e.first,
        k = e.last._iNext,
        L = -1 / 0,
        A = -1 / 0,
        O = 1 / 0,
        M = 1 / 0;
      do {
        if (C.visible)
          if (C instanceof t.Sprite) (r = C.texture.frame.width), (i = C.texture.frame.height), (s = C.anchor.x), (o = C.anchor.y), (u = r * (1 - s)), (a = r * -s), (f = i * (1 - o)), (l = i * -o), (c = !0);
          else if (C instanceof t.Graphics) {
            C.updateFilterBounds();
            var _ = C.bounds;
            (r = _.width), (i = _.height), (u = _.x), (a = _.x + _.width), (f = _.y), (l = _.y + _.height), (c = !0);
          }
        c &&
          ((n = C.worldTransform),
          (h = n[0]),
          (p = n[3]),
          (d = n[1]),
          (v = n[4]),
          (m = n[2]),
          (g = n[5]),
          (y = h * a + d * l + m),
          (S = v * l + p * a + g),
          (b = h * u + d * l + m),
          (x = v * l + p * u + g),
          (w = h * u + d * f + m),
          (T = v * f + p * u + g),
          (E = h * a + d * f + m),
          (N = v * f + p * a + g),
          (O = O > y ? y : O),
          (O = O > b ? b : O),
          (O = O > w ? w : O),
          (O = O > E ? E : O),
          (M = M > S ? S : M),
          (M = M > x ? x : M),
          (M = M > T ? T : M),
          (M = M > N ? N : M),
          (L = y > L ? y : L),
          (L = b > L ? b : L),
          (L = w > L ? w : L),
          (L = E > L ? E : L),
          (A = S > A ? S : A),
          (A = x > A ? x : A),
          (A = T > A ? T : A),
          (A = N > A ? N : A)),
          (c = !1),
          (C = C._iNext);
      } while (C !== k);
      (e.filterArea.x = O), (e.filterArea.y = M), (e.filterArea.width = L - O), (e.filterArea.height = A - M);
    }),
    (t.FilterTexture = function (e, n) {
      var r = t.gl;
      (this.frameBuffer = r.createFramebuffer()),
        (this.texture = r.createTexture()),
        r.bindTexture(r.TEXTURE_2D, this.texture),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
        r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer),
        r.bindFramebuffer(r.FRAMEBUFFER, this.frameBuffer),
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, this.texture, 0),
        this.resize(e, n);
    }),
    (t.FilterTexture.prototype.resize = function (e, n) {
      if (this.width !== e || this.height !== n) {
        (this.width = e), (this.height = n);
        var r = t.gl;
        r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, e, n, 0, r.RGBA, r.UNSIGNED_BYTE, null);
      }
    }),
    (t.WebGLGraphics = function () {}),
    (t.WebGLGraphics.renderGraphics = function (e, n) {
      var r = t.gl;
      e._webGL || (e._webGL = { points: [], indices: [], lastIndex: 0, buffer: r.createBuffer(), indexBuffer: r.createBuffer() }),
        e.dirty && ((e.dirty = !1), e.clearDirty && ((e.clearDirty = !1), (e._webGL.lastIndex = 0), (e._webGL.points = []), (e._webGL.indices = [])), t.WebGLGraphics.updateGraphics(e)),
        t.activatePrimitiveShader();
      var i = t.mat3.clone(e.worldTransform);
      t.mat3.transpose(i),
        r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA),
        r.uniformMatrix3fv(t.primitiveShader.translationMatrix, !1, i),
        r.uniform2f(t.primitiveShader.projectionVector, n.x, -n.y),
        r.uniform2f(t.primitiveShader.offsetVector, -t.offset.x, -t.offset.y),
        r.uniform1f(t.primitiveShader.alpha, e.worldAlpha),
        r.bindBuffer(r.ARRAY_BUFFER, e._webGL.buffer),
        r.vertexAttribPointer(t.primitiveShader.aVertexPosition, 2, r.FLOAT, !1, 24, 0),
        r.vertexAttribPointer(t.primitiveShader.colorAttribute, 4, r.FLOAT, !1, 24, 8),
        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e._webGL.indexBuffer),
        r.drawElements(r.TRIANGLE_STRIP, e._webGL.indices.length, r.UNSIGNED_SHORT, 0),
        t.deactivatePrimitiveShader();
    }),
    (t.WebGLGraphics.updateGraphics = function (e) {
      for (var n = e._webGL.lastIndex; n < e.graphicsData.length; n++) {
        var r = e.graphicsData[n];
        r.type === t.Graphics.POLY
          ? (r.fill && r.points.length > 3 && t.WebGLGraphics.buildPoly(r, e._webGL), r.lineWidth > 0 && t.WebGLGraphics.buildLine(r, e._webGL))
          : r.type === t.Graphics.RECT
          ? t.WebGLGraphics.buildRectangle(r, e._webGL)
          : (r.type === t.Graphics.CIRC || r.type === t.Graphics.ELIP) && t.WebGLGraphics.buildCircle(r, e._webGL);
      }
      e._webGL.lastIndex = e.graphicsData.length;
      var i = t.gl;
      (e._webGL.glPoints = new Float32Array(e._webGL.points)),
        i.bindBuffer(i.ARRAY_BUFFER, e._webGL.buffer),
        i.bufferData(i.ARRAY_BUFFER, e._webGL.glPoints, i.STATIC_DRAW),
        (e._webGL.glIndicies = new Uint16Array(e._webGL.indices)),
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e._webGL.indexBuffer),
        i.bufferData(i.ELEMENT_ARRAY_BUFFER, e._webGL.glIndicies, i.STATIC_DRAW);
    }),
    (t.WebGLGraphics.buildRectangle = function (e, n) {
      var r = e.points,
        i = r[0],
        s = r[1],
        o = r[2],
        u = r[3];
      if (e.fill) {
        var a = t.hex2rgb(e.fillColor),
          f = e.fillAlpha,
          l = a[0] * f,
          c = a[1] * f,
          h = a[2] * f,
          p = n.points,
          d = n.indices,
          v = p.length / 6;
        p.push(i, s), p.push(l, c, h, f), p.push(i + o, s), p.push(l, c, h, f), p.push(i, s + u), p.push(l, c, h, f), p.push(i + o, s + u), p.push(l, c, h, f), d.push(v, v, v + 1, v + 2, v + 3, v + 3);
      }
      e.lineWidth && ((e.points = [i, s, i + o, s, i + o, s + u, i, s + u, i, s]), t.WebGLGraphics.buildLine(e, n));
    }),
    (t.WebGLGraphics.buildCircle = function (e, n) {
      var r = e.points,
        i = r[0],
        s = r[1],
        o = r[2],
        u = r[3],
        a = 40,
        f = (2 * Math.PI) / a,
        l = 0;
      if (e.fill) {
        var c = t.hex2rgb(e.fillColor),
          h = e.fillAlpha,
          p = c[0] * h,
          d = c[1] * h,
          v = c[2] * h,
          m = n.points,
          g = n.indices,
          y = m.length / 6;
        for (g.push(y), l = 0; a + 1 > l; l++) m.push(i, s, p, d, v, h), m.push(i + Math.sin(f * l) * o, s + Math.cos(f * l) * u, p, d, v, h), g.push(y++, y++);
        g.push(y - 1);
      }
      if (e.lineWidth) {
        for (e.points = [], l = 0; a + 1 > l; l++) e.points.push(i + Math.sin(f * l) * o, s + Math.cos(f * l) * u);
        t.WebGLGraphics.buildLine(e, n);
      }
    }),
    (t.WebGLGraphics.buildLine = function (e, n) {
      var r = 0,
        i = e.points;
      if (0 !== i.length) {
        if (e.lineWidth % 2) for (r = 0; r < i.length; r++) i[r] += 0.5;
        var s = new t.Point(i[0], i[1]),
          o = new t.Point(i[i.length - 2], i[i.length - 1]);
        if (s.x === o.x && s.y === o.y) {
          i.pop(), i.pop(), (o = new t.Point(i[i.length - 2], i[i.length - 1]));
          var u = o.x + 0.5 * (s.x - o.x),
            a = o.y + 0.5 * (s.y - o.y);
          i.unshift(u, a), i.push(u, a);
        }
        var f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A,
          O,
          M,
          _ = n.points,
          D = n.indices,
          P = i.length / 2,
          H = i.length,
          B = _.length / 6,
          j = e.lineWidth / 2,
          F = t.hex2rgb(e.lineColor),
          I = e.lineAlpha,
          q = F[0] * I,
          R = F[1] * I,
          U = F[2] * I;
        for (c = i[0], h = i[1], p = i[2], d = i[3], g = -(h - d), y = c - p, M = Math.sqrt(g * g + y * y), g /= M, y /= M, g *= j, y *= j, _.push(c - g, h - y, q, R, U, I), _.push(c + g, h + y, q, R, U, I), r = 1; P - 1 > r; r++)
          (c = i[2 * (r - 1)]),
            (h = i[2 * (r - 1) + 1]),
            (p = i[2 * r]),
            (d = i[2 * r + 1]),
            (v = i[2 * (r + 1)]),
            (m = i[2 * (r + 1) + 1]),
            (g = -(h - d)),
            (y = c - p),
            (M = Math.sqrt(g * g + y * y)),
            (g /= M),
            (y /= M),
            (g *= j),
            (y *= j),
            (b = -(d - m)),
            (w = p - v),
            (M = Math.sqrt(b * b + w * w)),
            (b /= M),
            (w /= M),
            (b *= j),
            (w *= j),
            (x = -y + h - (-y + d)),
            (T = -g + p - (-g + c)),
            (N = (-g + c) * (-y + d) - (-g + p) * (-y + h)),
            (C = -w + m - (-w + d)),
            (k = -b + p - (-b + v)),
            (L = (-b + v) * (-w + d) - (-b + p) * (-w + m)),
            (A = x * k - C * T),
            Math.abs(A) < 0.1
              ? ((A += 10.1), _.push(p - g, d - y, q, R, U, I), _.push(p + g, d + y, q, R, U, I))
              : ((f = (T * L - k * N) / A),
                (l = (C * N - x * L) / A),
                (O = (f - p) * (f - p) + (l - d) + (l - d)),
                O > 19600
                  ? ((E = g - b),
                    (S = y - w),
                    (M = Math.sqrt(E * E + S * S)),
                    (E /= M),
                    (S /= M),
                    (E *= j),
                    (S *= j),
                    _.push(p - E, d - S),
                    _.push(q, R, U, I),
                    _.push(p + E, d + S),
                    _.push(q, R, U, I),
                    _.push(p - E, d - S),
                    _.push(q, R, U, I),
                    H++)
                  : (_.push(f, l), _.push(q, R, U, I), _.push(p - (f - p), d - (l - d)), _.push(q, R, U, I)));
        for (
          c = i[2 * (P - 2)],
            h = i[2 * (P - 2) + 1],
            p = i[2 * (P - 1)],
            d = i[2 * (P - 1) + 1],
            g = -(h - d),
            y = c - p,
            M = Math.sqrt(g * g + y * y),
            g /= M,
            y /= M,
            g *= j,
            y *= j,
            _.push(p - g, d - y),
            _.push(q, R, U, I),
            _.push(p + g, d + y),
            _.push(q, R, U, I),
            D.push(B),
            r = 0;
          H > r;
          r++
        )
          D.push(B++);
        D.push(B - 1);
      }
    }),
    (t.WebGLGraphics.buildPoly = function (e, n) {
      var r = e.points;
      if (!(r.length < 6)) {
        var i = n.points,
          s = n.indices,
          o = r.length / 2,
          u = t.hex2rgb(e.fillColor),
          a = e.fillAlpha,
          f = u[0] * a,
          l = u[1] * a,
          c = u[2] * a,
          h = t.PolyK.Triangulate(r),
          p = i.length / 6,
          d = 0;
        for (d = 0; d < h.length; d += 3) s.push(h[d] + p), s.push(h[d] + p), s.push(h[d + 1] + p), s.push(h[d + 2] + p), s.push(h[d + 2] + p);
        for (d = 0; o > d; d++) i.push(r[2 * d], r[2 * d + 1], f, l, c, a);
      }
    }),
    (t._defaultFrame = new t.Rectangle(0, 0, 1, 1)),
    (t.gl = null),
    (t.WebGLRenderer = function (e, n, r, i, s) {
      (this.transparent = !!i), (this.width = e || 800), (this.height = n || 600), (this.view = r || document.createElement("canvas")), (this.view.width = this.width), (this.view.height = this.height);
      var o = this;
      this.view.addEventListener(
        "webglcontextlost",
        function (e) {
          o.handleContextLost(e);
        },
        !1
      ),
        this.view.addEventListener(
          "webglcontextrestored",
          function (e) {
            o.handleContextRestored(e);
          },
          !1
        ),
        (this.batchs = []);
      var u = { alpha: this.transparent, antialias: !!s, premultipliedAlpha: !1, stencil: !0 };
      try {
        t.gl = this.gl = this.view.getContext("experimental-webgl", u);
      } catch (a) {
        try {
          t.gl = this.gl = this.view.getContext("webgl", u);
        } catch (f) {
          throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this);
        }
      }
      t.initDefaultShaders();
      var l = this.gl;
      l.useProgram(t.defaultShader.program),
        (t.WebGLRenderer.gl = l),
        (this.batch = new t.WebGLBatch(l)),
        l.disable(l.DEPTH_TEST),
        l.disable(l.CULL_FACE),
        l.enable(l.BLEND),
        l.colorMask(!0, !0, !0, this.transparent),
        (t.projection = new t.Point(400, 300)),
        (t.offset = new t.Point(0, 0)),
        this.resize(this.width, this.height),
        (this.contextLost = !1),
        (this.stageRenderGroup = new t.WebGLRenderGroup(this.gl, this.transparent));
    }),
    (t.WebGLRenderer.prototype.constructor = t.WebGLRenderer),
    (t.WebGLRenderer.getBatch = function () {
      return 0 === t._batchs.length ? new t.WebGLBatch(t.WebGLRenderer.gl) : t._batchs.pop();
    }),
    (t.WebGLRenderer.returnBatch = function (e) {
      e.clean(), t._batchs.push(e);
    }),
    (t.WebGLRenderer.prototype.render = function (e) {
      if (!this.contextLost) {
        this.__stage !== e && ((this.__stage = e), this.stageRenderGroup.setRenderable(e)), t.WebGLRenderer.updateTextures(), t.visibleCount++, e.updateTransform();
        var n = this.gl;
        if (
          (n.colorMask(!0, !0, !0, this.transparent),
          n.viewport(0, 0, this.width, this.height),
          n.bindFramebuffer(n.FRAMEBUFFER, null),
          n.clearColor(e.backgroundColorSplit[0], e.backgroundColorSplit[1], e.backgroundColorSplit[2], !this.transparent),
          n.clear(n.COLOR_BUFFER_BIT),
          (this.stageRenderGroup.backgroundColor = e.backgroundColorSplit),
          (t.projection.x = this.width / 2),
          (t.projection.y = -this.height / 2),
          this.stageRenderGroup.render(t.projection),
          e.interactive && (e._interactiveEventsAdded || ((e._interactiveEventsAdded = !0), e.interactionManager.setTarget(this))),
          t.Texture.frameUpdates.length > 0)
        ) {
          for (var r = 0; r < t.Texture.frameUpdates.length; r++) t.Texture.frameUpdates[r].updateFrame = !1;
          t.Texture.frameUpdates = [];
        }
      }
    }),
    (t.WebGLRenderer.updateTextures = function () {
      var e = 0;
      for (e = 0; e < t.texturesToUpdate.length; e++) t.WebGLRenderer.updateTexture(t.texturesToUpdate[e]);
      for (e = 0; e < t.texturesToDestroy.length; e++) t.WebGLRenderer.destroyTexture(t.texturesToDestroy[e]);
      (t.texturesToUpdate = []), (t.texturesToDestroy = []);
    }),
    (t.WebGLRenderer.updateTexture = function (e) {
      var n = t.gl;
      e._glTexture || (e._glTexture = n.createTexture()),
        e.hasLoaded &&
          (n.bindTexture(n.TEXTURE_2D, e._glTexture),
          n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
          n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e.source),
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, e.scaleMode === t.BaseTexture.SCALE_MODE.LINEAR ? n.LINEAR : n.NEAREST),
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, e.scaleMode === t.BaseTexture.SCALE_MODE.LINEAR ? n.LINEAR : n.NEAREST),
          e._powerOf2
            ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.REPEAT))
            : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE)),
          n.bindTexture(n.TEXTURE_2D, null));
    }),
    (t.WebGLRenderer.destroyTexture = function (e) {
      var n = t.gl;
      e._glTexture && ((e._glTexture = n.createTexture()), n.deleteTexture(n.TEXTURE_2D, e._glTexture));
    }),
    (t.WebGLRenderer.prototype.resize = function (e, n) {
      (this.width = e), (this.height = n), (this.view.width = e), (this.view.height = n), this.gl.viewport(0, 0, this.width, this.height), (t.projection.x = this.width / 2), (t.projection.y = -this.height / 2);
    }),
    (t.WebGLRenderer.prototype.handleContextLost = function (e) {
      e.preventDefault(), (this.contextLost = !0);
    }),
    (t.WebGLRenderer.prototype.handleContextRestored = function () {
      (this.gl = this.view.getContext("experimental-webgl", { alpha: !0 })), this.initShaders();
      for (var e in t.TextureCache) {
        var n = t.TextureCache[e].baseTexture;
        (n._glTexture = null), t.WebGLRenderer.updateTexture(n);
      }
      for (var r = 0; r < this.batchs.length; r++) this.batchs[r].restoreLostContext(this.gl), (this.batchs[r].dirty = !0);
      t._restoreBatchs(this.gl), (this.contextLost = !1);
    }),
    (t.WebGLRenderGroup = function (e, n) {
      (this.gl = e), this.root, this.backgroundColor, (this.transparent = void 0 == n ? !0 : n), (this.batchs = []), (this.toRemove = []), (this.filterManager = new t.WebGLFilterManager(this.transparent));
    }),
    (t.WebGLRenderGroup.prototype.constructor = t.WebGLRenderGroup),
    (t.WebGLRenderGroup.prototype.setRenderable = function (e) {
      this.root && this.removeDisplayObjectAndChildren(this.root), (e.worldVisible = e.visible), (this.root = e), this.addDisplayObjectAndChildren(e);
    }),
    (t.WebGLRenderGroup.prototype.render = function (e, n) {
      t.WebGLRenderer.updateTextures();
      var r = this.gl;
      r.uniform2f(t.defaultShader.projectionVector, e.x, e.y), this.filterManager.begin(e, n), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA);
      for (var i, s = 0; s < this.batchs.length; s++) (i = this.batchs[s]), i instanceof t.WebGLBatch ? this.batchs[s].render() : this.renderSpecial(i, e);
    }),
    (t.WebGLRenderGroup.prototype.renderSpecific = function (e, n, r) {
      t.WebGLRenderer.updateTextures();
      var i = this.gl;
      i.uniform2f(t.defaultShader.projectionVector, n.x, n.y), this.filterManager.begin(n, r);
      for (var s, o, u, a, f = e.first; f._iNext && (!f.renderable || !f.__renderGroup); ) f = f._iNext;
      var l = f.batch;
      if (f instanceof t.Sprite) {
        l = f.batch;
        var c = l.head;
        if (c == f) s = 0;
        else for (s = 1; c.__next != f; ) s++, (c = c.__next);
      } else l = f;
      for (var h = e.last; h._iPrev && (!h.renderable || !h.__renderGroup); ) h = h._iNext;
      if (h instanceof t.Sprite) {
        endBatch = h.batch;
        var c = endBatch.head;
        if (c == h) u = 0;
        else for (u = 1; c.__next != h; ) u++, (c = c.__next);
      } else endBatch = h;
      if (l == endBatch) return void (l instanceof t.WebGLBatch ? l.render(s, u + 1) : this.renderSpecial(l, n));
      (o = this.batchs.indexOf(l)), (a = this.batchs.indexOf(endBatch)), l instanceof t.WebGLBatch ? l.render(s) : this.renderSpecial(l, n);
      for (var p = o + 1; a > p; p++) (renderable = this.batchs[p]), renderable instanceof t.WebGLBatch ? this.batchs[p].render() : this.renderSpecial(renderable, n);
      endBatch instanceof t.WebGLBatch ? endBatch.render(0, u + 1) : this.renderSpecial(endBatch, n);
    }),
    (t.WebGLRenderGroup.prototype.renderSpecial = function (e, n) {
      var r = e.vcount === t.visibleCount;
      e instanceof t.TilingSprite
        ? r && this.renderTilingSprite(e, n)
        : e instanceof t.Strip
        ? r && this.renderStrip(e, n)
        : e instanceof t.CustomRenderable
        ? r && e.renderWebGL(this, n)
        : e instanceof t.Graphics
        ? r && e.renderable && t.WebGLGraphics.renderGraphics(e, n)
        : e instanceof t.FilterBlock && this.handleFilterBlock(e, n);
    }),
    (flip = !1);
  var r = [],
    i = 0;
  return (
    (t.WebGLRenderGroup.prototype.handleFilterBlock = function (e, n) {
      var o = t.gl;
      if (e.open)
        e.data instanceof Array
          ? this.filterManager.pushFilter(e)
          : (i++,
            r.push(e),
            o.enable(o.STENCIL_TEST),
            o.colorMask(!1, !1, !1, !1),
            o.stencilFunc(o.ALWAYS, 1, 1),
            o.stencilOp(o.KEEP, o.KEEP, o.INCR),
            t.WebGLGraphics.renderGraphics(e.data, n),
            o.colorMask(!0, !0, !0, !0),
            o.stencilFunc(o.NOTEQUAL, 0, r.length),
            o.stencilOp(o.KEEP, o.KEEP, o.KEEP));
      else if (e.data instanceof Array) this.filterManager.popFilter();
      else {
        var u = r.pop(e);
        u &&
          (o.colorMask(!1, !1, !1, !1),
          o.stencilFunc(o.ALWAYS, 1, 1),
          o.stencilOp(o.KEEP, o.KEEP, o.DECR),
          t.WebGLGraphics.renderGraphics(u.data, n),
          o.colorMask(!0, !0, !0, !0),
          o.stencilFunc(o.NOTEQUAL, 0, r.length),
          o.stencilOp(o.KEEP, o.KEEP, o.KEEP)),
          o.disable(o.STENCIL_TEST);
      }
    }),
    (t.WebGLRenderGroup.prototype.updateTexture = function (e) {
      this.removeObject(e);
      for (var t = e.first; t != this.root && ((t = t._iPrev), !t.renderable || !t.__renderGroup); );
      for (var n = e.last; n._iNext && ((n = n._iNext), !n.renderable || !n.__renderGroup); );
      this.insertObject(e, t, n);
    }),
    (t.WebGLRenderGroup.prototype.addFilterBlocks = function (e, t) {
      (e.__renderGroup = this), (t.__renderGroup = this);
      for (var n = e; n != this.root.first && ((n = n._iPrev), !n.renderable || !n.__renderGroup); );
      this.insertAfter(e, n);
      for (var r = t; r != this.root.first && ((r = r._iPrev), !r.renderable || !r.__renderGroup); );
      this.insertAfter(t, r);
    }),
    (t.WebGLRenderGroup.prototype.removeFilterBlocks = function (e, t) {
      this.removeObject(e), this.removeObject(t);
    }),
    (t.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function (e) {
      e.__renderGroup && e.__renderGroup.removeDisplayObjectAndChildren(e);
      for (var t = e.first; t != this.root.first && ((t = t._iPrev), !t.renderable || !t.__renderGroup); );
      for (var n = e.last; n._iNext && ((n = n._iNext), !n.renderable || !n.__renderGroup); );
      var r = e.first,
        i = e.last._iNext;
      do (r.__renderGroup = this), r.renderable && (this.insertObject(r, t, n), (t = r)), (r = r._iNext);
      while (r != i);
    }),
    (t.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function (e) {
      if (e.__renderGroup == this) {
        {
          e.last;
        }
        do (e.__renderGroup = null), e.renderable && this.removeObject(e), (e = e._iNext);
        while (e);
      }
    }),
    (t.WebGLRenderGroup.prototype.insertObject = function (e, n, r) {
      var i = n,
        s = r;
      if (e instanceof t.Sprite) {
        var o, u;
        if (i instanceof t.Sprite) {
          if (((o = i.batch), o && o.texture == e.texture.baseTexture && o.blendMode == e.blendMode)) return void o.insertAfter(e, i);
        } else o = i;
        if (s)
          if (s instanceof t.Sprite) {
            if ((u = s.batch)) {
              if (u.texture == e.texture.baseTexture && u.blendMode == e.blendMode) return void u.insertBefore(e, s);
              if (u == o) {
                var a = o.split(s),
                  f = t.WebGLRenderer.getBatch(),
                  l = this.batchs.indexOf(o);
                return f.init(e), void this.batchs.splice(l + 1, 0, f, a);
              }
            }
          } else u = s;
        var f = t.WebGLRenderer.getBatch();
        if ((f.init(e), o)) {
          var l = this.batchs.indexOf(o);
          this.batchs.splice(l + 1, 0, f);
        } else this.batchs.push(f);
      } else e instanceof t.TilingSprite ? this.initTilingSprite(e) : e instanceof t.Strip && this.initStrip(e), this.insertAfter(e, i);
    }),
    (t.WebGLRenderGroup.prototype.insertAfter = function (e, n) {
      if (n instanceof t.Sprite) {
        var r = n.batch;
        if (r)
          if (r.tail == n) {
            var i = this.batchs.indexOf(r);
            this.batchs.splice(i + 1, 0, e);
          } else {
            var s = r.split(n.__next),
              i = this.batchs.indexOf(r);
            this.batchs.splice(i + 1, 0, e, s);
          }
        else this.batchs.push(e);
      } else {
        var i = this.batchs.indexOf(n);
        this.batchs.splice(i + 1, 0, e);
      }
    }),
    (t.WebGLRenderGroup.prototype.removeObject = function (e) {
      var n;
      if (e instanceof t.Sprite) {
        var r = e.batch;
        if (!r) return;
        r.remove(e), 0 == r.size && (n = r);
      } else n = e;
      if (n) {
        var i = this.batchs.indexOf(n);
        if (-1 == i) return;
        if (0 == i || i == this.batchs.length - 1) return this.batchs.splice(i, 1), void (n instanceof t.WebGLBatch && t.WebGLRenderer.returnBatch(n));
        if (this.batchs[i - 1] instanceof t.WebGLBatch && this.batchs[i + 1] instanceof t.WebGLBatch && this.batchs[i - 1].texture == this.batchs[i + 1].texture && this.batchs[i - 1].blendMode == this.batchs[i + 1].blendMode)
          return this.batchs[i - 1].merge(this.batchs[i + 1]), n instanceof t.WebGLBatch && t.WebGLRenderer.returnBatch(n), t.WebGLRenderer.returnBatch(this.batchs[i + 1]), void this.batchs.splice(i, 2);
        this.batchs.splice(i, 1), n instanceof t.WebGLBatch && t.WebGLRenderer.returnBatch(n);
      }
    }),
    (t.WebGLRenderGroup.prototype.initTilingSprite = function (e) {
      var t = this.gl;
      (e.verticies = new Float32Array([0, 0, e.width, 0, e.width, e.height, 0, e.height])),
        (e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
        (e.colors = new Float32Array([1, 1, 1, 1])),
        (e.indices = new Uint16Array([0, 1, 3, 2])),
        (e._vertexBuffer = t.createBuffer()),
        (e._indexBuffer = t.createBuffer()),
        (e._uvBuffer = t.createBuffer()),
        (e._colorBuffer = t.createBuffer()),
        t.bindBuffer(t.ARRAY_BUFFER, e._vertexBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.verticies, t.STATIC_DRAW),
        t.bindBuffer(t.ARRAY_BUFFER, e._uvBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.uvs, t.DYNAMIC_DRAW),
        t.bindBuffer(t.ARRAY_BUFFER, e._colorBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.colors, t.STATIC_DRAW),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, e.indices, t.STATIC_DRAW),
        e.texture.baseTexture._glTexture
          ? (t.bindTexture(t.TEXTURE_2D, e.texture.baseTexture._glTexture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), (e.texture.baseTexture._powerOf2 = !0))
          : (e.texture.baseTexture._powerOf2 = !0);
    }),
    (t.WebGLRenderGroup.prototype.renderStrip = function (e, n) {
      var r = this.gl;
      t.activateStripShader();
      var i = t.stripShader,
        s = (i.program, t.mat3.clone(e.worldTransform));
      t.mat3.transpose(s),
        r.uniformMatrix3fv(i.translationMatrix, !1, s),
        r.uniform2f(i.projectionVector, n.x, n.y),
        r.uniform2f(i.offsetVector, -t.offset.x, -t.offset.y),
        r.uniform1f(i.alpha, e.worldAlpha),
        e.dirty
          ? ((e.dirty = !1),
            r.bindBuffer(r.ARRAY_BUFFER, e._vertexBuffer),
            r.bufferData(r.ARRAY_BUFFER, e.verticies, r.STATIC_DRAW),
            r.vertexAttribPointer(i.aVertexPosition, 2, r.FLOAT, !1, 0, 0),
            r.bindBuffer(r.ARRAY_BUFFER, e._uvBuffer),
            r.bufferData(r.ARRAY_BUFFER, e.uvs, r.STATIC_DRAW),
            r.vertexAttribPointer(i.aTextureCoord, 2, r.FLOAT, !1, 0, 0),
            r.activeTexture(r.TEXTURE0),
            r.bindTexture(r.TEXTURE_2D, e.texture.baseTexture._glTexture),
            r.bindBuffer(r.ARRAY_BUFFER, e._colorBuffer),
            r.bufferData(r.ARRAY_BUFFER, e.colors, r.STATIC_DRAW),
            r.vertexAttribPointer(i.colorAttribute, 1, r.FLOAT, !1, 0, 0),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
            r.bufferData(r.ELEMENT_ARRAY_BUFFER, e.indices, r.STATIC_DRAW))
          : (r.bindBuffer(r.ARRAY_BUFFER, e._vertexBuffer),
            r.bufferSubData(r.ARRAY_BUFFER, 0, e.verticies),
            r.vertexAttribPointer(i.aVertexPosition, 2, r.FLOAT, !1, 0, 0),
            r.bindBuffer(r.ARRAY_BUFFER, e._uvBuffer),
            r.vertexAttribPointer(i.aTextureCoord, 2, r.FLOAT, !1, 0, 0),
            r.activeTexture(r.TEXTURE0),
            r.bindTexture(r.TEXTURE_2D, e.texture.baseTexture._glTexture),
            r.bindBuffer(r.ARRAY_BUFFER, e._colorBuffer),
            r.vertexAttribPointer(i.colorAttribute, 1, r.FLOAT, !1, 0, 0),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e._indexBuffer)),
        r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0),
        t.deactivateStripShader();
    }),
    (t.WebGLRenderGroup.prototype.renderTilingSprite = function (e, n) {
      var r = this.gl,
        i = (t.shaderProgram, e.tilePosition),
        s = e.tileScale,
        o = i.x / e.texture.baseTexture.width,
        u = i.y / e.texture.baseTexture.height,
        a = e.width / e.texture.baseTexture.width / s.x,
        f = e.height / e.texture.baseTexture.height / s.y;
      (e.uvs[0] = 0 - o),
        (e.uvs[1] = 0 - u),
        (e.uvs[2] = 1 * a - o),
        (e.uvs[3] = 0 - u),
        (e.uvs[4] = 1 * a - o),
        (e.uvs[5] = 1 * f - u),
        (e.uvs[6] = 0 - o),
        (e.uvs[7] = 1 * f - u),
        r.bindBuffer(r.ARRAY_BUFFER, e._uvBuffer),
        r.bufferSubData(r.ARRAY_BUFFER, 0, e.uvs),
        this.renderStrip(e, n);
    }),
    (t.WebGLRenderGroup.prototype.initStrip = function (e) {
      {
        var t = this.gl;
        this.shaderProgram;
      }
      (e._vertexBuffer = t.createBuffer()),
        (e._indexBuffer = t.createBuffer()),
        (e._uvBuffer = t.createBuffer()),
        (e._colorBuffer = t.createBuffer()),
        t.bindBuffer(t.ARRAY_BUFFER, e._vertexBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.verticies, t.DYNAMIC_DRAW),
        t.bindBuffer(t.ARRAY_BUFFER, e._uvBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.uvs, t.STATIC_DRAW),
        t.bindBuffer(t.ARRAY_BUFFER, e._colorBuffer),
        t.bufferData(t.ARRAY_BUFFER, e.colors, t.STATIC_DRAW),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, e.indices, t.STATIC_DRAW);
    }),
    (t.initDefaultShaders = function () {
      (t.primitiveShader = new t.PrimitiveShader()), t.primitiveShader.init(), (t.stripShader = new t.StripShader()), t.stripShader.init(), (t.defaultShader = new t.PixiShader()), t.defaultShader.init();
      var e = t.gl,
        n = t.defaultShader.program;
      e.useProgram(n), e.enableVertexAttribArray(t.defaultShader.aVertexPosition), e.enableVertexAttribArray(t.defaultShader.colorAttribute), e.enableVertexAttribArray(t.defaultShader.aTextureCoord);
    }),
    (t.activatePrimitiveShader = function () {
      var e = t.gl;
      e.useProgram(t.primitiveShader.program),
        e.disableVertexAttribArray(t.defaultShader.aVertexPosition),
        e.disableVertexAttribArray(t.defaultShader.colorAttribute),
        e.disableVertexAttribArray(t.defaultShader.aTextureCoord),
        e.enableVertexAttribArray(t.primitiveShader.aVertexPosition),
        e.enableVertexAttribArray(t.primitiveShader.colorAttribute);
    }),
    (t.deactivatePrimitiveShader = function () {
      var e = t.gl;
      e.useProgram(t.defaultShader.program),
        e.disableVertexAttribArray(t.primitiveShader.aVertexPosition),
        e.disableVertexAttribArray(t.primitiveShader.colorAttribute),
        e.enableVertexAttribArray(t.defaultShader.aVertexPosition),
        e.enableVertexAttribArray(t.defaultShader.colorAttribute),
        e.enableVertexAttribArray(t.defaultShader.aTextureCoord);
    }),
    (t.activateStripShader = function () {
      var e = t.gl;
      e.useProgram(t.stripShader.program);
    }),
    (t.deactivateStripShader = function () {
      var e = t.gl;
      e.useProgram(t.defaultShader.program);
    }),
    (t.CompileVertexShader = function (e, n) {
      return t._CompileShader(e, n, e.VERTEX_SHADER);
    }),
    (t.CompileFragmentShader = function (e, n) {
      return t._CompileShader(e, n, e.FRAGMENT_SHADER);
    }),
    (t._CompileShader = function (e, t, n) {
      var r = t.join("\n"),
        i = e.createShader(n);
      return e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS) ? i : (window.console.log(e.getShaderInfoLog(i)), null);
    }),
    (t.compileProgram = function (e, n) {
      var r = t.gl,
        i = t.CompileFragmentShader(r, n),
        s = t.CompileVertexShader(r, e),
        o = r.createProgram();
      return r.attachShader(o, s), r.attachShader(o, i), r.linkProgram(o), r.getProgramParameter(o, r.LINK_STATUS) || window.console.log("Could not initialise shaders"), o;
    }),
    (t.BitmapText = function (e, n) {
      t.DisplayObjectContainer.call(this), this.setText(e), this.setStyle(n), this.updateText(), (this.dirty = !1);
    }),
    (t.BitmapText.prototype = Object.create(t.DisplayObjectContainer.prototype)),
    (t.BitmapText.prototype.constructor = t.BitmapText),
    (t.BitmapText.prototype.setText = function (e) {
      (this.text = e || " "), (this.dirty = !0);
    }),
    (t.BitmapText.prototype.setStyle = function (e) {
      (e = e || {}), (e.align = e.align || "left"), (this.style = e);
      var n = e.font.split(" ");
      (this.fontName = n[n.length - 1]), (this.fontSize = n.length >= 2 ? parseInt(n[n.length - 2], 10) : t.BitmapText.fonts[this.fontName].size), (this.dirty = !0);
    }),
    (t.BitmapText.prototype.updateText = function () {
      for (var e = t.BitmapText.fonts[this.fontName], n = new t.Point(), r = null, i = [], s = 0, o = [], u = 0, a = this.fontSize / e.size, f = 0; f < this.text.length; f++) {
        var l = this.text.charCodeAt(f);
        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(f))) o.push(n.x), (s = Math.max(s, n.x)), u++, (n.x = 0), (n.y += e.lineHeight), (r = null);
        else {
          var c = e.chars[l];
          c && (r && c[r] && (n.x += c.kerning[r]), i.push({ texture: c.texture, line: u, charCode: l, position: new t.Point(n.x + c.xOffset, n.y + c.yOffset) }), (n.x += c.xAdvance), (r = l));
        }
      }
      o.push(n.x), (s = Math.max(s, n.x));
      var h = [];
      for (f = 0; u >= f; f++) {
        var p = 0;
        "right" === this.style.align ? (p = s - o[f]) : "center" === this.style.align && (p = (s - o[f]) / 2), h.push(p);
      }
      for (f = 0; f < i.length; f++) {
        var d = new t.Sprite(i[f].texture);
        (d.position.x = (i[f].position.x + h[i[f].line]) * a), (d.position.y = i[f].position.y * a), (d.scale.x = d.scale.y = a), this.addChild(d);
      }
      (this.width = s * a), (this.height = (n.y + e.lineHeight) * a);
    }),
    (t.BitmapText.prototype.updateTransform = function () {
      if (this.dirty) {
        for (; this.children.length > 0; ) this.removeChild(this.getChildAt(0));
        this.updateText(), (this.dirty = !1);
      }
      t.DisplayObjectContainer.prototype.updateTransform.call(this);
    }),
    (t.BitmapText.fonts = {}),
    (t.Text = function (e, n) {
      (this.canvas = document.createElement("canvas")), (this.context = this.canvas.getContext("2d")), t.Sprite.call(this, t.Texture.fromCanvas(this.canvas)), this.setText(e), this.setStyle(n), this.updateText(), (this.dirty = !1);
    }),
    (t.Text.prototype = Object.create(t.Sprite.prototype)),
    (t.Text.prototype.constructor = t.Text),
    (t.Text.prototype.setStyle = function (e) {
      (e = e || {}),
        (e.font = e.font || "bold 20pt Arial"),
        (e.fill = e.fill || "black"),
        (e.align = e.align || "left"),
        (e.stroke = e.stroke || "black"),
        (e.strokeThickness = e.strokeThickness || 0),
        (e.wordWrap = e.wordWrap || !1),
        (e.wordWrapWidth = e.wordWrapWidth || 100),
        (this.style = e),
        (this.dirty = !0);
    }),
    (t.Text.prototype.setText = function (e) {
      (this.text = e.toString() || " "), (this.dirty = !0);
    }),
    (t.Text.prototype.updateText = function () {
      this.context.font = this.style.font;
      var e = this.text;
      this.style.wordWrap && (e = this.wordWrap(this.text));
      for (var n = e.split(/(?:\r\n|\r|\n)/), r = [], i = 0, s = 0; s < n.length; s++) {
        var o = this.context.measureText(n[s]).width;
        (r[s] = o), (i = Math.max(i, o));
      }
      this.canvas.width = i + this.style.strokeThickness;
      var u = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
      for (
        this.canvas.height = u * n.length,
          this.context.fillStyle = this.style.fill,
          this.context.font = this.style.font,
          this.context.strokeStyle = this.style.stroke,
          this.context.lineWidth = this.style.strokeThickness,
          this.context.textBaseline = "top",
          s = 0;
        s < n.length;
        s++
      ) {
        var a = new t.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + s * u);
        "right" === this.style.align ? (a.x += i - r[s]) : "center" === this.style.align && (a.x += (i - r[s]) / 2),
          this.style.stroke && this.style.strokeThickness && this.context.strokeText(n[s], a.x, a.y),
          this.style.fill && this.context.fillText(n[s], a.x, a.y);
      }
      this.updateTexture();
    }),
    (t.Text.prototype.updateTexture = function () {
      (this.texture.baseTexture.width = this.canvas.width),
        (this.texture.baseTexture.height = this.canvas.height),
        (this.texture.frame.width = this.canvas.width),
        (this.texture.frame.height = this.canvas.height),
        (this._width = this.canvas.width),
        (this._height = this.canvas.height),
        t.texturesToUpdate.push(this.texture.baseTexture);
    }),
    (t.Text.prototype.updateTransform = function () {
      this.dirty && (this.updateText(), (this.dirty = !1)), t.Sprite.prototype.updateTransform.call(this);
    }),
    (t.Text.prototype.determineFontHeight = function (e) {
      var n = t.Text.heightCache[e];
      if (!n) {
        var r = document.getElementsByTagName("body")[0],
          i = document.createElement("div"),
          s = document.createTextNode("M");
        i.appendChild(s), i.setAttribute("style", e + ";position:absolute;top:0;left:0"), r.appendChild(i), (n = i.offsetHeight), (t.Text.heightCache[e] = n), r.removeChild(i);
      }
      return n;
    }),
    (t.Text.prototype.wordWrap = function (e) {
      for (var t = "", n = e.split("\n"), r = 0; r < n.length; r++) {
        for (var i = this.style.wordWrapWidth, s = n[r].split(" "), o = 0; o < s.length; o++) {
          var u = this.context.measureText(s[o]).width,
            a = u + this.context.measureText(" ").width;
          a > i ? (o > 0 && (t += "\n"), (t += s[o] + " "), (i = this.style.wordWrapWidth - u)) : ((i -= a), (t += s[o] + " "));
        }
        t += "\n";
      }
      return t;
    }),
    (t.Text.prototype.destroy = function (e) {
      e && this.texture.destroy();
    }),
    (t.Text.heightCache = {}),
    (t.BaseTextureCache = {}),
    (t.texturesToUpdate = []),
    (t.texturesToDestroy = []),
    (t.BaseTexture = function (e, n) {
      if ((t.EventTarget.call(this), (this.width = 100), (this.height = 100), (this.scaleMode = n || t.BaseTexture.SCALE_MODE.DEFAULT), (this.hasLoaded = !1), (this.source = e), e)) {
        if (this.source instanceof Image || this.source instanceof HTMLImageElement)
          if (this.source.complete) (this.hasLoaded = !0), (this.width = this.source.width), (this.height = this.source.height), t.texturesToUpdate.push(this);
          else {
            var r = this;
            this.source.onload = function () {
              (r.hasLoaded = !0), (r.width = r.source.width), (r.height = r.source.height), t.texturesToUpdate.push(r), r.dispatchEvent({ type: "loaded", content: r });
            };
          }
        else (this.hasLoaded = !0), (this.width = this.source.width), (this.height = this.source.height), t.texturesToUpdate.push(this);
        (this.imageUrl = null), (this._powerOf2 = !1);
      }
    }),
    (t.BaseTexture.prototype.constructor = t.BaseTexture),
    (t.BaseTexture.prototype.destroy = function () {
      this.source instanceof Image && (this.imageUrl in t.BaseTextureCache && delete t.BaseTextureCache[this.imageUrl], (this.imageUrl = null), (this.source.src = null)), (this.source = null), t.texturesToDestroy.push(this);
    }),
    (t.BaseTexture.prototype.updateSourceImage = function (e) {
      (this.hasLoaded = !1), (this.source.src = null), (this.source.src = e);
    }),
    (t.BaseTexture.fromImage = function (e, n, r) {
      var i = t.BaseTextureCache[e];
      if (!i) {
        var s = new Image();
        n && (s.crossOrigin = ""), (s.src = e), (i = new t.BaseTexture(s, r)), (i.imageUrl = e), (t.BaseTextureCache[e] = i);
      }
      return i;
    }),
    (t.BaseTexture.SCALE_MODE = { DEFAULT: 0, LINEAR: 0, NEAREST: 1 }),
    (t.TextureCache = {}),
    (t.FrameCache = {}),
    (t.Texture = function (e, n) {
      if (
        (t.EventTarget.call(this),
        n || ((this.noFrame = !0), (n = new t.Rectangle(0, 0, 1, 1))),
        e instanceof t.Texture && (e = e.baseTexture),
        (this.baseTexture = e),
        (this.frame = n),
        (this.trim = new t.Point()),
        (this.scope = this),
        e.hasLoaded)
      )
        this.noFrame && (n = new t.Rectangle(0, 0, e.width, e.height)), this.setFrame(n);
      else {
        var r = this;
        e.addEventListener("loaded", function () {
          r.onBaseTextureLoaded();
        });
      }
    }),
    (t.Texture.prototype.constructor = t.Texture),
    (t.Texture.prototype.onBaseTextureLoaded = function () {
      var e = this.baseTexture;
      e.removeEventListener("loaded", this.onLoaded),
        this.noFrame && (this.frame = new t.Rectangle(0, 0, e.width, e.height)),
        (this.noFrame = !1),
        (this.width = this.frame.width),
        (this.height = this.frame.height),
        this.scope.dispatchEvent({ type: "update", content: this });
    }),
    (t.Texture.prototype.destroy = function (e) {
      e && this.baseTexture.destroy();
    }),
    (t.Texture.prototype.setFrame = function (e) {
      if (((this.frame = e), (this.width = e.width), (this.height = e.height), e.x + e.width > this.baseTexture.width || e.y + e.height > this.baseTexture.height))
        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
      (this.updateFrame = !0), t.Texture.frameUpdates.push(this);
    }),
    (t.Texture.fromImage = function (e, n, r) {
      var i = t.TextureCache[e];
      return i || ((i = new t.Texture(t.BaseTexture.fromImage(e, n, r))), (t.TextureCache[e] = i)), i;
    }),
    (t.Texture.fromFrame = function (e) {
      var n = t.TextureCache[e];
      if (!n) throw new Error('The frameId "' + e + '" does not exist in the texture cache ' + this);
      return n;
    }),
    (t.Texture.fromCanvas = function (e, n) {
      var r = new t.BaseTexture(e, n);
      return new t.Texture(r);
    }),
    (t.Texture.addTextureToCache = function (e, n) {
      t.TextureCache[n] = e;
    }),
    (t.Texture.removeTextureFromCache = function (e) {
      var n = t.TextureCache[e];
      return (t.TextureCache[e] = null), n;
    }),
    (t.Texture.frameUpdates = []),
    (t.Texture.SCALE_MODE = t.BaseTexture.SCALE_MODE),
    (t.RenderTexture = function (e, n) {
      t.EventTarget.call(this), (this.width = e || 100), (this.height = n || 100), (this.indetityMatrix = t.mat3.create()), (this.frame = new t.Rectangle(0, 0, this.width, this.height)), t.gl ? this.initWebGL() : this.initCanvas();
    }),
    (t.RenderTexture.prototype = Object.create(t.Texture.prototype)),
    (t.RenderTexture.prototype.constructor = t.RenderTexture),
    (t.RenderTexture.prototype.initWebGL = function () {
      var e = t.gl;
      (this.glFramebuffer = e.createFramebuffer()),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        (this.glFramebuffer.width = this.width),
        (this.glFramebuffer.height = this.height),
        (this.baseTexture = new t.BaseTexture()),
        (this.baseTexture.width = this.width),
        (this.baseTexture.height = this.height),
        (this.baseTexture._glTexture = e.createTexture()),
        e.bindTexture(e.TEXTURE_2D, this.baseTexture._glTexture),
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, null),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        (this.baseTexture.isRender = !0),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.baseTexture._glTexture, 0),
        (this.projection = new t.Point(this.width / 2, -this.height / 2)),
        (this.render = this.renderWebGL);
    }),
    (t.RenderTexture.prototype.resize = function (e, n) {
      if (((this.width = e), (this.height = n), t.gl)) {
        (this.projection.x = this.width / 2), (this.projection.y = -this.height / 2);
        var r = t.gl;
        r.bindTexture(r.TEXTURE_2D, this.baseTexture._glTexture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, this.width, this.height, 0, r.RGBA, r.UNSIGNED_BYTE, null);
      } else (this.frame.width = this.width), (this.frame.height = this.height), this.renderer.resize(this.width, this.height);
    }),
    (t.RenderTexture.prototype.initCanvas = function () {
      (this.renderer = new t.CanvasRenderer(this.width, this.height, null, 0)), (this.baseTexture = new t.BaseTexture(this.renderer.view)), (this.frame = new t.Rectangle(0, 0, this.width, this.height)), (this.render = this.renderCanvas);
    }),
    (t.RenderTexture.prototype.renderWebGL = function (e, n, r) {
      var i = t.gl;
      i.colorMask(!0, !0, !0, !0), i.viewport(0, 0, this.width, this.height), i.bindFramebuffer(i.FRAMEBUFFER, this.glFramebuffer), r && (i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT));
      var s = e.children,
        o = e.worldTransform;
      (e.worldTransform = t.mat3.create()), (e.worldTransform[4] = -1), (e.worldTransform[5] = -2 * this.projection.y), n && ((e.worldTransform[2] = n.x), (e.worldTransform[5] -= n.y)), t.visibleCount++, (e.vcount = t.visibleCount);
      for (var u = 0, a = s.length; a > u; u++) s[u].updateTransform();
      var f = e.__renderGroup;
      f
        ? e === f.root
          ? f.render(this.projection, this.glFramebuffer)
          : f.renderSpecific(e, this.projection, this.glFramebuffer)
        : (this.renderGroup || (this.renderGroup = new t.WebGLRenderGroup(i)), this.renderGroup.setRenderable(e), this.renderGroup.render(this.projection, this.glFramebuffer)),
        (e.worldTransform = o);
    }),
    (t.RenderTexture.prototype.renderCanvas = function (e, n, r) {
      var i = e.children;
      (e.worldTransform = t.mat3.create()), n && ((e.worldTransform[2] = n.x), (e.worldTransform[5] = n.y));
      for (var s = 0, o = i.length; o > s; s++) i[s].updateTransform();
      r && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(e), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);
    }),
    (t.EventTarget = function () {
      var e = {};
      (this.addEventListener = this.on =
        function (t, n) {
          void 0 === e[t] && (e[t] = []), -1 === e[t].indexOf(n) && e[t].push(n);
        }),
        (this.dispatchEvent = this.emit =
          function (t) {
            if (e[t.type] && e[t.type].length) for (var n = 0, r = e[t.type].length; r > n; n++) e[t.type][n](t);
          }),
        (this.removeEventListener = this.off =
          function (t, n) {
            var r = e[t].indexOf(n);
            -1 !== r && e[t].splice(r, 1);
          }),
        (this.removeAllEventListeners = function (t) {
          var n = e[t];
          n && (n.length = 0);
        });
    }),
    (t.PolyK = {}),
    (t.PolyK.Triangulate = function (e) {
      var n = !0,
        r = e.length >> 1;
      if (3 > r) return [];
      for (var i = [], s = [], o = 0; r > o; o++) s.push(o);
      o = 0;
      for (var u = r; u > 3; ) {
        var a = s[(o + 0) % u],
          f = s[(o + 1) % u],
          l = s[(o + 2) % u],
          c = e[2 * a],
          h = e[2 * a + 1],
          p = e[2 * f],
          d = e[2 * f + 1],
          v = e[2 * l],
          m = e[2 * l + 1],
          g = !1;
        if (t.PolyK._convex(c, h, p, d, v, m, n)) {
          g = !0;
          for (var y = 0; u > y; y++) {
            var b = s[y];
            if (b !== a && b !== f && b !== l && t.PolyK._PointInTriangle(e[2 * b], e[2 * b + 1], c, h, p, d, v, m)) {
              g = !1;
              break;
            }
          }
        }
        if (g) i.push(a, f, l), s.splice((o + 1) % u, 1), u--, (o = 0);
        else if (o++ > 3 * u) {
          if (!n) return window.console.log("PIXI Warning: shape too complex to fill"), [];
          for (i = [], s = [], o = 0; r > o; o++) s.push(o);
          (o = 0), (u = r), (n = !1);
        }
      }
      return i.push(s[0], s[1], s[2]), i;
    }),
    (t.PolyK._PointInTriangle = function (e, t, n, r, i, s, o, u) {
      var a = o - n,
        f = u - r,
        l = i - n,
        c = s - r,
        h = e - n,
        p = t - r,
        d = a * a + f * f,
        v = a * l + f * c,
        m = a * h + f * p,
        g = l * l + c * c,
        y = l * h + c * p,
        b = 1 / (d * g - v * v),
        w = (g * m - v * y) * b,
        E = (d * y - v * m) * b;
      return w >= 0 && E >= 0 && 1 > w + E;
    }),
    (t.PolyK._convex = function (e, t, n, r, i, s, o) {
      return (t - r) * (i - n) + (n - e) * (s - r) >= 0 === o;
    }),
    (n.Camera = function (e, t, r, i, s, o) {
      (this.game = e),
        (this.world = e.world),
        (this.id = 0),
        (this.view = new n.Rectangle(r, i, s, o)),
        (this.screenView = new n.Rectangle(r, i, s, o)),
        (this.bounds = new n.Rectangle(r, i, s, o)),
        (this.deadzone = null),
        (this.visible = !0),
        (this.atLimit = { x: !1, y: !1 }),
        (this.target = null),
        (this._edge = 0),
        (this.displayObject = null);
    }),
    (n.Camera.FOLLOW_LOCKON = 0),
    (n.Camera.FOLLOW_PLATFORMER = 1),
    (n.Camera.FOLLOW_TOPDOWN = 2),
    (n.Camera.FOLLOW_TOPDOWN_TIGHT = 3),
    (n.Camera.prototype = {
      follow: function (e, t) {
        "undefined" == typeof t && (t = n.Camera.FOLLOW_LOCKON), (this.target = e);
        var r;
        switch (t) {
          case n.Camera.FOLLOW_PLATFORMER:
            var i = this.width / 8,
              s = this.height / 3;
            this.deadzone = new n.Rectangle((this.width - i) / 2, (this.height - s) / 2 - 0.25 * s, i, s);
            break;
          case n.Camera.FOLLOW_TOPDOWN:
            (r = Math.max(this.width, this.height) / 4), (this.deadzone = new n.Rectangle((this.width - r) / 2, (this.height - r) / 2, r, r));
            break;
          case n.Camera.FOLLOW_TOPDOWN_TIGHT:
            (r = Math.max(this.width, this.height) / 8), (this.deadzone = new n.Rectangle((this.width - r) / 2, (this.height - r) / 2, r, r));
            break;
          case n.Camera.FOLLOW_LOCKON:
            this.deadzone = null;
            break;
          default:
            this.deadzone = null;
        }
      },
      focusOn: function (e) {
        this.setPosition(Math.round(e.x - this.view.halfWidth), Math.round(e.y - this.view.halfHeight));
      },
      focusOnXY: function (e, t) {
        this.setPosition(Math.round(e - this.view.halfWidth), Math.round(t - this.view.halfHeight));
      },
      update: function () {
        this.target && this.updateTarget(), this.bounds && this.checkBounds(), (this.displayObject.position.x = -this.view.x), (this.displayObject.position.y = -this.view.y);
      },
      updateTarget: function () {
        this.deadzone
          ? ((this._edge = this.target.x - this.deadzone.x),
            this.view.x > this._edge && (this.view.x = this._edge),
            (this._edge = this.target.x + this.target.width - this.deadzone.x - this.deadzone.width),
            this.view.x < this._edge && (this.view.x = this._edge),
            (this._edge = this.target.y - this.deadzone.y),
            this.view.y > this._edge && (this.view.y = this._edge),
            (this._edge = this.target.y + this.target.height - this.deadzone.y - this.deadzone.height),
            this.view.y < this._edge && (this.view.y = this._edge))
          : this.focusOnXY(this.target.x, this.target.y);
      },
      setBoundsToWorld: function () {
        this.bounds.setTo(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height);
      },
      checkBounds: function () {
        (this.atLimit.x = !1),
          (this.atLimit.y = !1),
          this.view.x < this.bounds.x && ((this.atLimit.x = !0), (this.view.x = this.bounds.x)),
          this.view.right > this.bounds.right && ((this.atLimit.x = !0), (this.view.x = this.bounds.right - this.width)),
          this.view.y < this.bounds.top && ((this.atLimit.y = !0), (this.view.y = this.bounds.top)),
          this.view.bottom > this.bounds.bottom && ((this.atLimit.y = !0), (this.view.y = this.bounds.bottom - this.height)),
          this.view.floor();
      },
      setPosition: function (e, t) {
        (this.view.x = e), (this.view.y = t), this.bounds && this.checkBounds();
      },
      setSize: function (e, t) {
        (this.view.width = e), (this.view.height = t);
      },
    }),
    (n.Camera.prototype.constructor = n.Camera),
    Object.defineProperty(n.Camera.prototype, "x", {
      get: function () {
        return this.view.x;
      },
      set: function (e) {
        (this.view.x = e), this.bounds && this.checkBounds();
      },
    }),
    Object.defineProperty(n.Camera.prototype, "y", {
      get: function () {
        return this.view.y;
      },
      set: function (e) {
        (this.view.y = e), this.bounds && this.checkBounds();
      },
    }),
    Object.defineProperty(n.Camera.prototype, "width", {
      get: function () {
        return this.view.width;
      },
      set: function (e) {
        this.view.width = e;
      },
    }),
    Object.defineProperty(n.Camera.prototype, "height", {
      get: function () {
        return this.view.height;
      },
      set: function (e) {
        this.view.height = e;
      },
    }),
    (n.State = function () {
      (this.game = null),
        (this.add = null),
        (this.camera = null),
        (this.cache = null),
        (this.input = null),
        (this.load = null),
        (this.math = null),
        (this.sound = null),
        (this.stage = null),
        (this.time = null),
        (this.tweens = null),
        (this.world = null),
        (this.particles = null),
        (this.physics = null);
    }),
    (n.State.prototype = { preload: function () {}, loadUpdate: function () {}, loadRender: function () {}, create: function () {}, update: function () {}, render: function () {}, paused: function () {}, destroy: function () {} }),
    (n.State.prototype.constructor = n.State),
    (n.StateManager = function (e, t) {
      (this.game = e),
        (this.states = {}),
        (this._pendingState = null),
        "undefined" != typeof t && null !== t && (this._pendingState = t),
        (this._created = !1),
        (this.current = ""),
        (this.onInitCallback = null),
        (this.onPreloadCallback = null),
        (this.onCreateCallback = null),
        (this.onUpdateCallback = null),
        (this.onRenderCallback = null),
        (this.onPreRenderCallback = null),
        (this.onLoadUpdateCallback = null),
        (this.onLoadRenderCallback = null),
        (this.onPausedCallback = null),
        (this.onShutDownCallback = null);
    }),
    (n.StateManager.prototype = {
      boot: function () {
        this.game.onPause.add(this.pause, this),
          this.game.onResume.add(this.resume, this),
          null !== this._pendingState && ("string" == typeof this._pendingState ? this.start(this._pendingState, !1, !1) : this.add("default", this._pendingState, !0));
      },
      add: function (e, t, r) {
        "undefined" == typeof r && (r = !1);
        var i;
        return (
          t instanceof n.State ? (i = t) : "object" == typeof t ? ((i = t), (i.game = this.game)) : "function" == typeof t && (i = new t(this.game)),
          (this.states[e] = i),
          r && (this.game.isBooted ? this.start(e) : (this._pendingState = e)),
          i
        );
      },
      remove: function (e) {
        this.current == e &&
          ((this.callbackContext = null),
          (this.onInitCallback = null),
          (this.onShutDownCallback = null),
          (this.onPreloadCallback = null),
          (this.onLoadRenderCallback = null),
          (this.onLoadUpdateCallback = null),
          (this.onCreateCallback = null),
          (this.onUpdateCallback = null),
          (this.onRenderCallback = null),
          (this.onPausedCallback = null),
          (this.onDestroyCallback = null)),
          delete this.states[e];
      },
      start: function (e, t, n) {
        return (
          "undefined" == typeof t && (t = !0),
          "undefined" == typeof n && (n = !1),
          this.game.isBooted === !1
            ? void (this._pendingState = e)
            : void (
                this.checkState(e) !== !1 &&
                (this.current && this.onShutDownCallback.call(this.callbackContext, this.game),
                t && (this.game.tweens.removeAll(), this.game.world.destroy(), n === !0 && this.game.cache.destroy()),
                this.setCurrentState(e),
                this.onPreloadCallback
                  ? (this.game.load.reset(), this.onPreloadCallback.call(this.callbackContext, this.game), 0 === this.game.load.totalQueuedFiles() ? this.game.loadComplete() : this.game.load.start())
                  : this.game.loadComplete())
              )
        );
      },
      dummy: function () {},
      checkState: function (e) {
        if (this.states[e]) {
          var t = !1;
          return (
            this.states[e].preload && (t = !0),
            t === !1 && this.states[e].loadRender && (t = !0),
            t === !1 && this.states[e].loadUpdate && (t = !0),
            t === !1 && this.states[e].create && (t = !0),
            t === !1 && this.states[e].update && (t = !0),
            t === !1 && this.states[e].preRender && (t = !0),
            t === !1 && this.states[e].render && (t = !0),
            t === !1 && this.states[e].paused && (t = !0),
            t === !1 ? (console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions."), !1) : !0
          );
        }
        return console.warn("Phaser.StateManager - No state found with the key: " + e), !1;
      },
      link: function (e) {
        (this.states[e].game = this.game),
          (this.states[e].add = this.game.add),
          (this.states[e].camera = this.game.camera),
          (this.states[e].cache = this.game.cache),
          (this.states[e].input = this.game.input),
          (this.states[e].load = this.game.load),
          (this.states[e].math = this.game.math),
          (this.states[e].sound = this.game.sound),
          (this.states[e].stage = this.game.stage),
          (this.states[e].time = this.game.time),
          (this.states[e].tweens = this.game.tweens),
          (this.states[e].world = this.game.world),
          (this.states[e].particles = this.game.particles),
          (this.states[e].physics = this.game.physics),
          (this.states[e].rnd = this.game.rnd);
      },
      setCurrentState: function (e) {
        (this.callbackContext = this.states[e]),
          this.link(e),
          (this.onInitCallback = this.states[e].init || this.dummy),
          (this.onPreloadCallback = this.states[e].preload || null),
          (this.onLoadRenderCallback = this.states[e].loadRender || null),
          (this.onLoadUpdateCallback = this.states[e].loadUpdate || null),
          (this.onCreateCallback = this.states[e].create || null),
          (this.onUpdateCallback = this.states[e].update || null),
          (this.onPreRenderCallback = this.states[e].preRender || null),
          (this.onRenderCallback = this.states[e].render || null),
          (this.onPausedCallback = this.states[e].paused || null),
          (this.onShutDownCallback = this.states[e].shutdown || this.dummy),
          (this.current = e),
          (this._created = !1),
          this.onInitCallback.call(this.callbackContext, this.game);
      },
      getCurrentState: function () {
        return this.states[this.current];
      },
      loadComplete: function () {
        this._created === !1 && this.onCreateCallback ? ((this._created = !0), this.onCreateCallback.call(this.callbackContext, this.game)) : (this._created = !0);
      },
      pause: function () {
        this._created && this.onPausedCallback && this.onPausedCallback.call(this.callbackContext, this.game, !0);
      },
      resume: function () {
        this._created && this.onre && this.onPausedCallback.call(this.callbackContext, this.game, !1);
      },
      update: function () {
        this._created && this.onUpdateCallback ? this.onUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game);
      },
      preRender: function () {
        this.onPreRenderCallback && this.onPreRenderCallback.call(this.callbackContext, this.game);
      },
      render: function () {
        this._created && this.onRenderCallback
          ? (this.game.renderType === n.CANVAS && (this.game.context.save(), this.game.context.setTransform(1, 0, 0, 1, 0, 0)),
            this.onRenderCallback.call(this.callbackContext, this.game),
            this.game.renderType === n.CANVAS && this.game.context.restore())
          : this.onLoadRenderCallback && this.onLoadRenderCallback.call(this.callbackContext, this.game);
      },
      destroy: function () {
        (this.callbackContext = null),
          (this.onInitCallback = null),
          (this.onShutDownCallback = null),
          (this.onPreloadCallback = null),
          (this.onLoadRenderCallback = null),
          (this.onLoadUpdateCallback = null),
          (this.onCreateCallback = null),
          (this.onUpdateCallback = null),
          (this.onRenderCallback = null),
          (this.onPausedCallback = null),
          (this.onDestroyCallback = null),
          (this.game = null),
          (this.states = {}),
          (this._pendingState = null);
      },
    }),
    (n.StateManager.prototype.constructor = n.StateManager),
    (n.LinkedList = function () {
      (this.next = null), (this.prev = null), (this.first = null), (this.last = null), (this.total = 0);
    }),
    (n.LinkedList.prototype = {
      add: function (e) {
        return 0 === this.total && null == this.first && null == this.last
          ? ((this.first = e), (this.last = e), (this.next = e), (e.prev = this), this.total++, e)
          : ((this.last.next = e), (e.prev = this.last), (this.last = e), this.total++, e);
      },
      remove: function (e) {
        e == this.first ? (this.first = this.first.next) : e == this.last && (this.last = this.last.prev),
          e.prev && (e.prev.next = e.next),
          e.next && (e.next.prev = e.prev),
          (e.next = e.prev = null),
          null == this.first && (this.last = null),
          this.total--;
      },
      callAll: function (e) {
        if (this.first && this.last) {
          var t = this.first;
          do t && t[e] && t[e].call(t), (t = t.next);
          while (t != this.last.next);
        }
      },
    }),
    (n.LinkedList.prototype.constructor = n.LinkedList),
    (n.Signal = function () {
      (this._bindings = []), (this._prevParams = null);
      var e = this;
      this.dispatch = function () {
        n.Signal.prototype.dispatch.apply(e, arguments);
      };
    }),
    (n.Signal.prototype = {
      memorize: !1,
      _shouldPropagate: !0,
      active: !0,
      validateListener: function (e, t) {
        if ("function" != typeof e) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t));
      },
      _registerListener: function (e, t, r, i) {
        var s,
          o = this._indexOfListener(e, r);
        if (-1 !== o) {
          if (((s = this._bindings[o]), s.isOnce() !== t)) throw new Error("You cannot add" + (t ? "" : "Once") + "() then add" + (t ? "Once" : "") + "() the same listener without removing the relationship first.");
        } else (s = new n.SignalBinding(this, e, t, r, i)), this._addBinding(s);
        return this.memorize && this._prevParams && s.execute(this._prevParams), s;
      },
      _addBinding: function (e) {
        var t = this._bindings.length;
        do --t;
        while (this._bindings[t] && e._priority <= this._bindings[t]._priority);
        this._bindings.splice(t + 1, 0, e);
      },
      _indexOfListener: function (e, t) {
        for (var n, r = this._bindings.length; r--; ) if (((n = this._bindings[r]), n._listener === e && n.context === t)) return r;
        return -1;
      },
      has: function (e, t) {
        return -1 !== this._indexOfListener(e, t);
      },
      add: function (e, t, n) {
        return this.validateListener(e, "add"), this._registerListener(e, !1, t, n);
      },
      addOnce: function (e, t, n) {
        return this.validateListener(e, "addOnce"), this._registerListener(e, !0, t, n);
      },
      remove: function (e, t) {
        this.validateListener(e, "remove");
        var n = this._indexOfListener(e, t);
        return -1 !== n && (this._bindings[n]._destroy(), this._bindings.splice(n, 1)), e;
      },
      removeAll: function () {
        for (var e = this._bindings.length; e--; ) this._bindings[e]._destroy();
        this._bindings.length = 0;
      },
      getNumListeners: function () {
        return this._bindings.length;
      },
      halt: function () {
        this._shouldPropagate = !1;
      },
      dispatch: function () {
        if (this.active) {
          var e,
            t = Array.prototype.slice.call(arguments),
            n = this._bindings.length;
          if ((this.memorize && (this._prevParams = t), n)) {
            (e = this._bindings.slice()), (this._shouldPropagate = !0);
            do n--;
            while (e[n] && this._shouldPropagate && e[n].execute(t) !== !1);
          }
        }
      },
      forget: function () {
        this._prevParams = null;
      },
      dispose: function () {
        this.removeAll(), delete this._bindings, delete this._prevParams;
      },
      toString: function () {
        return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
      },
    }),
    (n.Signal.prototype.constructor = n.Signal),
    (n.SignalBinding = function (e, t, n, r, i) {
      (this._listener = t), (this._isOnce = n), (this.context = r), (this._signal = e), (this._priority = i || 0);
    }),
    (n.SignalBinding.prototype = {
      active: !0,
      params: null,
      execute: function (e) {
        var t, n;
        return this.active && this._listener && ((n = this.params ? this.params.concat(e) : e), (t = this._listener.apply(this.context, n)), this._isOnce && this.detach()), t;
      },
      detach: function () {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
      },
      isBound: function () {
        return !!this._signal && !!this._listener;
      },
      isOnce: function () {
        return this._isOnce;
      },
      getListener: function () {
        return this._listener;
      },
      getSignal: function () {
        return this._signal;
      },
      _destroy: function () {
        delete this._signal, delete this._listener, delete this.context;
      },
      toString: function () {
        return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]";
      },
    }),
    (n.SignalBinding.prototype.constructor = n.SignalBinding),
    (n.Filter = function (e, t, r) {
      (this.game = e),
        (this.type = n.WEBGL_FILTER),
        (this.passes = [this]),
        (this.dirty = !0),
        (this.padding = 0),
        (this.uniforms = { time: { type: "1f", value: 0 }, resolution: { type: "2f", value: { x: 256, y: 256 } }, mouse: { type: "2f", value: { x: 0, y: 0 } } }),
        (this.fragmentSrc = r || []);
    }),
    (n.Filter.prototype = {
      init: function () {},
      setResolution: function (e, t) {
        (this.uniforms.resolution.value.x = e), (this.uniforms.resolution.value.y = t);
      },
      update: function (e) {
        "undefined" != typeof e && (e.x > 0 && (this.uniforms.mouse.x = e.x.toFixed(2)), e.y > 0 && (this.uniforms.mouse.y = e.y.toFixed(2))), (this.uniforms.time.value = this.game.time.totalElapsedSeconds());
      },
      destroy: function () {
        this.game = null;
      },
    }),
    (n.Filter.prototype.constructor = n.Filter),
    Object.defineProperty(n.Filter.prototype, "width", {
      get: function () {
        return this.uniforms.resolution.value.x;
      },
      set: function (e) {
        this.uniforms.resolution.value.x = e;
      },
    }),
    Object.defineProperty(n.Filter.prototype, "height", {
      get: function () {
        return this.uniforms.resolution.value.y;
      },
      set: function (e) {
        this.uniforms.resolution.value.y = e;
      },
    }),
    (n.Plugin = function (e, t) {
      "undefined" == typeof t && (t = null),
        (this.game = e),
        (this.parent = t),
        (this.active = !1),
        (this.visible = !1),
        (this.hasPreUpdate = !1),
        (this.hasUpdate = !1),
        (this.hasPostUpdate = !1),
        (this.hasRender = !1),
        (this.hasPostRender = !1);
    }),
    (n.Plugin.prototype = {
      preUpdate: function () {},
      update: function () {},
      render: function () {},
      postRender: function () {},
      destroy: function () {
        (this.game = null), (this.parent = null), (this.active = !1), (this.visible = !1);
      },
    }),
    (n.Plugin.prototype.constructor = n.Plugin),
    (n.PluginManager = function (e, t) {
      (this.game = e), (this._parent = t), (this.plugins = []), (this._pluginsLength = 0);
    }),
    (n.PluginManager.prototype = {
      add: function (e) {
        var t = !1;
        return (
          "function" == typeof e ? (e = new e(this.game, this._parent)) : ((e.game = this.game), (e.parent = this._parent)),
          "function" == typeof e.preUpdate && ((e.hasPreUpdate = !0), (t = !0)),
          "function" == typeof e.update && ((e.hasUpdate = !0), (t = !0)),
          "function" == typeof e.postUpdate && ((e.hasPostUpdate = !0), (t = !0)),
          "function" == typeof e.render && ((e.hasRender = !0), (t = !0)),
          "function" == typeof e.postRender && ((e.hasPostRender = !0), (t = !0)),
          t ? ((e.hasPreUpdate || e.hasUpdate || e.hasPostUpdate) && (e.active = !0), (e.hasRender || e.hasPostRender) && (e.visible = !0), (this._pluginsLength = this.plugins.push(e)), "function" == typeof e.init && e.init(), e) : null
        );
      },
      remove: function (e) {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) if (this.plugins[this._p] === e) return e.destroy(), this.plugins.splice(this._p, 1), void this._pluginsLength--;
      },
      removeAll: function () {
        for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].destroy();
        (this.plugins.length = 0), (this._pluginsLength = 0);
      },
      preUpdate: function () {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasPreUpdate && this.plugins[this._p].preUpdate();
      },
      update: function () {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasUpdate && this.plugins[this._p].update();
      },
      postUpdate: function () {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].active && this.plugins[this._p].hasPostUpdate && this.plugins[this._p].postUpdate();
      },
      render: function () {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].visible && this.plugins[this._p].hasRender && this.plugins[this._p].render();
      },
      postRender: function () {
        if (0 !== this._pluginsLength) for (this._p = 0; this._p < this._pluginsLength; this._p++) this.plugins[this._p].visible && this.plugins[this._p].hasPostRender && this.plugins[this._p].postRender();
      },
      destroy: function () {
        (this.plugins.length = 0), (this._pluginsLength = 0), (this.game = null), (this._parent = null);
      },
    }),
    (n.PluginManager.prototype.constructor = n.PluginManager),
    (n.Stage = function (e, r, i) {
      (this.game = e),
        (this._backgroundColor = "rgb(0,0,0)"),
        (this.offset = new n.Point()),
        (this.canvas = null),
        (this._stage = new t.Stage(0, !1)),
        (this._stage.name = "_stage_root"),
        (this._stage.interactive = !1),
        (this.display = this._stage),
        (this.scaleMode = n.StageScaleMode.NO_SCALE),
        (this.fullScreenScaleMode = n.StageScaleMode.NO_SCALE),
        (this.scale = new n.StageScaleMode(this.game, r, i)),
        (this.aspectRatio = r / i),
        (this.disableVisibilityChange = !1),
        (this._nextOffsetCheck = 0),
        (this.checkOffsetInterval = 2500),
        e.config ? this.parseConfig(e.config) : ((this.canvas = n.Canvas.create(r, i)), (this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%"));
    }),
    (n.Stage.prototype = {
      parseConfig: function (e) {
        (this.canvas = e.canvasID ? n.Canvas.create(this.game.width, this.game.height, e.canvasID) : n.Canvas.create(this.game.width, this.game.height)),
          e.canvasStyle ? (this.canvas.stlye = e.canvasStyle) : (this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%"),
          e.checkOffsetInterval && (this.checkOffsetInterval = e.checkOffsetInterval),
          e.disableVisibilityChange && (this.disableVisibilityChange = e.disableVisibilityChange),
          e.fullScreenScaleMode && (this.fullScreenScaleMode = e.fullScreenScaleMode),
          e.scaleMode && (this.scaleMode = e.scaleMode),
          e.backgroundColor && (this.backgroundColor = e.backgroundColor);
      },
      boot: function () {
        n.Canvas.getOffset(this.canvas, this.offset), (this.bounds = new n.Rectangle(this.offset.x, this.offset.y, this.game.width, this.game.height));
        var e = this;
        (this._onChange = function (t) {
          return e.visibilityChange(t);
        }),
          n.Canvas.setUserSelect(this.canvas, "none"),
          n.Canvas.setTouchAction(this.canvas, "none"),
          (this.backgroundColor = "#000"),
          document.addEventListener("visibilitychange", this._onChange, !1),
          document.addEventListener("webkitvisibilitychange", this._onChange, !1),
          document.addEventListener("pagehide", this._onChange, !1),
          document.addEventListener("pageshow", this._onChange, !1),
          (window.onblur = this._onChange),
          (window.onfocus = this._onChange);
      },
      update: function () {
        this.checkOffsetInterval !== !1 && this.game.time.now > this._nextOffsetCheck && (n.Canvas.getOffset(this.canvas, this.offset), (this._nextOffsetCheck = this.game.time.now + this.checkOffsetInterval));
      },
      visibilityChange: function (e) {
        this.disableVisibilityChange || (this.game.paused = this.game.paused !== !1 || ("pagehide" != e.type && "blur" != e.type && document.hidden !== !0 && document.webkitHidden !== !0) ? !1 : !0);
      },
    }),
    (n.Stage.prototype.constructor = n.Stage),
    Object.defineProperty(n.Stage.prototype, "backgroundColor", {
      get: function () {
        return this._backgroundColor;
      },
      set: function (e) {
        (this._backgroundColor = e), this.game.transparent === !1 && (this.game.renderType == n.CANVAS ? (this.game.canvas.style.backgroundColor = e) : ("string" == typeof e && (e = n.Color.hexToRGB(e)), this._stage.setBackgroundColor(e)));
      },
    }),
    (n.Group = function (e, r, i, s) {
      (this.game = e),
        "undefined" == typeof r && (r = e.world),
        (this.name = i || "group"),
        "undefined" == typeof s && (s = !1),
        s
          ? (this._container = this.game.stage._stage)
          : ((this._container = new t.DisplayObjectContainer()),
            (this._container.name = this.name),
            r ? (r instanceof n.Group ? r._container.addChild(this._container) : (r.addChild(this._container), r.updateTransform())) : (this.game.stage._stage.addChild(this._container), this.game.stage._stage.updateTransform())),
        (this.type = n.GROUP),
        (this.alive = !0),
        (this.exists = !0),
        (this.group = null),
        (this._container.scale = new n.Point(1, 1)),
        (this.scale = this._container.scale),
        (this.pivot = this._container.pivot),
        (this.cursor = null);
    }),
    (n.Group.RETURN_NONE = 0),
    (n.Group.RETURN_TOTAL = 1),
    (n.Group.RETURN_CHILD = 2),
    (n.Group.SORT_ASCENDING = -1),
    (n.Group.SORT_DESCENDING = 1),
    (n.Group.prototype = {
      add: function (e) {
        return (
          e.group !== this &&
            (e.type && e.type === n.GROUP
              ? ((e.group = this), this._container.addChild(e._container), e._container.updateTransform())
              : ((e.group = this), this._container.addChild(e), e.updateTransform(), e.events && e.events.onAddedToGroup.dispatch(e, this)),
            null === this.cursor && (this.cursor = e)),
          e
        );
      },
      addAt: function (e, t) {
        return (
          e.group !== this &&
            (e.type && e.type === n.GROUP
              ? ((e.group = this), this._container.addChildAt(e._container, t), e._container.updateTransform())
              : ((e.group = this), this._container.addChildAt(e, t), e.updateTransform(), e.events && e.events.onAddedToGroup.dispatch(e, this)),
            null === this.cursor && (this.cursor = e)),
          e
        );
      },
      getAt: function (e) {
        return this._container.getChildAt(e);
      },
      create: function (e, t, r, i, s) {
        "undefined" == typeof s && (s = !0);
        var o = new n.Sprite(this.game, e, t, r, i);
        return (o.group = this), (o.exists = s), (o.visible = s), (o.alive = s), this._container.addChild(o), o.updateTransform(), o.events && o.events.onAddedToGroup.dispatch(o, this), null === this.cursor && (this.cursor = o), o;
      },
      createMultiple: function (e, t, r, i) {
        "undefined" == typeof i && (i = !1);
        for (var s = 0; e > s; s++) {
          var o = new n.Sprite(this.game, 0, 0, t, r);
          (o.group = this), (o.exists = i), (o.visible = i), (o.alive = i), this._container.addChild(o), o.updateTransform(), o.events && o.events.onAddedToGroup.dispatch(o, this), null === this.cursor && (this.cursor = o);
        }
      },
      next: function () {
        this.cursor && (this.cursor = this.cursor == this._container.last ? this._container._iNext : this.cursor._iNext);
      },
      previous: function () {
        this.cursor && (this.cursor = this.cursor == this._container._iNext ? this._container.last : this.cursor._iPrev);
      },
      childTest: function (e, t) {
        var n = e + " next: ";
        (n += t._iNext ? t._iNext.name : "-null-"), (n = n + " " + e + " prev: "), (n += t._iPrev ? t._iPrev.name : "-null-"), console.log(n);
      },
      swapIndex: function (e, t) {
        var n = this.getAt(e),
          r = this.getAt(t);
        this.swap(n, r);
      },
      swap: function (e, t) {
        if (e === t || !e.parent || !t.parent || e.group !== this || t.group !== this) return !1;
        var n = e._iPrev,
          r = e._iNext,
          i = t._iPrev,
          s = t._iNext,
          o = this._container.last._iNext,
          u = this.game.stage._stage;
        do u !== e && u !== t && (u.first === e ? (u.first = t) : u.first === t && (u.first = e), u.last === e ? (u.last = t) : u.last === t && (u.last = e)), (u = u._iNext);
        while (u != o);
        return e._iNext == t
          ? ((e._iNext = s), (e._iPrev = t), (t._iNext = e), (t._iPrev = n), n && (n._iNext = t), s && (s._iPrev = e), e.__renderGroup && e.__renderGroup.updateTexture(e), t.__renderGroup && t.__renderGroup.updateTexture(t), !0)
          : t._iNext == e
          ? ((e._iNext = t), (e._iPrev = i), (t._iNext = r), (t._iPrev = e), i && (i._iNext = e), r && (r._iPrev = t), e.__renderGroup && e.__renderGroup.updateTexture(e), t.__renderGroup && t.__renderGroup.updateTexture(t), !0)
          : ((e._iNext = s),
            (e._iPrev = i),
            (t._iNext = r),
            (t._iPrev = n),
            n && (n._iNext = t),
            r && (r._iPrev = t),
            i && (i._iNext = e),
            s && (s._iPrev = e),
            e.__renderGroup && e.__renderGroup.updateTexture(e),
            t.__renderGroup && t.__renderGroup.updateTexture(t),
            !0);
      },
      bringToTop: function (e) {
        return e.group === this && (this.remove(e), this.add(e)), e;
      },
      getIndex: function (e) {
        return this._container.children.indexOf(e);
      },
      replace: function (e, t) {
        if (this._container.first._iNext) {
          var n = this.getIndex(e);
          -1 != n &&
            (void 0 !== t.parent && (t.events.onRemovedFromGroup.dispatch(t, this), t.parent.removeChild(t)),
            this._container.removeChild(e),
            this._container.addChildAt(t, n),
            t.events.onAddedToGroup.dispatch(t, this),
            t.updateTransform(),
            this.cursor == e && (this.cursor = this._container._iNext));
        }
      },
      setProperty: function (e, t, n, r) {
        r = r || 0;
        var i = t.length;
        1 == i
          ? 0 === r
            ? (e[t[0]] = n)
            : 1 == r
            ? (e[t[0]] += n)
            : 2 == r
            ? (e[t[0]] -= n)
            : 3 == r
            ? (e[t[0]] *= n)
            : 4 == r && (e[t[0]] /= n)
          : 2 == i
          ? 0 === r
            ? (e[t[0]][t[1]] = n)
            : 1 == r
            ? (e[t[0]][t[1]] += n)
            : 2 == r
            ? (e[t[0]][t[1]] -= n)
            : 3 == r
            ? (e[t[0]][t[1]] *= n)
            : 4 == r && (e[t[0]][t[1]] /= n)
          : 3 == i
          ? 0 === r
            ? (e[t[0]][t[1]][t[2]] = n)
            : 1 == r
            ? (e[t[0]][t[1]][t[2]] += n)
            : 2 == r
            ? (e[t[0]][t[1]][t[2]] -= n)
            : 3 == r
            ? (e[t[0]][t[1]][t[2]] *= n)
            : 4 == r && (e[t[0]][t[1]][t[2]] /= n)
          : 4 == i &&
            (0 === r ? (e[t[0]][t[1]][t[2]][t[3]] = n) : 1 == r ? (e[t[0]][t[1]][t[2]][t[3]] += n) : 2 == r ? (e[t[0]][t[1]][t[2]][t[3]] -= n) : 3 == r ? (e[t[0]][t[1]][t[2]][t[3]] *= n) : 4 == r && (e[t[0]][t[1]][t[2]][t[3]] /= n));
      },
      set: function (e, t, n, r, i, s) {
        (t = t.split(".")), "undefined" == typeof r && (r = !1), "undefined" == typeof i && (i = !1), (r === !1 || (r && e.alive)) && (i === !1 || (i && e.visible)) && this.setProperty(e, t, n, s);
      },
      setAll: function (e, t, n, r, i) {
        if (((e = e.split(".")), "undefined" == typeof n && (n = !1), "undefined" == typeof r && (r = !1), (i = i || 0), this._container.children.length > 0 && this._container.first._iNext)) {
          var s = this._container.first._iNext;
          do (n === !1 || (n && s.alive)) && (r === !1 || (r && s.visible)) && this.setProperty(s, e, t, i), (s = s._iNext);
          while (s != this._container.last._iNext);
        }
      },
      addAll: function (e, t, n, r) {
        this.setAll(e, t, n, r, 1);
      },
      subAll: function (e, t, n, r) {
        this.setAll(e, t, n, r, 2);
      },
      multiplyAll: function (e, t, n, r) {
        this.setAll(e, t, n, r, 3);
      },
      divideAll: function (e, t, n, r) {
        this.setAll(e, t, n, r, 4);
      },
      callAllExists: function (e, t) {
        var n = Array.prototype.splice.call(arguments, 2);
        if (this._container.children.length > 0 && this._container.first._iNext) {
          var r = this._container.first._iNext;
          do r.exists == t && r[e] && r[e].apply(r, n), (r = r._iNext);
          while (r != this._container.last._iNext);
        }
      },
      callbackFromArray: function (e, t, n) {
        if (1 == n) {
          if (e[t[0]]) return e[t[0]];
        } else if (2 == n) {
          if (e[t[0]][t[1]]) return e[t[0]][t[1]];
        } else if (3 == n) {
          if (e[t[0]][t[1]][t[2]]) return e[t[0]][t[1]][t[2]];
        } else if (4 == n) {
          if (e[t[0]][t[1]][t[2]][t[3]]) return e[t[0]][t[1]][t[2]][t[3]];
        } else if (e[t]) return e[t];
        return !1;
      },
      callAll: function (e, t) {
        if ("undefined" != typeof e) {
          e = e.split(".");
          var n = e.length;
          if ("undefined" == typeof t) t = null;
          else if ("string" == typeof t) {
            t = t.split(".");
            var r = t.length;
          }
          var i = Array.prototype.splice.call(arguments, 2),
            s = null,
            o = null;
          if (this._container.children.length > 0 && this._container.first._iNext) {
            var u = this._container.first._iNext;
            do (s = this.callbackFromArray(u, e, n)), t && s ? ((o = this.callbackFromArray(u, t, r)), s && s.apply(o, i)) : s && s.apply(u, i), (u = u._iNext);
            while (u != this._container.last._iNext);
          }
        }
      },
      forEach: function (e, t, n) {
        "undefined" == typeof n && (n = !1);
        var r = Array.prototype.splice.call(arguments, 3);
        if ((r.unshift(null), this._container.children.length > 0 && this._container.first._iNext)) {
          var i = this._container.first._iNext;
          do (n === !1 || (n && i.exists)) && ((r[0] = i), e.apply(t, r)), (i = i._iNext);
          while (i != this._container.last._iNext);
        }
      },
      forEachExists: function (e, t) {
        var r = Array.prototype.splice.call(arguments, 2);
        r.unshift(null), this.iterate("exists", !0, n.Group.RETURN_TOTAL, e, t, r);
      },
      forEachAlive: function (e, t) {
        var r = Array.prototype.splice.call(arguments, 2);
        r.unshift(null), this.iterate("alive", !0, n.Group.RETURN_TOTAL, e, t, r);
      },
      forEachDead: function (e, t) {
        var r = Array.prototype.splice.call(arguments, 2);
        r.unshift(null), this.iterate("alive", !1, n.Group.RETURN_TOTAL, e, t, r);
      },
      sort: function (e, t) {
        "undefined" == typeof e && (e = "y"), "undefined" == typeof t && (t = n.Group.SORT_ASCENDING);
        var r, i;
        do {
          r = !1;
          for (var s = 0, o = this._container.children.length - 1; o > s; s++)
            t == n.Group.SORT_ASCENDING
              ? this._container.children[s][e] > this._container.children[s + 1][e] &&
                (this.swap(this.getAt(s), this.getAt(s + 1)), (i = this._container.children[s]), (this._container.children[s] = this._container.children[s + 1]), (this._container.children[s + 1] = i), (r = !0))
              : this._container.children[s][e] < this._container.children[s + 1][e] &&
                (this.swap(this.getAt(s), this.getAt(s + 1)), (i = this._container.children[s]), (this._container.children[s] = this._container.children[s + 1]), (this._container.children[s + 1] = i), (r = !0));
        } while (r);
      },
      iterate: function (e, t, r, i, s, o) {
        if (r === n.Group.RETURN_TOTAL && 0 === this._container.children.length) return 0;
        "undefined" == typeof i && (i = !1);
        var u = 0;
        if (this._container.children.length > 0 && this._container.first._iNext) {
          var a = this._container.first._iNext;
          do {
            if (a[e] === t && (u++, i && ((o[0] = a), i.apply(s, o)), r === n.Group.RETURN_CHILD)) return a;
            a = a._iNext;
          } while (a != this._container.last._iNext);
        }
        return r === n.Group.RETURN_TOTAL ? u : r === n.Group.RETURN_CHILD ? null : void 0;
      },
      getFirstExists: function (e) {
        return "boolean" != typeof e && (e = !0), this.iterate("exists", e, n.Group.RETURN_CHILD);
      },
      getFirstAlive: function () {
        return this.iterate("alive", !0, n.Group.RETURN_CHILD);
      },
      getFirstDead: function () {
        return this.iterate("alive", !1, n.Group.RETURN_CHILD);
      },
      countLiving: function () {
        return this.iterate("alive", !0, n.Group.RETURN_TOTAL);
      },
      countDead: function () {
        return this.iterate("alive", !1, n.Group.RETURN_TOTAL);
      },
      getRandom: function (e, t) {
        return 0 === this._container.children.length ? null : ((e = e || 0), (t = t || this._container.children.length), this.game.math.getRandom(this._container.children, e, t));
      },
      remove: function (e) {
        return e.group !== this
          ? !1
          : (e.events && e.events.onRemovedFromGroup.dispatch(e, this),
            e.parent === this._container && this._container.removeChild(e),
            this.cursor == e && (this.cursor = this._container._iNext ? this._container._iNext : null),
            (e.group = null),
            !0);
      },
      removeAll: function () {
        if (0 !== this._container.children.length) {
          do this._container.children[0].events && this._container.children[0].events.onRemovedFromGroup.dispatch(this._container.children[0], this), this._container.removeChild(this._container.children[0]);
          while (this._container.children.length > 0);
          this.cursor = null;
        }
      },
      removeBetween: function (e, t) {
        if (0 !== this._container.children.length) {
          if (e > t || 0 > e || t > this._container.children.length) return !1;
          for (var n = e; t > n; n++) {
            var r = this._container.children[n];
            r.events.onRemovedFromGroup.dispatch(r, this), this._container.removeChild(r), this.cursor == r && (this.cursor = this._container._iNext ? this._container._iNext : null);
          }
        }
      },
      destroy: function (e) {
        if (("undefined" == typeof e && (e = !1), e)) {
          if (this._container.children.length > 0)
            do this._container.children[0].group && this._container.children[0].destroy();
            while (this._container.children.length > 0);
        } else this.removeAll();
        this._container.parent.removeChild(this._container), (this._container = null), (this.game = null), (this.exists = !1), (this.cursor = null);
      },
      validate: function () {
        var e = this.game.stage._stage.last._iNext,
          t = this.game.stage._stage,
          n = null,
          r = null,
          i = 0;
        do {
          if (i > 0) {
            if (t !== n) return console.log("check next fail"), !1;
            if (t._iPrev !== r) return console.log("check previous fail"), !1;
          }
          (n = t._iNext), (r = t), (t = t._iNext), i++;
        } while (t != e);
        return !0;
      },
    }),
    (n.Group.prototype.constructor = n.Group),
    Object.defineProperty(n.Group.prototype, "total", {
      get: function () {
        return this._container ? this.iterate("exists", !0, n.Group.RETURN_TOTAL) : 0;
      },
    }),
    Object.defineProperty(n.Group.prototype, "length", {
      get: function () {
        return this._container ? this._container.children.length : 0;
      },
    }),
    Object.defineProperty(n.Group.prototype, "x", {
      get: function () {
        return this._container.position.x;
      },
      set: function (e) {
        this._container.position.x = e;
      },
    }),
    Object.defineProperty(n.Group.prototype, "y", {
      get: function () {
        return this._container.position.y;
      },
      set: function (e) {
        this._container.position.y = e;
      },
    }),
    Object.defineProperty(n.Group.prototype, "angle", {
      get: function () {
        return n.Math.radToDeg(this._container.rotation);
      },
      set: function (e) {
        this._container.rotation = n.Math.degToRad(e);
      },
    }),
    Object.defineProperty(n.Group.prototype, "rotation", {
      get: function () {
        return this._container.rotation;
      },
      set: function (e) {
        this._container.rotation = e;
      },
    }),
    Object.defineProperty(n.Group.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (e) {
        this._container.visible = e;
      },
    }),
    Object.defineProperty(n.Group.prototype, "alpha", {
      get: function () {
        return this._container.alpha;
      },
      set: function (e) {
        this._container.alpha = e;
      },
    }),
    (n.World = function (e) {
      n.Group.call(this, e, null, "__world", !1), (this.bounds = new n.Rectangle(0, 0, e.width, e.height)), (this.camera = null), (this.currentRenderOrderID = 0);
    }),
    (n.World.prototype = Object.create(n.Group.prototype)),
    (n.World.prototype.constructor = n.World),
    (n.World.prototype.boot = function () {
      (this.camera = new n.Camera(this.game, 0, 0, 0, this.game.width, this.game.height)), (this.camera.displayObject = this._container), (this.game.camera = this.camera);
    }),
    (n.World.prototype.preUpdate = function () {
      if (this.game.stage._stage.first._iNext) {
        var e = this.game.stage._stage.first._iNext;
        do e = e.preUpdate && !e.preUpdate() ? e.last._iNext : e._iNext;
        while (e != this.game.stage._stage.last._iNext);
      }
    }),
    (n.World.prototype.update = function () {
      if (((this.currentRenderOrderID = 0), this.game.stage._stage.first._iNext)) {
        var e = this.game.stage._stage.first._iNext;
        do e = e.update && !e.update() ? e.last._iNext : e._iNext;
        while (e != this.game.stage._stage.last._iNext);
      }
    }),
    (n.World.prototype.postUpdate = function () {
      if (this.camera.target && this.camera.target.postUpdate) {
        if ((this.camera.target.postUpdate(), this.camera.update(), this.game.stage._stage.first._iNext)) {
          var e = this.game.stage._stage.first._iNext;
          do e.postUpdate && e !== this.camera.target && e.postUpdate(), (e = e._iNext);
          while (e != this.game.stage._stage.last._iNext);
        }
      } else if ((this.camera.update(), this.game.stage._stage.first._iNext)) {
        var e = this.game.stage._stage.first._iNext;
        do e.postUpdate && e.postUpdate(), (e = e._iNext);
        while (e != this.game.stage._stage.last._iNext);
      }
    }),
    (n.World.prototype.setBounds = function (e, t, n, r) {
      n < this.game.width && (n = this.game.width), r < this.game.height && (r = this.game.height), this.bounds.setTo(e, t, n, r), this.camera.bounds && this.camera.bounds.setTo(e, t, n, r), this.game.physics.setBoundsToWorld();
    }),
    (n.World.prototype.destroy = function () {
      (this.camera.x = 0), (this.camera.y = 0), this.game.input.reset(!0), this.removeAll();
    }),
    Object.defineProperty(n.World.prototype, "width", {
      get: function () {
        return this.bounds.width;
      },
      set: function (e) {
        this.bounds.width = e;
      },
    }),
    Object.defineProperty(n.World.prototype, "height", {
      get: function () {
        return this.bounds.height;
      },
      set: function (e) {
        this.bounds.height = e;
      },
    }),
    Object.defineProperty(n.World.prototype, "centerX", {
      get: function () {
        return this.bounds.halfWidth;
      },
    }),
    Object.defineProperty(n.World.prototype, "centerY", {
      get: function () {
        return this.bounds.halfHeight;
      },
    }),
    Object.defineProperty(n.World.prototype, "randomX", {
      get: function () {
        return this.bounds.x < 0 ? this.game.rnd.integerInRange(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x)) : this.game.rnd.integerInRange(this.bounds.x, this.bounds.width);
      },
    }),
    Object.defineProperty(n.World.prototype, "randomY", {
      get: function () {
        return this.bounds.y < 0 ? this.game.rnd.integerInRange(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y)) : this.game.rnd.integerInRange(this.bounds.y, this.bounds.height);
      },
    }),
    Object.defineProperty(n.World.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (e) {
        this._container.visible = e;
      },
    }),
    (n.Game = function (e, t, r, i, s, o, u) {
      (this.id = n.GAMES.push(this) - 1),
        (this.config = null),
        (this.parent = ""),
        (this.width = 800),
        (this.height = 600),
        (this.transparent = !1),
        (this.antialias = !0),
        (this.renderer = n.AUTO),
        (this.renderType = n.AUTO),
        (this.state = null),
        (this._paused = !1),
        (this._loadComplete = !1),
        (this.isBooted = !1),
        (this.isRunning = !1),
        (this.raf = null),
        (this.add = null),
        (this.cache = null),
        (this.input = null),
        (this.load = null),
        (this.math = null),
        (this.net = null),
        (this.sound = null),
        (this.stage = null),
        (this.time = null),
        (this.tweens = null),
        (this.world = null),
        (this.physics = null),
        (this.rnd = null),
        (this.device = null),
        (this.camera = null),
        (this.canvas = null),
        (this.context = null),
        (this.debug = null),
        (this.particles = null),
        (this.stepping = !1),
        (this.pendingStep = !1),
        (this.stepCount = 0),
        1 === arguments.length && "object" == typeof arguments[0]
          ? this.parseConfig(arguments[0])
          : ("undefined" != typeof e && (this.width = e),
            "undefined" != typeof t && (this.height = t),
            "undefined" != typeof r && ((this.renderer = r), (this.renderType = r)),
            "undefined" != typeof i && (this.parent = i),
            "undefined" != typeof o && (this.transparent = o),
            "undefined" != typeof u && (this.antialias = u),
            (this.state = new n.StateManager(this, s)));
      var a = this;
      return (
        (this._onBoot = function () {
          return a.boot();
        }),
        "complete" === document.readyState || "interactive" === document.readyState ? window.setTimeout(this._onBoot, 0) : (document.addEventListener("DOMContentLoaded", this._onBoot, !1), window.addEventListener("load", this._onBoot, !1)),
        this
      );
    }),
    (n.Game.prototype = {
      parseConfig: function (e) {
        (this.config = e),
          e.width && (this.width = this.parseDimension(e.width, 0)),
          e.height && (this.height = this.parseDimension(e.height, 1)),
          e.renderer && ((this.renderer = e.renderer), (this.renderType = e.renderer)),
          e.parent && (this.parent = e.parent),
          e.transparent && (this.transparent = e.transparent),
          e.antialias && (this.antialias = e.antialias);
        var t = null;
        e.state && (t = e.state), (this.state = new n.StateManager(this, t));
      },
      parseDimension: function (e, t) {
        var n = 0,
          r = 0;
        return "string" == typeof e ? ("%" === e.substr(-1) ? ((n = parseInt(e, 10) / 100), (r = 0 === t ? window.innerWidth * n : window.innerHeight * n)) : (r = parseInt(e, 10))) : (r = e), r;
      },
      boot: function () {
        this.isBooted ||
          (document.body
            ? (document.removeEventListener("DOMContentLoaded", this._onBoot),
              window.removeEventListener("load", this._onBoot),
              (this.onPause = new n.Signal()),
              (this.onResume = new n.Signal()),
              (this.isBooted = !0),
              (this.device = new n.Device()),
              (this.math = n.Math),
              (this.rnd = new n.RandomDataGenerator([(Date.now() * Math.random()).toString()])),
              (this.stage = new n.Stage(this, this.width, this.height)),
              this.setUpRenderer(),
              (this.world = new n.World(this)),
              (this.add = new n.GameObjectFactory(this)),
              (this.cache = new n.Cache(this)),
              (this.load = new n.Loader(this)),
              (this.time = new n.Time(this)),
              (this.tweens = new n.TweenManager(this)),
              (this.input = new n.Input(this)),
              (this.sound = new n.SoundManager(this)),
              (this.physics = new n.Physics.Arcade(this)),
              (this.particles = new n.Particles(this)),
              (this.plugins = new n.PluginManager(this, this)),
              (this.net = new n.Net(this)),
              (this.debug = new n.Utils.Debug(this)),
              this.time.boot(),
              this.stage.boot(),
              this.world.boot(),
              this.input.boot(),
              this.sound.boot(),
              this.state.boot(),
              this.load.onLoadComplete.add(this.loadComplete, this),
              this.showDebugHeader(),
              (this.isRunning = !0),
              (this._loadComplete = !1),
              (this.raf = new n.RequestAnimationFrame(this)),
              this.raf.start())
            : window.setTimeout(this._onBoot, 20));
      },
      showDebugHeader: function () {
        var e = n.DEV_VERSION,
          t = "Canvas",
          r = "HTML Audio";
        if ((this.renderType == n.WEBGL ? (t = "WebGL") : this.renderType == n.HEADLESS && (t = "Headless"), this.device.webAudio && (r = "WebAudio"), this.device.chrome)) {
          var i = ["%c %c %c  Phaser v" + e + " - Renderer: " + t + " - Audio: " + r + "  %c %c ", "background: #00bff3", "background: #0072bc", "color: #ffffff; background: #003471", "background: #0072bc", "background: #00bff3"];
          console.log.apply(console, i);
        } else console.log("Phaser v" + e + " - Renderer: " + t + " - Audio: " + r);
      },
      setUpRenderer: function () {
        if (this.renderType === n.HEADLESS || this.renderType === n.CANVAS || (this.renderType === n.AUTO && this.device.webGL === !1)) {
          if (!this.device.canvas) throw new Error("Phaser.Game - cannot create Canvas or WebGL context, aborting.");
          this.renderType === n.AUTO && (this.renderType = n.CANVAS),
            (this.renderer = new t.CanvasRenderer(this.width, this.height, this.stage.canvas, this.transparent)),
            n.Canvas.setSmoothingEnabled(this.renderer.context, this.antialias),
            (this.canvas = this.renderer.view),
            (this.context = this.renderer.context);
        } else (this.renderType = n.WEBGL), (this.renderer = new t.WebGLRenderer(this.width, this.height, this.stage.canvas, this.transparent, this.antialias)), (this.canvas = this.renderer.view), (this.context = null);
        n.Canvas.addToDOM(this.renderer.view, this.parent, !0), n.Canvas.setTouchAction(this.renderer.view);
      },
      loadComplete: function () {
        (this._loadComplete = !0), this.state.loadComplete();
      },
      update: function (e) {
        this.time.update(e),
          this._paused
            ? (this.renderer.render(this.stage._stage), this.plugins.render(), this.state.render())
            : (this.pendingStep ||
                (this.stepping && (this.pendingStep = !0),
                this.plugins.preUpdate(),
                this.world.preUpdate(),
                this.stage.update(),
                this.tweens.update(),
                this.sound.update(),
                this.input.update(),
                this.state.update(),
                this.world.update(),
                this.particles.update(),
                this.plugins.update(),
                this.world.postUpdate(),
                this.plugins.postUpdate()),
              this.renderType !== n.HEADLESS && (this.renderer.render(this.stage._stage), this.plugins.render(), this.state.render(), this.plugins.postRender()));
      },
      enableStep: function () {
        (this.stepping = !0), (this.pendingStep = !1), (this.stepCount = 0);
      },
      disableStep: function () {
        (this.stepping = !1), (this.pendingStep = !1);
      },
      step: function () {
        (this.pendingStep = !1), this.stepCount++;
      },
      destroy: function () {
        this.raf.stop(),
          this.input.destroy(),
          this.state.destroy(),
          (this.state = null),
          (this.cache = null),
          (this.input = null),
          (this.load = null),
          (this.sound = null),
          (this.stage = null),
          (this.time = null),
          (this.world = null),
          (this.isBooted = !1);
      },
    }),
    (n.Game.prototype.constructor = n.Game),
    Object.defineProperty(n.Game.prototype, "paused", {
      get: function () {
        return this._paused;
      },
      set: function (e) {
        e === !0 ? this._paused === !1 && ((this._paused = !0), this.onPause.dispatch(this)) : this._paused && ((this._paused = !1), this.onResume.dispatch(this));
      },
    }),
    (n.Input = function (e) {
      (this.game = e), (this.hitCanvas = null), (this.hitContext = null), (this.moveCallback = null), (this.moveCallbackContext = this);
    }),
    (n.Input.MOUSE_OVERRIDES_TOUCH = 0),
    (n.Input.TOUCH_OVERRIDES_MOUSE = 1),
    (n.Input.MOUSE_TOUCH_COMBINE = 2),
    (n.Input.prototype = {
      pollRate: 0,
      _pollCounter: 0,
      _oldPosition: null,
      _x: 0,
      _y: 0,
      disabled: !1,
      multiInputOverride: n.Input.MOUSE_TOUCH_COMBINE,
      position: null,
      speed: null,
      circle: null,
      scale: null,
      maxPointers: 10,
      currentPointers: 0,
      tapRate: 200,
      doubleTapRate: 300,
      holdRate: 2e3,
      justPressedRate: 200,
      justReleasedRate: 200,
      recordPointerHistory: 1,
      recordRate: 100,
      recordLimit: 100,
      pointer1: null,
      pointer2: null,
      pointer3: null,
      pointer4: null,
      pointer5: null,
      pointer6: null,
      pointer7: null,
      pointer8: null,
      pointer9: null,
      pointer10: null,
      activePointer: null,
      mousePointer: null,
      mouse: null,
      keyboard: null,
      touch: null,
      mspointer: null,
      gamepad: null,
      onDown: null,
      onUp: null,
      onTap: null,
      onHold: null,
      interactiveItems: new n.LinkedList(),
      boot: function () {
        (this.mousePointer = new n.Pointer(this.game, 0)),
          (this.pointer1 = new n.Pointer(this.game, 1)),
          (this.pointer2 = new n.Pointer(this.game, 2)),
          (this.mouse = new n.Mouse(this.game)),
          (this.keyboard = new n.Keyboard(this.game)),
          (this.touch = new n.Touch(this.game)),
          (this.mspointer = new n.MSPointer(this.game)),
          (this.gamepad = new n.Gamepad(this.game)),
          (this.onDown = new n.Signal()),
          (this.onUp = new n.Signal()),
          (this.onTap = new n.Signal()),
          (this.onHold = new n.Signal()),
          (this.scale = new n.Point(1, 1)),
          (this.speed = new n.Point()),
          (this.position = new n.Point()),
          (this._oldPosition = new n.Point()),
          (this.circle = new n.Circle(0, 0, 44)),
          (this.activePointer = this.mousePointer),
          (this.currentPointers = 0),
          (this.hitCanvas = document.createElement("canvas")),
          (this.hitCanvas.width = 1),
          (this.hitCanvas.height = 1),
          (this.hitContext = this.hitCanvas.getContext("2d")),
          this.mouse.start(),
          this.keyboard.start(),
          this.touch.start(),
          this.mspointer.start(),
          (this.mousePointer.active = !0);
      },
      destroy: function () {
        this.mouse.stop(), this.keyboard.stop(), this.touch.stop(), this.mspointer.stop(), this.gamepad.stop(), (this.moveCallback = null);
      },
      setMoveCallback: function (e, t) {
        (this.moveCallback = e), (this.moveCallbackContext = t);
      },
      addPointer: function () {
        for (var e = 0, t = 10; t > 0; t--) null === this["pointer" + t] && (e = t);
        return 0 === e ? (console.warn("You can only have 10 Pointer objects"), null) : ((this["pointer" + e] = new n.Pointer(this.game, e)), this["pointer" + e]);
      },
      update: function () {
        return this.pollRate > 0 && this._pollCounter < this.pollRate
          ? void this._pollCounter++
          : ((this.speed.x = this.position.x - this._oldPosition.x),
            (this.speed.y = this.position.y - this._oldPosition.y),
            this._oldPosition.copyFrom(this.position),
            this.mousePointer.update(),
            this.gamepad.active && this.gamepad.update(),
            this.pointer1.update(),
            this.pointer2.update(),
            this.pointer3 && this.pointer3.update(),
            this.pointer4 && this.pointer4.update(),
            this.pointer5 && this.pointer5.update(),
            this.pointer6 && this.pointer6.update(),
            this.pointer7 && this.pointer7.update(),
            this.pointer8 && this.pointer8.update(),
            this.pointer9 && this.pointer9.update(),
            this.pointer10 && this.pointer10.update(),
            void (this._pollCounter = 0));
      },
      reset: function (e) {
        if (this.game.isBooted !== !1) {
          "undefined" == typeof e && (e = !1), this.keyboard.reset(), this.mousePointer.reset(), this.gamepad.reset();
          for (var t = 1; 10 >= t; t++) this["pointer" + t] && this["pointer" + t].reset();
          (this.currentPointers = 0),
            "none" !== this.game.canvas.style.cursor && (this.game.canvas.style.cursor = "default"),
            e === !0 &&
              (this.onDown.dispose(),
              this.onUp.dispose(),
              this.onTap.dispose(),
              this.onHold.dispose(),
              (this.onDown = new n.Signal()),
              (this.onUp = new n.Signal()),
              (this.onTap = new n.Signal()),
              (this.onHold = new n.Signal()),
              this.interactiveItems.callAll("reset")),
            (this._pollCounter = 0);
        }
      },
      resetSpeed: function (e, t) {
        this._oldPosition.setTo(e, t), this.speed.setTo(0, 0);
      },
      startPointer: function (e) {
        if (this.maxPointers < 10 && this.totalActivePointers == this.maxPointers) return null;
        if (this.pointer1.active === !1) return this.pointer1.start(e);
        if (this.pointer2.active === !1) return this.pointer2.start(e);
        for (var t = 3; 10 >= t; t++) if (this["pointer" + t] && this["pointer" + t].active === !1) return this["pointer" + t].start(e);
        return null;
      },
      updatePointer: function (e) {
        if (this.pointer1.active && this.pointer1.identifier == e.identifier) return this.pointer1.move(e);
        if (this.pointer2.active && this.pointer2.identifier == e.identifier) return this.pointer2.move(e);
        for (var t = 3; 10 >= t; t++) if (this["pointer" + t] && this["pointer" + t].active && this["pointer" + t].identifier == e.identifier) return this["pointer" + t].move(e);
        return null;
      },
      stopPointer: function (e) {
        if (this.pointer1.active && this.pointer1.identifier == e.identifier) return this.pointer1.stop(e);
        if (this.pointer2.active && this.pointer2.identifier == e.identifier) return this.pointer2.stop(e);
        for (var t = 3; 10 >= t; t++) if (this["pointer" + t] && this["pointer" + t].active && this["pointer" + t].identifier == e.identifier) return this["pointer" + t].stop(e);
        return null;
      },
      getPointer: function (e) {
        if (((e = e || !1), this.pointer1.active == e)) return this.pointer1;
        if (this.pointer2.active == e) return this.pointer2;
        for (var t = 3; 10 >= t; t++) if (this["pointer" + t] && this["pointer" + t].active == e) return this["pointer" + t];
        return null;
      },
      getPointerFromIdentifier: function (e) {
        if (this.pointer1.identifier == e) return this.pointer1;
        if (this.pointer2.identifier == e) return this.pointer2;
        for (var t = 3; 10 >= t; t++) if (this["pointer" + t] && this["pointer" + t].identifier == e) return this["pointer" + t];
        return null;
      },
    }),
    (n.Input.prototype.constructor = n.Input),
    Object.defineProperty(n.Input.prototype, "x", {
      get: function () {
        return this._x;
      },
      set: function (e) {
        this._x = Math.floor(e);
      },
    }),
    Object.defineProperty(n.Input.prototype, "y", {
      get: function () {
        return this._y;
      },
      set: function (e) {
        this._y = Math.floor(e);
      },
    }),
    Object.defineProperty(n.Input.prototype, "pollLocked", {
      get: function () {
        return this.pollRate > 0 && this._pollCounter < this.pollRate;
      },
    }),
    Object.defineProperty(n.Input.prototype, "totalInactivePointers", {
      get: function () {
        return 10 - this.currentPointers;
      },
    }),
    Object.defineProperty(n.Input.prototype, "totalActivePointers", {
      get: function () {
        this.currentPointers = 0;
        for (var e = 1; 10 >= e; e++) this["pointer" + e] && this["pointer" + e].active && this.currentPointers++;
        return this.currentPointers;
      },
    }),
    Object.defineProperty(n.Input.prototype, "worldX", {
      get: function () {
        return this.game.camera.view.x + this.x;
      },
    }),
    Object.defineProperty(n.Input.prototype, "worldY", {
      get: function () {
        return this.game.camera.view.y + this.y;
      },
    }),
    (n.Key = function (e, t) {
      (this.game = e),
        (this.isDown = !1),
        (this.isUp = !1),
        (this.altKey = !1),
        (this.ctrlKey = !1),
        (this.shiftKey = !1),
        (this.timeDown = 0),
        (this.duration = 0),
        (this.timeUp = 0),
        (this.repeats = 0),
        (this.keyCode = t),
        (this.onDown = new n.Signal()),
        (this.onUp = new n.Signal());
    }),
    (n.Key.prototype = {
      processKeyDown: function (e) {
        (this.altKey = e.altKey),
          (this.ctrlKey = e.ctrlKey),
          (this.shiftKey = e.shiftKey),
          this.isDown ? ((this.duration = e.timeStamp - this.timeDown), this.repeats++) : ((this.isDown = !0), (this.isUp = !1), (this.timeDown = e.timeStamp), (this.duration = 0), (this.repeats = 0), this.onDown.dispatch(this));
      },
      processKeyUp: function (e) {
        (this.isDown = !1), (this.isUp = !0), (this.timeUp = e.timeStamp), this.onUp.dispatch(this);
      },
      justPressed: function (e) {
        return "undefined" == typeof e && (e = 250), this.isDown && this.duration < e;
      },
      justReleased: function (e) {
        return "undefined" == typeof e && (e = 250), this.isDown === !1 && this.game.time.now - this.timeUp < e;
      },
    }),
    (n.Key.prototype.constructor = n.Key),
    (n.Keyboard = function (e) {
      (this.game = e),
        (this._keys = {}),
        (this._hotkeys = {}),
        (this._capture = {}),
        (this.disabled = !1),
        (this._onKeyDown = null),
        (this._onKeyUp = null),
        (this.callbackContext = this),
        (this.onDownCallback = null),
        (this.onUpCallback = null);
    }),
    (n.Keyboard.prototype = {
      addCallbacks: function (e, t, n) {
        (this.callbackContext = e), (this.onDownCallback = t), "undefined" != typeof n && (this.onUpCallback = n);
      },
      addKey: function (e) {
        return (this._hotkeys[e] = new n.Key(this.game, e)), this.addKeyCapture(e), this._hotkeys[e];
      },
      removeKey: function (e) {
        delete this._hotkeys[e];
      },
      createCursorKeys: function () {
        return { up: this.addKey(n.Keyboard.UP), down: this.addKey(n.Keyboard.DOWN), left: this.addKey(n.Keyboard.LEFT), right: this.addKey(n.Keyboard.RIGHT) };
      },
      start: function () {
        var e = this;
        (this._onKeyDown = function (t) {
          return e.processKeyDown(t);
        }),
          (this._onKeyUp = function (t) {
            return e.processKeyUp(t);
          }),
          window.addEventListener("keydown", this._onKeyDown, !1),
          window.addEventListener("keyup", this._onKeyUp, !1);
      },
      stop: function () {
        window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp);
      },
      addKeyCapture: function (e) {
        if ("object" == typeof e) for (var t in e) this._capture[e[t]] = !0;
        else this._capture[e] = !0;
      },
      removeKeyCapture: function (e) {
        delete this._capture[e];
      },
      clearCaptures: function () {
        this._capture = {};
      },
      processKeyDown: function (e) {
        this.game.input.disabled ||
          this.disabled ||
          (this._capture[e.keyCode] && e.preventDefault(),
          this.onDownCallback && this.onDownCallback.call(this.callbackContext, e),
          this._keys[e.keyCode] && this._keys[e.keyCode].isDown
            ? (this._keys[e.keyCode].duration = this.game.time.now - this._keys[e.keyCode].timeDown)
            : this._keys[e.keyCode]
            ? ((this._keys[e.keyCode].isDown = !0), (this._keys[e.keyCode].timeDown = this.game.time.now), (this._keys[e.keyCode].duration = 0))
            : (this._keys[e.keyCode] = { isDown: !0, timeDown: this.game.time.now, timeUp: 0, duration: 0 }),
          this._hotkeys[e.keyCode] && this._hotkeys[e.keyCode].processKeyDown(e));
      },
      processKeyUp: function (e) {
        this.game.input.disabled ||
          this.disabled ||
          (this._capture[e.keyCode] && e.preventDefault(),
          this.onUpCallback && this.onUpCallback.call(this.callbackContext, e),
          this._hotkeys[e.keyCode] && this._hotkeys[e.keyCode].processKeyUp(e),
          this._keys[e.keyCode] ? ((this._keys[e.keyCode].isDown = !1), (this._keys[e.keyCode].timeUp = this.game.time.now)) : (this._keys[e.keyCode] = { isDown: !1, timeDown: this.game.time.now, timeUp: this.game.time.now, duration: 0 }));
      },
      reset: function () {
        for (var e in this._keys) this._keys[e].isDown = !1;
      },
      justPressed: function (e, t) {
        return "undefined" == typeof t && (t = 250), this._keys[e] && this._keys[e].isDown && this._keys[e].duration < t ? !0 : !1;
      },
      justReleased: function (e, t) {
        return "undefined" == typeof t && (t = 250), this._keys[e] && this._keys[e].isDown === !1 && this.game.time.now - this._keys[e].timeUp < t ? !0 : !1;
      },
      isDown: function (e) {
        return this._keys[e] ? this._keys[e].isDown : !1;
      },
    }),
    (n.Keyboard.prototype.constructor = n.Keyboard),
    (n.Keyboard.A = "A".charCodeAt(0)),
    (n.Keyboard.B = "B".charCodeAt(0)),
    (n.Keyboard.C = "C".charCodeAt(0)),
    (n.Keyboard.D = "D".charCodeAt(0)),
    (n.Keyboard.E = "E".charCodeAt(0)),
    (n.Keyboard.F = "F".charCodeAt(0)),
    (n.Keyboard.G = "G".charCodeAt(0)),
    (n.Keyboard.H = "H".charCodeAt(0)),
    (n.Keyboard.I = "I".charCodeAt(0)),
    (n.Keyboard.J = "J".charCodeAt(0)),
    (n.Keyboard.K = "K".charCodeAt(0)),
    (n.Keyboard.L = "L".charCodeAt(0)),
    (n.Keyboard.M = "M".charCodeAt(0)),
    (n.Keyboard.N = "N".charCodeAt(0)),
    (n.Keyboard.O = "O".charCodeAt(0)),
    (n.Keyboard.P = "P".charCodeAt(0)),
    (n.Keyboard.Q = "Q".charCodeAt(0)),
    (n.Keyboard.R = "R".charCodeAt(0)),
    (n.Keyboard.S = "S".charCodeAt(0)),
    (n.Keyboard.T = "T".charCodeAt(0)),
    (n.Keyboard.U = "U".charCodeAt(0)),
    (n.Keyboard.V = "V".charCodeAt(0)),
    (n.Keyboard.W = "W".charCodeAt(0)),
    (n.Keyboard.X = "X".charCodeAt(0)),
    (n.Keyboard.Y = "Y".charCodeAt(0)),
    (n.Keyboard.Z = "Z".charCodeAt(0)),
    (n.Keyboard.ZERO = "0".charCodeAt(0)),
    (n.Keyboard.ONE = "1".charCodeAt(0)),
    (n.Keyboard.TWO = "2".charCodeAt(0)),
    (n.Keyboard.THREE = "3".charCodeAt(0)),
    (n.Keyboard.FOUR = "4".charCodeAt(0)),
    (n.Keyboard.FIVE = "5".charCodeAt(0)),
    (n.Keyboard.SIX = "6".charCodeAt(0)),
    (n.Keyboard.SEVEN = "7".charCodeAt(0)),
    (n.Keyboard.EIGHT = "8".charCodeAt(0)),
    (n.Keyboard.NINE = "9".charCodeAt(0)),
    (n.Keyboard.NUMPAD_0 = 96),
    (n.Keyboard.NUMPAD_1 = 97),
    (n.Keyboard.NUMPAD_2 = 98),
    (n.Keyboard.NUMPAD_3 = 99),
    (n.Keyboard.NUMPAD_4 = 100),
    (n.Keyboard.NUMPAD_5 = 101),
    (n.Keyboard.NUMPAD_6 = 102),
    (n.Keyboard.NUMPAD_7 = 103),
    (n.Keyboard.NUMPAD_8 = 104),
    (n.Keyboard.NUMPAD_9 = 105),
    (n.Keyboard.NUMPAD_MULTIPLY = 106),
    (n.Keyboard.NUMPAD_ADD = 107),
    (n.Keyboard.NUMPAD_ENTER = 108),
    (n.Keyboard.NUMPAD_SUBTRACT = 109),
    (n.Keyboard.NUMPAD_DECIMAL = 110),
    (n.Keyboard.NUMPAD_DIVIDE = 111),
    (n.Keyboard.F1 = 112),
    (n.Keyboard.F2 = 113),
    (n.Keyboard.F3 = 114),
    (n.Keyboard.F4 = 115),
    (n.Keyboard.F5 = 116),
    (n.Keyboard.F6 = 117),
    (n.Keyboard.F7 = 118),
    (n.Keyboard.F8 = 119),
    (n.Keyboard.F9 = 120),
    (n.Keyboard.F10 = 121),
    (n.Keyboard.F11 = 122),
    (n.Keyboard.F12 = 123),
    (n.Keyboard.F13 = 124),
    (n.Keyboard.F14 = 125),
    (n.Keyboard.F15 = 126),
    (n.Keyboard.COLON = 186),
    (n.Keyboard.EQUALS = 187),
    (n.Keyboard.UNDERSCORE = 189),
    (n.Keyboard.QUESTION_MARK = 191),
    (n.Keyboard.TILDE = 192),
    (n.Keyboard.OPEN_BRACKET = 219),
    (n.Keyboard.BACKWARD_SLASH = 220),
    (n.Keyboard.CLOSED_BRACKET = 221),
    (n.Keyboard.QUOTES = 222),
    (n.Keyboard.BACKSPACE = 8),
    (n.Keyboard.TAB = 9),
    (n.Keyboard.CLEAR = 12),
    (n.Keyboard.ENTER = 13),
    (n.Keyboard.SHIFT = 16),
    (n.Keyboard.CONTROL = 17),
    (n.Keyboard.ALT = 18),
    (n.Keyboard.CAPS_LOCK = 20),
    (n.Keyboard.ESC = 27),
    (n.Keyboard.SPACEBAR = 32),
    (n.Keyboard.PAGE_UP = 33),
    (n.Keyboard.PAGE_DOWN = 34),
    (n.Keyboard.END = 35),
    (n.Keyboard.HOME = 36),
    (n.Keyboard.LEFT = 37),
    (n.Keyboard.UP = 38),
    (n.Keyboard.RIGHT = 39),
    (n.Keyboard.DOWN = 40),
    (n.Keyboard.INSERT = 45),
    (n.Keyboard.DELETE = 46),
    (n.Keyboard.HELP = 47),
    (n.Keyboard.NUM_LOCK = 144),
    (n.Mouse = function (e) {
      (this.game = e),
        (this.callbackContext = this.game),
        (this.mouseDownCallback = null),
        (this.mouseMoveCallback = null),
        (this.mouseUpCallback = null),
        (this.capture = !1),
        (this.button = -1),
        (this.disabled = !1),
        (this.locked = !1),
        (this.pointerLock = new n.Signal()),
        (this.event = null),
        (this._onMouseDown = null),
        (this._onMouseMove = null),
        (this._onMouseUp = null);
    }),
    (n.Mouse.NO_BUTTON = -1),
    (n.Mouse.LEFT_BUTTON = 0),
    (n.Mouse.MIDDLE_BUTTON = 1),
    (n.Mouse.RIGHT_BUTTON = 2),
    (n.Mouse.prototype = {
      start: function () {
        var e = this;
        (this.game.device.android && this.game.device.chrome === !1) ||
          ((this._onMouseDown = function (t) {
            return e.onMouseDown(t);
          }),
          (this._onMouseMove = function (t) {
            return e.onMouseMove(t);
          }),
          (this._onMouseUp = function (t) {
            return e.onMouseUp(t);
          }),
          document.addEventListener("mousedown", this._onMouseDown, !0),
          document.addEventListener("mousemove", this._onMouseMove, !0),
          document.addEventListener("mouseup", this._onMouseUp, !0));
      },
      onMouseDown: function (e) {
        (this.event = e),
          this.capture && e.preventDefault(),
          (this.button = e.which),
          this.mouseDownCallback && this.mouseDownCallback.call(this.callbackContext, e),
          this.game.input.disabled || this.disabled || ((e.identifier = 0), this.game.input.mousePointer.start(e));
      },
      onMouseMove: function (e) {
        (this.event = e),
          this.capture && e.preventDefault(),
          this.mouseMoveCallback && this.mouseMoveCallback.call(this.callbackContext, e),
          this.game.input.disabled || this.disabled || ((e.identifier = 0), this.game.input.mousePointer.move(e));
      },
      onMouseUp: function (e) {
        (this.event = e),
          this.capture && e.preventDefault(),
          (this.button = n.Mouse.NO_BUTTON),
          this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, e),
          this.game.input.disabled || this.disabled || ((e.identifier = 0), this.game.input.mousePointer.stop(e));
      },
      requestPointerLock: function () {
        if (this.game.device.pointerLock) {
          var e = this.game.stage.canvas;
          (e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock), e.requestPointerLock();
          var t = this;
          (this._pointerLockChange = function (e) {
            return t.pointerLockChange(e);
          }),
            document.addEventListener("pointerlockchange", this._pointerLockChange, !0),
            document.addEventListener("mozpointerlockchange", this._pointerLockChange, !0),
            document.addEventListener("webkitpointerlockchange", this._pointerLockChange, !0);
        }
      },
      pointerLockChange: function (e) {
        var t = this.game.stage.canvas;
        document.pointerLockElement === t || document.mozPointerLockElement === t || document.webkitPointerLockElement === t ? ((this.locked = !0), this.pointerLock.dispatch(!0, e)) : ((this.locked = !1), this.pointerLock.dispatch(!1, e));
      },
      releasePointerLock: function () {
        (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock),
          document.exitPointerLock(),
          document.removeEventListener("pointerlockchange", this._pointerLockChange, !0),
          document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0),
          document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0);
      },
      stop: function () {
        document.removeEventListener("mousedown", this._onMouseDown, !0), document.removeEventListener("mousemove", this._onMouseMove, !0), document.removeEventListener("mouseup", this._onMouseUp, !0);
      },
    }),
    (n.Mouse.prototype.constructor = n.Mouse),
    (n.MSPointer = function (e) {
      (this.game = e), (this.callbackContext = this.game), (this.disabled = !1), (this._onMSPointerDown = null), (this._onMSPointerMove = null), (this._onMSPointerUp = null);
    }),
    (n.MSPointer.prototype = {
      start: function () {
        var e = this;
        this.game.device.mspointer === !0 &&
          ((this._onMSPointerDown = function (t) {
            return e.onPointerDown(t);
          }),
          (this._onMSPointerMove = function (t) {
            return e.onPointerMove(t);
          }),
          (this._onMSPointerUp = function (t) {
            return e.onPointerUp(t);
          }),
          this.game.renderer.view.addEventListener("MSPointerDown", this._onMSPointerDown, !1),
          this.game.renderer.view.addEventListener("MSPointerMove", this._onMSPointerMove, !1),
          this.game.renderer.view.addEventListener("MSPointerUp", this._onMSPointerUp, !1),
          this.game.renderer.view.addEventListener("pointerDown", this._onMSPointerDown, !1),
          this.game.renderer.view.addEventListener("pointerMove", this._onMSPointerMove, !1),
          this.game.renderer.view.addEventListener("pointerUp", this._onMSPointerUp, !1),
          (this.game.renderer.view.style["-ms-content-zooming"] = "none"),
          (this.game.renderer.view.style["-ms-touch-action"] = "none"));
      },
      onPointerDown: function (e) {
        this.game.input.disabled || this.disabled || (e.preventDefault(), (e.identifier = e.pointerId), this.game.input.startPointer(e));
      },
      onPointerMove: function (e) {
        this.game.input.disabled || this.disabled || (e.preventDefault(), (e.identifier = e.pointerId), this.game.input.updatePointer(e));
      },
      onPointerUp: function (e) {
        this.game.input.disabled || this.disabled || (e.preventDefault(), (e.identifier = e.pointerId), this.game.input.stopPointer(e));
      },
      stop: function () {
        this.game.stage.canvas.removeEventListener("MSPointerDown", this._onMSPointerDown),
          this.game.stage.canvas.removeEventListener("MSPointerMove", this._onMSPointerMove),
          this.game.stage.canvas.removeEventListener("MSPointerUp", this._onMSPointerUp),
          this.game.stage.canvas.removeEventListener("pointerDown", this._onMSPointerDown),
          this.game.stage.canvas.removeEventListener("pointerMove", this._onMSPointerMove),
          this.game.stage.canvas.removeEventListener("pointerUp", this._onMSPointerUp);
      },
    }),
    (n.MSPointer.prototype.constructor = n.MSPointer),
    (n.Pointer = function (e, t) {
      (this.game = e),
        (this.id = t),
        (this._holdSent = !1),
        (this._history = []),
        (this._nextDrop = 0),
        (this._stateReset = !1),
        (this.withinGame = !1),
        (this.clientX = -1),
        (this.clientY = -1),
        (this.pageX = -1),
        (this.pageY = -1),
        (this.screenX = -1),
        (this.screenY = -1),
        (this.x = -1),
        (this.y = -1),
        (this.isMouse = !1),
        (this.isDown = !1),
        (this.isUp = !0),
        (this.timeDown = 0),
        (this.timeUp = 0),
        (this.previousTapTime = 0),
        (this.totalTouches = 0),
        (this.msSinceLastClick = Number.MAX_VALUE),
        (this.targetObject = null),
        (this.active = !1),
        (this.position = new n.Point()),
        (this.positionDown = new n.Point()),
        (this.circle = new n.Circle(0, 0, 44)),
        0 === t && (this.isMouse = !0);
    }),
    (n.Pointer.prototype = {
      start: function (e) {
        return (
          (this.identifier = e.identifier),
          (this.target = e.target),
          "undefined" != typeof e.button && (this.button = e.button),
          //console.log("pieces new tick")
          this.game.stage.disableVisibilityChange === !1 && this.game.paused && this.game.stage.scale.incorrectOrientation === !1
            ? ((this.game.paused = !1), this)
            : ((this._history.length = 0),
              (this.active = !0),
              (this.withinGame = !0),
              (this.isDown = !0),
              (this.isUp = !1),
              (this.msSinceLastClick = this.game.time.now - this.timeDown),
              (this.timeDown = this.game.time.now),
              (this._holdSent = !1),
              this.move(e),
              this.positionDown.setTo(this.x, this.y),
              (this.game.input.multiInputOverride == n.Input.MOUSE_OVERRIDES_TOUCH ||
                this.game.input.multiInputOverride == n.Input.MOUSE_TOUCH_COMBINE ||
                (this.game.input.multiInputOverride == n.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers)) &&
                ((this.game.input.x = this.x), (this.game.input.y = this.y), this.game.input.position.setTo(this.x, this.y), this.game.input.onDown.dispatch(this, e), this.game.input.resetSpeed(this.x, this.y)),
              (this._stateReset = !1),
              this.totalTouches++,
              this.isMouse === !1 && this.game.input.currentPointers++,
              null !== this.targetObject && this.targetObject._touchedHandler(this),
              this)
        );
      },
      update: function () {
        this.active &&
          (this._holdSent === !1 &&
            this.duration >= this.game.input.holdRate &&
            ((this.game.input.multiInputOverride == n.Input.MOUSE_OVERRIDES_TOUCH ||
              this.game.input.multiInputOverride == n.Input.MOUSE_TOUCH_COMBINE ||
              (this.game.input.multiInputOverride == n.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers)) &&
              this.game.input.onHold.dispatch(this),
            (this._holdSent = !0)),
          this.game.input.recordPointerHistory &&
            this.game.time.now >= this._nextDrop &&
            ((this._nextDrop = this.game.time.now + this.game.input.recordRate), this._history.push({ x: this.position.x, y: this.position.y }), this._history.length > this.game.input.recordLimit && this._history.shift()));
      },
      move: function (e) {
        if (!this.game.input.pollLocked) {
          if (
            ("undefined" != typeof e.button && (this.button = e.button),
            (this.clientX = e.clientX),
            (this.clientY = e.clientY),
            (this.pageX = e.pageX),
            (this.pageY = e.pageY),
            (this.screenX = e.screenX),
            (this.screenY = e.screenY),
            (this.x = (this.pageX - this.game.stage.offset.x) * this.game.input.scale.x),
            (this.y = (this.pageY - this.game.stage.offset.y) * this.game.input.scale.y),
            this.position.setTo(this.x, this.y),
            (this.circle.x = this.x),
            (this.circle.y = this.y),
            (this.game.input.multiInputOverride == n.Input.MOUSE_OVERRIDES_TOUCH ||
              this.game.input.multiInputOverride == n.Input.MOUSE_TOUCH_COMBINE ||
              (this.game.input.multiInputOverride == n.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers)) &&
              ((this.game.input.activePointer = this),
              (this.game.input.x = this.x),
              (this.game.input.y = this.y),
              this.game.input.position.setTo(this.game.input.x, this.game.input.y),
              (this.game.input.circle.x = this.game.input.x),
              (this.game.input.circle.y = this.game.input.y)),
            this.game.paused)
          )
            return this;
          if ((this.game.input.moveCallback && this.game.input.moveCallback.call(this.game.input.moveCallbackContext, this, this.x, this.y), null !== this.targetObject && this.targetObject.isDragged === !0))
            return this.targetObject.update(this) === !1 && (this.targetObject = null), this;
          if (((this._highestRenderOrderID = -1), (this._highestRenderObject = null), (this._highestInputPriorityID = -1), this.game.input.interactiveItems.total > 0)) {
            var t = this.game.input.interactiveItems.next;
            do
              (t.pixelPerfect || t.priorityID > this._highestInputPriorityID || (t.priorityID == this._highestInputPriorityID && t.sprite.renderOrderID > this._highestRenderOrderID)) &&
                t.checkPointerOver(this) &&
                ((this._highestRenderOrderID = t.sprite.renderOrderID), (this._highestInputPriorityID = t.priorityID), (this._highestRenderObject = t)),
                (t = t.next);
            while (null != t);
          }
          return (
            null == this._highestRenderObject
              ? this.targetObject && (this.targetObject._pointerOutHandler(this), (this.targetObject = null))
              : null == this.targetObject
              ? ((this.targetObject = this._highestRenderObject), this._highestRenderObject._pointerOverHandler(this))
              : this.targetObject == this._highestRenderObject
              ? this._highestRenderObject.update(this) === !1 && (this.targetObject = null)
              : (this.targetObject._pointerOutHandler(this), (this.targetObject = this._highestRenderObject), this.targetObject._pointerOverHandler(this)),
            this
          );
        }
      },
      leave: function (e) {
        (this.withinGame = !1), this.move(e);
      },
      stop: function (e) {
        if (this._stateReset) return void e.preventDefault();
        if (
          ((this.timeUp = this.game.time.now),
          (this.game.input.multiInputOverride == n.Input.MOUSE_OVERRIDES_TOUCH ||
            this.game.input.multiInputOverride == n.Input.MOUSE_TOUCH_COMBINE ||
            (this.game.input.multiInputOverride == n.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers)) &&
            (this.game.input.onUp.dispatch(this, e),
            this.duration >= 0 &&
              this.duration <= this.game.input.tapRate &&
              (this.timeUp - this.previousTapTime < this.game.input.doubleTapRate ? this.game.input.onTap.dispatch(this, !0) : this.game.input.onTap.dispatch(this, !1), (this.previousTapTime = this.timeUp))),
          this.id > 0 && (this.active = !1),
          (this.withinGame = !1),
          (this.isDown = !1),
          (this.isUp = !0),
          this.isMouse === !1 && this.game.input.currentPointers--,
          this.game.input.interactiveItems.total > 0)
        ) {
          var t = this.game.input.interactiveItems.next;
          do t && t._releasedHandler(this), (t = t.next);
          while (null != t);
        }
        return this.targetObject && this.targetObject._releasedHandler(this), (this.targetObject = null), this;
      },
      justPressed: function (e) {
        return (e = e || this.game.input.justPressedRate), this.isDown === !0 && this.timeDown + e > this.game.time.now;
      },
      justReleased: function (e) {
        return (e = e || this.game.input.justReleasedRate), this.isUp === !0 && this.timeUp + e > this.game.time.now;
      },
      reset: function () {
        this.isMouse === !1 && (this.active = !1),
          (this.identifier = null),
          (this.isDown = !1),
          (this.isUp = !0),
          (this.totalTouches = 0),
          (this._holdSent = !1),
          (this._history.length = 0),
          (this._stateReset = !0),
          this.targetObject && this.targetObject._releasedHandler(this),
          (this.targetObject = null);
      },
    }),
    (n.Pointer.prototype.constructor = n.Pointer),
    Object.defineProperty(n.Pointer.prototype, "duration", {
      get: function () {
        return this.isUp ? -1 : this.game.time.now - this.timeDown;
      },
    }),
    Object.defineProperty(n.Pointer.prototype, "worldX", {
      get: function () {
        return this.game.world.camera.x + this.x;
      },
    }),
    Object.defineProperty(n.Pointer.prototype, "worldY", {
      get: function () {
        return this.game.world.camera.y + this.y;
      },
    }),
    (n.Touch = function (e) {
      (this.game = e),
        (this.disabled = !1),
        (this.callbackContext = this.game),
        (this.touchStartCallback = null),
        (this.touchMoveCallback = null),
        (this.touchEndCallback = null),
        (this.touchEnterCallback = null),
        (this.touchLeaveCallback = null),
        (this.touchCancelCallback = null),
        (this.preventDefault = !0),
        (this.event = null),
        (this._onTouchStart = null),
        (this._onTouchMove = null),
        (this._onTouchEnd = null),
        (this._onTouchEnter = null),
        (this._onTouchLeave = null),
        (this._onTouchCancel = null),
        (this._onTouchMove = null);
    }),
    (n.Touch.prototype = {
      start: function () {
        var e = this;
        this.game.device.touch &&
          ((this._onTouchStart = function (t) {
            return e.onTouchStart(t);
          }),
          (this._onTouchMove = function (t) {
            return e.onTouchMove(t);
          }),
          (this._onTouchEnd = function (t) {
            return e.onTouchEnd(t);
          }),
          (this._onTouchEnter = function (t) {
            return e.onTouchEnter(t);
          }),
          (this._onTouchLeave = function (t) {
            return e.onTouchLeave(t);
          }),
          (this._onTouchCancel = function (t) {
            return e.onTouchCancel(t);
          }),
          this.game.renderer.view.addEventListener("touchstart", this._onTouchStart, !1),
          this.game.renderer.view.addEventListener("touchmove", this._onTouchMove, !1),
          this.game.renderer.view.addEventListener("touchend", this._onTouchEnd, !1),
          this.game.renderer.view.addEventListener("touchenter", this._onTouchEnter, !1),
          this.game.renderer.view.addEventListener("touchleave", this._onTouchLeave, !1),
          this.game.renderer.view.addEventListener("touchcancel", this._onTouchCancel, !1));
      },
      consumeDocumentTouches: function () {
        (this._documentTouchMove = function (e) {
          e.preventDefault();
        }),
          document.addEventListener("touchmove", this._documentTouchMove, !1);
      },
      onTouchStart: function (e) {
        if (((this.event = e), this.touchStartCallback && this.touchStartCallback.call(this.callbackContext, e), !this.game.input.disabled && !this.disabled)) {
          this.preventDefault && e.preventDefault();
          for (var t = 0; t < e.changedTouches.length; t++) this.game.input.startPointer(e.changedTouches[t]);
        }
      },
      onTouchCancel: function (e) {
        if (((this.event = e), this.touchCancelCallback && this.touchCancelCallback.call(this.callbackContext, e), !this.game.input.disabled && !this.disabled)) {
          this.preventDefault && e.preventDefault();
          for (var t = 0; t < e.changedTouches.length; t++) this.game.input.stopPointer(e.changedTouches[t]);
        }
      },
      onTouchEnter: function (e) {
        (this.event = e), this.touchEnterCallback && this.touchEnterCallback.call(this.callbackContext, e), this.game.input.disabled || this.disabled || (this.preventDefault && e.preventDefault());
      },
      onTouchLeave: function (e) {
        (this.event = e), this.touchLeaveCallback && this.touchLeaveCallback.call(this.callbackContext, e), this.preventDefault && e.preventDefault();
      },
      onTouchMove: function (e) {
        (this.event = e), this.touchMoveCallback && this.touchMoveCallback.call(this.callbackContext, e), this.preventDefault && e.preventDefault();
        for (var t = 0; t < e.changedTouches.length; t++) this.game.input.updatePointer(e.changedTouches[t]);
      },
      onTouchEnd: function (e) {
        (this.event = e), this.touchEndCallback && this.touchEndCallback.call(this.callbackContext, e), this.preventDefault && e.preventDefault();
        for (var t = 0; t < e.changedTouches.length; t++) this.game.input.stopPointer(e.changedTouches[t]);
      },
      stop: function () {
        this.game.device.touch &&
          (this.game.stage.canvas.removeEventListener("touchstart", this._onTouchStart),
          this.game.stage.canvas.removeEventListener("touchmove", this._onTouchMove),
          this.game.stage.canvas.removeEventListener("touchend", this._onTouchEnd),
          this.game.stage.canvas.removeEventListener("touchenter", this._onTouchEnter),
          this.game.stage.canvas.removeEventListener("touchleave", this._onTouchLeave),
          this.game.stage.canvas.removeEventListener("touchcancel", this._onTouchCancel));
      },
    }),
    (n.Touch.prototype.constructor = n.Touch),
    (n.InputHandler = function (e) {
      (this.sprite = e),
        (this.game = e.game),
        (this.enabled = !1),
        (this.priorityID = 0),
        (this.useHandCursor = !1),
        (this.isDragged = !1),
        (this.allowHorizontalDrag = !0),
        (this.allowVerticalDrag = !0),
        (this.bringToTop = !1),
        (this.snapOffset = null),
        (this.snapOnDrag = !1),
        (this.snapOnRelease = !1),
        (this.snapX = 0),
        (this.snapY = 0),
        (this.snapOffsetX = 0),
        (this.snapOffsetY = 0),
        (this.pixelPerfect = !1),
        (this.pixelPerfectAlpha = 255),
        (this.draggable = !1),
        (this.boundsRect = null),
        (this.boundsSprite = null),
        (this.consumePointerEvent = !1),
        (this._tempPoint = new n.Point()),
        (this._pointerData = []),
        this._pointerData.push({ id: 0, x: 0, y: 0, isDown: !1, isUp: !1, isOver: !1, isOut: !1, timeOver: 0, timeOut: 0, timeDown: 0, timeUp: 0, downDuration: 0, isDragged: !1 });
    }),
    (n.InputHandler.prototype = {
      start: function (e, t) {
        if (((e = e || 0), "undefined" == typeof t && (t = !1), this.enabled === !1)) {
          this.game.input.interactiveItems.add(this), (this.useHandCursor = t), (this.priorityID = e);
          for (var r = 0; 10 > r; r++) this._pointerData[r] = { id: r, x: 0, y: 0, isDown: !1, isUp: !1, isOver: !1, isOut: !1, timeOver: 0, timeOut: 0, timeDown: 0, timeUp: 0, downDuration: 0, isDragged: !1 };
          (this.snapOffset = new n.Point()),
            (this.enabled = !0),
            this.sprite.events &&
              null == this.sprite.events.onInputOver &&
              ((this.sprite.events.onInputOver = new n.Signal()),
              (this.sprite.events.onInputOut = new n.Signal()),
              (this.sprite.events.onInputDown = new n.Signal()),
              (this.sprite.events.onInputUp = new n.Signal()),
              (this.sprite.events.onDragStart = new n.Signal()),
              (this.sprite.events.onDragStop = new n.Signal()));
        }
        return this.sprite;
      },
      reset: function () {
        this.enabled = !1;
        for (var e = 0; 10 > e; e++) this._pointerData[e] = { id: e, x: 0, y: 0, isDown: !1, isUp: !1, isOver: !1, isOut: !1, timeOver: 0, timeOut: 0, timeDown: 0, timeUp: 0, downDuration: 0, isDragged: !1 };
      },
      stop: function () {
        this.enabled !== !1 && ((this.enabled = !1), this.game.input.interactiveItems.remove(this));
      },
      destroy: function () {
        this.enabled && ((this.enabled = !1), this.game.input.interactiveItems.remove(this), this.stop(), (this.sprite = null));
      },
      pointerX: function (e) {
        return (e = e || 0), this._pointerData[e].x;
      },
      pointerY: function (e) {
        return (e = e || 0), this._pointerData[e].y;
      },
      pointerDown: function (e) {
        return (e = e || 0), this._pointerData[e].isDown;
      },
      pointerUp: function (e) {
        return (e = e || 0), this._pointerData[e].isUp;
      },
      pointerTimeDown: function (e) {
        return (e = e || 0), this._pointerData[e].timeDown;
      },
      pointerTimeUp: function (e) {
        return (e = e || 0), this._pointerData[e].timeUp;
      },
      pointerOver: function (e) {
        if (this.enabled) {
          if ("undefined" != typeof e) return this._pointerData[e].isOver;
          for (var t = 0; 10 > t; t++) if (this._pointerData[t].isOver) return !0;
        }
        return !1;
      },
      pointerOut: function (e) {
        if (this.enabled) {
          if ("undefined" != typeof e) return this._pointerData[e].isOut;
          for (var t = 0; 10 > t; t++) if (this._pointerData[t].isOut) return !0;
        }
        return !1;
      },
      pointerTimeOver: function (e) {
        return (e = e || 0), this._pointerData[e].timeOver;
      },
      pointerTimeOut: function (e) {
        return (e = e || 0), this._pointerData[e].timeOut;
      },
      pointerDragged: function (e) {
        return (e = e || 0), this._pointerData[e].isDragged;
      },
      checkPointerOver: function (e) {
        return this.enabled === !1 || this.sprite.visible === !1 || (this.sprite.group && this.sprite.group.visible === !1)
          ? !1
          : (this.sprite.getLocalUnmodifiedPosition(this._tempPoint, e.x, e.y),
            this._tempPoint.x >= 0 && this._tempPoint.x <= this.sprite.currentFrame.width && this._tempPoint.y >= 0 && this._tempPoint.y <= this.sprite.currentFrame.height
              ? this.pixelPerfect
                ? this.checkPixel(this._tempPoint.x, this._tempPoint.y)
                : !0
              : void 0);
      },
      checkPixel: function (e, t) {
        if (this.sprite.texture.baseTexture.source) {
          this.game.input.hitContext.clearRect(0, 0, 1, 1), (e += this.sprite.texture.frame.x), (t += this.sprite.texture.frame.y), this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, e, t, 1, 1, 0, 0, 1, 1);
          var n = this.game.input.hitContext.getImageData(0, 0, 1, 1);
          if (n.data[3] >= this.pixelPerfectAlpha) return !0;
        }
        return !1;
      },
      update: function (e) {
        return this.enabled === !1 || this.sprite.visible === !1 || (this.sprite.group && this.sprite.group.visible === !1)
          ? (this._pointerOutHandler(e), !1)
          : this.draggable && this._draggedPointerID == e.id
          ? this.updateDrag(e)
          : this._pointerData[e.id].isOver === !0
          ? this.checkPointerOver(e)
            ? ((this._pointerData[e.id].x = e.x - this.sprite.x), (this._pointerData[e.id].y = e.y - this.sprite.y), !0)
            : (this._pointerOutHandler(e), !1)
          : void 0;
      },
      _pointerOverHandler: function (e) {
        this._pointerData[e.id].isOver === !1 &&
          ((this._pointerData[e.id].isOver = !0),
          (this._pointerData[e.id].isOut = !1),
          (this._pointerData[e.id].timeOver = this.game.time.now),
          (this._pointerData[e.id].x = e.x - this.sprite.x),
          (this._pointerData[e.id].y = e.y - this.sprite.y),
          this.useHandCursor && this._pointerData[e.id].isDragged === !1 && (this.game.canvas.style.cursor = "pointer"),
          this.sprite.events.onInputOver.dispatch(this.sprite, e));
      },
      _pointerOutHandler: function (e) {
        (this._pointerData[e.id].isOver = !1),
          (this._pointerData[e.id].isOut = !0),
          (this._pointerData[e.id].timeOut = this.game.time.now),
          this.useHandCursor && this._pointerData[e.id].isDragged === !1 && (this.game.canvas.style.cursor = "default"),
          this.sprite && this.sprite.events && this.sprite.events.onInputOut.dispatch(this.sprite, e);
      },
      _touchedHandler: function (e) {
        return (
          this._pointerData[e.id].isDown === !1 &&
            this._pointerData[e.id].isOver === !0 &&
            ((this._pointerData[e.id].isDown = !0),
            (this._pointerData[e.id].isUp = !1),
            (this._pointerData[e.id].timeDown = this.game.time.now),
            this.sprite.events.onInputDown.dispatch(this.sprite, e),
            this.draggable && this.isDragged === !1 && this.startDrag(e),
            this.bringToTop && this.sprite.bringToTop()),
          this.consumePointerEvent
        );
      },
      _releasedHandler: function (e) {
        this._pointerData[e.id].isDown &&
          e.isUp &&
          ((this._pointerData[e.id].isDown = !1),
          (this._pointerData[e.id].isUp = !0),
          (this._pointerData[e.id].timeUp = this.game.time.now),
          (this._pointerData[e.id].downDuration = this._pointerData[e.id].timeUp - this._pointerData[e.id].timeDown),
          this.checkPointerOver(e) ? this.sprite.events.onInputUp.dispatch(this.sprite, e, !0) : (this.sprite.events.onInputUp.dispatch(this.sprite, e, !1), this.useHandCursor && (this.game.canvas.style.cursor = "default")),
          this.draggable && this.isDragged && this._draggedPointerID == e.id && this.stopDrag(e));
      },
      updateDrag: function (e) {
        return e.isUp
          ? (this.stopDrag(e), !1)
          : (this.sprite.fixedToCamera
              ? (this.allowHorizontalDrag && (this.sprite.cameraOffset.x = e.x + this._dragPoint.x + this.dragOffset.x),
                this.allowVerticalDrag && (this.sprite.cameraOffset.y = e.y + this._dragPoint.y + this.dragOffset.y),
                this.boundsRect && this.checkBoundsRect(),
                this.boundsSprite && this.checkBoundsSprite(),
                this.snapOnDrag &&
                  ((this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX)),
                  (this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY))))
              : (this.allowHorizontalDrag && (this.sprite.x = e.x + this._dragPoint.x + this.dragOffset.x),
                this.allowVerticalDrag && (this.sprite.y = e.y + this._dragPoint.y + this.dragOffset.y),
                this.boundsRect && this.checkBoundsRect(),
                this.boundsSprite && this.checkBoundsSprite(),
                this.snapOnDrag &&
                  ((this.sprite.x = Math.round((this.sprite.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX)),
                  (this.sprite.y = Math.round((this.sprite.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY)))),
            !0);
      },
      justOver: function (e, t) {
        return (e = e || 0), (t = t || 500), this._pointerData[e].isOver && this.overDuration(e) < t;
      },
      justOut: function (e, t) {
        return (e = e || 0), (t = t || 500), this._pointerData[e].isOut && this.game.time.now - this._pointerData[e].timeOut < t;
      },
      justPressed: function (e, t) {
        return (e = e || 0), (t = t || 500), this._pointerData[e].isDown && this.downDuration(e) < t;
      },
      justReleased: function (e, t) {
        return (e = e || 0), (t = t || 500), this._pointerData[e].isUp && this.game.time.now - this._pointerData[e].timeUp < t;
      },
      overDuration: function (e) {
        return (e = e || 0), this._pointerData[e].isOver ? this.game.time.now - this._pointerData[e].timeOver : -1;
      },
      downDuration: function (e) {
        return (e = e || 0), this._pointerData[e].isDown ? this.game.time.now - this._pointerData[e].timeDown : -1;
      },
      enableDrag: function (e, t, r, i, s, o) {
        "undefined" == typeof e && (e = !1),
          "undefined" == typeof t && (t = !1),
          "undefined" == typeof r && (r = !1),
          "undefined" == typeof i && (i = 255),
          "undefined" == typeof s && (s = null),
          "undefined" == typeof o && (o = null),
          (this._dragPoint = new n.Point()),
          (this.draggable = !0),
          (this.bringToTop = t),
          (this.dragOffset = new n.Point()),
          (this.dragFromCenter = e),
          (this.pixelPerfect = r),
          (this.pixelPerfectAlpha = i),
          s && (this.boundsRect = s),
          o && (this.boundsSprite = o);
      },
      disableDrag: function () {
        if (this._pointerData) for (var e = 0; 10 > e; e++) this._pointerData[e].isDragged = !1;
        (this.draggable = !1), (this.isDragged = !1), (this._draggedPointerID = -1);
      },
      startDrag: function (e) {
        (this.isDragged = !0),
          (this._draggedPointerID = e.id),
          (this._pointerData[e.id].isDragged = !0),
          this.sprite.fixedToCamera
            ? this.dragFromCenter
              ? (this.sprite.centerOn(e.x, e.y), this._dragPoint.setTo(this.sprite.cameraOffset.x - e.x, this.sprite.cameraOffset.y - e.y))
              : this._dragPoint.setTo(this.sprite.cameraOffset.x - e.x, this.sprite.cameraOffset.y - e.y)
            : this.dragFromCenter
            ? (this.sprite.centerOn(e.x, e.y), this._dragPoint.setTo(this.sprite.x - e.x, this.sprite.y - e.y))
            : this._dragPoint.setTo(this.sprite.x - e.x, this.sprite.y - e.y),
          this.updateDrag(e),
          this.bringToTop && this.sprite.bringToTop(),
          this.sprite.events.onDragStart.dispatch(this.sprite, e);
      },
      stopDrag: function (e) {
        (this.isDragged = !1),
          (this._draggedPointerID = -1),
          (this._pointerData[e.id].isDragged = !1),
          this.snapOnRelease &&
            (this.sprite.fixedToCamera
              ? ((this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX)),
                (this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY)))
              : ((this.sprite.x = Math.round((this.sprite.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX)),
                (this.sprite.y = Math.round((this.sprite.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY)))),
          this.sprite.events.onDragStop.dispatch(this.sprite, e),
          this.sprite.events.onInputUp.dispatch(this.sprite, e),
          this.checkPointerOver(e) === !1 && this._pointerOutHandler(e);
      },
      setDragLock: function (e, t) {
        "undefined" == typeof e && (e = !0), "undefined" == typeof t && (t = !0), (this.allowHorizontalDrag = e), (this.allowVerticalDrag = t);
      },
      enableSnap: function (e, t, n, r) {
        "undefined" == typeof n && (n = !0),
          "undefined" == typeof r && (r = !1),
          "undefined" == typeof snapOffsetX && (snapOffsetX = 0),
          "undefined" == typeof snapOffsetY && (snapOffsetY = 0),
          (this.snapX = e),
          (this.snapY = t),
          (this.snapOffsetX = snapOffsetX),
          (this.snapOffsetY = snapOffsetY),
          (this.snapOnDrag = n),
          (this.snapOnRelease = r);
      },
      disableSnap: function () {
        (this.snapOnDrag = !1), (this.snapOnRelease = !1);
      },
      checkBoundsRect: function () {
        this.sprite.fixedToCamera
          ? (this.sprite.cameraOffset.x < this.boundsRect.left
              ? (this.sprite.cameraOffset.x = this.boundsRect.cameraOffset.x)
              : this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right && (this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width),
            this.sprite.cameraOffset.y < this.boundsRect.top
              ? (this.sprite.cameraOffset.y = this.boundsRect.top)
              : this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height))
          : (this.sprite.x < this.boundsRect.left ? (this.sprite.x = this.boundsRect.x) : this.sprite.x + this.sprite.width > this.boundsRect.right && (this.sprite.x = this.boundsRect.right - this.sprite.width),
            this.sprite.y < this.boundsRect.top ? (this.sprite.y = this.boundsRect.top) : this.sprite.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.y = this.boundsRect.bottom - this.sprite.height));
      },
      checkBoundsSprite: function () {
        this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera
          ? (this.sprite.cameraOffset.x < this.boundsSprite.camerOffset.x
              ? (this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x)
              : this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.camerOffset.x + this.boundsSprite.width && (this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x + this.boundsSprite.width - this.sprite.width),
            this.sprite.cameraOffset.y < this.boundsSprite.camerOffset.y
              ? (this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y)
              : this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.camerOffset.y + this.boundsSprite.height && (this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y + this.boundsSprite.height - this.sprite.height))
          : (this.sprite.x < this.boundsSprite.x
              ? (this.sprite.x = this.boundsSprite.x)
              : this.sprite.x + this.sprite.width > this.boundsSprite.x + this.boundsSprite.width && (this.sprite.x = this.boundsSprite.x + this.boundsSprite.width - this.sprite.width),
            this.sprite.y < this.boundsSprite.y
              ? (this.sprite.y = this.boundsSprite.y)
              : this.sprite.y + this.sprite.height > this.boundsSprite.y + this.boundsSprite.height && (this.sprite.y = this.boundsSprite.y + this.boundsSprite.height - this.sprite.height));
      },
    }),
    (n.InputHandler.prototype.constructor = n.InputHandler),
    (n.Gamepad = function (e) {
      (this.game = e),
        (this._gamepads = [new n.SinglePad(e, this), new n.SinglePad(e, this), new n.SinglePad(e, this), new n.SinglePad(e, this)]),
        (this._gamepadIndexMap = {}),
        (this._rawPads = []),
        (this._active = !1),
        (this.disabled = !1),
        (this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || -1 != navigator.userAgent.indexOf("Firefox/")),
        (this._prevRawGamepadTypes = []),
        (this._prevTimestamps = []),
        (this.callbackContext = this),
        (this.onConnectCallback = null),
        (this.onDisconnectCallback = null),
        (this.onDownCallback = null),
        (this.onUpCallback = null),
        (this.onAxisCallback = null),
        (this.onFloatCallback = null),
        (this._ongamepadconnected = null),
        (this._gamepaddisconnected = null);
    }),
    (n.Gamepad.prototype = {
      addCallbacks: function (e, t) {
        "undefined" != typeof t &&
          ((this.onConnectCallback = "function" == typeof t.onConnect ? t.onConnect : this.onConnectCallback),
          (this.onDisconnectCallback = "function" == typeof t.onDisconnect ? t.onDisconnect : this.onDisconnectCallback),
          (this.onDownCallback = "function" == typeof t.onDown ? t.onDown : this.onDownCallback),
          (this.onUpCallback = "function" == typeof t.onUp ? t.onUp : this.onUpCallback),
          (this.onAxisCallback = "function" == typeof t.onAxis ? t.onAxis : this.onAxisCallback),
          (this.onFloatCallback = "function" == typeof t.onFloat ? t.onFloat : this.onFloatCallback));
      },
      start: function () {
        this._active = !0;
        var e = this;
        (this._ongamepadconnected = function (t) {
          var n = t.gamepad;
          e._rawPads.push(n), e._gamepads[n.index].connect(n);
        }),
          window.addEventListener("gamepadconnected", this._ongamepadconnected, !1),
          (this._ongamepaddisconnected = function (t) {
            var n = t.gamepad;
            for (var r in e._rawPads) e._rawPads[r].index === n.index && e._rawPads.splice(r, 1);
            e._gamepads[n.index].disconnect();
          }),
          window.addEventListener("gamepaddisconnected", this._ongamepaddisconnected, !1);
      },
      update: function () {
        this._pollGamepads();
        for (var e = 0; e < this._gamepads.length; e++) this._gamepads[e]._connected && this._gamepads[e].pollStatus();
      },
      _pollGamepads: function () {
        var e = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) || navigator.webkitGamepads;
        if (e) {
          this._rawPads = [];
          for (var t = !1, n = 0; n < e.length && (typeof e[n] !== this._prevRawGamepadTypes[n] && ((t = !0), (this._prevRawGamepadTypes[n] = typeof e[n])), e[n] && this._rawPads.push(e[n]), 3 !== n); n++);
          if (t) {
            for (var r, i = { rawIndices: {}, padIndices: {} }, s = 0; s < this._gamepads.length; s++)
              if (((r = this._gamepads[s]), r.connected)) for (var o = 0; o < this._rawPads.length; o++) this._rawPads[o].index === r.index && ((i.rawIndices[r.index] = !0), (i.padIndices[s] = !0));
            for (var u = 0; u < this._gamepads.length; u++)
              if (((r = this._gamepads[u]), !i.padIndices[u])) {
                this._rawPads.length < 1 && r.disconnect();
                for (var a = 0; a < this._rawPads.length && !i.padIndices[u]; a++) {
                  var f = this._rawPads[a];
                  if (f) {
                    if (i.rawIndices[f.index]) {
                      r.disconnect();
                      continue;
                    }
                    r.connect(f), (i.rawIndices[f.index] = !0), (i.padIndices[u] = !0);
                  } else r.disconnect();
                }
              }
          }
        }
      },
      setDeadZones: function (e) {
        for (var t = 0; t < this._gamepads.length; t++) this._gamepads[t].deadZone = e;
      },
      stop: function () {
        (this._active = !1), window.removeEventListener("gamepadconnected", this._ongamepadconnected), window.removeEventListener("gamepaddisconnected", this._ongamepaddisconnected);
      },
      reset: function () {
        this.update();
        for (var e = 0; e < this._gamepads.length; e++) this._gamepads[e].reset();
      },
      justPressed: function (e, t) {
        for (var n = 0; n < this._gamepads.length; n++) if (this._gamepads[n].justPressed(e, t) === !0) return !0;
        return !1;
      },
      justReleased: function (e, t) {
        for (var n = 0; n < this._gamepads.length; n++) if (this._gamepads[n].justReleased(e, t) === !0) return !0;
        return !1;
      },
      isDown: function (e) {
        for (var t = 0; t < this._gamepads.length; t++) if (this._gamepads[t].isDown(e) === !0) return !0;
        return !1;
      },
    }),
    (n.Gamepad.prototype.constructor = n.Gamepad),
    Object.defineProperty(n.Gamepad.prototype, "active", {
      get: function () {
        return this._active;
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "supported", {
      get: function () {
        return this._gamepadSupportAvailable;
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "padsConnected", {
      get: function () {
        return this._rawPads.length;
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "pad1", {
      get: function () {
        return this._gamepads[0];
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "pad2", {
      get: function () {
        return this._gamepads[1];
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "pad3", {
      get: function () {
        return this._gamepads[2];
      },
    }),
    Object.defineProperty(n.Gamepad.prototype, "pad4", {
      get: function () {
        return this._gamepads[3];
      },
    }),
    (n.Gamepad.BUTTON_0 = 0),
    (n.Gamepad.BUTTON_1 = 1),
    (n.Gamepad.BUTTON_2 = 2),
    (n.Gamepad.BUTTON_3 = 3),
    (n.Gamepad.BUTTON_4 = 4),
    (n.Gamepad.BUTTON_5 = 5),
    (n.Gamepad.BUTTON_6 = 6),
    (n.Gamepad.BUTTON_7 = 7),
    (n.Gamepad.BUTTON_8 = 8),
    (n.Gamepad.BUTTON_9 = 9),
    (n.Gamepad.BUTTON_10 = 10),
    (n.Gamepad.BUTTON_11 = 11),
    (n.Gamepad.BUTTON_12 = 12),
    (n.Gamepad.BUTTON_13 = 13),
    (n.Gamepad.BUTTON_14 = 14),
    (n.Gamepad.BUTTON_15 = 15),
    (n.Gamepad.AXIS_0 = 0),
    (n.Gamepad.AXIS_1 = 1),
    (n.Gamepad.AXIS_2 = 2),
    (n.Gamepad.AXIS_3 = 3),
    (n.Gamepad.AXIS_4 = 4),
    (n.Gamepad.AXIS_5 = 5),
    (n.Gamepad.AXIS_6 = 6),
    (n.Gamepad.AXIS_7 = 7),
    (n.Gamepad.AXIS_8 = 8),
    (n.Gamepad.AXIS_9 = 9),
    (n.Gamepad.XBOX360_A = 0),
    (n.Gamepad.XBOX360_B = 1),
    (n.Gamepad.XBOX360_X = 2),
    (n.Gamepad.XBOX360_Y = 3),
    (n.Gamepad.XBOX360_LEFT_BUMPER = 4),
    (n.Gamepad.XBOX360_RIGHT_BUMPER = 5),
    (n.Gamepad.XBOX360_LEFT_TRIGGER = 6),
    (n.Gamepad.XBOX360_RIGHT_TRIGGER = 7),
    (n.Gamepad.XBOX360_BACK = 8),
    (n.Gamepad.XBOX360_START = 9),
    (n.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10),
    (n.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11),
    (n.Gamepad.XBOX360_DPAD_LEFT = 14),
    (n.Gamepad.XBOX360_DPAD_RIGHT = 15),
    (n.Gamepad.XBOX360_DPAD_UP = 12),
    (n.Gamepad.XBOX360_DPAD_DOWN = 13),
    (n.Gamepad.XBOX360_STICK_LEFT_X = 0),
    (n.Gamepad.XBOX360_STICK_LEFT_Y = 1),
    (n.Gamepad.XBOX360_STICK_RIGHT_X = 2),
    (n.Gamepad.XBOX360_STICK_RIGHT_Y = 3),
    (n.SinglePad = function (e, t) {
      (this.game = e),
        (this._padParent = t),
        (this._index = null),
        (this._rawPad = null),
        (this._connected = !1),
        (this._prevTimestamp = null),
        (this._rawButtons = []),
        (this._buttons = []),
        (this._axes = []),
        (this._hotkeys = []),
        (this.callbackContext = this),
        (this.onConnectCallback = null),
        (this.onDisconnectCallback = null),
        (this.onDownCallback = null),
        (this.onUpCallback = null),
        (this.onAxisCallback = null),
        (this.onFloatCallback = null),
        (this.deadZone = 0.26);
    }),
    (n.SinglePad.prototype = {
      addCallbacks: function (e, t) {
        "undefined" != typeof t &&
          ((this.onConnectCallback = "function" == typeof t.onConnect ? t.onConnect : this.onConnectCallback),
          (this.onDisconnectCallback = "function" == typeof t.onDisconnect ? t.onDisconnect : this.onDisconnectCallback),
          (this.onDownCallback = "function" == typeof t.onDown ? t.onDown : this.onDownCallback),
          (this.onUpCallback = "function" == typeof t.onUp ? t.onUp : this.onUpCallback),
          (this.onAxisCallback = "function" == typeof t.onAxis ? t.onAxis : this.onAxisCallback),
          (this.onFloatCallback = "function" == typeof t.onFloat ? t.onFloat : this.onFloatCallback));
      },
      addButton: function (e) {
        return (this._hotkeys[e] = new n.GamepadButton(this.game, e)), this._hotkeys[e];
      },
      pollStatus: function () {
        if (!this._rawPad.timestamp || this._rawPad.timestamp != this._prevTimestamp) {
          for (var e = 0; e < this._rawPad.buttons.length; e += 1) {
            var t = this._rawPad.buttons[e];
            this._rawButtons[e] !== t && (1 === t ? this.processButtonDown(e, t) : 0 === t ? this.processButtonUp(e, t) : this.processButtonFloat(e, t), (this._rawButtons[e] = t));
          }
          for (var n = this._rawPad.axes, r = 0; r < n.length; r += 1) {
            var i = n[r];
            this.processAxisChange((i > 0 && i > this.deadZone) || (0 > i && i < -this.deadZone) ? { axis: r, value: i } : { axis: r, value: 0 });
          }
          this._prevTimestamp = this._rawPad.timestamp;
        }
      },
      connect: function (e) {
        var t = !this._connected;
        (this._index = e.index),
          (this._connected = !0),
          (this._rawPad = e),
          (this._rawButtons = e.buttons),
          (this._axes = e.axes),
          t && this._padParent.onConnectCallback && this._padParent.onConnectCallback.call(this._padParent.callbackContext, this._index),
          t && this.onConnectCallback && this.onConnectCallback.call(this.callbackContext);
      },
      disconnect: function () {
        var e = this._connected;
        (this._connected = !1), (this._rawPad = void 0), (this._rawButtons = []), (this._buttons = []);
        var t = this._index;
        (this._index = null),
          e && this._padParent.onDisconnectCallback && this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, t),
          e && this.onDisconnectCallback && this.onDisconnectCallback.call(this.callbackContext);
      },
      processAxisChange: function (e) {
        this.game.input.disabled ||
          this.game.input.gamepad.disabled ||
          (this._axes[e.axis] !== e.value &&
            ((this._axes[e.axis] = e.value), this._padParent.onAxisCallback && this._padParent.onAxisCallback.call(this._padParent.callbackContext, e, this._index), this.onAxisCallback && this.onAxisCallback.call(this.callbackContext, e)));
      },
      processButtonDown: function (e, t) {
        this.game.input.disabled ||
          this.game.input.gamepad.disabled ||
          (this._padParent.onDownCallback && this._padParent.onDownCallback.call(this._padParent.callbackContext, e, t, this._index),
          this.onDownCallback && this.onDownCallback.call(this.callbackContext, e, t),
          this._buttons[e] && this._buttons[e].isDown
            ? (this._buttons[e].duration = this.game.time.now - this._buttons[e].timeDown)
            : this._buttons[e]
            ? ((this._buttons[e].isDown = !0), (this._buttons[e].timeDown = this.game.time.now), (this._buttons[e].duration = 0), (this._buttons[e].value = t))
            : (this._buttons[e] = { isDown: !0, timeDown: this.game.time.now, timeUp: 0, duration: 0, value: t }),
          this._hotkeys[e] && this._hotkeys[e].processButtonDown(t));
      },
      processButtonUp: function (e, t) {
        this.game.input.disabled ||
          this.game.input.gamepad.disabled ||
          (this._padParent.onUpCallback && this._padParent.onUpCallback.call(this._padParent.callbackContext, e, t, this._index),
          this.onUpCallback && this.onUpCallback.call(this.callbackContext, e, t),
          this._hotkeys[e] && this._hotkeys[e].processButtonUp(t),
          this._buttons[e]
            ? ((this._buttons[e].isDown = !1), (this._buttons[e].timeUp = this.game.time.now), (this._buttons[e].value = t))
            : (this._buttons[e] = { isDown: !1, timeDown: this.game.time.now, timeUp: this.game.time.now, duration: 0, value: t }));
      },
      processButtonFloat: function (e, t) {
        this.game.input.disabled ||
          this.game.input.gamepad.disabled ||
          (this._padParent.onFloatCallback && this._padParent.onFloatCallback.call(this._padParent.callbackContext, e, t, this._index),
          this.onFloatCallback && this.onFloatCallback.call(this.callbackContext, e, t),
          this._buttons[e] ? (this._buttons[e].value = t) : (this._buttons[e] = { value: t }),
          this._hotkeys[e] && this._hotkeys[e].processButtonFloat(t));
      },
      axis: function (e) {
        return this._axes[e] ? this._axes[e] : !1;
      },
      isDown: function (e) {
        return this._buttons[e] ? this._buttons[e].isDown : !1;
      },
      justReleased: function (e, t) {
        return "undefined" == typeof t && (t = 250), this._buttons[e] && this._buttons[e].isDown === !1 && this.game.time.now - this._buttons[e].timeUp < t;
      },
      justPressed: function (e, t) {
        return "undefined" == typeof t && (t = 250), this._buttons[e] && this._buttons[e].isDown && this._buttons[e].duration < t;
      },
      buttonValue: function (e) {
        return this._buttons[e] ? this._buttons[e].value : !1;
      },
      reset: function () {
        for (var e = 0; e < this._buttons.length; e++) this._buttons[e] = 0;
        for (var t = 0; t < this._axes.length; t++) this._axes[t] = 0;
      },
    }),
    (n.SinglePad.prototype.constructor = n.SinglePad),
    Object.defineProperty(n.SinglePad.prototype, "connected", {
      get: function () {
        return this._connected;
      },
    }),
    Object.defineProperty(n.SinglePad.prototype, "index", {
      get: function () {
        return this._index;
      },
    }),
    (n.GamepadButton = function (e, t) {
      (this.game = e),
        (this.isDown = !1),
        (this.isUp = !1),
        (this.timeDown = 0),
        (this.duration = 0),
        (this.timeUp = 0),
        (this.repeats = 0),
        (this.value = 0),
        (this.buttonCode = t),
        (this.onDown = new n.Signal()),
        (this.onUp = new n.Signal()),
        (this.onFloat = new n.Signal());
    }),
    (n.GamepadButton.prototype = {
      processButtonDown: function (e) {
        this.isDown
          ? ((this.duration = this.game.time.now - this.timeDown), this.repeats++)
          : ((this.isDown = !0), (this.isUp = !1), (this.timeDown = this.game.time.now), (this.duration = 0), (this.repeats = 0), (this.value = e), this.onDown.dispatch(this, e));
      },
      processButtonUp: function (e) {
        (this.isDown = !1), (this.isUp = !0), (this.timeUp = this.game.time.now), (this.value = e), this.onUp.dispatch(this, e);
      },
      processButtonFloat: function (e) {
        (this.value = e), this.onFloat.dispatch(this, e);
      },
      justPressed: function (e) {
        return "undefined" == typeof e && (e = 250), this.isDown && this.duration < e;
      },
      justReleased: function (e) {
        return "undefined" == typeof e && (e = 250), this.isDown === !1 && this.game.time.now - this.timeUp < e;
      },
    }),
    (n.GamepadButton.prototype.constructor = n.GamepadButton),
    (n.Events = function (e) {
      (this.parent = e),
        (this.onAddedToGroup = new n.Signal()),
        (this.onRemovedFromGroup = new n.Signal()),
        (this.onKilled = new n.Signal()),
        (this.onRevived = new n.Signal()),
        (this.onOutOfBounds = new n.Signal()),
        (this.onInputOver = null),
        (this.onInputOut = null),
        (this.onInputDown = null),
        (this.onInputUp = null),
        (this.onDragStart = null),
        (this.onDragStop = null),
        (this.onAnimationStart = null),
        (this.onAnimationComplete = null),
        (this.onAnimationLoop = null),
        (this.onBeginContact = null),
        (this.onEndContact = null);
    }),
    (n.Events.prototype = {
      destroy: function () {
        (this.parent = null),
          this.onAddedToGroup.dispose(),
          this.onRemovedFromGroup.dispose(),
          this.onKilled.dispose(),
          this.onRevived.dispose(),
          this.onOutOfBounds.dispose(),
          this.onInputOver && (this.onInputOver.dispose(), this.onInputOut.dispose(), this.onInputDown.dispose(), this.onInputUp.dispose(), this.onDragStart.dispose(), this.onDragStop.dispose()),
          this.onAnimationStart && (this.onAnimationStart.dispose(), this.onAnimationComplete.dispose(), this.onAnimationLoop.dispose());
      },
    }),
    (n.Events.prototype.constructor = n.Events),
    (n.GameObjectFactory = function (e) {
      (this.game = e), (this.world = this.game.world);
    }),
    (n.GameObjectFactory.prototype = {
      existing: function (e) {
        return this.world.add(e);
      },
      sprite: function (e, t, n, r, i) {
        return "undefined" == typeof i && (i = this.world), i.create(e, t, n, r);
      },
      child: function (e, t, n, r, i) {
        return e.create(t, n, r, i);
      },
      tween: function (e) {
        return this.game.tweens.create(e);
      },
      group: function (e, t) {
        return new n.Group(this.game, e, t);
      },
      audio: function (e, t, n, r) {
        return this.game.sound.add(e, t, n, r);
      },
      sound: function (e, t, n, r) {
        return this.game.sound.add(e, t, n, r);
      },
      tileSprite: function (e, t, r, i, s, o) {
        return "undefined" == typeof o && (o = this.world), o.add(new n.TileSprite(this.game, e, t, r, i, s));
      },
      text: function (e, t, r, i, s) {
        return "undefined" == typeof s && (s = this.world), s.add(new n.Text(this.game, e, t, r, i));
      },
      button: function (e, t, r, i, s, o, u, a, f, l) {
        return "undefined" == typeof l && (l = this.world), l.add(new n.Button(this.game, e, t, r, i, s, o, u, a, f));
      },
      graphics: function (e, t, r) {
        return "undefined" == typeof r && (r = this.world), r.add(new n.Graphics(this.game, e, t));
      },
      emitter: function (e, t, r) {
        return this.game.particles.add(new n.Particles.Arcade.Emitter(this.game, e, t, r));
      },
      bitmapText: function (e, t, r, i, s) {
        return "undefined" == typeof s && (s = this.world), this.world.add(new n.BitmapText(this.game, e, t, r, i));
      },
      tilemap: function (e, t) {
        return new n.Tilemap(this.game, e, t);
      },
      renderTexture: function (e, t, r) {
        var i = new n.RenderTexture(this.game, e, t, r);
        return this.game.cache.addRenderTexture(e, i), i;
      },
      bitmapData: function (e, t) {
        return new n.BitmapData(this.game, e, t);
      },
      filter: function (e) {
        var t = Array.prototype.splice.call(arguments, 1),
          e = new n.Filter[e](this.game);
        return e.init.apply(e, t), e;
      },
    }),
    (n.GameObjectFactory.prototype.constructor = n.GameObjectFactory),
    (n.BitmapData = function (e, r, i) {
      "undefined" == typeof r && (r = 256),
        "undefined" == typeof i && (i = 256),
        (this.game = e),
        (this.name = ""),
        (this.width = r),
        (this.height = i),
        (this.canvas = n.Canvas.create(r, i)),
        (this.context = this.canvas.getContext("2d")),
        (this.imageData = this.context.getImageData(0, 0, r, i)),
        (this.pixels = this.imageData.data.buffer ? this.imageData.data.buffer : this.imageData.data),
        (this.baseTexture = new t.BaseTexture(this.canvas)),
        (this.texture = new t.Texture(this.baseTexture)),
        (this.textureFrame = new n.Frame(0, 0, 0, r, i, "bitmapData", e.rnd.uuid())),
        (this.type = n.BITMAPDATA),
        (this._dirty = !1);
    }),
    (n.BitmapData.prototype = {
      add: function (e) {
        e.loadTexture(this);
      },
      addTo: function (e) {
        for (var t = 0; t < e.length; t++) e[t].texture && e[t].loadTexture(this);
      },
      clear: function () {
        this.context.clearRect(0, 0, this.width, this.height), (this._dirty = !0);
      },
      refreshBuffer: function () {
        (this.imageData = this.context.getImageData(0, 0, this.width, this.height)), (this.pixels = new Int32Array(this.imageData.data.buffer));
      },
      setPixel32: function (e, t, n, r, i, s) {
        e >= 0 && e <= this.width && t >= 0 && t <= this.height && ((this.pixels[t * this.width + e] = (s << 24) | (i << 16) | (r << 8) | n), this.context.putImageData(this.imageData, 0, 0), (this._dirty = !0));
      },
      setPixel: function (e, t, n, r, i) {
        this.setPixel32(e, t, n, r, i, 255);
      },
      getPixel: function (e, t) {
        return e >= 0 && e <= this.width && t >= 0 && t <= this.height ? this.data32[t * this.width + e] : void 0;
      },
      getPixel32: function (e, t) {
        return e >= 0 && e <= this.width && t >= 0 && t <= this.height ? this.data32[t * this.width + e] : void 0;
      },
      getPixels: function (e) {
        return this.context.getImageData(e.x, e.y, e.width, e.height);
      },
      arc: function (e, t, n, r, i, s) {
        return "undefined" == typeof s && (s = !1), (this._dirty = !0), this.context.arc(e, t, n, r, i, s), this;
      },
      arcTo: function (e, t, n, r, i) {
        return (this._dirty = !0), this.context.arcTo(e, t, n, r, i), this;
      },
      beginFill: function (e) {
        return this.fillStyle(e), this;
      },
      beginLinearGradientFill: function (e, t, n, r, i, s) {
        for (var o = this.createLinearGradient(n, r, i, s), u = 0, a = e.length; a > u; u++) o.addColorStop(t[u], e[u]);
        return this.fillStyle(o), this;
      },
      beginLinearGradientStroke: function (e, t, n, r, i, s) {
        for (var o = this.createLinearGradient(n, r, i, s), u = 0, a = e.length; a > u; u++) o.addColorStop(t[u], e[u]);
        return this.strokeStyle(o), this;
      },
      beginRadialGradientStroke: function (e, t, n, r, i, s, o, u) {
        for (var a = this.createRadialGradient(n, r, i, s, o, u), f = 0, l = e.length; l > f; f++) a.addColorStop(t[f], e[f]);
        return this.strokeStyle(a), this;
      },
      beginPath: function () {
        return this.context.beginPath(), this;
      },
      beginStroke: function (e) {
        return this.strokeStyle(e), this;
      },
      bezierCurveTo: function (e, t, n, r, i, s) {
        return (this._dirty = !0), this.context.bezierCurveTo(e, t, n, r, i, s), this;
      },
      circle: function (e, t, n) {
        return this.arc(e, t, n, 0, 2 * Math.PI), this;
      },
      clearRect: function (e, t, n, r) {
        return (this._dirty = !0), this.context.clearRect(e, t, n, r), this;
      },
      clip: function () {
        return (this._dirty = !0), this.context.clip(), this;
      },
      closePath: function () {
        return (this._dirty = !0), this.context.closePath(), this;
      },
      createLinearGradient: function (e, t, n, r) {
        return this.context.createLinearGradient(e, t, n, r);
      },
      createRadialGradient: function (e, t, n, r, i, s) {
        return this.context.createRadialGradient(e, t, n, r, i, s);
      },
      ellipse: function (e, t, n, r) {
        var i = 0.5522848,
          s = (n / 2) * i,
          o = (r / 2) * i,
          u = e + n,
          a = t + r,
          f = e + n / 2,
          l = t + r / 2;
        return this.moveTo(e, l), this.bezierCurveTo(e, l - o, f - s, t, f, t), this.bezierCurveTo(f + s, t, u, l - o, u, l), this.bezierCurveTo(u, l + o, f + s, a, f, a), this.bezierCurveTo(f - s, a, e, l + o, e, l), this;
      },
      fill: function () {
        return (this._dirty = !0), this.context.fill(), this;
      },
      fillRect: function (e, t, n, r) {
        return (this._dirty = !0), this.context.fillRect(e, t, n, r), this;
      },
      fillStyle: function (e) {
        return (this.context.fillStyle = e), this;
      },
      font: function (e) {
        return (this.context.font = e), this;
      },
      globalAlpha: function (e) {
        return (this.context.globalAlpha = e), this;
      },
      globalCompositeOperation: function (e) {
        return (this.context.globalCompositeOperation = e), this;
      },
      lineCap: function (e) {
        return (this.context.lineCap = e), this;
      },
      lineDashOffset: function (e) {
        return (this.context.lineDashOffset = e), this;
      },
      lineJoin: function (e) {
        return (this.context.lineJoin = e), this;
      },
      lineWidth: function (e) {
        return (this.context.lineWidth = e), this;
      },
      miterLimit: function (e) {
        return (this.context.miterLimit = e), this;
      },
      lineTo: function (e, t) {
        return (this._dirty = !0), this.context.lineTo(e, t), this;
      },
      moveTo: function (e, t) {
        return this.context.moveTo(e, t), this;
      },
      quadraticCurveTo: function (e, t, n, r) {
        return (this._dirty = !0), this.context.quadraticCurveTo(e, t, n, r), this;
      },
      rect: function (e, t, n, r) {
        return (this._dirty = !0), this.context.rect(e, t, n, r), this;
      },
      restore: function () {
        return (this._dirty = !0), this.context.restore(), this;
      },
      rotate: function (e) {
        return (this._dirty = !0), this.context.rotate(e), this;
      },
      setStrokeStyle: function (e, t, n, r, i) {
        return (
          "undefined" == typeof e && (e = 1),
          "undefined" == typeof t && (t = "butt"),
          "undefined" == typeof n && (n = "miter"),
          "undefined" == typeof r && (r = 10),
          (i = !1),
          this.lineWidth(e),
          this.lineCap(t),
          this.lineJoin(n),
          this.miterLimit(r),
          this
        );
      },
      save: function () {
        return (this._dirty = !0), this.context.save(), this;
      },
      scale: function (e, t) {
        return (this._dirty = !0), this.context.scale(e, t), this;
      },
      scrollPathIntoView: function () {
        return (this._dirty = !0), this.context.scrollPathIntoView(), this;
      },
      stroke: function () {
        return (this._dirty = !0), this.context.stroke(), this;
      },
      strokeRect: function (e, t, n, r) {
        return (this._dirty = !0), this.context.strokeRect(e, t, n, r), this;
      },
      strokeStyle: function (e) {
        return (this.context.strokeStyle = e), this;
      },
      render: function () {
        this._dirty && (this.game.renderType == n.WEBGL && t.texturesToUpdate.push(this.baseTexture), (this._dirty = !1));
      },
    }),
    (n.BitmapData.prototype.constructor = n.BitmapData),
    (n.BitmapData.prototype.mt = n.BitmapData.prototype.moveTo),
    (n.BitmapData.prototype.lt = n.BitmapData.prototype.lineTo),
    (n.BitmapData.prototype.at = n.BitmapData.prototype.arcTo),
    (n.BitmapData.prototype.bt = n.BitmapData.prototype.bezierCurveTo),
    (n.BitmapData.prototype.qt = n.BitmapData.prototype.quadraticCurveTo),
    (n.BitmapData.prototype.a = n.BitmapData.prototype.arc),
    (n.BitmapData.prototype.r = n.BitmapData.prototype.rect),
    (n.BitmapData.prototype.cp = n.BitmapData.prototype.closePath),
    (n.BitmapData.prototype.c = n.BitmapData.prototype.clear),
    (n.BitmapData.prototype.f = n.BitmapData.prototype.beginFill),
    (n.BitmapData.prototype.lf = n.BitmapData.prototype.beginLinearGradientFill),
    (n.BitmapData.prototype.rf = n.BitmapData.prototype.beginRadialGradientFill),
    (n.BitmapData.prototype.ef = n.BitmapData.prototype.endFill),
    (n.BitmapData.prototype.ss = n.BitmapData.prototype.setStrokeStyle),
    (n.BitmapData.prototype.s = n.BitmapData.prototype.beginStroke),
    (n.BitmapData.prototype.ls = n.BitmapData.prototype.beginLinearGradientStroke),
    (n.BitmapData.prototype.rs = n.BitmapData.prototype.beginRadialGradientStroke),
    (n.BitmapData.prototype.dr = n.BitmapData.prototype.rect),
    (n.BitmapData.prototype.dc = n.BitmapData.prototype.circle),
    (n.BitmapData.prototype.de = n.BitmapData.prototype.ellipse),
    (n.Sprite = function (e, r, i, s, o) {
      (r = r || 0),
        (i = i || 0),
        (s = s || null),
        (o = o || null),
        (this.game = e),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = n.SPRITE),
        (this.renderOrderID = -1),
        (this.lifespan = 0),
        (this.events = new n.Events(this)),
        (this.animations = new n.AnimationManager(this)),
        (this.input = new n.InputHandler(this)),
        (this.key = s),
        (this.currentFrame = null),
        s instanceof n.RenderTexture
          ? (t.Sprite.call(this, s), (this.currentFrame = this.game.cache.getTextureFrame(s.name)))
          : s instanceof n.BitmapData
          ? (t.Sprite.call(this, s.texture, s.textureFrame), (this.currentFrame = s.textureFrame))
          : s instanceof t.Texture
          ? (t.Sprite.call(this, s), (this.currentFrame = o))
          : (null === s || "undefined" == typeof s ? ((s = "__default"), (this.key = s)) : "string" == typeof s && this.game.cache.checkImageKey(s) === !1 && ((s = "__missing"), (this.key = s)),
            t.Sprite.call(this, t.TextureCache[s]),
            this.game.cache.isSpriteSheet(s)
              ? (this.animations.loadFrameData(this.game.cache.getFrameData(s)), null !== o && ("string" == typeof o ? (this.frameName = o) : (this.frame = o)))
              : (this.currentFrame = this.game.cache.getFrame(s))),
        (this.textureRegion = new n.Rectangle(this.texture.frame.x, this.texture.frame.y, this.texture.frame.width, this.texture.frame.height)),
        (this.anchor = new n.Point()),
        (this.x = r),
        (this.y = i),
        (this.position.x = r),
        (this.position.y = i),
        (this.world = new n.Point(r, i)),
        (this.autoCull = !1),
        (this.scale = new n.Point(1, 1)),
        (this._cache = {
          fresh: !0,
          dirty: !1,
          a00: -1,
          a01: -1,
          a02: -1,
          a10: -1,
          a11: -1,
          a12: -1,
          id: -1,
          i01: -1,
          i10: -1,
          idi: -1,
          left: null,
          right: null,
          top: null,
          bottom: null,
          prevX: r,
          prevY: i,
          x: -1,
          y: -1,
          scaleX: 1,
          scaleY: 1,
          width: this.currentFrame.sourceSizeW,
          height: this.currentFrame.sourceSizeH,
          halfWidth: Math.floor(this.currentFrame.sourceSizeW / 2),
          halfHeight: Math.floor(this.currentFrame.sourceSizeH / 2),
          calcWidth: -1,
          calcHeight: -1,
          frameID: -1,
          frameWidth: this.currentFrame.width,
          frameHeight: this.currentFrame.height,
          cameraVisible: !0,
          cropX: 0,
          cropY: 0,
          cropWidth: this.currentFrame.sourceSizeW,
          cropHeight: this.currentFrame.sourceSizeH,
        }),
        (this.offset = new n.Point()),
        (this.center = new n.Point(r + Math.floor(this._cache.width / 2), i + Math.floor(this._cache.height / 2))),
        (this.topLeft = new n.Point(r, i)),
        (this.topRight = new n.Point(r + this._cache.width, i)),
        (this.bottomRight = new n.Point(r + this._cache.width, i + this._cache.height)),
        (this.bottomLeft = new n.Point(r, i + this._cache.height)),
        (this.bounds = new n.Rectangle(r, i, this._cache.width, this._cache.height)),
        (this.body = new n.Physics.Arcade.Body(this)),
        (this.health = 1),
        (this.inWorld = n.Rectangle.intersects(this.bounds, this.game.world.bounds)),
        (this.inWorldThreshold = 0),
        (this.outOfBoundsKill = !1),
        (this._outOfBoundsFired = !1),
        (this.fixedToCamera = !1),
        (this.cameraOffset = new n.Point(r, i)),
        (this.crop = new n.Rectangle(0, 0, this._cache.width, this._cache.height)),
        (this.cropEnabled = !1),
        (this.debug = !1),
        this.updateCache(),
        this.updateBounds();
    }),
    (n.Sprite.prototype = Object.create(t.Sprite.prototype)),
    (n.Sprite.prototype.constructor = n.Sprite),
    (n.Sprite.prototype.preUpdate = function () {
      return this._cache.fresh
        ? (this.world.setTo(this.parent.position.x + this.x, this.parent.position.y + this.y),
          (this.worldTransform[2] = this.world.x),
          (this.worldTransform[5] = this.world.y),
          (this._cache.fresh = !1),
          void (
            this.body &&
            ((this.body.x = this.world.x - this.anchor.x * this.width + this.body.offset.x), (this.body.y = this.world.y - this.anchor.y * this.height + this.body.offset.y), (this.body.preX = this.body.x), (this.body.preY = this.body.y))
          ))
        : !this.exists || (this.group && !this.group.exists)
        ? ((this.renderOrderID = -1), !1)
        : this.lifespan > 0 && ((this.lifespan -= this.game.time.elapsed), this.lifespan <= 0)
        ? (this.kill(), !1)
        : ((this._cache.dirty = !1),
          this.visible && (this.renderOrderID = this.game.world.currentRenderOrderID++),
          this.updateCache(),
          this.updateAnimation(),
          this.updateCrop(),
          (this._cache.dirty || this.world.x !== this._cache.prevX || this.world.y !== this._cache.prevY) && this.updateBounds(),
          this.body && this.body.preUpdate(),
          !0);
    }),
    (n.Sprite.prototype.updateCache = function () {
      (this._cache.prevX = this.world.x),
        (this._cache.prevY = this.world.y),
        this.fixedToCamera && ((this.x = this.game.camera.view.x + this.cameraOffset.x), (this.y = this.game.camera.view.y + this.cameraOffset.y)),
        this.world.setTo(this.game.camera.x + this.worldTransform[2], this.game.camera.y + this.worldTransform[5]),
        (this.worldTransform[1] != this._cache.i01 || this.worldTransform[3] != this._cache.i10 || this.worldTransform[0] != this._cache.a00 || this.worldTransform[41] != this._cache.a11) &&
          ((this._cache.a00 = this.worldTransform[0]),
          (this._cache.a01 = this.worldTransform[1]),
          (this._cache.a10 = this.worldTransform[3]),
          (this._cache.a11 = this.worldTransform[4]),
          (this._cache.i01 = this.worldTransform[1]),
          (this._cache.i10 = this.worldTransform[3]),
          (this._cache.scaleX = Math.sqrt(this._cache.a00 * this._cache.a00 + this._cache.a01 * this._cache.a01)),
          (this._cache.scaleY = Math.sqrt(this._cache.a10 * this._cache.a10 + this._cache.a11 * this._cache.a11)),
          (this._cache.a01 *= -1),
          (this._cache.a10 *= -1),
          (this._cache.id = 1 / (this._cache.a00 * this._cache.a11 + this._cache.a01 * -this._cache.a10)),
          (this._cache.idi = 1 / (this._cache.a00 * this._cache.a11 + this._cache.i01 * -this._cache.i10)),
          (this._cache.dirty = !0)),
        (this._cache.a02 = this.worldTransform[2]),
        (this._cache.a12 = this.worldTransform[5]);
    }),
    (n.Sprite.prototype.updateAnimation = function () {
      (this.animations.update() || (this.currentFrame && this.currentFrame.uuid != this._cache.frameID)) &&
        ((this._cache.frameID = this.currentFrame.uuid),
        (this._cache.frameWidth = this.texture.frame.width),
        (this._cache.frameHeight = this.texture.frame.height),
        (this._cache.width = this.currentFrame.width),
        (this._cache.height = this.currentFrame.height),
        (this._cache.halfWidth = Math.floor(this._cache.width / 2)),
        (this._cache.halfHeight = Math.floor(this._cache.height / 2)),
        (this._cache.dirty = !0));
    }),
    (n.Sprite.prototype.updateCrop = function () {
      !this.cropEnabled ||
        (this.crop.width == this._cache.cropWidth && this.crop.height == this._cache.cropHeight && this.crop.x == this._cache.cropX && this.crop.y == this._cache.cropY) ||
        (this.crop.floorAll(),
        (this._cache.cropX = this.crop.x),
        (this._cache.cropY = this.crop.y),
        (this._cache.cropWidth = this.crop.width),
        (this._cache.cropHeight = this.crop.height),
        (this.texture.frame = this.crop),
        (this.texture.width = this.crop.width),
        (this.texture.height = this.crop.height),
        (this.texture.updateFrame = !0),
        t.Texture.frameUpdates.push(this.texture));
    }),
    (n.Sprite.prototype.updateBounds = function () {
      this.offset.setTo(this._cache.a02 - this.anchor.x * this.width, this._cache.a12 - this.anchor.y * this.height),
        this.getLocalPosition(this.center, this.offset.x + this.width / 2, this.offset.y + this.height / 2),
        this.getLocalPosition(this.topLeft, this.offset.x, this.offset.y),
        this.getLocalPosition(this.topRight, this.offset.x + this.width, this.offset.y),
        this.getLocalPosition(this.bottomLeft, this.offset.x, this.offset.y + this.height),
        this.getLocalPosition(this.bottomRight, this.offset.x + this.width, this.offset.y + this.height),
        (this._cache.left = n.Math.min(this.topLeft.x, this.topRight.x, this.bottomLeft.x, this.bottomRight.x)),
        (this._cache.right = n.Math.max(this.topLeft.x, this.topRight.x, this.bottomLeft.x, this.bottomRight.x)),
        (this._cache.top = n.Math.min(this.topLeft.y, this.topRight.y, this.bottomLeft.y, this.bottomRight.y)),
        (this._cache.bottom = n.Math.max(this.topLeft.y, this.topRight.y, this.bottomLeft.y, this.bottomRight.y)),
        this.bounds.setTo(this._cache.left, this._cache.top, this._cache.right - this._cache.left, this._cache.bottom - this._cache.top),
        (this.updateFrame = !0),
        this.inWorld === !1
          ? ((this.inWorld = n.Rectangle.intersects(this.bounds, this.game.world.bounds, this.inWorldThreshold)), this.inWorld && (this._outOfBoundsFired = !1))
          : ((this.inWorld = n.Rectangle.intersects(this.bounds, this.game.world.bounds, this.inWorldThreshold)),
            this.inWorld === !1 && (this.events.onOutOfBounds.dispatch(this), (this._outOfBoundsFired = !0), this.outOfBoundsKill && this.kill())),
        (this._cache.cameraVisible = n.Rectangle.intersects(this.game.world.camera.screenView, this.bounds, 0)),
        this.autoCull && (this.renderable = this._cache.cameraVisible);
    }),
    (n.Sprite.prototype.getLocalPosition = function (e, t, n) {
      return (
        (e.x = (this._cache.a11 * this._cache.id * t + -this._cache.a01 * this._cache.id * n + (this._cache.a12 * this._cache.a01 - this._cache.a02 * this._cache.a11) * this._cache.id) * this.scale.x + this._cache.a02),
        (e.y = (this._cache.a00 * this._cache.id * n + -this._cache.a10 * this._cache.id * t + (-this._cache.a12 * this._cache.a00 + this._cache.a02 * this._cache.a10) * this._cache.id) * this.scale.y + this._cache.a12),
        e
      );
    }),
    (n.Sprite.prototype.getLocalUnmodifiedPosition = function (e, t, n) {
      return (
        (e.x = this._cache.a11 * this._cache.idi * t + -this._cache.i01 * this._cache.idi * n + (this._cache.a12 * this._cache.i01 - this._cache.a02 * this._cache.a11) * this._cache.idi + this.anchor.x * this._cache.width),
        (e.y = this._cache.a00 * this._cache.idi * n + -this._cache.i10 * this._cache.idi * t + (-this._cache.a12 * this._cache.a00 + this._cache.a02 * this._cache.i10) * this._cache.idi + this.anchor.y * this._cache.height),
        e
      );
    }),
    (n.Sprite.prototype.resetCrop = function () {
      (this.crop = new n.Rectangle(0, 0, this._cache.width, this._cache.height)), this.texture.setFrame(this.crop), (this.cropEnabled = !1);
    }),
    (n.Sprite.prototype.postUpdate = function () {
      this.key instanceof n.BitmapData && this.key._dirty && this.key.render(),
        this.exists &&
          (this.body && this.body.postUpdate(),
          this.fixedToCamera ? ((this._cache.x = this.game.camera.view.x + this.cameraOffset.x), (this._cache.y = this.game.camera.view.y + this.cameraOffset.y)) : ((this._cache.x = this.x), (this._cache.y = this.y)),
          (this.position.x = this._cache.x),
          (this.position.y = this._cache.y));
    }),
    (n.Sprite.prototype.loadTexture = function (e, r) {
      (this.key = e),
        e instanceof n.RenderTexture
          ? (this.currentFrame = this.game.cache.getTextureFrame(e.name))
          : e instanceof n.BitmapData
          ? (this.setTexture(e.texture), (this.currentFrame = e.textureFrame))
          : e instanceof t.Texture
          ? (this.currentFrame = r)
          : (("undefined" == typeof e || this.game.cache.checkImageKey(e) === !1) && ((e = "__default"), (this.key = e)),
            this.game.cache.isSpriteSheet(e)
              ? (this.animations.loadFrameData(this.game.cache.getFrameData(e)), "undefined" != typeof r && ("string" == typeof r ? (this.frameName = r) : (this.frame = r)))
              : ((this.currentFrame = this.game.cache.getFrame(e)), this.setTexture(t.TextureCache[e])));
    }),
    (n.Sprite.prototype.centerOn = function (e, t) {
      return (
        this.fixedToCamera
          ? ((this.cameraOffset.x = e + (this.cameraOffset.x - this.center.x)), (this.cameraOffset.y = t + (this.cameraOffset.y - this.center.y)))
          : ((this.x = e + (this.x - this.center.x)), (this.y = t + (this.y - this.center.y))),
        this
      );
    }),
    (n.Sprite.prototype.revive = function (e) {
      return "undefined" == typeof e && (e = 1), (this.alive = !0), (this.exists = !0), (this.visible = !0), (this.health = e), this.events && this.events.onRevived.dispatch(this), this;
    }),
    (n.Sprite.prototype.kill = function () {
      return (this.alive = !1), (this.exists = !1), (this.visible = !1), this.events && this.events.onKilled.dispatch(this), this;
    }),
    (n.Sprite.prototype.destroy = function () {
      this.filters && (this.filters = null),
        this.group && this.group.remove(this),
        this.input && this.input.destroy(),
        this.events && this.events.destroy(),
        this.animations && this.animations.destroy(),
        this.body && this.body.destroy(),
        (this.alive = !1),
        (this.exists = !1),
        (this.visible = !1),
        (this.game = null);
    }),
    (n.Sprite.prototype.damage = function (e) {
      return this.alive && ((this.health -= e), this.health < 0 && this.kill()), this;
    }),
    (n.Sprite.prototype.reset = function (e, t, n) {
      return (
        "undefined" == typeof n && (n = 1),
        (this.x = e),
        (this.y = t),
        this.world.setTo(e, t),
        (this.position.x = this.x),
        (this.position.y = this.y),
        (this.alive = !0),
        (this.exists = !0),
        (this.visible = !0),
        (this.renderable = !0),
        (this._outOfBoundsFired = !1),
        (this.health = n),
        this.body && this.body.reset(!1),
        this
      );
    }),
    (n.Sprite.prototype.bringToTop = function () {
      return this.group ? this.group.bringToTop(this) : this.game.world.bringToTop(this), this;
    }),
    (n.Sprite.prototype.play = function (e, t, n, r) {
      return this.animations ? this.animations.play(e, t, n, r) : void 0;
    }),
    Object.defineProperty(n.Sprite.prototype, "deltaX", {
      get: function () {
        return this.world.x - this._cache.prevX;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "deltaY", {
      get: function () {
        return this.world.y - this._cache.prevY;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "angle", {
      get: function () {
        return n.Math.wrapAngle(n.Math.radToDeg(this.rotation));
      },
      set: function (e) {
        this.rotation = n.Math.degToRad(n.Math.wrapAngle(e));
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "frame", {
      get: function () {
        return this.animations.frame;
      },
      set: function (e) {
        this.animations.frame = e;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "frameName", {
      get: function () {
        return this.animations.frameName;
      },
      set: function (e) {
        this.animations.frameName = e;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "inCamera", {
      get: function () {
        return this._cache.cameraVisible;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "worldCenterX", {
      get: function () {
        return this.game.camera.x + this.center.x;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "worldCenterY", {
      get: function () {
        return this.game.camera.y + this.center.y;
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "width", {
      get: function () {
        return this.scale.x * this.currentFrame.width;
      },
      set: function (e) {
        (this.scale.x = e / this.currentFrame.width), (this._cache.scaleX = e / this.currentFrame.width), (this._width = e);
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "height", {
      get: function () {
        return this.scale.y * this.currentFrame.height;
      },
      set: function (e) {
        (this.scale.y = e / this.currentFrame.height), (this._cache.scaleY = e / this.currentFrame.height), (this._height = e);
      },
    }),
    Object.defineProperty(n.Sprite.prototype, "inputEnabled", {
      get: function () {
        return this.input.enabled;
      },
      set: function (e) {
        e ? this.input.enabled === !1 && this.input.start() : this.input.enabled && this.input.stop();
      },
    }),
    (n.TileSprite = function (e, r, i, s, o, u) {
      (r = r || 0),
        (i = i || 0),
        (s = s || 256),
        (o = o || 256),
        (u = u || null),
        n.Sprite.call(this, e, r, i, u),
        (this.texture = t.TextureCache[u]),
        t.TilingSprite.call(this, this.texture, s, o),
        (this.type = n.TILESPRITE),
        (this.tileScale = new n.Point(1, 1)),
        (this.tilePosition = new n.Point(0, 0)),
        (this.body.width = s),
        (this.body.height = o);
    }),
    (n.TileSprite.prototype = n.Utils.extend(!0, t.TilingSprite.prototype, n.Sprite.prototype)),
    (n.TileSprite.prototype.constructor = n.TileSprite),
    Object.defineProperty(n.TileSprite.prototype, "angle", {
      get: function () {
        return n.Math.wrapAngle(n.Math.radToDeg(this.rotation));
      },
      set: function (e) {
        this.rotation = n.Math.degToRad(n.Math.wrapAngle(e));
      },
    }),
    Object.defineProperty(n.TileSprite.prototype, "frame", {
      get: function () {
        return this.animations.frame;
      },
      set: function (e) {
        this.animations.frame = e;
      },
    }),
    Object.defineProperty(n.TileSprite.prototype, "frameName", {
      get: function () {
        return this.animations.frameName;
      },
      set: function (e) {
        this.animations.frameName = e;
      },
    }),
    Object.defineProperty(n.TileSprite.prototype, "inCamera", {
      get: function () {
        return this._cache.cameraVisible;
      },
    }),
    Object.defineProperty(n.TileSprite.prototype, "inputEnabled", {
      get: function () {
        return this.input.enabled;
      },
      set: function (e) {
        e ? this.input.enabled === !1 && this.input.start() : this.input.enabled && this.input.stop();
      },
    }),
    (n.Text = function (e, r, i, s, o) {
      (r = r || 0),
        (i = i || 0),
        (s = s || ""),
        (o = o || ""),
        (this.game = e),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = n.TEXT),
        (this._text = s),
        (this._style = o),
        t.Text.call(this, s, o),
        (this.position.x = this.x = r),
        (this.position.y = this.y = i),
        (this.anchor = new n.Point()),
        (this.scale = new n.Point(1, 1)),
        (this.fixedToCamera = !1),
        (this.cameraOffset = new n.Point(r, i)),
        (this._cache = { dirty: !1, a00: 1, a01: 0, a02: r, a10: 0, a11: 1, a12: i, id: 1, x: -1, y: -1, scaleX: 1, scaleY: 1 }),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.renderable = !0);
    }),
    (n.Text.prototype = Object.create(t.Text.prototype)),
    (n.Text.prototype.constructor = n.Text),
    (n.Text.prototype.update = function () {
      this.exists &&
        (this.fixedToCamera && ((this.x = this.game.camera.view.x + this.cameraOffset.x), (this.y = this.game.camera.view.y + this.cameraOffset.y)),
        (this._cache.dirty = !1),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.position.x != this._cache.x || this.position.y != this._cache.y) && ((this.position.x = this._cache.x), (this.position.y = this._cache.y), (this._cache.dirty = !0)));
    }),
    (n.Text.prototype.destroy = function () {
      this.group && this.group.remove(this), this.canvas.parentNode ? this.canvas.parentNode.removeChild(this.canvas) : ((this.canvas = null), (this.context = null)), (this.exists = !1), (this.group = null);
    }),
    Object.defineProperty(n.Text.prototype, "angle", {
      get: function () {
        return n.Math.radToDeg(this.rotation);
      },
      set: function (e) {
        this.rotation = n.Math.degToRad(e);
      },
    }),
    Object.defineProperty(n.Text.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (e) {
        this.position.x = e;
      },
    }),
    Object.defineProperty(n.Text.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (e) {
        this.position.y = e;
      },
    }),
    Object.defineProperty(n.Text.prototype, "content", {
      get: function () {
        return this._text;
      },
      set: function (e) {
        e !== this._text && ((this._text = e), this.setText(e));
      },
    }),
    Object.defineProperty(n.Text.prototype, "font", {
      get: function () {
        return this._style;
      },
      set: function (e) {
        e !== this._style && ((this._style = e), this.setStyle(e));
      },
    }),
    (n.BitmapText = function (e, r, i, s, o) {
      (r = r || 0),
        (i = i || 0),
        (s = s || ""),
        (o = o || ""),
        (this.game = e),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = n.BITMAPTEXT),
        t.BitmapText.call(this, s, o),
        (this.position.x = r),
        (this.position.y = i),
        (this.anchor = new n.Point()),
        (this.scale = new n.Point(1, 1)),
        (this._cache = { dirty: !1, a00: 1, a01: 0, a02: r, a10: 0, a11: 1, a12: i, id: 1, x: -1, y: -1, scaleX: 1, scaleY: 1 }),
        (this._cache.x = this.x),
        (this._cache.y = this.y);
    }),
    (n.BitmapText.prototype = Object.create(t.BitmapText.prototype)),
    (n.BitmapText.prototype.constructor = n.BitmapText),
    (n.BitmapText.prototype.update = function () {
      this.exists &&
        ((this._cache.dirty = !1),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.position.x != this._cache.x || this.position.y != this._cache.y) && ((this.position.x = this._cache.x), (this.position.y = this._cache.y), (this._cache.dirty = !0)),
        (this.pivot.x = this.anchor.x * this.width),
        (this.pivot.y = this.anchor.y * this.height));
    }),
    (n.BitmapText.prototype.destroy = function () {
      this.group && this.group.remove(this), this.canvas && this.canvas.parentNode ? this.canvas.parentNode.removeChild(this.canvas) : ((this.canvas = null), (this.context = null)), (this.exists = !1), (this.group = null);
    }),
    Object.defineProperty(n.BitmapText.prototype, "angle", {
      get: function () {
        return n.Math.radToDeg(this.rotation);
      },
      set: function (e) {
        this.rotation = n.Math.degToRad(e);
      },
    }),
    Object.defineProperty(n.BitmapText.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (e) {
        this.position.x = e;
      },
    }),
    Object.defineProperty(n.BitmapText.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (e) {
        this.position.y = e;
      },
    }),
    (n.Button = function (e, t, r, i, s, o, u, a, f, l) {
      (t = t || 0),
        (r = r || 0),
        (i = i || null),
        (s = s || null),
        (o = o || this),
        n.Sprite.call(this, e, t, r, i, a),
        (this.type = n.BUTTON),
        (this._onOverFrameName = null),
        (this._onOutFrameName = null),
        (this._onDownFrameName = null),
        (this._onUpFrameName = null),
        (this._onOverFrameID = null),
        (this._onOutFrameID = null),
        (this._onDownFrameID = null),
        (this._onUpFrameID = null),
        (this.onOverSound = null),
        (this.onOutSound = null),
        (this.onDownSound = null),
        (this.onUpSound = null),
        (this.onOverSoundMarker = ""),
        (this.onOutSoundMarker = ""),
        (this.onDownSoundMarker = ""),
        (this.onUpSoundMarker = ""),
        (this.onInputOver = new n.Signal()),
        (this.onInputOut = new n.Signal()),
        (this.onInputDown = new n.Signal()),
        (this.onInputUp = new n.Signal()),
        (this.freezeFrames = !1),
        (this.forceOut = !1),
        this.setFrames(u, a, f, l),
        null !== s && this.onInputUp.add(s, o),
        this.input.start(0, !0),
        this.events.onInputOver.add(this.onInputOverHandler, this),
        this.events.onInputOut.add(this.onInputOutHandler, this),
        this.events.onInputDown.add(this.onInputDownHandler, this),
        this.events.onInputUp.add(this.onInputUpHandler, this);
    }),
    (n.Button.prototype = Object.create(n.Sprite.prototype)),
    (n.Button.prototype = n.Utils.extend(!0, n.Button.prototype, n.Sprite.prototype, t.Sprite.prototype)),
    (n.Button.prototype.constructor = n.Button),
    (n.Button.prototype.clearFrames = function () {
      (this._onOverFrameName = null),
        (this._onOverFrameID = null),
        (this._onOutFrameName = null),
        (this._onOutFrameID = null),
        (this._onDownFrameName = null),
        (this._onDownFrameID = null),
        (this._onUpFrameName = null),
        (this._onUpFrameID = null);
    }),
    (n.Button.prototype.setFrames = function (e, t, n, r) {
      this.clearFrames(),
        null !== e && ("string" == typeof e ? ((this._onOverFrameName = e), this.input.pointerOver() && (this.frameName = e)) : ((this._onOverFrameID = e), this.input.pointerOver() && (this.frame = e))),
        null !== t && ("string" == typeof t ? ((this._onOutFrameName = t), this.input.pointerOver() === !1 && (this.frameName = t)) : ((this._onOutFrameID = t), this.input.pointerOver() === !1 && (this.frame = t))),
        null !== n && ("string" == typeof n ? ((this._onDownFrameName = n), this.input.pointerDown() && (this.frameName = n)) : ((this._onDownFrameID = n), this.input.pointerDown() && (this.frame = n))),
        null !== r && ("string" == typeof r ? ((this._onUpFrameName = r), this.input.pointerUp() && (this.frameName = r)) : ((this._onUpFrameID = r), this.input.pointerUp() && (this.frame = r)));
    }),
    (n.Button.prototype.setSounds = function (e, t, n, r, i, s, o, u) {
      this.setOverSound(e, t), this.setOutSound(i, s), this.setDownSound(n, r), this.setUpSound(o, u);
    }),
    (n.Button.prototype.setOverSound = function (e, t) {
      (this.onOverSound = null), (this.onOverSoundMarker = ""), e instanceof n.Sound && (this.onOverSound = e), "string" == typeof t && (this.onOverSoundMarker = t);
    }),
    (n.Button.prototype.setOutSound = function (e, t) {
      (this.onOutSound = null), (this.onOutSoundMarker = ""), e instanceof n.Sound && (this.onOutSound = e), "string" == typeof t && (this.onOutSoundMarker = t);
    }),
    (n.Button.prototype.setDownSound = function (e, t) {
      (this.onDownSound = null), (this.onDownSoundMarker = ""), e instanceof n.Sound && (this.onDownSound = e), "string" == typeof t && (this.onDownSoundMarker = t);
    }),
    (n.Button.prototype.setUpSound = function (e, t) {
      (this.onUpSound = null), (this.onUpSoundMarker = ""), e instanceof n.Sound && (this.onUpSound = e), "string" == typeof t && (this.onUpSoundMarker = t);
    }),
    (n.Button.prototype.onInputOverHandler = function (e, t) {
      this.freezeFrames === !1 && this.setState(1), this.onOverSound && this.onOverSound.play(this.onOverSoundMarker), this.onInputOver && this.onInputOver.dispatch(this, t);
    }),
    (n.Button.prototype.onInputOutHandler = function (e, t) {
      this.freezeFrames === !1 && this.setState(2), this.onOutSound && this.onOutSound.play(this.onOutSoundMarker), this.onInputOut && this.onInputOut.dispatch(this, t);
    }),
    (n.Button.prototype.onInputDownHandler = function (e, t) {
      this.freezeFrames === !1 && this.setState(3), this.onDownSound && this.onDownSound.play(this.onDownSoundMarker), this.onInputDown && this.onInputDown.dispatch(this, t);
    }),
    (n.Button.prototype.onInputUpHandler = function (e, t, n) {
      this.onUpSound && this.onUpSound.play(this.onUpSoundMarker), this.onInputUp && this.onInputUp.dispatch(this, t, n), this.freezeFrames || this.setState(this.forceOut ? 2 : this._onUpFrameName || this._onUpFrameID ? 4 : n ? 1 : 2);
    }),
    (n.Button.prototype.setState = function (e) {
      1 === e
        ? null != this._onOverFrameName
          ? (this.frameName = this._onOverFrameName)
          : null != this._onOverFrameID && (this.frame = this._onOverFrameID)
        : 2 === e
        ? null != this._onOutFrameName
          ? (this.frameName = this._onOutFrameName)
          : null != this._onOutFrameID && (this.frame = this._onOutFrameID)
        : 3 === e
        ? null != this._onDownFrameName
          ? (this.frameName = this._onDownFrameName)
          : null != this._onDownFrameID && (this.frame = this._onDownFrameID)
        : 4 === e && (null != this._onUpFrameName ? (this.frameName = this._onUpFrameName) : null != this._onUpFrameID && (this.frame = this._onUpFrameID));
    }),
    (n.Graphics = function (e, r, i) {
      (this.game = e), t.Graphics.call(this), (this.type = n.GRAPHICS), (this.position.x = r), (this.position.y = i);
    }),
    (n.Graphics.prototype = Object.create(t.Graphics.prototype)),
    (n.Graphics.prototype.constructor = n.Graphics),
    (n.Graphics.prototype.destroy = function () {
      this.clear(), this.group && this.group.remove(this), (this.game = null);
    }),
    (n.Graphics.prototype.drawPolygon = function (e) {
      this.moveTo(e.points[0].x, e.points[0].y);
      for (var t = 1; t < e.points.length; t += 1) this.lineTo(e.points[t].x, e.points[t].y);
      this.lineTo(e.points[0].x, e.points[0].y);
    }),
    Object.defineProperty(n.Graphics.prototype, "angle", {
      get: function () {
        return n.Math.wrapAngle(n.Math.radToDeg(this.rotation));
      },
      set: function (e) {
        this.rotation = n.Math.degToRad(n.Math.wrapAngle(e));
      },
    }),
    Object.defineProperty(n.Graphics.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (e) {
        this.position.x = e;
      },
    }),
    Object.defineProperty(n.Graphics.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (e) {
        this.position.y = e;
      },
    }),
    (n.RenderTexture = function (e, r, i, s) {
      (this.game = e),
        (this.name = r),
        t.EventTarget.call(this),
        (this.width = i || 100),
        (this.height = s || 100),
        (this.indetityMatrix = t.mat3.create()),
        (this.frame = new t.Rectangle(0, 0, this.width, this.height)),
        (this.type = n.RENDERTEXTURE),
        (this._tempPoint = { x: 0, y: 0 }),
        t.gl ? this.initWebGL() : this.initCanvas();
    }),
    (n.RenderTexture.prototype = Object.create(t.Texture.prototype)),
    (n.RenderTexture.prototype.constructor = t.RenderTexture),
    (n.RenderTexture.prototype.render = function (e, r, i, s) {
      "undefined" == typeof r && (r = !1), "undefined" == typeof i && (i = !1), "undefined" == typeof s && (s = !1), e instanceof n.Group && (e = e._container), t.gl ? this.renderWebGL(e, r, i, s) : this.renderCanvas(e, r, i, s);
    }),
    (n.RenderTexture.prototype.renderXY = function (e, t, n, r, i) {
      (this._tempPoint.x = t), (this._tempPoint.y = n), this.render(e, this._tempPoint, r, i);
    }),
    (n.RenderTexture.prototype.initWebGL = function () {
      var e = t.gl;
      (this.glFramebuffer = e.createFramebuffer()),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        (this.glFramebuffer.width = this.width),
        (this.glFramebuffer.height = this.height),
        (this.baseTexture = new t.BaseTexture()),
        (this.baseTexture.width = this.width),
        (this.baseTexture.height = this.height),
        (this.baseTexture._glTexture = e.createTexture()),
        e.bindTexture(e.TEXTURE_2D, this.baseTexture._glTexture),
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, null),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        (this.baseTexture.isRender = !0),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.baseTexture._glTexture, 0),
        (this.projection = new t.Point(this.width / 2, -this.height / 2));
    }),
    (n.RenderTexture.prototype.resize = function (e, n) {
      if (((this.width = e), (this.height = n), t.gl)) {
        (this.projection.x = this.width / 2), (this.projection.y = -this.height / 2);
        var r = t.gl;
        r.bindTexture(r.TEXTURE_2D, this.baseTexture._glTexture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, this.width, this.height, 0, r.RGBA, r.UNSIGNED_BYTE, null);
      } else (this.frame.width = this.width), (this.frame.height = this.height), this.renderer.resize(this.width, this.height);
    }),
    (n.RenderTexture.prototype.initCanvas = function () {
      (this.renderer = new t.CanvasRenderer(this.width, this.height, null, 0)), (this.baseTexture = new t.BaseTexture(this.renderer.view)), (this.frame = new t.Rectangle(0, 0, this.width, this.height));
    }),
    (n.RenderTexture.prototype.renderWebGL = function (e, n, r) {
      var i = t.gl;
      i.colorMask(!0, !0, !0, !0), i.viewport(0, 0, this.width, this.height), i.bindFramebuffer(i.FRAMEBUFFER, this.glFramebuffer), r && (i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT));
      var s = e.children,
        o = e.worldTransform;
      (e.worldTransform = t.mat3.create()), (e.worldTransform[4] = -1), (e.worldTransform[5] = -2 * this.projection.y), n && ((e.worldTransform[2] = n.x), (e.worldTransform[5] -= n.y)), t.visibleCount++, (e.vcount = t.visibleCount);
      for (var u = 0, a = s.length; a > u; u++) s[u].updateTransform();
      var f = e.__renderGroup;
      f
        ? e == f.root
          ? f.render(this.projection, this.glFramebuffer)
          : f.renderSpecific(e, this.projection, this.glFramebuffer)
        : (this.renderGroup || (this.renderGroup = new t.WebGLRenderGroup(i)), this.renderGroup.setRenderable(e), this.renderGroup.render(this.projection, this.glFramebuffer)),
        (e.worldTransform = o);
    }),
    (n.RenderTexture.prototype.renderCanvas = function (e, n, r, i) {
      var s = e.children;
      (e.worldTransform = t.mat3.create()), n && ((e.worldTransform[2] = n.x), (e.worldTransform[5] = n.y));
      for (var o = 0, u = s.length; u > o; o++) s[o].updateTransform();
      r && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(e, i), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);
    }),
    (n.Canvas = {
      create: function (e, t, n) {
        (e = e || 256), (t = t || 256);
        var r = document.createElement("canvas");
        return "string" == typeof n && (r.id = n), (r.width = e), (r.height = t), (r.style.display = "block"), r;
      },
      getOffset: function (e, t) {
        t = t || new n.Point();
        var r = e.getBoundingClientRect(),
          i = e.clientTop || document.body.clientTop || 0,
          s = e.clientLeft || document.body.clientLeft || 0,
          o = 0,
          u = 0;
        return (
          "CSS1Compat" === document.compatMode
            ? ((o = window.pageYOffset || document.documentElement.scrollTop || e.scrollTop || 0), (u = window.pageXOffset || document.documentElement.scrollLeft || e.scrollLeft || 0))
            : ((o = window.pageYOffset || document.body.scrollTop || e.scrollTop || 0), (u = window.pageXOffset || document.body.scrollLeft || e.scrollLeft || 0)),
          (t.x = r.left + u - s),
          (t.y = r.top + o - i),
          t
        );
      },
      getAspectRatio: function (e) {
        return e.width / e.height;
      },
      setBackgroundColor: function (e, t) {
        return (t = t || "rgb(0,0,0)"), (e.style.backgroundColor = t), e;
      },
      setTouchAction: function (e, t) {
        return (t = t || "none"), (e.style.msTouchAction = t), (e.style["ms-touch-action"] = t), (e.style["touch-action"] = t), e;
      },
      setUserSelect: function (e, t) {
        return (
          (t = t || "none"),
          (e.style["-webkit-touch-callout"] = t),
          (e.style["-webkit-user-select"] = t),
          (e.style["-khtml-user-select"] = t),
          (e.style["-moz-user-select"] = t),
          (e.style["-ms-user-select"] = t),
          (e.style["user-select"] = t),
          (e.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)"),
          e
        );
      },
      addToDOM: function (e, t, n) {
        var r;
        return (
          "undefined" == typeof n && (n = !0),
          t && ("string" == typeof t ? (r = document.getElementById(t)) : "object" == typeof t && 1 === t.nodeType && (r = t)),
          r || (r = document.body),
          n && r.style && (r.style.overflow = "hidden"),
          r.appendChild(e),
          e
        );
      },
      setTransform: function (e, t, n, r, i, s, o) {
        return e.setTransform(r, s, o, i, t, n), e;
      },
      setSmoothingEnabled: function (e, t) {
        return (e.imageSmoothingEnabled = t), (e.mozImageSmoothingEnabled = t), (e.oImageSmoothingEnabled = t), (e.webkitImageSmoothingEnabled = t), (e.msImageSmoothingEnabled = t), e;
      },
      setImageRenderingCrisp: function (e) {
        return (
          (e.style["image-rendering"] = "optimizeSpeed"),
          (e.style["image-rendering"] = "crisp-edges"),
          (e.style["image-rendering"] = "-moz-crisp-edges"),
          (e.style["image-rendering"] = "-webkit-optimize-contrast"),
          (e.style["image-rendering"] = "optimize-contrast"),
          (e.style.msInterpolationMode = "nearest-neighbor"),
          e
        );
      },
      setImageRenderingBicubic: function (e) {
        return (e.style["image-rendering"] = "auto"), (e.style.msInterpolationMode = "bicubic"), e;
      },
    }),
    (n.StageScaleMode = function (e, t, r) {
      (this.game = e),
        (this.width = t),
        (this.height = r),
        (this.minWidth = null),
        (this.maxWidth = null),
        (this.minHeight = null),
        (this.maxHeight = null),
        (this._startHeight = 0),
        (this.forceLandscape = !1),
        (this.forcePortrait = !1),
        (this.incorrectOrientation = !1),
        (this.pageAlignHorizontally = !1),
        (this.pageAlignVertically = !1),
        (this._width = 0),
        (this._height = 0),
        (this.maxIterations = 5),
        (this.orientationSprite = null),
        (this.enterLandscape = new n.Signal()),
        (this.enterPortrait = new n.Signal()),
        (this.enterIncorrectOrientation = new n.Signal()),
        (this.leaveIncorrectOrientation = new n.Signal()),
        (this.hasResized = new n.Signal()),
        (this.orientation = window.orientation ? window.orientation : window.outerWidth > window.outerHeight ? 90 : 0),
        (this.scaleFactor = new n.Point(1, 1)),
        (this.scaleFactorInversed = new n.Point(1, 1)),
        (this.margin = new n.Point(0, 0)),
        (this.aspectRatio = 0),
        (this.event = null);
      var i = this;
      window.addEventListener(
        "orientationchange",
        function (e) {
          return i.checkOrientation(e);
        },
        !1
      ),
        window.addEventListener(
          "resize",
          function (e) {
            return i.checkResize(e);
          },
          !1
        ),
        document.addEventListener(
          "webkitfullscreenchange",
          function (e) {
            return i.fullScreenChange(e);
          },
          !1
        ),
        document.addEventListener(
          "mozfullscreenchange",
          function (e) {
            return i.fullScreenChange(e);
          },
          !1
        ),
        document.addEventListener(
          "fullscreenchange",
          function (e) {
            return i.fullScreenChange(e);
          },
          !1
        );
    }),
    (n.StageScaleMode.EXACT_FIT = 0),
    (n.StageScaleMode.NO_SCALE = 1),
    (n.StageScaleMode.SHOW_ALL = 2),
    (n.StageScaleMode.prototype = {
      startFullScreen: function (e) {
        if (!this.isFullScreen) {
          "undefined" != typeof e && n.Canvas.setSmoothingEnabled(this.game.context, e);
          var t = this.game.canvas;
          (this._width = this.width),
            (this._height = this.height),
            t.requestFullScreen ? t.requestFullScreen() : t.mozRequestFullScreen ? t.parentNode.mozRequestFullScreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      },
      stopFullScreen: function () {
        document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
      },
      fullScreenChange: function (e) {
        (this.event = e),
          this.isFullScreen
            ? this.game.stage.fullScreenScaleMode === n.StageScaleMode.EXACT_FIT
              ? ((this.game.stage.canvas.style.width = "100%"),
                (this.game.stage.canvas.style.height = "100%"),
                this.setMaximum(),
                this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height),
                (this.aspectRatio = this.width / this.height),
                (this.scaleFactor.x = this.game.width / this.width),
                (this.scaleFactor.y = this.game.height / this.height))
              : this.game.stage.fullScreenScaleMode === n.StageScaleMode.SHOW_ALL && (this.game.stage.scale.setShowAll(), this.game.stage.scale.refresh())
            : ((this.game.stage.canvas.style.width = this.game.width + "px"),
              (this.game.stage.canvas.style.height = this.game.height + "px"),
              (this.width = this._width),
              (this.height = this._height),
              this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height),
              (this.aspectRatio = this.width / this.height),
              (this.scaleFactor.x = this.game.width / this.width),
              (this.scaleFactor.y = this.game.height / this.height));
      },
      forceOrientation: function (e, n, r) {
        "undefined" == typeof n && (n = !1),
          (this.forceLandscape = e),
          (this.forcePortrait = n),
          "undefined" != typeof r &&
            ((null == r || this.game.cache.checkImageKey(r) === !1) && (r = "__default"),
            (this.orientationSprite = new t.Sprite(t.TextureCache[r])),
            (this.orientationSprite.anchor.x = 0.5),
            (this.orientationSprite.anchor.y = 0.5),
            (this.orientationSprite.position.x = this.game.width / 2),
            (this.orientationSprite.position.y = this.game.height / 2),
            this.checkOrientationState(),
            this.incorrectOrientation ? ((this.orientationSprite.visible = !0), (this.game.world.visible = !1)) : ((this.orientationSprite.visible = !1), (this.game.world.visible = !0)),
            this.game.stage._stage.addChild(this.orientationSprite));
      },
      checkOrientationState: function () {
        this.incorrectOrientation
          ? ((this.forceLandscape && window.innerWidth > window.innerHeight) || (this.forcePortrait && window.innerHeight > window.innerWidth)) &&
            ((this.game.paused = !1), (this.incorrectOrientation = !1), this.leaveIncorrectOrientation.dispatch(), this.orientationSprite && ((this.orientationSprite.visible = !1), (this.game.world.visible = !0)), this.refresh())
          : ((this.forceLandscape && window.innerWidth < window.innerHeight) || (this.forcePortrait && window.innerHeight < window.innerWidth)) &&
            ((this.game.paused = !0),
            (this.incorrectOrientation = !0),
            this.enterIncorrectOrientation.dispatch(),
            this.orientationSprite && this.orientationSprite.visible === !1 && ((this.orientationSprite.visible = !0), (this.game.world.visible = !1)),
            this.refresh());
      },
      checkOrientation: function (e) {
        (this.event = e),
          (this.orientation = window.orientation),
          this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0),
          this.game.stage.scaleMode !== n.StageScaleMode.NO_SCALE && this.refresh();
      },
      checkResize: function (e) {
        (this.event = e),
          (this.orientation = window.outerWidth > window.outerHeight ? 90 : 0),
          this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0),
          this.game.stage.scaleMode !== n.StageScaleMode.NO_SCALE && this.refresh(),
          this.checkOrientationState();
      },
      refresh: function () {
        if (
          (this.game.device.iPad === !1 && this.game.device.webApp === !1 && this.game.device.desktop === !1 && (this.game.device.android && this.game.device.chrome === !1 ? window.scrollTo(0, 1) : window.scrollTo(0, 0)),
          null == this._check && this.maxIterations > 0)
        ) {
          this._iterations = this.maxIterations;
          var e = this;
          (this._check = window.setInterval(function () {
            return e.setScreenSize();
          }, 10)),
            this.setScreenSize();
        }
      },
      setScreenSize: function (e) {
        "undefined" == typeof e && (e = !1),
          this.game.device.iPad === !1 && this.game.device.webApp === !1 && this.game.device.desktop === !1 && (this.game.device.android && this.game.device.chrome === !1 ? window.scrollTo(0, 1) : window.scrollTo(0, 0)),
          this._iterations--,
          (e || window.innerHeight > this._startHeight || this._iterations < 0) &&
            ((document.documentElement.style.minHeight = window.innerHeight + "px"),
            this.incorrectOrientation === !0
              ? this.setMaximum()
              : this.isFullScreen
              ? this.game.stage.fullScreenScaleMode == n.StageScaleMode.EXACT_FIT
                ? this.setExactFit()
                : this.game.stage.fullScreenScaleMode == n.StageScaleMode.SHOW_ALL && this.setShowAll()
              : this.game.stage.scaleMode == n.StageScaleMode.EXACT_FIT
              ? this.setExactFit()
              : this.game.stage.scaleMode == n.StageScaleMode.SHOW_ALL && this.setShowAll(),
            this.setSize(),
            clearInterval(this._check),
            (this._check = null));
      },
      setSize: function () {
        this.incorrectOrientation === !1 &&
          (this.maxWidth && this.width > this.maxWidth && (this.width = this.maxWidth),
          this.maxHeight && this.height > this.maxHeight && (this.height = this.maxHeight),
          this.minWidth && this.width < this.minWidth && (this.width = this.minWidth),
          this.minHeight && this.height < this.minHeight && (this.height = this.minHeight)),
          (this.game.canvas.style.width = this.width + "px"),
          (this.game.canvas.style.height = this.height + "px"),
          this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height),
          this.pageAlignHorizontally &&
            (this.width < window.innerWidth && this.incorrectOrientation === !1
              ? ((this.margin.x = Math.round((window.innerWidth - this.width) / 2)), (this.game.canvas.style.marginLeft = this.margin.x + "px"))
              : ((this.margin.x = 0), (this.game.canvas.style.marginLeft = "0px"))),
          this.pageAlignVertically &&
            (this.height < window.innerHeight && this.incorrectOrientation === !1
              ? ((this.margin.y = Math.round((window.innerHeight - this.height) / 2)), (this.game.canvas.style.marginTop = this.margin.y + "px"))
              : ((this.margin.y = 0), (this.game.canvas.style.marginTop = "0px"))),
          n.Canvas.getOffset(this.game.canvas, this.game.stage.offset),
          (this.aspectRatio = this.width / this.height),
          (this.scaleFactor.x = this.game.width / this.width),
          (this.scaleFactor.y = this.game.height / this.height),
          (this.scaleFactorInversed.x = this.width / this.game.width),
          (this.scaleFactorInversed.y = this.height / this.game.height),
          this.hasResized.dispatch(this.width, this.height),
          this.checkOrientationState();
      },
      setMaximum: function () {
        (this.width = window.innerWidth), (this.height = window.innerHeight);
      },
      setShowAll: function () {
        var e = Math.min(window.innerHeight / this.game.height, window.innerWidth / this.game.width);
        (this.width = Math.round(this.game.width * e)), (this.height = Math.round(this.game.height * e));
      },
      setExactFit: function () {
        var e = window.innerWidth,
          t = window.innerHeight;
        (this.width = this.maxWidth && e > this.maxWidth ? this.maxWidth : e), (this.height = this.maxHeight && t > this.maxHeight ? this.maxHeight : t);
      },
    }),
    (n.StageScaleMode.prototype.constructor = n.StageScaleMode),
    Object.defineProperty(n.StageScaleMode.prototype, "isFullScreen", {
      get: function () {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
      },
    }),
    Object.defineProperty(n.StageScaleMode.prototype, "isPortrait", {
      get: function () {
        return 0 === this.orientation || 180 == this.orientation;
      },
    }),
    Object.defineProperty(n.StageScaleMode.prototype, "isLandscape", {
      get: function () {
        return 90 === this.orientation || -90 === this.orientation;
      },
    }),
    (n.Device = function () {
      (this.patchAndroidClearRectBug = !1),
        (this.desktop = !1),
        (this.iOS = !1),
        (this.cocoonJS = !1),
        (this.ejecta = !1),
        (this.android = !1),
        (this.chromeOS = !1),
        (this.linux = !1),
        (this.macOS = !1),
        (this.windows = !1),
        (this.canvas = !1),
        (this.file = !1),
        (this.fileSystem = !1),
        (this.localStorage = !1),
        (this.webGL = !1),
        (this.worker = !1),
        (this.touch = !1),
        (this.mspointer = !1),
        (this.css3D = !1),
        (this.pointerLock = !1),
        (this.typedArray = !1),
        (this.vibration = !1),
        (this.quirksMode = !1),
        (this.arora = !1),
        (this.chrome = !1),
        (this.epiphany = !1),
        (this.firefox = !1),
        (this.ie = !1),
        (this.ieVersion = 0),
        (this.trident = !1),
        (this.tridentVersion = 0),
        (this.mobileSafari = !1),
        (this.midori = !1),
        (this.opera = !1),
        (this.safari = !1),
        (this.webApp = !1),
        (this.silk = !1),
        (this.audioData = !1),
        (this.webAudio = !1),
        (this.ogg = !1),
        (this.opus = !1),
        (this.mp3 = !1),
        (this.wav = !1),
        (this.m4a = !1),
        (this.webm = !1),
        (this.iPhone = !1),
        (this.iPhone4 = !1),
        (this.iPad = !1),
        (this.pixelRatio = 0),
        (this.littleEndian = !1),
        this._checkAudio(),
        this._checkBrowser(),
        this._checkCSS3D(),
        this._checkDevice(),
        this._checkFeatures(),
        this._checkOS();
    }),
    (n.Device.prototype = {
      _checkOS: function () {
        var e = navigator.userAgent;
        /Android/.test(e)
          ? (this.android = !0)
          : /CrOS/.test(e)
          ? (this.chromeOS = !0)
          : /iP[ao]d|iPhone/i.test(e)
          ? (this.iOS = !0)
          : /Linux/.test(e)
          ? (this.linux = !0)
          : /Mac OS/.test(e)
          ? (this.macOS = !0)
          : /Windows/.test(e) && (this.windows = !0),
          (this.windows || this.macOS || (this.linux && this.silk === !1)) && (this.desktop = !0);
      },
      _checkFeatures: function () {
        this.canvas = !!window.CanvasRenderingContext2D;
        try {
          this.localStorage = !!localStorage.getItem;
        } catch (e) {
          this.localStorage = !1;
        }
        (this.file = !!(window.File && window.FileReader && window.FileList && window.Blob)),
          (this.fileSystem = !!window.requestFileSystem),
          (this.webGL = (function () {
            try {
              var e = document.createElement("canvas");
              return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"));
            } catch (t) {
              return !1;
            }
          })()),
          (this.webGL = null === this.webGL || this.webGL === !1 ? !1 : !0),
          (this.worker = !!window.Worker),
          ("ontouchstart" in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1)) && (this.touch = !0),
          (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (this.mspointer = !0),
          (this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document),
          (this.quirksMode = "CSS1Compat" === document.compatMode ? !1 : !0);
      },
      _checkBrowser: function () {
        var e = navigator.userAgent;
        /Arora/.test(e)
          ? (this.arora = !0)
          : /Chrome/.test(e)
          ? (this.chrome = !0)
          : /Epiphany/.test(e)
          ? (this.epiphany = !0)
          : /Firefox/.test(e)
          ? (this.firefox = !0)
          : /Mobile Safari/.test(e)
          ? (this.mobileSafari = !0)
          : /MSIE (\d+\.\d+);/.test(e)
          ? ((this.ie = !0), (this.ieVersion = parseInt(RegExp.$1, 10)))
          : /Midori/.test(e)
          ? (this.midori = !0)
          : /Opera/.test(e)
          ? (this.opera = !0)
          : /Safari/.test(e)
          ? (this.safari = !0)
          : /Silk/.test(e)
          ? (this.silk = !0)
          : /Trident\/(\d+\.\d+);/.test(e) && ((this.ie = !0), (this.trident = !0), (this.tridentVersion = parseInt(RegExp.$1, 10))),
          navigator.standalone && (this.webApp = !0),
          navigator.isCocoonJS && (this.cocoonJS = !0),
          "undefined" != typeof window.ejecta && (this.ejecta = !0);
      },
      _checkAudio: function () {
        (this.audioData = !!window.Audio), (this.webAudio = !(!window.webkitAudioContext && !window.AudioContext));
        var e = document.createElement("audio"),
          t = !1;
        try {
          (t = !!e.canPlayType) &&
            (e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0),
            e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0),
            e.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0),
            e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0),
            (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0),
            e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0));
        } catch (n) {}
      },
      _checkDevice: function () {
        (this.pixelRatio = window.devicePixelRatio || 1),
          (this.iPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone")),
          (this.iPhone4 = 2 == this.pixelRatio && this.iPhone),
          (this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad")),
          "undefined" != typeof Int8Array ? ((this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0), (this.typedArray = !0)) : ((this.littleEndian = !1), (this.typedArray = !1)),
          (navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate),
          navigator.vibrate && (this.vibration = !0);
      },
      _checkCSS3D: function () {
        var e,
          t = document.createElement("p"),
          n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
        document.body.insertBefore(t, null);
        for (var r in n) void 0 !== t.style[r] && ((t.style[r] = "translate3d(1px,1px,1px)"), (e = window.getComputedStyle(t).getPropertyValue(n[r])));
        document.body.removeChild(t), (this.css3D = void 0 !== e && e.length > 0 && "none" !== e);
      },
      canPlayAudio: function (e) {
        return "mp3" == e && this.mp3 ? !0 : "ogg" == e && (this.ogg || this.opus) ? !0 : "m4a" == e && this.m4a ? !0 : "wav" == e && this.wav ? !0 : "webm" == e && this.webm ? !0 : !1;
      },
      isConsoleOpen: function () {
        return window.console && window.console.firebug ? !0 : window.console ? (console.profile(), console.profileEnd(), console.clear && console.clear(), console.profiles.length > 0) : !1;
      },
    }),
    (n.Device.prototype.constructor = n.Device),
    (n.RequestAnimationFrame = function (e) {
      (this.game = e), (this.isRunning = !1);
      for (var t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; n++)
        (window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"]);
      (this._isSetTimeOut = !1), (this._onLoop = null), (this._timeOutID = null);
    }),
    (n.RequestAnimationFrame.prototype = {
      start: function () {
        this.isRunning = !0;
        var e = this;
        window.requestAnimationFrame
          ? ((this._isSetTimeOut = !1),
            (this._onLoop = function (t) {
              return e.updateRAF(t);
            }),
            (this._timeOutID = window.requestAnimationFrame(this._onLoop)))
          : ((this._isSetTimeOut = !0),
            (this._onLoop = function () {
              return e.updateSetTimeout();
            }),
            (this._timeOutID = window.setTimeout(this._onLoop, 0)));
      },
      updateRAF: function (e) {
        this.game.update(e), (this._timeOutID = window.requestAnimationFrame(this._onLoop));
      },
      updateSetTimeout: function () {
        this.game.update(Date.now()), (this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall));
      },
      stop: function () {
        this._isSetTimeOut ? clearTimeout(this._timeOutID) : window.cancelAnimationFrame(this._timeOutID), (this.isRunning = !1);
      },
      isSetTimeOut: function () {
        return this._isSetTimeOut;
      },
      isRAF: function () {
        return this._isSetTimeOut === !1;
      },
    }),
    (n.RequestAnimationFrame.prototype.constructor = n.RequestAnimationFrame),
    (n.RandomDataGenerator = function (e) {
      "undefined" == typeof e && (e = []), (this.c = 1), (this.s0 = 0), (this.s1 = 0), (this.s2 = 0), this.sow(e);
    }),
    (n.RandomDataGenerator.prototype = {
      rnd: function () {
        var e = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
        return (this.c = 0 | e), (this.s0 = this.s1), (this.s1 = this.s2), (this.s2 = e - this.c), this.s2;
      },
      sow: function (e) {
        "undefined" == typeof e && (e = []), (this.s0 = this.hash(" ")), (this.s1 = this.hash(this.s0)), (this.s2 = this.hash(this.s1)), (this.c = 1);
        for (var t, n = 0; (t = e[n++]); ) (this.s0 -= this.hash(t)), (this.s0 += ~~(this.s0 < 0)), (this.s1 -= this.hash(t)), (this.s1 += ~~(this.s1 < 0)), (this.s2 -= this.hash(t)), (this.s2 += ~~(this.s2 < 0));
      },
      hash: function (e) {
        var t, n, r;
        for (r = 4022871197, e = e.toString(), n = 0; n < e.length; n++) (r += e.charCodeAt(n)), (t = 0.02519603282416938 * r), (r = t >>> 0), (t -= r), (t *= r), (r = t >>> 0), (t -= r), (r += 4294967296 * t);
        return 2.3283064365386963e-10 * (r >>> 0);
      },
      integer: function () {
        return 4294967296 * this.rnd.apply(this);
      },
      frac: function () {
        return this.rnd.apply(this) + 1.1102230246251565e-16 * ((2097152 * this.rnd.apply(this)) | 0);
      },
      real: function () {
        return this.integer() + this.frac();
      },
      integerInRange: function (e, t) {
        return Math.floor(this.realInRange(e, t));
      },
      realInRange: function (e, t) {
        return this.frac() * (t - e) + e;
      },
      normal: function () {
        return 1 - 2 * this.frac();
      },
      uuid: function () {
        var e = "",
          t = "";
        for (t = e = ""; e++ < 36; t += ~e % 5 | ((3 * e) & 4) ? (15 ^ e ? 8 ^ (this.frac() * (20 ^ e ? 16 : 4)) : 4).toString(16) : "-");
        return t;
      },
      pick: function (e) {
        return e[this.integerInRange(0, e.length)];
      },
      weightedPick: function (e) {
        return e[~~(Math.pow(this.frac(), 2) * e.length)];
      },
      timestamp: function (e, t) {
        return this.realInRange(e || 9466848e5, t || 1577862e6);
      },
      angle: function () {
        return this.integerInRange(-180, 180);
      },
    }),
    (n.RandomDataGenerator.prototype.constructor = n.RandomDataGenerator),
    (n.Math = {
      PI2: 2 * Math.PI,
      fuzzyEqual: function (e, t, n) {
        return "undefined" == typeof n && (n = 1e-4), Math.abs(e - t) < n;
      },
      fuzzyLessThan: function (e, t, n) {
        return "undefined" == typeof n && (n = 1e-4), t + n > e;
      },
      fuzzyGreaterThan: function (e, t, n) {
        return "undefined" == typeof n && (n = 1e-4), e > t - n;
      },
      fuzzyCeil: function (e, t) {
        return "undefined" == typeof t && (t = 1e-4), Math.ceil(e - t);
      },
      fuzzyFloor: function (e, t) {
        return "undefined" == typeof t && (t = 1e-4), Math.floor(e + t);
      },
      average: function () {
        for (var e = [], t = 0; t < arguments.length - 0; t++) e[t] = arguments[t + 0];
        for (var n = 0, r = 0; r < e.length; r++) n += e[r];
        return n / e.length;
      },
      truncate: function (e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      },
      shear: function (e) {
        return e % 1;
      },
      snapTo: function (e, t, n) {
        return "undefined" == typeof n && (n = 0), 0 === t ? e : ((e -= n), (e = t * Math.round(e / t)), n + e);
      },
      snapToFloor: function (e, t, n) {
        return "undefined" == typeof n && (n = 0), 0 === t ? e : ((e -= n), (e = t * Math.floor(e / t)), n + e);
      },
      snapToCeil: function (e, t, n) {
        return "undefined" == typeof n && (n = 0), 0 === t ? e : ((e -= n), (e = t * Math.ceil(e / t)), n + e);
      },
      snapToInArray: function (e, t, n) {
        if (("undefined" == typeof n && (n = !0), n && t.sort(), e < t[0])) return t[0];
        for (var r = 1; t[r] < e; ) r++;
        var i = t[r - 1],
          s = r < t.length ? t[r] : Number.POSITIVE_INFINITY;
        return e - i >= s - e ? s : i;
      },
      roundTo: function (e, t, n) {
        "undefined" == typeof t && (t = 0), "undefined" == typeof n && (n = 10);
        var r = Math.pow(n, -t);
        return Math.round(e * r) / r;
      },
      floorTo: function (e, t, n) {
        "undefined" == typeof t && (t = 0), "undefined" == typeof n && (n = 10);
        var r = Math.pow(n, -t);
        return Math.floor(e * r) / r;
      },
      ceilTo: function (e, t, n) {
        "undefined" == typeof t && (t = 0), "undefined" == typeof n && (n = 10);
        var r = Math.pow(n, -t);
        return Math.ceil(e * r) / r;
      },
      interpolateFloat: function (e, t, n) {
        return (t - e) * n + e;
      },
      angleBetween: function (e, t, n, r) {
        return Math.atan2(r - t, n - e);
      },
      reverseAngle: function (e) {
        return this.normalizeAngle(e + Math.PI, !0);
      },
      normalizeAngle: function (e) {
        return (e %= 2 * Math.PI), e >= 0 ? e : e + 2 * Math.PI;
      },
      normalizeLatitude: function (e) {
        return Math.max(-90, Math.min(90, e));
      },
      normalizeLongitude: function (e) {
        return e % 360 == 180 ? 180 : ((e %= 360), -180 > e ? e + 360 : e > 180 ? e - 360 : e);
      },
      nearestAngleBetween: function (e, t, n) {
        "undefined" == typeof n && (n = !0);
        var r = n ? Math.PI : 180;
        return (e = this.normalizeAngle(e, n)), (t = this.normalizeAngle(t, n)), -r / 2 > e && t > r / 2 && (e += 2 * r), -r / 2 > t && e > r / 2 && (t += 2 * r), t - e;
      },
      interpolateAngles: function (e, t, n, r, i) {
        return (
          "undefined" == typeof r && (r = !0), "undefined" == typeof i && (i = null), (e = this.normalizeAngle(e, r)), (t = this.normalizeAngleToAnother(t, e, r)), "function" == typeof i ? i(n, e, t - e, 1) : this.interpolateFloat(e, t, n)
        );
      },
      chanceRoll: function (e) {
        return "undefined" == typeof e && (e = 50), 0 >= e ? !1 : e >= 100 ? !0 : 100 * Math.random() >= e ? !1 : !0;
      },
      numberArray: function (e, t) {
        for (var n = [], r = e; t >= r; r++) n.push(r);
        return n;
      },
      maxAdd: function (e, t, n) {
        return (e += t), e > n && (e = n), e;
      },
      minSub: function (e, t, n) {
        return (e -= t), n > e && (e = n), e;
      },
      wrap: function (e, t, n) {
        var r = n - t;
        if (0 >= r) return 0;
        var i = (e - t) % r;
        return 0 > i && (i += r), i + t;
      },
      wrapValue: function (e, t, n) {
        var r;
        return (e = Math.abs(e)), (t = Math.abs(t)), (n = Math.abs(n)), (r = (e + t) % n);
      },
      randomSign: function () {
        return Math.random() > 0.5 ? 1 : -1;
      },
      isOdd: function (e) {
        return 1 & e;
      },
      isEven: function (e) {
        return 1 & e ? !1 : !0;
      },
      max: function () {
        for (var e = 1, t = 0, n = arguments.length; n > e; e++) arguments[t] < arguments[e] && (t = e);
        return arguments[t];
      },
      min: function () {
        if (1 === arguments.length && "object" == typeof arguments[0]) var e = arguments[0];
        else var e = arguments;
        for (var t = 1, n = 0, r = e.length; r > t; t++) e[t] < e[n] && (n = t);
        return e[n];
      },
      max: function () {
        if (1 === arguments.length && "object" == typeof arguments[0]) var e = arguments[0];
        else var e = arguments;
        for (var t = 1, n = 0, r = e.length; r > t; t++) e[t] > e[n] && (n = t);
        return e[n];
      },
      minProperty: function (e) {
        if (2 === arguments.length && "object" == typeof arguments[1]) var t = arguments[1];
        else var t = arguments.slice(1);
        for (var n = 1, r = 0, i = t.length; i > n; n++) t[n][e] < t[r][e] && (r = n);
        return t[r][e];
      },
      maxProperty: function (e) {
        if (2 === arguments.length && "object" == typeof arguments[1]) var t = arguments[1];
        else var t = arguments.slice(1);
        for (var n = 1, r = 0, i = t.length; i > n; n++) t[n][e] > t[r][e] && (r = n);
        return t[r][e];
      },
      wrapAngle: function (e) {
        return this.wrap(e, -180, 180);
      },
      angleLimit: function (e, t, n) {
        var r = e;
        return e > n ? (r = n) : t > e && (r = t), r;
      },
      linearInterpolation: function (e, t) {
        var n = e.length - 1,
          r = n * t,
          i = Math.floor(r);
        return 0 > t ? this.linear(e[0], e[1], r) : t > 1 ? this.linear(e[n], e[n - 1], n - r) : this.linear(e[i], e[i + 1 > n ? n : i + 1], r - i);
      },
      bezierInterpolation: function (e, t) {
        for (var n = 0, r = e.length - 1, i = 0; r >= i; i++) n += Math.pow(1 - t, r - i) * Math.pow(t, i) * e[i] * this.bernstein(r, i);
        return n;
      },
      catmullRomInterpolation: function (e, t) {
        var n = e.length - 1,
          r = n * t,
          i = Math.floor(r);
        return e[0] === e[n]
          ? (0 > t && (i = Math.floor((r = n * (1 + t)))), this.catmullRom(e[(i - 1 + n) % n], e[i], e[(i + 1) % n], e[(i + 2) % n], r - i))
          : 0 > t
          ? e[0] - (this.catmullRom(e[0], e[0], e[1], e[1], -r) - e[0])
          : t > 1
          ? e[n] - (this.catmullRom(e[n], e[n], e[n - 1], e[n - 1], r - n) - e[n])
          : this.catmullRom(e[i ? i - 1 : 0], e[i], e[i + 1 > n ? n : i + 1], e[i + 2 > n ? n : i + 2], r - i);
      },
      linear: function (e, t, n) {
        return (t - e) * n + e;
      },
      bernstein: function (e, t) {
        return this.factorial(e) / this.factorial(t) / this.factorial(e - t);
      },
      catmullRom: function (e, t, n, r, i) {
        var s = 0.5 * (n - e),
          o = 0.5 * (r - t),
          u = i * i,
          a = i * u;
        return (2 * t - 2 * n + s + o) * a + (-3 * t + 3 * n - 2 * s - o) * u + s * i + t;
      },
      difference: function (e, t) {
        return Math.abs(e - t);
      },
      getRandom: function (e, t, n) {
        if (("undefined" == typeof t && (t = 0), "undefined" == typeof n && (n = 0), null != e)) {
          var r = n;
          if (((0 === r || r > e.length - t) && (r = e.length - t), r > 0)) return e[t + Math.floor(Math.random() * r)];
        }
        return null;
      },
      floor: function (e) {
        var t = 0 | e;
        return e > 0 ? t : t != e ? t - 1 : t;
      },
      ceil: function (e) {
        var t = 0 | e;
        return e > 0 ? (t != e ? t + 1 : t) : t;
      },
      sinCosGenerator: function (e, t, n, r) {
        "undefined" == typeof t && (t = 1), "undefined" == typeof n && (n = 1), "undefined" == typeof r && (r = 1);
        for (var i = t, s = n, o = (r * Math.PI) / e, u = [], a = [], f = 0; e > f; f++) (s -= i * o), (i += s * o), (u[f] = s), (a[f] = i);
        return { sin: a, cos: u, length: e };
      },
      shift: function (e) {
        var t = e.shift();
        return e.push(t), t;
      },
      shuffleArray: function (e) {
        for (var t = e.length - 1; t > 0; t--) {
          var n = Math.floor(Math.random() * (t + 1)),
            r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        return e;
      },
      distance: function (e, t, n, r) {
        var i = e - n,
          s = t - r;
        return Math.sqrt(i * i + s * s);
      },
      distancePow: function (e, t, n, r, i) {
        return "undefined" == typeof i && (i = 2), Math.sqrt(Math.pow(n - e, i) + Math.pow(r - t, i));
      },
      distanceRounded: function (e, t, r, i) {
        return Math.round(n.Math.distance(e, t, r, i));
      },
      clamp: function (e, t, n) {
        return t > e ? t : e > n ? n : e;
      },
      clampBottom: function (e, t) {
        return t > e ? t : e;
      },
      within: function (e, t, n) {
        return Math.abs(e - t) <= n;
      },
      mapLinear: function (e, t, n, r, i) {
        return r + ((e - t) * (i - r)) / (n - t);
      },
      smoothstep: function (e, t, n) {
        return t >= e ? 0 : e >= n ? 1 : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e));
      },
      smootherstep: function (e, t, n) {
        return t >= e ? 0 : e >= n ? 1 : ((e = (e - t) / (n - t)), e * e * e * (e * (6 * e - 15) + 10));
      },
      sign: function (e) {
        return 0 > e ? -1 : e > 0 ? 1 : 0;
      },
      degToRad: (function () {
        var e = Math.PI / 180;
        return function (t) {
          return t * e;
        };
      })(),
      radToDeg: (function () {
        var e = 180 / Math.PI;
        return function (t) {
          return t * e;
        };
      })(),
    }),
    (n.QuadTree = function (e, t, n, r, i, s, o) {
      (this.maxObjects = i || 10),
        (this.maxLevels = s || 4),
        (this.level = o || 0),
        (this.bounds = { x: Math.round(e), y: Math.round(t), width: n, height: r, subWidth: Math.floor(n / 2), subHeight: Math.floor(r / 2), right: Math.round(e) + Math.floor(n / 2), bottom: Math.round(t) + Math.floor(r / 2) }),
        (this.objects = []),
        (this.nodes = []);
    }),
    (n.QuadTree.prototype = {
      populate: function (e) {
        e.forEach(this.populateHandler, this, !0);
      },
      populateHandler: function (e) {
        e.body && e.body.checkCollision.none === !1 && e.alive && this.insert(e.body);
      },
      split: function () {
        this.level++,
          (this.nodes[0] = new n.QuadTree(this.bounds.right, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level)),
          (this.nodes[1] = new n.QuadTree(this.bounds.x, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level)),
          (this.nodes[2] = new n.QuadTree(this.bounds.x, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level)),
          (this.nodes[3] = new n.QuadTree(this.bounds.right, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level));
      },
      insert: function (e) {
        var t,
          n = 0;
        if (null != this.nodes[0] && ((t = this.getIndex(e)), -1 !== t)) return void this.nodes[t].insert(e);
        if ((this.objects.push(e), this.objects.length > this.maxObjects && this.level < this.maxLevels))
          for (null == this.nodes[0] && this.split(); n < this.objects.length; ) (t = this.getIndex(this.objects[n])), -1 !== t ? this.nodes[t].insert(this.objects.splice(n, 1)[0]) : n++;
      },
      getIndex: function (e) {
        var t = -1;
        return (
          e.x < this.bounds.right && e.right < this.bounds.right
            ? e.y < this.bounds.bottom && e.bottom < this.bounds.bottom
              ? (t = 1)
              : e.y > this.bounds.bottom && (t = 2)
            : e.x > this.bounds.right && (e.y < this.bounds.bottom && e.bottom < this.bounds.bottom ? (t = 0) : e.y > this.bounds.bottom && (t = 3)),
          t
        );
      },
      retrieve: function (e) {
        var t = this.objects;
        return (
          (e.body.quadTreeIndex = this.getIndex(e.body)),
          this.nodes[0] &&
            (-1 !== e.body.quadTreeIndex
              ? (t = t.concat(this.nodes[e.body.quadTreeIndex].retrieve(e)))
              : ((t = t.concat(this.nodes[0].retrieve(e))), (t = t.concat(this.nodes[1].retrieve(e))), (t = t.concat(this.nodes[2].retrieve(e))), (t = t.concat(this.nodes[3].retrieve(e))))),
          t
        );
      },
      clear: function () {
        this.objects = [];
        for (var e = 0, t = this.nodes.length; t > e; e++) this.nodes[e] && (this.nodes[e].clear(), delete this.nodes[e]);
      },
    }),
    (n.QuadTree.prototype.constructor = n.QuadTree),
    (n.Circle = function (e, t, n) {
      (e = e || 0), (t = t || 0), (n = n || 0), (this.x = e), (this.y = t), (this._diameter = n), (this._radius = n > 0 ? 0.5 * n : 0);
    }),
    (n.Circle.prototype = {
      circumference: function () {
        return 2 * Math.PI * this._radius;
      },
      setTo: function (e, t, n) {
        return (this.x = e), (this.y = t), (this._diameter = n), (this._radius = 0.5 * n), this;
      },
      copyFrom: function (e) {
        return this.setTo(e.x, e.y, e.diameter);
      },
      copyTo: function (e) {
        return (e.x = this.x), (e.y = this.y), (e.diameter = this._diameter), e;
      },
      distance: function (e, t) {
        return "undefined" == typeof t && (t = !1), t ? n.Math.distanceRound(this.x, this.y, e.x, e.y) : n.Math.distance(this.x, this.y, e.x, e.y);
      },
      clone: function (e) {
        return "undefined" == typeof e && (e = new n.Circle()), e.setTo(this.x, this.y, this.diameter);
      },
      contains: function (e, t) {
        return n.Circle.contains(this, e, t);
      },
      circumferencePoint: function (e, t, r) {
        return n.Circle.circumferencePoint(this, e, t, r);
      },
      offset: function (e, t) {
        return (this.x += e), (this.y += t), this;
      },
      offsetPoint: function (e) {
        return this.offset(e.x, e.y);
      },
      toString: function () {
        return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]";
      },
    }),
    (n.Circle.prototype.constructor = n.Circle),
    Object.defineProperty(n.Circle.prototype, "diameter", {
      get: function () {
        return this._diameter;
      },
      set: function (e) {
        e > 0 && ((this._diameter = e), (this._radius = 0.5 * e));
      },
    }),
    Object.defineProperty(n.Circle.prototype, "radius", {
      get: function () {
        return this._radius;
      },
      set: function (e) {
        e > 0 && ((this._radius = e), (this._diameter = 2 * e));
      },
    }),
    Object.defineProperty(n.Circle.prototype, "left", {
      get: function () {
        return this.x - this._radius;
      },
      set: function (e) {
        e > this.x ? ((this._radius = 0), (this._diameter = 0)) : (this.radius = this.x - e);
      },
    }),
    Object.defineProperty(n.Circle.prototype, "right", {
      get: function () {
        return this.x + this._radius;
      },
      set: function (e) {
        e < this.x ? ((this._radius = 0), (this._diameter = 0)) : (this.radius = e - this.x);
      },
    }),
    Object.defineProperty(n.Circle.prototype, "top", {
      get: function () {
        return this.y - this._radius;
      },
      set: function (e) {
        e > this.y ? ((this._radius = 0), (this._diameter = 0)) : (this.radius = this.y - e);
      },
    }),
    Object.defineProperty(n.Circle.prototype, "bottom", {
      get: function () {
        return this.y + this._radius;
      },
      set: function (e) {
        e < this.y ? ((this._radius = 0), (this._diameter = 0)) : (this.radius = e - this.y);
      },
    }),
    Object.defineProperty(n.Circle.prototype, "area", {
      get: function () {
        return this._radius > 0 ? Math.PI * this._radius * this._radius : 0;
      },
    }),
    Object.defineProperty(n.Circle.prototype, "empty", {
      get: function () {
        return 0 === this._diameter;
      },
      set: function (e) {
        e === !0 && this.setTo(0, 0, 0);
      },
    }),
    (n.Circle.contains = function (e, t, n) {
      if (t >= e.left && t <= e.right && n >= e.top && n <= e.bottom) {
        var r = (e.x - t) * (e.x - t),
          i = (e.y - n) * (e.y - n);
        return r + i <= e.radius * e.radius;
      }
      return !1;
    }),
    (n.Circle.equals = function (e, t) {
      return e.x == t.x && e.y == t.y && e.diameter == t.diameter;
    }),
    (n.Circle.intersects = function (e, t) {
      return n.Math.distance(e.x, e.y, t.x, t.y) <= e.radius + t.radius;
    }),
    (n.Circle.circumferencePoint = function (e, t, r, i) {
      return "undefined" == typeof r && (r = !1), "undefined" == typeof i && (i = new n.Point()), r === !0 && (t = n.Math.radToDeg(t)), (i.x = e.x + e.radius * Math.cos(t)), (i.y = e.y + e.radius * Math.sin(t)), i;
    }),
    (n.Circle.intersectsRectangle = function (e, t) {
      var n = Math.abs(e.x - t.x - t.halfWidth),
        r = t.halfWidth + e.radius;
      if (n > r) return !1;
      var i = Math.abs(e.y - t.y - t.halfHeight),
        s = t.halfHeight + e.radius;
      if (i > s) return !1;
      if (n <= t.halfWidth || i <= t.halfHeight) return !0;
      var o = n - t.halfWidth,
        u = i - t.halfHeight,
        a = o * o,
        f = u * u,
        l = e.radius * e.radius;
      return l >= a + f;
    }),
    (n.Point = function (e, t) {
      (e = e || 0), (t = t || 0), (this.x = e), (this.y = t);
    }),
    (n.Point.prototype = {
      copyFrom: function (e) {
        return this.setTo(e.x, e.y);
      },
      invert: function () {
        return this.setTo(this.y, this.x);
      },
      setTo: function (e, t) {
        return (this.x = e), (this.y = t), this;
      },
      add: function (e, t) {
        return (this.x += e), (this.y += t), this;
      },
      subtract: function (e, t) {
        return (this.x -= e), (this.y -= t), this;
      },
      multiply: function (e, t) {
        return (this.x *= e), (this.y *= t), this;
      },
      divide: function (e, t) {
        return (this.x /= e), (this.y /= t), this;
      },
      clampX: function (e, t) {
        return (this.x = n.Math.clamp(this.x, e, t)), this;
      },
      clampY: function (e, t) {
        return (this.y = n.Math.clamp(this.y, e, t)), this;
      },
      clamp: function (e, t) {
        return (this.x = n.Math.clamp(this.x, e, t)), (this.y = n.Math.clamp(this.y, e, t)), this;
      },
      clone: function (e) {
        return "undefined" == typeof e && (e = new n.Point()), e.setTo(this.x, this.y);
      },
      copyTo: function (e) {
        return (e.x = this.x), (e.y = this.y), e;
      },
      distance: function (e, t) {
        return n.Point.distance(this, e, t);
      },
      equals: function (e) {
        return e.x == this.x && e.y == this.y;
      },
      rotate: function (e, t, r, i, s) {
        return n.Point.rotate(this, e, t, r, i, s);
      },
      getMagnitude: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      setMagnitude: function (e) {
        return this.normalize().multiply(e, e);
      },
      normalize: function () {
        if (!this.isZero()) {
          var e = this.getMagnitude();
          (this.x /= e), (this.y /= e);
        }
        return this;
      },
      isZero: function () {
        return 0 === this.x && 0 === this.y;
      },
      toString: function () {
        return "[{Point (x=" + this.x + " y=" + this.y + ")}]";
      },
    }),
    (n.Point.prototype.constructor = n.Point),
    (n.Point.add = function (e, t, r) {
      return "undefined" == typeof r && (r = new n.Point()), (r.x = e.x + t.x), (r.y = e.y + t.y), r;
    }),
    (n.Point.subtract = function (e, t, r) {
      return "undefined" == typeof r && (r = new n.Point()), (r.x = e.x - t.x), (r.y = e.y - t.y), r;
    }),
    (n.Point.multiply = function (e, t, r) {
      return "undefined" == typeof r && (r = new n.Point()), (r.x = e.x * t.x), (r.y = e.y * t.y), r;
    }),
    (n.Point.divide = function (e, t, r) {
      return "undefined" == typeof r && (r = new n.Point()), (r.x = e.x / t.x), (r.y = e.y / t.y), r;
    }),
    (n.Point.equals = function (e, t) {
      return e.x == t.x && e.y == t.y;
    }),
    (n.Point.distance = function (e, t, r) {
      return "undefined" == typeof r && (r = !1), r ? n.Math.distanceRound(e.x, e.y, t.x, t.y) : n.Math.distance(e.x, e.y, t.x, t.y);
    }),
    (n.Point.rotate = function (e, t, r, i, s, o) {
      return (s = s || !1), (o = o || null), s && (i = n.Math.degToRad(i)), null === o && (o = Math.sqrt((t - e.x) * (t - e.x) + (r - e.y) * (r - e.y))), e.setTo(t + o * Math.cos(i), r + o * Math.sin(i));
    }),
    (n.Rectangle = function (e, t, n, r) {
      (e = e || 0), (t = t || 0), (n = n || 0), (r = r || 0), (this.x = e), (this.y = t), (this.width = n), (this.height = r);
    }),
    (n.Rectangle.prototype = {
      offset: function (e, t) {
        return (this.x += e), (this.y += t), this;
      },
      offsetPoint: function (e) {
        return this.offset(e.x, e.y);
      },
      setTo: function (e, t, n, r) {
        return (this.x = e), (this.y = t), (this.width = n), (this.height = r), this;
      },
      floor: function () {
        (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y));
      },
      floorAll: function () {
        (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.width = Math.floor(this.width)), (this.height = Math.floor(this.height));
      },
      copyFrom: function (e) {
        return this.setTo(e.x, e.y, e.width, e.height);
      },
      copyTo: function (e) {
        return (e.x = this.x), (e.y = this.y), (e.width = this.width), (e.height = this.height), e;
      },
      inflate: function (e, t) {
        return n.Rectangle.inflate(this, e, t);
      },
      size: function (e) {
        return n.Rectangle.size(this, e);
      },
      clone: function (e) {
        return n.Rectangle.clone(this, e);
      },
      contains: function (e, t) {
        return n.Rectangle.contains(this, e, t);
      },
      containsRect: function (e) {
        return n.Rectangle.containsRect(this, e);
      },
      equals: function (e) {
        return n.Rectangle.equals(this, e);
      },
      intersection: function (e, t) {
        return n.Rectangle.intersection(this, e, t);
      },
      intersects: function (e, t) {
        return n.Rectangle.intersects(this, e, t);
      },
      intersectsRaw: function (e, t, r, i, s) {
        return n.Rectangle.intersectsRaw(this, e, t, r, i, s);
      },
      union: function (e, t) {
        return n.Rectangle.union(this, e, t);
      },
      toString: function () {
        return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]";
      },
    }),
    (n.Rectangle.prototype.constructor = n.Rectangle),
    Object.defineProperty(n.Rectangle.prototype, "halfWidth", {
      get: function () {
        return Math.round(this.width / 2);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "halfHeight", {
      get: function () {
        return Math.round(this.height / 2);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "bottom", {
      get: function () {
        return this.y + this.height;
      },
      set: function (e) {
        this.height = e <= this.y ? 0 : this.y - e;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "bottomRight", {
      get: function () {
        return new n.Point(this.right, this.bottom);
      },
      set: function (e) {
        (this.right = e.x), (this.bottom = e.y);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "left", {
      get: function () {
        return this.x;
      },
      set: function (e) {
        (this.width = e >= this.right ? 0 : this.right - e), (this.x = e);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "right", {
      get: function () {
        return this.x + this.width;
      },
      set: function (e) {
        this.width = e <= this.x ? 0 : this.x + e;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "volume", {
      get: function () {
        return this.width * this.height;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "perimeter", {
      get: function () {
        return 2 * this.width + 2 * this.height;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "centerX", {
      get: function () {
        return this.x + this.halfWidth;
      },
      set: function (e) {
        this.x = e - this.halfWidth;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "centerY", {
      get: function () {
        return this.y + this.halfHeight;
      },
      set: function (e) {
        this.y = e - this.halfHeight;
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "top", {
      get: function () {
        return this.y;
      },
      set: function (e) {
        e >= this.bottom ? ((this.height = 0), (this.y = e)) : (this.height = this.bottom - e);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "topLeft", {
      get: function () {
        return new n.Point(this.x, this.y);
      },
      set: function (e) {
        (this.x = e.x), (this.y = e.y);
      },
    }),
    Object.defineProperty(n.Rectangle.prototype, "empty", {
      get: function () {
        return !this.width || !this.height;
      },
      set: function (e) {
        e === !0 && this.setTo(0, 0, 0, 0);
      },
    }),
    (n.Rectangle.inflate = function (e, t, n) {
      return (e.x -= t), (e.width += 2 * t), (e.y -= n), (e.height += 2 * n), e;
    }),
    (n.Rectangle.inflatePoint = function (e, t) {
      return n.Rectangle.inflate(e, t.x, t.y);
    }),
    (n.Rectangle.size = function (e, t) {
      return "undefined" == typeof t && (t = new n.Point()), t.setTo(e.width, e.height);
    }),
    (n.Rectangle.clone = function (e, t) {
      return "undefined" == typeof t && (t = new n.Rectangle()), t.setTo(e.x, e.y, e.width, e.height);
    }),
    (n.Rectangle.contains = function (e, t, n) {
      return t >= e.x && t <= e.right && n >= e.y && n <= e.bottom;
    }),
    (n.Rectangle.containsRaw = function (e, t, n, r, i, s) {
      return i >= e && e + n >= i && s >= t && t + r >= s;
    }),
    (n.Rectangle.containsPoint = function (e, t) {
      return n.Rectangle.contains(e, t.x, t.y);
    }),
    (n.Rectangle.containsRect = function (e, t) {
      return e.volume > t.volume ? !1 : e.x >= t.x && e.y >= t.y && e.right <= t.right && e.bottom <= t.bottom;
    }),
    (n.Rectangle.equals = function (e, t) {
      return e.x == t.x && e.y == t.y && e.width == t.width && e.height == t.height;
    }),
    (n.Rectangle.intersection = function (e, t, r) {
      return (r = r || new n.Rectangle()), n.Rectangle.intersects(e, t) && ((r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), (r.width = Math.min(e.right, t.right) - r.x), (r.height = Math.min(e.bottom, t.bottom) - r.y)), r;
    }),
    (n.Rectangle.intersects = function (e, t) {
      return e.width <= 0 || e.height <= 0 || t.width <= 0 || t.height <= 0 ? !1 : !(e.right < t.x || e.bottom < t.y || e.x > t.right || e.y > t.bottom);
    }),
    (n.Rectangle.intersectsRaw = function (e, t, n, r, i, s) {
      return "undefined" == typeof s && (s = 0), !(t > e.right + s || n < e.left - s || r > e.bottom + s || i < e.top - s);
    }),
    (n.Rectangle.union = function (e, t, r) {
      return "undefined" == typeof r && (r = new n.Rectangle()), r.setTo(Math.min(e.x, t.x), Math.min(e.y, t.y), Math.max(e.right, t.right) - Math.min(e.left, t.left), Math.max(e.bottom, t.bottom) - Math.min(e.top, t.top));
    }),
    (n.Polygon = function (e) {
      t.Polygon.call(this, e), (this.type = n.POLYGON);
    }),
    (n.Polygon.prototype = Object.create(t.Polygon.prototype)),
    (n.Polygon.prototype.constructor = n.Polygon),
    (n.Net = function (e) {
      this.game = e;
    }),
    (n.Net.prototype = {
      getHostName: function () {
        return window.location && window.location.hostname ? window.location.hostname : null;
      },
      checkDomainName: function (e) {
        return -1 !== window.location.hostname.indexOf(e);
      },
      updateQueryString: function (e, t, n, r) {
        "undefined" == typeof n && (n = !1), ("undefined" == typeof r || "" === r) && (r = window.location.href);
        var i = "",
          s = new RegExp("([?|&])" + e + "=.*?(&|#|$)(.*)", "gi");
        if (s.test(r)) i = "undefined" != typeof t && null !== t ? r.replace(s, "$1" + e + "=" + t + "$2$3") : r.replace(s, "$1$3").replace(/(&|\?)$/, "");
        else if ("undefined" != typeof t && null !== t) {
          var o = -1 !== r.indexOf("?") ? "&" : "?",
            u = r.split("#");
          (r = u[0] + o + e + "=" + t), u[1] && (r += "#" + u[1]), (i = r);
        } else i = r;
        return n ? void (window.location.href = i) : i;
      },
      getQueryString: function (e) {
        "undefined" == typeof e && (e = "");
        var t = {},
          n = location.search.substring(1).split("&");
        for (var r in n) {
          var i = n[r].split("=");
          if (i.length > 1) {
            if (e && e == this.decodeURI(i[0])) return this.decodeURI(i[1]);
            t[this.decodeURI(i[0])] = this.decodeURI(i[1]);
          }
        }
        return t;
      },
      decodeURI: function (e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      },
    }),
    (n.Net.prototype.constructor = n.Net),
    (n.TweenManager = function (e) {
      (this.game = e), (this._tweens = []), (this._add = []), this.game.onPause.add(this.pauseAll, this), this.game.onResume.add(this.resumeAll, this);
    }),
    (n.TweenManager.prototype = {
      getAll: function () {
        return this._tweens;
      },
      removeAll: function () {
        for (var e = 0; e < this._tweens.length; e++) this._tweens[e].pendingDelete = !0;
        this._add = [];
      },
      add: function (e) {
        this._add.push(e);
      },
      create: function (e) {
        return new n.Tween(e, this.game);
      },
      remove: function (e) {
        var t = this._tweens.indexOf(e);
        -1 !== t && (this._tweens[t].pendingDelete = !0);
      },
      update: function () {
        if (0 === this._tweens.length && 0 === this._add.length) return !1;
        for (var e = 0, t = this._tweens.length; t > e; ) this._tweens[e].update(this.game.time.now) ? e++ : (this._tweens.splice(e, 1), t--);
        return this._add.length > 0 && ((this._tweens = this._tweens.concat(this._add)), (this._add.length = 0)), !0;
      },
      isTweening: function (e) {
        return this._tweens.some(function (t) {
          return t._object === e;
        });
      },
      pauseAll: function () {
        for (var e = this._tweens.length - 1; e >= 0; e--) this._tweens[e].pause();
      },
      resumeAll: function () {
        for (var e = this._tweens.length - 1; e >= 0; e--) this._tweens[e].resume();
      },
    }),
    (n.TweenManager.prototype.constructor = n.TweenManager),
    (n.Tween = function (e, t) {
      (this._object = e),
        (this.game = t),
        (this._manager = this.game.tweens),
        (this._valuesStart = {}),
        (this._valuesEnd = {}),
        (this._valuesStartRepeat = {}),
        (this._duration = 1e3),
        (this._repeat = 0),
        (this._yoyo = !1),
        (this._reversed = !1),
        (this._delayTime = 0),
        (this._startTime = null),
        (this._easingFunction = n.Easing.Linear.None),
        (this._interpolationFunction = n.Math.linearInterpolation),
        (this._chainedTweens = []),
        (this._onStartCallbackFired = !1),
        (this._onUpdateCallback = null),
        (this._onUpdateCallbackContext = null),
        (this._pausedTime = 0),
        (this.pendingDelete = !1);
      for (var r in e) this._valuesStart[r] = parseFloat(e[r], 10);
      (this.onStart = new n.Signal()), (this.onLoop = new n.Signal()), (this.onComplete = new n.Signal()), (this.isRunning = !1);
    }),
    (n.Tween.prototype = {
      to: function (e, t, n, r, i, s, o) {
        (t = t || 1e3), (n = n || null), (r = r || !1), (i = i || 0), (s = s || 0), (o = o || !1);
        var u;
        return (
          this._parent ? ((u = this._manager.create(this._object)), this._lastChild.chain(u), (this._lastChild = u)) : ((u = this), (this._parent = this), (this._lastChild = this)),
          (u._repeat = s),
          (u._duration = t),
          (u._valuesEnd = e),
          null !== n && (u._easingFunction = n),
          i > 0 && (u._delayTime = i),
          (u._yoyo = o),
          r ? this.start() : this
        );
      },
      start: function () {
        if (null !== this.game && null !== this._object) {
          this._manager.add(this), (this.isRunning = !0), (this._onStartCallbackFired = !1), (this._startTime = this.game.time.now + this._delayTime);
          for (var e in this._valuesEnd) {
            if (this._valuesEnd[e] instanceof Array) {
              if (0 === this._valuesEnd[e].length) continue;
              this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e]);
            }
            (this._valuesStart[e] = this._object[e]), this._valuesStart[e] instanceof Array == !1 && (this._valuesStart[e] *= 1), (this._valuesStartRepeat[e] = this._valuesStart[e] || 0);
          }
          return this;
        }
      },
      stop: function () {
        return (this.isRunning = !1), (this._onUpdateCallback = null), this._manager.remove(this), this;
      },
      delay: function (e) {
        return (this._delayTime = e), this;
      },
      repeat: function (e) {
        return (this._repeat = e), this;
      },
      yoyo: function (e) {
        return (this._yoyo = e), this;
      },
      easing: function (e) {
        return (this._easingFunction = e), this;
      },
      interpolation: function (e) {
        return (this._interpolationFunction = e), this;
      },
      chain: function () {
        return (this._chainedTweens = arguments), this;
      },
      loop: function () {
        return this._lastChild.chain(this), this;
      },
      onUpdateCallback: function (e, t) {
        return (this._onUpdateCallback = e), (this._onUpdateCallbackContext = t), this;
      },
      pause: function () {
        (this._paused = !0), (this._pausedTime = this.game.time.now);
      },
      resume: function () {
        (this._paused = !1), (this._startTime += this.game.time.now - this._pausedTime);
      },
      update: function (e) {
        if (this.pendingDelete) return !1;
        if (this._paused || e < this._startTime) return !0;
        var t;
        if (e < this._startTime) return !0;
        this._onStartCallbackFired === !1 && (this.onStart.dispatch(this._object), (this._onStartCallbackFired = !0));
        var n = (e - this._startTime) / this._duration;
        n = n > 1 ? 1 : n;
        var r = this._easingFunction(n);
        for (t in this._valuesEnd) {
          var i = this._valuesStart[t] || 0,
            s = this._valuesEnd[t];
          s instanceof Array ? (this._object[t] = this._interpolationFunction(s, r)) : ("string" == typeof s && (s = i + parseFloat(s, 10)), "number" == typeof s && (this._object[t] = i + (s - i) * r));
        }
        if ((null !== this._onUpdateCallback && this._onUpdateCallback.call(this._onUpdateCallbackContext, this, r), 1 == n)) {
          if (this._repeat > 0) {
            isFinite(this._repeat) && this._repeat--;
            for (t in this._valuesStartRepeat) {
              if (("string" == typeof this._valuesEnd[t] && (this._valuesStartRepeat[t] = this._valuesStartRepeat[t] + parseFloat(this._valuesEnd[t], 10)), this._yoyo)) {
                var o = this._valuesStartRepeat[t];
                (this._valuesStartRepeat[t] = this._valuesEnd[t]), (this._valuesEnd[t] = o), (this._reversed = !this._reversed);
              }
              this._valuesStart[t] = this._valuesStartRepeat[t];
            }
            return (this._startTime = e + this._delayTime), this.onLoop.dispatch(this._object), !0;
          }
          (this.isRunning = !1), this.onComplete.dispatch(this._object);
          for (var u = 0, a = this._chainedTweens.length; a > u; u++) this._chainedTweens[u].start(e);
          return !1;
        }
        return !0;
      },
    }),
    (n.Tween.prototype.constructor = n.Tween),
    (n.Easing = {
      Linear: {
        None: function (e) {
          return e;
        },
      },
      Quadratic: {
        In: function (e) {
          return e * e;
        },
        Out: function (e) {
          return e * (2 - e);
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
        },
      },
      Cubic: {
        In: function (e) {
          return e * e * e;
        },
        Out: function (e) {
          return --e * e * e + 1;
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
        },
      },
      Quartic: {
        In: function (e) {
          return e * e * e * e;
        },
        Out: function (e) {
          return 1 - --e * e * e * e;
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
        },
      },
      Quintic: {
        In: function (e) {
          return e * e * e * e * e;
        },
        Out: function (e) {
          return --e * e * e * e * e + 1;
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
        },
      },
      Sinusoidal: {
        In: function (e) {
          return 1 - Math.cos((e * Math.PI) / 2);
        },
        Out: function (e) {
          return Math.sin((e * Math.PI) / 2);
        },
        InOut: function (e) {
          return 0.5 * (1 - Math.cos(Math.PI * e));
        },
      },
      Exponential: {
        In: function (e) {
          return 0 === e ? 0 : Math.pow(1024, e - 1);
        },
        Out: function (e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
        },
        InOut: function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
        },
      },
      Circular: {
        In: function (e) {
          return 1 - Math.sqrt(1 - e * e);
        },
        Out: function (e) {
          return Math.sqrt(1 - --e * e);
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
      },
      Elastic: {
        In: function (e) {
          var t,
            n = 0.1,
            r = 0.4;
          return 0 === e ? 0 : 1 === e ? 1 : (!n || 1 > n ? ((n = 1), (t = r / 4)) : (t = (r * Math.asin(1 / n)) / (2 * Math.PI)), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / r)));
        },
        Out: function (e) {
          var t,
            n = 0.1,
            r = 0.4;
          return 0 === e ? 0 : 1 === e ? 1 : (!n || 1 > n ? ((n = 1), (t = r / 4)) : (t = (r * Math.asin(1 / n)) / (2 * Math.PI)), n * Math.pow(2, -10 * e) * Math.sin((2 * (e - t) * Math.PI) / r) + 1);
        },
        InOut: function (e) {
          var t,
            n = 0.1,
            r = 0.4;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n || 1 > n ? ((n = 1), (t = r / 4)) : (t = (r * Math.asin(1 / n)) / (2 * Math.PI)),
              (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / r) * 0.5 + 1);
        },
      },
      Back: {
        In: function (e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t);
        },
        Out: function (e) {
          var t = 1.70158;
          return --e * e * ((t + 1) * e + t) + 1;
        },
        InOut: function (e) {
          var t = 2.5949095;
          return (e *= 2) < 1 ? 0.5 * e * e * ((t + 1) * e - t) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
        },
      },
      Bounce: {
        In: function (e) {
          return 1 - n.Easing.Bounce.Out(1 - e);
        },
        Out: function (e) {
          return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        },
        InOut: function (e) {
          return 0.5 > e ? 0.5 * n.Easing.Bounce.In(2 * e) : 0.5 * n.Easing.Bounce.Out(2 * e - 1) + 0.5;
        },
      },
    }),
    (n.Time = function (e) {
      (this.game = e),
        (this.time = 0),
        (this.now = 0),
        (this.elapsed = 0),
        (this.pausedTime = 0),
        (this.fps = 0),
        (this.fpsMin = 1e3),
        (this.fpsMax = 0),
        (this.msMin = 1e3),
        (this.msMax = 0),
        (this.physicsElapsed = 0),
        (this.frames = 0),
        (this.pauseDuration = 0),
        (this.timeToCall = 0),
        (this.lastTime = 0),
        (this.events = new n.Timer(this.game, !1)),
        (this._started = 0),
        (this._timeLastSecond = 0),
        (this._pauseStarted = 0),
        (this._justResumed = !1),
        (this._timers = []),
        (this._len = 0),
        (this._i = 0),
        this.game.onPause.add(this.gamePaused, this),
        this.game.onResume.add(this.gameResumed, this);
    }),
    (n.Time.prototype = {
      boot: function () {
        this.events.start();
      },
      create: function (e) {
        "undefined" == typeof e && (e = !0);
        var t = new n.Timer(this.game, e);
        return this._timers.push(t), t;
      },
      removeAll: function () {
        for (var e = 0; e < this._timers.length; e++) this._timers[e].destroy();
        this._timers = [];
      },
      update: function (e) {
        if (((this.now = e), this._justResumed)) {
          (this.time = this.now), (this._justResumed = !1), this.events.resume();
          for (var t = 0; t < this._timers.length; t++) this._timers[t].resume();
        }
        if (
          ((this.timeToCall = this.game.math.max(0, 16 - (e - this.lastTime))),
          (this.elapsed = this.now - this.time),
          (this.msMin = this.game.math.min(this.msMin, this.elapsed)),
          (this.msMax = this.game.math.max(this.msMax, this.elapsed)),
          this.frames++,
          this.now > this._timeLastSecond + 1e3 &&
            ((this.fps = Math.round((1e3 * this.frames) / (this.now - this._timeLastSecond))),
            (this.fpsMin = this.game.math.min(this.fpsMin, this.fps)),
            (this.fpsMax = this.game.math.max(this.fpsMax, this.fps)),
            (this._timeLastSecond = this.now),
            (this.frames = 0)),
          (this.time = this.now),
          (this.lastTime = e + this.timeToCall),
          (this.physicsElapsed = 1 * (this.elapsed / 1e3)),
          this.physicsElapsed > 0.05 && (this.physicsElapsed = 0.05),
          this.game.paused)
        )
          this.pausedTime = this.now - this._pauseStarted;
        else for (this.events.update(this.now), this._i = 0, this._len = this._timers.length; this._i < this._len; ) this._timers[this._i].update(this.now) ? this._i++ : (this._timers.splice(this._i, 1), this._len--);
      },
      gamePaused: function () {
        (this._pauseStarted = this.now), this.events.pause();
        for (var e = 0; e < this._timers.length; e++) this._timers[e].pause();
      },
      gameResumed: function () {
        (this.time = Date.now()), (this.pauseDuration = this.pausedTime), (this._justResumed = !0);
      },
      totalElapsedSeconds: function () {
        return 0.001 * (this.now - this._started);
      },
      elapsedSince: function (e) {
        return this.now - e;
      },
      elapsedSecondsSince: function (e) {
        return 0.001 * (this.now - e);
      },
      reset: function () {
        this._started = this.now;
      },
    }),
    (n.Time.prototype.constructor = n.Time),
    (n.Timer = function (e, t) {
      "undefined" == typeof t && (t = !0),
        (this.game = e),
        (this.running = !1),
        (this.autoDestroy = t),
        (this.expired = !1),
        (this.events = []),
        (this.onComplete = new n.Signal()),
        (this.nextTick = 0),
        (this.paused = !1),
        (this._started = 0),
        (this._pauseStarted = 0),
        (this._now = 0),
        (this._len = 0),
        (this._i = 0);
    }),
    (n.Timer.MINUTE = 6e4),
    (n.Timer.SECOND = 1e3),
    (n.Timer.HALF = 500),
    (n.Timer.QUARTER = 250),
    (n.Timer.prototype = {
      create: function (e, t, r, i, s, o) {
        var u = e;
        this.running && (u += this._now);
        var a = new n.TimerEvent(this, e, u, r, t, i, s, o);
        return this.events.push(a), this.order(), (this.expired = !1), a;
      },
      add: function (e, t, n) {
        return this.create(e, !1, 0, t, n, Array.prototype.splice.call(arguments, 3));
      },
      repeat: function (e, t, n, r) {
        return this.create(e, !1, t, n, r, Array.prototype.splice.call(arguments, 4));
      },
      loop: function (e, t, n) {
        return this.create(e, !0, 0, t, n, Array.prototype.splice.call(arguments, 3));
      },
      start: function () {
        (this._started = this.game.time.now), (this.running = !0);
      },
      stop: function () {
        (this.running = !1), (this.events.length = 0);
      },
      remove: function (e) {
        for (var t = 0; t < this.events.length; t++) if (this.events[t] === e) return this.events.splice(t, 1), !0;
        return !1;
      },
      order: function () {
        this.events.length > 0 && (this.events.sort(this.sortHandler), (this.nextTick = this.events[0].tick));
      },
      sortHandler: function (e, t) {
        return e.tick < t.tick ? -1 : e.tick > t.tick ? 1 : 0;
      },
      update: function (e) {
        if (this.paused) return !0;
        if (((this._now = e - this._started), (this._len = this.events.length), this.running && this._now >= this.nextTick && this._len > 0)) {
          for (this._i = 0; this._i < this._len && this._now >= this.events[this._i].tick; )
            this.events[this._i].loop === !0
              ? ((this.events[this._i].tick += this.events[this._i].delay - (this._now - this.events[this._i].tick)), this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args))
              : this.events[this._i].repeatCount > 0
              ? (this.events[this._i].repeatCount--,
                (this.events[this._i].tick += this.events[this._i].delay - (this._now - this.events[this._i].tick)),
                this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args))
              : (this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args), this.events.splice(this._i, 1), this._len--),
              this._i++;
          this.events.length > 0 ? this.order() : ((this.expired = !0), this.onComplete.dispatch(this));
        }
        return this.expired && this.autoDestroy ? !1 : !0;
      },
      pause: function () {
        (this._pauseStarted = this.game.time.now), (this.paused = !0);
      },
      resume: function () {
        for (var e = this.game.time.now - this._pauseStarted, t = 0; t < this.events.length; t++) this.events[t].tick += e;
        (this.nextTick += e), (this.paused = !1);
      },
      destroy: function () {
        this.onComplete.removeAll(), (this.running = !1), (this.events = []);
      },
    }),
    Object.defineProperty(n.Timer.prototype, "next", {
      get: function () {
        return this.nextTick;
      },
    }),
    Object.defineProperty(n.Timer.prototype, "duration", {
      get: function () {
        return this.running && this.nextTick > this._now ? this.nextTick - this._now : 0;
      },
    }),
    Object.defineProperty(n.Timer.prototype, "length", {
      get: function () {
        return this.events.length;
      },
    }),
    Object.defineProperty(n.Timer.prototype, "ms", {
      get: function () {
        return this._now;
      },
    }),
    Object.defineProperty(n.Timer.prototype, "seconds", {
      get: function () {
        return 0.001 * this._now;
      },
    }),
    (n.Timer.prototype.constructor = n.Timer),
    (n.TimerEvent = function (e, t, n, r, i, s, o, u) {
      (this.timer = e), (this.delay = t), (this.tick = n), (this.repeatCount = r - 1), (this.loop = i), (this.callback = s), (this.callbackContext = o), (this.args = u);
    }),
    (n.TimerEvent.prototype.constructor = n.TimerEvent),
    (n.AnimationManager = function (e) {
      (this.sprite = e), (this.game = e.game), (this.currentFrame = null), (this.updateIfVisible = !0), (this.isLoaded = !1), (this._frameData = null), (this._anims = {}), (this._outputFrames = []);
    }),
    (n.AnimationManager.prototype = {
      loadFrameData: function (e) {
        (this._frameData = e), (this.frame = 0), (this.isLoaded = !0);
      },
      add: function (e, r, i, s, o) {
        return null == this._frameData
          ? void console.warn("No FrameData available for Phaser.Animation " + e)
          : ((i = i || 60),
            "undefined" == typeof s && (s = !1),
            "undefined" == typeof o && (o = r && "number" == typeof r[0] ? !0 : !1),
            null == this.sprite.events.onAnimationStart && ((this.sprite.events.onAnimationStart = new n.Signal()), (this.sprite.events.onAnimationComplete = new n.Signal()), (this.sprite.events.onAnimationLoop = new n.Signal())),
            (this._outputFrames.length = 0),
            this._frameData.getFrameIndexes(r, o, this._outputFrames),
            (this._anims[e] = new n.Animation(this.game, this.sprite, e, this._frameData, this._outputFrames, i, s)),
            (this.currentAnim = this._anims[e]),
            (this.currentFrame = this.currentAnim.currentFrame),
            this.sprite.setTexture(t.TextureCache[this.currentFrame.uuid]),
            this._anims[e]);
      },
      validateFrames: function (e, t) {
        "undefined" == typeof t && (t = !0);
        for (var n = 0; n < e.length; n++)
          if (t === !0) {
            if (e[n] > this._frameData.total) return !1;
          } else if (this._frameData.checkFrameName(e[n]) === !1) return !1;
        return !0;
      },
      play: function (e, t, n, r) {
        if (this._anims[e]) {
          if (this.currentAnim != this._anims[e]) return (this.currentAnim = this._anims[e]), (this.currentAnim.paused = !1), this.currentAnim.play(t, n, r);
          if (this.currentAnim.isPlaying === !1) return (this.currentAnim.paused = !1), this.currentAnim.play(t, n, r);
        }
      },
      stop: function (e, t) {
        "undefined" == typeof t && (t = !1), "string" == typeof e ? this._anims[e] && ((this.currentAnim = this._anims[e]), this.currentAnim.stop(t)) : this.currentAnim && this.currentAnim.stop(t);
      },
      update: function () {
        return this.updateIfVisible && this.sprite.visible === !1 ? !1 : this.currentAnim && this.currentAnim.update() === !0 ? ((this.currentFrame = this.currentAnim.currentFrame), (this.sprite.currentFrame = this.currentFrame), !0) : !1;
      },
      getAnimation: function (e) {
        return "string" == typeof e && this._anims[e] ? this._anims[e] : null;
      },
      refreshFrame: function () {
        (this.sprite.currentFrame = this.currentFrame), this.sprite.setTexture(t.TextureCache[this.currentFrame.uuid]);
      },
      destroy: function () {
        (this._anims = {}), (this._frameData = null), (this._frameIndex = 0), (this.currentAnim = null), (this.currentFrame = null);
      },
    }),
    (n.AnimationManager.prototype.constructor = n.AnimationManager),
    Object.defineProperty(n.AnimationManager.prototype, "frameData", {
      get: function () {
        return this._frameData;
      },
    }),
    Object.defineProperty(n.AnimationManager.prototype, "frameTotal", {
      get: function () {
        return this._frameData ? this._frameData.total : -1;
      },
    }),
    Object.defineProperty(n.AnimationManager.prototype, "paused", {
      get: function () {
        return this.currentAnim.isPaused;
      },
      set: function (e) {
        this.currentAnim.paused = e;
      },
    }),
    Object.defineProperty(n.AnimationManager.prototype, "frame", {
      get: function () {
        return this.currentFrame ? this._frameIndex : void 0;
      },
      set: function (e) {
        "number" == typeof e &&
          this._frameData &&
          null !== this._frameData.getFrame(e) &&
          ((this.currentFrame = this._frameData.getFrame(e)), (this._frameIndex = e), (this.sprite.currentFrame = this.currentFrame), this.sprite.setTexture(t.TextureCache[this.currentFrame.uuid]));
      },
    }),
    Object.defineProperty(n.AnimationManager.prototype, "frameName", {
      get: function () {
        return this.currentFrame ? this.currentFrame.name : void 0;
      },
      set: function (e) {
        "string" == typeof e && this._frameData && null !== this._frameData.getFrameByName(e)
          ? ((this.currentFrame = this._frameData.getFrameByName(e)), (this._frameIndex = this.currentFrame.index), (this.sprite.currentFrame = this.currentFrame), this.sprite.setTexture(t.TextureCache[this.currentFrame.uuid]))
          : console.warn("Cannot set frameName: " + e);
      },
    }),
    (n.Animation = function (e, t, n, r, i, s, o) {
      (this.game = e),
        (this._parent = t),
        (this._frameData = r),
        (this.name = n),
        (this._frames = []),
        (this._frames = this._frames.concat(i)),
        (this.delay = 1e3 / s),
        (this.looped = o),
        (this.killOnComplete = !1),
        (this.isFinished = !1),
        (this.isPlaying = !1),
        (this.isPaused = !1),
        (this._pauseStartTime = 0),
        (this._frameIndex = 0),
        (this._frameDiff = 0),
        (this._frameSkip = 1),
        (this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]));
    }),
    (n.Animation.prototype = {
      play: function (e, n, r) {
        return (
          "number" == typeof e && (this.delay = 1e3 / e),
          "boolean" == typeof n && (this.looped = n),
          "undefined" != typeof r && (this.killOnComplete = r),
          (this.isPlaying = !0),
          (this.isFinished = !1),
          (this.paused = !1),
          (this._timeLastFrame = this.game.time.now),
          (this._timeNextFrame = this.game.time.now + this.delay),
          (this._frameIndex = 0),
          (this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex])),
          this._parent.setTexture(t.TextureCache[this.currentFrame.uuid]),
          this._parent.events && this._parent.events.onAnimationStart.dispatch(this._parent, this),
          this
        );
      },
      restart: function () {
        (this.isPlaying = !0),
          (this.isFinished = !1),
          (this.paused = !1),
          (this._timeLastFrame = this.game.time.now),
          (this._timeNextFrame = this.game.time.now + this.delay),
          (this._frameIndex = 0),
          (this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]));
      },
      stop: function (e) {
        "undefined" == typeof e && (e = !1), (this.isPlaying = !1), (this.isFinished = !0), (this.paused = !1), e && (this.currentFrame = this._frameData.getFrame(this._frames[0]));
      },
      update: function () {
        return this.isPaused
          ? !1
          : this.isPlaying === !0 && this.game.time.now >= this._timeNextFrame
          ? ((this._frameSkip = 1),
            (this._frameDiff = this.game.time.now - this._timeNextFrame),
            (this._timeLastFrame = this.game.time.now),
            this._frameDiff > this.delay && ((this._frameSkip = Math.floor(this._frameDiff / this.delay)), (this._frameDiff -= this._frameSkip * this.delay)),
            (this._timeNextFrame = this.game.time.now + (this.delay - this._frameDiff)),
            (this._frameIndex += this._frameSkip),
            this._frameIndex >= this._frames.length
              ? this.looped
                ? ((this._frameIndex %= this._frames.length),
                  (this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex])),
                  this.currentFrame && this._parent.setTexture(t.TextureCache[this.currentFrame.uuid]),
                  this._parent.events.onAnimationLoop.dispatch(this._parent, this))
                : this.onComplete()
              : ((this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex])), this.currentFrame && this._parent.setTexture(t.TextureCache[this.currentFrame.uuid])),
            !0)
          : !1;
      },
      destroy: function () {
        (this.game = null), (this._parent = null), (this._frames = null), (this._frameData = null), (this.currentFrame = null), (this.isPlaying = !1);
      },
      onComplete: function () {
        (this.isPlaying = !1), (this.isFinished = !0), (this.paused = !1), this._parent.events && this._parent.events.onAnimationComplete.dispatch(this._parent, this), this.killOnComplete && this._parent.kill();
      },
    }),
    (n.Animation.prototype.constructor = n.Animation),
    Object.defineProperty(n.Animation.prototype, "paused", {
      get: function () {
        return this.isPaused;
      },
      set: function (e) {
        (this.isPaused = e), e ? (this._pauseStartTime = this.game.time.now) : this.isPlaying && (this._timeNextFrame = this.game.time.now + this.delay);
      },
    }),
    Object.defineProperty(n.Animation.prototype, "frameTotal", {
      get: function () {
        return this._frames.length;
      },
    }),
    Object.defineProperty(n.Animation.prototype, "frame", {
      get: function () {
        return null !== this.currentFrame ? this.currentFrame.index : this._frameIndex;
      },
      set: function (e) {
        (this.currentFrame = this._frameData.getFrame(e)), null !== this.currentFrame && ((this._frameIndex = e), this._parent.setTexture(t.TextureCache[this.currentFrame.uuid]));
      },
    }),
    (n.Animation.generateFrameNames = function (e, t, r, i, s) {
      "undefined" == typeof i && (i = "");
      var o = [],
        u = "";
      if (r > t) for (var a = t; r >= a; a++) (u = "number" == typeof s ? n.Utils.pad(a.toString(), s, "0", 1) : a.toString()), (u = e + u + i), o.push(u);
      else for (var a = t; a >= r; a--) (u = "number" == typeof s ? n.Utils.pad(a.toString(), s, "0", 1) : a.toString()), (u = e + u + i), o.push(u);
      return o;
    }),
    (n.Frame = function (e, t, r, i, s, o, u) {
      (this.index = e),
        (this.x = t),
        (this.y = r),
        (this.width = i),
        (this.height = s),
        (this.name = o),
        (this.uuid = u),
        (this.centerX = Math.floor(i / 2)),
        (this.centerY = Math.floor(s / 2)),
        (this.distance = n.Math.distance(0, 0, i, s)),
        (this.rotated = !1),
        (this.rotationDirection = "cw"),
        (this.trimmed = !1),
        (this.sourceSizeW = i),
        (this.sourceSizeH = s),
        (this.spriteSourceSizeX = 0),
        (this.spriteSourceSizeY = 0),
        (this.spriteSourceSizeW = 0),
        (this.spriteSourceSizeH = 0);
    }),
    (n.Frame.prototype = {
      setTrim: function (e, t, n, r, i, s, o) {
        (this.trimmed = e),
          e &&
            ((this.width = t),
            (this.height = n),
            (this.sourceSizeW = t),
            (this.sourceSizeH = n),
            (this.centerX = Math.floor(t / 2)),
            (this.centerY = Math.floor(n / 2)),
            (this.spriteSourceSizeX = r),
            (this.spriteSourceSizeY = i),
            (this.spriteSourceSizeW = s),
            (this.spriteSourceSizeH = o));
      },
    }),
    (n.Frame.prototype.constructor = n.Frame),
    (n.FrameData = function () {
      (this._frames = []), (this._frameNames = []);
    }),
    (n.FrameData.prototype = {
      addFrame: function (e) {
        return (e.index = this._frames.length), this._frames.push(e), "" !== e.name && (this._frameNames[e.name] = e.index), e;
      },
      getFrame: function (e) {
        return this._frames.length > e ? this._frames[e] : null;
      },
      getFrameByName: function (e) {
        return "number" == typeof this._frameNames[e] ? this._frames[this._frameNames[e]] : null;
      },
      checkFrameName: function (e) {
        return null == this._frameNames[e] ? !1 : !0;
      },
      getFrameRange: function (e, t, n) {
        "undefined" == typeof n && (n = []);
        for (var r = e; t >= r; r++) n.push(this._frames[r]);
        return n;
      },
      getFrames: function (e, t, n) {
        if (("undefined" == typeof t && (t = !0), "undefined" == typeof n && (n = []), "undefined" == typeof e || 0 === e.length)) for (var r = 0; r < this._frames.length; r++) n.push(this._frames[r]);
        else for (var r = 0, i = e.length; i > r; r++) n.push(t ? this.getFrame(e[r]) : this.getFrameByName(e[r]));
        return n;
      },
      getFrameIndexes: function (e, t, n) {
        if (("undefined" == typeof t && (t = !0), "undefined" == typeof n && (n = []), "undefined" == typeof e || 0 === e.length)) for (var r = 0, i = this._frames.length; i > r; r++) n.push(this._frames[r].index);
        else for (var r = 0, i = e.length; i > r; r++) t ? n.push(e[r]) : this.getFrameByName(e[r]) && n.push(this.getFrameByName(e[r]).index);
        return n;
      },
    }),
    (n.FrameData.prototype.constructor = n.FrameData),
    Object.defineProperty(n.FrameData.prototype, "total", {
      get: function () {
        return this._frames.length;
      },
    }),
    (n.AnimationParser = {
      spriteSheet: function (e, r, i, s, o, u, a) {
        var f = e.cache.getImage(r);
        if (null == f) return null;
        var l = f.width,
          c = f.height;
        0 >= i && (i = Math.floor(-l / Math.min(-1, i))), 0 >= s && (s = Math.floor(-c / Math.min(-1, s)));
        var h = Math.round(l / i),
          p = Math.round(c / s),
          d = h * p;
        if ((-1 !== o && (d = o), 0 === l || 0 === c || i > l || s > c || 0 === d)) return console.warn("Phaser.AnimationParser.spriteSheet: width/height zero or width/height < given frameWidth/frameHeight"), null;
        for (var v = new n.FrameData(), m = u, g = u, y = 0; d > y; y++) {
          var b = e.rnd.uuid();
          v.addFrame(new n.Frame(y, m, g, i, s, "", b)), (t.TextureCache[b] = new t.Texture(t.BaseTextureCache[r], { x: m, y: g, width: i, height: s })), (m += i + a), m === l && ((m = u), (g += s + a));
        }
        return v;
      },
      JSONData: function (e, r, i) {
        if (!r.frames) return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"), void console.log(r);
        for (var s, o = new n.FrameData(), u = r.frames, a = 0; a < u.length; a++) {
          var f = e.rnd.uuid();
          (s = o.addFrame(new n.Frame(a, u[a].frame.x, u[a].frame.y, u[a].frame.w, u[a].frame.h, u[a].filename, f))),
            (t.TextureCache[f] = new t.Texture(t.BaseTextureCache[i], { x: u[a].frame.x, y: u[a].frame.y, width: u[a].frame.w, height: u[a].frame.h })),
            u[a].trimmed &&
              (s.setTrim(u[a].trimmed, u[a].sourceSize.w, u[a].sourceSize.h, u[a].spriteSourceSize.x, u[a].spriteSourceSize.y, u[a].spriteSourceSize.w, u[a].spriteSourceSize.h),
              (t.TextureCache[f].trimmed = !0),
              (t.TextureCache[f].trim.x = u[a].spriteSourceSize.x),
              (t.TextureCache[f].trim.y = u[a].spriteSourceSize.y));
        }
        return o;
      },
      JSONDataHash: function (e, r, i) {
        if (!r.frames) return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"), void console.log(r);
        var s,
          o = new n.FrameData(),
          u = r.frames,
          a = 0;
        for (var f in u) {
          var l = e.rnd.uuid();
          (s = o.addFrame(new n.Frame(a, u[f].frame.x, u[f].frame.y, u[f].frame.w, u[f].frame.h, f, l))),
            (t.TextureCache[l] = new t.Texture(t.BaseTextureCache[i], { x: u[f].frame.x, y: u[f].frame.y, width: u[f].frame.w, height: u[f].frame.h })),
            u[f].trimmed &&
              (s.setTrim(u[f].trimmed, u[f].sourceSize.w, u[f].sourceSize.h, u[f].spriteSourceSize.x, u[f].spriteSourceSize.y, u[f].spriteSourceSize.w, u[f].spriteSourceSize.h),
              (t.TextureCache[l].trimmed = !0),
              (t.TextureCache[l].trim.x = u[f].spriteSourceSize.x),
              (t.TextureCache[l].trim.y = u[f].spriteSourceSize.y)),
            a++;
        }
        return o;
      },
      XMLData: function (e, r, i) {
        if (!r.getElementsByTagName("TextureAtlas")) return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
        for (var s, o, u, a, f, l, c, h, p, d, v, m, g = new n.FrameData(), y = r.getElementsByTagName("SubTexture"), b = 0; b < y.length; b++)
          (o = e.rnd.uuid()),
            (a = y[b].attributes),
            (u = a.name.nodeValue),
            (f = parseInt(a.x.nodeValue, 10)),
            (l = parseInt(a.y.nodeValue, 10)),
            (c = parseInt(a.width.nodeValue, 10)),
            (h = parseInt(a.height.nodeValue, 10)),
            (p = null),
            (d = null),
            a.frameX && ((p = Math.abs(parseInt(a.frameX.nodeValue, 10))), (d = Math.abs(parseInt(a.frameY.nodeValue, 10))), (v = parseInt(a.frameWidth.nodeValue, 10)), (m = parseInt(a.frameHeight.nodeValue, 10))),
            (s = g.addFrame(new n.Frame(b, f, l, c, h, u, o))),
            (t.TextureCache[o] = new t.Texture(t.BaseTextureCache[i], { x: f, y: l, width: c, height: h })),
            (null !== p || null !== d) && (s.setTrim(!0, c, h, p, d, v, m), (t.TextureCache[o].realSize = { x: p, y: d, w: v, h: m }), (t.TextureCache[o].trimmed = !0), (t.TextureCache[o].trim.x = p), (t.TextureCache[o].trim.y = d));
        return g;
      },
    }),
    (n.Cache = function (e) {
      (this.game = e),
        (this._canvases = {}),
        (this._images = {}),
        (this._textures = {}),
        (this._sounds = {}),
        (this._text = {}),
        (this._tilemaps = {}),
        (this._binary = {}),
        (this._bitmapDatas = {}),
        this.addDefaultImage(),
        this.addMissingImage(),
        (this.onSoundUnlock = new n.Signal());
    }),
    (n.Cache.prototype = {
      addCanvas: function (e, t, n) {
        this._canvases[e] = { canvas: t, context: n };
      },
      addBinary: function (e, t) {
        this._binary[e] = t;
      },
      addBitmapData: function (e, t) {
        return (this._bitmapDatas[e] = t), t;
      },
      addRenderTexture: function (e, t) {
        var r = new n.Frame(0, 0, 0, t.width, t.height, "", "");
        this._textures[e] = { texture: t, frame: r };
      },
      addSpriteSheet: function (e, r, i, s, o, u, a, f) {
        (this._images[e] = { url: r, data: i, spriteSheet: !0, frameWidth: s, frameHeight: o, margin: a, spacing: f }),
          (t.BaseTextureCache[e] = new t.BaseTexture(i)),
          (t.TextureCache[e] = new t.Texture(t.BaseTextureCache[e])),
          (this._images[e].frameData = n.AnimationParser.spriteSheet(this.game, e, s, o, u, a, f));
      },
      addTilemap: function (e, t, n, r) {
        this._tilemaps[e] = { url: t, data: n, format: r };
      },
      addTextureAtlas: function (e, r, i, s, o) {
        (this._images[e] = { url: r, data: i, spriteSheet: !0 }),
          (t.BaseTextureCache[e] = new t.BaseTexture(i)),
          (t.TextureCache[e] = new t.Texture(t.BaseTextureCache[e])),
          o == n.Loader.TEXTURE_ATLAS_JSON_ARRAY
            ? (this._images[e].frameData = n.AnimationParser.JSONData(this.game, s, e))
            : o == n.Loader.TEXTURE_ATLAS_JSON_HASH
            ? (this._images[e].frameData = n.AnimationParser.JSONDataHash(this.game, s, e))
            : o == n.Loader.TEXTURE_ATLAS_XML_STARLING && (this._images[e].frameData = n.AnimationParser.XMLData(this.game, s, e));
      },
      addBitmapFont: function (e, r, i, s) {
        (this._images[e] = { url: r, data: i, spriteSheet: !0 }), (t.BaseTextureCache[e] = new t.BaseTexture(i)), (t.TextureCache[e] = new t.Texture(t.BaseTextureCache[e])), n.LoaderParser.bitmapFont(this.game, s, e);
      },
      addDefaultImage: function () {
        var e = new Image();
        (e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg=="),
          (this._images.__default = { url: null, data: e, spriteSheet: !1 }),
          (this._images.__default.frame = new n.Frame(0, 0, 0, 32, 32, "", "")),
          (t.BaseTextureCache.__default = new t.BaseTexture(e)),
          (t.TextureCache.__default = new t.Texture(t.BaseTextureCache.__default));
      },
      addMissingImage: function () {
        var e = new Image();
        (e.src =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg=="),
          (this._images.__missing = { url: null, data: e, spriteSheet: !1 }),
          (this._images.__missing.frame = new n.Frame(0, 0, 0, 32, 32, "", "")),
          (t.BaseTextureCache.__missing = new t.BaseTexture(e)),
          (t.TextureCache.__missing = new t.Texture(t.BaseTextureCache.__missing));
      },
      addText: function (e, t, n) {
        this._text[e] = { url: t, data: n };
      },
      addImage: function (e, r, i) {
        (this._images[e] = { url: r, data: i, spriteSheet: !1 }),
          (this._images[e].frame = new n.Frame(0, 0, 0, i.width, i.height, e, this.game.rnd.uuid())),
          (t.BaseTextureCache[e] = new t.BaseTexture(i)),
          (t.TextureCache[e] = new t.Texture(t.BaseTextureCache[e]));
      },
      addSound: function (e, t, n, r, i) {
        (r = r || !0), (i = i || !1);
        var s = !1;
        i && (s = !0), (this._sounds[e] = { url: t, data: n, isDecoding: !1, decoded: s, webAudio: r, audioTag: i, locked: this.game.sound.touchLocked });
      },
      reloadSound: function (e) {
        var t = this;
        this._sounds[e] &&
          ((this._sounds[e].data.src = this._sounds[e].url),
          this._sounds[e].data.addEventListener(
            "canplaythrough",
            function () {
              return t.reloadSoundComplete(e);
            },
            !1
          ),
          this._sounds[e].data.load());
      },
      reloadSoundComplete: function (e) {
        this._sounds[e] && ((this._sounds[e].locked = !1), this.onSoundUnlock.dispatch(e));
      },
      updateSound: function (e, t, n) {
        this._sounds[e] && (this._sounds[e][t] = n);
      },
      decodedSound: function (e, t) {
        (this._sounds[e].data = t), (this._sounds[e].decoded = !0), (this._sounds[e].isDecoding = !1);
      },
      getCanvas: function (e) {
        return this._canvases[e] ? this._canvases[e].canvas : void console.warn('Phaser.Cache.getCanvas: Invalid key: "' + e + '"');
      },
      getBitmapData: function (e) {
        return this._bitmapDatas[e] ? this._bitmapDatas[e] : void console.warn('Phaser.Cache.getBitmapData: Invalid key: "' + e + '"');
      },
      checkImageKey: function (e) {
        return this._images[e] ? !0 : !1;
      },
      getImage: function (e) {
        return this._images[e] ? this._images[e].data : void console.warn('Phaser.Cache.getImage: Invalid key: "' + e + '"');
      },
      getTilemapData: function (e) {
        return this._tilemaps[e] ? this._tilemaps[e] : void console.warn('Phaser.Cache.getTilemapData: Invalid key: "' + e + '"');
      },
      getFrameData: function (e) {
        return this._images[e] && this._images[e].frameData ? this._images[e].frameData : null;
      },
      getFrameByIndex: function (e, t) {
        return this._images[e] && this._images[e].frameData ? this._images[e].frameData.getFrame(t) : null;
      },
      getFrameByName: function (e, t) {
        return this._images[e] && this._images[e].frameData ? this._images[e].frameData.getFrameByName(t) : null;
      },
      getFrame: function (e) {
        return this._images[e] && this._images[e].spriteSheet === !1 ? this._images[e].frame : null;
      },
      getTextureFrame: function (e) {
        return this._textures[e] ? this._textures[e].frame : null;
      },
      getTexture: function (e) {
        return this._textures[e] ? this._textures[e] : void console.warn('Phaser.Cache.getTexture: Invalid key: "' + e + '"');
      },
      getSound: function (e) {
        return this._sounds[e] ? this._sounds[e] : void console.warn('Phaser.Cache.getSound: Invalid key: "' + e + '"');
      },
      getSoundData: function (e) {
        return this._sounds[e] ? this._sounds[e].data : void console.warn('Phaser.Cache.getSoundData: Invalid key: "' + e + '"');
      },
      isSoundDecoded: function (e) {
        return this._sounds[e] ? this._sounds[e].decoded : void 0;
      },
      isSoundReady: function (e) {
        return this._sounds[e] && this._sounds[e].decoded && this.game.sound.touchLocked === !1;
      },
      isSpriteSheet: function (e) {
        return this._images[e] ? this._images[e].spriteSheet : !1;
      },
      getText: function (e) {
        return this._text[e] ? this._text[e].data : void console.warn('Phaser.Cache.getText: Invalid key: "' + e + '"');
      },
      getBinary: function (e) {
        return this._binary[e] ? this._binary[e] : void console.warn('Phaser.Cache.getBinary: Invalid key: "' + e + '"');
      },
      getKeys: function (e) {
        var t = [];
        for (var n in e) "__default" !== n && "__missing" !== n && t.push(n);
        return t;
      },
      getImageKeys: function () {
        return this.getKeys(this._images);
      },
      getSoundKeys: function () {
        return this.getKeys(this._sounds);
      },
      getTextKeys: function () {
        return this.getKeys(this._text);
      },
      removeCanvas: function (e) {
        delete this._canvases[e];
      },
      removeImage: function (e) {
        delete this._images[e];
      },
      removeSound: function (e) {
        delete this._sounds[e];
      },
      removeText: function (e) {
        delete this._text[e];
      },
      destroy: function () {
        for (var e in this._canvases) delete this._canvases[e.key];
        for (var e in this._images) delete this._images[e.key];
        for (var e in this._sounds) delete this._sounds[e.key];
        for (var e in this._text) delete this._text[e.key];
      },
    }),
    (n.Cache.prototype.constructor = n.Cache),
    (n.Loader = function (e) {
      (this.game = e),
        (this._fileList = []),
        (this._fileIndex = 0),
        (this._progressChunk = 0),
        (this._xhr = new XMLHttpRequest()),
        (this.isLoading = !1),
        (this.hasLoaded = !1),
        (this.progress = 0),
        (this.progressFloat = 0),
        (this.preloadSprite = null),
        (this.crossOrigin = ""),
        (this.baseURL = ""),
        (this.onFileComplete = new n.Signal()),
        (this.onFileError = new n.Signal()),
        (this.onLoadStart = new n.Signal()),
        (this.onLoadComplete = new n.Signal());
    }),
    (n.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0),
    (n.Loader.TEXTURE_ATLAS_JSON_HASH = 1),
    (n.Loader.TEXTURE_ATLAS_XML_STARLING = 2),
    (n.Loader.prototype = {
      setPreloadSprite: function (e, t) {
        (t = t || 0),
          (this.preloadSprite = { sprite: e, direction: t, width: e.width, height: e.height, crop: null }),
          (this.preloadSprite.crop = 0 === t ? new n.Rectangle(0, 0, 1, e.height) : new n.Rectangle(0, 0, e.width, 1)),
          (e.crop = this.preloadSprite.crop),
          (e.cropEnabled = !0);
      },
      checkKeyExists: function (e, t) {
        if (this._fileList.length > 0) for (var n = 0; n < this._fileList.length; n++) if (this._fileList[n].type === e && this._fileList[n].key === t) return !0;
        return !1;
      },
      getAsset: function (e, t) {
        if (this._fileList.length > 0) for (var n = 0; n < this._fileList.length; n++) if (this._fileList[n].type === e && this._fileList[n].key === t) return { index: n, file: this._fileList[n] };
        return !1;
      },
      reset: function () {
        (this.preloadSprite = null), (this.isLoading = !1), (this._fileList.length = 0), (this._fileIndex = 0);
      },
      addToFileList: function (e, t, n, r) {
        var i = { type: e, key: t, url: n, data: null, error: !1, loaded: !1 };
        if ("undefined" != typeof r) for (var s in r) i[s] = r[s];
        this.checkKeyExists(e, t) === !1 && this._fileList.push(i);
      },
      replaceInFileList: function (e, t, n, r) {
        var i = { type: e, key: t, url: n, data: null, error: !1, loaded: !1 };
        if ("undefined" != typeof r) for (var s in r) i[s] = r[s];
        this.checkKeyExists(e, t) === !1 && this._fileList.push(i);
      },
      image: function (e, t, n) {
        return "undefined" == typeof n && (n = !1), n ? this.replaceInFileList("image", e, t) : this.addToFileList("image", e, t), this;
      },
      text: function (e, t, n) {
        return "undefined" == typeof n && (n = !1), n ? this.replaceInFileList("text", e, t) : this.addToFileList("text", e, t), this;
      },
      script: function (e, t) {
        return this.addToFileList("script", e, t), this;
      },
      binary: function (e, t, n, r) {
        return "undefined" == typeof n && (n = !1), n !== !1 && "undefined" == typeof r && (r = n), this.addToFileList("binary", e, t, { callback: n, callbackContext: r }), this;
      },
      spritesheet: function (e, t, n, r, i, s, o) {
        return (
          "undefined" == typeof i && (i = -1), "undefined" == typeof s && (s = 0), "undefined" == typeof o && (o = 0), this.addToFileList("spritesheet", e, t, { frameWidth: n, frameHeight: r, frameMax: i, margin: s, spacing: o }), this
        );
      },
      audio: function (e, t, n) {
        return "undefined" == typeof n && (n = !0), this.addToFileList("audio", e, t, { buffer: null, autoDecode: n }), this;
      },
      tilemap: function (e, t, r, i) {
        if (("undefined" == typeof t && (t = null), "undefined" == typeof r && (r = null), "undefined" == typeof i && (i = n.Tilemap.CSV), null == t && null == r))
          return console.warn("Phaser.Loader.tilemap - Both mapDataURL and mapData are null. One must be set."), this;
        if (r) {
          switch (i) {
            case n.Tilemap.CSV:
              break;
            case n.Tilemap.TILED_JSON:
              "string" == typeof r && (r = JSON.parse(r));
          }
          this.game.cache.addTilemap(e, null, r, i);
        } else this.addToFileList("tilemap", e, t, { format: i });
        return this;
      },
      bitmapFont: function (e, t, n, r) {
        if (("undefined" == typeof n && (n = null), "undefined" == typeof r && (r = null), n)) this.addToFileList("bitmapfont", e, t, { xmlURL: n });
        else if ("string" == typeof r) {
          var i;
          try {
            if (window.DOMParser) {
              var s = new DOMParser();
              i = s.parseFromString(r, "text/xml");
            } else (i = new ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(r);
          } catch (o) {
            i = void 0;
          }
          if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");
          this.addToFileList("bitmapfont", e, t, { xmlURL: null, xmlData: i });
        }
        return this;
      },
      atlasJSONArray: function (e, t, r, i) {
        return this.atlas(e, t, r, i, n.Loader.TEXTURE_ATLAS_JSON_ARRAY);
      },
      atlasJSONHash: function (e, t, r, i) {
        return this.atlas(e, t, r, i, n.Loader.TEXTURE_ATLAS_JSON_HASH);
      },
      atlasXML: function (e, t, r, i) {
        return this.atlas(e, t, r, i, n.Loader.TEXTURE_ATLAS_XML_STARLING);
      },
      atlas: function (e, t, r, i, s) {
        if (("undefined" == typeof r && (r = null), "undefined" == typeof i && (i = null), "undefined" == typeof s && (s = n.Loader.TEXTURE_ATLAS_JSON_ARRAY), r)) this.addToFileList("textureatlas", e, t, { atlasURL: r, format: s });
        else {
          switch (s) {
            case n.Loader.TEXTURE_ATLAS_JSON_ARRAY:
              "string" == typeof i && (i = JSON.parse(i));
              break;
            case n.Loader.TEXTURE_ATLAS_XML_STARLING:
              if ("string" == typeof i) {
                var o;
                try {
                  if (window.DOMParser) {
                    var u = new DOMParser();
                    o = u.parseFromString(i, "text/xml");
                  } else (o = new ActiveXObject("Microsoft.XMLDOM")), (o.async = "false"), o.loadXML(i);
                } catch (a) {
                  o = void 0;
                }
                if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
                i = o;
              }
          }
          this.addToFileList("textureatlas", e, t, { atlasURL: null, atlasData: i, format: s });
        }
        return this;
      },
      removeFile: function (e, t) {
        var n = this.getAsset(e, t);
        n !== !1 && this._fileList.splice(n.index, 1);
      },
      removeAll: function () {
        this._fileList.length = 0;
      },
      start: function () {
        this.isLoading ||
          ((this.progress = 0),
          (this.progressFloat = 0),
          (this.hasLoaded = !1),
          (this.isLoading = !0),
          this.onLoadStart.dispatch(this._fileList.length),
          this._fileList.length > 0
            ? ((this._fileIndex = 0), (this._progressChunk = 100 / this._fileList.length), this.loadFile())
            : ((this.progress = 100), (this.progressFloat = 100), (this.hasLoaded = !0), this.onLoadComplete.dispatch()));
      },
      loadFile: function () {
        if (!this._fileList[this._fileIndex]) return void console.warn("Phaser.Loader loadFile invalid index " + this._fileIndex);
        var e = this._fileList[this._fileIndex],
          t = this;
        switch (e.type) {
          case "image":
          case "spritesheet":
          case "textureatlas":
          case "bitmapfont":
            (e.data = new Image()),
              (e.data.name = e.key),
              (e.data.onload = function () {
                return t.fileComplete(t._fileIndex);
              }),
              (e.data.onerror = function () {
                return t.fileError(t._fileIndex);
              }),
              (e.data.crossOrigin = this.crossOrigin),
              (e.data.src = this.baseURL + e.url);
            break;
          case "audio":
            (e.url = this.getAudioURL(e.url)),
              null !== e.url
                ? this.game.sound.usingWebAudio
                  ? (this._xhr.open("GET", this.baseURL + e.url, !0),
                    (this._xhr.responseType = "arraybuffer"),
                    (this._xhr.onload = function () {
                      return t.fileComplete(t._fileIndex);
                    }),
                    (this._xhr.onerror = function () {
                      return t.fileError(t._fileIndex);
                    }),
                    this._xhr.send())
                  : this.game.sound.usingAudioTag &&
                    (this.game.sound.touchLocked
                      ? ((e.data = new Audio()), (e.data.name = e.key), (e.data.preload = "auto"), (e.data.src = this.baseURL + e.url), this.fileComplete(this._fileIndex))
                      : ((e.data = new Audio()),
                        (e.data.name = e.key),
                        (e.data.onerror = function () {
                          return t.fileError(t._fileIndex);
                        }),
                        (e.data.preload = "auto"),
                        (e.data.src = this.baseURL + e.url),
                        e.data.addEventListener("canplaythrough", n.GAMES[this.game.id].load.fileComplete(this._fileIndex), !1),
                        e.data.load()))
                : this.fileError(this._fileIndex);
            break;
          case "tilemap":
            if ((this._xhr.open("GET", this.baseURL + e.url, !0), (this._xhr.responseType = "text"), e.format === n.Tilemap.TILED_JSON))
              this._xhr.onload = function () {
                return t.jsonLoadComplete(t._fileIndex);
              };
            else {
              if (e.format !== n.Tilemap.CSV) throw new Error("Phaser.Loader. Invalid Tilemap format: " + e.format);
              this._xhr.onload = function () {
                return t.csvLoadComplete(t._fileIndex);
              };
            }
            (this._xhr.onerror = function () {
              return t.dataLoadError(t._fileIndex);
            }),
              this._xhr.send();
            break;
          case "text":
          case "script":
            this._xhr.open("GET", this.baseURL + e.url, !0),
              (this._xhr.responseType = "text"),
              (this._xhr.onload = function () {
                return t.fileComplete(t._fileIndex);
              }),
              (this._xhr.onerror = function () {
                return t.fileError(t._fileIndex);
              }),
              this._xhr.send();
            break;
          case "binary":
            this._xhr.open("GET", this.baseURL + e.url, !0),
              (this._xhr.responseType = "arraybuffer"),
              (this._xhr.onload = function () {
                return t.fileComplete(t._fileIndex);
              }),
              (this._xhr.onerror = function () {
                return t.fileError(t._fileIndex);
              }),
              this._xhr.send();
        }
      },
      getAudioURL: function (e) {
        var t;
        "string" == typeof e && (e = [e]);
        for (var n = 0; n < e.length; n++) if (((t = e[n].toLowerCase()), (t = t.substr((Math.max(0, t.lastIndexOf(".")) || 1 / 0) + 1)), this.game.device.canPlayAudio(t))) return e[n];
        return null;
      },
      fileError: function (e) {
        (this._fileList[e].loaded = !0),
          (this._fileList[e].error = !0),
          this.onFileError.dispatch(this._fileList[e].key, this._fileList[e]),
          console.warn("Phaser.Loader error loading file: " + this._fileList[e].key + " from URL " + this._fileList[e].url),
          this.nextFile(e, !1);
      },
      fileComplete: function (e) {
        if (!this._fileList[e]) return void console.warn("Phaser.Loader fileComplete invalid index " + e);
        var t = this._fileList[e];
        t.loaded = !0;
        var r = !0,
          i = this;
        switch (t.type) {
          case "image":
            this.game.cache.addImage(t.key, t.url, t.data);
            break;
          case "spritesheet":
            this.game.cache.addSpriteSheet(t.key, t.url, t.data, t.frameWidth, t.frameHeight, t.frameMax, t.margin, t.spacing);
            break;
          case "textureatlas":
            if (null == t.atlasURL) this.game.cache.addTextureAtlas(t.key, t.url, t.data, t.atlasData, t.format);
            else {
              if (((r = !1), this._xhr.open("GET", this.baseURL + t.atlasURL, !0), (this._xhr.responseType = "text"), t.format == n.Loader.TEXTURE_ATLAS_JSON_ARRAY || t.format == n.Loader.TEXTURE_ATLAS_JSON_HASH))
                this._xhr.onload = function () {
                  return i.jsonLoadComplete(e);
                };
              else {
                if (t.format != n.Loader.TEXTURE_ATLAS_XML_STARLING) throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + t.format);
                this._xhr.onload = function () {
                  return i.xmlLoadComplete(e);
                };
              }
              (this._xhr.onerror = function () {
                return i.dataLoadError(e);
              }),
                this._xhr.send();
            }
            break;
          case "bitmapfont":
            null == t.xmlURL
              ? this.game.cache.addBitmapFont(t.key, t.url, t.data, t.xmlData)
              : ((r = !1),
                this._xhr.open("GET", this.baseURL + t.xmlURL, !0),
                (this._xhr.responseType = "text"),
                (this._xhr.onload = function () {
                  return i.xmlLoadComplete(e);
                }),
                (this._xhr.onerror = function () {
                  return i.dataLoadError(e);
                }),
                this._xhr.send());
            break;
          case "audio":
            if (this.game.sound.usingWebAudio) {
              if (((t.data = this._xhr.response), this.game.cache.addSound(t.key, t.url, t.data, !0, !1), t.autoDecode)) {
                this.game.cache.updateSound(o, "isDecoding", !0);
                var s = this,
                  o = t.key;
                this.game.sound.context.decodeAudioData(t.data, function (e) {
                  e && (s.game.cache.decodedSound(o, e), s.game.sound.onSoundDecode.dispatch(o, s.game.cache.getSound(o)));
                });
              }
            } else t.data.removeEventListener("canplaythrough", n.GAMES[this.game.id].load.fileComplete), this.game.cache.addSound(t.key, t.url, t.data, !1, !0);
            break;
          case "text":
            (t.data = this._xhr.responseText), this.game.cache.addText(t.key, t.url, t.data);
            break;
          case "script":
            (t.data = document.createElement("script")), (t.data.language = "javascript"), (t.data.type = "text/javascript"), (t.data.defer = !1), (t.data.text = this._xhr.responseText), document.head.appendChild(t.data);
            break;
          case "binary":
            (t.data = t.callback ? t.callback.call(t.callbackContext, t.key, this._xhr.response) : this._xhr.response), this.game.cache.addBinary(t.key, t.data);
        }
        r && this.nextFile(e, !0);
      },
      jsonLoadComplete: function (e) {
        if (!this._fileList[e]) return void console.warn("Phaser.Loader jsonLoadComplete invalid index " + e);
        var t = this._fileList[e],
          n = JSON.parse(this._xhr.responseText);
        (t.loaded = !0), "tilemap" === t.type ? this.game.cache.addTilemap(t.key, t.url, n, t.format) : this.game.cache.addTextureAtlas(t.key, t.url, t.data, n, t.format), this.nextFile(e, !0);
      },
      csvLoadComplete: function (e) {
        if (!this._fileList[e]) return void console.warn("Phaser.Loader csvLoadComplete invalid index " + e);
        var t = this._fileList[e],
          n = this._xhr.responseText;
        (t.loaded = !0), this.game.cache.addTilemap(t.key, t.url, n, t.format), this.nextFile(e, !0);
      },
      dataLoadError: function (e) {
        var t = this._fileList[e];
        (t.loaded = !0), (t.error = !0), console.warn("Phaser.Loader dataLoadError: " + t.key), this.nextFile(e, !0);
      },
      xmlLoadComplete: function (e) {
        var t,
          n = this._xhr.responseText;
        try {
          if (window.DOMParser) {
            var r = new DOMParser();
            t = r.parseFromString(n, "text/xml");
          } else (t = new ActiveXObject("Microsoft.XMLDOM")), (t.async = "false"), t.loadXML(n);
        } catch (i) {
          t = void 0;
        }
        if (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid XML given");
        var s = this._fileList[e];
        (s.loaded = !0), "bitmapfont" == s.type ? this.game.cache.addBitmapFont(s.key, s.url, s.data, t) : "textureatlas" == s.type && this.game.cache.addTextureAtlas(s.key, s.url, s.data, t, s.format), this.nextFile(e, !0);
      },
      nextFile: function (e, t) {
        (this.progressFloat += this._progressChunk),
          (this.progress = Math.round(this.progressFloat)),
          this.progress > 100 && (this.progress = 100),
          null !== this.preloadSprite &&
            (0 === this.preloadSprite.direction
              ? (this.preloadSprite.crop.width = Math.floor((this.preloadSprite.width / 100) * this.progress))
              : (this.preloadSprite.crop.height = Math.floor((this.preloadSprite.height / 100) * this.progress)),
            (this.preloadSprite.sprite.crop = this.preloadSprite.crop)),
          this.onFileComplete.dispatch(this.progress, this._fileList[e].key, t, this.totalLoadedFiles(), this._fileList.length),
          this.totalQueuedFiles() > 0 ? (this._fileIndex++, this.loadFile()) : ((this.hasLoaded = !0), (this.isLoading = !1), this.removeAll(), this.onLoadComplete.dispatch());
      },
      totalLoadedFiles: function () {
        for (var e = 0, t = 0; t < this._fileList.length; t++) this._fileList[t].loaded && e++;
        return e;
      },
      totalQueuedFiles: function () {
        for (var e = 0, t = 0; t < this._fileList.length; t++) this._fileList[t].loaded === !1 && e++;
        return e;
      },
    }),
    (n.Loader.prototype.constructor = n.Loader),
    (n.LoaderParser = {
      bitmapFont: function (e, n, r) {
        if (!n.getElementsByTagName("font")) return void console.warn("Phaser.LoaderParser.bitmapFont: Invalid XML given, missing <font> tag");
        var i = t.TextureCache[r],
          s = {},
          o = n.getElementsByTagName("info")[0],
          u = n.getElementsByTagName("common")[0];
        (s.font = o.attributes.getNamedItem("face").nodeValue), (s.size = parseInt(o.attributes.getNamedItem("size").nodeValue, 10)), (s.lineHeight = parseInt(u.attributes.getNamedItem("lineHeight").nodeValue, 10)), (s.chars = {});
        for (var a = n.getElementsByTagName("char"), f = 0; f < a.length; f++) {
          var l = parseInt(a[f].attributes.getNamedItem("id").nodeValue, 10),
            c = {
              x: parseInt(a[f].attributes.getNamedItem("x").nodeValue, 10),
              y: parseInt(a[f].attributes.getNamedItem("y").nodeValue, 10),
              width: parseInt(a[f].attributes.getNamedItem("width").nodeValue, 10),
              height: parseInt(a[f].attributes.getNamedItem("height").nodeValue, 10),
            };
          (t.TextureCache[l] = new t.Texture(i, c)),
            (s.chars[l] = {
              xOffset: parseInt(a[f].attributes.getNamedItem("xoffset").nodeValue, 10),
              yOffset: parseInt(a[f].attributes.getNamedItem("yoffset").nodeValue, 10),
              xAdvance: parseInt(a[f].attributes.getNamedItem("xadvance").nodeValue, 10),
              kerning: {},
              texture: new t.Texture(i, c),
            });
        }
        var h = n.getElementsByTagName("kerning");
        for (f = 0; f < h.length; f++) {
          var p = parseInt(h[f].attributes.getNamedItem("first").nodeValue, 10),
            d = parseInt(h[f].attributes.getNamedItem("second").nodeValue, 10),
            v = parseInt(h[f].attributes.getNamedItem("amount").nodeValue, 10);
          s.chars[d].kerning[p] = v;
        }
        t.BitmapText.fonts[s.font] = s;
      },
    }),
    (n.Sound = function (e, t, r, i, s) {
      "undefined" == typeof r && (r = 1),
        "undefined" == typeof i && (i = !1),
        "undefined" == typeof s && (s = e.sound.connectToMaster),
        (this.game = e),
        (this.name = t),
        (this.key = t),
        (this.loop = i),
        (this._volume = r),
        (this.markers = {}),
        (this.context = null),
        (this._buffer = null),
        (this._muted = !1),
        (this.autoplay = !1),
        (this.totalDuration = 0),
        (this.startTime = 0),
        (this.currentTime = 0),
        (this.duration = 0),
        (this.stopTime = 0),
        (this.paused = !1),
        (this.pausedPosition = 0),
        (this.pausedTime = 0),
        (this.isPlaying = !1),
        (this.currentMarker = ""),
        (this.pendingPlayback = !1),
        (this.override = !1),
        (this.usingWebAudio = this.game.sound.usingWebAudio),
        (this.usingAudioTag = this.game.sound.usingAudioTag),
        (this.externalNode = null),
        this.usingWebAudio
          ? ((this.context = this.game.sound.context),
            (this.masterGainNode = this.game.sound.masterGain),
            (this.gainNode = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain()),
            (this.gainNode.gain.value = r * this.game.sound.volume),
            s && this.gainNode.connect(this.masterGainNode))
          : this.game.cache.getSound(t) && this.game.cache.isSoundReady(t)
          ? ((this._sound = this.game.cache.getSoundData(t)), (this.totalDuration = 0), this._sound.duration && (this.totalDuration = this._sound.duration))
          : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this),
        (this.onDecoded = new n.Signal()),
        (this.onPlay = new n.Signal()),
        (this.onPause = new n.Signal()),
        (this.onResume = new n.Signal()),
        (this.onLoop = new n.Signal()),
        (this.onStop = new n.Signal()),
        (this.onMute = new n.Signal()),
        (this.onMarkerComplete = new n.Signal());
    }),
    (n.Sound.prototype = {
      soundHasUnlocked: function (e) {
        e == this.key && ((this._sound = this.game.cache.getSoundData(this.key)), (this.totalDuration = this._sound.duration));
      },
      addMarker: function (e, t, n, r, i) {
        (r = r || 1), "undefined" == typeof i && (i = !1), (this.markers[e] = { name: e, start: t, stop: t + n, volume: r, duration: n, durationMS: 1e3 * n, loop: i });
      },
      removeMarker: function (e) {
        delete this.markers[e];
      },
      update: function () {
        this.pendingPlayback && this.game.cache.isSoundReady(this.key) && ((this.pendingPlayback = !1), this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop)),
          this.isPlaying &&
            ((this.currentTime = this.game.time.now - this.startTime),
            this.currentTime >= this.durationMS &&
              (this.usingWebAudio
                ? this.loop
                  ? (this.onLoop.dispatch(this), "" === this.currentMarker ? ((this.currentTime = 0), (this.startTime = this.game.time.now)) : this.play(this.currentMarker, 0, this.volume, !0, !0))
                  : this.stop()
                : this.loop
                ? (this.onLoop.dispatch(this), this.play(this.currentMarker, 0, this.volume, !0, !0))
                : this.stop()));
      },
      play: function (e, t, n, r, i) {
        if (((e = e || ""), (t = t || 0), "undefined" == typeof n && (n = this._volume), "undefined" == typeof r && (r = !1), "undefined" == typeof i && (i = !0), this.isPlaying !== !0 || i !== !1 || this.override !== !1)) {
          if (
            (this.isPlaying && this.override && (this.usingWebAudio ? ("undefined" == typeof this._sound.stop ? this._sound.noteOff(0) : this._sound.stop(0)) : this.usingAudioTag && (this._sound.pause(), (this._sound.currentTime = 0))),
            (this.currentMarker = e),
            "" !== e)
          ) {
            if (!this.markers[e]) return void console.warn("Phaser.Sound.play: audio marker " + e + " doesn't exist");
            (this.position = this.markers[e].start),
              (this.volume = this.markers[e].volume),
              (this.loop = this.markers[e].loop),
              (this.duration = this.markers[e].duration),
              (this.durationMS = this.markers[e].durationMS),
              (this._tempMarker = e),
              (this._tempPosition = this.position),
              (this._tempVolume = this.volume),
              (this._tempLoop = this.loop);
          } else (this.position = t), (this.volume = n), (this.loop = r), (this.duration = 0), (this.durationMS = 0), (this._tempMarker = e), (this._tempPosition = t), (this._tempVolume = n), (this._tempLoop = r);
          this.usingWebAudio
            ? this.game.cache.isSoundDecoded(this.key)
              ? (null == this._buffer && (this._buffer = this.game.cache.getSoundData(this.key)),
                (this._sound = this.context.createBufferSource()),
                (this._sound.buffer = this._buffer),
                this._sound.connect(this.externalNode ? this.externalNode.input : this.gainNode),
                (this.totalDuration = this._sound.buffer.duration),
                0 === this.duration && ((this.duration = this.totalDuration), (this.durationMS = 1e3 * this.totalDuration)),
                this.loop && "" === e && (this._sound.loop = !0),
                "undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, this.position, this.duration) : this._sound.start(0, this.position, this.duration),
                (this.isPlaying = !0),
                (this.startTime = this.game.time.now),
                (this.currentTime = 0),
                (this.stopTime = this.startTime + this.durationMS),
                this.onPlay.dispatch(this))
              : ((this.pendingPlayback = !0), this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === !1 && this.game.sound.decode(this.key, this))
            : this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked
            ? (this.game.cache.reloadSound(this.key), (this.pendingPlayback = !0))
            : this._sound && (this.game.device.cocoonJS || 4 === this._sound.readyState)
            ? (this._sound.play(),
              (this.totalDuration = this._sound.duration),
              0 === this.duration && ((this.duration = this.totalDuration), (this.durationMS = 1e3 * this.totalDuration)),
              (this._sound.currentTime = this.position),
              (this._sound.muted = this._muted),
              (this._sound.volume = this._muted ? 0 : this._volume),
              (this.isPlaying = !0),
              (this.startTime = this.game.time.now),
              (this.currentTime = 0),
              (this.stopTime = this.startTime + this.durationMS),
              this.onPlay.dispatch(this))
            : (this.pendingPlayback = !0);
        }
      },
      restart: function (e, t, n, r) {
        (e = e || ""), (t = t || 0), (n = n || 1), "undefined" == typeof r && (r = !1), this.play(e, t, n, r, !0);
      },
      pause: function () {
        this.isPlaying && this._sound && (this.stop(), (this.isPlaying = !1), (this.paused = !0), (this.pausedPosition = this.currentTime), (this.pausedTime = this.game.time.now), this.onPause.dispatch(this));
      },
      resume: function () {
        if (this.paused && this._sound) {
          if (this.usingWebAudio) {
            var e = this.position + this.pausedPosition / 1e3;
            (this._sound = this.context.createBufferSource()),
              (this._sound.buffer = this._buffer),
              this._sound.connect(this.externalNode ? this.externalNode.input : this.gainNode),
              this.loop && (this._sound.loop = !0),
              "undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, e, this.duration) : this._sound.start(0, e, this.duration);
          } else this._sound.play();
          (this.isPlaying = !0), (this.paused = !1), (this.startTime += this.game.time.now - this.pausedTime), this.onResume.dispatch(this);
        }
      },
      stop: function () {
        this.isPlaying && this._sound && (this.usingWebAudio ? ("undefined" == typeof this._sound.stop ? this._sound.noteOff(0) : this._sound.stop(0)) : this.usingAudioTag && (this._sound.pause(), (this._sound.currentTime = 0))),
          (this.isPlaying = !1);
        var e = this.currentMarker;
        (this.currentMarker = ""), this.onStop.dispatch(this, e);
      },
    }),
    (n.Sound.prototype.constructor = n.Sound),
    Object.defineProperty(n.Sound.prototype, "isDecoding", {
      get: function () {
        return this.game.cache.getSound(this.key).isDecoding;
      },
    }),
    Object.defineProperty(n.Sound.prototype, "isDecoded", {
      get: function () {
        return this.game.cache.isSoundDecoded(this.key);
      },
    }),
    Object.defineProperty(n.Sound.prototype, "mute", {
      get: function () {
        return this._muted;
      },
      set: function (e) {
        (e = e || null),
          e
            ? ((this._muted = !0),
              this.usingWebAudio ? ((this._muteVolume = this.gainNode.gain.value), (this.gainNode.gain.value = 0)) : this.usingAudioTag && this._sound && ((this._muteVolume = this._sound.volume), (this._sound.volume = 0)))
            : ((this._muted = !1), this.usingWebAudio ? (this.gainNode.gain.value = this._muteVolume) : this.usingAudioTag && this._sound && (this._sound.volume = this._muteVolume)),
          this.onMute.dispatch(this);
      },
    }),
    Object.defineProperty(n.Sound.prototype, "volume", {
      get: function () {
        return this._volume;
      },
      set: function (e) {
        this.usingWebAudio ? ((this._volume = e), (this.gainNode.gain.value = e)) : this.usingAudioTag && this._sound && e >= 0 && 1 >= e && ((this._volume = e), (this._sound.volume = e));
      },
    }),
    (n.SoundManager = function (e) {
      (this.game = e),
        (this.onSoundDecode = new n.Signal()),
        (this._muted = !1),
        (this._unlockSource = null),
        (this._volume = 1),
        (this._sounds = []),
        (this.context = null),
        (this.usingWebAudio = !0),
        (this.usingAudioTag = !1),
        (this.noAudio = !1),
        (this.connectToMaster = !0),
        (this.touchLocked = !1),
        (this.channels = 32);
    }),
    (n.SoundManager.prototype = {
      boot: function () {
        if (
          (this.game.device.iOS && this.game.device.webAudio === !1 && (this.channels = 1),
          this.game.device.iOS || (window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock)
            ? ((this.game.input.touch.callbackContext = this),
              (this.game.input.touch.touchStartCallback = this.unlock),
              (this.game.input.mouse.callbackContext = this),
              (this.game.input.mouse.mouseDownCallback = this.unlock),
              (this.touchLocked = !0))
            : (this.touchLocked = !1),
          window.PhaserGlobal)
        ) {
          if (window.PhaserGlobal.disableAudio === !0) return (this.usingWebAudio = !1), void (this.noAudio = !0);
          if (window.PhaserGlobal.disableWebAudio === !0) return (this.usingWebAudio = !1), (this.usingAudioTag = !0), void (this.noAudio = !1);
        }
        window.AudioContext
          ? (this.context = new window.AudioContext())
          : window.webkitAudioContext
          ? (this.context = new window.webkitAudioContext())
          : window.Audio
          ? ((this.usingWebAudio = !1), (this.usingAudioTag = !0))
          : ((this.usingWebAudio = !1), (this.noAudio = !0)),
          null !== this.context &&
            ((this.masterGain = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain()), (this.masterGain.gain.value = 1), this.masterGain.connect(this.context.destination));
      },
      unlock: function () {
        if (this.touchLocked !== !1)
          if (this.game.device.webAudio === !1 || (window.PhaserGlobal && window.PhaserGlobal.disableWebAudio === !0))
            (this.touchLocked = !1),
              (this._unlockSource = null),
              (this.game.input.touch.callbackContext = null),
              (this.game.input.touch.touchStartCallback = null),
              (this.game.input.mouse.callbackContext = null),
              (this.game.input.mouse.mouseDownCallback = null);
          else {
            var e = this.context.createBuffer(1, 1, 22050);
            (this._unlockSource = this.context.createBufferSource()), (this._unlockSource.buffer = e), this._unlockSource.connect(this.context.destination), this._unlockSource.noteOn(0);
          }
      },
      stopAll: function () {
        for (var e = 0; e < this._sounds.length; e++) this._sounds[e] && this._sounds[e].stop();
      },
      pauseAll: function () {
        for (var e = 0; e < this._sounds.length; e++) this._sounds[e] && this._sounds[e].pause();
      },
      resumeAll: function () {
        for (var e = 0; e < this._sounds.length; e++) this._sounds[e] && this._sounds[e].resume();
      },
      decode: function (e, t) {
        t = t || null;
        var n = this.game.cache.getSoundData(e);
        if (n && this.game.cache.isSoundDecoded(e) === !1) {
          this.game.cache.updateSound(e, "isDecoding", !0);
          var r = this;
          this.context.decodeAudioData(n, function (n) {
            r.game.cache.decodedSound(e, n), t && r.onSoundDecode.dispatch(e, t);
          });
        }
      },
      update: function () {
        this.touchLocked &&
          this.game.device.webAudio &&
          null !== this._unlockSource &&
          (this._unlockSource.playbackState === this._unlockSource.PLAYING_STATE || this._unlockSource.playbackState === this._unlockSource.FINISHED_STATE) &&
          ((this.touchLocked = !1), (this._unlockSource = null), (this.game.input.touch.callbackContext = null), (this.game.input.touch.touchStartCallback = null));
        for (var e = 0; e < this._sounds.length; e++) this._sounds[e].update();
      },
      add: function (e, t, r, i) {
        "undefined" == typeof t && (t = 1), "undefined" == typeof r && (r = !1), "undefined" == typeof i && (i = this.connectToMaster);
        var s = new n.Sound(this.game, e, t, r, i);
        return this._sounds.push(s), s;
      },
      play: function (e, t, n, r) {
        "undefined" == typeof r && (r = !1);
        var i = this.add(e, t, n);
        return i.play(), i;
      },
    }),
    (n.SoundManager.prototype.constructor = n.SoundManager),
    Object.defineProperty(n.SoundManager.prototype, "mute", {
      get: function () {
        return this._muted;
      },
      set: function (e) {
        if ((e = e || null)) {
          if (this._muted) return;
          (this._muted = !0), this.usingWebAudio && ((this._muteVolume = this.masterGain.gain.value), (this.masterGain.gain.value = 0));
          for (var t = 0; t < this._sounds.length; t++) this._sounds[t].usingAudioTag && (this._sounds[t].mute = !0);
        } else {
          if (this._muted === !1) return;
          (this._muted = !1), this.usingWebAudio && (this.masterGain.gain.value = this._muteVolume);
          for (var t = 0; t < this._sounds.length; t++) this._sounds[t].usingAudioTag && (this._sounds[t].mute = !1);
        }
      },
    }),
    Object.defineProperty(n.SoundManager.prototype, "volume", {
      get: function () {
        return this.usingWebAudio ? this.masterGain.gain.value : this._volume;
      },
      set: function (e) {
        (e = this.game.math.clamp(e, 1, 0)), (this._volume = e), this.usingWebAudio && (this.masterGain.gain.value = e);
        for (var t = 0; t < this._sounds.length; t++) this._sounds[t].usingAudioTag && (this._sounds[t].volume = this._sounds[t].volume * e);
      },
    }),
    (n.Utils.Debug = function (e) {
      (this.game = e), (this.context = e.context), (this.font = "14px Courier"), (this.columnWidth = 100), (this.lineHeight = 16), (this.renderShadow = !0), (this.currentX = 0), (this.currentY = 0), (this.currentAlpha = 1);
    }),
    (n.Utils.Debug.prototype = {
      start: function (e, t, n, r) {
        null != this.context &&
          ("number" != typeof e && (e = 0),
          "number" != typeof t && (t = 0),
          (n = n || "rgb(255,255,255)"),
          "undefined" == typeof r && (r = 0),
          (this.currentX = e),
          (this.currentY = t),
          (this.currentColor = n),
          (this.currentAlpha = this.context.globalAlpha),
          (this.columnWidth = r),
          this.context.save(),
          this.context.setTransform(1, 0, 0, 1, 0, 0),
          (this.context.strokeStyle = n),
          (this.context.fillStyle = n),
          (this.context.font = this.font),
          (this.context.globalAlpha = 1));
      },
      stop: function () {
        this.context.restore(), (this.context.globalAlpha = this.currentAlpha);
      },
      line: function (e, t, n) {
        null != this.context &&
          ("undefined" != typeof t && (this.currentX = t),
          "undefined" != typeof n && (this.currentY = n),
          this.renderShadow && ((this.context.fillStyle = "rgb(0,0,0)"), this.context.fillText(e, this.currentX + 1, this.currentY + 1), (this.context.fillStyle = this.currentColor)),
          this.context.fillText(e, this.currentX, this.currentY),
          (this.currentY += this.lineHeight));
      },
      splitline: function () {
        if (null != this.context) {
          for (var e = this.currentX, t = 0; t < arguments.length; t++)
            this.renderShadow && ((this.context.fillStyle = "rgb(0,0,0)"), this.context.fillText(arguments[t], e + 1, this.currentY + 1), (this.context.fillStyle = this.currentColor)),
              this.context.fillText(arguments[t], e, this.currentY),
              (e += this.columnWidth);
          this.currentY += this.lineHeight;
        }
      },
      renderQuadTree: function (e, t) {
        (t = t || "rgba(255,0,0,0.3)"), this.start();
        var n = e.bounds;
        if (0 === e.nodes.length) {
          (this.context.strokeStyle = t),
            this.context.strokeRect(n.x, n.y, n.width, n.height),
            this.renderText(e.ID + " / " + e.objects.length, n.x + 4, n.y + 16, "rgb(0,200,0)", "12px Courier"),
            (this.context.strokeStyle = "rgb(0,255,0)");
          for (var r = 0; r < e.objects.length; r++) this.context.strokeRect(e.objects[r].x, e.objects[r].y, e.objects[r].width, e.objects[r].height);
        } else for (var r = 0; r < e.nodes.length; r++) this.renderQuadTree(e.nodes[r]);
        this.stop();
      },
      renderSpriteCorners: function (e, t, n, r) {
        null != this.context &&
          ((t = t || !1),
          (n = n || !1),
          (r = r || "rgb(255,255,255)"),
          this.start(0, 0, r),
          n && (this.context.beginPath(), (this.context.strokeStyle = "rgba(0, 255, 0, 0.7)"), this.context.strokeRect(e.bounds.x, e.bounds.y, e.bounds.width, e.bounds.height), this.context.closePath(), this.context.stroke()),
          this.context.beginPath(),
          this.context.moveTo(e.topLeft.x, e.topLeft.y),
          this.context.lineTo(e.topRight.x, e.topRight.y),
          this.context.lineTo(e.bottomRight.x, e.bottomRight.y),
          this.context.lineTo(e.bottomLeft.x, e.bottomLeft.y),
          this.context.closePath(),
          (this.context.strokeStyle = "rgba(255, 0, 255, 0.7)"),
          this.context.stroke(),
          this.renderPoint(e.offset),
          this.renderPoint(e.center),
          this.renderPoint(e.topLeft),
          this.renderPoint(e.topRight),
          this.renderPoint(e.bottomLeft),
          this.renderPoint(e.bottomRight),
          t &&
            ((this.currentColor = r),
            this.line("x: " + Math.floor(e.topLeft.x) + " y: " + Math.floor(e.topLeft.y), e.topLeft.x, e.topLeft.y),
            this.line("x: " + Math.floor(e.topRight.x) + " y: " + Math.floor(e.topRight.y), e.topRight.x, e.topRight.y),
            this.line("x: " + Math.floor(e.bottomLeft.x) + " y: " + Math.floor(e.bottomLeft.y), e.bottomLeft.x, e.bottomLeft.y),
            this.line("x: " + Math.floor(e.bottomRight.x) + " y: " + Math.floor(e.bottomRight.y), e.bottomRight.x, e.bottomRight.y)),
          this.stop());
      },
      renderSoundInfo: function (e, t, n, r) {
        null != this.context &&
          ((r = r || "rgb(255,255,255)"),
          this.start(t, n, r),
          this.line("Sound: " + e.key + " Locked: " + e.game.sound.touchLocked),
          this.line("Is Ready?: " + this.game.cache.isSoundReady(e.key) + " Pending Playback: " + e.pendingPlayback),
          this.line("Decoded: " + e.isDecoded + " Decoding: " + e.isDecoding),
          this.line("Total Duration: " + e.totalDuration + " Playing: " + e.isPlaying),
          this.line("Time: " + e.currentTime),
          this.line("Volume: " + e.volume + " Muted: " + e.mute),
          this.line("WebAudio: " + e.usingWebAudio + " Audio: " + e.usingAudioTag),
          "" !== e.currentMarker &&
            (this.line("Marker: " + e.currentMarker + " Duration: " + e.duration), this.line("Start: " + e.markers[e.currentMarker].start + " Stop: " + e.markers[e.currentMarker].stop), this.line("Position: " + e.position)),
          this.stop());
      },
      renderCameraInfo: function (e, t, n, r) {
        null != this.context &&
          ((r = r || "rgb(255,255,255)"),
          this.start(t, n, r),
          this.line("Camera (" + e.width + " x " + e.height + ")"),
          this.line("X: " + e.x + " Y: " + e.y),
          this.line("Bounds x: " + e.bounds.x + " Y: " + e.bounds.y + " w: " + e.bounds.width + " h: " + e.bounds.height),
          this.line("View x: " + e.view.x + " Y: " + e.view.y + " w: " + e.view.width + " h: " + e.view.height),
          this.stop());
      },
      renderPointer: function (e, t, n, r, i) {
        null != this.context &&
          null != e &&
          ("undefined" == typeof t && (t = !1),
          (n = n || "rgba(0,255,0,0.5)"),
          (r = r || "rgba(255,0,0,0.5)"),
          (i = i || "rgb(255,255,255)"),
          (t !== !0 || e.isUp !== !0) &&
            (this.start(e.x, e.y - 100, i),
            this.context.beginPath(),
            this.context.arc(e.x, e.y, e.circle.radius, 0, 2 * Math.PI),
            (this.context.fillStyle = e.active ? n : r),
            this.context.fill(),
            this.context.closePath(),
            this.context.beginPath(),
            this.context.moveTo(e.positionDown.x, e.positionDown.y),
            this.context.lineTo(e.position.x, e.position.y),
            (this.context.lineWidth = 2),
            this.context.stroke(),
            this.context.closePath(),
            this.line("ID: " + e.id + " Active: " + e.active),
            this.line("World X: " + e.worldX + " World Y: " + e.worldY),
            this.line("Screen X: " + e.x + " Screen Y: " + e.y),
            this.line("Duration: " + e.duration + " ms"),
            this.stop()));
      },
      renderSpriteInputInfo: function (e, t, n, r) {
        (r = r || "rgb(255,255,255)"),
          this.start(t, n, r),
          this.line("Sprite Input: (" + e.width + " x " + e.height + ")"),
          this.line("x: " + e.input.pointerX().toFixed(1) + " y: " + e.input.pointerY().toFixed(1)),
          this.line("over: " + e.input.pointerOver() + " duration: " + e.input.overDuration().toFixed(0)),
          this.line("down: " + e.input.pointerDown() + " duration: " + e.input.downDuration().toFixed(0)),
          this.line("just over: " + e.input.justOver() + " just out: " + e.input.justOut()),
          this.stop();
      },
      renderBodyInfo: function (e, t, n, r) {
        (r = r || "rgb(255,255,255)"),
          this.start(t, n, r, 210),
          this.splitline("x: " + e.body.x.toFixed(2), "y: " + e.body.y.toFixed(2), "width: " + e.width, "height: " + e.height),
          this.splitline("speed: " + e.body.speed.toFixed(2), "angle: " + e.body.angle.toFixed(2), "linear damping: " + e.body.linearDamping),
          this.splitline("blocked left: " + e.body.blocked.left, "right: " + e.body.blocked.right, "up: " + e.body.blocked.up, "down: " + e.body.blocked.down),
          this.splitline("touching left: " + e.body.touching.left, "right: " + e.body.touching.right, "up: " + e.body.touching.up, "down: " + e.body.touching.down),
          this.splitline("gravity x: " + e.body.gravity.x, "y: " + e.body.gravity.y, "world gravity x: " + this.game.physics.gravity.x, "y: " + this.game.physics.gravity.y),
          this.splitline("acceleration x: " + e.body.acceleration.x.toFixed(2), "y: " + e.body.acceleration.y.toFixed(2)),
          this.splitline("velocity x: " + e.body.velocity.x.toFixed(2), "y: " + e.body.velocity.y.toFixed(2), "deltaX: " + e.body.deltaX().toFixed(2), "deltaY: " + e.body.deltaY().toFixed(2)),
          this.splitline("bounce x: " + e.body.bounce.x.toFixed(2), "y: " + e.body.bounce.y.toFixed(2)),
          this.stop();
      },
      renderInputInfo: function (e, t, n) {
        null != this.context &&
          ((n = n || "rgb(255,255,0)"),
          this.start(e, t, n),
          this.line("Input"),
          this.line("X: " + this.game.input.x + " Y: " + this.game.input.y),
          this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY),
          this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1)),
          this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY),
          this.stop());
      },
      renderSpriteInfo: function (e, t, n, r) {
        null != this.context &&
          ((r = r || "rgb(255, 255, 255)"),
          this.start(t, n, r),
          this.line("Sprite:  (" + e.width + " x " + e.height + ") anchor: " + e.anchor.x + " x " + e.anchor.y),
          this.line("x: " + e.x.toFixed(1) + " y: " + e.y.toFixed(1)),
          this.line("angle: " + e.angle.toFixed(1) + " rotation: " + e.rotation.toFixed(1)),
          this.line("visible: " + e.visible + " in camera: " + e.inCamera),
          this.line("body x: " + e.body.x.toFixed(1) + " y: " + e.body.y.toFixed(1)),
          this.line("id: " + e._id),
          this.line("scale x: " + e.worldTransform[0]),
          this.line("scale y: " + e.worldTransform[4]),
          this.line("tx: " + e.worldTransform[2]),
          this.line("ty: " + e.worldTransform[5]),
          this.line("skew x: " + e.worldTransform[3]),
          this.line("skew y: " + e.worldTransform[1]),
          this.line("sdx: " + e.deltaX),
          this.line("sdy: " + e.deltaY),
          this.stop());
      },
      renderSpriteCoords: function (e, t, n, r) {
        null != this.context &&
          ((r = r || "rgb(255, 255, 255)"),
          this.start(t, n, r, 100),
          e.name && this.line(e.name),
          this.splitline("x:", e.x.toFixed(2), "y:", e.y.toFixed(2)),
          this.splitline("pos x:", e.position.x.toFixed(2), "pos y:", e.position.y.toFixed(2)),
          this.splitline("world x:", e.world.x.toFixed(2), "world y:", e.world.y.toFixed(2)),
          this.stop());
      },
      renderLine: function (e, t) {
        null != this.context &&
          ((t = t || "rgb(255, 255, 255)"),
          this.start(0, 0, t),
          (this.context.lineWidth = 1),
          this.context.beginPath(),
          this.context.moveTo(e.start.x + 0.5, e.start.y + 0.5),
          this.context.lineTo(e.end.x + 0.5, e.end.y + 0.5),
          this.context.closePath(),
          this.context.stroke(),
          this.stop());
      },
      renderLineInfo: function (e, t, n, r) {
        null != this.context &&
          ((r = r || "rgb(255, 255, 255)"),
          this.start(t, n, r, 80),
          this.splitline("start.x:", e.start.x.toFixed(2), "start.y:", e.start.y.toFixed(2)),
          this.splitline("end.x:", e.end.x.toFixed(2), "end.y:", e.end.y.toFixed(2)),
          this.splitline("length:", e.length.toFixed(2), "angle:", e.angle),
          this.stop());
      },
      renderPointInfo: function (e, t, n, r) {
        null != this.context && ((r = r || "rgb(255, 255, 255)"), this.start(t, n, r), this.line("px: " + e.x.toFixed(1) + " py: " + e.y.toFixed(1)), this.stop());
      },
      renderSpriteBody: function (e, t, n) {
        null != this.context &&
          ((t = t || "rgb(255,0,255)"),
          "undefined" == typeof n && (n = !1),
          this.start(0, 0, t),
          n
            ? ((this.context.fillStyle = t), this.context.fillRect(e.body.left, e.body.top, e.body.width, e.body.height))
            : ((this.context.strokeStyle = t), this.context.strokeRect(e.body.left, e.body.top, e.body.width, e.body.height), this.context.stroke()),
          this.stop());
      },
      renderSpriteBounds: function (e, t, n) {
        null != this.context &&
          ((t = t || "rgb(255,0,255)"),
          "undefined" == typeof n && (n = !1),
          this.start(0, 0, t),
          n
            ? ((this.context.fillStyle = t), this.context.fillRect(e.bounds.x, e.bounds.y, e.bounds.width, e.bounds.height))
            : ((this.context.strokeStyle = t), this.context.strokeRect(e.bounds.x, e.bounds.y, e.bounds.width, e.bounds.height), this.context.stroke()),
          this.stop());
      },
      renderPixel: function (e, t, n) {
        null != this.context && ((n = n || "rgba(0,255,0,1)"), this.start(), (this.context.fillStyle = n), this.context.fillRect(e, t, 2, 2), this.stop());
      },
      renderPoint: function (e, t) {
        null != this.context && ((t = t || "rgba(0,255,0,1)"), this.start(), (this.context.fillStyle = t), this.context.fillRect(e.x, e.y, 4, 4), this.stop());
      },
      renderRectangle: function (e, t) {
        null != this.context && ((t = t || "rgba(0,255,0,0.3)"), this.start(), (this.context.fillStyle = t), this.context.fillRect(e.x, e.y, e.width, e.height), this.stop());
      },
      renderCircle: function (e, t) {
        null != this.context &&
          ((t = t || "rgba(0,255,0,0.3)"), this.start(), this.context.beginPath(), (this.context.fillStyle = t), this.context.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), this.context.fill(), this.context.closePath(), this.stop());
      },
      renderText: function (e, t, n, r, i) {
        null != this.context && ((r = r || "rgb(255,255,255)"), (i = i || "16px Courier"), this.start(), (this.context.font = i), (this.context.fillStyle = r), this.context.fillText(e, t, n), this.stop());
      },
      renderPhysicsBody: function (e, t, r) {
        if (null !== this.context || null !== r) {
          t = t || "rgb(255,255,255)";
          var i = e.x - this.game.camera.x,
            s = e.y - this.game.camera.y;
          if (e.type === n.Physics.Arcade.CIRCLE)
            this.start(0, 0, t), this.context.beginPath(), (this.context.strokeStyle = t), this.context.arc(i, s, e.shape.r, 0, 2 * Math.PI, !1), this.context.stroke(), this.context.closePath(), this.stop();
          else {
            var o = e.polygon.points;
            this.start(0, 0, t), this.context.beginPath(), this.context.moveTo(i + o[0].x, s + o[0].y);
            for (var u = 1; u < o.length; u++) this.context.lineTo(i + o[u].x, s + o[u].y);
            this.context.closePath(), (this.context.strokeStyle = t), this.context.stroke(), (this.context.fillStyle = "rgb(255,0,0)"), this.context.fillRect(i + o[0].x - 2, s + o[0].y - 2, 5, 5);
            for (var u = 1; u < o.length; u++) (this.context.fillStyle = "rgb(255," + 40 * u + ",0)"), this.context.fillRect(i + o[u].x - 2, s + o[u].y - 2, 5, 5);
            this.stop();
          }
        }
      },
      renderPolygon: function (e, t, n) {
        if (null !== this.context || null !== n) {
          t = t || "rgb(255,255,255)";
          var r = e.points,
            i = e.pos.x,
            s = e.pos.y;
          this.start(0, 0, t), this.context.beginPath(), this.context.moveTo(i + r[0].x, s + r[0].y);
          for (var o = 1; o < r.length; o++) this.context.lineTo(i + r[o].x, s + r[o].y);
          this.context.closePath(), (this.context.strokeStyle = t), this.context.stroke(), this.stop();
        }
      },
    }),
    (n.Utils.Debug.prototype.constructor = n.Utils.Debug),
    (n.Color = {
      getColor32: function (e, t, n, r) {
        return (e << 24) | (t << 16) | (n << 8) | r;
      },
      getColor: function (e, t, n) {
        return (e << 16) | (t << 8) | n;
      },
      hexToRGB: function (e) {
        var t = "#" == e.charAt(0) ? e.substring(1, 7) : e;
        3 == t.length && (t = t.charAt(0) + t.charAt(0) + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2));
        var n = parseInt(t.substring(0, 2), 16),
          r = parseInt(t.substring(2, 4), 16),
          i = parseInt(t.substring(4, 6), 16);
        return (n << 16) | (r << 8) | i;
      },
      getColorInfo: function (e) {
        var t = n.Color.getRGB(e),
          r = n.Color.RGBtoHSV(e),
          i = n.Color.RGBtoHexstring(e) + "\n";
        return (i = i.concat("Alpha: " + t.alpha + " Red: " + t.red + " Green: " + t.green + " Blue: " + t.blue) + "\n"), (i = i.concat("Hue: " + r.hue + " Saturation: " + r.saturation + " Lightnes: " + r.lightness));
      },
      RGBtoHexstring: function (e) {
        var t = n.Color.getRGB(e);
        return "0x" + n.Color.colorToHexstring(t.alpha) + n.Color.colorToHexstring(t.red) + n.Color.colorToHexstring(t.green) + n.Color.colorToHexstring(t.blue);
      },
      RGBtoWebstring: function (e) {
        var t = n.Color.getRGB(e);
        return "#" + n.Color.colorToHexstring(t.red) + n.Color.colorToHexstring(t.green) + n.Color.colorToHexstring(t.blue);
      },
      colorToHexstring: function (e) {
        var t = "0123456789ABCDEF",
          n = e % 16,
          r = (e - n) / 16,
          i = t.charAt(r) + t.charAt(n);
        return i;
      },
      interpolateColor: function (e, t, r, i, s) {
        "undefined" == typeof s && (s = 255);
        var o = n.Color.getRGB(e),
          u = n.Color.getRGB(t),
          a = ((u.red - o.red) * i) / r + o.red,
          f = ((u.green - o.green) * i) / r + o.green,
          l = ((u.blue - o.blue) * i) / r + o.blue;
        return n.Color.getColor32(s, a, f, l);
      },
      interpolateColorWithRGB: function (e, t, r, i, s, o) {
        var u = n.Color.getRGB(e),
          a = ((t - u.red) * o) / s + u.red,
          f = ((r - u.green) * o) / s + u.green,
          l = ((i - u.blue) * o) / s + u.blue;
        return n.Color.getColor(a, f, l);
      },
      interpolateRGB: function (e, t, r, i, s, o, u, a) {
        var f = ((i - e) * a) / u + e,
          l = ((s - t) * a) / u + t,
          c = ((o - r) * a) / u + r;
        return n.Color.getColor(f, l, c);
      },
      getRandomColor: function (e, t, r) {
        if (("undefined" == typeof e && (e = 0), "undefined" == typeof t && (t = 255), "undefined" == typeof r && (r = 255), t > 255)) return n.Color.getColor(255, 255, 255);
        if (e > t) return n.Color.getColor(255, 255, 255);
        var i = e + Math.round(Math.random() * (t - e)),
          s = e + Math.round(Math.random() * (t - e)),
          o = e + Math.round(Math.random() * (t - e));
        return n.Color.getColor32(r, i, s, o);
      },
      getRGB: function (e) {
        return { alpha: e >>> 24, red: (e >> 16) & 255, green: (e >> 8) & 255, blue: 255 & e };
      },
      getWebRGB: function (e) {
        var t = (e >>> 24) / 255,
          n = (e >> 16) & 255,
          r = (e >> 8) & 255,
          i = 255 & e;
        return "rgba(" + n.toString() + "," + r.toString() + "," + i.toString() + "," + t.toString() + ")";
      },
      getAlpha: function (e) {
        return e >>> 24;
      },
      getAlphaFloat: function (e) {
        return (e >>> 24) / 255;
      },
      getRed: function (e) {
        return (e >> 16) & 255;
      },
      getGreen: function (e) {
        return (e >> 8) & 255;
      },
      getBlue: function (e) {
        return 255 & e;
      },
    }),
    (function (e, t) {
      "use strict";
      "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? (module.exports = t()) : (e.SAT = t());
    })(this, function () {
      "use strict";
      function e(e, t) {
        (this.x = e || 0), (this.y = t || 0);
      }
      function t(t, n) {
        (this.pos = t || new e()), (this.r = n || 0);
      }
      function n(t, n) {
        (this.pos = t || new e()), (this.points = n || []), this.recalc();
      }
      function r(t, n, r) {
        (this.pos = t || new e()), (this.w = n || 0), (this.h = r || 0);
      }
      function i() {
        (this.a = null), (this.b = null), (this.overlapN = new e()), (this.overlapV = new e()), this.clear();
      }
      function s(e, t, n) {
        for (var r = Number.MAX_VALUE, i = -Number.MAX_VALUE, s = e.length, o = 0; s > o; o++) {
          var u = e[o].dot(t);
          r > u && (r = u), u > i && (i = u);
        }
        (n[0] = r), (n[1] = i);
      }
      function o(e, t, n, r, i, o) {
        var u = v.pop(),
          a = v.pop(),
          f = p.pop().copy(t).sub(e),
          l = f.dot(i);
        if ((s(n, i, u), s(r, i, a), (a[0] += l), (a[1] += l), u[0] > a[1] || a[0] > u[1])) return p.push(f), v.push(u), v.push(a), !0;
        if (o) {
          var c = 0;
          if (u[0] < a[0])
            if (((o.aInB = !1), u[1] < a[1])) (c = u[1] - a[0]), (o.bInA = !1);
            else {
              var h = u[1] - a[0],
                d = a[1] - u[0];
              c = d > h ? h : -d;
            }
          else if (((o.bInA = !1), u[1] > a[1])) (c = u[0] - a[1]), (o.aInB = !1);
          else {
            var h = u[1] - a[0],
              d = a[1] - u[0];
            c = d > h ? h : -d;
          }
          var m = Math.abs(c);
          m < o.overlap && ((o.overlap = m), o.overlapN.copy(i), 0 > c && o.overlapN.reverse());
        }
        return p.push(f), v.push(u), v.push(a), !1;
      }
      function u(e, t) {
        var n = e.len2(),
          r = t.dot(e);
        return 0 > r ? m : r > n ? y : g;
      }
      function a(e, t, n) {
        var r = p.pop().copy(t.pos).sub(e.pos),
          i = e.r + t.r,
          s = i * i,
          o = r.len2();
        if (o > s) return p.push(r), !1;
        if (n) {
          var u = Math.sqrt(o);
          (n.a = e), (n.b = t), (n.overlap = i - u), n.overlapN.copy(r.normalize()), n.overlapV.copy(r).scale(n.overlap), (n.aInB = e.r <= t.r && u <= t.r - e.r), (n.bInA = t.r <= e.r && u <= e.r - t.r);
        }
        return p.push(r), !0;
      }
      function f(e, t, n) {
        for (var r = p.pop().copy(t.pos).sub(e.pos), i = t.r, s = i * i, o = e.points, a = o.length, f = p.pop(), l = p.pop(), c = 0; a > c; c++) {
          var h = c === a - 1 ? 0 : c + 1,
            d = 0 === c ? a - 1 : c - 1,
            v = 0,
            g = null;
          f.copy(e.edges[c]), l.copy(r).sub(o[c]), n && l.len2() > s && (n.aInB = !1);
          var b = u(f, l);
          if (b === m) {
            f.copy(e.edges[d]);
            var w = p.pop().copy(r).sub(o[d]);
            if (((b = u(f, w)), b === y)) {
              var E = l.len();
              if (E > i) return p.push(r), p.push(f), p.push(l), p.push(w), !1;
              n && ((n.bInA = !1), (g = l.normalize()), (v = i - E));
            }
            p.push(w);
          } else if (b === y) {
            if ((f.copy(e.edges[h]), l.copy(r).sub(o[h]), (b = u(f, l)), b === m)) {
              var E = l.len();
              if (E > i) return p.push(r), p.push(f), p.push(l), !1;
              n && ((n.bInA = !1), (g = l.normalize()), (v = i - E));
            }
          } else {
            var S = f.perp().normalize(),
              E = l.dot(S),
              x = Math.abs(E);
            if (E > 0 && x > i) return p.push(r), p.push(S), p.push(l), !1;
            n && ((g = S), (v = i - E), (E >= 0 || 2 * i > v) && (n.bInA = !1));
          }
          g && n && Math.abs(v) < Math.abs(n.overlap) && ((n.overlap = v), n.overlapN.copy(g));
        }
        return n && ((n.a = e), (n.b = t), n.overlapV.copy(n.overlapN).scale(n.overlap)), p.push(r), p.push(f), p.push(l), !0;
      }
      function l(e, t, n) {
        var r = f(t, e, n);
        if (r && n) {
          var i = n.a,
            s = n.aInB;
          n.overlapN.reverse(), n.overlapV.reverse(), (n.a = n.b), (n.b = i), (n.aInB = n.bInA), (n.bInA = s);
        }
        return r;
      }
      function c(e, t, n) {
        for (var r = e.points, i = r.length, s = t.points, u = s.length, a = 0; i > a; a++) if (o(e.pos, t.pos, r, s, e.normals[a], n)) return !1;
        for (var a = 0; u > a; a++) if (o(e.pos, t.pos, r, s, t.normals[a], n)) return !1;
        return n && ((n.a = e), (n.b = t), n.overlapV.copy(n.overlapN).scale(n.overlap)), !0;
      }
      var h = {};
      (h.Vector = e),
        (h.V = e),
        (e.prototype.copy = e.prototype.copy =
          function (e) {
            return (this.x = e.x), (this.y = e.y), this;
          }),
        (e.prototype.perp = e.prototype.perp =
          function () {
            var e = this.x;
            return (this.x = this.y), (this.y = -e), this;
          }),
        (e.prototype.rotate = e.prototype.rotate =
          function (e) {
            var t = this.x,
              n = this.y;
            return (this.x = t * Math.cos(e) - n * Math.sin(e)), (this.y = t * Math.sin(e) + n * Math.cos(e)), this;
          }),
        (e.prototype.rotatePrecalc = e.prototype.rotatePrecalc =
          function (e, t) {
            var n = this.x,
              r = this.y;
            return (this.x = n * t - r * e), (this.y = n * e + r * t), this;
          }),
        (e.prototype.reverse = e.prototype.reverse =
          function () {
            return (this.x = -this.x), (this.y = -this.y), this;
          }),
        (e.prototype.normalize = e.prototype.normalize =
          function () {
            var e = this.len();
            return e > 0 && ((this.x = this.x / e), (this.y = this.y / e)), this;
          }),
        (e.prototype.add = e.prototype.add =
          function (e) {
            return (this.x += e.x), (this.y += e.y), this;
          }),
        (e.prototype.sub = e.prototype.sub =
          function (e) {
            return (this.x -= e.x), (this.y -= e.y), this;
          }),
        (e.prototype.scale = e.prototype.scale =
          function (e, t) {
            return (this.x *= e), (this.y *= t || e), this;
          }),
        (e.prototype.project = e.prototype.project =
          function (e) {
            var t = this.dot(e) / e.len2();
            return (this.x = t * e.x), (this.y = t * e.y), this;
          }),
        (e.prototype.projectN = e.prototype.projectN =
          function (e) {
            var t = this.dot(e);
            return (this.x = t * e.x), (this.y = t * e.y), this;
          }),
        (e.prototype.reflect = e.prototype.reflect =
          function (e) {
            var t = this.x,
              n = this.y;
            return this.project(e).scale(2), (this.x -= t), (this.y -= n), this;
          }),
        (e.prototype.reflectN = e.prototype.reflectN =
          function (e) {
            var t = this.x,
              n = this.y;
            return this.projectN(e).scale(2), (this.x -= t), (this.y -= n), this;
          }),
        (e.prototype.dot = e.prototype.dot =
          function (e) {
            return this.x * e.x + this.y * e.y;
          }),
        (e.prototype.len2 = e.prototype.len2 =
          function () {
            return this.dot(this);
          }),
        (e.prototype.len = e.prototype.len =
          function () {
            return Math.sqrt(this.len2());
          }),
        (h.Circle = t),
        (h.Polygon = n),
        (n.prototype.recalc = n.prototype.recalc =
          function () {
            (this.edges = []), (this.normals = []);
            for (var t = this.points, n = t.length, r = 0; n > r; r++) {
              var i = t[r],
                s = n - 1 > r ? t[r + 1] : t[0],
                o = new e().copy(s).sub(i),
                u = new e().copy(o).perp().normalize();
              this.edges.push(o), this.normals.push(u);
            }
            return this;
          }),
        (n.prototype.rotate = n.prototype.rotate =
          function (e) {
            var t,
              n = this.points,
              r = this.edges,
              i = this.normals,
              s = n.length,
              o = Math.cos(e),
              u = Math.sin(e);
            for (t = 0; s > t; t++) n[t].rotatePrecalc(u, o), r[t].rotatePrecalc(u, o), i[t].rotatePrecalc(u, o);
            return this;
          }),
        (n.prototype.scale = n.prototype.scale =
          function (e, t) {
            var n,
              r = this.points,
              i = this.edges,
              s = this.normals,
              o = r.length;
            for (n = 0; o > n; n++) r[n].scale(e, t), i[n].scale(e, t), s[n].scale(e, t);
            return this;
          }),
        (n.prototype.translate = n.prototype.translate =
          function (e, t) {
            var n,
              r = this.points,
              i = r.length;
            for (n = 0; i > n; n++) (r[n].x += e), (r[n].y += t);
            return this;
          }),
        (h.Box = r),
        (r.prototype.toPolygon = r.prototype.toPolygon =
          function () {
            var t = this.pos,
              r = this.w,
              i = this.h;
            return new n(new e(t.x, t.y), [new e(), new e(r, 0), new e(r, i), new e(0, i)]);
          }),
        (h.Response = i),
        (i.prototype.clear = i.prototype.clear =
          function () {
            return (this.aInB = !0), (this.bInA = !0), (this.overlap = Number.MAX_VALUE), this;
          });
      for (var p = [], d = 0; 10 > d; d++) p.push(new e());
      for (var v = [], d = 0; 5 > d; d++) v.push([]);
      var m = -1,
        g = 0,
        y = 1;
      return (h.testCircleCircle = a), (h.testPolygonCircle = f), (h.testCirclePolygon = l), (h.testPolygonPolygon = c), h;
    }),
    (n.Physics = {}),
    (n.Physics.Arcade = function (e) {
      (this.game = e),
        (this.gravity = new n.Point()),
        (this.worldLeft = null),
        (this.worldRight = null),
        (this.worldTop = null),
        (this.worldBottom = null),
        (this.worldPolys = [null, null, null, null]),
        (this.quadTree = new n.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels)),
        (this.maxObjects = 10),
        (this.maxLevels = 4),
        (this._mapData = []),
        (this._mapTiles = 0),
        (this._result = !1),
        (this._total = 0),
        (this._angle = 0),
        (this._drag = 0),
        (this._dx = 0),
        (this._dy = 0),
        (this._p = new n.Point(0, 0)),
        (this._intersection = [0, 0, 0, 0]),
        (this._gravityX = 0),
        (this._gravityY = 0),
        (this._response = new SAT.Response()),
        this.setBoundsToWorld(!0, !0, !0, !0);
    }),
    (n.Physics.Arcade.RECT = 0),
    (n.Physics.Arcade.CIRCLE = 1),
    (n.Physics.Arcade.POLYGON = 2),
    (n.Physics.Arcade.prototype = {
      checkBounds: function (e) {
        if (!e.collideWorldBounds || (!this.worldLeft && !this.worldRight && !this.worldTop && !this.worldBottom)) return !1;
        this._response.clear();
        var t = SAT.testPolygonPolygon,
          r = e.polygon,
          i = !1;
        return (
          e.type === n.Physics.Arcade.CIRCLE && ((t = SAT.testPolygonCircle), (r = e.shape)),
          this.worldLeft && t(this.worldPolys[0], r, this._response)
            ? ((e.blocked.left = !0), r.pos.add(this._response.overlapV), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (i = !0))
            : this.worldRight && t(this.worldPolys[1], r, this._response) && ((e.blocked.right = !0), r.pos.add(this._response.overlapV), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (i = !0)),
          this._response.clear(),
          this.worldTop && t(this.worldPolys[2], r, this._response)
            ? ((e.blocked.up = !0), r.pos.add(this._response.overlapV), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (i = !0))
            : this.worldBottom && t(this.worldPolys[3], r, this._response) && ((e.blocked.down = !0), r.pos.add(this._response.overlapV), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (i = !0)),
          i
        );
      },
      setBoundsToWorld: function (e, t, n, r) {
        this.setBounds(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, e, t, n, r);
      },
      setBounds: function (e, t, n, r, i, s, o, u) {
        "undefined" == typeof i && (i = !0), "undefined" == typeof s && (s = !0), "undefined" == typeof o && (o = !0), "undefined" == typeof u && (u = !0);
        var a = 100;
        i ? ((this.worldLeft = new SAT.Box(new SAT.Vector(e - a, t), a, r)), (this.worldPolys[0] = this.worldLeft.toPolygon())) : ((this.worldLeft = null), (this.worldPolys[0] = null)),
          s ? ((this.worldRight = new SAT.Box(new SAT.Vector(e + n, t), a, r)), (this.worldPolys[1] = this.worldRight.toPolygon())) : ((this.worldRight = null), (this.worldPolys[1] = null)),
          o ? ((this.worldTop = new SAT.Box(new SAT.Vector(e, t - a), n, a)), (this.worldPolys[2] = this.worldTop.toPolygon())) : ((this.worldTop = null), (this.worldPolys[2] = null)),
          u ? ((this.worldBottom = new SAT.Box(new SAT.Vector(e, t + r), n, a)), (this.worldPolys[3] = this.worldBottom.toPolygon())) : ((this.worldBottom = null), (this.worldPolys[3] = null));
      },
      updateMotion: function (e) {
        return (
          e.allowGravity ? ((this._gravityX = this.gravity.x + e.gravity.x), (this._gravityY = this.gravity.y + e.gravity.y)) : ((this._gravityX = e.gravity.x), (this._gravityY = e.gravity.y)),
          ((this._gravityX < 0 && e.blocked.left) || (this._gravityX > 0 && e.blocked.right)) && (this._gravityX = 0),
          ((this._gravityY < 0 && e.blocked.up) || (this._gravityY > 0 && e.blocked.down)) && (this._gravityY = 0),
          e.allowRotation &&
            ((this._velocityDelta = e.angularAcceleration * this.game.time.physicsElapsed),
            0 !== e.angularDrag &&
              0 === e.angularAcceleration &&
              ((this._drag = e.angularDrag * this.game.time.physicsElapsed), e.angularVelocity > 0 ? (e.angularVelocity -= this._drag) : e.angularVelocity < 0 && (e.angularVelocity += this._drag)),
            (e.rotation += this.game.time.physicsElapsed * (e.angularVelocity + this._velocityDelta / 2)),
            (e.angularVelocity += this._velocityDelta),
            e.angularVelocity > e.maxAngular ? (e.angularVelocity = e.maxAngular) : e.angularVelocity < -e.maxAngular && (e.angularVelocity = -e.maxAngular)),
          this._p.setTo((e.acceleration.x + this._gravityX) * this.game.time.physicsElapsed, (e.acceleration.y + this._gravityY) * this.game.time.physicsElapsed),
          this._p
        );
      },
      overlap: function (e, t, n, r, i) {
        if (((n = n || null), (r = r || null), (i = i || n), (this._result = !1), (this._total = 0), Array.isArray(t))) for (var s = 0, o = t.length; o > s; s++) this.collideHandler(e, t[s], n, r, i, !0);
        else this.collideHandler(e, t, n, r, i, !0);
        return this._total > 0;
      },
      collide: function (e, t, n, r, i) {
        if (((n = n || null), (r = r || null), (i = i || n), (this._result = !1), (this._total = 0), Array.isArray(t))) for (var s = 0, o = t.length; o > s; s++) this.collideHandler(e, t[s], n, r, i, !1);
        else this.collideHandler(e, t, n, r, i, !1);
        return this._total > 0;
      },
      collideHandler: function (e, t, r, i, s, o) {
        return "undefined" != typeof t || (e.type !== n.GROUP && e.type !== n.EMITTER)
          ? void (
              e &&
              t &&
              e.exists &&
              t.exists &&
              (e.type == n.SPRITE || e.type == n.TILESPRITE
                ? t.type == n.SPRITE || t.type == n.TILESPRITE
                  ? this.collideSpriteVsSprite(e, t, r, i, s, o)
                  : t.type == n.GROUP || t.type == n.EMITTER
                  ? this.collideSpriteVsGroup(e, t, r, i, s, o)
                  : t.type == n.TILEMAPLAYER && this.collideSpriteVsTilemapLayer(e, t, r, i, s)
                : e.type == n.GROUP
                ? t.type == n.SPRITE || t.type == n.TILESPRITE
                  ? this.collideSpriteVsGroup(t, e, r, i, s, o)
                  : t.type == n.GROUP || t.type == n.EMITTER
                  ? this.collideGroupVsGroup(e, t, r, i, s, o)
                  : t.type == n.TILEMAPLAYER && this.collideGroupVsTilemapLayer(e, t, r, i, s)
                : e.type == n.TILEMAPLAYER
                ? t.type == n.SPRITE || t.type == n.TILESPRITE
                  ? this.collideSpriteVsTilemapLayer(t, e, r, i, s)
                  : (t.type == n.GROUP || t.type == n.EMITTER) && this.collideGroupVsTilemapLayer(t, e, r, i, s)
                : e.type == n.EMITTER &&
                  (t.type == n.SPRITE || t.type == n.TILESPRITE
                    ? this.collideSpriteVsGroup(t, e, r, i, s, o)
                    : t.type == n.GROUP || t.type == n.EMITTER
                    ? this.collideGroupVsGroup(e, t, r, i, s, o)
                    : t.type == n.TILEMAPLAYER && this.collideGroupVsTilemapLayer(e, t, r, i, s)))
            )
          : void this.collideGroupVsSelf(e, r, i, s, o);
      },
      collideSpriteVsSprite: function (e, t, n, r, i, s) {
        this.separate(e.body, t.body, r, i, s) && (n && n.call(i, e, t), this._total++);
      },
      collideSpriteVsGroup: function (e, t, r, i, s, o) {
        if (0 !== t.length) {
          this.quadTree.clear(),
            (this.quadTree = new n.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels)),
            this.quadTree.populate(t),
            (this._potentials = this.quadTree.retrieve(e));
          for (var u = 0, a = this._potentials.length; a > u; u++) this.separate(e.body, this._potentials[u], i, s, o) && (r && r.call(s, e, this._potentials[u].sprite), this._total++);
        }
      },
      collideGroupVsSelf: function (e, t, n, r, i) {
        if (0 !== e.length)
          for (var s = e._container.children.length, o = 0; s > o; o++)
            for (var u = o + 1; s >= u; u++)
              e._container.children[o] && e._container.children[u] && e._container.children[o].exists && e._container.children[u].exists && this.collideSpriteVsSprite(e._container.children[o], e._container.children[u], t, n, r, i);
      },
      collideGroupVsGroup: function (e, t, n, r, i, s) {
        if (0 !== e.length && 0 !== t.length && e._container.first._iNext) {
          var o = e._container.first._iNext;
          do o.exists && this.collideSpriteVsGroup(o, t, n, r, i, s), (o = o._iNext);
          while (o != e._container.last._iNext);
        }
      },
      collideSpriteVsTilemapLayer: function (e, t, n, r, i) {
        if (((this._mapData = t.getTiles(e.body.left, e.body.top, e.body.width, e.body.height, !0)), 0 !== this._mapData.length))
          if (this._mapData.length > 1) this.separateTiles(e.body, this._mapData);
          else {
            var s = 0;
            this.separateTile(e.body, this._mapData[s]) && (r ? r.call(i, e, this._mapData[s]) && (this._total++, n && n.call(i, e, this._mapData[s])) : (this._total++, n && n.call(i, e, this._mapData[s])));
          }
      },
      collideGroupVsTilemapLayer: function (e, t, n, r, i) {
        if (0 !== e.length && e._container.first._iNext) {
          var s = e._container.first._iNext;
          do s.exists && this.collideSpriteVsTilemapLayer(s, t, n, r, i), (s = s._iNext);
          while (s != e._container.last._iNext);
        }
      },
      separate: function (e, t, n, r, i) {
        return e === t || this.intersects(e, t) === !1 ? !1 : n && n.call(r, e.sprite, t.sprite) === !1 ? !1 : (this._response.clear(), i ? e.overlap(t, this._response) : e.overlap(t, this._response) ? e.separate(t, this._response) : !1);
      },
      intersects: function (e, t) {
        var n = !1;
        (e.width <= 0 || e.height <= 0 || t.width <= 0 || t.height <= 0) && (n = !1), (n = !(e.right < t.left || e.bottom < t.top || e.left > t.right || e.top > t.bottom)), !n && e.inContact(t) && e.removeContact(t);
      },
      tileIntersects: function (e, t) {
        return e.width <= 0 || e.height <= 0 || t.width <= 0 || t.height <= 0
          ? ((this._intersection[4] = 0), this._intersection)
          : e.right < t.x || e.bottom < t.y || e.left > t.right || e.top > t.bottom
          ? ((this._intersection[4] = 0), this._intersection)
          : ((this._intersection[0] = Math.max(e.left, t.x)),
            (this._intersection[1] = Math.max(e.top, t.y)),
            (this._intersection[2] = Math.min(e.right, t.right) - this._intersection[0]),
            (this._intersection[3] = Math.min(e.bottom, t.bottom) - this._intersection[1]),
            (this._intersection[4] = 1),
            this._intersection);
      },
      separateTiles: function (e, t) {
        for (var n, r = !1, i = 0; i < t.length; i++) (n = t[i]), this.separateTile(e, n) && (r = !0);
        return r;
      },
      separateTile: function (e, t) {
        if (((this._intersection = this.tileIntersects(e, t)), 0 === this._intersection[4] || 0 === this._intersection[2] || 0 === this._intersection[3])) return !1;
        if (t.tile.callback || t.layer.callbacks[t.tile.index]) {
          if (t.tile.callback && t.tile.callback.call(t.tile.callbackContext, e.sprite, t) === !1) return !1;
          if (t.layer.callbacks[t.tile.index] && t.layer.callbacks[t.tile.index].callback.call(t.layer.callbacks[t.tile.index].callbackContext, e.sprite, t) === !1) return !1;
        }
        (e.overlapX = 0), (e.overlapY = 0);
        var n = !1;
        return (
          e.deltaX() < 0 && e.checkCollision.left && t.tile.faceRight && !e.blocked.left
            ? ((e.overlapX = e.left - t.right), e.overlapX < 0 ? (n = !0) : (e.overlapX = 0))
            : e.deltaX() > 0 && e.checkCollision.right && t.tile.faceLeft && !e.blocked.right && ((e.overlapX = e.right - t.x), e.overlapX > 0 ? (n = !0) : (e.overlapX = 0)),
          e.deltaY() < 0 && e.checkCollision.up && t.tile.faceBottom && !e.blocked.up
            ? ((e.overlapY = e.top - t.bottom), e.overlapY < 0 ? (n = !0) : (e.overlapY = 0))
            : e.deltaY() > 0 && e.checkCollision.down && t.tile.faceTop && !e.blocked.down && ((e.overlapY = e.bottom - t.y), e.overlapY > 0 ? (n = !0) : (e.overlapY = 0)),
          0 !== e.overlapX && 0 !== e.overlapY && (Math.abs(e.overlapX) > Math.abs(e.overlapY) ? (e.overlapX = 0) : (e.overlapY = 0)),
          n ? this.processTileSeparation(e) : !1
        );
      },
      processTileSeparation: function (e) {
        return (
          e.overlapX < 0
            ? ((e.x -= e.overlapX), (e.left -= e.overlapX), (e.right -= e.overlapX), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (e.blocked.left = !0))
            : e.overlapX > 0 && ((e.x -= e.overlapX), (e.left -= e.overlapX), (e.right -= e.overlapX), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (e.blocked.right = !0)),
          e.overlapY < 0
            ? ((e.y -= e.overlapY), (e.top -= e.overlapY), (e.bottom -= e.overlapY), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (e.blocked.up = !0))
            : e.overlapY > 0 && ((e.y -= e.overlapY), (e.top -= e.overlapY), (e.bottom -= e.overlapY), (e.blocked.x = Math.floor(e.x)), (e.blocked.y = Math.floor(e.y)), (e.blocked.down = !0)),
          e.reboundCheck(e.overlapX, e.overlapY, !0),
          !0
        );
      },
      moveToObject: function (e, t, n, r) {
        return (
          "undefined" == typeof n && (n = 60),
          "undefined" == typeof r && (r = 0),
          (this._angle = Math.atan2(t.y - e.y, t.x - e.x)),
          r > 0 && (n = this.distanceBetween(e, t) / (r / 1e3)),
          (e.body.velocity.x = Math.cos(this._angle) * n),
          (e.body.velocity.y = Math.sin(this._angle) * n),
          this._angle
        );
      },
      moveToPointer: function (e, t, n, r) {
        return (
          "undefined" == typeof t && (t = 60),
          (n = n || this.game.input.activePointer),
          "undefined" == typeof r && (r = 0),
          (this._angle = this.angleToPointer(e, n)),
          r > 0 && (t = this.distanceToPointer(e, n) / (r / 1e3)),
          (e.body.velocity.x = Math.cos(this._angle) * t),
          (e.body.velocity.y = Math.sin(this._angle) * t),
          this._angle
        );
      },
      moveToXY: function (e, t, n, r, i) {
        return (
          "undefined" == typeof r && (r = 60),
          "undefined" == typeof i && (i = 0),
          (this._angle = Math.atan2(n - e.y, t - e.x)),
          i > 0 && (r = this.distanceToXY(e, t, n) / (i / 1e3)),
          (e.body.velocity.x = Math.cos(this._angle) * r),
          (e.body.velocity.y = Math.sin(this._angle) * r),
          this._angle
        );
      },
      velocityFromAngle: function (e, t, r) {
        return "undefined" == typeof t && (t = 60), (r = r || new n.Point()), r.setTo(Math.cos(this.game.math.degToRad(e)) * t, Math.sin(this.game.math.degToRad(e)) * t);
      },
      velocityFromRotation: function (e, t, r) {
        return "undefined" == typeof t && (t = 60), (r = r || new n.Point()), r.setTo(Math.cos(e) * t, Math.sin(e) * t);
      },
      accelerationFromRotation: function (e, t, r) {
        return "undefined" == typeof t && (t = 60), (r = r || new n.Point()), r.setTo(Math.cos(e) * t, Math.sin(e) * t);
      },
      accelerateToObject: function (e, t, n, r, i) {
        return (
          "undefined" == typeof n && (n = 60),
          "undefined" == typeof r && (r = 1e3),
          "undefined" == typeof i && (i = 1e3),
          (this._angle = this.angleBetween(e, t)),
          e.body.acceleration.setTo(Math.cos(this._angle) * n, Math.sin(this._angle) * n),
          e.body.maxVelocity.setTo(r, i),
          this._angle
        );
      },
      accelerateToPointer: function (e, t, n, r, i) {
        return (
          "undefined" == typeof n && (n = 60),
          "undefined" == typeof t && (t = this.game.input.activePointer),
          "undefined" == typeof r && (r = 1e3),
          "undefined" == typeof i && (i = 1e3),
          (this._angle = this.angleToPointer(e, t)),
          e.body.acceleration.setTo(Math.cos(this._angle) * n, Math.sin(this._angle) * n),
          e.body.maxVelocity.setTo(r, i),
          this._angle
        );
      },
      accelerateToXY: function (e, t, n, r, i, s) {
        return (
          "undefined" == typeof r && (r = 60),
          "undefined" == typeof i && (i = 1e3),
          "undefined" == typeof s && (s = 1e3),
          (this._angle = this.angleToXY(e, t, n)),
          e.body.acceleration.setTo(Math.cos(this._angle) * r, Math.sin(this._angle) * r),
          e.body.maxVelocity.setTo(i, s),
          this._angle
        );
      },
      distanceBetween: function (e, t) {
        return (this._dx = e.x - t.x), (this._dy = e.y - t.y), Math.sqrt(this._dx * this._dx + this._dy * this._dy);
      },
      distanceToXY: function (e, t, n) {
        return (this._dx = e.x - t), (this._dy = e.y - n), Math.sqrt(this._dx * this._dx + this._dy * this._dy);
      },
      distanceToPointer: function (e, t) {
        return (t = t || this.game.input.activePointer), (this._dx = e.x - t.x), (this._dy = e.y - t.y), Math.sqrt(this._dx * this._dx + this._dy * this._dy);
      },
      angleBetween: function (e, t) {
        return (this._dx = t.x - e.x), (this._dy = t.y - e.y), Math.atan2(this._dy, this._dx);
      },
      angleToXY: function (e, t, n) {
        return (this._dx = t - e.x), (this._dy = n - e.y), Math.atan2(this._dy, this._dx);
      },
      angleToPointer: function (e, t) {
        return (t = t || this.game.input.activePointer), (this._dx = t.worldX - e.x), (this._dy = t.worldY - e.y), Math.atan2(this._dy, this._dx);
      },
    }),
    (n.Physics.Arcade.prototype.constructor = n.Physics.Arcade),
    (n.Physics.Arcade.Body = function (e) {
      (this.sprite = e),
        (this.game = e.game),
        (this.offset = new n.Point()),
        (this.preX = e.world.x),
        (this.preY = e.world.y),
        (this.preRotation = e.angle),
        (this.velocity = new n.Point()),
        (this.acceleration = new n.Point()),
        (this.speed = 0),
        (this.angle = 0),
        (this.gravity = new n.Point()),
        (this.bounce = new n.Point()),
        (this.minVelocity = new n.Point()),
        (this.maxVelocity = new n.Point(1e3, 1e3)),
        (this.angularVelocity = 0),
        (this.angularAcceleration = 0),
        (this.angularDrag = 0),
        (this.maxAngular = 1e3),
        (this.mass = 1),
        (this.linearDamping = 0),
        (this.checkCollision = { none: !1, any: !0, up: !0, down: !0, left: !0, right: !0 }),
        (this.touching = { none: !0, up: !1, down: !1, left: !1, right: !1 }),
        (this.blocked = { x: 0, y: 0, up: !1, down: !1, left: !1, right: !1 }),
        (this.facing = n.NONE),
        (this.rebound = !0),
        (this.immovable = !1),
        (this.moves = !0),
        (this.rotation = 0),
        (this.allowRotation = !0),
        (this.allowGravity = !0),
        (this.customSeparateCallback = null),
        (this.customSeparateContext = null),
        (this.collideCallback = null),
        (this.collideCallbackContext = null),
        (this.collideWorldBounds = !1),
        (this.type = n.Physics.Arcade.RECT),
        (this.shape = null),
        (this.polygon = null),
        (this.left = 0),
        (this.right = 0),
        (this.top = 0),
        (this.bottom = 0),
        (this.width = 0),
        (this.height = 0),
        (this.contacts = []),
        (this.overlapX = 0),
        (this.overlapY = 0),
        (this._temp = null),
        (this._dx = 0),
        (this._dy = 0),
        (this._sx = e.scale.x),
        (this._sy = e.scale.y),
        (this._distances = [0, 0, 0, 0]),
        (this._vx = 0),
        (this._vy = 0),
        this.setRectangle(e.width, e.height, 0, 0),
        (this.sprite.events.onBeginContact = new n.Signal()),
        (this.sprite.events.onEndContact = new n.Signal());
    }),
    (n.Physics.Arcade.Body.prototype = {
      updateScale: function () {
        this.polygon ? this.polygon.scale(this.sprite.scale.x / this._sx, this.sprite.scale.y / this._sy) : (this.shape.r *= Math.max(this.sprite.scale.x, this.sprite.scale.y)),
          (this._sx = this.sprite.scale.x),
          (this._sy = this.sprite.scale.y);
      },
      preUpdate: function () {
        (this.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.offset.x),
          (this.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.offset.y),
          (this.preX = this.x),
          (this.preY = this.y),
          (this.preRotation = this.sprite.angle),
          (this.rotation = this.preRotation),
          (this.sprite.scale.x !== this._sx || this.sprite.scale.y !== this._sy) && this.updateScale(),
          this.checkBlocked(),
          (this.touching.none = !0),
          (this.touching.up = !1),
          (this.touching.down = !1),
          (this.touching.left = !1),
          (this.touching.right = !1),
          this.moves
            ? ((this._vx !== this.velocity.x || this._vy !== this.velocity.y) &&
                ((this._vx = this.velocity.x), (this._vy = this.velocity.y), (this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y)), (this.angle = Math.atan2(this.velocity.y, this.velocity.x))),
              this.game.physics.checkBounds(this) && this.reboundCheck(!0, !0, !0),
              this.applyDamping(),
              this.integrateVelocity(),
              this.updateBounds(),
              this.checkBlocked())
            : this.updateBounds();
      },
      checkBlocked: function () {
        (!this.blocked.left && !this.blocked.right) || (Math.floor(this.x) === this.blocked.x && Math.floor(this.y) === this.blocked.y) || ((this.blocked.left = !1), (this.blocked.right = !1)),
          (!this.blocked.up && !this.blocked.down) || (Math.floor(this.x) === this.blocked.x && Math.floor(this.y) === this.blocked.y) || ((this.blocked.up = !1), (this.blocked.down = !1));
      },
      updateBounds: function () {
        this.type === n.Physics.Arcade.CIRCLE
          ? ((this.left = this.shape.pos.x - this.shape.r), (this.right = this.shape.pos.x + this.shape.r), (this.top = this.shape.pos.y - this.shape.r), (this.bottom = this.shape.pos.y + this.shape.r))
          : ((this.left = n.Math.minProperty("x", this.polygon.points) + this.polygon.pos.x),
            (this.right = n.Math.maxProperty("x", this.polygon.points) + this.polygon.pos.x),
            (this.top = n.Math.minProperty("y", this.polygon.points) + this.polygon.pos.y),
            (this.bottom = n.Math.maxProperty("y", this.polygon.points) + this.polygon.pos.y)),
          (this.width = this.right - this.left),
          (this.height = this.bottom - this.top);
      },
      applyDamping: function () {
        this.linearDamping > 0 &&
          this.acceleration.isZero() &&
          (this.speed > this.linearDamping ? (this.speed -= this.linearDamping) : (this.speed = 0),
          this.speed > 0 &&
            ((this.velocity.x = Math.cos(this.angle) * this.speed),
            (this.velocity.y = Math.sin(this.angle) * this.speed),
            (this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y)),
            (this.angle = Math.atan2(this.velocity.y, this.velocity.x))));
      },
      reboundCheck: function (e, t, n) {
        if (
          e &&
          (n &&
            0 !== this.bounce.x &&
            (this.blocked.left || this.blocked.right || this.touching.left || this.touching.right) &&
            ((this._vx <= 0 && this.velocity.x > 0) || (this._vx >= 0 && this.velocity.x < 0) || ((this.velocity.x *= -this.bounce.x), (this.angle = Math.atan2(this.velocity.y, this.velocity.x)))),
          0 === this.bounce.x || Math.abs(this.velocity.x) < this.minVelocity.x)
        ) {
          var r = this.getUpwardForce();
          (((this.blocked.left || this.touching.left) && (0 > r || this.velocity.x < 0)) || ((this.blocked.right || this.touching.right) && (r > 0 || this.velocity.x > 0))) && (this.velocity.x = 0);
        }
        if (
          t &&
          (n &&
            0 !== this.bounce.y &&
            (this.blocked.up || this.blocked.down || this.touching.up || this.touching.down) &&
            ((this._vy <= 0 && this.velocity.y > 0) || (this._vy >= 0 && this.velocity.y < 0) || ((this.velocity.y *= -this.bounce.y), (this.angle = Math.atan2(this.velocity.y, this.velocity.x)))),
          0 === this.bounce.y || Math.abs(this.velocity.y) < this.minVelocity.y)
        ) {
          var i = this.getDownwardForce();
          (((this.blocked.up || this.touching.up) && (0 > i || this.velocity.y < 0)) || ((this.blocked.down || this.touching.down) && (i > 0 || this.velocity.y > 0))) && (this.velocity.y = 0);
        }
      },
      getUpwardForce: function () {
        return this.allowGravity ? this.gravity.x + this.game.physics.gravity.x + this.velocity.x : this.gravity.x + this.velocity.x;
      },
      getDownwardForce: function () {
        return this.allowGravity ? this.gravity.y + this.game.physics.gravity.y + this.velocity.y : this.gravity.y + this.velocity.y;
      },
      sub: function (e) {
        (this.x -= e.x), (this.y -= e.y);
      },
      add: function (e) {
        (this.x += e.x), (this.y += e.y);
      },
      give: function (e, t) {
        this.add(t.overlapV), this.rebound && (this.processRebound(e), this.reboundCheck(!0, !0, !1), e.reboundCheck(!0, !0, !1));
      },
      take: function (e, t) {
        this.sub(t.overlapV), this.rebound && (this.processRebound(e), this.reboundCheck(!0, !0, !1), e.reboundCheck(!0, !0, !1));
      },
      split: function (e, t) {
        t.overlapV.scale(0.5), this.sub(t.overlapV), e.add(t.overlapV), this.rebound && (this.exchange(e), this.reboundCheck(!0, !0, !1), e.reboundCheck(!0, !0, !1));
      },
      exchange: function (e) {
        if (this.mass === e.mass && this.speed > 0 && e.speed > 0)
          (this._dx = e.velocity.x),
            (this._dy = e.velocity.y),
            (e.velocity.x = this.velocity.x * e.bounce.x),
            (e.velocity.y = this.velocity.y * e.bounce.x),
            (this.velocity.x = this._dx * this.bounce.x),
            (this.velocity.y = this._dy * this.bounce.y);
        else {
          var t = Math.sqrt((e.velocity.x * e.velocity.x * e.mass) / this.mass) * (e.velocity.x > 0 ? 1 : -1),
            n = Math.sqrt((this.velocity.x * this.velocity.x * this.mass) / e.mass) * (this.velocity.x > 0 ? 1 : -1),
            r = 0.5 * (t + n);
          (t -= r),
            (n -= r),
            (this.velocity.x = t),
            (e.velocity.x = n),
            (t = Math.sqrt((e.velocity.y * e.velocity.y * e.mass) / this.mass) * (e.velocity.y > 0 ? 1 : -1)),
            (n = Math.sqrt((this.velocity.y * this.velocity.y * this.mass) / e.mass) * (this.velocity.y > 0 ? 1 : -1)),
            (r = 0.5 * (t + n)),
            (t -= r),
            (n -= r),
            (this.velocity.y = t),
            (e.velocity.y = n);
        }
      },
      processRebound: function (e) {
        (this._vx <= 0 && this.velocity.x > 0) || (this._vx >= 0 && this.velocity.x < 0) || (this.velocity.x = e.velocity.x - this.velocity.x * this.bounce.x),
          (this._vy <= 0 && this.velocity.y > 0) || (this._vy >= 0 && this.velocity.y < 0) || (this.velocity.y = e.velocity.y - this.velocity.y * this.bounce.y),
          (this.angle = Math.atan2(this.velocity.y, this.velocity.x)),
          this.reboundCheck(!0, !0, !1);
      },
      overlap: function (e, t) {
        var r = !1;
        return (
          (this.type !== n.Physics.Arcade.RECT && this.type !== n.Physics.Arcade.POLYGON) || (e.type !== n.Physics.Arcade.RECT && e.type !== n.Physics.Arcade.POLYGON)
            ? this.type === n.Physics.Arcade.CIRCLE && e.type === n.Physics.Arcade.CIRCLE
              ? (r = SAT.testCircleCircle(this.shape, e.shape, t))
              : (this.type !== n.Physics.Arcade.RECT && this.type !== n.Physics.Arcade.POLYGON) || e.type !== n.Physics.Arcade.CIRCLE
              ? this.type !== n.Physics.Arcade.CIRCLE || (e.type !== n.Physics.Arcade.RECT && e.type !== n.Physics.Arcade.POLYGON) || (r = SAT.testCirclePolygon(this.shape, e.polygon, t))
              : (r = SAT.testPolygonCircle(this.polygon, e.shape, t))
            : (r = SAT.testPolygonPolygon(this.polygon, e.polygon, t)),
          r || this.removeContact(e),
          r
        );
      },
      inContact: function (e) {
        return -1 != this.contacts.indexOf(e);
      },
      addContact: function (e) {
        return this.inContact(e) ? !1 : (this.contacts.push(e), this.sprite.events.onBeginContact.dispatch(this.sprite, e.sprite, this, e), e.addContact(this), !0);
      },
      removeContact: function (e) {
        return this.inContact(e) ? (this.contacts.splice(this.contacts.indexOf(e), 1), this.sprite.events.onEndContact.dispatch(this.sprite, e.sprite, this, e), e.removeContact(this), !0) : !1;
      },
      separate: function (e, t) {
        if (this.inContact(e)) return !1;
        if (
          ((this._distances[0] = e.right - this.x),
          (this._distances[1] = this.right - e.x),
          (this._distances[2] = e.bottom - this.y),
          (this._distances[3] = this.bottom - e.y),
          !t.overlapN.x || (0 !== this._distances[0] && 0 !== this._distances[1])
            ? !t.overlapN.y || (0 !== this._distances[2] && 0 !== this._distances[3]) || ((t.overlapN.x = !0), (t.overlapN.y = !1))
            : ((t.overlapN.x = !1), (t.overlapN.y = !0)),
          this.customSeparateCallback)
        )
          return this.customSeparateCallback.call(this.customSeparateContext, this, t, this._distances);
        var n = !1;
        return (
          t.overlapN.x
            ? this._distances[0] < this._distances[1]
              ? (n = this.hitLeft(e, t))
              : this._distances[1] < this._distances[0] && (n = this.hitRight(e, t))
            : t.overlapN.y && (this._distances[2] < this._distances[3] ? (n = this.hitTop(e, t)) : this._distances[3] < this._distances[2] && (n = this.hitBottom(e, t))),
          n ? (this.game.physics.checkBounds(this), this.game.physics.checkBounds(e)) : this.addContact(e),
          n
        );
      },
      hitLeft: function (e, t) {
        return this.checkCollision.left && e.checkCollision.right
          ? void (
              (!this.collideCallback || this.collideCallback.call(this.collideCallbackContext, n.LEFT, this, e, t)) &&
              (!this.moves || this.immovable || this.blocked.right || this.touching.right ? e.give(this, t) : e.immovable || e.blocked.left || e.touching.left ? this.take(e, t) : this.split(e, t),
              (this.touching.left = !0),
              (e.touching.right = !0))
            )
          : !1;
      },
      hitRight: function (e, t) {
        return this.checkCollision.right && e.checkCollision.left
          ? void (
              (!this.collideCallback || this.collideCallback.call(this.collideCallbackContext, n.RIGHT, this, e)) &&
              (!this.moves || this.immovable || this.blocked.left || this.touching.left ? e.give(this, t) : e.immovable || e.blocked.right || e.touching.right ? this.take(e, t) : this.split(e, t),
              (this.touching.right = !0),
              (e.touching.left = !0))
            )
          : !1;
      },
      hitTop: function (e, t) {
        return this.checkCollision.up && e.checkCollision.down
          ? this.collideCallback && !this.collideCallback.call(this.collideCallbackContext, n.UP, this, e)
            ? !1
            : (!this.moves || this.immovable || this.blocked.down || this.touching.down ? e.give(this, t) : e.immovable || e.blocked.up || e.touching.up ? this.take(e, t) : this.split(e, t),
              (this.touching.up = !0),
              (e.touching.down = !0),
              !0)
          : !1;
      },
      hitBottom: function (e, t) {
        return this.checkCollision.down && e.checkCollision.up
          ? this.collideCallback && !this.collideCallback.call(this.collideCallbackContext, n.DOWN, this, e)
            ? !1
            : (!this.moves || this.immovable || this.blocked.up || this.touching.up ? e.give(this, t) : e.immovable || e.blocked.down || e.touching.down ? this.take(e, t) : this.split(e, t),
              (this.touching.down = !0),
              (e.touching.up = !0),
              !0)
          : !1;
      },
      integrateVelocity: function () {
        (this._temp = this.game.physics.updateMotion(this)),
          (this._dx = this.game.time.physicsElapsed * (this.velocity.x + this._temp.x / 2)),
          (this._dy = this.game.time.physicsElapsed * (this.velocity.y + this._temp.y / 2)),
          ((this._dx < 0 && !this.blocked.left && !this.touching.left) || (this._dx > 0 && !this.blocked.right && !this.touching.right)) && ((this.x += this._dx), (this.velocity.x += this._temp.x)),
          ((this._dy < 0 && !this.blocked.up && !this.touching.up) || (this._dy > 0 && !this.blocked.down && !this.touching.down)) && ((this.y += this._dy), (this.velocity.y += this._temp.y)),
          this.velocity.x > this.maxVelocity.x ? (this.velocity.x = this.maxVelocity.x) : this.velocity.x < -this.maxVelocity.x && (this.velocity.x = -this.maxVelocity.x),
          this.velocity.y > this.maxVelocity.y ? (this.velocity.y = this.maxVelocity.y) : this.velocity.y < -this.maxVelocity.y && (this.velocity.y = -this.maxVelocity.y);
      },
      postUpdate: function () {
        this.moves &&
          (this.game.physics.checkBounds(this),
          this.reboundCheck(!0, !0, !0),
          (this._dx = this.deltaX()),
          (this._dy = this.deltaY()),
          this._dx < 0 ? (this.facing = n.LEFT) : this._dx > 0 && (this.facing = n.RIGHT),
          this._dy < 0 ? (this.facing = n.UP) : this._dy > 0 && (this.facing = n.DOWN),
          (0 !== this._dx || 0 !== this._dy) && ((this.sprite.x += this._dx), (this.sprite.y += this._dy)),
          this.allowRotation && 0 !== this.deltaZ() && (this.sprite.angle += this.deltaZ()),
          (this.sprite.scale.x !== this._sx || this.sprite.scale.y !== this._sy) && this.updateScale());
      },
      reset: function (e) {
        "undefined" == typeof e && (e = !1),
          e &&
            (this.gravity.setTo(0, 0),
            this.bounce.setTo(0, 0),
            this.minVelocity.setTo(5, 5),
            this.maxVelocity.setTo(1e3, 1e3),
            (this.angularDrag = 0),
            (this.maxAngular = 1e3),
            (this.mass = 1),
            (this.friction = 0),
            (this.checkCollision = { none: !1, any: !0, up: !0, down: !0, left: !0, right: !0 })),
          this.velocity.setTo(0, 0),
          this.acceleration.setTo(0, 0),
          (this.angularVelocity = 0),
          (this.angularAcceleration = 0),
          (this.blocked = { x: 0, y: 0, up: !1, down: !1, left: !1, right: !1 }),
          (this.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.offset.x),
          (this.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.offset.y),
          (this.preX = this.x),
          (this.preY = this.y),
          this.updateBounds(),
          (this.contacts.length = 0);
      },
      destroy: function () {
        (this.sprite = null), (this.collideCallback = null), (this.collideCallbackContext = null), (this.customSeparateCallback = null), (this.customSeparateContext = null), (this.contacts.length = 0);
      },
      setCircle: function (e, t, r) {
        "undefined" == typeof t && (t = this.sprite._cache.halfWidth),
          "undefined" == typeof r && (r = this.sprite._cache.halfHeight),
          (this.type = n.Physics.Arcade.CIRCLE),
          (this.shape = new SAT.Circle(new SAT.Vector(this.sprite.x, this.sprite.y), e)),
          (this.polygon = null),
          this.offset.setTo(t, r);
      },
      setRectangle: function (e, t, r, i) {
        "undefined" == typeof e && (e = this.sprite.width),
          "undefined" == typeof t && (t = this.sprite.height),
          "undefined" == typeof r && (r = -this.sprite._cache.halfWidth),
          "undefined" == typeof i && (i = -this.sprite._cache.halfHeight),
          (this.type = n.Physics.Arcade.RECT),
          (this.shape = new SAT.Box(new SAT.Vector(this.sprite.world.x, this.sprite.world.y), e, t)),
          (this.polygon = this.shape.toPolygon()),
          this.polygon.translate(r, i),
          this.offset.setTo(0, 0);
      },
      setPolygon: function (e) {
        if (((this.type = n.Physics.Arcade.POLYGON), (this.shape = null), Array.isArray(e) || (e = Array.prototype.slice.call(arguments)), "number" == typeof e[0])) {
          for (var t = [], r = 0, i = e.length; i > r; r += 2) t.push(new SAT.Vector(e[r], e[r + 1]));
          e = t;
        }
        (this.polygon = new SAT.Polygon(new SAT.Vector(this.sprite.center.x, this.sprite.center.y), e)), this.offset.setTo(0, 0);
      },
      translate: function (e, t) {
        this.polygon && this.polygon.translate(e, t);
      },
      onFloor: function () {
        return this.blocked.down;
      },
      onWall: function () {
        return !this.blocked.down && (this.blocked.left || this.blocked.right);
      },
      deltaX: function () {
        return this.x - this.preX;
      },
      deltaY: function () {
        return this.y - this.preY;
      },
      deltaZ: function () {
        return this.rotation - this.preRotation;
      },
    }),
    (n.Physics.Arcade.Body.prototype.constructor = n.Physics.Arcade.Body),
    Object.defineProperty(n.Physics.Arcade.Body.prototype, "x", {
      get: function () {
        return this.type === n.Physics.Arcade.CIRCLE ? this.shape.pos.x : this.polygon.pos.x;
      },
      set: function (e) {
        this.type === n.Physics.Arcade.CIRCLE ? (this.shape.pos.x = e) : (this.polygon.pos.x = e);
      },
    }),
    Object.defineProperty(n.Physics.Arcade.Body.prototype, "y", {
      get: function () {
        return this.type === n.Physics.Arcade.CIRCLE ? this.shape.pos.y : this.polygon.pos.y;
      },
      set: function (e) {
        this.type === n.Physics.Arcade.CIRCLE ? (this.shape.pos.y = e) : (this.polygon.pos.y = e);
      },
    }),
    (n.Particles = function (e) {
      (this.game = e), (this.emitters = {}), (this.ID = 0);
    }),
    (n.Particles.prototype = {
      add: function (e) {
        return (this.emitters[e.name] = e), e;
      },
      remove: function (e) {
        delete this.emitters[e.name];
      },
      update: function () {
        for (var e in this.emitters) this.emitters[e].exists && this.emitters[e].update();
      },
    }),
    (n.Particles.prototype.constructor = n.Particles),
    (n.Particles.Arcade = {}),
    (n.Particles.Arcade.Emitter = function (e, t, r, i) {
      (this.maxParticles = i || 50),
        n.Group.call(this, e),
        (this.name = "emitter" + this.game.particles.ID++),
        (this.type = n.EMITTER),
        (this.x = 0),
        (this.y = 0),
        (this.width = 1),
        (this.height = 1),
        (this.minParticleSpeed = new n.Point(-100, -100)),
        (this.maxParticleSpeed = new n.Point(100, 100)),
        (this.minParticleScale = 1),
        (this.maxParticleScale = 1),
        (this.minRotation = -360),
        (this.maxRotation = 360),
        (this.gravity = 100),
        (this.particleClass = null),
        (this.particleFriction = 0),
        (this.angularDrag = 0),
        (this.frequency = 100),
        (this.lifespan = 2e3),
        (this.bounce = new n.Point()),
        (this._quantity = 0),
        (this._timer = 0),
        (this._counter = 0),
        (this._explode = !0),
        (this.on = !1),
        (this.exists = !0),
        (this.emitX = t),
        (this.emitY = r);
    }),
    (n.Particles.Arcade.Emitter.prototype = Object.create(n.Group.prototype)),
    (n.Particles.Arcade.Emitter.prototype.constructor = n.Particles.Arcade.Emitter),
    (n.Particles.Arcade.Emitter.prototype.update = function () {
      if (this.on)
        if (this._explode) {
          this._counter = 0;
          do this.emitParticle(), this._counter++;
          while (this._counter < this._quantity);
          this.on = !1;
        } else this.game.time.now >= this._timer && (this.emitParticle(), this._counter++, this._quantity > 0 && this._counter >= this._quantity && (this.on = !1), (this._timer = this.game.time.now + this.frequency));
    }),
    (n.Particles.Arcade.Emitter.prototype.makeParticles = function (e, t, r, i, s) {
      "undefined" == typeof t && (t = 0), "undefined" == typeof r && (r = this.maxParticles), "undefined" == typeof i && (i = !1), "undefined" == typeof s && (s = !1);
      for (var o, u = 0, a = e, f = t; r > u; )
        null === this.particleClass && ("object" == typeof e && (a = this.game.rnd.pick(e)), "object" == typeof t && (f = this.game.rnd.pick(t)), (o = new n.Sprite(this.game, 0, 0, a, f))),
          i ? ((o.body.checkCollision.any = !0), (o.body.checkCollision.none = !1)) : (o.body.checkCollision.none = !0),
          (o.body.collideWorldBounds = s),
          (o.exists = !1),
          (o.visible = !1),
          o.anchor.setTo(0.5, 0.5),
          this.add(o),
          u++;
      return this;
    }),
    (n.Particles.Arcade.Emitter.prototype.kill = function () {
      (this.on = !1), (this.alive = !1), (this.exists = !1);
    }),
    (n.Particles.Arcade.Emitter.prototype.revive = function () {
      (this.alive = !0), (this.exists = !0);
    }),
    (n.Particles.Arcade.Emitter.prototype.start = function (e, t, n, r) {
      "undefined" == typeof e && (e = !0),
        "undefined" == typeof t && (t = 0),
        "undefined" == typeof n && (n = 250),
        "undefined" == typeof r && (r = 0),
        this.revive(),
        (this.visible = !0),
        (this.on = !0),
        (this._explode = e),
        (this.lifespan = t),
        (this.frequency = n),
        e ? (this._quantity = r) : (this._quantity += r),
        (this._counter = 0),
        (this._timer = this.game.time.now + n);
    }),
    (n.Particles.Arcade.Emitter.prototype.emitParticle = function () {
      var e = this.getFirstExists(!1);
      if (null != e) {
        if (
          (this.width > 1 || this.height > 1 ? e.reset(this.game.rnd.integerInRange(this.left, this.right), this.game.rnd.integerInRange(this.top, this.bottom)) : e.reset(this.emitX, this.emitY),
          (e.lifespan = this.lifespan),
          e.body.bounce.setTo(this.bounce.x, this.bounce.y),
          (e.body.velocity.x = this.minParticleSpeed.x != this.maxParticleSpeed.x ? this.game.rnd.integerInRange(this.minParticleSpeed.x, this.maxParticleSpeed.x) : this.minParticleSpeed.x),
          (e.body.velocity.y = this.minParticleSpeed.y != this.maxParticleSpeed.y ? this.game.rnd.integerInRange(this.minParticleSpeed.y, this.maxParticleSpeed.y) : this.minParticleSpeed.y),
          (e.body.gravity.y = this.gravity),
          (e.body.angularVelocity = this.minRotation != this.maxRotation ? this.game.rnd.integerInRange(this.minRotation, this.maxRotation) : this.minRotation),
          1 !== this.minParticleScale || 1 !== this.maxParticleScale)
        ) {
          var t = this.game.rnd.realInRange(this.minParticleScale, this.maxParticleScale);
          e.scale.setTo(t, t);
        }
        (e.body.friction = this.particleFriction), (e.body.angularDrag = this.angularDrag);
      }
    }),
    (n.Particles.Arcade.Emitter.prototype.setSize = function (e, t) {
      (this.width = e), (this.height = t);
    }),
    (n.Particles.Arcade.Emitter.prototype.setXSpeed = function (e, t) {
      (e = e || 0), (t = t || 0), (this.minParticleSpeed.x = e), (this.maxParticleSpeed.x = t);
    }),
    (n.Particles.Arcade.Emitter.prototype.setYSpeed = function (e, t) {
      (e = e || 0), (t = t || 0), (this.minParticleSpeed.y = e), (this.maxParticleSpeed.y = t);
    }),
    (n.Particles.Arcade.Emitter.prototype.setRotation = function (e, t) {
      (e = e || 0), (t = t || 0), (this.minRotation = e), (this.maxRotation = t);
    }),
    (n.Particles.Arcade.Emitter.prototype.at = function (e) {
      e.center && ((this.emitX = e.center.x), (this.emitY = e.center.y));
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "alpha", {
      get: function () {
        return this._container.alpha;
      },
      set: function (e) {
        this._container.alpha = e;
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (e) {
        this._container.visible = e;
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "x", {
      get: function () {
        return this.emitX;
      },
      set: function (e) {
        this.emitX = e;
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "y", {
      get: function () {
        return this.emitY;
      },
      set: function (e) {
        this.emitY = e;
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "left", {
      get: function () {
        return Math.floor(this.x - this.width / 2);
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "right", {
      get: function () {
        return Math.floor(this.x + this.width / 2);
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "top", {
      get: function () {
        return Math.floor(this.y - this.height / 2);
      },
    }),
    Object.defineProperty(n.Particles.Arcade.Emitter.prototype, "bottom", {
      get: function () {
        return Math.floor(this.y + this.height / 2);
      },
    }),
    (n.Tile = function (e, t, n, r, i, s) {
      (this.layer = e),
        (this.index = t),
        (this.x = n),
        (this.y = r),
        (this.width = i),
        (this.height = s),
        (this.alpha = 1),
        (this.properties = {}),
        (this.scanned = !1),
        (this.faceTop = !1),
        (this.faceBottom = !1),
        (this.faceLeft = !1),
        (this.faceRight = !1),
        (this.collides = !1),
        (this.collideNone = !0),
        (this.collideLeft = !1),
        (this.collideRight = !1),
        (this.collideUp = !1),
        (this.collideDown = !1),
        (this.callback = null),
        (this.callbackContext = this);
    }),
    (n.Tile.prototype = {
      setCollisionCallback: function (e, t) {
        (this.collisionCallbackContext = t), (this.collisionCallback = e);
      },
      destroy: function () {
        (this.collisionCallback = null), (this.collisionCallbackContext = null), (this.properties = null);
      },
      setCollision: function (e, t, n, r) {
        (this.collideLeft = e), (this.collideRight = t), (this.collideUp = n), (this.collideDown = r), (this.collideNone = e || t || n || r ? !1 : !0);
      },
      resetCollision: function () {
        (this.collideNone = !0), (this.collideLeft = !1), (this.collideRight = !1), (this.collideUp = !1), (this.collideDown = !1);
      },
      copy: function (e) {
        (this.index = e.index),
          (this.alpha = e.alpha),
          (this.properties = e.properties),
          (this.collides = e.collides),
          (this.collideNone = e.collideNone),
          (this.collideUp = e.collideUp),
          (this.collideDown = e.collideDown),
          (this.collideLeft = e.collideLeft),
          (this.collideRight = e.collideRight),
          (this.collisionCallback = e.collisionCallback),
          (this.collisionCallbackContext = e.collisionCallbackContext);
      },
    }),
    (n.Tile.prototype.constructor = n.Tile),
    Object.defineProperty(n.Tile.prototype, "canCollide", {
      get: function () {
        return this.collides || this.collisionCallback || this.layer.callbacks[this.index];
      },
    }),
    Object.defineProperty(n.Tile.prototype, "left", {
      get: function () {
        return this.x;
      },
    }),
    Object.defineProperty(n.Tile.prototype, "right", {
      get: function () {
        return this.x + this.width;
      },
    }),
    Object.defineProperty(n.Tile.prototype, "top", {
      get: function () {
        return this.y;
      },
    }),
    Object.defineProperty(n.Tile.prototype, "bottom", {
      get: function () {
        return this.y + this.height;
      },
    }),
    (n.Tilemap = function (e, t) {
      (this.game = e), (this.key = t);
      var r = n.TilemapParser.parse(this.game, t);
      null !== r &&
        ((this.width = r.width),
        (this.height = r.height),
        (this.tileWidth = r.tileWidth),
        (this.tileHeight = r.tileHeight),
        (this.orientation = r.orientation),
        (this.version = r.version),
        (this.properties = r.properties),
        (this.widthInPixels = r.widthInPixels),
        (this.heightInPixels = r.heightInPixels),
        (this.layers = r.layers),
        (this.tilesets = r.tilesets),
        (this.tiles = r.tiles),
        (this.objects = r.objects),
        (this.images = r.images),
        (this.currentLayer = 0),
        (this.debugMap = []),
        (this._results = []),
        (this._tempA = 0),
        (this._tempB = 0));
    }),
    (n.Tilemap.CSV = 0),
    (n.Tilemap.TILED_JSON = 1),
    (n.Tilemap.prototype = {
      create: function (e, t, r) {
        for (var i = [], s = 0; r > s; s++) {
          i[s] = [];
          for (var o = 0; t > o; o++) i[s][o] = 0;
        }
        this.layers.push({ name: e, width: t, height: r, alpha: 1, visible: !0, tileMargin: 0, tileSpacing: 0, format: n.Tilemap.CSV, data: i, indexes: [], dirty: !0 }), (this.currentLayer = this.layers.length - 1);
      },
      addTilesetImage: function (e, t) {
        if ("undefined" == typeof t) {
          if ("string" != typeof e) return !1;
          t = e;
        }
        return "string" == typeof e && (e = this.getTilesetIndex(e)), this.tilesets[e] ? ((this.tilesets[e].image = this.game.cache.getImage(t)), !0) : !1;
      },
      createFromTiles: function (e, t, n, r, i) {
        "undefined" == typeof i && (i = this.game.world);
      },
      createFromObjects: function (e, t, n, r, i, s, o) {
        if (("undefined" == typeof i && (i = !0), "undefined" == typeof s && (s = !0), "undefined" == typeof o && (o = this.game.world), !this.objects[e]))
          return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: " + e);
        for (var u, a = 0, f = this.objects[e].length; f > a; a++)
          if (this.objects[e][a].gid === t) {
            (u = o.create(this.objects[e][a].x, this.objects[e][a].y, n, r, i)), u.anchor.setTo(0, 1), (u.name = this.objects[e][a].name), (u.visible = this.objects[e][a].visible), (u.autoCull = s);
            for (property in this.objects[e][a].properties) o.set(u, property, this.objects[e][a].properties[property], !1, !1, 0);
          }
      },
      createLayer: function (e, t, r, i) {
        "undefined" == typeof t && (t = this.game.width), "undefined" == typeof r && (r = this.game.height), "undefined" == typeof i && (i = this.game.world);
        var s = e;
        return "string" == typeof e && (s = this.getLayerIndex(e)), null === s || s > this.layers.length ? void console.warn("Tilemap.createLayer: Invalid layer ID given: " + s) : i.add(new n.TilemapLayer(this.game, this, s, t, r));
      },
      getIndex: function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].name === t) return n;
        return null;
      },
      getLayerIndex: function (e) {
        return this.getIndex(this.layers, e);
      },
      getTilesetIndex: function (e) {
        return this.getIndex(this.tilesets, e);
      },
      getImageIndex: function (e) {
        return this.getIndex(this.images, e);
      },
      getObjectIndex: function (e) {
        return this.getIndex(this.objects, e);
      },
      setTileIndexCallback: function (e, t, n, r) {
        if (((r = this.getLayer(r)), "number" == typeof e)) this.layers[r].callbacks[e] = { callback: t, callbackContext: n };
        else for (var i = 0, s = e.length; s > i; i++) this.layers[r].callbacks[e[i]] = { callback: t, callbackContext: n };
      },
      setTileLocationCallback: function (e, t, n, r, i, s, o) {
        if (((o = this.getLayer(o)), this.copy(e, t, n, r, o), !(this._results.length < 2))) for (var u = 1; u < this._results.length; u++) this._results[u].setCollisionCallback(i, s);
      },
      setCollision: function (e, t, n) {
        if (("undefined" == typeof t && (t = !0), (n = this.getLayer(n)), "number" == typeof e)) return this.setCollisionByIndex(e, t, n, !0);
        for (var r = 0, i = e.length; i > r; r++) this.setCollisionByIndex(e[r], t, n, !1);
        this.calculateFaces(n);
      },
      setCollisionBetween: function (e, t, n, r) {
        if (("undefined" == typeof n && (n = !0), (r = this.getLayer(r)), !(e > t))) {
          for (var i = e; t >= i; i++) this.setCollisionByIndex(i, n, r, !1);
          this.calculateFaces(r);
        }
      },
      setCollisionByExclusion: function (e, t, n) {
        "undefined" == typeof t && (t = !0), (n = this.getLayer(n));
        for (var r = 0, i = this.tiles.length; i > r; r++) -1 === e.indexOf(r) && this.setCollisionByIndex(r, t, n, !1);
        this.calculateFaces(n);
      },
      setCollisionByIndex: function (e, t, n, r) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof n && (n = this.currentLayer), "undefined" == typeof r && (r = !0);
        for (var i = 0; i < this.layers[n].height; i++)
          for (var s = 0; s < this.layers[n].width; s++) {
            var o = this.layers[n].data[i][s];
            o && o.index === e && ((o.collides = t), (o.faceTop = t), (o.faceBottom = t), (o.faceLeft = t), (o.faceRight = t));
          }
        return r && this.calculateFaces(n), n;
      },
      getLayer: function (e) {
        return "undefined" == typeof e ? (e = this.currentLayer) : "string" == typeof e ? (e = this.getLayerIndex(e)) : e instanceof n.TilemapLayer && (e = e.index), e;
      },
      calculateFaces: function (e) {
        for (var t = null, n = null, r = null, i = null, s = 0, o = this.layers[e].height; o > s; s++)
          for (var u = 0, a = this.layers[e].width; a > u; u++) {
            var f = this.layers[e].data[s][u];
            f &&
              ((t = this.getTileAbove(e, u, s)),
              (n = this.getTileBelow(e, u, s)),
              (r = this.getTileLeft(e, u, s)),
              (i = this.getTileRight(e, u, s)),
              t && t.collides && (f.faceTop = !1),
              n && n.collides && (f.faceBottom = !1),
              r && r.collides && (f.faceLeft = !1),
              i && i.collides && (f.faceRight = !1));
          }
      },
      getTileAbove: function (e, t, n) {
        return n > 0 ? this.layers[e].data[n - 1][t] : null;
      },
      getTileBelow: function (e, t, n) {
        return n < this.layers[e].height - 1 ? this.layers[e].data[n + 1][t] : null;
      },
      getTileLeft: function (e, t, n) {
        return t > 0 ? this.layers[e].data[n][t - 1] : null;
      },
      getTileRight: function (e, t, n) {
        return t < this.layers[e].width - 1 ? this.layers[e].data[n][t + 1] : null;
      },
      setLayer: function (e) {
        (e = this.getLayer(e)), this.layers[e] && (this.currentLayer = e);
      },
      putTile: function (e, t, r, i) {
        (i = this.getLayer(i)),
          t >= 0 && t < this.layers[i].width && r >= 0 && r < this.layers[i].height && (e instanceof n.Tile ? this.layers[i].data[r][t].copy(e) : (this.layers[i].data[r][t].index = e), (this.layers[i].dirty = !0), this.calculateFaces(i));
      },
      putTileWorldXY: function (e, t, n, r, i, s) {
        (s = this.getLayer(s)), (t = this.game.math.snapToFloor(t, r) / r), (n = this.game.math.snapToFloor(n, i) / i), this.putTile(e, t, n, s);
      },
      getTile: function (e, t, n) {
        return (n = this.getLayer(n)), e >= 0 && e < this.layers[n].width && t >= 0 && t < this.layers[n].height ? this.layers[n].data[t][e] : void 0;
      },
      getTileWorldXY: function (e, t, n, r, i) {
        return (i = this.getLayer(i)), (e = this.game.math.snapToFloor(e, n) / n), (t = this.game.math.snapToFloor(t, r) / r), this.getTile(e, t, i);
      },
      copy: function (e, t, n, r, i) {
        if (((i = this.getLayer(i)), !this.layers[i])) return void (this._results.length = 0);
        "undefined" == typeof e && (e = 0),
          "undefined" == typeof t && (t = 0),
          "undefined" == typeof n && (n = this.layers[i].width),
          "undefined" == typeof r && (r = this.layers[i].height),
          0 > e && (e = 0),
          0 > t && (t = 0),
          n > this.layers[i].width && (n = this.layers[i].width),
          r > this.layers[i].height && (r = this.layers[i].height),
          (this._results.length = 0),
          this._results.push({ x: e, y: t, width: n, height: r, layer: i });
        for (var s = t; t + r > s; s++) for (var o = e; e + n > o; o++) this._results.push(this.layers[i].data[s][o]);
        return this._results;
      },
      paste: function (e, t, n, r) {
        if (("undefined" == typeof e && (e = 0), "undefined" == typeof t && (t = 0), (r = this.getLayer(r)), n && !(n.length < 2))) {
          for (var i = n[1].x - e, s = n[1].y - t, o = 1; o < n.length; o++) this.layers[r].data[s + n[o].y][i + n[o].x].copy(n[o]);
          (this.layers[r].dirty = !0), this.calculateFaces(r);
        }
      },
      swap: function (e, t, n, r, i, s, o) {
        (o = this.getLayer(o)), this.copy(n, r, i, s, o), this._results.length < 2 || ((this._tempA = e), (this._tempB = t), this._results.forEach(this.swapHandler, this), this.paste(n, r, this._results, o));
      },
      swapHandler: function (e, t) {
        e.index === this._tempA ? (this._results[t].index = this._tempB) : e.index === this._tempB && (this._results[t].index = this._tempA);
      },
      forEach: function (e, t, n, r, i, s, o) {
        (o = this.getLayer(o)), this.copy(n, r, i, s, o), this._results.length < 2 || (this._results.forEach(e, t), this.paste(n, r, this._results, o));
      },
      replace: function (e, t, n, r, i, s, o) {
        if (((o = this.getLayer(o)), this.copy(n, r, i, s, o), !(this._results.length < 2))) {
          for (var u = 1; u < this._results.length; u++) this._results[u].index === e && (this._results[u].index = t);
          this.paste(n, r, this._results, o);
        }
      },
      random: function (e, t, n, r, i) {
        if (((i = this.getLayer(i)), this.copy(e, t, n, r, i), !(this._results.length < 2))) {
          for (var s = [], o = 1; o < this._results.length; o++)
            if (this._results[o].index) {
              var u = this._results[o].index;
              -1 === s.indexOf(u) && s.push(u);
            }
          for (var a = 1; a < this._results.length; a++) this._results[a].index = this.game.rnd.pick(s);
          this.paste(e, t, this._results, i);
        }
      },
      shuffle: function (e, t, r, i, s) {
        if (((s = this.getLayer(s)), this.copy(e, t, r, i, s), !(this._results.length < 2))) {
          for (var o = [], u = 1; u < this._results.length; u++) this._results[u].index && o.push(this._results[u].index);
          n.Utils.shuffle(o);
          for (var a = 1; a < this._results.length; a++) this._results[a].index = o[a - 1];
          this.paste(e, t, this._results, s);
        }
      },
      fill: function (e, t, n, r, i, s) {
        if (((s = this.getLayer(s)), this.copy(t, n, r, i, s), !(this._results.length < 2))) {
          for (var o = 1; o < this._results.length; o++) this._results[o].index = e;
          this.paste(t, n, this._results, s);
        }
      },
      removeAllLayers: function () {
        (this.layers.length = 0), (this.currentLayer = 0);
      },
      dump: function () {
        for (var e = "", t = [""], n = 0; n < this.layers[this.currentLayer].height; n++) {
          for (var r = 0; r < this.layers[this.currentLayer].width; r++)
            (e += "%c  "),
              t.push(
                this.layers[this.currentLayer].data[n][r] > 1
                  ? this.debugMap[this.layers[this.currentLayer].data[n][r]]
                    ? "background: " + this.debugMap[this.layers[this.currentLayer].data[n][r]]
                    : "background: #ffffff"
                  : "background: rgb(0, 0, 0)"
              );
          e += "\n";
        }
        (t[0] = e), console.log.apply(console, t);
      },
      destroy: function () {
        this.removeAllLayers(), (this.data = []), (this.game = null);
      },
    }),
    (n.Tilemap.prototype.constructor = n.Tilemap),
    (n.TilemapLayer = function (e, r, i, s, o) {
      (this.game = e),
        (this.map = r),
        (this.index = i),
        (this.layer = r.layers[i]),
        (this.canvas = n.Canvas.create(s, o)),
        (this.context = this.canvas.getContext("2d")),
        (this.baseTexture = new t.BaseTexture(this.canvas)),
        (this.texture = new t.Texture(this.baseTexture)),
        (this.textureFrame = new n.Frame(0, 0, 0, s, o, "tilemapLayer", e.rnd.uuid())),
        n.Sprite.call(this, this.game, 0, 0, this.texture, this.textureFrame),
        (this.name = ""),
        (this.type = n.TILEMAPLAYER),
        (this.fixedToCamera = !0),
        (this.cameraOffset = new n.Point(0, 0)),
        (this.tileColor = "rgb(255, 255, 255)"),
        (this.debug = !1),
        (this.debugAlpha = 0.5),
        (this.debugColor = "rgba(0, 255, 0, 1)"),
        (this.debugFill = !1),
        (this.debugFillColor = "rgba(0, 255, 0, 0.2)"),
        (this.debugCallbackColor = "rgba(255, 0, 0, 1)"),
        (this.scrollFactorX = 1),
        (this.scrollFactorY = 1),
        (this.dirty = !0),
        (this._cw = r.tileWidth),
        (this._ch = r.tileHeight),
        (this._ga = 1),
        (this._dx = 0),
        (this._dy = 0),
        (this._dw = 0),
        (this._dh = 0),
        (this._tx = 0),
        (this._ty = 0),
        (this._tw = 0),
        (this._th = 0),
        (this._tl = 0),
        (this._maxX = 0),
        (this._maxY = 0),
        (this._startX = 0),
        (this._startY = 0),
        (this._results = []),
        (this._x = 0),
        (this._y = 0),
        (this._prevX = 0),
        (this._prevY = 0),
        this.updateMax();
    }),
    (n.TilemapLayer.prototype = Object.create(n.Sprite.prototype)),
    (n.TilemapLayer.prototype = n.Utils.extend(!0, n.TilemapLayer.prototype, n.Sprite.prototype, t.Sprite.prototype)),
    (n.TilemapLayer.prototype.constructor = n.TilemapLayer),
    (n.TilemapLayer.prototype.postUpdate = function () {
      n.Sprite.prototype.postUpdate.call(this), (this.scrollX = this.game.camera.x * this.scrollFactorX), (this.scrollY = this.game.camera.y * this.scrollFactorY), this.render();
    }),
    (n.TilemapLayer.prototype.resizeWorld = function () {
      this.game.world.setBounds(0, 0, this.layer.widthInPixels, this.layer.heightInPixels);
    }),
    (n.TilemapLayer.prototype._fixX = function (e) {
      return 0 > e && (e = 0), 1 === this.scrollFactorX ? e : this._x + (e - this._x / this.scrollFactorX);
    }),
    (n.TilemapLayer.prototype._unfixX = function (e) {
      return 1 === this.scrollFactorX ? e : this._x / this.scrollFactorX + (e - this._x);
    }),
    (n.TilemapLayer.prototype._fixY = function (e) {
      return 0 > e && (e = 0), 1 === this.scrollFactorY ? e : this._y + (e - this._y / this.scrollFactorY);
    }),
    (n.TilemapLayer.prototype._unfixY = function (e) {
      return 1 === this.scrollFactorY ? e : this._y / this.scrollFactorY + (e - this._y);
    }),
    (n.TilemapLayer.prototype.getTileX = function (e) {
      return this.game.math.snapToFloor(this._fixX(e), this.map.tileWidth) / this.map.tileWidth;
    }),
    (n.TilemapLayer.prototype.getTileY = function (e) {
      return this.game.math.snapToFloor(this._fixY(e), this.map.tileHeight) / this.map.tileHeight;
    }),
    (n.TilemapLayer.prototype.getTileXY = function (e, t, n) {
      return (n.x = this.getTileX(e)), (n.y = this.getTileY(t)), n;
    }),
    (n.TilemapLayer.prototype.getTiles = function (e, t, n, r, i) {
      "undefined" == typeof i && (i = !1),
        (e = this._fixX(e)),
        (t = this._fixY(t)),
        n > this.layer.widthInPixels && (n = this.layer.widthInPixels),
        r > this.layer.heightInPixels && (r = this.layer.heightInPixels),
        (this._tx = this.game.math.snapToFloor(e, this._cw) / this._cw),
        (this._ty = this.game.math.snapToFloor(t, this._ch) / this._ch),
        (this._tw = (this.game.math.snapToCeil(n, this._cw) + this._cw) / this._cw),
        (this._th = (this.game.math.snapToCeil(r, this._ch) + this._ch) / this._ch),
        (this._results.length = 0);
      for (var s = this._ty; s < this._ty + this._th; s++)
        for (var o = this._tx; o < this._tx + this._tw; o++)
          if (this.layer.data[s] && this.layer.data[s][o] && (i === !1 || (i && this.layer.data[s][o].canCollide))) {
            var u = this._unfixX(o * this._cw) / this._cw,
              a = this._unfixY(s * this._ch) / this._ch;
            this._results.push({ x: u * this._cw, y: a * this._ch, right: u * this._cw + this._cw, bottom: a * this._ch + this._ch, tile: this.layer.data[s][o], layer: this.layer.data[s][o].layer });
          }
      return this._results;
    }),
    (n.TilemapLayer.prototype.updateMax = function () {
      (this._maxX = this.game.math.ceil(this.canvas.width / this.map.tileWidth) + 1),
        (this._maxY = this.game.math.ceil(this.canvas.height / this.map.tileHeight) + 1),
        this.layer && (this._maxX > this.layer.width && (this._maxX = this.layer.width), this._maxY > this.layer.height && (this._maxY = this.layer.height)),
        (this.dirty = !0);
    }),
    (n.TilemapLayer.prototype.render = function () {
      if ((this.layer.dirty && (this.dirty = !0), this.dirty && this.visible)) {
        (this._prevX = this._dx),
          (this._prevY = this._dy),
          (this._dx = -(this._x - this._startX * this.map.tileWidth)),
          (this._dy = -(this._y - this._startY * this.map.tileHeight)),
          (this._tx = this._dx),
          (this._ty = this._dy),
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
          (this.context.fillStyle = this.tileColor);
        var e, r;
        this.debug && (this.context.globalAlpha = this.debugAlpha);
        for (var i = this._startY, s = this._startY + this._maxY; s > i; i++) {
          this._column = this.layer.data[i];
          for (var o = this._startX, u = this._startX + this._maxX; u > o; o++)
            this._column[o] &&
              ((e = this._column[o]),
              this.map.tiles[e.index] &&
                ((r = this.map.tilesets[this.map.tiles[e.index][2]]),
                r.image
                  ? (this.debug === !1 && e.alpha !== this.context.globalAlpha && (this.context.globalAlpha = e.alpha),
                    r.tileWidth !== this.map.tileWidth || r.tileHeight !== this.map.tileHeight
                      ? this.context.drawImage(
                          this.map.tilesets[this.map.tiles[e.index][2]].image,
                          this.map.tiles[e.index][0],
                          this.map.tiles[e.index][1],
                          r.tileWidth,
                          r.tileHeight,
                          Math.floor(this._tx),
                          Math.floor(this._ty) - (r.tileHeight - this.map.tileHeight),
                          r.tileWidth,
                          r.tileHeight
                        )
                      : this.context.drawImage(
                          this.map.tilesets[this.map.tiles[e.index][2]].image,
                          this.map.tiles[e.index][0],
                          this.map.tiles[e.index][1],
                          this.map.tileWidth,
                          this.map.tileHeight,
                          Math.floor(this._tx),
                          Math.floor(this._ty),
                          this.map.tileWidth,
                          this.map.tileHeight
                        ),
                    e.debug && ((this.context.fillStyle = "rgba(0, 255, 0, 0.4)"), this.context.fillRect(Math.floor(this._tx), Math.floor(this._ty), this.map.tileWidth, this.map.tileHeight)))
                  : this.context.fillRect(Math.floor(this._tx), Math.floor(this._ty), this.map.tileWidth, this.map.tileHeight))),
              (this._tx += this.map.tileWidth);
          (this._tx = this._dx), (this._ty += this.map.tileHeight);
        }
        return this.debug && ((this.context.globalAlpha = 1), this.renderDebug()), this.game.renderType === n.WEBGL && t.texturesToUpdate.push(this.baseTexture), (this.dirty = !1), (this.layer.dirty = !1), !0;
      }
    }),
    (n.TilemapLayer.prototype.renderDebug = function () {
      (this._tx = this._dx), (this._ty = this._dy), (this.context.strokeStyle = this.debugColor), (this.context.fillStyle = this.debugFillColor);
      for (var e = this._startY, t = this._startY + this._maxY; t > e; e++) {
        this._column = this.layer.data[e];
        for (var n = this._startX, r = this._startX + this._maxX; r > n; n++) {
          var i = this._column[n];
          i &&
            (i.faceTop || i.faceBottom || i.faceLeft || i.faceRight) &&
            ((this._tx = Math.floor(this._tx)),
            this.debugFill && this.context.fillRect(this._tx, this._ty, this._cw, this._ch),
            this.context.beginPath(),
            i.faceTop && (this.context.moveTo(this._tx, this._ty), this.context.lineTo(this._tx + this._cw, this._ty)),
            i.faceBottom && (this.context.moveTo(this._tx, this._ty + this._ch), this.context.lineTo(this._tx + this._cw, this._ty + this._ch)),
            i.faceLeft && (this.context.moveTo(this._tx, this._ty), this.context.lineTo(this._tx, this._ty + this._ch)),
            i.faceRight && (this.context.moveTo(this._tx + this._cw, this._ty), this.context.lineTo(this._tx + this._cw, this._ty + this._ch)),
            this.context.stroke()),
            i && (i.collisionCallback || i.layer.callbacks[i.index]) && ((this.context.fillStyle = this.debugCallbackColor), this.context.fillRect(this._tx, this._ty, this._cw, this._ch), (this.context.fillStyle = this.debugFillColor)),
            (this._tx += this.map.tileWidth);
        }
        (this._tx = this._dx), (this._ty += this.map.tileHeight);
      }
    }),
    Object.defineProperty(n.TilemapLayer.prototype, "scrollX", {
      get: function () {
        return this._x;
      },
      set: function (e) {
        e !== this._x &&
          e >= 0 &&
          this.layer.widthInPixels > this.width &&
          ((this._x = e),
          this._x > this.layer.widthInPixels - this.width && (this._x = this.layer.widthInPixels - this.width),
          (this._startX = this.game.math.floor(this._x / this.map.tileWidth)),
          this._startX < 0 && (this._startX = 0),
          this._startX + this._maxX > this.layer.width && (this._startX = this.layer.width - this._maxX),
          (this.dirty = !0));
      },
    }),
    Object.defineProperty(n.TilemapLayer.prototype, "scrollY", {
      get: function () {
        return this._y;
      },
      set: function (e) {
        e !== this._y &&
          e >= 0 &&
          this.layer.heightInPixels > this.height &&
          ((this._y = e),
          this._y > this.layer.heightInPixels - this.height && (this._y = this.layer.heightInPixels - this.height),
          (this._startY = this.game.math.floor(this._y / this.map.tileHeight)),
          this._startY < 0 && (this._startY = 0),
          this._startY + this._maxY > this.layer.height && (this._startY = this.layer.height - this._maxY),
          (this.dirty = !0));
      },
    }),
    Object.defineProperty(n.TilemapLayer.prototype, "collisionWidth", {
      get: function () {
        return this._cw;
      },
      set: function (e) {
        (this._cw = e), (this.dirty = !0);
      },
    }),
    Object.defineProperty(n.TilemapLayer.prototype, "collisionHeight", {
      get: function () {
        return this._ch;
      },
      set: function (e) {
        (this._ch = e), (this.dirty = !0);
      },
    }),
    (n.TilemapParser = {
      tileset: function (e, t, r, i, s, o, u, a, f) {
        var l = e.cache.getTilesetImage(t);
        if (null === l) return console.warn("Phaser.TilemapParser.tileSet: Invalid image key given"), null;
        var c = l.width,
          h = l.height;
        return (
          -1 === u && (u = Math.round(c / r)),
          -1 === a && (a = Math.round(h / i)),
          -1 === f && (f = u * a),
          0 === c || 0 === h || r > c || i > h || 0 === f ? (console.warn("Phaser.TilemapParser.tileSet: width/height zero or width/height < given tileWidth/tileHeight"), null) : new n.Tileset(l, t, r, i, s, o, u, a, f)
        );
      },
      parse: function (e, t) {
        var r = e.cache.getTilemapData(t);
        return r ? (r.format === n.Tilemap.CSV ? this.parseCSV(r.data) : r.format === n.Tilemap.TILED_JSON ? this.parseTiledJSON(r.data) : void 0) : { layers: [], objects: [], images: [], tilesets: [] };
      },
      parseCSV: function (e) {
        e = e.trim();
        for (var t = [], n = e.split("\n"), r = n.length, i = 0, s = 0; s < n.length; s++) {
          t[s] = [];
          for (var o = n[s].split(","), u = 0; u < o.length; u++) t[s][u] = parseInt(o[u], 10);
          0 === i && (i = o.length);
        }
        return [{ name: "csv", width: i, height: r, alpha: 1, visible: !0, indexes: [], tileMargin: 0, tileSpacing: 0, data: t }];
      },
      parseTiledJSON: function (e) {
        if ("orthogonal" !== e.orientation) return console.warn("TilemapParser.parseTiledJSON: Only orthogonal map types are supported in this version of Phaser"), null;
        var t = {};
        (t.width = e.width),
          (t.height = e.height),
          (t.tileWidth = e.tilewidth),
          (t.tileHeight = e.tileheight),
          (t.orientation = e.orientation),
          (t.version = e.version),
          (t.properties = e.properties),
          (t.widthInPixels = t.width * t.tileWidth),
          (t.heightInPixels = t.height * t.tileHeight);
        for (var r = [], i = 0; i < e.layers.length; i++)
          if ("tilelayer" === e.layers[i].type) {
            var s = {
              name: e.layers[i].name,
              x: e.layers[i].x,
              y: e.layers[i].y,
              width: e.layers[i].width,
              height: e.layers[i].height,
              widthInPixels: e.layers[i].width * e.tilewidth,
              heightInPixels: e.layers[i].height * e.tileheight,
              alpha: e.layers[i].opacity,
              visible: e.layers[i].visible,
              properties: {},
              indexes: [],
              callbacks: [],
            };
            e.layers[i].properties && (s.properties = e.layers[i].properties);
            for (var o = 0, u = [], a = [], f = 0, l = e.layers[i].data.length; l > f; f++)
              u.push(e.layers[i].data[f] > 0 ? new n.Tile(s, e.layers[i].data[f], o, a.length, e.tilewidth, e.tileheight) : null), o++, o === e.layers[i].width && (a.push(u), (o = 0), (u = []));
            (s.data = a), r.push(s);
          }
        t.layers = r;
        for (var c = [], i = 0; i < e.layers.length; i++)
          if ("imagelayer" === e.layers[i].type) {
            var h = { name: e.layers[i].name, image: e.layers[i].image, x: e.layers[i].x, y: e.layers[i].y, alpha: e.layers[i].opacity, visible: e.layers[i].visible, properties: {} };
            e.layers[i].properties && (h.properties = e.layers[i].properties), c.push(h);
          }
        t.images = c;
        for (var p = {}, i = 0; i < e.layers.length; i++)
          if ("objectgroup" === e.layers[i].type) {
            p[e.layers[i].name] = [];
            for (var d = 0, l = e.layers[i].objects.length; l > d; d++)
              if (e.layers[i].objects[d].gid) {
                var v = {
                  gid: e.layers[i].objects[d].gid,
                  name: e.layers[i].objects[d].name,
                  x: e.layers[i].objects[d].x,
                  y: e.layers[i].objects[d].y,
                  visible: e.layers[i].objects[d].visible,
                  properties: e.layers[i].objects[d].properties,
                };
                p[e.layers[i].name].push(v);
              }
          }
        t.objects = p;
        for (var m = [], i = 0; i < e.tilesets.length; i++) {
          var g = e.tilesets[i],
            y = new n.Tileset(g.name, g.firstgid, g.tilewidth, g.tileheight, g.margin, g.spacing, g.properties);
          g.tileproperties && (y.tileProperties = g.tileproperties),
            (y.rows = (g.imageheight - g.margin) / (g.tileheight + g.spacing)),
            (y.columns = (g.imagewidth - g.margin) / (g.tilewidth + g.spacing)),
            (y.total = y.rows * y.columns),
            m.push(y);
        }
        (t.tilesets = m), (t.tiles = []);
        for (var i = 0; i < t.tilesets.length; i++)
          for (
            var g = t.tilesets[i], o = g.tileMargin, b = g.tileMargin, w = 0, E = 0, S = 0, f = g.firstgid;
            f < g.firstgid + g.total && ((t.tiles[f] = [o, b, i]), (o += g.tileWidth + g.tileSpacing), w++, w !== g.total) && (E++, E !== g.columns || ((o = g.tileMargin), (b += g.tileHeight + g.tileSpacing), (E = 0), S++, S !== g.rows));
            f++
          );
        return t;
      },
    }),
    (n.Tileset = function (e, t, n, r, i, s, o) {
      (this.name = e), (this.firstgid = t), (this.tileWidth = n), (this.tileHeight = r), (this.tileMargin = i), (this.tileSpacing = s), (this.properties = o), (this.image = null), (this.rows = 0), (this.columns = 0), (this.total = 0);
    }),
    (n.Tileset.prototype = {
      setSpacing: function (e, t) {
        (this.tileMargin = e), (this.tileSpacing = t);
      },
    }),
    (n.Tileset.prototype.constructor = n.Tileset),
    (t.CanvasRenderer.prototype.render = function (e) {
      (t.texturesToUpdate.length = 0),
        (t.texturesToDestroy.length = 0),
        t.visibleCount++,
        e.updateTransform(),
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        n.CANVAS_CLEAR_RECT && this.context.clearRect(0, 0, this.width, this.height),
        this.renderDisplayObject(e, !1),
        t.Texture.frameUpdates.length > 0 && (t.Texture.frameUpdates.length = 0);
    }),
    (t.CanvasRenderer.prototype.renderDisplayObject = function (e, r) {
      var i = e.last._iNext;
      e = e.first;
      do
        if (e.visible || r)
          if (e.renderable && 0 !== e.alpha) {
            if (e instanceof t.Sprite)
              e.texture.frame &&
                ((this.context.globalAlpha = e.worldAlpha),
                n.CANVAS_PX_ROUND
                  ? this.context.setTransform(e.worldTransform[0], e.worldTransform[3], e.worldTransform[1], e.worldTransform[4], Math.floor(e.worldTransform[2]), Math.floor(e.worldTransform[5]))
                  : this.context.setTransform(e.worldTransform[0], e.worldTransform[3], e.worldTransform[1], e.worldTransform[4], e.worldTransform[2], e.worldTransform[5]),
                e.texture.trimmed && this.context.transform(1, 0, 0, 1, e.texture.trim.x, e.texture.trim.y),
                this.smoothProperty && this.scaleMode !== e.texture.baseTexture.scaleMode && ((this.scaleMode = e.texture.baseTexture.scaleMode), (this.context[this.smoothProperty] = this.scaleMode === t.BaseTexture.SCALE_MODE.LINEAR)),
                this.context.drawImage(
                  e.texture.baseTexture.source,
                  e.texture.frame.x,
                  e.texture.frame.y,
                  e.texture.frame.width,
                  e.texture.frame.height,
                  Math.floor(e.anchor.x * -e.texture.frame.width),
                  Math.floor(e.anchor.y * -e.texture.frame.height),
                  e.texture.frame.width,
                  e.texture.frame.height
                ));
            else if (e instanceof t.Strip) this.context.setTransform(e.worldTransform[0], e.worldTransform[3], e.worldTransform[1], e.worldTransform[4], e.worldTransform[2], e.worldTransform[5]), this.renderStrip(e);
            else if (e instanceof t.TilingSprite) this.context.setTransform(e.worldTransform[0], e.worldTransform[3], e.worldTransform[1], e.worldTransform[4], e.worldTransform[2], e.worldTransform[5]), this.renderTilingSprite(e);
            else if (e instanceof t.CustomRenderable) e.renderCanvas(this);
            else if (e instanceof t.Graphics)
              this.context.setTransform(e.worldTransform[0], e.worldTransform[3], e.worldTransform[1], e.worldTransform[4], e.worldTransform[2], e.worldTransform[5]), t.CanvasGraphics.renderGraphics(e, this.context);
            else if (e instanceof t.FilterBlock)
              if (e.open) {
                this.context.save();
                var s = e.mask.alpha,
                  o = e.mask.worldTransform;
                this.context.setTransform(o[0], o[3], o[1], o[4], o[2], o[5]),
                  (e.mask.worldAlpha = 0.5),
                  (this.context.worldAlpha = 0),
                  t.CanvasGraphics.renderGraphicsMask(e.mask, this.context),
                  this.context.clip(),
                  (e.mask.worldAlpha = s);
              } else this.context.restore();
            e = e._iNext;
          } else e = e._iNext;
        else e = e.last._iNext;
      while (e != i);
    }),
    (t.WebGLBatch.prototype.update = function () {
      for (var e, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g = 0, y = this.head; y; ) {
        if (y.vcount === t.visibleCount) {
          if (
            ((n = y.texture.frame.width),
            (r = y.texture.frame.height),
            (i = y.anchor.x),
            (s = y.anchor.y),
            (o = n * (1 - i)),
            (u = n * -i),
            (a = r * (1 - s)),
            (f = r * -s),
            (l = 8 * g),
            (e = y.worldTransform),
            (c = e[0]),
            (h = e[3]),
            (p = e[1]),
            (d = e[4]),
            (v = e[2]),
            (m = e[5]),
            y.texture.trimmed && ((v += y.texture.trim.x), (m += y.texture.trim.y)),
            (this.verticies[l + 0] = c * u + p * f + v),
            (this.verticies[l + 1] = d * f + h * u + m),
            (this.verticies[l + 2] = c * o + p * f + v),
            (this.verticies[l + 3] = d * f + h * o + m),
            (this.verticies[l + 4] = c * o + p * a + v),
            (this.verticies[l + 5] = d * a + h * o + m),
            (this.verticies[l + 6] = c * u + p * a + v),
            (this.verticies[l + 7] = d * a + h * u + m),
            y.updateFrame || y.texture.updateFrame)
          ) {
            this.dirtyUVS = !0;
            var b = y.texture,
              w = b.frame,
              E = b.baseTexture.width,
              S = b.baseTexture.height;
            (this.uvs[l + 0] = w.x / E),
              (this.uvs[l + 1] = w.y / S),
              (this.uvs[l + 2] = (w.x + w.width) / E),
              (this.uvs[l + 3] = w.y / S),
              (this.uvs[l + 4] = (w.x + w.width) / E),
              (this.uvs[l + 5] = (w.y + w.height) / S),
              (this.uvs[l + 6] = w.x / E),
              (this.uvs[l + 7] = (w.y + w.height) / S),
              (y.updateFrame = !1);
          }
          if (y.cacheAlpha != y.worldAlpha) {
            y.cacheAlpha = y.worldAlpha;
            var x = 4 * g;
            (this.colors[x] = this.colors[x + 1] = this.colors[x + 2] = this.colors[x + 3] = y.worldAlpha), (this.dirtyColors = !0);
          }
        } else
          (l = 8 * g),
            (this.verticies[l + 0] = 0),
            (this.verticies[l + 1] = 0),
            (this.verticies[l + 2] = 0),
            (this.verticies[l + 3] = 0),
            (this.verticies[l + 4] = 0),
            (this.verticies[l + 5] = 0),
            (this.verticies[l + 6] = 0),
            (this.verticies[l + 7] = 0);
        g++, (y = y.__next);
      }
    }),
    n
  );
});
var DEBUG,
  FLAP,
  GAME_HEIGHT,
  GRAVITY,
  GROUND_HEIGHT,
  GROUND_Y,
  HEIGHT,
  OPENING,
  SCALE,
  SPAWN_RATE,
  SPEED,
  WIDTH,
  WebFontConfig,
  bg,
  bird,
  deadInvs,
  deadTubeBottoms,
  deadTubeTops,
  fallSnd,
  flapSnd,
  floor,
  gameOver,
  gameOverText,
  gameStarted,
  ground,
  hurtSnd,
  instText,
  invs,
  main,
  parent,
  score,
  scoreSnd,
  scoreText,
  swooshSnd,
  tubes,
  tubesTimer;
(DEBUG = !1),
  (SPEED = 160),
  (GRAVITY = 1100),
  (FLAP = 320),
  (SPAWN_RATE = 1 / 1200),
  (OPENING = 100),
  (SCALE = 1),
  (HEIGHT = 384),
  (WIDTH = 288),
  (GAME_HEIGHT = 336),
  (GROUND_HEIGHT = 64),
  (GROUND_Y = HEIGHT - GROUND_HEIGHT),
  (parent = document.querySelector("#screen")),
  (gameStarted = void 0),
  (gameOver = void 0),
  (deadTubeTops = []),
  (deadTubeBottoms = []),
  (deadInvs = []),
  (bg = null),
  (tubes = null),
  (invs = null),
  (bird = null),
  (ground = null),
  (score = null),
  (scoreText = null),
  (instText = null),
  (gameOverText = null),
  (flapSnd = null),
  (scoreSnd = null),
  (hurtSnd = null),
  (fallSnd = null),
  (swooshSnd = null),
  (tubesTimer = null),
  (floor = Math.floor),
  (main = function () {
    var e, t, n, r, i, s, o, u, a, f, l, c, h;
    (a = function (e, t) {
      var n, i, s;
      return (
        (n = null),
        (i = t ? "tubeTop" : "tubeBottom"),
        (s = floor(t ? e - OPENING / 2 - 320 : e + OPENING / 2)),
        deadTubeTops.length > 0 && "tubeTop" === i
          ? ((n = deadTubeTops.pop().revive()), n.reset(r.world.width, s))
          : deadTubeBottoms.length > 0 && "tubeBottom" === i
          ? ((n = deadTubeBottoms.pop().revive()), n.reset(r.world.width, s))
          : ((n = tubes.create(r.world.width, s, i)), (n.body.allowGravity = !1)),
        (n.body.velocity.x = -SPEED),
        n
      );
    }),
      (f = function () {
        var e, t, n, i;
        tubes.forEachAlive(function (e) {
          e.x + e.width < r.world.bounds.left && ("tubeTop" === e.key && deadTubeTops.push(e.kill()), "tubeBottom" === e.key && deadTubeBottoms.push(e.kill()));
        }),
          invs.forEachAlive(function (e) {
            e.x + e.width < r.world.bounds.left && deadInvs.push(e.kill());
          }),
          (i = r.world.height / 2 + (Math.random() - 0.5) * r.world.height * 0.2);
        console.log("pieces new tube pair.......", i),
          (e = a(i)),
          (n = a(i, !0)),
          deadInvs.length > 0
            ? (t = deadInvs
                .pop()
                .revive()
                .reset(n.x + n.width / 2, 0))
            : ((t = invs.create(n.x + n.width / 2, 0)), (t.width = 2), (t.height = r.world.height), (t.body.allowGravity = !1)),
          (t.body.velocity.x = -SPEED);
      }),
      (e = function (e, t) {
        invs.remove(t), (score += 1), scoreText.setText(score), scoreSnd.play();
      }),
      (u = function () {
        var hiscore;

        // Set game over state
        gameOver = true;
        updateLives();

        // Adjust bird's velocity and animation
        if (bird.body.velocity.y > 0) {
          bird.body.velocity.y = 100;
        }
        bird.animations.stop();
        bird.frame = 1;

        // Update instruction text to try again
        instText.setText(try_again);
        instText.renderable = true;

        // Retrieve and update high score
        hiscore = window.localStorage.getItem("hiscore");
        hiscore = hiscore ? hiscore : score;
        hiscore = score > parseInt(hiscore, 10) ? score : hiscore;
        window.localStorage.setItem("hiscore", hiscore);

        // Display game over text with high score
        gameOverText.setText(game_over + "\n\n" + high_score + "\n\n" + hiscore);
        gameOverText.renderable = true;

        // Stop all tube movements
        tubes.forEachAlive(function (tube) {
          tube.body.velocity.x = 0;
        });

        // Stop all invisible obstacles
        invs.forEach(function (inv) {
          inv.body.velocity.x = 0;
        });

        // Remove the tubes timer and set a restart delay
        r.time.events.remove(tubesTimer);
        r.time.events.add(1000, function () {
          r.input.onTap.addOnce(function () {
            o();
            swooshSnd.play();
          });
        });

        // Play hurt sound effect
        hurtSnd.play();
      }),
      (n = function () {
        var e;
        gameStarted || l(),
          gameOver ||
            ((bird.body.gravity.y = 0),
            (bird.body.velocity.y = -100),
            (e = r.add.tween(bird.body.velocity).to({ y: -FLAP }, 25, Phaser.Easing.Bounce.In, !0)),
            e.onComplete.add(function () {
              return (bird.body.gravity.y = GRAVITY);
            }),
            flapSnd.play(),
            console.log("pieces... flapped"));
      }),
      (i = function () {
        var e;
        (e = {
          spritesheet: { bird: [bird_picture, 36, 26] },
          image: { tubeTop: [tube1_picture], tubeBottom: [tube2_picture], ground: [ground_picture], bg: [bg_picture] },
          audio: { flap: [wing_sfx], score: [point_sfx], hurt: [hit_sfx], fall: [die_sfx], swoosh: [swooshing_sfx] },
        }),
          Object.keys(e).forEach(function (t) {
            Object.keys(e[t]).forEach(function (n) {
              r.load[t].apply(r.load, [n].concat(e[t][n]));
            });
          });
      }),
      (t = function () {
        var aspectRatio;

        // Calculate aspect ratio
        aspectRatio = window.innerWidth / window.innerHeight;

        // Hide the loading screen
        document.querySelector("#loading").style.display = "none";

        // Disable canvas smoothing
        Phaser.Canvas.setSmoothingEnabled(r.context, false);

        // Set the stage scale mode and screen size
        r.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        r.stage.scale.setScreenSize(true);

        // Set the world dimensions
        r.world.width = WIDTH;
        r.world.height = HEIGHT;

        // Add background sprite
        bg = r.add.tileSprite(0, 0, WIDTH, HEIGHT, "bg");

        // Create groups for tubes and invisible obstacles
        tubes = r.add.group();
        invs = r.add.group();

        // Add and configure the bird sprite
        bird = r.add.sprite(0, 0, "bird");
        bird.anchor.setTo(0.5, 0.5);
        bird.animations.add("fly", [0, 1, 2], 10, true);
        bird.body.collideWorldBounds = true;
        bird.body.setPolygon(24, 1, 34, 16, 30, 32, 20, 24, 12, 34, 2, 12, 14, 2);

        // Add ground sprite and scale it
        ground = r.add.tileSprite(0, GROUND_Y, WIDTH, GROUND_HEIGHT, "ground");
        ground.tileScale.setTo(SCALE, SCALE);

        // Add score text
        scoreText = r.add.text(r.world.width / 2, r.world.height / 4, "", { font: '16px "Press Start 2P"', fill: title_fillcolor, stroke: title_strokecolor, strokeThickness: 4, align: "center" });
        scoreText.anchor.setTo(0.5, 0.5);

        // Add instruction text
        instText = r.add.text(r.world.width / 2, r.world.height - r.world.height / 4, "", { font: '8px "Press Start 2P"', fill: score_fillcolor, stroke: score_strokecolor, strokeThickness: 4, align: "center" });
        instText.anchor.setTo(0.5, 0.5);

        // Add game over text
        gameOverText = r.add.text(r.world.width / 2, r.world.height / 2, "", { font: '16px "Press Start 2P"', fill: game_over_fillcolor, stroke: game_over_strokecolor, strokeThickness: 4, align: "center" });
        gameOverText.anchor.setTo(0.5, 0.5);
        gameOverText.scale.setTo(SCALE, SCALE);

        // Add audio for game events
        flapSnd = r.add.audio("flap");
        scoreSnd = r.add.audio("score");
        hurtSnd = r.add.audio("hurt");
        fallSnd = r.add.audio("fall");
        swooshSnd = r.add.audio("swoosh");

        // Add input listener for game start
        r.input.onDown.add(n);

        // Initialize game state
        o();
      }),
      (o = function () {
        // Set game state variables
        gameStarted = false;
        gameOver = false;
        score = 0;

        // Update UI texts
        scoreText.setText(game_title);
        instText.setText(game_instructions);

        // Hide the game over text
        gameOverText.renderable = false;

        // Disable gravity for the bird
        bird.body.allowGravity = false;

        // Reset bird's position and properties
        bird.reset(0.3 * r.world.width, r.world.height / 2);
        bird.angle = 0;
        bird.animations.play("fly");

        // Remove all tubes and invisible obstacles
        tubes.removeAll();
        invs.removeAll();
      }),
      (l = function () {
        (bird.body.allowGravity = !0), (bird.body.gravity.y = GRAVITY), (tubesTimer = r.time.events.loop(1 / SPAWN_RATE, f)), scoreText.setText(score), (instText.renderable = !1), (gameStarted = !0);
      }),
      (h = function () {
        var tween;

        if (gameStarted) {
          if (gameOver) {
            // If the game is over, make the bird fall and rotate to 90 degrees
            tween = r.add.tween(bird).to({ angle: 90 }, 100, Phaser.Easing.Bounce.Out, true);

            // Check if the bird has hit the ground
            if (bird.body.bottom >= GROUND_Y + 3) {
              bird.y = GROUND_Y - 13;
              bird.body.velocity.y = 0;
              bird.body.allowGravity = false;
              bird.body.gravity.y = 0;
            }
          } else {
            // Update bird's angle based on velocity
            bird.angle = (90 * (FLAP + bird.body.velocity.y)) / FLAP - 180;

            // Limit the bird's angle
            if (bird.angle < -30) {
              bird.angle = -30;
            }
            if (bird.angle > 80) {
              bird.angle = 90;
              bird.animations.stop();
              bird.frame = 1;
            } else {
              bird.animations.play();
            }

            // Check for collisions with tubes and handle game over
            r.physics.overlap(bird, tubes, function () {
              u();
              fallSnd.play();
            });

            // Check if the bird has hit the ground and handle game over
            if (!gameOver && bird.body.bottom >= GROUND_Y) {
              u();
            }

            // Check for collisions with invisible obstacles
            r.physics.overlap(bird, invs, e);
          }
        } else {
          // If the game has not started, make the bird hover
          bird.y = r.world.height / 2 + 8 * Math.cos(r.time.now / 200);
          bird.angle = 0;
        }

        // Move the ground unless the game is over
        if (!gameOver) {
          ground.tilePosition.x -= r.time.physicsElapsed * SPEED;
        }
      }),
      (s = function () {
        DEBUG &&
          (r.debug.renderSpriteBody(bird),
          tubes.forEachAlive(function (e) {
            r.debug.renderSpriteBody(e);
          }),
          invs.forEach(function (e) {
            r.debug.renderSpriteBody(e);
          }));
      }),
      (c = { preload: i, create: t, update: h, render: s }),
      (r = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, parent, c, !1, !1));
  }),
  (WebFontConfig = { google: { families: ["Press+Start+2P::latin"] }, active: main }),
  (function () {
    var e, t;
    return (
      (t = document.createElement("script")),
      (t.src = ("https:" === document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"),
      (t.type = "text/javascript"),
      (t.async = "true"),
      (e = document.getElementsByTagName("script")[0]),
      e.parentNode.insertBefore(t, e)
    );
  })();
