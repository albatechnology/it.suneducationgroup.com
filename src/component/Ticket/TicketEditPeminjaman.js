import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

function TicketEditPeminjaman({ state, dispatch, ticketData, setTitle }) {
  const [hardwareList, setHardwareList] = useState([]);
  const [hardwareMapping, setHardwareMapping] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const history = useHistory();
  const defaultRow = {
    id: 0,
    hardware_spec_id: 0,
    qty: 1,
    keterangan:
      state.userState === "USER"
        ? ""
        : state.userState === "SUPERVISOR"
        ? "Add By Supervisor"
        : "Add By Admin",
  };

  const initialValues = ticketData;

  const validationSchema = Yup.object({});
  console.log("ticket data", ticketData);

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      const res = await axios.put(
        `${config.SERVER_URL}ticketpeminjaman`,
        { ticket: values, user: state.userState },
        axiosConfig
      );
      dispatch({ type: "VIEW", id: res.data.id, row: res.data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}hardwarespec`,
        axiosConfig
      );
      const mapping = [];
      res.data.forEach((item, index) => {
        mapping[item.id] = item;
      });
      setHardwareMapping(mapping);
      setHardwareList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="row clearfix">
              <div className="col-sm-12">
                <label> Subject</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={
                        state.userState === "USER" && values.status === 1
                          ? false
                          : true
                      }
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                    />
                  </div>
                </div>
                <label> Tanggal Pengajuan</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={true}
                      type="date"
                      className="form-control"
                      placeholder="Question"
                      id="tanggal_pengajuan"
                      name="tanggal_pengajuan"
                    />
                  </div>
                </div>
                <label> Tanggal Awal</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={
                        state.userState === "USER" && values.status === 1
                          ? false
                          : true
                      }
                      type="date"
                      className="form-control"
                      placeholder="Question"
                      id="tanggal_awal"
                      name="tanggal_awal"
                    />
                  </div>
                </div>
                <label> Tanggal Akhir</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={
                        state.userState === "USER" && values.status === 1
                          ? false
                          : true
                      }
                      type="date"
                      className="form-control"
                      placeholder="Question"
                      id="tanggal_akhir"
                      name="tanggal_akhir"
                    />
                  </div>
                </div>
                <label> Status</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={true}
                      type="text"
                      className="form-control"
                      placeholder="Question"
                      value={state.statusMapping[values.status]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <label> Detail</label>
            <FieldArray name="details">
              {({ form, push, remove }) => {
                const { details } = form.values;
                let no_seq = 1;
                console.log(form.values);
                return (
                  <React.Fragment>
                    <table className="table table-bordered ">
                      <thead>
                        <tr>
                          <th>Jenis Hardware</th>
                          <th>Jumlah</th>
                          <th>Stock</th>
                          <th>Keterangan</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <Field
                                as="select"
                                disabled={item.id ? true : false}
                                className="form-control"
                                name={`details[${index}].hardware_spec_id`}
                              >
                                <option value={0}>Pilih Hardware</option>
                                {hardwareList.map(
                                  (hardwareItem, hardwareIndex) => (
                                    <option
                                      value={hardwareItem.id}
                                      key={`option${index}-${hardwareIndex}`}
                                    >
                                      {hardwareItem.nama_hardware}
                                    </option>
                                  )
                                )}
                              </Field>
                            </td>
                            <td>
                              <Field
                                type="number"
                                disabled={item.id ? true : false}
                                className="form-control"
                                name={`details[${index}].qty`}
                              />
                            </td>
                            <td>
                              {hardwareMapping[
                                details[index].hardware_spec_id
                              ] !== undefined
                                ? hardwareMapping[
                                    details[index].hardware_spec_id
                                  ].stock_qty
                                : null}
                            </td>
                            <td>
                              <Field
                                as="textarea"
                                disabled={
                                  state.userState === "USER" ? false : true
                                }
                                className="form-control"
                                rows="2"
                                name={`details[${index}].keterangan`}
                              />
                            </td>
                            <td>
                              {state.statusMapping[details[index].status]}
                            </td>
                            <td>
                              {state.userState === "USER" &&
                              details[index].status === 1 ? (
                                <button
                                  type="button"
                                  style={{ margin: "10px" }}
                                  className="btn btn-primary waves-effect"
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                  }}
                                >
                                  [-]
                                </button>
                              ) : details[index].id === 0 ? (
                                <button
                                  type="button"
                                  style={{ margin: "10px" }}
                                  className="btn btn-primary waves-effect"
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                  }}
                                >
                                  [-]
                                </button>
                              ) : null}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {(state.userState === "USER" && values.status === 1) ||
                    (state.userState === "SUPERVISOR" && values.status === 1) ||
                    (state.userState === "ADMIN" &&
                      (values.status === 2 || values.status === 3)) ? (
                      <div>
                        <button
                          type="button"
                          style={{ margin: "10px" }}
                          className="btn btn-primary waves-effect"
                          type="button"
                          onClick={() => {
                            no_seq++;
                            push(defaultRow);
                          }}
                        >
                          [+]
                        </button>
                      </div>
                    ) : null}

                    <div></div>
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
                      disabled={
                        state.userState === "USER" && values.status === 1
                          ? false
                          : true
                      }
                      rows="3"
                      className="form-control no-resize"
                      id="alasan"
                      name="alasan"
                    />
                  </div>
                </div>
              </div>
              {state.userState !== "USER" ? (
                <div className="col-sm-12">
                  <label> Catatan Supervisor</label>
                  <div className="form-group">
                    <div className="form-line">
                      <Field
                        as="textarea"
                        disabled={
                          state.userState === "SUPERVISOR" &&
                          values.status === 1
                            ? false
                            : true
                        }
                        rows="3"
                        className="form-control no-resize"
                        id="catatan_supervisor"
                        name="catatan_supervisor"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {state.userState !== "USER" &&
              state.userState !== "SUPERVISOR" ? (
                <div className="col-sm-12">
                  <label> Catatan Admin</label>
                  <div className="form-group">
                    <div className="form-line">
                      <Field
                        as="textarea"
                        disabled={
                          state.userState === "ADMIN" &&
                          (values.status === 2 || values.status === 3)
                            ? false
                            : true
                        }
                        rows="3"
                        className="form-control no-resize"
                        id="catatan_admin"
                        name="catatan_admin"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "5px" }}
                    type="submit"
                  >
                    Save
                  </button>
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
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default TicketEditPeminjaman;
