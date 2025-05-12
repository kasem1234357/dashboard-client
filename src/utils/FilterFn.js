export const filter = (data,method, filterText,callback) => {
    callback((prev)=>{
      const dt = data.filter((task) => task[method].includes(filterText));
      prev = dt
      return prev
    });
  };