type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
};
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Props
 * @props: mood: any = 'blissful';
 * @props:uniqueId: any;
 * @props:transform: any = '';
 */
declare const Face: import("svelte").Component<KawaiiFaceProps, {}, "">;
type Face = ReturnType<typeof Face>;
export default Face;
