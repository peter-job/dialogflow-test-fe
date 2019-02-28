import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <iframe
          key="chatbot"
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/e2f215ec-9007-4cd1-a248-34fd1ddf18bc"
        />
      </div>
    );
  }
}

export default App;
