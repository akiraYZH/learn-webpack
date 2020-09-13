import React, { Component } from "react";
import "./assets/index.css";
import "./assets/less/1.less";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(...arg) {
    super(...arg);
  }
  render() {
    return (
      <div className="title">
        <h2> App模块 </h2>{" "}
        <nav>
          <a href="#" className="txt">
            首页{" "}
          </a>{" "}
          <a href="#"> 课程 </a> <a href="#"> 作品 </a>{" "}
        </nav>
        <button className="btn btn-primary glyphicon glyphicon-qrcode">
          button{" "}
        </button>{" "}
      </div>
    );
  }
}

export default App;
