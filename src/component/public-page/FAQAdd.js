import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function FAQAdd({ state, dispatch }) {
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = { question: "", answer: "" };
  /*
  const onSubmit = (values) => {
    console.log(values);
  };
  */
  const validationSchema = Yup.object({
    question: Yup.string().required("harus diisi"),
    answer: Yup.string().required("harus diisi"),
  });
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}faq`,
        values,
        axiosConfig
      );
      console.log(res);
      if (res.data.error_code === 0) {
        dispatch({ type: "LIST" });
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
            <h2>FAQ</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
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
                              <label> Question</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.question && touched.question
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="question"
                                    name="question"
                                  />
                                </div>
                                {errors.question && touched.question ? (
                                  <label class="error">{errors.question}</label>
                                ) : null}
                              </div>
                              <label> Answer</label>
                              <div className="form-group">
                                <div
                                  className={`form-line ${
                                    errors.answer && touched.answer
                                      ? "focused error"
                                      : null
                                  }`}
                                >
                                  <Field
                                    as="textarea"
                                    rows="4"
                                    className="form-control no-resize"
                                    placeholder="Please type what you want..."
                                    id="answer"
                                    name="answer"
                                  />
                                </div>
                                {errors.answer && touched.answer ? (
                                  <label class="error">{errors.answer}</label>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <button className="btn btn-primary" type="submit">
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

export default FAQAdd;
