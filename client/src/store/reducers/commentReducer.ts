import {
    CommentsState,
    CommentsAction,
    CommentsActionTypes,
} from "../../types/comments";

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
};

export const commentsReducer = (
    state = initialState,
    action: CommentsAction
): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return { loading: true, error: null, comments: [] };
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return { loading: true, error: null, comments: action.payload };
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return { loading: true, error: action.payload, comments: [] };
        default:
            return state;
    }
};
