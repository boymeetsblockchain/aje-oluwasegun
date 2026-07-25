<script lang="ts">
	const experiences = [
		{
			role: 'Solutions Architect',
			company: 'TJDND IT Solutions',
			period: 'Oct 2025 - Present',
			description:
				'Oversee architecture and delivery across multiple client products, including TaxSprings, WakaNest, and TechFrontline.'
		},
		{
			role: 'Lead Developer',
			company: 'Swiftxend Courier',
			period: 'Sep 2025 - Present',
			description: 'Built a real-time logistics tracking application for courier operations.'
		},
		{
			role: 'Mobile Developer (Contract)',
			company: 'Pretoria Consulting',
			period: 'Jan 2026 - Jun 2026',
			description:
				'Built features for Konnect, a React Native outsourcing and talent-matching application.'
		},
		{
			role: 'Backend Developer → Lead Developer',
			company: 'Trippicker Nigeria',
			period: 'Sep 2024 - Sep 2025',
			description:
				'Architected microservices for an e-hailing and fintech platform. Promoted from Backend Developer to Lead Developer.'
		},
		{
			role: 'Backend Developer (Contract)',
			company: 'Tetra',
			period: 'Aug 2024 - Aug 2025',
			description: 'Built backend services for a fintech platform serving over 1,000 users.'
		},
		{
			role: 'Fullstack Mobile Developer (Contract)',
			company: 'Geniz Technology',
			period: 'Aug 2024 - Aug 2025',
			description: 'Built React Native applications serving more than 10,000 users.'
		}
	];
</script>

<section class="reveal flex flex-col gap-6">
	<div class="text-center md:text-left">
		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-white uppercase lg:text-9xl"
		>
			8 YEARS OF
		</h1>

		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase lg:text-9xl"
		>
			EXPERIENCE
		</h1>
	</div>
	{#each experiences as experience}
		<div
			class="group rounded-[14px] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#171717] sm:p-8"
		>
			<div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
				<!-- Content -->
				<div class="flex-1">
					<h3 class="text-2xl font-bold text-white lg:text-3xl">
						{experience.role}
					</h3>

					<p class="mt-1 text-lg text-white">
						{experience.company}
					</p>

					<p class="mt-4 max-w-3xl leading-relaxed text-zinc-400">
						{experience.description}
					</p>
				</div>

				<!-- Period -->
				<div
					class="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-500 sm:mt-0"
				>
					{experience.period}
				</div>
			</div>
		</div>
	{/each}
</section>
