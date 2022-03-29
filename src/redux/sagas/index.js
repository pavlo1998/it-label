import {takeEvery, put} from 'redux-saga/effects'
import {GET_ALL_USERS} from "../constants";
import {getUsers} from "../../api";
import {setAllUsers} from "../actions/actionCreator";


export function* handleAllUsers(){
    const data = yield getUsers()
    yield put(setAllUsers(data))
}

export function* watchClickSaga(){
    yield takeEvery(GET_ALL_USERS, handleAllUsers)
}

export default function* rootSaga(){
    yield watchClickSaga();
}
