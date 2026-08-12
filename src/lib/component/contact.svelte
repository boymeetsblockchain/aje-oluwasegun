<script lang="ts">
	let form = $state({
		name: '',
		email: '',
		budget: '',
		message: ''
	});

	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');

	const budgets = ['< $500', '$500 – $1,000', '$1,000 – $5,000', '$5,000 – $10,000', '$10,000+'];

	async function handleSubmit() {
		status = 'loading';
		try {
			const res = await fetch('https://formspree.io/f/contact@ajeoluwasegun.com', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(form)
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

<section class="reveal py-20">
	<!-- Heading -->
	<div class="mb-16">
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

		<p class="mt-6 max-w-lg text-base leading-relaxed text-zinc-500">
			Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
		</p>
	</div>

	{#if status === 'success'}
		<div
			class="flex flex-col items-center gap-4 rounded-[14px] border border-brand-green/20 bg-brand-green/5 p-12 text-center"
		>
			<div
				class="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green text-2xl"
			>
				✓
			</div>
			<h3 class="text-2xl font-bold text-white">Message Sent!</h3>
			<p class="text-zinc-400">Thanks for reaching out. I'll get back to you shortly.</p>
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
			<!-- Row -->
			<div class="grid gap-6 md:grid-cols-2">
				<div>
					<label for="name" class="mb-3 block text-sm font-medium text-zinc-400">Your Name</label>

					<input
						id="name"
						bind:value={form.name}
						type="text"
						placeholder="Ade Johnson"
						required
						class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 transition outline-none focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
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
						class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 transition outline-none focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
					/>
				</div>
			</div>

			<!-- Budget -->
			<div>
				<label for="budget" class="mb-3 block text-sm font-medium text-zinc-400"
					>Project Budget</label
				>

				<select
					id="budget"
					bind:value={form.budget}
					class="w-full rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white transition outline-none focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
				>
					<option value="" class="text-zinc-500">Select a budget range...</option>

					{#each budgets as budget}
						<option value={budget}>{budget}</option>
					{/each}
				</select>
			</div>

			<!-- Message -->
			<div>
				<label for="message" class="mb-3 block text-sm font-medium text-zinc-400"
					>Project Details</label
				>

				<textarea
					id="message"
					bind:value={form.message}
					rows="6"
					placeholder="Tell me about your project — what you're building, the timeline, and any specific requirements..."
					required
					class="w-full resize-none rounded-[14px] border border-white/5 bg-[#1c1a19] px-5 py-4 text-white placeholder-zinc-600 transition outline-none focus:border-brand-orange/40 focus:ring-1 focus:ring-brand-orange/40"
				></textarea>
			</div>

			{#if status === 'error'}
				<p class="rounded-[14px] border border-red-500/20 bg-red-500/5 px-5 py-3 text-sm text-red-400">
					Something went wrong. Please try emailing me directly at
					<a href="mailto:contact@ajeoluwasegun.com" class="underline"
						>contact@ajeoluwasegun.com</a
					>
				</p>
			{/if}

			<!-- Button -->
			<button
				type="submit"
				disabled={status === 'loading'}
				class="w-full rounded-[14px] bg-brand-orange py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7c4d] disabled:cursor-not-allowed disabled:opacity-60"
			>
				{status === 'loading' ? 'Sending…' : 'Send Message →'}
			</button>
		</form>
	{/if}
</section>
