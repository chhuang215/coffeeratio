<script>
  const brewTypes = [
    { id: "filter", label: "pour over / drip coffee", ratio: 0.06 },
    { id: "espresso", label: "espresso", ratio: 0.5 }
  ];

  let ratio = 0.06;

  let waterml = 1000;
  let coffeeg = 60;

  $: ratio, waterToCoffee();
  $: waterml, waterToCoffee();
  $: coffeeg, coffeeToWater();

  function waterToCoffee() {
    coffeeg = parseFloat((waterml * ratio).toFixed(2));
  }

  function coffeeToWater(e) {
    waterml = parseFloat((coffeeg / ratio).toFixed(2));
  }
</script>

<div class="container mx-auto py-4 ">
  <div class="text-center">
    <div class="inline-flex gap-3 mx-auto">
      {#each brewTypes as bt}
        <div class="flex items-center">
          <input
            id="bt-{bt.id}"
            name="brewtype-list"
            type="radio"
            value={bt.ratio}
            class="hidden peer"
            bind:group={ratio}
          />
          <label
            for="bt-{bt.id}"
            class="border rounded-lg border-gray-300 px-4 cursor-pointer py-3 ml-2  font-medium peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:font-bold"
          >
            <div class="block">
              {bt.label}
            </div>
          </label>
        </div>
      {/each}
    </div>
  </div>

  <div class="text-center pt-4">
    <div class="inline-flex flex-wrap gap-3 ">
      <div class="flex">
        <input
          bind:value={waterml}
          type="number"
          class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span
          class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          <code><b>ml</b> of water</code>
        </span>
      </div>
      <div class="flex">
        <input
          bind:value={coffeeg}
          type="number"
          class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span
          class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
          <code><b>g</b> of coffee</code>
        </span>
      </div>
    </div>
  </div>
  <!-- <h1>Welcome to SvelteKit {a}</h1> -->
</div>
