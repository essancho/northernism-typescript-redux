import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {}

interface params {
    id: string;
}
const Details: React.FC = (props: Props) => {
    const { fetchOneItem } = useActions();
    const { id }: params = useParams();
    const { oneItem } = useTypedSelector((state) => state.oneItem);
    console.log(id);
    useEffect(() => {
        fetchOneItem(+id);
    }, []);
    console.log(oneItem);
    return <div>{}</div>;
};

export default Details;
