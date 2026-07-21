import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  uid: null,
  email: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ uid: string; email: string }>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.uid = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;