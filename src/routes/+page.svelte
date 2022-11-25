<script lang="ts">
	import Button from "$lib/components/general/button.svelte";
	import Tooltip from "$lib/components/general/tooltip.svelte";

	let windowWidth = 0;
</script>

<svelte:head>
	<title>BitLime - The future of DeFi</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth}/>

<main class="flex justify-center w-full" style="max-width: 1200px;">
	<header class="flex {windowWidth<1200?'flex-col':'justify-between'} w-full px-4 mb-20">
		<section class="flex {windowWidth<1200?'justify-center':'justify-start'}">
			<div class="w-fit">
				<h1 class="w-full {windowWidth<1200?'text-center':'text-left'} font-medium mt-24 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
					<span class="text-emerald-500">
						Decentralized Finance Ecosystem for Web3
					</span>
				</h1>
				
				<h2 class="w-full {windowWidth<1200?'text-center':'text-left'} mt-10 font-light max-w-2xl opacity-70 mb-10 text-lg sm:text-lg md:text-xl lg:text-2xl">
					Trade, earn, stake, create and bridge tokens and digital assets, easly, on Bitlime.<br>
					We are constantly working on new features and improvements to make BitLime the best DeFi ecosystem.
				</h2>

				<div class="flex {windowWidth<1200?'hidden flex-col space-y-3 mx-auto':'justify-start gap-3'} w-fit">
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
			</div>
		</section>
		<section class="flex justify-center">
			<div class="w-fit">
				<img id="swap-image" src="/assets/bitlime-swap.webp" alt="BitLime Swap" class="{windowWidth<1200?'mt-5':'mt-36'} opacity-90" style="width: 400px;"/>
			</div>
		</section>
	</header>
</main>
