import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import dateFormat from "dateformat";

function MediaAndDownloadPreview() {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(async () => {
    // Update the document title using the browser API
    try {
      const res = await axios.get(
        `${config.SERVER_URL}mediaanddownload`,
        axiosConfig
      );

      if (res.status === 200) {
        setData(res.data);
        $(".js-mailing-list").DataTable({
          responsive: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
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
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((i) => (
                          <tr key={i.id}>
                            <td>{i.media_name}</td>
                            <td>{i.filename}</td>
                            <td>
                              <a
                                href={`${config.SERVER_BASE_URL}${i.filepath}`}
                                className="btn btn-primary"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default MediaAndDownloadPreview;
