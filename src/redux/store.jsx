import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import productreducer from "./productSlice"
import cartreducer from "./cartSlice";

const rootReducer = combineReducers({
      product:productreducer,
      cart:cartreducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product", "cart"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],    
      },
    }),
});

export const persistor = persistStore(store);