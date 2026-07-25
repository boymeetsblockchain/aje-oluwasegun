<script lang="ts">
	import Icon from '@iconify/svelte';
	import rehabwise from '$lib/assets/projects/rehabwise.png';
	import trippicker from '$lib/assets/projects/trippicker.png';
	import swiftxend from '$lib/assets/projects/swiftxend.png';
	import tripacash from '$lib/assets/projects/tripacash.png';

	const projects = [
		{
			name: 'Swiftxend',
			desc: 'Modern logistics and courier management platform',
			img: swiftxend,
			href: 'https://swiftxendcourier.com'
		},
		{
			name: 'Rehabwise',
			desc: 'Healthcare platform for physiotherapists and patients',
			img: rehabwise,
			href: 'https://rehabwise.online'
		},
		{
			name: 'Trippicker',
			desc: 'Smart travel planning and destination discovery',
			img: trippicker,
			href: 'https://trippicker.com'
		},

		{
			name: 'Tripacash',
			desc: 'Modern fintech app',
			img: tripacash,
			href: 'https://tripacash.com'
		}
	];
</script>

<section class="flex flex-col gap-6">
	<div class="text-center md:text-left">
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-white uppercase sm:text-6xl lg:text-9xl"
		>
			RECENT
		</h1>

		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase sm:text-6xl lg:text-9xl"
		>
			PROJECT
		</h1>
	</div>
	{#each projects as project}
		<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-4 rounded-[14px] p-4 transition-all duration-300 hover:bg-[#171717] sm:flex-row sm:items-center sm:gap-8 sm:p-5"
		>
			<!-- Image -->
			<div class="mx-auto overflow-hidden rounded-xl sm:mx-0">
				<img
					src={project.img}
					alt={project.name}
					class="h-24 w-24 object-cover transition duration-500 group-hover:scale-105 sm:h-40 sm:w-40"
				/>
			</div>

			<!-- Content -->
			<div class="flex-1 text-center sm:text-left">
				<h3 class="text-xl font-bold text-white transition-colors duration-300 sm:text-2xl">
					{project.name}
				</h3>

				<p class="text-md mt-2 text-zinc-500">
					{project.desc}
				</p>
			</div>

			<!-- Arrow -->
			<div
				class="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-brand-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:mx-0 sm:h-12 sm:w-12"
			>
				<Icon icon="lucide:arrow-up-right" width="16" />
			</div>
		</a>
	{/each}
</section>
