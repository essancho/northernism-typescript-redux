import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../store/action-creators/users-actions";
import Alert from "@material-ui/lab/Alert";
import "./Signup.scss";
const Signup = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleEmailChange = (event: SyntheticEvent | any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: SyntheticEvent | any) => {
        setPassword(event.target.value);
    };
    const handlePasswordConfirmChange = (event: SyntheticEvent | any) => {
        setPasswordConfirm(event.target.value);
    };

    const handleSignUpClick = (event: SyntheticEvent) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            return setError("Passwords Do Not Match");
        }
        try {
            setError("");
            setLoading(true);
            dispatch(signUp({ email, password }, history));
            history.push("/");
        } catch (err) {
            setError("Failed to create an account");
        }
        setLoading(false);
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
                            Register
                        </span>
                        <span className="register__span register__desc">
                            Need to create an account? Fill in the form below.
                        </span>
                    </div>
                    <form
                        onSubmit={handleSignUpClick}
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
                        <input
                            required
                            onChange={handlePasswordConfirmChange}
                            type="password"
                            className="register__input"
                            placeholder="Confirm Password"
                        />
                        <button
                            disabled={loading}
                            type="submit"
                            className="register__button"
                        >
                            REGISTER
                        </button>
                    </form>
                    <div className="register__add">
                        <span className="register__span register__desc">
                            Already have an account?
                        </span>
                        <br />
                        <button className="register__already">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
