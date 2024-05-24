import React from 'react'

const Card = ({product}) => {
  let  {image, desc, price, title} = product

    return (
        <div className='border-2 w-96 bg-black rounded-md'>
            <div className='h-80'>
                <img src={image} alt="" className='h-full w-full' />
            </div>
            <div className='p-[13px] text-white space-y-3'>
                <div className='text-lg font-bold'>{title}</div>
                <div>{desc}</div>
                <div>{price}</div>

                <button className='bg-red-500 text-white text-lg font-semibold p-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-red-500'>+ ADD TO BUCKET</button>
            </div>
        </div>
    )
}

export default Card
