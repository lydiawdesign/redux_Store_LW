import React from "react";
// import { useProductReducer } from './reducers'

import { Provider } from 'react-redux';
// Import Redux store from the file we created in /utils
import store from './store';

const StoreProvider = ({...props }) => {
  return <Provider store={store} {...props} />;
};

export { StoreProvider };