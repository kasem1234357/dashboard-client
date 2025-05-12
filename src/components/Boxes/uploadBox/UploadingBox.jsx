import React from "react";
import "./uploadingBox.css";
import { Close } from "../../icons/SvgIcons";
import Boxes from './Boxes'

function UploadingBox({ setShowModel, uploadingProgress }) {
  // const BoxNumber = 6;
  return (
    <>
      <div className="uploading_box flex ">
        <Close
          width="30px"
          color="#0db8d3"
          className="close-icon"
          onClick={() => {
            setShowModel(false);
          }}
        />
        <h2>Uploading Data</h2>
        <div className="loader_container">
          <span className="loader"></span>
        </div>
        <h3 className="uploading--progress">{uploadingProgress} 0f 6</h3>
        <div className="progress_boxes">
         <Boxes uploadingProgress={uploadingProgress}/>
        </div>
      </div>
      <div className="blur_area"></div>
    </>
  );
}

export default UploadingBox;

