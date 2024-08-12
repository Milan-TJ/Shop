import axios from "axios";
import ENV from "../Config";

axios.defaults.baseURL = ENV.SERVER_ADDRESS;

export async function callCategory() {
  try {
    const response = await axios.get(`category/`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function ProductDetails() {
  try {
    const response = await axios.get("/product/api/product/");
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function ProductCat({ values }) {
  try {
    console.log(values,"ProductCat")
    const response = await axios.get(`/product/category/${values}`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function CreateOrder({ values }) {
  try {
    const response = await axios.post(`Order/api/add_order`, values);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function register({ values }) {
  try {
    console.log(values);
    const response = await axios.post("/user/register/", values);
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function login({ values }) {
  try {
    console.log(values);
    const response = await axios.post("user/login/", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
export function getToken() {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
}
export function getuseri_d() {
  const token = JSON.parse(localStorage.getItem("user"));
  return token;
}

export async function payment({ values }) {
  try {
    console.log(values);
    const response = await axios.post("/payment/createpayment/", values);
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function UserDetails() {
  try {
    const token = getToken();
    const response = await axios.get("/user/details/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function FetchCart() {
  try {
    const response = await axios.get(`cart/api/cart_details`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function addToCart({ values }) {
  try {
    console.log(values);
    const response = await axios.post(`cart/api/cart_details`, values);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deleteCart({ values }) {
  try {
    const response = await axios.delete(`cart/api/delete/${values}`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function CartProducts() {
  try {
    const response = await axios.get(`cart/api/fetch`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function GetOrder() {
  try {
    const response = await axios.get(`Order/api/add_order`);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function update_user({ values }) {
  try {
    const user_id = getuseri_d();
    const response = await axios.put(`user/update/${user_id.id}`, values, {});
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
