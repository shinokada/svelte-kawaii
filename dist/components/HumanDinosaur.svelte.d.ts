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
declare const HumanDinosaur: import("svelte").Component<Props, {}, "">;
type HumanDinosaur = ReturnType<typeof HumanDinosaur>;
export default HumanDinosaur;
