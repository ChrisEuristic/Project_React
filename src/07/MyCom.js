import './style.css'
import { useState, useEffect, useRef } from "react";

const MyCom = () => {
  const [tag, setTag] = useState();
  const txt1R = useRef();
  const txt2R = useRef();

  useEffect(() => {
    txt1R.current.focus();
  }, []);

  const checkForm = function (e) {
    e.preventDefault();
    setTag(`입력된 아이디 : ${txt1R.current.value}\n입력된 비밀번호 : ${txt2R.current.value}`);
    console.log(tag);
  }

  return (
    <div className='content'>
      <form>
        <input ref={txt1R} type="text" name="txt1" placeholder='아이디를 입력하세요' />
        <input ref={txt2R} type="password" name="txt2" placeholder='비밀번호를 입력하세요' />
        <input type="button" value="확인" onClick={checkForm}/>
        <input type="reset" value="취소" />
      </form>
      
    </div>
  );
};

export default MyCom;