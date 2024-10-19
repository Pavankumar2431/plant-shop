### title
Plant Shop - (E-commerce Listing Page)

This project showcases a Product List page for an e-commerce website that sells plants. It includes features like viewing product details, adding products to a shopping cart, a carousel, pagination with "Prev" and "Next" buttons, and a responsive design. Note that the filtering functionality is currently static.

### Features
•	Product List Display: Each product is shown with an image, name, and price.
•	View Product: Button to view more details about a specific product.
•	Add to Cart: Button to add products to the shopping cart.
•	Carousel: A rotating carousel that can be used to display featured products.
•	Static Filter Section: A static filter section is displayed but doesn't dynamically filter the product list.
•	Pagination: Use "Prev" and "Next" buttons to navigate through the product list.
•	Responsive Design: The webpage is fully responsive for mobile, tablet, and desktop views.

### Installation

1.Clone the repository:
    git clone https://github.com/Pavankumar2431/plant-shop.git
    cd plant-shop
2.Install dependencies:
    npm install
3.Start the development server:
    npm start
4.Open your browser and go to:
    http://localhost:3000

### Components

1. AddtoCart Component
Handles the functionality for the React modal. The user will be able to see a confirmation modal upon clicking the "Add to Cart" button of the product.
**Props** 
 -`isOpen`: A boolean indicating whether the modal is open. 
 -`onRequestClose`: A function to handle closing the modal.

2. Carousel Component
Displays a rotating carousel showcasing featured products. The carousel can be navigated with next and previous arrows.

3. FilterCard Component
This component displays a static filter section. The filter options are not interactive yet and do not modify the product list.

4. Footer Component
The footer contains informational content about the website. It provides basic site details but does not have interactive elements.

5. Header Component
The header contains the main navigation links like Home, Plants & Pots, Tools, and user profile/cart information.

6. Home Component
The main landing page displaying the product list.

7. ProductCard Component
Renders individual product cards with buttons to view product details and add to the cart.

**Props** 
product: The product object containing its name, price, and image.

8. ThankYou Component
This component is shown after a user clicks on View button, thanking them for clicking.

9. Pagination Feature
A simple pagination system with "Prev" and "Next" buttons that allow users to browse through the product list. The product list is paginated using static data.

### Error Handling

Target Container Not a DOM Element:
Ensure your modal's root container is correctly defined in the index.html or where the AddtoCartModal is rendered.

### Dependencies

React: A JavaScript library for building user interfaces.
React-DOM: Serves as the entry point to the DOM and server renderers for React.
React-Scripts: Configuration and scripts for Create React App.

### Install the necessary dependencies using:

npm install react react-dom react-scripts
