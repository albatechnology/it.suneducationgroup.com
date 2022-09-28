import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import HardwareInventoriAssign from "./HardwareInventoriAssign";
//import { useHistory } from "react-router-dom";

function TicketViewPermintaanInProgress({
  state,
  dispatch,
  ticketData,
  setTitle,
}) {
  const [hardwareList, setHardwareList] = useState([]);
  const [viewState, setViewState] = useState("VIEW");
  const [assignDetailData, setAssignDetailData] = useState([]);
  const [hardwareInventoryData, setHardwareInventoryData] = useState([]);
  //const [hardwareInventoryDataMapping, setHardwareInventoryDataMapping] =
  useState([]);
  //const [assignInventoryData, setAssignInventoryData] = useState({});
  const axiosConfig = AuthenticationService.getAxiosConfig();
  //const history = useHistory();
  //var SFV = null;

  const initialValues = ticketData;
  const validationSchema = Yup.object({});

  const shippingDetail = async (
    fromStock,
    values,
    detailData,
    setFieldValue
  ) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/shippingdetail`,
        {
          ticket: values,
          detail: detailData,
          fromStock,
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
        `${config.SERVER_URL}ticketpermintaan/processdetail`,
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
  const shippingTicket = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/shippingticket`,
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
  const declineTicket = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/processticket`,
        {
          status: 0,
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

  const setAssign = (detail) => {
    setViewState("ASSIGN");
    setAssignDetailData(detail);
    setTitle(`Assign ${detail.nama_hardware}`);
    /*
    $(".js-mailing-list").DataTable({
      responsive: true,
    });
    */
  };

  const assignInventori = async (values, setFieldValue) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/assigninventori`,
        values,
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
      setViewState("VIEW");
      setInventori();
    } catch (e) {
      console.log(e);
    }
  };
  const resetInventori = async (detail, setFieldValue) => {
    console.log("detail", detail);
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/resetinventori`,
        { detail },
        axiosConfig
      );
      setFieldValue("status", res.data.status);
      setFieldValue("details", res.data.details);
      setViewState("VIEW");
      setInventori();
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpermintaan/processticket`,
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
        `${config.SERVER_URL}ticketpermintaan`,
        { ticket: values, user: state.userState },
        axiosConfig
      );
      dispatch({ type: "VIEW", id: res.data.id, row: res.data });
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
    setInventori();

    /*
    try {
      const res = await axios.get(
        `${config.SERVER_URL}hardwareinventori`,
        axiosConfig
      );
      const data = [];
      const mapping = [];
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
      setHardwareInventoryDataMapping(mapping);
    } catch (e) {
      console.log(e);
    }
    */
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
                  console.log("details", details);
                  //SFV = setFieldValue;
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
                            <th>Action</th>
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
                              <td>
                                {details[index].status === 3 &&
                                state.userState === "ADMIN" ? (
                                  <React.Fragment>
                                    {details[index].consumable ? (
                                      <React.Fragment>
                                        <button
                                          className="btn btn-primary"
                                          type="button"
                                          style={{ margin: "5px" }}
                                          onClick={() => {
                                            shippingDetail(
                                              true,
                                              values,
                                              details[index],
                                              setFieldValue
                                            );
                                          }}
                                        >
                                          Shipping (From Stock)
                                        </button>
                                        <button
                                          className="btn btn-primary"
                                          type="button"
                                          style={{ margin: "5px" }}
                                          onClick={() => {
                                            shippingDetail(
                                              false,
                                              values,
                                              details[index],
                                              setFieldValue
                                            );
                                          }}
                                        >
                                          Shipping
                                        </button>
                                      </React.Fragment>
                                    ) : details[index].assign_no_asset ? (
                                      <React.Fragment>
                                        <button
                                          className="btn btn-primary"
                                          type="button"
                                          style={{ margin: "5px" }}
                                          onClick={() => {
                                            shippingDetail(
                                              true,
                                              values,
                                              details[index],
                                              setFieldValue
                                            );
                                          }}
                                        >
                                          Shipping
                                        </button>
                                        <button
                                          className="btn btn-primary"
                                          type="button"
                                          style={{ margin: "5px" }}
                                          onClick={() => {
                                            resetInventori(
                                              details[index],
                                              setFieldValue
                                            );
                                          }}
                                        >
                                          Reset
                                        </button>
                                      </React.Fragment>
                                    ) : (
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        style={{ margin: "5px" }}
                                        onClick={() => {
                                          setAssign(details[index]);
                                        }}
                                      >
                                        Assign
                                      </button>
                                    )}
                                  </React.Fragment>
                                ) : null}
                                {details[index].status === 4 &&
                                (state.userState === "ADMIN" ||
                                  state.userState === "USER") ? (
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
                    {(values.status === 1 &&
                      state.userState === "SUPERVISOR") ||
                    (values.status === 3 && state.userState === "ADMIN") ? (
                      <button
                        type="button"
                        className="btn btn-primary waves-effect "
                        onClick={() => {
                          dispatch({
                            type: "EDIT",
                            id: values.id,
                            row: values,
                          });
                        }}
                      >
                        Edit
                      </button>
                    ) : null}
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
          ) : null}
          {viewState === "ASSIGN" ? (
            <HardwareInventoriAssign
              hardwareInventoryData={hardwareInventoryData}
              assignDetailData={assignDetailData}
              setFieldValue={setFieldValue}
              assignInventori={assignInventori}
            />
          ) : /*
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                    <thead>
                      <tr>
                        <th>Nomor Asset</th>
                        <th>Nomor Seri</th>
                        <th>Merek</th>
                        <th>Tipe</th>
                        <th>Harga</th>

                        {hardwareInventoryData[
                          assignDetailData.hardware_spec_id
                        ] !== undefined
                          ? hardwareInventoryData[
                              assignDetailData.hardware_spec_id
                            ].specField.map((i) => <th>{i}</th>)
                          : null}

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hardwareInventoryData[
                        assignDetailData.hardware_spec_id
                      ] !== undefined
                        ? hardwareInventoryData[
                            assignDetailData.hardware_spec_id
                          ].inventoris.map((i) => (
                            <tr key={i.id}>
                              <td>{i.no_asset}</td>
                              <td>{i.serial_number}</td>
                              <td>{i.merek}</td>
                              <td>{i.tipe}</td>
                              <td>{i.harga}</td>
                              {hardwareInventoryData[
                                assignDetailData.hardware_spec_id
                              ] !== undefined
                                ? hardwareInventoryData[
                                    assignDetailData.hardware_spec_id
                                  ].specField.map((f) => (
                                    <td>{i.spesifikasi[f]}</td>
                                  ))
                                : null}
                              <td>
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => {
                                    assignInventori(
                                      {
                                        hardwareInventoriId: i.id,
                                        ticketPermintaanId: assignDetailData.id,
                                      },
                                      setFieldValue
                                    );
                                  }}
                                >
                                  Assign
                                </button>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
                                */
          null}
        </React.Fragment>
      )}
    </Formik>
  );
}

export default TicketViewPermintaanInProgress;
