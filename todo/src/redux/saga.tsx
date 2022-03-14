import axios from "axios";
import { fetchApi,renderValue } from "./type";
import { call, fork, put, select, take } from "redux-saga/effects";
import { valid } from "../components/todo/selectors";

function* check(): any {
  yield take("addValue");
  const value = yield select(valid);

  const baseUrl = "https://gorest.co.in/public/v2/users/";
  const accessToken =
    "8d1b03c2791f33729a13cb9bc84f88e98d13293e0e54a3f67b7369d7f3f4b3f3";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const { data } = yield call(axios.post, baseUrl, value, {
      headers: headers,
    });
    //console.log(data);
    yield put({type:renderValue,data})
    

  } catch (error: any) {
    console.log(error);
  }
}
function* ApiFetch(): any {
  const baseUrl = "https://gorest.co.in/public/v2/users";

  try {
    const { data } = yield call(axios.get, baseUrl);
    const api = data;
    yield put({ type: fetchApi, api });
  } catch (error: any) {
    console.log(error);
  }
}

export function* rootSaga() {
  yield fork(ApiFetch);
  yield fork(check);
}
