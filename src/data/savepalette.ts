export function savePalette(data: string[]) {
  if (!data) return; // Safety net in case fetchPalette in api.ts returns null, we handle error in RandomPalette.ts

  const existingPalettes = JSON.parse(
    localStorage.getItem("userPalettes") || "[]",
  );
  existingPalettes.unshift(data);
  localStorage.setItem("userPalettes", JSON.stringify(existingPalettes));
}
