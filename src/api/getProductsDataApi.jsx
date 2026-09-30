import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async()=>
  {
    try {
      console.log("Api running");
      let res = await axiosInstance.get('/products')
      return res.data.products;
    } catch (error) {
      console.log('Error in Product API',error);
    } 
  }