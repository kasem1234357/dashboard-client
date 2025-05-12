const Boxes = ({uploadingProgress}) => {
  const boxes = []
  for(let i=0;i<6;i++){
    if (i+1 <= uploadingProgress) {

        boxes.push(<div className="progress--box" style={{ background: "#0db8d3" }}></div>)
     
    } else {boxes.push(<div className="progress--box" ></div>)};
  
  }
  return boxes;
};
export default Boxes