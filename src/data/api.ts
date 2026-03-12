export const fetchPalette = async () => {
  const url = "http://colormind.io/api/";
  const body = JSON.stringify({ model: "default" });

  try {
    let response = await fetch(url, { method: "POST", body: body });
    if (!response.ok) {
      throw new Error();
    }
    let data = await response.json();
    return data.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};
