export const initialState = {
    user: {},
    status: "idle",
    id: "",
    notification: true,
    darkMode: localStorage.getItem('theme') === 'dark'?true:false,
    taskNumber: 1,
    productNumber: 1,
    auth:false,
    loading:true,
    error: null, //loading || success || failure
}
