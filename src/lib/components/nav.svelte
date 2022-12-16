<script lang="ts">
	import Button from "./general/button.svelte";
	import Tooltip from "./general/tooltip.svelte";

	let windowWidth = 0;

  const LINKS: { label: string; route: string; enabled: boolean; show: boolean }[] = [
    { label: "Learn", route: "/learn", enabled: true, show: true },
    { label: "Lime Token", route: "/lime-token", enabled: true, show: true },
    { label: "Community", route: "/community", enabled: true, show: true },
    { label: "Blog", route: "/blog", enabled: true, show: true },
  ];
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<nav class="flex justify-center bg-transparent px-5 py-4 border-b w-full">
  <div class="flex justify-between items-center w-full" style="max-width: 1400px;">
    <div class="flex justify-start items-center w-1/3">
        <a href="/" class="flex justify-start items-center btn btn-ghost normal-case text-lg">
            <div class="mr-2">
              <img src="/assets/bl-logos/logo-bold.png" alt="Bitlime logo" class="h-8 w-8"/>
            </div>
            {#if windowWidth>800}
              <div class="font-bold text-2xl">bitlime</div>
            {/if}
        </a>
        <span class="border-l pl-3 ml-3 border-zinc-20 font-medium text-zinc-300 hover:text-black cursor-default">
          COMING EARLY 2023
        </span>
    </div>
    <div class="flex justify-center items-center w-1/3">
      <ul class="flex justify-center items-center">
        {#if windowWidth>600}
          {#each LINKS as link}
            <li class="py-1 px-3 hover:bg-zinc-200 rounded-lg{link.show?'':'sr-only'}">
              <a href={link.route} disabled={!link.enabled} class="cursor-default"><span class="font-semibold">{link.label}</span></a>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
    <div class="w-1/3 flex justify-end items-center">
      {#if windowWidth>800}
        <Tooltip content="Coming Soon" invertX>
          <Button
            theme="primary"
            label='Get Started'
            additionalClassList="cursor-default font-bold text-white"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Button>
        </Tooltip>
      {/if}
    </div>
  </div>
</nav>
