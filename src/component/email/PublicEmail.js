import React, { useState, useReducer } from "react";
import PublicEmailAdd from "./PublicEmailAdd";
import PublicEmailEdit from "./PublicEmailEdit";
import PublicEmailList from "./PublicEmailList";

const initialState = {
  pageState: "LIST",
  currentId: 0,
  currentRow: {},
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
    default:
      return initialState;
  }
};
function PublicEmail(param) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <PublicEmailList state={state} dispatch={dispatch} />
      ) : null}
      {state.pageState === "ADD" ? (
        <PublicEmailAdd state={state} dispatch={dispatch} />
      ) : null}
      {state.pageState === "EDIT" ? (
        <PublicEmailEdit state={state} dispatch={dispatch} />
      ) : null}
    </React.Fragment>
  );
}

export default PublicEmail;
