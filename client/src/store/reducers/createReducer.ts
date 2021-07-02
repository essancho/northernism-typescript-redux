import {
    CreateActionTypes,
    CreateAction,
    CreateState,
} from "../../types/create";

const initialState: CreateState = {
    response: {},
    loading: false,
    error: null,
};

export const createReducer = (
    state = initialState,
    action: CreateAction
): CreateState => {
    switch (action.type) {
        case CreateActionTypes.CREATE_ITEM:
            return { loading: true, error: null, response: {} };
        case CreateActionTypes.CREATE_ITEM_ERROR:
            return { loading: false, error: null, response: action.payload };
        case CreateActionTypes.CREATE_ITEM_ERROR:
            return { loading: false, error: action.payload, response: {} };
        default:
            return state;
    }
};
