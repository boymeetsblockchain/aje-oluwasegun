<script lang="ts">
	let { bgColor = '#ffffff', title = '', description = '', href = '#', text = '' } = $props();
</script>

<a
	{href}
	class="group block h-50 w-full rounded-[14px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
	style={`background-color: ${bgColor}`}
>
	<div class="flex h-full flex-col justify-between">
		<div>
			<h3 class="text-3xl font-bold text-white">
				{title}
			</h3>

			<p class="mt-4 text-white/80">
				{description}
			</p>
		</div>

		<div class="mt-8 flex items-center gap-2 text-white">
			<span>{text}</span>
			<!-- <span class="transition-transform group-hover:translate-x-1">→</span> -->
		</div>
	</div>
</a>
