import React from "react";
import Product from "./Product";

const ProductList = () => (
  <h1>
    <Product
      title="Yellow Pail"
      imgUrl="http://placekitten.com/300/200"
      description="On-demand sand castle construction expertise"
      id="1"
      //votes = generateVoteCount()
      submitterAvatarUrl="images/avatars/daniel.jpg"
      productImageUrl="images/products/image-aqua.png"
    />
  </h1>
);

export default ProductList;
