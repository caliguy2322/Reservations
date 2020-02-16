/*
      <div>
        <h2 className="head">To Do List Drag & Drop</h2>
        <div
          className="inProgress"
          onDragOver={event => this.onDragOver(event)}
          onDrop={event => {
            this.onDrop(event, "inProgress");
          }}
        >
          <span className="group-header">In Progress</span>
          {tasks.inProgress}
        </div>
        <div
          className="droppable"
          onDragOver={event => this.onDragOver(event)}
          onDrop={event => this.onDrop(event, "Done")}
        >
          <span className="group-header">Done</span>
          {tasks.Done}
        </div>
      </div>
      

      <div className="App">
        {
          <Splitter
            style={{ height: 400 }}
            panes={this.state.panes}
            onLayoutChange={this.onLayoutChange}
          >
            <div>
              <FloorTables list={this.state.tableList} />
            </div>
            <div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                  <Reservations list={this.state.reservationList} />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <FloorTables list={this.state.tableList} />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <ul>
                    <Draggable type="fruit" data="banana">
                      <li>Banana</li>
                    </Draggable>
                    <Draggable type="fruit" data="apple">
                      <li>Apple</li>
                    </Draggable>
                    <Draggable type="metal" data="silver">
                      <li>Silver</li>
                    </Draggable>
                  </ul>
                  <Droppable
                    types={["fruit"]} // <= allowed drop types
                    onDrop={this.onDrop.bind(this)}
                  >
                    <ul className="Smoothie"></ul>
                  </Droppable>
                </Tab>
              </Tabs>
            </div>
          </Splitter>
        }
      </div>
        */
