import React, { useState } from 'react';
import Header from "../Header";
import ProductCard from "../ProductCard";
import MyCarousel from '../Carousel';
import FilterCard from "../FilterCard";
import Footer from '../Footer';
import './index.css';

const products = [
    {
        id: 1,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271639/57a26487b27ba64aecadd2f4d7e83e50_owueji.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 2,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271725/e3d2febe446efa4b8f13ccd187d266f5_lnnv9q.jpg',
        price: 299,
        name: 'Monsterra',
    },
    {
        id: 3,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729317344/8150f68f85e80b39ed12017b8222dd1a_s98hjc.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 4,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271725/e3d2febe446efa4b8f13ccd187d266f5_lnnv9q.jpg',
        price: 299,
        name: 'Monsterra',
    },
    {
        id: 5,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729317344/8150f68f85e80b39ed12017b8222dd1a_s98hjc.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 6,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271725/e3d2febe446efa4b8f13ccd187d266f5_lnnv9q.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 7,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729317344/8150f68f85e80b39ed12017b8222dd1a_s98hjc.jpg',
        price: 299,
        name: 'Monsterra',
    },
    {
        id: 8,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271639/57a26487b27ba64aecadd2f4d7e83e50_owueji.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 9,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729317344/8150f68f85e80b39ed12017b8222dd1a_s98hjc.jpg',
        price: 299,
        name: 'Monsterra',
    },
    { 
        id: 10,
        imageUrl: 'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729271725/e3d2febe446efa4b8f13ccd187d266f5_lnnv9q.jpg',
        price: 299,
        name: 'Monsterra',
    }
];

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
    const productsPerPage = 6; // Number of products to display per page (initially 6)

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle the "Next" button click
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    // Handle the "Prev" button click
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="d-flex categories-button">
                    <button type="button" className="plant-button">Plants</button>
                    <button type="button" className="post-button">Post</button>
                </div>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                </p>
                <h2>Nursery</h2>
                <MyCarousel />
                <div className="products-card">
                    <FilterCard />
                    <div className="products">
                        <ul className="products-list">
                            {currentProducts.map((eachPlant) => (
                                <li key={eachPlant.id}>
                                    <ProductCard 
                                        imageUrl={eachPlant.imageUrl} 
                                        price={eachPlant.price} 
                                        name={eachPlant.name} 
                                    />
                                </li>
                            ))}
                        </ul>

                        <div className="pagination-controls">
                            <button 
                                className="prev-button" 
                                onClick={handlePrev} 
                                disabled={currentPage === 1} // Disable "Prev" on the first page
                            >
                                Prev
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button 
                                className="next-button" 
                                onClick={handleNext} 
                                disabled={currentPage === totalPages} // Disable "Next" on the last page
                            >
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
