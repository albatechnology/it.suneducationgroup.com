import React, { useReducer } from "react";
import MediaAndDownloadAdd from "./MediaAndDownloadAdd";
import MediaAndDownloadEdit from "./MediaAndDownloadEdit";
import MediaAndDownloadList from "./MediaAndDownloadList";

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

function MediaAndDownload() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <MediaAndDownloadList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <MediaAndDownloadAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <MediaAndDownloadEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default MediaAndDownload;
