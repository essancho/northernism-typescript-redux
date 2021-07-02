import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ItemsCard from "./ItemsCard";

const UserList: React.FC = () => {
    const { error, items, loading } = useTypedSelector((state) => state.items);
    const { currentUser } = useTypedSelector((state) => state.auth);
    console.log(currentUser);
    // const { fetchItems } = useActions();
    console.log(items);
    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    console.log(items);

    return (
        <>
            <div className="container">
                {items.map((item) => (
                    <ItemsCard key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default UserList;
