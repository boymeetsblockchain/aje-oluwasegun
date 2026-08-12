<script>
	import Icon from '@iconify/svelte';
	import me from '$lib/assets/me.png';
</script>

<section
	class="flex h-auto w-full flex-col rounded-3xl bg-white p-8 text-brand-black shadow-2xl md:h-175"
>
	<!-- Image -->
	<div class="flex flex-col items-center">
		<div class="overflow-hidden rounded-2xl border-4 border-gray-100 shadow-lg">
			<img
				src={me}
				alt="Aje Oluwasegun"
				class="h-60 w-60 object-cover transition duration-500 hover:scale-105"
			/>
		</div>

		<h1 class="mt-6 text-center text-4xl font-extrabold">Aje Oluwasegun</h1>
		<p class="mt-1 text-center text-sm font-semibold tracking-widest text-zinc-400 uppercase">
			Software Engineer
		</p>
	</div>

	<!-- Bio -->
	<div class="mt-6">
		<p class="text-center text-base leading-relaxed text-brand-gray-alt-v2">
			Fullstack & mobile engineer with 8+ years building scalable products across fintech,
			logistics, healthcare, and Web3, from microservices to polished mobile UIs.
		</p>
	</div>

	<!-- Socials -->
	<div class="mt-auto flex flex-wrap justify-center gap-3 pt-6">
		<a
			href="https://github.com/boymeetsblockchain"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-black"
			aria-label="GitHub"
		>
			<Icon icon="mdi:github" width="24" class="transition-colors group-hover:text-white" />
		</a>

		<a
			href="https://x.com/ajeoluwasegun"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-black"
			aria-label="Twitter / X"
		>
			<Icon icon="ri:twitter-x-line" width="24" class="transition-colors group-hover:text-white" />
		</a>

		<a
			href="https://www.linkedin.com/in/oluwasegun-aje-b990a1232/"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0077B5]"
			aria-label="LinkedIn"
		>
			<Icon icon="mdi:linkedin" width="24" class="transition-colors group-hover:text-white" />
		</a>

		<a
			href="mailto:contact@ajeoluwasegun.com"
			class="group flex items-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7c4d]"
		>
			<Icon icon="lucide:mail" width="16" />
			Hire Me
		</a>
	</div>
</section>
