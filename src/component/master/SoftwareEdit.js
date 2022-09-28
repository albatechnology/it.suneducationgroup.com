import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function SoftwareEdit({ state, dispatch }) {
  const [categoryData, setCategoryData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = state.currentRow;
  const validationSchema = Yup.object({
    nama_software: Yup.string().required("harus diisi"),
    deskripsi: Yup.string().required("harus diisi"),
  });
  const onSubmit = (values) => {
    //console.log(values);
    axios
      .put(`${config.SERVER_URL}software`, values, axiosConfig)
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

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <h2 className="card-inside-title">Edit</h2>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    // validationSchema={validationSchema}
                  >
                    <Form>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <label> Nama Software</label>
                          <div className="form-group">
                            <div className="form-line">
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="Question"
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
                                placeholder="Please type what you want..."
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
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SoftwareEdit;
