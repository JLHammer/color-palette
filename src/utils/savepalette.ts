// Save an array of hex color strings (a palette) to localStorage under "userPalettes" key
export function savePalette(data: string[]) {
  if (!data) return; // Fallback if fetchPalette in api.ts returns null

  // Array of palettes
  const existingPalettes: string[][] = JSON.parse(
    localStorage.getItem("userPalettes") || "[]", // If no existing palettes, start with an empty array
  );

  const newPalette = JSON.stringify(data); // Stringify new palette for comparison

  // Handle duplicate palette; checks if the new palette already exists in existingPalettes
  for (const palette of existingPalettes) {
    if (JSON.stringify(palette) === newPalette) {
      return;
    }
  }

  // Add new palette to the beginning of the array, then save the updated array back to localStorage
  existingPalettes.unshift(data);
  localStorage.setItem("userPalettes", JSON.stringify(existingPalettes));
}
