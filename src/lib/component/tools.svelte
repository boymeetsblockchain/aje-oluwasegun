<script lang="ts">
	import Icon from '@iconify/svelte';
	import { coreSkills } from '$lib/data/skills';
</script>

<section class="my-20">
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
	<div class="mt-8 grid gap-x-20 gap-y-10 md:grid-cols-2">
		{#each coreSkills as skill}
			<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
				<div
					class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white sm:h-18 sm:w-18"
				>
					<Icon icon={skill.icon} width="42" />
				</div>

				<div>
					<h3 class="text-2xl font-bold text-white sm:text-3xl">
						{skill.name}
					</h3>

					<p class="text-base text-zinc-500 sm:text-lg">
						{skill.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
