import { c as create_ssr_component, d as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, v as validate_component, e as escape, b as add_attribute, a as each } from './ssr-3edfa391.js';
import { C as Card, a as Card_content } from './card-content-6ec0cd90.js';
import { c as cn, i as is_void } from './Icon-36e7f051.js';
import 'clsx';
import { S as StatusObj } from './helpers-0acb6e43.js';
import moment from 'moment';
import { B as Button } from './index3-c13390c6.js';
import { B as Badge, l } from './client-7218de37.js';
import { C as ChevronDown } from './chevron-down-10a1d022.js';

const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("animate-pulse rounded-md bg-muted", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}></div>`;
});
const Card_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("text-sm text-muted-foreground", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Card_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-1.5 p-6", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Card_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "tag"]);
  let { class: className = void 0 } = $$props;
  let { tag = "h3" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        {
          class: escape_attribute_value(cn("text-lg font-semibold leading-none tracking-tight", className))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const css = {
  code: ".toggle.svelte-1d83m4x.svelte-1d83m4x{display:none}.toggle.svelte-1d83m4x.svelte-1d83m4x{transition:all 0.15s ease-in-out}.toggle.open.svelte-1d83m4x.svelte-1d83m4x{transform:rotate(180deg)}.incident-div.svelte-1d83m4x:hover .toggle.svelte-1d83m4x{display:block}",
  map: null
};
const Incident = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { incident } = $$props;
  let { variant = "title+body+comments+monitor" } = $$props;
  let { state = "open" } = $$props;
  let { monitor } = $$props;
  let { lang } = $$props;
  let blinker = "bg-transparent";
  let incidentPriority = "";
  let incidentDuration = 0;
  if (incident.labels.includes("incident-down")) {
    blinker = "bg-red-500";
    incidentPriority = "DOWN";
  } else if (incident.labels.includes("incident-degraded")) {
    blinker = "bg-yellow-500";
    incidentPriority = "DEGRADED";
  }
  let incidentState = incident.state;
  let incidentClosedAt = incident.incident_end_time;
  let incidentCreatedAt = incident.incident_start_time;
  if (!!incidentClosedAt && !!incidentCreatedAt) {
    incidentDuration = moment(incidentClosedAt * 1e3).add(1, "minutes").diff(moment(incidentCreatedAt * 1e3), "minutes");
  } else if (!!incidentCreatedAt) {
    incidentDuration = moment().diff(moment(incidentCreatedAt * 1e3), "minutes");
  }
  incident.body = incident.body.replace(/\[start_datetime:(\d+)\]/g, "");
  incident.body = incident.body.replace(/\[end_datetime:(\d+)\]/g, "");
  incident.comments = [];
  if ($$props.incident === void 0 && $$bindings.incident && incident !== void 0)
    $$bindings.incident(incident);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.monitor === void 0 && $$bindings.monitor && monitor !== void 0)
    $$bindings.monitor(monitor);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css);
  return `<div class="incident-div mb-8 grid w-full grid-cols-3 gap-4 svelte-1d83m4x"><div class="col-span-3">${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "relative" }, {}, {
            default: () => {
              return `${incidentPriority != "" && incidentDuration > 0 ? `<p class="absolute -top-11 -translate-y-1 leading-10">${validate_component(Badge, "Badge").$$render(
                $$result,
                {
                  class: "-ml-3 bg-card text-sm font-semibold text-[rgba(0,0,0,.6)] text-" + StatusObj[incidentPriority] + " "
                },
                {},
                {
                  default: () => {
                    return `${escape(incidentPriority)} for ${escape(incidentDuration)} Minute${escape(incidentDuration > 1 ? "s" : "")}`;
                  }
                }
              )}</p>` : ``} ${variant.includes("monitor") ? `<div class="pb-4"><div class="scroll-m-20 text-2xl font-semibold tracking-tight">${monitor.image ? `<img${add_attribute("src", monitor.image, 0)} class="inline h-6 w-6" alt="" srcset="">` : ``} ${escape(monitor.name)}</div></div>` : ``} ${variant.includes("title") ? `${escape(incident.title)}` : ``} ${incidentState == "open" ? `<span class="${"absolute -left-[24px] -top-[24px] inline-flex h-[8px] w-[8px] animate-ping rounded-full " + escape(blinker, true) + " opacity-75 svelte-1d83m4x"}"></span>` : ``} ${variant.includes("body") || variant.includes("comments") ? `<div class="${"toggle absolute right-4 " + escape(state, true) + " svelte-1d83m4x"}">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "outline",
                  class: "rounded-full",
                  size: "icon"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "text-muted-foreground", size: 24 }, {}, {})}`;
                  }
                }
              )}</div>` : ``}`;
            }
          })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(moment(incidentCreatedAt * 1e3).format("MMMM Do YYYY, h:mm:ss a"))} <p class="mt-2 leading-8">${incident.labels.includes("identified") ? `<span class="tag-indetified me-2 mt-1 inline-block rounded px-2.5 py-1 text-xs font-semibold uppercase leading-3">${escape(l(lang, "incident.identified"))}</span>` : ``} ${incident.labels.includes("resolved") ? `<span class="tag-resolved me-2 inline-block rounded px-2.5 py-1 text-xs font-semibold uppercase leading-3">${escape(l(lang, "incident.resolved"))}</span>` : ``} ${incident.labels.includes("maintenance") ? `<span class="tag-maintenance me-2 inline-block rounded px-2.5 py-1 text-xs font-semibold uppercase leading-3">${escape(l(lang, "incident.maintenance"))}</span>` : ``}</p>`;
            }
          })}`;
        }
      })} ${(variant.includes("body") || variant.includes("comments")) && state == "open" ? `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
        default: () => {
          return `${variant.includes("body") ? `<div class="prose prose-stone max-w-none dark:prose-invert prose-code:rounded prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm"><!-- HTML_TAG_START -->${incident.body}<!-- HTML_TAG_END --></div>` : ``} ${variant.includes("comments") && incident.comments?.length > 0 ? `<div class="ml-4 mt-8"><ol class="relative border-s border-secondary">${each(incident.comments, (comment) => {
            return `<li class="mb-10 ms-4"><div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-secondary bg-secondary"></div> <time class="mb-1 text-sm font-normal leading-none text-muted-foreground">${escape(moment(comment.created_at).format("MMMM Do YYYY, h:mm:ss a"))}</time> <div class="wysiwyg prose prose-stone mb-4 max-w-none text-base font-normal dark:prose-invert prose-code:rounded prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm"><!-- HTML_TAG_START -->${comment.body}<!-- HTML_TAG_END --></div> </li>`;
          })}</ol></div>` : `${`${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "h-[20px] w-[100px] rounded-full" }, {}, {})}`}`}`;
        }
      })}` : ``}`;
    }
  })}</div> </div>`;
});

export { Card_header as C, Incident as I, Card_title as a, Card_description as b };
//# sourceMappingURL=incident-747ae33c.js.map
