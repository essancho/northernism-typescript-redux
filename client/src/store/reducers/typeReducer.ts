import { TypesActions, TypeActionTypes, TypesState } from "../../types/types";

const initialState: TypesState = {
    types: [],
    loading: false,
    error: null,
};

export const typeReducer = (
    state = initialState,
    action: TypesActions
): TypesState => {
    switch (action.type) {
        case TypeActionTypes.FETCH_TYPE:
            return { loading: true, error: null, types: [] };
        case TypeActionTypes.FETCH_TYPE_SUCCESS:
            return { loading: false, error: null, types: action.payload };
        case TypeActionTypes.FETCH_TYPE_ERROR:
            return { loading: false, error: action.payload, types: [] };
        default:
            return state;
    }
};
