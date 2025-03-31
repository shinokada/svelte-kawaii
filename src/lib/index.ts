export * from './components'
export { default as Face } from './Face.svelte';

export * from './utils/constants';

export type { KawaiiMood, KawaiiProps, KawaiiFaceProps } from './types';

export const getFaceScale = (size: number) => {
	return size / 66;
};
