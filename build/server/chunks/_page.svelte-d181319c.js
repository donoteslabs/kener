import { c as create_ssr_component, e as escape, v as validate_component, a as each, d as compute_rest_props, f as subscribe, g as spread, i as escape_object } from './ssr-3edfa391.js';
import { I as Incident } from './incident-747ae33c.js';
import { c as cn, p as setCtx, q as getAttrs } from './Icon-36e7f051.js';
import { l, s as summaryTime, B as Badge } from './client-7218de37.js';
import './card-content-6ec0cd90.js';
import 'clsx';
import './helpers-0acb6e43.js';
import 'moment';
import './index3-c13390c6.js';
import 'tailwind-variants';
import './chevron-down-10a1d022.js';
import './index2-c5c18f89.js';
import 'tailwind-merge';

const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, updateOption } = setCtx({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  const attrs = getAttrs("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}></div>`}`;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1nucjx9_START -->${$$result.title = `<title> ${escape(data.monitor.name)} - ${escape(l(data.lang, "root.incidents"))} </title>`, ""}<!-- HEAD_svelte-1nucjx9_END -->`, ""} <section class="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center"><div class="mx-auto max-w-screen-xl px-4 pb-16 pt-32 lg:flex lg:items-center"><div class="blurry-bg mx-auto max-w-3xl text-center"><h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold leading-snug text-transparent">${escape(data.monitor.name)}</h1> <p class="mx-auto mt-4 max-w-xl sm:text-xl"><!-- HTML_TAG_START -->${data.monitor.description}<!-- HTML_TAG_END --></p></div></div></section> <section class="mx-auto mb-4 mt-8 flex w-full flex-1 flex-col"><div class="container"><h1 class="mb-4 text-2xl font-bold leading-none">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
    default: () => {
      return `${escape(l(data.lang, "root.active_incidents"))}`;
    }
  })}</h1> ${data.activeIncidents.length > 0 ? `${each(data.activeIncidents, (incident, i) => {
    return `${validate_component(Incident, "Incident").$$render(
      $$result,
      {
        incident,
        state: i == 0 ? "open" : "close",
        variant: "title+body+comments",
        monitor: data.monitor,
        lang: data.lang
      },
      {},
      {}
    )}`;
  })}` : `<div class="justify-left flex items-center"><p class="text-base font-semibold">${escape(l(data.lang, "root.no_active_incident"))}</p></div>`}</div></section> ${validate_component(Separator, "Separator").$$render($$result, { class: "container mb-4 w-[400px]" }, {}, {})} <section class="mx-auto mb-4 mt-8 flex w-full flex-1 flex-col"><div class="container"><h1 class="mb-4 text-2xl font-bold leading-none">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
    default: () => {
      return `${escape(l(data.lang, "root.recent_incidents"))} - ${escape(summaryTime(data.lang, `Last ${data.site.github.incidentSince} hours`))}`;
    }
  })}</h1> ${data.pastIncidents.length > 0 ? `${each(data.pastIncidents, (incident) => {
    return `${validate_component(Incident, "Incident").$$render(
      $$result,
      {
        incident,
        state: "close",
        variant: "title+body+comments",
        monitor: data.monitor,
        lang: data.lang
      },
      {},
      {}
    )}`;
  })}` : `<div class="justify-left flex items-center"><p class="text-base font-semibold">${escape(l(data.lang, "root.no_recent_incident"))}</p></div>`}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d181319c.js.map
