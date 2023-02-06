const ViewArea = (props) => {
  
  if(JSON.stringify(props.pickedContent) == JSON.stringify({})){
    return (<div></div>);
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
        <div className="dateBox">{props.pickedContent["galPhotographyMonth"]}</div>
        <div className="keywordBox">{props.pickedContent["galSearchKeyword"]}</div>
      </div>
    </div>
  );
};

export default ViewArea;