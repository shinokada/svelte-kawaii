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
 * @props: mood: any = 'blissful';
 * @props:uniqueId: any = crypto.randomUUID();
 * @props:transform: any = '';
 */
export default class Face extends SvelteComponentTyped<FaceProps_, FaceEvents, FaceSlots> {
}
