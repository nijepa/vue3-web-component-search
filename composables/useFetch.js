export const useFetch = async (method, data = undefined) => {
  try {
    const JSON_HEADER = "application/json";
    const headers = [["Accept", JSON_HEADER]]
    const requestInit = {
      method,
      headers: new Headers(headers),
    };
    const response = await fetch('https://incentivemall.srv-test05.cadooz.systems/mall/rest/catalog/getproductteasers', requestInit
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
      console.log(1,response)
    } else {
      console.log(2,response)
      return response.json();
    }
  } catch (error) {
    console.log('Error: ', error);
    // store.responseMessage.isError = true;
    // store.responseMessage.msg = error;
    return [{name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}, {name: 'aaa', img: '../assets/attribute.product.img_bus_por_200x200.jpg'}];
  }
};