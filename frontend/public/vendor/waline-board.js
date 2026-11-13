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
}, ie = /-\w/g, w = re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), T = /\B([A-Z])/g, ae = re((e) => e.replace(T, "-$1").toLowerCase()), oe = re((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = re((e) => e ? `on${oe(e)}` : ""), E = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, D = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
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
	for (let i = 0; r && i < e.length; i++) r = Ce(e[i], t[i], n);
	return r;
}
function be(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ce(t, r[a], n)) {
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
		if (i && !a || !i && a || !Ce(e[r], t[r], n)) return !1;
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
function Ce(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = v(e), i = v(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = y(e), i = y(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
function we(e, t) {
	return e.findIndex((e) => Ce(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), k = (e) => _(e) ? e : e == null ? "" : f(e) || y(e) && (e.toString === x || !g(e.toString)) ? Te(e) ? k(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : v(t) ? De(t) : y(t) && !f(t) && !ee(t) ? String(t) : t, De = (e, t = "") => v(e) ? `Symbol(${e.description ?? t})` : e, A, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes || (A.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
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
function ke() {
	return A;
}
function Ae(e, t = !1) {
	A && A.cleanups.push(e);
}
var j, je = /* @__PURE__ */ new WeakSet(), Me = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, je.has(this) && (je.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ie(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ye(this), ze(this);
		let e = j, t = Ge;
		j = this, Ge = !0;
		try {
			return this.fn();
		} finally {
			Be(this), j = e, Ge = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ue(e);
			this.deps = this.depsTail = void 0, Ye(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? je.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ve(this) && this.run();
	}
	get dirty() {
		return Ve(this);
	}
}, Ne = 0, Pe, Fe;
function Ie(e, t = !1) {
	e.flags |= 8, t ? (e.next = Fe, Fe = e) : (e.next = Pe, Pe = e);
}
function Le() {
	Ne++;
}
function Re() {
	if (--Ne > 0) return;
	if (Fe) {
		let e = Fe;
		for (Fe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Pe;) {
		let t = Pe;
		for (Pe = void 0; t;) {
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
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Be(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ue(r), We(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (He(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function He(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xe) || (e.globalVersion = Xe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ve(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = Ge;
	j = e, Ge = !0;
	try {
		ze(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Ge = r, Be(e), e.flags &= -3;
	}
}
function Ue(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ue(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function We(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ge = !0, Ke = [];
function qe() {
	Ke.push(Ge), Ge = !1;
}
function Je() {
	let e = Ke.pop();
	Ge = e === void 0 || e;
}
function Ye(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Xe = 0, Ze = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !Ge || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Ze(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, $e(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Xe++, this.notify(e);
	}
	notify(e) {
		Le();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Re();
		}
	}
};
function $e(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) $e(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol("");
function M(e, t, n) {
	if (Ge && j) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function it(e, t, n, r, i, a) {
	let o = et.get(e);
	if (!o) {
		Xe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Le(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === rt || !v(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(rt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(tt)), p(e) && s(o.get(nt)));
				break;
			case "delete":
				i || (s(o.get(tt)), p(e) && s(o.get(nt)));
				break;
			case "set": p(e) && s(o.get(tt));
		}
	}
	Re();
}
function at(e, t) {
	let n = et.get(e);
	return n && n.get(t);
}
function ot(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e || (M(t, "iterate", rt), /* @__PURE__ */ Yt(e)) ? t : /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e) ? t.map((e) => $t(Qt(e))) : t.map($t) : t.map(Qt);
}
function st(e) {
	return M(e = /* @__PURE__ */ N(e), "iterate", rt), e;
}
function ct(e, t) {
	return /* @__PURE__ */ Jt(e) ? $t(/* @__PURE__ */ qt(e) ? Qt(t) : t) : Qt(t);
}
var lt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ut(this, Symbol.iterator, (e) => ct(this, e));
	},
	concat(...e) {
		return ot(this).concat(...e.map((e) => f(e) ? ot(e) : e));
	},
	entries() {
		return ut(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
	},
	every(e, t) {
		return pt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return pt(this, "filter", e, t, (e) => e.map((e) => ct(this, e)), arguments);
	},
	find(e, t) {
		return pt(this, "find", e, t, (e) => ct(this, e), arguments);
	},
	findIndex(e, t) {
		return pt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return pt(this, "findLast", e, t, (e) => ct(this, e), arguments);
	},
	findLastIndex(e, t) {
		return pt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return pt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ht(this, "includes", e);
	},
	indexOf(...e) {
		return ht(this, "indexOf", e);
	},
	join(e) {
		return ot(this).join(e);
	},
	lastIndexOf(...e) {
		return ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return pt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return gt(this, "pop");
	},
	push(...e) {
		return gt(this, "push", e);
	},
	reduce(e, ...t) {
		return mt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return mt(this, "reduceRight", e, t);
	},
	shift() {
		return gt(this, "shift");
	},
	some(e, t) {
		return pt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return gt(this, "splice", e);
	},
	toReversed() {
		return ot(this).toReversed();
	},
	toSorted(e) {
		return ot(this).toSorted(e);
	},
	toSpliced(...e) {
		return ot(this).toSpliced(...e);
	},
	unshift(...e) {
		return gt(this, "unshift", e);
	},
	values() {
		return ut(this, "values", (e) => ct(this, e));
	}
};
function ut(e, t, n) {
	let r = st(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Yt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => dt(a.next(), n), i !== ft[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => dt(a._next(), n);
	}
	return a;
}
function dt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var ft = Array.prototype;
function pt(e, t, n, r, i, a) {
	let o = st(e), s = o !== e && !/* @__PURE__ */ Yt(e), c = o[t];
	if (c !== ft[t]) {
		let t = c.apply(e, a);
		return s ? Qt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ct(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function mt(e, t, n, r) {
	let i = st(e), a = i !== e && !/* @__PURE__ */ Yt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ct(e, t)), n.call(this, t, ct(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ct(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	M(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Xt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	qe(), Le();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return Re(), Je(), r;
}
var _t = /* @__PURE__ */ t("__proto__,__v_isRef,__isVue"), vt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(v));
function yt(e) {
	v(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return M(t, "has", e), t.hasOwnProperty(e);
}
var bt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Bt : zt : i ? Rt : Lt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = lt[t])) return e;
			if (t === "hasOwnProperty") return yt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ P(e) ? e : n);
		if ((v(t) ? vt.has(t) : _t(t)) || (r || M(e, "get", t), i)) return o;
		if (/* @__PURE__ */ P(o)) {
			let e = a && te(t) ? o : o.value;
			return r && y(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return y(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ Ht(o) : o;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Jt(i);
			if (!/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ P(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && s && (o ? E(n, i) && it(e, "set", t, n, i) : it(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && it(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return v(t) && vt.has(t) || M(e, "has", t), n;
	}
	ownKeys(e) {
		return M(e, "iterate", f(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, St = class extends bt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new xt(!0), Et = /* @__PURE__ */ new St(!0), Dt = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? $t : Qt;
		return !t && M(a, "iterate", l ? nt : tt), c(Object.create(u), { next() {
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
function At(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function jt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (E(n, a) && M(i, "get", n), M(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? $t : Qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && M(/* @__PURE__ */ N(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (E(t, i) && M(r, "has", t), M(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? Dt : e ? $t : Qt;
			return !e && M(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: At("add"),
		set: At("set"),
		delete: At("delete"),
		clear: At("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = Ot(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ Yt(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), it(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Yt(n) || /* @__PURE__ */ Jt(n) || (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && it(r, "set", e, n, s) : it(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && it(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && it(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = kt(r, e, t);
	}), n;
}
function Mt(e, t) {
	let n = jt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var Nt = { get: /* @__PURE__ */ Mt(!1, !1) }, Pt = { get: /* @__PURE__ */ Mt(!1, !0) }, Ft = { get: /* @__PURE__ */ Mt(!0, !1) }, It = { get: /* @__PURE__ */ Mt(!0, !0) }, Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
function Vt(e) {
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
function Ht(e) {
	return /* @__PURE__ */ Jt(e) ? e : Kt(e, !1, Ct, Nt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Kt(e, !1, Tt, Pt, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Kt(e, !0, wt, Ft, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Kt(e, !0, Et, It, Bt);
}
function Kt(e, t, n, r, i) {
	if (!y(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Vt(C(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Zt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && D(e, "__v_skip", !0), e;
}
var Qt = (e) => y(e) ? /* @__PURE__ */ Ht(e) : e, $t = (e) => y(e) ? /* @__PURE__ */ Wt(e) : e;
// @__NO_SIDE_EFFECTS__
function P(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return tn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return tn(e, !0);
}
function tn(e, t) {
	return /* @__PURE__ */ P(e) ? e : new nn(e, t);
}
var nn = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Qt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Yt(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ N(e), E(e, t) && (this._rawValue = e, this._value = n ? e : Qt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ P(e) ? e.value : e;
}
function rn(e) {
	return g(e) ? e() : I(e);
}
var an = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function on(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, an);
}
var sn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Qe(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function cn(e) {
	return new sn(e);
}
var ln = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = v(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!f(e) || v(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Xt(i) || /* @__PURE__ */ Yt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ P(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ P(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return at(this._raw, this._key);
	}
}, un = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n) {
	return /* @__PURE__ */ P(e) ? e : g(e) ? new un(e) : y(e) && arguments.length > 1 ? fn(e, t, n) : /* @__PURE__ */ F(e);
}
function fn(e, t, n) {
	return new ln(e, t, n);
}
var pn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Ie(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return He(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function mn(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new pn(r, i, n);
}
var hn = {}, gn = /* @__PURE__ */ new WeakMap(), _n = void 0;
function vn(e, t = !1, n = _n) {
	if (n) {
		let t = gn.get(n);
		t || gn.set(n, t = []), t.push(e);
	}
}
function yn(e, t, r = n) {
	let { immediate: a, deep: o, once: s, scheduler: c, augmentJob: u, call: d } = r, p = (e) => o ? e : /* @__PURE__ */ Yt(e) || o === !1 || o === 0 ? bn(e, 1) : bn(e), m, h, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ P(e) ? (h = () => e.value, y = /* @__PURE__ */ Yt(e)) : /* @__PURE__ */ qt(e) ? (h = () => p(e), y = !0) : f(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ Yt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ P(e)) return e.value;
		if (/* @__PURE__ */ qt(e)) return p(e);
		if (g(e)) return d ? d(e, 2) : e();
	})) : h = g(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (_) {
			qe();
			try {
				_();
			} finally {
				Je();
			}
		}
		let t = _n;
		_n = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			_n = t;
		}
	} : i, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => bn(e(), t);
	}
	let x = ke(), S = () => {
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
	let C = b ? Array(e.length).fill(hn) : hn, ee = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => E(e, C[t])) : E(n, C))) {
					let e = _n;
					qe();
					try {
						_ && _(), _n = m;
						let e = [
							n,
							C === hn ? void 0 : b && C[0] === hn ? [] : C,
							v
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						_n = e, Je();
					}
				}
			} else m.run();
		}
	};
	return u && u(ee), m = new Me(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => vn(e, !1, m), _ = m.onStop = () => {
		let e = gn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			gn.delete(m);
		}
	}, t ? a ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function bn(e, t = Infinity, n) {
	if (t <= 0 || !y(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ P(e)) bn(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) bn(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		bn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) bn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && bn(e[r], t, n);
	}
	return e;
}
// node_modules/.pnpm/@vue+runtime-core@3.5.44/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function xn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Cn(e, t, n);
	}
}
function Sn(e, t, n, r) {
	if (g(e)) {
		let i = xn(e, t, n, r);
		return i && b(i) && i.catch((e) => {
			Cn(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Sn(e[a], t, n, r));
		return i;
	}
}
function Cn(e, t, r, i = !0) {
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
			qe(), xn(o, null, 10, [
				e,
				i,
				a
			]), Je();
			return;
		}
	}
	wn(e, r, a, i, s);
}
function wn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var L = [], Tn = -1, En = [], Dn = null, On = 0, kn = /* @__PURE__ */ Promise.resolve(), An = null;
function jn(e) {
	let t = An || kn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mn(e) {
	let t = Tn + 1, n = L.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = L[r], a = Bn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Nn(e) {
	if (!(e.flags & 1)) {
		let t = Bn(e), n = L[L.length - 1];
		!n || !(e.flags & 2) && t >= Bn(n) ? L.push(e) : L.splice(Mn(t), 0, e), e.flags |= 1, Pn();
	}
}
function Pn() {
	An ||= kn.then(Vn);
}
function Fn(e) {
	if (!f(e)) Dn && e.id === -1 ? Dn.splice(On + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) En.push(e[t]);
	Pn();
}
function In(e, t, n, r = Tn + 1) {
	for (; r < L.length; r++) {
		let n = L[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			L.splice(r, 1), r = e ? r - 1 : Tn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Ln(e, t, n = 0) {
	if (En.length) {
		let e = En, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < En.length; i++) {
				let a = En[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? En[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Bn(e) - Bn(t));
		if (En.length = r, Dn) {
			for (let e = 0; e < i.length; e++) Dn.push(i[e]);
			return;
		}
		for (Dn = i, On = 0; On < Dn.length; On++) {
			let e = Dn[On];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Dn = null, On = 0;
	}
}
var Rn = !1;
function zn(e, t) {
	if (Rn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(En);
	e(), Rn = !0;
	try {
		In(void 0, t), Ln(void 0, n, t);
	} finally {
		Rn = !1;
	}
}
var Bn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Vn(e) {
	try {
		for (Tn = 0; Tn < L.length; Tn++) {
			let e = L[Tn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Tn < L.length; Tn++) {
			let e = L[Tn];
			e && (e.flags &= -2);
		}
		Tn = -1, L.length = 0, Ln(e), An = null, (L.length || En.length) && Vn(e);
	}
}
var Hn = null, Un = null;
function Wn(e) {
	let t = Hn;
	return Hn = e, Un = e && e.type.__scopeId || null, t;
}
function Gn(e, t = Hn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ai(-1);
		let i = Wn(t), a = Ei.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ei.length; e > a; e--) Oi();
			Wn(i), r._d && Ai(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Kn(e, t) {
	if (Hn === null) return e;
	let r = la(Hn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = n] = t[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && bn(o), i.push({
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
function qn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (qe(), Sn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Je());
	}
}
function Jn(e, t) {
	if (G) {
		let n = G.provides, r = G.parent && G.parent.provides;
		r === n && (n = G.provides = Object.create(r)), n[e] = t;
	}
}
function Yn(e, t, n = !1) {
	let r = Xi();
	if (r || Fr) {
		let i = Fr ? Fr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
var Xn = /* @__PURE__ */ Symbol.for("v-scx"), Zn = () => Yn(Xn);
function Qn(e, t) {
	return er(e, null, t);
}
function $n(e, t, n) {
	return er(e, t, n);
}
function er(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r, u = c({}, r), d = t && a || !t && s !== "post", f;
	if (na) {
		if (s === "sync") {
			let e = Zn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = G;
	u.call = (e, t, n) => Sn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, R(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Nn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = yn(e, t, u);
	return na && (f ? f.push(h) : d && h()), h;
}
var tr = /* @__PURE__ */ Symbol("_vte"), nr = (e) => e.__isTeleport, rr = /* @__PURE__ */ Symbol("_leaveCb");
function ir(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== wi) {
			t = n;
			break;
		}
	}
	return t;
}
function ar(e) {
	if (!gr(e)) return nr(e.type) && e.children ? ir(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function or(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		or(nr(n.type) && ar(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === z && f(e.children)) {
		let n = Vr(e.children, !1);
		n && or(n, t);
	}
}
function sr(e) {
	if (e.component) return sr(e.component.subTree);
	if (e.type === z) {
		let t = f(e.children) && Vr(e.children, !1);
		return t ? sr(t) : void 0;
	}
	if (e.type !== wi) return e;
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function lr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ur(e) {
	let t = Xi(), r = /* @__PURE__ */ en(null);
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
function dr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var fr = /* @__PURE__ */ new WeakMap();
function pr(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => pr(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (hr(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && pr(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? la(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e, m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, v = u.setupState, y = /* @__PURE__ */ N(v), b = v === n ? a : (e) => !dr(h, e) && d(y, e), x = (e, t) => !(t && dr(h, t));
	if (m != null && m !== p) {
		if (mr(t), _(m)) h[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ P(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (g(p)) xn(p, u, 12, [c, h]);
	else {
		let t = _(p), n = /* @__PURE__ */ P(p);
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
					i(), fr.delete(e);
				};
				t.id = -1, fr.set(e, t), R(t, r);
			} else mr(e), i();
		}
	}
}
function mr(e) {
	let t = fr.get(e);
	t && (t.flags |= 8, fr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var hr = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function _r(e, t, n = G, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = $i(n), a = Sn(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var vr = (e) => (t, n = G) => {
	na && e !== "sp" || _r(e, (...e) => t(...e), n);
}, yr = vr("m"), br = vr("bum"), xr = vr("um"), Sr = "components";
function Cr(e, t) {
	return Tr(Sr, e, !0, t) || e;
}
var wr = /* @__PURE__ */ Symbol.for("v-ndc");
function Tr(e, t, n = !0, r = !1) {
	let i = Hn || G;
	if (i) {
		let n = i.type;
		if (e === Sr) {
			let e = ua(n, !1);
			if (e && (e === t || e === w(t) || e === oe(w(t)))) return n;
		}
		let a = Er(i[e] || n[e], t) || Er(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Er(e, t) {
	return e && (e[t] || e[w(t)] || e[oe(w(t))]);
}
function Dr(e, t, n, r) {
	let i, a = n && n[r], o = f(e);
	if (o || _(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Yt(e), s = /* @__PURE__ */ Jt(e), e = st(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? $t(Qt(e[n])) : Qt(e[n]) : e[n], n, void 0, a && a[n]);
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
var Or = (e) => e ? ta(e) ? la(e) : Or(e.parent) : null, kr = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Or(e.parent),
	$root: (e) => Or(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Nn(e.update);
	},
	$nextTick: (e) => e.n ||= jn.bind(e.proxy),
	$watch: (e) => i
}), Ar = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), jr = {
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
			else if (Ar(i, t)) return s[t] = 1, i[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else s[t] = 0;
		}
		let u = kr[t], f, p;
		if (u) return t === "$attrs" && M(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Ar(i, t) ? (i[t] = n, !0) : d(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || Ar(t, s) || d(a, s) || d(r, s) || d(kr, s) || d(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Mr() {
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
var Nr = 0;
function Pr(e, t) {
	return function(n, r = null) {
		g(n) || (n = c({}, n)), r != null && !y(r) && (r = null);
		let i = Mr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: Nr++,
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
					let u = l._ceVNode || U(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, la(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Sn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Fr;
				Fr = l;
				try {
					return e();
				} finally {
					Fr = t;
				}
			}
		};
		return l;
	};
}
var Fr = null, Ir = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function Lr(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n, a = r, o = t.startsWith("update:"), s = o && Ir(i, t.slice(7));
	s && (s.trim && (a = r.map((e) => _(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = se(t)] || i[c = se(w(t))];
	!l && o && (l = i[c = se(ae(t))]), l && Sn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Sn(u, e, 6, a);
	}
}
function Rr(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), y(e) && r.set(e, o), o) : (y(e) && r.set(e, null), null);
}
function zr(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, ae(t)) || d(e, t));
}
function Br(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Wn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Vi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Vi(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? c : Hr(c);
		}
	} catch (t) {
		Ei.length = 0, Cn(t, e, 1), v = U(wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(s) && (y = Ur(y, a)), b = zi(b, y, !1, !0));
	}
	return n.dirs && (b = zi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && or(nr(b.type) && ar(b) || b, n.transition), v = b, Wn(_), v;
}
function Vr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ni(r)) {
			if (r.type !== wi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Hr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ur = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Wr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Gr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Kr(o, r, n) && !zr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Gr(r, o, l) : !!o;
	return !1;
}
function Gr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || Kr(t, e, a) && !zr(n, a)) return !0;
	}
	return !1;
}
function Kr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && y(r) && y(i) ? !Ce(r, i) : r !== i;
}
function qr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Jr = {}, Yr = () => Object.create(Jr), Xr = (e) => Object.getPrototypeOf(e) === Jr;
function Zr(e, t, n, r = !1) {
	let i = {}, a = Yr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), $r(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? i : a, e.attrs = a;
}
function Qr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (zr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = w(o);
						i[t] = ei(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		$r(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = ae(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ei(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && it(e.attrs, "set", "");
}
function $r(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (ne(n)) continue;
		let l = t[n], u;
		a && d(a, u = w(n)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : zr(e.emitsOptions, n) || n in i && l === i[n] || (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ N(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = ei(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function ei(e, t, n, r, i, a) {
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
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
function ti(e, t, i = !1) {
	let a = t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [];
	if (!s) return y(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		let t = w(s[e]);
		ni(t) && (l[t] = n);
	}
	else if (s) for (let e in s) {
		let t = w(e);
		if (ni(t)) {
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
function ni(e) {
	return e[0] !== "$" && !ne(e);
}
var ri = (e) => e === "_" || e === "_ctx" || e === "$stable", ii = (e) => f(e) ? e.map(Vi) : [Vi(e)], ai = (e, t, n) => {
	if (t._n) return t;
	let r = Gn((...e) => ii(t(...e)), n);
	return r._c = !1, r;
}, oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ri(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = ai(n, i, r);
		else if (i != null) {
			let e = ii(i);
			t[n] = () => e;
		}
	}
}, si = (e, t) => {
	let n = ii(t);
	e.slots.default = () => n;
}, ci = (e, t, n) => {
	for (let r in t) (n || !ri(r)) && (e[r] = t[r]);
}, li = (e, t, n) => {
	let r = e.slots = Yr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ci(r, t, n), n && D(r, "_", e, !0)) : oi(t, r);
	} else t && si(e, t);
}, ui = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? r && e === 1 ? o = !1 : ci(a, t, r) : (o = !t.$stable, oi(t, a)), s = t;
	} else t && (si(e, t), s = { default: 1 });
	if (o) for (let e in a) !ri(e) && s[e] == null && delete a[e];
}, R = Si;
function di(e) {
	return fi(e);
}
function fi(e, t) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: _ } = e, v = (e, t, n, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Pi(e, t) && (i = be(e), ge(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === r && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ci:
				y(e, t, n, i);
				break;
			case wi:
				b(e, t, n, i);
				break;
			case Ti:
				e ?? x(t, n, i, s);
				break;
			case z:
				oe(e, t, n, i, a, o, s, c, l);
				break;
			default: f & 1 ? ee(e, t, n, i, a, o, s, c, l) : f & 6 ? se(e, t, n, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, i, a, o, s, c, l, Se);
		}
		d != null && a ? pr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && pr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ie(e.children, d, null, r, i, pi(e, a), s, u), _ && qn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Gi(f, r, e);
		}
		_ && qn(e, null, r, "beforeMount");
		let v = hi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && R(() => {
			try {
				f && Gi(f, r, e), v && g.enter(d), _ && qn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || xi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ie = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Hi(e[l]) : Vi(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, w = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && mi(r, !1), (g = h.onVnodeBeforeUpdate) && Gi(g, r, t, e), f && qn(t, e, r, "beforeUpdate"), r && mi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, r, i, pi(t, a), o) : s || fe(e, t, l, null, r, i, pi(t, a), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ae(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && R(() => {
			g && Gi(g, r, t, e), f && qn(t, e, r, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || bi(c), d = u && (c.type === z || !Pi(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ae = (e, t, r, i, a) => {
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ie(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && gi(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : E(t, n, r, i, a, o, c) : D(e, t, c);
	}, E = (e, t, n, r, i, a, o) => {
		let s = e.component = Yi(e, r, i);
		if (gr(e) && (s.ctx.renderer = Se), ra(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o, a), !e.el) {
				let r = s.subTree = U(wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Wr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, ue(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = vi(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							R(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				mi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Gi(d, s, t, c), mi(e, !0);
				let f = Br(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && qr(e, f.el), r && R(r, i), (d = t.props && t.props.onVnodeUpdated) && R(() => Gi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = hr(t);
				if (mi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Gi(o, d, t), mi(e, !0), s && we) {
					let t = () => {
						e.subTree = Br(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Br(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && R(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					R(() => Gi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && hr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && R(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Me(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Nn(u), mi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Qr(e, t.props, r, n), ui(e, t.children, n), qe(), In(e), Je();
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
			let r = t[p] = l ? Hi(t[p]) : Vi(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : ie(t, n, i, a, o, s, c, l, f);
	}, me = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Hi(t[u]) : Vi(t[u]);
			if (Pi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Hi(t[p]) : Vi(t[p]);
			if (Pi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Hi(t[u]) : Vi(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Hi(t[u]) : Vi(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Pi(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? _i(C) : r;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || bi(f) : i;
				C[u] === 0 ? v(null, r, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? he(r, n, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) he(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Se);
		else if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Ti) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[rr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), R(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[rr];
					a._isLeaving && a[rr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (qe(), pr(s, null, n, e, !0), Je()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !hr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Gi(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && qn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && ye(c, t, n), r && O(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && R(() => {
			_ && Gi(_, t, e), h && qn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, O = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === z;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === Ti) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? sr(e) : e, c = () => {
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
		yi(c), yi(l), r && ce(r), i.stop(), a ? (a.flags |= 8, ge(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, ge(o, e, t, n)), s && R(s, t), R(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[tr];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		zn(() => {
			e == null ? t._vnode && ge(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Ji());
	}, Se = {
		p: v,
		um: ge,
		m: he,
		r: O,
		mt: E,
		mc: ie,
		pc: fe,
		pbc: T,
		n: be,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Pr(xe, Ce)
	};
}
function pi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Hi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && gi(t, a)), a.type === Ci && (a.patchFlag === -1 && (a = i[e] = Hi(a)), a.el = t.el), a.type === wi && !a.el && (a.el = t.el);
	}
}
function _i(e) {
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
function vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : vi(t);
}
function yi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function bi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? bi(t.subTree) : null;
}
var xi = (e) => e.__isSuspense;
function Si(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Fn(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), Ci = /* @__PURE__ */ Symbol.for("v-txt"), wi = /* @__PURE__ */ Symbol.for("v-cmt"), Ti = /* @__PURE__ */ Symbol.for("v-stc"), Ei = [], Di = null;
function B(e = !1) {
	Ei.push(Di = e ? null : []);
}
function Oi() {
	Ei.pop(), Di = Ei[Ei.length - 1] || null;
}
var ki = 1;
function Ai(e, t = !1) {
	ki += e, e < 0 && Di && t && (Di.hasOnce = !0);
}
function ji(e) {
	return e.dynamicChildren = ki > 0 ? Di || r : null, Oi(), ki > 0 && Di && Di.push(e), e;
}
function V(e, t, n, r, i, a) {
	return ji(H(e, t, n, r, i, a, !0));
}
function Mi(e, t, n, r, i) {
	return ji(U(e, t, n, r, i, !0));
}
function Ni(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Pi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Fi = ({ key: e }) => e ?? null, Ii = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : _(e) || /* @__PURE__ */ P(e) || g(e) ? {
	i: Hn,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Fi(t),
		ref: t && Ii(t),
		scopeId: Un,
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
		ctx: Hn
	};
	return s ? (Ui(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= _(n) ? 8 : 16), ki > 0 && !o && Di && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Di.push(c), c;
}
var U = Li;
function Li(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== wr || (e = wi), Ni(e)) {
		let r = zi(e, t, !0);
		return n && Ui(r, n), ki > 0 && !a && Di && (r.shapeFlag & 6 ? Di[Di.indexOf(e)] = r : Di.push(r)), r.patchFlag = -2, r;
	}
	if (da(e) && (e = e.__vccOpts), t) {
		t = Ri(t);
		let { class: e, style: n } = t;
		e && !_(e) && (t.class = O(e)), y(n) && (/* @__PURE__ */ Xt(n) && !f(n) && (n = c({}, n)), t.style = fe(n));
	}
	let o = _(e) ? 1 : xi(e) ? 128 : nr(e) ? 64 : y(e) ? 4 : g(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function Ri(e) {
	return e ? /* @__PURE__ */ Xt(e) || Xr(e) ? c({}, e) : e : null;
}
function zi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Wi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Fi(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(Ii(t)) : [a, Ii(t)] : Ii(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && zi(e.ssContent),
		ssFallback: e.ssFallback && zi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && or(u, c.clone(u)), u;
}
function Bi(e = " ", t = 0) {
	return U(Ci, null, e, t);
}
function W(e = "", t = !1) {
	return t ? (B(), Mi(wi, null, e)) : U(wi, null, e);
}
function Vi(e) {
	return e == null || typeof e == "boolean" ? U(wi) : f(e) ? U(z, null, e.slice()) : Ni(e) ? Hi(e) : U(Ci, null, String(e));
}
function Hi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : zi(e);
}
function Ui(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ui(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Xr(t) ? t._ctx = Hn : r === 3 && Hn && (Hn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			Ui(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Hn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Bi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Wi(...e) {
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
function Gi(e, t, n, r = null) {
	Sn(e, t, 7, [n, r]);
}
var Ki = Mr(), qi = 0;
function Ji() {
	return qi;
}
function Yi(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ki, o = {
		uid: qi++,
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
		scope: new Oe(!0),
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
		propsOptions: ti(i, a),
		emitsOptions: Rr(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Lr.bind(null, o), e.ce && e.ce(o), o;
}
var G = null, Xi = () => G || Hn, Zi, Qi;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Zi = t("__VUE_INSTANCE_SETTERS__", (e) => G = e), Qi = t("__VUE_SSR_SETTERS__", (e) => na = e);
}
var $i = (e) => {
	let t = G;
	return Zi(e), e.scope.on(), () => {
		e.scope.off(), Zi(t);
	};
}, ea = () => {
	G && G.scope.off(), Zi(null);
};
function ta(e) {
	return e.vnode.shapeFlag & 4;
}
var na = !1;
function ra(e, t = !1, n = !1) {
	t && Qi(t);
	let { props: r, children: i } = e.vnode, a = ta(e);
	Zr(e, r, a, t), li(e, i, n || t);
	let o = a ? ia(e, t) : void 0;
	return t && Qi(!1), o;
}
function ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jr);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? ca(e) : null, i = $i(e), a = xn(r, e, 0, [e.props, n]), o = b(a);
		if (Je(), i(), (o || e.sp) && !hr(e) && lr(e), o) {
			if (a.then(ea, ea), t) return a.then((n) => {
				Qi(!0);
				try {
					aa(e, n, t);
				} finally {
					Qi(!1);
				}
			}).catch((t) => {
				Cn(t, e, 0);
			});
			e.asyncDep = a;
		} else aa(e, a, t);
	} else oa(e, t);
}
function aa(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : y(t) && (e.setupState = on(t)), oa(e, n);
}
function oa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || i;
}
var sa = { get(e, t) {
	return M(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in kr) return kr[n](e);
		},
		has(e, t) {
			return t in e || t in kr;
		}
	}) : e.proxy;
}
function ua(e, t = !0) {
	return g(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function da(e) {
	return g(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ mn(e, t, na);
function q(e, t, n) {
	try {
		Ai(-1);
		let r = arguments.length;
		return r === 2 ? y(t) && !f(t) ? Ni(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ni(n) && (n = [n]), U(e, t, n));
	} finally {
		Ai(1);
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
		Aa.test(n) ? e.setProperty(ae(r), n.replace(Aa, ""), "important") : e[r] = n;
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
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
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
				e && Sn(e, t, 5, a);
			}
		} else Sn(r, t, 5, [e]);
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
	return t && (e = e.trim()), n && (e = le(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
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
				let e = we(t, n), a = e !== -1;
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
	if (f(t)) i = we(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ce(t, ho(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var lo = {
	created(e, { value: t }, n) {
		e.checked = Ce(t, n.props.value), e[ro] = eo(n), za(e, "change", () => {
			e[ro](mo(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[ro] = eo(r), t !== n && (e.checked = Ce(t, r.props.value));
	}
}, uo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, za(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(mo(e)) : mo(e)), r = e.multiple, i = r ? m(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? f(i) ? t.slice() : t : i];
			try {
				e[ro](i);
			} finally {
				jn(() => {
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
	if (!n || f(e)) return Ce(e, t);
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
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : we(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (Ce(mo(a), t)) {
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
	return bo ||= di(yo);
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
}, $s = /* @__PURE__ */ new Set([
	"nick",
	"mail",
	"link"
]), ec = (e) => e.filter((e) => $s.has(e)), tc = ["//unpkg.com/@waline/emojis@1.1.0/weibo"], nc = [
	"//unpkg.com/@waline/emojis/tieba/tieba_agree.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_look_down.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_awkward.png",
	"//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"
], rc = (e) => new Promise((t, n) => {
	if (e.size > 128e3) {
		n(/* @__PURE__ */ Error("File too large! File size limit 128KB"));
		return;
	}
	let r = new FileReader();
	r.readAsDataURL(e), r.addEventListener("load", () => {
		t(r.result);
	}), r.addEventListener("error", n);
}), ic = (e, t) => Qs(t, e), ac = (e) => {
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
}, oc = /* @__PURE__ */ RegExp("([\\u4E00-\\u9FFF\\u3400-\\u4DBF\\uF900-\\uFAFF\\u3040-\\u309F\\uAC00-\\uD7AF\\u0400-\\u04FF]+|\\w+|<)|((?:(?:^|\\s)\\/\\/(.+?)$)|(?:\\/\\*([\\S\\s]*?)\\*\\/))", "gmiu"), sc = [
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
], cc = {}, lc = (e) => {
	let t = 0;
	return e.replaceAll(oc, (e, n, r) => {
		if (r) return `<span style="color: slategray">${r}</span>`;
		if (n === "<") return "&lt;";
		let i;
		cc[n] ? i = cc[n] : (i = sc[t], cc[n] = i);
		let a = `<span style="color: #${i}">${n}</span>`;
		return t = ++t % sc.length, a;
	});
}, uc = /* @__PURE__ */ "nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies".split("."), dc = (e) => Object.fromEntries(e.map((e, t) => [uc[t], e])), fc = dc(/* @__PURE__ */ "Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare".split(",")), pc = dc(/* @__PURE__ */ "NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!\n Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments".split(",")), mc = dc(/* @__PURE__ */ "Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!\n El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios".split(",")), hc = dc(/* @__PURE__ */ "Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !\n Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires".split(",")), gc = dc(/* @__PURE__ */ "Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!\n Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda".split(",")), _c = dc(/* @__PURE__ */ "Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!\n Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti".split(",")), vc = dc(/* @__PURE__ */ "ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する".split(",")), yc = dc(/* @__PURE__ */ "닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!\n현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독".split(",")), bc = dc(/* @__PURE__ */ "Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários".split("(")), xc = dc(/* @__PURE__ */ "Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев".split("(")), Sc = dc(/* @__PURE__ */ "Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!\n Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn".split(",")), Cc = dc(/* @__PURE__ */ "昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！\n当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复".split(",")), wc = dc(/* @__PURE__ */ "暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！\n目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆".split(",")), Tc = "en-US", Ec = {
	zh: Cc,
	"zh-cn": Cc,
	"zh-tw": wc,
	en: pc,
	"en-us": pc,
	fr: hc,
	"fr-fr": hc,
	id: gc,
	"id-id": gc,
	it: _c,
	"it-it": _c,
	jp: vc,
	"jp-jp": vc,
	ko: yc,
	"ko-kr": yc,
	"pt-br": bc,
	ru: xc,
	"ru-ru": xc,
	vi: Sc,
	"vi-vn": Sc,
	de: fc,
	es: mc,
	"es-mx": mc
}, Dc = (e) => e.trim().toLowerCase().replaceAll("_", "-"), Oc = {
	ja: "jp",
	"ja-jp": "jp",
	pt: "pt-br",
	"pt-pt": "pt-br",
	"zh-hans": "zh-cn",
	"zh-hant": "zh-tw",
	"zh-hk": "zh-tw"
}, kc = (e) => {
	let t = Dc(e);
	if (t in Ec) return t;
	let n = Oc[t];
	if (n) return n;
	let [r] = t.split("-");
	return r in Ec ? r : Oc[r] ?? "en-us";
}, Ac = (e) => Ec[kc(e)] ?? Ec["en-us"], jc = (e) => {
	let t = Dc(e);
	if (t in Ec) return e.trim();
	let n = kc(t);
	return n === "en-us" ? Tc : n;
}, Mc = {
	latest: "insertedAt_desc",
	oldest: "insertedAt_asc",
	hottest: "like_desc"
}, Nc = Object.keys(Mc), Pc = Symbol("waline-config"), Fc = (e) => {
	try {
		return decodeURI(e);
	} catch {
		return e;
	}
}, Ic = (e = "") => e.replace(/\/$/u, ""), Lc = (e) => /^(?:https?:)?\/\//u.test(e), Rc = (e) => {
	let t = Ic(e);
	return Lc(t) ? t : `https://${t}`;
}, zc = (e) => Array.isArray(e) ? e : typeof e == "number" && e > 0 && [0, e], Bc = (e, t) => e == null || e === !0 ? t : e === !1 ? null : e, Vc = ({ serverURL: e, path: t = location.pathname, lang: n = typeof navigator > "u" ? "en-US" : navigator.language, locale: r, meta: i = [
	"nick",
	"mail",
	"link"
], requiredMeta: a = [], dark: o = !1, pageSize: s = 10, wordLimit: c, noCopyright: l = !1, noRss: u = !1, login: d = "enable", recaptchaV3Key: f = "", turnstileKey: p = "", commentSorting: m = "latest", emoji: h = tc, imageUploader: g, highlighter: _, texRenderer: v, search: y, reaction: b, ...x }) => ({
	serverURL: Rc(e),
	path: Fc(t),
	lang: jc(n),
	locale: {
		...Ac(jc(n)),
		...typeof r == "object" ? r : {}
	},
	wordLimit: zc(c),
	meta: ec(i),
	requiredMeta: ec(a),
	dark: o,
	pageSize: s,
	commentSorting: m,
	login: d,
	noCopyright: l,
	noRss: u,
	recaptchaV3Key: f,
	turnstileKey: p,
	...x,
	reaction: b === !0 ? nc : b || null,
	imageUploader: Bc(g, rc),
	highlighter: Bc(_, lc),
	texRenderer: Bc(v, ic),
	emoji: Bc(h, tc),
	search: Bc(y, ac(n))
}), Hc = (e) => typeof e == "string", Uc = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}", Wc = (e) => Hc(e) ? e === "auto" ? `@media(prefers-color-scheme:dark){body${Uc}}` : `${e}${Uc}` : e === !0 ? `:root${Uc}` : "", Gc = (e, t) => {
	let n = e.toString();
	for (; n.length < t;) n = `0${n}`;
	return n;
}, Kc = (e) => {
	let t = Gc(e.getDate(), 2), n = Gc(e.getMonth() + 1, 2);
	return `${Gc(e.getFullYear(), 2)}-${n}-${t}`;
}, qc = (e, t, n) => {
	if (!e) return "";
	let r = Hc(e) ? new Date(e.includes(" ") ? e.replaceAll("-", "/") : e) : e, i = t.getTime() - r.getTime(), a = Math.floor(i / 864e5);
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
	return a < 0 ? n.now : a < 8 ? `${a} ${n.days}` : Kc(r);
}, Jc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u, Yc = (e) => Jc.test(e);
// node_modules/.pnpm/@vueuse+shared@15.0.0_vue@3.5.44_typescript@6.0.2_/node_modules/@vueuse/shared/dist/index.js
function Xc(e, t) {
	return ke() ? (Ae(e, t), !0) : !1;
}
var Zc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Qc = Object.prototype.toString, $c = (e) => Qc.call(e) === "[object Object]", el = () => {};
function tl(...e) {
	if (e.length !== 1) return /* @__PURE__ */ dn(...e);
	let t = e[0];
	return typeof t == "function" ? /* @__PURE__ */ Wt(cn(() => ({
		get: t,
		set: el
	}))) : /* @__PURE__ */ F(t);
}
function nl(e, t) {
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
var rl = (e) => e();
function il(e, t = {}) {
	let n, r, i = el, a = el, o = /* @__PURE__ */ en(!1), s = (e) => {
		clearTimeout(e), i(), i = el;
	}, c;
	return Object.assign((l) => {
		let u = rn(e), d = rn(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = el;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = el, a = el, e(c());
			}
		},
		isPending: /* @__PURE__ */ Gt(o)
	});
}
function al(e = rl, t = {}) {
	let { initialState: n = "active" } = t, r = tl(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: /* @__PURE__ */ Gt(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function ol(e) {
	return Array.isArray(e) ? e : [e];
}
function sl(e) {
	return e || Xi();
}
function cl(e, t = 200, n = {}) {
	return nl(il(t, n), e);
}
function ll(e, t, n = {}) {
	let { eventFilter: r = rl, ...i } = n;
	return $n(e, nl(r, t), i);
}
function ul(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = al(r, { initialState: i });
	return {
		stop: ll(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function dl(e, t = !0, n) {
	sl(n) ? yr(e, n) : t ? e() : jn(e);
}
function fl(e, t) {
	sl(t) && xr(e, t);
}
function pl(e, t, n) {
	return $n(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/.pnpm/@vueuse+core@15.0.0_vue@3.5.44_typescript@6.0.2_/node_modules/@vueuse/core/dist/index.js
var ml = Zc ? window : void 0, hl = Zc ? window.document : void 0;
Zc && window.navigator, Zc && window.location;
function gl(e) {
	let t = rn(e);
	return t?.$el ?? t;
}
function _l(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = K(() => {
		let t = ol(rn(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return pl(() => [
		n.value?.map((e) => gl(e)) ?? [ml].filter((e) => e != null),
		ol(rn(n.value ? e[1] : e[0])),
		ol(I(n.value ? e[2] : e[1])),
		rn(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = $c(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function vl(e, t = {}) {
	let { immediate: n = !0, fpsLimit: r = null, window: i = ml, once: a = !1 } = t, o = /* @__PURE__ */ en(!1), s = K(() => {
		let e = rn(r);
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
	return n && d(), Xc(f), {
		isActive: /* @__PURE__ */ Gt(o),
		pause: f,
		resume: d
	};
}
var yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bl = "__vueuse_ssr_handlers__", xl = /* #__PURE__ */ Sl();
function Sl() {
	return bl in yl || (yl[bl] = yl[bl] || {}), yl[bl];
}
function Cl(e, t) {
	return xl[e] || t;
}
function wl(e) {
	return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Tl = {
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
}, El = "vueuse-storage";
function Dl(e, t, n, r = {}) {
	let { flush: i = "pre", deep: a = !0, listenToStorageChanges: o = !0, writeDefaults: s = !0, mergeDefaults: c = !1, shallow: l, window: u = ml, eventFilter: d, onError: f = (e) => {
		console.error(e);
	}, initOnMounted: p } = r, m = (l ? en : F)(typeof t == "function" ? t() : t), h = K(() => rn(e));
	if (!n) try {
		n = Cl("getDefaultStorage", () => ml?.localStorage)();
	} catch (e) {
		f(e);
	}
	if (!n) return m;
	let g = rn(t), _ = wl(g), v = r.serializer ?? Tl[_], { pause: y, resume: b } = ul(m, (e) => C(e), {
		flush: i,
		deep: a,
		eventFilter: d
	});
	$n(h, () => te(), { flush: i });
	let x = !1;
	u && o && (n instanceof Storage ? _l(u, "storage", (e) => {
		(!p || x) && te(e);
	}, { passive: !0 }) : _l(u, El, (e) => {
		(!p || x) && ne(e);
	})), p ? dl(() => {
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
			u.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", r) : new CustomEvent(El, { detail: r }));
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
					e ? jn(b) : b();
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
function Ol(e = {}) {
	let { controls: t = !1, scheduler: n = vl } = e, r = /* @__PURE__ */ en(/* @__PURE__ */ new Date()), i = n(() => r.value = /* @__PURE__ */ new Date());
	return t ? {
		now: r,
		...i
	} : r;
}
function kl(e, t = el, n = {}) {
	let { immediate: r = !0, manual: i = !1, type: a = "text/javascript", async: o = !0, crossOrigin: s, referrerPolicy: c, noModule: l, defer: u, document: d = hl, attrs: f = {}, nonce: p = void 0 } = n, m = /* @__PURE__ */ en(null), h = null, g = (n) => new Promise((r, i) => {
		let h = (e) => (m.value = e, r(e), e);
		if (!d) {
			r(!1);
			return;
		}
		let g = !1, _ = d.querySelector(`script[src="${rn(e)}"]`);
		_ ? _.hasAttribute("data-loaded") && h(_) : (_ = d.createElement("script"), _.type = a, _.async = o, _.src = rn(e), u && (_.defer = u), s && (_.crossOrigin = s), l && (_.noModule = l), c && (_.referrerPolicy = c), p && (_.nonce = p), Object.entries(f).forEach(([e, t]) => _?.setAttribute(e, t)), g = !0);
		let v = { passive: !0 };
		_l(_, "error", (e) => i(e), v), _l(_, "abort", (e) => i(e), v), _l(_, "load", () => {
			_.setAttribute("data-loaded", "true"), t(_), h(_);
		}, v), g && (_ = d.head.appendChild(_)), n || h(_);
	}), _ = (e = !0) => (h ||= g(e), h), v = () => {
		if (!d) return;
		h = null, m.value &&= null;
		let t = d.querySelector(`script[src="${rn(e)}"]`);
		t && d.head.removeChild(t);
	};
	return r && !i && dl(_), i || fl(v), {
		scriptTag: m,
		load: _,
		unload: v
	};
}
var Al = 0, jl = /* @__PURE__ */ new WeakMap();
function Ml(e, t = {}) {
	let n = /* @__PURE__ */ en(!1), { document: r = hl, immediate: i = !0, manual: a = !1, id: o = `vueuse_styletag_${++Al}` } = t, s = /* @__PURE__ */ en(e), c = () => {}, l = () => {
		if (!r) return;
		let e = r.getElementById(o) || r.createElement("style");
		e.isConnected || (e.id = o, t.nonce && (e.nonce = t.nonce), t.media && (e.media = t.media), r.head.appendChild(e)), n.value ||= (jl.set(e, (jl.get(e) ?? 0) + 1), c = $n(s, (t) => {
			e.textContent = t;
		}, { immediate: !0 }), !0);
	}, u = () => {
		if (!r || !n.value) return;
		c();
		let e = r.getElementById(o);
		if (e) {
			let t = (jl.get(e) ?? 1) - 1;
			t <= 0 ? (jl.delete(e), r.head.removeChild(e)) : jl.set(e, t);
		}
		n.value = !1;
	};
	return i && !a && dl(l), a || Xc(u), {
		id: o,
		css: s,
		unload: u,
		load: l,
		isLoaded: /* @__PURE__ */ Gt(n)
	};
}
// src/utils/emoji.ts
var Nl = Dl("WALINE_EMOJI", {}), Pl = (e) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e), Fl = (e) => {
	let t = Pl(e);
	if (t) {
		let t = Nl.value[e];
		if (t) return Promise.resolve(t);
	}
	return fetch(`${e}/info.json`).then((e) => e.json()).then((n) => {
		let r = {
			folder: e,
			...n
		};
		return t && (Nl.value[e] = r), r;
	});
}, Il = (e, t = "", n = "", r = "") => `${t ? `${t}/` : ""}${n}${e}${r ? `.${r}` : ""}`, Ll = (e) => Promise.all(e ? e.map((e) => Hc(e) ? Fl(Ic(e)) : Promise.resolve(e)) : []).then((e) => {
	let t = {
		tabs: [],
		map: {}
	};
	return e.forEach((e) => {
		let { name: n, folder: r, icon: i, prefix: a = "", type: o, items: s } = e;
		t.tabs.push({
			name: n,
			icon: Il(i, r, a, o),
			items: s.map((e) => {
				let n = `${a}${e}`;
				return t.map[n] = Il(e, r, a, o), n;
			})
		});
	}), t;
}), Rl = (e) => {
	e.name !== "AbortError" && console.error(e.message);
}, zl = (e) => e instanceof HTMLElement ? e : Hc(e) ? document.querySelector(e) : null, Bl = (e) => {
	let t = [...e].find((e) => e.type.includes("image"));
	return t ? t.getAsFile() : null;
};
// node_modules/.pnpm/marked@18.1.2/node_modules/marked/lib/marked.esm.js
function Vl() {
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
var Hl = Vl();
function Ul(e) {
	Hl = e;
}
var Wl = { exec: () => null };
function Gl(e) {
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
var Kl = ((e = "") => {
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
	nextBulletRegex: Gl((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: Gl((e) => RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
	fencesBeginRegex: Gl((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: Gl((e) => RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),
	pedanticHeadingBeginRegex: Gl((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: Gl((e) => RegExp(`^ {0,${e}}(?:</?(?:${su})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")),
	blockquoteBeginRegex: Gl((e) => RegExp(`^ {0,${e}}>`))
}, ql = /^(?:[ \t]*(?:\n|$))+/, Jl = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Yl = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Xl = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zl = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ql = / {0,3}(?:[*+-]|\d{1,9}[.)])/, $l = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, eu = Z($l).replace(/bull/g, Ql).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), tu = Z($l).replace(/bull/g, Ql).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), nu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, ru = /^[^\n]+/, iu = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, au = Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", iu).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ou = Z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, Ql).getRegex(), su = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", cu = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, lu = Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", cu).replace("tag", su).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), uu = (e) => Z(nu).replace("hr", Xl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", e).replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", su).getRegex(), du = uu(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), fu = uu(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), pu = {
	blockquote: Z(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", fu).getRegex(),
	code: Jl,
	def: au,
	fences: Yl,
	heading: Zl,
	hr: Xl,
	html: lu,
	lheading: eu,
	list: ou,
	newline: ql,
	paragraph: du,
	table: Wl,
	text: ru
}, mu = Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Xl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", su).getRegex(), hu = {
	...pu,
	lheading: tu,
	table: mu,
	paragraph: Z(nu).replace("hr", Xl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", mu).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", su).getRegex()
}, gu = {
	...pu,
	html: Z("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", cu).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: Wl,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: Z(nu).replace("hr", Xl).replace("heading", " *#{1,6} *[^\n]").replace("lheading", eu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, _u = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, vu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, yu = /^( {2,}|\\)\n(?!\s*$)[ \t]*/, bu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, xu = /[\p{P}\p{S}]/u, Su = /[\s\p{P}\p{S}]/u, Cu = /[^\s\p{P}\p{S}]/u, wu = Z(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Su).getRegex(), Tu = /[\p{Pi}\p{Ps}"']/u, Eu = /(?!~)[\p{P}\p{S}]/u, Du = /(?!~)[\s\p{P}\p{S}]/u, Ou = /(?:[^\s\p{P}\p{S}]|~)/u, ku = Z(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Kl ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Au = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, ju = Z(Au, "u").replace(/punct/g, xu).getRegex(), Mu = Z(Au, "u").replace(/punct/g, Eu).getRegex(), Nu = Z(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, Tu).replace(/punct/g, xu).getRegex(), Pu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Fu = Z(Pu, "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Su).replace(/punct/g, xu).getRegex(), Iu = Z(Pu, "gu").replace(/notPunctSpace/g, Ou).replace(/punctSpace/g, Du).replace(/punct/g, Eu).getRegex(), Lu = Z("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Su).replace(/punct/g, xu).getRegex(), Ru = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Su).replace(/punct/g, xu).getRegex(), zu = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Su).replace(/punct/g, xu).getRegex(), Bu = Z(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, xu).getRegex(), Vu = Z("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Cu).replace(/punctSpace/g, Su).replace(/punct/g, xu).getRegex(), Hu = Z(/\\(punct)/, "gu").replace(/punct/g, xu).getRegex(), Uu = Z(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, xu).getRegex(), Wu = Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Gu = Z(cu).replace("(?:-->|$)", "-->").getRegex(), Ku = Z("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Gu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), qu = /\[(?:\\[\s\S]|[^\[\]\\])*\]/, Ju = Z(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", qu).getRegex(), Yu = Z(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", Ju).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Xu = Z(/^!?\[(label)\]\[(ref)\]/).replace("label", Ju).replace("ref", iu).getRegex(), Zu = Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", iu).getRegex(), Qu = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/, $u = Z(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", qu).getRegex(), ed = Z("reflink|nolink(?!\\()", "g").replace("reflink", Z(/^!?\[(label)\]\[(ref)\]/).replace("label", $u).replace("ref", Qu).getRegex()).replace("nolink", Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", Qu).getRegex()).getRegex(), td = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, nd = Z(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), rd = {
	_backpedal: Wl,
	anyPunctuation: Hu,
	anyPunctuationOutsideCode: Uu,
	autolink: Wu,
	blockSkip: ku,
	br: yu,
	code: vu,
	del: Wl,
	delLDelim: Wl,
	delRDelim: Wl,
	emStrongLDelim: ju,
	emStrongRDelimAst: Fu,
	emStrongRDelimUnd: Ru,
	escape: _u,
	link: Yu,
	nolink: Zu,
	punctuation: wu,
	reflink: Xu,
	reflinkSearch: ed,
	tag: Ku,
	text: bu,
	url: Wl
}, id = {
	...rd,
	emStrongLDelim: Nu,
	emStrongRDelimAst: Lu,
	emStrongRDelimUnd: zu,
	link: Z(/^!?\[(label)\]\((.*?)\)/).replace("label", Ju).getRegex(),
	reflink: Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ju).getRegex()
}, ad = {
	...rd,
	emStrongRDelimAst: Iu,
	emStrongLDelim: Mu,
	delLDelim: Bu,
	delRDelim: Vu,
	url: Z(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", nd).replace("protocol", td).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: Z(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", td).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex()
}, od = {
	...ad,
	br: Z(yu).replace("{2,}", "*").getRegex(),
	text: Z(ad.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, sd = {
	normal: pu,
	gfm: hu,
	pedantic: gu
}, cd = {
	normal: rd,
	gfm: ad,
	breaks: od,
	pedantic: id
}, ld = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ud = (e) => ld[e];
function dd(e, t) {
	if (t) {
		if (Q.escapeTest.test(e)) return e.replace(Q.escapeReplace, ud);
	} else if (Q.escapeTestNoEncode.test(e)) return e.replace(Q.escapeReplaceNoEncode, ud);
	return e;
}
function fd(e) {
	return Q.numericCharacterReference.test(e) ? e.replace(Q.numericCharacterReferenceOrAmpersand, (e, t, n) => {
		if (t === void 0 && n === void 0) return "&amp;";
		let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
		return r === 0 || r > 1114111 || r >= 55296 && r <= 57343 ? "�" : r === 38 ? "&amp;" : String.fromCodePoint(r);
	}) : e;
}
function pd(e) {
	try {
		e = encodeURI(e).replace(Q.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function md(e, t) {
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
function hd(e, t, n) {
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
function gd(e) {
	let t = e.split("\n"), n = t.length - 1;
	for (; n >= 0 && Q.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join("\n");
}
function _d(e) {
	return e.trim().toLowerCase().toUpperCase().toLowerCase();
}
function vd(e, t) {
	if (e.indexOf(t[0]) === -1 && e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function yd(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function bd(e, t, n, r, i) {
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
function xd(e, t, n) {
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
function Sd(e, t, n, r) {
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
var Cd = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || Hl;
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
			let e = this.options.pedantic ? t[0] : gd(t[0]);
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
			let e = t[0], n = xd(e, t[3] || "", this.rules);
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
				let t = hd(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceTabChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: hd(t[0], "\n"),
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
			raw: hd(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = hd(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o = 0;
				for (; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteMarkerWhitespace, (e, t, n) => t + yd(n, t.length)).replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
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
				let u = t[2].split("\n", 1)[0], d = t[1].length, f = this.options.pedantic ? yd(u, d) : u.replace(this.rules.other.leadingSpaceTab, (e) => yd(e, d)), p = e.split("\n", 1)[0], m = !f.trim(), h = 0;
				if (this.options.pedantic ? (h = 2, a = f.trimStart()) : m ? h = d + 1 : (h = f.search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, a = f.slice(h), h += d), m && this.rules.other.blankLine.test(p) && (e = e.substring(p.length + 1), i = !0), !i) {
					let t = this.rules.other.nextBulletRegex(h), n = this.rules.other.hrRegex(h), r = this.rules.other.fencesBeginRegex(h), i = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(h) : this.rules.other.headingBeginRegex(h), o = this.rules.other.htmlBeginRegex(h), s = this.rules.other.blockquoteBeginRegex(h);
					for (; e;) {
						let c = e.split("\n", 1)[0], l;
						if (p = c, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), l = p) : l = p.replace(this.rules.other.leadingSpaceTab, (e) => yd(e)), r.test(p) || i.test(p) || o.test(p) || s.test(p) || t.test(p) || n.test(p)) break;
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
			let e = gd(t[0]);
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
			if (!this.rules.other.startAngleBracket.test(t[2]) && vd(t[2], "()") !== -1) return;
			let e = _d(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: hd(t[0], "\n"),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = md(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: hd(t[0], "\n"),
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
			for (let e of i) a.rows.push(md(e, a.header.length).map((e, t) => ({
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
				raw: hd(t[0], "\n"),
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
			if (!this.options.pedantic && Sd(e, t[1], n, this.rules)) return;
			let r = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
				if (!this.rules.other.endAngleBracket.test(r)) return;
				let e = hd(r.slice(0, -1), "\\");
				if ((r.length - e.length) % 2 == 0) return;
			} else {
				let e = vd(t[2], "()");
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
			return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (i = this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i.slice(1) : i.slice(1, -1)), bd(t, {
				href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
				title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let r = n[0].charAt(0) === "!" ? 2 : 1;
			if (!this.options.pedantic && Sd(e, n[1], r, this.rules)) return;
			let i = t[_d((n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "))];
			if (!i) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return bd(n, i, n[0], this.lexer, this.rules);
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
				text: e ? t[0] : fd(t[0]),
				escaped: e
			};
		}
	}
}, wd = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Hl, this.options.tokenizer = this.options.tokenizer || new Cd(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			linkEmitted: !1,
			linkParenPossible: !0,
			top: !0
		};
		let t = {
			other: Q,
			block: sd.normal,
			inline: cd.normal
		};
		this.options.pedantic ? (t.block = sd.pedantic, t.inline = cd.pedantic) : this.options.gfm && (t.block = sd.gfm, t.inline = this.options.breaks ? cd.breaks : cd.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: sd,
			inline: cd
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
			if (e.charAt(0) !== "!" && Object.hasOwn(this.tokens.links, _d(e.slice(n + 1, -1))) && !(n > 1 && this.linkInText(e.slice(1, n - 1)))) return !0;
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
		let n = e.includes("*") || e.includes("_") || e.includes("~") || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== Cd.prototype.emStrong || this.tokenizer.del !== Cd.prototype.del ? this.#t(e) : e, r = !1, i = "", a = 1 / 0;
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
				if (!Object.hasOwn(this.tokens.links, _d(t.slice(r + 1, -1)))) return t;
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
}, Td = class {
	options;
	parser;
	constructor(e) {
		this.options = e || Hl;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(Q.notSpaceStart)?.[0], i = e ? e.replace(Q.endingNewline, "") + "\n" : "";
		return r ? "<pre><code class=\"language-" + dd(r) + "\">" + (n ? i : dd(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : dd(i, !0)) + "</code></pre>\n";
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
		return `<code>${dd(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, text: n, tokens: r, autolink: i }) {
		let a = i ? dd(n, !0) : this.parser.parseInline(r), o = pd(e);
		if (o === null) return a;
		e = dd(o, i);
		let s = "<a href=\"" + e + "\"";
		return t && (s += " title=\"" + dd(t) + "\""), s += ">" + a + "</a>", s;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = pd(e);
		if (i === null) return dd(n);
		e = i;
		let a = `<img src="${dd(e)}" alt="${dd(n)}"`;
		return t && (a += ` title="${dd(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : dd(e.text);
	}
}, Ed = class {
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
}, Dd = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || Hl, this.options.renderer = this.options.renderer || new Td(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ed(), this.textRenderer.parser = this;
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
}, Od = class {
	options;
	block;
	constructor(e) {
		this.options = e || Hl;
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
		return e ? wd.lex : wd.lexInline;
	}
	provideParser(e = this.block) {
		return e ? Dd.parse : Dd.parseInline;
	}
};
function kd(e, t) {
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e.push(t[n]);
	else e.push(t);
}
var Ad = class {
	defaults = Vl();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Dd;
	Renderer = Td;
	TextRenderer = Ed;
	Lexer = wd;
	Tokenizer = Cd;
	Hooks = Od;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (kd(n, t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) kd(n, this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) kd(n, this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				kd(n, this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(1 / 0);
					kd(n, this.walkTokens(i, t));
				}) : e.tokens && kd(n, this.walkTokens(e.tokens, t));
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
				let t = this.defaults.renderer || new Td(this.defaults);
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
				let t = this.defaults.tokenizer || new Cd(this.defaults);
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
				let t = this.defaults.hooks || new Od();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Od.passThroughHooks.has(n) ? (e) => {
						if (t.options.async && Od.passThroughHooksRespectAsync.has(n)) return (async () => {
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
					return n.push(r.call(this, e)), t && kd(n, t.call(this, e)), n;
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
		return wd.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Dd.parse(e, t ?? this.defaults);
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
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? wd.lex : wd.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? Dd.parse : Dd.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? wd.lex : wd.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? Dd.parse : Dd.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + dd(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}, jd = new Ad();
function $(e, t) {
	return jd.parse(e, t);
}
$.options = $.setOptions = function(e) {
	return jd.setOptions(e), $.defaults = jd.defaults, Ul($.defaults), $;
}, $.getDefaults = Vl, $.defaults = Hl;
function Md(...e) {
	return jd.use(...e), $.defaults = jd.defaults, Ul($.defaults), $;
}
$.use = Md, $.walkTokens = function(e, t) {
	return jd.walkTokens(e, t);
}, $.parseInline = jd.parseInline, $.Parser = Dd, $.parser = Dd.parse, $.Renderer = Td, $.TextRenderer = Ed, $.Lexer = wd, $.lexer = wd.lex, $.Tokenizer = Cd, $.Hooks = Od, $.parse = $, $.options, $.setOptions, $.walkTokens, $.parseInline, Dd.parse, wd.lex;
// node_modules/.pnpm/marked-highlight@2.2.4_marked@18.1.2/node_modules/marked-highlight/src/index.js
function Nd(e) {
	if (typeof e == "function" && (e = { highlight: e }), !e || typeof e.highlight != "function") throw Error("Must provide highlight function");
	return typeof e.langPrefix != "string" && (e.langPrefix = "language-"), typeof e.emptyLangClass != "string" && (e.emptyLangClass = ""), {
		async: !!e.async,
		walkTokens(t) {
			if (t.type !== "code") return;
			let n = Pd(t.lang);
			if (e.async) return Promise.resolve(e.highlight(t.text, n, t.lang || "")).then(Fd(t));
			let r = e.highlight(t.text, n, t.lang || "");
			if (r instanceof Promise) throw Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
			Fd(t)(r);
		},
		useNewRenderer: !0,
		renderer: { code(t, n, r) {
			// istanbul ignore next
			typeof t == "object" && (r = t.escaped, n = t.lang, t = t.text);
			let i = Pd(n), a = i ? e.langPrefix + Hd(i) : e.emptyLangClass, o = a ? ` class="${a}"` : "";
			return t = t.replace(/\n$/, ""), `<pre><code${o}>${r ? t : Hd(t, !0)}\n</code></pre>`;
		} }
	};
}
function Pd(e) {
	return (e || "").match(/\S*/)[0];
}
function Fd(e) {
	return (t) => {
		typeof t == "string" && t !== e.text && (e.escaped = !0, e.text = t);
	};
}
var Id = /[&<>"']/, Ld = new RegExp(Id.source, "g"), Rd = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, zd = new RegExp(Rd.source, "g"), Bd = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, Vd = (e) => Bd[e];
function Hd(e, t) {
	if (t) {
		if (Id.test(e)) return e.replace(Ld, Vd);
	} else if (Rd.test(e)) return e.replace(zd, Vd);
	return e;
}
// src/utils/markedMathExtension.ts
var Ud = /\$.*?\$/u, Wd = /^\$(.*?)\$/u, Gd = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/u, Kd = (e) => [{
	name: "blockMath",
	level: "block",
	tokenizer(t) {
		let n = Gd.exec(t);
		if (n != null) return {
			type: "html",
			raw: n[0],
			text: e(!0, n[1])
		};
	}
}, {
	name: "inlineMath",
	level: "inline",
	start(e) {
		let t = e.search(Ud);
		return t === -1 ? e.length : t;
	},
	tokenizer(t) {
		let n = Wd.exec(t);
		if (n != null) return {
			type: "html",
			raw: n[0],
			text: e(!1, n[1])
		};
	}
}], qd = (e = "", t = {}) => e.replaceAll(/:(.+?):/gu, (e, n) => t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e), Jd = (e, { emojiMap: t, highlighter: n, texRenderer: r }) => {
	let i = new Ad();
	if (i.setOptions({ breaks: !0 }), n && i.use(Nd({ highlight: n })), r) {
		let e = Kd(r);
		i.use({ extensions: e });
	}
	return i.parse(qd(e, t));
}, Yd = (e) => {
	let { path: t } = e.dataset;
	return t?.length ? t : null;
}, Xd = (e) => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu), Zd = (e) => e.match(/[\u4E00-\u9FD5]/gu), Qd = (e) => (Xd(e)?.reduce((e, t) => e + ([
	"",
	",",
	"."
].includes(t.trim()) ? 0 : t.trim().split(/\s+/u).length), 0) ?? 0) + (Zd(e)?.length ?? 0), $d = async () => {
	let { userAgentData: e } = navigator, t = navigator.userAgent;
	if (!e) return t;
	let { platformVersion: n } = await e.getHighEntropyValues(["platformVersion"]);
	if (!n) return t;
	if (e?.platform === "Windows" && Math.trunc(Number(n.split(".")[0])) >= 13 && (t = t.replace("Windows NT 10.0", "Windows NT 11.0")), e?.platform === "macOS") {
		let e = n.split("."), r = Math.trunc(Number(e?.[0])), i = Math.trunc(Number(e?.[1]));
		(r > 10 || r === 10 && i >= 15) && (t = t.replace("Mac OS X 10_15_7", `Mac OS X ${n.replaceAll(".", "_")}`));
	}
	return t;
}, ef = ({ serverURL: e, path: t = window.location.pathname, selector: n = ".waline-comment-count", lang: r = navigator.language }) => {
	let i = new AbortController(), a = document.querySelectorAll(n);
	return a.length > 0 && Po({
		serverURL: Rc(e),
		paths: Array.from(a, (e) => Fc(Yd(e) ?? t)),
		lang: r,
		signal: i.signal
	}).then((e) => {
		a.forEach((t, n) => {
			t.textContent = e[n].toString();
		});
	}).catch(Rl), i.abort.bind(i);
}, tf = () => Dl("WALINE_USER_META", {
	nick: "",
	mail: "",
	link: ""
}), nf = () => Dl("WALINE_COMMENT_BOX_EDITOR", ""), rf = Dl("WALINE_LIKE", []), af = () => rf, of = Dl("WALINE_REACTION", {}), sf = () => of, cf = /* @__PURE__ */ e(((e, t, n) => {
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
})), lf = /* @__PURE__ */ e(((e, t, n) => {
	var r = n && n.__assign || function() {
		return r = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, r.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstance = e.load = void 0;
	var i = cf(), a;
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
})), uf = (/* @__PURE__ */ e(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReCaptchaInstance = e.getInstance = e.load = void 0;
	var t = lf();
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
	var n = cf();
	Object.defineProperty(e, "ReCaptchaInstance", {
		enumerable: !0,
		get: function() {
			return n.ReCaptchaInstance;
		}
	});
})))(), df = {}, ff = (e) => {
	let t = df[e] ??= (0, uf.load)(e, {
		useRecaptchaNet: !0,
		autoHideBadge: !0
	});
	return { execute: (e) => t.then((t) => t.execute(e)) };
}, pf = "https://challenges.cloudflare.com/turnstile/v0/api.js", mf = 1e4, hf = null, gf = async () => {
	if (typeof window > "u") throw TypeError("Turnstile requires a browser environment");
	if (!window.turnstile) {
		if (!hf) {
			let { load: e } = kl(pf, void 0, {
				async: !1,
				immediate: !1
			});
			hf = (async () => {
				try {
					return await e();
				} catch (e) {
					throw hf = null, e;
				}
			})();
		}
		await hf;
	}
}, _f = (e) => ({ execute: async (t) => {
	await gf();
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
		}, mf);
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
} }), vf = Dl("WALINE_USER", {}), yf = () => vf, bf = "3.16.2", xf = ({ size: e }) => q("svg", {
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
})]), Sf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
	fill: "red"
})), Cf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
	fill: "currentColor"
})), wf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
	fill: "currentColor"
}), q("path", {
	d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
	fill: "currentColor"
})]), Tf = ({ active: e = !1 }) => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"}`,
	fill: e ? "red" : "currentColor"
})]), Ef = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, [q("path", {
	d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
	fill: "currentColor"
}), q("path", {
	d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
	fill: "currentColor"
})]), Df = () => q("svg", {
	width: "16",
	height: "16",
	ariaHidden: "true"
}, q("path", {
	d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
	fill: "currentColor"
})), Of = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
	fill: "currentColor"
})), kf = () => q("svg", {
	viewBox: "0 0 1024 1024",
	width: "24",
	height: "24"
}, q("path", {
	d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",
	fill: "currentColor"
})), Af = () => q("svg", {
	class: "verified-icon",
	viewBox: "0 0 1024 1024",
	width: "14",
	height: "14"
}, q("path", {
	d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
	fill: "#27ae60"
})), jf = () => q("svg", {
	class: "administrator-icon",
	viewBox: "0 0 1024 1024",
	width: "14",
	height: "14"
}, [q("path", {
	d: "M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z",
	fill: "#f59831"
})]), Mf = ({ size: e = 100 }) => q("svg", {
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
}))), Nf = () => q("svg", {
	width: 24,
	height: 24,
	fill: "currentcolor",
	viewBox: "0 0 24 24"
}, [q("path", {
	style: "transform: translateY(0.5px)",
	d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"
}), q("path", { d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z" })]), Pf = () => q("svg", {
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
]))), Ff = () => q("svg", {
	fill: "currentColor",
	width: "24",
	height: "24",
	viewBox: "-3 0 19 19",
	class: "cf-icon-svg"
}, q("path", { d: "M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z" })), If = {
	key: 0,
	class: "wl-reaction"
}, Lf = ["textContent"], Rf = { class: "wl-reaction-list" }, zf = ["onClick"], Bf = { class: "wl-reaction-img" }, Vf = ["src", "alt"], Hf = ["textContent"], Uf = ["textContent"], Wf = /* @__PURE__ */ cr({
	__name: "ArticleReaction",
	setup(e) {
		let t = sf(), n = Yn(Pc), r = /* @__PURE__ */ F(-1), i = /* @__PURE__ */ F([]), a = K(() => n.value.locale), o = K(() => {
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
		return yr(() => {
			pl(() => [n.value.serverURL, n.value.path], () => l());
		}), xr(() => {
			c?.();
		}), (e, t) => s.value ? (B(), V("div", If, [H("div", {
			class: "wl-reaction-title",
			textContent: k(a.value.reactionTitle)
		}, null, 8, Lf), H("ul", Rf, [(B(!0), V(z, null, Dr(s.value, ({ active: e, icon: t, desc: n }, a) => (B(), V("li", {
			key: a,
			class: O(["wl-reaction-item", { active: e }]),
			onClick: (e) => u(a)
		}, [H("div", Bf, [H("img", {
			src: t,
			alt: n
		}, null, 8, Vf), r.value === a ? (B(), Mi(I(Mf), {
			key: 0,
			class: "wl-reaction-loading"
		})) : (B(), V("div", {
			key: 1,
			class: "wl-reaction-votes",
			textContent: k(i.value[a] || 0)
		}, null, 8, Hf))]), H("div", {
			class: "wl-reaction-text",
			textContent: k(n)
		}, null, 8, Uf)], 10, zf))), 128))])])) : W("v-if", !0);
	}
}), Gf = /* @__PURE__ */ new Map();
function Kf(e) {
	var t = Gf.get(e);
	t && t.destroy();
}
function qf(e) {
	var t = Gf.get(e);
	t && t.update();
}
var Jf = null;
typeof window > "u" ? ((Jf = function(e) {
	return e;
}).destroy = function(e) {
	return e;
}, Jf.update = function(e) {
	return e;
}) : ((Jf = function(e, t) {
	return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
		return function(e) {
			if (e && e.nodeName && e.nodeName === "TEXTAREA" && !Gf.has(e)) {
				var t, n = null, r = window.getComputedStyle(e), i = (t = e.value, function() {
					o({
						testForHeightReduction: t === "" || !e.value.startsWith(t),
						restoreTextAlign: null
					}), t = e.value;
				}), a = function(t) {
					e.removeEventListener("autosize:destroy", a), e.removeEventListener("autosize:update", s), e.removeEventListener("input", i), window.removeEventListener("resize", s), Object.keys(t).forEach(function(n) {
						return e.style[n] = t[n];
					}), Gf.delete(e);
				}.bind(e, {
					height: e.style.height,
					resize: e.style.resize,
					textAlign: e.style.textAlign,
					overflowY: e.style.overflowY,
					overflowX: e.style.overflowX,
					wordWrap: e.style.wordWrap
				});
				e.addEventListener("autosize:destroy", a), e.addEventListener("autosize:update", s), e.addEventListener("input", i), window.addEventListener("resize", s), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", Gf.set(e, {
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
	return e && Array.prototype.forEach.call(e.length ? e : [e], Kf), e;
}, Jf.update = function(e) {
	return e && Array.prototype.forEach.call(e.length ? e : [e], qf), e;
});
var Yf = Jf, Xf = ["data-index"], Zf = [
	"src",
	"title",
	"onClick"
], Qf = /* @__PURE__ */ cr({
	__name: "ImageWall",
	props: {
		items: { default: () => [] },
		columnWidth: { default: 300 },
		gap: { default: 0 }
	},
	emits: ["insert"],
	setup(e) {
		let t = null, n = ur("wall"), r = /* @__PURE__ */ F({}), i = /* @__PURE__ */ F([]), a = () => {
			let t = Math.floor((n.value.getBoundingClientRect().width + e.gap) / (e.columnWidth + e.gap));
			return t > 0 ? t : 1;
		}, o = (e) => Array.from({ length: e }, () => []), s = async (t) => {
			if (t >= e.items.length) return;
			await jn();
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
		return yr(() => {
			c(!0), t = new ResizeObserver(() => {
				c();
			}), t.observe(n.value), $n(() => [e.items], () => {
				r.value = {}, c(!0);
			}), $n(() => [e.columnWidth, e.gap], () => {
				c();
			});
		}), br(() => {
			t.unobserve(n.value);
		}), (t, a) => (B(), V("div", {
			ref_key: "wall",
			ref: n,
			class: "wl-gallery",
			style: fe({ gap: `${e.gap}px` })
		}, [(B(!0), V(z, null, Dr(i.value, (n, i) => (B(), V("div", {
			key: i,
			class: "wl-gallery-column",
			"data-index": i,
			style: fe({ gap: `${e.gap}px` })
		}, [(B(!0), V(z, null, Dr(n, (n) => (B(), V(z, { key: n }, [
			W(" eslint-disable vue/no-static-inline-styles "),
			r.value[e.items[n].src] ? W("v-if", !0) : (B(), Mi(I(Mf), {
				key: 0,
				size: 36,
				style: { margin: "20px auto" }
			})),
			W(" eslint-enable vue/no-static-inline-styles "),
			H("img", {
				class: "wl-gallery-item",
				src: e.items[n].src,
				title: e.items[n].title,
				loading: "lazy",
				onLoad: l,
				onClick: (r) => t.$emit("insert", `![](${e.items[n].src})`)
			}, null, 40, Zf)
		], 64))), 128))], 12, Xf))), 128))], 4));
	}
}), $f = {
	key: 0,
	class: "wl-login-info"
}, ep = { class: "wl-avatar" }, tp = ["title"], np = ["title"], rp = ["src"], ip = ["title", "textContent"], ap = { class: "wl-panel" }, op = ["for", "textContent"], sp = [
	"id",
	"onUpdate:modelValue",
	"name",
	"type"
], cp = ["readonly", "placeholder"], lp = {
	key: 1,
	class: "wl-preview"
}, up = ["innerHTML"], dp = { class: "wl-footer" }, fp = {
	key: 0,
	class: "wl-actions"
}, pp = {
	href: "https://guides.github.com/features/mastering-markdown/",
	title: "Markdown Guide",
	"aria-label": "Markdown is supported",
	class: "wl-action",
	target: "_blank",
	rel: "noopener noreferrer"
}, mp = ["title"], hp = ["title"], gp = ["title", "aria-label"], _p = ["title"], vp = { class: "wl-info" }, yp = { class: "board-spoiler-option" }, bp = { key: 0 }, xp = { class: "wl-text-number" }, Sp = { key: 0 }, Cp = ["textContent"], wp = ["textContent"], Tp = ["disabled"], Ep = ["placeholder"], Dp = {
	key: 1,
	class: "wl-loading"
}, Op = [
	"title",
	"onClick",
	"onMouseenter"
], kp = ["src", "alt"], Ap = ["src"], jp = {
	key: 0,
	class: "wl-tabs"
}, Mp = ["onClick"], Np = [
	"src",
	"alt",
	"title"
], Pp = ["title"], Fp = /* @__PURE__ */ cr({
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
		let n = e, r = t, i = Yn(Pc), a = n.edit ? /* @__PURE__ */ F(n.edit.orig) : nf(), o = tf(), s = yf(), c = n.edit ? /* @__PURE__ */ F(!!n.edit.spoiler) : Dl("COPPERFIELD_DRAFT_SPOILER", !1), l = K(() => !!n.edit && s.value.type !== "administrator"), u = /* @__PURE__ */ F({}), d = ur("textarea"), f = ur("image-uploader"), p = ur("emoji-button"), m = ur("emoji-popup"), h = ur("gif-button"), g = ur("gif-popup"), _ = ur("gif-search"), v = /* @__PURE__ */ F({
			tabs: [],
			map: {}
		}), y = /* @__PURE__ */ F(0), b = /* @__PURE__ */ F(!1), x = /* @__PURE__ */ F(""), S = /* @__PURE__ */ F({}), C, ee = (e, t) => {
			clearTimeout(C), x.value = t;
			let n = e.currentTarget, r = m.value;
			if (n && r) {
				let e = n.getBoundingClientRect(), t = r.getBoundingClientRect();
				S.value = {
					left: `${e.left - t.left + e.width / 2}px`,
					top: `${e.top - t.top}px`,
					transform: "translate(-50%, -100%)"
				};
			}
		}, te = () => {
			C = setTimeout(() => {
				x.value = "";
			}, 50);
		}, ne = /* @__PURE__ */ F(!1), re = /* @__PURE__ */ F(!1), ie = /* @__PURE__ */ F(""), w = /* @__PURE__ */ F(0), T = /* @__PURE__ */ Ht({
			loading: !0,
			list: []
		}), ae = /* @__PURE__ */ F(0), oe = /* @__PURE__ */ F(!1), se = /* @__PURE__ */ F(""), E = /* @__PURE__ */ F(!1), ce = /* @__PURE__ */ F(!1), D = K(() => i.value.locale), le = K(() => !!s.value.token), ue = K(() => i.value.imageUploader != null), de = (e) => {
			let t = d.value, n = t.selectionStart, r = t.selectionEnd || 0, { scrollTop: i } = t;
			a.value = t.value.slice(0, n) + e + t.value.slice(r), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i;
		}, pe = async (e) => {
			let t = `![${i.value.locale.uploading} ${e.name}]()`;
			de(t), E.value = !0;
			try {
				let n = await i.value.imageUploader(e);
				a.value = a.value.replace(t, `\r\n![${e.name}](${n})`);
			} catch (e) {
				alert(e.message), a.value = a.value.replace(t, "");
			} finally {
				E.value = !1;
			}
		}, me = (e) => {
			if (e.dataTransfer?.items) {
				let t = Bl(e.dataTransfer.items);
				t && ue.value && (pe(t), e.preventDefault());
			}
		}, he = (e) => {
			if (e.clipboardData) {
				let t = Bl(e.clipboardData.items);
				t && ue.value && pe(t);
			}
		}, ge = () => {
			let e = f.value;
			e.files && ue.value && pe(e.files[0]).then(() => {
				e.value = "";
			});
		}, _e = ({ link: e, mail: t, nick: n }) => {
			o.value = {
				nick: n ?? "",
				mail: t ?? "",
				link: e ?? ""
			};
		}, ve = async () => {
			let { serverURL: e, lang: t, login: f, wordLimit: p, requiredMeta: m, recaptchaV3Key: h, turnstileKey: g } = i.value, _ = {
				comment: se.value,
				spoiler: c.value,
				nick: o.value.nick,
				mail: o.value.mail,
				link: o.value.link,
				url: i.value.path,
				ua: await $d()
			};
			if (!n.edit) {
				if (s.value.token) _.nick = s.value.display_name, _.mail = s.value.email, _.link = s.value.url;
				else {
					if (f === "force") return;
					if (m.includes("nick") && !_.nick) {
						u.value.nick.focus(), alert(D.value.nickError);
						return;
					}
					if (m.includes("mail") && !_.mail || _.mail && !Yc(_.mail)) {
						u.value.mail.focus(), alert(D.value.mailError);
						return;
					}
					_.nick ||= D.value.anonymous;
				}
				_e(_);
			}
			if (!_.comment) d.value.focus();
			else if (!oe.value) alert(D.value.wordHint.replace("$0", p[0].toString()).replace("$1", p[1].toString()).replace("$2", w.value.toString()));
			else {
				_.comment = qd(_.comment, v.value.map), n.replyId && n.rootId && (_.pid = n.replyId, _.rid = n.rootId, _.at = n.replyUser), E.value = !0;
				try {
					h && (_.recaptchaV3 = await ff(h).execute("social")), g && (_.turnstile = await _f(g).execute("social"));
					let i = {
						serverURL: e,
						lang: t,
						token: s.value.token,
						comment: _
					}, o = await (n.edit ? No({
						objectId: n.edit.objectId,
						...i,
						comment: l.value ? { spoiler: c.value } : _
					}) : jo(i));
					if (E.value = !1, o.errmsg) {
						alert(o.errmsg);
						return;
					}
					r("submit", o.data), c.value = !1, a.value = "", ie.value = "", await jn(), n.replyId && r("cancelReply"), n.edit?.objectId && r("cancelEdit");
				} catch (e) {
					E.value = !1, alert(e.message);
				}
			}
		}, ye = ({ key: e, ctrlKey: t, metaKey: n }) => {
			E.value || (t || n) && e === "Enter" && ve();
		}, be = (e) => {
			e.preventDefault();
			let { lang: t, serverURL: n } = i.value;
			Io({
				serverURL: n,
				lang: t
			}).then((e) => {
				s.value = e, _e({
					nick: e.display_name,
					mail: e.email,
					link: e.url
				}), r("log");
			});
		}, xe = () => {
			s.value = {}, r("log");
		}, Se = (e) => {
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
			!p.value?.contains(e.target) && !m.value?.contains(e.target) && (b.value = !1), !h.value?.contains(e.target) && !g.value?.contains(e.target) && (ne.value = !1);
		}, we = async (e) => {
			let { scrollTop: t, clientHeight: n, scrollHeight: r } = e.target, a = (n + t) / r, o = i.value.search, s = _.value?.value ?? "";
			if (!(a < .9 || T.loading || ce.value)) {
				T.loading = !0;
				try {
					let e = o.more && T.list.length > 0 ? await o.more(s, T.list.length) : await o.search(s);
					e.length > 0 ? T.list = [...T.list, ...e] : ce.value = !0;
				} catch {} finally {
					T.loading = !1;
				}
				setTimeout(() => {
					e.target.scrollTop = t;
				}, 50);
			}
		}, Te = cl((e) => {
			T.list = [], ce.value = !1, we(e);
		}, 300);
		return _l("click", Ce), _l("message", ({ data: e }) => {
			e?.type === "profile" && (s.value = {
				...s.value,
				...e.data
			}, _e({
				nick: s.value.display_name,
				mail: s.value.email,
				link: s.value.url
			}));
		}), pl([i, w], ([e, t]) => {
			let { wordLimit: n } = e;
			n ? t < n[0] && n[0] !== 0 ? ([ae.value] = n, oe.value = !1) : ([, ae.value] = n, oe.value = t <= n[1]) : (ae.value = 0, oe.value = !0);
		}), $n(ne, async (e) => {
			if (!e) return;
			let t = i.value.search;
			_.value && (_.value.value = ""), T.loading = !0, T.list = await (t.default?.() ?? t.search("")), T.loading = !1;
		}), yr(() => {
			n.edit?.objectId && (a.value = n.edit.orig), pl(() => a.value, (e) => {
				let { highlighter: t, texRenderer: n } = i.value;
				se.value = e, ie.value = Jd(e, {
					emojiMap: v.value.map,
					highlighter: t,
					texRenderer: n
				}), w.value = Qd(e), e ? Yf(d.value) : Yf.destroy(d.value);
			}), pl(() => i.value.emoji, async (e) => {
				v.value = await Ll(e);
			});
		}), (t, d) => (B(), V("div", {
			key: I(s).token,
			class: "wl-comment"
		}, [
			I(i).login !== "disable" && le.value && !e.edit?.objectId ? (B(), V("div", $f, [H("div", ep, [H("button", {
				type: "submit",
				class: "wl-logout-btn",
				title: D.value.logout,
				onClick: xe
			}, [U(I(xf), { size: 14 })], 8, tp), H("a", {
				href: "#",
				class: "wl-login-nick",
				"aria-label": "Profile",
				title: D.value.profile,
				onClick: Se
			}, [H("img", {
				src: I(s).avatar,
				alt: "avatar"
			}, null, 8, rp)], 8, np)]), H("a", {
				href: "#",
				class: "wl-login-nick",
				"aria-label": "Profile",
				title: D.value.profile,
				onClick: Se,
				textContent: k(I(s).display_name)
			}, null, 8, ip)])) : W("v-if", !0),
			H("div", ap, [
				I(i).login !== "force" && I(i).meta.length && !le.value ? (B(), V("div", {
					key: 0,
					class: O(["wl-header", `item${I(i).meta.length}`])
				}, [(B(!0), V(z, null, Dr(I(i).meta, (e) => (B(), V("div", {
					key: e,
					class: "wl-header-item"
				}, [H("label", {
					for: `wl-${e}`,
					textContent: k(D.value[e] + (I(i).requiredMeta.includes(e) || !I(i).requiredMeta.length ? "" : `(${D.value.optional})`))
				}, null, 8, op), Kn(H("input", {
					id: `wl-${e}`,
					ref_for: !0,
					ref: (t) => {
						t && (u.value[e] = t);
					},
					"onUpdate:modelValue": (t) => I(o)[e] = t,
					class: O(["wl-input", `wl-${e}`]),
					name: e,
					type: e === "mail" ? "email" : "text"
				}, null, 10, sp), [[go, I(o)[e]]])]))), 128))], 2)) : W("v-if", !0),
				Kn(H("textarea", {
					id: "wl-edit",
					ref: "textarea",
					"onUpdate:modelValue": d[0] ||= (e) => /* @__PURE__ */ P(a) ? a.value = e : null,
					readonly: l.value,
					class: "wl-editor",
					placeholder: e.replyUser ? `@${e.replyUser}` : D.value.placeholder,
					onKeydown: ye,
					onDrop: me,
					onPaste: he
				}, null, 40, cp), [[oo, I(a)]]),
				re.value ? (B(), V("div", lp, [
					d[8] ||= H("hr", null, null, -1),
					H("h4", null, k(D.value.preview) + ":", 1),
					W(" eslint-disable-next-line vue/no-v-html "),
					H("div", {
						class: "wl-content",
						innerHTML: ie.value
					}, null, 8, up)
				])) : W("v-if", !0),
				H("div", dp, [
					l.value ? W("v-if", !0) : (B(), V("div", fp, [
						H("a", pp, [U(I(Df))]),
						Kn(H("button", {
							ref: "emoji-button",
							type: "button",
							class: O(["wl-action", { active: b.value }]),
							title: D.value.emoji,
							onClick: d[1] ||= (e) => b.value = !b.value
						}, [U(I(Cf))], 10, mp), [[Ta, v.value.tabs.length]]),
						I(i).search ? (B(), V("button", {
							key: 0,
							ref: "gif-button",
							type: "button",
							class: O(["wl-action", { active: ne.value }]),
							title: D.value.gif,
							onClick: d[2] ||= (e) => ne.value = !ne.value
						}, [U(I(Nf))], 10, hp)) : W("v-if", !0),
						H("input", {
							id: "wl-image-upload",
							ref: "image-uploader",
							class: "upload",
							"aria-hidden": "true",
							type: "file",
							accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
							onChange: ge
						}, null, 544),
						ue.value ? (B(), V("label", {
							key: 1,
							for: "wl-image-upload",
							class: "wl-action",
							title: D.value.uploadImage,
							"aria-label": D.value.uploadImage
						}, [U(I(wf))], 8, gp)) : W("v-if", !0),
						H("button", {
							type: "button",
							class: O(["wl-action", { active: re.value }]),
							title: D.value.preview,
							onClick: d[3] ||= (e) => re.value = !re.value
						}, [U(I(Ef))], 10, _p)
					])),
					H("div", vp, [
						d[11] ||= H("div", { class: "wl-captcha-container" }, null, -1),
						H("label", yp, [Kn(H("input", {
							"onUpdate:modelValue": d[4] ||= (e) => /* @__PURE__ */ P(c) ? c.value = e : null,
							type: "checkbox"
						}, null, 512), [[so, I(c)]]), d[9] ||= Bi(" 含剧透（文字和图片） ", -1)]),
						l.value ? (B(), V("span", bp, "仅修改剧透标记")) : W("v-if", !0),
						H("div", xp, [
							Bi(k(w.value) + " ", 1),
							I(i).wordLimit ? (B(), V("span", Sp, [d[10] ||= Bi(" \xA0/\xA0 ", -1), H("span", {
								class: O({ illegal: !oe.value }),
								textContent: k(ae.value)
							}, null, 10, Cp)])) : W("v-if", !0),
							Bi(" \xA0" + k(D.value.word), 1)
						]),
						I(i).login !== "disable" && !le.value ? (B(), V("button", {
							key: 1,
							type: "button",
							class: "wl-btn",
							onClick: be,
							textContent: k(D.value.login)
						}, null, 8, wp)) : W("v-if", !0),
						I(i).login !== "force" || le.value ? (B(), V("button", {
							key: 2,
							type: "submit",
							class: "primary wl-btn",
							title: "Cmd|Ctrl + Enter",
							disabled: E.value,
							onClick: ve
						}, [E.value ? (B(), Mi(I(Mf), {
							key: 0,
							size: 16
						})) : (B(), V(z, { key: 1 }, [Bi(k(n.edit ? "保存修改" : I(c) ? "发布剧透评论" : D.value.submit), 1)], 64))], 8, Tp)) : W("v-if", !0)
					]),
					H("div", {
						ref: "gif-popup",
						class: O(["wl-gif-popup", { display: ne.value }])
					}, [
						H("input", {
							ref: "gif-search",
							type: "text",
							placeholder: D.value.gifSearchPlaceholder,
							onInput: d[5] ||= (...e) => I(Te) && I(Te)(...e)
						}, null, 40, Ep),
						T.list.length ? (B(), Mi(Qf, {
							key: 0,
							items: T.list,
							"column-width": 200,
							gap: 6,
							onInsert: d[6] ||= (e) => de(e),
							onScroll: we
						}, null, 8, ["items"])) : W("v-if", !0),
						T.loading ? (B(), V("div", Dp, [U(I(Mf), { size: 30 })])) : W("v-if", !0)
					], 2),
					H("div", {
						ref: "emoji-popup",
						class: O(["wl-emoji-popup", { display: b.value }])
					}, [
						(B(!0), V(z, null, Dr(v.value.tabs, (e, t) => (B(), V(z, { key: e.name }, [t === y.value ? (B(), V("div", {
							key: 0,
							class: "wl-tab-wrapper",
							onScroll: te
						}, [(B(!0), V(z, null, Dr(e.items, (e) => (B(), V("button", {
							key: e,
							type: "button",
							title: e,
							onClick: (t) => de(`:${e}:`),
							onMouseenter: (t) => ee(t, e),
							onMouseleave: te
						}, [b.value ? (B(), V("img", {
							key: 0,
							class: "wl-emoji",
							src: v.value.map[e],
							alt: e,
							loading: "lazy",
							referrerPolicy: "no-referrer"
						}, null, 8, kp)) : W("v-if", !0)], 40, Op))), 128))], 32)) : W("v-if", !0)], 64))), 128)),
						H("div", null, [x.value ? (B(), V("img", {
							key: 0,
							class: "wl-emoji-preview",
							src: v.value.map[x.value],
							alt: "preview",
							loading: "lazy",
							referrerPolicy: "no-referrer",
							style: fe(S.value)
						}, null, 12, Ap)) : W("v-if", !0)]),
						v.value.tabs.length > 1 ? (B(), V("div", jp, [(B(!0), V(z, null, Dr(v.value.tabs, (e, t) => (B(), V("button", {
							key: e.name,
							type: "button",
							class: O(["wl-tab", { active: y.value === t }]),
							onClick: (e) => y.value = t
						}, [H("img", {
							class: "wl-emoji",
							src: e.icon,
							alt: e.name,
							title: e.name,
							loading: "lazy",
							referrerPolicy: "no-referrer"
						}, null, 8, Np)], 10, Mp))), 128))])) : W("v-if", !0)
					], 2)
				])
			]),
			e.replyId || e.edit?.objectId ? (B(), V("button", {
				key: 1,
				type: "button",
				class: "wl-close",
				title: D.value.cancelReply,
				onClick: d[7] ||= (t) => e.replyId ? r("cancelReply") : r("cancelEdit")
			}, [U(I(xf), { size: 24 })], 8, Pp)) : W("v-if", !0)
		]));
	}
}), Ip = ["id"], Lp = {
	class: "wl-user",
	"aria-hidden": "true"
}, Rp = ["src"], zp = { class: "wl-card" }, Bp = { class: "wl-head" }, Vp = ["href"], Hp = {
	key: 1,
	class: "wl-nick"
}, Up = ["textContent"], Wp = ["textContent"], Gp = ["textContent"], Kp = ["textContent"], qp = { class: "wl-comment-actions" }, Jp = ["disabled"], Yp = ["title", "href"], Xp = ["title"], Zp = ["disabled", "title"], Qp = {
	class: "wl-meta",
	"aria-hidden": "true"
}, $p = ["data-value", "textContent"], em = {
	key: 0,
	class: "wl-warning",
	"aria-hidden": "true"
}, tm = ["aria-expanded"], nm = {
	key: 2,
	class: "wl-content"
}, rm = {
	key: 0,
	class: "wl-reply-to"
}, im = ["href"], am = ["innerHTML"], om = {
	key: 3,
	class: "wl-admin-actions"
}, sm = { class: "wl-comment-status" }, cm = [
	"disabled",
	"onClick",
	"textContent"
], lm = {
	key: 5,
	class: "wl-quote"
}, um = /* @__PURE__ */ cr({
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
		], i = Yn(Pc), a = af(), o = /* @__PURE__ */ Ol(), s = yf(), c = K(() => i.value.locale), l = K(() => {
			let { link: t } = e.comment;
			return t ? Lc(t) ? t : `https://${t}` : "";
		}), u = K(() => a.value.includes(e.comment.objectId)), d = K(() => qc(new Date(e.comment.time), o.value, c.value)), f = K(() => s.value.type === "administrator"), p = K(() => e.comment.user_id && s.value.objectId === e.comment.user_id), m = K(() => e.comment.objectId === e.reply?.objectId), h = /* @__PURE__ */ F(!1), g = K(() => !!e.comment.spoiler && !h.value);
		$n(() => [e.comment.objectId, e.comment.spoiler], () => {
			h.value = !1;
		});
		let _ = () => {
			h.value && (e.reply && n("reply", null), e.edit && n("edit", null)), h.value = !h.value;
		}, v = K(() => e.comment.objectId === e.edit?.objectId);
		return (t, a) => {
			let o = Cr("CommentCard", !0);
			return B(), V("div", {
				id: e.comment.objectId.toString(),
				class: "wl-card-item"
			}, [H("div", Lp, [
				e.comment.avatar ? (B(), V("img", {
					key: 0,
					class: "wl-user-avatar",
					src: e.comment.avatar,
					alt: ""
				}, null, 8, Rp)) : W("v-if", !0),
				e.comment.type === "guest" ? (B(), Mi(I(Af), { key: 1 })) : W("v-if", !0),
				e.comment.type === "administrator" ? (B(), Mi(I(jf), { key: 2 })) : W("v-if", !0)
			]), H("div", zp, [
				H("div", Bp, [
					l.value ? (B(), V("a", {
						key: 0,
						class: "wl-nick",
						href: l.value,
						target: "_blank",
						rel: "ugc nofollow noreferrer noopener"
					}, k(e.comment.nick), 9, Vp)) : (B(), V("span", Hp, k(e.comment.nick), 1)),
					e.comment.label ? (B(), V("span", {
						key: 2,
						class: "wl-badge",
						textContent: k(e.comment.label)
					}, null, 8, Up)) : W("v-if", !0),
					e.comment.sticky ? (B(), V("span", {
						key: 3,
						class: "wl-badge",
						textContent: k(c.value.sticky)
					}, null, 8, Wp)) : W("v-if", !0),
					typeof e.comment.level == "number" ? (B(), V("span", {
						key: 4,
						class: O(`wl-badge level${e.comment.level}`),
						textContent: k(c.value[`level${e.comment.level}`] || `Level ${e.comment.level}`)
					}, null, 10, Gp)) : W("v-if", !0),
					H("span", {
						class: "wl-time",
						textContent: k(d.value)
					}, null, 8, Kp),
					H("div", qp, [
						f.value || p.value ? (B(), V(z, { key: 0 }, [H("button", {
							type: "button",
							class: "wl-edit",
							disabled: g.value,
							onClick: a[0] ||= (t) => n("edit", e.comment)
						}, [U(I(kf))], 8, Jp), H("button", {
							type: "button",
							class: "wl-delete",
							onClick: a[1] ||= (t) => n("delete", e.comment)
						}, [U(I(Sf))])], 64)) : W("v-if", !0),
						p.value && !I(i).noRss ? (B(), V("a", {
							key: 1,
							role: "button",
							class: "wl-rss",
							title: c.value.subscribeToReplies,
							href: `${I(i).serverURL}/api/comment/rss?user_id=${e.comment.user_id}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, [U(I(Ff))], 8, Yp)) : W("v-if", !0),
						H("button", {
							type: "button",
							class: "wl-like",
							title: u.value ? c.value.cancelLike : c.value.like,
							onClick: a[2] ||= (t) => n("like", e.comment)
						}, [U(I(Tf), { active: u.value }, null, 8, ["active"]), Bi(" " + k("like" in e.comment ? e.comment.like : ""), 1)], 8, Xp),
						H("button", {
							type: "button",
							class: O(["wl-reply", { active: m.value }]),
							disabled: g.value,
							title: m.value ? c.value.cancelReply : c.value.reply,
							onClick: a[3] ||= (t) => n("reply", m.value ? null : e.comment)
						}, [U(I(Of))], 10, Zp)
					])
				]),
				H("div", Qp, [(B(), V(z, null, Dr([
					"addr",
					"browser",
					"os"
				], (t) => (B(), V(z, null, [e.comment[t] ? (B(), V("span", {
					key: t,
					class: O(`wl-${t}`),
					"data-value": e.comment[t],
					textContent: k(e.comment[t])
				}, null, 10, $p)) : W("v-if", !0)], 64))), 64))]),
				e.comment.status === "waiting" && !f.value ? (B(), V("div", em, k(c.value.commentUnderReview), 1)) : W("v-if", !0),
				e.comment.spoiler && !v.value ? (B(), V("button", {
					key: 1,
					type: "button",
					class: "board-spoiler-toggle",
					"aria-expanded": h.value,
					onClick: _
				}, " ⚠ 含剧透 · " + k(h.value ? "收起" : "点击查看") + k(!h.value && "children" in e.comment && e.comment.children?.length ? "（含回复）" : ""), 9, tm)) : W("v-if", !0),
				W(" eslint-disable vue/no-v-html "),
				!g.value && !v.value ? (B(), V("div", nm, ["reply_user" in e.comment && e.comment.reply_user ? (B(), V("p", rm, [H("a", { href: "#" + e.comment.pid }, "@" + k(e.comment.reply_user.nick), 9, im), a[17] ||= H("span", null, ": ", -1)])) : W("v-if", !0), H("div", { innerHTML: e.comment.comment }, null, 8, am)])) : W("v-if", !0),
				W(" eslint-enable vue/no-v-html "),
				f.value && !v.value ? (B(), V("div", om, [H("span", sm, [(B(), V(z, null, Dr(r, (t) => H("button", {
					key: t,
					type: "submit",
					class: O(`wl-btn wl-${t}`),
					disabled: e.comment.status === t,
					onClick: (r) => n("status", {
						status: t,
						comment: e.comment
					}),
					textContent: k(c.value[t])
				}, null, 10, cm)), 64))]), f.value && !("rid" in e.comment) ? (B(), V("button", {
					key: 0,
					type: "submit",
					class: "wl-btn wl-sticky",
					onClick: a[4] ||= (t) => n("sticky", e.comment)
				}, k(e.comment.sticky ? c.value.unsticky : c.value.sticky), 1)) : W("v-if", !0)])) : W("v-if", !0),
				!g.value && (m.value || v.value) ? (B(), V("div", {
					key: 4,
					class: O({
						"wl-reply-wrapper": m.value,
						"wl-edit-wrapper": v.value
					})
				}, [U(Fp, {
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
				])], 2)) : W("v-if", !0),
				!g.value && "children" in e.comment ? (B(), V("div", lm, [(B(!0), V(z, null, Dr(e.comment.children, (t) => (B(), Mi(o, {
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
				]))), 128))])) : W("v-if", !0)
			])], 8, Ip);
		};
	}
}), dm = { "data-waline": "" }, fm = { class: "wl-meta-head" }, pm = { class: "wl-count" }, mm = ["textContent"], hm = { class: "wl-sort" }, gm = ["onClick"], _m = { class: "wl-cards" }, vm = {
	key: 1,
	class: "wl-operation"
}, ym = ["textContent"], bm = {
	key: 2,
	class: "wl-loading"
}, xm = ["textContent"], Sm = { class: "wl-operation" }, Cm = ["textContent"], wm = {
	key: 5,
	class: "wl-meta-foot"
}, Tm = {
	key: 0,
	class: "wl-rss"
}, Em = ["href", "alt"], Dm = ["textContent"], Om = ["href", "alt"], km = ["textContent"], Am = {
	key: 1,
	class: "wl-power"
}, jm = /* @__PURE__ */ cr({
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
		let t = e, n = yf(), r = af(), i = /* @__PURE__ */ F("loading"), a = /* @__PURE__ */ F(0), o = /* @__PURE__ */ F(1), s = /* @__PURE__ */ F(0), c = K(() => Vc(t)), l = /* @__PURE__ */ F(c.value.commentSorting), u = /* @__PURE__ */ F([]), d = /* @__PURE__ */ F(null), f = /* @__PURE__ */ F(null), p = K(() => Wc(c.value.dark)), m = K(() => c.value.locale);
		Ml(p, { id: "waline-darkmode" });
		let h = null, g = (e) => {
			let { serverURL: t, path: r, pageSize: d } = c.value, f = new AbortController();
			i.value = "loading", h?.(), Ao({
				serverURL: t,
				lang: c.value.lang,
				path: r,
				pageSize: d,
				sortBy: Mc[l.value],
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
			d.value = e;
		}, x = (e) => {
			f.value = e;
		}, S = (e) => {
			if (f.value) f.value.comment = e.comment, f.value.orig = e.orig, f.value.spoiler = e.spoiler, f.value = null;
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
		return Jn(Pc, c), yr(async () => {
			pl(() => [t.serverURL, t.path], () => {
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
		}), xr(() => {
			h?.();
		}), (e, t) => (B(), V("div", dm, [
			U(Wf),
			!d.value && !f.value ? (B(), Mi(Fp, {
				key: 0,
				onLog: v,
				onSubmit: S
			})) : W("v-if", !0),
			H("div", fm, [H("div", pm, [a.value ? (B(), V("span", {
				key: 0,
				class: "wl-num",
				textContent: k(a.value)
			}, null, 8, mm)) : W("v-if", !0), Bi(" " + k(m.value.comment), 1)]), H("ul", hm, [(B(!0), V(z, null, Dr(I(Nc), (e) => (B(), V("li", {
				key: e,
				class: O([e === l.value ? "active" : ""]),
				onClick: (t) => y(e)
			}, k(m.value[e]), 11, gm))), 128))])]),
			H("div", _m, [(B(!0), V(z, null, Dr(u.value, (e) => (B(), Mi(um, {
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
			i.value === "error" ? (B(), V("div", vm, [H("button", {
				type: "button",
				class: "wl-btn",
				onClick: v,
				textContent: k(m.value.refresh)
			}, null, 8, ym)])) : i.value === "loading" ? (B(), V("div", bm, [U(I(Mf), { size: 30 })])) : u.value.length ? o.value < s.value ? (B(), V(z, { key: 4 }, [W(" Load more button "), H("div", Sm, [H("button", {
				type: "button",
				class: "wl-btn",
				onClick: _,
				textContent: k(m.value.more)
			}, null, 8, Cm)])], 2112)) : W("v-if", !0) : (B(), V("div", {
				key: 3,
				class: "wl-empty",
				textContent: k(m.value.sofa)
			}, null, 8, xm)),
			u.value.length || i.value !== "loading" ? (B(), V("div", wm, [
				c.value.noRss ? W("v-if", !0) : (B(), V("div", Tm, [H("a", {
					href: `${c.value.serverURL}/api/comment/rss?path=${encodeURIComponent(c.value.path)}`,
					target: "_blank",
					rel: "noopener noreferrer",
					alt: m.value.subPostComment
				}, [U(I(Pf)), H("span", { textContent: k(m.value.subPostComment) }, null, 8, Dm)], 8, Em), H("a", {
					href: `${c.value.serverURL}/api/comment/rss`,
					target: "_blank",
					rel: "noopener noreferrer",
					alt: m.value.subSiteComment
				}, [U(I(Pf)), H("span", { textContent: k(m.value.subSiteComment) }, null, 8, km)], 8, Om)])),
				W(" Copyright Information "),
				c.value.noCopyright ? W("v-if", !0) : (B(), V("div", Am, [
					t[0] ||= Bi(" Powered by ", -1),
					t[1] ||= H("a", {
						href: "https://github.com/walinejs/waline",
						target: "_blank",
						rel: "noopener noreferrer"
					}, " Waline ", -1),
					Bi(" v" + k(I(bf)), 1)
				]))
			])) : W("v-if", !0)
		]));
	}
}), Mm = (e, t) => {
	t.forEach((t, n) => {
		let r = e[n].time;
		typeof r == "number" && (t.textContent = r.toString());
	});
}, Nm = ({ serverURL: e, path: t = window.location.pathname, selector: n = ".waline-pageview-count", update: r = !0, lang: i = navigator.language }) => {
	let a = new AbortController(), o = [...document.querySelectorAll(n)], s = (e) => {
		let n = Yd(e);
		return n != null && t !== n;
	}, c = async (n) => {
		try {
			Mm(await Lo({
				serverURL: Rc(e),
				paths: n.map((e) => Yd(e) ?? t),
				lang: i,
				signal: a.signal
			}), n);
		} catch (e) {
			Rl(e);
		}
	};
	if (r) {
		let n = o.filter((e) => !s(e)), r = o.filter((e) => s(e));
		Ro({
			serverURL: Rc(e),
			path: t,
			lang: i
		}).then((e) => {
			Mm(e, n);
		}), r.length > 0 && c(r);
	} else c(o);
	return a.abort.bind(a);
}, Pm = ({ el: e = "#waline", path: t = window.location.pathname, comment: n = !1, pageview: r = !1, ...i }) => {
	let a = e ? zl(e) : null;
	if (e && !a) throw Error("Option 'el' do not match any domElement!");
	if (!i.serverURL) throw Error("Option 'serverURL' is missing!");
	let o = /* @__PURE__ */ Ht({ ...i }), s = /* @__PURE__ */ Ht({
		comment: n,
		pageview: r,
		path: t
	}), c = () => {
		s.comment && ef({
			serverURL: o.serverURL,
			path: s.path,
			...Hc(s.comment) ? { selector: s.comment } : {}
		});
	}, l = () => {
		s.pageview && Nm({
			serverURL: o.serverURL,
			path: s.path,
			...Hc(s.pageview) ? { selector: s.pageview } : {}
		});
	}, u = null;
	a && (u = So(() => q(jm, {
		path: s.path,
		...o
	})), u.mount(a));
	let d = Qn(c), f = Qn(l);
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
export { Pm as init };
