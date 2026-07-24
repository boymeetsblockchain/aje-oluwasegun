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
	{#each projects as project}
		<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-center gap-8 rounded-[14px] p-5 transition-all duration-300 hover:bg-[#171717]"
		>
			<!-- Image -->
			<div class="overflow-hidden rounded-xl">
				<img
					src={project.img}
					alt={project.name}
					class="h-40 w-40 object-cover transition duration-500 group-hover:scale-105"
				/>
			</div>

			<!-- Content -->
			<div class="flex-1">
				<h3 class="text-2xl font-bold text-white transition-colors duration-300">
					{project.name}
				</h3>

				<p class="text-md mt-2 text-zinc-500">
					{project.desc}
				</p>
			</div>

			<!-- Arrow -->
			<div
				class="flex h-12 w-12 items-center justify-center rounded-full text-brand-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
			>
				<Icon icon="lucide:arrow-up-right" width="16" />
			</div>
		</a>
	{/each}
</section>
