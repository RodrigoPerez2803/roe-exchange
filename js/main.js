/* =========================================================
   RoeExchange — app behaviour
   Shared shell (header, tab bar, footer), storage, product
   cards, product modal + chat, and one init per page.
   ========================================================= */

/* ---------- Icons ---------- */
const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  swap: '<path d="M7 4 3 8l4 4"/><path d="M3 8h14"/><path d="m17 20 4-4-4-4"/><path d="M21 16H7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  tag: '<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  gamepad: '<rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/>',
  shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  cup: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 3v4M17 5h4M5 17v4M3 19h4"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  id: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 17c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 9h3M15 13h3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  pound: '<path d="M17 19H7c1.5-1 2.5-3 2.5-5V8.5a3.5 3.5 0 0 1 6.5-1.8"/><path d="M6.5 13h7"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
};

function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
}

function renderIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    el.outerHTML = icon(el.dataset.icon);
  });
}

/* ---------- Storage (every access is wrapped: it can be blocked) ---------- */
const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  },
};

const getUser = () => store.get("roe-user", null);
const getListings = () => store.get("roe-listings", []);
const getTrades = () => store.get("roe-trades", []);
const getFavs = () => store.get("roe-favs", []);

const DAY = 86400000;

// user listings first (newest), then the original products
function allProducts() {
  const own = getListings().map((p) => Object.assign({}, p, { days: Math.floor((Date.now() - p.createdAt) / DAY) }));
  return own.concat(PRODUCTS);
}

function findProduct(id) {
  return allProducts().find((p) => p.id === id);
}

/* ---------- Small helpers ---------- */
function esc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function money(n) {
  return "£" + Number(n).toFixed(2);
}

function ago(days) {
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  return days + " days ago";
}

function initials(name) {
  return String(name || "?").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function collegeColor(college) {
  return (COLLEGES[college] && COLLEGES[college].color) || "#13a574";
}

function avatar(person, size = "") {
  const style = 'style="background:' + collegeColor(person.college) + '"';
  const inner = person.avatar ? '<img src="' + esc(person.avatar) + '" alt="">' : esc(initials(person.name));
  return '<span class="avatar ' + size + '" ' + style + ">" + inner + "</span>";
}

function condBadge(condition) {
  const c = String(condition || "").toLowerCase();
  const cls = c.includes("new") ? "badge-new" : c.includes("semi") ? "badge-semi" : "badge-used";
  return '<span class="badge ' + cls + '">' + esc(condition) + "</span>";
}

function params() {
  return new URLSearchParams(location.search);
}

function joinUrl(next) {
  return "join.html?next=" + encodeURIComponent(next);
}

function currentPath() {
  return location.pathname.split("/").pop() || "index.html";
}

/* resize a picture before saving it, so localStorage doesn't fill up */
function resizeImage(file, max = 900) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ---------- Toasts ---------- */
function toast(message, iconName = "check") {
  let box = document.querySelector(".toasts");
  if (!box) {
    box = document.createElement("div");
    box.className = "toasts";
    box.setAttribute("role", "status");
    document.body.appendChild(box);
  }
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = icon(iconName) + "<span></span>";
  t.querySelector("span").textContent = message;
  box.appendChild(t);
  setTimeout(() => {
    t.classList.add("out");
    setTimeout(() => t.remove(), 260);
  }, 3000);
}

/* ---------- Modal ---------- */
let modalRoot = null;
let modalOnClose = null;

function openModal(html, options = {}) {
  closeModal(true);
  modalRoot = document.createElement("div");
  modalRoot.className = "modal-root";
  modalRoot.innerHTML =
    '<div class="modal ' + (options.narrow ? "narrow" : "") + '" role="dialog" aria-modal="true">' +
    '<button type="button" class="icon-btn modal-close" aria-label="Close">' + icon("x") + "</button>" +
    html + "</div>";
  modalOnClose = options.onClose || null;
  document.body.appendChild(modalRoot);
  document.body.style.overflow = "hidden";

  modalRoot.addEventListener("click", (e) => {
    if (e.target === modalRoot || e.target.closest(".modal-close")) closeModal();
  });
  setTimeout(() => {
    const focus = modalRoot && modalRoot.querySelector("[autofocus], .modal-close");
    if (focus) focus.focus();
  }, 50);
  return modalRoot.querySelector(".modal");
}

function closeModal(instant) {
  if (!modalRoot) return;
  const root = modalRoot;
  const cb = modalOnClose;
  modalRoot = null;
  modalOnClose = null;
  document.body.style.overflow = "";
  if (cb) cb();
  if (instant) {
    root.remove();
    return;
  }
  root.classList.add("closing");
  setTimeout(() => root.remove(), 220);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalRoot) closeModal();
});

/* ---------- App shell ---------- */
const NAV = [
  { page: "home", href: "index.html", label: "Home", icon: "home" },
  { page: "store", href: "store.html", label: "Buy", icon: "bag" },
  { page: "sell", href: "sell.html", label: "Sell", icon: "plus" },
  { page: "trade", href: "trade.html", label: "Trade", icon: "swap" },
  { page: "profile", href: "profile.html", label: "Profile", icon: "user" },
];

function renderShell() {
  const page = document.body.dataset.page;
  const user = getUser();

  const header = document.getElementById("app-header");
  if (header) {
    const links = NAV.map((n) =>
      '<a href="' + n.href + '" class="' + (n.page === page ? "active" : "") + '">' + icon(n.icon) + n.label + "</a>"
    ).join("");

    const account = user
      ? '<a href="profile.html" class="user-chip" aria-label="Your profile">' +
        avatar({ name: user.firstName + " " + user.lastName, college: user.college, avatar: user.avatar }) +
        '<span class="name">' + esc(user.firstName) + "<small>" + esc(user.college) + "</small></span></a>"
      : '<a href="join.html" class="btn btn-primary btn-sm join-btn">Join RoeExchange</a>';

    header.outerHTML =
      '<header class="app-header"><div class="container header-inner">' +
      '<a href="index.html" class="brand"><img src="images/logo.png" alt="RoeExchange — home"></a>' +
      '<nav class="top-nav" aria-label="Main">' + links + "</nav>" +
      '<div class="header-actions">' +
      '<a href="profile.html#favourites" class="icon-btn" aria-label="Favourites">' + icon("heart") +
      '<span class="count" data-fav-count></span></a>' + account + "</div></div></header>";
  }

  const tabs = document.createElement("nav");
  tabs.className = "tab-bar";
  tabs.setAttribute("aria-label", "App");
  tabs.innerHTML = NAV.map((n) => {
    const active = n.page === page ? "active" : "";
    if (n.page === "sell") {
      return '<a href="' + n.href + '" class="sell-tab ' + active + '"><span class="bubble">' + icon("plus") + "</span>Sell</a>";
    }
    return '<a href="' + n.href + '" class="' + active + '">' + icon(n.icon) + n.label + "</a>";
  }).join("");
  document.body.appendChild(tabs);

  const footer = document.getElementById("app-footer");
  if (footer) {
    footer.outerHTML =
      '<footer class="app-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div><img src="images/logo.png" alt="RoeExchange"><p>A safe and reliable space to buy, sell or exchange products near you without leaving the university.</p></div>' +
      '<div><h4>Explore</h4><ul><li><a href="store.html">Buy something</a></li><li><a href="sell.html">Sell something</a></li><li><a href="trade.html">Trade</a></li></ul></div>' +
      '<div><h4>Your account</h4><ul><li><a href="profile.html">Profile</a></li><li><a href="profile.html#favourites">Favourites</a></li><li><a href="join.html">Join</a></li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom">© ' + new Date().getFullYear() + " RoeExchange · University of Roehampton student project</div>" +
      "</div></footer>";
  }

  updateFavCount();
}

/* pages marked data-auth="required" need an account first */
function guard() {
  if (document.body.dataset.auth === "required" && !getUser()) {
    location.replace(joinUrl(currentPath() + location.hash));
    return false;
  }
  return true;
}

/* ---------- Favourites ---------- */
function updateFavCount() {
  const n = getFavs().length;
  document.querySelectorAll("[data-fav-count]").forEach((el) => {
    el.textContent = n;
    el.dataset.n = n;
  });
}

function toggleFav(id) {
  const favs = getFavs();
  const on = !favs.includes(id);
  const next = on ? favs.concat(id) : favs.filter((f) => f !== id);
  store.set("roe-favs", next);
  document.querySelectorAll('.fav[data-fav="' + CSS.escape(id) + '"]').forEach((btn) => {
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", on);
    btn.classList.remove("pop");
    void btn.offsetWidth;
    btn.classList.add("pop");
  });
  updateFavCount();
  toast(on ? "Saved to your favourites" : "Removed from favourites", "heart");
  document.dispatchEvent(new CustomEvent("favs-changed"));
}

function favButton(id) {
  const on = getFavs().includes(id);
  return '<button type="button" class="fav ' + (on ? "on" : "") + '" data-fav="' + esc(id) +
    '" aria-pressed="' + on + '" aria-label="Save to favourites">' + icon("heart") + "</button>";
}

/* ---------- Product cards ---------- */
function productMedia(p, extraClass = "") {
  if (p.image) return '<img class="' + extraClass + '" src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">';
  const cat = CATEGORIES[p.category];
  return '<span class="placeholder">' + icon(cat ? cat.icon : "image") + "</span>";
}

function productCard(p, options = {}) {
  const sold = p.soldOut;
  const own = p.own ? '<span class="badge badge-dark">Your listing</span>' : "";
  const cond = sold ? "" : own || (p.condition ? condBadge(p.condition) : "");
  const rating = p.rating
    ? '<span class="rating">' + icon("star") + p.rating.toFixed(1) + "</span>"
    : '<span class="rating">New</span>';
  const delay = options.index != null ? ' style="animation-delay:' + Math.min(options.index * 45, 500) + 'ms"' : "";

  return '<article class="p-card ' + (sold ? "sold" : "") + '" data-id="' + esc(p.id) + '"' + delay +
    (sold ? "" : ' tabindex="0" role="button" aria-label="' + esc(p.title + ", " + money(p.price)) + '"') + ">" +
    '<div class="p-media">' + productMedia(p, p.own && p.image ? "cover" : "") + cond + favButton(p.id) + "</div>" +
    '<div class="p-body">' +
    '<h3 class="p-title">' + esc(p.title) + "</h3>" +
    '<span class="p-price">' + money(p.price) + "</span>" +
    '<div class="p-seller">' + avatar({ name: p.seller, college: p.college, avatar: p.sellerAvatar }, "sm") +
    "<span>By <b>" + esc(p.seller) + "</b></span>" + rating + "</div>" +
    "</div>" +
    (options.owner ? ownerActions(p) : "") +
    "</article>";
}

function ownerActions(p) {
  return '<div class="owner-actions">' +
    '<button type="button" class="btn btn-light btn-sm" data-toggle-sold="' + esc(p.id) + '">' +
    (p.soldOut ? "Mark as available" : "Mark as sold") + "</button>" +
    '<button type="button" class="btn btn-danger btn-sm" data-delete-listing="' + esc(p.id) + '" aria-label="Delete listing">' +
    icon("trash") + "</button></div>";
}

function skeletons(n) {
  let html = "";
  for (let i = 0; i < n; i++) {
    html += '<div class="skeleton"><div class="sk-media"></div><div class="sk-line"></div><div class="sk-line short"></div></div>';
  }
  return html;
}

/* one listener for every card on every page */
document.addEventListener("click", (e) => {
  if (e.target.closest(".preview-wrap")) return;
  const fav = e.target.closest(".fav[data-fav]");
  if (fav) {
    e.stopPropagation();
    toggleFav(fav.dataset.fav);
    return;
  }
  if (e.target.closest(".owner-actions")) return;
  const card = e.target.closest(".p-card[data-id]:not(.sold)");
  if (card && !card.closest(".preview-wrap")) openProduct(card.dataset.id);
});

document.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".p-card[data-id]:not(.sold)")) {
    e.preventDefault();
    openProduct(e.target.dataset.id);
  }
});

/* ---------- Product detail + chat ---------- */
function openProduct(id) {
  const p = findProduct(id);
  if (!p || p.soldOut) return;
  const cat = CATEGORIES[p.category] || { label: "Other", icon: "sparkles" };
  const user = getUser();
  const sellerCollege = p.college ? p.college + " college" : "Roehampton";
  const stars = p.rating
    ? '<span class="rating">' + icon("star") + p.rating.toFixed(1) + ' <small style="font-weight:400;color:var(--muted)">(' + p.reviews + ")</small></span>"
    : '<span class="rating">New seller</span>';
  const negotiable = p.negotiable === "Yes";

  let action;
  if (p.own) {
    action = '<a href="profile.html" class="btn btn-dark btn-lg">' + icon("user") + "This is your listing</a>";
  } else {
    action = '<button type="button" class="btn btn-primary btn-lg" data-deal>' + icon("chat") + "DEAL</button>";
  }

  const modal = openModal(
    '<div class="detail">' +
      '<div class="detail-media">' + productMedia(p) + favButton(p.id) + "</div>" +
      '<div class="detail-info">' +
        '<div class="detail-main">' +
          '<span class="crumb">' + icon(cat.icon) + esc(cat.label) + " · " + ago(p.days || 0) + "</span>" +
          "<h2>" + esc(p.title) + "</h2>" +
          '<div class="detail-price">' + money(p.price) + "</div>" +
          '<div class="detail-badges">' + condBadge(p.condition) +
            '<span class="badge ' + (negotiable ? "badge-yes" : "badge-no") + '">' + (negotiable ? "Negotiable" : "Fixed price") + "</span></div>" +
          '<div class="seller-card">' + avatar({ name: p.seller, college: p.college, avatar: p.sellerAvatar }, "lg") +
            "<div><strong>" + esc(p.seller) + "</strong><small>" + esc(sellerCollege) + "</small>" + stars + "</div>" +
            '<span class="badge badge-verified">' + icon("shield") + "Verified student</span></div>" +
          '<div class="detail-desc"><h3>Description of the product</h3><p>' + esc(p.description) + "</p></div>" +
          '<ul class="facts">' +
            '<li><span class="ic">' + icon("pin") + "</span><div><small>Delivery Method</small>" + esc(p.delivery) + "</div></li>" +
            '<li><span class="ic">' + icon("tag") + "</span><div><small>Product Condition</small>" + esc(p.condition) + "</div></li>" +
            '<li><span class="ic">' + icon("chat") + "</span><div><small>Can it be negotiated?</small>" + esc(p.negotiable) + "</div></li>" +
          "</ul>" +
          '<div class="detail-actions">' + action + "</div>" +
        "</div>" +
        '<div class="chat" aria-live="polite">' +
          '<div class="chat-head">' +
            '<button type="button" class="icon-btn" data-chat-back aria-label="Back to product">' + icon("back") + "</button>" +
            avatar({ name: p.seller, college: p.college, avatar: p.sellerAvatar }) +
            "<div><strong>" + esc(p.seller) + "</strong><small>Online now</small></div></div>" +
          '<div class="chat-msgs"></div>' +
          '<div class="quick">' +
            "<button type=\"button\">When can we meet?</button>" +
            "<button type=\"button\">Can you do a lower price?</button>" +
            "<button type=\"button\">Great, I'll take it!</button>" +
          "</div>" +
          '<form class="chat-form"><input class="input" name="msg" placeholder="Write a message…" autocomplete="off" aria-label="Message">' +
          '<button type="submit" class="btn btn-primary" aria-label="Send">' + icon("send") + "</button></form>" +
        "</div>" +
      "</div>" +
    "</div>",
    {
      onClose: () => {
        if (document.body.dataset.page === "store" && location.hash) {
          history.replaceState(null, "", location.pathname + location.search);
        }
      },
    }
  );

  if (document.body.dataset.page === "store") {
    history.replaceState(null, "", location.pathname + location.search + "#" + p.id);
  }

  const main = modal.querySelector(".detail-main");
  const chat = modal.querySelector(".chat");
  const msgs = modal.querySelector(".chat-msgs");
  let started = false;

  const addMsg = (text, who) => {
    const m = document.createElement("div");
    m.className = "msg " + who;
    m.textContent = text;
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
  };

  const reply = (text) => {
    const typing = document.createElement("div");
    typing.className = "msg them";
    typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addMsg(text, "them");
    }, 1100);
  };

  const answer = (text) => {
    const t = text.toLowerCase();
    if (/(price|cheaper|lower|discount|less)/.test(t)) {
      return negotiable
        ? "I could do " + money(Math.round(p.price * 0.9 * 100) / 100) + " if you can pick it up this week 😊"
        : "Sorry, the price is fixed 🙏 but it's in really good condition!";
    }
    if (/(meet|when|where|time|pick)/.test(t)) {
      return "How about tomorrow at 1pm? We can meet at: " + p.delivery + ".";
    }
    if (/(take|buy|deal|yes|great)/.test(t)) {
      return "Perfect! I'll keep it for you. See you on campus 👍";
    }
    return "Sounds good! Let me know when you're free 🙂";
  };

  const send = (text) => {
    if (!text.trim()) return;
    addMsg(text, "me");
    reply(answer(text));
  };

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-deal]")) {
      if (!user) {
        closeModal(true);
        location.href = joinUrl("store.html#" + p.id);
        return;
      }
      main.hidden = true;
      chat.classList.add("open");
      if (!started) {
        started = true;
        addMsg("You started a deal for " + p.title + " · " + money(p.price), "system");
        addMsg("Hi " + p.seller + "! Is the " + p.title + " still available?", "me");
        setTimeout(() => reply("Hi " + user.firstName + "! Yes, it's still available 😊 We can meet at: " + p.delivery + "."), 300);
      }
      chat.querySelector("input").focus();
    }
    if (e.target.closest("[data-chat-back]")) {
      chat.classList.remove("open");
      main.hidden = false;
    }
    const quick = e.target.closest(".quick button");
    if (quick) send(quick.textContent);
  });

  modal.querySelector(".chat-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.elements.msg;
    send(input.value);
    input.value = "";
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((el) => io.observe(el));
}

/* ---------- Field validation ---------- */
function setInvalid(field, invalid) {
  if (field) field.classList.toggle("invalid", invalid);
  return !invalid;
}

function validateFields(root) {
  let ok = true;
  let first = null;
  root.querySelectorAll("[data-validate]").forEach((field) => {
    const input = field.querySelector("input, select, textarea");
    let valid;
    if (input.type === "radio") {
      valid = !!field.querySelector("input:checked");
    } else {
      valid = input.checkValidity() && input.value.trim() !== "";
    }
    setInvalid(field, !valid);
    if (!valid) {
      ok = false;
      if (!first) first = input;
    }
  });
  if (first) first.focus();
  return ok;
}

document.addEventListener("input", (e) => {
  const field = e.target.closest(".field.invalid");
  if (field && e.target.checkValidity() && (e.target.type === "radio" || e.target.value.trim())) {
    field.classList.remove("invalid");
  }
});

/* ---------- Stepper ---------- */
function setStep(root, n) {
  root.querySelectorAll(".stepper .s").forEach((s, i) => {
    s.classList.toggle("active", i === n);
    s.classList.toggle("done", i < n);
    s.querySelector("i").innerHTML = i < n ? icon("check") : String(i + 1);
  });
  root.querySelectorAll(".stepper .bar").forEach((b, i) => b.classList.toggle("done", i < n));
  root.querySelectorAll(".step-panel").forEach((p, i) => p.classList.toggle("active", i === n));
}

/* ---------- Photo picker (click + drag & drop) ---------- */
function photoPicker(zone, input, thumbs, max, onChange) {
  let photos = [];

  const draw = () => {
    thumbs.innerHTML = photos.map((src, i) =>
      '<div class="t"><img src="' + src + '" alt="Photo ' + (i + 1) + '">' +
      '<button type="button" data-remove="' + i + '" aria-label="Remove photo">' + icon("x") + "</button></div>"
    ).join("");
    onChange(photos);
  };

  const add = async (files) => {
    const list = Array.from(files).filter((f) => f.type.startsWith("image/"));
    for (const file of list) {
      if (photos.length >= max) {
        toast("You can add up to " + max + " photo" + (max > 1 ? "s" : ""), "image");
        break;
      }
      try {
        photos.push(await resizeImage(file));
      } catch (e) {
        toast("That picture couldn't be loaded", "image");
      }
    }
    draw();
  };

  zone.addEventListener("click", () => input.click());
  zone.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      input.click();
    }
  });
  input.addEventListener("change", () => {
    add(input.files);
    input.value = "";
  });
  ["dragenter", "dragover"].forEach((ev) => zone.addEventListener(ev, (e) => {
    e.preventDefault();
    zone.classList.add("drag");
  }));
  ["dragleave", "drop"].forEach((ev) => zone.addEventListener(ev, (e) => {
    e.preventDefault();
    zone.classList.remove("drag");
  }));
  zone.addEventListener("drop", (e) => add(e.dataTransfer.files));
  thumbs.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove]");
    if (!btn) return;
    photos.splice(Number(btn.dataset.remove), 1);
    draw();
  });

  return {
    get: () => photos,
    reset: () => {
      photos = [];
      draw();
    },
  };
}

/* =========================================================
   Pages
   ========================================================= */

/* ---------- Home ---------- */
function initHome() {
  const strip = document.getElementById("latest");
  if (!strip) return;

  const available = allProducts().filter((p) => !p.soldOut);
  const latest = available.slice().sort((a, b) => (a.days || 0) - (b.days || 0)).slice(0, 4);
  strip.innerHTML = latest.map((p, i) => productCard(p, { index: i })).join("");

  const sellers = new Set(allProducts().map((p) => p.seller));
  document.getElementById("stat-items").textContent = available.length;
  document.getElementById("stat-sellers").textContent = sellers.size;

  const newest = latest[0];
  const fc = document.getElementById("float-latest");
  if (newest && fc) {
    fc.innerHTML = (newest.image ? '<img class="thumb-mini" src="' + esc(newest.image) + '" alt="">' : "") +
      "<div><small>Just listed</small><strong>" + esc(newest.title) + " · " + money(newest.price) + "</strong></div>";
  }

  const user = getUser();
  const hello = document.getElementById("hello");
  if (user && hello) hello.textContent = "Welcome back, " + user.firstName + "!";
}

/* ---------- Store ---------- */
function initStore() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const state = {
    q: "",
    cat: params().get("cat") || "all",
    sort: "newest",
    condition: "any",
    max: 500,
    showSold: true,
  };
  if (!CATEGORIES[state.cat]) state.cat = "all";

  const chips = document.getElementById("cat-chips");
  const chipList = [{ key: "all", label: "All", icon: "grid" }].concat(
    Object.keys(CATEGORIES).map((k) => ({ key: k, label: CATEGORIES[k].label, icon: CATEGORIES[k].icon }))
  );
  chips.innerHTML = chipList.map((c) =>
    '<button type="button" class="chip" data-cat="' + c.key + '">' + icon(c.icon) + c.label + "</button>"
  ).join("");

  const q = document.getElementById("q");
  const sort = document.getElementById("sort");
  const condition = document.getElementById("condition");
  const max = document.getElementById("max");
  const maxValue = document.getElementById("max-value");
  const showSold = document.getElementById("show-sold");
  const count = document.getElementById("count");
  const banner = document.getElementById("cat-banner");

  const highest = Math.ceil(Math.max.apply(null, allProducts().map((p) => p.price)));
  max.max = Math.max(500, highest);
  max.value = max.max;
  state.max = Number(max.max);
  maxValue.textContent = money(state.max);

  const render = () => {
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === state.cat));

    const term = state.q.trim().toLowerCase();
    let list = allProducts().filter((p) => {
      if (state.cat !== "all" && p.category !== state.cat) return false;
      if (!state.showSold && p.soldOut) return false;
      if (state.condition !== "any" && String(p.condition).toLowerCase() !== state.condition) return false;
      if (p.price > state.max) return false;
      if (term) {
        const text = [p.title, p.seller, p.description, p.college, CATEGORIES[p.category] && CATEGORIES[p.category].label].join(" ").toLowerCase();
        if (!text.includes(term)) return false;
      }
      return true;
    });

    if (state.sort === "low") list.sort((a, b) => a.price - b.price);
    else if (state.sort === "high") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => (a.days || 0) - (b.days || 0));
    // sold items always last
    list.sort((a, b) => (a.soldOut ? 1 : 0) - (b.soldOut ? 1 : 0));

    const cat = CATEGORIES[state.cat];
    banner.innerHTML = cat
      ? '<div class="cat-banner"><img src="' + cat.image + '" alt="">' + esc(cat.tagline) + "</div>"
      : "";

    count.textContent = list.length + (list.length === 1 ? " product" : " products");

    grid.innerHTML = list.length
      ? list.map((p, i) => productCard(p, { index: i })).join("")
      : '<div class="empty" style="grid-column:1/-1"><div class="ic">' + icon("search") + "</div>" +
        "<h3>No products found</h3><p>Try another search or remove some filters. New items are listed every day!</p>" +
        '<button type="button" class="btn btn-primary" data-reset>Clear filters</button></div>';
  };

  const reset = () => {
    state.q = "";
    state.cat = "all";
    state.sort = "newest";
    state.condition = "any";
    state.max = Number(max.max);
    state.showSold = true;
    q.value = "";
    sort.value = "newest";
    condition.value = "any";
    max.value = max.max;
    maxValue.textContent = money(state.max);
    showSold.checked = true;
    render();
  };

  chips.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.cat = chip.dataset.cat;
    const url = state.cat === "all" ? "store.html" : "store.html?cat=" + state.cat;
    history.replaceState(null, "", url);
    render();
  });
  q.addEventListener("input", () => {
    state.q = q.value;
    render();
  });
  sort.addEventListener("change", () => {
    state.sort = sort.value;
    render();
  });
  condition.addEventListener("change", () => {
    state.condition = condition.value;
    render();
  });
  max.addEventListener("input", () => {
    state.max = Number(max.value);
    maxValue.textContent = money(state.max);
    render();
  });
  showSold.addEventListener("change", () => {
    state.showSold = showSold.checked;
    render();
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-reset]")) reset();
  });
  document.getElementById("filter-toggle").addEventListener("click", (e) => {
    const open = document.getElementById("filters").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  document.addEventListener("favs-changed", () => {});

  // short skeleton so the grid fades in like an app
  grid.innerHTML = skeletons(8);
  setTimeout(() => {
    render();
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) openProduct(id);
  }, 350);
}

/* ---------- Sell ---------- */
function initSell() {
  const form = document.getElementById("sell-form");
  if (!form) return;
  const user = getUser();

  const delivery = form.elements.delivery;
  delivery.innerHTML = '<option value="">Choose a meeting point on campus</option>' +
    DELIVERY_POINTS.map((d) => "<option>" + esc(d) + "</option>").join("");

  const catRow = document.getElementById("cat-choices");
  catRow.innerHTML = Object.keys(CATEGORIES).map((k) =>
    '<span class="choice"><input type="radio" name="category" id="c-' + k + '" value="' + k + '" required>' +
    '<label for="c-' + k + '">' + icon(CATEGORIES[k].icon) + CATEGORIES[k].label + "</label></span>"
  ).join("");

  const desc = form.elements.description;
  const counter = document.getElementById("desc-count");
  const preview = document.getElementById("preview");

  const picker = photoPicker(
    document.getElementById("dropzone"),
    document.getElementById("photos"),
    document.getElementById("thumbs"),
    4,
    () => updatePreview()
  );

  const draft = () => {
    const data = new FormData(form);
    const photos = picker.get();
    return {
      id: "preview",
      title: data.get("title") || "Your product title",
      category: data.get("category") || "gadgets",
      condition: data.get("condition") || "Used",
      price: Number(data.get("price")) || 0,
      negotiable: form.elements.negotiable.checked ? "Yes" : "No",
      description: data.get("description"),
      delivery: data.get("delivery"),
      image: photos[0] || null,
      images: photos,
      seller: user.firstName,
      college: user.college,
      sellerAvatar: user.avatar || null,
      own: true,
    };
  };

  function updatePreview() {
    const p = draft();
    p.own = false;
    preview.innerHTML = productCard(p).replace('class="p-card ', 'class="p-card preview ');
    counter.textContent = desc.value.length + " / 300";
  }

  form.addEventListener("input", updatePreview);
  form.addEventListener("change", updatePreview);
  updatePreview();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateFields(form)) {
      toast("Please complete the highlighted fields", "x");
      return;
    }

    const listing = draft();
    listing.id = "u" + Date.now();
    listing.createdAt = Date.now();
    listing.rating = null;
    listing.reviews = 0;
    delete listing.days;

    const listings = getListings();
    listings.unshift(listing);
    let saved = store.set("roe-listings", listings);
    if (!saved) {
      // probably too many photos for the browser storage: keep only the cover
      listing.images = listing.image ? [listing.image] : [];
      saved = store.set("roe-listings", listings);
    }
    if (!saved) {
      toast("Your browser storage is full — try with fewer photos", "x");
      return;
    }

    form.hidden = true;
    const done = document.getElementById("sell-done");
    done.querySelector("[data-view]").href = "store.html#" + listing.id;
    done.classList.add("show");
    document.querySelector(".preview-wrap .label span").textContent = "Your listing is live";
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast("Your product is now in the store!");
  });

  document.getElementById("sell-again").addEventListener("click", () => {
    form.reset();
    picker.reset();
    form.hidden = false;
    document.getElementById("sell-done").classList.remove("show");
    document.querySelector(".preview-wrap .label span").textContent = "Live preview";
    updatePreview();
  });
}

/* ---------- Trade ---------- */
function tradeCard(t, options = {}) {
  const media = t.image
    ? '<img src="' + esc(t.image) + '" alt="' + esc(t.item) + '">'
    : icon(t.icon || "swap");
  const bg = t.image ? "#e9efec" : "linear-gradient(135deg," + (t.color || collegeColor(t.college)) + ",#13a574)";
  const own = t.own;
  const action = options.owner
    ? '<button type="button" class="btn btn-danger btn-sm" data-delete-trade="' + esc(t.id) + '">' + icon("trash") + "Delete</button>"
    : own
      ? '<span class="badge badge-dark">Your offer</span>'
      : '<button type="button" class="btn btn-primary btn-sm" data-offer="' + esc(t.id) + '">' + icon("swap") + "Offer swap</button>";

  return '<article class="t-card">' +
    '<div class="t-media" style="background:' + bg + '">' + media + '<span class="badge badge-dark">' + ago(t.days || 0) + "</span></div>" +
    '<div class="t-body">' +
    "<h3>" + esc(t.item) + "</h3>" +
    (t.info ? "<p>" + esc(t.info) + "</p>" : "") +
    '<div class="wants">' + icon("swap") + "<div><b>Wants in exchange</b>" + esc(t.wants) + "</div></div>" +
    '<div class="t-foot"><span class="who">' + avatar({ name: t.name, college: t.college, avatar: t.avatar }, "sm") +
    "<span><b>" + esc(t.name) + "</b><small>" + esc(t.college) + "</small></span></span>" + action + "</div>" +
    "</div></article>";
}

function allTrades() {
  const own = getTrades().map((t) => Object.assign({}, t, { days: Math.floor((Date.now() - t.createdAt) / DAY) }));
  return own.concat(SEED_TRADES);
}

function initTrade() {
  const board = document.getElementById("board");
  if (!board) return;
  const user = getUser();

  const render = () => {
    const list = allTrades();
    board.innerHTML = list.map((t) => tradeCard(t)).join("");
    document.getElementById("trade-count").textContent = list.length + " offers on the board";
  };
  render();

  board.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-offer]");
    if (!btn) return;
    const t = allTrades().find((x) => x.id === btn.dataset.offer);
    btn.disabled = true;
    btn.innerHTML = icon("check") + "Request sent";
    toast("Swap request sent to " + t.name + "! They'll reply at " + user.email, "swap");
  });

  document.querySelectorAll("[data-propose]").forEach((b) => b.addEventListener("click", proposeTrade));
  if (location.hash === "#propose") proposeTrade();

  function proposeTrade() {
    const modal = openModal(
      '<div class="modal-body">' +
      '<h2 style="font-size:22px;margin-bottom:4px">Propose a trade</h2>' +
      '<p style="color:var(--muted);margin-bottom:20px">Tell other students what you have and what you would like in exchange.</p>' +
      '<div class="stepper">' +
        '<div class="s active"><i>1</i><span>Product details</span></div><div class="bar"></div>' +
        '<div class="s"><i>2</i><span>Extra details</span></div>' +
      "</div>" +
      '<form id="trade-form" novalidate>' +
        '<div class="step-panel active">' +
          '<div class="field" data-validate><label for="t-name">Hello, my name is:</label>' +
          '<input class="input" id="t-name" name="name" required value="' + esc(user.firstName + " " + user.lastName) + '">' +
          '<p class="error">Please tell us your name.</p></div>' +
          '<div class="field" data-validate><label for="t-item">I have this...</label>' +
          '<input class="input" id="t-item" name="item" required placeholder="e.g. Desk lamp, textbook, headphones" autofocus>' +
          '<p class="error">What would you like to trade?</p></div>' +
          '<div class="field"><span class="label">Add a picture of your product here <small>(optional)</small></span>' +
          '<div class="dropzone" id="t-zone" tabindex="0" role="button">' + icon("camera") +
          "<strong>Click or drop a photo</strong><span>JPG or PNG</span></div>" +
          '<input type="file" id="t-photo" accept="image/*" hidden><div class="thumbs" id="t-thumbs"></div></div>' +
          '<div class="step-actions"><button type="button" class="btn btn-ghost" data-cancel>Cancel</button>' +
          '<button type="button" class="btn btn-primary" data-next>Continue' + icon("arrow") + "</button></div>" +
        "</div>" +
        '<div class="step-panel">' +
          '<div class="field" data-validate><label for="t-info">More information about the product:</label>' +
          '<textarea class="input" id="t-info" name="info" required placeholder="Condition, size, how long you\'ve had it…"></textarea>' +
          '<p class="error">Add a short description.</p></div>' +
          '<div class="field" data-validate><label for="t-wants">I would like to change my current product for:</label>' +
          '<input class="input" id="t-wants" name="wants" required placeholder="e.g. A Bluetooth speaker">' +
          '<p class="error">Tell us what you want in exchange.</p></div>' +
          '<div class="field" data-validate><label for="t-contact">For more information you can contact me at:</label>' +
          '<input class="input" id="t-contact" name="contact" required value="' + esc(user.email) + '">' +
          '<p class="error">Add a way to contact you.</p></div>' +
          '<div class="step-actions"><button type="button" class="btn btn-light" data-prev>' + icon("back") + "Back</button>" +
          '<button type="submit" class="btn btn-primary">' + icon("check") + "Finish</button></div>" +
        "</div>" +
      "</form></div>",
      { narrow: true }
    );

    const form = modal.querySelector("#trade-form");
    const panels = form.querySelectorAll(".step-panel");
    const picker = photoPicker(modal.querySelector("#t-zone"), modal.querySelector("#t-photo"), modal.querySelector("#t-thumbs"), 1, () => {});

    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-cancel]")) closeModal();
      if (e.target.closest("[data-next]") && validateFields(panels[0])) setStep(modal, 1);
      if (e.target.closest("[data-prev]")) setStep(modal, 0);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateFields(panels[1])) return;
      const data = new FormData(form);
      const trade = {
        id: "ut" + Date.now(),
        name: data.get("name").split(" ")[0],
        college: user.college,
        avatar: user.avatar || null,
        item: data.get("item"),
        info: data.get("info"),
        wants: data.get("wants"),
        contact: data.get("contact"),
        image: picker.get()[0] || null,
        icon: "swap",
        createdAt: Date.now(),
        own: true,
      };
      const trades = getTrades();
      trades.unshift(trade);
      if (!store.set("roe-trades", trades)) {
        trade.image = null;
        store.set("roe-trades", trades);
      }
      closeModal();
      render();
      board.scrollIntoView({ behavior: "smooth", block: "start" });
      toast("Your trade offer is on the board!", "swap");
    });
  }
}

/* ---------- Profile ---------- */
function initProfile() {
  const card = document.getElementById("profile-card");
  if (!card) return;
  const user = getUser();
  const college = COLLEGES[user.college] || { color: "#13a574", mascot: "" };

  const renderCard = () => {
    const listings = getListings();
    const trades = getTrades();
    card.innerHTML =
      '<div class="profile-cover" style="background:linear-gradient(135deg,' + college.color + ',#13a574)"></div>' +
      avatar({ name: user.firstName + " " + user.lastName, college: user.college, avatar: user.avatar }, "xl") +
      "<h1>" + esc(user.firstName + " " + user.lastName) + "</h1>" +
      '<p class="sub">' + esc(user.course) + " · " + esc(user.year) + "</p>" +
      '<span class="college-badge" style="background:' + college.color + '"><img src="' + college.mascot + '" alt="">' + esc(user.college) + "</span>" +
      '<div class="profile-stats">' +
        "<div><strong>" + listings.length + "</strong><span>Listings</span></div>" +
        "<div><strong>" + trades.length + "</strong><span>Trades</span></div>" +
        "<div><strong>" + getFavs().length + "</strong><span>Favourites</span></div>" +
      "</div>" +
      '<ul class="profile-info">' +
        "<li>" + icon("mail") + esc(user.email) + "</li>" +
        "<li>" + icon("id") + "Student ID " + esc(user.studentId) + "</li>" +
        "<li>" + icon("shield") + "Verified Roehampton student</li>" +
      "</ul>" +
      '<button type="button" class="btn btn-light" id="logout">' + icon("logout") + "Log out</button>";
  };

  const empty = (ic, title, text, href, label) =>
    '<div class="empty"><div class="ic">' + icon(ic) + "</div><h3>" + title + "</h3><p>" + text + "</p>" +
    '<a href="' + href + '" class="btn btn-primary">' + label + "</a></div>";

  const renderPanels = () => {
    const listings = allProducts().filter((p) => p.own);
    const trades = allTrades().filter((t) => t.own);
    const favs = getFavs().map(findProduct).filter(Boolean);

    document.getElementById("n-listings").textContent = listings.length;
    document.getElementById("n-trades").textContent = trades.length;
    document.getElementById("n-favs").textContent = favs.length;

    document.getElementById("panel-listings").innerHTML = listings.length
      ? '<div class="grid">' + listings.map((p, i) => productCard(p, { owner: true, index: i })).join("") + "</div>"
      : empty("tag", "You haven't listed anything yet", "Something in good condition but used? List it on RoeExchange in less than a minute.", "sell.html", "Sell something");

    document.getElementById("panel-trades").innerHTML = trades.length
      ? '<div class="trade-grid">' + trades.map((t) => tradeCard(t, { owner: true })).join("") + "</div>"
      : empty("swap", "No trade offers yet", "Give new life to the items you no longer use and get something new in exchange.", "trade.html#propose", "Propose a trade");

    document.getElementById("panel-favourites").innerHTML = favs.length
      ? '<div class="grid">' + favs.map((p, i) => productCard(p, { index: i })).join("") + "</div>"
      : empty("heart", "No favourites yet", "Tap the heart on any product to save it here for later.", "store.html", "Browse the store");

    renderCard();
  };

  const tabs = document.querySelectorAll(".tab");
  const showTab = (name) => {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + name));
  };
  tabs.forEach((t) => t.addEventListener("click", () => {
    showTab(t.dataset.tab);
    history.replaceState(null, "", "#" + t.dataset.tab);
  }));

  document.addEventListener("click", (e) => {
    const sold = e.target.closest("[data-toggle-sold]");
    if (sold) {
      const listings = getListings().map((p) => (p.id === sold.dataset.toggleSold ? Object.assign(p, { soldOut: !p.soldOut }) : p));
      store.set("roe-listings", listings);
      toast("Listing updated");
      renderPanels();
    }
    const del = e.target.closest("[data-delete-listing]");
    if (del && confirm("Delete this listing?")) {
      store.set("roe-listings", getListings().filter((p) => p.id !== del.dataset.deleteListing));
      toast("Listing deleted", "trash");
      renderPanels();
    }
    const delT = e.target.closest("[data-delete-trade]");
    if (delT && confirm("Delete this trade offer?")) {
      store.set("roe-trades", getTrades().filter((t) => t.id !== delT.dataset.deleteTrade));
      toast("Trade offer deleted", "trash");
      renderPanels();
    }
    if (e.target.closest("#logout") && confirm("Log out of RoeExchange?")) {
      store.remove("roe-user");
      location.href = "index.html";
    }
  });

  document.addEventListener("favs-changed", renderPanels);

  renderPanels();
  const hash = location.hash.slice(1);
  showTab(["listings", "trades", "favourites"].includes(hash) ? hash : "listings");
}

/* ---------- Join (onboarding) ---------- */
function initJoin() {
  const root = document.getElementById("join");
  if (!root) return;
  const next = params().get("next");
  let avatarData = null;
  let college = null;

  const existing = getUser();
  if (existing) {
    const note = document.getElementById("already");
    note.hidden = false;
    note.querySelector("b").textContent = existing.firstName;
  }

  // avatar picker
  const avatarBox = document.getElementById("avatar-box");
  const avatarInput = document.getElementById("avatar-input");
  avatarBox.addEventListener("click", () => avatarInput.click());
  avatarBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      avatarInput.click();
    }
  });
  avatarInput.addEventListener("change", async () => {
    const file = avatarInput.files[0];
    if (!file) return;
    try {
      avatarData = await resizeImage(file, 300);
      avatarBox.innerHTML = '<img src="' + avatarData + '" alt="Your profile picture">';
    } catch (e) {
      toast("That picture couldn't be loaded", "image");
    }
  });

  // colleges
  const list = document.getElementById("college-list");
  list.innerHTML = Object.keys(COLLEGES).map((name) => {
    const c = COLLEGES[name];
    return '<button type="button" class="college" data-college="' + esc(name) + '" aria-pressed="false">' +
      '<span class="tick">' + icon("check") + "</span>" +
      '<img src="' + c.mascot + '" alt="' + esc(name) + " mascot, a " + c.animal.toLowerCase() + '">' +
      '<span class="stripe" style="background:' + c.color + '"></span>' +
      "<strong>" + esc(name) + "</strong><small>The " + c.animal + "s</small></button>";
  }).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".college");
    if (!btn) return;
    college = btn.dataset.college;
    list.querySelectorAll(".college").forEach((b) => {
      b.classList.toggle("selected", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    document.getElementById("college-error").hidden = true;
  });

  const form = document.getElementById("details-form");
  const panels = root.querySelectorAll(".step-panel");

  root.addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]");
    if (!go) return;
    const target = Number(go.dataset.go);
    if (target === 2 && !validateFields(panels[1])) return;
    setStep(root, target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("create").addEventListener("click", () => {
    if (!college) {
      document.getElementById("college-error").hidden = false;
      return;
    }
    const data = new FormData(form);
    const user = {
      firstName: data.get("firstName").trim(),
      lastName: data.get("lastName").trim(),
      year: data.get("year"),
      email: data.get("email").trim().toLowerCase(),
      studentId: data.get("studentId").trim(),
      course: data.get("course").trim(),
      college: college,
      avatar: avatarData,
    };
    if (!store.set("roe-user", user)) {
      user.avatar = null;
      store.set("roe-user", user);
    }
    toast("Welcome to RoeExchange, " + user.firstName + "!");
    setTimeout(() => {
      location.href = next || "index.html";
    }, 800);
  });
}

/* ---------- Boot ---------- */
if (guard()) {
  renderShell();
  renderIcons();
  initReveal();
  initHome();
  initStore();
  initSell();
  initTrade();
  initProfile();
  initJoin();
}
