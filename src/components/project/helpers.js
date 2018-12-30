import React from 'react';

const reactjsPic = require("../../static/project/reactjs.png");
const swiftPic = require("../../static/project/swift.png");
const javaPic = require("../../static/project/java.png");
const flaskPic = require("../../static/project/flask.png");
const pythonPic = require("../../static/project/python.png");
const SQLPic = require("../../static/project/sql.png");
const websocketPic = require("../../static/project/websocket.svg");
const github = require("../../static/project/github.svg");

export function returnImage(name) {
  var link = "";
  switch(name) {
    case "reactjs":
      link = reactjsPic;
      break;
    case "python":
      link = pythonPic;
      break;
    case "java":
      link = javaPic;
      break;
    case "flask":
      link = flaskPic;
      break;
    case "swift":
      link = swiftPic;
      break;
    case "sql":
      link = SQLPic;
      break;
    case "websocket":
      link = websocketPic;
      break;
    case "github":
      link = github;
      break;
    default:
      break;
  }
  return <img className="appIcon" src={link} alt="icon"/>
}
