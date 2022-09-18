import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";

const authenticatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={authenticatedRoute} />
  </React.StrictMode>
)
