import React, { useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useParams } from "react-router";
import PerbaikanHardwareList from "./PerbaikanHardwareList";
import PerbaikanHardwareAdd from "./PerbaikanHardwareAdd";
import PerbaikanHardwareEdit from "./PerbaikanHardwareEdit";
import PerbaikanHardwareView from "./PerbaikanHardwareView";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";
const statusMapping = [];
statusMapping[0] = "Declined";
statusMapping[1] = "Create";
statusMapping[2] = "At Vendor";
statusMapping[3] = "At Admin";
statusMapping[4] = "Shipping";
statusMapping[5] = "Receive By User";
statusMapping[6] = "Return By User";
statusMapping[7] = "In Repair";
statusMapping[10] = "Completed";
const initialState = {
  pageState: "LIST",
  currentId: 0,
  currentRow: [],
  statusMapping,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIST":
      return { ...state, pageState: "LIST" };
    case "ADD":
      return { ...state, pageState: "ADD" };
    case "EDIT":
      return {
        ...state,
        pageState: "EDIT",
        currentId: action.id,
        currentRow: action.row,
      };
    case "VIEW":
      return {
        ...state,
        pageState: "VIEW",
        currentId: action.id,
        currentRow: action.row,
      };
    default:
      return initialState;
  }
};

function PerbaikanHardware() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <PerbaikanHardwareList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <PerbaikanHardwareEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "VIEW" ? (
        <PerbaikanHardwareView state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <PerbaikanHardwareAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default PerbaikanHardware;
