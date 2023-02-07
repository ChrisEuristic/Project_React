const ViewArea = (props) => {
  
  if(JSON.stringify(props.pickedContent) == JSON.stringify({})){
    return (<div className="endContent"></div>);
  }
  
  

  return (
    <div className="endContent">
      <div className="imageArea">
        <div className="imageBox"><img src={props.pickedContent["galWebImageUrl"]} className='image' /></div>
      </div>
      <div className="textArea">
        <div className="titleBox">{props.pickedContent["galTitle"]}</div>
        <div className="cityBox">{props.pickedContent["galPhotographyLocation"]}</div>
        <div className="personBox">{props.pickedContent["galPhotographer"]}</div>
        <div className="dateBox">{props.pickedContent["galPhotographyMonth"].slice(0,4)}년 {props.pickedContent["galPhotographyMonth"].slice(4,6)}월</div>
        <div className="keywordBox">{props.pickedContent["galSearchKeyword"]}</div>
      </div>
    </div>
  );
};

export default ViewArea;