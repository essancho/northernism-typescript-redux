import { Button, IconButton } from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { signOut } from "../../store/action-creators/users-actions";
import "./Navbar.scss";
interface Props {}
const Navbar = (props: Props) => {
    const dispatch = useDispatch();
    const { currentUser, isAuthenticated, isAuth } = useTypedSelector(
        (state) => state.auth
    );
    const { check } = useActions();
    const history = useHistory();
    useEffect(() => {
        check();
    }, []);
    const signOutNav = () => {
        dispatch(signOut(history));
        history.push("/");
    };
    return (
        <div className="navbar__wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="navbar__left">
                        <div className="navbar__menu">
                            <Menu />
                            <span className="navbar__link">MENU</span>
                        </div>

                        <Link to="/all">
                            <span className="navbar__link">SHOP</span>
                        </Link>
                        <IconButton>
                            <Search />
                        </IconButton>
                    </div>
                    <div className="navbar__middle">
                        <Link to="/">
                            <span className="navbar__title">NORTHERNISM</span>
                        </Link>
                    </div>
                    <div className="navbar__right">
                        {currentUser && isAuth ? (
                            <>
                                <span>{currentUser.email}</span>

                                <span onClick={() => signOutNav()}>
                                    Sign Out
                                </span>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="text"
                                    to="/login"
                                    component={Link}
                                >
                                    Sign In
                                </Button>
                            </>
                        )}
                        <span className="navbar__link">CART</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
