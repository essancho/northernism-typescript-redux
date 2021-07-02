import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";
import authReducer from "./authReducer";
import { oneItemReducer } from "./oneItemReducer";
import { typeReducer } from "./typeReducer";
import { createReducer } from "./createReducer";
export const rootReducer = combineReducers({
    items: itemsReducer,
    auth: authReducer,
    oneItem: oneItemReducer,
    types: typeReducer,
    create: createReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
