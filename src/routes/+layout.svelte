<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import { showLoading } from '$lib/stores/ui-theming';
	import FullScreenContainer from '$lib/components/general/fullScreenContainer.svelte';
	import Spinner from '$lib/components/general/spinner.svelte';

	let navHeight = 68;
</script>

<div id="global-container" class="min-h-screen min-w-full bg-black">
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
	<div bind:clientHeight={navHeight} style="margin-bottom: -{navHeight}px; z-index: 10">
		<Nav/>
	</div>
	<div class="w-full flex justify-center min-h-screen" id="content" style="padding-top: {navHeight}px;">
		<slot />
	</div>
</div>

<style>
	#content {
		background-image: url('/assets/dark-green-blur-abstract.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>