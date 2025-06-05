import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Es-WI7P7.mjs';
import 'kleur/colors';
import { $ as $$LayoutLP } from '../../chunks/Layout_LP_CwwsZ-a8.mjs';
import { c as getTattooById } from '../../chunks/backend_BbL4iz1S.mjs';
import { I as ImgHeroAccueilLP } from '../../chunks/Hero-accueil_Jro3QGrH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/");
  }
  let tattoo;
  try {
    tattoo = await getTattooById(id);
  } catch (error) {
    console.error("Error loading tattoo:", error);
    return Astro2.redirect("/");
  }
  const themeId = tattoo.expand?.theme?.id || tattoo.theme;
  const themeName = tattoo.expand?.theme?.nom || "le th\xE8me";
  return renderTemplate`${renderComponent($$result, "Layout_LP", $$LayoutLP, { "titre_page": tattoo.nom || "D\xE9tail du tatouage", "img_hero": ImgHeroAccueilLP }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black text-white min-h-screen"> <div class="max-w-4xl mx-auto px-4 py-8"> <!-- Navigation --> <div class="mb-8"> <a${addAttribute(themeId ? `/themes/${themeId}` : "/", "href")} class="inline-flex items-center text-gray-400 hover:text-white transition-colors">
← Retour à ${themeName} </a> </div> <!-- Contenu principal --> <div class="grid md:grid-cols-2 gap-8 items-start"> <!-- Image du tatouage --> <div class="bg-gray-800 rounded-2xl p-6"> <div class="bg-white rounded-xl p-4 aspect-square flex items-center justify-center"> <img${addAttribute(tattoo.img, "src")}${addAttribute(tattoo.nom || "Tatouage", "alt")} class="max-w-full max-h-full object-contain"> </div> </div> <!-- Informations --> <div class="space-y-6"> <!-- Titre --> <div> <h1 class="text-3xl md:text-4xl font-bold mb-2"> ${tattoo.nom || "Tatouage"} </h1> ${tattoo.expand?.theme?.nom && renderTemplate`<span class="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
Style: ${tattoo.expand.theme.nom} </span>`} </div> <!-- Description --> ${tattoo.description && renderTemplate`<div> <p class="text-gray-300 leading-relaxed"> ${tattoo.description} </p> </div>`} <!-- Prix et détails --> <div class="space-y-4"> ${tattoo.prix && renderTemplate`<div class="flex items-center justify-between py-3 border-b border-gray-700"> <span class="text-gray-400">Prix estimé</span> <span class="text-2xl font-bold text-blue-400">${tattoo.prix}€</span> </div>`} ${tattoo.taille && renderTemplate`<div class="flex items-center justify-between py-3 border-b border-gray-700"> <span class="text-gray-400">Taille</span> <span class="text-white">${tattoo.taille}</span> </div>`} ${tattoo.duree && renderTemplate`<div class="flex items-center justify-between py-3 border-b border-gray-700"> <span class="text-gray-400">Durée estimée</span> <span class="text-white">${tattoo.duree}</span> </div>`} ${tattoo.difficulte && renderTemplate`<div class="flex items-center justify-between py-3 border-b border-gray-700"> <span class="text-gray-400">Difficulté</span> <span class="text-white capitalize">${tattoo.difficulte}</span> </div>`} </div> <!-- Boutons d'action --> <div class="space-y-4 pt-6"> <a href="/ia" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
Utiliser l'IA Générative
</a> <div class="flex gap-3"> <button class="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path> </svg>
Favoris
</button> <button class="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path> </svg>
Partager
</button> </div> </div> </div> </div> <!-- Section conseils --> <div class="mt-16 bg-gray-900 rounded-2xl p-8"> <h2 class="text-2xl font-bold mb-6">Conseils pour ce tatouage</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-semibold mb-2">Préparation</h3> <p class="text-gray-400 text-sm">Hydratez bien votre peau 48h avant la séance</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h3 class="font-semibold mb-2">Placement</h3> <p class="text-gray-400 text-sm">Choisissez l'emplacement selon votre morphologie</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <h3 class="font-semibold mb-2">Soins</h3> <p class="text-gray-400 text-sm">Suivez scrupuleusement les conseils post-tatouage</p> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/tatouages/[id].astro", void 0);

const $$file = "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/tatouages/[id].astro";
const $$url = "/tatouages/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
