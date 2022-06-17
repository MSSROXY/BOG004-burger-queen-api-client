import React, { useEffect, useState } from "react";
import { getToken } from "../API/fetch";
import { productsRequest } from "../API/fetch"

export const ProductAdmin = () => {
    // let [products, setProducts] = useState([])
    let url = "http://localhost:8080/products";
    let myToken = getToken();

    useEffect(() => {
        getListOrdersAdmin();
      }, []);

      const getListOrdersAdmin = () => {
        productsRequest(url, myToken).then((res) => console.log(res))
      };
    
    };


  
