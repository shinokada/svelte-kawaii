<script lang="ts">
  import { type KawaiiProps as Props, getFaceScale, Face } from '..';

  let {
    size = 240,
    mood = 'blissful',
    color = '#A6E191',
    uniqueId = crypto.randomUUID(),
    ariaLabel = 'credit card',
    title,
    desc,
    focusable = 'false',
    ...restProps
  }: Props = $props();

  const figmaFaceScale = getFaceScale(54.33);
  const figmaFaceXYPosition = '93.33 121.1';
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
    fill={color}
    d="M192.959 178.722H48.041c-4.994 0-9.041-4.036-9.041-9.017V70.017C39 65.037 43.047 61 48.04 61h144.92c4.994 0 9.041 4.036 9.041 9.017v99.688c0 4.981-4.047 9.017-9.041 9.017"
  />
  <path
    fill="#000"
    fill-rule="evenodd"
    d="M183.904 178.722h9.055c4.994 0 9.041-4.036 9.041-9.017V70.017c0-4.98-4.047-9.017-9.041-9.017h-9.055c4.994 0 9.04 4.036 9.04 9.017v99.688c0 4.981-4.046 9.017-9.04 9.017Z"
    clip-rule="evenodd"
    opacity={0.1}
  />
  <path fill="#000" d="M39 74.995h163v22.227H39V74.995Z" />

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
