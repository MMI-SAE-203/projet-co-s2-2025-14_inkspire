import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Es-WI7P7.mjs';
import 'kleur/colors';
import { $ as $$LayoutLP } from '../../chunks/Layout_LP_CwwsZ-a8.mjs';
import { I as ImgHeroAccueilLP } from '../../chunks/Hero-accueil_Jro3QGrH.mjs';
import { g as getThemeById, a as getTattoosByTheme } from '../../chunks/backend_BbL4iz1S.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/");
  }
  let theme;
  let tattoos = [];
  try {
    theme = await getThemeById(id);
    tattoos = await getTattoosByTheme(id);
  } catch (error) {
    console.error("Error loading theme or tattoos:", error);
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout_LP", $$LayoutLP, { "titre_page": `Tatouages - ${theme.nom}`, "img_hero": ImgHeroAccueilLP, "data-astro-cid-lojjqdbu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black text-white py-12 px-4" data-astro-cid-lojjqdbu> <!-- Header avec info du thème --> <div class="max-w-6xl mx-auto text-center mb-12" data-astro-cid-lojjqdbu> <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-astro-cid-lojjqdbu>
Tatouages <span class="text-blue-400" data-astro-cid-lojjqdbu>${theme.nom}</span> </h1> ${theme.description && renderTemplate`<p class="text-gray-400 max-w-2xl mx-auto mb-6 text-lg" data-astro-cid-lojjqdbu> ${theme.description} </p>`} <div class="flex items-center justify-center gap-4 mb-8" data-astro-cid-lojjqdbu> <a href="/" class="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors" data-astro-cid-lojjqdbu>
← Retour aux thèmes
</a> <span class="text-gray-400" data-astro-cid-lojjqdbu> ${tattoos.length} tatouage${tattoos.length > 1 ? "s" : ""} trouvé${tattoos.length > 1 ? "s" : ""} </span> </div> </div> <!-- Grille des tatouages --> ${tattoos.length > 0 ? renderTemplate`<div class="max-w-6xl mx-auto" data-astro-cid-lojjqdbu> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-lojjqdbu> ${tattoos.map((tattoo) => renderTemplate`<a${addAttribute(`/tatouages/${tattoo.id}`, "href")} class="block" data-astro-cid-lojjqdbu> <div class="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer" data-astro-cid-lojjqdbu> <img${addAttribute(tattoo.img, "src")}${addAttribute(tattoo.nom || "Tatouage", "alt")} class="w-full h-48 object-cover" data-astro-cid-lojjqdbu> <div class="p-4" data-astro-cid-lojjqdbu> ${tattoo.nom && renderTemplate`<h3 class="text-white font-semibold mb-2" data-astro-cid-lojjqdbu>${tattoo.nom}</h3>`} ${tattoo.description && renderTemplate`<p class="text-gray-400 text-sm line-clamp-2" data-astro-cid-lojjqdbu>${tattoo.description}</p>`} ${tattoo.prix && renderTemplate`<p class="text-blue-400 font-bold mt-2" data-astro-cid-lojjqdbu>${tattoo.prix}€</p>`} </div> </div> </a>`)} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-lojjqdbu> <div class="text-6xl mb-4" data-astro-cid-lojjqdbu>🎨</div> <h3 class="text-2xl font-bold mb-2" data-astro-cid-lojjqdbu>Aucun tatouage trouvé</h3> <p class="text-gray-400 mb-6" data-astro-cid-lojjqdbu>
Il n'y a pas encore de tatouages pour ce thème.
</p> <a href="/" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" data-astro-cid-lojjqdbu>
Explorer d'autres thèmes
</a> </div>`} </section>  <section class="bg-gray-900 py-12 px-4" data-astro-cid-lojjqdbu> <div class="max-w-4xl mx-auto text-center" data-astro-cid-lojjqdbu> <h2 class="text-3xl font-bold text-white mb-4" data-astro-cid-lojjqdbu>
Vous avez trouvé votre style ?
</h2> <p class="text-gray-400 mb-8" data-astro-cid-lojjqdbu>
Utilisez notre IA pour créer le tatouage parfait dans ce style !
</p> <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors" data-astro-cid-lojjqdbu>
Créer mon tatouage IA
</button> </div> </section> ` })} `;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/[id].astro", void 0);

const $$file = "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/[id].astro";
const $$url = "/exploration/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
