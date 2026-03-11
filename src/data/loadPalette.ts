export const loadPalette = (): string[][] => {
  const savedPalette = localStorage.getItem("userPalettes");
  if (savedPalette) {
    return JSON.parse(savedPalette);
  }
  return [];
};