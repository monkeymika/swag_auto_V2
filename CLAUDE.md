# CLAUDE.md — Swag Auto V2

## Projet
Site web vitrine pour **Swag Auto Nancy** (esthétique automobile premium).
- Stack : HTML5 · CSS3 · Vanilla JS · GSAP 3 (ScrollTrigger)
- Live : https://swagauto.fr
- Dossier : `C:\Users\monke\OneDrive\Bureau\Swag-auto_V2`

## Fichiers principaux
| Fichier | Rôle |
|---------|------|
| `index.html` | Page d'accueil |
| `assets/css/main.css` | Design system complet |
| `assets/js/app.js` | JS centralisé — nav, footer, animations, scroll |
| `sw.js` | Service worker (production uniquement) |

## Architecture JS (app.js)
- Nav + Footer injectés dynamiquement via `buildNav()` / `buildFooter()`
- Toutes les pages utilisent le même `app.js` (chemin résolu avec `BASE`)
- Fonctions : `initNav`, `initGSAP`, `initBgScroll`, `initLightbox`, `initContactForm`, `initBTT`

## Design tokens (main.css)
```
--bg: #080b13        noir très sombre (base)
--bg-2: #0d1018
--surface: #111520
--surface-2: #181d2a
--red: #e30613       rouge brand
```

## Features implémentées
- **Background scroll color** : `initBgScroll()` dans app.js (lignes ~401-432)
  - Attribut `data-bg` sur chaque section HTML
  - GSAP anime `body.backgroundColor` au scroll (trigger à 58% viewport)
  - Retour à `#080b13` quand on revient en haut

## Règles de travail
- Ne jamais push direct sur main — créer une branche + PR
- Ne pas committer sans demande explicite de l'utilisateur
- Tester les changements CSS/JS localement avant de valider
