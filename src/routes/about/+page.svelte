<script lang="ts">
  import type { Component } from 'svelte';
  import {
    removeHyphensAndCapitalize,
    HomeCards,
    SupportBanner,
    TechInfo,
    BellActiveAltOutline,
    InfoCircleOutline,
    BadgeCheckOutline,
    Accessibility,
    TruckFastSolid,
    Visualstudiocode,
    MoonSolid,
    info
  } from 'runes-webkit';

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
    svelte5uilibVersion: __SVELTE_5_UI_LIB_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__,
    tailwindcssVersion: __TAILWINDCSS_VERSION__
  };
</script>

<div class="relative mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-20">
  <SupportBanner class="mt-4">
    To Keep It Going, Please Show Your Love.<a
      href="https://ko-fi.com/Z8Z2CHALG"
      target="_blank"
      aria-label="Buy Me a Coffee at ko-fi.com"
      ><img
        height="40"
        style="border:0px;height:40px;"
        src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
        alt="Buy Me a Coffee at ko-fi.com"
      /></a
    >
  </SupportBanner>

  <h1 class="my-8 flex justify-center">Svelte Kawaii</h1>

  <HomeCards cards={filteredCards} />
  <h2 class="my-8 flex justify-center">Info</h2>
  <HomeCards cards={newInfo} />
  <TechInfo {...pkg} />
</div>
