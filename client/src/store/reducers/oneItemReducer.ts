import { ItemsAction, ItemsActionTypes, OneItemState } from "../../types/items";

const initialState: OneItemState = {
    oneItem: {},
    loading: false,
    error: null,
};

export const oneItemReducer = (
    state = initialState,
    action: ItemsAction
): OneItemState => {
    switch (action.type) {
        case ItemsActionTypes.FETCH_ONE_ITEM:
            return { loading: true, error: null, oneItem: {} };
        case ItemsActionTypes.FETCH_ONE_ITEM_SUCCESS:
            return { loading: false, error: null, oneItem: action.payload };
        case ItemsActionTypes.FETCH_ONE_ITEM_ERROR:
            return { loading: false, error: action.payload, oneItem: {} };
        default:
            return state;
    }
};
