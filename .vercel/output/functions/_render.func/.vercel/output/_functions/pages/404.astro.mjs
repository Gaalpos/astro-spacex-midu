/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BRvpJSF_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DSWfKoHO.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white text-5xl text-center">Woops Not found</h1> ` })}`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/404.astro", void 0);

const $$file = "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
