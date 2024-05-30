import React, { useState } from 'react'

const FormHandling = () => {

    const [userName, setUserName] = useState("Ameen");
    const [email, setEmail] = useState("ameen@gmail.com");

    const handleName = (e) => {
        setUserName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userName, email)
    }



    return (
        <div className='flex justify-center mt-10'>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className='w-1/2 space-y-4 '>
                    <div>
                        <label htmlFor="">User Name</label>
                        <input type='text' id='' name='' value={userName} onChange={(e) => handleName(e)} className=' outline ml-3' />
                    </div>

                    <div>
                        <label htmlFor="">User Email</label>
                        <input type='text' id='' name='' value={email} className=' outline ml-3' onChange={(e) => handleEmail(e)} />
                    </div>
                </div>


                <button onClick={handleSubmit} type='button' className='bg-black text-white p-2 rounded-md mt-10'>Submit</button>
            </form>


        </div>
    )
}

export default FormHandling
