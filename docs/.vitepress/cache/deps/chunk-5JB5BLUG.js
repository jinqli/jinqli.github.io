import {
  commonjsGlobal
} from "./chunk-GZL7PI2Y.js";

// node_modules/tdesign-vue-next/es/_chunks/dep-592c2263.mjs
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/tdesign-vue-next/es/_chunks/dep-05c168fe.mjs
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    true ? module.exports = e() : false ? (void 0)(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
  }(commonjsGlobal, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function ordinal(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      }
    }, m = function m2(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = {
      s: m,
      z: function z(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      },
      m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      },
      a: function a2(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      },
      p: function p2(t2) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      },
      u: function u2(t2) {
        return void 0 === t2;
      }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function S2(t2) {
      return t2 instanceof _ || !(!t2 || !t2[p]);
    }, w = function t2(e2, n2, r2) {
      var i2;
      if (!e2) return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1) return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, O = function O2(t2, e2) {
      if (S(t2)) return t2.clone();
      var n2 = "object" == _typeof(e2) ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t2, e2) {
      return O(t2, {
        locale: e2.$L,
        utc: e2.$u,
        x: e2.$x,
        $offset: e2.$offset
      });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2) return /* @__PURE__ */ new Date(NaN);
          if (b.u(e2)) return /* @__PURE__ */ new Date();
          if (e2 instanceof Date) return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = O(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return O(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < O(t2);
      }, m2.$g = function(t2, e2, n2) {
        return b.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function l3(t3, e3) {
          var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function $3(t3, e3) {
          return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === c || o2 === h) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[b.p(t2)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = b.p(f2), y2 = function y3(t2) {
          var e2 = O(l2);
          return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === c) return this.set(c, this.$M + r2);
        if ($2 === h) return this.set(h, this.$y + r2);
        if ($2 === a) return y2(1);
        if ($2 === o) return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return b.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid()) return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function h3(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, d2 = function d3(t3) {
          return b.s(s2 % 12 || 12, t3, "0");
        }, $2 = f2 || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y, function(t3, r3) {
          return r3 || function(t4) {
            switch (t4) {
              case "YY":
                return String(e2.$y).slice(-2);
              case "YYYY":
                return b.s(e2.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b.s(a2 + 1, 2, "0");
              case "MMM":
                return h2(n2.monthsShort, a2, c2, 3);
              case "MMMM":
                return h2(c2, a2);
              case "D":
                return e2.$D;
              case "DD":
                return b.s(e2.$D, 2, "0");
              case "d":
                return String(e2.$W);
              case "dd":
                return h2(n2.weekdaysMin, e2.$W, o2, 2);
              case "ddd":
                return h2(n2.weekdaysShort, e2.$W, o2, 3);
              case "dddd":
                return o2[e2.$W];
              case "H":
                return String(s2);
              case "HH":
                return b.s(s2, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s2, u2, true);
              case "A":
                return $2(s2, u2, false);
              case "m":
                return String(u2);
              case "mm":
                return b.s(u2, 2, "0");
              case "s":
                return String(e2.$s);
              case "ss":
                return b.s(e2.$s, 2, "0");
              case "SSS":
                return b.s(e2.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t3) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function D3() {
          return b.m(y2, m3);
        };
        switch (M3) {
          case h:
            $2 = D2() / 12;
            break;
          case c:
            $2 = D2();
            break;
          case f:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u:
            $2 = g2 / n;
            break;
          case s:
            $2 = g2 / e;
            break;
          case i:
            $2 = g2 / t;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : b.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2) return this.$L;
        var n2 = this.clone(), r2 = w(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k = _.prototype;
    return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
      k[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), O.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, O), t2.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
      return O(1e3 * t2);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min, dayjs_min.exports);
var dayjs = dayjs_min.exports;

// node_modules/tdesign-vue-next/es/_chunks/dep-e16e8807.mjs
var zhCn$1 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    true ? module.exports = _(dayjs_min.exports) : false ? (void 0)(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
  }(commonjsGlobal, function(e) {
    "use strict";
    function _(e2) {
      return e2 && "object" == _typeof(e2) && "default" in e2 ? e2 : {
        "default": e2
      };
    }
    var t = _(e), d = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function ordinal(e2, _2) {
        return "W" === _2 ? e2 + "周" : e2 + "日";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      meridiem: function meridiem(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
      }
    };
    return t["default"].locale(d, null, true), d;
  });
})(zhCn$1, zhCn$1.exports);
var zhCn = zhCn$1.exports;

// node_modules/tdesign-vue-next/es/_common/js/global-config/locale/zh_CN.mjs
var zhCn2 = {
  pagination: {
    itemsPerPage: "{size} 条/页",
    jumpTo: "跳至",
    page: "页",
    total: "共 {total} 条数据"
  },
  cascader: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  calendar: {
    yearSelection: "{year} 年",
    monthSelection: "{month} 月",
    yearRadio: "年",
    monthRadio: "月",
    hideWeekend: "隐藏周末",
    showWeekend: "显示周末",
    today: "今天",
    thisMonth: "本月",
    week: "一,二,三,四,五,六,日",
    cellMonth: "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月"
  },
  transfer: {
    title: "{checked} / {total} 项",
    empty: "暂无数据",
    placeholder: "请输入关键词搜索"
  },
  timePicker: {
    dayjsLocale: "zh-cn",
    now: "此刻",
    confirm: "确定",
    anteMeridiem: "上午",
    postMeridiem: "下午",
    placeholder: "选择时间"
  },
  dialog: {
    confirm: "确认",
    cancel: "取消"
  },
  drawer: {
    confirm: "确认",
    cancel: "取消"
  },
  popconfirm: {
    confirm: {
      content: "确定"
    },
    cancel: {
      content: "取消"
    }
  },
  table: {
    empty: "暂无数据",
    loadingText: "正在加载中，请稍后",
    loadingMoreText: "点击加载更多",
    filterInputPlaceholder: "请输入内容（无默认值）",
    sortAscendingOperationText: "点击升序",
    sortCancelOperationText: "点击取消排序",
    sortDescendingOperationText: "点击降序",
    clearFilterResultButtonText: "清空筛选",
    columnConfigButtonText: "列配置",
    columnConfigTitleText: "表格列配置",
    columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
    confirmText: "确认",
    cancelText: "取消",
    resetText: "重置",
    selectAllText: "全选",
    searchResultText: "搜索“{result}”，找到 {count} 条结果"
  },
  select: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  tree: {
    empty: "暂无数据"
  },
  treeSelect: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  datePicker: {
    dayjsLocale: "zh-cn",
    placeholder: {
      date: "请选择日期",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      week: "请选择周"
    },
    weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    months: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
    quarters: ["一季度", "二季度", "三季度", "四季度"],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "日",
    weekAbbreviation: "周",
    yearAriaLabel: "年",
    monthAriaLabel: "月",
    confirm: "确定",
    selectTime: "选择时间",
    selectDate: "选择日期",
    nextYear: "下一年",
    preYear: "上一年",
    nextMonth: "下个月",
    preMonth: "上个月",
    preDecade: "上个十年",
    nextDecade: "下个十年",
    now: "当前"
  },
  upload: {
    sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
    cancelUploadText: "取消上传",
    triggerUploadText: {
      fileInput: "选择文件",
      image: "点击上传图片",
      normal: "点击上传",
      reupload: "重新选择",
      continueUpload: "继续选择",
      "delete": "删除",
      uploading: "上传中"
    },
    dragger: {
      dragDropText: "释放鼠标",
      draggingText: "拖拽到此区域",
      clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域"
    },
    file: {
      fileNameText: "文件名",
      fileSizeText: "文件大小",
      fileStatusText: "状态",
      fileOperationText: "操作",
      fileOperationDateText: "上传日期"
    },
    progress: {
      uploadingText: "上传中",
      waitingText: "待上传",
      failText: "上传失败",
      successText: "上传成功"
    }
  },
  form: {
    errorMessage: {
      date: "请输入正确的${name}",
      url: "请输入正确的${name}",
      required: "${name}必填",
      whitespace: "${name}不能为空",
      max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
      min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
      len: "${name}字符长度必须是 ${validate}",
      "enum": "${name}只能是${validate}等",
      idcard: "请输入正确的${name}",
      telnumber: "请输入正确的${name}",
      pattern: "请输入正确的${name}",
      validator: "${name}不符合要求",
      "boolean": "${name}数据类型必须是布尔类型",
      number: "${name}必须是数字"
    },
    colonText: "："
  },
  input: {
    placeholder: "请输入"
  },
  list: {
    loadingText: "正在加载中，请稍等",
    loadingMoreText: "点击加载更多"
  },
  alert: {
    expandText: "展开更多",
    collapseText: "收起"
  },
  anchor: {
    copySuccessText: "链接复制成功",
    copyText: "复制链接"
  },
  colorPicker: {
    swatchColorTitle: "系统预设颜色",
    recentColorTitle: "最近使用颜色",
    clearConfirmText: "确定清空最近使用的颜色吗？"
  },
  guide: {
    finishButtonProps: {
      content: "完成",
      theme: "primary"
    },
    nextButtonProps: {
      content: "下一步",
      theme: "primary"
    },
    skipButtonProps: {
      content: "跳过",
      theme: "default"
    },
    prevButtonProps: {
      content: "上一步",
      theme: "default"
    }
  },
  image: {
    errorText: "图片无法显示",
    loadingText: "图片加载中"
  },
  imageViewer: {
    errorText: "图片加载失败，可尝试重新加载",
    mirrorTipText: "镜像",
    rotateTipText: "旋转",
    originalSizeTipText: "原始大小"
  },
  typography: {
    expandText: "展开",
    collapseText: "收起",
    copiedText: "复制成功"
  },
  rate: {
    rateText: ["极差", "失望", "一般", "满意", "惊喜"]
  },
  empty: {
    titleText: {
      maintenance: "建设中",
      success: "成功",
      fail: "失败",
      empty: "暂无数据",
      networkError: "网络错误"
    }
  },
  descriptions: {
    colonText: "："
  }
};

export {
  _typeof,
  dayjs_min,
  dayjs,
  zhCn2 as zhCn
};
/*! Bundled license information:

tdesign-vue-next/es/_chunks/dep-592c2263.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/_chunks/dep-05c168fe.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/_chunks/dep-68770bb3.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/_chunks/dep-e16e8807.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/_common/js/global-config/locale/zh_CN.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)
*/
//# sourceMappingURL=chunk-5JB5BLUG.js.map
