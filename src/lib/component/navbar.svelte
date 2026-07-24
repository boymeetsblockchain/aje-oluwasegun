<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';

	const navItems = [
		{
			href: '/',
			icon: 'heroicons:home',
			label: 'Home'
		},
		{
			href: '/projects',
			icon: 'heroicons:folder',
			label: 'Projects'
		},
		{
			href: '/experience',
			icon: 'heroicons:briefcase',
			label: 'Experience'
		},
		{
			href: '/tools',
			icon: 'heroicons:wrench-screwdriver',
			label: 'Tools'
		},
		{
			href: '/contact',
			icon: 'heroicons:pencil-square',
			label: 'Contact'
		}
	];
</script>

<div class="flex gap-10 rounded-[14px] bg-brand-gray-alt p-4">
	{#each navItems as item}
		<a
			href={item.href}
			class="group relative"
			// class:text-white={page.url.pathname === item.href}
			// class:text-gray-500={page.url.pathname !== item.href}
		>
			<Icon
				icon={item.icon}
				width="24"
				class="transition-transform duration-300 group-hover:-translate-y-2"
			/>

			<span
				class="pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 translate-y-6 rounded-[14px] bg-brand-gray-alt px-2 py-3 text-sm text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
			>
				{item.label}
			</span>
		</a>
	{/each}
</div>
