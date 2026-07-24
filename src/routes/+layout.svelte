<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Infocard from '$lib/component/infocard.svelte';
	import Navbar from '$lib/component/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-black">
	<nav class="grid place-items-center py-10">
		<Navbar />
	</nav>
	<div class="mx-auto flex max-w-7xl">
		<!-- Left Fixed/Sticky Card -->
		<aside class="sticky top-0 h-screen w-95 shrink-0 p-6">
			<Infocard />
		</aside>

		<!-- Scrollable Content -->
		<main class="min-h-screen flex-1 px-6 py-8">
			{@render children()}
		</main>
	</div>
</div>
