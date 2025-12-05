<script lang="ts">
  import { type KawaiiProps as Props, getFaceScale, Face } from '..';

  let {
    size = 240,
    mood = 'blissful',
    color = '#A6E191',
    uniqueId = crypto.randomUUID(),
    ariaLabel = 'planet',
    title,
    desc,
    focusable = 'false',
    ...restProps
  }: Props = $props();

  const figmaFaceScale = getFaceScale(66);
  const figmaFaceXYPosition = '87 110';
  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {focusable}
  viewBox="0 0 240 240"
  fill="none"
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
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
