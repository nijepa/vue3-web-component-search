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
            name: "aaa",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "bbb",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "ccc",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "abb",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "bcc",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "cca",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "bac",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "bcc",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "cca",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
          },
          {
            name: "bac",
            img: "https://incentivemall.srv-test05.cadooz.systems/addons/product/389/38988/attribute.product.img_bus_por_200x200.jpg",
            link: '#'
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
        name: "aaa",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "bbb",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "ccc",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "abb",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "bcc",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "cca",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "bac",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "bcc",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "cca",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
      {
        name: "bac",
        img: "../assets/attribute.product.img_bus_por_200x200.jpg",
        link: '#'
      },
    ];
  }
};
