import { useState } from "react";
import Card from "./components/Card";
import kfc1 from "./images/kfc1.png";
import kfc2 from "./images/kfc2.png";
import kfc3 from "./images/kfc3.png";
import kfc4 from "./images/kfc4.png"
import Button from "./components/Button";
import Tabe1 from "./components/Tabe1";
import FormHandling from "./components/FormHandling";
import Form from "./components/Form";
import FormikForm from "./components/formik/FormikForm";
import FieldArrays from "./components/formik/FieldArray";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Supplier from "./components/Supplier";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
      {/* <FormHandling/>
      <Form/>
      <FormikForm/>
      <FieldArrays/> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
