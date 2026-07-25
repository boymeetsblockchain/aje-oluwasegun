<script lang="ts">
	import Icon from '@iconify/svelte';
	import { coreSkills } from '$lib/data/skills';
</script>

<section class="reveal my-20">
	<div>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-white uppercase sm:text-6xl lg:text-9xl"
		>
			CORE
		</h1>

		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase sm:text-6xl lg:text-9xl"
		>
			TOOLS
		</h1>
	</div>
	<div class="mt-8 grid grid-cols-2 gap-6 sm:gap-8">
		{#each coreSkills as skill}
			<div
				class="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left"
			>
				<div
					class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white sm:h-18 sm:w-18"
				>
					<Icon icon={skill.icon} width="42" />
				</div>

				<div>
					<h3 class="text-lg font-bold text-white sm:text-2xl">
						{skill.name}
					</h3>

					<p class="hidden text-zinc-500 lg:block">
						{skill.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
