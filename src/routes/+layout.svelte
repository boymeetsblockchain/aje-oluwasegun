<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Infocard from '$lib/component/infocard.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

		if (!elements.length) return;

		elements.forEach((element, index) => {
			window.setTimeout(() => {
				element.classList.add('is-visible');
			}, index * 220);
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Aje Oluwasegun | Software Engineer</title>
	<meta
		name="description"
		content="Aje Oluwasegun is a software engineer building modern web and mobile products with scalable architecture and polished user experiences."
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href="https://ajeoluwasegun.com" />
	<meta property="og:title" content="Aje Oluwasegun | Software Engineer" />
	<meta
		property="og:description"
		content="Software engineer focused on building high-quality digital products and scalable platforms."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ajeoluwasegun.com" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Aje Oluwasegun | Software Engineer" />
	<meta
		property="twitter:description"
		content="Software engineer focused on building high-quality digital products and scalable platforms."
	/>
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
