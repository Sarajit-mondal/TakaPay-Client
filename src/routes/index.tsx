import App from "@/App";
import DashbordLayout from "@/components/layout/DashbordLayout";
import About from "@/pages/About";
import Login from "@/pages/authPages/Login";
import Register from "@/pages/authPages/Register";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import path from "path";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
       Component: App,
       path : "/",
       children:[
         {
        index: true,     // <-- default route `/`
        element: <Home/>
      },
        {
            Component: About,
            path: "about"
        },
        {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
       ]
    },
    {
        
      Component : DashbordLayout,
    
      children:[
        {
          path: "user/paymentHistory",
  

        }
      ]
    }
    
])