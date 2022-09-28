import React, { useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useParams } from "react-router";
import HardwareInventoryAdd from "./HardwareInventoryAdd";
import HardwareInventoryEdit from "./HardwareInventoryEdit";
import HardwareInventoryList from "./HardwareInventoryList";
import config from "../../config.json";
import axios from "axios";
import AuthenticationService from "./../../logic/AuthenticationService";

const initialState = {
  pageState: "LIST",
  hardwareSpecId: 0,
  hardwareSpecRow: [],
  currentId: 0,
  currentRow: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SPEC":
      return { ...state, hardwareSpecRow: action.row };
    case "LIST":
      return { ...state, pageState: "LIST" };
    case "EDIT":
      return {
        pageState: "EDIT",
        currentId: action.id,
        currentRow: action.row,
      };
    default:
      return initialState;
  }
};

function HardwareInventory() {
  const { id: hardwareSpecId } = useParams();
  initialState.hardwareSpecId = hardwareSpecId;
  const [state, dispatch] = useReducer(reducer, initialState);

  const axiosConfig = AuthenticationService.getAxiosConfig();
  useEffect(() => {
    //console.log(state);
    axios
      .get(`${config.SERVER_URL}hardwarespec/${hardwareSpecId}`, axiosConfig)
      .then((res) => {
        if (res.status === 200) {
          //console.log("data", res.data);
          dispatch({ type: "SET_SPEC", row: res.data });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <HardwareInventoryList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <HardwareInventoryEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default HardwareInventory;
