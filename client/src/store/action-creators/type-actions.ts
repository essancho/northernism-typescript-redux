import axios from "axios";
import { Dispatch } from "redux";
import { TypesActions, TypeActionTypes } from "../../types/types";

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
