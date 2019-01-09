import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppState } from './AppState';

interface PopupProps {
    title: string;
}

export const Popup2: React.FunctionComponent<PopupProps> = function Popup2(props) {
    return (<div className="App">
        <div className="Popup2">{props.title}</div>
    </div>);
};

function mapState(state: AppState) {
    return {
        title: state.login.status
    };
}

export const Popup2Container = connect(mapState)(Popup2);