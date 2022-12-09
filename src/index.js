import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { Router, Route } from "react-router";
import IndexReducer from "./index-reducer";
import IndexSagas from "./index-sagas";
import Login from "./login";
import Signup from "./signup";
import Widgets from "./widgets";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
const Wrapper = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(IndexReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(IndexSagas); // 这边就执行了 sagaIndex 这个方法

  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/widgets" component={Widgets} />
      </Route>
    </Router>
  </Provider>;
};
root.render(<Wrapper />);
