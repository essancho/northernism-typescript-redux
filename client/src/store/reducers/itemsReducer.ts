import { ItemsAction, ItemsActionTypes, ItemsState } from "../../types/items";

const initialState: ItemsState = {
    items: [],
    loading: false,
    error: null,
};

export const itemsReducer = (
    state = initialState,
    action: ItemsAction
): ItemsState => {
    switch (action.type) {
        case ItemsActionTypes.FETCH_ITEMS:
            return { loading: true, error: null, items: [] };
        case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
            return { loading: false, error: null, items: action.payload };
        case ItemsActionTypes.FETCH_ITEMS_ERROR:
            return { loading: false, error: action.payload, items: [] };

        default:
            return state;
    }
};
