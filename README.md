# Svelte-Kawaii

Svelte Kawaii is a Svelte port of [React Kawaii](https://react-kawaii.vercel.app/), offering cute SVG illustrations to add adorable characters to your Svelte applications. A simple way to bring some cuteness to your UI.

## Installation

```sh
pnpm i -D svelte-kawaii
```

## Props

- size = 240,
- mood = 'blissful',
- color = '#A6E191',
- uniqueId = crypto.randomUUID()

## Types

- KawaiiMood = 'sad' | 'shocked' | 'happy' | 'blissful' | 'lovestruck' | 'excited' | 'ko';
- size?: number | string;
- color?: string;
- mood?: KawaiiMood;
- uniqueId?: string;

## Usage

```html
<script lang="ts">
	import { Astronaut } from 'svelte-kawaii';
</script>

<Astronaut size="{240}" mood="happy" color="#ffb3ba" />
```
