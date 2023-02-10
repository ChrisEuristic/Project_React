import './style10.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';


// 헤더
const Wheader = () => {
  
  //let title = "일기예보";// 클릭이 무엇이 되었느냐에 따라 title 변수 조정
  const [title, setTitle] = useState("일기예보");
   
  
  const navigate = useNavigate();
  const homeLogo = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
  
  return (
    <>
      <div className="wheader">
        <div className="header">{title}</div>
        <button className='homeButton' onClick={() => navigate('/')}>{homeLogo}</button>
      </div>
    </>
  );
}

export default Wheader;