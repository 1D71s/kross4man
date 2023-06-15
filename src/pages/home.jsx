import React from 'react';
import Header from '../components/Header/Header';
import Product from '../components/Product/Product';
import Search from '../components/Search/Search';

function Home() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Product/>
        </div>
    );
}

export {Home};