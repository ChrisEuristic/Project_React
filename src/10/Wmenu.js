import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { HeadTitle } from "./HeadTitle";


const Wmenu = (props) => {
  const navigate = useNavigate();
  const headTitle = useContext(HeadTitle);

  const setHeadTitle = (page, pageName) => {
    headTitle.title = pageName;
    navigate(page);
  };
  
  return (
    <div className="wmenu">
      <button className="bigButton" onClick={() => setHeadTitle("/w1", "날씨예보 - 단기예보")}>단기예보</button>
      <button className="bigButton" onClick={() => setHeadTitle("/w2", "날씨예보 - 중기예보")}>중기예보</button>
    </div>
  );
}

export default Wmenu;