import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signIn, signUp } from "../../store/action-creators/users-actions";
import Alert from "@material-ui/lab/Alert";
import "../Signup/Signup.scss";
const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: SyntheticEvent | any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: SyntheticEvent | any) => {
        setPassword(event.target.value);
    };

    const handleSignInClick = (event: SyntheticEvent | any) => {
        event.preventDefault();
        dispatch(signIn({ email, password }, history));
        history.push("/");
    };

    return (
        <>
            <div className="container">
                <div className="register">
                    <div className="register__text">
                        <span className="register__span register__type">
                            ACCOUNT
                        </span>
                        <span className="register__span register__title">
                            LOGIN
                        </span>
                        <span className="register__span register__desc">
                            Already have an account? Log in below.
                        </span>
                    </div>
                    <form
                        onSubmit={handleSignInClick}
                        action="submit"
                        className="register__form"
                    >
                        {error && <Alert severity="error">{error}</Alert>}
                        <input
                            required
                            onChange={handleEmailChange}
                            type="email"
                            className="register__input"
                            placeholder="Email"
                        />
                        <input
                            required
                            onChange={handlePasswordChange}
                            type="password"
                            className="register__input"
                            placeholder="Password"
                        />

                        <button
                            disabled={loading}
                            type="submit"
                            className="register__button"
                        >
                            LOGIN
                        </button>
                    </form>
                    <div className="register__add">
                        <span className="register__span register__desc">
                            Need to sign up? Click below to register.
                        </span>
                        <br />
                        <button className="register__already">REGISTER</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
