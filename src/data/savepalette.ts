// array of arrays with numbers representing RGB values, e.g. [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
export function savePalette(data: Array<Array<number>>) {
  if (!data) return;

  const existingPalettes = localStorage.getItem("userPalettes");
    

  if (existingPalettes) {
    const palettes = JSON.parse(existingPalettes);
    palettes.push(data);
    localStorage.setItem("userPalettes", JSON.stringify(palettes));
  } else {
    localStorage.setItem("userPalettes", JSON.stringify([data]));
  }
}
