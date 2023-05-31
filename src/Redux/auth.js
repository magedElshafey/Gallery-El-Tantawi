import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  isLogin: false,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      toast.success("تم تسجيل الدخول بنجاح");
    },
    logout: (state) => {
      state.isLogin = false;
      toast.success("تم تسجيل الخروج بنجاح");
    },
  },
});
export const [login, logout] = authSlice.actions;
export default authSlice.reducer;
