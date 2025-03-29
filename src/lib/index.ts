export { default as Astronaut } from './Astronaut.svelte';
export { default as Backpack } from './Backpack.svelte';
export { default as Browser } from './Browser.svelte';
export { default as Cat } from './Cat.svelte';
export { default as Chocolate } from './Chocolate.svelte';
export { default as CreditCard } from './CreditCard.svelte';
export { default as Cyborg } from './Cyborg.svelte';
export { default as File } from './File.svelte';
export { default as Folder } from './Folder.svelte';
export { default as Ghost } from './Ghost.svelte';
export { default as HumanCat } from './HumanCat.svelte';
export { default as HumanDinosaur } from './HumanDinosaur.svelte';
export { default as IceCream } from './IceCream.svelte';
export { default as Mug } from './Mug.svelte';
export { default as Planet } from './Planet.svelte';
export { default as SpeechBubble } from './SpeechBubble.svelte';
export { default as Face } from './Face.svelte';

export * from './utils/constants';

export type { KawaiiMood, KawaiiProps, KawaiiFaceProps } from './types';

export const getFaceScale = (size: number) => {
	return size / 66;
};
