<script lang="ts">
  import { paths } from './utils/paths';
  type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
  type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
  };

  let { mood = 'blissful', uniqueId, transform = '' }: KawaiiFaceProps = $props();
</script>

<g id="kawaii-face" {transform} aria-label={`Kawaii face with ${mood} mood`}>
  <defs>
    <path d={paths.defs} id="kawaii-face__path-1" />
  </defs>

  <g id="kawaii-face__mouth" transform="translate(18.000000, 16.000000)">
    {#if ['blissful', 'lovestruck', 'excited'].includes(mood)}
      <g id="kawaii-face__mouth__joy" transform="translate(0.000000, 1.000000)">
        <mask id={`kawaii-face__mask-2-${uniqueId}`} fill="white">
          <use href="#kawaii-face__path-1" />
        </mask>
        <use id="Combined-Shape" fill="#000000" href="#kawaii-face__path-1" />
        <path
          d={paths.tongue}
          id="kawaii-face__tongue"
          fill="#E74144"
          mask={`url(#kawaii-face__mask-2-${uniqueId})`}
          transform="translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)"
        />
      </g>
    {/if}

    {#if mood === 'happy'}
      <path d={paths.happy} id="kawaii-face__mouth__happy" fill="#000000" />
    {/if}

    {#if mood === 'shocked'}
      <ellipse id="kawaii-face__mouth__shocked" cx="15" cy="14" rx="9" ry="10" fill="#000000" />
    {/if}

    {#if ['sad', 'ko'].includes(mood)}
      <path
        d={paths.sad}
        id="kawaii-face__mouth__sad"
        fill="#000000"
        transform="translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
      />
    {/if}
  </g>

  <g
    id="kawaii-face__blush"
    transform="translate(0.000000, 15.000000)"
    fill="#000000"
    opacity="0.2"
  >
    <circle cx="3" cy="3" r="3" />
    <circle cx="63" cy="3" r="3" />
  </g>

  <g id="kawaii-face__eyes" transform="translate(2.000000, 0.000000)" fill="#000000">
    {#if mood === 'blissful'}
      <g id="kawaii-face__eyes__arc" transform="translate(1.000000, 0.000000)">
        <path d={paths.bliss1} />
        <path d={paths.bliss2} />
      </g>
    {/if}

    {#if ['happy', 'sad', 'shocked', 'excited'].includes(mood)}
      <g id="kawaii-face__eyes__circle" transform="translate(1.000000, 2.000000)">
        <circle cx="4.5" cy="4.5" r="4.5" />
        <circle cx="56.5" cy="4.5" r="4.5" />
      </g>
    {/if}

    {#if mood === 'lovestruck'}
      <g
        id="kawaii-face__eyes__heart"
        transform="translate(0.000000, 2.000000)"
        fill-rule="nonzero"
      >
        <path d={paths.lovestruck1} id="Shape" />
        <path d={paths.lovestruck2} id="Shape" />
      </g>
    {/if}

    {#if mood === 'ko'}
      <g id="kawaii-face__eyes__ko" transform="translate(1.500000, 1.000000)" fill-rule="nonzero">
        <path d={paths.ko1} id="Cross" />
        <path d={paths.ko2} id="Cross" />
      </g>
    {/if}
  </g>
</g>

<!--
@component
[Go to docs](https://svelte-kawaii.codewithshin.com/)
## Types
@types: KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko'
@type: size?: number | string;
@type: color?: string;
@type: mood?: KawaiiMood;
@type: uniqueId?: string;
## Props
@props: mood = 'blissful'
@props: uniqueId
@props: transform = ''
-->
