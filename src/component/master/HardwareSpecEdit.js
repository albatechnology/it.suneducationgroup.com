import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function HardwareSpecEdit({ state, dispatch }) {
  const [categoryData, setCategoryData] = useState([]);
  const [isConsumable, setIsConsumable] = useState(
    state.currentRow.consumable ? "1" : "0"
  );

  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = {
    ...state.currentRow,
    spesifikasi: JSON.parse(state.currentRow.spesifikasi),
  };
  const validationSchema = Yup.object({
    nama_hardware: Yup.string().required("harus diisi"),
    kode_inventori: Yup.string().required("harus diisi"),
    seq_inventori: Yup.string().required("harus diisi"),
  });
  console.log(isConsumable);
  const onSubmit = (values) => {
    console.log(values);
    axios
      .put(`${config.SERVER_URL}hardwarespec`, values, axiosConfig)
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
            <h2>Hardware Spesifikasi</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <h2 className="card-inside-title">Edit</h2>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <select
                          onChange={(e) => {
                            setIsConsumable(e.target.value);
                            console.log("is consumable", isConsumable);
                          }}
                          value={isConsumable}
                          name="consumable"
                        >
                          <option value="1">Consumable</option>
                          <option value="0">Non Consumable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {isConsumable === "1" ? (
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      <Form>
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <label> Hardware</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="nama_hardware"
                                  name="nama_hardware"
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
                  ) : (
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
                              <div className="col-sm-12">
                                <label> Hardware</label>
                                <div className="form-group">
                                  <div
                                    className={`form-line ${
                                      errors.nama_hardware &&
                                      touched.nama_hardware
                                        ? "focused error"
                                        : null
                                    }`}
                                  >
                                    <Field
                                      type="text"
                                      className="form-control"
                                      id="nama_hardware"
                                      name="nama_hardware"
                                    />
                                  </div>
                                  {errors.nama_hardware &&
                                  touched.nama_hardware ? (
                                    <label class="error">
                                      {errors.nama_hardware}
                                    </label>
                                  ) : null}
                                </div>
                                <label> Kode Inventori</label>
                                <div className="form-group">
                                  <div
                                    className={`form-line ${
                                      errors.kode_inventori &&
                                      touched.kode_inventori
                                        ? "focused error"
                                        : null
                                    }`}
                                  >
                                    <Field
                                      type="text"
                                      className="form-control no-resize"
                                      id="kode_inventori"
                                      name="kode_inventori"
                                    />
                                  </div>
                                  {errors.kode_inventori &&
                                  touched.kode_inventori ? (
                                    <label class="error">
                                      {errors.kode_inventori}
                                    </label>
                                  ) : null}
                                </div>
                                <label> Sequence Inventori</label>
                                <div className="form-group">
                                  <div
                                    className={`form-line ${
                                      errors.seq_inventori &&
                                      touched.seq_inventori
                                        ? "focused error"
                                        : null
                                    }`}
                                  >
                                    <Field
                                      className="form-control no-resize"
                                      id="seq_inventori"
                                      name="seq_inventori"
                                    />
                                  </div>
                                  {errors.seq_inventori &&
                                  touched.seq_inventori ? (
                                    <label class="error">
                                      {errors.seq_inventori}
                                    </label>
                                  ) : null}
                                </div>

                                <label> Deskripsi</label>
                                <div className="form-group">
                                  <div className="form-line">
                                    <Field
                                      as="textarea"
                                      rows="4"
                                      className="form-control no-resize"
                                      id="deskripsi"
                                      name="deskripsi"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <label> Spesifikasi</label>
                                </div>
                                <FieldArray name="spesifikasi">
                                  {(fieldArrayProps) => {
                                    const { push, remove, form } =
                                      fieldArrayProps;
                                    const { values } = form;
                                    const { spesifikasi } = values;
                                    return (
                                      <React.Fragment>
                                        {spesifikasi.map((item, index) => (
                                          <React.Fragment key={index}>
                                            <div className="col-sm-12">
                                              <div className="col-sm-6">
                                                <div className="form-group">
                                                  <div className="form-line">
                                                    <Field
                                                      type="text"
                                                      className="form-control no-resize"
                                                      name={`spesifikasi[${index}]`}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <button
                                                  type="button"
                                                  className="btn btn-primary"
                                                  onClick={() => remove(item)}
                                                >
                                                  -
                                                </button>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        ))}
                                        <div className="col-sm-12">
                                          <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => {
                                              push("");
                                            }}
                                          >
                                            +
                                          </button>
                                        </div>
                                      </React.Fragment>
                                    );
                                  }}
                                </FieldArray>
                              </div>

                              <div className="col-sm-12">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HardwareSpecEdit;
