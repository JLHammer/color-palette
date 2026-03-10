addEventListener("DOMContentLoaded", () => {
  const savedPalette = localStorage.getItem("userPalette");
  if (savedPalette) {
    const data = JSON.parse(savedPalette);
    return data;
  }
});
