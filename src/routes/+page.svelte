<script lang="ts">
	import Button from "$lib/components/general/button.svelte";
	import Tooltip from "$lib/components/general/tooltip.svelte";

	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<main class="flex justify-center w-full" style="max-width: 1200px;">
	<header class="w-full px-4 sm:px-8 md:px-12">
		<h1 class="w-full text-left font-medium mt-24 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
			<span class="text-emerald-500">
				Decentralized Finance Ecosystem for Web3
			</span>
		</h1>
		
		<h2 class="w-full text-left mt-10 font-light max-w-2xl opacity-70 animate-pulse mb-10 text-lg sm:text-lg md:text-xl lg:text-2xl">
			Trade, earn, stake, create and bridge tokens and digital assets, easly, on Bitlime.<br>
			We are constantly working on new features and improvements to make BitLime the best DeFi ecosystem.
		</h2>

		<div class="gap-3 space-y-3 md:flex md:justify-start md:space-y-0 w-fit">
			<Tooltip content="Coming Soon">
				<Button
					theme="secondary"
					label='Enter App'
					additionalClassList="cursor-default"
					>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
					</svg>
				</Button>
			</Tooltip>

			<Tooltip content="Coming Soon">
				<Button
				theme="tertiary"
				label='Affiliate Program'
				additionalClassList="cursor-default"
				/>
			</Tooltip>
		</div>
	</header>
</main>

<span class="absolute font-semibold text-emerald-500 opacity-30 text-end bottom-28 sm:bottom-28 md:bottom-36 lg:bottom-40 right-8 sm:right-14 md:right-24 lg:right-32" style="font-size: {windowWidth>1200?'100':(windowWidth<400?'24':windowWidth*0.08)}px; width: 100%;">
	COMING EARLY 2023
</span>
	