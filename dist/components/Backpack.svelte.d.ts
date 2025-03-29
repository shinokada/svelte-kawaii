import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BackpackProps = typeof __propDef.props;
export type BackpackEvents = typeof __propDef.events;
export type BackpackSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props: size: any = 240;
 * @props:mood: any = 'blissful';
 * @props:color: any = '#A6E191';
 * @props:uniqueId: any = crypto.randomUUID();
 */
export default class Backpack extends SvelteComponentTyped<BackpackProps, BackpackEvents, BackpackSlots> {
}
export {};
