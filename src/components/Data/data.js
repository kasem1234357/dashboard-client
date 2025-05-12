const getData = (data, type, customStartIndex = 0, customEndIndex = 6) => {
  const Month_Labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  switch (type) {
    case "startSemester":
      return {
        labels: Month_Labels.slice(0, 6),
        data: data.slice(0, 6),
      };
    case "endSemester":
      return {
        labels: Month_Labels.slice(6, 12),
        data: data.slice(6, 12),
      };
    case "full":
      return {
        labels: Month_Labels,
        data,
      };
    case "custom": {
      if (customEndIndex == customStartIndex) {
        return {
          labels: Month_Labels.slice(customStartIndex, customEndIndex + 1),
          data: data.slice(customStartIndex, customEndIndex + 1),
        };
      }
      if (customStartIndex > customEndIndex) {
        const slice1 = Month_Labels.slice(
          customStartIndex,
          Month_Labels.length
        );
        const dataSlice1 = data.slice(customStartIndex, data.length);
        const dataSlice2 = data.slice(0, customEndIndex + 1);
        const slice2 = Month_Labels.slice(0, customEndIndex + 1);
        const labels = slice1.concat(slice2);
        const dataItems = dataSlice1.concat(dataSlice2);
        return {
          labels,
          data: dataItems,
          startPoint: customStartIndex,
        };
      }

      return {
        labels: Month_Labels.slice(customStartIndex, customEndIndex + 1),
        data: data.slice(customStartIndex, customEndIndex + 1),
        startPoint: customStartIndex,
      };
    }
    default:
      break;
  }
};
export const dataGenerators = (
  dataType,
  dataItem,
  range,
  customIndex,
  type = "monthly"
) => {
  console.log(dataItem);
  
  const { labels, data } = getData(
    dataItem.monthlyData,
    range,
    customIndex.start,
    customIndex.end
  );
  const emptyItem =(i)=> ({
    x: labels[i],
    y: 0,
    [dataType]: 0,
  })
  const dataItems = [];
  for (let i = 0; i < labels.length; i++) {
    data[i]
      ? dataItems.push({
          x: labels[i],
          y: data[i][dataType],
          [dataType]: data[i][dataType] ,
        })
      : dataItems.push(emptyItem(i));
  }
  return dataItems;
};
