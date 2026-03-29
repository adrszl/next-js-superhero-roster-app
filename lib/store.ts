import { configureStore } from '@reduxjs/toolkit';
import charactersDetailsReducer from './features/charactersDetailsSlice';

export const store = configureStore({
    reducer: {
        charactersDetails: charactersDetailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;