import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux";
import  { jss } from 'react-jss';

import globalStyles from './media/global-styles';
import Layout from "./containers/layout";

jss.createStyleSheet(globalStyles, {meta: 'Global'}).attach();

const store = createStore(rootReducer);
document.addEventListener("DOMContentLoaded", () => {
  // const div = document.createElement("div");
  // div.id = 'root';
  // document.body.appendChild(div);
  render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.body
  );
});
