/* useState 실습 */
import MyDiv11 from './MyDiv11';
import { useEffect, useState } from 'react';
import './style.css'
const MyDiv1 = (probs) => {
  const user = probs.user;
  let [cnt, setCnt] = useState(0);

  const addCnt = () => {
    setCnt(++cnt);
  };

  useEffect( () => {
    probs.upN(cnt);
  },[cnt]);

  return (
    <div className='mydiv1'>
      <h2>MyDiv1</h2>
      <MyDiv11 user={user} divname={`Costum${cnt}`}/>
      <div className='divbt'>
        <button onClick={addCnt}>💙</button>
        <span>{cnt}</span>
      </div>
    </div>
  )
};

  export default MyDiv1;