/* ==========================================================================
   NUMERIX TECHNOLOGIES SERVICES — Moteur du site
   (Vous n'avez normalement PAS besoin de modifier ce fichier.
    Les infos de l'entreprise sont dans config.js, les produits dans products.js)
   ========================================================================== */
(function () {
  "use strict";
  const N = window.NUMERIX, CATS = window.CATEGORIES, PRODS = window.PRODUITS, GROUPS = window.GROUPES;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  const page = document.body.dataset.page || "";

  /* ---------------------------------------------------------------- ICÔNES */
  const P = {
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
    printer: '<path d="M7 9V3h10v6"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
    camera: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/>',
    scan: '<path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3"/><path d="M4 12h16"/>',
    banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
    ribbon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6"/>',
    badge: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M8 17c.8-2 2.3-3 4-3s3.2 1 4 3"/>',
    wifi: '<path d="M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M2 9a15 15 0 0120 0"/><circle cx="12" cy="19.5" r=".8"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 010 8.4M7.8 16.2a6 6 0 010-8.4M19 5a10 10 0 010 14M5 19A10 10 0 015 5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    chevl: '<path d="M15 6l-6 6 6 6"/>',
    chevr: '<path d="M9 6l6 6-6 6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    checkc: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M20 20a4 4 0 01-4 2h-3"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
    school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>',
    hotel: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
    store: '<path d="M4 9l1-5h14l1 5M4 9a3 3 0 006 0 3 3 0 006 0 3 3 0 004 0M5 12v8h14v-8"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5M16 4.8a3.5 3.5 0 010 6.4M18 14.8c2 .7 3.4 2.5 4 5.2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    file: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 016 0v4"/>'
  };
  const WA_PATH = "M12.04 2a9.9 9.9 0 00-8.5 15l-1.5 5.5 5.6-1.5A10 10 0 1012.04 2zm5.8 14.1c-.25.7-1.4 1.3-1.9 1.35-.5.05-1.1.25-3.7-.8-3.1-1.3-5.1-4.5-5.25-4.7-.15-.2-1.25-1.65-1.25-3.15s.8-2.25 1.1-2.55c.3-.3.6-.35.8-.35h.6c.2 0 .45-.05.7.55.25.6.85 2.1.95 2.25.1.15.15.3.05.5-.1.2-.15.3-.3.5l-.45.5c-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1.05.9 1.9 1.2 2.2 1.35.3.15.45.1.6-.1.15-.2.7-.8.9-1.1.2-.3.4-.25.65-.15.25.1 1.65.8 1.95.95.3.15.5.2.55.3.1.1.1.65-.15 1.35z";
  function icon(n) {
    if (n === "whatsapp") return `<svg class="i" viewBox="0 0 24 24" style="fill:currentColor;stroke:none" aria-hidden="true"><path d="${WA_PATH}"/></svg>`;
    return `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n] || P.info}</svg>`;
  }
  function hydrateIcons(root = document) {
    $$("[data-icon]", root).forEach(el => { if (!el.dataset.done) { el.innerHTML = icon(el.dataset.icon); el.dataset.done = 1; } });
  }

  /* ---------------------------------------------------------------- OUTILS */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const catOf = id => CATS.find(c => c.id === id);
  const groupOf = id => GROUPS.find(g => g.id === id);
  const prodOf = id => PRODS.find(p => p.id === id);
  const waLink = (msg) => `https://wa.me/${N.whatsappLien}?text=${encodeURIComponent(msg || N.messageWhatsapp)}`;

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = icon("checkc") + `<span>${esc(msg)}</span>`;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ----------------------------------------------------------------- PRIX */
  function priceHTML(p) {
    // >>> C'EST ICI QUE LE PRIX S'AFFICHE (valeur saisie dans products.js : prix: "...") <<<
    if (p.prix && String(p.prix).trim()) {
      const old = p.ancienPrix && String(p.ancienPrix).trim() ? `<span class="price-old">${esc(p.ancienPrix)} ${esc(N.devise)}</span>` : "";
      return `<div class="price-row"><span class="price">${esc(p.prix)} <small>${esc(N.devise)}</small></span>${old}</div>`;
    }
    return N.textePrixVide ? `<div class="price-row"><span class="price-empty">${esc(N.textePrixVide)}</span></div>` : "";
  }

  /* -------------------------------------------------------------- IMAGES */
  /* Les photos sont détectées automatiquement dans images/products/<id>.(webp|png|jpg|jpeg)
     et <id>-2, <id>-3 ... pour la galerie. À défaut, une photo de départ (images/demo) puis un visuel neutre. */
  const EXT = ["webp", "png", "jpg", "jpeg"];
  const probe = url => new Promise(res => { const i = new Image(); i.onload = () => res(url); i.onerror = () => res(null); i.src = url; });
  const imgCache = new Map();
  function productImages(id, max = 6) {
    if (imgCache.has(id)) return imgCache.get(id);
    const job = (async () => {
      const found = [];
      for (let n = 1; n <= max; n++) {
        const base = `images/products/${id}${n > 1 ? "-" + n : ""}`;
        const hit = (await Promise.all(EXT.map(e => probe(`${base}.${e}`)))).find(Boolean);
        if (hit) found.push(hit); else break;
      }
      if (!found.length) { const d = await probe(`images/demo/${id}.jpg`); if (d) found.push(d); }
      return found;
    })();
    imgCache.set(id, job);
    return job;
  }
  function placeholder(p) {
    const c = catOf(p.cat);
    return `<div class="ph"><div>${icon(c ? c.icone : "layers")}<small>Photo à venir</small></div></div>`;
  }
  function hydrateImages(root = document) {
    $$("[data-pid]", root).forEach(async el => {
      if (el.dataset.loaded) return; el.dataset.loaded = 1;
      const imgs = await productImages(el.dataset.pid, 1);
      if (!imgs.length) return;
      const im = new Image(); im.alt = el.dataset.alt || ""; im.src = imgs[0]; im.decoding = "async";
      el.style.setProperty('--pimg', `url(${imgs[0]})`); im.style.opacity = 0; im.style.transition = "opacity .6s,transform .8s cubic-bezier(.22,.8,.24,1)";
      el.querySelector(".ph")?.replaceWith(im);
      requestAnimationFrame(() => (im.style.opacity = 1));
    });
  }

  /* ---------------------------------------------------------------- DEVIS */
  const KEY = "numerix_devis_v1";
  const getCart = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const setCart = c => { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {} updateCount(); };
  function addToCart(id, qty = 1) {
    const c = getCart(), it = c.find(x => x.id === id);
    if (it) it.qty += qty; else c.push({ id, qty });
    setCart(c);
  }
  function updateCount() {
    const n = getCart().reduce((a, b) => a + b.qty, 0);
    $$(".devis-count").forEach(e => (e.textContent = n));
    const f = $(".float-devis"); if (f) { f.classList.toggle("show", n > 0 && page !== "devis"); }
  }

  /* --------------------------------------------------------- CARTE PRODUIT */
  function productCard(p, i = 0) {
    const c = catOf(p.cat);
    return `
    <article class="p-card" data-reveal style="--d:${Math.min(i, 8) * 0.06}s">
      <a class="p-img" href="produit.html?id=${p.id}" data-pid="${p.id}" data-alt="${esc(p.nom)}" aria-label="${esc(p.nom)}">
        ${p.badge ? `<span class="p-badge">${esc(p.badge)}</span>` : ""}
        <span class="p-cat">${esc(c ? c.court : "")}</span>
        ${placeholder(p)}
      </a>
      <div class="p-body">
        <h3><a href="produit.html?id=${p.id}">${esc(p.nom)}</a></h3>
        <p>${esc(p.court)}</p>
        ${priceHTML(p)}
        <div class="p-actions">
          <a class="btn btn-outline btn-sm" href="produit.html?id=${p.id}">Détails</a>
          <button class="btn btn-primary btn-sm" data-add="${p.id}" aria-label="Ajouter ${esc(p.nom)} au devis">${icon("plus")} Devis</button>
        </div>
      </div>
    </article>`;
  }
  function bindAddButtons(root = document) {
    $$("[data-add]", root).forEach(b => {
      if (b.dataset.bound) return; b.dataset.bound = 1;
      b.addEventListener("click", e => {
        e.preventDefault(); addToCart(b.dataset.add);
        const old = b.innerHTML; b.classList.add("added"); b.innerHTML = icon("check") + " Ajouté";
        toast("Ajouté à votre demande de devis");
        setTimeout(() => { b.classList.remove("added"); b.innerHTML = old; }, 1800);
      });
    });
  }

  /* ----------------------------------------------------- EN-TÊTE / PIED */
  function buildLayout() {
    const links = [
      ["accueil", "index.html", "Accueil"], ["produits", "produits.html", "Produits"],
      ["securite", "securite.html", "Sécurité"], ["badges", "badges.html", "Badges"],
      ["cartes", "cartes.html", "Cartes & ID"], ["apropos", "a-propos.html", "À propos"], ["contact", "contact.html", "Contact"]
    ];
    const hdr = $("#site-header");
    if (hdr) hdr.outerHTML = `
    <a class="skip" href="#main">Aller au contenu</a>
    <div class="topbar"><div class="container">
      <div class="tb-left">
        <a href="tel:${N.telephoneLien}">${icon("phone")} ${esc(N.telephone)}</a>
        <a href="${waLink()}" target="_blank" rel="noopener">${icon("whatsapp")} ${esc(N.whatsapp)}</a>
      </div>
      <div class="tb-right"><a href="${N.carteLien}" target="_blank" rel="noopener">${icon("pin")} ${esc(N.adresse)}</a></div>
    </div></div>
    <header class="header" id="header"><div class="container">
      <a class="brand" href="index.html" aria-label="${esc(N.nom)} — Accueil"><img src="images/logo.png" alt="${esc(N.nom)}" width="190" height="50"></a>
      <button class="burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="nav" id="nav" aria-label="Navigation principale">
        ${links.map(l => `<a class="link${page === l[0] ? " active" : ""}" href="${l[1]}">${l[2]}</a>`).join("")}
        <a class="btn btn-primary btn-sm" href="devis.html">${icon("file")} Devis <span class="devis-count">0</span></a>
      </nav>
    </div></header>`;

    const ftr = $("#site-footer");
    if (ftr) {
      const soc = [["facebook", N.facebook], ["instagram", N.instagram], ["linkedin", N.linkedin], ["link", N.tiktok]]
        .filter(s => s[1]).map(s => `<a href="${esc(s[1])}" target="_blank" rel="noopener" aria-label="${s[0]}">${icon(s[0])}</a>`).join("");
      ftr.outerHTML = `
      <footer class="footer"><div class="container">
        <div class="f-grid">
          <div>
            <a class="f-logo" href="index.html"><img src="images/logo.png" alt="${esc(N.nom)}"></a>
            <p>${esc(N.slogan)}</p>
            <p><strong style="color:#fff">${esc(N.signature)}</strong></p>
            ${soc ? `<div class="socials">${soc}</div>` : ""}
          </div>
          <div><h4>Navigation</h4><ul>${links.map(l => `<li><a href="${l[1]}">${l[2]}</a></li>`).join("")}<li><a href="devis.html">Demander un devis</a></li></ul></div>
          <div><h4>Nos domaines</h4><ul>${GROUPS.map(g => `<li><a href="${g.page}">${esc(g.nom)}</a></li>`).join("")}
            ${CATS.slice(0, 0).map(() => "").join("")}</ul></div>
          <div class="f-contact"><h4>Contact</h4><ul>
            <li>${icon("pin")}<span>${esc(N.adresse)}</span></li>
            <li>${icon("phone")}<a href="tel:${N.telephoneLien}">${esc(N.telephone)}</a></li>
            <li>${icon("whatsapp")}<a href="${waLink()}" target="_blank" rel="noopener">${esc(N.whatsapp)}</a></li>
            ${N.email ? `<li>${icon("mail")}<a href="mailto:${esc(N.email)}">${esc(N.email)}</a></li>` : ""}
          </ul></div>
        </div>
        <div class="copy"><span>© ${N.annee} ${esc(N.nom)}. Tous droits réservés.</span><span>Sécurité • Identification • Technologie</span></div>
      </div></footer>
      <a class="float-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="Discuter sur WhatsApp">${icon("whatsapp")}</a>
      <a class="float-devis" href="devis.html">${icon("file")} Ma demande de devis <span class="devis-count">0</span></a>
      <button class="to-top" id="toTop" aria-label="Remonter en haut">${icon("up")}</button>
      <div id="progress"></div>`;
    }
    // Liaisons génériques
    $$("[data-n]").forEach(e => (e.textContent = N[e.dataset.n] || ""));
    $$("[data-link]").forEach(e => {
      const t = e.dataset.link;
      e.href = t === "tel" ? "tel:" + N.telephoneLien : t === "wa" ? waLink(e.dataset.msg) : t === "map" ? N.carteLien : t === "mail" ? "mailto:" + N.email : "#";
      if (t === "wa" || t === "map") { e.target = "_blank"; e.rel = "noopener"; }
    });
    hydrateIcons();

    // Menu mobile
    const burger = $("#burger"), nav = $("#nav");
    if (burger) {
      const set = o => { if (o) nav.style.paddingTop = ($('#header').getBoundingClientRect().bottom + 12) + 'px'; burger.classList.toggle("open", o); nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; };
      burger.addEventListener("click", () => set(!nav.classList.contains("open")));
      $$("a", nav).forEach(a => a.addEventListener("click", () => set(false)));
      document.addEventListener("keydown", e => e.key === "Escape" && set(false));
      window.addEventListener("resize", () => window.innerWidth > 900 && set(false));
    }
    // Scroll : en-tête, progression, retour en haut
    const hd = $("#header"), pg = $("#progress"), tt = $("#toTop");
    const onScroll = () => {
      const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
      hd && hd.classList.toggle("scrolled", y > 10);
      pg && (pg.style.width = (h > 0 ? (y / h) * 100 : 0) + "%");
      tt && tt.classList.toggle("show", y > 700);
      $$(".band .bg").forEach(b => { const r = b.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight && !reduce) b.style.transform = `translateY(${(r.top * -0.12).toFixed(1)}px)`; });
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    tt && tt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    updateCount();
  }

  /* ----------------------------------------------- APPARITIONS / COMPTEURS */
  let io;
  function observeReveal(root = document) {
    if (!io) {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in"); io.unobserve(e.target);
        if (e.target.dataset.count) countUp(e.target);
      }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    $$("[data-stagger]", root).forEach(par => Array.from(par.children).forEach((c, i) => { if (!c.hasAttribute("data-reveal")) c.setAttribute("data-reveal", ""); c.style.setProperty("--d", (i * 0.09).toFixed(2) + "s"); }));
    $$("[data-reveal],[data-count]", root).forEach(el => { if (!el.dataset.obs) { el.dataset.obs = 1; io.observe(el); } });
  }
  function countUp(el) {
    const to = parseInt(el.dataset.count, 10) || 0, suf = el.dataset.suffix || "";
    if (reduce) { el.textContent = to + suf; return; }
    const t0 = performance.now(), dur = 1600;
    (function f(t) { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e) + suf; if (k < 1) requestAnimationFrame(f); })(t0);
  }
  function initTilt(root = document) {
    if (!finePointer || reduce) return;
    $$(".tilt", root).forEach(el => {
      if (el.dataset.tilt) return; el.dataset.tilt = 1;
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", x * 100 + "%"); el.style.setProperty("--my", y * 100 + "%");
        el.style.transform = `perspective(900px) rotateX(${((0.5 - y) * 7).toFixed(2)}deg) rotateY(${((x - 0.5) * 9).toFixed(2)}deg) translateY(-6px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ------------------------------------------------------------- ACCUEIL */
  function initHero() {
    const hero = $("#hero"); if (!hero) return;
    // Découpe des titres en mots animés
    $$("[data-split]", hero).forEach(h => {
      let i = 0, out = "";
      h.innerHTML.split(/(<em>.*?<\/em>)/).forEach(part => {
        const em = part.startsWith("<em>"), txt = part.replace(/<\/?em>/g, "");
        txt.split(/\s+/).filter(Boolean).forEach(w => { out += `<span class="w${em ? " em" : ""}" style="animation-delay:${(0.08 * i++ + 0.15).toFixed(2)}s">${w}</span> `; });
      });
      h.innerHTML = out;
    });
    // Particules
    const pc = $(".particles", hero);
    if (pc && !reduce) for (let i = 0; i < 16; i++) { const s = document.createElement("i"); const sz = 4 + Math.random() * 8; s.style.cssText = `left:${Math.random() * 100}%;bottom:-20px;width:${sz}px;height:${sz}px;animation-duration:${12 + Math.random() * 16}s;animation-delay:${-Math.random() * 20}s;opacity:.6`; pc.appendChild(s); }

    const slides = $$(".slide", hero), imgs = $$(".show-card img", hero), dotsBox = $(".dots", hero), DUR = 6500;
    hero.style.setProperty("--dur", DUR + "ms");
    dotsBox.innerHTML = slides.map((s, i) => `<button type="button" data-i="${i}" aria-label="Diapositive ${i + 1}">${esc(s.dataset.label || "")}</button>`).join("");
    const dots = $$("button", dotsBox);
    let cur = -1, timer;
    function go(n) {
      n = (n + slides.length) % slides.length; if (n === cur) return; cur = n;
      slides.forEach((s, i) => { s.classList.toggle("active", i === n); s.setAttribute("aria-hidden", i !== n); });
      imgs.forEach((im, i) => im.classList.toggle("active", i === n));
      dots.forEach((d, i) => { d.classList.remove("active"); if (i === n) { void d.offsetWidth; d.classList.add("active"); } });
      restart();
    }
    function restart() { clearTimeout(timer); if (!reduce && !hero.classList.contains("paused")) timer = setTimeout(() => go(cur + 1), DUR); }
    dots.forEach(d => d.addEventListener("click", () => go(+d.dataset.i)));
    $(".prev", hero).addEventListener("click", () => go(cur - 1));
    $(".next", hero).addEventListener("click", () => go(cur + 1));
    hero.addEventListener("mouseenter", () => { hero.classList.add("paused"); clearTimeout(timer); });
    hero.addEventListener("mouseleave", () => { hero.classList.remove("paused"); restart(); });
    document.addEventListener("visibilitychange", () => (document.hidden ? clearTimeout(timer) : restart()));
    let sx = 0; hero.addEventListener("touchstart", e => (sx = e.touches[0].clientX), { passive: true });
    hero.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); });
    // inclinaison 3D du visuel
    const card = $(".show-card", hero);
    if (card && finePointer && !reduce) {
      hero.addEventListener("mousemove", e => {
        const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg)`;
      });
      hero.addEventListener("mouseleave", () => (card.style.transform = ""));
    }
    go(0);
  }

  function initHome() {
    initHero();
    // Domaines
    const gb = $("#groups");
    if (gb) gb.innerHTML = GROUPS.map((g, i) => `
      <a class="cat-card tilt" href="${g.page}" data-reveal style="--d:${i * 0.1}s">
        <span class="num">0${i + 1}</span>
        <span class="cat-ic">${icon(g.icone)}</span>
        <h3>${esc(g.nom)}</h3>
        <p>${esc(g.texte)}</p>
        <div class="tags" style="margin-top:6px">${CATS.filter(c => c.groupe === g.id).map(c => `<span style="font-size:.78rem;padding:6px 12px">${esc(c.court)}</span>`).join("")}</div>
        <span class="go">Découvrir ${icon("right")}</span>
      </a>`).join("");
    // Catégories (tuiles)
    const cb = $("#cats");
    if (cb) cb.innerHTML = CATS.map(c => {
      const n = PRODS.filter(p => p.cat === c.id).length;
      return `<a class="sector tilt" href="produits.html?cat=${c.id}">${icon(c.icone)} ${esc(c.nom)} <span class="devis-count" style="background:#e8f0ff">${n}</span></a>`;
    }).join("");
    // Vedettes
    const fb = $("#featured");
    if (fb) { fb.innerHTML = PRODS.filter(p => p.vedette).slice(0, 8).map(productCard).join(""); bindAddButtons(fb); hydrateImages(fb); }
    // Stats
    const set = (id, v) => { const e = $(id); if (e) e.dataset.count = v; };
    set("#st-cats", CATS.length); set("#st-prods", PRODS.length);
  }

  /* ------------------------------------------------------------- CATALOGUE */
  function initCatalog() {
    const root = $("#catalog"); if (!root) return;
    const scope = root.dataset.group || "";
    const cats = CATS.filter(c => !scope || c.groupe === scope);
    const prods = PRODS.filter(p => cats.some(c => c.id === p.cat));
    const params = new URLSearchParams(location.search);
    let active = cats.some(c => c.id === params.get("cat")) ? params.get("cat") : "all", q = "";

    root.innerHTML = `
      <div class="toolbar" data-reveal>
        <label class="search"><span class="sr">Rechercher un produit</span>${icon("search")}<input type="search" id="q" placeholder="Rechercher un produit…" autocomplete="off"></label>
        <div class="filters" role="tablist" aria-label="Filtrer par catégorie">
          <button type="button" data-c="all">Tous <span style="opacity:.7">(${prods.length})</span></button>
          ${cats.map(c => `<button type="button" data-c="${c.id}">${esc(c.court)}</button>`).join("")}
        </div>
      </div>
      <div id="results"></div>
      <div class="empty" id="empty">${icon("search")}<h3>Aucun produit trouvé</h3><p>Essayez un autre mot-clé ou contactez-nous : nous avons peut-être l'équipement qu'il vous faut.</p><a class="btn btn-wa" href="${waLink("Bonjour, je recherche un équipement qui n'apparaît pas sur votre site.")}" target="_blank" rel="noopener">${icon("whatsapp")} Demander sur WhatsApp</a></div>`;
    const res = $("#results", root), empty = $("#empty", root), buttons = $$(".filters button", root);

    function render() {
      buttons.forEach(b => { const on = b.dataset.c === active; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
      const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
      let html = "", count = 0;
      if (q) {
        const list = prods.filter(p => (active === "all" || p.cat === active) && norm([p.nom, p.court, p.description, (p.utilisations || []).join(" "), catOf(p.cat).nom].join(" ")).includes(norm(q)));
        count = list.length; html = `<div class="grid prods">${list.map(productCard).join("")}</div>`;
      } else {
        cats.filter(c => active === "all" || c.id === active).forEach(c => {
          const list = prods.filter(p => p.cat === c.id); if (!list.length) return; count += list.length;
          html += `<h2 class="cat-title" data-reveal><span class="cat-ic">${icon(c.icone)}</span>${esc(c.nom)}</h2><div class="grid prods">${list.map(productCard).join("")}</div>`;
        });
      }
      res.innerHTML = html; empty.classList.toggle("show", count === 0);
      bindAddButtons(res); hydrateImages(res); observeReveal(res);
    }
    buttons.forEach(b => b.addEventListener("click", () => { active = b.dataset.c; render(); }));
    $("#q", root).addEventListener("input", e => { q = e.target.value.trim(); render(); });
    render();
  }

  /* ----------------------------------------------------------- FICHE PRODUIT */
  async function initDetail() {
    const box = $("#detail"); if (!box) return;
    const p = prodOf(new URLSearchParams(location.search).get("id"));
    if (!p) { box.innerHTML = `<div class="empty show">${icon("info")}<h3>Produit introuvable</h3><p><a class="btn btn-primary" href="produits.html">Voir tous les produits</a></p></div>`; return; }
    const c = catOf(p.cat), g = groupOf(c.groupe);
    document.title = `${p.nom} | ${N.nom}`;
    const crumb = $("#crumb"); if (crumb) crumb.innerHTML = `<a href="index.html">Accueil</a> ${icon("chevr")} <a href="${g.page}">${esc(g.nom)}</a> ${icon("chevr")} <span>${esc(p.nom)}</span>`;
    const ttl = $("#ptitle"); if (ttl) ttl.textContent = p.nom;
    const msg = `Bonjour ${N.nomCourt}, je suis intéressé(e) par : ${p.nom}. Pouvez-vous me donner plus d'informations et un devis ?`;
    box.innerHTML = `
      <div class="detail">
        <div class="gallery" data-reveal="left">
          <div class="g-main" id="gmain" data-pid-main>${placeholder(p)}</div>
          <div class="thumbs" id="thumbs"></div>
        </div>
        <div class="d-info" data-reveal="right">
          <a class="d-cat" href="produits.html?cat=${c.id}">${icon(c.icone)} ${esc(c.nom)}</a>
          <h1>${esc(p.nom)}</h1>
          <p style="font-size:1.1rem">${esc(p.description)}</p>
          ${(p.prix && String(p.prix).trim()) ? `<div class="d-price">${priceHTML(p)}</div>` : ""}
          ${p.caracteristiques && p.caracteristiques.length ? `<div class="d-block"><h3>${icon("list")} Caractéristiques</h3><ul class="checks">${p.caracteristiques.map(x => `<li>${icon("checkc")}<span>${esc(x)}</span></li>`).join("")}</ul></div>` : ""}
          ${p.utilisations && p.utilisations.length ? `<div class="d-block"><h3>${icon("building")} Utilisations</h3><div class="tags">${p.utilisations.map(x => `<span>${esc(x)}</span>`).join("")}</div></div>` : ""}
          <div class="d-actions">
            <button class="btn btn-primary" id="askQuote">${icon("file")} Demander un devis</button>
            <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener">${icon("whatsapp")} WhatsApp</a>
            <a class="btn btn-outline" href="tel:${N.telephoneLien}">${icon("phone")} Appeler</a>
          </div>
          <div class="note-box">${icon("info")} Les caractéristiques exactes (modèle, marque, compatibilité) peuvent varier selon les références disponibles. Contactez-nous pour confirmer le produit adapté à votre besoin.</div>
        </div>
      </div>`;
    $("#askQuote").addEventListener("click", () => { addToCart(p.id); location.href = "devis.html"; });
    // Galerie
    const main = $("#gmain"), th = $("#thumbs");
    const imgs = await productImages(p.id);
    if (imgs.length) {
      const show = i => { main.style.setProperty("--pimg", `url(${imgs[i]})`); main.innerHTML = `<img src="${imgs[i]}" alt="${esc(p.nom)}">`; $$("button", th).forEach((b, k) => b.classList.toggle("active", k === i)); };
      th.innerHTML = imgs.length > 1 ? imgs.map((u, i) => `<button type="button" aria-label="Photo ${i + 1}"><img src="${u}" alt=""></button>`).join("") : "";
      $$("button", th).forEach((b, i) => b.addEventListener("click", () => show(i)));
      show(0);
      if (finePointer) {
        main.addEventListener("mouseenter", () => main.classList.add("zoom"));
        main.addEventListener("mouseleave", () => { main.classList.remove("zoom"); const im = $("img", main); im && (im.style.transformOrigin = "center"); });
        main.addEventListener("mousemove", e => { const r = main.getBoundingClientRect(), im = $("img", main); if (im) im.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`; });
      }
    }
    // Produits similaires
    const rel = $("#related");
    if (rel) {
      const list = PRODS.filter(x => x.cat === p.cat && x.id !== p.id).concat(PRODS.filter(x => x.cat !== p.cat && catOf(x.cat).groupe === g.id)).slice(0, 4);
      rel.innerHTML = list.map(productCard).join(""); bindAddButtons(rel); hydrateImages(rel); observeReveal(rel);
      if (!list.length) rel.closest("section").style.display = "none";
    }
    observeReveal(box);
  }

  /* ------------------------------------------------------------------ DEVIS */
  function buildMessage(f, items) {
    let m = `Bonjour ${N.nom},\n\nJe souhaite recevoir un devis.\n`;
    if (items.length) { m += "\n*Produits demandés :*\n"; items.forEach(it => (m += `• ${it.qty} × ${it.p.nom}\n`)); }
    m += "\n*Mes informations :*\n";
    if (f.nom) m += `Nom : ${f.nom}\n`;
    if (f.entreprise) m += `Entreprise / Structure : ${f.entreprise}\n`;
    if (f.telephone) m += `Téléphone : ${f.telephone}\n`;
    if (f.email) m += `E-mail : ${f.email}\n`;
    if (f.ville) m += `Localisation : ${f.ville}\n`;
    if (f.message) m += `\n*Message :*\n${f.message}\n`;
    return m + "\nMerci !";
  }
  function initQuote() {
    const form = $("#quoteForm"), list = $("#quoteList"); if (!form) return;
    const add = new URLSearchParams(location.search).get("produit"); if (add && prodOf(add)) { addToCart(add); history.replaceState(null, "", "devis.html"); }
    function items() { return getCart().map(c => ({ ...c, p: prodOf(c.id) })).filter(x => x.p); }
    function renderList() {
      const it = items();
      list.innerHTML = it.length ? it.map(x => `
        <div class="q-item" data-id="${x.id}">
          <div class="th" data-pid="${x.id}" data-alt="${esc(x.p.nom)}">${placeholder(x.p)}</div>
          <div><b>${esc(x.p.nom)}</b>
            <div class="qty"><button type="button" data-d="-1" aria-label="Moins">${icon("minus")}</button><span>${x.qty}</span><button type="button" data-d="1" aria-label="Plus">${icon("plus")}</button></div>
          </div>
          <button type="button" class="q-del" aria-label="Retirer">${icon("trash")}</button>
        </div>`).join("") : `<div class="q-empty">${icon("file")}<p style="margin:10px 0 18px">Votre sélection est vide.<br>Ajoutez des produits depuis le catalogue, ou décrivez simplement votre besoin dans le formulaire.</p><a class="btn btn-outline btn-sm" href="produits.html">Parcourir les produits</a></div>`;
      hydrateImages(list);
      $$(".q-item", list).forEach(row => {
        const id = row.dataset.id;
        $$(".qty button", row).forEach(b => b.addEventListener("click", () => { const c = getCart(), it2 = c.find(z => z.id === id); it2.qty = Math.max(1, it2.qty + +b.dataset.d); setCart(c); renderList(); }));
        $(".q-del", row).addEventListener("click", () => { setCart(getCart().filter(z => z.id !== id)); renderList(); });
      });
    }
    renderList();
    form.addEventListener("submit", e => {
      e.preventDefault(); const f = Object.fromEntries(new FormData(form).entries());
      window.open(waLink(buildMessage(f, items())), "_blank", "noopener");
      toast("Ouverture de WhatsApp…");
    });
  }

  /* ---------------------------------------------------------------- CONTACT */
  function initContact() {
    const form = $("#contactForm"); if (form) form.addEventListener("submit", e => {
      e.preventDefault(); const f = Object.fromEntries(new FormData(form).entries());
      window.open(waLink(buildMessage(f, [])), "_blank", "noopener"); toast("Ouverture de WhatsApp…");
    });
    const map = $("#map"); if (map) map.innerHTML = N.carteEmbed
      ? `<iframe src="${esc(N.carteEmbed)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Carte"></iframe>`
      : `<div>${icon("pin")}<h3 style="margin-top:10px">${esc(N.adresse)}</h3><p style="color:var(--muted)">Retrouvez-nous à Adjamé, près de Renault.</p><a class="btn btn-primary" href="${N.carteLien}" target="_blank" rel="noopener">${icon("ext")} Ouvrir dans Google Maps</a></div>`;
  }

  /* ------------------------------------------------------------------ DÉMARRAGE */
  document.addEventListener("DOMContentLoaded", () => {
    buildLayout();
    if (page === "accueil") initHome();
    initCatalog(); initDetail(); initQuote(); initContact();
    hydrateIcons(); observeReveal(); initTilt();
  });
})();
