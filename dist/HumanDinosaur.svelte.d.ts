import { type KawaiiProps as Props } from './';
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Types & Props
 * type Props = SVGAttributes<SVGElement> & {
 * size?: number | string;
 * color?: string;
 * mood?: KawaiiMood;
 * uniqueId?: string;
 * };
 * let {
 * 	size = 240,
 * 	mood = 'blissful',
 * 	color = '#A6E191',
 * 	uniqueId = crypto.randomUUID(),
 * 	...restProps
 * }: Props = $props();
 */
declare const HumanDinosaur: import("svelte").Component<Props, {}, "">;
type HumanDinosaur = ReturnType<typeof HumanDinosaur>;
export default HumanDinosaur;
