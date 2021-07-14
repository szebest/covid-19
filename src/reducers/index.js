import fetchedDataReducer from "./fetchedData";
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import localforage from 'localforage';

const reducer = combineReducers({
    fetchedData: fetchedDataReducer
})

const persistConfig = {
    key: "root",
    storage: localforage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
  
const persistor = persistStore(store)

export {store, persistor}