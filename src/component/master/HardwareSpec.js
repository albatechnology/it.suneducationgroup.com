import React, { useReducer } from "react";
import HardwareSpecAdd from "./HardwareSpecAdd";
import HardwareSpecEdit from "./HardwareSpecEdit";
import HardwareSpecList from "./HardwareSpecList";

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

function HardwareSpec() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <HardwareSpecList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <HardwareSpecAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <HardwareSpecEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default HardwareSpec;
