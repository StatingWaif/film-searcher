import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./widgets/movie-search/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MoviePage } from "./pages/MoviePage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
