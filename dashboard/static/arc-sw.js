!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 99));
})({
  3: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "i", function () {
        return i;
      }),
      n.d(t, "h", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "j", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "g", function () {
        return m;
      });
    var r = {
        images: [
          "bmp",
          "jpeg",
          "jpg",
          "ttf",
          "pict",
          "svg",
          "webp",
          "eps",
          "svgz",
          "gif",
          "png",
          "ico",
          "tif",
          "tiff",
          "bpg",
        ],
        video: [
          "mp4",
          "3gp",
          "webm",
          "mkv",
          "flv",
          "f4v",
          "f4p",
          "f4bogv",
          "drc",
          "avi",
          "mov",
          "qt",
          "wmv",
          "amv",
          "mpg",
          "mp2",
          "mpeg",
          "mpe",
          "m2v",
          "m4v",
          "3g2",
          "gifv",
          "mpv",
        ],
        audio: [
          "mid",
          "midi",
          "aac",
          "aiff",
          "flac",
          "m4a",
          "m4p",
          "mp3",
          "ogg",
          "oga",
          "mogg",
          "opus",
          "ra",
          "rm",
          "wav",
          "webm",
          "f4a",
          "pat",
        ],
        interchange: [
          "json",
          "yaml",
          "xml",
          "csv",
          "toml",
          "ini",
          "bson",
          "asn1",
          "ubj",
        ],
        documents: [
          "pdf",
          "ps",
          "doc",
          "docx",
          "ppt",
          "pptx",
          "xls",
          "otf",
          "xlsx",
        ],
        other: ["swf"],
      },
      o = "arc:",
      c = {
        COMLINK_INIT: "".concat(o, "comlink:init"),
        NODE_ID: "".concat(o, ":nodeId"),
        CDN_CONFIG: "".concat(o, "cdn:config"),
        P2P_CLIENT_READY: "".concat(o, "cdn:ready"),
        STORED_FIDS: "".concat(o, "cdn:storedFids"),
        SW_HEALTH_CHECK: "".concat(o, "cdn:healthCheck"),
        WIDGET_CONFIG: "".concat(o, "widget:config"),
        WIDGET_INIT: "".concat(o, "widget:init"),
        WIDGET_UI_LOAD: "".concat(o, "widget:load"),
        BROKER_LOAD: "".concat(o, "broker:load"),
        RENDER_FILE: "".concat(o, "inlay:renderFile"),
        FILE_RENDERED: "".concat(o, "inlay:fileRendered"),
      },
      i = "serviceWorker",
      a = "/".concat("shared-worker", ".js"),
      d = "/".concat("dedicated-worker", ".js"),
      f = "/".concat("arc-sw-core", ".js"),
      u = "".concat("arc-sw", ".js"),
      p = ("/".concat(u), "/".concat("arc-sw"), "arc-db"),
      s = "key-val-store",
      l = "".concat("https://overmind.arc.io", "/api/propertySession"),
      m = "".concat("https://warden.arc.io", "/mailbox/propertySession");
  },
  99: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(3);
    if ("undefined" != typeof ServiceWorkerGlobalScope) {
      var o = "https://arc.io" + r.j;
      importScripts(o);
    } else if ("undefined" != typeof SharedWorkerGlobalScope) {
      var c = "https://arc.io" + r.h;
      importScripts(c);
    } else if ("undefined" != typeof DedicatedWorkerGlobalScope) {
      var i = "https://arc.io" + r.b;
      importScripts(i);
    }
  },
});
