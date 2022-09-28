/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
let history = null;
const axiosConfig = AuthenticationService.getAxiosConfig();
const defaultRow = {
  hardwareSpecId: 0,
  merek: "",
  tipe: "",
  serial_number: "",
  harga: 0,
  tanggal_pembelian: "",
  supplier_id: 0,
  form_permintaan: "",
  spesifikasi: {},
};
const initialValues = {
  inventoris: [defaultRow],
  hardwareSpecId: 0,
  harga: 0,
  tanggal_pembelian: "",
  supplier_id: 0,
  form_permintaan: "",
  qty: 0,
};

const onSubmit = async ({ inventoris }) => {
  //console.log("submit");
  try {
    const result = await axios.post(
      `${config.SERVER_URL}hardwareinventori`,
      inventoris,
      axiosConfig
    );
    history.push("/hardware-spec");
  } catch (e) {
    console.log(e);
  }
};

const consumableSubmit = async ({
  hardwareSpecId,
  harga,
  tanggal_pembelian,
  supplier_id,
  form_permintaan,
  qty,
}) => {
  const stockCardData = {
    hardwareSpecId,
    harga,
    tanggal_pembelian,
    supplier_id,
    form_permintaan,
    qty,
  };
  try {
    const result = await axios.post(
      `${config.SERVER_URL}hardwarestockcard`,
      stockCardData,
      axiosConfig
    );
    history.push("/hardware-spec");

    //console.log(result);
  } catch (e) {
    console.log(e);
  }
};
function HardwareInventoryAddStock() {
  history = useHistory();
  const { id: hardwareSpecId } = useParams();
  defaultRow.hardwareSpecId = hardwareSpecId;
  initialValues.hardwareSpecId = hardwareSpecId;
  const [supplierList, setSupplierList] = useState([]);
  const [hardwareSpec, setHardwareSpec] = useState({});
  const [spesifikasi, setSpesifikasi] = useState({});
  const [isConsumable, setIsConsumable] = useState(true);

  console.log("cek hardwareSpec", spesifikasi);

  useEffect(async () => {
    //console.log(hardwareSpecId);
    try {
      const supplierVendorRes = await axios.get(
        `${config.SERVER_URL}suppliervendor`,
        axiosConfig
      );
      //console.log(supplierVendorRes.data);
      setSupplierList(supplierVendorRes.data);
      console.log("Supplier List", supplierVendorRes.data);
    } catch (e) {
      console.log(e);
    }
    try {
      const hardwareSpecRes = await axios.get(
        `${config.SERVER_URL}hardwarespec/${hardwareSpecId}`,
        axiosConfig
      );
      setHardwareSpec(hardwareSpecRes.data);
      //console.log("Hardware Spec ", hardwareSpec);
      setIsConsumable(hardwareSpecRes.data.consumable);
      //console.log("is consumable state", isConsumable);
      const specArr = JSON.parse(hardwareSpecRes.data.spesifikasi);
      const spec = {};
      specArr.map((i, index) => {
        spec[i] = "";
      });
      defaultRow.spesifikasi = spec;
      setSpesifikasi(spec);
      console.log("default row", defaultRow);
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
                  <h2>Tambah Inventori Hardware</h2>
                </div>

                {isConsumable === true ? (
                  <Formik
                    initialValues={initialValues}
                    onSubmit={consumableSubmit}
                  >
                    <div className="body">
                      <Form>
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <label>Supplier</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  as="select"
                                  name="supplier_id"
                                  className="form-control no-resize"
                                >
                                  <option value={0}>Pilih Supplier</option>
                                  {supplierList.map(
                                    (supplierItem, supplierIndex) => (
                                      <option
                                        value={supplierItem.id}
                                        key={`option${supplierIndex}`}
                                      >
                                        {supplierItem.nama_pt}
                                      </option>
                                    )
                                  )}
                                </Field>
                              </div>
                            </div>

                            <label> Tanggal Pembelian</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="date"
                                  className="form-control no-resize"
                                  placeholder="Please type what you want..."
                                  id="tanggal_pembelian"
                                  name="tanggal_pembelian"
                                />
                              </div>
                            </div>
                            <label> Form Permintaan</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="text"
                                  className="form-control no-resize"
                                  placeholder="Please type what you want..."
                                  id="form_permintaan"
                                  name="form_permintaan"
                                />
                              </div>
                            </div>
                            <label> Harga</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="number"
                                  className="form-control no-resize"
                                  placeholder="Please type what you want..."
                                  id="harga"
                                  name="harga"
                                />
                              </div>
                            </div>
                            <label> Qty</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="number"
                                  className="form-control no-resize"
                                  placeholder="Please type what you want..."
                                  id="qty"
                                  name="qty"
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
                    </div>
                  </Formik>
                ) : (
                  <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form>
                      <div className="body">
                        <FieldArray name="inventoris">
                          {({ form, push }) => {
                            const { inventoris } = form.values;
                            console.log("cek inventoris array", inventoris);
                            return (
                              <div>
                                <div className="table-responsive">
                                  <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                                    <thead>
                                      <tr>
                                        <th>Supplier</th>
                                        <th>Merek</th>
                                        <th>Tipe</th>
                                        <th>Serial Number</th>
                                        <th>Harga</th>
                                        <th>Tanggal Pembelian</th>
                                        <th>Form Permintaan</th>
                                        {Object.keys(spesifikasi).map(
                                          (specName) => (
                                            <th key={`header-${specName}`}>
                                              {specName}
                                            </th>
                                          )
                                        )}

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
                                              {supplierList.map(
                                                (
                                                  supplierItem,
                                                  supplierIndex
                                                ) => (
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
                                              name={`inventoris[${index}].merek`}
                                            />
                                          </td>
                                          <td>
                                            <Field
                                              type="text"
                                              name={`inventoris[${index}].tipe`}
                                            />
                                          </td>
                                          <td>
                                            <Field
                                              type="text"
                                              name={`inventoris[${index}].serial_number`}
                                            />
                                          </td>
                                          <td>
                                            <Field
                                              type="number"
                                              name={`inventoris[${index}].harga`}
                                            />
                                          </td>
                                          <td>
                                            <Field
                                              type="date"
                                              name={`inventoris[${index}].tanggal_pembelian`}
                                            />
                                          </td>
                                          <td>
                                            <Field
                                              type="text"
                                              name={`inventoris[${index}].form_permintaan`}
                                            />
                                          </td>
                                          {Object.keys(spesifikasi).map(
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
                                          <td>
                                            <button
                                              className="btn btn-primary waves-effect"
                                              type="button"
                                              onClick={() => {
                                                console.log(
                                                  "jaran",
                                                  inventoris
                                                );
                                                inventoris.splice(0, 1);
                                              }}
                                            >
                                              X
                                            </button>
                                          </td>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HardwareInventoryAddStock;
