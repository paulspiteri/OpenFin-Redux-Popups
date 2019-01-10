import 'styled-components/macro';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import ApplicationAction from "./ApplicationAction";
import { AppState } from "./AppState";
import { createLoginSucceeded } from "./LogInActions";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            // Name of the component ⚛️ / style sheet
            root: {
                width: "100px",
                height: "39px",
                borderRadius: "2px",
                backgroundColor: "#617b89",
                fontFamily: "Open Sans",
                fontSize: "9px",
                textTransform: "unset",
                color: "#FFFFFF",
                fontWeight: 700,
                textDecoration: "none solid rgb(255, 255, 255)",
                textAlign: "center",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.5);"
            },
            label: {
                // Name of the rule
                color: "white" // Some CSS
            }
        }
    }
});

const StyledButton = styled(({ color, ...other }) => (
    <Button classes={{ label: 'label' }} {...other} />
))`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .label {
    color: ${props => props.color};
  }
`;

const Panel = styled.div`
background: lightblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
`;

interface AppProps {
    title: string;
    doLogin: () => void;
}

class App extends Component<AppProps> {
    public openPopup = (popupType: string) => {
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

    public changeState = () => {
        this.props.doLogin();
    };

    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Panel>
                        <Button onClick={() => this.openPopup("popup1")}>
                            open window
                        </Button>
                        <Button onClick={() => this.openPopup("popup2")}>
                            open window 2
                        </Button>
                        <StyledButton onClick={this.changeState}
                                      color="darkgreen">
                            {this.props.title}
                        </StyledButton>
                    </Panel>
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

export const AppContainer = connect(
    mapState,
    mapDispatch
)(App);
