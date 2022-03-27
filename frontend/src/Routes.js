import React from "react";
import { Route, BrowserRouter as Router, Routes as MyRoutes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import UpdateProfile from "./pages/UpdateProfile";

import SellMenu from "./pages/SellMenu";
import AcquireMenu from "./pages/AcquireMenu";
import ProjectPage from "./pages/ProjectPage";

import Checkout from "./pages/Checkout";
import SuccessPage from "./pages/SuccessPage";
import Developing from "./pages/Developing";


function Routes() {
    return (
        <Router>
            <AuthProvider>
            <MyRoutes>
                <Route 
                element={<Home/>} 
                path="/" exact />

                <Route 
                element={<Dashboard/>} 
                path="/dashboard" exact />

                <Route 
                element={<UpdateProfile/>} 
                path="/update-profile" exact />

                <Route 
                element={<SellMenu/>} 
                path="/sell-project" exact />

                <Route 
                element={<AcquireMenu/>} 
                path="/acquire-project" exact />

                <Route 
                element={<ProjectPage/>}
                path="/project/:postId" exact />
                
                <Route
                element={<Checkout/>}
                path="/project/checkout/:postId" exact />

                <Route
                element={<SuccessPage/>}
                path="/project/confirmed-payment/:randomId" exact />

                <Route 
                element={<Developing/>}
                path="/page-in-development" />

                <Route 
                element={<ErrorPage/>}
                path="*" />

            </MyRoutes>
            </AuthProvider>
        </Router>
    )
}

export default Routes;