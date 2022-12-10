import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { Router, Route, browserHistory } from "react-router";
import IndexReducer from "./index-reducer";
import IndexSagas from "./index-sagas";
import Login from "./login";
import Signup from "./signup";
import Widgets from "./widgets";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Wrapper = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeSetup =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(IndexSagas); // 这边就执行了 sagaIndex 这个方法

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/widgets" component={Widgets} />
        </Route>
      </Router>
    </Provider>
  );
};
root.render(<Wrapper />);
