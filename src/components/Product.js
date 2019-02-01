import React from "react";

const Product = () => (
  <div className="item">
    <div className="image">
      <h2>image here</h2>
      <img src="images/products/image-aqua.png" />
    </div>
    <div className="middle aligned content">
      <div className="description">
        <p>Fort Knight</p>
        <p>Authentic renaissance actors, delivered in just two weeks.</p>
      </div>
      <div className="extra">
        <span>Submitted by:</span>
        <img className="ui avater image" src="images/avatars/daniel.jpg" />
      </div>
    </div>
  </div>
);

export default Product;
