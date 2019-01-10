import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { AppState } from "./AppState";

interface PopupProps {
  title: string;
}

export const Popup2: React.FunctionComponent<PopupProps> = function(props) {
  return (
    <div className="App">
      <div className="Popup2">{props.title}</div>
    </div>
  );
};

function mapState(state: AppState) {
  return {
    title: state.login.status
  };
}

export const Popup2Container = connect(mapState)(Popup2);
