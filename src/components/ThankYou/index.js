// ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const ThankYou = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        // Redirect to the home page or any other page you want
        navigate('/');
    };

    return (
        <div className="thank-you-container" >
            <h2 className='title'>Thank You!</h2>
            <p className='message'>Thank you for showing interest in Monsterra</p>
            <button className='thank-button' onClick={handleContinueShopping}>
                Continue Shopping
            </button>
        </div>
    );
};




export default ThankYou;
