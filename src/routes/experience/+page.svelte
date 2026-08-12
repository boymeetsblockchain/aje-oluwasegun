<script lang="ts">
	const experiences = [
		{
			role: 'Solutions Architect',
			company: 'TJDND IT Solutions',
			companyUrl: 'https://tjdndgroup.africa',
			period: 'Oct 2025 – Present',
			badge: 'Current',
			highlights: [
				'Oversaw architecture for TaxSprings — a Nigerian tax compliance SaaS (PAYE, CIT, VAT calculator)',
				'Designed system architecture for WakaNest, a travel-tech & lifestyle marketplace',
				'Led technical direction for TechFrontline Africa, a digital media platform',
				'Coordinated cross-functional teams and made all key technical decisions'
			],
			description:
				'Lead architecture and delivery across a portfolio of client products under the TJDND Group — an African technology conglomerate spanning AI, enterprise software, and cybersecurity.'
		},
		{
			role: 'Lead Developer',
			company: 'Swiftxend Courier',
			companyUrl: 'https://swiftxendcourier.com',
			period: 'Sep 2025 – Present',
			badge: 'Current',
			highlights: [
				'Built the customer-facing mobile app (iOS & Android) with GPS live tracking',
				'Developed the rider app with integrated navigation and dispatch management',
				'Implemented delivery verification code system and shipment history',
				'Architected the NestJS backend API serving all platform services'
			],
			description:
				'Spearheaded development of a full-stack courier management platform serving Benin City, Nigeria.'
		},
		{
			role: 'Mobile Developer (Contract)',
			company: 'Pretoria Consulting',
			companyUrl: '',
			period: 'Jan 2026 – Jun 2026',
			badge: '',
			highlights: [
				'Built core screens and navigation flows for Konnect, a talent-matching platform',
				'Integrated multiple REST APIs and third-party SDKs',
				'Collaborated with a remote cross-functional team across time zones',
				'Delivered all milestones on schedule within a 6-month contract'
			],
			description:
				'Contracted to build core features for Konnect, a React Native talent-matching and outsourcing platform.'
		},
		{
			role: 'Backend Developer → Lead Developer',
			company: 'Trippicker Nigeria',
			companyUrl: 'https://trippicker.com',
			period: 'Sep 2024 – Sep 2025',
			badge: 'Promoted',
			highlights: [
				'Architected the TripperCash fintech wallet — multi-currency, P2P transfers, virtual cards',
				'Built $TRIP token reward engine for passenger and driver incentives',
				'Implemented real-time trip tracking, SOS safety, and in-app audio/video recording',
				'Promoted from Backend Developer to Lead Developer within 12 months'
			],
			description:
				'Joined as Backend Developer and was promoted to Lead Developer. Built the full microservices ecosystem powering a Web3 ride-hailing super app.'
		},
		{
			role: 'Backend Developer (Contract)',
			company: 'Tetra',
			companyUrl: '',
			period: 'Aug 2024 – Aug 2025',
			badge: '',
			highlights: [
				'Designed and built REST APIs for a fintech platform serving 1,000+ users',
				'Implemented secure authentication and transaction processing flows',
				'Built scalable database schemas with PostgreSQL and Prisma ORM',
				'Handled API integrations with payment gateways and third-party services'
			],
			description:
				'Designed and built backend services for a fintech platform that grew to serve over 1,000 active users.'
		},
		{
			role: 'Fullstack Mobile Developer (Contract)',
			company: 'Geniz Technology',
			companyUrl: '',
			period: 'Aug 2024 – Aug 2025',
			badge: '',
			highlights: [
				'Developed cross-platform React Native apps for iOS and Android',
				'Delivered end-to-end features — UI to backend integrations',
				'Worked on apps serving a combined 10,000+ users',
				'Collaborated with design team to build pixel-perfect interfaces'
			],
			description:
				'Developed and maintained cross-platform React Native mobile applications for a Nigerian digital agency.'
		}
	];

	const stats = [
		{ no: '8+', label: 'Years Experience' },
		{ no: '6', label: 'Companies Worked' },
		{ no: '2', label: 'Active Roles' }
	];
</script>

<svelte:head>
	<title>Experience | Aje Oluwasegun</title>
	<meta
		name="description"
		content="8+ years of software engineering experience — from fullstack developer to solutions architect. See all roles, companies, and highlights."
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href="https://ajeoluwasegun.com/experience" />
</svelte:head>

<section class="reveal flex flex-col gap-8 p-4 sm:p-10">
	<!-- Hero -->
	<div>
		<p class="mb-3 text-sm font-semibold tracking-[0.25em] text-brand-orange uppercase">
			Career
		</p>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-white uppercase sm:text-6xl lg:text-9xl"
		>
			8 YEARS OF
		</h1>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase sm:text-6xl lg:text-9xl"
		>
			EXPERIENCE
		</h1>
		<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
			From junior backend developer to solutions architect — a track record of building, shipping,
			and leading across fintech, logistics, healthcare, and Web3.
		</p>
	</div>

	<!-- Stats -->
	<div class="flex flex-wrap gap-8 border-t border-white/10 pt-8">
		{#each stats as s}
			<div>
				<p class="text-3xl font-extrabold text-white">{s.no}</p>
				<p class="mt-1 text-xs font-medium tracking-widest text-zinc-500 uppercase">{s.label}</p>
			</div>
		{/each}
	</div>

	<!-- Timeline -->
	<div class="flex flex-col gap-4">
		{#each experiences as exp}
			<div
				class="group rounded-[14px] border border-transparent p-6 transition-all duration-300 hover:border-white/5 hover:bg-[#171717] sm:p-8"
			>
				<div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
					<!-- Left -->
					<div class="flex-1">
						<h2
							class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-orange sm:text-2xl lg:text-3xl"
						>
							{exp.role}
						</h2>

						<p class="mt-1 text-base font-medium text-zinc-300">
							{#if exp.companyUrl}
								<a
									href={exp.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="transition-colors duration-200 underline decoration-white/20 underline-offset-4 hover:text-brand-orange hover:decoration-brand-orange"
								>
									{exp.company}
								</a>
							{:else}
								{exp.company}
							{/if}
						</p>

						<p class="mt-4 text-sm leading-relaxed text-zinc-500">{exp.description}</p>

						<!-- Highlights -->
						<ul class="mt-5 space-y-2">
							{#each exp.highlights as h}
								<li class="flex items-start gap-3 text-sm text-zinc-400">
									<span
										class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
									></span>
									{h}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Right: Period + Badge -->
					<div class="flex shrink-0 flex-col items-start gap-2 lg:items-end">
						<div
							class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-500"
						>
							{exp.period}
						</div>
						{#if exp.badge}
							<span
								class="rounded-full px-3 py-1 text-xs font-semibold {exp.badge === 'Current'
									? 'bg-brand-green/15 text-brand-green'
									: exp.badge === 'Promoted'
										? 'bg-brand-orange/15 text-brand-orange'
										: 'bg-white/10 text-white'}"
							>
								{exp.badge}
							</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
