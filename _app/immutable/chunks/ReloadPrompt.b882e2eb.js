import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, I as noop, h as detach, J as component_subscribe, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, n as attr, E as append_hydration, L as listen } from "./index.7fa818f6.js";
import { _ as __vitePreload } from "./preload-helper.f8376bb0.js";
import { w as writable } from "./index.18e6901b.js";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await __vitePreload(() => import("./workbox-window.prod.es5.6a9d82f3.js"), true ? [] : void 0, import.meta.url);
      wb = new Workbox("./sw.js", { scope: "./", type: "classic" });
      {
        {
          wb.addEventListener("activated", (event) => {
            if (event.isUpdate || event.isExternal)
              window.location.reload();
          });
          wb.addEventListener("installed", (event) => {
            if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("./sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  const needRefresh = writable(false);
  const offlineReady = writable(false);
  const updateServiceWorker = registerSW({
    immediate,
    onOfflineReady() {
      offlineReady.set(true);
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onNeedRefresh() {
      needRefresh.set(true);
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onRegistered,
    onRegisteredSW,
    onRegisterError
  });
  return {
    needRefresh,
    offlineReady,
    updateServiceWorker
  };
}
const ReloadPrompt_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let button;
  let t2;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*$offlineReady*/
      ctx2[1]
    )
      return create_if_block_2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*$needRefresh*/
    ctx[0] && create_if_block_1(ctx)
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      button = element("button");
      t2 = text("Close");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, role: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t2 = claim_text(button_nodes, "Close");
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "message svelte-1y717j9");
      attr(button, "class", "svelte-1y717j9");
      attr(div1, "class", "pwa-toast svelte-1y717j9");
      attr(div1, "role", "alert");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if_block0.m(div0, null);
      append_hydration(div1, t0);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div1, t1);
      append_hydration(div1, button);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*close*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (
        /*$needRefresh*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(div1, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function create_else_block(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("New content available, click on reload button to update.");
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, "New content available, click on reload button to update.");
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("App ready to work offline");
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, "App ready to work offline");
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_1(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Reload");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Reload");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "svelte-1y717j9");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[7]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = (
    /*toast*/
    ctx[2] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*toast*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let toast;
  let $needRefresh;
  let $offlineReady;
  const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    }
  });
  component_subscribe($$self, needRefresh, (value) => $$invalidate(0, $needRefresh = value));
  component_subscribe($$self, offlineReady, (value) => $$invalidate(1, $offlineReady = value));
  const close = () => {
    offlineReady.set(false);
    needRefresh.set(false);
  };
  const click_handler = () => updateServiceWorker(true);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$offlineReady, $needRefresh*/
    3) {
      $$invalidate(2, toast = $offlineReady || $needRefresh);
    }
  };
  return [
    $needRefresh,
    $offlineReady,
    toast,
    needRefresh,
    updateServiceWorker,
    offlineReady,
    close,
    click_handler
  ];
}
class ReloadPrompt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  ReloadPrompt as default
};
