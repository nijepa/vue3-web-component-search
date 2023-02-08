import { resolveUrl } from "../utils/resolveUrl";
export const useFetch = async (method, data = undefined) => {
  try {
    const URL = resolveUrl("rest/catalog/getitems");
    const JSON_HEADER = "application/json";
    const headers = [["Accept", JSON_HEADER]];
    const requestInit = {
      method,
      headers: new Headers(headers),
    };
    const response = await fetch(URL, requestInit);
    console.log("success", response);
    if (response.status === 500) {
      //../assets/attribute.product.img_bus_por_200x200.jpg
      return [
        {
          productName: "aaa",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "bbb",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "ccc",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "abb",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "bcc",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "cca",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "bac",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "bcc",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "cca",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
        {
          productName: "bac",
          productLogoSmall:
            "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
          productNumber: "1",
          searchwords: [],
          listArticle: false,
        },
      ];
    }
    return response.json();
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};
