import { type KawaiiProps as Props } from '..';
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
declare const Mug: import("svelte").Component<Props, {}, "">;
type Mug = ReturnType<typeof Mug>;
export default Mug;
