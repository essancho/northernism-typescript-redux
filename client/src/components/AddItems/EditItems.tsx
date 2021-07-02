import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./AddItems.scss";
import { useParams } from "react-router-dom";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })
);

const EditItems = (props: Props) => {
    const { id } = useParams();
    const classes = useStyles();
    const { fetchTypes, updateItem, fetchOneItem } = useActions();
    const { types } = useTypedSelector((state) => state.types);
    const { response: createResponse, error: createError } = useTypedSelector(
        (state) => state.create
    );
    const { oneItem, loading } = useTypedSelector((state) => state.oneItem);
    const [file, setFile] = useState("");
    const [fileTwo, setFileTwo] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [sale, setSale] = useState(0);
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    useEffect(() => {
        fetchOneItem(id);
        fetchTypes();
    }, []);

    useEffect(() => {
        if (!loading) {
            setName(oneItem.name);
            setPrice(oneItem.price);
            setSale(oneItem.sale);
            setDesc(oneItem.desc);
            setAuthor(oneItem.author);
            setCategory(oneItem.typeId);
        }
    }, [oneItem, loading]);
    console.log(types);
    console.log(oneItem);
    function handleClick() {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("price", price);
        formData.append("sale", sale);
        formData.append("author", author);
        formData.append("img", file);
        formData.append("second", fileTwo);
        formData.append("typeId", category);
        formData.append("brandId", "1");
        updateItem(id, formData);
    }
    function handleFileOne(e: any) {
        setFile(e.target.files[0]);
    }
    function handleFileTwo(e: any) {
        setFileTwo(e.target.files[0]);
    }

    function handleTypeChange(event: React.ChangeEvent<{ value: unknown }>) {
        setCategory(event.target.value as string);
        console.log(category);
    }
    console.log(desc);
    return (
        <div className="container">
            <div className="add__new">
                <div className="add__new__form">
                    {!loading && (
                        <>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="add__item"
                                placeholder="Name"
                            />
                            <input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                                className="add__item"
                                placeholder="Description"
                            />
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price"
                                type="number"
                                className="add__item"
                            />
                            <input
                                value={sale}
                                onChange={(e) => setSale(e.target.value)}
                                placeholder="Sale"
                                type="text"
                                className="add__item"
                            />
                            <input
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="author"
                                type="text"
                                className="add__item"
                            />
                            <input
                                onChange={(e) => handleFileOne(e)}
                                placeholder="image 1"
                                type="file"
                                className="add__item"
                            />
                            <input
                                onChange={(e) => handleFileTwo(e)}
                                placeholder="image 2"
                                type="file"
                                className="add__item"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">
                                    Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    onChange={handleTypeChange}
                                >
                                    {types &&
                                        types.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            <button onClick={handleClick}>Click</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditItems;
