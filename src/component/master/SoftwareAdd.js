import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function SoftwareAdd({ state, dispatch }) {
  const [categoryData, setCategoryData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = {
    nama_software: "",
    deskripsi: "",
  };
  const validationSchema = Yup.object({
    nama_software: Yup.string().required("harus diisi"),
    deskripsi: Yup.string().required("harus diisi"),
  });
  const onSubmit = (values) => {
    //console.log(values);
    axios
      .post(`${config.SERVER_URL}software`, values, axiosConfig)
      .then((res) => {
        console.log(res);
        dispatch({ type: "LIST" });
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Software</h2>
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
                          {Object.keys(errors).map((key) => (
                            <>
                              {errors[key] && touched[key] ? (
                                <div class="alert alert-warning " role="alert">
                                  {`${key} - ${errors[key]}`}
                                </div>
                              ) : null}
                            </>
                          ))}
                          <h2 className="card-inside-title">Add</h2>

                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label> Nama Software</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="nama software"
                                    id="nama_software"
                                    name="nama_software"
                                  />
                                </div>
                              </div>
                              <label> Deskripsi</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    as="textarea"
                                    rows="4"
                                    className="form-control no-resize"
                                    placeholder="penjelasan tentang software"
                                    id="deskripsi"
                                    name="deskripsi"
                                  />
                                </div>
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

export default SoftwareAdd;
