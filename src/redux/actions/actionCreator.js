import {GET_ALL_USERS, SET_ALL_USERS} from "../constants"

export const getAllUsers = () => ({
    type: GET_ALL_USERS,
})

export const setAllUsers = (payload) => ({
    type: SET_ALL_USERS,
    payload
})
