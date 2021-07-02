import React, { useEffect, useState } from "react";
import "./App.scss";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Routes from "./Routes";

interface Props {}

const App = (props: Props) => {
    const { currentUser } = useTypedSelector((state) => state.auth);

    return (
        <div className="app">
            <Routes />
        </div>
    );
};

export default App;
