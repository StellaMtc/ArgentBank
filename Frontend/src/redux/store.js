import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './user.reducer';

// Configuration pour la persistance du reducer 'user'
const persistConfigUser = {
  key: 'user',
  version: 1,
  storage,
};

// Reducer persistant
const persistedUserReducer = persistReducer(persistConfigUser, userSlice);

// Configuration et création du store
const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Création du persistor
const persistor = persistStore(store);

export { store, persistor };
