/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BRvpJSF_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DSWfKoHO.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About Gaalpos</h1> <p>Gaalpos is a good content creator</p> ` })}`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/about.astro", void 0);

const $$file = "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
