import React, { useReducer, createContext } from "react";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addData":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Salaudeen Ahmad",
    project: "EveryFood",
  });

  const addData = (data) => {
    return dispatch({ type: "addData", data });
  };

  return (
    <Context.Provider value={{ state, addData }}>{children}</Context.Provider>
  );
};

export { Context, AppProvider };
