export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR";

export interface UpdateState {
    error: null | string;
    loading: boolean;
    update: {};
}
export interface DeleteState {
    error: null | string;
    loading: boolean;
    delete: {};
}

export enum UpdateActionTypes {
    UPDATE_ITEM = "UPDATE_ITEM",
    UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS",
    UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR",
}
export enum DeleteActionTypes {
    DELETE_ITEM = "DELETE_ITEM",
    DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS",
    DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR",
}

interface UpdateItem {
    type: UpdateActionTypes.UPDATE_ITEM;
}

interface UpdateItemSuccess {
    type: UpdateActionTypes.UPDATE_ITEM_SUCCESS;
    payload: {};
}

interface UpdateItemError {
    type: UpdateActionTypes.UPDATE_ITEM_ERROR;
    payload: string;
}

interface DeleteItem {
    type: DeleteActionTypes.DELETE_ITEM;
}

interface DeleteItemSuccess {
    type: DeleteActionTypes.DELETE_ITEM_SUCCESS;
    payload: {};
}

interface DeleteItemError {
    type: DeleteActionTypes.DELETE_ITEM_ERROR;
    payload: string;
}

export type UpdateAction =
    | UpdateItem
    | UpdateItemError
    | UpdateItemSuccess
    | DeleteItem
    | DeleteItemSuccess
    | DeleteItemError;
