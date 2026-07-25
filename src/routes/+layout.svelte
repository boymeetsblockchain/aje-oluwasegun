<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Infocard from '$lib/component/infocard.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const elements = document.querySelectorAll<HTMLElement>('.reveal');

		if (!elements.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-black">
	<nav class="grid place-items-center px-4 py-6 sm:px-6 sm:py-10">
		<Navbar />
	</nav>

	<div class="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-8 sm:px-6 lg:flex-row lg:px-8">
		<!-- Left Fixed/Sticky Card -->
		<aside class="w-full lg:sticky lg:top-0 lg:h-screen lg:w-95 lg:shrink-0 lg:p-6">
			<Infocard />
		</aside>

		<!-- Scrollable Content -->
		<main class="min-h-screen flex-1 py-2 lg:px-6 lg:py-8">
			{@render children()}
		</main>
	</div>
</div>
