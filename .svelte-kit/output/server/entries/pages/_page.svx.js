import { z as attributes, F as clsx, G as clsx$1, J as element } from "../../chunks/index.js";
function UiBgAnimated($$renderer) {
  $$renderer.push(`<div class="pointer-events-none absolute top-0 right-0 bottom-0 left-0 -z-1 overflow-hidden blur-3xl select-none opacity-50 svelte-11583su" role="region"><div class="absolute rounded-full opacity-60 opacity-100 ease-[cubic-bezier(0.1,0,0.9,1)] loop-animation gradient-01 h-[250px] w-[250px] md:h-[840px] md:w-[840px] gradient-01 svelte-11583su"></div> <div class="absolute rounded-full opacity-60 opacity-100 ease-[cubic-bezier(0.1,0,0.9,1)] loop-animation gradient-02 h-[185px] w-[185px] md:h-[720px] md:w-[720px] gradient-02 svelte-11583su"></div> <div class="absolute rounded-full opacity-60 opacity-100 ease-[cubic-bezier(0.1,0,0.9,1)] loop-animation gradient-03 h-[125px] w-[125px] md:h-[600px] md:w-[600px] gradient-03 svelte-11583su"></div></div>`);
}
const UI_BG__IMAGE_INITIAL_API = {
  preset: "pattern",
  variant: "grain"
};
const UI_BG__GRAINY_BASE_CLASS = "absolute top-0 right-0 bottom-0 left-0 size-full";
const UI_BG__IMAGE_VARIANT_CLASS = {
  grain: "bg-[url('/img/patterns/grain-01.png')] dark:bg-[url('/img/patterns/grain-02.png')]"
};
const UI_BG__IMAGE_PRESET_CLASS = {
  contain: "bg-contain",
  cover: "bg-cover bg-center",
  pattern: "bg-auto bg-repeat"
};
function UiBgImage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: externalHtmlClass,
      preset = UI_BG__IMAGE_INITIAL_API.preset,
      variant = UI_BG__IMAGE_INITIAL_API.variant,
      $$slots,
      $$events,
      ...rest_props
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(clsx$1([
        externalHtmlClass,
        UI_BG__GRAINY_BASE_CLASS,
        UI_BG__IMAGE_VARIANT_CLASS[variant],
        UI_BG__IMAGE_PRESET_CLASS[preset]
      ])),
      ...rest_props
    })}></div>`);
  });
}
const UI_BUTTON_INITIAL_API = {
  color: "contrast",
  htmlTag: "button",
  proportion: "md",
  variant: "filled",
  isEnabledAlwaysHoverVisual: false,
  isEnabledHoverVisual: true,
  isEnabledInactiveVisual: false,
  isEnabledFocusVisual: true
};
const UI_BUTTON_BASE_CLASS = "flex h-fit w-fit cursor-pointer items-center justify-center font-sans whitespace-nowrap";
const UI_BUTTON_DISABLED_CLASS = "!cursor-not-allowed";
const UI_BUTTON_FOCUS_VISUAL_BASE_CLASS = "focus:inset-ring-black/50 focus:inset-ring dark:focus:inset-ring-white/50 focus:!outline-none";
const UI_BUTTON_BASE_VARIANT_CLASSES = {
  filled: {
    red: "bg-red-600 text-zinc-50 dark:bg-red-600 dark:text-zinc-50",
    orange: "bg-orange-600 text-zinc-50 dark:bg-orange-600 dark:text-zinc-50",
    amber: "bg-amber-600 text-zinc-50 dark:bg-amber-600 dark:text-zinc-50",
    yellow: "bg-yellow-600 text-zinc-50 dark:bg-yellow-600 dark:text-zinc-50",
    lime: "bg-lime-600 text-zinc-50 dark:bg-lime-600 dark:text-zinc-50",
    green: "bg-green-600 text-zinc-50 dark:bg-green-600 dark:text-zinc-50",
    emerald: "bg-emerald-600 text-zinc-50 dark:bg-emerald-600 dark:text-zinc-50",
    teal: "bg-teal-600 text-zinc-50 dark:bg-teal-600 dark:text-zinc-50",
    cyan: "bg-cyan-600 text-zinc-50 dark:bg-cyan-600 dark:text-zinc-50",
    sky: "bg-sky-600 text-zinc-50 dark:bg-sky-600 dark:text-zinc-50",
    blue: "bg-blue-600 text-zinc-50 dark:bg-blue-600 dark:text-zinc-50",
    indigo: "bg-indigo-600 text-zinc-50 dark:bg-indigo-600 dark:text-zinc-50",
    violet: "bg-violet-600 text-zinc-50 dark:bg-violet-600 dark:text-zinc-50",
    purple: "bg-purple-600 text-zinc-50 dark:bg-purple-600 dark:text-zinc-50",
    fuchsia: "bg-fuchsia-600 text-zinc-50 dark:bg-fuchsia-600 dark:text-zinc-50",
    pink: "bg-pink-600 text-zinc-50 dark:bg-pink-600 dark:text-zinc-50",
    rose: "bg-rose-600 text-zinc-50 dark:bg-rose-600 dark:text-zinc-50",
    contrast: "bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950",
    light: "bg-zinc-50 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
  },
  outlined: {
    red: "text-red-600 outline -outline-offset-1 outline-red-600 dark:text-red-500 dark:outline-red-500",
    orange: "text-orange-600 outline -outline-offset-1 outline-orange-600 dark:text-orange-500 dark:outline-orange-500",
    amber: "text-amber-600 outline -outline-offset-1 outline-amber-600 dark:text-amber-500 dark:outline-amber-500",
    yellow: "text-yellow-600 outline -outline-offset-1 outline-yellow-600 dark:text-yellow-500 dark:outline-yellow-500",
    lime: "text-lime-600 outline -outline-offset-1 outline-lime-600 dark:text-lime-500 dark:outline-lime-500",
    green: "text-green-600 outline -outline-offset-1 outline-green-600 dark:text-green-500 dark:outline-green-500",
    emerald: "text-emerald-600 outline -outline-offset-1 outline-emerald-600 dark:text-emerald-500 dark:outline-emerald-500",
    teal: "text-teal-600 outline -outline-offset-1 outline-teal-600 dark:text-teal-500 dark:outline-teal-500",
    cyan: "text-cyan-600 outline -outline-offset-1 outline-cyan-600 dark:text-cyan-500 dark:outline-cyan-500",
    sky: "text-sky-600 outline -outline-offset-1 outline-sky-600 dark:text-sky-500 dark:outline-sky-500",
    blue: "text-blue-600 outline -outline-offset-1 outline-blue-600 dark:text-blue-500 dark:outline-blue-500",
    indigo: "text-indigo-600 outline -outline-offset-1 outline-indigo-600 dark:text-indigo-500 dark:outline-indigo-500",
    violet: "text-violet-600 outline -outline-offset-1 outline-violet-600 dark:text-violet-500 dark:outline-violet-500",
    purple: "text-purple-600 outline -outline-offset-1 outline-purple-600 dark:text-purple-500 dark:outline-purple-500",
    fuchsia: "text-fuchsia-600 outline -outline-offset-1 outline-fuchsia-600 dark:text-fuchsia-500 dark:outline-fuchsia-500",
    pink: "text-pink-600 outline -outline-offset-1 outline-pink-600 dark:text-pink-500 dark:outline-pink-500",
    rose: "text-rose-600 outline -outline-offset-1 outline-rose-600 dark:text-rose-500 dark:outline-rose-500",
    contrast: "text-zinc-950 outline -outline-offset-1 outline-black dark:text-zinc-50 dark:outline-white",
    light: "text-zinc-950 outline -outline-offset-1 outline-zinc-600/15 dark:text-zinc-50 dark:outline-zinc-500/45"
  },
  text: {
    red: "text-red-600 dark:text-red-500",
    orange: "text-orange-600 dark:text-orange-500",
    amber: "text-amber-600 dark:text-amber-500",
    yellow: "text-yellow-600 dark:text-yellow-500",
    lime: "text-lime-600 dark:text-lime-500",
    green: "text-green-600 dark:text-green-500",
    emerald: "text-emerald-600 dark:text-emerald-500",
    teal: "text-teal-600 dark:text-teal-500",
    cyan: "text-cyan-600 dark:text-cyan-500",
    sky: "text-sky-600 dark:text-sky-500",
    blue: "text-blue-600 dark:text-blue-500",
    indigo: "text-indigo-600 dark:text-indigo-500",
    violet: "text-violet-600 dark:text-violet-500",
    purple: "text-purple-600 dark:text-purple-500",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
    pink: "text-pink-600 dark:text-pink-500",
    rose: "text-rose-600 dark:text-rose-500",
    contrast: "text-zinc-950 dark:text-zinc-50",
    light: "text-zinc-950 dark:text-zinc-50"
  }
};
const UI_BUTTON_HOVER_VISUAL_CLASSES = {
  filled: {
    red: "hover:brightness-90",
    orange: "hover:brightness-90",
    amber: "hover:brightness-90",
    yellow: "hover:brightness-90",
    lime: "hover:brightness-90",
    green: "hover:brightness-90",
    emerald: "hover:brightness-90",
    teal: "hover:brightness-90",
    cyan: "hover:brightness-90",
    sky: "hover:brightness-90",
    blue: "hover:brightness-90",
    indigo: "hover:brightness-90",
    violet: "hover:brightness-90",
    purple: "hover:brightness-90",
    fuchsia: "hover:brightness-90",
    pink: "hover:brightness-90",
    rose: "hover:brightness-90",
    contrast: "hover:brightness-90",
    light: "hover:brightness-90"
  },
  outlined: {
    red: "hover:bg-red-600/5 hover:backdrop-blur-xl dark:hover:bg-red-300/15",
    orange: "hover:bg-orange-600/5 hover:backdrop-blur-xl dark:hover:bg-orange-300/15",
    amber: "hover:bg-amber-600/5 hover:backdrop-blur-xl dark:hover:bg-amber-300/15",
    yellow: "hover:bg-yellow-600/5 hover:backdrop-blur-xl dark:hover:bg-yellow-300/15",
    lime: "hover:bg-lime-600/5 hover:backdrop-blur-xl dark:hover:bg-lime-300/15",
    green: "hover:bg-green-600/5 hover:backdrop-blur-xl dark:hover:bg-green-300/15",
    emerald: "hover:bg-emerald-600/5 hover:backdrop-blur-xl dark:hover:bg-emerald-300/15",
    teal: "hover:bg-teal-600/5 hover:backdrop-blur-xl dark:hover:bg-teal-300/15",
    cyan: "hover:bg-cyan-600/5 hover:backdrop-blur-xl dark:hover:bg-cyan-300/15",
    sky: "hover:bg-sky-600/5 hover:backdrop-blur-xl dark:hover:bg-sky-300/15",
    blue: "hover:bg-blue-600/5 hover:backdrop-blur-xl dark:hover:bg-blue-300/15",
    indigo: "hover:bg-indigo-600/5 hover:backdrop-blur-xl dark:hover:bg-indigo-300/15",
    violet: "hover:bg-violet-600/5 hover:backdrop-blur-xl dark:hover:bg-violet-300/15",
    purple: "hover:bg-purple-600/5 hover:backdrop-blur-xl dark:hover:bg-purple-300/15",
    fuchsia: "hover:bg-fuchsia-600/5 hover:backdrop-blur-xl dark:hover:bg-fuchsia-300/15",
    pink: "hover:bg-pink-600/5 hover:backdrop-blur-xl dark:hover:bg-pink-300/15",
    rose: "hover:bg-rose-600/5 hover:backdrop-blur-xl dark:hover:bg-rose-300/15",
    contrast: "hover:bg-black/5 hover:backdrop-blur-xl dark:hover:bg-white/15",
    light: "hover:bg-zinc-600/5 hover:backdrop-blur-xl dark:hover:bg-zinc-300/15"
  },
  text: {
    red: "hover:bg-red-600/5 hover:backdrop-blur-xl dark:hover:bg-red-300/15",
    orange: "hover:bg-orange-600/5 hover:backdrop-blur-xl dark:hover:bg-orange-300/15",
    amber: "hover:bg-amber-600/5 hover:backdrop-blur-xl dark:hover:bg-amber-300/15",
    yellow: "hover:bg-yellow-600/5 hover:backdrop-blur-xl dark:hover:bg-yellow-300/15",
    lime: "hover:bg-lime-600/5 hover:backdrop-blur-xl dark:hover:bg-lime-300/15",
    green: "hover:bg-green-600/5 hover:backdrop-blur-xl dark:hover:bg-green-300/15",
    emerald: "hover:bg-emerald-600/5 hover:backdrop-blur-xl dark:hover:bg-emerald-300/15",
    teal: "hover:bg-teal-600/5 hover:backdrop-blur-xl dark:hover:bg-teal-300/15",
    cyan: "hover:bg-cyan-600/5 hover:backdrop-blur-xl dark:hover:bg-cyan-300/15",
    sky: "hover:bg-sky-600/5 hover:backdrop-blur-xl dark:hover:bg-sky-300/15",
    blue: "hover:bg-blue-600/5 hover:backdrop-blur-xl dark:hover:bg-blue-300/15",
    indigo: "hover:bg-indigo-600/5 hover:backdrop-blur-xl dark:hover:bg-indigo-300/15",
    violet: "hover:bg-violet-600/5 hover:backdrop-blur-xl dark:hover:bg-violet-300/15",
    purple: "hover:bg-purple-600/5 hover:backdrop-blur-xl dark:hover:bg-purple-300/15",
    fuchsia: "hover:bg-fuchsia-600/5 hover:backdrop-blur-xl dark:hover:bg-fuchsia-300/15",
    pink: "hover:bg-pink-600/5 hover:backdrop-blur-xl dark:hover:bg-pink-300/15",
    rose: "hover:bg-rose-600/5 hover:backdrop-blur-xl dark:hover:bg-rose-300/15",
    contrast: "hover:bg-black/5 hover:backdrop-blur-xl dark:hover:bg-white/15",
    light: "hover:bg-zinc-600/5 hover:backdrop-blur-xl dark:hover:bg-zinc-300/15"
  }
};
const UI_BUTTON_IS_ENABLED_HOVER_VISUAL_CLASSES = {
  filled: {
    red: "hover:brightness-90",
    orange: "hover:brightness-90",
    amber: "hover:brightness-90",
    yellow: "hover:brightness-90",
    lime: "hover:brightness-90",
    green: "hover:brightness-90",
    emerald: "hover:brightness-90",
    teal: "hover:brightness-90",
    cyan: "hover:brightness-90",
    sky: "hover:brightness-90",
    blue: "hover:brightness-90",
    indigo: "hover:brightness-90",
    violet: "hover:brightness-90",
    purple: "hover:brightness-90",
    fuchsia: "hover:brightness-90",
    pink: "hover:brightness-90",
    rose: "hover:brightness-90",
    contrast: "hover:brightness-90",
    light: "hover:brightness-90"
  },
  outlined: {
    red: "!bg-red-600/5 !backdrop-blur-xl dark:!bg-red-300/15",
    orange: "!bg-orange-600/5 !backdrop-blur-xl dark:!bg-orange-300/15",
    amber: "!bg-amber-600/5 !backdrop-blur-xl dark:!bg-amber-300/15",
    yellow: "!bg-yellow-600/5 !backdrop-blur-xl dark:!bg-yellow-300/15",
    lime: "!bg-lime-600/5 !backdrop-blur-xl dark:!bg-lime-300/15",
    green: "!bg-green-600/5 !backdrop-blur-xl dark:!bg-green-300/15",
    emerald: "!bg-emerald-600/5 !backdrop-blur-xl dark:!bg-emerald-300/15",
    teal: "!bg-teal-600/5 !backdrop-blur-xl dark:!bg-teal-300/15",
    cyan: "!bg-cyan-600/5 !backdrop-blur-xl dark:!bg-cyan-300/15",
    sky: "!bg-sky-600/5 !backdrop-blur-xl dark:!bg-sky-300/15",
    blue: "!bg-blue-600/5 !backdrop-blur-xl dark:!bg-blue-300/15",
    indigo: "!bg-indigo-600/5 !backdrop-blur-xl dark:!bg-indigo-300/15",
    violet: "!bg-violet-600/5 !backdrop-blur-xl dark:!bg-violet-300/15",
    purple: "!bg-purple-600/5 !backdrop-blur-xl dark:!bg-purple-300/15",
    fuchsia: "!bg-fuchsia-600/5 !backdrop-blur-xl dark:!bg-fuchsia-300/15",
    pink: "!bg-pink-600/5 !backdrop-blur-xl dark:!bg-pink-300/15",
    rose: "!bg-rose-600/5 !backdrop-blur-xl dark:!bg-rose-300/15",
    contrast: "!bg-black/5 !backdrop-blur-xl dark:!bg-white/15",
    light: "!bg-zinc-600/5 !backdrop-blur-xl dark:!bg-zinc-300/15"
  },
  text: {
    red: "!bg-red-600/5 !backdrop-blur-xl dark:!bg-red-300/15",
    orange: "!bg-orange-600/5 !backdrop-blur-xl dark:!bg-orange-300/15",
    amber: "!bg-amber-600/5 !backdrop-blur-xl dark:!bg-amber-300/15",
    yellow: "!bg-yellow-600/5 !backdrop-blur-xl dark:!bg-yellow-300/15",
    lime: "!bg-lime-600/5 !backdrop-blur-xl dark:!bg-lime-300/15",
    green: "!bg-green-600/5 !backdrop-blur-xl dark:!bg-green-300/15",
    emerald: "!bg-emerald-600/5 !backdrop-blur-xl dark:!bg-emerald-300/15",
    teal: "!bg-teal-600/5 !backdrop-blur-xl dark:!bg-teal-300/15",
    cyan: "!bg-cyan-600/5 !backdrop-blur-xl dark:!bg-cyan-300/15",
    sky: "!bg-sky-600/5 !backdrop-blur-xl dark:!bg-sky-300/15",
    blue: "!bg-blue-600/5 !backdrop-blur-xl dark:!bg-blue-300/15",
    indigo: "!bg-indigo-600/5 !backdrop-blur-xl dark:!bg-indigo-300/15",
    violet: "!bg-violet-600/5 !backdrop-blur-xl dark:!bg-violet-300/15",
    purple: "!bg-purple-600/5 !backdrop-blur-xl dark:!bg-purple-300/15",
    fuchsia: "!bg-fuchsia-600/5 !backdrop-blur-xl dark:!bg-fuchsia-300/15",
    pink: "!bg-pink-600/5 !backdrop-blur-xl dark:!bg-pink-300/15",
    rose: "!bg-rose-600/5 !backdrop-blur-xl dark:!bg-rose-300/15",
    contrast: "!bg-black/5 !backdrop-blur-xl dark:!bg-white/15",
    light: "!bg-zinc-600/5 !backdrop-blur-xl dark:!bg-zinc-300/15"
  }
};
const UI_BUTTON_INACTIVE_CLASSES = {
  filled: {
    red: "!text-zinc-50/50 dark:!text-zinc-950/50",
    orange: "!text-zinc-50/50 dark:!text-zinc-950/50",
    amber: "!text-zinc-50/50 dark:!text-zinc-950/50",
    yellow: "!text-zinc-50/50 dark:!text-zinc-950/50",
    lime: "!text-zinc-50/50 dark:!text-zinc-950/50",
    green: "!text-zinc-50/50 dark:!text-zinc-950/50",
    emerald: "!text-zinc-50/50 dark:!text-zinc-950/50",
    teal: "!text-zinc-50/50 dark:!text-zinc-950/50",
    cyan: "!text-zinc-50/50 dark:!text-zinc-950/50",
    sky: "!text-zinc-50/50 dark:!text-zinc-950/50",
    blue: "!text-zinc-50/50 dark:!text-zinc-950/50",
    indigo: "!text-zinc-50/50 dark:!text-zinc-950/50",
    violet: "!text-zinc-50/50 dark:!text-zinc-950/50",
    purple: "!text-zinc-50/50 dark:!text-zinc-950/50",
    fuchsia: "!text-zinc-50/50 dark:!text-zinc-950/50",
    pink: "!text-zinc-50/50 dark:!text-zinc-950/50",
    rose: "!text-zinc-50/50 dark:!text-zinc-950/50",
    contrast: "!text-zinc-50/50 dark:!text-zinc-950/50",
    light: "!text-zinc-950/50 dark:!text-zinc-50/50"
  },
  outlined: {
    red: "!text-red-600/50 dark:!text-red-500/50",
    orange: "!text-orange-600/50 dark:!text-orange-500/50",
    amber: "!text-amber-600/50 dark:!text-amber-500/50",
    yellow: "!text-yellow-600/50 dark:!text-yellow-500/50",
    lime: "!text-lime-600/50 dark:!text-lime-500/50",
    green: "!text-green-600/50 dark:!text-green-500/50",
    emerald: "!text-emerald-600/50 dark:!text-emerald-500/50",
    teal: "!text-teal-600/50 dark:!text-teal-500/50",
    cyan: "!text-cyan-600/50 dark:!text-cyan-500/50",
    sky: "!text-sky-600/50 dark:!text-sky-500/50",
    blue: "!text-blue-600/50 dark:!text-blue-500/50",
    indigo: "!text-indigo-600/50 dark:!text-indigo-500/50",
    violet: "!text-violet-600/50 dark:!text-violet-500/50",
    purple: "!text-purple-600/50 dark:!text-purple-500/50",
    fuchsia: "!text-fuchsia-600/50 dark:!text-fuchsia-500/50",
    pink: "!text-pink-600/50 dark:!text-pink-500/50",
    rose: "!text-rose-600/50 dark:!text-rose-500/50",
    contrast: "!text-zinc-950/50 dark:!text-zinc-50/50",
    light: "!text-zinc-950/50 dark:!text-zinc-50/50"
  },
  text: {
    red: "!text-red-600/50 dark:!text-red-500/50",
    orange: "!text-orange-600/50 dark:!text-orange-500/50",
    amber: "!text-amber-600/50 dark:!text-amber-500/50",
    yellow: "!text-yellow-600/50 dark:!text-yellow-500/50",
    lime: "!text-lime-600/50 dark:!text-lime-500/50",
    green: "!text-green-600/50 dark:!text-green-500/50",
    emerald: "!text-emerald-600/50 dark:!text-emerald-500/50",
    teal: "!text-teal-600/50 dark:!text-teal-500/50",
    cyan: "!text-cyan-600/50 dark:!text-cyan-500/50",
    sky: "!text-sky-600/50 dark:!text-sky-500/50",
    blue: "!text-blue-600/50 dark:!text-blue-500/50",
    indigo: "!text-indigo-600/50 dark:!text-indigo-500/50",
    violet: "!text-violet-600/50 dark:!text-violet-500/50",
    purple: "!text-purple-600/50 dark:!text-purple-500/50",
    fuchsia: "!text-fuchsia-600/50 dark:!text-fuchsia-500/50",
    pink: "!text-pink-600/50 dark:!text-pink-500/50",
    rose: "!text-rose-600/50 dark:!text-rose-500/50",
    contrast: "!text-zinc-950/50 dark:!text-zinc-50/50",
    light: "!text-zinc-950/50 dark:!text-zinc-50/50"
  }
};
const UI_BUTTON_PROPORTION_CLASSES = {
  lg: "text-sp-body rounded-full px-4 py-3",
  md: "text-sp-body rounded-full px-4 py-2",
  sm: "text-sp-h5 rounded-full px-3 py-2",
  xs: "text-sp-caption rounded-full px-2 py-1"
};
const UI_BUTTON_ICON_PROPORTION_CLASSES = {
  lg: "text-sp-body rounded-full p-3",
  md: "text-sp-body rounded-full p-2",
  sm: "text-sp-h5 rounded-full p-2",
  xs: "text-sp-caption rounded-full p-1"
};
function UiButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      class: externalHtmlClass,
      color = UI_BUTTON_INITIAL_API.color,
      htmlTag = UI_BUTTON_INITIAL_API.htmlTag,
      isEnabledAlwaysHoverVisual = UI_BUTTON_INITIAL_API.isEnabledAlwaysHoverVisual,
      isEnabledFocusVisual = UI_BUTTON_INITIAL_API.isEnabledFocusVisual,
      isEnabledInactiveVisual = UI_BUTTON_INITIAL_API.isEnabledInactiveVisual,
      isEnabledHoverVisual = UI_BUTTON_INITIAL_API.isEnabledHoverVisual,
      proportion = UI_BUTTON_INITIAL_API.proportion,
      slotLeft,
      slotRight,
      variant = UI_BUTTON_INITIAL_API.variant,
      $$slots,
      $$events,
      ...rest_props
    } = $$props;
    const isIconButton = Boolean((slotLeft || slotRight) && !children);
    element(
      $$renderer2,
      htmlTag,
      () => {
        $$renderer2.push(`${attributes({
          ...rest_props,
          "aria-disabled": rest_props.disabled,
          class: clsx(clsx$1([
            UI_BUTTON_BASE_CLASS,
            UI_BUTTON_BASE_VARIANT_CLASSES[variant][color],
            isEnabledHoverVisual ? UI_BUTTON_HOVER_VISUAL_CLASSES[variant][color] : void 0,
            isEnabledAlwaysHoverVisual ? UI_BUTTON_IS_ENABLED_HOVER_VISUAL_CLASSES[variant][color] : void 0,
            isEnabledInactiveVisual ? UI_BUTTON_INACTIVE_CLASSES[variant][color] : void 0,
            isIconButton ? UI_BUTTON_ICON_PROPORTION_CLASSES[proportion] : UI_BUTTON_PROPORTION_CLASSES[proportion],
            slotLeft || slotRight ? "gap-2" : void 0,
            rest_props.disabled ? UI_BUTTON_DISABLED_CLASS : void 0,
            isEnabledFocusVisual ? UI_BUTTON_FOCUS_VISUAL_BASE_CLASS : "!inset-ring-none",
            externalHtmlClass
          ]))
        })}`);
      },
      () => {
        slotLeft?.($$renderer2);
        $$renderer2.push(`<!---->`);
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
        slotRight?.($$renderer2);
        $$renderer2.push(`<!---->`);
      }
    );
  });
}
const metadata = {
  "title": "CV - Artem Attvud",
  "description": "Senior Front-End Developer with 6+ years of experience"
};
const { title, description } = metadata;
function _page_svx($$renderer) {
  $$renderer.push(`<div class="items-center flex flex-col"><div class="flex relative w-full h-fit">`);
  UiButton($$renderer, {
    class: "absolute -bottom-6 z-2 left-[50%] -translate-x-1/2 print:hidden",
    proportion: "lg",
    isEnabledAlwaysHoverVisual: true,
    onclick: () => window.print(),
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Download CV`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <div class="flex flex-col gap-4 md:gap-8 lg:gap-16 w-full h-full items-center justify-center relative w-full min-h-[240px] md:min-h-[360px] lg:min-h-[640px] print:min-h-[360px] overflow-hidden"><div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/15 to-transparent dark:via-zinc-600/45"></div> <h1 class="text-center text-lg-hero md:text-4lg-hero lg:text-xl-hero font-bold z-1">Artem Attvud</h1> <h2 class="text-center text-lg-h2 md:text-4lg-h2 lg:text-xl-h2 font-bold z-1">🧿 Full Stack Developer</h2> `);
  UiBgImage($$renderer, { class: "opacity-50" });
  $$renderer.push(`<!----> `);
  UiBgAnimated($$renderer);
  $$renderer.push(`<!----></div></div> <div class="article max-w-5xl mt-16 print:mt-8"><p>Senior Front-End Developer with 6+ years of experience in building scalable web applications. Strong expertise in Next.js, React, and TypeScript. Passionate about performance optimization, testing automation, and frontend architecture.</p> <h1>Personal information</h1> <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Creative pseudonym</td><td>Artem Attvud</td></tr><tr><td>Date of birth</td><td>1992.05.29</td></tr><tr><td>Nationality</td><td>Ukrainian</td></tr><tr><td>Current location</td><td>Argentina</td></tr></tbody></table> <h2>Languages</h2> <table><thead><tr><th>Language</th><th>Level</th></tr></thead><tbody><tr><td>English</td><td>B1</td></tr><tr><td>Ukrainian</td><td>Native</td></tr><tr><td>Russian</td><td>Native</td></tr></tbody></table> <h1>Senior Front-End Developer. 6 Years of experience</h1> <h2>Qualifications and skills</h2> <table><thead><tr><th>Category</th><th>Technologies</th></tr></thead><tbody><tr><td>JavaScript</td><td>Node JS, Bun JS, Typescript, ES6, ES7, ES8, ES9, ES10, ES11, Babel</td></tr><tr><td>Frameworks</td><td>Next.js: (App router, Page router, React Server Components (RSC)), Svelte-kit</td></tr><tr><td>Libs</td><td>React, Vite, Svelte, Zod, DayJS, MUI, Ant design, Apollo client, React hook forms, MobX, Redux Toolkit</td></tr><tr><td>Task runners</td><td>Rollup, Esbuild, Webpack</td></tr><tr><td>Testing</td><td>Vitest, Jest, React testing library, React test renderer</td></tr><tr><td>Styling</td><td>Tailwind CSS, CSS5, SCSS, SASS, CSS Modules, Styled Components, Emotion, Styled JSX, Material UI, Ant Design</td></tr><tr><td>Network</td><td>REST API, GraphQL</td></tr><tr><td>Databases</td><td>S3, SQLite, MongoDB, MySQL</td></tr><tr><td>And more</td><td>Redis, Drizzle ORM, Github actions, CI/CD, Podman/Docker, Git (CLI)</td></tr></tbody></table> <h2>Achievements</h2> <ul><li>Developed and launched 5 major projects from scratch. One of them is a CRM system for 2000+ users. The latest stacks: Bun JS, Svelte, Svelte-kit, REST API, Redis, S3, SQLite, Vite, Vitest / Next JS (app router), React, Apollo Client, React hook forms, Vite, Vitest / Next JS (page router), React, Apollo Client, React hook forms, Vite, Vitest</li> <li>Successfully worked as the technical lead for one of four teams to build a project that consisted of six CRM systems</li> <li>Implemented in many projects: design systems, templates for quick start front-end development and UI libraries</li> <li>Initiated and implemented automated screenshot testing (not snapshot testing) and automatic performance testing of JS utility libraries</li></ul> <h2>Experience</h2> <ul><li><p><strong>Front-End Techlead in “Wezom”</strong> - 2022-2025</p> <ul><li>Led a team of 2 developers</li> <li>Primarily developed an HRM system, but also participated in the development of two other CRM systems within one project</li> <li>Integrated automated screenshot testing, reducing UI regression bugs by 20%</li> <li>Stack: Next.js, React, Typescript, Apollo Client, React hook forms, Vite, Vitest, Jest</li></ul></li> <li><p><strong>Senior Front-End Developer in “Wezom”</strong> - 2022-2022</p> <ul><li>Contributed to the development of a CRM system as part of a leading team</li> <li>Stack: Next.js, React, Typescript, Apollo Client, React hook forms, Vite, Vitest, Jest</li></ul></li> <li><p><strong>Middle Front-End Developer in “Pixoft”</strong> - 2019-2022</p> <ul><li>Held two roles simultaneously: Front-End Tech Lead and UX/UI Team Lead</li> <li>Managed a team of two developers and one designer</li> <li>Responsible for implementing an adaptive design system and creating a library of UI components based on it</li> <li>Developed two CRM systems with the team</li> <li>Stack: Next.js, React, Typescript, React hook forms, Storybook</li></ul></li></ul> <h1>Senior UX/UI Designer (no more). 9 Years of experience</h1> <h2>Qualifications and skills</h2> <ul><li>Creation and support of the most complex adaptive design systems</li> <li>Validated experience and knowledge in UX/UI analysis and design for complex web applications and enterprise solutions</li> <li>User experience research</li> <li>Conversion optimization</li> <li>Interaction with a team of designers &amp; developers. Strict quality control</li> <li>Excellent knowledge of wireframing and prototyping tools (such as Figma)</li> <li>Excellent knowledge in modern design patterns</li></ul> <h2>Achievements</h2> <ul><li>Leveraged UX/UI expertise to create highly usable and accessible interfaces</li> <li>Developed a design system builder capable of imitating any approach to create user interfaces (iOS, Android, etc.) or serve as a basis for creating a unique, maximally flexible design system</li> <li>Designed UX/UI for industry-leading products that later became market leaders</li> <li>Gained deep expertise in various UI design approaches across multiple platforms</li> <li>Created projects from the very beginning to a fully working product. UX/UI (with adaptive design system integration). Front-End (React + own component library with integrated design system and documentation)</li></ul> <h2>Experience</h2> <table><thead><tr><th>Position</th><th>Period</th></tr></thead><tbody><tr><td>UX/UI Teamlead in “Pixoft”</td><td>2018-2019</td></tr><tr><td>Senior UX/UI Designer in “Spartan”</td><td>2017-2018</td></tr><tr><td>Senior UX/UI Designer in “Upwork” &amp; “Fiver”</td><td>2015-2017</td></tr><tr><td>Middle UX/UI Designer on freelance exchanges</td><td>2010-2015</td></tr></tbody></table> <h1>Recommendations</h1> <p>My recommendations are available on my LinkedIn profile page - <a href="https://www.linkedin.com/in/artem-attvud/" rel="nofollow">Artem Attvud</a>.</p> <h1>Contacts</h1> <table><thead><tr><th>Contact Type</th><th>Link</th></tr></thead><tbody><tr><td>Email</td><td><a href="mailto:drop.rest.inside@gmail.com">drop.rest.inside@gmail.com</a></td></tr><tr><td>Telegram</td><td><a href="https://www.linkedin.com/in/artem-attvud" rel="nofollow">@Attvud</a></td></tr></tbody></table></div></div>`);
}
export {
  _page_svx as default,
  metadata
};
