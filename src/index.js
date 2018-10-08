import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import "./styles.css";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
