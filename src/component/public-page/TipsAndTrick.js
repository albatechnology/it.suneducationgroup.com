import React, { useReducer } from "react";
import TipsAndTrickAdd from "./TipsAndTrickAdd";
import TipsAndTrickEdit from "./TipsAndTrickEdit";
import TipsAndTrickList from "./TipsAndTrickList";

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

function TipsAndTrick() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <TipsAndTrickList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <TipsAndTrickAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <TipsAndTrickEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default TipsAndTrick;
