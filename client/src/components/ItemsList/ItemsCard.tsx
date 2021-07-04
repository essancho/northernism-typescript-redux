import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemsCard.scss";
interface Props {
    item: {
        id: number;
        name: string;
        price: number;
        sale: number;
        rating: number;
        img: string;
        second: string;
    };
}

const ItemsCard = ({ item }: Props) => {
    const [playing, setPlaying] = useState(false);
    return (
        <div className="card">
            {!playing ? (
                <div
                    onMouseEnter={() => setPlaying(true)}
                    className="card__wrapper"
                    style={{
                        transition: "0.4s",
                    }}
                >
                    <div className="card__content">
                        <div className="card__relative">
                            <div className="card__imd__wrapper">
                                <img
                                    className="card__img"
                                    src={`http://localhost:5000/${item.img}`}
                                    alt={item.name}
                                />
                            </div>
                            {item.sale > 0 ? (
                                <div className="price">
                                    <div className="price__line">
                                        ${item.price}.00
                                    </div>
                                    <div className="price__sale">
                                        $
                                        {Math.floor(
                                            item.price -
                                                (item.price / 100) * item.sale
                                        )}
                                        .00
                                    </div>
                                </div>
                            ) : (
                                <div className="price">
                                    <div className="price__total">
                                        ${item.price}.00
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>{item.name}</div>
                    </div>
                </div>
            ) : (
                <div
                    onMouseLeave={() => setPlaying(false)}
                    className="card__wrapper"
                    style={{
                        transition: "0.4s",
                    }}
                >
                    <div className="card__content">
                        <div className="card__relative">
                            <div className="card__imd__wrapper">
                                <img
                                    className="card__img"
                                    src={`http://localhost:5000/${item.second}`}
                                    alt={item.name}
                                />
                            </div>
                            {item.sale > 0 ? (
                                <div className="price">
                                    <div className="price__line">
                                        ${item.price}.00
                                    </div>
                                    <div className="price__sale">
                                        $
                                        {Math.floor(
                                            item.price -
                                                (item.price / 100) * item.sale
                                        )}
                                        .00
                                    </div>
                                </div>
                            ) : (
                                <div className="price">
                                    <div className="price__total">
                                        ${item.price}.00
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>{item.name}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemsCard;
