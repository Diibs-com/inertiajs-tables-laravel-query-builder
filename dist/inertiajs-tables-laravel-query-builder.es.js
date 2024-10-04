import { ref as S, onMounted as Q, onBeforeUnmount as be, openBlock as o, createElementBlock as h, renderSlot as y, watch as K, createBlock as x, withCtx as C, createElementVNode as s, normalizeClass as $, withModifiers as P, withDirectives as D, vShow as R, resolveDynamicComponent as V, toDisplayString as v, createCommentVNode as k, computed as _, Fragment as B, renderList as O, unref as t, createVNode as z, createTextVNode as M, nextTick as ye, getCurrentInstance as we, onUnmounted as xe, Transition as ke } from "vue";
import { createPopper as _e } from "@popperjs/core/lib/popper-lite";
import $e from "@popperjs/core/lib/modifiers/preventOverflow";
import Ce from "@popperjs/core/lib/modifiers/flip";
import Se from "lodash-es/uniq";
import qe from "lodash-es/find";
import G from "qs";
import Pe from "lodash-es/clone";
import Fe from "lodash-es/filter";
import Be from "lodash-es/findKey";
import j from "lodash-es/forEach";
import Oe from "lodash-es/isEqual";
import Te from "lodash-es/map";
import je from "lodash-es/pickBy";
const Ie = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const a = e, i = S(null), c = S(null);
    return Q(() => {
      i.value = (d) => {
        d.target === c.value || c.value.contains(d.target) || a.do();
      }, document.addEventListener("click", i.value), document.addEventListener("touchstart", i.value);
    }), be(() => {
      document.removeEventListener("click", i.value), document.removeEventListener("touchstart", i.value);
    }), (d, r) => (o(), h("div", {
      ref_key: "root",
      ref: c
    }, [
      y(d.$slots, "default")
    ], 512));
  }
}, Ve = { class: "relative" }, Le = ["dusk", "disabled", "onClick"], Me = { class: "mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" }, U = {
  __name: "ButtonWithDropdown",
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  setup(e, { expose: a }) {
    const i = e, c = S(!1), d = S(null);
    function r() {
      c.value = !c.value;
    }
    function l() {
      c.value = !1;
    }
    K(c, () => {
      d.value.update();
    });
    const g = S(null), b = S(null);
    return Q(() => {
      d.value = _e(g.value, b.value, {
        placement: i.placement,
        modifiers: [Ce, $e]
      });
    }), a({ hide: l }), (F, q) => (o(), x(Ie, { do: l }, {
      default: C(() => [
        s("div", Ve, [
          s("button", {
            ref_key: "button",
            ref: g,
            type: "button",
            dusk: e.dusk,
            disabled: e.disabled,
            class: $(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", { "border-green-300": e.active, "border-gray-300": !e.active, "cursor-not-allowed": e.disabled }]),
            "aria-haspopup": "true",
            onClick: P(r, ["prevent"])
          }, [
            y(F.$slots, "button")
          ], 10, Le),
          D(s("div", {
            ref_key: "tooltip",
            ref: b,
            class: "absolute z-10"
          }, [
            s("div", Me, [
              y(F.$slots, "default")
            ])
          ], 512), [
            [R, c.value]
          ])
        ])
      ]),
      _: 3
    }));
  }
}, ze = { class: "flex flex-row items-center" }, De = { class: "uppercase" }, Re = ["sorted"], Ee = {
  key: 0,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, Ne = {
  key: 1,
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, We = {
  key: 2,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, Ae = {
  __name: "HeaderCell",
  props: {
    cell: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const a = e;
    function i() {
      a.cell.sortable && a.cell.onSort(a.cell.key);
    }
    return (c, d) => D((o(), h("th", null, [
      (o(), x(V(e.cell.sortable ? "button" : "div"), {
        class: "py-3 px-6 w-full",
        dusk: e.cell.sortable ? `sort-${e.cell.key}` : null,
        onClick: P(i, ["prevent"])
      }, {
        default: C(() => [
          s("span", ze, [
            y(c.$slots, "label", {}, () => [
              s("span", De, v(e.cell.label), 1)
            ]),
            y(c.$slots, "sort", {}, () => [
              e.cell.sortable ? (o(), h("svg", {
                key: 0,
                "aria-hidden": "true",
                class: $(["w-3 h-3 ml-2", {
                  "text-gray-400": !e.cell.sorted,
                  "text-green-500": e.cell.sorted
                }]),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 320 512",
                sorted: e.cell.sorted
              }, [
                e.cell.sorted ? k("", !0) : (o(), h("path", Ee)),
                e.cell.sorted === "asc" ? (o(), h("path", Ne)) : k("", !0),
                e.cell.sorted === "desc" ? (o(), h("path", We)) : k("", !0)
              ], 10, Re)) : k("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["dusk", "onClick"]))
    ], 512)), [
      [R, !e.cell.hidden]
    ]);
  }
}, Y = {
  translations: {
    next: "Next",
    no_results_found: "No results found",
    of: "of",
    per_page: "per page",
    previous: "Previous",
    results: "results",
    to: "to"
  }
};
function de() {
  return Y.translations;
}
function Pr(e, a) {
  Y.translations[e] = a;
}
function Fr(e) {
  Y.translations = e;
}
const He = ["dusk", "value"], Ge = ["value"], ce = {
  __name: "PerPageSelector",
  props: {
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    value: {
      type: Number,
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
      },
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const a = e, i = de(), c = _(() => {
      let d = [...a.options];
      return d.push(parseInt(a.value)), Se(d).sort((r, l) => r - l);
    });
    return (d, r) => (o(), h("select", {
      name: "per_page",
      dusk: e.dusk,
      value: e.value,
      class: "block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",
      onChange: r[0] || (r[0] = (l) => e.onChange(l.target.value))
    }, [
      (o(!0), h(B, null, O(t(c), (l) => (o(), h("option", {
        key: l,
        value: l
      }, v(l) + " " + v(t(i).per_page), 9, Ge))), 128))
    ], 40, He));
  }
}, Qe = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
}, Ke = { key: 0 }, Ue = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  })
], -1), Ye = { class: "hidden sm:inline ml-2" }, Je = { class: "hidden sm:inline mr-2" }, Xe = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  })
], -1), Ze = {
  key: 2,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, et = { class: "flex flex-row space-x-4 items-center flex-grow" }, tt = { class: "hidden lg:block text-sm text-gray-700 flex-grow" }, rt = { class: "font-medium" }, nt = { class: "font-medium" }, lt = { class: "font-medium" }, st = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, at = { class: "sr-only" }, ot = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), ut = { class: "sr-only" }, it = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })
], -1), ct = {
  __name: "Pagination",
  props: {
    onClick: {
      type: Function,
      required: !1
    },
    perPageOptions: {
      type: Array,
      default() {
        return () => [15, 30, 50, 100];
      },
      required: !1
    },
    onPerPageChange: {
      type: Function,
      default() {
        return () => {
        };
      },
      required: !1
    },
    hasData: {
      type: Boolean,
      required: !0
    },
    meta: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const a = e, i = de(), c = _(() => "links" in r.value ? r.value.links.length > 0 : !1), d = _(() => Object.keys(r.value).length > 0), r = _(() => a.meta), l = _(() => "prev_page_url" in r.value ? r.value.prev_page_url : null), g = _(() => "next_page_url" in r.value ? r.value.next_page_url : null), b = _(() => parseInt(r.value.per_page));
    return (F, q) => t(d) ? (o(), h("nav", Qe, [
      !e.hasData || t(r).total < 1 ? (o(), h("p", Ke, v(t(i).no_results_found), 1)) : k("", !0),
      e.hasData ? (o(), h("div", {
        key: 1,
        class: $(["flex-1 flex justify-between", { "sm:hidden": t(c) }])
      }, [
        (o(), x(V(t(l) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(l),
            "text-gray-700 hover:text-gray-500": t(l)
          }, "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(l),
          dusk: t(l) ? "pagination-simple-previous" : null,
          onClick: q[0] || (q[0] = P((w) => e.onClick(t(l)), ["prevent"]))
        }, {
          default: C(() => [
            Ue,
            s("span", Ye, v(t(i).previous), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"])),
        z(ce, {
          dusk: "per-page-mobile",
          value: t(b),
          options: e.perPageOptions,
          "on-change": e.onPerPageChange
        }, null, 8, ["value", "options", "on-change"]),
        (o(), x(V(t(g) ? "a" : "div"), {
          class: $([{
            "cursor-not-allowed text-gray-400": !t(g),
            "text-gray-700 hover:text-gray-500": t(g)
          }, "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(g),
          dusk: t(g) ? "pagination-simple-next" : null,
          onClick: q[1] || (q[1] = P((w) => e.onClick(t(g)), ["prevent"]))
        }, {
          default: C(() => [
            s("span", Je, v(t(i).next), 1),
            Xe
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"]))
      ], 2)) : k("", !0),
      e.hasData && t(c) ? (o(), h("div", Ze, [
        s("div", et, [
          z(ce, {
            dusk: "per-page-full",
            value: t(b),
            options: e.perPageOptions,
            "on-change": e.onPerPageChange
          }, null, 8, ["value", "options", "on-change"]),
          s("p", tt, [
            s("span", rt, v(t(r).from), 1),
            M(" " + v(t(i).to) + " ", 1),
            s("span", nt, v(t(r).to), 1),
            M(" " + v(t(i).of) + " ", 1),
            s("span", lt, v(t(r).total), 1),
            M(" " + v(t(i).results), 1)
          ])
        ]),
        s("div", null, [
          s("nav", st, [
            (o(), x(V(t(l) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(l),
                "text-gray-500 hover:bg-gray-50": t(l)
              }, "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(l),
              dusk: t(l) ? "pagination-previous" : null,
              onClick: q[2] || (q[2] = P((w) => e.onClick(t(l)), ["prevent"]))
            }, {
              default: C(() => [
                s("span", at, v(t(i).previous), 1),
                ot
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"])),
            (o(!0), h(B, null, O(t(r).links, (w, I) => (o(), h("div", { key: I }, [
              y(F.$slots, "link", {}, () => [
                !isNaN(w.label) || w.label === "..." ? (o(), x(V(w.url ? "a" : "div"), {
                  key: 0,
                  href: w.url,
                  dusk: w.url ? `pagination-${w.label}` : null,
                  class: $(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700", {
                    "cursor-not-allowed": !w.url,
                    "hover:bg-gray-50": w.url,
                    "bg-gray-100": w.active
                  }]),
                  onClick: P((N) => e.onClick(w.url), ["prevent"])
                }, {
                  default: C(() => [
                    M(v(w.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "dusk", "class", "onClick"])) : k("", !0)
              ])
            ]))), 128)),
            (o(), x(V(t(g) ? "a" : "div"), {
              class: $([{
                "cursor-not-allowed text-gray-400": !t(g),
                "text-gray-500 hover:bg-gray-50": t(g)
              }, "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(g),
              dusk: t(g) ? "pagination-next" : null,
              onClick: q[3] || (q[3] = P((w) => e.onClick(t(g)), ["prevent"]))
            }, {
              default: C(() => [
                s("span", ut, v(t(i).next), 1),
                it
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"]))
          ])
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}, dt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), ht = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "add-search-input-menu",
  class: "min-w-max"
}, ft = ["dusk", "onClick"], gt = {
  __name: "TableAddSearchRow",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    hasSearchInputsWithoutValue: {
      type: Boolean,
      required: !0
    },
    onAdd: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const a = e, i = S(null);
    function c(d) {
      a.onAdd(d), i.value.hide();
    }
    return (d, r) => (o(), x(U, {
      ref_key: "dropdown",
      ref: i,
      dusk: "add-search-row-dropdown",
      disabled: !e.hasSearchInputsWithoutValue,
      class: "w-auto"
    }, {
      button: C(() => [
        dt
      ]),
      default: C(() => [
        s("div", ht, [
          (o(!0), h(B, null, O(e.searchInputs, (l, g) => (o(), h("button", {
            key: g,
            dusk: `add-search-row-${l.key}`,
            class: "text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            role: "menuitem",
            onClick: P((b) => c(l.key), ["prevent"])
          }, v(l.label), 9, ft))), 128))
        ])
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
}, pt = /* @__PURE__ */ s("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }, null, -1), mt = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
  "clip-rule": "evenodd"
}, null, -1), vt = [
  pt,
  mt
], bt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "toggle-columns-menu",
  class: "min-w-max"
}, yt = { class: "px-2" }, wt = { class: "divide-y divide-gray-200" }, xt = { class: "text-sm text-gray-900" }, kt = ["aria-pressed", "aria-labelledby", "aria-describedby", "dusk", "onClick"], _t = /* @__PURE__ */ s("span", { class: "sr-only" }, "Column status", -1), $t = {
  __name: "TableColumns",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    hasHiddenColumns: {
      type: Boolean,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const a = e;
    return (i, c) => (o(), x(U, {
      placement: "bottom-end",
      dusk: "columns-dropdown",
      active: e.hasHiddenColumns
    }, {
      button: C(() => [
        (o(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasHiddenColumns,
            "text-green-400": e.hasHiddenColumns
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, vt, 2))
      ]),
      default: C(() => [
        s("div", bt, [
          s("div", yt, [
            s("ul", wt, [
              (o(!0), h(B, null, O(a.columns, (d, r) => D((o(), h("li", {
                key: r,
                class: "py-2 flex items-center justify-between"
              }, [
                s("p", xt, v(d.label), 1),
                s("button", {
                  type: "button",
                  class: $(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", {
                    "bg-green-500": !d.hidden,
                    "bg-gray-200": d.hidden
                  }]),
                  "aria-pressed": !d.hidden,
                  "aria-labelledby": `toggle-column-${d.key}`,
                  "aria-describedby": `toggle-column-${d.key}`,
                  dusk: `toggle-column-${d.key}`,
                  onClick: P((l) => e.onChange(d.key, d.hidden), ["prevent"])
                }, [
                  _t,
                  s("span", {
                    "aria-hidden": "true",
                    class: $([{
                      "translate-x-5": !d.hidden,
                      "translate-x-0": d.hidden
                    }, "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                  }, null, 2)
                ], 10, kt)
              ])), [
                [R, d.can_be_hidden]
              ])), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, Ct = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
  "clip-rule": "evenodd"
}, null, -1), St = [
  Ct
], qt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "filter-menu",
  class: "min-w-max"
}, Pt = { class: "text-xs uppercase tracking-wide bg-gray-100 p-3" }, Ft = { class: "p-2" }, Bt = ["name", "value", "onChange"], Ot = ["value"], Tt = {
  __name: "TableFilter",
  props: {
    hasEnabledFilters: {
      type: Boolean,
      required: !0
    },
    filters: {
      type: Object,
      required: !0
    },
    onFilterChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (a, i) => (o(), x(U, {
      placement: "bottom-end",
      dusk: "filters-dropdown",
      active: e.hasEnabledFilters
    }, {
      button: C(() => [
        (o(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: $(["h-5 w-5", {
            "text-gray-400": !e.hasEnabledFilters,
            "text-green-400": e.hasEnabledFilters
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, St, 2))
      ]),
      default: C(() => [
        s("div", qt, [
          (o(!0), h(B, null, O(e.filters, (c, d) => (o(), h("div", { key: d }, [
            s("h3", Pt, v(c.label), 1),
            s("div", Ft, [
              c.type === "select" ? (o(), h("select", {
                key: 0,
                name: c.key,
                value: c.value,
                class: "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",
                onChange: (r) => e.onFilterChange(c.key, r.target.value)
              }, [
                (o(!0), h(B, null, O(c.options, (r, l) => (o(), h("option", {
                  key: l,
                  value: l
                }, v(r), 9, Ot))), 128))
              ], 40, Bt)) : k("", !0)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, jt = { class: "relative" }, It = ["placeholder", "value"], Vt = /* @__PURE__ */ s("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 text-gray-400",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Lt = {
  __name: "TableGlobalSearch",
  props: {
    label: {
      type: String,
      default: "Search...",
      required: !1
    },
    value: {
      type: String,
      default: "",
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (a, i) => (o(), h("div", jt, [
      s("input", {
        class: "block w-full pl-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",
        placeholder: e.label,
        value: e.value,
        type: "text",
        name: "global",
        onInput: i[0] || (i[0] = (c) => e.onChange(c.target.value))
      }, null, 40, It),
      Vt
    ]));
  }
}, Mt = { class: "flex rounded-md shadow-sm relative mt-3" }, zt = ["for"], Dt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), Rt = ["id", "name", "value", "onInput"], Et = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, Nt = ["dusk", "onClick"], Wt = /* @__PURE__ */ s("span", { class: "sr-only" }, "Remove search", -1), At = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ht = [
  Wt,
  At
], Gt = {
  __name: "TableSearchRows",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    forcedVisibleSearchInputs: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    onRemove: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const a = e, i = { el: S([]) };
    let c = _(() => i.el.value);
    function d(r) {
      return a.forcedVisibleSearchInputs.includes(r);
    }
    return K(a.forcedVisibleSearchInputs, (r) => {
      const l = r.length > 0 ? r[r.length - 1] : null;
      !l || ye().then(() => {
        const g = qe(c.value, (b) => b.__vnode.key === l);
        g && g.focus();
      });
    }, { immediate: !0 }), (r, l) => (o(!0), h(B, null, O(e.searchInputs, (g, b) => D((o(), h("div", {
      key: b,
      class: "px-4 sm:px-0"
    }, [
      s("div", Mt, [
        s("label", {
          for: g.key,
          class: "inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [
          Dt,
          s("span", null, v(g.label), 1)
        ], 8, zt),
        (o(), h("input", {
          id: g.key,
          ref_for: !0,
          ref: i.el,
          key: g.key,
          name: g.key,
          value: g.value,
          type: "text",
          class: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",
          onInput: (F) => e.onChange(g.key, F.target.value)
        }, null, 40, Rt)),
        s("div", Et, [
          s("button", {
            class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            dusk: `remove-search-row-${g.key}`,
            onClick: P((F) => e.onRemove(g.key), ["prevent"])
          }, Ht, 8, Nt)
        ])
      ])
    ])), [
      [R, g.value !== null || d(g.key)]
    ])), 128));
  }
}, Qt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Kt = /* @__PURE__ */ s("span", null, "Reset", -1), Ut = [
  Qt,
  Kt
], Yt = {
  __name: "TableReset",
  props: {
    onClick: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (a, i) => (o(), h("button", {
      ref: "button",
      type: "button",
      dusk: "reset-table",
      class: "w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300",
      "aria-haspopup": "true",
      onClick: i[0] || (i[0] = P((...c) => e.onClick && e.onClick(...c), ["prevent"]))
    }, Ut, 512));
  }
}, Jt = (e, a) => {
  const i = e.__vccOpts || e;
  for (const [c, d] of a)
    i[c] = d;
  return i;
}, Xt = {}, Zt = { class: "flex flex-col" }, er = { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, tr = { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, rr = { class: "shadow border-b border-gray-200 relative" };
function nr(e, a) {
  return o(), h("div", Zt, [
    s("div", er, [
      s("div", tr, [
        s("div", rr, [
          y(e.$slots, "default")
        ])
      ])
    ])
  ]);
}
const lr = /* @__PURE__ */ Jt(Xt, [["render", nr]]), sr = ["dusk"], ar = { class: "flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0" }, or = { class: "order-2 sm:order-1 mr-2 sm:mr-4" }, ur = {
  key: 0,
  class: "flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:mr-4"
}, ir = {
  key: 0,
  class: "order-5 sm:order-3 sm:mr-4 ml-auto"
}, cr = { class: "min-w-full divide-y divide-gray-200 bg-white" }, dr = { class: "bg-gray-50" }, hr = { class: "font-medium text-xs uppercase text-left tracking-wider text-gray-500 py-3 px-6" }, fr = { class: "bg-white divide-y divide-gray-200" }, Br = {
  __name: "Table",
  props: {
    inertia: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    name: {
      type: String,
      default: "default",
      required: !1
    },
    striped: {
      type: Boolean,
      default: !1,
      required: !1
    },
    preventOverlappingRequests: {
      type: Boolean,
      default: !0,
      required: !1
    },
    inputDebounceMs: {
      type: Number,
      default: 350,
      required: !1
    },
    preserveScroll: {
      type: [Boolean, String],
      default: !1,
      required: !1
    },
    resource: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    meta: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    data: {
      type: Object,
      default: () => ({}),
      required: !1
    }
  },
  setup(e) {
    const a = e, i = we(), c = i ? i.appContext.config.globalProperties.$inertia : a.inertia, d = S(0), r = _(() => {
      let n = c.page.props.queryBuilderProps ? c.page.props.queryBuilderProps[a.name] || {} : {};
      return n._updates = d.value, n;
    }), l = S(r.value), g = _(() => r.value.pageName), b = S([]), F = S(null), q = _(() => !(r.value.hasToggleableColumns || r.value.hasFilters || r.value.hasSearchInputs || r.value.globalSearch)), w = _(() => Object.keys(a.resource).length === 0 ? a.data : "data" in a.resource ? a.resource.data : a.resource), I = _(() => Object.keys(a.resource).length === 0 ? a.meta : "links" in a.resource && "meta" in a.resource && Object.keys(a.resource.links).length === 4 && "next" in a.resource.links && "prev" in a.resource.links ? {
      ...a.resource.meta,
      next_page_url: a.resource.links.next,
      prev_page_url: a.resource.links.prev
    } : "meta" in a.resource ? a.resource.meta : a.resource), N = _(() => w.value.length > 0 || I.value.total > 0);
    function he(n) {
      b.value = b.value.filter((u) => u != n), E(n, null);
    }
    function J(n) {
      b.value.push(n);
    }
    const fe = _(() => {
      if (b.value.length > 0)
        return !0;
      const n = G.parse(location.search.substring(1));
      if (n[g.value] > 1)
        return !0;
      const f = a.name === "default" ? "" : a.name + "_";
      let p = !1;
      return j(["filter", "columns", "cursor", "sort"], (m) => {
        const T = n[f + m];
        m === "sort" && T === r.value.defaultSort || T !== void 0 && (p = !0);
      }), p;
    });
    function X() {
      b.value = [], j(l.value.filters, (n, u) => {
        l.value.filters[u].value = null;
      }), j(l.value.searchInputs, (n, u) => {
        l.value.searchInputs[u].value = null;
      }), j(l.value.columns, (n, u) => {
        l.value.columns[u].hidden = n.can_be_hidden ? !r.value.defaultVisibleToggleableColumns.includes(n.key) : !1;
      }), l.value.sort = null, l.value.cursor = null, l.value.page = 1;
    }
    const Z = {};
    function E(n, u) {
      clearTimeout(Z[n]), Z[n] = setTimeout(() => {
        A.value && a.preventOverlappingRequests && A.value.cancel();
        const f = L("searchInputs", n);
        l.value.searchInputs[f].value = u, l.value.cursor = null, l.value.page = 1;
      }, a.inputDebounceMs);
    }
    function ee(n) {
      E("global", n);
    }
    function te(n, u) {
      const f = L("filters", n);
      l.value.filters[f].value = u, l.value.cursor = null, l.value.page = 1;
    }
    function re(n) {
      l.value.cursor = null, l.value.perPage = n, l.value.page = 1;
    }
    function L(n, u) {
      return Be(l.value[n], (f) => f.key == u);
    }
    function ne(n, u) {
      const f = L("columns", n);
      l.value.columns[f].hidden = !u;
    }
    function ge() {
      let n = {};
      return j(l.value.searchInputs, (u) => {
        u.value !== null && (n[u.key] = u.value);
      }), j(l.value.filters, (u) => {
        u.value !== null && (n[u.key] = u.value);
      }), n;
    }
    function pe() {
      const n = l.value.columns;
      let u = Fe(n, (p) => !p.hidden), f = Te(u, (p) => p.key).sort();
      return Oe(f, r.value.defaultVisibleToggleableColumns) ? {} : f;
    }
    function me() {
      const n = ge(), u = pe(), f = {};
      Object.keys(n).length > 0 && (f.filter = n), Object.keys(u).length > 0 && (f.columns = u);
      const p = l.value.cursor, m = l.value.page, T = l.value.sort, ie = l.value.perPage;
      return p && (f.cursor = p), m > 1 && (f.page = m), ie > 1 && (f.perPage = ie), T && (f.sort = T), f;
    }
    function le(n) {
      var p, m, T;
      if (!n)
        return null;
      const u = (p = c.page.props.queryBuilderProps[a.name].pageName) != null ? p : "page", f = (T = (m = new URL(n)) == null ? void 0 : m.searchParams) == null ? void 0 : T.get(u);
      f !== null ? l.value.page = f : se(n);
    }
    function ve() {
      const n = G.parse(location.search, { ignoreQueryPrefix: !0 }), u = a.name === "default" ? "" : a.name + "_";
      j(["columns", "cursor", "sort"], (p) => {
        delete n[u + p];
      }), delete n[g.value], j(me(), (p, m) => {
        m === "page" ? n[g.value] = p : m === "perPage" ? n.perPage = p : n[u + m] = p;
      });
      let f = G.stringify(n, {
        filter(p, m) {
          return typeof m == "object" && m !== null ? je(m) : m;
        },
        skipNulls: !0,
        strictNullHandling: !0
      });
      return (!f || f === g.value + "=1") && (f = ""), f;
    }
    const W = S(!1), A = S(null);
    function se(n) {
      !n || c.get(
        n,
        {},
        {
          replace: !0,
          preserveState: !0,
          preserveScroll: a.preserveScroll !== !1,
          onBefore() {
            W.value = !0;
          },
          onCancelToken(u) {
            A.value = u;
          },
          onFinish() {
            W.value = !1;
          },
          onSuccess() {
            if (a.preserveScroll === "table-top") {
              const f = F.value.getBoundingClientRect().top + window.pageYOffset + -8;
              window.scrollTo({ top: f });
            }
            d.value++;
          }
        }
      );
    }
    K(l, () => {
      se(location.pathname + "?" + ve());
    }, { deep: !0 });
    const ae = () => {
      d.value++;
    };
    Q(() => {
      document.addEventListener("inertia:success", ae);
    }), xe(() => {
      document.removeEventListener("inertia:success", ae);
    });
    function oe(n) {
      l.value.sort == n ? l.value.sort = `-${n}` : l.value.sort = n, l.value.cursor = null, l.value.page = 1;
    }
    function H(n) {
      const u = L("columns", n);
      return !l.value.columns[u].hidden;
    }
    function ue(n) {
      const u = L("columns", n), f = Pe(r.value.columns[u]);
      return f.onSort = oe, f;
    }
    return (n, u) => (o(), x(ke, null, {
      default: C(() => [
        (o(), h("fieldset", {
          ref_key: "tableFieldset",
          ref: F,
          key: `table-${e.name}`,
          dusk: `table-${e.name}`,
          class: $(["min-w-0", { "opacity-75": W.value }])
        }, [
          s("div", ar, [
            s("div", or, [
              y(n.$slots, "tableFilter", {
                hasFilters: t(r).hasFilters,
                hasEnabledFilters: t(r).hasEnabledFilters,
                filters: t(r).filters,
                onFilterChange: te
              }, () => [
                t(r).hasFilters ? (o(), x(Tt, {
                  key: 0,
                  "has-enabled-filters": t(r).hasEnabledFilters,
                  filters: t(r).filters,
                  "on-filter-change": te
                }, null, 8, ["has-enabled-filters", "filters"])) : k("", !0)
              ])
            ]),
            t(r).globalSearch ? (o(), h("div", ur, [
              y(n.$slots, "tableGlobalSearch", {
                hasGlobalSearch: t(r).globalSearch,
                label: t(r).globalSearch ? t(r).globalSearch.label : null,
                value: t(r).globalSearch ? t(r).globalSearch.value : null,
                onChange: ee
              }, () => [
                t(r).globalSearch ? (o(), x(Lt, {
                  key: 0,
                  class: "flex-grow",
                  label: t(r).globalSearch.label,
                  value: t(r).globalSearch.value,
                  "on-change": ee
                }, null, 8, ["label", "value"])) : k("", !0)
              ])
            ])) : k("", !0),
            y(n.$slots, "tableReset", {
              canBeReset: "canBeReset",
              onClick: X
            }, () => [
              t(fe) ? (o(), h("div", ir, [
                z(Yt, { "on-click": X })
              ])) : k("", !0)
            ]),
            y(n.$slots, "tableAddSearchRow", {
              hasSearchInputs: t(r).hasSearchInputs,
              hasSearchInputsWithoutValue: t(r).hasSearchInputsWithoutValue,
              searchInputs: t(r).searchInputsWithoutGlobal,
              onAdd: J
            }, () => [
              t(r).hasSearchInputs ? (o(), x(gt, {
                key: 0,
                class: "order-3 sm:order-4 mr-2 sm:mr-4",
                "search-inputs": t(r).searchInputsWithoutGlobal,
                "has-search-inputs-without-value": t(r).hasSearchInputsWithoutValue,
                "on-add": J
              }, null, 8, ["search-inputs", "has-search-inputs-without-value"])) : k("", !0)
            ]),
            y(n.$slots, "tableColumns", {
              hasColumns: t(r).hasToggleableColumns,
              columns: t(r).columns,
              hasHiddenColumns: t(r).hasHiddenColumns,
              onChange: ne
            }, () => [
              t(r).hasToggleableColumns ? (o(), x($t, {
                key: 0,
                class: "order-4 mr-4 sm:mr-0 sm:order-5",
                columns: t(r).columns,
                "has-hidden-columns": t(r).hasHiddenColumns,
                "on-change": ne
              }, null, 8, ["columns", "has-hidden-columns"])) : k("", !0)
            ])
          ]),
          y(n.$slots, "tableSearchRows", {
            hasSearchRowsWithValue: t(r).hasSearchInputsWithValue,
            searchInputs: t(r).searchInputsWithoutGlobal,
            forcedVisibleSearchInputs: b.value,
            onChange: E
          }, () => [
            t(r).hasSearchInputsWithValue || b.value.length > 0 ? (o(), x(Gt, {
              key: 0,
              "search-inputs": t(r).searchInputsWithoutGlobal,
              "forced-visible-search-inputs": b.value,
              "on-change": E,
              "on-remove": he
            }, null, 8, ["search-inputs", "forced-visible-search-inputs"])) : k("", !0)
          ]),
          y(n.$slots, "tableWrapper", { meta: t(I) }, () => [
            z(lr, {
              class: $({ "mt-3": !t(q) })
            }, {
              default: C(() => [
                y(n.$slots, "table", {}, () => [
                  s("table", cr, [
                    s("thead", dr, [
                      y(n.$slots, "head", {
                        show: H,
                        sortBy: oe,
                        header: ue
                      }, () => [
                        s("tr", hr, [
                          (o(!0), h(B, null, O(t(r).columns, (f) => (o(), x(Ae, {
                            key: `table-${e.name}-header-${f.key}`,
                            cell: ue(f.key)
                          }, null, 8, ["cell"]))), 128))
                        ])
                      ])
                    ]),
                    s("tbody", fr, [
                      y(n.$slots, "body", { show: H }, () => [
                        (o(!0), h(B, null, O(t(w), (f, p) => (o(), h("tr", {
                          key: `table-${e.name}-row-${p}`,
                          class: $(["", {
                            "bg-gray-50": e.striped && p % 2,
                            "hover:bg-gray-100": e.striped,
                            "hover:bg-gray-50": !e.striped
                          }])
                        }, [
                          (o(!0), h(B, null, O(t(r).columns, (m) => D((o(), h("td", {
                            key: `table-${e.name}-row-${p}-column-${m.key}`,
                            class: "text-sm py-4 px-6 text-gray-500 whitespace-nowrap"
                          }, [
                            y(n.$slots, `cell(${m.key})`, { item: f }, () => [
                              M(v(f[m.key]), 1)
                            ])
                          ])), [
                            [R, H(m.key)]
                          ])), 128))
                        ], 2))), 128))
                      ])
                    ])
                  ])
                ]),
                y(n.$slots, "pagination", {
                  onClick: le,
                  hasData: t(N),
                  meta: t(I),
                  perPageOptions: t(r).perPageOptions,
                  onPerPageChange: re
                }, () => [
                  z(ct, {
                    "on-click": le,
                    "has-data": t(N),
                    meta: t(I),
                    "per-page-options": t(r).perPageOptions,
                    "on-per-page-change": re
                  }, null, 8, ["has-data", "meta", "per-page-options"])
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ])
        ], 10, sr))
      ]),
      _: 3
    }));
  }
};
export {
  U as ButtonWithDropdown,
  Ae as HeaderCell,
  Ie as OnClickOutside,
  ct as Pagination,
  Br as Table,
  gt as TableAddSearchRow,
  $t as TableColumns,
  Tt as TableFilter,
  Lt as TableGlobalSearch,
  Yt as TableReset,
  Gt as TableSearchRows,
  lr as TableWrapper,
  de as getTranslations,
  Pr as setTranslation,
  Fr as setTranslations
};
