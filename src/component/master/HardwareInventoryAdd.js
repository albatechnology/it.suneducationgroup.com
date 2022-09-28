import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { object } from "yup/lib/locale";
import HardwareInventoryList from "./HardwareInventoryList";

function HardwareInventoryAdd({ state, dispatch }) {
  const [supplierData, setSupplierData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  //console.log(state);
  const specArr = JSON.parse(state.hardwareSpecRow.spesifikasi);
  const spec = {};
  //specArr.forEach((specName) => console.log(specName));

  specArr.map((i, index) => {
    spec[i] = "";
  });
  const defaultRow = {
    hardwareSpecId: state.hardwareSpecId,
    tanggal_pembelian: "",
    supplier_id: 0,
    form_permintaan: "",
    spesifikasi: spec,
  };
  const initialValues = {
    inventoris: [defaultRow],
  };
  const onSubmit = async ({ inventoris }) => {
    const dataCount = inventoris.length;
    //console.log(inventoris.length);
    let index = 0;

    for (let i = 0; i <= dataCount; i++) {
      index++;
      try {
        const result = await axios.post(
          `${config.SERVER_URL}hardwareinventori`,
          inventoris[i],
          axiosConfig
        );
        if (result.status == 200) {
          if (index == dataCount) dispatch({ type: "LIST" });
        }
      } catch (err) {
        console.log(err);
      }
    }

    inventoris.forEach(async (inventori) => {
      /*
        .then((res) => {
          console.log(res);
          if (index == dataCount) dispatch({ type: "LIST" });
        })
        .catch((err) => console.log(err));
        */
    });

    //console.log(values.inventori.length);
    /*
    axios
      .post(`${config.SERVER_URL}hardwareinventori`, values, axiosConfig)
      .then((res) => {
        console.log(res);
        // dispatch({ type: "LIST" });
      })
      .catch((err) => console.log(err));
      */
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}suppliervendor`, axiosConfig)
      .then((res) => {
        if (res.status === 200) {
          //console.log(res.data);
          setSupplierData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Tambah Inventori Hardware</h2>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  <Form>
                    <div className="body">
                      <FieldArray name="inventoris">
                        {({ form, push }) => {
                          const { inventoris } = form.values;
                          //console.log(inventoris);
                          return (
                            <div>
                              <div className="table-responsive">
                                <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                                  <thead>
                                    <tr>
                                      <th>Supplier</th>
                                      <th>Tanggal Pembelian</th>
                                      <th>Form Permintaan</th>
                                      {Object.keys(spec).map((specName) => (
                                        <th key={`header-${specName}`}>
                                          {specName}
                                        </th>
                                      ))}

                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {inventoris.map((item, index) => (
                                      <tr key={index}>
                                        <td>
                                          <Field
                                            as="select"
                                            name={`inventoris[${index}].supplier_id`}
                                          >
                                            <option value={0}>
                                              Pilih Supplier
                                            </option>
                                            {supplierData.map(
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
                                            type="date"
                                            name={`inventoris[${index}].tanggal_pembelian`}
                                          />
                                        </td>
                                        <td>
                                          <Field
                                            name={`inventoris[${index}].form_permintaan`}
                                          />
                                        </td>
                                        {Object.keys(spec).map(
                                          (specItem, specIndex) => (
                                            <td
                                              key={`spec${index}-${specItem}`}
                                            >
                                              <Field
                                                name={`inventoris[${index}].spesifikasi.${specItem}`}
                                              />
                                            </td>
                                          )
                                        )}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>

                              <div>
                                <button
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

export default HardwareInventoryAdd;
