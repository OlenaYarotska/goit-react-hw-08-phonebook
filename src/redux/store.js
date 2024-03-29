import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/contacts-slice'; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  authReducer from './auth/auth-slice';
import { contactsApi } from './contacts/contacts -api';


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

 export const store = configureStore({
   reducer: {
     auth: persistReducer(persistConfig, authReducer),
     contacts:
       filterReducer,
     [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: getDefaultMiddleware => [
     ...getDefaultMiddleware({
      serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
     contactsApi.middleware,
],
 });

export const persistor = persistStore(store);
