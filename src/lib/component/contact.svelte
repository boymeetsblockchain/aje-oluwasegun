<script lang="ts">
	let form = {
		name: '',
		email: '',
		budget: '',
		message: ''
	};

	const budgets = ['$500 - $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+'];

	function handleSubmit() {
		console.log(form);
	}
</script>

<section class="reveal py-20">
	<!-- Heading -->
	<div class="mb-16">
		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-white uppercase lg:text-9xl"
		>
			LET'S WORK
		</h1>

		<h1
			class="text-6xl leading-none font-black tracking-[-0.08em] text-brand-gray-alt uppercase lg:text-9xl"
		>
			TOGETHER
		</h1>
	</div>

	<!-- svelte-ignore event_directive_deprecated -->
	<form on:submit|preventDefault={handleSubmit} class="space-y-8">
		<!-- Row -->
		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<label for="name" class="mb-3 block text-sm text-zinc-400">Name</label>

				<input
					id="name"
					bind:value={form.name}
					type="text"
					placeholder="Your Name"
					class="w-full rounded-[14px] border-none bg-[#2c292d] px-5 py-4 text-white transition outline-none focus:ring-2 focus:ring-orange-500"
				/>
			</div>

			<div>
				<label for="email" class="mb-3 block text-sm text-zinc-400">Email</label>

				<input
					id="email"
					bind:value={form.email}
					type="email"
					placeholder="your@email.com"
					class="w-full rounded-[14px] border-none bg-[#2c292d] px-5 py-4 text-white transition outline-none focus:ring-2 focus:ring-orange-500"
				/>
			</div>
		</div>

		<!-- Budget -->
		<div>
			<label for="budget" class="mb-3 block text-sm text-zinc-400">Budget</label>

			<select
				id="budget"
				bind:value={form.budget}
				class="w-full rounded-[14px] border-none bg-[#2c292d] px-5 py-4 text-white transition outline-none focus:ring-2 focus:ring-orange-500"
			>
				<option value="">Select...</option>

				{#each budgets as budget}
					<option value={budget}>{budget}</option>
				{/each}
			</select>
		</div>

		<!-- Message -->
		<div>
			<label for="message" class="mb-3 block text-sm text-zinc-400">Message</label>

			<textarea
				id="message"
				bind:value={form.message}
				rows="6"
				placeholder="Tell me about your project..."
				class="w-full resize-none rounded-[14px] border-none bg-[#2c292d] px-5 py-4 text-white transition outline-none focus:ring-2 focus:ring-orange-500"
			></textarea>
		</div>

		<!-- Button -->
		<button
			type="submit"
			class="w-full rounded-[14px] bg-brand-orange py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7c4d]"
		>
			Submit
		</button>
	</form>
</section>
