import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./Details.scss";
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
    return (
        <div className="container">
            <div className="details__body">
                <div className="details__content">
                    <div className="content__left">
                        <img
                            src={`http://localhost:5000/${oneItem.img}`}
                            alt=""
                        />
                        <span className="content__left__title">
                            {oneItem.name}
                        </span>
                    </div>
                    <div className="content__right">
                        <div className="content__right__top">
                            <span className="content__right__price">
                                ${oneItem.price}.00
                            </span>
                            <span className="content__right__author">
                                by {oneItem.author}
                            </span>
                        </div>
                        <span className="content__right__desc">
                            {oneItem.desc}
                        </span>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
