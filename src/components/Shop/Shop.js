import { useEffect,useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {

    const [products, setProducts]= useState([]);
    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data)});
    }, [])


    const handleAddToCart = (product) => {
            console.log(product);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products:</h3>
                {
                    products.map(product => <Product product={product} key={product.key} />)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h4>Items Ordered: </h4>
            </div>
        </div>
    );
};

export default Shop;