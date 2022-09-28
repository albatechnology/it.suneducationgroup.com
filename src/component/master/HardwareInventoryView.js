import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";

import { useParams } from "react-router";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function HardwareInventoryView({ state, dispatch }) {
  const [viewState, setViewState] = useState("VIEW");
  const [lisenceData, setLisenceData] = useState([]);
  const [data, setData] = useState({
    id: 0,
    nama_hardware: "",
    no_asset: "",
    merek: "",
    tipe: "",
    serial_number: "",
    harga: "",
    nama_supplier: "",
    spesifikasi: "",
    lisences: [],
  });

  const axiosConfig = AuthenticationService.getAxiosConfig();
  let { id } = useParams();
  //console.log("userparan", useParams());
  const initialValues = {
    id: 0,
    nama_hardware: "",
    no_asset: "",
    merek: "",
    tipe: "",
    serial_number: "",
    harga: "",
    nama_supplier: "",
    spesifikasi: "",
    lisences: [],
  };
  const validationSchema = Yup.object({});
  const onSubmit = (values) => {};
  const assignLisence = async (values) => {
    console.log("values", values);
    try {
      const res = await axios.post(
        `${config.SERVER_URL}hardwareinventori/addlisence`,
        values,
        {
          ...axiosConfig,
        }
      );
      console.log(res.data);
      const payload = await res.data;

      if (payload.error_code === 0) {
        //initialValues = res.data.data;
        const spesifikasi = JSON.parse(payload.data.spesifikasi);

        setData({ ...data, ...payload.data, spesifikasi });
        const lisenceRes = await axios.get(
          `${config.SERVER_URL}hardwareinventorilisence/available`,
          {
            ...axiosConfig,
          }
        );
        if (lisenceRes.data.error_code === 0) {
          setLisenceData(lisenceRes.data.payload);
        }
        setViewState("VIEW");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeLisence = async (values) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}hardwareinventori/removelisence`,
        values,
        {
          ...axiosConfig,
        }
      );
      console.log(res.data);
      const payload = await res.data;

      if (payload.error_code === 0) {
        //initialValues = res.data.data;
        const spesifikasi = JSON.parse(payload.data.spesifikasi);

        setData({ ...data, ...payload.data, spesifikasi });
        //console.log(res.data);
        //setUser(res.data.data);
        const lisenceRes = await axios.get(
          `${config.SERVER_URL}hardwareinventorilisence/available`,
          {
            ...axiosConfig,
          }
        );
        if (lisenceRes.data.error_code === 0) {
          setLisenceData(lisenceRes.data.payload);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    // get userData

    try {
      const res = await axios.get(
        `${config.SERVER_URL}hardwareinventori/${id}`,
        {
          ...axiosConfig,
        }
      );
      const payload = await res.data;
      console.log(payload);

      if (payload.error_code === 0) {
        //initialValues = res.data.data;
        const spesifikasi = JSON.parse(payload.data.spesifikasi);

        setData({ ...data, ...payload.data, spesifikasi });
        //console.log(res.data);
        //setUser(res.data.data);
      }

      const lisenceRes = await axios.get(
        `${config.SERVER_URL}hardwareinventorilisence/available`,
        {
          ...axiosConfig,
        }
      );
      if (lisenceRes.data.error_code === 0) {
        setLisenceData(lisenceRes.data.payload);
        $(".js-mailing-list").DataTable({
          responsive: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Hardware</h2>
          </div>
          <Formik
            initialValues={data}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {viewState === "VIEW" ? (
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="body">
                          <h2 className="card-inside-title">View</h2>

                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label>Hardware</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="nama_hardware"
                                    name="nama_hardware"
                                  />
                                </div>
                              </div>
                              <label> Nomor Asset</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="no_asset"
                                    name="no_asset"
                                  />
                                </div>
                              </div>
                              <label> Merek</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="merek"
                                    name="merek"
                                  />
                                </div>
                              </div>
                              <label> Tipe</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="tipe"
                                    name="tipe"
                                  />
                                </div>
                              </div>

                              <label> Serial Number</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="serial_number"
                                    name="serial_number"
                                  />
                                </div>
                              </div>
                              <label> Harga</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="harga"
                                    name="harga"
                                  />
                                </div>
                              </div>
                              <label> Supplier</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Question"
                                    id="nama_supplier"
                                    name="nama_supplier"
                                  />
                                </div>
                              </div>
                              {Object.keys(values.spesifikasi).map(
                                (specKey, specIndex) => (
                                  <>
                                    <label> {specKey}</label>
                                    <div className="form-group">
                                      <div className="form-line">
                                        <Field
                                          type="text"
                                          className="form-control"
                                          placeholder="Question"
                                          id={`spesifikasi[${specKey}]`}
                                          name={`spesifikasi[${specKey}]`}
                                        />
                                      </div>
                                    </div>
                                  </>
                                )
                              )}
                              <label> Lisence</label>
                              <FieldArray name="lisences">
                                {({ form, push }) => {
                                  const { lisences } = form.values;
                                  let no_seq = 1;
                                  console.log("lisences", lisences);
                                  return (
                                    <React.Fragment>
                                      <table className="table table-bordered ">
                                        <thead>
                                          <tr>
                                            <th>Nama Software</th>
                                            <th>ID Lisence</th>
                                            <th>Tanggal Aktif</th>
                                            <th>Tanggal Expired</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {lisences.map((item, index) => (
                                            <tr key={index}>
                                              <td style={{ width: "500px" }}>
                                                {item.nama_software}
                                              </td>
                                              <td>{item.lisence_id}</td>
                                              <td>{item.tanggal_aktif}</td>
                                              <td>{item.tanggal_expired}</td>

                                              <td>
                                                <button
                                                  type="button"
                                                  className="btn btn-danger waves-effect"
                                                  onClick={() => {
                                                    if (
                                                      window.confirm(
                                                        "Are you sure you wish to delete this lisence?"
                                                      )
                                                    )
                                                      removeLisence({
                                                        inventori_id: values.id,
                                                        lisence_id:
                                                          item.software_lisence_id,
                                                      });
                                                  }}
                                                >
                                                  [-]
                                                </button>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                      <div>
                                        <button
                                          type="button"
                                          className="btn btn-primary waves-effect"
                                          onClick={() => {
                                            setViewState("ASSIGN");
                                          }}
                                        >
                                          [+]
                                        </button>
                                      </div>
                                    </React.Fragment>
                                  );
                                }}
                              </FieldArray>

                              {/* <label> Spesifikasi</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  as="textarea"
                                  rows="4"
                                  className="form-control no-resize"
                                  placeholder="Please type what you want..."
                                  id="spesifikasi"
                                  name="spesifikasi"
                                />
                              </div>
                            </div> */}
                            </div>
                            <div className="col-sm-12">
                              <button className="btn btn-primary" type="submit">
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {viewState === "ASSIGN" ? (
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="body">
                          <h2 className="card-inside-title">Lisence List</h2>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                            <thead>
                              <tr>
                                <th>Software</th>
                                <th>Lisence ID</th>
                                <th>Tanggal Aktif</th>
                                <th>Tanggal Expired</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {lisenceData.map((i) => (
                                <tr key={i.id}>
                                  <td>{i.nama_software}</td>
                                  <td>{i.lisence_id}</td>
                                  <td>{i.tanggal_aktif}</td>
                                  <td>{i.tanggal_expired}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary waves-effect "
                                      onClick={() => {
                                        assignLisence({
                                          inventori_id: id,
                                          lisence_id: i.id,
                                        });
                                      }}
                                    >
                                      Assign
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HardwareInventoryView;
