import { e as escape_html } from "../../../../chunks/escaping.js";
import { g as getLocale, t as trackMessageCall } from "../../../../chunks/runtime.js";
const en_hello_world = (
  /** @type {(inputs: { name: NonNullable<unknown> }) => LocalizedString} */
  (i) => {
    return (
      /** @type {LocalizedString} */
      `Hello, ${i?.name} from en!`
    );
  }
);
const ru_hello_world = (
  /** @type {(inputs: { name: NonNullable<unknown> }) => LocalizedString} */
  (i) => {
    return (
      /** @type {LocalizedString} */
      `Hello, ${i?.name} from ru!`
    );
  }
);
const hello_world = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hello_world", locale);
  if (locale === "en") return en_hello_world(inputs);
  return ru_hello_world(inputs);
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(/* @__PURE__ */ hello_world({ name: "SvelteKit User" }))}</h1> <div><button>en</button> <button>ru</button></div> <p>If you use VSCode, install the <a href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension" target="_blank">Sherlock i18n extension</a> for a better i18n experience.</p>`);
  });
}
export {
  _page as default
};
