import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
import TicketViewPermintaanCreate from "./TicketViewPermintaanCreate";
import TicketViewPermintaanApprove from "./TicketViewPermintaanApprove";
import TicketViewPermintaanInProgress from "./TicketViewPermintaanInProgress";
import TicketViewPermintaanShipping from "./TicketViewPermintaanShipping";
import TicketViewPeminjamanCreate from "./TicketViewPeminjamanCreate";
import TicketViewPeminjamanApprove from "./TicketViewPeminjamanApprove";
import TicketViewPeminjamanInProgress from "./TicketViewPeminjamanInProgress";
import TicketViewPeminjamanShipping from "./TicketViewPeminjamanShipping";
import TicketViewPerbaikanCreate from "./TicketViewPerbaikanCreate";
import TicketViewPerbaikanInProgress from "./TicketViewPerbaikanInProgress";

function TicketView({ state, dispatch }) {
  const [ticketData, setTicketData] = useState([]);
  const [title, setTitle] = useState(
    `View Ticket ${state.currentRow.jenis_ticket}`
  );
  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${config.SERVER_URL}ticket/details/${state.currentId}`,
        axiosConfig
      );
      setTicketData(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>{title}</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="body">
                  {ticketData.jenis_ticket === "PERMINTAAN" &&
                  ticketData.status === 1 ? (
                    <TicketViewPermintaanCreate
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERMINTAAN" &&
                  ticketData.status === 2 ? (
                    <TicketViewPermintaanApprove
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERMINTAAN" &&
                  ticketData.status === 3 ? (
                    <TicketViewPermintaanInProgress
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERMINTAAN" &&
                  (ticketData.status === 4 || ticketData.status === 10) ? (
                    <TicketViewPermintaanShipping
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PEMINJAMAN" &&
                  ticketData.status === 1 ? (
                    <TicketViewPeminjamanCreate
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PEMINJAMAN" &&
                  ticketData.status === 2 ? (
                    <TicketViewPeminjamanApprove
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PEMINJAMAN" &&
                  ticketData.status === 3 ? (
                    <TicketViewPeminjamanInProgress
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PEMINJAMAN" &&
                  (ticketData.status === 4 ||
                    ticketData.status === 5 ||
                    ticketData.status === 6 ||
                    ticketData.status === 10) ? (
                    <TicketViewPeminjamanShipping
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERBAIKAN" &&
                  ticketData.status === 1 ? (
                    <TicketViewPerbaikanCreate
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                  {ticketData.jenis_ticket === "PERBAIKAN" &&
                  ticketData.status === 3 ? (
                    <TicketViewPerbaikanInProgress
                      state={state}
                      dispatch={dispatch}
                      ticketData={ticketData}
                      setTitle={setTitle}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TicketView;
