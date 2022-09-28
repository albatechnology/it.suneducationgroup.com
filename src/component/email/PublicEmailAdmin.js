import React, { useState, useReducer } from "react";
import { useParams } from "react-router";
import PublicEmailAdminAdd from "./PublicEmailAdminAdd";
import PublicEmailAdminList from "./PublicEmailAdminList";
const initialState = {
  pageState: "LIST",
  publicEmailId: 0,
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
function PublicEmailAdmin() {
  const { id: publicEmailId } = useParams();
  initialState.publicEmailId = publicEmailId;
  const [state, dispatch] = useReducer(reducer, initialState);

  //const { id: publicEmailId } = useParams();
  //const [pageState, setPageState] = useState("LIST");
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <PublicEmailAdminList state={state} dispatch={dispatch} />
      ) : null}
      {state.pageState === "ADD" ? (
        <PublicEmailAdminAdd state={state} dispatch={dispatch} />
      ) : null}
    </React.Fragment>
  );
}

export default PublicEmailAdmin;
