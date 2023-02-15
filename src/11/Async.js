import './style11.css';

import { useState, useEffect, useRef } from 'react';

const Async = () => {

  const link = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="
  const pickedDate = useRef();
  
  useEffect(() => {
    console.log(pickedDate);
  },[pickedDate]);

  return (
    <div className="body">
      <div className="header">
        <span className='rowLine'></span>
        <span className='headerTitle'>일별 박스오피스</span>
        <span className='rowLine'></span>
      </div>
      <div className="main">
        <form>
          <input type="date" name="mvd" ref={pickedDate}/>
        </form>
      </div>
    </div>
  );
};

export default Async