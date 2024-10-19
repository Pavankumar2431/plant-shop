import React from 'react';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";

import './index.css'; // Add your custom styling for modal here


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '400px',
    textAlign: 'center',

  },
};

// Set the app element for accessibility
Modal.setAppElement('#root');

const AddToCart = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Order Confirmation"
    >
      <div className='close-icon'>
        <button onClick={onRequestClose} type='button' className='close-button'>
          <IoMdClose />
        </button>
      </div>
      
      <p className='your-cart'>Your Cart</p>
      <div className='cart'>
      <h2 className='order'>Congratulations Order Placed!</h2>
      <img
        src='https://res.cloudinary.com/dgaxscbrn/image/upload/v1729270736/plant_1_uydepv.png'
        alt='plant'
        className='plant'
      />
      <p className='msg'>Thank you for choosing Chaperone services.
      We will soon get in touch with you!</p>
      <button onClick={onRequestClose} className='modal-button'>Continue Shopping</button>
      </div>
    </Modal>
  );
};

export default AddToCart;
