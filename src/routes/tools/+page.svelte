<script lang="ts">
	import Icon from '@iconify/svelte';

	const categories = [
		{
			title: 'Frontend',
			color: '#61DAFB',
			tools: [
				{ name: 'Next.js', icon: 'logos:nextjs-icon', desc: 'Production-ready React framework' },
				{ name: 'React', icon: 'logos:react', desc: 'Interactive user interfaces' },
				{ name: 'SvelteKit', icon: 'logos:svelte-icon', desc: 'Lightning-fast web applications' },
				{ name: 'TypeScript', icon: 'logos:typescript-icon', desc: 'Type-safe JavaScript' }
			]
		},
		{
			title: 'Mobile',
			color: '#98f17c',
			tools: [
				{ name: 'React Native', icon: 'logos:react', desc: 'Cross-platform iOS & Android apps' },
				{ name: 'Expo', icon: 'logos:expo-icon', desc: 'Rapid mobile development toolchain' }
			]
		},
		{
			title: 'Backend',
			color: '#f46c38',
			tools: [
				{ name: 'Node.js', icon: 'logos:nodejs-icon', desc: 'Scalable server-side applications' },
				{ name: 'NestJS', icon: 'logos:nestjs', desc: 'Enterprise backend architecture' },
				{ name: 'Go', icon: 'logos:go', desc: 'High-performance concurrent services' },
				{ name: 'Gin', icon: 'logos:gin', desc: 'Lightweight Go web APIs' },
				{ name: 'Java', icon: 'logos:java', desc: 'Reliable enterprise applications' },
				{ name: 'Spring Boot', icon: 'logos:spring-icon', desc: 'Scalable microservices & APIs' },
				{ name: 'C#', icon: 'logos:c-sharp', desc: 'Desktop, web & game applications' }
			]
		},
		{
			title: 'Database',
			color: '#336791',
			tools: [
				{ name: 'PostgreSQL', icon: 'logos:postgresql', desc: 'Reliable relational databases' },
				{ name: 'MongoDB', icon: 'logos:mongodb-icon', desc: 'Flexible NoSQL data storage' },
				{ name: 'Prisma', icon: 'logos:prisma', desc: 'Modern type-safe ORM' },
				{ name: 'Redis', icon: 'logos:redis', desc: 'In-memory caching & queues' }
			]
		},
		{
			title: 'DevOps & Cloud',
			color: '#FF9900',
			tools: [
				{ name: 'Docker', icon: 'logos:docker-icon', desc: 'Containerised deployments' },
				{ name: 'AWS', icon: 'logos:aws', desc: 'Cloud infrastructure & scaling' }
			]
		},
		{
			title: 'Game Dev',
			color: '#FFFFFF',
			tools: [
				{ name: 'Unity', icon: 'logos:unity', desc: 'Immersive 2D & 3D games' },
				{ name: 'C#', icon: 'logos:c-sharp', desc: 'Game logic & scripting' }
			]
		}
	];
</script>

<svelte:head>
	<title>Tools & Skills | Aje Oluwasegun</title>
	<meta
		name="description"
		content="The full technology stack used by Aje Oluwasegun — from Next.js and NestJS to Go, Java, PostgreSQL, Docker, and AWS."
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href="https://ajeoluwasegun.com/tools" />
</svelte:head>

<section class="reveal flex flex-col gap-10 p-4 sm:p-10">
	<!-- Hero -->
	<div>
		<p class="mb-3 text-sm font-semibold tracking-[0.25em] text-brand-orange uppercase">
			Tech Stack
		</p>
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
		<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
			A full-spectrum stack spanning frontend, mobile, backend, databases, cloud, and game dev. I
			pick the right tool for the job — and I know how to wield it.
		</p>
	</div>

	<!-- Categories -->
	{#each categories as cat}
		<div>
			<!-- Category heading -->
			<div class="mb-5 flex items-center gap-3">
				<span class="h-0.5 w-6 rounded-full" style="background-color:{cat.color}"></span>
				<h2 class="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">{cat.title}</h2>
				<span class="h-px flex-1 bg-white/5"></span>
			</div>

			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each cat.tools as tool}
					<div
						class="group flex items-center gap-4 rounded-[14px] border border-white/5 bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-white/10 hover:bg-[#171717]"
					>
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white"
						>
							<Icon icon={tool.icon} width="36" />
						</div>
						<div class="min-w-0">
							<h3 class="font-bold text-white truncate">{tool.name}</h3>
							<p class="mt-0.5 text-xs leading-relaxed text-zinc-500 line-clamp-2">{tool.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
