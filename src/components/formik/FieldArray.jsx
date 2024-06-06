import { Form, Formik, FieldArray } from 'formik'
import React from 'react'

const FieldArrays = () => {
    const initialValues = {
        students: [
            {
                stdName: "",
                stdContact: "",
                stdEmail: "",
                stdAddress: ""
            }
        ]
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log("values", values)
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <FieldArray name="students">
                            {(arrayHelpers) => (
                                <>
                                    {values.students.map((std, index) => (
                                        <div className='flex items-center'>
                                            <div>
                                                <input
                                                    id={`students.${index}.stdName`}
                                                    placeholder='stdName'
                                                    name={`students.${index}.stdName`}
                                                    type="text"
                                                    onChange={(e) => setFieldValue(`students.${index}.stdName`, e.target.value.toUpperCase())}
                                                    className='ml-14 mt-4 border border-gray-700 w-60 p-2'
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    id={`students.${index}?.stdContact`}
                                                    placeholder='stdContact'
                                                    name={`students.${index}?.stdContact`}
                                                    type="text"
                                                    onChange={(e) => setFieldValue(`students.${index}.stdContact`, e.target.value.toUpperCase())}
                                                    className='ml-14 mt-4 border border-gray-700 w-60 p-2'
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    id={`students.${index}.stdEmail`}
                                                    placeholder='stdEmail'
                                                    name={`students.${index}.stdEmail`}
                                                    type="text"
                                                    onChange={(e) => setFieldValue(`students.${index}.stdEmail`, e.target.value.toUpperCase())}
                                                    className='ml-14 mt-4 border border-gray-700 w-60 p-2'
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    id={`std.[${index}]?.stdAddress`}
                                                    placeholder='stdAddress'
                                                    name={`std.[${index}]?.stdAddress`}
                                                    type="text"
                                                    onChange={(e) => setFieldValue(`students.${index}.stdAddress`, e.target.value.toUpperCase())}
                                                    className='ml-14 mt-4 border border-gray-700 w-60 p-2'
                                                />
                                            </div>

                                            <div>
                                                {
                                                    index === 0 ? <button onClick={() => arrayHelpers.push({
                                                        stdName: "",
                                                        stdContact: "",
                                                        stdEmail: "",
                                                        stdAddress: ""
                                                    })} type='button' className='px-10 py-2 bg-gray-800 text-white rounded-md mt-10 ml-20'>+ std</button>
                                                        : <button onClick={() => arrayHelpers.remove(index)} type='button' className='px-10 py-2 bg-red-800 text-white rounded-md mt-10 ml-20'>- std</button>
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>

                        <button type='submit' className='px-10 py-2 bg-gray-800 text-white rounded-md mt-10 ml-20'>Submit</button>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

export default FieldArrays
