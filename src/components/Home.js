import React from "react";
import "./Home.css";

//here we will receive props from HomeContainer for calling addToCartHandler() and removeFromCartHandler() on button click
const Home = (props) => {
  console.warn("home: ", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="image-wrapper item">
          <img
            className="item-image"
            src="https://i.pinimg.com/474x/eb/e8/7d/ebe87d027781a3c4b3ae53f138a7dc72.jpg"
          />
        </div>
        <div className="text-wrapper item">
          <div>I-Phone</div>

          <div>Price: $1000.00</div>
        </div>
        <div className="btn-wrapper item">
          <button
            className="add-button"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i phone 11" })
            }
          >
            Add To Cart
          </button>

          <button
            className="add-button"
            onClick={() => props.removeFromCartHandler()}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
