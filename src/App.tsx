/** @jsx jsx */
import { Popup1 } from './Popup1';

jsx;

import { css, jsx } from '@emotion/core';
import './App.css';
import { connect } from 'react-redux';
import { AppState } from './AppState';
import { Dispatch } from 'redux';
import ApplicationAction from './ApplicationAction';
import { createLoginSucceeded } from './LogInActions';


import React, { Component } from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
            root: {
                background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                border: 0,
                color: 'white',
                height: '48px',
                padding: '0 30px'
            },
            label: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
    },
});

const StyledButton = styled(({ color, ...other }) => (
    <Button classes={{ label: 'label' }} {...other} />
))`
  background: linear-gradient(180deg, #fe6b8b 30%, #ff8e53 90%);

  & .label {
    color: ${props => props.color};
  }
`;

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
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <header className="App-header">
                        <Button onClick={() => this.openPopup('popup1')}>open window</Button>
                        <Button onClick={() => this.openPopup('popup2')}
                                css={css`background: red;`}>open window 2</Button>
                        <StyledButton onClick={this.changeState}
                                      color="purple">Change State - {this.props.title}</StyledButton>
                    </header>
                </div>
            </MuiThemeProvider>
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