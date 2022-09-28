import React, { useReducer } from "react";
import MailingListAdd from "./MailingListAdd";
import MailingListEdit from "./MailingListEdit";
import MailingListList from "./MailingListList";

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

function MailingList() {
  /*
  const [pageState, setPageState] = useState("LIST");
  const [mailingListId, setMailingListId] = useState(0);
  */
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <MailingListList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <MailingListAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <MailingListEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default MailingList;
