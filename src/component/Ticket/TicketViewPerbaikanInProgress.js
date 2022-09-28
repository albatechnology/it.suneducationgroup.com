import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

import dateFormat from "dateformat";
import HardwareInventoriAssign from "./HardwareInventoriAssign";

function TicketViewPerbaikanInProgress({
  state,
  dispatch,
  ticketData,
  setTitle,
}) {
  const [hardwareList, setHardwareList] = useState([]);
  const [viewState, setViewState] = useState("VIEW");
  const [assignState, setAssignState] = useState("REPLACE");
  const [assignDetailData, setAssignDetailData] = useState([]);
  const [hardwareInventoryData, setHardwareInventoryData] = useState([]);

  const today = dateFormat(new Date(), "yyyy-mm-dd");
  const history = useHistory();

  const axiosConfig = AuthenticationService.getAxiosConfig();
  const defaultRow = {
    inventori_id: 0,
    keterangan: "",
  };
  const initialValues = ticketData;
  const validationSchema = Yup.object({});
  console.log("ticketData", ticketData);
  const processRepair = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/processrepairinventori`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };
  const processReplace = async ({ values, inventori, setFieldValue }) => {
    console.log("inventori", inventori);
    setAssignState("REPLACE");
    setViewState("ASSIGN");
    setAssignDetailData({
      id: inventori.id,
      hardware_spec_id: inventori.hardware_spesifikasi_id,
    });
    setTitle(`Assign ${inventori.nama_hardware}`);
  };
  const assignPeminjaman = async ({ values, inventori, setFieldValue }) => {
    //console.log("inventori", inventori);
    setAssignState("PEMINJAMAN");
    setViewState("ASSIGN");
    setAssignDetailData({
      id: inventori.id,
      hardware_spec_id: inventori.hardware_spesifikasi_id,
    });
    setTitle(`Assign ${inventori.nama_hardware}`);
  };
  const shippingPeminjaman = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/shippingpeminjaman`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };
  const receivePeminjaman = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/receivepeminjaman`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };
  const returnPeminjaman = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/returnpeminjaman`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };
  const completePeminjaman = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/completepeminjaman`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };
  const processComplete = async ({ values, inventori, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/completeinventori`,
        {
          ticket: values,
          inventori,
        },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("inventoris", res.data.inventoris);
    } catch (e) {
      console.log(e);
    }
  };

  const completeTicket = async ({ values, setFieldValue }) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/processticket`,
        {
          ticket: values,
        },
        axiosConfig
      );
      dispatch({ type: "LIST" });
    } catch (e) {
      console.log(e);
    }
  };
  const assignInventori = async (
    { hardwareInventoriId, ticketDetailId },
    setFieldValue
  ) => {
    //console.log("assign Inventori");
    try {
      if (assignState === "REPLACE") {
        const res = await axios.post(
          `${config.SERVER_URL}ticketperbaikan/assignreplaceinventori`,
          {
            hardwareInventoriId,
            perbaikanInventoriId: ticketDetailId,
          },
          axiosConfig
        );
        console.log("res data", res.data);
        setFieldValue("status", res.data.status);
        setFieldValue("inventoris", res.data.inventoris);
        setViewState("VIEW");
        setInventori();
      }
      if (assignState === "PEMINJAMAN") {
        const res = await axios.post(
          `${config.SERVER_URL}ticketperbaikan/assignpeminjamaninventori`,
          {
            hardwareInventoriId,
            perbaikanInventoriId: ticketDetailId,
          },
          axiosConfig
        );
        console.log("res data", res.data);
        setFieldValue("status", res.data.status);
        setFieldValue("inventoris", res.data.inventoris);
        setViewState("VIEW");
        setInventori();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const setInventori = async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}hardwareinventori/available`,
        axiosConfig
      );
      const data = [];
      const mapping = [];
      console.log("hardware inventori data", res.data);
      res.data.forEach((item, index) => {
        mapping[item.no_asset] = item;
        if (data[item.hardware_spesifikasi_id] === undefined) {
          const specField = [];
          JSON.parse(item.spesifikasi, (key, value) => {
            if (key !== "") specField.push(key);
          });

          data[item.hardware_spesifikasi_id] = {
            specField,
            inventoris: [],
          };
        }
        const InventorySpec = [];
        JSON.parse(item.spesifikasi, (key, value) => {
          InventorySpec[key] = value;
        });
        data[item.hardware_spesifikasi_id].inventoris.push({
          ...item,
          spesifikasi: InventorySpec,
        });
      });

      console.log("data", data);
      setHardwareInventoryData(data);
      //setHardwareInventoryDataMapping(mapping);
    } catch (e) {
      console.log(e);
    }
  };
  const sendMessage = async ({ values, setFieldValue }) => {
    try {
      const message = values.message;
      const res = await axios.post(
        `${config.SERVER_URL}ticketperbaikan/sendmessage`,
        {
          ticket: values,
          message,
          userState: state.userState,
        },
        axiosConfig
      );
      setFieldValue("messages", res.data.messages);
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      const res = await axios.put(
        `${config.SERVER_URL}ticketperbaikan`,
        { ticket: values, user: state.userState },
        axiosConfig
      );
      dispatch({ type: "VIEW", id: res.data.id, row: res.data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    setInventori();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <React.Fragment>
          {viewState === "VIEW" ? (
            <Form>
              <div className="row clearfix">
                <div className="col-sm-12">
                  <label> Subject</label>
                  <div className="form-group">
                    <div className="form-line">
                      <Field
                        disabled={true}
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <label> Tanggal</label>
                  <div className="form-group">
                    <div className="form-line">
                      <Field
                        type="date"
                        disabled={true}
                        className="form-control"
                        id="tanggal_pengajuan"
                        name="tanggal_pengajuan"
                      />
                    </div>
                  </div>
                  <label> Jenis Perbaikan</label>
                  <div className="form-group">
                    <Field
                      type="text"
                      disabled={true}
                      className="form-control"
                      name="jenis_perbaikan"
                      id="jenis_perbaikan"
                    />
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
                        value={state.statusMapping[ticketData.status]}
                      />
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
                            <th>Hardware</th>
                            <th>No Asset</th>
                            <th>Merek</th>
                            <th>Tipe</th>
                            <th>Serial Number</th>
                            <th>Keterangan</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Peminjaman</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inventoris.map((item, index) => (
                            <tr key={index}>
                              <td>{inventoris[index].nama_hardware}</td>
                              <td>{inventoris[index].no_asset}</td>
                              <td>{inventoris[index].merek}</td>
                              <td>{inventoris[index].tipe}</td>
                              <td>{inventoris[index].serial_number}</td>
                              <td>
                                <Field
                                  disabled={true}
                                  as="textarea"
                                  className="form-control"
                                  rows="2"
                                  name={`inventoris[${index}].keterangan`}
                                />
                              </td>
                              <td>
                                {state.statusMapping[inventoris[index].status]}
                              </td>

                              <td>
                                <React.Fragment>
                                  {!inventoris[index].peminjaman &&
                                  inventoris[index].status === 3 &&
                                  state.userState === "ADMIN" ? (
                                    <button
                                      type="button"
                                      style={{ margin: "10px" }}
                                      className="btn btn-primary waves-effect"
                                      type="button"
                                      onClick={() => {
                                        processRepair({
                                          values,
                                          inventori: item,
                                          setFieldValue,
                                        });
                                      }}
                                    >
                                      Process Repair
                                    </button>
                                  ) : null}
                                  {!inventoris[index].peminjaman &&
                                  (inventoris[index].status === 3 ||
                                    inventoris[index].status === 7) &&
                                  state.userState === "ADMIN" ? (
                                    <button
                                      type="button"
                                      style={{ margin: "10px" }}
                                      className="btn btn-primary waves-effect"
                                      type="button"
                                      onClick={() => {
                                        processComplete({
                                          values,
                                          inventori: item,
                                          setFieldValue,
                                        });
                                      }}
                                    >
                                      Complete
                                    </button>
                                  ) : null}
                                  {!inventoris[index].peminjaman &&
                                  (inventoris[index].status === 3 ||
                                    inventoris[index].status === 7) &&
                                  state.userState === "ADMIN" ? (
                                    <button
                                      type="button"
                                      style={{ margin: "10px" }}
                                      className="btn btn-primary waves-effect"
                                      type="button"
                                      onClick={() => {
                                        processReplace({
                                          values,
                                          inventori: item,
                                          setFieldValue,
                                        });
                                      }}
                                    >
                                      Replace
                                    </button>
                                  ) : null}
                                  {inventoris[index].peminjaman &&
                                  inventoris[index].status === 3 &&
                                  state.userState === "ADMIN" ? (
                                    <button
                                      type="button"
                                      style={{ margin: "10px" }}
                                      className="btn btn-primary waves-effect"
                                      type="button"
                                      onClick={() => {
                                        processRepair({
                                          values,
                                          inventori: item,
                                          setFieldValue,
                                        });
                                      }}
                                    >
                                      Process Repair
                                    </button>
                                  ) : null}
                                </React.Fragment>
                              </td>
                              <td>
                                {!inventoris[index].peminjaman &&
                                (inventoris[index].status === 3 ||
                                  inventoris[index].status === 7) &&
                                state.userState === "ADMIN" ? (
                                  <button
                                    type="button"
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary waves-effect"
                                    type="button"
                                    onClick={() => {
                                      assignPeminjaman({
                                        values,
                                        inventori: item,
                                        setFieldValue,
                                      });
                                    }}
                                  >
                                    Assign Peminjaman
                                  </button>
                                ) : null}
                                {inventoris[index].peminjaman &&
                                (inventoris[index].status === 3 ||
                                  inventoris[index].status === 7) &&
                                state.userState === "ADMIN" ? (
                                  <button
                                    type="button"
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary waves-effect"
                                    type="button"
                                    onClick={() => {
                                      shippingPeminjaman({
                                        values,
                                        inventori: item,
                                        setFieldValue,
                                      });
                                    }}
                                  >
                                    Shipping
                                  </button>
                                ) : null}
                                {inventoris[index].peminjaman &&
                                inventoris[index].peminjaman.status === 4 &&
                                state.userState === "USER" ? (
                                  <button
                                    type="button"
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary waves-effect"
                                    type="button"
                                    onClick={() => {
                                      receivePeminjaman({
                                        values,
                                        inventori: item,
                                        setFieldValue,
                                      });
                                    }}
                                  >
                                    Receive
                                  </button>
                                ) : null}
                                {inventoris[index].peminjaman &&
                                inventoris[index].peminjaman.status === 5 &&
                                state.userState === "USER" ? (
                                  <button
                                    type="button"
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary waves-effect"
                                    type="button"
                                    onClick={() => {
                                      returnPeminjaman({
                                        values,
                                        inventori: item,
                                        setFieldValue,
                                      });
                                    }}
                                  >
                                    Return
                                  </button>
                                ) : null}
                                {inventoris[index].peminjaman &&
                                inventoris[index].peminjaman.status === 6 &&
                                state.userState === "ADMIN" ? (
                                  <button
                                    type="button"
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary waves-effect"
                                    type="button"
                                    onClick={() => {
                                      completePeminjaman({
                                        values,
                                        inventori: item,
                                        setFieldValue,
                                      });
                                    }}
                                  >
                                    Complete
                                  </button>
                                ) : null}
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
                  <label> Alasan</label>
                  <div className="form-group">
                    <div className="form-line">
                      <Field
                        as="textarea"
                        rows="3"
                        className="form-control no-resize"
                        id="alasan"
                        name="alasan"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label> Message</label>
              <FieldArray name="messages">
                {(params) => {
                  const { form, push, remove } = params;
                  const { messages } = form.values;
                  let no_seq = 1;
                  return (
                    <React.Fragment>
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th style={{ width: "10%" }}>Sender</th>
                            <th>Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {messages.map((item, index) => (
                            <tr key={index}>
                              <td>
                                {messages[index].fullname} <br />
                                {messages[index].user_type === 1
                                  ? "(User)"
                                  : "(Admin)"}
                              </td>
                              <td>{messages[index].message}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  );
                }}
              </FieldArray>
              <div className="row clearfix">
                <div className="col-sm-10">
                  <Field
                    as="textarea"
                    rows="3"
                    className="form-control no-resize"
                    id="message"
                    name="message"
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "5px" }}
                    type="button"
                    onClick={() => {
                      sendMessage({ values, setFieldValue });
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-sm-12">
                  {state.userState === "ADMIN" ? (
                    <button
                      className="btn btn-primary"
                      style={{ margin: "5px" }}
                      type="button"
                      onClick={() => {
                        completeTicket({ values, setFieldValue });
                      }}
                    >
                      Complete
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
            </Form>
          ) : null}
          {viewState === "ASSIGN" ? (
            <HardwareInventoriAssign
              hardwareInventoryData={hardwareInventoryData}
              assignDetailData={assignDetailData}
              setFieldValue={setFieldValue}
              assignInventori={assignInventori}
            />
          ) : null}
        </React.Fragment>
      )}
    </Formik>
  );
}

export default TicketViewPerbaikanInProgress;
