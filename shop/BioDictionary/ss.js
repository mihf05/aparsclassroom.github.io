function saveStorage(e, t) {
    "use strict";
    if ("undefined" != typeof Storage) {
        let n = document.querySelector(e),
            o = n.getAttribute("id") + "_saveStorage",
            r = n.querySelectorAll("input, textarea, select"),
            a = function(e) {
                e = e || {};
                for (let t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (let n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
                return e
            }({}, { exclude: [] }, t),
            u = function() { let e = ""; return a.exclude.forEach(function(t) { e += ":not([type=" + t + "])" }), e },
            c = function() { let e = []; return r.forEach(function(t) { "radio" !== t.type && "checkbox" !== t.type ? e.push({ name: t.name, value: t.value, type: t.type }) : t.checked && e.push({ name: t.name, value: t.value, type: t.type }) }), e },
            l = function() {
                let e = JSON.stringify(c());
                localStorage.setItem(o, e)
            },
            i = function() {
                if (null !== localStorage.getItem(o)) {
                    JSON.parse(localStorage.getItem(o)).forEach(function(e) {
                        if ("radio" !== e.type && "checkbox" !== e.type) {
                            if (n.querySelector("[name=" + e.name + "]")) {
                                let t = n.querySelector("[name=" + e.name + "]" + u());
                                null !== t && (t.value = e.value)
                            }
                        } else { n.querySelectorAll("[name=" + e.name + "]").forEach(function(t) { t.name === e.name && t.value === e.value && (t.checked = !0) }) }
                    })
                }
            };
        n.addEventListener("change", function() { l() }), r.forEach(function(e) { e.addEventListener("keyup", function() { l() }) }), n.addEventListener("submit", function() { localStorage.removeItem(o) }), i()
    } else console.error("Sorry! No web storage support.")
}


saveStorage('#form', {
    exclude: ['affiliation']
});
document.getElementById('app').addEventListener('click', () => {

    document.location.href = "../index.html";
})