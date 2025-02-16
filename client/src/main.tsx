import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import your components
import Login from "./routes/Login";
import Register from "./routes/Register";
import Singlepost from "./routes/Singlepost";
import Home from "./routes/Home";
import Write from "./routes/Write";
import MainLayout from "./layouts/MainLayout";
import Postlist from "./routes/PostList";

// Define routes with `createBrowserRouter`
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Postlist />,
      },
      {
        path: "/:slug",
        element: <Singlepost />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

// Create the root and render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
