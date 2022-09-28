import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function SupplierVendorAdd({ state, dispatch }) {
  const [categoryData, setCategoryData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = state.currentRow;
  const validationSchema = Yup.object({
    nama_pt: Yup.string().required("harus diisi"),
    pic: Yup.string().required("harus diisi"),
    phone: Yup.string()
      .required("harus diisi")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    mobile_phone: Yup.string()
      .required("harus diisi")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    alamat: Yup.string().required("harus diisi"),
    category: Yup.string().required("harus diisi"),
  });
  const onSubmit = (values) => {
    axios
      .put(`${config.SERVER_URL}suppliervendor`, values, axiosConfig)
      .then((res) => {
        console.log(res);
        dispatch({ type: "LIST" });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(
        `${config.SERVER_URL}dropdowndata/suppliervendorcategory`,
        axiosConfig
      )
      .then((res) => {
        //console.log(res.data);
        if (res.status === 200) {
          setCategoryData(res.data);
        }
      });
  }, []);
  //console.log(categoryData);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Supplier/Vendor</h2>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, isValidating }) => {
              console.log("errors", errors);
              return (
                <Form>
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="body">
                          <h2 className="card-inside-title">Edit</h2>

                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label> Nama/PT</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.nama_pt && touched.nama_pt
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="nama PT"
                                    id="nama_pt"
                                    name="nama_pt"
                                  />
                                </div>
                                {errors.nama_pt && touched.nama_pt ? (
                                  <label class="error">{errors.nama_pt}</label>
                                ) : null}
                              </div>
                              <label> PIC</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.pic && touched.pic
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    as="textarea"
                                    rows="4"
                                    className="form-control no-resize"
                                    placeholder="data PIC"
                                    id="pic"
                                    name="pic"
                                  />
                                </div>
                                {errors.pic && touched.pic ? (
                                  <label class="error">{errors.pic}</label>
                                ) : null}
                              </div>
                              <label> Phone</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.phone && touched.phone
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    className="form-control no-resize"
                                    placeholder="telephone"
                                    id="phone"
                                    name="phone"
                                  />
                                </div>
                                {errors.phone && touched.phone ? (
                                  <label class="error">{errors.phone}</label>
                                ) : null}
                              </div>
                              <label> Mobile Phone</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.mobile_phone && touched.mobile_phone
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    className="form-control no-resize"
                                    placeholder="handphone"
                                    id="mobile_phone"
                                    name="mobile_phone"
                                  />
                                </div>
                                {errors.mobile_phone && touched.mobile_phone ? (
                                  <label class="error">
                                    {errors.mobile_phone}
                                  </label>
                                ) : null}
                              </div>

                              <label> Alamat</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.alamat && touched.alamat
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    as="textarea"
                                    rows="4"
                                    className="form-control no-resize"
                                    placeholder="alamat"
                                    id="alamat"
                                    name="alamat"
                                  />
                                </div>
                                {errors.alamat && touched.alamat ? (
                                  <label class="error">{errors.alamat}</label>
                                ) : null}
                              </div>
                              <label> Rekening Bank</label>
                              <div className="form-group">
                                <div className={`form-line`}>
                                  <Field
                                    className="form-control no-resize"
                                    placeholder="data rekening bank"
                                    id="rekening_bank"
                                    name="rekening_bank"
                                  />
                                </div>
                              </div>
                              <label> Category</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.category && touched.category
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    as="select"
                                    className="form-control no-resize"
                                    id="category"
                                    name="category"
                                  >
                                    {categoryData.map((item) => (
                                      <option
                                        value={item.category_value}
                                        key={item.category_value}
                                      >
                                        {item.category_value}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                                {errors.category && touched.category ? (
                                  <label class="error">{errors.category}</label>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <button className="btn btn-primary" type="submit">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SupplierVendorAdd;
