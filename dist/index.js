export * from './components';
export { default as Face } from './Face.svelte';
export * from './utils/constants';
export const getFaceScale = (size) => {
    return size / 66;
};
