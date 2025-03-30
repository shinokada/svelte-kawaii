type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
};
/**
 * [Go to docs](https://svelte-kawaii.codewithshin.com/)
 * ## Types & Props
 * type Props = SVGAttributes<SVGElement> & {
 * size?: number | string;
 * color?: string;
 * mood?: KawaiiMood;
 * uniqueId?: string;
 * };
 * let { mood = 'blissful', uniqueId, transform = '' }: KawaiiFaceProps = $props();
 */
declare const Face: import("svelte").Component<KawaiiFaceProps, {}, "">;
type Face = ReturnType<typeof Face>;
export default Face;
