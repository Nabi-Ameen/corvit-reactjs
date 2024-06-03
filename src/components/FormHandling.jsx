import React, { useState } from 'react'

const FormHandling = () => {
    const [person, setPerson] = useState(
        {
            userName: "",
            email: "",
            gender: "",
            qual: [],
        }
    )

    const [error, setError] = useState({
        userName: "",
        email: "",
    })

    const handleQualification = (e) => {
        const { value } = e.target
        if (e.target.checked) {
            setPerson({
                ...person,
                qual: [...person.qual, value]
            })
        } else {
            setPerson({
                ...person,
                qual: person.qual.filter((qual) => qual !== value)
            }
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validation = {}
        if (person.userName === "") {
            validation.userName = "userName Required"
        }
        if (person.email === "") {
            validation.email = "Email Required"
        }

        setError(validation)

        if(Object.keys(validation).length === 0) {
            console.log("person", person)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-1/2 m-10 border'>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type='text' id='userName' onChange={(e) => setPerson({ ...person, userName: e.target.value })} className='ml-4 border border-gray-700 w-96 p-2' />
                    {error?.userName ? <p className='text-red-500'>{error?.userName}</p> : <></>}
                </div>

                <div>
                    <label htmlFor="userName">Email</label>
                    <input type='text' onChange={(e) => setPerson({ ...person, email: e.target.value })} id='Email' className='ml-14 mt-4 border border-gray-700 w-96 p-2' />
                    {error?.email ? <p className='text-red-500'>{error?.email}</p> : <></>}
                </div>

                <div className='flex items-center mt-10 pl-20'>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" value="Male" name='gender' onChange={(e) => setPerson({ ...person, gender: e.target.value })} className='ml-2' />
                    </div>
                    <div className='pl-10'>
                        <label htmlFor="male">female</label>
                        <input type="radio" value="female" name='gender' onChange={(e) => setPerson({ ...person, gender: e.target.value })} id='female' className='ml-2 ' />
                    </div>
                </div>

                <div className='flex items-center mt-10 pl-20'>
                    <div>
                        <label htmlFor="male">PHD</label>
                        <input type="checkbox" value="PHD" onChange={handleQualification} className='ml-2' />
                    </div>
                    <div className='pl-10'>
                        <label htmlFor="male">MS</label>
                        <input type="checkbox" value="MS" onChange={handleQualification} className='ml-2' />
                    </div>

                    <div className='pl-10'>
                        <label htmlFor="male">BS</label>
                        <input type="checkbox" value="BS" onChange={handleQualification} className='ml-2' />
                    </div>

                    <div className='pl-10'>
                        <label htmlFor="male">FA</label>
                        <input type="checkbox" value="FA" onChange={handleQualification} className='ml-2' />
                    </div>

                </div>

                <div>
                    <button className='px-10 py-2 bg-gray-800 text-white rounded-md mt-10 ml-20'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default FormHandling
