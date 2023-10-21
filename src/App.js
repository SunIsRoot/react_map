//import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apllo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import { lightTheme, darkTheme } from "./styles";
import SignUp from "./screens/SignUp";
import routes from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Start from "./screens/Start";
//import NotFound from "./screens/NotFound";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.start} exact>
              <Start></Start>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
