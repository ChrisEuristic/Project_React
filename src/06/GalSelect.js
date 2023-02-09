import data from '../db/data.json'
import { useEffect, useRef, useState } from 'react';

const GalSelect = (props) => {
  let items = data.response.body.items.item;
  let selectArray = [];
  const [pickedNumber, setPickedNumber] = useState();
  let pickNumber = useRef();

  for(let i in items){
    selectArray.push(<option key={`option${i}`} value={i}>{items[i].galTitle}</option>);
  }

  selectArray = <select ref={pickNumber} defaultValue={`0`} onChange={() => setPickedNumber(pickNumber.current.value)}>{selectArray}</select>
  console.log(">>", pickedNumber);

  useEffect(() => {
    props.selectButton(pickNumber.current.value);
  },[pickedNumber]);
  
  
  return (
    <>
      {selectArray}
    </>
  );
};

export default GalSelect;