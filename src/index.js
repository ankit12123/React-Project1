// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router';
// import LoginCard from './components/Login page/login';
// import SignUpPage from './pages/signUp';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {path:"/", element:<LoginCard/>},
//       {path:"/signUp", element:<SignUpPage/>},

//     ]
//   }

// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router}/>
//   // <React.StrictMode>
//     // <App />
//   // </React.StrictMode>
// );

// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {createBrowserRouter, RouterProvider} from "react-router";

import LoginCard from "./components/Login page/login";
import SignUpPage from "./pages/signUp";
import About from "./components/LandingPage/About";
import Dashboard from "./pages/Sidebar";
import ThemeProvider from "./Theme/theme";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    
        children: [
      {
        path: "about",
        element: <About />,
      },
    ],
    },
 
    {
        path: "/login",
        element: <LoginCard />
    },
    {
        path: "/signUp",
        element: <SignUpPage />
    },
    
    {
        path: "/dashboard",
        element : <Dashboard/>
    },
    {
        path:"/./about",
        element : <About/>
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <ThemeProvider>
    <RouterProvider router={router} />
   </ThemeProvider>
);

reportWebVitals();