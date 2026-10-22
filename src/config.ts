/** App Store link — empty until the app is live; the buttons then read "Coming soon". */
export const APP_STORE_URL = "";
export const SITE_URL = "https://atleva.ardasnturk.com";

/** Localized real App Store screenshot (synced from the app by `npm run sync`). */
export function screenshot(language: string, name: string): string {
  return `/screens/${language}/${name}.jpg`;
}
