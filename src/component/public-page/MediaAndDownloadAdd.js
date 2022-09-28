import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function MediaAndDownloadAdd({ state, dispatch, setFieldValue }) {
  const [errorMessage, setErrorMessage] = useState("");
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = { media_name: "", filename: null, deskripsi: "" };
  const validationSchema = Yup.object({
    media_name: Yup.string().required("harus diisi"),
    deskripsi: Yup.string().required("harus diisi"),
  });
  const onSubmit = async (values) => {
    let data = new FormData();

    data.append("filename", values.filename);
    console.log(values.filename);
    const headers = {
      "Content-Type": "multipart/form-data",
      ...axiosConfig.headers,
    };
    try {
      const uploadResult = await axios.post(
        `${config.SERVER_URL}mediaanddownload/upload`,
        data,
        { headers }
      );

      console.log("upload", uploadResult.data);

      if (uploadResult.data.error_code === 0) {
        const postResult = await axios.post(
          `${config.SERVER_URL}mediaanddownload`,
          {
            ...values,
            filepath: uploadResult.data.filePath,
            filename: uploadResult.data.filename,
          },
          axiosConfig
        );
        if (postResult.data.error_code === 0) {
          dispatch({ type: "LIST" });
        }
      } else {
        setErrorMessage(uploadResult.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Media and Download</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <>
                    {errorMessage ? (
                      <div class="alert alert-warning " role="alert">
                        {`${errorMessage}`}
                      </div>
                    ) : null}
                  </>
                  <h2 className="card-inside-title">Add</h2>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    {({ errors, touched, isValidating }) => {
                      //console.log("errors", errors);
                      return (
                        <Form>
                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label> Media Name</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.media_name && touched.media_name
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="media_name"
                                    id="media_name"
                                    name="media_name"
                                  />
                                </div>
                                {errors.media_name && touched.media_name ? (
                                  <label class="error">
                                    {errors.media_name}
                                  </label>
                                ) : null}
                              </div>
                              <label>File Media</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field>
                                    {(fieldProps) => {
                                      const { setFieldValue } = fieldProps.form;
                                      //console.log(fieldProps);
                                      return (
                                        <input
                                          id="filename"
                                          name="filename"
                                          type="file"
                                          onChange={(event) => {
                                            console.log(event);
                                            setFieldValue(
                                              "filename",
                                              event.target.files[0]
                                            );
                                          }}
                                          className="form-control"
                                        />
                                      );
                                    }}
                                  </Field>
                                </div>
                              </div>
                              <label> Deskripsi</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.deskripsi && touched.deskripsi
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    rows="4"
                                    className="form-control no-resize"
                                    placeholder="Please type what you want..."
                                    name="deskripsi"
                                    id="deskripsi"
                                  />
                                </div>
                                {errors.deskripsi && touched.deskripsi ? (
                                  <label class="error">
                                    {errors.deskripsi}
                                  </label>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <button type="submit" className="btn btn-primary">
                                Save
                              </button>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
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

export default MediaAndDownloadAdd;
