export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR";

export interface CommentsState {
    comments: any[];
    loading: boolean;
    error: null | string;
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
    CREATE_COMMENT = "CREATE_COMMENT",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR",
}

interface FetchComments {
    type: CommentsActionTypes.FETCH_COMMENTS;
}
interface FetchCommentsSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: CommentsState;
}
interface FetchCommentsError {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

interface CreateComments {
    type: CommentsActionTypes.CREATE_COMMENT;
}
interface CreateCommentsSuccess {
    type: CommentsActionTypes.CREATE_COMMENT_SUCCESS;
}
interface CreateCommentsError {
    type: CommentsActionTypes.CREATE_COMMENT_ERROR;
}

export type CommentsAction =
    | FetchComments
    | FetchCommentsError
    | FetchCommentsSuccess
    | CreateComments
    | CreateCommentsSuccess
    | CreateCommentsError;
