import type { SVGAttributes } from 'svelte/elements';
export type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
export interface KawaiiProps extends SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    mood?: KawaiiMood;
    uniqueId?: string;
}
export type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
};
