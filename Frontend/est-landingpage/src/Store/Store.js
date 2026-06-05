import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import adminReducer from "./Slices/AdminSlice";
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

const persistConfig = { key: "root", version: 1, storage };
const persistedReducer = persistReducer(persistConfig, authReducer);
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
// Function to reset persisted state
