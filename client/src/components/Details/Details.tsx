import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./Details.scss";
interface Props {}

interface params {
    id: string;
}
const Details: React.FC = (props: Props) => {
    const { fetchOneItem, fetchComments, uploadComment } = useActions();
    const { id }: params = useParams();
    const { oneItem } = useTypedSelector((state) => state.oneItem);
    const { comments } = useTypedSelector((state) => state.comments);
    const { currentUser } = useTypedSelector((state) => state.auth);
    const [body, setBody] = useState("");
    const fetchTest = () => {
        axios
            .get("http://localhost:5000/api/comments/")
            .then((res) => console.log(res));
    };
    // useEffect(() => {
    //     fetchTest();
    // }, []);
    useEffect(() => {
        fetchOneItem(+id);
    }, []);
    // useEffect(() => {
    //     fetchComments(+id);
    // }, []);

    console.log(oneItem);
    async function handleCommentClick() {
        const formData = new FormData();
        formData.append("body", body);
        formData.append("userId", currentUser.id);
        formData.append("collectionId", id);
        formData.append("email", currentUser.email);
        await uploadComment(formData);
        fetchComments(id);
    }
    console.log(comments, " this is comments");

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
            <div className="comments">
                <div>
                    {oneItem.comments
                        ? oneItem.comments.map((comment) => (
                              <div>{comment.body}</div>
                          ))
                        : null}
                </div>
                <input onChange={(e) => setBody(e.target.value)} type="text" />
                <button onClick={handleCommentClick}>Send Comment</button>
            </div>
        </div>
    );
};

export default Details;
