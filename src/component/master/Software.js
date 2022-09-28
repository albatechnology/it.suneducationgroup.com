import React, { useReducer } from "react";
import SoftwareAdd from "./SoftwareAdd";
import SoftwareAddLisence from "./SoftwareAddLisence";
import SoftwareEdit from "./SoftwareEdit";
import SoftwareLisenceList from "./SoftwareLisenceList";
import SoftwareList from "./SoftwareList";

const initialState = {
  pageState: "LIST",
  currentId: 0,
  currentRow: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIST":
      return { ...state, pageState: "LIST" };
    case "ADD":
      return { ...state, pageState: "ADD" };
    case "EDIT":
      return {
        pageState: "EDIT",
        currentId: action.id,
        currentRow: action.row,
      };
    case "LISENCE_LIST":
      return {
        pageState: "LISENCE_LIST",
        currentId: action.id,
        currentRow: action.row,
      };
    case "ADD_LISENCE":
      return {
        pageState: "ADD_LISENCE",
        currentId: action.id,
        currentRow: action.row,
      };
    default:
      return initialState;
  }
};

function Software() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <SoftwareList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <SoftwareAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <SoftwareEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "LISENCE_LIST" ? (
        <SoftwareLisenceList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD_LISENCE" ? (
        <SoftwareAddLisence state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default Software;
