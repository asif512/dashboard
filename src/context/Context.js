import React, { createContext, useState } from "react";

const initialState = {
  notifications: 5,
  messages: 17,
  toggleMenu: false,
};

export const storeContext = createContext();

export const Context = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <storeContext.Provider value={{ state, setState }}>
      {props.children}
    </storeContext.Provider>
  );
};
