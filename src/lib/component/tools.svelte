<script lang="ts">
	import Icon from '@iconify/svelte';
	import { coreSkills } from '$lib/data/skills';
</script>

<section class="my-20">
	<div>
		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-white uppercase lg:text-9xl"
		>
			CORE
		</h1>

		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase lg:text-9xl"
		>
			TOOLS
		</h1>
	</div>
	<div class="grid gap-x-20 gap-y-10 md:grid-cols-2">
		{#each coreSkills as skill}
			<div class="flex items-center gap-5">
				<div class="flex h-18 w-18 items-center justify-center rounded-2xl bg-white">
					<Icon icon={skill.icon} width="42" />
				</div>

				<div>
					<h3 class="text-3xl font-bold text-white">
						{skill.name}
					</h3>

					<p class="text-lg text-zinc-500">
						{skill.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
