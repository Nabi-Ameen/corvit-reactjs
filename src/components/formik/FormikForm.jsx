import { useFormik } from 'formik'
import * as Yup from 'yup';

const FormikForm = () => {

    const banglaLang = /^([A-Za-z]|\p{InBengali})$/i;

    const {handleSubmit, handleChange, setFieldValue, values, errors, resetForm} = useFormik({
        enableReinitialize: true,
        validateOnChange: true,
        initialValues: {
            totalMarks: '',
            obtMarks: '',
            average: '',
        },
        // validationSchema: Yup.object({
        //     firstName: Yup.string()
        //       .max(15, 'Must be 15 characters or less')
        //       .matches(banglaLang, "Please type in string")
        //       .required('Required'),
        //     lastName: Yup.string()
        //       .max(20, 'Must be 20 characters or less')
        //       .required('Required'),
        //     email: Yup.string().email('Invalid email address').required('Required'),
        //   }),
        onSubmit: (values) => {
            console.log(values);
            resetForm()
        },
    })


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="totalMarks">totalMarks</label>
                <input
                    id="totalMarks"
                    name="totalMarks"
                    type="text"
                    value={values.totalMarks}
                    onChange={(e)=> setFieldValue("totalMarks", e.target.value.toUpperCase() )}
                    className='ml-14 mt-4 border border-gray-700 w-96 p-2'
                />
                {/* {
                    errors?.firstName ? <div className='text-red-500'>{errors?.firstName}</div> : null
                } */}
            </div>

            <div>
                <label htmlFor="obtMarks">obtMarks</label>
                <input
                    id="obtMarks"
                    name="obtMarks"
                    type="text"
                    value={values.obtMarks}
                    onChange={(e)=> {
                        setFieldValue("obtMarks", e.target.value)
                        setFieldValue("average", ((e.target.value / values.totalMarks) * 100) .toFixed(2))
                    }}
                    className='ml-14 mt-4 border border-gray-700 w-96 p-2'
                />
                {/* {
                    errors?.lastName ? <div className='text-red-500'>{errors?.lastName}</div> : null
                } */}
            </div>

            <div>
                <label htmlFor="average">average</label>
                <input
                    id="average"
                    name="average"
                    type="average"
                    value={values.average}
                    readOnly
                    className='ml-14 mt-4 border border-gray-700 w-96 p-2'
                />
                {/* {
                    errors?.email ? <div className='text-red-500'>{errors?.email}</div> : null
                } */}
            </div>

            <div>
                <button type='submit' className='px-10 py-2 bg-gray-800 text-white rounded-md mt-10 ml-20'>Save</button>
            </div>
        </form>
    )
}

export default FormikForm
