import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './redux/store';

function App(props) {
  return (
    <div>
      <h1 style={{ fontSize: "120px" }}>Hello</h1>
    </div>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
