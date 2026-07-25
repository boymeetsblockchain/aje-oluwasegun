<script lang="ts">
	import Card from '$lib/component/card.svelte';
	import Experience from '$lib/component/experience.svelte';
	import Project from '$lib/component/project.svelte';
	import Tools from '$lib/component/tools.svelte';
	import { coreSkills } from '$lib/data/skills';

	const stats = [
		{
			no: '+12',
			title: 'YEARS OF EXPERIENCE'
		},
		{
			no: '+40',
			title: 'No of Projects'
		},
		{
			no: +20,

			title: 'WORLDWIDE CLIENTS'
		}
	];
</script>

<section class="p-10">
	<div>
		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-white uppercase lg:text-9xl"
		>
			SOFTWARE
		</h1>

		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase lg:text-9xl"
		>
			ENGINEER
		</h1>
	</div>
	<div>
		<p class="text-left text-lg leading-relaxed text-brand-gray-alt-v2">
			Passionate about creating intuitive and engaging user experiences. Specialize in transforming
			ideas into beautifully crafted products.
		</p>
	</div>

	<div class="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
		{#each stats as stat}
			<div class="text-left">
				<h3 class="text-4xl font-extrabold text-white lg:text-5xl">
					{stat.no}
				</h3>

				<p class="mt-2 text-xs font-medium tracking-[0.2em] text-brand-gray-alt-v2 uppercase">
					{stat.title}
				</p>
			</div>
		{/each}
	</div>
	<div class="my-10 flex gap-10">
		<Card
			bgColor="#f46c38"
			icon="lucide:code-xml"
			description="BUILDING SCALABLE WEB APPS WITH CLEAN, MAINTAINABLE CODE"
			text="FULLSTACK DEVELOPMENT"
		/>

		<Card
			bgColor="#98f17c"
			icon="lucide:rocket"
			description="TURNING IDEAS INTO HIGH-PERFORMANCE DIGITAL PRODUCTS"
			text="PRODUCT ENGINEERING"
		/>
	</div>

	<Project />

	<Experience />
	<Tools />
</section>
