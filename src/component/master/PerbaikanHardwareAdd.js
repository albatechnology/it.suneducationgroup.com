/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

import dateFormat from "dateformat";

function PerbaikanHardwareAdd({ state, dispatch }) {
  const [vendorList, setVendorList] = useState([]);
  const today = dateFormat(new Date(), "yyyy-mm-dd");

  const history = useHistory();

  const axiosConfig = AuthenticationService.getAxiosConfig();

  const initialValues = {
    vendor_id: 0,
    tanggal_pengajuan: today,
    catatan: "",
    inventoris: [],
  };
  const validationSchema = Yup.object({});

  const onSubmit = async (values) => {
    console.log("values", values);

    try {
      const res = await axios.post(
        `${config.SERVER_URL}perbaikanhardware`,
        values,
        axiosConfig
      );
      dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    try {
      const inventoriRes = await axios.get(
        `${config.SERVER_URL}hardwareinventori/brokenatit`,
        axiosConfig
      );
      initialValues.inventoris = await inventoriRes.data;

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
                              return (
                                <React.Fragment>
                                  <table className="table table-bordered ">
                                    <thead>
                                      <tr>
                                        <th>Check</th>
                                        <th>Hardware</th>
                                        <th>No Asset</th>
                                        <th>Merek</th>
                                        <th>Tipe</th>
                                        <th>Serial Number</th>
                                        <th>Keterangan</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {inventoris.map((item, index) => (
                                        <tr key={index}>
                                          <td>
                                            {
                                              <Field
                                                type="checkbox"
                                                style={{
                                                  opacity: 1,
                                                  position: "relative",
                                                  left: 0,
                                                }}
                                                name={`inventoris[${index}].checked`}
                                              />
                                            }
                                          </td>
                                          <td>
                                            {inventoris[index].nama_hardware}
                                          </td>
                                          <td>{inventoris[index].no_asset}</td>
                                          <td>{inventoris[index].merek}</td>
                                          <td>{inventoris[index].tipe}</td>
                                          <td>
                                            {inventoris[index].serial_number}
                                          </td>
                                          <td>
                                            <Field
                                              as="textarea"
                                              className="form-control"
                                              rows="2"
                                              name={`inventoris[${index}].keterangan`}
                                            />
                                          </td>
                                        </tr>
                                      ))}
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
                              <button
                                className="btn btn-primary"
                                style={{ margin: "5px" }}
                                type="submit"
                              >
                                Save
                              </button>
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

export default PerbaikanHardwareAdd;
