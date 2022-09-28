import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import dateFormat from "dateformat";

function MediaAndDownloadList({ state, dispatch }) {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  const deleteData = async (values) => {
    try {
      const deleteResult = await axios.delete(
        `${config.SERVER_URL}mediaanddownload/${values.id}`,
        axiosConfig
      );
      if (deleteResult.data.error_code === 0) {
        const res = await axios.get(
          `${config.SERVER_URL}mediaanddownload`,
          axiosConfig
        );
        setData(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(`${config.SERVER_URL}mediaanddownload`, axiosConfig)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setData(res.data);
          $(".js-mailing-list").DataTable({
            responsive: true,
          });
        }
      });
  }, []);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Media And Download List</h2>
                </div>
                <div className="body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
                      <thead>
                        <tr>
                          <th>Media Name</th>
                          <th>Nama File</th>
                          <th>Post</th>
                          <th>File</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.media_name}</td>
                            <td>{i.filename}</td>
                            <td>
                              {dateFormat(i.createdAt, "dddd, mmmm dS, yyyy")}
                            </td>
                            <td>
                              <a
                                href={`${config.SERVER_BASE_URL}${i.filepath}`}
                                className="btn btn-primary"
                              >
                                Download
                              </a>
                            </td>
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

export default MediaAndDownloadList;
