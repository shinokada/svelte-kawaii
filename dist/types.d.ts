import type { SVGAttributes } from 'svelte/elements';
import { MOODS } from './utils/constants.ts';
export type KawaiiMood = (typeof MOODS)[number];
export type KawaiiProps = SVGAttributes<SVGElement> & {
    size?: number | string;
    color?: string;
    mood?: KawaiiMood;
    uniqueId?: string;
};
export type KawaiiFaceProps = {
    mood?: KawaiiMood;
    uniqueId?: string;
    transform?: string;
};
export type FaceProps = {
    mood: "sad" | "shocked" | "happy" | "blissful" | "lovestruck" | "excited" | "ko";
    transform: string;
    uniqueId: string;
};
