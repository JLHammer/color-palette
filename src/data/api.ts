type RGB = [number, number, number];
type ColorInput = RGB | "N";

export async function fetchPalette(
  input: ColorInput[] = ["N", "N", "N", "N", "N"],
  model = "default",
): Promise<RGB[]> {
  const res = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({ model, input }),
  });
  const data = await res.json();
  return data.result;
}

export function rgbToHex([r, g, b]: RGB): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}
