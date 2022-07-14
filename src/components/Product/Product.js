import React from 'react';
import './Product.css';
const Product = ({product,handleAddToCart}) => {
    const {name, img, seller, price, stock}= product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="productDetail">
                <h4 className="productName">{name}</h4>
                <h5>Seller:{seller}</h5>
                <h5>price:{price}</h5>
                <p>Only {stock} left in stock: Order soon..</p>
                <button className="purchaseButton" onClick={()=>handleAddToCart(product,price)} >add to cart</button>
            </div>

        </div>
    );
};

export default Product;