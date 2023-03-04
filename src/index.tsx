import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import reducers from "./state/reducers";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={reducers}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
