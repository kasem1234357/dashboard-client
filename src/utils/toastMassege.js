export const toastMessage = (pendingMessage = "Pending ...") => {
    return {
      pending: pendingMessage,
      success: {
        render(responce) {

          return responce?.data?.data?.customMsg || "Successful.";
        },
      },
      error: {
        render(error) {
          console.log(error);
          if(error?.data?.response){
            return error?.data?.response?.data?.message || "An error occurred";
          }
          return error?.data?.data?.message  || "An error occurred";
        },
      },
    };
  };