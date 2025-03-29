import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaceProps = typeof __propDef.props;
export type FaceEvents = typeof __propDef.events;
export type FaceSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class Face extends SvelteComponentTyped<FaceProps, FaceEvents, FaceSlots> {
}
export {};
