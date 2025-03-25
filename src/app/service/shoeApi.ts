export const getShoeDetaiLById = async (id: number) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );
    const data = await response.json();

    const datadetailShoe = data.content;
    return datadetailShoe;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getListShoeAPI = async () => {
  try {
    const response = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );

    const data = await response.json();
    const dataListShoe = data.content;

    return dataListShoe;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getListProductByKeyWord = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );

    const data = await response.json();
    const dataListShoe = data.content;

    return dataListShoe;
  } catch (error) {
    console.log("error: ", error);
  }
};
