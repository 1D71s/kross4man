import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Basket } from './pages/Basket'
import { Home } from './pages/home.jsx'
import { Form } from './pages/Form.jsx';
import './App.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'element={<Layout/>} >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/form' element={<Form/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
