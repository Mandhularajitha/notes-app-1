import React from 'react'
import { Link } from 'react-router-dom';
import "./PageNotFound.css";


const PageNotFound = () => {
    return (
        <div className='grid-center'>
            <img className='img-404' src="https://cdn4.vectorstock.com/i/1000x1000/75/83/404-error-page-not-found-plug-graphic-vector-19997583.jpg" alt="404 page" />
            <section className='grid jstfy-ctnt-center'>
                <h1 className='mt-16'>Page Not Found</h1>
                <Link to="/" className='m-auto'>
                    <button className='home-btn'>Home</button>
                </Link>
            </section>
        </div>
    )
}

export { PageNotFound } 