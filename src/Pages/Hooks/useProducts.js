import React, { useEffect, useState } from 'react';
// import useAuth from './useAuth';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://rocky-mountain-28255.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)


            })
            .finally(() => setLoading(false))
    }, [])





    return { products, setProducts, loading, setLoading };
};

export default useProducts;