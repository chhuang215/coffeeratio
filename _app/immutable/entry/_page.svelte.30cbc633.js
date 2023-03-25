import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, b as insert_hydration, E as append_hydration, K as set_input_value, L as listen, M as to_number, I as noop, N as destroy_each, O as run_all, P as init_binding_group } from "../chunks/index.7fa818f6.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[14] = i;
  return child_ctx;
}
function create_each_block(ctx) {
  let div1;
  let input;
  let t0;
  let label;
  let div0;
  let t1_value = (
    /*bt*/
    ctx[12].label + ""
  );
  let t1;
  let t2;
  let binding_group;
  let mounted;
  let dispose;
  binding_group = init_binding_group(
    /*$$binding_groups*/
    ctx[7][0]
  );
  return {
    c() {
      div1 = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      div0 = element("div");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      input = claim_element(div1_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true
      });
      t0 = claim_space(div1_nodes);
      label = claim_element(div1_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      div0 = claim_element(label_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, t1_value);
      div0_nodes.forEach(detach);
      label_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "id", "bt-" + /*bt*/
      ctx[12].id);
      attr(input, "name", "brewtype-list");
      attr(input, "type", "radio");
      input.__value = /*i*/
      ctx[14];
      input.value = input.__value;
      attr(input, "class", "hidden peer");
      attr(div0, "class", "block");
      attr(label, "for", "bt-" + /*bt*/
      ctx[12].id);
      attr(label, "class", "border rounded-lg border-gray-300 px-4 cursor-pointer py-3 ml-2 font-medium peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:font-bold");
      attr(div1, "class", "flex items-center");
      binding_group.p(input);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, input);
      input.checked = input.__value === /*selectedBrewType*/
      ctx[0];
      append_hydration(div1, t0);
      append_hydration(div1, label);
      append_hydration(label, div0);
      append_hydration(div0, t1);
      append_hydration(div1, t2);
      if (!mounted) {
        dispose = listen(
          input,
          "change",
          /*input_change_handler*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*selectedBrewType*/
      1) {
        input.checked = input.__value === /*selectedBrewType*/
        ctx2[0];
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      binding_group.r();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let div7;
  let div1;
  let div0;
  let t0;
  let div2;
  let t1;
  let div6;
  let div5;
  let div3;
  let input0;
  let t2;
  let span0;
  let code0;
  let b0;
  let t3;
  let t4;
  let t5;
  let div4;
  let input1;
  let t6;
  let span1;
  let code1;
  let b1;
  let t7;
  let t8;
  let mounted;
  let dispose;
  let each_value = (
    /*brewTypes*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div7 = element("div");
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      div2 = element("div");
      t1 = space();
      div6 = element("div");
      div5 = element("div");
      div3 = element("div");
      input0 = element("input");
      t2 = space();
      span0 = element("span");
      code0 = element("code");
      b0 = element("b");
      t3 = text("ml");
      t4 = text(" of water");
      t5 = space();
      div4 = element("div");
      input1 = element("input");
      t6 = space();
      span1 = element("span");
      code1 = element("code");
      b1 = element("b");
      t7 = text("g");
      t8 = text(" of coffee");
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div1 = claim_element(div7_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t0 = claim_space(div7_nodes);
      div2 = claim_element(div7_nodes, "DIV", { class: true });
      children(div2).forEach(detach);
      t1 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      input0 = claim_element(div3_nodes, "INPUT", { type: true, class: true });
      t2 = claim_space(div3_nodes);
      span0 = claim_element(div3_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      code0 = claim_element(span0_nodes, "CODE", {});
      var code0_nodes = children(code0);
      b0 = claim_element(code0_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "ml");
      b0_nodes.forEach(detach);
      t4 = claim_text(code0_nodes, " of water");
      code0_nodes.forEach(detach);
      span0_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t5 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      input1 = claim_element(div4_nodes, "INPUT", { type: true, class: true });
      t6 = claim_space(div4_nodes);
      span1 = claim_element(div4_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      code1 = claim_element(span1_nodes, "CODE", {});
      var code1_nodes = children(code1);
      b1 = claim_element(code1_nodes, "B", {});
      var b1_nodes = children(b1);
      t7 = claim_text(b1_nodes, "g");
      b1_nodes.forEach(detach);
      t8 = claim_text(code1_nodes, " of coffee");
      code1_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "inline-flex gap-3 mx-auto");
      attr(div1, "class", "text-center");
      attr(div2, "class", "py-3");
      attr(input0, "type", "number");
      attr(input0, "class", "rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
      attr(span0, "class", "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600");
      attr(div3, "class", "flex");
      attr(input1, "type", "number");
      attr(input1, "class", "rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
      attr(span1, "class", "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600");
      attr(div4, "class", "flex");
      attr(div5, "class", "inline-flex flex-wrap gap-3 justify-around");
      attr(div6, "class", "text-center");
      attr(div7, "class", "container mx-auto py-4");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      append_hydration(div7, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration(div7, t0);
      append_hydration(div7, div2);
      append_hydration(div7, t1);
      append_hydration(div7, div6);
      append_hydration(div6, div5);
      append_hydration(div5, div3);
      append_hydration(div3, input0);
      set_input_value(
        input0,
        /*waterml*/
        ctx[1]
      );
      append_hydration(div3, t2);
      append_hydration(div3, span0);
      append_hydration(span0, code0);
      append_hydration(code0, b0);
      append_hydration(b0, t3);
      append_hydration(code0, t4);
      append_hydration(div5, t5);
      append_hydration(div5, div4);
      append_hydration(div4, input1);
      set_input_value(
        input1,
        /*coffeeg*/
        ctx[2]
      );
      append_hydration(div4, t6);
      append_hydration(div4, span1);
      append_hydration(span1, code1);
      append_hydration(code1, b1);
      append_hydration(b1, t7);
      append_hydration(code1, t8);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[8]
          ),
          listen(
            input0,
            "input",
            /*waterToCoffee*/
            ctx[4]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[9]
          ),
          listen(
            input1,
            "input",
            /*coffeeToWater*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*brewTypes, selectedBrewType*/
      9) {
        each_value = /*brewTypes*/
        ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*waterml*/
      2 && to_number(input0.value) !== /*waterml*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*waterml*/
          ctx2[1]
        );
      }
      if (dirty & /*coffeeg*/
      4 && to_number(input1.value) !== /*coffeeg*/
      ctx2[2]) {
        set_input_value(
          input1,
          /*coffeeg*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div7);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const brewTypes = [
    {
      id: "filter",
      label: "pour over / drip coffee",
      ratio: 0.06,
      default: 1e3
    },
    {
      id: "espresso",
      label: "espresso",
      ratio: 0.5,
      default: 36
    }
  ];
  let waterml = 1e3;
  let coffeeg = 60;
  let selectedBrewType = 0;
  let ratio = 0.06;
  function onBrewTypeChange() {
    let brewType = brewTypes[selectedBrewType];
    if (!waterml) {
      $$invalidate(1, waterml = brewType["default"]);
    }
    ratio = brewType["ratio"];
    waterToCoffee();
  }
  function waterToCoffee() {
    if (waterml == null) {
      $$invalidate(2, coffeeg = null);
      return;
    }
    $$invalidate(2, coffeeg = parseFloat((waterml * ratio).toFixed(2)));
  }
  function coffeeToWater() {
    if (coffeeg == null) {
      $$invalidate(1, waterml = null);
      return;
    }
    $$invalidate(1, waterml = parseFloat((coffeeg / ratio).toFixed(2)));
  }
  const $$binding_groups = [[]];
  function input_change_handler() {
    selectedBrewType = this.__value;
    $$invalidate(0, selectedBrewType);
  }
  function input0_input_handler() {
    waterml = to_number(this.value);
    $$invalidate(1, waterml);
  }
  function input1_input_handler() {
    coffeeg = to_number(this.value);
    $$invalidate(2, coffeeg);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*selectedBrewType*/
    1) {
      onBrewTypeChange();
    }
  };
  return [
    selectedBrewType,
    waterml,
    coffeeg,
    brewTypes,
    waterToCoffee,
    coffeeToWater,
    input_change_handler,
    $$binding_groups,
    input0_input_handler,
    input1_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
