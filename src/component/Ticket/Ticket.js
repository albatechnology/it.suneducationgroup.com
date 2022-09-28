import React, { useReducer } from "react";
import TicketAdd from "./TicketAdd";
import TicketEdit from "./TicketEdit";
import TicketList from "./TicketList";
import TicketView from "./TicketView";

const statusMapping = [];
statusMapping[0] = "Declined";
statusMapping[1] = "Create";
statusMapping[2] = "Approve By Supervisor";
statusMapping[3] = "In Progress";
statusMapping[4] = "Shipping";
statusMapping[5] = "Receive By User";
statusMapping[6] = "Return By User";
statusMapping[7] = "In Repair";
statusMapping[10] = "Completed";

const initialState = {
  pageState: "LIST",
  userState: "ADMIN",
  currentId: 0,
  currentRow: [],
  statusMapping,
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
    case "VIEW":
      return {
        ...state,
        pageState: "VIEW",
        currentId: action.id,
        currentRow: action.row,
      };

    default:
      return initialState;
  }
};

function Ticket({ user }) {
  initialState.userState = user;
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
      {state.pageState === "VIEW" ? (
        <TicketView state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default Ticket;
