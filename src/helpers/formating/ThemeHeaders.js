export default function ThemeHeaders(theme) {
  return `text-${theme || "white"} md:text-${theme || "white"}`;
}
