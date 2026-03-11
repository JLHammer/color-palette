export const applyGradient = (colors: string[]): void => {
  const root = document.documentElement;

  colors.forEach((hex, index) => {
    root.style.setProperty(`--palette-color-${index}`, hex);
  });

  const stops = colors.map((_, i) => `var(--palette-color-${i})`).join(", ");
  root.style.setProperty("--active-gradient", `radial-gradient(circle, ${stops})`);
};