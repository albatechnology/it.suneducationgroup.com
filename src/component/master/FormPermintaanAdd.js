import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function FormPermintaanAdd({ state, dispatch }) {
  const [supplierList, setSupplierList] = useState([]);
  const [uomList, setUomList] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();

  const defaultRow = {
    no_urut: 1,
    code: "",
    nama_barang: "",
    qty: 0,
    uom: "",
    harga_satuan: 0,
  };

  const initialValues = {
    supplier_id: 0,
    tanggal_pengajuan: "",
    alasan_pembelian: "",
    details: [defaultRow],
  };
  const onSubmit = async (values) => {
    try {
      const result = await axios.post(
        `${config.SERVER_URL}formpermintaan`,
        values,
        axiosConfig
      );
      //history.push("/hardware-spec");
      dispatch({
        type: "LIST",
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}suppliervendor`,
        axiosConfig
      );
      setSupplierList(res.data);
    } catch (e) {
      console.log(e);
    }
    try {
      const res = await axios.get(
        `${config.SERVER_URL}dropdowndata/uom`,
        axiosConfig
      );
      setUomList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Form Permintaan</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <h2 className="card-inside-title">Add</h2>

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    // validationSchema={validationSchema}
                  >
                    <Form>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <label> Tanggal</label>
                          <div className="form-group">
                            <div className="form-line">
                              <Field
                                type="date"
                                className="form-control"
                                placeholder="Question"
                                id="tanggal_pengajuan"
                                name="tanggal_pengajuan"
                              />
                            </div>
                          </div>
                          <label>Supplier</label>
                          <div className="form-group">
                            <div className="form-line">
                              <Field as="select" name={`supplier_id`}>
                                <option value={0}>Pilih Supplier</option>
                                {supplierList.map(
                                  (supplierItem, supplierIndex) => (
                                    <option
                                      value={supplierItem.id}
                                      key={`option-${supplierIndex}`}
                                    >
                                      {supplierItem.nama_pt}
                                    </option>
                                  )
                                )}
                              </Field>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label> Detail</label>
                      <FieldArray name="details">
                        {({ form, push }) => {
                          const { details } = form.values;
                          let no_seq = 1;
                          return (
                            <React.Fragment>
                              <table className="table table-bordered ">
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Code</th>
                                    <th>Nama Barang</th>
                                    <th>Qty</th>
                                    <th>UoM</th>
                                    <th>Harga Satuan</th>
                                    <th>Harga Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {details.map((item, index) => (
                                    <tr key={index}>
                                      <td style={{ width: "500px" }}>
                                        <Field
                                          type="text"
                                          name={`details[${index}].no_urut`}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          type="text"
                                          name={`details[${index}].code`}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          as="textarea"
                                          rows="4"
                                          name={`details[${index}].nama_barang`}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          type="number"
                                          name={`details[${index}].qty`}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          as="select"
                                          name={`details[${index}].uom`}
                                        >
                                          <option value={0}>Pilih UoM</option>
                                          {uomList.map((uomItem, uomIndex) => (
                                            <option
                                              value={uomItem.uom_value}
                                              key={`option${index}-${uomIndex}`}
                                            >
                                              {uomItem.uom_value}
                                            </option>
                                          ))}
                                        </Field>
                                      </td>
                                      <td>
                                        <Field
                                          type="number"
                                          name={`details[${index}].harga_satuan`}
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          type="number"
                                          value={
                                            details[index].qty *
                                            details[index].harga_satuan
                                          }
                                        />
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              <div>
                                <button
                                  type="button"
                                  style={{ margin: "10px" }}
                                  className="btn btn-primary waves-effect"
                                  type="button"
                                  onClick={() => {
                                    no_seq++;
                                    push({ ...defaultRow, no_urut: no_seq });
                                  }}
                                >
                                  [+]
                                </button>
                              </div>
                            </React.Fragment>
                          );
                        }}
                      </FieldArray>
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <label> Alasan</label>
                          <div className="form-group">
                            <div className="form-line">
                              <Field
                                as="textarea"
                                rows="7"
                                className="form-control no-resize"
                                placeholder="Please type what you want..."
                                id="alasan_pembelian"
                                name="alasan_pembelian"
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

export default FormPermintaanAdd;
