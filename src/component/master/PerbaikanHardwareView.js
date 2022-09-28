import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

import dateFormat from "dateformat";

function PerbaikanHardwareView({ state, dispatch }) {
  const [viewState, setViewState] = useState("VIEW");
  const [vendorList, setVendorList] = useState([]);
  const [SFV, setSFV] = useState();
  const today = dateFormat(new Date(), "yyyy-mm-dd");

  const history = useHistory();

  const axiosConfig = AuthenticationService.getAxiosConfig();
  const initialValues = { ...state.currentRow, inventoris: [] };
  const validationSchema = Yup.object({});

  const onSubmit = async (values) => {
    console.log("values", values);

    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware/sendtovendor`,
        values,
        axiosConfig
      );
      dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };

  const returnInventoriFromVendor = async (
    inventori,
    perbaikanData,
    setFieldValue
  ) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware/returninventorifromvendor`,
        { perbaikanData, inventori },
        axiosConfig
      );
      setFieldValue("inventoris", res.data.inventoris);
      setFieldValue("status", res.data.status);
      //dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };

  const assignToUser = async (inventori, perbaikanData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware/assigntouser`,
        { perbaikanData, inventori },
        axiosConfig
      );
      setFieldValue("inventoris", res.data.inventoris);
      setFieldValue("status", res.data.status);
      //dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };
  const addToStock = async (inventori, perbaikanData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware/addtostock`,
        { perbaikanData, inventori },
        axiosConfig
      );
      setFieldValue("inventoris", res.data.inventoris);
      setFieldValue("status", res.data.status);
      //dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };

  const setAsBroken = async (inventori, perbaikanData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware/setasbroken`,
        { perbaikanData, inventori },
        axiosConfig
      );
      setFieldValue("inventoris", res.data.inventoris);
      setFieldValue("status", res.data.status);
      //dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    try {
      const PerbaikanRes = await axios.get(
        `${config.SERVER_URL}perbaikanhardware/inventoris/${state.currentId}`,
        axiosConfig
      );
      const data = PerbaikanRes.data;
      console.log("data", data);
      initialValues.inventoris = PerbaikanRes.data;
      const res = await axios.get(
        `${config.SERVER_URL}suppliervendor`,
        axiosConfig
      );
      if (res.status === 200) {
        setVendorList(res.data);
      }

      /*
        const list = [];

        for (let index = 0; index < inventoriRes.data.length; index++) {
          list.push({ ...inventoriRes.data[index], checked: 0 });
        }
        console.log("list", list);
        initialValues.inventoris = list;
        */
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>Perbaikan Hardware List</h2>
              </div>
              <div className="body">
                <div className="table-responsive">
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    // validationSchema={validationSchema}
                  >
                    {({ values, setFieldValue }) => (
                      <React.Fragment>
                        <Form>
                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label> Tanggal</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    type="date"
                                    className="form-control"
                                    id="tanggal_pengajuan"
                                    name="tanggal_pengajuan"
                                  />
                                </div>
                              </div>
                              <label> Vendor</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    as="select"
                                    className="form-control"
                                    name="vendor_id"
                                  >
                                    <option value={0}>Pilih Vendor</option>
                                    {vendorList.map(
                                      (vendorItem, VendorIndex) => (
                                        <option
                                          value={vendorItem.id}
                                          key={`option-${VendorIndex}`}
                                        >
                                          {vendorItem.nama_pt}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                </div>
                              </div>
                            </div>
                          </div>
                          <label> Detail</label>
                          <FieldArray name="inventoris">
                            {(params) => {
                              const { form, push, remove } = params;
                              const { inventoris } = form.values;
                              let no_seq = 1;
                              console.log("form values", form.values);
                              return (
                                <React.Fragment>
                                  <table className="table table-bordered ">
                                    <thead>
                                      <tr>
                                        <th>Hardware</th>
                                        <th>No Asset</th>
                                        <th>Merek</th>
                                        <th>Keterangan</th>
                                        <th>Status</th>
                                        {form.values.status !== 1 ? (
                                          <React.Fragment>
                                            <th style={{ width: "100px" }}>
                                              Biaya
                                            </th>
                                            <th>Action</th>
                                          </React.Fragment>
                                        ) : null}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {inventoris
                                        ? inventoris.map((item, index) => (
                                            <tr key={index}>
                                              <td>
                                                {
                                                  inventoris[index]
                                                    .nama_hardware
                                                }
                                              </td>
                                              <td>
                                                {inventoris[index].no_asset}
                                              </td>
                                              <td>
                                                {
                                                  inventoris[index]
                                                    .serial_number
                                                }
                                              </td>
                                              <td>
                                                {inventoris[index].keterangan}
                                              </td>
                                              <td>
                                                {
                                                  state.statusMapping[
                                                    inventoris[index].status
                                                  ]
                                                }
                                              </td>
                                              {form.values.status !== 1 ? (
                                                <React.Fragment>
                                                  <td>
                                                    <Field
                                                      type="text"
                                                      className="form-control"
                                                      name={`inventoris[${index}].biaya`}
                                                      placeholder="Biaya Perbaikan"
                                                    />
                                                  </td>
                                                  <td>
                                                    {inventoris[index]
                                                      .status === 3 ? (
                                                      <React.Fragment>
                                                        <button
                                                          type="button"
                                                          className="btn btn-primary"
                                                          style={{
                                                            margin: "5px",
                                                          }}
                                                          onClick={() => {
                                                            assignToUser(
                                                              inventoris[index],
                                                              values,
                                                              setFieldValue
                                                            );
                                                          }}
                                                        >
                                                          Assign To User
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn btn-primary"
                                                          style={{
                                                            margin: "5px",
                                                          }}
                                                          onClick={() => {
                                                            addToStock(
                                                              inventoris[index],
                                                              values,
                                                              setFieldValue
                                                            );
                                                          }}
                                                        >
                                                          Add To Stock
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn btn-primary"
                                                          style={{
                                                            margin: "5px",
                                                          }}
                                                          onClick={() => {
                                                            setAsBroken(
                                                              inventoris[index],
                                                              values,
                                                              setFieldValue
                                                            );
                                                          }}
                                                        >
                                                          Set As Broken
                                                        </button>
                                                      </React.Fragment>
                                                    ) : inventoris[index]
                                                        .status === 2 ? (
                                                      <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        style={{
                                                          margin: "5px",
                                                        }}
                                                        onClick={() => {
                                                          returnInventoriFromVendor(
                                                            inventoris[index],
                                                            values,
                                                            setFieldValue
                                                          );
                                                        }}
                                                      >
                                                        Return From Vendor
                                                      </button>
                                                    ) : null}
                                                  </td>
                                                </React.Fragment>
                                              ) : null}
                                            </tr>
                                          ))
                                        : null}
                                    </tbody>
                                  </table>
                                </React.Fragment>
                              );
                            }}
                          </FieldArray>
                          <div className="row clearfix">
                            <div className="col-sm-12">
                              <label> Catatan</label>
                              <div className="form-group">
                                <div className="form-line">
                                  <Field
                                    as="textarea"
                                    rows="3"
                                    className="form-control no-resize"
                                    id="catatan"
                                    name="catatan"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <button
                                className="btn btn-primary"
                                style={{ margin: "5px" }}
                                type="button"
                                onClick={() => {
                                  dispatch({ type: "LIST" });
                                }}
                              >
                                Back
                              </button>
                              {values.status === 1 ? (
                                <button
                                  className="btn btn-primary"
                                  style={{ margin: "5px" }}
                                  type="submit"
                                >
                                  Send To Vendor
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </Form>
                      </React.Fragment>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerbaikanHardwareView;
