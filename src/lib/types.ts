import type { SVGAttributes } from 'svelte/elements';

export type TitleType = {
  id?: string;
  title?: string;
};

export type DescType = {
  id?: string;
  desc?: string;
};

export type KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';

export type KawaiiProps = SVGAttributes<SVGElement> & {
  size?: number | string;
  color?: string;
  mood?: KawaiiMood;
  uniqueId?: string;
  ariaLabel?: string;
  title?: TitleType;
  focusable?: 'true' | 'false' | 'auto';
  desc?: DescType;
};

export type KawaiiFaceProps = {
  mood?: KawaiiMood;
  uniqueId?: string;
  transform?: string;
};
