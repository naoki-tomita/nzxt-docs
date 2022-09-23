export function isDarkMode() {
  if (isSSR()) {
    return false;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches === true
}

function isSSR() {
  return typeof window === "undefined";
}