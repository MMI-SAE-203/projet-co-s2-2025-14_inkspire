import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_Es-WI7P7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, url, variant } = Astro2.props;
  const variantClass = {
    stroke: "border-neutral-600",
    plain: "border-neutral-600 bg-neutral-600"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`flex items-center justify-center text-white font-montserrat_alt text-xs lg:text-2xl font-extrabold leading-[1.6] w-48 lg:w-80 px-4 py-6 gap-2.5 border-2 rounded-xl transition ${variantClass[variant]}`, "class")}>${text} </a>`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Button.astro", void 0);

export { $$Button as $ };
