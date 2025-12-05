<script lang="ts">
  import '../app.css';
  import type { Component } from 'svelte';
  import { page } from '$app/state';
  import { Footer, DotsHorizontalOutline, GithubSolid, XSolid, Bluesky } from 'runes-webkit';
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    DarkMode,
    Dropdown,
    NavHamburger,
    DropdownItem
  } from 'flowbite-svelte';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { Runatics } from 'runatics';
  import DynamicCodeBlockStyle from './utils/DynamicCodeBlockStyle.svelte';

  let activeUrl = $derived(page.url.pathname);
  $effect(() => {
    activeUrl = page.url.pathname;
  });

  type LiType = {
    name: string;
    href: string;
    Icon?: Component;
  };
  let { children, data } = $props();
  const analyticsId = $derived(data.ANALYTICS_ID_SVELTE_LIB);
  // metaTags
  let metaTags = $derived(
    page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  const lis: LiType[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };

  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = 'https://twitter.com/shinokada';
  const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

  $effect(() => {
    metaTags = page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags;
  });
  let activeClass = 'p-2 text-base hover:text-gray-600';
  let nonActiveClass = 'p-2 text-base hover:text-gray-600';
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Navbar
  fluid
  class="fixed top-0 left-0 z-50 border-b border-gray-100 bg-white py-4  sm:px-12 dark:border-gray-700 dark:bg-stone-900"
  navContainerClass="md:justify-between"
>
  <NavBrand href="/">
    <span class="self-center text-2xl font-semibold whitespace-nowrap md:text-3xl dark:text-white"
      >Svelte Kawaii</span
    >
  </NavBrand>
  <div class="flex justify-end md:order-2">
    <NavHamburger class="order-3" />
    <DynamicCodeBlockStyle class="hide md:block" />
    <DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
    <Dropdown simple class="p-1">
      {#if blueskyUrl}
        <DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
          <Bluesky size="30" />
        </DropdownItem>
      {/if}
      {#if twitterUrl}
        <DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
      {/if}
      {#if githubUrl}
        <DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
          <GithubSolid />
        </DropdownItem>
      {/if}
    </Dropdown>
    <DarkMode class="m-0 p-2" />
  </div>
  <NavUl
    {activeUrl}
    class="order-2 md:order-1"
    classes={{ active: activeClass, nonActive: nonActiveClass, ul: 'p-0' }}
  >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
</Navbar>
<div class="relative mx-auto mt-16 h-full max-w-6xl overflow-y-auto px-8 pb-20">
  {@render children()}
</div>
<Footer {brand} {lis} />
