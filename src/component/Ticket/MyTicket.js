import React, { useReducer } from "react";
import TicketAdd from "./TicketAdd";
import TicketEdit from "./TicketEdit";
import TicketList from "./TicketList";

const initialState = {
  pageState: "LIST",
  userState: "USER",
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

function Software() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <TicketList state={state} dispatch={dispatch} />
      ) : (
        0
      )}

      {state.pageState === "EDIT" ? (
        <TicketEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default Software;
