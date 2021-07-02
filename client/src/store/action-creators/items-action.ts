import axios from "axios";
import { Dispatch } from "redux";
import { ItemsAction, ItemsActionTypes } from "../../types/items";
import { TypesActions, TypeActionTypes } from "../../types/types";
import { $authHost, $host } from "../../http";
import { CreateAction, CreateActionTypes } from "../../types/create";
import {
    UpdateAction,
    UpdateActionTypes,
    DeleteActionTypes,
} from "../../types/update";
export const fetchItems = (
    typeId: number | null,
    brandId: number | null,
    page: number,
    limit: number,
    searchName = "",
    rangePrice = [0, 20000]
) => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        try {
            dispatch({ type: ItemsActionTypes.FETCH_ITEMS });
            const response = await $host.get("/api/collection/", {
                params: {
                    typeId,
                    brandId,
                    page,
                    limit,
                    searchName,
                    rangePrice,
                },
            });
            dispatch({
                type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
                payload: response.data.rows,
            });
        } catch (err) {
            dispatch({
                type: ItemsActionTypes.FETCH_ITEMS_ERROR,
                payload: "There is an error with collection loading",
            });
        }
    };
};

export const fetchOneItem = (id: number) => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        try {
            dispatch({ type: ItemsActionTypes.FETCH_ONE_ITEM });
            const response = await axios.get(
                `http://localhost:5000/api/collection/${id}`
            );
            dispatch({
                type: ItemsActionTypes.FETCH_ONE_ITEM_SUCCESS,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: ItemsActionTypes.FETCH_ONE_ITEM_ERROR,
                payload: "There is an error with this item",
            });
        }
    };
};

export const fetchTypes = () => {
    return async (dispatch: Dispatch<TypesActions>) => {
        try {
            dispatch({ type: TypeActionTypes.FETCH_TYPE });
            const response = await axios.get("http://localhost:5000/api/type/");
            dispatch({
                type: TypeActionTypes.FETCH_TYPE_SUCCESS,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: TypeActionTypes.FETCH_TYPE_ERROR,
                payload: "There is an error with collection loading",
            });
        }
    };
};

export const uploadItem = (item: {}) => {
    return async (dispatch: Dispatch<CreateAction>) => {
        try {
            dispatch({ type: CreateActionTypes.CREATE_ITEM });
            const { data } = await $authHost.post("api/collection/", item);
            dispatch({
                type: CreateActionTypes.CREATE_ITEM_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: CreateActionTypes.CREATE_ITEM_ERROR,
                payload: "There was an error uploading new item",
            });
        }
    };
};

export const updateItem = (id: number, item: {}) => {
    return async (dispatch: Dispatch<UpdateAction>) => {
        try {
            dispatch({ type: UpdateActionTypes.UPDATE_ITEM });
            const { data } = await $authHost.patch(
                `api/collection/${id}`,
                item
            );
            dispatch({
                type: UpdateActionTypes.UPDATE_ITEM_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: UpdateActionTypes.UPDATE_ITEM_ERROR,
                payload: "There was an error uploading new item",
            });
        }
    };
};

export const deleteItem = (id: number) => {
    return async (dispatch: Dispatch<UpdateAction>) => {
        try {
            dispatch({ type: DeleteActionTypes.DELETE_ITEM });
            const { data } = await $authHost.delete(`api/collection/${id}`);
            dispatch({
                type: DeleteActionTypes.DELETE_ITEM_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: DeleteActionTypes.DELETE_ITEM_ERROR,
                payload: "There was an error deleting new item",
            });
        }
    };
};
