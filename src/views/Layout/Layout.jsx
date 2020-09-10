import React, { useContext } from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { storeContext } from "../../context/Context";

export const Layout = (props) => {
  const initialState = useContext(storeContext);
  const { state } = initialState;
  return (
    <div className="layout" style={{ height: "100%" }}>
      <Topbar />
      <Sidebar />
      <main
        className="main-content"
        style={{
          position: "absolute",
          top: "50px",
          right: 0,
          padding: 20,
          left: !state.toggleMenu ? "200px" : "60px",
        }}
      >
        {props.children}
      </main>
    </div>
  );
};
