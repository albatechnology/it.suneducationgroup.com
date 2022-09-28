import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";

import dateFormat from "dateformat";
import TicketPerbaikanInventoriAssign from "./TicketPerbaikanInventoriAssign";

function TicketEditPerbaikanAdmin({ state, dispatch, ticketData, setTitle }) {
  const [jenisPerbaikan, setJenisPerbaikan] = useState([]);
  const [hardwareInventoriData, setHardwareInventoriData] = useState({
    list: [],
    mapping: [],
  });
  const [editState, setEditState] = useState("EDIT");
  const [inventoriPush, setInventoriPush] = useState(null);

  const today = dateFormat(new Date(), "yyyy-mm-dd");
  const history = useHistory();

  const axiosConfig = AuthenticationService.getAxiosConfig();
  const defaultRow = {
    inventori_id: 0,
    keterangan: "",
  };
  const initialValues = ticketData;
  const validationSchema = Yup.object({});
  const setAssign = (push) => {
    setInventoriPush(() => push);
    setEditState("ASSIGN");
    setTitle(`Assign Inventori`);
    /*
    $(".js-mailing-list").DataTable({
      responsive: true,
    });
    */
  };

  const assignInventori = async (values, setFieldValue) => {
    const { hardwareInventoriId } = values;
    inventoriPush({
      inventori_id: hardwareInventoriId,
      keterangan: "Add By Admin",
    });
    setEditState("EDIT");
    //.log("assign Inventori values", values);
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
    try {
      const res = await axios.get(
        `${config.SERVER_URL}dropdowndata/jenisperbaikan`,
        axiosConfig
      );
      if (res.data[0] !== undefined) {
        initialValues.jenis_perbaikan = res.data[0].jenis_perbaikan_value;
      }
      setJenisPerbaikan(res.data);
    } catch (e) {
      console.log(e);
    }
    try {
      const res = await axios.get(
        `${config.SERVER_URL}hardwareinventori/assigned`,
        axiosConfig
      );

      const hardwareInventoriMapping = [];
      res.data.forEach((inventoriItem) => {
        hardwareInventoriMapping[inventoriItem.id] = inventoriItem;
      });

      setHardwareInventoriData({
        list: res.data,
        mapping: hardwareInventoriMapping,
      });
      console.log("hardwareInventoriData");
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
          <React.Fragment>
            {editState === "EDIT" ? (
              <Form>
                <div className="row clearfix">
                  <div className="col-sm-12">
                    <label> Subject admin</label>
                    <div className="form-group">
                      <div className="form-line">
                        <Field
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
                        as="select"
                        className="form-control"
                        name="jenis_perbaikan"
                        id="jenis_perbaikan"
                      >
                        {jenisPerbaikan[0] !== undefined
                          ? jenisPerbaikan.map((item, index) => (
                              <option
                                value={item.jenis_perbaikan_value}
                                key={`jenis-perbaikan${index}`}
                              >
                                {item.jenis_perbaikan_value}
                              </option>
                            ))
                          : null}
                      </Field>
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
                              <th>Hardware (No Asset)</th>
                              <th>Merek</th>
                              <th>Tipe</th>
                              <th>Serial Number</th>
                              <th>Keterangan</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {inventoris.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <Field
                                    as="select"
                                    className="form-control"
                                    name={`inventoris[${index}].inventori_id`}
                                  >
                                    <option value={0}>Pilih Inventori</option>
                                    {hardwareInventoriData.list[0] !== undefined
                                      ? hardwareInventoriData.list.map(
                                          (inventoriItem, inventoriIndex) => (
                                            <option
                                              value={inventoriItem.id}
                                              key={`option${index}-${inventoriIndex}`}
                                            >
                                              {inventoriItem.nama_hardware} (
                                              {inventoriItem.no_asset})
                                            </option>
                                          )
                                        )
                                      : null}
                                  </Field>
                                </td>
                                <td>
                                  {hardwareInventoriData.mapping[
                                    inventoris[index].inventori_id
                                  ] !== undefined
                                    ? hardwareInventoriData.mapping[
                                        inventoris[index].inventori_id
                                      ].merek
                                    : null}
                                </td>
                                <td>
                                  {hardwareInventoriData.mapping[
                                    inventoris[index].inventori_id
                                  ] !== undefined
                                    ? hardwareInventoriData.mapping[
                                        inventoris[index].inventori_id
                                      ].tipe
                                    : null}
                                </td>
                                <td>
                                  {hardwareInventoriData.mapping[
                                    inventoris[index].inventori_id
                                  ] !== undefined
                                    ? hardwareInventoriData.mapping[
                                        inventoris[index].inventori_id
                                      ].serial_number
                                    : null}
                                </td>
                                <td>
                                  <Field
                                    as="textarea"
                                    className="form-control"
                                    rows="2"
                                    name={`inventoris[${index}].keterangan`}
                                  />
                                </td>
                                <td>
                                  {!inventoris[index].id ? (
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
                        <div>
                          <button
                            type="button"
                            style={{ margin: "10px" }}
                            className="btn btn-primary waves-effect"
                            type="button"
                            onClick={() => {
                              no_seq++;
                              setAssign(push);
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
                          rows="3"
                          className="form-control no-resize"
                          id="alasan"
                          name="alasan"
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
            ) : null}
            {editState === "ASSIGN" ? (
              <TicketPerbaikanInventoriAssign
                hardwareInventoriData={hardwareInventoriData}
                setFieldValue={setFieldValue}
                assignInventori={assignInventori}
              />
            ) : null}
          </React.Fragment>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default TicketEditPerbaikanAdmin;
