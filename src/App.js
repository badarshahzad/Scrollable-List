import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import ReactList from "react-list";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

var data = [
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  },
  {
    name: "Badar"
  }
];

class App extends Component {
  render() {
    var items = data.map((item, index) => {
      return (
        <div key={index}>
          <ListItem
            style={{ background: "yellow", width: 140, height: 62, margin: 8 }}
          >
            <ListItemText
              primary={item.name + " " + index}
              secondary="Jan 9, 2014"
            />
          </ListItem>
        </div>
      );
    });
    return (
      <List style={{ display: "flex", flexGrow: 1, flexDirection: "row" }}>
        {items}
      </List>
    );
  }
}

export default App;
