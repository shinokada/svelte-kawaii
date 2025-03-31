import type { Component } from 'svelte';
import {
	type ListType,
	CogOutline,
	ExpandOutline,
	GridPlusOutline,
	sidebarList
} from 'runes-webkit';

const extra: ListType[] = [
	{
		name: '3 Tabs',
		Icon: ExpandOutline as Component,
		href: '/three-tabs'
	},
	{
		name: '3 Tabs Tailwind ',
		Icon: CogOutline as Component,
		href: '/three-tabs-sizebytailwind'
	},
	{
		name: 'No Tabs',
		Icon: GridPlusOutline as Component,
		href: '/no-tabs'
	}
];

export const newSidebarList: ListType[] = [
	...(Array.isArray(sidebarList) ? sidebarList : []),
	...extra
];

export function excludeIconsByKeyword(icons: { [key: string]: any }, keyword: string) {
	const filteredIcons: { [key: string]: any } = {};
	for (const key in icons) {
		if (!key.includes(keyword)) {
			filteredIcons[key] = icons[key];
		}
	}
	return filteredIcons;
}

export function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log('Text copied to clipboard');
		})
		.catch((err) => {
			console.error('Failed to copy: ', err);
			throw err; // Re-throw the error so the caller can handle it if needed
		});
}

export function replaceLibImport(componentString: string): string {
	return componentString
		.replace(/from ["']\$lib["']/g, "from 'svelte-5-ui-lib'")
		.replace(/from ["']\$lib\//g, "from 'svelte-5-ui-lib/");
}

export const isGeneratedCodeOverflow = (code: string): boolean => {
	const lines = code.split('\n');
	return lines.length > 7;
};