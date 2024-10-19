import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

import AddtoCart from '../AddtoCart';
import './index.css';

const ProductCard = ({ imageUrl, price, name }) => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onClickView = () => {
        navigate('/thankyou');
    };

    const handleAddToCart = () => {
        setModalIsOpen(true); // Open the modal when the item is added to the cart
    };

    const closeModal = () => {
        setModalIsOpen(false); // Close the modal
    };

    return (
        <div className ='product-Container'>
        <div className='heart d-flex justify-content-end'><CiHeart /></div>
        
        <div className="product-card">
            
            <img src={imageUrl} alt='product-image' className='product-image' />
            <h2>{name}</h2>
            <p>${price}</p>
            <div className='d-flex'>
            <button type='button' onClick={onClickView} className='product-view'>View Product</button>
            <button type='button' onClick={handleAddToCart} className='cart-button'>Add to Cart</button>
            </div>
            {/* Use the AddtoCart modal component */}
            <AddtoCart 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </div></div>
    );
};

export default ProductCard;
