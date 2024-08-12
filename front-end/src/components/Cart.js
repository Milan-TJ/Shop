import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useSelected } from "../Helper/selectedContext";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { CartProducts, deleteCart } from "../Helper/Helper";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export default function Cart() {
  const navigate = useNavigate();
  const { setItem } = useSelected();
  const [cartProduct, setCartProducts] = useState();
  const [cartItems, setCartItems] = useState();
  const fetchProducts = async () => {
    const response = await CartProducts();
    setCartProducts(response.products);
    setCartItems(response.cart_items);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleBuyButtonClick = ({ item, index }) => {
    setItem({
      category: item.category,
      description: item.description,
      image: item.image,
      id: item.id,
      name: item.name,
      price: item.price * cartItems[index].quantity,
      quantity: cartItems[index].quantity,
    });
    navigate("/checkout");
  };
  const handleRemoveButtonClick = async (item) => {
    const response = await deleteCart({ values: item }).then((res) => {
      toast("item deleted");
      fetchProducts();
    });
  };

  const handleQuantity = ({ item, index, type }) => {
    const updatedCartProducts = [...cartItems];
    const currentItem = updatedCartProducts[index];
    let updatedQuantity = currentItem.quantity;

    switch (type) {
      case "PLUS":
        updatedQuantity++;
        break;
      case "MINUS":
        if (updatedQuantity > 1) {
          updatedQuantity--;
        }
        break;
      default:
        break;
    }

    currentItem.quantity = updatedQuantity;
    setCartItems(updatedCartProducts);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <section className="cart1">
        <div className="mycart">
          <div class="cart">
            <h2>Your Shopping Cart</h2>
            {cartProduct && (
              <>
                {cartProduct?.map((item, index) => (
                  <div class="cart-item" key={index}>
                    <div class="cart-item-image">
                      <img
                        class="product-image"
                        src={`http://127.0.0.1:8000${item?.image}`}
                      />
                    </div>
                    <div class="cart-item-info">
                      <div class="product-info">
                        <h3>{item?.name}</h3>
                        <p> MRP:{item?.price * cartItems[index].quantity} </p>
                      </div>
                      <div class="product-quanity">
                        <button
                          id="quantity-down"
                          className="qua-btn"
                          onClick={() =>
                            handleQuantity({
                              item: item,
                              index: index,
                              type: "MINUS",
                            })
                          }
                        >
                          -
                        </button>
                        <button
                          id="quantity-up"
                          className="qua-btn"
                          onClick={() =>
                            handleQuantity({
                              item: item,
                              index: index,
                              type: "PLUS",
                            })
                          }
                        >
                          +
                        </button>
                        <div class="total-quantity" id={`${index}_${item.id}`}>
                          Quantity : {cartItems[index].quantity}
                        </div>
                        {/* <p class="total-price">Total Price available at checkout</p> */}
                      </div>
                      <Button
                        text={"Buy Now"}
                        padding={"0.5em"}
                        bgcolor={"gold"}
                        onClick={() =>
                          handleBuyButtonClick({ item: item, index: index })
                        }
                        radius={"0.5"}
                        customClass={"btnBuy"}
                      />
                    </div>
                    <Button
                      text={"Remove"}
                      onClick={() => handleRemoveButtonClick(item.id)}
                      customClass={"btn5"}
                      bgcolor={"red"}
                    />
                  </div>
                ))}
              </>
            )}
            {cartProduct?.length === 0 && <>{<div className="cart-def">cart is empty, browse some of our products
              <button onClick={()=> navigate("/products")} class="btn-nav">go to products</button>
              </div>}</>}
            <div class="cart-checkout">
              <button class="btn-checkout">Checkout</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
