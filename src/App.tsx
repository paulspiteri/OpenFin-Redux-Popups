import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { AppState } from './AppState';
import { Dispatch } from 'redux';
import ApplicationAction from './ApplicationAction';
import { createLoginSucceeded } from './LogInActions';

interface AppProps {
    title: string;
    doLogin: () => void;
}

class App extends Component<AppProps> {

    openPopup = (popupType: string) => {
        const win = new fin.desktop.Window(
            {
                name: "openFinWindow" + Math.random(),
                url: "http://localhost:3000",
                defaultWidth: 600,
                defaultHeight: 400,
                customData: popupType
            },
            function () {
                const popupNativeWindow = win.getNativeWindow();
                popupNativeWindow.init(window.reduxStore);
                win.show();
            },
            function (error) {
                console.log("Error creating window:", error);
            }
        );
    };

    changeState = () => {
        this.props.doLogin();
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Button onClick={() => this.openPopup('popup1')}>open window</Button>
                    <Button onClick={() => this.openPopup('popup2')}>open window 2</Button>
                    <Button onClick={this.changeState}>Change State - {this.props.title}</Button>
                </header>
            </div>
        );
    }
}

function mapState(state: AppState) {
    return {
        title: state.login.status
    };
}

function mapDispatch(dispatch: Dispatch<ApplicationAction>) {
    return {
        doLogin: () => dispatch(createLoginSucceeded())
    };
}

export const AppContainer = connect(mapState, mapDispatch)(App);