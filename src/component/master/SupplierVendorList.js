import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import dateFormat from "dateformat";

function SupplierVendorList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(() => {
    // Update the document title using the browser API
    //console.log(state);

    axios
      .get(`${config.SERVER_URL}suppliervendor`, axiosConfig)
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
  const deleteData = async (item) => {
    try {
      const res = await axios.delete(
        `${config.SERVER_URL}suppliervendor/${item.id}`,
        axiosConfig
      );
      if (res.status === 200) setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  //console.log(data);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Supplier/Vendor List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Name/PT</th>
                          <th>Phone</th>
                          <th>Mobile Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.nama_pt}</td>
                            <td>{i.phone}</td>
                            <td>{i.mobile_phone}</td>
                            <td>
                              <button
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
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure you wish to delete this item?"
                                    )
                                  )
                                    deleteData(i);
                                }}
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

export default SupplierVendorList;
