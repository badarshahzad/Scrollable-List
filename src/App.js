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
import { Card } from "@material-ui/core";
import moment from 'moment';

var data = [
  {
    name: "Monday"
  },
  {
    name: "Tuesday"
  },
  {
    name: "Wednesday"
  },
  {
    name: "Thursday"
  },
  {
    name: "Friday"
  },
  {
    name: "Saturday"
  },
  {
    name: "Sunday"
  }
];
var count = -10;
class App extends Component {
  ShowCurrentDate(){
 
    var date = new Date().getDate()+count;
    var month = new Date().getMonth() ;
    var year = new Date().getFullYear();
    return (date + '-' + month + '-' + year);
   }

  render() {
    var items = data.map((item, index) => {
      return (
        <div key={index} 
        style={{ justifyContent: 'center'}}
        >
          <ListItem
            style={{ background: "yellow", width: 140 , height: 62, margin: 8 }}
          >
            <ListItemText
              primary={item.name+ " "}
            />
            
          </ListItem>
          <Card title="Testing Card " 
             style={{ background: "#6c757d", width: 200 , height:'100%', margin: 8 }}
            >
            <div>
              <table>
                <tbody>
                  <tr>
                    <td> {item.name + " " } </td>
                    <td> {item.name + " "} </td>
                    <td> {item.name + " " } </td>
                  </tr>
                  <tr>
                    <td> {item.name + " " } </td>
                    <td> {item.name + " "} </td>
                    <td> {item.name + " " } </td>
                  </tr>
                  <tr>
                    <td> {item.name + " " } </td>
                    <td> {item.name + " "} </td>
                    <td> {item.name + " " } </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <div>
            <ListItem
              style={{ background: "yellow", width: 200 , height: 40, margin: 8 }}
            >
              <ListItemText
              primary = {new Date().toDateString()+count}
                
                // primary={moment().format("MMM Do YY")+""}
                // secondary={this.ShowCurrentDate}
              />
              
            </ListItem>
          </div>
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
