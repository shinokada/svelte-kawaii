# Svelte Kawaii

[![Version](https://img.shields.io/npm/v/svelte-kawaii.svg?style=flat-square)](https://www.npmjs.com/package/svelte-kawaii)
![npm](https://img.shields.io/npm/dt/svelte-kawaii.svg)

Svelte Kawaii is a Svelte port of [React Kawaii](https://react-kawaii.vercel.app/), offering cute SVG illustrations to add adorable characters to your Svelte applications. A simple way to bring some cuteness to your UI.

<p align="center">
  <img src="https://raw.githubusercontent.com/shinokada/svelte-kawaii/refs/heads/main/static/images/svelte-kawaii.png"alt="Svelte Kawaii">
</p>

## Installation

```sh
pnpm i -D svelte-kawaii
```

## Props

```md
- size = 240,
- mood = 'blissful',
- color = '#A6E191',
- uniqueId = crypto.randomUUID(),
- ariaLabel = 'astronaut',
- title,
- desc,
- ...restProps
```

## Types

```ts
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
  desc?: DescType;
};
```

## Usage

```svelte
<script lang="ts">
  import { Astronaut } from 'svelte-kawaii';
</script>

<Astronaut size={240} mood="happy" color="#ffb3ba" />
```
