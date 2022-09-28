import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "../../logic/AuthenticationService";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
//const today = dateFormat(new Date(), "yyyy-mm-dd");

function TicketAddPeminjaman({ state, dispatch }) {
  const [hardwareList, setHardwareList] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const history = useHistory();
  const today = dateFormat(new Date(), "yyyy-mm-dd");

  const defaultRow = {
    hardware_spec_id: 0,
    qty: 0,
    keterangan: "",
  };
  const initialValues = {
    subject: "",
    tanggal_pengajuan: today,
    tanggal_awal: today,
    tanggal_akhir: today,
    alasan: "",
    details: [defaultRow],
  };
  const validationSchema = Yup.object({});
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${config.SERVER_URL}ticketpeminjaman`,
        values,
        axiosConfig
      );
      console.log(res);
      history.push("/ticket-list");
      //dispatch({ type: "LIST" });
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
        <Form>
          <div className="row clearfix">
            <div className="col-sm-3">
              <label> Subject</label>
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
                    type="date"
                    className="form-control"
                    placeholder="Question"
                    id="tanggal_akhir"
                    name="tanggal_akhir"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12"></div>
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
                        <th>Jenis Hardware</th>
                        <th>Jumlah</th>
                        <th>Keterangan</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <Field
                              as="select"
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
                              className="form-control"
                              name={`details[${index}].qty`}
                            />
                          </td>
                          <td>
                            <Field
                              as="textarea"
                              className="form-control"
                              rows="2"
                              name={`details[${index}].keterangan`}
                            />
                          </td>
                          <td></td>
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
                        push(defaultRow);
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
                    placeholder="Please type what you want..."
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
      </Formik>
    </React.Fragment>
  );
}

export default TicketAddPeminjaman;
