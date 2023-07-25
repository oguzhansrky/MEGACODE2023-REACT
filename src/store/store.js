import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import userSlice from './slices/userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const userConfig = {
  key: 'user',
  version: 1,
  storage,
}

const persistedUser = persistReducer(userConfig, userSlice)

export const store = configureStore({
  reducer: {
    user: persistedUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
