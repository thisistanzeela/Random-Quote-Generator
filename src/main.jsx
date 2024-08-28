import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorComponent from "./Components/ErrorComponent";

const App = () =>{
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path : "/",
        element : <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />)
