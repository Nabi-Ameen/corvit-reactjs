import { Form, Formik } from "formik";
import { baseUrl } from "../utils/baseUrls";
import axios from "axios";
import { useEffect, useState } from "react";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const [singleSupplier, setSingleSupplier] = useState({});

  console.log("singleSupplier", singleSupplier);
  console.log("supplier", supplier);

  const initialValue = {
    supplier_Category: singleSupplier?.supplier_Category || "",
    supplier_Name: singleSupplier?.supplier_Name || "",
    contact_Number: singleSupplier?.contact_Number || "",
    currency: singleSupplier?.currency || "",
    roe: singleSupplier?.roe || "",
    commision: singleSupplier?.commision || "",
    email: singleSupplier?.email || "",
    address: singleSupplier?.address || "",
  };

  const getSupplier = async () => {
    const res = await axios.get(`${baseUrl}/supplier/get`);
    setSupplier(res?.data);
  };

  useEffect(() => {
    getSupplier();
  }, []);

  const createSupplier = async (values) => {
    await axios.post(`${baseUrl}/supplier/post`, values);
  };

  const updateSupplier = async (id, values) => {
    await axios.patch(`${baseUrl}/supplier/update/${id}`, values);
    getSupplier();
    setSingleSupplier({});
  };

  const getUnique = async (id) => {
    console.log("id", id);
    const singleSupplier = await axios.get(`${baseUrl}/supplier/get/${id}`);
    setSingleSupplier(singleSupplier?.data?.data);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (singleSupplier?.id) {
      const id = singleSupplier?.id;
      updateSupplier(id, values);
      resetForm({ values: initialValue });
    } else {
      createSupplier(values);
      getSupplier();
      resetForm({ values: initialValue });
    }
    setSingleSupplier({});
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Data
      </div>

      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        enableReinitialize={true}
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
                  className="bg-blue-500 rounded-md px-10 py-2 text-white"
                >
                  {singleSupplier?.id ? "Update" : "Save"}
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
            {supplier?.map((supp, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-300">
                    {supp?.supplier_Category}
                  </td>
                  <td className="border border-gray-300">
                    {supp?.supplier_Name}
                  </td>
                  <td className="border border-gray-300">
                    {supp?.contact_Number}
                  </td>
                  <td className="border border-gray-300">{supp?.currency}</td>
                  <td className="border border-gray-300">{supp?.roe}</td>
                  <td className="border border-gray-300">{supp?.commision}</td>
                  <td className="border border-gray-300 whitespace-normal break-words ">
                    {supp?.email}
                  </td>
                  <td className="border border-gray-300 break-words">
                    {supp?.address}
                  </td>
                  <td className="border border-gray-300">
                    <div
                      className="text-green-500 cursor-pointer "
                      onClick={() => {
                        getUnique(supp?.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Edit
                    </div>
                    <div className="text-red-500 cursor-pointer">Delete</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Supplier;
