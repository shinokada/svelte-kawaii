<script lang="ts">
  import IllustPage from './utils/IllustPage.svelte';
  import { P } from 'svelte-5-ui-lib';
  import * as icons from '$lib/components/';
</script>

<IllustPage
  minSize="180"
  defaultSize="240"
  maxSize="300"
  step="10"
  title="Svelte Kawaii"
  {icons}
  threeTabs={false}
>
  {#snippet header()}
    <p class="mx-auto mb-8 max-w-2xl text-center">
      Svelte Kawaii is a Svelte port of React Kawaii, offering cute SVG illustrations to add
      adorable characters to your Svelte applications. A simple way to bring some cuteness to your
      UI.
    </p>
  {/snippet}
</IllustPage>
