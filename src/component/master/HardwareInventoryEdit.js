import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function HardwareInventoryView({ state, dispatch }) {
  const [supplierData, setSupplierData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  let { id } = useParams();
  //console.log("userparan", useParams());
  const initialValues = state.currentRow;
  const validationSchema = Yup.object({});
  const history = useHistory();
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const res = await axios.put(
        `${config.SERVER_URL}hardwareinventori`,
        values,
        axiosConfig
      );
      console.log(res);
      if (res.data.error_code === 0) {
        //console.log(res.data.payload);
        window.location = `/hardware-inventori/${res.data.inventori.hardware_spesifikasi_id}`;
      }
      //setSupplierData(res.data);
      //alert(`${email} ${deskripsi} ${config.SERVER_URL}`);
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

      setSupplierData(res.data);
      //alert(`${email} ${deskripsi} ${config.SERVER_URL}`);
    } catch (e) {
      console.log(e);
    }
    // get userData
    /*
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

        setData({ ...payload.data, spesifikasi });
        //console.log(res.data);
        //setUser(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }*/
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Software</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <h2 className="card-inside-title">Edit</h2>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    // validationSchema={validationSchema}
                    enableReinitialize={true}
                  >
                    {({ values, setFieldValue }) => (
                      <Form>
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <label>Hardware</label>
                            <div className="form-group">
                              <div className="form-line">
                                <Field
                                  type="text"
                                  disabled={true}
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
                                  disabled={true}
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
                                  as="select"
                                  name="supplier_id"
                                  className="form-control no-resize"
                                >
                                  <option value={0}>Pilih Supplier</option>
                                  {supplierData.map(
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
                            {Object.keys(values.spesifikasi).map(
                              (specKey, specIndex) => (
                                <React.Fragment key={specIndex}>
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
                                </React.Fragment>
                              )
                            )}
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

export default HardwareInventoryView;
