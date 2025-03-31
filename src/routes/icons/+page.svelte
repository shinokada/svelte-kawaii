<script lang="ts">
	import IllustPage from '../utils/IllustPage.svelte';
	const modules = import.meta.glob('$lib/components/*.svelte');
	import * as icons from '$lib/components/';

	let searchTerm = $state('');
	let filteredEntries = $derived(
		Object.entries(icons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);
	// $inspect('filteredEntries: ', icons)
</script>

<IllustPage
	minSize="100"
	defaultSize="140"
	maxSize="200"
	step="10"
	title="Kawaii Illustrations"
	{icons}
	threeTabs={false}
/>
