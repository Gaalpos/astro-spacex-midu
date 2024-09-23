import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, d as addAttribute, g as createTransitionScope, a as renderComponent, b as createAstro, h as renderHead } from './astro/server_BRvpJSF_.mjs';
import 'kleur/colors';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
import 'clsx';
/* empty css                         */

function Counter() {
  const [counter, setCounter] = useState(0);
  return jsxs("div", {
    class: "w-full m-auto",
    children: [jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter(counter - 1),
      children: " -"
    }), jsx("span", {
      class: "text-violet-600 text-xl m-5",
      children: counter
    }), jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter(counter + 1),
      children: "+"
    })]
  });
}

const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="flew-row justify-center text-white cursor-pointer hover:bg-slate-700
focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5\
text-center inline-flex items-center dark:focus:ring[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg
transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2- opacity-70
hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate` button not loading`)} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
Gaalpos Web
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All about Gaalpos
</p> </div> <!-- Example of how to use a preact component
  persisting value between pages 
  Not working, maybe they change it on newer versions
  --> ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/DAM/Trabajo/Astro/tuto-midudev/src/components/Counter", "client:component-export": "Counter", "data-astro-transition-persist": createTransitionScope($$result, "hyucmcsp") })} <nav class="flex flex-col items-center justify-between w-full text-center
        md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/index" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`, "default": ($$result2) => renderTemplate` Home` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "https://www.youtube.com/@Gaalpos" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>`, "default": ($$result2) => renderTemplate`Latest videos` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "https://www.youtube.com/@Gaalpos/videos" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 17l6 -6l4 4l8 -8"></path><path d="M14 7l7 0l0 7"></path></svg>`, "default": ($$result2) => renderTemplate`
Best videos` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`, "default": ($$result2) => renderTemplate`  About
` })} </nav> </header>`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/components/Header.astro", "self");

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "D:/DAM/Trabajo/Astro/tuto-midudev/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
