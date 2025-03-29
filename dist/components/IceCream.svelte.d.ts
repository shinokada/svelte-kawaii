import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IceCreamProps = typeof __propDef.props;
export type IceCreamEvents = typeof __propDef.events;
export type IceCreamSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props: size: any = 240;
 * @props:mood: any = 'blissful';
 * @props:color: any = '#A6E191';
 * @props:uniqueId: any = crypto.randomUUID();
 */
export default class IceCream extends SvelteComponentTyped<IceCreamProps, IceCreamEvents, IceCreamSlots> {
}
export {};
