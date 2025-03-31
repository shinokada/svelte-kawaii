<script lang="ts">
	import { Tabs, Label, TabItem, Select } from 'svelte-5-ui-lib';
	import { random_hex_color_code, random_tailwind_color } from 'runes-webkit';
	import type { Component } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { Copy } from 'runes-webkit';
	import { Modal, Button, uiHelpers } from 'svelte-5-ui-lib';

	const kawaiiModal = uiHelpers();
	let modalStatus = $state(false);
	const closeModal = kawaiiModal.close;
	$effect(() => {
		modalStatus = kawaiiModal.isOpen;
	});

	interface Props {
		icons: Record<string, Component>;
		title: string;
		defaultSize?: string;
		sizeByTailwind?: boolean;
		minSize?: string;
		maxSize?: string;
		threeTabs?: boolean;
		wrapperClass?: string | undefined;
		div1Class?: string | undefined;
		div2Class?: string | undefined;
		classDiv2?: string | undefined;
		div3Class?: string | undefined;
		classDiv3?: string | undefined;
		div4Class?: string | undefined;
		labelClass?: string | undefined;
		searchClass?: string | undefined;
		classSearch?: string | undefined;
		tab1Class?: string | undefined;
		classTab1?: string | undefined;
		tab2Class?: string | undefined;
		rangeClass?: string | undefined;
		classRange?: string | undefined;
		contentClass?: string;
		step?: string;
		class?: string;
	}
	let {
		icons,
		wrapperClass = 'mx-auto max-w-7xl px-8',
		div1Class = 'relative overflow-x-auto',
		div2Class,
		classDiv2 = 'w-full p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800',
		div3Class,
		classDiv3 = 'grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 dark:text-white place-items-center',
		div4Class = 'p-8 border border-gray-200 dark:border-gray-800 rounded-lg dark:bg-gray-800 hover:scale-105',
		labelClass = 'text-lg py-4',
		searchClass,
		classSearch = 'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
		tab1Class,
		classTab1 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
		tab2Class = 'flex items-center text-lg',
		rangeClass,
		classRange = 'mt-4 h-2 w=[100px] sm:w-[250px] cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700',
		contentClass = 'rounded-lg dark_bg_theme mt-4',
		title,
		sizeByTailwind,
		minSize = '50',
		defaultSize = $bindable('100'),
		maxSize = '200',
		step = '10',
		threeTabs = true,
		class: className = '',
		...restProps
	}: Props = $props();

	let searchTerm = $state('');

	let filteredEntries = $derived(
		Object.entries(icons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);

	// select mood
	const moods = [{value:'sad', name:'Sad'}, {value:'shocked', name: 'Shocked'},{value:'happy', name:'Happy'}, {value: 'blissful',name:'Blissful'}, {value:'lovestruck', name:'Lovstruck'},{value:'excited',name:'Excited'}, {value:'ko', name: 'Ko'}];
	let selectedMood = $state('happy');

	// color
	let selectedColor = $state('#A6E191')

	// $inspect('filteredEntries', filteredEntries);
</script>

<div class="w-full pb-20">
	<div class={wrapperClass}>
		<h1>{title}</h1>
		
		<div class={div1Class}>
			<div class={twMerge(classDiv2, div2Class)}>
				<div class="place-items-center pt-2 mx-auto">
					<input type="color" class="w-[100px] sm:w-[250px] " id="color-input" name="color-input" bind:value={selectedColor} />
				</div>
				<div class="place-items-center mx-auto">
				<Select
					id="select-mood"
					items={moods}
					bind:value={selectedMood}
					class="mb-2 inline sm:w-[250px] w-[100px]"
				/>
				</div>
				<div class="place-items-center mx-auto">
					<input
					id="size-input"
					type="range"
					min={minSize}
					max={maxSize}
					bind:value={defaultSize}
					{step}
					class={twMerge(classRange, rangeClass)}
					/>
					
				</div>
			</div>
			
			<div class={twMerge(' py-8 text-gray-500 dark:text-gray-400', className)}>
				<div class={twMerge(classDiv3, div3Class)}>
					{#each filteredEntries as [name, Component] (name)}
						{#if name !== 'Icon'}
							<div class={div4Class}>
								<button onclick={kawaiiModal.toggle} aria-label="modal-button">
								<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
							</button>
								<Component height={defaultSize} color={selectedColor} mood={selectedMood} {...restProps}></Component>
								<Copy iconName={name} btnClass="m-4">{name}</Copy>
								<Modal title={name} {modalStatus} {closeModal}>
									Modal content
								</Modal>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>