
const Names = {
  short: {
    En: {
      days: ["San", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    
  },
  long: {
    En: {
      months: [
        "January ",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September ",
        "October",
        "November",
        "December",
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    
  },
};
const months = [
  "January ",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September ",
  "October",
  "November",
  "December",
];
const days= ["San", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

const useCalender = () => {
  const data = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    dayIndexOfTheWeek: new Date().getDay(),
  };
  /**
   * @desc This function using to get name by index.
   * @param { number } index
   * index is the order of month or day in the week
   * @param {"months" | "days"} name
   * @param {"En"} lang
   * @param {"short" | "long"} type
   * 
   * @return { string } 
   * month name or day name
   */
  const nameFormat = (
    index,
    name,
    lang= "En",
    type= "long"
  ) => {
    console.log('test');
    return Names[type  ][lang ][name][index ];
  };
  /**
   * @desc This function using to get name by index
   * @param { number } index
   * index is the order of month or day in the week
   * @param {"months" | "days"} name
   * @param {"En"} lang
   * @param {"short" | "long"} type
   * 
   * @return { string } 
   * month name or day name
   */
  function getMonthName(
    index,
    lang = "En",
    type = "long"
  ) {
    return nameFormat(index, "months", lang, type);
  }
  function getDayName(
    index,
    lang = "En",
    type= "long"
  ) {
    return nameFormat(index, "days", lang, type);
  }
  const numberDaysInMonth =(year, month)=> {
    let numberDaysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(numberDaysInMonth);
    return numberDaysInMonth;
  }
  function numberDaysInPreviosMonth(year, month){
    if (month == 0) {
      return numberDaysInMonth(year - 1, 11);
    }
    return numberDaysInMonth(year, month - 1);
  }
  /**
   * @param {number} year
   * @param {number} month
   * 
   * @return {{index: number;name: string;}} 
   * 
   */
  function dayOfTheMonth(year, month) {
    let dayOfTheMonth = new Date(year, month).getDay();
    console.log(dayOfTheMonth);
    return {
      index: dayOfTheMonth,
      name: days[dayOfTheMonth],
    };
  }
  const fullDate = `${data.year}-${data.month}-${data.day}`
  
  const globalInfo = (lang = "En", type = "short") => {
    const currentDay = {
      index: data.day,
      name: Names[type ][lang ]["days"][data.dayIndexOfTheWeek],
      dayIndexOfTheWeek: data.dayIndexOfTheWeek,
    };

    return {
      currentDay,
      currentMonth: {
        index: data.day,
        name: Names[type ][lang]["days"][data.month],
      },
      currentYear: data.year,
      dayIndex: data.day,
      monthIndex: data.month,
      dayIndexOfTheWeek: data.dayIndexOfTheWeek,
      startDayOfTheMonth: dayOfTheMonth(data.year, data.month),
      daysOfTheMonth: numberDaysInMonth(data.year, data.month),
    };
  };
  return {
    numberDaysInMonth,
    dayOfTheMonth,
    getDayName,
    getMonthName,
    fullDate,
    months,
    days,
    Names,
    currentYear: data.year,
    currentMonth: {
      index: data.month,
      name: months[data.month],
    },
    currentDay: {
      index: data.day,
      name: days[data.dayIndexOfTheWeek],
      dayIndexOfTheWeek: data.dayIndexOfTheWeek,
    },
    numberDaysInPreviosMonth,
    globalInfo,
  };
};
export default useCalender;
