import React from "react";

interface Props {
    item: {
        id: number;
        name: string;
        price: number;
        rating: number;
        img: string;
        second: string;
    };
}

const ItemsCard = ({ item }: Props) => {
    return (
        <div>
            <div>{item.name}</div>
            <img width={300} src={`http://localhost:5000/${item.img}`} alt="" />
            <img
                width={300}
                src={`http://localhost:5000/${item.second}`}
                alt=""
            />
        </div>
    );
};

export default ItemsCard;
