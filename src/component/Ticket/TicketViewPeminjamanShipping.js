import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

function TicketViewPeminjamanShipping({
  state,
  dispatch,
  ticketData,
  setTitle,
}) {
  const [hardwareList, setHardwareList] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const history = useHistory();

  const initialValues = ticketData;
  const validationSchema = Yup.object({});
  console.log("ticket data", ticketData);
  const receiveDetail = async (values, detailData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/receivedetail`,
        {
          status: 10,
          ticket: values,
          detail: detailData,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const returnDetail = async (values, detailData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/returndetail`,
        {
          status: 10,
          ticket: values,
          detail: detailData,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const completeDetail = async (values, detailData, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/completedetail`,
        {
          status: 10,
          ticket: values,
          detail: detailData,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const receiveTicket = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/receiveticket`,
        {
          status: 10,
          ticket: values,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const returnTicket = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/returnticket`,
        {
          status: 10,
          ticket: values,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const completeTicket = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/completeticket`,
        {
          ticket: values,
        },
        axiosConfig
      );

      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman/processticket`,
        values,
        axiosConfig
      );
    } catch (e) {
      console.log(e);
    }
  };

  const saveTicket = async (values) => {
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
                <label> Nomor Tiket</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={true}
                      type="text"
                      className="form-control"
                      placeholder="Question"
                      value={
                        "T" +
                        `000000${values.id}`.substring(
                          `000000${values.id}`.length - 5
                        )
                      }
                    />
                  </div>
                </div>
                <label> Subject</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={true}
                      type="text"
                      className="form-control"
                      placeholder="Question"
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
                      disabled={true}
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
                      disabled={true}
                      type="date"
                      className="form-control"
                      placeholder="Question"
                      id="tanggal_akhir"
                      name="tanggal_akhir"
                    />
                  </div>
                </div>
                <label> Request By</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      disabled={true}
                      type="text"
                      className="form-control"
                      placeholder="Question"
                      id="fullname"
                      name="fullname"
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
              {({ form, push }) => {
                const { details } = form.values;
                let no_seq = 1;
                console.log(form.values);
                return (
                  <React.Fragment>
                    <table className="table table-bordered ">
                      <thead>
                        <tr>
                          <th>Jenis Hardware</th>
                          <th>Jumlah/Nomor Asset</th>
                          <th>Stock</th>
                          <th>Keterangan</th>
                          <th>Status</th>
                          {values.status === 4 ? <th>Action</th> : null}
                        </tr>
                      </thead>
                      <tbody>
                        {details.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <Field
                                as="select"
                                disabled={true}
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
                              {details[index].assign_no_asset
                                ? details[index].assign_no_asset
                                : details[index].qty}
                            </td>
                            <td>
                              <Field
                                type="number"
                                disabled={true}
                                className="form-control"
                                name={`details[${index}].stock_qty`}
                              />
                            </td>

                            <td>
                              <Field
                                as="textarea"
                                disabled={true}
                                className="form-control"
                                rows="2"
                                name={`details[${index}].keterangan`}
                              />
                            </td>
                            <td>
                              {state.statusMapping[details[index].status]}
                            </td>
                            {values.status === 4 ||
                            values.status === 5 ||
                            values.status === 6 ? (
                              <td>
                                {details[index].status === 4 &&
                                state.userState === "USER" ? (
                                  <button
                                    className="btn btn-primary"
                                    type="button"
                                    style={{ margin: "5px" }}
                                    onClick={() => {
                                      receiveDetail(
                                        values,
                                        details[index],
                                        setFieldValue
                                      );
                                    }}
                                  >
                                    Receive
                                  </button>
                                ) : null}
                                {details[index].status === 5 &&
                                state.userState === "USER" ? (
                                  <button
                                    className="btn btn-primary"
                                    type="button"
                                    style={{ margin: "5px" }}
                                    onClick={() => {
                                      returnDetail(
                                        values,
                                        details[index],
                                        setFieldValue
                                      );
                                    }}
                                  >
                                    Return
                                  </button>
                                ) : null}
                                {details[index].status === 6 &&
                                state.userState === "ADMIN" ? (
                                  <button
                                    className="btn btn-primary"
                                    type="button"
                                    style={{ margin: "5px" }}
                                    onClick={() => {
                                      completeDetail(
                                        values,
                                        details[index],
                                        setFieldValue
                                      );
                                    }}
                                  >
                                    Complete
                                  </button>
                                ) : null}
                              </td>
                            ) : null}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                      disabled={true}
                      rows="3"
                      className="form-control no-resize"
                      placeholder="Please type what you want..."
                      id="alasan"
                      name="alasan"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <label> Catatan Supervisor</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      as="textarea"
                      rows="3"
                      className="form-control no-resize"
                      placeholder="Please type what you want..."
                      id="catatan_supervisor"
                      name="catatan_supervisor"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <label> Catatan Admin</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      as="textarea"
                      disabled={state.userState === "ADMIN" ? false : true}
                      rows="3"
                      className="form-control no-resize"
                      placeholder="Please type what you want..."
                      id="catatan_admin"
                      name="catatan_admin"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <label> Catatan User</label>
                <div className="form-group">
                  <div className="form-line">
                    <Field
                      as="textarea"
                      disabled={state.userState === "USER" ? false : true}
                      rows="3"
                      className="form-control no-resize"
                      id="catatan_user"
                      name="catatan_user"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  {state.userState === "USER" && values.status === 4 ? (
                    <React.Fragment>
                      <button
                        className="btn btn-primary"
                        style={{ margin: "5px" }}
                        type="button"
                        onClick={() => {
                          receiveTicket(values, setFieldValue);
                        }}
                      >
                        Receive All
                      </button>
                    </React.Fragment>
                  ) : null}
                  {state.userState === "USER" && values.status === 5 ? (
                    <React.Fragment>
                      <button
                        className="btn btn-primary"
                        style={{ margin: "5px" }}
                        type="button"
                        onClick={() => {
                          returnTicket(values, setFieldValue);
                        }}
                      >
                        Return All
                      </button>
                    </React.Fragment>
                  ) : null}
                  {state.userState === "ADMIN" && values.status === 6 ? (
                    <React.Fragment>
                      <button
                        className="btn btn-primary"
                        style={{ margin: "5px" }}
                        type="button"
                        onClick={() => {
                          completeTicket(values, setFieldValue);
                        }}
                      >
                        Complete Ticket
                      </button>
                    </React.Fragment>
                  ) : null}
                  {values.status !== 10 ? (
                    <button
                      className="btn btn-primary"
                      style={{ margin: "5px" }}
                      type="button"
                      onClick={() => {
                        saveTicket(values);
                      }}
                    >
                      Save
                    </button>
                  ) : null}
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

export default TicketViewPeminjamanShipping;
