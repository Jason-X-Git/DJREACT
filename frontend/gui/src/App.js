import React from "react";
import "antd/dist/antd.css";
import CustomLayout from "./container/Layout";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
