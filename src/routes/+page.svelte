<script lang="ts">
  import IllustPage from './utils/IllustPage.svelte';
  import { P, A } from 'svelte-5-ui-lib';
  import * as icons from '$lib/components/';
</script>

<IllustPage
  minSize="180"
  defaultSize="240"
  maxSize="300"
  step="10"
  title="Svelte Kawaii - Cute SVG Illustrations"
  {icons}
  threeTabs={false}
>
  {#snippet header()}
    <P class="mx-auto mb-8 max-w-2xl text-center">
      Svelte Kawaii is a Svelte port of <A href="https://react-kawaii.vercel.app/">React Kawaii</A>,
      offering cute SVG illustrations to add adorable characters to your Svelte applications. A
      simple way to bring some cuteness to your UI.
    </P>
  {/snippet}
</IllustPage>
