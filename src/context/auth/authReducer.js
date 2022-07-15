import { types } from "./types";

export const initialState = {
    name: null,
    lastName:null,
    email: null,
    role:null
}

export const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.login:
            return {
                ...state,
                name:action.payload.name,
                lastName:action.payload.lastName,
                email: action.payload.email,
                role:action.payload.role
            }
        case types.logout:
            return {
                ...state,
                name:null,
                lastName:null,
                email: null,
                role:null
            };
        default:
            return state;
    }
}