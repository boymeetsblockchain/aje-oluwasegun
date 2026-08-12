<script lang="ts">
	const experiences = [
		{
			role: 'Solutions Architect',
			company: 'TJDND IT Solutions',
			companyUrl: 'https://tjdndgroup.africa',
			period: 'Oct 2025 – Present',
			badge: 'Current',
			description:
				'Lead architecture and delivery across a portfolio of client products under the TJDND Group — an African technology conglomerate spanning AI, enterprise software, and cybersecurity. Key products include TaxSprings (Nigerian tax compliance SaaS), WakaNest (travel-tech & lifestyle marketplace), and TechFrontline Africa (digital media platform). Responsible for system design, team coordination, and technical decision-making across all verticals.'
		},
		{
			role: 'Lead Developer',
			company: 'Swiftxend Courier',
			companyUrl: 'https://swiftxendcourier.com',
			period: 'Sep 2025 – Present',
			badge: 'Current',
			description:
				'Spearheaded development of a full-stack courier management platform serving Benin City, Nigeria. Built the customer-facing mobile app (iOS & Android), the rider app with integrated navigation, and the backend API. Features include GPS-powered live tracking, delivery verification codes, shipment history, and real-time dispatch assignment for riders.'
		},
		{
			role: 'Mobile Developer (Contract)',
			company: 'Pretoria Consulting',
			companyUrl: '',
			period: 'Jan 2026 – Jun 2026',
			badge: '',
			description:
				'Contracted to build core features for Konnect, a React Native talent-matching and outsourcing platform. Delivered screens, navigation flows, and API integrations on schedule while collaborating with a remote cross-functional team across multiple time zones.'
		},
		{
			role: 'Backend Developer → Lead Developer',
			company: 'Trippicker Nigeria',
			companyUrl: 'https://trippicker.com',
			period: 'Sep 2024 – Sep 2025',
			badge: 'Promoted',
			description:
				'Joined as Backend Developer and was promoted to Lead Developer within the year. Architected a microservices ecosystem powering a Web3 ride-hailing super app — including the TripperCash fintech wallet (multi-currency, P2P transfers, virtual cards), $TRIP token reward engine, real-time trip tracking, SOS safety features, and in-app audio/video recording. The platform serves thousands of passengers and drivers across Nigeria.'
		},
		{
			role: 'Backend Developer (Contract)',
			company: 'Tetra',
			companyUrl: '',
			period: 'Aug 2024 – Aug 2025',
			badge: '',
			description:
				'Designed and built backend REST APIs and database schemas for a fintech platform that grew to serve over 1,000 active users. Focused on secure authentication, transaction processing, and scalable data architecture using Node.js and PostgreSQL.'
		},
		{
			role: 'Fullstack Mobile Developer (Contract)',
			company: 'Geniz Technology',
			companyUrl: '',
			period: 'Aug 2024 – Aug 2025',
			badge: '',
			description:
				'Developed and maintained cross-platform React Native mobile applications for a Nigerian digital agency. Delivered end-to-end features — from UI components to backend integrations — for apps that collectively serve more than 10,000 users across iOS and Android.'
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
			class="group rounded-[14px] border border-transparent p-5 transition-all duration-300 hover:border-white/5 hover:bg-[#171717] sm:p-8"
		>
			<div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
				<!-- Content -->
				<div class="flex-1">
					<h3 class="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300 lg:text-3xl">
						{experience.role}
					</h3>

					<p class="mt-1 text-base font-medium text-zinc-300">
						{#if experience.companyUrl}
							<a
								href={experience.companyUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-brand-orange transition-colors duration-200 underline decoration-white/20 underline-offset-4 hover:decoration-brand-orange"
							>
								{experience.company}
							</a>
						{:else}
							{experience.company}
						{/if}
					</p>

					<p class="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
						{experience.description}
					</p>
				</div>

				<!-- Period + Badge -->
				<div class="flex shrink-0 flex-col items-start gap-2 lg:items-end">
					<div
						class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-500"
					>
						{experience.period}
					</div>
					{#if experience.badge}
						<span
							class="rounded-full px-3 py-1 text-xs font-semibold {experience.badge === 'Current'
								? 'bg-brand-green/15 text-brand-green'
								: experience.badge === 'Promoted'
									? 'bg-brand-orange/15 text-brand-orange'
									: 'bg-white/10 text-white'}"
						>
							{experience.badge}
						</span>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</section>
