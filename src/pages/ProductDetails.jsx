import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../utils/productlist';

const ProductDetails = () => {

  const {id} = useParams();
  const findProduct = products?.find((product)=> product?.id === parseInt(id) )

  return (
    <div>
      <div className='border-2 w-96 bg-black rounded-md'>
                <div className='h-80'>
                    <img src={findProduct?.image} alt="" className='h-full w-full' />
                </div>
                <div className='flex items-center p-[13px] text-white space-y-3'>
                    <div className='text-lg font-bold'>{findProduct?.title}</div>
                    <div>{findProduct?.price}</div>
                    <div>{findProduct?.price}</div>

                </div>

                <div className='text-white p-3'>
                    {findProduct?.description}
                </div>
                <button className='bg-red-500 text-white text-lg font-semibold p-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-red-500'>+ ADD TO BUCKET</button>
            </div>
    </div>
  )
}

export default ProductDetails
