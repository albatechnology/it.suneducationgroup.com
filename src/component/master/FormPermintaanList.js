import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import dateFormat from "dateformat";

function FormPermintaanList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const generatePDF = async () => {
    await axios.post(
      `${config.SERVER_URL}formpermintaan/generatepdf`,
      "test",
      axiosConfig
    );
  };
  useEffect(() => {
    // Update the document title using the browser API
    //console.log(state);

    axios
      .get(`${config.SERVER_URL}formpermintaan`, axiosConfig)
      .then((res) => {
        //console.log(res.data);
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);

          $(".js-mailing-list").DataTable({
            responsive: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  //console.log(data);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>FormPermintaan List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Supplier</th>
                          <th>Tanggal</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.nama_pt}</td>
                            <td>{i.tanggal_pengajuan}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({ type: "EDIT", id: i.id, row: i });
                                }}
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                className="btn btn-danger waves-effect "
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary waves-effect"
                      onClick={() => {
                        dispatch({ type: "ADD" });
                      }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary waves-effect"
                      onClick={() => {
                        generatePDF();
                      }}
                    >
                      pdf
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FormPermintaanList;
