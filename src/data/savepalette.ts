export function savePalette(data: Array<Array<number>>) {
  if (!data) return; // Safety net in case fetchPalette in api.ts returns null, we handle error in RandomPalette.ts

  const existingPalettes = JSON.parse(
    localStorage.getItem("userPalettes") || "[]",
  );
  existingPalettes.push(data);
  localStorage.setItem("userPalettes", JSON.stringify(existingPalettes));
}
