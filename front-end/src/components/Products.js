import React from "react";
import { useEffect, useState } from "react";
import { ProductDetails, ProductCat } from "../Helper/Helper";
import { useSelected } from "../Helper/selectedContext";
import "./Products.css";
import { useAuth } from "../store/Store";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Helper/Helper";

export default function Products(props) {
  const navigate = useNavigate();
  const [product, setproducts] = useState();
  const { setItem } = useSelected();
  const {state}= useAuth();

  useEffect(() => {
    const fetchDetails = async () => {
      if (!props.filter) {
        ProductDetails().then((res) => {
          console.log(res);
          setproducts(res);
        });
      } else {
        ProductCat({ values: props.filter }).then((res) => {
          console.log(res);
          setproducts(res);
        });
      }
    };
    // fetchuser();
    fetchDetails();
  }, [props.filter]);

  const onAddtocartBtn = async (item) => {
    await addToCart({ values: { productid: item.id , userid: JSON.parse(state.user).id }})
      .then((res) => {
        toast("Added to Cart");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.productid[0]);
        // toast.error('item already exist in cart')
      });
    console.log("add to cart", item);
  };
  const onBuyNowBtn =async (item) => {
    setItem(item);
    await addToCart({ values: { productid: item.id , userid: JSON.parse(state.user).id }})
    navigate("/checkout");
  };

  return (
    <div className="ProductsItemContainer">
      <Toaster position="top-center" reverseOrder={false} />
      {product?.map((item, index) => {
        return (
          <div className="Item">
            <img
              src={`http://127.0.0.1:8000${item.image}`}
              alt={item.name}
              className="cover"
            />
            <span className="name">{item.name}</span>
            <span className="stamp">{item.description}</span>
            <span className="Btnlist">
              <button
                id={item.name}
                onClick={() => {
                  onBuyNowBtn(item);
                }}
                className="buy-btn itembtn"
              >
                Buy now
                <ShoppingCartCheckoutIcon color="primary" />
              </button>
              <button
                id={item.name}
                on
                onClick={() => {
                  onAddtocartBtn(item);
                }}
                className="add-btn itembtn"
              >
                Add to cart
                <AddShoppingCartIcon color="primary" />
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
