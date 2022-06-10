import React, {useEffect} from "react";
import { listOrderRequest, getToken } from "../API/fetch";

export const Kitchen = () => {
  let url = "http://localhost:8080/orders";
  let token = getToken();

  useEffect(() => {
    listOrderRequest(url, token).then((res) => {
    console.log('traigo esto',res)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>HOLA SOMOS LA COCINA</h1>
    </div>
  );
};
