import { _ as __vitePreload } from "../chunks/preload-helper.f8376bb0.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, C as create_slot, e as empty, a as space, D as head_selector, h as detach, c as claim_space, E as append_hydration, b as insert_hydration, F as update_slot_base, G as get_all_dirty_from_scope, H as get_slot_changes, g as transition_in, d as transition_out, f as check_outros, o as onMount, k as element, l as claim_element, n as attr, I as noop, x as construct_svelte_component, y as create_component, z as claim_component, A as mount_component, v as group_outros, B as destroy_component } from "../chunks/index.7fa818f6.js";
const app = "";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "./manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="./manifest.webmanifest">' } };
function create_if_block_1(ctx) {
  let link;
  return {
    c() {
      link = element("link");
      this.h();
    },
    l(nodes) {
      link = claim_element(nodes, "LINK", { rel: true, href: true });
      this.h();
    },
    h() {
      attr(link, "rel", "manifest");
      attr(link, "href", pwaInfo.webManifest.href.replace(/^\/+/, ""));
    },
    m(target, anchor) {
      insert_hydration(target, link, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(link);
    }
  };
}
function create_if_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*ReloadPrompt*/
    ctx[0]
  );
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*ReloadPrompt*/
      1 && switch_value !== (switch_value = /*ReloadPrompt*/
      ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment(ctx) {
  let if_block0_anchor;
  let t0;
  let t1;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*webManifest*/
    ctx[1] && create_if_block_1()
  );
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  let if_block1 = (
    /*ReloadPrompt*/
    ctx[0] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-4mzbwz", document.head);
      if (if_block0)
        if_block0.l(head_nodes);
      if_block0_anchor = empty();
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      document.title = "CoffeeRatio";
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(document.head, null);
      append_hydration(document.head, if_block0_anchor);
      insert_hydration(target, t0, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*webManifest*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1();
          if_block0.c();
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*ReloadPrompt*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*ReloadPrompt*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      detach(if_block0_anchor);
      if (detaching)
        detach(t0);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let webManifest;
  let { $$slots: slots = {}, $$scope } = $$props;
  let ReloadPrompt;
  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await __vitePreload(() => import("../chunks/virtual_pwa-register.2ddfe096.js"), true ? ["..\\chunks\\virtual_pwa-register.2ddfe096.js","..\\chunks\\preload-helper.f8376bb0.js"] : void 0, import.meta.url);
      registerSW({
        immediate: true,
        onRegistered(r) {
          console.log(`SW Registered: ${r}`);
          console.log(r);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        }
      });
      $$invalidate(0, ReloadPrompt = (await __vitePreload(() => import("../chunks/ReloadPrompt.b882e2eb.js"), true ? ["..\\chunks\\ReloadPrompt.b882e2eb.js","..\\chunks\\index.7fa818f6.js","..\\chunks\\preload-helper.f8376bb0.js","..\\chunks\\index.18e6901b.js","..\\assets\\ReloadPrompt.b5165cab.css"] : void 0, import.meta.url)).default);
    }
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$invalidate(1, webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "");
  return [ReloadPrompt, webManifest, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
