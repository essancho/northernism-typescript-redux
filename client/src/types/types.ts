export const FETCH_TYPE = "FETCH_TYPE";
export const FETCH_TYPE_SUCCESS = "FETCH_TYPE_SUCCESS";
export const FETCH_TYPE_ERROR = "FETCH_TYPE_ERROR";

export interface TypesState {
    types: any[];
    loading: boolean;
    error: null | string;
}

export enum TypeActionTypes {
    FETCH_TYPE = "FETCH_TYPE",
    FETCH_TYPE_SUCCESS = "FETCH_TYPE_SUCCESS",
    FETCH_TYPE_ERROR = "FETCH_TYPE_ERROR",
}

interface FetchType {
    type: TypeActionTypes.FETCH_TYPE;
}

interface FetchTypeSuccess {
    type: TypeActionTypes.FETCH_TYPE_SUCCESS;
    payload: any[];
}

interface FetchTypeError {
    type: TypeActionTypes.FETCH_TYPE_ERROR;
    payload: string;
}

export type TypesActions = FetchType | FetchTypeSuccess | FetchTypeError;
