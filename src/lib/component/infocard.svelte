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
				class="h-72 w-72 object-cover transition duration-500 hover:scale-105"
			/>
		</div>

		<h1 class="mt-6 text-center text-4xl font-extrabold">Aje Oluwasegun</h1>
	</div>

	<!-- Bio -->
	<div class="mt-8">
		<p class="text-center text-lg leading-relaxed text-brand-gray-alt-v2">
			A software engineer passionate about building scalable web applications and creating
			innovative digital experiences.
		</p>
	</div>

	<!-- Socials -->
	<div class="mt-auto flex justify-center gap-5">
		<a
			href="https://github.com/boymeetsblockchain"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-black"
		>
			<Icon icon="mdi:github" width="24" class="transition-colors group-hover:text-white" />
		</a>

		<a
			href="https://x.com"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-black"
		>
			<Icon icon="ri:twitter-x-line" width="24" class="transition-colors group-hover:text-white" />
		</a>

		<a
			href="https://www.linkedin.com/in/oluwasegun-aje-b990a1232/"
			target="_blank"
			rel="noopener noreferrer"
			class="group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0077B5]"
		>
			<Icon icon="mdi:linkedin" width="24" class="transition-colors group-hover:text-white" />
		</a>
		<a
			href="mailto:contact@ajeoluwasegun.com"
			class="group flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 text-brand-black transition-all duration-300 hover:-translate-y-1 hover:bg-brand-black hover:text-white"
		>
			<Icon
				icon="lucide:mail"
				width="20"
				class="transition-transform duration-300 group-hover:scale-110"
			/>
		</a>
	</div>
</section>
