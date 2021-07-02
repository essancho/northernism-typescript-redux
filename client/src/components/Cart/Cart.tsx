import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {}
const Cart = (props: Props) => {
    const { currentUser } = useTypedSelector((state) => state.auth);
    console.log(currentUser);
    return <div>{currentUser && currentUser.role}</div>;
};

export default Cart;
