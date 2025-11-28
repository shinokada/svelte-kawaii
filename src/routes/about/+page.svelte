<script lang="ts">
  import type { Component } from 'svelte';
  import {
    removeHyphensAndCapitalize,
    HomeCards,
    TechInfo,
    BellActiveAltOutline,
    InfoCircleOutline,
    BadgeCheckOutline,
    Accessibility,
    TruckFastSolid,
    Visualstudiocode,
    info,
    H2
  } from 'runes-webkit';
  import { HighlightCompo } from 'svelte-rune-highlight';

  const brand = {
    title: `${removeHyphensAndCapitalize(__NAME__)}`,
    description: `${__DESCRIPTION__}`,
    Icon: BellActiveAltOutline,
    icon_class: 'text-blue-500'
  };

  interface CardTpye {
    title: string;
    description: string;
    Icon: Component;
    icon_class: string;
  }

  const cards: CardTpye[] = [
    {
      title: 'Requirements',
      description: 'Svelte 5',
      Icon: BadgeCheckOutline,
      icon_class: 'text-pink-500'
    },
    {
      title: 'Accessible illustrations',
      description:
        'A11y props, <code>title</code>, <code>desc</code>, and <code>ariaLabel</code> for accessible SVG illustrations.',
      Icon: Accessibility,
      icon_class: 'text-green-400'
    },
    {
      title: 'Faster Compiling',
      description: 'Import icons directly to optimize compilation speed and improve performance.',
      Icon: TruckFastSolid,
      icon_class: 'text-yellow-500'
    },
    {
      title: 'IDE Support',
      description:
        'Hovering over a component name will display features, props, events, and more for an LSP-compatible editors.',
      Icon: Visualstudiocode,
      icon_class: 'text-amber-500'
    }
  ];
  const filteredCards = [brand, ...cards];

  const originalSource = {
    title: 'Original source',
    description: 'react-kawaii',
    Icon: InfoCircleOutline,
    href: 'https://github.com/elizabetdev/react-kawaii',
    icon_class: 'text-orange-500'
  };
  const license = {
    title: 'License',
    description: 'Released under the MIT License.',
    Icon: InfoCircleOutline,
    href: `https://github.com/shinokada/${__NAME__}/blob/main/LICENSE`,
    icon_class: 'text-lime-500'
  };

  const newInfo = [originalSource, license, ...info];
  /*eslint no-undef: "off"*/
  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__,
    tailwindcssVersion: __TAILWINDCSS_VERSION__
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1 class="my-8 flex justify-center">About: Svelte Kawaii</h1>
<img
  style="height:240px; display:block; margin:0 auto;"
  src="https://raw.githubusercontent.com/shinokada/svelte-kawaii/refs/heads/main/static/images/svelte-kawaii-new.png"
  alt="svelte kawaii human dinosaur"
/>
<H2>Installation</H2>
<HighlightCompo class="max-w-7xl" lang="ts" code={modules['./md/installation.md'] as string} />
<H2>Props</H2>
<HighlightCompo class="max-w-7xl" lang="ts" code={modules['./md/props.md'] as string} />
<H2>Types</H2>
<HighlightCompo class="mb-8 max-w-7xl" lang="ts" code={modules['./md/types.md'] as string} />

<H2>Features</H2>
<HomeCards cards={filteredCards} />
<h2 class="my-8 flex justify-center">Info</h2>
<HomeCards cards={newInfo} />
<TechInfo {...pkg} />
