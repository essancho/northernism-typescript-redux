import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import "./Sidebar.scss";
interface Props {}
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& > *": {
                marginTop: theme.spacing(2),
            },
        },
    })
);
const Sidebar = (props: Props) => {
    const classes = useStyles();
    const { fetchTypes, fetchItems } = useActions();
    const { types, loading } = useTypedSelector((state) => state.types);
    const { items } = useTypedSelector((state) => state.items);
    const [typeId, setTypeId] = useState(null);
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    useEffect(() => {
        fetchTypes();
    }, []);
    useEffect(() => {
        fetchItems(typeId, null, page, 20);
    }, [typeId, page]);

    return (
        <div className="container">
            <div className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__link sidebar__item">SHOP</li>
                    {types &&
                        types.map((item) => (
                            <li
                                onClick={() => setTypeId(item.id)}
                                className="sidebar__link"
                            >
                                {item.name}
                            </li>
                        ))}

                    <li className="sidebar__link sidebar__sale">Sale</li>
                </ul>
                <div className={classes.root}>
                    <Pagination
                        page={page}
                        onChange={handleChange}
                        count={5}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
