import { IconButton, Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./Admin.scss";
interface Props {}

const Admin = (props: Props) => {
    const { fetchItems, deleteItem } = useActions();
    const { items } = useTypedSelector((state) => state.items);
    const deleteAdmin = async (id: number | string | any) => {
        await deleteItem(id);
        fetchItems(null, null, 1, 30);
    };
    useEffect(() => {
        fetchItems(null, null, 1, 30);
    }, []);
    return (
        <div className="container">
            <div className="admin">
                <span className="admin__title">Admin Page:</span> <br /> <br />
                <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/add-new"
                >
                    Add new item
                </Button>
                <div className="admin__page">
                    {items &&
                        items.map((item) => (
                            <div className="admin__item" key={item.id}>
                                <img
                                    width={150}
                                    src={`http://localhost:5000/${item.img}`}
                                    alt=""
                                />
                                <span>{item.name}</span>
                                <div className="admin__item__controls">
                                    <IconButton
                                        to={`/edit/${item.id}`}
                                        component={Link}
                                    >
                                        <Edit />
                                    </IconButton>

                                    <IconButton
                                        onClick={() => deleteAdmin(item.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
