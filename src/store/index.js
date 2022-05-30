import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeModeSlice.js";
import unSaveClice from "./unSaveClice.js";

const store = configureStore({
  reducer: {
    unSave: unSaveClice,
    setDark: themeModeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type", "unsaveForm/updateUnSaveForm"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "unsaveForm/updateUnSaveForm"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export default store;
