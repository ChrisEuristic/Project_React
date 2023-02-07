import { useState, useRef } from "react";

const ButtonArea = (props) => {
  let title = [];
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  for(let key in props.buttonName){
    title.push(<button key={`key${key}`} className="button" onClick={() => props.selectButton(key)}>{props.buttonName[key]}</button>)
  }

  return (
    <>
      {title}
    </>
  );
};

export default ButtonArea;