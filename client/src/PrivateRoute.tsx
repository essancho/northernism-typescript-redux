import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { currentUser } = useTypedSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                );
            }}
        ></Route>
    );
};

export default PrivateRoute;

// import { Redirect, Route, RouteProps } from 'react-router';

// export type ProtectedRouteProps = {
//   isAuthenticated: boolean;
//   authenticationPath: string;
// } & RouteProps;

// export default function ProtectedRoute({isAuthenticated, authenticationPath, ...routeProps}: ProtectedRouteProps) {
//   if(isAuthenticated) {
//     return <Route {...routeProps} />;
//   } else {
//     return <Redirect to={{ pathname: authenticationPath }} />;
//   }
// };
