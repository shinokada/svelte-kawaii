<script lang="ts">
	import { type KawaiiProps as Props, getFaceScale, Face } from '..';

	let {
		size = 240,
		mood = 'blissful',
		color = '#A6E191',
		uniqueId = crypto.randomUUID(),
		ariaLabel = 'ghost',
		title,
		desc,
		...restProps
	}: Props = $props();

	const figmaFaceScale = getFaceScale(62.06);
	const figmaFaceXYPosition = '89.09 99.3';
	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 240 240"
	fill="none"
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	{...restProps}
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		fill={color}
		fill-rule="evenodd"
		d="M118.241 41.032C84.925 42.164 59 74.852 59 112.904v71.716c0 7.632 5.484 13.84 12.224 13.84s12.223-6.208 12.223-13.839c0-2.544 1.828-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.483 13.839 12.224 13.839 3.265 0 6.334-1.44 8.643-4.053 2.309-2.614 3.58-6.09 3.58-9.786 0-2.55 1.822-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.484 13.839 12.224 13.839s12.223-6.208 12.223-13.839c0-2.544 1.828-4.613 4.075-4.613 2.246 0 4.074 2.069 4.074 4.613 0 7.631 5.484 13.839 12.224 13.839s12.223-6.208 12.223-13.839v-74.425c0-38.577-28.038-70.35-62.994-69.164Z"
		clip-rule="evenodd"
	/>
	<path
		fill="#121212"
		fill-opacity={0.1}
		fill-rule="evenodd"
		d="M163.84 197.16c4.163-2.21 7.052-7 7.052-12.539v-74.425c0-35.354-23.548-64.993-54.389-68.786a4.724 4.724 0 0 1 1.738-.378c34.956-1.186 62.994 30.587 62.994 69.164v74.425c0 7.631-5.483 13.839-12.223 13.839-1.848 0-3.6-.466-5.172-1.3Z"
		clip-rule="evenodd"
	/>

	<Face
		{mood}
		transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`}
		{uniqueId}
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-kawaii.codewithshin.com/)
## Types
@type: size?: number | string;
@type: color?: string;
@type: mood?: KawaiiMood;
@type: uniqueId?: string;
## Props
@props: size = 240,
@props: mood = 'blissful',
@props: color = '#A6E191',
@props: uniqueId = crypto.randomUUID(),
@props: ...restProps
-->
