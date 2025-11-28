<script lang="ts">
  import { type KawaiiProps as Props, getFaceScale, Face } from '..';

  let {
    size = 240,
    mood = 'blissful',
    color = '#A6E191',
    uniqueId = crypto.randomUUID(),
    ariaLabel = 'ice cream',
    title,
    desc,
    focusable = 'false',
    ...restProps
  }: Props = $props();

  const figmaFaceScale = getFaceScale(53.99);
  const figmaFaceXYPosition = '93.38 96.26';
  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {focusable}
  viewBox="0 0 240 240"
  fill="none"
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    fill="#FCCB7E"
    d="M121.311 209.66h-3.243c-3.566 0-6.484-2.887-6.484-6.416v-25.662h16.211v25.662c0 3.529-2.918 6.416-6.484 6.416Z"
  />
  <path
    fill={color}
    d="M122.163 30h-3.55C95.175 30 76 48.971 76 72.16v92.809c0 6.954 5.697 12.59 12.726 12.59h63.324c7.03 0 12.726-5.636 12.726-12.59V72.16c0-23.189-19.175-42.16-42.613-42.16Z"
  />
  <path
    fill="#000"
    fill-rule="evenodd"
    d="M144.074 177.559h8.18c7.03 0 12.726-5.636 12.726-12.59V72.16c0-23.189-19.174-42.16-42.613-42.16h-3.55c-.776 0-1.548.02-2.315.062 22.373 1.2 40.298 19.677 40.298 42.098v92.809c0 6.954-5.696 12.59-12.726 12.59Z"
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
