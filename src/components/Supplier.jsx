import { Form, Formik } from "formik";

const Supplier = () => {
  const initialValue = {
    supplier_Category: "",
    supplier_Name: "",
    contact_Number: "",
    currency: "",
    roe: "",
    commision: "",
    email: "",
    address: "",
  };

  const handlSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Data
      </div>

      <Formik
        initialValues={initialValue}
        onSubmit={handlSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="container mx-auto border p-5 my-5 space-y-10">
              <div className="flex">
                <div className="flex-1">
                  <input
                    id="supplier_Category"
                    label="Supplier Category"
                    className="border out p-2"
                    placeholder="Supplier Category"
                    name="supplier_Category"
                    value={values?.supplier_Category}
                    onChange={(e) =>
                      setFieldValue("supplier_Category", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="Supplier Name"
                    id="supplier_Name"
                    label="Supplier Name"
                    name="supplier_Name"
                    value={values?.supplier_Name}
                    onChange={(e) =>
                      setFieldValue("supplier_Name", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="Contact Number"
                    id="contact_Number"
                    label="Contact Number"
                    name="contact_Number"
                    value={values?.contact_Number}
                    onChange={(e) =>
                      setFieldValue("contact_Number", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="currency"
                    id="currency"
                    label="Currency"
                    name="currency"
                    value={values?.currency}
                    onChange={(e) => setFieldValue("currency", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="roe"
                    id="roe"
                    label="ROE"
                    name="roe"
                    value={values?.roe}
                    onChange={(e) => setFieldValue("roe", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="commision"
                    id="commision"
                    label="Commision"
                    name="commision"
                    value={values?.commision}
                    onChange={(e) => setFieldValue("commision", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="email"
                    id="email"
                    label="Email"
                    name="email"
                    value={values?.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="border out p-2"
                    placeholder="Address"
                    id="address"
                    label="Address"
                    name="address"
                    value={values?.address}
                    onChange={(e) => setFieldValue("address", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 rounded-md px-10 py-2"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="container mx-auto my-20">
        <table className="w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">Supplier Category</th>
              <th className="border border-gray-300">Supplier Name</th>
              <th className="border border-gray-300">Contact Number</th>
              <th className="border border-gray-300">Currency</th>
              <th className="border border-gray-300">ROE</th>
              <th className="border border-gray-300">Commision</th>
              <th className="border border-gray-300">Email</th>
              <th className="border border-gray-300">Address</th>
              <th className="border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300 whitespace-normal break-words "></td>
              <td className="border border-gray-300 break-words"></td>
              <td className="border border-gray-300">
                <div className="text-green-500 cursor-pointer ">Edit</div>
                <div className="text-red-500 cursor-pointer">Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Supplier;
