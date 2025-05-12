import axios from "axios";
import React, { Suspense, useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Calendar from "react-calendar";
import "../styles/tasks.css";
import { useState } from "react";
import { useDispatch,useSelector} from 'react-redux'
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Add, Close } from "../components/icons/SvgIcons";
import { updateTaskNumber } from "../redux/slices/userSlice";
import axiosConfig from '../configs/axiosConfig'
import useOutsideClick from "../hooks/useOutsideClick";
import { config_scale } from "../configs/motionConfig";
import { toast } from "react-toastify";
import { toastMessage } from "../utils/toastMassege";
import { handleClick, toastConfig } from "../configs/notificationConfig";
function Task() {
  const dispatch = useDispatch()
  const taskNumber = useSelector(state =>state.user.taskNumber)
  const navigate = useNavigate();
  const location = useLocation();
  const color = ["#d9234b", "#9c6644", "#8338ec", "#3a5a40", "#277da1"];
  const defaultData = {
    title: "",
    state: location?.state.state,
    tasks: [],
    progress: 0,
    tag: "general",
    progressColor: "#00d4fa",
    tagColor: "#d9234b",
    remainder: location?.state.reminder ? true : false,
    reminderDate: location?.state.reminder || "",
  };
  const data = location?.state.dataInfo;
  // console.log(data);

  const [type, setType] = useState(location?.state.type);
  const [cacheData, setCacheData] = useState(defaultData);
  const [showModel, setShowModel] = useState(false);
  const [showTagBox, setShowtagBox] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [valueCalender, onChange] = useState('');
  useEffect(() => {
    if (data !== null) {
      setCacheData(data);
      if(data.reminderDate !== ''){
        onChange(new Date(data.reminderDate.split("-").join(", ")));
      }
      
      setTasks(data.tasks);
    }
  }, []);
  const toggleTask = (i, state) => {
    setCacheData((prev) => {
      state ? prev.progress-- : prev.progress++;
      console.log(prev.progress);
      prev.tasks[i].complicated = !state;
      return prev;
    });
  };
  const addTask = useCallback(() => {
    const updatedTasks = cacheData;
    setTasks((current) => [...current, { text: "", complicated: false }]);
    updatedTasks.tasks = [
      ...updatedTasks.tasks,
      { text: "", complicated: false },
    ];
    setCacheData(updatedTasks);
  }, [cacheData]);
  const titleRef = useRef("");
  const descRef = useRef("");
  const descFunc = () => {
    let text = [""];
    if (descRef.current.innerText.length !== 0) {
      text = descRef.current.innerText.split("\n");
      setCacheData((current) => ({ ...current, desc: text }));
    } else {
      setCacheData((current) => ({ ...current, desc: [""] }));
    }
  };
  const deleteTask = async() => {
    try {
       if(cacheData._id === undefined) {
        return 
       }
     await toast.promise(axiosConfig
        .delete(`/api/tasks/${cacheData._id}`)
        .then(() => {
          dispatch(updateTaskNumber(taskNumber - 1))
          navigate("/tasks");
        }),()=>{},toastConfig);
    } catch (error) {
      console.log(error);
    }
  };
  const save = async() => {
    try {
      console.log(cacheData.progress / tasks.length);
      if (Math.floor(cacheData.progress / tasks.length) === 1) {
        setCacheData((prev) => ({ ...prev, state: "done" }));
      } else if (cacheData.progress / tasks.length > 0) {
        setCacheData((prev) => ({ ...prev, state: "in progress" }));
      } else {
        setCacheData((prev) => ({ ...prev, state: "To do" }));
      }
      if (type === "New") {
       await toast.promise(axiosConfig
          .post(`/api/tasks/`, cacheData)
          .then((res) => {
            setCacheData(res.data.data);
            dispatch(updateTaskNumber(taskNumber + 1))
            return res
          }),toastMessage(),toastConfig);

        setType("update");
        
      } else {
        await axiosConfig.put(
          `/api/tasks/update/${
            cacheData._id || location?.state.dataInfo._id
          }`,
          cacheData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
     
    try {
      if (type !== "New") {
        save();
      }
    } catch (error) {
      console.log(error);
    }
    if (cacheData.reminderDate !=="" ) {
      console.log(cacheData);
      onChange(new Date(cacheData.reminderDate.split("-").join(", ")));
    }
  }, [
    cacheData.state,
    cacheData.progress,
    cacheData.tasks,
    cacheData.tag,
    type,
    tasks,
  ]);

  const targetRef = useRef('')
  const handleClickOutside = ()=>{
     setShowtagBox(false)
  }
  useOutsideClick(targetRef,handleClickOutside)
  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
    <motion.div {...config_scale} className="single--Task">
      <div className="single--Task__navbar flex">
        <div className="flex">
          <select
            name=""
            id=""
            onChange={(e) => {
              setCacheData((prev) => {
                prev.state = e.target.value;
                return prev;
              });
            }}
          >
            <option
              selected={cacheData.state === "To do" ? true : false}
              value="To do"
            >
              To do
            </option>
            <option
              selected={cacheData.state === "in progress" ? true : false}
              value="in progress"
            >
              in progress
            </option>
            <option
              selected={cacheData.state === "done" ? true : false}
              value="done"
            >
              done
            </option>
          </select>
          <div className="tag--box" style={{ background: cacheData.tagColor }}>
            {" "}
            {cacheData.tag}
          </div>
        </div>

        <div className="flex">
          <button className="task--save--btn" onClick={save}>
            save
          </button>
          <NavLink to="/tasks" className={"task--close"}>
            {" "}
            <Close width="25px" color="#d7d7d7" />
          </NavLink>
        </div>
      </div>
      <input
        className="titleInput"
        suppressContentEditableWarning={true}
        contentEditable="true"
        ref={titleRef}
        defaultValue={cacheData.title || ""}
        onInput={(e) =>
          setCacheData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <p
        className="descArea"
        contentEditable="true"
        suppressContentEditableWarning={true}
        ref={descRef}
        onInput={descFunc}
      >
        {" "}
        {cacheData.desc?.join("\n") || "unkown"}
      </p>
      <div className="single--task--container ">
        <label className="single--task--box flex add--task" onClick={addTask}>
          <Add width={"30px"} color={"#d7d7d7"} /> Add new Task
        </label>
        {tasks?.map((task, index) => {
          return (
            <div
              className="single--task--box flex"
              key={index}
              style={{ borderLeft: `5px solid ${cacheData.progressColor}` }}
            >
              <input
                type="checkbox"
                id={index}
                value={task.text}
                defaultChecked={task.complicated === true ? true : false}
                onChange={() => toggleTask(index, task.complicated)}
              />
              <label htmlFor={index}>
                <i></i>
              </label>

              <input
                defaultValue={task.text}
                type={"text"}
                onChange={(e) =>
                  setCacheData((prev) => {
                    prev.tasks[index].text = e.target.value;
                    return prev;
                  })
                }
              />

              <div className="addLine"></div>
            </div>
          );
        })}
      </div>
      <div className=" single-task-controll ">
        <div
          ref={targetRef} className={`task--save--btn tag-btn ${showTagBox ? "active" : ""}`}
        >
          {showTagBox ? (
            <div className={`tagBox flex`}>
              <input
                value={cacheData.tag}
                onChange={(e) => {
                  setCacheData((prev) => ({ ...prev, tag: e.target.value }));
                }}
                className="tagBox__input"
                type="text"
              />
              <div
                onClick={() => setShowColors(!showColors)}
                className="tag--circle--color--main"
                style={{ background: cacheData.tagColor }}
              ></div>
              {showColors
                ? color
                    .filter((col) => col !== cacheData.tagColor)
                    .map((colorHex, index) => {
                      return (
                        <div
                          onClick={() => {
                            setCacheData((prev) => ({
                              ...prev,
                              tagColor: colorHex,
                            }));
                          }}
                          key={index}
                          className="tag--circle--color"
                          style={{
                            background: colorHex,
                            right: -((index + 1) * 30),
                          }}
                        ></div>
                      );
                    })
                : null}
            </div>
          ) : null}
          <span  onClick={() => setShowtagBox(!showTagBox)}>
            Add tag{" "}
            <Add width={"30px"} color={"#d7d7d7"} viewBox={"-2 -2 28 28"} />
          </span>{" "}
        </div>
        <div className="task--calendar flex">
          <button
            onClick={() => setShowModel(!showModel)}
            className={`task--calendar--btn ${valueCalender !== "" && "active"}`}
          >
            <span></span>
            <svg
              width={"30px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="#FFFFFF">
                <path d="M19.5 4c-.3 0-.5.2-.5.5V5h-2v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V5h-2v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V5h-2v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V5H8v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V5H5v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V19c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V4.5c0-.3-.2-.5-.5-.5zM9 18H5v-3h4v3zm0-4H5v-3h4v3zm5 4h-4v-3h4v3zm0-4h-4v-3h4v3zm5 4h-4v-3h4v3zm0-4h-4v-3h4v3zm0-5H5V8h14v1z"></path>
              </g>
            </svg>
          </button>
          {showModel && (
            <Calendar
              className={"calendar-task-box"}
              onChange={(value, event) => {
                console.log(value)
                setCacheData((prev) => ({
                  ...prev,
                  reminderDate: `${new Date(value).getFullYear()}-${
                    new Date(value).getMonth() + 1
                  }-${new Date(value).getDate()}`,
                  remainder: true,
                }));
                return value;
              }}
              value={valueCalender}
            />
          )}

          <button className="task--save--btn" onClick={deleteTask}>
            delete
          </button>
        </div>
      </div>
    </motion.div>
    </Suspense>
  );
}

export default Task;
