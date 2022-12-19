<script lang="ts">
	import Button from "$lib/components/general/button.svelte";
	import Tooltip from "$lib/components/general/tooltip.svelte";

	let windowWidth = 0;
</script>

<svelte:head>
	<title>BitLime - The future of DeFi</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth}/>

<main class="w-full" style="max-width: 1200px;">
	<header class="flex flex-col w-full px-4">
		<section class="flex justify-center">
			<div class="w-fit">
				<h1 class="w-full text-center font-bold mt-16 text-5xl sm:text-7xl lg:text-8xl">
					<span>
						Crypto<br>For Everyone
					</span>
				</h1>
				
				<h2 class="w-full max-w-lg mx-auto text-center mt-10 opacity-90 text-xl sm:text-xl md:text-2xl lg:text-3xl">
					Trade, earn and store crypto easly and securely, on Bitlime.
				</h2>
				<div class="w-full flex justify-center">
					<div class="text-center w-fit my-10 text-xl border-zinc-700 dark:text-zinc-700 dark:hover:text-green-500 cursor-default">
						COMING EARLY 2023
					</div>
				</div>

				<div class="flex justify-center gap-3 w-full hidden">
					<Tooltip content="Coming Soon">
						<Button
							theme="primary"
							label='Get Started'
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
							additionalClassList="cursor-default bg-gray-50"
						/>
					</Tooltip>
				</div>
			</div>
		</section>
	</header>
	<section class="hidden lg:block w-fit mx-auto border-t pt-10 px-3">
		<div class="grid grid-cols-3 space-x-5 mb-1">
			<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">As Easy As a Pie</h3>
			<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">Convinient & Fair</h3>
			<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">Safe & Decentralized</h3>
		</div>
		<div class="grid grid-cols-3 space-x-5">
			<div class="text-md text-center max-w-sm mt-3">
				Just signup (no email required), and start trading. You don't need to be a crypto expert, we make it easy.
			</div>
			<div class="text-md text-center max-w-sm mt-3">
				While we keep the lowest fees and slippage possible. We also have an <span class="text-green-500 font-semibold">affiliate program</span> and <span class="text-green-500 font-semibold">Lime Token rewards</span>.
			</div>
			<div class="text-md text-center max-w-sm mt-3">
				Other the ensuring the best security practices, we are decentralized. Meaning, <span class="text-green-500 font-semibold">we never have access to your funds</span>.
			</div>
		</div>
	</section>
	<section class="block lg:hidden w-fit mx-auto px-3 mb-10">
		<div class="grid-cols-1 space-y-10">
			<div>
				<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">As Easy As a Pie</h3>
				<div class="text-md text-center max-w-sm rounded-lg mt-2">
					Just signup (no email required), and start trading. You don't need to be a crypto expert, we make it easy.
				</div>
			</div>
			<div>
				<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">Convinient & Fair</h3>
				<div class="text-md text-center max-w-sm rounded-lg mt-2">
					While we keep the lowest fees and slippage possible. We also have an <span class="text-green-500 font-semibold">affiliate program</span> and <span class="text-green-500 font-semibold">Lime Token rewards</span>.
				</div>
			</div>
			<div>
				<h3 class="text-2xl font-semibold text-center max-w-sm flex justify-center items-center">Safe & Decentralized</h3>
				<div class="text-md text-center max-w-sm rounded-lg mt-2">
					Other the ensuring the best security practices, we are decentralized. Meaning, <span class="text-green-500 font-semibold">we never have access to your funds</span>.
				</div>
			</div>
		</div>
	</section>
</main>
