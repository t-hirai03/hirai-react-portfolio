// import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
// import { Reducer, State } from './reducer'
// import thunk from "redux-thunk"

// export type AppState = {
//   state: State
// }

// const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     combineReducers<AppState>({
//       state: Reducer
//     }),
//     storeEnhancers(applyMiddleware(thunk))
// )

// export default store

import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;