import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItems from "./components/AddItems/AddItems";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemsList from "./components/ItemsList/ItemsList";
import Details from "./components/Details/Details";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";

import TestRoute from "./TestRoute";
import EditItems from "./components/AddItems/EditItems";
import Admin from "./components/Admin/Admin";
import { useEffect, useState } from "react";

interface Props {}

const Routes = (props: Props) => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={ItemsList} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/all" component={ItemsList} />
                    <Route exact path="/add-new" component={AddItems} />
                    <Route exact path="/details/:id" component={Details} />
                    <Route exact path="/edit/:id" component={EditItems} />
                    <Route exact path="/admin" component={Admin} />
                    <PrivateRoute
                        // isAuthenticated={isAuthenticated}
                        // authenticationPath="/"
                        exact
                        path="/cart"
                        component={Cart}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;
