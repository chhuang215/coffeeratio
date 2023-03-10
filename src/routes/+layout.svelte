<script>
  import "../app.postcss";
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";

  let ReloadPrompt;

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        }
      });

      ReloadPrompt = (await import("$lib/ReloadPrompt.svelte")).default;
    }
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";

  $: {
    console.log(pwaInfo);
    console.log(pwaInfo ? pwaInfo.webManifest.href : "");
    // console.log(webManifest);
  }
</script>

<!-- <nav>
  <ul>
    <li>a</li>
    <li>b</li>
  </ul>
</nav> -->
<svelte:head>
  <title>CoffeeRatio</title>
  {#if webManifest}
    <link rel="manifest" href="manifest.webmanifest" />
  {/if}
</svelte:head>
<!-- <svelte:head>
  <link rel="manifest" href={manifestUrl} />
</svelte:head> -->

<slot />

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}
