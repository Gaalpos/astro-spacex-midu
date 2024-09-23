/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BRvpJSF_.mjs';
import 'kleur/colors';
import { g as getLaunchById } from '../../chunks/spacex_df-yyFu_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DSWfKoHO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch = null;
  if (id) {
    launch = await getLaunchById({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lanzamiendo ${id}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-semibold">${launch?.name}</h2> <h3>Flight #${launch?.flight_number}</h3> <p class="text-lg">${launch?.details}</p> ${launch?.id} </article> ` })}`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/launch/[id].astro", void 0);

const $$file = "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
