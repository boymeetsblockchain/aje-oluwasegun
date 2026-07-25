<script lang="ts">
	import Icon from '@iconify/svelte';

	let {
		bgColor = '#ffffff',
		title = '',
		description = '',
		href = '#',
		text = '',
		icon = ''
	} = $props();
</script>

<a
	{href}
	class="group block h-auto w-full rounded-[14px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:h-50"
	style={`background-color: ${bgColor}`}
>
	<div class="flex h-full flex-col justify-between">
		<div>
			<Icon {icon} class="text-4xl text-white" />

			<p class="mt-4 text-white">
				{description}
			</p>
		</div>

		<div class="mt-4 flex items-center gap-2 text-white">
			<span>{text}</span>
		</div>
	</div>
</a>
