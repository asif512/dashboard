import React from "react";

export const Layout = (props) => {
  return (
    <div className="layout">
      <div
        className="topbar"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: "200px",
          height: "50px",
          backgroundColor: "#c1c1c1",
        }}
      >
        topbar
      </div>
      <div
        className="sidebar"
        style={{
          position: "absolute",
          width: "200px",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: "#c1c1c1",
        }}
      >
        sidebar
      </div>
      <main
        className="main-content"
        style={{
          position: "absolute",
          top: 50,
          left: "200px",
        }}
      >
        main content
      </main>
    </div>
  );
};
