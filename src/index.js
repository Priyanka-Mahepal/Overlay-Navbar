import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

// database url https://eco-ecommerce-app.herokuapp.com/

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
