export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";
export const FETCH_ONE_ITEM = "FETCH_ONE_ITEM";
export const FETCH_ONE_ITEM_SUCCESS = "FETCH_ONE_ITEM_SUCCESS";
export const FETCH_ONE_ITEM_ERROR = "FETCH_ONE_ITEM_ERROR";

export interface ItemsState {
    items: any[];
    loading: boolean;
    error: null | string;
}

export interface OneItem {
    name: string;
    price: number | string;
    sale: number | string;
    desc: string;
    author: string;
    typeId: number | string | null;
    img: string;
    second: string;
}
export interface OneItemState {
    oneItem: OneItem;
    loading: boolean;
    error: null | string;
}

export enum ItemsActionTypes {
    FETCH_ITEMS = "FETCH_ITEMS",
    FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS",
    FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR",
    FETCH_ONE_ITEM = "FETCH_ONE_ITEM",
    FETCH_ONE_ITEM_SUCCESS = "FETCH_ONE_ITEM_SUCCESS",
    FETCH_ONE_ITEM_ERROR = "FETCH_ONE_ITEM_ERROR",
}

interface FetchOneItem {
    type: ItemsActionTypes.FETCH_ONE_ITEM;
}
interface FetchOneItemSuccess {
    type: ItemsActionTypes.FETCH_ONE_ITEM_SUCCESS;
    payload: OneItemState;
}
interface FetchOneItemError {
    type: ItemsActionTypes.FETCH_ONE_ITEM_ERROR;
    payload: string;
}

interface FetchItemsAction {
    type: ItemsActionTypes.FETCH_ITEMS;
}
interface FetchItemsSuccessAction {
    type: ItemsActionTypes.FETCH_ITEMS_SUCCESS;
    payload: any[];
}
interface FetchItemsErrorAction {
    type: ItemsActionTypes.FETCH_ITEMS_ERROR;
    payload: string;
}

export type ItemsAction =
    | FetchItemsAction
    | FetchItemsErrorAction
    | FetchItemsSuccessAction
    | FetchOneItem
    | FetchOneItemSuccess
    | FetchOneItemError;
