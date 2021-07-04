import { Dispatch } from "redux";

import { $host } from "../../http";
import {
    CommentsAction,
    CommentsActionTypes,
    CommentsState,
} from "../../types/comments";

export const fetchComments = (collectionId: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({ type: CommentsActionTypes.FETCH_COMMENTS });
            const response = await $host.get("/api/comments/", {
                params: {
                    collectionId,
                },
            });
            console.log(response);
            dispatch({
                type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
                payload: "There is an error with comments fetching",
            });
        }
    };
};

export const uploadComment = (comment: {}) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({ type: CommentsActionTypes.CREATE_COMMENT });
            const { data } = await $host.post("api/comments/", comment);
            dispatch({
                type: CommentsActionTypes.CREATE_COMMENT_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: CommentsActionTypes.CREATE_COMMENT_ERROR,
                payload: "There was an error uploading a new comment",
            });
        }
    };
};
