import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppState } from './AppState';

interface PopupProps {
    title: string;
}

export const Popup1: React.FunctionComponent<PopupProps> = function Popup1(props) {
    return (<div className="App">
        <div className="Popup1">{props.title}</div>
    </div>);
};

function mapState(state: AppState) {
    return {
        title: state.login.status
    };
}

export const Popup1Container = connect(mapState)(Popup1);