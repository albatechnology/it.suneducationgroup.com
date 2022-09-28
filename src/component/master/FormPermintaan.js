import React, { useReducer } from "react";
import FormPermintaanAdd from "./FormPermintaanAdd";
import FormPermintaanEdit from "./FormPermintaanEdit";
import FormPermintaanList from "./FormPermintaanList";

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

function FormPermintaan() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <FormPermintaanList state={state} dispatch={dispatch} />
      ) : null}
      {state.pageState === "ADD" ? (
        <FormPermintaanAdd state={state} dispatch={dispatch} />
      ) : null}
      {state.pageState === "EDIT" ? (
        <FormPermintaanEdit state={state} dispatch={dispatch} />
      ) : null}
    </React.Fragment>
  );
}

export default FormPermintaan;
