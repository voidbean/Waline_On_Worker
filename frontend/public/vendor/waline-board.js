// \0rolldown/runtime.js
var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports);
// node_modules/.pnpm/@vue+shared@3.5.44/node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function t(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var n = {}, r = [], i = () => {}, a = () => !1, o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), s = (e) => e.startsWith("onUpdate:"), c = Object.assign, l = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, u = Object.prototype.hasOwnProperty, d = (e, t) => u.call(e, t), f = Array.isArray, p = (e) => S(e) === "[object Map]", m = (e) => S(e) === "[object Set]", h = (e) => S(e) === "[object Date]", g = (e) => typeof e == "function", _ = (e) => typeof e == "string", v = (e) => typeof e == "symbol", y = (e) => typeof e == "object" && !!e, b = (e) => (y(e) || g(e)) && g(e.then) && g(e.catch), x = Object.prototype.toString, S = (e) => x.call(e), C = (e) => S(e).slice(8, -1), ee = (e) => S(e) === "[object Object]", te = (e) => _(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), re = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ie = /-\w/g, w = re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, T = re((e) => e.replace(ae, "-$1").toLowerCase()), oe = re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = re((e) => e ? `on${oe(e)}` : ""), E = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, D = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = _(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (_(e) || y(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, (e) => e.startsWith("/*") ? "" : e).split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function O(e) {
	let t = "";
	if (_(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (y(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = /* @__PURE__ */ t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ve(e) {
	return !!e || e === "";
}
function ye(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = k(e[i], t[i], n);
	return r;
}
function be(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && k(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function xe(e, t, n) {
	let r = p(e), i = p(t);
	if (r || i || (r = m(e), i = m(t), r || i)) return r && i ? be(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !k(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Se(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function k(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = v(e), i = v(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = y(e), i = y(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
function Ce(e, t) {
	return e.findIndex((e) => k(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), A = (e) => _(e) ? e : e == null ? "" : f(e) || y(e) && (e.toString === x || !g(e.toString)) ? we(e) ? A(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : v(t) ? Ee(t) : y(t) && !f(t) && !ee(t) ? String(t) : t, Ee = (e, t = "") => v(e) ? `Symbol(${e.description ?? t})` : e, j, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes || (j.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Oe() {
	return j;
}
function ke(e, t = !1) {
	j && j.cleanups.push(e);
}
var M, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Je(this), Re(this);
		let e = M, t = We;
		M = this, We = !0;
		try {
			return this.fn();
		} finally {
			ze(this), M = e, We = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Pe, Pe = e) : (e.next = Ne, Ne = e);
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ye) || (e.globalVersion = Ye, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = We;
	M = e, We = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, We = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var We = !0, Ge = [];
function Ke() {
	Ge.push(We), We = !1;
}
function qe() {
	let e = Ge.pop();
	We = e === void 0 || e;
}
function Je(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var Ye = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !We || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Xe(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ye++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (We && M) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function rt(e, t, n, r, i, a) {
	let o = $e.get(e);
	if (!o) {
		Ye++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === nt || !v(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(nt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(et)), p(e) && s(o.get(tt)));
				break;
			case "delete":
				i || (s(o.get(et)), p(e) && s(o.get(tt)));
				break;
			case "set": p(e) && s(o.get(et));
		}
	}
	Le();
}
function it(e, t) {
	let n = $e.get(e);
	return n && n.get(t);
}
function at(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e || (N(t, "iterate", nt), /* @__PURE__ */ Jt(e)) ? t : /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e) ? t.map((e) => Qt(Zt(e))) : t.map(Qt) : t.map(Zt);
}
function ot(e) {
	return N(e = /* @__PURE__ */ P(e), "iterate", nt), e;
}
function st(e, t) {
	return /* @__PURE__ */ qt(e) ? Qt(/* @__PURE__ */ Kt(e) ? Zt(t) : t) : Zt(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => st(this, e));
	},
	concat(...e) {
		return at(this).concat(...e.map((e) => f(e) ? at(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = st(this, e[1]), e));
	},
	every(e, t) {
		return ft(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ft(this, "filter", e, t, (e) => e.map((e) => st(this, e)), arguments);
	},
	find(e, t) {
		return ft(this, "find", e, t, (e) => st(this, e), arguments);
	},
	findIndex(e, t) {
		return ft(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ft(this, "findLast", e, t, (e) => st(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ft(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ft(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return mt(this, "includes", e);
	},
	indexOf(...e) {
		return mt(this, "indexOf", e);
	},
	join(e) {
		return at(this).join(e);
	},
	lastIndexOf(...e) {
		return mt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ft(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ht(this, "pop");
	},
	push(...e) {
		return ht(this, "push", e);
	},
	reduce(e, ...t) {
		return pt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return pt(this, "reduceRight", e, t);
	},
	shift() {
		return ht(this, "shift");
	},
	some(e, t) {
		return ft(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ht(this, "splice", e);
	},
	toReversed() {
		return at(this).toReversed();
	},
	toSorted(e) {
		return at(this).toSorted(e);
	},
	toSpliced(...e) {
		return at(this).toSpliced(...e);
	},
	unshift(...e) {
		return ht(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => st(this, e));
	}
};
function lt(e, t, n) {
	let r = ot(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Jt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ut(a.next(), n), i !== dt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => ut(a._next(), n);
	}
	return a;
}
function ut(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var dt = Array.prototype;
function ft(e, t, n, r, i, a) {
	let o = ot(e), s = o !== e && !/* @__PURE__ */ Jt(e), c = o[t];
	if (c !== dt[t]) {
		let t = c.apply(e, a);
		return s ? Zt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, st(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function pt(e, t, n, r) {
	let i = ot(e), a = i !== e && !/* @__PURE__ */ Jt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = st(e, t)), n.call(this, t, st(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? st(e, c) : c;
}
function mt(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	N(r, "iterate", nt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function ht(e, t, n = []) {
	Ke(), Ie();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Le(), qe(), r;
}
var gt = /* @__PURE__ */ t("__proto__,__v_isRef,__isVue"), _t = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(v));
function vt(e) {
	v(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var yt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? zt : Rt : i ? Lt : It).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return vt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((v(t) ? _t.has(t) : gt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && te(t) ? o : o.value;
			return r && y(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return y(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, bt = class extends yt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && s && (o ? E(n, i) && rt(e, "set", t, n, i) : rt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && rt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return v(t) && _t.has(t) || N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", f(e) ? "length" : et), Reflect.ownKeys(e);
	}
}, xt = class extends yt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new bt(!0), Tt = /* @__PURE__ */ new xt(!0), Et = (e) => e, Dt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? Qt : Zt;
		return !t && N(a, "iterate", l ? tt : et), c(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function At(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (E(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? Qt : Zt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ P(t), "iterate", et), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (E(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? Et : e ? Qt : Zt;
			return !e && N(o, "iterate", et), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: kt("add"),
		set: kt("set"),
		delete: kt("delete"),
		clear: kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = Dt(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ Jt(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), rt(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Jt(n) || /* @__PURE__ */ qt(n) || (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && rt(r, "set", e, n, s) : rt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && rt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && rt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ot(r, e, t);
	}), n;
}
function jt(e, t) {
	let n = At(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var Mt = { get: /* @__PURE__ */ jt(!1, !1) }, Nt = { get: /* @__PURE__ */ jt(!1, !0) }, Pt = { get: /* @__PURE__ */ jt(!0, !1) }, Ft = { get: /* @__PURE__ */ jt(!0, !0) }, It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Bt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, St, Mt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Gt(e, !1, wt, Nt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Gt(e, !0, Ct, Pt, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0, Tt, Ft, zt);
}
function Gt(e, t, n, r, i) {
	if (!y(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Bt(C(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Xt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Zt = (e) => y(e) ? /* @__PURE__ */ Vt(e) : e, Qt = (e) => y(e) ? /* @__PURE__ */ Ut(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return en(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return en(e, !0);
}
function en(e, t) {
	return /* @__PURE__ */ F(e) ? e : new tn(e, t);
}
var tn = class {
	constructor(e, t) {
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ P(e), E(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
function nn(e) {
	return g(e) ? e() : L(e);
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, rn);
}
var on = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Ze(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function sn(e) {
	return new on(e);
}
var cn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = v(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!f(e) || v(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ Jt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return it(this._raw, this._key);
	}
}, ln = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function un(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : g(e) ? new ln(e) : y(e) && arguments.length > 1 ? dn(e, t, n) : /* @__PURE__ */ I(e);
}
function dn(e, t, n) {
	return new cn(e, t, n);
}
var fn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new fn(r, i, n);
}
var mn = {}, hn = /* @__PURE__ */ new WeakMap(), gn = void 0;
function _n(e, t = !1, n = gn) {
	if (n) {
		let t = hn.get(n);
		t || hn.set(n, t = []), t.push(e);
	}
}
function vn(e, t, r = n) {
	let { immediate: a, deep: o, once: s, scheduler: c, augmentJob: u, call: d } = r, p = (e) => o ? e : /* @__PURE__ */ Jt(e) || o === !1 || o === 0 ? yn(e, 1) : yn(e), m, h, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ F(e) ? (h = () => e.value, y = /* @__PURE__ */ Jt(e)) : /* @__PURE__ */ Kt(e) ? (h = () => p(e), y = !0) : f(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Jt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return p(e);
		if (g(e)) return d ? d(e, 2) : e();
	})) : h = g(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (_) {
			Ke();
			try {
				_();
			} finally {
				qe();
			}
		}
		let t = gn;
		gn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			gn = t;
		}
	} : i, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => yn(e(), t);
	}
	let x = Oe(), S = () => {
		m.stop(), x && x.active && l(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(mn) : mn, ee = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => E(e, C[t])) : E(n, C))) {
					let e = gn;
					Ke();
					try {
						_ && _(), gn = m;
						let e = [
							n,
							C === mn ? void 0 : b && C[0] === mn ? [] : C,
							v
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						gn = e, qe();
					}
				}
			} else m.run();
		}
	};
	return u && u(ee), m = new je(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => _n(e, !1, m), _ = m.onStop = () => {
		let e = hn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			hn.delete(m);
		}
	}, t ? a ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function yn(e, t = Infinity, n) {
	if (t <= 0 || !y(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) yn(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) yn(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		yn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) yn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && yn(e[r], t, n);
	}
	return e;
}
// node_modules/.pnpm/@vue+runtime-core@3.5.44/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function bn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Sn(e, t, n);
	}
}
function xn(e, t, n, r) {
	if (g(e)) {
		let i = bn(e, t, n, r);
		return i && b(i) && i.catch((e) => {
			Sn(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(xn(e[a], t, n, r));
		return i;
	}
}
function Sn(e, t, r, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || n;
	if (t) {
		let n = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; n;) {
			let t = n.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			n = n.parent;
		}
		if (o) {
			Ke(), bn(o, null, 10, [
				e,
				i,
				a
			]), qe();
			return;
		}
	}
	Cn(e, r, a, i, s);
}
function Cn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], wn = -1, Tn = [], En = null, Dn = 0, On = /* @__PURE__ */ Promise.resolve(), kn = null;
function An(e) {
	let t = kn || On;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function jn(e) {
	let t = wn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = zn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Mn(e) {
	if (!(e.flags & 1)) {
		let t = zn(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= zn(n) ? R.push(e) : R.splice(jn(t), 0, e), e.flags |= 1, Nn();
	}
}
function Nn() {
	kn ||= On.then(Bn);
}
function Pn(e) {
	if (!f(e)) En && e.id === -1 ? En.splice(Dn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Tn.push(e[t]);
	Nn();
}
function Fn(e, t, n, r = wn + 1) {
	for (; r < R.length; r++) {
		let n = R[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			R.splice(r, 1), r = e ? r - 1 : wn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function In(e, t, n = 0) {
	if (Tn.length) {
		let e = Tn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Tn.length; i++) {
				let a = Tn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Tn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => zn(e) - zn(t));
		if (Tn.length = r, En) {
			for (let e = 0; e < i.length; e++) En.push(i[e]);
			return;
		}
		for (En = i, Dn = 0; Dn < En.length; Dn++) {
			let e = En[Dn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		En = null, Dn = 0;
	}
}
var Ln = !1;
function Rn(e, t) {
	if (Ln) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Tn);
	e(), Ln = !0;
	try {
		Fn(void 0, t), In(void 0, n, t);
	} finally {
		Ln = !1;
	}
}
var zn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Bn(e) {
	try {
		for (wn = 0; wn < R.length; wn++) {
			let e = R[wn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), bn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; wn < R.length; wn++) {
			let e = R[wn];
			e && (e.flags &= -2);
		}
		wn = -1, R.length = 0, In(e), kn = null, (R.length || Tn.length) && Bn(e);
	}
}
var Vn = null, Hn = null;
function Un(e) {
	let t = Vn;
	return Vn = e, Hn = e && e.type.__scopeId || null, t;
}
function Wn(e, t = Vn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ki(-1);
		let i = Un(t), a = Ti.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ti.length; e > a; e--) Di();
			Un(i), r._d && ki(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Gn(e, t) {
	if (Vn === null) return e;
	let r = la(Vn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = n] = t[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && yn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Kn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ke(), xn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), qe());
	}
}
function qn(e, t) {
	if (Yi) {
		let n = Yi.provides, r = Yi.parent && Yi.parent.provides;
		r === n && (n = Yi.provides = Object.create(r)), n[e] = t;
	}
}
function Jn(e, t, n = !1) {
	let r = Xi();
	if (r || Pr) {
		let i = Pr ? Pr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
var Yn = /* @__PURE__ */ Symbol.for("v-scx"), Xn = () => Jn(Yn);
function Zn(e, t) {
	return $n(e, null, t);
}
function Qn(e, t, n) {
	return $n(e, t, n);
}
function $n(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r, u = c({}, r), d = t && a || !t && s !== "post", f;
	if (na) {
		if (s === "sync") {
			let e = Xn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = Yi;
	u.call = (e, t, n) => xn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, z(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Mn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = vn(e, t, u);
	return na && (f ? f.push(h) : d && h()), h;
}
var er = /* @__PURE__ */ Symbol("_vte"), tr = (e) => e.__isTeleport, nr = /* @__PURE__ */ Symbol("_leaveCb");
function rr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ci) {
			t = n;
			break;
		}
	}
	return t;
}
function ir(e) {
	if (!hr(e)) return tr(e.type) && e.children ? rr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function ar(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ar(tr(n.type) && ir(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === B && f(e.children)) {
		let n = Br(e.children, !1);
		n && ar(n, t);
	}
}
function or(e) {
	if (e.component) return or(e.component.subTree);
	if (e.type === B) {
		let t = f(e.children) && Br(e.children, !1);
		return t ? or(t) : void 0;
	}
	if (e.type !== Ci) return e;
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function cr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function lr(e) {
	let t = Xi(), r = /* @__PURE__ */ $t(null);
	if (t) {
		let i = t.refs === n ? t.refs = {} : t.refs;
		Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => r.value,
			set: (e) => r.value = e
		});
	}
	return r;
}
function ur(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var dr = /* @__PURE__ */ new WeakMap();
function fr(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => fr(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (mr(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fr(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? la(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e, m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, v = u.setupState, y = /* @__PURE__ */ P(v), b = v === n ? a : (e) => !ur(h, e) && d(y, e), x = (e, t) => !(t && ur(h, t));
	if (m != null && m !== p) {
		if (pr(t), _(m)) h[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (g(p)) bn(p, u, 12, [c, h]);
	else {
		let t = _(p), n = /* @__PURE__ */ F(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : h[p] : x(p) || !e.k ? p.value : h[e.k];
					if (o) f(n) && l(n, s);
					else if (f(n)) n.includes(s) || n.push(s);
					else if (t) h[p] = [s], b(p) && (v[p] = h[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[p] = c, b(p) && (v[p] = c)) : n && (x(p, e.k) && (p.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), dr.delete(e);
				};
				t.id = -1, dr.set(e, t), z(t, r);
			} else pr(e), i();
		}
	}
}
function pr(e) {
	let t = dr.get(e);
	t && (t.flags |= 8, dr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var mr = (e) => !!e.type.__asyncLoader, hr = (e) => e.type.__isKeepAlive;
function gr(e, t, n = Yi, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ke();
			let i = $i(n), a = xn(t, n, e, r);
			return i(), qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var _r = (e) => (t, n = Yi) => {
	na && e !== "sp" || gr(e, (...e) => t(...e), n);
}, vr = _r("m"), yr = _r("bum"), br = _r("um"), xr = "components";
function Sr(e, t) {
	return wr(xr, e, !0, t) || e;
}
var Cr = /* @__PURE__ */ Symbol.for("v-ndc");
function wr(e, t, n = !0, r = !1) {
	let i = Vn || Yi;
	if (i) {
		let n = i.type;
		if (e === xr) {
			let e = ua(n, !1);
			if (e && (e === t || e === w(t) || e === oe(w(t)))) return n;
		}
		let a = Tr(i[e] || n[e], t) || Tr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Tr(e, t) {
	return e && (e[t] || e[w(t)] || e[oe(w(t))]);
}
function Er(e, t, n, r) {
	let i, a = n && n[r], o = f(e);
	if (o || _(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Jt(e), s = /* @__PURE__ */ qt(e), e = ot(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Qt(Zt(e[n])) : Zt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (y(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
var Dr = (e) => e ? ta(e) ? la(e) : Dr(e.parent) : null, Or = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Dr(e.parent),
	$root: (e) => Dr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Mn(e.update);
	},
	$nextTick: (e) => e.n ||= An.bind(e.proxy),
	$watch: (e) => i
}), kr = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), Ar = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return r[t];
				case 3: return o[t];
			}
			else if (kr(i, t)) return s[t] = 1, i[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else s[t] = 0;
		}
		let u = Or[t], f, p;
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return kr(i, t) ? (i[t] = n, !0) : d(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || kr(t, s) || d(a, s) || d(r, s) || d(Or, s) || d(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function jr() {
	return {
		app: null,
		config: {
			isNativeTag: a,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Mr = 0;
function Nr(e, t) {
	return function(n, r = null) {
		g(n) || (n = c({}, n)), r != null && !y(r) && (r = null);
		let i = jr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: Mr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: fa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && g(e.install) ? (a.add(e), e.install(l, ...t)) : g(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, c) {
				if (!s) {
					let u = l._ceVNode || W(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, la(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (xn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Pr;
				Pr = l;
				try {
					return e();
				} finally {
					Pr = t;
				}
			}
		};
		return l;
	};
}
var Pr = null, Fr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function Ir(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n, a = r, o = t.startsWith("update:"), s = o && Fr(i, t.slice(7));
	s && (s.trim && (a = r.map((e) => _(e) ? e.trim() : e)), s.number && (a = a.map(D)));
	let c, l = i[c = se(t)] || i[c = se(w(t))];
	!l && o && (l = i[c = se(T(t))]), l && xn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, xn(u, e, 6, a);
	}
}
function Lr(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), y(e) && r.set(e, o), o) : (y(e) && r.set(e, null), null);
}
function Rr(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, T(t)) || d(e, t));
}
function zr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Un(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Bi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Bi(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? c : Vr(c);
		}
	} catch (t) {
		Ti.length = 0, Sn(t, e, 1), v = W(Ci);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(s) && (y = Hr(y, a)), b = Ri(b, y, !1, !0));
	}
	return n.dirs && (b = Ri(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ar(tr(b.type) && ir(b) || b, n.transition), v = b, Un(_), v;
}
function Br(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Mi(r)) {
			if (r.type !== Ci || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Vr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Hr = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Ur(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Wr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Gr(o, r, n) && !Rr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Wr(r, o, l) : !!o;
	return !1;
}
function Wr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || Gr(t, e, a) && !Rr(n, a)) return !0;
	}
	return !1;
}
function Gr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && y(r) && y(i) ? !k(r, i) : r !== i;
}
function Kr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var qr = {}, Jr = () => Object.create(qr), Yr = (e) => Object.getPrototypeOf(e) === qr;
function Xr(e, t, n, r = !1) {
	let i = {}, a = Jr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Qr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? i : a, e.attrs = a;
}
function Zr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Rr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = w(o);
						i[t] = $r(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Qr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = T(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = $r(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && rt(e.attrs, "set", "");
}
function Qr(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (ne(n)) continue;
		let l = t[n], u;
		a && d(a, u = w(n)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : Rr(e.emitsOptions, n) || n in i && l === i[n] || (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ P(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = $r(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function $r(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = d(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && g(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = $i(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
function ei(e, t, i = !1) {
	let a = t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [];
	if (!s) return y(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		let t = w(s[e]);
		ti(t) && (l[t] = n);
	}
	else if (s) for (let e in s) {
		let t = w(e);
		if (ti(t)) {
			let n = s[e], r = l[t] = f(n) || g(n) ? { type: n } : c({}, n), i = r.type, a = !1, o = !0;
			if (f(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = g(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = g(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || d(r, "default")) && u.push(t);
		}
	}
	let p = [l, u];
	return y(e) && a.set(e, p), p;
}
function ti(e) {
	return e[0] !== "$" && !ne(e);
}
var ni = (e) => e === "_" || e === "_ctx" || e === "$stable", ri = (e) => f(e) ? e.map(Bi) : [Bi(e)], ii = (e, t, n) => {
	if (t._n) return t;
	let r = Wn((...e) => ri(t(...e)), n);
	return r._c = !1, r;
}, ai = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ni(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = ii(n, i, r);
		else if (i != null) {
			let e = ri(i);
			t[n] = () => e;
		}
	}
}, oi = (e, t) => {
	let n = ri(t);
	e.slots.default = () => n;
}, si = (e, t, n) => {
	for (let r in t) (n || !ni(r)) && (e[r] = t[r]);
}, ci = (e, t, n) => {
	let r = e.slots = Jr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (si(r, t, n), n && le(r, "_", e, !0)) : ai(t, r);
	} else t && oi(e, t);
}, li = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? r && e === 1 ? o = !1 : si(a, t, r) : (o = !t.$stable, ai(t, a)), s = t;
	} else t && (oi(e, t), s = { default: 1 });
	if (o) for (let e in a) !ni(e) && s[e] == null && delete a[e];
}, z = xi;
function ui(e) {
	return di(e);
}
function di(e, t) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: _ } = e, v = (e, t, n, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ni(e, t) && (i = be(e), ge(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === r && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Si:
				y(e, t, n, i);
				break;
			case Ci:
				b(e, t, n, i);
				break;
			case wi:
				e ?? x(t, n, i, s);
				break;
			case B:
				oe(e, t, n, i, a, o, s, c, l);
				break;
			default: f & 1 ? ee(e, t, n, i, a, o, s, c, l) : f & 6 ? se(e, t, n, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, i, a, o, s, c, l, Se);
		}
		d != null && a ? fr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && fr(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), w(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ie(e.children, d, null, r, i, fi(e, a), s, u), _ && Kn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Wi(f, r, e);
		}
		_ && Kn(e, null, r, "beforeMount");
		let v = mi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && z(() => {
			try {
				f && Wi(f, r, e), v && g.enter(d), _ && Kn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || bi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ie = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Vi(e[l]) : Bi(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, w = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && pi(r, !1), (g = h.onVnodeBeforeUpdate) && Wi(g, r, t, e), f && Kn(t, e, r, "beforeUpdate"), r && pi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, r, i, fi(t, a), o) : s || fe(e, t, l, null, r, i, fi(t, a), o, !1), u > 0) {
			if (u & 16) T(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && T(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && z(() => {
			g && Wi(g, r, t, e), f && Kn(t, e, r, "updated");
		}, i);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || yi(c), d = u && (c.type === B || !Ni(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, T = (e, t, r, i, a) => {
		if (t !== r) {
			if (t !== n) for (let n in t) !ne(n) && !(n in r) && c(e, n, t[n], null, a, i);
			for (let n in r) {
				if (ne(n)) continue;
				let o = r[n], s = t[n];
				o !== s && n !== "value" && c(e, n, s, o, a, i);
			}
			"value" in r && c(e, "value", t.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ie(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && hi(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : E(t, n, r, i, a, o, c) : le(e, t, c);
	}, E = (e, t, n, r, i, a, o) => {
		let s = e.component = Ji(e, r, i);
		if (hr(e) && (s.ctx.renderer = Se), ra(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, D, o, a), !e.el) {
				let r = s.subTree = W(Ci);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else D(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (Ur(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, ue(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, D = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = _i(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							z(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				pi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Wi(d, s, t, c), pi(e, !0);
				let f = zr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Kr(e, f.el), r && z(r, i), (d = t.props && t.props.onVnodeUpdated) && z(() => Wi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = mr(t);
				if (pi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Wi(o, d, t), pi(e, !0), s && Ce) {
					let t = () => {
						e.subTree = zr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = zr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && z(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					z(() => Wi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && mr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && z(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Mn(u), pi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Zr(e, t.props, r, n), li(e, t.children, n), Ke(), Fn(e), qe();
	}, fe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ie(d, n, r, i, a, o, s, c));
	}, pe = (e, t, n, i, a, o, s, c, l) => {
		e ||= r, t ||= r;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let r = t[p] = l ? Vi(t[p]) : Bi(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : ie(t, n, i, a, o, s, c, l, f);
	}, me = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Vi(t[u]) : Bi(t[u]);
			if (Ni(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Vi(t[p]) : Bi(t[p]);
			if (Ni(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Vi(t[u]) : Bi(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Vi(t[u]) : Bi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ge(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Ni(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? gi(C) : r;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || yi(f) : i;
				C[u] === 0 ? v(null, r, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? he(r, n, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) he(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Se);
		else if (c === B) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === wi) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[nr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), z(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[nr];
					a._isLeaving && a[nr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ke(), fr(s, null, n, e, !0), qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !mr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Wi(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Kn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && ye(c, t, n), r && O(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && z(() => {
			_ && Wi(_, t, e), h && Kn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, O = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === B;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === wi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? or(e) : e, c = () => {
			a ? m(n) && _e(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		vi(c), vi(l), r && ce(r), i.stop(), a ? (a.flags |= 8, ge(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, ge(o, e, t, n)), s && z(s, t), z(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[er];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		Rn(() => {
			e == null ? t._vnode && ge(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : qi());
	}, Se = {
		p: v,
		um: ge,
		m: he,
		r: O,
		mt: E,
		mc: ie,
		pc: fe,
		pbc: ae,
		n: be,
		o: e
	}, k, Ce;
	return t && ([k, Ce] = t(Se)), {
		render: xe,
		hydrate: k,
		createApp: Nr(xe, k)
	};
}
function fi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Vi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && hi(t, a)), a.type === Si && (a.patchFlag === -1 && (a = i[e] = Vi(a)), a.el = t.el), a.type === Ci && !a.el && (a.el = t.el);
	}
}
function gi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function _i(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
function vi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function yi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? yi(t.subTree) : null;
}
var bi = (e) => e.__isSuspense;
function xi(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Pn(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), Si = /* @__PURE__ */ Symbol.for("v-txt"), Ci = /* @__PURE__ */ Symbol.for("v-cmt"), wi = /* @__PURE__ */ Symbol.for("v-stc"), Ti = [], Ei = null;
function V(e = !1) {
	Ti.push(Ei = e ? null : []);
}
function Di() {
	Ti.pop(), Ei = Ti[Ti.length - 1] || null;
}
var Oi = 1;
function ki(e, t = !1) {
	Oi += e, e < 0 && Ei && t && (Ei.hasOnce = !0);
}
function Ai(e) {
	return e.dynamicChildren = Oi > 0 ? Ei || r : null, Di(), Oi > 0 && Ei && Ei.push(e), e;
}
function H(e, t, n, r, i, a) {
	return Ai(U(e, t, n, r, i, a, !0));
}
function ji(e, t, n, r, i) {
	return Ai(W(e, t, n, r, i, !0));
}
function Mi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ni(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Pi = ({ key: e }) => e ?? null, Fi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : _(e) || /* @__PURE__ */ F(e) || g(e) ? {
	i: Vn,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Pi(t),
		ref: t && Fi(t),
		scopeId: Hn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: Vn
	};
	return s ? (Hi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= _(n) ? 8 : 16), Oi > 0 && !o && Ei && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ei.push(c), c;
}
var W = Ii;
function Ii(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Cr || (e = Ci), Mi(e)) {
		let r = Ri(e, t, !0);
		return n && Hi(r, n), Oi > 0 && !a && Ei && (r.shapeFlag & 6 ? Ei[Ei.indexOf(e)] = r : Ei.push(r)), r.patchFlag = -2, r;
	}
	if (da(e) && (e = e.__vccOpts), t) {
		t = Li(t);
		let { class: e, style: n } = t;
		e && !_(e) && (t.class = O(e)), y(n) && (/* @__PURE__ */ Yt(n) && !f(n) && (n = c({}, n)), t.style = fe(n));
	}
	let o = _(e) ? 1 : bi(e) ? 128 : tr(e) ? 64 : y(e) ? 4 : g(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function Li(e) {
	return e ? /* @__PURE__ */ Yt(e) || Yr(e) ? c({}, e) : e : null;
}
function Ri(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ui(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Pi(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(Fi(t)) : [a, Fi(t)] : Fi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ri(e.ssContent),
		ssFallback: e.ssFallback && Ri(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && ar(u, c.clone(u)), u;
}
function zi(e = " ", t = 0) {
	return W(Si, null, e, t);
}
function G(e = "", t = !1) {
	return t ? (V(), ji(Ci, null, e)) : W(Ci, null, e);
}
function Bi(e) {
	return e == null || typeof e == "boolean" ? W(Ci) : f(e) ? W(B, null, e.slice()) : Mi(e) ? Vi(e) : W(Si, null, String(e));
}
function Vi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ri(e);
}
function Hi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Hi(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Yr(t) ? t._ctx = Vn : r === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			Hi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Vn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [zi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ui(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (o(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Wi(e, t, n, r = null) {
	xn(e, t, 7, [n, r]);
}
var Gi = jr(), Ki = 0;
function qi() {
	return Ki;
}
function Ji(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Gi, o = {
		uid: Ki++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new De(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: ei(i, a),
		emitsOptions: Lr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: n,
		inheritAttrs: i.inheritAttrs,
		ctx: n,
		data: n,
		props: n,
		attrs: n,
		slots: n,
		refs: n,
		setupState: n,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ir.bind(null, o), e.ce && e.ce(o), o;
}
var Yi = null, Xi = () => Yi || Vn, Zi, Qi;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Zi = t("__VUE_INSTANCE_SETTERS__", (e) => Yi = e), Qi = t("__VUE_SSR_SETTERS__", (e) => na = e);
}
var $i = (e) => {
	let t = Yi;
	return Zi(e), e.scope.on(), () => {
		e.scope.off(), Zi(t);
	};
}, ea = () => {
	Yi && Yi.scope.off(), Zi(null);
};
function ta(e) {
	return e.vnode.shapeFlag & 4;
}
var na = !1;
function ra(e, t = !1, n = !1) {
	t && Qi(t);
	let { props: r, children: i } = e.vnode, a = ta(e);
	Xr(e, r, a, t), ci(e, i, n || t);
	let o = a ? ia(e, t) : void 0;
	return t && Qi(!1), o;
}
function ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ar);
	let { setup: r } = n;
	if (r) {
		Ke();
		let n = e.setupContext = r.length > 1 ? ca(e) : null, i = $i(e), a = bn(r, e, 0, [e.props, n]), o = b(a);
		if (qe(), i(), (o || e.sp) && !mr(e) && cr(e), o) {
			if (a.then(ea, ea), t) return a.then((n) => {
				Qi(!0);
				try {
					aa(e, n, t);
				} finally {
					Qi(!1);
				}
			}).catch((t) => {
				Sn(t, e, 0);
			});
			e.asyncDep = a;
		} else aa(e, a, t);
	} else oa(e, t);
}
function aa(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : y(t) && (e.setupState = an(t)), oa(e, n);
}
function oa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || i;
}
var sa = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function ca(e) {
	return {
		attrs: new Proxy(e.attrs, sa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function la(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Or) return Or[n](e);
		},
		has(e, t) {
			return t in e || t in Or;
		}
	}) : e.proxy;
}
function ua(e, t = !0) {
	return g(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function da(e) {
	return g(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ pn(e, t, na);
function q(e, t, n) {
	try {
		ki(-1);
		let r = arguments.length;
		return r === 2 ? y(t) && !f(t) ? Mi(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mi(n) && (n = [n]), W(e, t, n));
	} finally {
		ki(1);
	}
}
var fa = "3.5.44", pa = void 0, ma = typeof window < "u" && window.trustedTypes;
if (ma) try {
	pa = /* @__PURE__ */ ma.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ha = pa ? (e) => pa.createHTML(e) : (e) => e, ga = "http://www.w3.org/2000/svg", _a = "http://www.w3.org/1998/Math/MathML", va = typeof document < "u" ? document : null, ya = va && /* @__PURE__ */ va.createElement("template"), ba = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? va.createElementNS(ga, e) : t === "mathml" ? va.createElementNS(_a, e) : n ? va.createElement(e, { is: n }) : va.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => va.createTextNode(e),
	createComment: (e) => va.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => va.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			ya.innerHTML = ha(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ya.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, xa = /* @__PURE__ */ Symbol("_vtc");
function Sa(e, t, n) {
	let r = e[xa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ca = /* @__PURE__ */ Symbol("_vod"), wa = /* @__PURE__ */ Symbol("_vsh"), Ta = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ca] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ea(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Ea(e, !0), r.enter(e)) : r.leave(e, () => {
			Ea(e, !1);
		}) : Ea(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Ea(e, t);
	}
};
function Ea(e, t) {
	e.style.display = t ? e[Ca] : "none", e[wa] = !t;
}
var Da = /* @__PURE__ */ Symbol(""), Oa = /(?:^|;)\s*display\s*:/;
function ka(e, t, n) {
	let r = e.style, i = _(n), a = !1;
	if (n && !i) {
		if (t) {
			if (_(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ja(r, t, "");
			}
			else for (let e in t) n[e] ?? ja(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ja(r, i, "") : Fa(e, i, !_(t) && t ? t[i] : void 0, o) || ja(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Da];
			e && (n += ";" + e), r.cssText = n, a = Oa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ca in e && (i && t === n || (e[Ca] = a ? r.display : ""), e[wa] && (r.display = "none"));
}
var Aa = /\s*!important$/;
function ja(e, t, n) {
	if (f(n)) n.forEach((n) => ja(e, t, n));
	else if (n ??= "", t.startsWith("--")) Aa.test(n) ? e.setProperty(t, n.replace(Aa, ""), "important") : e.setProperty(t, n);
	else {
		let r = Pa(e, t);
		Aa.test(n) ? e.setProperty(T(r), n.replace(Aa, ""), "important") : e[r] = n;
	}
}
var Ma = [
	"Webkit",
	"Moz",
	"ms"
], Na = {};
function Pa(e, t) {
	let n = Na[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Na[t] = r;
	r = oe(r);
	for (let n = 0; n < Ma.length; n++) {
		let i = Ma[n] + r;
		if (i in e) return Na[t] = i;
	}
	return t;
}
function Fa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _(r) && n === r;
}
var Ia = "http://www.w3.org/1999/xlink";
function La(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ia, t.slice(6, t.length)) : e.setAttributeNS(Ia, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : v(n) ? String(n) : n);
}
function Ra(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ha(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function za(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ba(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Va = /* @__PURE__ */ Symbol("_vei");
function Ha(e, t, n, r, i = null) {
	let a = e[Va] || (e[Va] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ga(t);
		r ? za(e, n, a[t] = Ya(r, i), s) : o && (Ba(e, n, o, s), a[t] = void 0);
	}
}
var Ua = /(Once|Passive|Capture)$/, Wa = /^on:?(?:Once|Passive|Capture)$/;
function Ga(e) {
	let t, n;
	for (; (n = e.match(Ua)) && !Wa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var Ka = 0, qa = /* @__PURE__ */ Promise.resolve(), Ja = () => Ka ||= (qa.then(() => Ka = 0), Date.now());
function Ya(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (f(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && xn(e, t, 5, a);
			}
		} else xn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ja(), n;
}
var Xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Za = (e, t, n, r, i, a) => {
	let c = i === "svg";
	t === "class" ? Sa(e, r, c) : t === "style" ? ka(e, n, r) : o(t) ? s(t) || Ha(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Qa(e, t, r, c)) ? (Ra(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || La(e, t, r, c, a, t !== "value")) : e._isVueCE && ($a(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !_(r))) ? Ra(e, w(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), La(e, t, r, c));
};
function Qa(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && g(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Xa(t) && _(n) ? !1 : t in e;
}
function $a(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var eo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => ce(t, e) : t;
};
function to(e) {
	e.target.composing = !0;
}
function no(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var ro = /* @__PURE__ */ Symbol("_assign"), io = /* @__PURE__ */ Symbol("_initialValue");
function ao(e, t, n) {
	return t && (e = e.trim()), n && (e = D(e)), e;
}
var oo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[io] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[io] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[ro] = eo(i);
		let a = r || i.props && i.props.type === "number";
		za(e, t ? "change" : "input", (t) => {
			t.target.composing || e[ro](ao(e.value, n, a));
		}), (n || a) && za(e, "change", () => {
			e.value = ao(e.value, n, a);
		}), t || (za(e, "compositionstart", to), za(e, "compositionend", no), za(e, "change", no));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[io];
		delete e[io], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[ro](ao(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[ro] = eo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? D(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, so = {
	deep: !0,
	created(e, t, n) {
		e[ro] = eo(n), za(e, "change", () => {
			let t = e._modelValue, n = mo(e), r = e.checked, i = e[ro];
			if (f(t)) {
				let e = Ce(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (m(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ho(e, r));
		});
	},
	mounted: co,
	beforeUpdate(e, t, n) {
		e[ro] = eo(n), co(e, t, n);
	}
};
function co(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (f(t)) i = Ce(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = k(t, ho(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var lo = {
	created(e, { value: t }, n) {
		e.checked = k(t, n.props.value), e[ro] = eo(n), za(e, "change", () => {
			e[ro](mo(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[ro] = eo(r), t !== n && (e.checked = k(t, r.props.value));
	}
}, uo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, za(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? D(mo(e)) : mo(e)), r = e.multiple, i = r ? m(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? f(i) ? t.slice() : t : i];
			try {
				e[ro](i);
			} finally {
				An(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[ro] = eo(r);
	},
	mounted(e, { value: t }) {
		po(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[ro] = eo(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, n && n[0] === e.multiple && fo(t, n[1], n[0]) || po(e, t);
	}
};
function fo(e, t, n) {
	if (!n || f(e)) return k(e, t);
	if (m(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function po(e, t) {
	let n = e.multiple, r = f(t);
	if (!n || r || m(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = mo(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Ce(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (k(mo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function mo(e) {
	return "_value" in e ? e._value : e.value;
}
function ho(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var go = {
	created(e, t, n) {
		vo(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		vo(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		vo(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		vo(e, t, n, r, "updated");
	}
};
function _o(e, t) {
	switch (e) {
		case "SELECT": return uo;
		case "TEXTAREA": return oo;
		default: switch (t) {
			case "checkbox": return so;
			case "radio": return lo;
			default: return oo;
		}
	}
}
function vo(e, t, n, r, i) {
	let a = _o(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
var yo = /* @__PURE__ */ c({ patchProp: Za }, ba), bo;
function xo() {
	return bo ||= ui(yo);
}
var So = ((...e) => {
	let t = xo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = wo(e);
		if (!r) return;
		let i = t._component;
		g(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Co(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Co(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function wo(e) {
	return _(e) ? document.querySelector(e) : e;
}
// node_modules/.pnpm/@waline+api@1.1.2/node_modules/@waline/api/dist/index.js
var To = { "Content-Type": "application/json" }, Eo = (e) => `${e.replace(/\/?$/u, "/")}api/`, Do = (e, t = "") => {
	if (typeof e == "object" && e.errno) throw TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);
	return e;
}, Oo = ({ serverURL: e, lang: t, paths: n, type: r, signal: i }) => fetch(`${Eo(e)}article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${t}`, { signal: i }).then((e) => e.json()).then((e) => Do(e, "Get counter").data), ko = ({ serverURL: e, lang: t, path: n, type: r, action: i }) => fetch(`${Eo(e)}article?lang=${t}`, {
	method: "POST",
	headers: To,
	body: JSON.stringify({
		path: n,
		type: r,
		action: i
	})
}).then((e) => e.json()).then((e) => Do(e, "Update counter").data), Ao = ({ serverURL: e, lang: t, path: n, page: r, pageSize: i, sortBy: a, signal: o, token: s }) => {
	let c = {};
	return s && (c.Authorization = `Bearer ${s}`), fetch(`${Eo(e)}comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${r}&lang=${t}&sortBy=${a}`, {
		signal: o,
		headers: c
	}).then((e) => e.json()).then((e) => Do(e, "Get comment data").data);
}, jo = ({ serverURL: e, lang: t, token: n, comment: r }) => {
	let i = { "Content-Type": "application/json" };
	return n && (i.Authorization = `Bearer ${n}`), fetch(`${Eo(e)}comment?lang=${t}`, {
		method: "POST",
		headers: i,
		body: JSON.stringify(r)
	}).then((e) => e.json());
}, Mo = ({ serverURL: e, lang: t, token: n, objectId: r }) => fetch(`${Eo(e)}comment/${r}?lang=${t}`, {
	method: "DELETE",
	headers: { Authorization: `Bearer ${n}` }
}).then((e) => e.json()).then((e) => Do(e, "Delete comment")), No = ({ serverURL: e, lang: t, token: n, objectId: r, comment: i }) => fetch(`${Eo(e)}comment/${r}?lang=${t}`, {
	method: "PUT",
	headers: {
		...To,
		Authorization: `Bearer ${n}`
	},
	body: JSON.stringify(i)
}).then((e) => e.json()).then((e) => Do(e, "Update comment")), Po = ({ serverURL: e, lang: t, paths: n, signal: r }) => fetch(`${Eo(e)}comment?type=count&url=${encodeURIComponent(n.join(","))}&lang=${t}`, { signal: r }).then((e) => e.json()).then((e) => Do(e, "Get comment count").data), Fo = () => {
	let e = navigator.userAgent;
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(e);
}, Io = ({ lang: e, serverURL: t }) => {
	let n = 1024, r = (window.innerWidth - n) / 2, i = (window.innerHeight - 600) / 2;
	if (Fo()) return location.href = `${t.replace(/\/$/u, "")}/ui/login?lng=${encodeURIComponent(e)}&redirect=${encodeURIComponent(location.href)}`, new Promise(() => {});
	let a = window.open(`${t.replace(/\/$/u, "")}/ui/login?lng=${encodeURIComponent(e)}`, "_blank", `width=${n},height=600,left=${r},top=${i},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
	return a?.postMessage({
		type: "TOKEN",
		data: null
	}, "*"), new Promise((e) => {
		let t = ({ data: n }) => {
			!n || typeof n != "object" || n.type !== "userInfo" || n.data.token && (a?.close(), window.removeEventListener("message", t), e(n.data));
		};
		window.addEventListener("message", t);
	});
}, Lo = ({ serverURL: e, lang: t, paths: n, signal: r }) => Oo({
	serverURL: e,
	lang: t,
	paths: n,
	type: ["time"],
	signal: r
}), Ro = (e) => ko({
	...e,
	type: "time",
	action: "inc"
}), zo = "transparent 47%,currentColor 47%,currentColor 53%,transparent 53%)", [Bo, Vo, Ho] = [
	"border:1px solid;padding:2px 3px",
	"background:linear-gradient(to top right," + zo,
	"background:linear-gradient(" + zo
].map((e) => " style=\"display:inline-block;" + e + "\""), Uo = (e, t) => e.charCodeAt(t) <= 32 ? Uo(e, t + 1) : t, Wo = /\d+(?:\.\d+)?|\.\d+/y, Go = /\\(?:[a-zA-Z]+|.)/y, Ko = (e) => {
	let t = [], n = e.length, r = 0;
	for (; r < n && (r = Uo(e, r), !(r >= n));) {
		Go.lastIndex = r;
		let i = Go.exec(e);
		if (i) {
			let a = i[0];
			r += a.length;
			let o = /^\\text(?:rm|bf|it|sf|tt)?$/.test(a);
			if (o && (a = "\\text"), t.push(4, a), o) {
				let i = Uo(e, r);
				if (e.charCodeAt(i) === 123) {
					let a = 1, o = i;
					for (; o < n && a;) {
						let t = e.charCodeAt(++o);
						t === 123 ? ++a : t === 125 && --a;
					}
					a || (t.push(7, "", 2, e.slice(i + 1, o), 8, ""), r = o + 1);
				}
			}
			continue;
		}
		if (Wo.lastIndex = r, i = Wo.exec(e), i) {
			let e = i[0];
			t.push(1, e), r += e.length;
			continue;
		}
		let a = e[r], o = "_^{}".indexOf(a);
		t.push((a.charCodeAt(0) | 32) - 97 >>> 0 < 26 ? 2 : o >= 0 ? o + 5 : 3, a), ++r;
	}
	return t.push(0, ""), t;
}, qo = (e) => " lspace=\"" + e + "px\" rspace=\"" + e + "px\"", Jo = (e) => " mathvariant=\"" + e + "\"", Yo = Jo("normal"), Xo = Jo("bold"), Zo = Jo("double-struck"), Qo = Jo("script"), $o = Jo("fraktur"), es = Jo("sans-serif"), ts = Jo("monospace"), ns = Jo("italic"), rs = Jo("bold-italic"), is = " stretchy=\"false\"" + qo(0), as = qo(4), os = qo(5), ss = { __proto__: null }, cs = (e, t, n) => {
	e.replace(/([a-zA-Z]+)([^a-zA-Z]+)/g, (e, r, i) => {
		ss[r] = n ? [
			t,
			i,
			n
		] : [t, i];
	});
};
cs("alphaαbetaβgammaγthetaθpiπdeltaδepsilonϵzetaζetaηiotaιkappaκlambdaλmuμnuνxiξrhoρsigmaσtauτupsilonυphiϕchiχpsiψomegaωellℓhbarℏneg¬varphiφvarpiϖvarrhoϱvarthetaϑvarepsilonεvarsigmaς", 1), cs("DeltaΔGammaΓThetaΘLambdaΛXiΞPiΠSigmaΣUpsilonΥPhiΦPsiΨOmegaΩinfty∞nabla∇partial∂forall∀exists∃emptyset∅degree°alephℵwp℘top⊤bot⊥angle∠", 1, Yo), cs("prime′cdot⋅times×pm±div÷sum∑prod∏coprod∐int∫iint∬iiint∭oint∮leftrightarrow↔Leftarrow⇐Rightarrow⇒Leftrightarrow⇔cdots⋯in∈notin∉subset⊂supset⊃subseteq⊆supseteq⊇cup∪cap∩to→rightarrow→leftarrow←gets←dots…ldots…le≤leq≤ge≥geq≥bigcap⋂bigcup⋃bigvee⋁bigwedge⋀bigoplus⨁bigotimes⨂bigodot⨀biguplus⨄bigsqcup⨆downarrow↓uparrow↑updownarrow↕Downarrow⇓Uparrow⇑Updownarrow⇕longrightarrow⟶longleftarrow⟵longleftrightarrow⟷Longrightarrow⟹Longleftarrow⟸Longleftrightarrow⟺mapsto↦longmapsto⟼nearrow↗searrow↘nwarrow↖swarrow↙hookrightarrow↪hookleftarrow↩rightharpoonup⇀rightharpoondown⇁leftharpoonup↼leftharpoondown↽", 3), cs("neq≠ne≠lt<gt>", 3, Yo), cs("mp∓lor∨land∧oplus⊕ominus⊖otimes⊗oslash⊘odot⊙circ∘bullet∙star⋆ast∗setminus∖wr≀diamond⋄sqcap⊓sqcup⊔triangleleft◁triangleright▷", 3, as), cs("approx≈sim∼cong≅propto∝equiv≡ni∋perp⟂parallel∥mid∣nmid∤ll≪gg≫simeq≃prec≺succ≻preceq⪯succeq⪰vdash⊢dashv⊣models⊨owns∋sqsubset⊏sqsupset⊐sqsubseteq⊑sqsupseteq⊒", 3, os), "sin cos tan cot sec csc log lg ln lim exp max min sup inf det gcd arcsin arccos arctan sinh cosh tanh coth deg arg".replace(/\w+/g, (e) => ss[e] = [9, e]), [
	[",", 3],
	[":", 4],
	[";", 5],
	["!", -3],
	[" ", 4],
	["quad", 16],
	["qquad", 32],
	["thinspace", 3],
	["medspace", 4],
	["thickspace", 5],
	["enspace", 8],
	["negthinspace", -3],
	["negmedspace", -4],
	["negthickspace", -5]
].map(([e, t]) => ss[e] = [17, t + "px"]);
var ls = {
	__proto__: null,
	boxed: 1,
	cancel: 2,
	sout: 3
}, us = {
	"-": [3, "−"],
	"*": [3, "∗"],
	"/": [
		3,
		"/",
		Yo
	],
	"|": [
		3,
		"|",
		is
	],
	".": [
		3,
		".",
		Yo
	],
	"'": [3, "′"]
}, ds = (e, t, n, r) => e[t] === n && e[t + 1] === r, fs = (e) => (t, n, r, i) => {
	throw [e, i];
}, ps = (e, t) => {
	let n = t[0];
	if (e[n] == null) return null;
	t[0] += 2;
	let r = e[n + 1];
	return r === "." ? [
		3,
		"",
		" fence=\"true\" stretchy=\"true\" symmetric=\"true\""
	] : [3, r === "<" ? "⟨" : r === ">" ? "⟩" : r[0] === "\\" ? r.slice(1) : r];
}, ms = (e, t, n) => {
	let r = t[0];
	if (ds(e, r, 3, "[") && (!n || e[r + 2] === 1)) {
		for (r += 2; e[r] > 0 && !ds(e, r, 3, "]");) r += 2;
		e[r] > 0 && (r += 2), t[0] = r;
	}
}, hs = (e, t) => {
	let n = t[0], r = "";
	if (e[n] === 7) {
		for (n += 2; e[n] > 0 && e[n] !== 8; n += 2) r += e[n + 1];
		e[n] > 0 && (n += 2), t[0] = n;
	}
	return r;
}, gs = (e, t, n, r) => {
	let i = [], a = [], o = [];
	for (; e[t[0]] > 0;) {
		let s = e[t[0]], c = e[t[0] + 1];
		if (!n && s === 8) break;
		if (n && s === 4 && c === "\\end") {
			let n = t[0];
			if (t[0] += 2, hs(e, t) === r) break;
			t[0] = n;
		}
		if (c === "&" || c === "\\\\") {
			t[0] += 2, a.push(o), o = [], c === "\\\\" && (ms(e, t, 1), i.push(a), a = []);
			continue;
		}
		let l = js(e, t);
		l && o.push(l);
	}
	return o.length && a.push(o), a.length && i.push(a), i.length && !i[i.length - 1][1] && !i[i.length - 1][0][0] && i.pop(), i;
}, _s = (e, t, n) => {
	if (e[t[0]] === 7) {
		t[0] += 2;
		let r = gs(e, t, 0, n);
		return e[t[0]] > 0 && (t[0] += 2), [
			14,
			n,
			r
		];
	}
	let r = Y(e, t, 1);
	return r ? [
		14,
		n,
		[[[r]]]
	] : null;
}, vs = (e, t) => {
	if (e[t[0]] === 7) {
		let n = hs(e, t);
		if (n === "") return [8, []];
		let r = n.split("\\\\");
		return r.length > 1 ? [8, r.flatMap((e, t) => [...t ? [[15]] : [], ...e ? [[16, e]] : []])] : [16, n];
	}
	let n = Y(e, t, 1);
	if (n) return [16, n[1]];
	throw [3, "text"];
}, ys = (e, t, n) => {
	if (e[t[0]] === 7) {
		let n = hs(e, t);
		return n === "array" && (ms(e, t), e[t[0]] === 7 ? hs(e, t) : Y(e, t)), [
			14,
			n,
			gs(e, t, 1, n)
		];
	}
	return [1, n];
}, bs = (e, t) => {
	if (ds(e, t[0], 3, "[")) {
		t[0] += 2;
		let n = [];
		for (; e[t[0]] > 0 && !ds(e, t[0], 3, "]");) {
			let r = js(e, t);
			r && n.push(r);
		}
		return e[t[0]] === 3 && (t[0] += 2), [
			11,
			Y(e, t, 1),
			[8, n]
		];
	}
	return [10, Y(e, t, 1)];
}, xs = (e, t) => {
	let n = ps(e, t), r = Ms(e, t);
	if (ds(e, t[0], 4, "\\right")) return t[0] += 2, [12, [
		n,
		...r,
		ps(e, t)
	].filter(Boolean)];
	throw [1, n];
}, Ss = (e, t) => {
	if (!e) return e;
	let [n, r] = e;
	if (n === 1 || n === 2) return [
		n,
		r,
		t
	];
	if (n === 8) return [n, r.map((e) => Ss(e, t))];
	if (n >= 4 && n <= 6 || n === 13) {
		let n = [...e];
		return n[1] = Ss(n[1], t), n;
	}
	return e;
}, J = (e) => (t, n) => Ss(Y(t, n, 1), e), Cs = (e) => (t, n) => [
	13,
	Y(t, n, 1),
	e
], ws = Cs("¯"), Ts = (e) => (t, n) => {
	let r = Y(t, n, 1);
	return [
		e,
		Y(t, n, 1),
		r,
		1
	];
}, Es = Ts(4), Ds = Ts(5), Os = (e, t) => [
	7,
	Y(e, t, 1),
	Y(e, t, 1)
], ks = {
	__proto__: null,
	"\\": (e, t) => (ds(e, t[0], 3, "*") && (t[0] += 2), ms(e, t, 1), [15]),
	text: vs,
	frac: Os,
	dfrac: Os,
	tfrac: Os,
	cfrac: Os,
	overline: ws,
	bar: ws,
	hat: Cs("^"),
	tilde: Cs("~"),
	vec: Cs("→"),
	dot: Cs("˙"),
	ddot: Cs("¨"),
	check: Cs("ˇ"),
	acute: Cs("´"),
	grave: Cs("`"),
	breve: Cs("˘"),
	mathring: Cs("˚"),
	stackrel: Es,
	overset: Es,
	underset: Ds,
	mathbf: J(Xo),
	boldsymbol: J(rs),
	bm: J(rs),
	mathrm: J(Yo),
	mathbb: J(Zo),
	bb: J(Zo),
	mathcal: J(Qo),
	cal: J(Qo),
	mathfrak: J($o),
	frak: J($o),
	mathsf: J(es),
	sf: J(es),
	mathtt: J(ts),
	tt: J(ts),
	mathit: J(ns),
	it: J(ns),
	rm: J(Yo),
	bf: J(Xo),
	operatorname: (e, t) => {
		ds(e, t[0], 3, "*") && (t[0] += 2);
		let n = Y(e, t, 1);
		return [9, n ? n[0] === 8 ? n[1].map((e) => e[1]).join("") : n[1] : ""];
	},
	tag: (e, t) => [8, [
		[17, "2em"],
		us["("],
		Y(e, t, 1),
		us[")"]
	]],
	sqrt: bs,
	left: xs,
	phantom: (e, t) => [19, Y(e, t, 1)],
	pmod: (e, t) => [8, [
		[17, "8px"],
		us["("],
		[16, "mod"],
		[17, "4px"],
		Y(e, t, 1),
		us[")"]
	]],
	begin: ys,
	end: fs(0),
	right: fs(2)
}, As = [
	,
	(e) => [2, e],
	(e) => [1, e],
	(e) => us[e] ?? [3, e],
	(e, t, n) => {
		let r = e.slice(1), i = ks[r] || ks[r.replace(/^wide/, "")];
		if (i) return i(t, n, e, r);
		if (/^(?:[pbvV]?matrix|cases|array)$/.test(r)) {
			let e = _s(t, n, r);
			if (e) return e;
		}
		if (ls[r]) return [
			18,
			ls[r],
			Y(t, n, 1)
		];
		let a = ss[r];
		if (a) return a;
		throw [4, e];
	},
	,
	,
	(e, t, n) => {
		let r = [8, Ms(t, n)];
		return t[n[0]] > 0 && (n[0] += 2), r;
	}
], Y = (e, t, n) => {
	let r = t[0], i = e[r], a = t[1];
	if (!i) return null;
	let o = e[r + 1];
	return a && (o = o.slice(a)), n && i === 1 && o[1] ? (t[1] = a + 1, o = o[0]) : (t[0] += 2, t[1] = 0), As[i](o, e, t);
}, js = (e, t) => {
	let n = Y(e, t), r = t[0];
	if (!n) return null;
	let i = e[r + 1] === "\\limits" ? 1 : e[r + 1] === "\\nolimits" ? 2 : 0, a, o, s;
	for (i && (t[0] += 2); (s = e[t[0]]) > 0;) {
		let n = 0;
		for (; e[t[0] + 1] === "'"; t[0] += 2) ++n;
		if (n) o = [3, "′".repeat(n)];
		else {
			if (s !== 5 && s !== 6) break;
			t[0] += 2, s === 5 ? a = Y(e, t, 1) : o = Y(e, t, 1);
		}
	}
	return a ? o ? [
		6,
		n,
		a,
		o,
		i
	] : [
		5,
		n,
		a,
		i
	] : o ? [
		4,
		n,
		o,
		i
	] : n;
}, Ms = (e, t) => {
	let n = [], r;
	for (; (r = e[t[0]]) > 0 && !(r === 8 || ds(e, t[0], 4, "\\right"));) {
		let r = js(e, t);
		r && n.push(r);
	}
	return n;
};
for (let e of "()[]") us[e] = [
	3,
	e,
	" stretchy=\"false\""
];
var Ns = "mrow", Ps = "left", Fs = "start", Is = [
	null,
	Bo,
	Vo,
	Ho
], Ls = ["right", Ps], Rs = [";padding-right:0", ";padding-left:0"], zs = " style=\"justify-items:", Bs = Rs.map((e, t) => zs + (t ? Fs : "end") + e + "\""), Vs = Rs.map((e) => zs + Fs + e + "\""), Hs = [
	null,
	"mi",
	"mn",
	"mo"
], Us = (e) => e.replace(/[&<>"]/g, (e) => "&#" + e.charCodeAt(0) + ";"), X = (e, t, n) => "<" + e + (n || "") + ">" + t + "</" + e + ">", Ws = (e, t, n) => X(e, Us(t), n), Gs = (e, t, n = ".2em", r = "") => r + " columnalign=\"" + e + "\" rowspacing=\"" + n + "\" columnspacing=\"" + t + "\"", Ks = (e, ...t) => X(e, t.map(Ys).join("")), qs = (e) => X(Ns, e.map(Zs).join("")), Js = (e, t, n, r, [, i] = e[1], a = e[t]) => Ks(a === 1 || !a && /^([∑∏∐⋂⋃⨁⨂⋁⋀]|lim|max|min|sup|inf)$/.test(i) ? n : r, ...e.slice(1, t)), Ys = (e) => {
	if (!e) return X(Ns, "");
	let [t, n] = e;
	return t === 8 && !n[1] ? Ys(n[0]) : t === 8 || t === 9 ? X(Ns, Zs(e)) : Zs(e);
}, Xs = [
	,
	,
	,
	,
	(e) => Js(e, 3, "mover", "msup"),
	(e) => Js(e, 3, "munder", "msub"),
	(e) => Js(e, 4, "munderover", "msubsup"),
	([, e, t]) => Ks("mfrac", e, t),
	([, e]) => e.map(Zs).join(""),
	([, e]) => Ws("mi", e) + X("mo", "⁡"),
	([, e]) => X("msqrt", Ys(e)),
	([, e, t]) => Ks("mroot", e, t),
	([, e]) => qs(e),
	([, e, t]) => Ks("mover", e, [3, t]),
	(e) => {
		let [, t, n] = e, r = t === "cases", i = /^align|split/.test(t), a = r && n.every((e) => {
			let [t, n] = e[1]?.[0] || [];
			return !t || t === 3 && "=<≤≥≠≈≡∝>".includes(n);
		}), o = n[0] || [], s = o.map((e, t) => r ? a ? Vs[t % 2] : " style=\"justify-items:start\"" : i ? Bs[t % 2] : ""), c = X("mtable", n.map((e) => X("mtr", e.map((e, t) => {
			let n = e.map(Zs).join("");
			return X("mtd", e[1] ? X(Ns, n) : n, s[t] || "");
		}).join(""))).join(""), r ? Gs(Ps, a ? "0" : "1em") : i ? Gs(o.map((e, t) => Ls[t % 2]).join(" "), o.slice(1).map((e, t) => t % 2 ? "2em" : "0").join(" "), ".6em", " displaystyle=\"true\"") : ""), l = "pbvVc".indexOf(t[0]);
		return l >= 0 ? X(Ns, Ws("mo", "([|‖{"[l]) + c + (l < 4 ? Ws("mo", ")]‖‖"[l]) : "")) : c;
	},
	() => X("mspace", "", " linebreak=\"newline\""),
	([, e]) => Ws("mtext", e.replace(/ /g, "\xA0")),
	([, e]) => X("mspace", "", " width=\"" + e + "\""),
	([, e, t]) => Is[e] ? X(Ns, Ys(t), Is[e]) : Ys(t),
	([, e]) => X("mphantom", Ys(e))
], Zs = (e) => e ? e[0] <= 3 ? Ws(Hs[e[0]], e[1], e[2]) : Xs[e[0]](e) : "", Qs = (e, t) => {
	let n = e.replace(/[\r\n]+/g, " ");
	return X("math", X("semantics", qs(Ms(Ko(n), [0, 0])) + X("annotation", Us(n), " encoding=\"application/x-tex\"")), " xmlns=\"http://www.w3.org/1998/Math/MathML\"" + (t ? " display=\"block\"" : ""));
}, $s = [
	{
		name: "AC 娘经典",
		folder: "/emoji/ac",
		prefix: "ac-",
		type: "png",
		icon: "01",
		items: /* @__PURE__ */ "01.02.03.04.05.06.07.08.09.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40.41.42.43.44.45.46.47.48.49.50.51.52.53.54".split(".")
	},
	{
		name: "AC 娘新版",
		folder: "/emoji/acnew",
		prefix: "acnew-",
		type: "png",
		icon: "01",
		items: /* @__PURE__ */ "01.02.03.04.05.06.07.08.09.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40.41.42.43.44.45.46.47.48.49.50.51.52.53.54.55".split(".")
	},
	{
		name: "匿名版",
		folder: "/emoji/anon",
		prefix: "anon-",
		type: "png",
		icon: "01",
		items: /* @__PURE__ */ "01.02.03.04.05.06.07.08.09.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40".split(".")
	},
	{
		name: "基础表情",
		prefix: "weibo_",
		type: "png",
		icon: "doge",
		items: /* @__PURE__ */ "smile.lovely.blush.grin.laugh.joy.angry.bye.hammer.kiss.love.mask.money.quiet.rage.sad.shy.sick.slient.smirk.slap.antic.desire.longing.no_idea.look_down.clap.yum.sleep.dizzy_face.chuckle.disappointed.flushed.heart_eyes.no.shuai.suprised.think.vomit.scream.sleepy.sob.sunglasses.greddy.pick_nose.annoyed.awkward.confused.grievance.poor.wink.rolling_eyes.watermalon.annoyed_left.annoyed_right.yawn.hufen.doge.husky.dog_annoyed.dog_bye.dog_consider.dog_cry.dog_joy.dog_laugh.dog_sweat.dog_think.dog_yum.cat.cat_annoyed.cat_bye.cat_cry.cat_think.girl_annoyed.boy.girl.panda.pig.rabbit.ultraman.wool_group.yan.xi.soap.meng.jiong.geili.shenma.alpaca".split("."),
		folder: "https://unpkg.com/@waline/emojis@1.1.0/weibo"
	}
], ec = /* @__PURE__ */ new Set([
	"nick",
	"mail",
	"link"
]), tc = (e) => e.filter((e) => ec.has(e)), nc = $s, rc = [
	"//unpkg.com/@waline/emojis/tieba/tieba_agree.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_look_down.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_awkward.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"
], ic = (e) => new Promise((t, n) => {
	if (e.size > 128e3) {
		n(/* @__PURE__ */ Error("File too large! File size limit 128KB"));
		return;
	}
	let r = new FileReader();
	r.readAsDataURL(e), r.addEventListener("load", () => {
		t(r.result);
	}), r.addEventListener("error", n);
}), ac = (e, t) => Qs(t, e), oc = (e) => {
	let t = (t, n = {}) => fetch(`https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({
		lang: e,
		limit: "20",
		rating: "g",
		api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",
		...n
	}).toString()}`).then((e) => e.json()).then(({ data: e }) => e.map((e) => ({
		title: e.title,
		src: e.images.downsized_medium.url
	})));
	return {
		search: (e) => t("search", {
			q: e,
			offset: "0"
		}),
		default: () => t("trending", {}),
		more: (e, n = 0) => t("search", {
			q: e,
			offset: n.toString()
		})
	};
}, sc = /* @__PURE__ */ RegExp("([\\u4E00-\\u9FFF\\u3400-\\u4DBF\\uF900-\\uFAFF\\u3040-\\u309F\\uAC00-\\uD7AF\\u0400-\\u04FF]+|\\w+|<)|((?:(?:^|\\s)\\/\\/(.+?)$)|(?:\\/\\*([\\S\\s]*?)\\*\\/))", "gmiu"), cc = [
	"23AC69",
	"91C132",
	"F19726",
	"E8552D",
	"1AAB8E",
	"E1147F",
	"2980C1",
	"1BA1E6",
	"9FA0A0",
	"F19726",
	"E30B20",
	"E30B20",
	"A3338B"
], lc = {}, uc = (e) => {
	let t = 0;
	return e.replaceAll(sc, (e, n, r) => {
		if (r) return `<span style="color: slategray">${r}</span>`;
		if (n === "<") return "&lt;";
		let i;
		lc[n] ? i = lc[n] : (i = cc[t], lc[n] = i);
		let a = `<span style="color: #${i}">${n}</span>`;
		return t = ++t % cc.length, a;
	});
}, dc = /* @__PURE__ */ "nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies".split("."), fc = (e) => Object.fromEntries(e.map((e, t) => [dc[t], e])), pc = fc(/* @__PURE__ */ "Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare".split(",")), mc = fc(/* @__PURE__ */ "NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!\n Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments".split(",")), hc = fc(/* @__PURE__ */ "Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!\n El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios".split(",")), gc = fc(/* @__PURE__ */ "Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !\n Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires".split(",")), _c = fc(/* @__PURE__ */ "Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!\n Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda".split(",")), vc = fc(/* @__PURE__ */ "Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!\n Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti".split(",")), yc = fc(/* @__PURE__ */ "ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する".split(",")), bc = fc(/* @__PURE__ */ "닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!\n현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독".split(",")), xc = fc(/* @__PURE__ */ "Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários".split("(")), Sc = fc(/* @__PURE__ */ "Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев".split("(")), Cc = fc(/* @__PURE__ */ "Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!\n Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn".split(",")), wc = fc(/* @__PURE__ */ "昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！\n当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复".split(",")), Tc = fc(/* @__PURE__ */ "暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！\n目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆".split(",")), Ec = "en-US", Dc = {
	zh: wc,
	"zh-cn": wc,
	"zh-tw": Tc,
	en: mc,
	"en-us": mc,
	fr: gc,
	"fr-fr": gc,
	id: _c,
	"id-id": _c,
	it: vc,
	"it-it": vc,
	jp: yc,
	"jp-jp": yc,
	ko: bc,
	"ko-kr": bc,
	"pt-br": xc,
	ru: Sc,
	"ru-ru": Sc,
	vi: Cc,
	"vi-vn": Cc,
	de: pc,
	es: hc,
	"es-mx": hc
}, Oc = (e) => e.trim().toLowerCase().replaceAll("_", "-"), kc = {
	ja: "jp",
	"ja-jp": "jp",
	pt: "pt-br",
	"pt-pt": "pt-br",
	"zh-hans": "zh-cn",
	"zh-hant": "zh-tw",
	"zh-hk": "zh-tw"
}, Ac = (e) => {
	let t = Oc(e);
	if (t in Dc) return t;
	let n = kc[t];
	if (n) return n;
	let [r] = t.split("-");
	return r in Dc ? r : kc[r] ?? "en-us";
}, jc = (e) => Dc[Ac(e)] ?? Dc["en-us"], Mc = (e) => {
	let t = Oc(e);
	if (t in Dc) return e.trim();
	let n = Ac(t);
	return n === "en-us" ? Ec : n;
}, Nc = {
	latest: "insertedAt_desc",
	oldest: "insertedAt_asc",
	hottest: "like_desc"
}, Pc = Object.keys(Nc), Fc = Symbol("waline-config"), Ic = (e) => {
	try {
		return decodeURI(e);
	} catch {
		return e;
	}
}, Lc = (e = "") => e.replace(/\/$/u, ""), Rc = (e) => /^(?:https?:)?\/\//u.test(e), zc = (e) => {
	let t = Lc(e);
	return Rc(t) ? t : `https://${t}`;
}, Bc = (e) => Array.isArray(e) ? e : typeof e == "number" && e > 0 && [0, e], Vc = (e, t) => e == null || e === !0 ? t : e === !1 ? null : e, Hc = ({ serverURL: e, path: t = location.pathname, lang: n = typeof navigator > "u" ? "en-US" : navigator.language, locale: r, meta: i = [
	"nick",
	"mail",
	"link"
], requiredMeta: a = [], dark: o = !1, pageSize: s = 10, wordLimit: c, noCopyright: l = !1, noRss: u = !1, login: d = "enable", recaptchaV3Key: f = "", turnstileKey: p = "", commentSorting: m = "latest", emoji: h = nc, imageUploader: g, highlighter: _, texRenderer: v, search: y, reaction: b, ...x }) => ({
	serverURL: zc(e),
	path: Ic(t),
	lang: Mc(n),
	locale: {
		...jc(Mc(n)),
		...typeof r == "object" ? r : {}
	},
	wordLimit: Bc(c),
	meta: tc(i),
	requiredMeta: tc(a),
	dark: o,
	pageSize: s,
	commentSorting: m,
	login: d,
	noCopyright: l,
	noRss: u,
	recaptchaV3Key: f,
	turnstileKey: p,
	...x,
	reaction: b === !0 ? rc : b || null,
	imageUploader: Vc(g, ic),
	highlighter: Vc(_, uc),
	texRenderer: Vc(v, ac),
	emoji: Vc(h, nc),
	search: Vc(y, oc(n))
}), Uc = (e) => typeof e == "string", Wc = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}", Gc = (e) => Uc(e) ? e === "auto" ? `@media(prefers-color-scheme:dark){body${Wc}}` : `${e}${Wc}` : e === !0 ? `:root${Wc}` : "", Kc = (e, t) => {
	let n = e.toString();
	for (; n.length < t;) n = `0${n}`;
	return n;
}, qc = (e) => {
	let t = Kc(e.getDate(), 2), n = Kc(e.getMonth() + 1, 2);
	return `${Kc(e.getFullYear(), 2)}-${n}-${t}`;
}, Jc = (e, t, n) => {
	if (!e) return "";
	let r = Uc(e) ? new Date(e.includes(" ") ? e.replaceAll("-", "/") : e) : e, i = t.getTime() - r.getTime(), a = Math.floor(i / 864e5);
	if (a === 0) {
		let e = i % 864e5, t = Math.floor(e / 36e5);
		if (t === 0) {
			let t = e % 36e5, r = Math.floor(t / 6e4);
			if (r === 0) {
				let e = t % 6e4;
				return `${Math.round(e / 1e3)} ${n.seconds}`;
			}
			return `${r} ${n.minutes}`;
		}
		return `${t} ${n.hours}`;
	}
	return a < 0 ? n.now : a < 8 ? `${a} ${n.days}` : qc(r);
}, Yc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u, Xc = (e) => Yc.test(e);
// node_modules/.pnpm/@vueuse+shared@15.0.0_vue@3.5.44_typescript@6.0.2_/node_modules/@vueuse/shared/dist/index.js
function Zc(e, t) {
	return Oe() ? (ke(e, t), !0) : !1;
}
var Qc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var $c = Object.prototype.toString, el = (e) => $c.call(e) === "[object Object]", tl = () => {};
function nl(...e) {
	if (e.length !== 1) return /* @__PURE__ */ un(...e);
	let t = e[0];
	return typeof t == "function" ? /* @__PURE__ */ Ut(sn(() => ({
		get: t,
		set: tl
	}))) : /* @__PURE__ */ I(t);
}
function rl(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
var il = (e) => e();
function al(e, t = {}) {
	let n, r, i = tl, a = tl, o = /* @__PURE__ */ $t(!1), s = (e) => {
		clearTimeout(e), i(), i = tl;
	}, c;
	return Object.assign((l) => {
		let u = nn(e), d = nn(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = tl;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = tl, a = tl, e(c());
			}
		},
		isPending: /* @__PURE__ */ Wt(o)
	});
}
function ol(e = il, t = {}) {
	let { initialState: n = "active" } = t, r = nl(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: /* @__PURE__ */ Wt(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function sl(e) {
	return Array.isArray(e) ? e : [e];
}
function cl(e) {
	return e || Xi();
}
function ll(e, t = 200, n = {}) {
	return rl(al(t, n), e);
}
function ul(e, t, n = {}) {
	let { eventFilter: r = il, ...i } = n;
	return Qn(e, rl(r, t), i);
}
function dl(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = ol(r, { initialState: i });
	return {
		stop: ul(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function fl(e, t = !0, n) {
	cl(n) ? vr(e, n) : t ? e() : An(e);
}
function pl(e, t) {
	cl(t) && br(e, t);
}
function ml(e, t, n) {
	return Qn(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/.pnpm/@vueuse+core@15.0.0_vue@3.5.44_typescript@6.0.2_/node_modules/@vueuse/core/dist/index.js
var hl = Qc ? window : void 0, gl = Qc ? window.document : void 0;
Qc && window.navigator, Qc && window.location;
function _l(e) {
	let t = nn(e);
	return t?.$el ?? t;
}
function vl(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = K(() => {
		let t = sl(nn(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return ml(() => [
		n.value?.map((e) => _l(e)) ?? [hl].filter((e) => e != null),
		sl(nn(n.value ? e[1] : e[0])),
		sl(L(n.value ? e[2] : e[1])),
		nn(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = el(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function yl(e, t = {}) {
	let { immediate: n = !0, fpsLimit: r = null, window: i = hl, once: a = !1 } = t, o = /* @__PURE__ */ $t(!1), s = K(() => {
		let e = nn(r);
		return e ? 1e3 / e : null;
	}), c = 0, l = null;
	function u(t) {
		if (!o.value || !i) return;
		c ||= t;
		let n = t - c;
		s.value && n < s.value ? l = i.requestAnimationFrame(u) : (c = t, e({
			delta: n,
			timestamp: t
		}), a ? (o.value = !1, l = null) : l = i.requestAnimationFrame(u));
	}
	function d() {
		!o.value && i && (o.value = !0, c = 0, l = i.requestAnimationFrame(u));
	}
	function f() {
		o.value = !1, l != null && i && (i.cancelAnimationFrame(l), l = null);
	}
	return n && d(), Zc(f), {
		isActive: /* @__PURE__ */ Wt(o),
		pause: f,
		resume: d
	};
}
var bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xl = "__vueuse_ssr_handlers__", Sl = /* #__PURE__ */ Cl();
function Cl() {
	return xl in bl || (bl[xl] = bl[xl] || {}), bl[xl];
}
function wl(e, t) {
	return Sl[e] || t;
}
function Tl(e) {
	return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var El = {
	boolean: {
		read: (e) => e === "true",
		write: (e) => String(e)
	},
	object: {
		read: (e) => JSON.parse(e),
		write: (e) => JSON.stringify(e)
	},
	number: {
		read: (e) => Number.parseFloat(e),
		write: (e) => String(e)
	},
	any: {
		read: (e) => e,
		write: (e) => String(e)
	},
	string: {
		read: (e) => e,
		write: (e) => String(e)
	},
	map: {
		read: (e) => new Map(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e.entries()))
	},
	set: {
		read: (e) => new Set(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e))
	},
	date: {
		read: (e) => new Date(e),
		write: (e) => e.toISOString()
	}
}, Dl = "vueuse-storage";
function Ol(e, t, n, r = {}) {
	let { flush: i = "pre", deep: a = !0, listenToStorageChanges: o = !0, writeDefaults: s = !0, mergeDefaults: c = !1, shallow: l, window: u = hl, eventFilter: d, onError: f = (e) => {
		console.error(e);
	}, initOnMounted: p } = r, m = (l ? $t : I)(typeof t == "function" ? t() : t), h = K(() => nn(e));
	if (!n) try {
		n = wl("getDefaultStorage", () => hl?.localStorage)();
	} catch (e) {
		f(e);
	}
	if (!n) return m;
	let g = nn(t), _ = Tl(g), v = r.serializer ?? El[_], { pause: y, resume: b } = dl(m, (e) => C(e), {
		flush: i,
		deep: a,
		eventFilter: d
	});
	Qn(h, () => te(), { flush: i });
	let x = !1;
	u && o && (n instanceof Storage ? vl(u, "storage", (e) => {
		(!p || x) && te(e);
	}, { passive: !0 }) : vl(u, Dl, (e) => {
		(!p || x) && ne(e);
	})), p ? fl(() => {
		x = !0, te();
	}) : te();
	function S(e, t) {
		if (u) {
			let r = {
				key: h.value,
				oldValue: e,
				newValue: t,
				storageArea: n
			};
			u.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", r) : new CustomEvent(Dl, { detail: r }));
		}
	}
	function C(e) {
		try {
			let t = n.getItem(h.value);
			if (e == null) S(t, null), n.removeItem(h.value);
			else {
				let r = v.write(e);
				t !== r && (n.setItem(h.value, r), S(t, r));
			}
		} catch (e) {
			f(e);
		}
	}
	function ee(e) {
		let t = e ? e.newValue : n.getItem(h.value);
		if (t == null) return s && g != null && n.setItem(h.value, v.write(g)), g;
		if (!e && c) {
			let e = v.read(t);
			return typeof c == "function" ? c(e, g) : _ === "object" && !Array.isArray(e) ? {
				...g,
				...e
			} : e;
		}
		return typeof t == "string" ? v.read(t) : t;
	}
	function te(e) {
		if (!(e && e.storageArea !== n)) {
			if (e && e.key == null) m.value = g;
			else if (!(e && e.key !== h.value)) {
				y();
				try {
					let t = v.write(m.value);
					(e === void 0 || e?.newValue !== t) && (m.value = ee(e));
				} catch (e) {
					f(e);
				} finally {
					e ? An(b) : b();
				}
			}
		}
	}
	function ne(e) {
		te(e.detail);
	}
	return m;
}
/* @__NO_SIDE_EFFECTS__ */
function kl(e = {}) {
	let { controls: t = !1, scheduler: n = yl } = e, r = /* @__PURE__ */ $t(/* @__PURE__ */ new Date()), i = n(() => r.value = /* @__PURE__ */ new Date());
	return t ? {
		now: r,
		...i
	} : r;
}
function Al(e, t = tl, n = {}) {
	let { immediate: r = !0, manual: i = !1, type: a = "text/javascript", async: o = !0, crossOrigin: s, referrerPolicy: c, noModule: l, defer: u, document: d = gl, attrs: f = {}, nonce: p = void 0 } = n, m = /* @__PURE__ */ $t(null), h = null, g = (n) => new Promise((r, i) => {
		let h = (e) => (m.value = e, r(e), e);
		if (!d) {
			r(!1);
			return;
		}
		let g = !1, _ = d.querySelector(`script[src="${nn(e)}"]`);
		_ ? _.hasAttribute("data-loaded") && h(_) : (_ = d.createElement("script"), _.type = a, _.async = o, _.src = nn(e), u && (_.defer = u), s && (_.crossOrigin = s), l && (_.noModule = l), c && (_.referrerPolicy = c), p && (_.nonce = p), Object.entries(f).forEach(([e, t]) => _?.setAttribute(e, t)), g = !0);
		let v = { passive: !0 };
		vl(_, "error", (e) => i(e), v), vl(_, "abort", (e) => i(e), v), vl(_, "load", () => {
			_.setAttribute("data-loaded", "true"), t(_), h(_);
		}, v), g && (_ = d.head.appendChild(_)), n || h(_);
	}), _ = (e = !0) => (h ||= g(e), h), v = () => {
		if (!d) return;
		h = null, m.value &&= null;
		let t = d.querySelector(`script[src="${nn(e)}"]`);
		t && d.head.removeChild(t);
	};
	return r && !i && fl(_), i || pl(v), {
		scriptTag: m,
		load: _,
		unload: v
	};
}
var jl = 0, Ml = /* @__PURE__ */ new WeakMap();
function Nl(e, t = {}) {
	let n = /* @__PURE__ */ $t(!1), { document: r = gl, immediate: i = !0, manual: a = !1, id: o = `vueuse_styletag_${++jl}` } = t, s = /* @__PURE__ */ $t(e), c = () => {}, l = () => {
		if (!r) return;
		let e = r.getElementById(o) || r.createElement("style");
		e.isConnected || (e.id = o, t.nonce && (e.nonce = t.nonce), t.media && (e.media = t.media), r.head.appendChild(e)), n.value ||= (Ml.set(e, (Ml.get(e) ?? 0) + 1), c = Qn(s, (t) => {
			e.textContent = t;
		}, { immediate: !0 }), !0);
	}, u = () => {
		if (!r || !n.value) return;
		c();
		let e = r.getElementById(o);
		if (e) {
			let t = (Ml.get(e) ?? 1) - 1;
			t <= 0 ? (Ml.delete(e), r.head.removeChild(e)) : Ml.set(e, t);
		}
		n.value = !1;
	};
	return i && !a && fl(l), a || Zc(u), {
		id: o,
		css: s,
		unload: u,
		load: l,
		isLoaded: /* @__PURE__ */ Wt(n)
	};
}
// src/utils/emoji.ts
var Pl = Ol("WALINE_EMOJI", {}), Fl = (e) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e), Il = (e) => {
	let t = Fl(e);
	if (t) {
		let t = Pl.value[e];
		if (t) return Promise.resolve(t);
	}
	return fetch(`${e}/info.json`).then((e) => e.json()).then((n) => {
		let r = {
			folder: e,
			...n
		};
		return t && (Pl.value[e] = r), r;
	});
}, Ll = (e, t = "", n = "", r = "") => `${t ? `${t}/` : ""}${n}${e}${r ? `.${r}` : ""}`, Rl = (e) => Promise.all(e ? e.map((e) => Uc(e) ? Il(Lc(e)) : Promise.resolve(e)) : []).then((e) => {
	let t = {
		tabs: [],
		map: {}
	};
	return e.forEach((e) => {
		let { name: n, folder: r, icon: i, prefix: a = "", type: o, items: s } = e;
		t.tabs.push({
			name: n,
			icon: Ll(i, r, a, o),
			items: s.map((e) => {
				let n = `${a}${e}`;
				return t.map[n] = Ll(e, r, a, o), n;
			})
		});
	}), t;
}), zl = (e) => {
	e.name !== "AbortError" && console.error(e.message);
}, Bl = (e) => e instanceof HTMLElement ? e : Uc(e) ? document.querySelector(e) : null, Vl = (e) => {
	let t = [...e].find((e) => e.type.includes("image"));
	return t ? t.getAsFile() : null;
};
// node_modules/.pnpm/marked@18.1.2/node_modules/marked/lib/marked.esm.js
function Hl() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var Ul = Hl();
function Wl(e) {
	Ul = e;
}
var Gl = { exec: () => null };
function Kl(e) {
	let t = [];
	return (n) => {
		let r = Math.max(0, Math.min(3, n - 1)), i = t[r];
		return i || (i = e(r), t[r] = i), i;
	};
}
function Z(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(Q.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var ql = ((e = "") => {
	try {
		return !!RegExp("(?<=1)(?<!1)" + e);
	} catch {
		return !1;
	}
})(), Q = {
	codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	endingSpaceTabChar: /[ \t]$/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	leadingSpaceTab: /^[ \t]+/,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	blockquoteMarkerWhitespace: /^( {0,3}>)([ \t]+)/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,
	numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: Kl((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: Kl((e) => RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
	fencesBeginRegex: Kl((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: Kl((e) => RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),
	pedanticHeadingBeginRegex: Kl((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: Kl((e) => RegExp(`^ {0,${e}}(?:</?(?:${cu})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")),
	blockquoteBeginRegex: Kl((e) => RegExp(`^ {0,${e}}>`))
}, Jl = /^(?:[ \t]*(?:\n|$))+/, Yl = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Xl = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Zl = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ql = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, $l = / {0,3}(?:[*+-]|\d{1,9}[.)])/, eu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, tu = Z(eu).replace(/bull/g, $l).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), nu = Z(eu).replace(/bull/g, $l).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ru = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, iu = /^[^\n]+/, au = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ou = Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", au).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), su = Z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, $l).getRegex(), cu = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", lu = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, uu = Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", lu).replace("tag", cu).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), du = (e) => Z(ru).replace("hr", Zl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", e).replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", cu).getRegex(), fu = du(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), pu = du(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), mu = {
	blockquote: Z(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", pu).getRegex(),
	code: Yl,
	def: ou,
	fences: Xl,
	heading: Ql,
	hr: Zl,
	html: uu,
	lheading: tu,
	list: su,
	newline: Jl,
	paragraph: fu,
	table: Gl,
	text: iu
}, hu = Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Zl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", cu).getRegex(), gu = {
	...mu,
	lheading: nu,
	table: hu,
	paragraph: Z(ru).replace("hr", Zl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", hu).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", cu).getRegex()
}, _u = {
	...mu,
	html: Z("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", lu).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: Gl,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: Z(ru).replace("hr", Zl).replace("heading", " *#{1,6} *[^\n]").replace("lheading", tu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, vu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, yu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, bu = /^( {2,}|\\)\n(?!\s*$)[ \t]*/, xu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Su = /[\p{P}\p{S}]/u, Cu = /[\s\p{P}\p{S}]/u, wu = /[^\s\p{P}\p{S}]/u, Tu = Z(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Cu).getRegex(), Eu = /[\p{Pi}\p{Ps}"']/u, Du = /(?!~)[\p{P}\p{S}]/u, Ou = /(?!~)[\s\p{P}\p{S}]/u, ku = /(?:[^\s\p{P}\p{S}]|~)/u, Au = Z(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ql ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ju = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Mu = Z(ju, "u").replace(/punct/g, Su).getRegex(), Nu = Z(ju, "u").replace(/punct/g, Du).getRegex(), Pu = Z(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, Eu).replace(/punct/g, Su).getRegex(), Fu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Iu = Z(Fu, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Cu).replace(/punct/g, Su).getRegex(), Lu = Z(Fu, "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, Ou).replace(/punct/g, Du).getRegex(), Ru = Z("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Cu).replace(/punct/g, Su).getRegex(), zu = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Cu).replace(/punct/g, Su).getRegex(), Bu = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Cu).replace(/punct/g, Su).getRegex(), Vu = Z(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Su).getRegex(), Hu = Z("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Cu).replace(/punct/g, Su).getRegex(), Uu = Z(/\\(punct)/, "gu").replace(/punct/g, Su).getRegex(), Wu = Z(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, Su).getRegex(), Gu = Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ku = Z(lu).replace("(?:-->|$)", "-->").getRegex(), qu = Z("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ku).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ju = /\[(?:\\[\s\S]|[^\[\]\\])*\]/, Yu = Z(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", Ju).getRegex(), Xu = Z(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", Yu).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Zu = Z(/^!?\[(label)\]\[(ref)\]/).replace("label", Yu).replace("ref", au).getRegex(), Qu = Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", au).getRegex(), $u = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/, ed = Z(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", Ju).getRegex(), td = Z("reflink|nolink(?!\\()", "g").replace("reflink", Z(/^!?\[(label)\]\[(ref)\]/).replace("label", ed).replace("ref", $u).getRegex()).replace("nolink", Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", $u).getRegex()).getRegex(), nd = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, rd = Z(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), id = {
	_backpedal: Gl,
	anyPunctuation: Uu,
	anyPunctuationOutsideCode: Wu,
	autolink: Gu,
	blockSkip: Au,
	br: bu,
	code: yu,
	del: Gl,
	delLDelim: Gl,
	delRDelim: Gl,
	emStrongLDelim: Mu,
	emStrongRDelimAst: Iu,
	emStrongRDelimUnd: zu,
	escape: vu,
	link: Xu,
	nolink: Qu,
	punctuation: Tu,
	reflink: Zu,
	reflinkSearch: td,
	tag: qu,
	text: xu,
	url: Gl
}, ad = {
	...id,
	emStrongLDelim: Pu,
	emStrongRDelimAst: Ru,
	emStrongRDelimUnd: Bu,
	link: Z(/^!?\[(label)\]\((.*?)\)/).replace("label", Yu).getRegex(),
	reflink: Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Yu).getRegex()
}, od = {
	...id,
	emStrongRDelimAst: Lu,
	emStrongLDelim: Nu,
	delLDelim: Vu,
	delRDelim: Hu,
	url: Z(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", rd).replace("protocol", nd).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: Z(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", nd).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex()
}, sd = {
	...od,
	br: Z(bu).replace("{2,}", "*").getRegex(),
	text: Z(od.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, cd = {
	normal: mu,
	gfm: gu,
	pedantic: _u
}, ld = {
	normal: id,
	gfm: od,
	breaks: sd,
	pedantic: ad
}, ud = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, dd = (e) => ud[e];
function fd(e, t) {
	if (t) {
		if (Q.escapeTest.test(e)) return e.replace(Q.escapeReplace, dd);
	} else if (Q.escapeTestNoEncode.test(e)) return e.replace(Q.escapeReplaceNoEncode, dd);
	return e;
}
function pd(e) {
	return Q.numericCharacterReference.test(e) ? e.replace(Q.numericCharacterReferenceOrAmpersand, (e, t, n) => {
		if (t === void 0 && n === void 0) return "&amp;";
		let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
		return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "�" : r === 38 ? "&amp;" : String.fromCodePoint(r);
	}) : e;
}
function md(e) {
	try {
		e = encodeURI(e).replace(Q.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function hd(e, t) {
	let n = e.replace(Q.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(Q.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(Q.slashPipe, "|");
	return n;
}
function gd(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function _d(e) {
	let t = e.split("\n"), n = t.length - 1;
	for (; n >= 0 && Q.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join("\n");
}
function vd(e) {
	return e.trim().toLowerCase().toUpperCase().toLowerCase();
}
function yd(e, t) {
	if (e.indexOf(t[0]) === -1 && e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function bd(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function xd(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1"), c = e[0].charAt(0) === "!", l = r.state.inLink, u = r.state.linkEmitted, d = r.state.inRawBlock;
	r.state.inLink = !0, r.state.linkEmitted = !1;
	let f = r.inlineTokens(s), p = r.state.linkEmitted;
	if (r.state.linkEmitted = u, r.state.inLink = l, !c) {
		if (p) {
			r.state.inRawBlock = d;
			return;
		}
		r.state.linkEmitted = !0;
	}
	return {
		type: c ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: f
	};
}
function Sd(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return e.slice(Math.min(r.length, i.length));
	}).join("\n");
}
function Cd(e, t, n, r) {
	if (!t.includes("<")) return !1;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === "\\") {
			i++;
			continue;
		}
		if (t[i] === "`") {
			let e = r.inline.code.exec(t.slice(i));
			if (e) {
				i += e[0].length - 1;
				continue;
			}
		}
		if (t[i] !== "<") continue;
		let a = e.slice(n + i), o = r.inline.tag.exec(a) || r.inline.autolink.exec(a);
		if (o) {
			if (o[0].length > t.length - i) return !0;
			i += o[0].length - 1;
		}
	}
	return !1;
}
var wd = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || Ul;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = this.options.pedantic ? t[0] : _d(t[0]);
			return {
				type: "code",
				raw: e,
				codeBlockStyle: "indented",
				text: e.replace(this.rules.other.codeRemoveIndent, "")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Sd(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = gd(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceTabChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: gd(t[0], "\n"),
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: gd(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = gd(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o = 0;
				for (; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteMarkerWhitespace, (e, t, n) => t + bd(n, t.length)).replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code" || u?.type === "heading" || u?.type === "hr" || u?.type === "html") break;
				if (u?.type === "blockquote") {
					let t = u, a = e.join("\n"), o = t.raw + "\n" + a.replace(this.rules.other.blockquoteSetextReplace2, ""), s = this.blockquote(o);
					i[i.length - 1] = s;
					let c = o.substring(s.raw.length).replace(/^\n/, ""), l = c ? c.split("\n").length : 0, d = l ? e.slice(0, -l) : e;
					d.length > 0 && (n = `${n}
${d.join("\n")}`), r = r.substring(0, r.length - t.text.length) + s.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o;
					let s = o.raw.length > t.raw.length ? a.slice(t.raw.length + 1, o.raw.length).split("\n").length : 0;
					if (s > 0) {
						let t = e.slice(0, s).join("\n");
						n = `${n}
${t}`, r = `${r}
${t}`;
					}
					e = e.slice(s);
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = e, r = () => n.length - e.length, i = t[1].trim(), a = i.length > 1, o = {
				type: "list",
				raw: "",
				ordered: a,
				start: a ? +i.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : "[*+-]");
			let s = this.rules.other.listItemRegex(i), c = !1;
			for (; e;) {
				let i = !1, a = "";
				if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
				let l = r();
				e = e.substring(t[0].length);
				let u = t[2].split("\n", 1)[0], d = t[1].length, f = this.options.pedantic ? bd(u, d) : u.replace(this.rules.other.leadingSpaceTab, (e) => bd(e, d)), p = e.split("\n", 1)[0], m = !f.trim(), h = 0;
				if (this.options.pedantic ? (h = 2, a = f.trimStart()) : m ? h = d + 1 : (h = f.search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, a = f.slice(h), h += d), m && this.rules.other.blankLine.test(p) && (e = e.substring(p.length + 1), i = !0), !i) {
					let t = this.rules.other.nextBulletRegex(h), n = this.rules.other.hrRegex(h), r = this.rules.other.fencesBeginRegex(h), i = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(h) : this.rules.other.headingBeginRegex(h), o = this.rules.other.htmlBeginRegex(h), s = this.rules.other.blockquoteBeginRegex(h);
					for (; e;) {
						let c = e.split("\n", 1)[0], l;
						if (p = c, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), l = p) : l = p.replace(this.rules.other.leadingSpaceTab, (e) => bd(e)), r.test(p) || i.test(p) || o.test(p) || s.test(p) || t.test(p) || n.test(p)) break;
						if (l.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) a += "\n" + l.slice(h);
						else {
							if (m || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || r.test(f) || i.test(f) || n.test(f)) break;
							let e = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(p) && this.rules.block.lheading.test(`${f}
${p}`) ? `    ${l.replace(/^ {0,3}/, "")}` : p;
							a += "\n" + e;
						}
						m = !p.trim(), e = e.substring(c.length + 1), f = l.slice(h);
					}
				}
				let g = n.slice(l, r());
				o.loose || (c ? o.loose = !0 : this.rules.other.doubleBlankLine.test(g) && (c = !0)), o.items.push({
					type: "list_item",
					raw: g,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(a),
					loose: !1,
					text: a,
					tokens: []
				});
			}
			let l = o.items.at(-1);
			if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
			else return;
			o.raw = n.slice(0, r()).trimEnd();
			for (let e of o.items) if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), !o.loose) {
				let t = e.tokens.filter((e) => e.type === "space");
				o.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			for (let e of o.items) {
				let t = e.tokens[0];
				if (e.task && (t?.type === "text" || t?.type === "paragraph")) {
					e.text = e.text.replace(this.rules.other.listReplaceTask, ""), t.raw = t.raw.replace(this.rules.other.listReplaceTask, ""), t.text = t.text.replace(this.rules.other.listReplaceTask, "");
					for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
						this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
						break;
					}
					let n = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (n) {
						let t = {
							type: "checkbox",
							raw: n[0] + " ",
							checked: n[0] !== "[ ]"
						};
						e.checked = t.checked, o.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = t.raw + e.tokens[0].raw, e.tokens[0].text = t.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(t)) : e.tokens.unshift({
							type: "paragraph",
							raw: t.raw,
							text: t.raw,
							tokens: [t]
						}) : e.tokens.unshift(t);
					}
				} else e.task &&= !1;
			}
			if (o.loose) for (let e of o.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return o;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) {
			let e = _d(t[0]);
			return {
				type: "html",
				block: !0,
				raw: e,
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: e
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			if (!this.rules.other.startAngleBracket.test(t[2]) && yd(t[2], "()") !== -1) return;
			let e = vd(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: gd(t[0], "\n"),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = hd(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: gd(t[0], "\n"),
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(hd(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: gd(t[0], "\n"),
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		if (this.lexer.state.linkParenPossible === !1) return;
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let n = t[0].charAt(0) === "!" ? 2 : 1;
			if (!this.options.pedantic && Cd(e, t[1], n, this.rules)) return;
			let r = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let e = gd(r.slice(0, -1), "\\");
				if ((r.length - e.length) % 2 == 0) return;
			} else {
				let e = yd(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let i = t[2], a = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(i);
				e && (i = e[1], a = e[3]);
			} else a = t[3] ? t[3].slice(1, -1) : "";
			return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (i = this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i.slice(1) : i.slice(1, -1)), xd(t, {
				href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
				title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let r = n[0].charAt(0) === "!" ? 2 : 1;
			if (!this.options.pedantic && Cd(e, n[1], r, this.rules)) return;
			let i = t[vd((n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "))];
			if (!i) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return xd(n, i, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!r || !r[1] && !r[2] && !r[3] && !r[4]) return;
		let i = r[0][0], a = n === i, o = t.length - e.length, s = o;
		for (; !this.options.pedantic && s > 0 && t[s - 1] === i;) s--;
		let c = [...t.slice(Math.max(0, s - 2), s)].at(-1) ?? "", l = c === "*" || c === "_" || !!this.rules.inline.punctuation.exec(c);
		s < o && (n = c);
		let u = s < o ? l : !!this.rules.inline.punctuation.exec(n);
		if (r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
		let d = r[1] || r[3] || "";
		if (!d || !n || u) {
			let n = [...r[0]].length - 1, u, f, p = n, m = 0, h = o - s + n, g = !this.options.pedantic && !!c.trim() && (!!d || i === "*" && !l), _ = i === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (_.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = _.exec(t)) !== null;) {
				if (u = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !u) continue;
				if (f = [...u].length, r[3] || r[4]) {
					p += f;
					continue;
				}
				if (r[5] || r[6] || g) {
					if (a && (r[5] || r[6])) break;
					if (h % 3 && !((h + f) % 3)) {
						m += f;
						continue;
					}
				}
				if (p -= f, p > 0) continue;
				f = Math.min(f, f + p + m);
				let t = [...r[0]][0].length, i = e.slice(0, n + r.index + t + f);
				if (Math.min(n, f) % 2) {
					let e = i.slice(1, -1);
					return {
						type: "em",
						raw: i,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let o = i.slice(2, -2);
				return {
					type: "strong",
					raw: i,
					text: o,
					tokens: this.lexer.inlineTokens(o)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				autolink: !0,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				autolink: !0,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: e ? t[0] : pd(t[0]),
				escaped: e
			};
		}
	}
}, Td = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Ul, this.options.tokenizer = this.options.tokenizer || new wd(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			linkEmitted: !1,
			linkParenPossible: !0,
			top: !0
		};
		let t = {
			other: Q,
			block: cd.normal,
			inline: ld.normal
		};
		this.options.pedantic ? (t.block = cd.pedantic, t.inline = ld.pedantic) : this.options.gfm && (t.block = cd.gfm, t.inline = this.options.breaks ? ld.breaks : ld.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: cd,
			inline: ld
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(Q.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.state.inRawBlock = !1, this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Q.tabCharGlobal, "    ").replace(Q.spaceLine, ""));
		let r = 1 / 0;
		for (; e;) {
			if (e.length < r) r = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let i;
			if (this.options.extensions?.block?.some((n) => (i = n.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
			if (i = this.tokenizer.space(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				i.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(i);
				continue;
			}
			if (i = this.tokenizer.code(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if ((i = this.tokenizer.fences(e)) || (i = this.tokenizer.heading(e)) || (i = this.tokenizer.hr(e)) || (i = this.tokenizer.blockquote(e)) || (i = this.tokenizer.list(e)) || (i = this.tokenizer.html(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.def(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.raw, this.inlineQueue.at(-1).src = n.text) : (this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
					href: i.href,
					title: i.title
				}), t.push(i));
				continue;
			}
			if ((i = this.tokenizer.table(e)) || (i = this.tokenizer.lheading(e))) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startBlock) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
			}
			if (this.state.top && (i = this.tokenizer.paragraph(a))) {
				let r = t.at(-1);
				n && r?.type === "paragraph" ? (r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
			} else if (i = this.tokenizer.text(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	linkInText(e) {
		if (!e.includes("[")) return !1;
		let t = this.tokenizer.rules.inline.link;
		for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return !0;
		for (let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
			let e = t[0], n = e.lastIndexOf("[");
			if (e.charAt(0) !== "!" && Object.hasOwn(this.tokens.links, vd(e.slice(n + 1, -1))) && !(n > 1 && this.linkInText(e.slice(1, n - 1)))) return !0;
		}
		return !1;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = this.state.linkParenPossible;
		this.state.linkParenPossible = n && e.includes(")");
		try {
			return this.#e(e, t);
		} finally {
			this.state.linkParenPossible = n;
		}
	}
	#e(e, t) {
		let n = e.includes("*") || e.includes("_") || e.includes("~") || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== wd.prototype.emStrong || this.tokenizer.del !== wd.prototype.del ? this.#t(e) : e, r = !1, i = "", a = 1 / 0;
		for (; e;) {
			if (e.length < a) a = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			r || (i = ""), r = !1;
			let o;
			if (this.options.extensions?.inline?.some((n) => (o = n.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
			if ((o = this.tokenizer.escape(e)) || (o = this.tokenizer.tag(e)) || (o = this.tokenizer.link(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(o.raw.length);
				let n = t.at(-1);
				o.type === "text" && n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
				continue;
			}
			if ((o = this.tokenizer.emStrong(e, n, i)) || (o = this.tokenizer.codespan(e)) || (o = this.tokenizer.br(e)) || (o = this.tokenizer.del(e, n, i)) || (o = this.tokenizer.autolink(e)) || !this.state.inLink && (o = this.tokenizer.url(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			let s = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1));
			}
			if (o = this.tokenizer.inlineText(s)) {
				e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), r = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += o.raw, n.text += o.text) : t.push(o);
			} else if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return t;
	}
	#t(e) {
		let t = e;
		if (this.tokens.links && e.includes("[")) {
			let e = this.tokenizer.rules.inline.reflinkSearch, n = (t) => {
				let r = t.lastIndexOf("[");
				if (!Object.hasOwn(this.tokens.links, vd(t.slice(r + 1, -1)))) return t;
				if (r > 1 && t.charAt(0) !== "!") {
					let i = t.slice(1, r - 1);
					if (this.linkInText(i)) return "[" + i.replace(e, n) + "][" + "a".repeat(t.length - r - 2) + "]";
				}
				return "[" + "a".repeat(t.length - 2) + "]";
			};
			t = t.replace(e, n);
		}
		return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (e, t, n) => n ? "+".repeat(e.length) : t ? t + e.slice(t.length, -t.length).replace(/`/g, "+") + t : e), t = t.replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
			let r = n ? n.length : 0;
			return e.slice(0, r) + "[" + "a".repeat(e.length - r - 2) + "]";
		}), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
	}
	infiniteLoopError(e) {
		let t = "Infinite loop on byte: " + e;
		if (this.options.silent) console.error(t);
		else throw Error(t);
	}
}, Ed = class {
	options;
	parser;
	constructor(e) {
		this.options = e || Ul;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(Q.notSpaceStart)?.[0], i = e ? e.replace(Q.endingNewline, "") + "\n" : "";
		return r ? "<pre><code class=\"language-" + fd(r) + "\">" + (n ? i : fd(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : fd(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${fd(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, text: n, tokens: r, autolink: i }) {
		let a = i ? fd(n, !0) : this.parser.parseInline(r), o = md(e);
		if (o === null) return a;
		e = fd(o, i);
		let s = "<a href=\"" + e + "\"";
		return t && (s += " title=\"" + fd(t) + "\""), s += ">" + a + "</a>", s;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = md(e);
		if (i === null) return fd(n);
		e = i;
		let a = `<img src="${fd(e)}" alt="${fd(n)}"`;
		return t && (a += ` title="${fd(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : fd(e.text);
	}
}, Dd = class {
	parser;
	strong({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	em({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	image({ text: e, tokens: t }) {
		return t ? this.parser.parseInline(t, this) : e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
}, Od = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || Ul, this.options.renderer = this.options.renderer || new Ed(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Dd(), this.textRenderer.parser = this;
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"checkbox",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"checkbox",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, kd = class {
	options;
	block;
	constructor(e) {
		this.options = e || Ul;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer(e = this.block) {
		return e ? Td.lex : Td.lexInline;
	}
	provideParser(e = this.block) {
		return e ? Od.parse : Od.parseInline;
	}
};
function Ad(e, t) {
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e.push(t[n]);
	else e.push(t);
}
var jd = new class {
	defaults = Hl();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Od;
	Renderer = Ed;
	TextRenderer = Dd;
	Lexer = Td;
	Tokenizer = wd;
	Hooks = kd;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (Ad(n, t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) Ad(n, this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) Ad(n, this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				Ad(n, this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(1 / 0);
					Ad(n, this.walkTokens(i, t));
				}) : e.tokens && Ad(n, this.walkTokens(e.tokens, t));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new Ed(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new wd(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new kd();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = kd.passThroughHooks.has(n) ? (e) => {
						if (t.options.async && kd.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (t.options.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && Ad(n, t.call(this, e)), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return Td.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Od.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? Td.lex : Td.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? Od.parse : Od.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? Td.lex : Td.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? Od.parse : Od.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + fd(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function $(e, t) {
	return jd.parse(e, t);
}
$.options = $.setOptions = function(e) {
	return jd.setOptions(e), $.defaults = jd.defaults, Wl($.defaults), $;
}, $.getDefaults = Hl, $.defaults = Ul;
function Md(...e) {
	return jd.use(...e), $.defaults = jd.defaults, Wl($.defaults), $;
}
$.use = Md, $.walkTokens = function(e, t) {
	return jd.walkTokens(e, t);
}, $.parseInline = jd.parseInline, $.Parser = Od, $.parser = Od.parse, $.Renderer = Ed, $.TextRenderer = Dd, $.Lexer = Td, $.lexer = Td.lex, $.Tokenizer = wd, $.Hooks = kd, $.parse = $, $.options, $.setOptions, $.walkTokens, $.parseInline, Od.parse, Td.lex;
// src/utils/query.ts
var Nd = (e) => {
	let { path: t } = e.dataset;
	return t?.length ? t : null;
}, Pd = (e) => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu), Fd = (e) => e.match(/[\u4E00-\u9FD5]/gu), Id = (e) => (Pd(e)?.reduce((e, t) => e + ([
	"",
	",",
	"."
].includes(t.trim()) ? 0 : t.trim().split(/\s+/u).length), 0) ?? 0) + (Fd(e)?.length ?? 0), Ld = async () => {
	let { userAgentData: e } = navigator, t = navigator.userAgent;
	if (!e) return t;
	let { platformVersion: n } = await e.getHighEntropyValues(["platformVersion"]);
	if (!n) return t;
	if (e?.platform === "Windows" && Math.trunc(Number(n.split(".")[0])) >= 13 && (t = t.replace("Windows NT 10.0", "Windows NT 11.0")), e?.platform === "macOS") {
		let e = n.split("."), r = Math.trunc(Number(e?.[0])), i = Math.trunc(Number(e?.[1]));
		(r > 10 || r === 10 && i >= 15) && (t = t.replace("Mac OS X 10_15_7", `Mac OS X ${n.replaceAll(".", "_")}`));
	}
	return t;
}, Rd = ({ serverURL: e, path: t = window.location.pathname, selector: n = ".waline-comment-count", lang: r = navigator.language }) => {
	let i = new AbortController(), a = document.querySelectorAll(n);
	return a.length > 0 && Po({
		serverURL: zc(e),
		paths: Array.from(a, (e) => Ic(Nd(e) ?? t)),
		lang: r,
		signal: i.signal
	}).then((e) => {
		a.forEach((t, n) => {
			t.textContent = e[n].toString();
		});
	}).catch(zl), i.abort.bind(i);
}, zd = () => Ol("WALINE_USER_META", {
	nick: "",
	mail: "",
	link: ""
}), Bd = () => Ol("WALINE_COMMENT_BOX_EDITOR", ""), Vd = Ol("WALINE_LIKE", []), Hd = () => Vd, Ud = Ol("WALINE_REACTION", {}), Wd = () => Ud, Gd = /* @__PURE__ */ e(((e, t, n) => {
	var r = n && n.__awaiter || function(e, t, n, r) {
		function i(e) {
			return e instanceof n ? e : new n(function(t) {
				t(e);
			});
		}
		return new (n ||= Promise)(function(n, a) {
			function o(e) {
				try {
					c(r.next(e));
				} catch (e) {
					a(e);
				}
			}
			function s(e) {
				try {
					c(r.throw(e));
				} catch (e) {
					a(e);
				}
			}
			function c(e) {
				e.done ? n(e.value) : i(e.value).then(o, s);
			}
			c((r = r.apply(e, t || [])).next());
		});
	}, i = n && n.__generator || function(e, t) {
		var n = {
			label: 0,
			sent: function() {
				if (a[0] & 1) throw a[1];
				return a[1];
			},
			trys: [],
			ops: []
		}, r, i, a, o = {
			next: s(0),
			throw: s(1),
			return: s(2)
		};
		return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
			return this;
		}), o;
		function s(e) {
			return function(t) {
				return c([e, t]);
			};
		}
		function c(s) {
			if (r) throw TypeError("Generator is already executing.");
			for (; o && (o = 0, s[0] && (n = 0)), n;) try {
				if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
				switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
					case 0:
					case 1:
						a = s;
						break;
					case 4: return n.label++, {
						value: s[1],
						done: !1
					};
					case 5:
						n.label++, i = s[1], s = [0];
						continue;
					case 7:
						s = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
							n = 0;
							continue;
						}
						if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
							n.label = s[1];
							break;
						}
						if (s[0] === 6 && n.label < a[1]) {
							n.label = a[1], a = s;
							break;
						}
						if (a && n.label < a[2]) {
							n.label = a[2], n.ops.push(s);
							break;
						}
						a[2] && n.ops.pop(), n.trys.pop();
						continue;
				}
				s = t.call(e, n);
			} catch (e) {
				s = [6, e], i = 0;
			} finally {
				r = a = 0;
			}
			if (s[0] & 5) throw s[1];
			return {
				value: s[0] ? s[1] : void 0,
				done: !0
			};
		}
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReCaptchaInstance = void 0, e.ReCaptchaInstance = function() {
		function e(e, t, n) {
			this.siteKey = e, this.recaptchaID = t, this.recaptcha = n, this.styleContainer = null;
		}
		return e.prototype.execute = function(e) {
			return r(this, void 0, void 0, function() {
				var t;
				return i(this, function(n) {
					switch (n.label) {
						case 0: return this.recaptcha.enterprise ? [4, this.recaptcha.enterprise.execute(this.recaptchaID, { action: e })] : [3, 2];
						case 1: return t = n.sent(), [3, 4];
						case 2: return [4, this.recaptcha.execute(this.recaptchaID, { action: e })];
						case 3: t = n.sent(), n.label = 4;
						case 4: return [2, t];
					}
				});
			});
		}, e.prototype.getSiteKey = function() {
			return this.siteKey;
		}, e.prototype.hideBadge = function() {
			this.styleContainer === null && (this.styleContainer = document.createElement("style"), this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}", document.head.appendChild(this.styleContainer));
		}, e.prototype.showBadge = function() {
			this.styleContainer !== null && (document.head.removeChild(this.styleContainer), this.styleContainer = null);
		}, e;
	}();
})), Kd = /* @__PURE__ */ e(((e, t, n) => {
	var r = n && n.__assign || function() {
		return r = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, r.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstance = e.load = void 0;
	var i = Gd(), a;
	(function(e) {
		e[e.NOT_LOADED = 0] = "NOT_LOADED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED";
	})(a ||= {});
	var o = function() {
		function e() {}
		return e.load = function(t, n) {
			if (n === void 0 && (n = {}), typeof document > "u") return Promise.reject(/* @__PURE__ */ Error("This is a library for the browser!"));
			if (e.getLoadingState() === a.LOADED) return e.instance.getSiteKey() === t ? Promise.resolve(e.instance) : Promise.reject(/* @__PURE__ */ Error("reCAPTCHA already loaded with different site key!"));
			if (e.getLoadingState() === a.LOADING) return t === e.instanceSiteKey ? new Promise(function(t, n) {
				e.successfulLoadingConsumers.push(function(e) {
					return t(e);
				}), e.errorLoadingRunnable.push(function(e) {
					return n(e);
				});
			}) : Promise.reject(/* @__PURE__ */ Error("reCAPTCHA already loaded with different site key!"));
			e.instanceSiteKey = t, e.setLoadingState(a.LOADING);
			var r = new e();
			return new Promise(function(o, s) {
				r.loadScript(t, n.useRecaptchaNet || !1, n.useEnterprise || !1, n.renderParameters ? n.renderParameters : {}, n.customUrl).then(function() {
					e.setLoadingState(a.LOADED);
					var s = r.doExplicitRender(grecaptcha, t, n.explicitRenderParameters ? n.explicitRenderParameters : {}, n.useEnterprise || !1), c = new i.ReCaptchaInstance(t, s, grecaptcha);
					e.successfulLoadingConsumers.forEach(function(e) {
						return e(c);
					}), e.successfulLoadingConsumers = [], n.autoHideBadge && c.hideBadge(), e.instance = c, o(c);
				}).catch(function(t) {
					e.errorLoadingRunnable.forEach(function(e) {
						return e(t);
					}), e.errorLoadingRunnable = [], s(t);
				});
			});
		}, e.getInstance = function() {
			return e.instance;
		}, e.setLoadingState = function(t) {
			e.loadingState = t;
		}, e.getLoadingState = function() {
			return e.loadingState === null ? a.NOT_LOADED : e.loadingState;
		}, e.prototype.loadScript = function(t, n, r, i, o) {
			var s = this;
			n === void 0 && (n = !1), r === void 0 && (r = !1), i === void 0 && (i = {}), o === void 0 && (o = "");
			var c = document.createElement("script");
			c.setAttribute("recaptcha-v3-script", ""), c.setAttribute("async", ""), c.setAttribute("defer", "");
			var l = "https://www.google.com/recaptcha/api.js";
			n ? l = r ? "https://recaptcha.net/recaptcha/enterprise.js" : "https://recaptcha.net/recaptcha/api.js" : r && (l = "https://www.google.com/recaptcha/enterprise.js"), o && (l = o), i.render && (i.render = void 0);
			var u = this.buildQueryString(i);
			return c.src = l + "?render=explicit" + u, new Promise(function(t, n) {
				c.addEventListener("load", s.waitForScriptToLoad(function() {
					t(c);
				}, r), !1), c.onerror = function(t) {
					e.setLoadingState(a.NOT_LOADED), n(t);
				}, document.head.appendChild(c);
			});
		}, e.prototype.buildQueryString = function(e) {
			return Object.keys(e).length < 1 ? "" : "&" + Object.keys(e).filter(function(t) {
				return !!e[t];
			}).map(function(t) {
				return t + "=" + e[t];
			}).join("&");
		}, e.prototype.waitForScriptToLoad = function(t, n) {
			var r = this;
			return function() {
				window.grecaptcha === void 0 ? setTimeout(function() {
					r.waitForScriptToLoad(t, n);
				}, e.SCRIPT_LOAD_DELAY) : n ? window.grecaptcha.enterprise.ready(function() {
					t();
				}) : window.grecaptcha.ready(function() {
					t();
				});
			};
		}, e.prototype.doExplicitRender = function(e, t, n, i) {
			var a = r({ sitekey: t }, n);
			return n.container ? i ? e.enterprise.render(n.container, a) : e.render(n.container, a) : i ? e.enterprise.render(a) : e.render(a);
		}, e.loadingState = null, e.instance = null, e.instanceSiteKey = null, e.successfulLoadingConsumers = [], e.errorLoadingRunnable = [], e.SCRIPT_LOAD_DELAY = 25, e;
	}();
	e.load = o.load, e.getInstance = o.getInstance;
})), qd = (/* @__PURE__ */ e(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReCaptchaInstance = e.getInstance = e.load = void 0;
	var t = Kd();
	Object.defineProperty(e, "load", {
		enumerable: !0,
		get: function() {
			return t.load;
		}
	}), Object.defineProperty(e, "getInstance", {
		enumerable: !0,
		get: function() {
			return t.getInstance;
		}
	});
	var n = Gd();
	Object.defineProperty(e, "ReCaptchaInstance", {
		enumerable: !0,
		get: function() {
			return n.ReCaptchaInstance;
		}
	});
})))(), Jd = {}, Yd = (e) => {
	let t = Jd[e] ??= (0, qd.load)(e, {
		useRecaptchaNet: !0,
		autoHideBadge: !0
	});
	return { execute: (e) => t.then((t) => t.execute(e)) };
}, Xd = "https://challenges.cloudflare.com/turnstile/v0/api.js", Zd = 1e4, Qd = null, $d = async () => {
	if (typeof window > "u") throw TypeError("Turnstile requires a browser environment");
	if (!window.turnstile) {
		if (!Qd) {
			let { load: e } = Al(Xd, void 0, {
				async: !1,
				immediate: !1
			});
			Qd = (async () => {
				try {
					return await e();
				} catch (e) {
					throw Qd = null, e;
				}
			})();
		}
		await Qd;
	}
}, ef = (e) => ({ execute: async (t) => {
	await $d();
	let { turnstile: n } = window;
	if (!n) throw Error("Turnstile failed to load");
	let r = document.querySelector(".wl-captcha-container");
	if (!r) throw Error("Turnstile container not found");
	return new Promise((i, a) => {
		let o = { settled: !1 }, s = (e, t) => {
			o.settled || (o.settled = !0, o.timer !== void 0 && clearTimeout(o.timer), t ? a(t) : e != null && i(e));
		};
		o.timer = setTimeout(() => {
			s(void 0, /* @__PURE__ */ Error("Turnstile render timed out"));
		}, Zd);
		try {
			n.ready(() => {
				if (!o.settled) try {
					n.render(r, {
						sitekey: e,
						action: t,
						size: "compact",
						callback: (e) => {
							s(e);
						},
						"error-callback": () => {
							s(void 0, /* @__PURE__ */ Error("Turnstile verification failed"));
						}
					});
				} catch (e) {
					s(void 0, e instanceof Error ? e : /* @__PURE__ */ Error("Turnstile render failed"));
				}
			});
		} catch (e) {
			s(void 0, e instanceof Error ? e : /* @__PURE__ */ Error("Turnstile render failed"));
		}
	});
} }), tf = Ol("WALINE_USER", {}), nf = () => tf, rf = "3.16.2", af = ({ size: e }) => q("svg", {
	class: "wl-close-icon",
	viewBox: "0 0 1024 1024",
	width: e,
	height: e
}, [q("path", {
	d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
	fill: "currentColor"
}), q("path", {
	d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
	fill: "#888"
})]), of = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
	fill: "red"
})), sf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
	fill: "currentColor"
})), cf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
	fill: "currentColor"
}), q("path", {
	d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
	fill: "currentColor"
})]), lf = ({ active: e = !1 }) => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"}`,
	fill: e ? "red" : "currentColor"
})]), uf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
	fill: "currentColor"
}), q("path", {
	d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
	fill: "currentColor"
})]), df = () => q("svg", {
	width: "16",
	height: "16",
	ariaHidden: "true"
}, q("path", {
	d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
	fill: "currentColor"
})), ff = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
	fill: "currentColor"
})), pf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
	fill: "currentColor"
})), mf = () => q("svg", {
	class: "verified-icon",
	viewBox: "0 0 1024 1024",
	width: "14",
	height: "14"
}, q("path", {
	d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
	fill: "#27ae60"
})), hf = () => q("svg", {
	class: "administrator-icon",
	viewBox: "0 0 1024 1024",
	width: "14",
	height: "14"
}, [q("path", {
	d: "M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z",
	fill: "#f59831"
})]), gf = ({ size: e = 100 }) => q("svg", {
	width: e,
	height: e,
	viewBox: "0 0 100 100",
	preserveAspectRatio: "xMidYMid"
}, q("circle", {
	cx: 50,
	cy: 50,
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "4",
	r: "40",
	"stroke-dasharray": "85 30"
}, q("animateTransform", {
	attributeName: "transform",
	type: "rotate",
	repeatCount: "indefinite",
	dur: "1s",
	values: "0 50 50;360 50 50",
	keyTimes: "0;1"
}))), _f = () => q("svg", {
	width: 24,
	height: 24,
	fill: "currentcolor",
	viewBox: "0 0 24 24"
}, [q("path", {
	style: "transform: translateY(0.5px)",
	d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"
}), q("path", { d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z" })]), vf = () => q("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24"
}, q("g", { transform: "translate(0 -1028.4)" }, q("g", {}, [
	q("path", {
		d: "m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z",
		fill: "#d35400"
	}),
	q("path", {
		d: "m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z",
		transform: "translate(0 1028.4)",
		fill: "#e67e22"
	}),
	q("path", {
		d: "m5 1034.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z",
		fill: "#d35400"
	}),
	q("path", {
		d: "m5 1033.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z",
		fill: "#ecf0f1"
	})
]))), yf = () => q("svg", {
	fill: "currentColor",
	width: "24",
	height: "24",
	viewBox: "-3 0 19 19",
	class: "cf-icon-svg"
}, q("path", { d: "M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z" })), bf = {
	key: 0,
	class: "wl-reaction"
}, xf = ["textContent"], Sf = { class: "wl-reaction-list" }, Cf = ["onClick"], wf = { class: "wl-reaction-img" }, Tf = ["src", "alt"], Ef = ["textContent"], Df = ["textContent"], Of = /* @__PURE__ */ sr({
	__name: "ArticleReaction",
	setup(e) {
		let t = Wd(), n = Jn(Fc), r = /* @__PURE__ */ I(-1), i = /* @__PURE__ */ I([]), a = K(() => n.value.locale), o = K(() => {
			let { reaction: e } = n.value;
			return e?.length ? e : null;
		}), s = K(() => {
			let { path: e } = n.value;
			return o.value?.map((n, r) => ({
				icon: n,
				desc: a.value[`reaction${r}`],
				active: t.value[e] === r
			})) ?? null;
		}), c, l = async () => {
			let { serverURL: e, lang: t, path: r } = n.value;
			if (!o.value) return;
			let a = new AbortController();
			c = a.abort.bind(a);
			try {
				let [n] = await Oo({
					serverURL: e,
					lang: t,
					paths: [r],
					type: o.value.map((e, t) => `reaction${t}`),
					signal: a.signal
				});
				i.value = o.value.map((e, t) => n[`reaction${t}`]);
			} catch (e) {
				if (e instanceof Error && e.name === "AbortError") return;
				console.error("[Waline] Failed to fetch reaction data", e);
			}
		}, u = async (e) => {
			if (r.value !== -1) return;
			let { serverURL: a, lang: o, path: s } = n.value, c = t.value[s], l = [...i.value];
			r.value = e;
			try {
				c != null && (await ko({
					serverURL: a,
					lang: o,
					path: s,
					type: `reaction${c}`,
					action: "desc"
				}), i.value[c] = Math.max((i.value[c] ?? 0) - 1, 0)), c !== e && (await ko({
					serverURL: a,
					lang: o,
					path: s,
					type: `reaction${e}`
				}), i.value[e] = (i.value[e] ?? 0) + 1), c === e ? delete t.value[s] : t.value[s] = e;
			} catch (e) {
				i.value = l, c == null ? delete t.value[s] : t.value[s] = c, console.error("[Waline] Failed to update reaction counter", e);
			} finally {
				r.value = -1;
			}
		};
		return vr(() => {
			ml(() => [n.value.serverURL, n.value.path], () => l());
		}), br(() => {
			c?.();
		}), (e, t) => s.value ? (V(), H("div", bf, [U("div", {
			class: "wl-reaction-title",
			textContent: A(a.value.reactionTitle)
		}, null, 8, xf), U("ul", Sf, [(V(!0), H(B, null, Er(s.value, ({ active: e, icon: t, desc: n }, a) => (V(), H("li", {
			key: a,
			class: O(["wl-reaction-item", { active: e }]),
			onClick: (e) => u(a)
		}, [U("div", wf, [U("img", {
			src: t,
			alt: n
		}, null, 8, Tf), r.value === a ? (V(), ji(L(gf), {
			key: 0,
			class: "wl-reaction-loading"
		})) : (V(), H("div", {
			key: 1,
			class: "wl-reaction-votes",
			textContent: A(i.value[a] || 0)
		}, null, 8, Ef))]), U("div", {
			class: "wl-reaction-text",
			textContent: A(n)
		}, null, 8, Df)], 10, Cf))), 128))])])) : G("v-if", !0);
	}
}), kf = /* @__PURE__ */ new Map();
function Af(e) {
	var t = kf.get(e);
	t && t.destroy();
}
function jf(e) {
	var t = kf.get(e);
	t && t.update();
}
var Mf = null;
typeof window > "u" ? ((Mf = function(e) {
	return e;
}).destroy = function(e) {
	return e;
}, Mf.update = function(e) {
	return e;
}) : ((Mf = function(e, t) {
	return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
		return function(e) {
			if (e && e.nodeName && e.nodeName === "TEXTAREA" && !kf.has(e)) {
				var t, n = null, r = window.getComputedStyle(e), i = (t = e.value, function() {
					o({
						testForHeightReduction: t === "" || !e.value.startsWith(t),
						restoreTextAlign: null
					}), t = e.value;
				}), a = function(t) {
					e.removeEventListener("autosize:destroy", a), e.removeEventListener("autosize:update", s), e.removeEventListener("input", i), window.removeEventListener("resize", s), Object.keys(t).forEach(function(n) {
						return e.style[n] = t[n];
					}), kf.delete(e);
				}.bind(e, {
					height: e.style.height,
					resize: e.style.resize,
					textAlign: e.style.textAlign,
					overflowY: e.style.overflowY,
					overflowX: e.style.overflowX,
					wordWrap: e.style.wordWrap
				});
				e.addEventListener("autosize:destroy", a), e.addEventListener("autosize:update", s), e.addEventListener("input", i), window.addEventListener("resize", s), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", kf.set(e, {
					destroy: a,
					update: s
				}), s();
			}
			function o(t) {
				var i, a, s = t.restoreTextAlign, c = s === void 0 ? null : s, l = t.testForHeightReduction, u = l === void 0 || l, d = r.overflowY;
				if (e.scrollHeight !== 0 && (r.resize === "vertical" ? e.style.resize = "none" : r.resize === "both" && (e.style.resize = "horizontal"), u && (i = function(e) {
					for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push([e.parentNode, e.parentNode.scrollTop]), e = e.parentNode;
					return function() {
						return t.forEach(function(e) {
							var t = e[0], n = e[1];
							t.style.scrollBehavior = "auto", t.scrollTop = n, t.style.scrollBehavior = null;
						});
					};
				}(e), e.style.height = ""), a = r.boxSizing === "content-box" ? e.scrollHeight - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)) : e.scrollHeight + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), r.maxHeight !== "none" && a > parseFloat(r.maxHeight) ? (r.overflowY === "hidden" && (e.style.overflow = "scroll"), a = parseFloat(r.maxHeight)) : r.overflowY !== "hidden" && (e.style.overflow = "hidden"), e.style.height = a + "px", c && (e.style.textAlign = c), i && i(), n !== a && (e.dispatchEvent(new Event("autosize:resized", { bubbles: !0 })), n = a), d !== r.overflow && !c)) {
					var f = r.textAlign;
					r.overflow === "hidden" && (e.style.textAlign = f === "start" ? "end" : "start"), o({
						restoreTextAlign: f,
						testForHeightReduction: !0
					});
				}
			}
			function s() {
				o({
					testForHeightReduction: !0,
					restoreTextAlign: null
				});
			}
		}(e);
	}), e;
}).destroy = function(e) {
	return e && Array.prototype.forEach.call(e.length ? e : [e], Af), e;
}, Mf.update = function(e) {
	return e && Array.prototype.forEach.call(e.length ? e : [e], jf), e;
});
var Nf = Mf, Pf = /* @__PURE__ */ new Map();
for (let { folder: e, prefix: t, type: n, items: r } of $s) for (let i of r) {
	let r = t + i;
	Pf.set(r, `${e}/${r}.${n}`);
}
function Ff(e) {
	return e.replace(/<code\b[^>]*>[\s\S]*?<\/code>|<a\b[^>]*>[\s\S]*?<\/a>|<[^>]*>|:([a-zA-Z0-9_-]+):/g, (e, t) => {
		let n = t && Pf.get(t);
		return n ? `<img class="wl-emoji" src="${n}" alt="${e}" loading="lazy" />` : e;
	});
}
var If = /^(https?:|mailto:|#|\/)/i;
function Lf(e) {
	if (!e) return "";
	let t = e;
	return t = Rf(t), t = t.replace(/```(\w*)\n([\s\S]*?)```/g, (e, t, n) => `<pre><code class="language-${t || ""}">${n.trim()}</code></pre>`), t = t.replace(/`([^`]+)`/g, "<code>$1</code>"), t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (e, t, n) => If.test(n.trim()) ? `<img src="${n}" alt="${t}" loading="lazy" />` : ""), t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (e, t, n) => If.test(n.trim()) ? `<a href="${n}" target="_blank" rel="ugc nofollow noreferrer noopener">${t}</a>` : t), t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__(.+?)__/g, "<strong>$1</strong>"), t = t.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>"), t = t.replace(/(?<![a-zA-Z0-9_])_(?!_)(.+?)(?<!_)_(?![a-zA-Z0-9_])/g, "<em>$1</em>"), t = t.replace(/~~(.+?)~~/g, "<del>$1</del>"), t = t.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>"), t = t.replace(/<\/blockquote>\n<blockquote>/g, "\n"), t = t.replace(/^######\s+(.+)$/gm, "<h6>$1</h6>"), t = t.replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>"), t = t.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>"), t = t.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>"), t = t.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>"), t = t.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>"), t = t.replace(/^(-{3,}|\*{3,}|_{3,})$/gm, "<hr />"), t = t.replace(/^[*\-+]\s+(.+)$/gm, "<li>$1</li>"), t = t.replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>"), t = t.replace(/(?<!="|'|>)(https?:\/\/[^\s<)"']+)/g, "<a href=\"$1\" target=\"_blank\" rel=\"ugc nofollow noreferrer noopener\">$1</a>"), t = t.split(/\n{2,}/).map((e) => (e = e.trim(), e ? /^<(h[1-6]|ul|ol|li|blockquote|pre|hr|p|div|table)/.test(e) ? e : `<p>${e}</p>` : "")).join("\n"), t = t.replace(/(?<!\n)\n(?!\n)/g, "<br />\n"), Ff(t.trim());
}
function Rf(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
// src/components/ImageWall.vue?vue&type=script&setup=true&lang.ts
var zf = ["data-index"], Bf = [
	"src",
	"title",
	"onClick"
], Vf = /* @__PURE__ */ sr({
	__name: "ImageWall",
	props: {
		items: { default: () => [] },
		columnWidth: { default: 300 },
		gap: { default: 0 }
	},
	emits: ["insert"],
	setup(e) {
		let t = null, n = lr("wall"), r = /* @__PURE__ */ I({}), i = /* @__PURE__ */ I([]), a = () => {
			let t = Math.floor((n.value.getBoundingClientRect().width + e.gap) / (e.columnWidth + e.gap));
			return t > 0 ? t : 1;
		}, o = (e) => Array.from({ length: e }, () => []), s = async (t) => {
			if (t >= e.items.length) return;
			await An();
			let r = [...n.value?.children ?? []].reduce((e, t) => t.getBoundingClientRect().height < e.getBoundingClientRect().height ? t : e);
			i.value[Number(r.dataset.index)].push(t), await s(t + 1);
		}, c = async (e = !1) => {
			if (i.value.length === a() && !e) return;
			i.value = o(a());
			let { scrollY: t } = window;
			await s(0), window.scrollTo({ top: t });
		}, l = (e) => {
			r.value[e.target.src] = !0;
		};
		return vr(() => {
			c(!0), t = new ResizeObserver(() => {
				c();
			}), t.observe(n.value), Qn(() => [e.items], () => {
				r.value = {}, c(!0);
			}), Qn(() => [e.columnWidth, e.gap], () => {
				c();
			});
		}), yr(() => {
			t.unobserve(n.value);
		}), (t, a) => (V(), H("div", {
			ref_key: "wall",
			ref: n,
			class: "wl-gallery",
			style: fe({ gap: `${e.gap}px` })
		}, [(V(!0), H(B, null, Er(i.value, (n, i) => (V(), H("div", {
			key: i,
			class: "wl-gallery-column",
			"data-index": i,
			style: fe({ gap: `${e.gap}px` })
		}, [(V(!0), H(B, null, Er(n, (n) => (V(), H(B, { key: n }, [
			G(" eslint-disable vue/no-static-inline-styles "),
			r.value[e.items[n].src] ? G("v-if", !0) : (V(), ji(L(gf), {
				key: 0,
				size: 36,
				style: { margin: "20px auto" }
			})),
			G(" eslint-enable vue/no-static-inline-styles "),
			U("img", {
				class: "wl-gallery-item",
				src: e.items[n].src,
				title: e.items[n].title,
				loading: "lazy",
				onLoad: l,
				onClick: (r) => t.$emit("insert", `![](${e.items[n].src})`)
			}, null, 40, Bf)
		], 64))), 128))], 12, zf))), 128))], 4));
	}
}), Hf = {
	key: 0,
	class: "wl-login-info"
}, Uf = { class: "wl-avatar" }, Wf = ["title"], Gf = ["title"], Kf = ["src"], qf = ["title", "textContent"], Jf = { class: "wl-panel" }, Yf = ["for", "textContent"], Xf = [
	"id",
	"onUpdate:modelValue",
	"name",
	"type"
], Zf = {
	key: 1,
	class: "board-spoiler-title-field"
}, Qf = ["readonly", "placeholder"], $f = {
	key: 2,
	class: "wl-preview"
}, ep = ["innerHTML"], tp = { class: "wl-footer" }, np = { class: "board-composer-tools" }, rp = {
	key: 0,
	class: "wl-actions"
}, ip = {
	href: "https://guides.github.com/features/mastering-markdown/",
	title: "Markdown Guide",
	"aria-label": "Markdown is supported",
	class: "wl-action",
	target: "_blank",
	rel: "noopener noreferrer"
}, ap = ["title"], op = ["title"], sp = ["title", "aria-label"], cp = ["title"], lp = { class: "board-spoiler-option" }, up = { class: "wl-info" }, dp = { key: 0 }, fp = { class: "wl-text-number" }, pp = { key: 0 }, mp = ["textContent"], hp = ["textContent"], gp = ["disabled"], _p = ["placeholder"], vp = {
	key: 1,
	class: "wl-loading"
}, yp = [
	"title",
	"onClick",
	"onMouseenter"
], bp = ["src", "alt"], xp = ["src"], Sp = {
	key: 0,
	class: "wl-tabs"
}, Cp = [
	"aria-pressed",
	"aria-label",
	"onClick"
], wp = [
	"src",
	"alt",
	"title"
], Tp = ["title"], Ep = /* @__PURE__ */ sr({
	__name: "CommentBox",
	props: {
		edit: {},
		rootId: {},
		replyId: {},
		replyUser: {}
	},
	emits: [
		"log",
		"cancelEdit",
		"cancelReply",
		"submit"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Jn(Fc), a = n.edit ? /* @__PURE__ */ I(n.edit.orig) : Bd(), o = zd(), s = nf(), c = n.edit ? /* @__PURE__ */ I(!!n.edit.spoiler) : Ol("COPPERFIELD_DRAFT_SPOILER", !1), l = n.edit ? /* @__PURE__ */ I(n.edit.spoilerTitle ?? "") : Ol("COPPERFIELD_DRAFT_SPOILER_TITLE", ""), u = K(() => !!n.edit && s.value.type !== "administrator"), d = /* @__PURE__ */ I({}), f = lr("textarea"), p = lr("image-uploader"), m = lr("emoji-button"), h = lr("emoji-popup"), g = lr("gif-button"), _ = lr("gif-popup"), v = lr("gif-search"), y = /* @__PURE__ */ I({
			tabs: [],
			map: {}
		}), b = /* @__PURE__ */ I(0), x = /* @__PURE__ */ I(!1), S = /* @__PURE__ */ I(""), C = /* @__PURE__ */ I({}), ee, te = (e, t) => {
			clearTimeout(ee), S.value = t;
			let n = e.currentTarget, r = h.value;
			if (n && r) {
				let e = n.getBoundingClientRect(), t = r.getBoundingClientRect();
				C.value = {
					left: `${e.left - t.left + e.width / 2}px`,
					top: `${e.top - t.top}px`,
					transform: "translate(-50%, -100%)"
				};
			}
		}, ne = () => {
			ee = setTimeout(() => {
				S.value = "";
			}, 50);
		}, re = /* @__PURE__ */ I(!1), ie = /* @__PURE__ */ I(!1), w = /* @__PURE__ */ I(""), ae = /* @__PURE__ */ I(0), T = /* @__PURE__ */ Vt({
			loading: !0,
			list: []
		}), oe = /* @__PURE__ */ I(0), se = /* @__PURE__ */ I(!1), E = /* @__PURE__ */ I(""), ce = /* @__PURE__ */ I(!1), le = /* @__PURE__ */ I(!1), D = K(() => i.value.locale), ue = K(() => !!s.value.token), de = K(() => i.value.imageUploader != null), pe = (e) => {
			let t = f.value, n = t.selectionStart, r = t.selectionEnd || 0, { scrollTop: i } = t;
			a.value = t.value.slice(0, n) + e + t.value.slice(r), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i;
		}, me = async (e) => {
			let t = `![${i.value.locale.uploading} ${e.name}]()`;
			pe(t), ce.value = !0;
			try {
				let n = await i.value.imageUploader(e);
				a.value = a.value.replace(t, `\r\n![${e.name}](${n})`);
			} catch (e) {
				alert(e.message), a.value = a.value.replace(t, "");
			} finally {
				ce.value = !1;
			}
		}, he = (e) => {
			if (e.dataTransfer?.items) {
				let t = Vl(e.dataTransfer.items);
				t && de.value && (me(t), e.preventDefault());
			}
		}, ge = (e) => {
			if (e.clipboardData) {
				let t = Vl(e.clipboardData.items);
				t && de.value && me(t);
			}
		}, _e = () => {
			let e = p.value;
			e.files && de.value && me(e.files[0]).then(() => {
				e.value = "";
			});
		}, ve = ({ link: e, mail: t, nick: n }) => {
			o.value = {
				nick: n ?? "",
				mail: t ?? "",
				link: e ?? ""
			};
		}, ye = async () => {
			let { serverURL: e, lang: t, login: p, wordLimit: m, requiredMeta: h, recaptchaV3Key: g, turnstileKey: _ } = i.value, v = {
				spoiler: c.value,
				...c.value ? { spoilerTitle: l.value.trim() } : {}
			}, y = {
				comment: E.value,
				...v,
				nick: o.value.nick,
				mail: o.value.mail,
				link: o.value.link,
				url: i.value.path,
				ua: await Ld()
			};
			if (!n.edit) {
				if (s.value.token) y.nick = s.value.display_name, y.mail = s.value.email, y.link = s.value.url;
				else {
					if (p === "force") return;
					if (h.includes("nick") && !y.nick) {
						d.value.nick.focus(), alert(D.value.nickError);
						return;
					}
					if (h.includes("mail") && !y.mail || y.mail && !Xc(y.mail)) {
						d.value.mail.focus(), alert(D.value.mailError);
						return;
					}
					y.nick ||= D.value.anonymous;
				}
				ve(y);
			}
			if (!y.comment) f.value.focus();
			else if (!se.value) alert(D.value.wordHint.replace("$0", m[0].toString()).replace("$1", m[1].toString()).replace("$2", ae.value.toString()));
			else {
				n.replyId && n.rootId && (y.pid = n.replyId, y.rid = n.rootId, y.at = n.replyUser), ce.value = !0;
				try {
					g && (y.recaptchaV3 = await Yd(g).execute("social")), _ && (y.turnstile = await ef(_).execute("social"));
					let i = {
						serverURL: e,
						lang: t,
						token: s.value.token,
						comment: y
					}, o = await (n.edit ? No({
						objectId: n.edit.objectId,
						...i,
						comment: u.value ? v : y
					}) : jo(i));
					if (ce.value = !1, o.errmsg) {
						alert(o.errmsg);
						return;
					}
					r("submit", o.data), l.value = "", c.value = !1, a.value = "", w.value = "", await An(), n.replyId && r("cancelReply"), n.edit?.objectId && r("cancelEdit");
				} catch (e) {
					ce.value = !1, alert(e.message);
				}
			}
		}, be = ({ key: e, ctrlKey: t, metaKey: n }) => {
			ce.value || (t || n) && e === "Enter" && ye();
		}, xe = (e) => {
			e.preventDefault();
			let { lang: t, serverURL: n } = i.value;
			Io({
				serverURL: n,
				lang: t
			}).then((e) => {
				s.value = e, ve({
					nick: e.display_name,
					mail: e.email,
					link: e.url
				}), r("log");
			});
		}, Se = () => {
			s.value = {}, r("log");
		}, k = (e) => {
			e.preventDefault();
			let { lang: t, serverURL: n } = i.value, r = 1200, a = (window.innerWidth - r) / 2, o = (window.innerHeight - 720) / 2, c = new URLSearchParams({
				lng: t,
				token: s.value.token
			});
			window.open(`${n}/ui/profile?${c.toString()}`, "_blank", `width=${r},height=720,left=${a},top=${o},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)?.postMessage({
				type: "TOKEN",
				data: s.value.token
			}, "*");
		}, Ce = (e) => {
			!m.value?.contains(e.target) && !h.value?.contains(e.target) && (x.value = !1), !g.value?.contains(e.target) && !_.value?.contains(e.target) && (re.value = !1);
		}, we = async (e) => {
			let { scrollTop: t, clientHeight: n, scrollHeight: r } = e.target, a = (n + t) / r, o = i.value.search, s = v.value?.value ?? "";
			if (!(a < .9 || T.loading || le.value)) {
				T.loading = !0;
				try {
					let e = o.more && T.list.length > 0 ? await o.more(s, T.list.length) : await o.search(s);
					e.length > 0 ? T.list = [...T.list, ...e] : le.value = !0;
				} catch {} finally {
					T.loading = !1;
				}
				setTimeout(() => {
					e.target.scrollTop = t;
				}, 50);
			}
		}, Te = ll((e) => {
			T.list = [], le.value = !1, we(e);
		}, 300);
		return vl("click", Ce), vl("message", ({ data: e }) => {
			e?.type === "profile" && (s.value = {
				...s.value,
				...e.data
			}, ve({
				nick: s.value.display_name,
				mail: s.value.email,
				link: s.value.url
			}));
		}), ml([i, ae], ([e, t]) => {
			let { wordLimit: n } = e;
			n ? t < n[0] && n[0] !== 0 ? ([oe.value] = n, se.value = !1) : ([, oe.value] = n, se.value = t <= n[1]) : (oe.value = 0, se.value = !0);
		}), Qn(re, async (e) => {
			if (!e) return;
			let t = i.value.search;
			v.value && (v.value.value = ""), T.loading = !0, T.list = await (t.default?.() ?? t.search("")), T.loading = !1;
		}), vr(() => {
			n.edit?.objectId && (a.value = n.edit.orig), ml(() => a.value, (e) => {
				E.value = e, w.value = Lf(e), ae.value = Id(e), e ? Nf(f.value) : Nf.destroy(f.value);
			}), ml(() => i.value.emoji, async (e) => {
				y.value = await Rl(e);
			});
		}), (t, f) => (V(), H("div", {
			key: L(s).token,
			class: "wl-comment"
		}, [
			L(i).login !== "disable" && ue.value && !e.edit?.objectId ? (V(), H("div", Hf, [U("div", Uf, [U("button", {
				type: "submit",
				class: "wl-logout-btn",
				title: D.value.logout,
				onClick: Se
			}, [W(L(af), { size: 14 })], 8, Wf), U("a", {
				href: "#",
				class: "wl-login-nick",
				"aria-label": "Profile",
				title: D.value.profile,
				onClick: k
			}, [U("img", {
				src: L(s).avatar,
				alt: "avatar"
			}, null, 8, Kf)], 8, Gf)]), U("a", {
				href: "#",
				class: "wl-login-nick",
				"aria-label": "Profile",
				title: D.value.profile,
				onClick: k,
				textContent: A(L(s).display_name)
			}, null, 8, qf)])) : G("v-if", !0),
			U("div", Jf, [
				L(i).login !== "force" && L(i).meta.length && !ue.value ? (V(), H("div", {
					key: 0,
					class: O(["wl-header", `item${L(i).meta.length}`])
				}, [(V(!0), H(B, null, Er(L(i).meta, (e) => (V(), H("div", {
					key: e,
					class: "wl-header-item"
				}, [U("label", {
					for: `wl-${e}`,
					textContent: A(D.value[e] + (L(i).requiredMeta.includes(e) || !L(i).requiredMeta.length ? "" : `(${D.value.optional})`))
				}, null, 8, Yf), Gn(U("input", {
					id: `wl-${e}`,
					ref_for: !0,
					ref: (t) => {
						t && (d.value[e] = t);
					},
					"onUpdate:modelValue": (t) => L(o)[e] = t,
					class: O(["wl-input", `wl-${e}`]),
					name: e,
					type: e === "mail" ? "email" : "text"
				}, null, 10, Xf), [[go, L(o)[e]]])]))), 128))], 2)) : G("v-if", !0),
				L(c) ? (V(), H("label", Zf, [f[9] ||= U("span", null, "剧透主题", -1), Gn(U("input", {
					"onUpdate:modelValue": f[0] ||= (e) => /* @__PURE__ */ F(l) ? l.value = e : null,
					type: "text",
					maxlength: "60",
					placeholder: "选填，例如：主线第十二章"
				}, null, 512), [[oo, L(l)]])])) : G("v-if", !0),
				Gn(U("textarea", {
					id: "wl-edit",
					ref: "textarea",
					"onUpdate:modelValue": f[1] ||= (e) => /* @__PURE__ */ F(a) ? a.value = e : null,
					readonly: u.value,
					class: "wl-editor",
					placeholder: e.replyUser ? `@${e.replyUser}` : D.value.placeholder,
					onKeydown: be,
					onDrop: he,
					onPaste: ge
				}, null, 40, Qf), [[oo, L(a)]]),
				ie.value ? (V(), H("div", $f, [
					f[10] ||= U("hr", null, null, -1),
					U("h4", null, A(D.value.preview) + ":", 1),
					G(" eslint-disable-next-line vue/no-v-html "),
					U("div", {
						class: "wl-content",
						innerHTML: w.value
					}, null, 8, ep)
				])) : G("v-if", !0),
				U("div", tp, [
					U("div", np, [u.value ? G("v-if", !0) : (V(), H("div", rp, [
						U("a", ip, [W(L(df))]),
						Gn(U("button", {
							ref: "emoji-button",
							type: "button",
							class: O(["wl-action", { active: x.value }]),
							title: D.value.emoji,
							onClick: f[2] ||= (e) => x.value = !x.value
						}, [W(L(sf))], 10, ap), [[Ta, y.value.tabs.length]]),
						L(i).search ? (V(), H("button", {
							key: 0,
							ref: "gif-button",
							type: "button",
							class: O(["wl-action", { active: re.value }]),
							title: D.value.gif,
							onClick: f[3] ||= (e) => re.value = !re.value
						}, [W(L(_f))], 10, op)) : G("v-if", !0),
						U("input", {
							id: "wl-image-upload",
							ref: "image-uploader",
							class: "upload",
							"aria-hidden": "true",
							type: "file",
							accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
							onChange: _e
						}, null, 544),
						de.value ? (V(), H("label", {
							key: 1,
							for: "wl-image-upload",
							class: "wl-action",
							title: D.value.uploadImage,
							"aria-label": D.value.uploadImage
						}, [W(L(cf))], 8, sp)) : G("v-if", !0),
						U("button", {
							type: "button",
							class: O(["wl-action", { active: ie.value }]),
							title: D.value.preview,
							onClick: f[4] ||= (e) => ie.value = !ie.value
						}, [W(L(uf))], 10, cp)
					])), U("label", lp, [Gn(U("input", {
						"onUpdate:modelValue": f[5] ||= (e) => /* @__PURE__ */ F(c) ? c.value = e : null,
						type: "checkbox"
					}, null, 512), [[so, L(c)]]), f[11] ||= zi(" 含剧透 ", -1)])]),
					U("div", up, [
						f[13] ||= U("div", { class: "wl-captcha-container" }, null, -1),
						u.value ? (V(), H("span", dp, "仅修改剧透提示；新增或改写主题需重新审核。")) : G("v-if", !0),
						U("div", fp, [
							zi(A(ae.value) + " ", 1),
							L(i).wordLimit ? (V(), H("span", pp, [f[12] ||= zi(" \xA0/\xA0 ", -1), U("span", {
								class: O({ illegal: !se.value }),
								textContent: A(oe.value)
							}, null, 10, mp)])) : G("v-if", !0),
							zi(" \xA0" + A(D.value.word), 1)
						]),
						L(i).login !== "disable" && !ue.value ? (V(), H("button", {
							key: 1,
							type: "button",
							class: "wl-btn",
							onClick: xe,
							textContent: A(D.value.login)
						}, null, 8, hp)) : G("v-if", !0),
						L(i).login !== "force" || ue.value ? (V(), H("button", {
							key: 2,
							type: "submit",
							class: "primary wl-btn",
							title: "Cmd|Ctrl + Enter",
							disabled: ce.value,
							onClick: ye
						}, [ce.value ? (V(), ji(L(gf), {
							key: 0,
							size: 16
						})) : (V(), H(B, { key: 1 }, [zi(A(n.edit ? "保存修改" : L(c) ? "发布剧透评论" : D.value.submit), 1)], 64))], 8, gp)) : G("v-if", !0)
					]),
					U("div", {
						ref: "gif-popup",
						class: O(["wl-gif-popup", { display: re.value }])
					}, [
						U("input", {
							ref: "gif-search",
							type: "text",
							placeholder: D.value.gifSearchPlaceholder,
							onInput: f[6] ||= (...e) => L(Te) && L(Te)(...e)
						}, null, 40, _p),
						T.list.length ? (V(), ji(Vf, {
							key: 0,
							items: T.list,
							"column-width": 200,
							gap: 6,
							onInsert: f[7] ||= (e) => pe(e),
							onScroll: we
						}, null, 8, ["items"])) : G("v-if", !0),
						T.loading ? (V(), H("div", vp, [W(L(gf), { size: 30 })])) : G("v-if", !0)
					], 2),
					U("div", {
						ref: "emoji-popup",
						class: O(["wl-emoji-popup", { display: x.value }])
					}, [
						(V(!0), H(B, null, Er(y.value.tabs, (e, t) => (V(), H(B, { key: e.name }, [t === b.value ? (V(), H("div", {
							key: 0,
							class: "wl-tab-wrapper",
							onScroll: ne
						}, [(V(!0), H(B, null, Er(e.items, (e) => (V(), H("button", {
							key: e,
							type: "button",
							title: e,
							onClick: (t) => pe(`:${e}:`),
							onMouseenter: (t) => te(t, e),
							onMouseleave: ne
						}, [x.value ? (V(), H("img", {
							key: 0,
							class: "wl-emoji",
							src: y.value.map[e],
							alt: e,
							loading: "lazy",
							referrerPolicy: "no-referrer"
						}, null, 8, bp)) : G("v-if", !0)], 40, yp))), 128))], 32)) : G("v-if", !0)], 64))), 128)),
						U("div", null, [S.value ? (V(), H("img", {
							key: 0,
							class: "wl-emoji-preview",
							src: y.value.map[S.value],
							alt: "preview",
							loading: "lazy",
							referrerPolicy: "no-referrer",
							style: fe(C.value)
						}, null, 12, xp)) : G("v-if", !0)]),
						y.value.tabs.length > 1 ? (V(), H("div", Sp, [(V(!0), H(B, null, Er(y.value.tabs, (e, t) => (V(), H("button", {
							key: e.name,
							type: "button",
							class: O(["wl-tab", { active: b.value === t }]),
							"aria-pressed": b.value === t,
							"aria-label": e.name,
							onClick: (e) => b.value = t
						}, [U("img", {
							class: "wl-emoji",
							src: e.icon,
							alt: e.name,
							title: e.name,
							loading: "lazy",
							referrerPolicy: "no-referrer"
						}, null, 8, wp), U("span", null, A(e.name), 1)], 10, Cp))), 128))])) : G("v-if", !0)
					], 2)
				])
			]),
			e.replyId || e.edit?.objectId ? (V(), H("button", {
				key: 1,
				type: "button",
				class: "wl-close",
				title: D.value.cancelReply,
				onClick: f[8] ||= (t) => e.replyId ? r("cancelReply") : r("cancelEdit")
			}, [W(L(af), { size: 24 })], 8, Tp)) : G("v-if", !0)
		]));
	}
}), Dp = ["id"], Op = {
	class: "wl-user",
	"aria-hidden": "true"
}, kp = ["src"], Ap = { class: "wl-card" }, jp = { class: "wl-head" }, Mp = ["href"], Np = {
	key: 1,
	class: "wl-nick"
}, Pp = ["textContent"], Fp = ["textContent"], Ip = ["textContent"], Lp = ["textContent"], Rp = { class: "wl-comment-actions" }, zp = ["disabled"], Bp = ["title", "href"], Vp = ["title"], Hp = ["title"], Up = {
	class: "wl-meta",
	"aria-hidden": "true"
}, Wp = ["data-value", "textContent"], Gp = {
	key: 0,
	class: "wl-warning",
	"aria-hidden": "true"
}, Kp = ["aria-expanded"], qp = { class: "board-spoiler-label" }, Jp = { class: "board-spoiler-action" }, Yp = {
	key: 2,
	class: "wl-content"
}, Xp = {
	key: 0,
	class: "wl-reply-to"
}, Zp = ["href"], Qp = ["innerHTML"], $p = {
	key: 3,
	class: "wl-admin-actions"
}, em = { class: "wl-comment-status" }, tm = [
	"disabled",
	"onClick",
	"textContent"
], nm = {
	key: 5,
	class: "wl-quote"
}, rm = /* @__PURE__ */ sr({
	__name: "CommentCard",
	props: {
		comment: {},
		edit: { default: null },
		rootId: {},
		reply: { default: null }
	},
	emits: [
		"log",
		"submit",
		"delete",
		"like",
		"sticky",
		"edit",
		"reply",
		"status"
	],
	setup(e, { emit: t }) {
		let n = t, r = [
			"approved",
			"waiting",
			"spam"
		], i = Jn(Fc), a = Hd(), o = /* @__PURE__ */ kl(), s = nf(), c = K(() => i.value.locale), l = K(() => {
			let { link: t } = e.comment;
			return t ? Rc(t) ? t : `https://${t}` : "";
		}), u = K(() => a.value.includes(e.comment.objectId)), d = K(() => Jc(new Date(e.comment.time), o.value, c.value)), f = K(() => s.value.type === "administrator"), p = K(() => e.comment.user_id && s.value.objectId === e.comment.user_id), m = K(() => e.comment.objectId === e.reply?.objectId), h = /* @__PURE__ */ I(!1), g = K(() => !!e.comment.spoiler && !h.value);
		Qn(() => [
			e.comment.objectId,
			e.comment.spoiler,
			e.comment.spoilerTitle
		], () => {
			h.value = !1;
		});
		let _ = () => {
			h.value && "children" in e.comment && (e.comment.children?.some((t) => t.objectId === e.reply?.objectId) && n("reply", null), e.comment.children?.some((t) => t.objectId === e.edit?.objectId) && n("edit", null)), h.value = !h.value;
		}, v = K(() => e.comment.objectId === e.edit?.objectId);
		return (t, a) => {
			let o = Sr("CommentCard", !0);
			return V(), H("div", {
				id: e.comment.objectId.toString(),
				class: "wl-card-item"
			}, [U("div", Op, [
				e.comment.avatar ? (V(), H("img", {
					key: 0,
					class: "wl-user-avatar",
					src: e.comment.avatar,
					alt: ""
				}, null, 8, kp)) : G("v-if", !0),
				e.comment.type === "guest" ? (V(), ji(L(mf), { key: 1 })) : G("v-if", !0),
				e.comment.type === "administrator" ? (V(), ji(L(hf), { key: 2 })) : G("v-if", !0)
			]), U("div", Ap, [
				U("div", jp, [
					l.value ? (V(), H("a", {
						key: 0,
						class: "wl-nick",
						href: l.value,
						target: "_blank",
						rel: "ugc nofollow noreferrer noopener"
					}, A(e.comment.nick), 9, Mp)) : (V(), H("span", Np, A(e.comment.nick), 1)),
					e.comment.label ? (V(), H("span", {
						key: 2,
						class: "wl-badge",
						textContent: A(e.comment.label)
					}, null, 8, Pp)) : G("v-if", !0),
					e.comment.sticky ? (V(), H("span", {
						key: 3,
						class: "wl-badge",
						textContent: A(c.value.sticky)
					}, null, 8, Fp)) : G("v-if", !0),
					typeof e.comment.level == "number" ? (V(), H("span", {
						key: 4,
						class: O(`wl-badge level${e.comment.level}`),
						textContent: A(c.value[`level${e.comment.level}`] || `Level ${e.comment.level}`)
					}, null, 10, Ip)) : G("v-if", !0),
					U("span", {
						class: "wl-time",
						textContent: A(d.value)
					}, null, 8, Lp),
					U("div", Rp, [
						f.value || p.value ? (V(), H(B, { key: 0 }, [U("button", {
							type: "button",
							class: "wl-edit",
							disabled: g.value,
							onClick: a[0] ||= (t) => n("edit", e.comment)
						}, [W(L(pf))], 8, zp), U("button", {
							type: "button",
							class: "wl-delete",
							onClick: a[1] ||= (t) => n("delete", e.comment)
						}, [W(L(of))])], 64)) : G("v-if", !0),
						p.value && !L(i).noRss ? (V(), H("a", {
							key: 1,
							role: "button",
							class: "wl-rss",
							title: c.value.subscribeToReplies,
							href: `${L(i).serverURL}/api/comment/rss?user_id=${e.comment.user_id}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, [W(L(yf))], 8, Bp)) : G("v-if", !0),
						U("button", {
							type: "button",
							class: "wl-like",
							title: u.value ? c.value.cancelLike : c.value.like,
							onClick: a[2] ||= (t) => n("like", e.comment)
						}, [W(L(lf), { active: u.value }, null, 8, ["active"]), zi(" " + A("like" in e.comment ? e.comment.like : ""), 1)], 8, Vp),
						U("button", {
							type: "button",
							class: O(["wl-reply", { active: m.value }]),
							title: m.value ? c.value.cancelReply : c.value.reply,
							onClick: a[3] ||= (t) => n("reply", m.value ? null : e.comment)
						}, [W(L(ff))], 10, Hp)
					])
				]),
				U("div", Up, [(V(), H(B, null, Er([
					"addr",
					"browser",
					"os"
				], (t) => (V(), H(B, null, [e.comment[t] ? (V(), H("span", {
					key: t,
					class: O(`wl-${t}`),
					"data-value": e.comment[t],
					textContent: A(e.comment[t])
				}, null, 10, Wp)) : G("v-if", !0)], 64))), 64))]),
				e.comment.status === "waiting" && !f.value ? (V(), H("div", Gp, A(c.value.commentUnderReview), 1)) : G("v-if", !0),
				e.comment.spoiler && !v.value ? (V(), H("button", {
					key: 1,
					type: "button",
					class: "board-spoiler-toggle",
					"aria-expanded": h.value,
					onClick: _
				}, [U("span", qp, [a[17] ||= zi("含剧透", -1), e.comment.spoilerTitle ? (V(), H(B, { key: 0 }, [zi("：" + A(e.comment.spoilerTitle), 1)], 64)) : G("v-if", !0)]), U("span", Jp, A(h.value ? "收起" : "展开") + A("children" in e.comment && e.comment.children?.length ? "讨论" : "正文"), 1)], 8, Kp)) : G("v-if", !0),
				G(" eslint-disable vue/no-v-html "),
				!g.value && !v.value ? (V(), H("div", Yp, ["reply_user" in e.comment && e.comment.reply_user ? (V(), H("p", Xp, [U("a", { href: "#" + e.comment.pid }, "@" + A(e.comment.reply_user.nick), 9, Zp), a[18] ||= U("span", null, ": ", -1)])) : G("v-if", !0), U("div", { innerHTML: e.comment.comment }, null, 8, Qp)])) : G("v-if", !0),
				G(" eslint-enable vue/no-v-html "),
				f.value && !v.value ? (V(), H("div", $p, [U("span", em, [(V(), H(B, null, Er(r, (t) => U("button", {
					key: t,
					type: "submit",
					class: O(`wl-btn wl-${t}`),
					disabled: e.comment.status === t,
					onClick: (r) => n("status", {
						status: t,
						comment: e.comment
					}),
					textContent: A(c.value[t])
				}, null, 10, tm)), 64))]), f.value && !("rid" in e.comment) ? (V(), H("button", {
					key: 0,
					type: "submit",
					class: "wl-btn wl-sticky",
					onClick: a[4] ||= (t) => n("sticky", e.comment)
				}, A(e.comment.sticky ? c.value.unsticky : c.value.sticky), 1)) : G("v-if", !0)])) : G("v-if", !0),
				m.value || !g.value && v.value ? (V(), H("div", {
					key: 4,
					class: O({
						"wl-reply-wrapper": m.value,
						"wl-edit-wrapper": v.value
					})
				}, [W(Ep, {
					edit: e.edit,
					"reply-id": e.reply?.objectId,
					"reply-user": e.comment.nick,
					"root-id": e.rootId,
					onLog: a[5] ||= (e) => n("log"),
					onCancelReply: a[6] ||= (e) => n("reply", null),
					onCancelEdit: a[7] ||= (e) => n("edit", null),
					onSubmit: a[8] ||= (e) => n("submit", e)
				}, null, 8, [
					"edit",
					"reply-id",
					"reply-user",
					"root-id"
				])], 2)) : G("v-if", !0),
				!g.value && "children" in e.comment ? (V(), H("div", nm, [(V(!0), H(B, null, Er(e.comment.children, (t) => (V(), ji(o, {
					key: t.objectId,
					comment: t,
					reply: e.reply,
					edit: e.edit,
					"root-id": e.rootId,
					onLog: a[9] ||= (e) => n("log"),
					onDelete: a[10] ||= (e) => n("delete", e),
					onEdit: a[11] ||= (e) => n("edit", e),
					onLike: a[12] ||= (e) => n("like", e),
					onReply: a[13] ||= (e) => n("reply", e),
					onStatus: a[14] ||= (e) => n("status", e),
					onSticky: a[15] ||= (e) => n("sticky", e),
					onSubmit: a[16] ||= (e) => n("submit", e)
				}, null, 8, [
					"comment",
					"reply",
					"edit",
					"root-id"
				]))), 128))])) : G("v-if", !0)
			])], 8, Dp);
		};
	}
}), im = { "data-waline": "" }, am = { class: "wl-meta-head" }, om = { class: "wl-count" }, sm = ["textContent"], cm = { class: "wl-sort" }, lm = ["onClick"], um = { class: "wl-cards" }, dm = {
	key: 1,
	class: "wl-operation"
}, fm = ["textContent"], pm = {
	key: 2,
	class: "wl-loading"
}, mm = ["textContent"], hm = { class: "wl-operation" }, gm = ["textContent"], _m = {
	key: 5,
	class: "wl-meta-foot"
}, vm = {
	key: 0,
	class: "wl-rss"
}, ym = ["href", "alt"], bm = ["textContent"], xm = ["href", "alt"], Sm = ["textContent"], Cm = {
	key: 1,
	class: "wl-power"
}, wm = /* @__PURE__ */ sr({
	__name: "WalineComment",
	props: {
		serverURL: {},
		path: {},
		meta: {},
		requiredMeta: {},
		wordLimit: {},
		pageSize: {},
		lang: {},
		locale: {},
		commentSorting: {},
		dark: { type: [String, Boolean] },
		login: {},
		noCopyright: { type: Boolean },
		noRss: { type: Boolean },
		recaptchaV3Key: {},
		turnstileKey: {},
		reaction: { type: [Array, Boolean] },
		emoji: {},
		search: { type: [Object, Boolean] },
		highlighter: { type: Function },
		imageUploader: { type: Function },
		texRenderer: { type: Function }
	},
	setup(e) {
		let t = e, n = nf(), r = Hd(), i = /* @__PURE__ */ I("loading"), a = /* @__PURE__ */ I(0), o = /* @__PURE__ */ I(1), s = /* @__PURE__ */ I(0), c = K(() => Hc(t)), l = /* @__PURE__ */ I(c.value.commentSorting), u = /* @__PURE__ */ I([]), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(null), p = K(() => Gc(c.value.dark)), m = K(() => c.value.locale);
		Nl(p, { id: "waline-darkmode" });
		let h = null, g = (e) => {
			let { serverURL: t, path: r, pageSize: d } = c.value, f = new AbortController();
			i.value = "loading", h?.(), Ao({
				serverURL: t,
				lang: c.value.lang,
				path: r,
				pageSize: d,
				sortBy: Nc[l.value],
				page: e,
				signal: f.signal,
				token: n.value.token
			}).then((t) => {
				i.value = "success", a.value = t.count, u.value.push(...t.data), o.value = e, s.value = t.totalPages;
			}).catch((e) => {
				e.name !== "AbortError" && (console.error(e.message), i.value = "error");
			}), h = f.abort.bind(f);
		}, _ = () => {
			g(o.value + 1);
		}, v = () => {
			a.value = 0, u.value = [], g(1);
		}, y = (e) => {
			l.value !== e && (l.value = e, v());
		}, b = (e) => {
			e && (f.value = null), d.value = e;
		}, x = (e) => {
			e && (d.value = null), f.value = e;
		}, S = (e) => {
			if (f.value) f.value.comment = e.comment, f.value.orig = e.orig, f.value.spoiler = e.spoiler, f.value.spoilerTitle = e.spoilerTitle, f.value.status = e.status, f.value = null;
			else if ("rid" in e) {
				let t = u.value.find(({ objectId: t }) => t === e.rid);
				if (!t) return;
				Array.isArray(t.children) || (t.children = []), t.children.push(e);
			} else u.value.unshift(e), a.value += 1;
		}, C = async ({ comment: e, status: t }) => {
			if (e.status === t) return;
			let { serverURL: r, lang: i } = c.value;
			await No({
				serverURL: r,
				lang: i,
				token: n.value.token,
				objectId: e.objectId,
				comment: { status: t }
			}), e.status = t;
		}, ee = async (e) => {
			if ("rid" in e) return;
			let { serverURL: t, lang: r } = c.value;
			await No({
				serverURL: t,
				lang: r,
				token: n.value.token,
				objectId: e.objectId,
				comment: { sticky: +!e.sticky }
			}), e.sticky = !e.sticky;
		}, te = async ({ objectId: e }) => {
			if (!confirm("Are you sure you want to delete this comment?")) return;
			let { serverURL: t, lang: r } = c.value;
			await Mo({
				serverURL: t,
				lang: r,
				token: n.value.token,
				objectId: e
			}), u.value.some((t, n) => t.objectId === e ? (u.value = u.value.filter((e, t) => t !== n), !0) : t.children.some((r, i) => r.objectId === e && (u.value[n].children = t.children.filter((e, t) => t !== i), !0)));
		}, ne = async (e) => {
			let { serverURL: t, lang: i } = c.value, { objectId: a } = e, o = r.value.includes(a);
			await No({
				serverURL: t,
				lang: i,
				objectId: a,
				token: n.value.token,
				comment: { like: !o }
			}), o ? r.value = r.value.filter((e) => e !== a) : (r.value = [...r.value, a], r.value.length > 50 && (r.value = r.value.slice(-50))), e.like = Math.max(0, (e.like || 0) + (o ? -1 : 1));
		};
		return qn(Fc, c), vr(async () => {
			ml(() => [t.serverURL, t.path], () => {
				v();
			});
			let e = new URLSearchParams(location.search).get("token");
			if (!e) return;
			let r = await fetch(`${c?.value.serverURL}/token`, { headers: { Authorization: `Bearer ${e}` } }).then((e) => e.json()).catch((e) => (console.error(e), {}));
			!r.errno && r?.data?.objectId && (n.value = {
				...r.data,
				token: e
			});
			let i = new URL(window.location.href);
			i.searchParams.delete("token"), history.replaceState(null, "", i.pathname + (i.searchParams.toString() ? `?${i.searchParams.toString()}` : "") + i.hash);
		}), br(() => {
			h?.();
		}), (e, t) => (V(), H("div", im, [
			W(Of),
			!d.value && !f.value ? (V(), ji(Ep, {
				key: 0,
				onLog: v,
				onSubmit: S
			})) : G("v-if", !0),
			U("div", am, [U("div", om, [a.value ? (V(), H("span", {
				key: 0,
				class: "wl-num",
				textContent: A(a.value)
			}, null, 8, sm)) : G("v-if", !0), zi(" " + A(m.value.comment), 1)]), U("ul", cm, [(V(!0), H(B, null, Er(L(Pc), (e) => (V(), H("li", {
				key: e,
				class: O([e === l.value ? "active" : ""]),
				onClick: (t) => y(e)
			}, A(m.value[e]), 11, lm))), 128))])]),
			U("div", um, [(V(!0), H(B, null, Er(u.value, (e) => (V(), ji(rm, {
				key: e.objectId,
				"root-id": e.objectId,
				comment: e,
				reply: d.value,
				edit: f.value,
				onLog: v,
				onReply: b,
				onEdit: x,
				onSubmit: S,
				onStatus: C,
				onDelete: te,
				onSticky: ee,
				onLike: ne
			}, null, 8, [
				"root-id",
				"comment",
				"reply",
				"edit"
			]))), 128))]),
			i.value === "error" ? (V(), H("div", dm, [U("button", {
				type: "button",
				class: "wl-btn",
				onClick: v,
				textContent: A(m.value.refresh)
			}, null, 8, fm)])) : i.value === "loading" ? (V(), H("div", pm, [W(L(gf), { size: 30 })])) : u.value.length ? o.value < s.value ? (V(), H(B, { key: 4 }, [G(" Load more button "), U("div", hm, [U("button", {
				type: "button",
				class: "wl-btn",
				onClick: _,
				textContent: A(m.value.more)
			}, null, 8, gm)])], 2112)) : G("v-if", !0) : (V(), H("div", {
				key: 3,
				class: "wl-empty",
				textContent: A(m.value.sofa)
			}, null, 8, mm)),
			u.value.length || i.value !== "loading" ? (V(), H("div", _m, [
				c.value.noRss ? G("v-if", !0) : (V(), H("div", vm, [U("a", {
					href: `${c.value.serverURL}/api/comment/rss?path=${encodeURIComponent(c.value.path)}`,
					target: "_blank",
					rel: "noopener noreferrer",
					alt: m.value.subPostComment
				}, [W(L(vf)), U("span", { textContent: A(m.value.subPostComment) }, null, 8, bm)], 8, ym), U("a", {
					href: `${c.value.serverURL}/api/comment/rss`,
					target: "_blank",
					rel: "noopener noreferrer",
					alt: m.value.subSiteComment
				}, [W(L(vf)), U("span", { textContent: A(m.value.subSiteComment) }, null, 8, Sm)], 8, xm)])),
				G(" Copyright Information "),
				c.value.noCopyright ? G("v-if", !0) : (V(), H("div", Cm, [
					t[0] ||= zi(" Powered by ", -1),
					t[1] ||= U("a", {
						href: "https://github.com/walinejs/waline",
						target: "_blank",
						rel: "noopener noreferrer"
					}, " Waline ", -1),
					zi(" v" + A(L(rf)), 1)
				]))
			])) : G("v-if", !0)
		]));
	}
}), Tm = (e, t) => {
	t.forEach((t, n) => {
		let r = e[n].time;
		typeof r == "number" && (t.textContent = r.toString());
	});
}, Em = ({ serverURL: e, path: t = window.location.pathname, selector: n = ".waline-pageview-count", update: r = !0, lang: i = navigator.language }) => {
	let a = new AbortController(), o = [...document.querySelectorAll(n)], s = (e) => {
		let n = Nd(e);
		return n != null && t !== n;
	}, c = async (n) => {
		try {
			Tm(await Lo({
				serverURL: zc(e),
				paths: n.map((e) => Nd(e) ?? t),
				lang: i,
				signal: a.signal
			}), n);
		} catch (e) {
			zl(e);
		}
	};
	if (r) {
		let n = o.filter((e) => !s(e)), r = o.filter((e) => s(e));
		Ro({
			serverURL: zc(e),
			path: t,
			lang: i
		}).then((e) => {
			Tm(e, n);
		}), r.length > 0 && c(r);
	} else c(o);
	return a.abort.bind(a);
}, Dm = ({ el: e = "#waline", path: t = window.location.pathname, comment: n = !1, pageview: r = !1, ...i }) => {
	let a = e ? Bl(e) : null;
	if (e && !a) throw Error("Option 'el' do not match any domElement!");
	if (!i.serverURL) throw Error("Option 'serverURL' is missing!");
	let o = /* @__PURE__ */ Vt({ ...i }), s = /* @__PURE__ */ Vt({
		comment: n,
		pageview: r,
		path: t
	}), c = () => {
		s.comment && Rd({
			serverURL: o.serverURL,
			path: s.path,
			...Uc(s.comment) ? { selector: s.comment } : {}
		});
	}, l = () => {
		s.pageview && Em({
			serverURL: o.serverURL,
			path: s.path,
			...Uc(s.pageview) ? { selector: s.pageview } : {}
		});
	}, u = null;
	a && (u = So(() => q(wm, {
		path: s.path,
		...o
	})), u.mount(a));
	let d = Zn(c), f = Zn(l);
	return {
		el: a,
		update: ({ comment: e, pageview: t, path: n = window.location.pathname, ...r } = {}) => {
			Object.entries(r).forEach(([e, t]) => {
				o[e] = t;
			}), s.path = n, e != null && (s.comment = e), t != null && (s.pageview = t);
		},
		destroy: () => {
			u?.unmount(), d(), f();
		}
	};
};
export { Dm as init };
