import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

function HardwareSpecList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}hardwarespec`, axiosConfig)
      .then((res) => {
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
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Hardware Specification List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Hardware</th>
                          <th>Stock</th>
                          <th>Kode Inventory</th>
                          <th>Seq Inventory</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.nama_hardware}</td>
                            <td>{i.stock_qty}</td>
                            <td>{i.kode_inventori}</td>
                            <td>{i.seq_inventori}</td>
                            <td>
                              <button
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({ type: "EDIT", id: i.id, row: i });
                                }}
                              >
                                Edit
                              </button>

                              <button className="btn btn-primary waves-effect ">
                                Delete
                              </button>

                              {!i.consumable ? (
                                <a
                                  href={`/hardware-inventori/${i.id}`}
                                  className="btn btn-primary waves-effect "
                                >
                                  Inventori
                                </a>
                              ) : null}
                              <a
                                href={`/hardware-inventori-add-stock/${i.id}`}
                                className="btn btn-primary waves-effect "
                              >
                                Add Stock
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary waves-effect"
                      onClick={() => {
                        dispatch({ type: "ADD" });
                      }}
                    >
                      Add
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

export default HardwareSpecList;
