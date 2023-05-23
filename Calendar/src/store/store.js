import { configureStore } from '@reduxjs/toolkit';

import { calendaSlice, uiSlice } from './';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendaSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});