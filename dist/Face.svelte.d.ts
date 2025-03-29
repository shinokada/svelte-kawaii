import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type FaceProps_ = typeof __propDef.props;
export { FaceProps_ as FaceProps };
export type FaceEvents = typeof __propDef.events;
export type FaceSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class Face extends SvelteComponentTyped<FaceProps_, FaceEvents, FaceSlots> {
}
