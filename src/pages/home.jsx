import React from 'react';
import Header from '../components/Header/Header';
import Product from '../components/Product/Product';

function Home() {
    return (
        <div className="App">
            <Header/>
            <Product/>
        </div>
    );
}

export {Home};