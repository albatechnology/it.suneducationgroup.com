import React, { useReducer } from "react";
import SupplierVendorAdd from "./SupplierVendorAdd";
import SupplierVendorEdit from "./SupplierVendorEdit";
import SupplierVendorList from "./SupplierVendorList";

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
    default:
      return initialState;
  }
};

function SupplierVendor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <SupplierVendorList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <SupplierVendorAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <SupplierVendorEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default SupplierVendor;
