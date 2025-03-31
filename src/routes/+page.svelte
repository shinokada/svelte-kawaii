<script lang="ts">
	import IllustPage from './utils/IllustPage.svelte';
	const modules = import.meta.glob('$lib/components/*.svelte');
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
/>
