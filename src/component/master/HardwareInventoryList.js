import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
const statusMapping = [];
statusMapping[4] = "Perlu Perbaikan";
statusMapping[5] = "Sedang diperbaiki";
statusMapping[6] = "Rusak";
function HardwareInventoryList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const { hardwareSpecId } = state;
  const assignForRepair = async (inventori) => {
    const result = await axios.post(
      `${config.SERVER_URL}hardwareinventori/assignforrepair`,
      inventori,
      axiosConfig
    );
    setData(result.data);
  };
  useEffect(() => {
    axios
      .get(
        `${config.SERVER_URL}hardwareinventori/hardwarespecid/${hardwareSpecId}`,
        axiosConfig
      )
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
                          <th>No Asset</th>
                          <th>Merek</th>
                          <th>Tipe</th>
                          <th>Serial Number</th>
                          <th>Harga</th>
                          <th>Assign To</th>
                          <th>Assign Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{state.hardwareSpecRow.nama_hardware}</td>
                            <td>{i.no_asset}</td>
                            <td>{i.merek}</td>
                            <td>{i.tipe}</td>
                            <td>{i.serial_number}</td>
                            <td>{i.harga}</td>
                            <td>{i.assign_to}</td>
                            <td>
                              {i.assign_status
                                ? statusMapping[i.assign_status]
                                : null}
                            </td>
                            <td>
                              <Link to={`/hardware-inventori-view/${i.id}`}>
                                <button className="btn btn-primary waves-effect ">
                                  View
                                </button>
                              </Link>
                              <button
                                className="btn btn-primary waves-effect "
                                onClick={() => {
                                  dispatch({
                                    type: "EDIT",
                                    id: i.id,
                                    row: {
                                      ...i,
                                      spesifikasi: JSON.parse(i.spesifikasi),
                                    },
                                  });
                                }}
                              >
                                Edit
                              </button>
                              {!i.assign_status ? (
                                <button
                                  type="button"
                                  className="btn btn-primary waves-effect "
                                  onClick={() => {
                                    assignForRepair(i);
                                  }}
                                >
                                  Assign For Repair
                                </button>
                              ) : null}
                              {/* <button className="btn btn-primary waves-effect ">
                                Delete
                              </button> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HardwareInventoryList;
