import { c as create_ssr_component, k as createEventDispatcher, b as add_attribute, e as escape, v as validate_component, a as each, d as compute_rest_props, f as subscribe, g as spread, i as escape_object } from './ssr-3edfa391.js';
import { l, B as Badge, n, s as summaryTime } from './client-7218de37.js';
import { c as cn, r as setCtx$2, t as getCtx$1, u as setCtx$1, v as getCtx, w as setItemCtx, x as getRadioIndicator, I as Icon$1, f as flyAndScale, y as builder, z as getAttrs$3, A as getAttrs$2, B as getAttrs$1, C as addMeltEventListener } from './Icon-36e7f051.js';
import { d as derived } from './index2-c5c18f89.js';
import { c as createDispatcher } from './events-b3d49719.js';
import 'clsx';
import { b as buttonVariants, B as Button } from './index3-c13390c6.js';
import { b as base } from './paths-05fee424.js';

function createLabel() {
  const root = builder("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
const Label$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $root, $$unsubscribe_root;
  let { asChild = false } = $$props;
  const { elements: { root } } = createLabel();
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  createDispatcher();
  const attrs = getAttrs$3("root");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder2 = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `<label${spread([escape_object(builder2), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</label>`}`;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { positioning = void 0 } = $$props;
  let { arrowSize = void 0 } = $$props;
  let { disableFocusTrap = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  const { updateOption, states: { open: localOpen }, ids } = setCtx$2({
    positioning,
    arrowSize,
    disableFocusTrap,
    closeOnEscape,
    closeOnOutsideClick,
    preventScroll,
    portal,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.positioning === void 0 && $$bindings.positioning && positioning !== void 0)
    $$bindings.positioning(positioning);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("positioning", positioning);
  }
  {
    updateOption("arrowSize", arrowSize);
  }
  {
    updateOption("disableFocusTrap", disableFocusTrap);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const PopoverContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids } = getCtx$1();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs$2("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder2 = $content;
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>` : `${inTransition && $open ? `<div${spread(
    [
      escape_object(builder2),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>` : `${outTransition && $open ? `<div${spread(
    [
      escape_object(builder2),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>` : `${$open ? `<div${spread(
    [
      escape_object(builder2),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const PopoverTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["asChild", "id"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { trigger }, ids } = getCtx$1();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs$2("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder2 = $trigger;
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `<button${spread(
    [
      escape_object(builder2),
      { type: "button" },
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</button>`}`;
});
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["required", "disabled", "value", "onValueChange", "loop", "orientation", "asChild"]);
  let $root, $$unsubscribe_root;
  let { required = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { orientation = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption } = setCtx$1({
    required,
    disabled,
    defaultValue: value,
    loop,
    orientation,
    onValueChange: ({ next }) => {
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs$1("root");
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  value !== void 0 && localValue.set(value);
  {
    updateOption("required", required);
  }
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("orientation", orientation);
  }
  builder2 = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `<div${spread([escape_object(builder2), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</div>`}`;
});
const RadioGroupInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $hiddenInput, $$unsubscribe_hiddenInput;
  let { asChild = false } = $$props;
  const { elements: { hiddenInput } } = getCtx();
  $$unsubscribe_hiddenInput = subscribe(hiddenInput, (value) => $hiddenInput = value);
  const attrs = getAttrs$1("input");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder2 = $hiddenInput;
  $$unsubscribe_hiddenInput();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `<input${spread([escape_object(builder2), escape_object($$restProps), escape_object(attrs)], {})}>`}`;
});
const RadioGroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  const { elements: { item } } = setItemCtx(value);
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  createDispatcher();
  const attrs = getAttrs$1("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder2 = $item({ value, disabled });
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}` : `<button${spread(
    [
      escape_object(builder2),
      { type: "button" },
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder: builder2, attrs }) : ``}</button>`}`;
});
const RadioGroupItemIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isChecked, $$unsubscribe_isChecked;
  const { isChecked, value } = getRadioIndicator();
  $$unsubscribe_isChecked = subscribe(isChecked, (value2) => $isChecked = value2);
  $$unsubscribe_isChecked();
  return `${$isChecked(value) ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowRight = Arrow_right;
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["circle", { "cx": "12", "cy": "12", "r": "10" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle$1 = Circle;
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "code" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Code$1 = Code;
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Info$1 = Info;
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Link$1 = Link;
const Percent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "19",
        "x2": "5",
        "y1": "5",
        "y2": "19"
      }
    ],
    ["circle", { "cx": "6.5", "cy": "6.5", "r": "2.5" }],
    ["circle", { "cx": "17.5", "cy": "17.5", "r": "2.5" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "percent" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Percent$1 = Percent;
const Share_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "18", "cy": "5", "r": "3" }],
    ["circle", { "cx": "6", "cy": "12", "r": "3" }],
    ["circle", { "cx": "18", "cy": "19", "r": "3" }],
    [
      "line",
      {
        "x1": "8.59",
        "x2": "15.42",
        "y1": "13.51",
        "y2": "17.49"
      }
    ],
    [
      "line",
      {
        "x1": "15.41",
        "x2": "8.59",
        "y1": "6.51",
        "y2": "10.49"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "share-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Share2 = Share_2;
const Trending_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "22 7 13.5 15.5 8.5 10.5 2 17" }],
    ["polyline", { "points": "16 7 22 7 22 13" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "trending-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TrendingUp = Trending_up;
const Popover_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(PopoverContent, "PopoverPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Popover;
const Trigger = PopoverTrigger;
const Radio_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(RadioGroup, "RadioGroupPrimitive.Root").$$render(
      $$result,
      Object.assign({}, { class: cn("grid gap-2", className) }, $$restProps, { value }),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Radio_group_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(RadioGroupItem, "RadioGroupPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      { value },
      {
        class: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="flex items-center justify-center">${validate_component(RadioGroupItemIndicator, "RadioGroupPrimitive.ItemIndicator").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Circle$1, "Circle").$$render(
              $$result,
              {
                class: "h-2.5 w-2.5 fill-current text-current"
              },
              {},
              {}
            )}`;
          }
        })}</div>`;
      }
    }
  )}`;
});
const Input = RadioGroupInput;
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Label$1, "LabelPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const css = {
  code: ".daygrid90.svelte-155v08j.svelte-155v08j{-ms-overflow-style:none;scrollbar-width:none}.daygrid90.svelte-155v08j.svelte-155v08j::-webkit-scrollbar{display:none}.oneline.svelte-155v08j.svelte-155v08j{transition:transform 0.1s ease-in;cursor:pointer}.oneline.svelte-155v08j.svelte-155v08j:hover{transform:scaleY(1.2)}.oneline.svelte-155v08j:hover+.show-hover.svelte-155v08j{display:block !important}.show-hover.svelte-155v08j.svelte-155v08j{display:none;top:40px;padding:0px;text-align:left}.today-sq+.hiddenx.svelte-155v08j .message.svelte-155v08j{position:absolute;white-space:nowrap}.today-sq.svelte-155v08j+.hiddenx.svelte-155v08j{visibility:hidden;z-index:30}.today-sq.svelte-155v08j:hover+.hiddenx.svelte-155v08j{visibility:visible}.today-sq.svelte-155v08j.svelte-155v08j:hover{box-shadow:rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,\r\n			rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;opacity:0.75;transition:all 0.1s ease-in;cursor:pointer}.today-sq.svelte-155v08j.svelte-155v08j{position:relative;z-index:0}",
  map: null
};
const Monitor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { monitor } = $$props;
  let { localTz } = $$props;
  let { lang } = $$props;
  let _90Day = monitor.pageData._90Day;
  let uptime0Day = monitor.pageData.uptime0Day;
  let uptime90Day = monitor.pageData.uptime90Day;
  let theme = "light";
  let embedType = "js";
  let todayDD = Object.keys(_90Day)[Object.keys(_90Day).length - 1];
  if ($$props.monitor === void 0 && $$bindings.monitor && monitor !== void 0)
    $$bindings.monitor(monitor);
  if ($$props.localTz === void 0 && $$bindings.localTz && localTz !== void 0)
    $$bindings.localTz(localTz);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="monitor grid w-full grid-cols-12 gap-4 pb-4 md:w-[890px]">${monitor.embed === void 0 ? `<div class="col-span-12 md:col-span-4"><div class="pt-1"><div class="scroll-m-20 text-2xl font-semibold tracking-tight">${monitor.image ? `<img${add_attribute("src", monitor.image, 0)} class="inline h-6 w-6"${add_attribute("alt", monitor.name, 0)} srcset="">` : ``} <span>${escape(monitor.name)}</span> <br> ${monitor.description ? `${validate_component(Root, "Popover.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Trigger, "Popover.Trigger").$$render($$result, {}, {}, {
          default: () => {
            return `<span class="${"menu-monitor pb-0 pl-1 pr-0 pt-0 " + escape(buttonVariants({ variant: "link" }), true) + " svelte-155v08j"}">${validate_component(Info$1, "Info").$$render($$result, { size: 12, class: "text-muted-foreground" }, {}, {})}</span>`;
          }
        })} ${validate_component(Popover_content, "Popover.Content").$$render($$result, { class: "text-sm" }, {}, {
          default: () => {
            return `<h2 class="mb-2 text-lg font-semibold">${escape(monitor.name)}</h2> <span class="text-sm text-muted-foreground"><!-- HTML_TAG_START -->${monitor.description}<!-- HTML_TAG_END --></span>`;
          }
        })}`;
      }
    })}` : ``} ${validate_component(Root, "Popover.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Trigger, "Popover.Trigger").$$render($$result, {}, {}, {
          default: () => {
            return `<span class="${"menu-monitor pb-0 pl-1 pr-0 pt-0 " + escape(buttonVariants({ variant: "link" }), true) + " svelte-155v08j"}">${validate_component(Share2, "Share2").$$render($$result, { size: 12, class: "text-muted-foreground" }, {}, {})}</span>`;
          }
        })} ${validate_component(Popover_content, "Popover.Content").$$render(
          $$result,
          {
            class: "w-[375px] max-w-full pb-1 pl-1 pr-1"
          },
          {},
          {
            default: () => {
              return `<h2 class="mb-1 px-2 text-lg font-semibold">${escape(l(lang, "monitor.share"))}</h2> <p class="mb-2 pl-2 text-sm text-muted-foreground">${escape(l(lang, "monitor.share_desc"))}</p> ${validate_component(Button, "Button").$$render($$result, { class: "ml-2", variant: "secondary" }, {}, {
                default: () => {
                  return `${`${validate_component(Link$1, "Link").$$render($$result, { class: "mr-2 inline", size: 12 }, {}, {})} <span class="text-sm font-medium">${escape(l(lang, "monitor.cp_link"))}</span>`}`;
                }
              })} <h2 class="mb-2 mt-4 px-2 text-lg font-semibold">${escape(l(lang, "monitor.embed"))}</h2> <p class="mb-2 pl-2 text-sm text-muted-foreground">${escape(l(lang, "monitor.embed_desc"))}</p> <div class="grid grid-cols-2 gap-2"><div class="col-span-1 pl-4"><h3 class="mb-2 text-sm text-muted-foreground">${escape(l(lang, "monitor.theme"))}</h3> ${validate_component(Radio_group, "RadioGroup.Root").$$render(
                $$result,
                { value: theme },
                {
                  value: ($$value) => {
                    theme = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `<div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "light", id: "light-theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "light-theme" }, {}, {
                      default: () => {
                        return `${escape(l(lang, "monitor.theme_light"))}`;
                      }
                    })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "dark", id: "dark-theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "dark-theme" }, {}, {
                      default: () => {
                        return `${escape(l(lang, "monitor.theme_dark"))}`;
                      }
                    })}</div> ${validate_component(Input, "RadioGroup.Input").$$render($$result, { name: "theme" }, {}, {})}`;
                  }
                }
              )}</div> <div class="col-span-1 pl-2"><h3 class="mb-2 text-sm text-muted-foreground">${escape(l(lang, "monitor.mode"))}</h3> ${validate_component(Radio_group, "RadioGroup.Root").$$render(
                $$result,
                { value: embedType },
                {
                  value: ($$value) => {
                    embedType = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `<div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "js", id: "js-embed" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "js-embed" }, {}, {
                      default: () => {
                        return `&lt;script&gt;`;
                      }
                    })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "iframe", id: "iframe-embed" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "iframe-embed" }, {}, {
                      default: () => {
                        return `&lt;iframe&gt;`;
                      }
                    })}</div> ${validate_component(Input, "RadioGroup.Input").$$render($$result, { name: "embed" }, {}, {})}`;
                  }
                }
              )}</div></div> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  class: "mb-2 ml-2 mt-4",
                  variant: "secondary"
                },
                {},
                {
                  default: () => {
                    return `${`${validate_component(Code$1, "Code").$$render($$result, { class: "mr-2 inline", size: 12 }, {}, {})} <span class="text-sm font-medium">${escape(l(lang, "monitor.cp_code"))}</span>`}`;
                  }
                }
              )} <h2 class="mb-2 mt-2 px-2 text-lg font-semibold">${escape(l(lang, "monitor.badge"))}</h2> <p class="mb-2 pl-2 text-sm text-muted-foreground">${escape(l(lang, "monitor.badge_desc"))}</p> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  class: "mb-2 ml-2 mt-2",
                  variant: "secondary"
                },
                {},
                {
                  default: () => {
                    return `${`${validate_component(TrendingUp, "TrendingUp").$$render($$result, { class: "mr-2 inline", size: 12 }, {}, {})} <span class="text-sm font-medium">${escape(l(lang, "monitor.status"))} ${escape(l(lang, "monitor.badge"))}</span>`}`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  class: "mb-2 ml-2 mt-2",
                  variant: "secondary"
                },
                {},
                {
                  default: () => {
                    return `${`${validate_component(Percent$1, "Percent").$$render($$result, { class: "mr-2 inline", size: 12 }, {}, {})} <span class="text-sm font-medium">${escape(l(lang, "monitor.uptime"))} ${escape(l(lang, "monitor.badge"))}</span>`}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    })}</div></div> <div class=""><div class="grid grid-cols-2 gap-0"><div class="col-span-1 -mt-2"><a href="${escape(base, true) + "/incident/" + escape(monitor.folderName, true) + "#past_incident"}" class="${"pb-0 pl-0 pt-0 text-left text-indigo-500 " + escape(buttonVariants({ variant: "link" }), true) + " svelte-155v08j"}">${escape(l(lang, "root.recent_incidents"))} ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { size: 16 }, {}, {})}</a></div></div></div></div>` : ``} <div class="${"col-span-12 md:w-[546px] " + escape(
      monitor.embed === void 0 ? "md:col-span-8" : "overflow-hidden",
      true
    ) + " pt-2"}"><div class="col-span-12"><div class="grid grid-cols-12"><div class="${escape(
      monitor.embed === void 0 ? "col-span-12" : "col-span-8",
      true
    ) + " h-[32px] md:col-span-8"}"><button class="inline-block">${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        variant: ""
      },
      {},
      {
        default: () => {
          return `${escape(l(lang, "monitor.90_day"))} ► ${escape(n(lang, uptime90Day))}%`;
        }
      }
    )}</button> <button>${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
      default: () => {
        return `${escape(l(lang, "monitor.today"))} ► ${escape(n(lang, uptime0Day))}%`;
      }
    })}</button></div> <div class="${escape(
      monitor.embed === void 0 ? "col-span-12" : "col-span-4",
      true
    ) + " h-[32px] text-right md:col-span-4"}">${_90Day[todayDD] ? `<div class="${"text-api-up mt-[4px] truncate text-sm font-semibold text-" + escape(_90Day[todayDD].cssClass, true) + " svelte-155v08j"}"${add_attribute("title", _90Day[todayDD].message, 0)}>${escape(summaryTime(lang, _90Day[todayDD].message))}</div>` : ``}</div></div> ${`<div class="chart-status relative col-span-12 mt-1"><div class="daygrid90 flex overflow-x-auto overflow-y-hidden py-1 svelte-155v08j">${each(Object.entries(_90Day), ([ts, bar]) => {
      return `<div class="oneline h-[30px] w-[6px] rounded-sm svelte-155v08j"><div class="${"h-[30px] bg-" + escape(bar.cssClass, true) + " mr-[2px] w-[4px] rounded-sm svelte-155v08j"}"></div></div> <div class="show-hover absolute bg-background text-sm svelte-155v08j"><div class="${"text-" + escape(bar.cssClass, true) + " font-semibold svelte-155v08j"}">● ${escape(n(lang, new Date(bar.timestamp * 1e3).toLocaleDateString()))} ${escape(summaryTime(lang, bar.message))}</div> </div>`;
    })}</div></div>`}</div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Monitor as M };
//# sourceMappingURL=monitor-db90029b.js.map
