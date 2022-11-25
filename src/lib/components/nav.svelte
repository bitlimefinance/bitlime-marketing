<script lang="ts">
	import Button from "./general/button.svelte";
	import Tooltip from "./general/tooltip.svelte";

	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<nav class="flex justify-between items-center bg-transparent px-5 py-4">
    <div>
        <a href="/" class="flex justify-start items-center btn btn-ghost normal-case text-lg">
            <img src="/assets/bl-logos/logo-white.png" alt="Bitlime logo" class="h-7 mr-1" />
            <div class="font-normal text-xl">BitLime<span class="text-emerald-500"></span></div>
        </a>
    </div>
    <div class="flex justify-end items-center gap-5">
      <ul class="flex justify-end items-center gap-5">
        {#if windowWidth>500}
        <li>
          <a href="/" disabled class="cursor-default"><span class="text-zinc-300 opacity-50">Docs</span></a>
        </li>
        <li>
          <a href="/" disabled class="cursor-default"><span class="text-zinc-300 opacity-50">Community</span></a>
        </li>
        {/if}
        <li>
          <a href="https://blog.bitlime.org/" target="blank_"><span class="text-zinc-300 hover:text-emerald-500">Blog</span></a>
        </li>
      </ul>
      {#if windowWidth>600}
        <Tooltip content="Coming Soon" invertX>
          <Button
            theme="tertiary"
            label='Enter App'
            additionalClassList="cursor-default"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Button>
        </Tooltip>
      {/if}
    </div>
</nav>
