<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import { mainHeight_, showLoading } from '$lib/stores/ui-theming';
	import FullScreenContainer from '$lib/components/general/fullScreenContainer.svelte';
	import Spinner from '$lib/components/general/spinner.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';

	let nav: HTMLElement, footer: HTMLElement;
	let mainHeight: number = 0;
	
	onMount(() => {
		mainHeight = window.innerHeight - nav.offsetHeight - footer.offsetHeight;
		mainHeight_.set(mainHeight);
	});
</script>

<div id="global-container" class="min-h-screen w-full bg-transparent">
	{#if $showLoading}
		<FullScreenContainer zIndex='1000' noBg>
			<div class="flex flex-col space-y-4 p-0">
				<div class="flex w-full justify-center">
					<Spinner size={'70'} additionalClassList='text-gray-600 dark:text-gray-800'/>
				</div>
				<div class="animate-pulse text-center text-gray-200 w-full text-4xl p-0">BitLime</div>
			</div>
		</FullScreenContainer>
	{/if}
	
	<Nav bind:element={nav}/>
	<main class="w-full flex justify-center" id="content" style="min-height: {mainHeight-5}px;">
		<slot/>
	</main>
	<span class="{mainHeight?'':'opacity-0'}">
		<Footer bind:element={footer}/>
	</span>
</div>

<!-- <style>
	#global-container {
		background-image: url('/assets/dark-green-blur-abstract.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style> -->