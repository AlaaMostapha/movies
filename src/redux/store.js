import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import rootSaga from "./sagas";

//create saga middleware
const sagaMiddleWare = createSagaMiddleware();

//create store and fetch reducers and saga middleware
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

//run saga middleware
sagaMiddleWare.run(rootSaga);

export default store;
