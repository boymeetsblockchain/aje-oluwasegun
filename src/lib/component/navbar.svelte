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

<div class="flex gap-8 rounded-[14px] bg-brand-gray-alt p-4 sm:gap-10">
	{#each navItems as item}
		{@const isActive = page.url.pathname === item.href}
		<a
			href={item.href}
			class="group relative flex flex-col items-center gap-1"
			aria-label={item.label}
		>
			<Icon
				icon={item.icon}
				width="24"
				class="transition-all duration-300 group-hover:-translate-y-1 {isActive
					? 'text-brand-orange'
					: 'text-zinc-500 group-hover:text-white'}"
			/>

			<!-- Active dot -->
			{#if isActive}
				<span class="h-1 w-1 rounded-full bg-brand-orange"></span>
			{:else}
				<span class="h-1 w-1 rounded-full bg-transparent"></span>
			{/if}

			<!-- Tooltip -->
			<span
				class="pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 translate-y-4 rounded-[10px] bg-[#2c2a29] px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
			>
				{item.label}
			</span>
		</a>
	{/each}
</div>
