import { React, useState, useEffect, createContext } from 'react';
import axios from 'axios'

// Context
export const Context = createContext()

const Data = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [Products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
            const items = await axios.get('https://fakestoreapi.com/products/')
            setProducts(items.data);
            setLoading(true)
        }
        getData()
    }, [])

    return (
        <>
            <Context.Provider
                value={{
                    Products, loading,
                    cartProducts, setCartProducts,
                    totalPrice, setTotalPrice
                }}>
                {children}
            </Context.Provider>

        </>
    );
};

export default Data;
