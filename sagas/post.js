import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import axios from "axios";

// function addPostAPI(data) {
//   //제너레이터 x
//   // 실제 백엔드와 연결되는 부분
//   return axios.post("/api/post", data);
// }

function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    console.log(sagas);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost())]);
}
