import React, { Component } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import "./App.css";
import Reservations from "./components/Reservations";
import FloorTables from "./components/FloorTables";
import ReservationData from "./components/ReservationData";
import FloorTablesData from "./components/FloorTablesData";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationList: ReservationData,
      tableList: FloorTablesData,
      panes: [{ size: "200px", min: "5%" }, {}, { size: "20%" }],
      tasks: [
        {
          id: "1",
          taskName: "Read book",
          type: "inProgress",
          backgroundColor: "red"
        },
        {
          id: "2",
          taskName: "Pay bills",
          type: "inProgress",
          backgroundColor: "red"
        },
        {
          id: "3",
          taskName: "Go to the gym",
          type: "Done",
          backgroundColor: "blue"
        },
        {
          id: "4",
          taskName: "Play baseball",
          type: "Done",
          backgroundColor: "green"
        },
        {
          id: "5",
          taskName: "Eat a banana",
          type: "WDP",
          backgroundColor: "blue"
        },
        {
          id: "6",
          taskName: "Eat orange",
          type: "WDP",
          backgroundColor: "green"
        },
        {
          id: "7",
          taskName: "Eat orange",
          type: "WDP",
          backgroundColor: "green"
        }
      ]
    };
  }

  onLayoutChange = updatedState => {
    this.setState({
      panes: updatedState
    });
  };

  onDragStart = (event, id) => {
    console.log("dragstart on div: ", id);
    event.dataTransfer.setData("id", id);
  };
  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = (event, cat) => {
    console.log("ondrop on div: ", event.dataTransfer);

    let id = event.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter(task => {
      if (task.id === id) {
        task.type = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    var tasks = {
      inProgress: [],
      Done: [],
      WDP: []
    };

    this.state.tasks.forEach(task => {
      tasks[task.type].push(
        <div
          key={task.id}
          onDragStart={event => this.onDragStart(event, task.id)}
          draggable
          className="draggable"
          style={{ backgroundColor: task.bgcolor }}
        >
          {task.taskName}
        </div>
      );
    });

    return (
      <div className="App">
        {
          <Splitter
            style={{ height: 400 }}
            panes={this.state.panes}
            onLayoutChange={this.onLayoutChange}
          >
            <div
              className="inProgress"
              draggable
              onDragOver={event => this.onDragOver(event)}
              onDrop={event => this.onDrop(event, "inProgress")}
            >
              <FloorTables list={tasks.inProgress} />
            </div>
            <div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="home">
                  <div
                    className="droppable"
                    onDragOver={event => this.onDragOver(event)}
                    onDrop={event => this.onDrop(event, "Done")}
                  >
                    <FloorTables list={tasks.Done} />
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div
                    className="droppable"
                    onDragOver={event => this.onDragOver(event)}
                    onDrop={event => this.onDrop(event, "WDP")}
                  >
                    <FloorTables list={tasks.WDP} />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Splitter>
        }
      </div>
    );
  }
}

export default App;
