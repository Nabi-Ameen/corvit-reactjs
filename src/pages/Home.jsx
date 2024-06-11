import React, { useEffect, useState } from 'react'
import { products } from '../utils/productlist'
import Card from '../components/Card'

const Home = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((res) => setProduct(res))
    },[])

    return (
        <div className='flex flex-wrap gap-6'>

            {
                product?.map((product, index) => {
                    return (
                        <Card product={product} />
                    )
                })
            }

        </div>
    )
}

export default Home
