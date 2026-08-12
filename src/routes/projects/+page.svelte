<script lang="ts">
	import Icon from '@iconify/svelte';
	import rehabwise from '$lib/assets/projects/rehabwise.png';
	import trippicker from '$lib/assets/projects/trippicker.png';
	import swiftxend from '$lib/assets/projects/swiftxend.png';
	import tripacash from '$lib/assets/projects/tripacash.png';

	const projects = [
		{
			name: 'Swiftxend Courier',
			desc: 'A real-time logistics and courier management platform built for Benin City, Nigeria. Features GPS-powered live tracking, rider management, delivery verification codes, and seamless booking — available on iOS and Android.',
			img: swiftxend,
			href: 'https://swiftxendcourier.com',
			tags: ['React Native', 'NestJS', 'Real-time', 'Logistics'],
			year: '2025'
		},
		{
			name: 'Rehabwise',
			desc: 'A telehealth platform connecting physiotherapists with patients through secure video consultations, personalized exercise plans, and progress monitoring — making quality rehabilitation care accessible everywhere.',
			img: rehabwise,
			href: 'https://rehabwise.online',
			tags: ['Next.js', 'Node.js', 'Healthcare', 'Telehealth'],
			year: '2024'
		},
		{
			name: 'Trippicker',
			desc: 'A Web3-powered ride-hailing super app for Nigeria. Integrates e-hailing, logistics, fintech (TripperCash wallet), and lifestyle services. Passengers and drivers earn $TRIP tokens and mileage rewards for every verified trip.',
			img: trippicker,
			href: 'https://trippicker.com',
			tags: ['Microservices', 'Web3', 'Fintech', 'E-hailing'],
			year: '2024'
		},
		{
			name: 'TripaCash',
			desc: 'A multi-currency digital banking app for Africa. Offers NGN, USD, GBP, EUR & CAD wallets, virtual dollar cards, instant local & international transfers, bill payments, gift card trading, and investment features with monthly ROI.',
			img: tripacash,
			href: 'https://tripacash.com',
			tags: ['Fintech', 'React Native', 'Multi-currency', 'Banking'],
			year: '2024'
		}
	];

	const stats = [
		{ no: '40+', label: 'Projects Shipped' },
		{ no: '8+', label: 'Years Building' },
		{ no: '4', label: 'Featured Works' }
	];
</script>

<svelte:head>
	<title>Projects | Aje Oluwasegun</title>
	<meta
		name="description"
		content="A showcase of recent projects by Aje Oluwasegun — from Web3 ride-hailing apps and fintech platforms to healthcare and logistics solutions."
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href="https://ajeoluwasegun.com/projects" />
</svelte:head>

<section class="reveal flex flex-col gap-8 p-4 sm:p-10">
	<!-- Hero -->
	<div>
		<p class="mb-3 text-sm font-semibold tracking-[0.25em] text-brand-orange uppercase">
			Portfolio
		</p>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-white uppercase sm:text-6xl lg:text-9xl"
		>
			RECENT
		</h1>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase sm:text-6xl lg:text-9xl"
		>
			PROJECTS
		</h1>
		<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
			A curated selection of products I've designed, engineered, and shipped — spanning fintech,
			logistics, healthcare, and Web3.
		</p>
	</div>

	<!-- Stats bar -->
	<div class="flex flex-wrap gap-8 border-t border-white/10 pt-8">
		{#each stats as s}
			<div>
				<p class="text-3xl font-extrabold text-white">{s.no}</p>
				<p class="mt-1 text-xs font-medium tracking-widest text-zinc-500 uppercase">{s.label}</p>
			</div>
		{/each}
	</div>

	<!-- Projects list -->
	<div class="flex flex-col gap-2">
		{#each projects as project, i}
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col gap-4 rounded-[14px] border border-transparent p-4 transition-all duration-300 hover:border-white/5 hover:bg-[#171717] sm:flex-row sm:items-center sm:gap-8 sm:p-6"
			>
				<!-- Index number -->
				<span class="hidden text-5xl font-black text-white/5 select-none lg:block">
					0{i + 1}
				</span>

				<!-- Image -->
				<div class="mx-auto shrink-0 overflow-hidden rounded-xl sm:mx-0">
					<img
						src={project.img}
						alt={project.name}
						class="h-24 w-24 object-cover transition duration-500 group-hover:scale-105 sm:h-36 sm:w-36"
					/>
				</div>

				<!-- Content -->
				<div class="flex-1 text-center sm:text-left">
					<div class="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
						<h2 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-orange sm:text-2xl">
							{project.name}
						</h2>
						<span class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-500"
							>{project.year}</span
						>
					</div>

					<p class="mt-2 text-sm leading-relaxed text-zinc-500">{project.desc}</p>

					<div class="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
						{#each project.tags as tag}
							<span class="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">
								{tag}
							</span>
						{/each}
					</div>
				</div>

				<!-- Arrow -->
				<div
					class="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-orange transition-all duration-300 group-hover:border-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 sm:mx-0 sm:h-12 sm:w-12"
				>
					<Icon icon="lucide:arrow-up-right" width="18" />
				</div>
			</a>
		{/each}
	</div>

	<!-- CTA -->
	<div class="mt-4 rounded-[14px] border border-white/5 bg-[#171717] p-8 text-center">
		<p class="text-sm font-medium tracking-widest text-zinc-500 uppercase">Have a project?</p>
		<h3 class="mt-2 text-2xl font-bold text-white sm:text-3xl">Let's build something together</h3>
		<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
			I'm currently open to freelance and full-time opportunities. If you have an idea, I'd love to
			hear about it.
		</p>
		<a
			href="/contact"
			class="mt-6 inline-flex items-center gap-2 rounded-[14px] bg-brand-orange px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7c4d]"
		>
			Start a conversation
			<Icon icon="lucide:arrow-right" width="16" />
		</a>
	</div>
</section>
