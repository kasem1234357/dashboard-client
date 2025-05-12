import React, { Suspense, useEffect, useRef, useState } from "react";
import { massageData } from "../components/Data/massageData";
import {
  BackArrow,
  Delete,
  Download,
  Print,
  ReturnBack,
  Send,
} from "../components/icons/SvgIcons";
import Massage from "../components/Massages/Massage/Massage";
import MassegeArea from "../components/Massages/MassegeArea/MassegeArea";
import MassegeLabel from "../components/Massages/MassegeArea/MassegeLabel";
//=====================================================//
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { motion } from "framer-motion"


//======================================================//

import "../styles/massage.css";
import { convertToPDF } from "../utils/PDF_function";
import { filter } from "../utils/FilterFn";
import {  config_animateX } from "../configs/motionConfig";

function MassagePage() {
  const [msgImgData, setImgData] = useState([]);
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          var formData = new FormData();
          formData.append("name", "Ali Hamza");
          loader.file.then((file) => {
            formData.append("files", file);
            setImgData((prev) => [...prev, file]);
            console.log(file);
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const [showList, setShowList] = useState(true);
  const [senderMassageData, setSenderMassageData] = useState("");
  const [printContent, setPrintContent] = useState("");
  const [msgData, setMsgData] = useState(massageData);
  const [filterData, setFilterData] = useState([]);
  const [currentMassage, setCurrentMassage] = useState(massageData[0]);
  const inputRef = useRef("");
  const removeMassage = (date) => {
    const newData = msgData.filter((data) => data.date !== date);
    setMsgData(newData);
    inputRef.current.value = "";
    setCurrentMassage(newData[0]);
  };
  useEffect(() => {
    setFilterData(msgData);
  }, [msgData]);
  return (
    <Suspense
      fallback={
        <div className="loading_auth">
          {" "}
          <span className="loader_auth"></span>{" "}
        </div>
      }
    >
      <motion.div 
         {...config_animateX}
       className="massage flex">
        <div className="massage__navbar flex">
          <div className="massage__navbar__search">
            <input
              ref={inputRef}
              type="text"
              placeholder="search..."
              onChange={(e) => {
                filter(msgData, "sender", e.target.value, setFilterData);
              }}
            />
          </div>
        </div>
        <div className="massage__content flex">
          <div
            className={`massage__list ${
              showList ? "active" : ""
            } secondary--bg`}
          >
            <div className="massage__list__searchBox flex">
              <div className="massage__list__selectBox flex">
                <select name="" id="">
                  <option value="1">Newest First</option>
                  <option value="1">Oldest First</option>
                  <option value="1">Unreaded First</option>
                </select>
                <svg
                  className="svg--arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="#0DB8D3">
                    <path d="M18.2 7.6c-.4 0-.7.1-.9.4L13 12.6c-.5.5-1.4.5-1.9 0L6.8 8c-.3-.2-.6-.4-1-.4-1.1 0-1.7 1.3-.9 2.1l6.2 6.8c.5.6 1.4.6 1.9 0l6.2-6.8c.6-.8 0-2.1-1-2.1z"></path>
                  </g>
                </svg>
              </div>

              <svg
                className="svg--icon svg--close--arrow"
                onClick={() => setShowList(!showList)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="#0DB8D3">
                  <path d="M12.4 18.2c0-.4-.1-.7-.4-.9L7.4 13c-.5-.5-.5-1.4 0-1.9L12 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1zM20.4 18.2c0-.4-.1-.7-.4-.9L15.4 13c-.5-.5-.5-1.4 0-1.9L20 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1z"></path>
                </g>
              </svg>
            </div>
            <div className="massage__box flex">
              {filterData?.map((massage, index) => (
                <Massage
                  key={index}
                  data={massage}
                  setCurrentMassage={setCurrentMassage}
                />
              ))}
            </div>
          </div>
          <div className="massage__viewBox secondary--bg flex">
            <div className="massage__viewBox__editBox">
              <ReturnBack
                className="svg--icon massege-arrow"
                color="#0DB8D3"
                onClick={() => setShowList(!showList)}
              />
              <div className="tools flex">
                <BackArrow className="svg--icon" color="#0DB8D3" />
                <Download className="svg--icon" color="#0DB8D3" />
                <Print
                  className="svg--icon"
                  color="#0DB8D3"
                  onClick={() => {
                    convertToPDF(printContent);
                  }}
                />
                <Delete
                  className="svg--icon"
                  color="#0DB8D3"
                  onClick={() => {
                    removeMassage(currentMassage.date);
                  }}
                />
              </div>
            </div>
            <div className="massage__viewBox__massegeBox ">
              <MassegeLabel {...currentMassage} />
              <MassegeArea setPrintContent={setPrintContent} />
              <CKEditor
                editor={ClassicEditor}
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                data="<p>write your message here</p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  console.log(data);
                  setSenderMassageData(data);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              {senderMassageData}
              <button className="send-massage-btn">
                {" "}
                <Send color={"#0db8d3"} />{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Suspense>
  );
}

export default MassagePage;
/*
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
  variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}

*/