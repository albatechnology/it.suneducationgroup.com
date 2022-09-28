import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function SoftwareAddLisence({ state, dispatch }) {
  const [supplierList, setSupplierList] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const softwareData = state.currentRow;
  const defaultRow = {
    softwareId: softwareData.id,
    supplier_id: "",
    form_permintaan: "",
    lisence_id: "",
    harga: "",
    tanggal_pembelian: "",
    tanggal_aktif: "",
    tanggal_expired: "",
  };
  const initialValues = {
    lisences: [defaultRow],
  };
  const validationSchema = Yup.object({});
  const onSubmit = async ({ lisences }) => {
    try {
      const result = await axios.post(
        `${config.SERVER_URL}softwarelisence`,
        lisences,
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
  }, []);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Tambah Lisensi Software</h2>
                </div>

                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  <Form>
                    <div className="body">
                      <FieldArray name="lisences">
                        {({ form, push }) => {
                          const { lisences } = form.values;
                          return (
                            <div>
                              <div className="table-responsive">
                                <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                                  <thead>
                                    <tr>
                                      <th>Supplier</th>
                                      <th>Form Permintaan</th>
                                      <th>ID Lisensi</th>
                                      <th>Harga</th>
                                      <th>Tanggal Pembelian</th>
                                      <th>Tanggal Aktif</th>
                                      <th>Tanggal Expired</th>

                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {lisences.map((item, index) => (
                                      <tr key={index}>
                                        <td>
                                          <Field
                                            as="select"
                                            name={`lisences[${index}].supplier_id`}
                                          >
                                            <option value={0}>
                                              Pilih Supplier
                                            </option>
                                            {supplierList.map(
                                              (supplierItem, supplierIndex) => (
                                                <option
                                                  value={supplierItem.id}
                                                  key={`option${index}-${supplierIndex}`}
                                                >
                                                  {supplierItem.nama_pt}
                                                </option>
                                              )
                                            )}
                                          </Field>
                                        </td>
                                        <td>
                                          <Field
                                            type="text"
                                            name={`lisences[${index}].form_permintaan`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            type="text"
                                            name={`lisences[${index}].lisence_id`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            type="number"
                                            name={`lisences[${index}].harga`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            type="date"
                                            name={`lisences[${index}].tanggal_pembelian`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            type="date"
                                            name={`lisences[${index}].tanggal_aktif`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            type="date"
                                            name={`lisences[${index}].tanggal_expired`}
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>

                              <div>
                                <button
                                  type="button"
                                  style={{ margin: "10px" }}
                                  className="btn btn-primary waves-effect"
                                  type="button"
                                  onClick={() => push(defaultRow)}
                                >
                                  Tambah
                                </button>
                                <button
                                  style={{ margin: "10px" }}
                                  className="btn btn-primary waves-effect"
                                  type="submit"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SoftwareAddLisence;
