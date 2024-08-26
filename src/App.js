import './css/index.css'
import MainPage from './components/MainPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ShopCartBlock from './components/ShopCartBlock'
import React, { useState } from 'react';
import Items from './components/Items'

const App = () => {
    const [isCartActive, setIsCartActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCart = () => setIsCartActive(!isCartActive);

    const addToCart = (id) => {
        const itemToAdd = Items.find(item => item.id === id);
        if (itemToAdd) {
            setCartItems(prevItems => {
                const updatedCartItems = Items.map(item => {
                const existingCartItem = prevItems.find(cartItem => cartItem.id ===item.id);
                if (existingCartItem) {
                    return { ...existingCartItem, count: existingCartItem.count + (item.id === id ? 1 : 0) };
                }  
                return item.id === id ? { ...item, count: 1 } : item;
            });
            return updatedCartItems.filter(cartItem => cartItem.count > 0);
        });
            
            console.log('Added item:', itemToAdd);
        } else {
            console.log('Item not found');
        }
    };

    return (
        <>
            <Header />
            <MainPage isCartActive={isCartActive} toggleCart={toggleCart} addToCart={addToCart} />
            <ShopCartBlock isActive={isCartActive} cartItems={cartItems} />
            <Footer />
        </>
    );
};

export default App;


