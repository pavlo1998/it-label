import {SET_ALL_USERS} from "../constants";

const initialState = {
    acceptedUsers : [],
}

const users = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_ALL_USERS:
            return{
                ...state,
                acceptedUsers: [...state.acceptedUsers, ...payload],
            };
        default: return state;
    }
}

export default users;
