import { c as createComponent, m as maybeRenderHead, r as renderComponent, e as renderScript, b as renderTemplate, a as createAstro, f as renderSlot, g as renderHead, d as addAttribute } from '../chunks/astro/server_Es-WI7P7.mjs';
import 'kleur/colors';
/* empty css                                 */
import { L as Logo, G as GoutteGauche, a as GoutteDroite, b as LogoFacebook, c as LogoInstagram, d as LogoX, $ as $$Hero, I as ImgHeroAccueilLP } from '../chunks/Hero-accueil_Jro3QGrH.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_NJaCAblz.mjs';
import { $ as $$Button } from '../chunks/Button_DFxjorPJ.mjs';
/* empty css                                 */
import { b as getAllThemes } from '../chunks/backend_BbL4iz1S.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative w-full bg-black text-white z-20"> <div class="absolute top-0 left-0 z-10 hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": GoutteGauche, "alt": "Goutte gauche qui coule sur le c\xF4t\xE9 du header", "class": "w-[131px] h-auto" })} </div> <div class="absolute top-0 right-0 z-10 hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": GoutteDroite, "alt": "Goutte droite qui coule sur le c\xF4t\xE9 du header", "class": "w-[151px] h-auto" })} </div> <div class="flex items-center justify-between px-6 py-4 lg:px-36 lg:py-6"> <a href="/"> ${renderComponent($$result, "Logo", Logo, { "class": "lg:scale-150" })} </a> <button id="menu-btn" class="group relative z-20 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:opacity-0"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="fixed inset-0 bg-black text-white text-xl z-10 max-lg:aria-hidden:invisible visible lg:relative lg:bg-transparent lg:text-base" aria-hidden="true"> <ul class="font-nosifer lg:flex lg:gap-12 not-lg:mt-20 not-lg:mx-8"> <li> <a href="/exploration" class="block py-4 px-4 hover:underline">Explorer les styles</a> </li> <li> <a href="/ia" class="block py-4 px-4 hover:underline">Acceder à l'ia</a> </li> <li> <a href="/a_propos" class="block py-4 px-4 hover:underline">À propos</a> </li> <li> <a href="/faq" class="block py-4 px-4 hover:underline">FAQ</a> </li> <li> <a href="/contact" class="block py-4 px-4 hover:underline">Contact</a> </li> <li class="flex justify-center lg:justify-start my-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "stroke", "text": "Se connecter", "url": "/connexion" })} </li> <li class="flex justify-center lg:justify-start"> ${renderComponent($$result, "Button", $$Button, { "variant": "plain", "text": "Cr\xE9er un compte", "url": "/connexion" })} </li> </ul> </nav> </div> </header> ${renderScript($$result, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-zinc-950 font-nosifer text-neutral-500 text-lg mt-20"> <div class="px-8 pt-10"> <div class="mb-10 flex"> ${renderComponent($$result, "Logo", Logo, { "class": "lg:scale-150" })} </div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:ml-30"> <ul class="space-y-8"> <li><a href="/a_propos" class="hover:underline">À propos</a></li> <li><a href="/faq" class="hover:underline">FAQ</a></li> <li><a href="/contact" class="hover:underline">Contact</a></li> <li><a href="/cgv_cgu" class="hover:underline">CGV et CGU</a></li> <li> <a href="/mentions_legales" class="hover:underline">
Mentions légales & politique de confidentialité
</a> </li> <li><span class="text-neutral-400">Suivez-nous</span></li> <li> <div class="flex gap-5 mt-2"> <a href="https://facebook.com" aria-label="Visitez notre page Facebook"> ${renderComponent($$result, "LogoFacebook", LogoFacebook, {})} </a> <a href="https://instagram.com" aria-label="Visitez notre page Instagram"> ${renderComponent($$result, "LogoInstagram", LogoInstagram, {})} </a> <a href="https://x.com" aria-label="Visitez notre page X (Twitter)"> ${renderComponent($$result, "LogoX", LogoX, {})} </a> </div> </li> </ul> </div> <div class="h-0.5 w-full bg-white opacity-20 mt-10"></div> <p class="text-white/20 text-sm text-center py-6">
© MMI Montbéliard, ALL RIGHTS RESERVED
</p> </div> </footer>`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { ...item } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr" data-astro-cid-sckkx6r4> <head><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><title>\n      Simulateur de tatouage IA \u2013 Cr\xE9e et visualise ton design | InkSpire\n    </title><meta name="description" content="Cr\xE9e ton tatouage avec l\u2019IA, visualise-le sur ta peau et choisis en toute confiance. Essaie gratuitement !"><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "WebApplication",\n        "name": "InkSpire",\n        "url": "https://inkspire.fr",\n        "description": "G\xE9n\xE8re ton tatouage avec l\u2019IA et visualise-le sur ta peau gr\xE2ce \xE0 InkSpire.",\n        "applicationCategory": "DesignApplication",\n        "operatingSystem": "Android, iOS, Web",\n        "offers": {\n          "@type": "Offer",\n          "price": "0.00",\n          "priceCurrency": "EUR",\n          "description": "Acc\xE8s gratuit aux fonctionnalit\xE9s de base. Abonnement Premium disponible \xE0 5\u20AC/mois."\n        },\n        "aggregateRating": {\n          "@type": "AggregateRating",\n          "ratingValue": "4.9",\n          "reviewCount": "125"\n        }\n      }\n    <\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Hero", $$Hero, { "item": { titre: item.titre_page, img: item.img_hero }, "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$CardTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTheme;
  const { ...theme } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/exploration/${theme.id}`, "href")} class="block"> <div class="bg-gray-700 rounded-xl p-4 w-36 text-center hover:scale-105 transition-transform cursor-pointer"> <img${addAttribute(theme.img, "src")}${addAttribute(theme.nom, "alt")} class="w-full h-auto mb-2 object-contain bg-white p-2 rounded"> <p class="text-white text-sm">${theme.nom}</p> </div> </a>`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/CardTheme.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const themes = await getAllThemes();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre_page": "Envie d\u2019un tatouage et tu ne sais pas par o\xF9 commencer?", "img_hero": ImgHeroAccueilLP }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black text-white py-12 px-4 text-center" x-data="{ search: '' }"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
Explorer les styles de <span class="block">tatouages</span> </h2> <p class="text-gray-400 max-w-lg mx-auto mb-6 text-sm md:text-base">
Explorer les styles de tatouages vous permet d’avoir un aperçu du style
      que vous désirez, mais également de faciliter votre demande à notre IA !
</p> <div class="relative max-w-sm mx-auto mb-10"> <input type="text" placeholder="Rechercher un style..." class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" x-model="search"> </div> <div class="grid grid-cols-2 gap-2 justify-center"> ${themes?.map((theme) => renderTemplate`<div x-show="search === '' || theme.nom.toLowerCase().includes(search.toLowerCase())" class="transition-all duration-300"> ${renderComponent($$result2, "CardTheme", $$CardTheme, { ...theme })} </div>`)} </div> </section> ` })}`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/index.astro", void 0);

const $$file = "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/index.astro";
const $$url = "/exploration";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
