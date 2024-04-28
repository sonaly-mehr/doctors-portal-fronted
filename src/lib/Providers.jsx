"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      {/* <ToastContainer position="bottom-right" /> */}
      {children}
    </Provider>
  );
};

export default Providers;
