// NOGET AF KASPERS
// export async function fetchData() {
//   const url = "http://colormind.io/api/";
//   const body = JSON.stringify({ model: "default" });

//   try{
//     let response = await fetch(url, {method: 'POST', body: body});

//   }
// }

// Claude
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
