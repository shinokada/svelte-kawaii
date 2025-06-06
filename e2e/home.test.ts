import { expect, test } from '@playwright/test';

const title = 'Svelte Kawaii - Cute SVG Illustrations';
const description =
  'Svelte Kawaii is a Svelte port of React Kawaii, offering cute SVG illustrations to add adorable characters to your Svelte applications. A simple way to bring some cuteness to your UI.';
const keywords =
  'svelte,kawaii,illustrations,svg,adorable,components,ui,interface,cartoon,charactermascot,react-kawaii,design';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-kawaii';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
  await expect(page.getByRole('heading', { name: title, level: 1 })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle(title);
});

test('index page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', description);
});

test('index page has expected meta keywords', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', keywords);
});

test('index page has expected meta og', async ({ page, baseURL }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', title);
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', description);
  const metaOgUrl = page.locator('meta[property="og:url"]');
  const url = baseURL + '/';
  await expect(metaOgUrl).toHaveAttribute('content', url);
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute('content', imgUrl);
});

test('index page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', title);
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', description);
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute('content', imgUrl);
});
