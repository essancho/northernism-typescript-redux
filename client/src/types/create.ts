export const CREATE_TYPE = "CREATE_TYPE";
export const CREATE_TYPE_SUCCESS = "CREATE_TYPE_SUCCESS";
export const CREATE_TYPE_ERROR = "CREATE_TYPE_ERROR";
export const CREATE_ITEM = "CREATE_ITEM";
export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export const CREATE_ITEM_ERROR = "CREATE_ITEM_ERROR";

export interface CreateState {
    error: null | string;
    loading: boolean;
    response: {};
}

export enum CreateActionTypes {
    CREATE_TYPE = "CREATE_TYPE",
    CREATE_TYPE_SUCCESS = "CREATE_TYPE_SUCCESS",
    CREATE_TYPE_ERROR = "CREATE_TYPE_ERROR",
    CREATE_ITEM = "CREATE_ITEM",
    CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS",
    CREATE_ITEM_ERROR = "CREATE_ITEM_ERROR",
}

interface CreateType {
    type: CreateActionTypes.CREATE_TYPE;
}
interface CreateTypeSuccess {
    type: CreateActionTypes.CREATE_TYPE;
    payload: any;
}
interface CreateTypeError {
    type: CreateActionTypes.CREATE_TYPE_ERROR;
    payload: string;
}

interface CreateItem {
    type: CreateActionTypes.CREATE_ITEM;
}
interface CreateItemSuccess {
    type: CreateActionTypes.CREATE_ITEM_SUCCESS;
    payload: {};
}
interface CreateItemError {
    type: CreateActionTypes.CREATE_ITEM_ERROR;
    payload: string;
}

export type CreateAction =
    | CreateItem
    | CreateItemError
    | CreateItemSuccess
    | CreateType
    | CreateTypeSuccess
    | CreateTypeError;
