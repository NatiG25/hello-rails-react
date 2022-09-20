import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./redux/configureStore";
import App from "./components/App"

ReactDOM.render(
<>
<Provider store={store}>
    <App/>
  </Provider>
</>,
  document.getElementById('root'),
);
