import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function TipsAndTrickEdit({ state, dispatch }) {
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = state.currentRow;
  const validationSchema = Yup.object({
    title: Yup.string().required("harus diisi"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    const data = new FormData();
    data.append("infografik", values.infografik);
    //console.log(axiosConfig);
    const headers = {
      "Content-Type": "multipart/form-data",
      ...axiosConfig.headers,
    };
    // console.log(headers);

    try {
      const postResult = await axios.post(
        `${config.SERVER_URL}tipsandtrick/upload`,
        data,
        { headers }
      );
      let postData = {};
      if (postResult.data.error_code === 0) {
        postData = {
          ...values,
          infografik_url: postResult.data.filePath,
        };
      } else {
        postData = {
          ...values,
          infografik_url: "",
        };
      }
      const res = await axios.put(
        `${config.SERVER_URL}tipsandtrick`,
        postData,
        axiosConfig
      );
      //console.log(res);
      dispatch({ type: "LIST" });
      //console.log(postResult.data.filePath);

      //console.log(postResult);
      //dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Tips And Trick</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <h2 className="card-inside-title">Edit</h2>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    {({ errors, touched, setFieldValue }) => (
                      <Form>
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <label> title</label>
                            <div className="form-group">
                              <div
                                className={`form-line ${
                                  errors.title && touched.title
                                    ? "focused error"
                                    : null
                                }`}
                              >
                                <Field
                                  type="text"
                                  className="form-control"
                                  placeholder="title"
                                  id="title"
                                  name="title"
                                />
                              </div>
                              {errors.title && touched.title ? (
                                <label class="error">{errors.title}</label>
                              ) : null}
                            </div>
                            <label>InfoGrafik</label>
                            <div className="form-group">
                              <div className="form-line">
                                <input
                                  type="file"
                                  className="form-control"
                                  placeholder="infografik"
                                  id="infografik"
                                  name="infografik"
                                  onChange={(e) => {
                                    setFieldValue(
                                      "infografik",
                                      e.target.files[0]
                                    );
                                  }}
                                />
                              </div>
                            </div>
                            <label> content</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  as="textarea"
                                  rows="4"
                                  className="form-control no-resize"
                                  id="content"
                                  name="content"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
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

export default TipsAndTrickEdit;
