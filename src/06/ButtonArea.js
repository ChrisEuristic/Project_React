import { useState, useRef, useEffect } from "react";
import GalSelect from "./GalSelect";

const ButtonArea = (props) => {
  let title = [];
  let filteringTitle = props.buttonName;
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [titleArr, setTitleArr] = useState();

  const testFunction = () => {
    return new Promise((resolve, reject) => {
      resolve("Resolve!");
      reject("Reject!");
    })
  }

  const viewTestFunction = testFunction();
  

  const refresh = () => {
    for(let key in filteringTitle){
      title.push(<button key={`key${key}`} className="button" onClick={() => props.selectButton(props.buttonName.indexOf(filteringTitle[key]))}>{filteringTitle[key]}</button>)
    }
    setTitleArr(title);
    inputRef.current.focus();
  };

  useEffect(() => {
    refresh();
    inputRef.current.focus();
  },[]);

  const showTitle = () => {
    console.log(inputRef.current.value);
    filteringTitle = props.buttonName.filter((item) => item.includes(inputRef.current.value));
    refresh();
  };

  return (
    <div className="buttonArea">
      <div className="formArea">
        <form>
          <input ref={inputRef} type='text' onChange={showTitle}/>
          <input type='reset' value='취소' onClick={() => setTimeout(() => {showTitle()}, 10)} />
          <br />
          <GalSelect selectButton={props.selectButton} />
        </form>
      </div>
      {titleArr}
    </div>
  );
};

export default ButtonArea;