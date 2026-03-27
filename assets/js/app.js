/* ================================================================
   SWAG AUTO — APP JS  v2
   Overlay nav · GSAP animations · Lightbox · Counter
   ================================================================ */
'use strict';

/* ── CONFIG ─────────────────────────────────────────────────── */
const BASE = (() => {
  const SUB_PAGES = new Set([
    'contact','a-propos','services','galerie',
    'active-sound-system','covering-total-ou-partiel',
    'lustrage-et-renovation-de-carrosserie','peinture-etrier-de-frein',
    'protection-ceramique','protection-solaire-vitre-teinte',
    'ciel-etoile','mentions-legales','politique-de-confidentialite'
  ]);
  const parts = location.pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1];
  return (parts.length > 0 && SUB_PAGES.has(last)) ? '../' : './';
})();

const LINKS = {
  instagram: 'https://www.instagram.com/swagauto.54/',
  facebook: 'https://www.facebook.com/people/Swagauto/61577366181974/',
  tiktok: 'https://www.tiktok.com/@swagauto54',
  phone: 'tel:0980242400',
  email: 'mailto:swagauto@outlook.fr',
};

/* ── SVG ICONS ───────────────────────────────────────────────── */
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4C0 2.91.898 2 2.001 2H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
};

/* ── BUILD NAV ───────────────────────────────────────────────── */
function buildNav() {
  return `
<div class="topbar">
  <div class="container topbar-inner">
    <div class="topbar-left">
      <a href="${LINKS.phone}" class="topbar-link">${ICONS.phone} 09 80 24 24 00</a>
      <a href="${LINKS.email}" class="topbar-link">${ICONS.mail} swagauto@outlook.fr</a>
    </div>
    <div class="topbar-right">
      <span class="topbar-follow">Suivez-nous</span>
      <a href="${LINKS.instagram}" target="_blank" rel="noopener" class="topbar-social" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${LINKS.facebook}"  target="_blank" rel="noopener" class="topbar-social" aria-label="Facebook">${ICONS.facebook}</a>
      <a href="${LINKS.tiktok}"    target="_blank" rel="noopener" class="topbar-social" aria-label="TikTok">${ICONS.tiktok}</a>
    </div>
  </div>
</div>

<header id="site-nav">
  <div class="container nav-inner">
    <a href="${BASE}index.html" class="nav-logo" aria-label="Swag Auto Nancy">
      <img src="${BASE}assets/media/LogoSwagAuto.webp"
           alt="Swag Auto Nancy" width="160" height="44" fetchpriority="high">
    </a>
    <nav aria-label="Navigation principale">
      <ul class="nav-links">
        <li><a href="${BASE}index.html">Accueil</a></li>
        <li><a href="${BASE}a-propos/">À propos</a></li>
        <li class="nav-dropdown">
          <a href="${BASE}services/">Services</a>
          <div class="dropdown-menu">
            <a href="${BASE}protection-solaire-vitre-teinte/">Vitres teintées</a>
            <a href="${BASE}covering-total-ou-partiel/">Covering</a>
            <a href="${BASE}protection-ceramique/">Protection céramique</a>
            <a href="${BASE}lustrage-et-renovation-de-carrosserie/">Lustrage & rénovation</a>
            <a href="${BASE}peinture-etrier-de-frein/">Peinture étriers</a>
            <a href="${BASE}active-sound-system/">Active Sound System</a>
            <a href="${BASE}ciel-etoile/">Ciel étoilé</a>
          </div>
        </li>
        <li><a href="${BASE}galerie/">Galerie</a></li>
        <li><a href="${BASE}contact/">Contact</a></li>
      </ul>
    </nav>
    <div class="nav-right">
      <a href="${BASE}contact/" class="btn btn-red" style="font-size:.7rem;padding:11px 22px">Devis gratuit</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-overlay">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- FULLSCREEN OVERLAY MENU -->
<div class="nav-overlay" id="nav-overlay" role="dialog" aria-label="Menu principal" aria-hidden="true">
  <div class="nav-overlay-bg"></div>
  <div class="nav-overlay-bg2"></div>
  <div class="nav-overlay-inner">
    <nav class="overlay-links" aria-label="Navigation overlay">
      <a href="${BASE}index.html">Accueil</a>
      <a href="${BASE}a-propos/">À propos</a>

      <!-- Services : lien cliquable + bouton + pour dérouler -->
      <div class="overlay-service-row">
        <a href="${BASE}services/">Services</a>
        <button class="overlay-services-toggle" aria-expanded="false" aria-controls="overlay-services-sub" aria-label="Voir les services">+</button>
      </div>
      <div class="overlay-services-sub" id="overlay-services-sub" aria-hidden="true">
        <a href="${BASE}protection-solaire-vitre-teinte/">Vitres teintées</a>
        <a href="${BASE}covering-total-ou-partiel/">Covering</a>
        <a href="${BASE}protection-ceramique/">Protection céramique</a>
        <a href="${BASE}lustrage-et-renovation-de-carrosserie/">Lustrage &amp; rénovation</a>
        <a href="${BASE}peinture-etrier-de-frein/">Peinture étriers</a>
        <a href="${BASE}active-sound-system/">Active Sound System</a>
        <a href="${BASE}ciel-etoile/">Ciel étoilé</a>
      </div>

      <a href="${BASE}galerie/">Galerie</a>
      <a href="${BASE}contact/">Contact</a>
    </nav>
    <a href="${BASE}contact/" class="btn btn-red overlay-cta-btn">Devis gratuit</a>
    <div class="overlay-bottom">
      <div class="overlay-contact">
        <a href="${LINKS.phone}">09 80 24 24 00</a>
        <a href="${LINKS.email}">swagauto@outlook.fr</a>
        <a href="https://maps.google.com/?q=1+bis+rue+des+Trezelots+54425+Pulnoy" target="_blank" rel="noopener">Pulnoy (Nancy)</a>
        <div class="overlay-social">
          <a href="${LINKS.instagram}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${LINKS.facebook}" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="${LINKS.tiktok}" target="_blank" rel="noopener" class="social-btn" aria-label="TikTok">${ICONS.tiktok}</a>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

/* ── BUILD FOOTER ────────────────────────────────────────────── */
function buildFooter() {
  const social = `
    <a href="${LINKS.instagram}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">${ICONS.instagram}</a>
    <a href="${LINKS.facebook}"  target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">${ICONS.facebook}</a>
    <a href="${LINKS.tiktok}"   target="_blank" rel="noopener" class="social-btn" aria-label="TikTok">${ICONS.tiktok}</a>`;

  return `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${BASE}index.html">
          <img src="${BASE}assets/media/LogoSwagAuto.webp"
               alt="Swag Auto Nancy" width="140" height="38" loading="lazy">
        </a>
        <p>Expert en esthétique automobile à Nancy. Vitres teintées, covering, céramique GYEON, lustrage, ciel étoilé et Active Sound MAXHAUST.</p>
        <div class="social-row">${social}</div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="${BASE}protection-solaire-vitre-teinte/">Vitres teintées</a></li>
          <li><a href="${BASE}covering-total-ou-partiel/">Covering</a></li>
          <li><a href="${BASE}protection-ceramique/">Protection céramique</a></li>
          <li><a href="${BASE}lustrage-et-renovation-de-carrosserie/">Lustrage</a></li>
          <li><a href="${BASE}peinture-etrier-de-frein/">Peinture étriers</a></li>
          <li><a href="${BASE}active-sound-system/">Active Sound</a></li>
          <li><a href="${BASE}ciel-etoile/">Ciel étoilé</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Navigation</h5>
        <ul>
          <li><a href="${BASE}index.html">Accueil</a></li>
          <li><a href="${BASE}a-propos/">À propos</a></li>
          <li><a href="${BASE}galerie/">Galerie</a></li>
          <li><a href="${BASE}contact/">Contact</a></li>
          <li><a href="${BASE}mentions-legales/">Mentions légales</a></li>
          <li><a href="${BASE}politique-de-confidentialite/">Confidentialité</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <address>
          <span>${ICONS.pin} ZAC de la Porte Verte<br>1 bis rue des Trezelots<br>54425 Pulnoy</span>
          <a href="${LINKS.phone}">${ICONS.phone} 09 80 24 24 00</a>
          <a href="${LINKS.email}">${ICONS.mail} swagauto@outlook.fr</a>
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Swag Auto Nancy — Tous droits réservés</p>
      <nav aria-label="Liens légaux">
        <a href="${BASE}mentions-legales/">Mentions légales</a>
        <a href="${BASE}politique-de-confidentialite/">Confidentialité</a>
      </nav>
    </div>
  </div>
</footer>`;
}

/* ── PAGE HERO ENHANCE ───────────────────────────────────────── */
function initPageHeroEnhance() {
  const inner = document.querySelector('.page-hero-inner');
  if (!inner) return;
  if (inner.closest('.page-hero--full')) return;   /* hero centré plein écran */
  if (inner.closest('.page-hero--no-cta')) return; /* hero sans boutons injectés */

  /* CTA buttons */
  if (!inner.querySelector('.page-hero-cta')) {
    const cta = document.createElement('div');
    cta.className = 'page-hero-cta';
    cta.innerHTML = `
      <a href="${BASE}contact/" class="btn btn-red">Demandez un devis</a>
      <a href="tel:0980242400" class="btn btn-ghost">09 80 24 24 00</a>`;
    inner.appendChild(cta);
  }

  /* Reassurance pills */
  if (!inner.querySelector('.page-hero-pills')) {
    const pills = document.createElement('div');
    pills.className = 'page-hero-pills';
    pills.innerHTML = `
      <span class="page-hero-pill">Devis gratuit</span>
      <span class="page-hero-pill">Véhicule de prêt</span>
      <span class="page-hero-pill">Showroom Pulnoy</span>`;
    inner.appendChild(pills);
  }

  if (typeof gsap !== 'undefined') {
    gsap.from('.page-hero-cta .btn', {
      y: 20, opacity: 0, stagger: .12, duration: .6, ease: 'power3.out', delay: .8
    });
    gsap.from('.page-hero-pills', {
      y: 16, opacity: 0, duration: .55, ease: 'power3.out', delay: 1.05
    });
  }
}

/* ── FAQ ─────────────────────────────────────────────────────── */
function initFaq() {
  const items = document.querySelectorAll('details.faq-item');
  if (!items.length) return;

  const DURATION = 260; // légèrement > transition CSS (220ms) + buffer

  /* Gèle tous les ScrollTriggers le temps de l'animation pour éviter
     le recalcul de positions qui freezait la page */
  function freezeST() {
    if (typeof ScrollTrigger === 'undefined') return;
    ScrollTrigger.getAll().forEach(t => t.disable(false));
  }
  function unfreezeST() {
    if (typeof ScrollTrigger === 'undefined') return;
    ScrollTrigger.getAll().forEach(t => t.enable(false));
    ScrollTrigger.refresh();
  }

  function closeItem(details, cb) {
    const answer = details.querySelector('.faq-answer');
    details.setAttribute('data-closing', '');
    answer.addEventListener('transitionend', () => {
      details.removeAttribute('data-closing');
      details.open = false;
      cb?.();
    }, { once: true });
  }

  items.forEach(details => {
    details.querySelector('.faq-question').addEventListener('click', e => {
      e.preventDefault();
      freezeST();
      if (details.open) {
        closeItem(details, unfreezeST);
      } else {
        items.forEach(other => { if (other.open) closeItem(other); });
        details.open = true;
        setTimeout(unfreezeST, DURATION);
      }
    });
  });
}


/* ── PAGE LOADER ─────────────────────────────────────────────── */
function initLoader() {
  // Inject loader
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `<img src="${BASE}assets/media/LogoS_SwagAuto.webp" alt="" class="loader-logo" width="160" height="160" fetchpriority="high">`;
  document.body.insertAdjacentElement('afterbegin', loader);

  // Hide after page load (+ small delay for the pulse to feel intentional)
  const hide = () => setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.add('page-loaded'); // lève le ::before CSS simultanément
    setTimeout(() => loader.remove(), 420);
  }, 350);

  if (document.readyState === 'complete') { hide(); }
  else { window.addEventListener('load', hide, { once: true }); }
  // Failsafe : masque au bout de 1200ms quoi qu'il arrive
  setTimeout(() => {
    if (loader.parentNode) {
      loader.classList.add('fade-out');
      document.body.classList.add('page-loaded');
      setTimeout(() => loader.remove(), 420);
    }
  }, 1200);

  // Réinitialise l'opacité si page restaurée depuis le bfcache (bouton retour)
  window.addEventListener('pageshow', e => {
    if (e.persisted) document.body.classList.remove('page-exiting');
  });

  // Transition entre pages — fade to black au clic sur lien interne
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;
    try { if (new URL(href, location.href).origin !== location.origin) return; } catch { return; }
    e.preventDefault();
    document.body.classList.add('page-exiting');
    setTimeout(() => { location.href = href; }, 230);
  });
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Phase 1 — UI critique (immédiat)
  initLoader();
  document.body.insertAdjacentHTML('afterbegin', buildNav());
  document.body.insertAdjacentHTML('beforeend', buildFooter());
  markActiveLink();
  initNav();

  // Phase 2 — Animations (différé d'un frame pour ne pas bloquer le premier paint)
  requestAnimationFrame(() => {
    initPageHeroEnhance();
    initGSAP();
    initHexShine();
    initBgScroll();
  });

  // Phase 3 — Non-critique (après chargement complet)
  window.addEventListener('load', () => {
    initLightbox();
    initContactForm();
    initBTT();
    initFaq();
    initMobileVideoPlay();
  }, { once: true });
});

/* ── MOBILE VIDEO MODAL ──────────────────────────────────────── */
function initMobileVideoPlay() {
  if (window.innerWidth > 768) return; // desktop : rien à faire
  const trigger = document.getElementById('hero-video-trigger');
  if (!trigger) return;
  trigger.hidden = false;

  // Crée la modale
  const modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="video-modal-inner">
      <button class="video-modal-close" aria-label="Fermer">✕</button>
      <video src="${BASE}assets/media/video_swag_auto_compressed-1.mp4"
             playsinline controls preload="none"
             poster="${BASE}assets/media/Galerie_SwagAuto-10-min.webp">
      </video>
    </div>`;
  document.body.appendChild(modal);

  const modalVideo = modal.querySelector('video');

  const open = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalVideo.play();
  };
  const close = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.currentTime = 0;
  };

  trigger.addEventListener('click', open);
  modal.querySelector('.video-modal-close').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── ACTIVE LINK ─────────────────────────────────────────────── */
function markActiveLink() {
  const path = location.pathname;
  document.querySelectorAll('#site-nav .nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === '#') return;
    const segment = href.replace(BASE, '').replace('index.html', '').replace(/\/$/, '');
    const pathSegment = path.split('/').filter(Boolean).join('/');
    if (segment && pathSegment.includes(segment)) a.classList.add('active');
    if (segment === '' && (path === '/' || path.endsWith('index.html'))) a.classList.add('active');
  });
}

/* ── NAV ─────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const overlay = document.getElementById('nav-overlay');
  let isOpen = false;

  // Scroll: add .scrolled class
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  function openMenu() {
    isOpen = true;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    isOpen = false;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Réinitialiser l'accordéon services
    const servicesToggle = overlay.querySelector('.overlay-services-toggle');
    const servicesSub = document.getElementById('overlay-services-sub');
    if (servicesToggle) servicesToggle.setAttribute('aria-expanded', 'false');
    if (servicesSub) { servicesSub.classList.remove('open'); servicesSub.setAttribute('aria-hidden', 'true'); }
  }

  toggle?.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

  // Services accordion toggle
  overlay?.addEventListener('click', e => {
    const btn = e.target.closest('.overlay-services-toggle');
    if (!btn) return;
    e.stopPropagation();
    const sub = document.getElementById('overlay-services-sub');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    sub?.classList.toggle('open', !expanded);
    sub?.setAttribute('aria-hidden', String(expanded));
  });

  // Close on overlay link click (sauf le toggle)
  overlay?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

}

/* ── GSAP ────────────────────────────────────────────────────── */
function initGSAP() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance */
  const heroTitle = document.querySelector('.hero-title');
  const heroLabel = document.querySelector('.hero-label');
  const heroDesc = document.querySelector('.hero-desc');
  const heroCta = document.querySelector('.hero-cta');
  const heroScroll = document.querySelector('.hero-scroll');

  if (heroTitle) {
    const tl = gsap.timeline({ delay: .15 });
    if (heroLabel) tl.from(heroLabel, { y: 24, opacity: 0, duration: .7, ease: 'power3.out' });
    tl.from(heroTitle, { y: 60, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=.3');
    if (heroDesc) tl.from(heroDesc, { y: 28, opacity: 0, duration: .75, ease: 'power3.out' }, '-=.6');
    if (heroCta) {
      const btns = heroCta.querySelectorAll('.btn');
      if (btns.length) tl.from(btns, { y: 22, opacity: 0, duration: .6, stagger: .12, ease: 'power3.out' }, '-=.3')
        .call(() => gsap.set(btns, { clearProps: 'transform,opacity' }));
    }
    if (heroScroll) tl.from(heroScroll, { opacity: 0, duration: .5 }, '-=.3');
  }

  // Sécurité bfcache : si la page est restaurée, les boutons sont déjà animés → on efface les styles inline GSAP
  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      document.querySelectorAll('.hero-cta .btn').forEach(b => {
        b.style.opacity = '1';
        b.style.transform = '';
      });
    }
  });

  /* Page hero */
  const pageHero = document.querySelector('.page-hero-inner');
  if (pageHero) {
    gsap.from([...pageHero.children], {
      y: 36, opacity: 0, stagger: .14, duration: .85, ease: 'power3.out', delay: .25
    });
  }

  /* Mark document so CSS hides reveal elements */
  document.documentElement.classList.add('gsap-init');

  /* Scroll reveals — fromTo so GSAP owns the initial state, not just CSS */
  const ease = 'power3.out';
  const st = (trigger, start = 'top 90%') => ({
    trigger, start, once: true
  });

  [
    { selector: '.reveal', from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1, duration: .9, ease } },
    { selector: '.reveal-left', from: { x: -60, opacity: 0 }, to: { x: 0, opacity: 1, duration: .9, ease } },
    { selector: '.reveal-right', from: { x: 60, opacity: 0 }, to: { x: 0, opacity: 1, duration: .9, ease } },
    { selector: '.reveal-scale', from: { scale: .92, opacity: 0 }, to: { scale: 1, opacity: 1, duration: .85, ease }, start: 'top 92%' },
  ].forEach(({ selector, from, to, start }) => {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.fromTo(el, from, { ...to, scrollTrigger: st(el, start) });
    });
  });

  /* Stagger group */
  document.querySelectorAll('[data-stagger]').forEach(wrap => {
    gsap.from([...wrap.children], {
      y: 32, opacity: 0, stagger: .1, duration: .75, ease,
      scrollTrigger: { trigger: wrap, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  /* Animated counters */
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseFloat(el.textContent) || 0;
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
      onUpdate() { el.textContent = Math.round(obj.val) + suffix; }
    });
    el.textContent = '0' + suffix;
  });

  /* Service cards stagger */
  const grid = document.querySelector('.services-grid');
  if (grid) {
    gsap.from([...grid.querySelectorAll('.service-card')], {
      y: 50, opacity: 0, stagger: .08, duration: .8, ease,
      scrollTrigger: { trigger: grid, start: 'top 88%', toggleActions: 'play none none none' }
    });
  }

  /* Subtle video parallax (desktop only) */
  const vid = document.querySelector('.hero-media video');
  if (vid && window.innerWidth > 768) {
    gsap.to(vid, {
      yPercent: 15, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* Benefits stagger (review cards handled by individual .reveal) */
  document.querySelectorAll('.benefits-grid').forEach(grid => {
    gsap.fromTo([...grid.children],
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: .1, duration: .8, ease,
        immediateRender: false,
        scrollTrigger: { trigger: grid, start: 'top 88%', once: true }
      }
    );
  });

  /* Refresh after full page load (fonts, images) so trigger positions are correct */
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* ── HEX SHINE ───────────────────────────────────────────────── */
function initHexShine() {
  if (typeof ScrollTrigger === 'undefined') return;

  /* Masques en coins — grands hexagones partiellement visibles,
     comme les structures LED de l'atelier. Chaque section = coin différent. */
  const CORNERS = [
    'radial-gradient(ellipse 72% 62% at 104% 4%,  black 0%, transparent 70%)',  /* coin haut-droit  */
    'radial-gradient(ellipse 68% 60% at -4%  96%, black 0%, transparent 65%)',  /* coin bas-gauche  */
    'radial-gradient(ellipse 70% 62% at 104% 96%, black 0%, transparent 68%)',  /* coin bas-droit   */
    'radial-gradient(ellipse 66% 58% at -4%  4%,  black 0%, transparent 63%)',  /* coin haut-gauche */
  ];

  /* Avec inset:-25%, l'élément fait 150% de la section.
     La frontière haut de section = 25/150 = 16.7% → on force transparent à 16%.
     La frontière bas  de section = 125/150 = 83.3% → on force transparent à 84%.
     Le fondu occupe 10% de chaque côté pour être invisible bien avant le clip. */
  const VFADE = 'linear-gradient(to bottom, transparent 0%, transparent 16%, black 26%, black 74%, transparent 84%, transparent 100%)';

  document.querySelectorAll('.hex-bg').forEach((section, i) => {
    const deco = section.querySelector('.hex-deco');
    if (!deco) return;

    const corner = CORNERS[i % CORNERS.length];
    const combined = `${VFADE}, ${corner}`;

    /* Base — statique, discret */
    deco.style.animation = 'none';
    deco.style.maskImage = combined;
    deco.style.webkitMaskImage = combined;
    deco.style.maskComposite = 'intersect';
    deco.style.webkitMaskComposite = 'source-in';

    /* Glow — 1 seul ScrollTrigger, arc sinusoïdal */
    const glow = document.createElement('div');
    glow.className = 'hex-glow';
    glow.setAttribute('aria-hidden', 'true');
    glow.style.maskImage = combined;
    glow.style.webkitMaskImage = combined;
    glow.style.maskComposite = 'intersect';
    glow.style.webkitMaskComposite = 'source-in';
    section.insertAdjacentElement('afterbegin', glow);

    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate(self) {
        gsap.set(glow, { opacity: Math.sin(self.progress * Math.PI) });
      },
    });
  });
}

/* ── BACKGROUND SCROLL COLOR ─────────────────────────────────── */
function initBgScroll() {
  if (typeof ScrollTrigger === 'undefined') return;

  const BG_BASE = '#080b13';

  /* Palette progressive sombre → clair (8 paliers) */
  const RAMP = [
    '#080b13', '#0a0e1c', '#0d1326', '#101830',
    '#131e3a', '#162444', '#192a4e', '#1d3058',
  ];

  let sections = [...document.querySelectorAll('[data-bg]')];

  /* Pages sans data-bg : couleurs en progression linéaire selon l'index */
  if (!sections.length) {
    const all = [...document.querySelectorAll('section')];
    all.forEach((el, i) => {
      el.dataset.bg = RAMP[Math.min(i, RAMP.length - 1)];
    });
    sections = [...document.querySelectorAll('[data-bg]')];
  }

  if (!sections.length) return;

  gsap.set('body', { backgroundColor: BG_BASE });

  sections.forEach((section, i) => {
    const toColor = section.dataset.bg;
    const fromColor = i === 0 ? BG_BASE : sections[i - 1].dataset.bg;
    gsap.fromTo('body',
      { backgroundColor: fromColor },
      {
        backgroundColor: toColor, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'center center', scrub: 1 }
      }
    );
  });

  ScrollTrigger.create({
    trigger: document.body, start: 'top top+=5',
    onEnterBack: () => gsap.to('body', { backgroundColor: BG_BASE, duration: 0.7, ease: 'power2.inOut' }),
  });
}

/* ── CTA REVEAL — posée par le scroll depuis le bas ─────────── */
function initCtaReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('.cta-section, .cta-banner').forEach(cta => {
    /* La section flotte au-dessus (y négatif + scale) et se pose au scroll */
    gsap.fromTo(cta,
      { y: -60, scale: 0.94 },
      {
        y: 0, scale: 1, ease: 'none',
        scrollTrigger: {
          trigger: cta,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 0.6,
        }
      }
    );
  });
}

/* ── LIGHTBOX ────────────────────────────────────────────────── */
function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Fermer">✕</button>
    <button class="lb-btn lb-prev" aria-label="Précédent">←</button>
    <img class="lightbox-img" src="" alt="">
    <button class="lb-btn lb-next" aria-label="Suivant">→</button>
  `;
  document.body.appendChild(lb);

  const img = lb.querySelector('.lightbox-img');
  const imgs = [...items].map(i => i.querySelector('img')?.src).filter(Boolean);
  let cur = 0;

  function open(i) { cur = i; img.src = imgs[cur]; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  function prev() { open((cur - 1 + imgs.length) % imgs.length); }
  function next() { open((cur + 1) % imgs.length); }

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', prev);
  lb.querySelector('.lb-next').addEventListener('click', next);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.reset();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = '✓ Message envoyé !';
    btn.disabled = true;
    btn.style.background = '#1a6b28';
    setTimeout(() => {
      btn.textContent = 'Envoyer ma demande';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}

/* ── BACK TO TOP ─────────────────────────────────────────────── */
function initBTT() {
  const R = 27;
  const CIRC = +(2 * Math.PI * R).toFixed(2); // 169.65

  const el = document.createElement('button');
  el.className = 'btt';
  el.setAttribute('aria-label', 'Retour en haut');
  el.innerHTML = `
    <svg class="btt-svg" viewBox="0 0 60 60" aria-hidden="true">
      <circle class="btt-track" cx="30" cy="30" r="${R}" stroke-width="2"/>
      <circle class="btt-ring"  cx="30" cy="30" r="${R}" stroke-width="2"
              stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/>
    </svg>
    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" aria-hidden="true">
      <path d="M1 12L11 1L21 12" stroke="white" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  document.body.appendChild(el);

  const ring = el.querySelector('.btt-ring');

  function update() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docH > 0 ? Math.min(scrollTop / docH, 1) : 0;
    el.classList.toggle('show', scrollTop > 250);
    ring.style.strokeDashoffset = CIRC * (1 - progress);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  el.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
