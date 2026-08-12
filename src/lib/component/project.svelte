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
			tags: ['React Native', 'NestJS', 'Real-time', 'Logistics']
		},
		{
			name: 'Rehabwise',
			desc: 'A telehealth platform connecting physiotherapists with patients through secure video consultations, personalized exercise plans, and progress monitoring — making quality rehabilitation care accessible everywhere.',
			img: rehabwise,
			href: 'https://rehabwise.online',
			tags: ['Next.js', 'Node.js', 'Healthcare', 'Telehealth']
		},
		{
			name: 'Trippicker',
			desc: 'A Web3-powered ride-hailing super app for Nigeria. Integrates e-hailing, logistics, fintech (TripperCash wallet), and lifestyle services. Passengers and drivers earn $TRIP tokens and mileage rewards for every verified trip.',
			img: trippicker,
			href: 'https://trippicker.com',
			tags: ['Microservices', 'Web3', 'Fintech', 'E-hailing']
		},
		{
			name: 'TripaCash',
			desc: 'A multi-currency digital banking app for Africa. Offers NGN, USD, GBP, EUR & CAD wallets, virtual dollar cards, instant local & international transfers, bill payments, gift card trading, and investment features with monthly ROI.',
			img: tripacash,
			href: 'https://tripacash.com',
			tags: ['Fintech', 'React Native', 'Multi-currency', 'Banking']
		}
	];
</script>

<section class="reveal flex flex-col gap-2">
	<div class="text-center md:text-left">
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
	</div>
	{#each projects as project}
		<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			class="group flex flex-col gap-4 rounded-[14px] border border-transparent p-4 transition-all duration-300 hover:border-white/5 hover:bg-[#171717] sm:flex-row sm:items-center sm:gap-8 sm:p-5"
		>
			<!-- Image -->
			<div class="mx-auto overflow-hidden rounded-xl sm:mx-0 shrink-0">
				<img
					src={project.img}
					alt={project.name}
					class="h-24 w-24 object-cover transition duration-500 group-hover:scale-105 sm:h-36 sm:w-36"
				/>
			</div>

			<!-- Content -->
			<div class="flex-1 text-center sm:text-left">
				<h3 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-orange sm:text-2xl">
					{project.name}
				</h3>

				<p class="text-sm mt-2 leading-relaxed text-zinc-500">
					{project.desc}
				</p>

				<!-- Tags -->
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
</section>
