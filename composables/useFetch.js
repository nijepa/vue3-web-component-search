export const useFetch = async (method, data = undefined) => {
  try {
    const JSON_HEADER = "application/json";
    const headers = [["Accept", JSON_HEADER]];
    const requestInit = {
      method,
      headers: new Headers(headers),
    };
    const response = await fetch(
      "https://incentivemall.srv-test05.cadooz.systems/mall/rest/catalog/getitems",
      requestInit
      // {
      //   method,
      //   // body: JSON.stringify(data),
      //   //dataType: 'json',
      //   headers: {
      //     'Content-type': 'application/json'
      //   }
      //   //ContentType: 'application/json',
      // }
    );
    if (response.error) {
      // store.responseMessage = {
      //   isError: response.status === 200 ? response.error : true,
      //   msg: response.errorMessage
      //     ? response.errorMessage
      //     : response.statusText,
      // };
      // return { error: true };
      console.log(1, response);
    } else {
      console.log(2, response);
      if(response.status === 500) {
        //../assets/attribute.product.img_bus_por_200x200.jpg
        return [
          {
            productName: "aaa",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "bbb",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "ccc",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "abb",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "bcc",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "cca",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "bac",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "bcc",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "cca",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
          {
            productName: "bac",
            productLogoSmall: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            url: '#'
          },
        ];
      }
      return response.json();
    }
  } catch (error) {
    console.log("Error: ", error);
    // store.responseMessage.isError = true;
    // store.responseMessage.msg = error;
    return [
      {
        productName: "aaa",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "bbb",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "ccc",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "abb",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "bcc",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "cca",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "bac",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "bcc",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "cca",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
      {
        productName: "bac",
        productLogoSmall: "../assets/attribute.product.img_bus_por_200x200.jpg",
        url: '#'
      },
    ];
  }
};
