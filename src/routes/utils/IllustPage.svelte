<script lang="ts">
  import { Select } from 'svelte-5-ui-lib';
  import type { Component, Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Modal, uiHelpers } from 'svelte-5-ui-lib';
  import DynamicCodeBlockHighlight from './DynamicCodeBlockHighlight.svelte';
  import { isGeneratedCodeOverflow } from './helper';

  const kawaiiModal = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = kawaiiModal.close;
  $effect(() => {
    modalStatus = kawaiiModal.isOpen;
  });

  interface Props {
    icons: Record<string, Component>;
    header?: Snippet;
    title?: string;
    defaultSize?: string;
    sizeByTailwind?: boolean;
    minSize?: string;
    maxSize?: string;
    threeTabs?: boolean;
    wrapperClass?: string | undefined;
    div1Class?: string | undefined;
    div2Class?: string | undefined;
    classDiv2?: string | undefined;
    div3Class?: string | undefined;
    classDiv3?: string | undefined;
    div4Class?: string | undefined;
    labelClass?: string | undefined;
    searchClass?: string | undefined;
    classSearch?: string | undefined;
    tab1Class?: string | undefined;
    classTab1?: string | undefined;
    tab2Class?: string | undefined;
    rangeClass?: string | undefined;
    classRange?: string | undefined;
    contentClass?: string;
    step?: string;
    class?: string;
  }
  let {
    icons,
    header,
    wrapperClass = 'mx-auto max-w-7xl px-8',
    div1Class = 'relative overflow-x-auto',
    div2Class,
    classDiv2 = 'w-full p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-800',
    div3Class,
    classDiv3 = 'grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 dark:text-white place-items-center',
    div4Class = 'w-full place-items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg dark:bg-gray-800 hover:scale-105',
    labelClass = 'text-lg py-4',
    searchClass,
    classSearch = 'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    tab1Class,
    classTab1 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
    tab2Class = 'flex items-center text-lg',
    rangeClass,
    classRange = 'mt-4 h-2 w=[100px] sm:w-[250px] cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700',
    contentClass = 'rounded-lg dark_bg_theme mt-4',
    title,
    sizeByTailwind,
    minSize = '50',
    defaultSize = $bindable('210'),
    maxSize = '200',
    step = '10',
    threeTabs = true,
    class: className = '',
    ...restProps
  }: Props = $props();

  let searchTerm = $state('');

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );

  // select mood
  const moods = [
    { value: 'sad', name: 'Sad' },
    { value: 'shocked', name: 'Shocked' },
    { value: 'happy', name: 'Happy' },
    { value: 'blissful', name: 'Blissful' },
    { value: 'lovestruck', name: 'Lovstruck' },
    { value: 'excited', name: 'Excited' },
    { value: 'ko', name: 'Ko' }
  ];
  let selectedMood = $state('happy');
  let selectedIllust = $state('happy');
  let componentName = $derived(selectedIllust.charAt(0).toUpperCase() + selectedIllust.slice(1));
  // color
  let selectedColor = $state('#A6E191');

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];

      if (defaultSize !== '240') props.push(` size="${defaultSize}"`);
      if (selectedColor !== '#a6e191') props.push(` color="${selectedColor}"`);
      if (selectedMood !== 'happy') props.push(` mood="${selectedMood}"`);

      const propsString =
        props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `import { ${componentName} } from "svelte-kawaii";
<${componentName} ${propsString}/>`;
    })()
  );

  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  const updateIllust = (name: string) => {
    kawaiiModal.toggle();
    selectedIllust = name;
  };

  $effect(() => {
    builderExpand = builder.isOpen;
  });
</script>

<div class="w-full pb-20">
  <div class={wrapperClass}>
    <h1 class="text-center">{title}</h1>
    {#if header}
      {@render header()}
    {/if}
    <div class={div1Class}>
      <div class={twMerge(classDiv2, div2Class)}>
        <div class="mx-auto place-items-center pt-2">
          <input
            type="color"
            class="w-[100px] sm:w-[250px]"
            id="color-input"
            name="color-input"
            bind:value={selectedColor}
          />
        </div>
        <div class="mx-auto place-items-center">
          <Select
            id="select-mood"
            items={moods}
            bind:value={selectedMood}
            class="mb-2 inline w-[100px] sm:w-[250px]"
          />
        </div>
        <div class="mx-auto place-items-center">
          <input
            id="size-input"
            type="range"
            min={minSize}
            max={maxSize}
            bind:value={defaultSize}
            {step}
            class={twMerge(classRange, rangeClass)}
          />
        </div>
      </div>
      <Modal {modalStatus} {closeModal}>
        <h3 class="font-bold">{componentName}</h3>
        <DynamicCodeBlockHighlight
          handleExpandClick={handleBuilderExpandClick}
          expand={builderExpand}
          showExpandButton={showBuilderExpandButton}
          code={generatedCode}
        />
      </Modal>
      <div class={twMerge('py-8 text-gray-500 dark:text-gray-400', className)}>
        <div class={twMerge(classDiv3, div3Class)}>
          {#each filteredEntries as [name, Component] (name)}
            {#if name !== 'Icon'}
              <button
                class="group relative flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 hover:scale-105 dark:border-gray-800 dark:bg-gray-800"
                onclick={() => updateIllust(name)}
                aria-label="modal-button"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-2 right-2 hidden group-hover:block"
                  ><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path
                    d="M14 4l-4 16"
                  ></path></svg
                >
                <Component
                  size={defaultSize}
                  color={selectedColor}
                  mood={selectedMood}
                  {...restProps}
                ></Component>

                <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {name}
                </span>
              </button>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
