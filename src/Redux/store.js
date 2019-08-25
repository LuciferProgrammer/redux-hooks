import { createStore, combineReducers } from "redux";
import { textReducer } from './text-reducer'

let reducers = combineReducers({
   textReducer: textReducer
})

export let store = createStore(reducers)