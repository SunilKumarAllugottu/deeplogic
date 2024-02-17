import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Cybersecurity from "./routes/Capabilities/Cybersecurity";
import Native from "./routes/Capabilities/Native";
import Wearable from "./routes/Capabilities/Wearable";
import Enterprises from "./routes/Capabilities/Enterprises";
import Energy from "./routes/Services/Energy";
import Financial from "./routes/Services/Financial";
import Logistics from "./routes/Services/Logistics";
import Technologies from "./routes/Services/Technologies";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Penetration from "./routes/Capabilities/Penetration";
import Vulnerability from "./routes/Capabilities/Vulnerability";
import Footer from "./Footer";
// import { FaArrowAltCircleUp } from "react-icons/fa";







const AppLayout = () => {

 


  return (
    <>
    <div className="bg">
      <Navbar />
      <Outlet />
      <Footer/>
      <ScrollToTopButton/>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Energy",
        element: <Energy/>,
      },
      {
        path: "Technologies",
        element: <Technologies/>,
      },
      {
        path: "Logistics",
        element: <Logistics/>,
      },
      {
        path: "Vulnerability",
        element: <Vulnerability/>,
      },
      {
        path: "Penetration",
        element: <Penetration/>,
      },
      {
        path: "Financial",
        element: <Financial/>,
      },
      {
        path: "Cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "Enterprises",
        element: <Enterprises />,
      },
      {
        path: "Wearable",
        element: <Wearable />,
      },
      {
        path: "Native",
        element: <Native />,
      },
      
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
