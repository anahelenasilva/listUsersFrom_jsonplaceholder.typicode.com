import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: "https://jsonplaceholder.typicode.com/users",
      users: []
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
        this.setState({ users: result });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <h3>List users from https://jsonplaceholder.typicode.com/users</h3>

        <div>
          {users.map(data => {
            return (
              <div>
                <p>data.id</p>
                <p>data.name</p>
                <p>data.email</p>
                <p>data.address.street</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
