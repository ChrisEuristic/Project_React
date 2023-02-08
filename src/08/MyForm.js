import './style08.css';
import { useRef, useState } from "react";

const MyForm = () => {

  const id = useRef();
  const pw = useRef();
  const selectClass = useRef();
  const [msgTag, setMsgTag] = useState();

  const formCheck = () => {
    if(id.current.value == ""){
      alert("아이디를 입력하세요");
      id.focus();
      return; 
    }
    if(pw.current.value == ""){
      alert("비밀번호를 입력하세요");
      pw.focus();
      return; 
    }
    setMsgTag(<span> ID is {id.current.value}, Select Class is {selectClass.current.value}.</span>);
  };

  return (
    <>
      <form name="myform">
        <label htmlFor='txt1'>ID : </label>
        <input ref={id} type="text" name="txt1" id="txt1" placeholder="Writing here ID" />
        <br />
        <label htmlFor='txt2'>PW : </label>
        <input ref={pw} type="password" name="txt2" id="txt2" placeholder="Writing here Password" />
        <br />
        <label htmlFor='sel1'>SLCT : </label>
        <select ref={selectClass} name="sel1">
          <option value="java">Java</option>
          <option value="HTML">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
        </select>
        <br />
        <input type="button" className="button" value="Check" onClick={formCheck} />
        <input type="reset" className="button" value="Cancel" />
      </form>

    <div id="msg">
      {msgTag}
    </div>
  </>
  );
};

export default MyForm;