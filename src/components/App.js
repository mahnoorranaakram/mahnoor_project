import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Customer/Auth/Login/container";
import SignUp from "./Customer/Auth/SignUp/container";
import FirstQuestion from "./Customer/Question/First/container";
import SecondQuestion from "./Customer/Question/Second/container";
import ArticleData from "./Customer/ArticleData/container";
import EANEntry from "./Customer/EAN/EANEntry/container";
import ListView from "./Customer/ListView/container";
import { styles } from "./style";
import "./style.css";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
// import { darkTheme, blueTheme, Theme } from "./../resources/theme";
import { Theme } from "./../resources/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import PrivateRoute from "./common/PrivateRouteContainer";
import PublicRoute from "./common/PublicRouteContainer";

class App extends Component {
  state = {
    isLogin: true,
    selectedTheme: Theme,
  };
  render() {
    return (
      <>
        <Router>
          <MuiThemeProvider theme={Theme}>
            <MuiThemeProvider theme={this.state.selectedTheme}>
              <CssBaseline />
              <Switch>
                <PublicRoute exact path={`/`} component={Login} />
                <PublicRoute path={`/login`} component={Login} />
                <PublicRoute path={`/register`} component={SignUp} />
                <PublicRoute path={`/ean`} component={EANEntry} />
                <PublicRoute path={`/listview`} component={ListView} />

                <PrivateRoute
                  path={`/first-question`}
                  component={FirstQuestion}
                />
                <PrivateRoute
                  path={`/second-question`}
                  component={SecondQuestion}
                />
                <PrivateRoute path={`/article`} component={ArticleData} />
              </Switch>
            </MuiThemeProvider>
          </MuiThemeProvider>
        </Router>
      </>
    );
  }
}

export default withStyles(styles)(App);
