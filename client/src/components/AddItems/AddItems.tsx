import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./AddItems.scss";

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

const AddItems = (props: Props) => {
    const classes = useStyles();
    const { fetchTypes, uploadItem } = useActions();
    useEffect(() => {
        fetchTypes();
    }, []);
    const { types } = useTypedSelector((state) => state.types);
    const { response: createResponse, error: createError } = useTypedSelector(
        (state) => state.create
    );
    console.log(types);
    const [file, setFile] = useState("");
    const [fileTwo, setFileTwo] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState("");
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

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
        uploadItem(formData);
    }
    function handleFileOne(e: React.SyntheticEvent | any) {
        setFile(e.target.files[0]);
    }
    function handleFileTwo(e: React.SyntheticEvent<{ files: unknown }> | any) {
        setFileTwo(e.target.files[0] as string);
    }

    function handleTypeChange(event: React.ChangeEvent<{ value: unknown }>) {
        setCategory(event.target.value as string);
        console.log(category);
    }
    return (
        <div className="container">
            <div className="add__new">
                <div className="add__new__form">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="add__item"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) => setDesc(e.target.value)}
                        type="text"
                        className="add__item"
                        placeholder="Description"
                    />
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                        type="number"
                        className="add__item"
                    />
                    <input
                        onChange={(e) => setSale(e.target.value)}
                        placeholder="Sale"
                        type="text"
                        className="add__item"
                    />
                    <input
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
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <button onClick={handleClick}>Click</button>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
