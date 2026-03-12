export const setActive = (colors: string[]): void => {
  const root = document.documentElement;

  colors.forEach((hex, index) => {
    root.style.setProperty(`--palette-color-${index}`, hex);
  });

  const gradientStops = colors
    .map((_, i) => `var(--palette-color-${i})`)
    .join(", ");
  root.style.setProperty(
    "--active-gradient",
    `linear-gradient(-145deg, ${gradientStops})`,
  );
};
