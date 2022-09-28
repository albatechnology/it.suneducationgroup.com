import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import dateFormat from "dateformat";

function TipsAndTrickPreview() {
  const [data, setData] = useState([]);
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(() => {
    // Update the document title using the browser API
    axios.get(`${config.SERVER_URL}tipsandtrick`, axiosConfig).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>FAQ</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                {/* 
                <div className="header">
                  
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
               */}
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-xs-12 ol-sm-12 col-md-12 col-lg-12">
                      <div
                        className="panel-group"
                        id="accordion_19"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        {data.map((item, index) => (
                          <div className="panel panel-col-orange" id={item.id}>
                            <div
                              className="panel-heading"
                              role="tab"
                              id={`headingOne_${item.id}`}
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href={`#collapseOne_${item.id}`}
                                  aria-expanded="false"
                                  aria-controls={`collapseOne_${item.id}`}
                                >
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                            <div
                              id={`collapseOne_${item.id}`}
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingOne_19"
                            >
                              <div className="panel-body">
                                <div>
                                  {item.infografik_url !== "" ? (
                                    <img
                                      src={`${config.SERVER_BASE_URL}${item.infografik_url}`}
                                      style={{ maxWidth: "500px" }}
                                    />
                                  ) : null}
                                </div>
                                <br />
                                <div>{item.content}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default TipsAndTrickPreview;
