import React, { Suspense, useEffect, useRef, useState } from "react";

import { massageData } from "../components/Data/massageData";
import {
  Add,
  AddProductIcon,
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

import { motion } from "framer-motion"


//======================================================//

import "../styles/massage.css";
import { convertToPDF } from "../utils/PDF_function";
import { filter } from "../utils/FilterFn";
import {  config_animateX } from "../configs/motionConfig";
import MassegeSenderForm from "../components/Massages/MassegeSenderForm";

function MassagePage() {
  const [msgImgData, setImgData] = useState([]);
  

  const [showList, setShowList] = useState(true);

  const [printContent, setPrintContent] = useState("");
  const [msgData, setMsgData] = useState(massageData);
  const [MsgType, setMsgType] = useState('new');
  const [filterData, setFilterData] = useState([]);
  const [currentMassage, setCurrentMassage] = useState(null);
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
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName:"doda4kgzp",
  //   },
  // });

  // // Upload Widget Configuration
  // const uwConfig = {
  //   cloudName:"doda4kgzp",
  //   uploadPreset:"test@345",
  //   // Uncomment and modify as needed:
  //   // cropping: true,
  //   // showAdvancedOptions: true,
  //   // sources: ['local', 'url'],
  //   // multiple: false,
  //   // folder: 'user_images',
  //   // tags: ['users', 'profile'],
  //   // context: { alt: 'user_uploaded' },
  //   // clientAllowedFormats: ['images'],
  //   // maxImageFileSize: 2000000,
  //   // maxImageWidth: 2000,
  //   // theme: 'purple',
  // };

    //  const initializeUploadWidget = () => {
    //   if (window.cloudinary ) {
    //     // Create upload widget
    //     uploadWidgetRef.current = window.cloudinary.createUploadWidget(
    //       uwConfig,
    //       (error, result) => {
    //         if (!error && result && result.event === 'success') {
    //           console.log('Upload successful:', result.info);
    //          // setPublicId(result.info.public_id);
    //         }
    //       }
    //     );

    //     // Add click event to open widget
       
    //       if (uploadWidgetRef.current) {
    //         uploadWidgetRef.current.open();
    //       }
       

       
    //     // Cleanup
    //     ;
    //   }
    // };

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
        <div className="massage__navbar flex " style={{justifyContent:'space-between', alignItems:'center'}}>
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
          <div style={{
            cursor:'pointer',
            marginRight:'20px'
          }} onClick={()=>{
            setCurrentMassage(null)
            setMsgType('new')
          }}>
             <AddProductIcon width='25px' color="#f7f7f7" stroke="#d7d7d7" strokeWidth="2px"/>
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
                  setMsgType={setMsgType}
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
             {currentMassage && <>
             <MassegeLabel {...currentMassage} />
              <MassegeArea setPrintContent={setPrintContent} />
             </> }
              <MassegeSenderForm type={MsgType} data={currentMassage}/>
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