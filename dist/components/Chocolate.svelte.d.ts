import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChocolateProps = typeof __propDef.props;
export type ChocolateEvents = typeof __propDef.events;
export type ChocolateSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props: size: any = 240;
 * @props:mood: any = 'blissful';
 * @props:color: any = '#A6E191';
 * @props:uniqueId: any = crypto.randomUUID();
 */
export default class Chocolate extends SvelteComponentTyped<ChocolateProps, ChocolateEvents, ChocolateSlots> {
}
export {};
