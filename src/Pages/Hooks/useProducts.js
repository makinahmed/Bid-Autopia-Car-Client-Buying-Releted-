import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useProducts = () => {
    const [products,setProducts] = useState([])
    const { loading, setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
                 
            })
    }, [])





    return {products,setProducts,loading,setLoading};
};

export default useProducts;