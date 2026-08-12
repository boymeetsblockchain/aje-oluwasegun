<script lang="ts">
	import Icon from '@iconify/svelte';

	let form = $state({
		name: '',
		email: '',
		budget: '',
		message: ''
	});

	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');

	const budgets = ['< $500', '$500 – $1,000', '$1,000 – $5,000', '$5,000 – $10,000', '$10,000+'];

	const socials = [
		{
			label: 'GitHub',
			handle: '@boymeetsblockchain',
			icon: 'mdi:github',
			href: 'https://github.com/boymeetsblockchain',
			color: 'hover:bg-black hover:text-white'
		},
		{
			label: 'LinkedIn',
			handle: 'Oluwasegun Aje',
			icon: 'mdi:linkedin',
			href: 'https://www.linkedin.com/in/oluwasegun-aje-b990a1232/',
			color: 'hover:bg-[#0077B5] hover:text-white'
		},
		{
			label: 'Twitter / X',
			handle: '@ajeoluwasegun',
			icon: 'ri:twitter-x-line',
			href: 'https://x.com/ajeoluwasegun',
			color: 'hover:bg-black hover:text-white'
		},
		{
			label: 'Email',
			handle: 'contact@ajeoluwasegun.com',
			icon: 'lucide:mail',
			href: 'mailto:contact@ajeoluwasegun.com',
			color: 'hover:bg-brand-orange hover:text-white'
		}
	];

	async function handleSubmit() {
		status = 'loading';
		try {
			const res = await fetch('https://formspree.io/f/contact@ajeoluwasegun.com', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					budget: form.budget,
					message: form.message
				})
			});
			if (res.ok) {
				status = 'success';
				form.name = '';
				form.email = '';
				form.budget = '';
				form.message = '';
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

<svelte:head>
	<title>Contact | Aje Oluwasegun</title>
	<meta
		name="description"
		content="Get in touch with Aje Oluwasegun for freelance projects, full-time opportunities, or just to say hello."
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href="https://ajeoluwasegun.com/contact" />
</svelte:head>

<section class="reveal flex flex-col gap-10 p-4 sm:p-10">
	<!-- Hero -->
	<div>
		<p class="mb-3 text-sm font-semibold tracking-[0.25em] text-brand-orange uppercase">
			Get in touch
		</p>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-white uppercase sm:text-6xl lg:text-9xl"
		>
			LET'S WORK
		</h1>
		<h1
			class="text-4xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase sm:text-6xl lg:text-9xl"
		>
			TOGETHER
		</h1>
		<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
			Have a project in mind, a role to fill, or just want to talk tech? Fill out the form or reach
			out directly — I'll reply within 24 hours.
		</p>
	</div>

	<div class="grid gap-10 lg:grid-cols-[1fr_380px]">
		<!-- Form -->
		<div>
			{#if status === 'success'}
				<div
					class="flex flex-col items-center gap-5 rounded-[14px] border border-brand-green/20 bg-brand-green/5 p-16 text-center"
				>
					<div
						class="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-3xl text-brand-green"
					>
						✓
					</div>
					<h3 class="text-2xl font-bold text-white">Message Sent!</h3>
					<p class="max-w-sm text-sm leading-relaxed text-zinc-400">
						Thanks for reaching out — I'll get back to you as soon as possible.
					</p>
					<button
						onclick={() => (status = 'idle')}
						class="mt-2 rounded-[14px] border border-white/10 px-6 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white"
					>
						Send another message
					</button>
				</div>
			{:else}
				<form
					onsubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					class="space-y-6"
				>
					<div class="grid gap-6 sm:grid-cols-2">
						<div>
							<label for="name" class="mb-3 block text-sm font-medium text-zinc-400"
								>Your Name</label
							>
							<input
								id="name"
								bind:value={form.name}
								type="text"
								placeholder="Ade Johnson"
								required
								class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 outline-none transition focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
							/>
						</div>
						<div>
							<label for="email" class="mb-3 block text-sm font-medium text-zinc-400"
								>Email Address</label
							>
							<input
								id="email"
								bind:value={form.email}
								type="email"
								placeholder="ade@company.com"
								required
								class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 outline-none transition focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
							/>
						</div>
					</div>

					<div>
						<label for="budget" class="mb-3 block text-sm font-medium text-zinc-400"
							>Project Budget</label
						>
						<select
							id="budget"
							bind:value={form.budget}
							class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white outline-none transition focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
						>
							<option value="">Select a budget range...</option>
							{#each budgets as b}
								<option value={b}>{b}</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="message" class="mb-3 block text-sm font-medium text-zinc-400"
							>Project Details</label
						>
						<textarea
							id="message"
							bind:value={form.message}
							rows="7"
							placeholder="Tell me about your project — what you're building, the timeline, and any specific requirements..."
							required
							class="w-full resize-none rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 outline-none transition focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
						></textarea>
					</div>

					{#if status === 'error'}
						<p
							class="rounded-[14px] border border-red-500/20 bg-red-500/5 px-5 py-3 text-sm text-red-400"
						>
							Something went wrong. Please email me directly at
							<a href="mailto:contact@ajeoluwasegun.com" class="underline"
								>contact@ajeoluwasegun.com</a
							>
						</p>
					{/if}

					<button
						type="submit"
						disabled={status === 'loading'}
						class="flex w-full items-center justify-center gap-2 rounded-[14px] bg-brand-orange py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7c4d] disabled:cursor-not-allowed disabled:opacity-60"
					>
						{#if status === 'loading'}
							<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
							</svg>
							Sending…
						{:else}
							Send Message
							<Icon icon="lucide:send" width="18" />
						{/if}
					</button>
				</form>
			{/if}
		</div>

		<!-- Sidebar: socials + availability -->
		<div class="flex flex-col gap-6">
			<!-- Availability card -->
			<div class="rounded-[14px] border border-brand-green/20 bg-brand-green/5 p-6">
				<div class="flex items-center gap-3">
					<span class="relative flex h-3 w-3">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75"></span>
						<span class="relative inline-flex h-3 w-3 rounded-full bg-brand-green"></span>
					</span>
					<span class="text-sm font-semibold text-brand-green">Available for work</span>
				</div>
				<p class="mt-3 text-sm leading-relaxed text-zinc-400">
					Currently open to freelance projects and full-time engineering roles. Typical response time
					is under 24 hours.
				</p>
			</div>

			<!-- Socials -->
			<div class="flex flex-col gap-3">
				<p class="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">Find me on</p>
				{#each socials as s}
					<a
						href={s.href}
						target={s.href.startsWith('mailto') ? '_self' : '_blank'}
						rel="noopener noreferrer"
						class="group flex items-center gap-4 rounded-[14px] border border-white/5 bg-[#0d0d0d] p-4 transition-all duration-300 hover:border-white/10 {s.color}"
					>
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1c1a19] transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/10"
						>
							<Icon icon={s.icon} width="20" />
						</div>
						<div class="min-w-0">
							<p class="text-sm font-semibold text-white">{s.label}</p>
							<p class="truncate text-xs text-zinc-500">{s.handle}</p>
						</div>
						<Icon
							icon="lucide:arrow-up-right"
							width="16"
							class="ml-auto shrink-0 text-zinc-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
