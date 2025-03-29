<script lang="ts">
	import type { KawaiiProps } from '../types/index.ts';
	import { getFaceScale } from '../utils/getFaceScale.ts';
	import Face from './common/Face.svelte';

	let {
		size = 240,
		mood = 'blissful',
		color = '#A6E191',
		uniqueId = crypto.randomUUID(),
		...props
	}: KawaiiProps = $props();

	const figmaFaceScale = getFaceScale(66);
	const figmaFaceXYPosition = '87 110';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 240 240"
	fill="none"
	{...props}
>
	<path
		fill={color}
		fill-rule="evenodd"
		d="M120 187c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
		clip-rule="evenodd"
	/>
	<path
		fill="#000"
		fill-rule="evenodd"
		d="M114.5 186.777c1.814.148 3.648.223 5.5.223 37.003 0 67-29.997 67-67s-29.997-67-67-67c-1.852 0-3.686.075-5.5.222C148.93 56.02 176 84.85 176 120c0 35.151-27.07 63.98-61.5 66.777Z"
		clip-rule="evenodd"
		opacity={0.1}
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
## Props
@props: size: any = 240;
@props:mood: any = 'blissful';
@props:color: any = '#A6E191';
@props:uniqueId: any = crypto.randomUUID();
-->
