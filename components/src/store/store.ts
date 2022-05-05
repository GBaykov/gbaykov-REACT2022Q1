import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mainReducer from './reducers/MainPageSlice';
import formReducer from './reducers/FormSlice';

export const rootReducer = combineReducers({
  mainReducer,
  formReducer,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
