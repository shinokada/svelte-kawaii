<script lang="ts">
  import { type KawaiiProps as Props, getFaceScale, Face } from '..';

  let {
    size = 240,
    mood = 'blissful',
    color = '#A6E191',
    uniqueId = crypto.randomUUID(),
    ariaLabel = 'file',
    title,
    desc,
    ...restProps
  }: Props = $props();

  const figmaFaceScale = getFaceScale(52);
  const figmaFaceXYPosition = '94 123';
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
    d="M85.599 51C78.64 51 73 56.64 73 63.599v113.1c0 6.958 5.641 12.599 12.599 12.599h68.81c6.957 0 12.598-5.641 12.598-12.599V83.151c0-.413-.164-.809-.456-1.1l-30.594-30.595"
    clip-rule="evenodd"
  />
  <path
    fill="#000"
    fill-rule="evenodd"
    d="M135.501 51v20.465c0 6.098 4.943 11.04 11.041 11.04h20.464L135.501 51"
    clip-rule="evenodd"
    opacity={0.2}
  />
  <path
    fill="#000"
    fill-rule="evenodd"
    d="M167.007 82.506h-8.177c.006.301.023.6.023.903v93.231c0 6.986-5.723 12.648-12.784 12.648h8.217c7.061 0 12.784-5.662 12.784-12.648V83.41c0-.302-.004-.603-.01-.904h-.053Z"
    clip-rule="evenodd"
    opacity={0.104}
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
