export const deletePalette = (index: number) => {
    const existingPalettes: string[][] = JSON.parse(localStorage.getItem("userPalettes") || "[]");

    existingPalettes.splice(index, 1);
    localStorage.setItem("userPalettes", JSON.stringify(existingPalettes));
}