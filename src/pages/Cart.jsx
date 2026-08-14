import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../css/cart.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);


  const total = cart.reduce(
  (sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
  },
  0
);


  return (
    <>
      


      <section className="cart-section">


        <h1>
          Your Shopping Cart 🛒
        </h1>



        {cart.length === 0 ? (

          <div className="empty-cart">

            <h2>
              Your cart is empty 🌱
            </h2>

            <p>
              Add some beautiful plants to start shopping.
            </p>

            <Link to="/shop">
              <button>
                Continue Shopping
              </button>
            </Link>

          </div>


        ) : (


          <div className="cart-container">


            <div className="cart-items">


              {cart.map((item) => (

                <div className="cart-card" key={item.id}>


                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="cart-info">


                    <h2>
                      {item.name}
                    </h2>


                    <p className="category">
                      {item.category}
                    </p>


                    <h3>
                      Rs. {item.price}
                    </h3>


                    <div className="quantity-box">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>


                      <span>
                        {item.quantity}
                      </span>


                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>


                    </div>


                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>


                  </div>


                </div>

              ))}


            </div>




            <div className="cart-summary">


              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {cart.length}
                </span>

              </div>



              <div className="summary-row total">

                <span>
                  Total
                </span>

                <span>
                  Rs. {total}
                </span>

              </div>



              <Link to="/checkout">

                <button className="checkout-btn">
                  Proceed To Checkout
                </button>

              </Link>


            </div>


          </div>


        )}


      </section>


      

    </>
  );
}


export default Cart;