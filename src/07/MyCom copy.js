import './style.css'
import { useState, useEffect, useRef } from "react";

const MyCom = () => {
  // Variable in Component
  let cnt1 = 0;

  // State Variable in Component
  const [cnt2, setCnt2] = useState(0);

  // Ref Variable in Component
  const cnt3 = useRef(0);

  // Function
  const showCnt = function() {
    console.log(`cnt1 = ${cnt1}`);
    console.log(`cnt2 = ${cnt2}`);
    console.log(`cnt3 = ${cnt3.current}`);
  }
  const addCnt1 = () => { ++cnt1; showCnt() };
  const addCnt2 = () => { setCnt2(cnt2 + 1); showCnt(); };
  const addCnt3 = () => { cnt3.current++; showCnt(); };
  useEffect(() => { ++cnt1; }, [cnt2, cnt3]);


  return (
    <div className='content'>
      <ul>
        <li>cnt1 = {cnt1}</li>
        <li>cnt2 = {cnt2}</li>
        <li>cnt3 = {cnt3.current}</li>
      </ul>
      <form>
        <input type="button" value="cnt1 증가" onClick={addCnt1}/>
        <input type="button" value="cnt2 증가" onClick={addCnt2}/>
        <input type="button" value="cnt3 증가" onClick={addCnt3}/>
      </form>
    </div>
  );
};

export default MyCom;