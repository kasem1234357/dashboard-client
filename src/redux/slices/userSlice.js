import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../intialStates/user/index";
import { notification_Actions_Layout } from "../actions/notifications";
import { system_layout_actions } from "../actions/systemEvent";
import { controls_layout_actions } from "../actions/controls";
import { auth_layout_actions, authExtraReducers } from "../actions/auth";
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...notification_Actions_Layout,
    ...controls_layout_actions,
    ...system_layout_actions,
    ...auth_layout_actions,
  },
  extraReducers(builder) {
    authExtraReducers(builder);
  },
});
export const getStatus = (state) => state.user.status;
export const {
  addUser,
  toggleNotification,
  toggleDarkMode,
  updateTaskNumber,
  updateProductNumber,
  logUser,
  updateDarkMode,
  updateUserProfileImg
} = userSlice.actions;
export default userSlice.reducer;

//  builder
//    .addCase(logUser.pending, (state, action) => {
//      state.status = "loading";
//    })
//    .addCase(logUser.fulfilled, (state, action) => {
//      state.status = "succeeded";
//      state.user = action.payload;
//      state.taskNumber = action.payload.taskNumber;
//      state.productNumber = action.payload.productNumber;
//      state.id = action.payload?._id || "";
//      localStorage.setItem("user", JSON.stringify(action.payload?._id || ""));
//    })
//    .addCase(logUser.rejected, (state, action) => {
//      state.status = "failed";
//      state.error = action.error.message;
//    })
//    .addCase(getUser.pending, (state, action) => {
//      state.status = "loading";
//    })
//    .addCase(getUser.fulfilled, (state, action) => {
//      state.status = "succeeded";
//      state.user = action.payload;
//      state.taskNumber = action.payload.taskNumber;
//      state.productNumber = action.payload.productNumber;
//      console.log("h3");
//      state.id = action.payload?._id || "";

//      console.log("h2");
//      localStorage.setItem("user", JSON.stringify(state.id));
//    })
//    .addCase(getUser.rejected, (state, action) => {
//      state.status = "failed";
//      state.error = action.error.message;
//    });
