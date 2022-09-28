import React, { useReducer } from "react";
import FAQAdd from "./FAQAdd";
import FAQEdit from "./FAQEdit";
import FAQList from "./FAQList";
import FAQView from "./FAQView";

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

function FAQ() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <React.Fragment>
      {state.pageState === "LIST" ? (
        <FAQList state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "ADD" ? (
        <FAQAdd state={state} dispatch={dispatch} />
      ) : (
        0
      )}
      {state.pageState === "EDIT" ? (
        <FAQEdit state={state} dispatch={dispatch} />
      ) : (
        0
      )}
    </React.Fragment>
  );
}

export default FAQ;
