import React, { useState } from 'react'

const Form = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");

    const [userNameError, setUserNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [fileError, setFileError] = useState("")

    console.log(userNameError, emailError)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName === "") {
            setUserNameError("UserName is Required")
        }

        if (email === "") {
            setEmailError("Email is Required")
        }

        if (image === "") {
            setFileError("image is Required")
        } else if (image.type !== "image/jpeg") {
            setFileError("Just jpeg file is Required")
        }
        console.log(userName, email, image)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='w-1/2 m-10 border'>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type='text' id='userName' onChange={(e) => {
                        if(e.target.value){
                            setUserNameError("")
                        }
                        setUserName(e.target.value)
                    }} className='ml-4 border border-gray-700 w-96 p-2' />

                    {userNameError && <p className='text-red-500'>{userNameError}</p>}

                </div>
                <div>
                    <label htmlFor="userName">Email</label>
                    <input type='text' onChange={(e) => {
                        if(e.target.value){
                            setEmailError("")
                        }
                        setEmail(e.target.value)}} id='Email' className='ml-14 mt-4 border border-gray-700 w-96 p-2' />
                    {emailError && <p className='text-red-500'>{emailError}</p>}
                </div>

                <div>
                    <label htmlFor="userName">Email</label>
                    <input type='file' onChange={(e) => setImage(e.target.files[0])} id='Email' className='ml-14 mt-4 border border-gray-700 w-96 p-2' />
                    {fileError && <p className='text-red-500'>{fileError}</p>}

                </div>

                <div>
                    <button className='px-10 py-2 bg-gray-800 text-white rounded-md mt-10 ml-20'>Save</button>
                </div>
            </div>

        </form>
    )
}

export default Form
