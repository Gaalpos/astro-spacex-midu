/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_BRvpJSF_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DSWfKoHO.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<h1 id=\"hello-world\">Hello World!!</h1>\n<p>Main content</p>\n<p>This is a test to see how MD works on Astro</p>";

				const frontmatter = {"title":"Test-article","layout":"../../layouts/Layout.astro"};
				const file = "D:/DAM/Trabajo/Astro/tuto-midudev/src/pages/blog/first-post.md";
				const url = "/blog/first-post";
				function rawContent() {
					return "\r\n# Hello World!!\r\n\r\nMain content\r\n\r\nThis is a test to see how MD works on Astro";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello-world","text":"Hello World!!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
