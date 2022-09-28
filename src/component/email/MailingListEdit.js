import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function MailingListEdit({ state, dispatch }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const mailingListId = state.currentId;
  const initialValues = state.currentRow;
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    deskripsi: Yup.string(),
  });
  const axiosConfig = AuthenticationService.getAxiosConfig();

  useEffect(() => {}, []);

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      const res = await axios.put(
        `${config.SERVER_URL}mailinglist/${mailingListId}`,
        values,
        axiosConfig
      );
      console.log("res", res);

      if (res.data.error_code === 0) {
        dispatch({ type: "LIST" });
      } else {
        setErrorMessage(res.data.message);
      }
      //alert(`${email} ${deskripsi} ${config.SERVER_URL}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>MailingList</h2>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ValidationSchema}
          >
            {({ errors, touched, isValidating }) => {
              console.log("errors", errors);
              return (
                <Form>
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

                          <h2 className="card-inside-title">Edit</h2>
                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.email && touched.email
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    type="text"
                                    className={`form-control `}
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                  />
                                </div>
                                {errors.email && touched.email ? (
                                  <label class="error">{errors.email}</label>
                                ) : null}
                              </div>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    as="textarea"
                                    className="form-control"
                                    placeholder="Deskripsi"
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

export default MailingListEdit;
