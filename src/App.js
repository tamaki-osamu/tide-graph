import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import TideGrapph from "./component/TideGrapph.js";
import pointdata from "./point.json";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2C2E34",
      dark: "#282c34",
      contrastText: "#f4f9ff"
    }
  },
  typography: {
    fontFamily: ['"M PLUS 1p"', "-apple-system", "sans-serif"].join(","),
    fontSize: 15
  }
});

const App = () => (
  <BrowserRouter>
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <main className="App-main">
          <div className="container">
            <Route exact path="/" render={() => <TideGrapph point="A0" />} />
            {pointdata.list.map(name => (
              <div key={name}>
                <Route
                  exact
                  path={"/" + pointdata[name].point}
                  render={() => <TideGrapph point={pointdata[name].point} />}
                />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  </BrowserRouter>
);

export default App;
