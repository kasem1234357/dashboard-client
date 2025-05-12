import React from "react";
import { useNavigate } from "react-router-dom";

function DaysBox(props) {
  const {
    number,
    dataNumber,
    data,
    dayDate,
    active,
    className,
    ...otherprops
  } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`${className} ${active && "active-reminder"} `}
      {...otherprops}
      onClick={() => {
        console.log(data);
        navigate(`/tasks/task/${dataNumber}`, {
          state: {
            dataInfo: data || null,
            type: data ? "update" : "New",
            reminder: dayDate,
          },
        });
      }}
    >
      <span className={`${active && "active-reminder-day"} `}>{number}</span>

      {data ? (
        <div className="reminder--color ">
          <h4>{data.title}</h4>
          <div
            className="triangle"
            style={{
              borderTopColor: data.progressColor,
              borderLeftColor: data.progressColor,
            }}
          ></div>
          <div className="end--progress--calendar"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DaysBox;
