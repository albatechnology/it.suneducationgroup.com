import React, { useReducer } from "react";
import { useParams } from "react-router";
import MailingListMemberAdd from "./MailingListMemberAdd";
import MailingListMemberList from "./MailingListMemberList";

const initialState = {
  pageState: "LIST",
  currentId: 0,
  mailingListId: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIST":
      return { ...state, pageState: "LIST" };
    case "ADD":
      return { ...state, pageState: "ADD" };
    case "EDIT":
      return { ...state, pageState: "EDIT", currentId: action.id };
    default:
      return initialState;
  }
};

function MailingListMember() {
  const { id: mailingListId } = useParams();
  initialState.mailingListId = mailingListId;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <MailingListMemberList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <MailingListMemberAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default MailingListMember;
