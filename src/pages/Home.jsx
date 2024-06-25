import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    const [product, setProduct] = useState([])
    const getData = async()=>{
       const res = await axios.get("https://fakestoreapi.com/products")
       setProduct(res.data)
    }
    useEffect(()=>{
            getData()
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

export default Home;
