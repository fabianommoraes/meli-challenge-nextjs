import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const withRedux = (slice) => (Story, context) => {
  const {
    parameters: { redux: { preloadedState } = {} }
  } = context;

  const mockedStore = configureStore({
    reducer: {
      [slice.name]: slice.reducer
    },
    preloadedState
  });

  return (
    <Provider store={mockedStore}>
      <Story />
    </Provider>
  );
};

export default withRedux;

// import React from "react";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "reducers";

// const withRedux = (Story, context) => {
//   const {
//     parameters: { redux: { preloadedState } = {} }
//   } = context;

//   const mockedStore = configureStore({
//     reducer: rootReducer,
//     preloadedState
//   });

//   return (
//     <Provider store={mockedStore}>
//       <Story />
//     </Provider>
//   );
// };

// export default withRedux;
