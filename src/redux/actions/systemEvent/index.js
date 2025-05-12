export const system_layout_actions = {
  addUser: (state, action) => {
    state.status = "succeeded";
    state.user = action.payload;
    state.auth = true;
    state.loading=false;
    console.log("h1");
    localStorage.setItem("user", JSON.stringify(action.payload?._id || ""));
  },
  updateTaskNumber: (state, action) => {
    state.taskNumber = action.payload;
  },
  updateProductNumber: (state, action) => {
    state.productNumber = action.payload;
  },
  updateUserProfileImg: (state, action) => {
    state.user.profileImg = action.payload;
  }
};
