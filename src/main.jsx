import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "App.jsx";
import theme from "Styles/theme.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "Styles/GlobalStyles.jsx";
import { Provider } from "react-redux";
import { store } from "app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
