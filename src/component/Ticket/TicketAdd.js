import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import TicketAddPerbaikan from "./TicketAddPerbaikan";
import TicketAddPermintaan from "./TicketAddPermintaan";
import TicketAddPeminjaman from "./TicketAddPeminjaman";

function TicketAdd() {
  const [pageState, setPageState] = useState("Perbaikan");

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Open Ticket {pageState}</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <label>Jenis Ticket</label>
                      <div className="form-group">
                        <div className="form-line">
                          <select
                            className="form-control show-tick"
                            data-live-search="true"
                            onChange={(e) => setPageState(e.target.value)}
                          >
                            <option value="Perbaikan">Perbaikan</option>
                            <option value="Permintaan">Permintaan</option>
                            <option value="Peminjaman">Peminjaman</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {pageState === "Perbaikan" ? <TicketAddPerbaikan /> : null}
                  {pageState === "Permintaan" ? <TicketAddPermintaan /> : null}
                  {pageState === "Peminjaman" ? <TicketAddPeminjaman /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TicketAdd;
