import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from '../../../configs/axiosConfig'
import { toast } from "react-toastify";
export const auth_layout_actions = {
  logUser :(state, action) =>{
    state.status = "succeeded";
    state.user = action.payload;
    console.log(action.payload)
    state.auth = true
    state.taskNumber = action.payload.taskNumber;
    state.productNumber = action.payload.productNumber;
    state.id = action.payload?._id || "";
    localStorage.setItem("user", JSON.stringify(action.payload?._id || ""));
    localStorage.setItem('accessToken',action.payload?.accessToken);
  }
}
const LOG_URL = `api/auth/login`;
const GET_USER = `api/users/`;
// export const logUser = createAsyncThunk(
//   "user/checkUser",
//   async (initialUser) => {
//     const response = await axiosConfig.post(LOG_URL, initialUser.initialUser,{
//       withCredentials: true,
//     })   
//     console.log(initialUser)
//     console.log(response.headers);
//     return {
//       ...response.data.data,
//       taskNumber: response.data.data.taskNumber,
//       productNumber: response.data.data.productNumber,
//     };
//   }
// );
export const getUser = createAsyncThunk("user/getUser", async () => {
  let accessToken;
  try {
    accessToken = localStorage.getItem('accessToken');
  } catch (error) {
    console.error('Error parsing access token:', error);
    throw new Error('Invalid access token');
  }

  if (!accessToken) {
    throw new Error('No access token found');
  }

  const response = await axiosConfig.get(`${GET_USER}`, {
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });

  return {
    ...response.data.data,
    taskNumber: response.data.data.taskNumber,
    productNumber: response.data.data.productNumber,
  };
});

export const authExtraReducers = (builder)=>{
    return (
      //   builder.addCase(logUser.pending, (state, action) => {
      //   state.status = "loading";
      // })
      // .addCase(logUser.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.user = action.payload;
      //   console.log(action.payload)
      //   state.auth = true
      //   state.taskNumber = action.payload.taskNumber;
      //   state.productNumber = action.payload.productNumber;
      //   state.id = action.payload?._id || "";
      //   localStorage.setItem("user", JSON.stringify(action.payload?._id || ""));
      //   localStorage.setItem('accessToken',action.payload?.accessToken);
      // })
      // .addCase(logUser.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.auth = false
      //   console.log(action);
        
      //   state.error = action.error.message;
      //   toast.error(action.error.message)
      // })
      builder.addCase(getUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        // state.user = {
        //   ...state.user,  // Preserve the existing user state structure
        //   ...action.payload,
        // };
        state.user = action.payload
        state.auth = true;
        state.taskNumber = action.payload.taskNumber;
        state.productNumber = action.payload.productNumber;
        state.id = action.payload?._id || "";
        localStorage.setItem('accessToken', action.payload?.accessToken);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.auth = false;
        state.loading = false;
        state.error = action.error.message;
        state.status = "failure";
      })
    )
}