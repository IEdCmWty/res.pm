import { w as head, x as ensure_array_like, y as attr } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { l as localizeHref, a as locales } from "../../chunks/runtime.js";
import { e as escape_html } from "../../chunks/escaping.js";
const favicon = "data:image/png;base64,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";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    children($$renderer2);
    $$renderer2.push(`<!----> <div class="hidden"><!--[-->`);
    const each_array = ensure_array_like(locales);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let locale = each_array[$$index];
      $$renderer2.push(`<a${attr("href", localizeHref(page.url.pathname, { locale }))}>${escape_html(locale)}</a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _layout as default
};
