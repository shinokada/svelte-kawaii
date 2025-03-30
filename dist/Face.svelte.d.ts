type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
};
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Types
 * @types: KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko'
 * @type: size?: number | string;
 * @type: color?: string;
 * @type: mood?: KawaiiMood;
 * @type: uniqueId?: string;
 * ## Props
 * @props: mood = 'blissful'
 * @props: uniqueId
 * @props: transform = ''
 */
declare const Face: import("svelte").Component<KawaiiFaceProps, {}, "">;
type Face = ReturnType<typeof Face>;
export default Face;
