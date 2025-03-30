import { type KawaiiProps as Props } from './';
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Types
 * @type: size?: number | string;
 * @type: color?: string;
 * @type: mood?: KawaiiMood;
 * @type: uniqueId?: string;
 * ## Props
 * @props: size = 240,
 * @props: mood = 'blissful',
 * @props: color = '#A6E191',
 * @props: uniqueId = crypto.randomUUID(),
 * @props: ...restProps
 */
declare const Planet: import("svelte").Component<Props, {}, "">;
type Planet = ReturnType<typeof Planet>;
export default Planet;
