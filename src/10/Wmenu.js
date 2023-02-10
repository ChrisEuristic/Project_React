import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Wmenu = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className="wmenu">
      <button className="bigButton" onClick={() => navigate("/w1", { state: "날씨예보 - 단기예보"})}>단기예보</button>
      <button className="bigButton" onClick={() => navigate("/w2", { state: "날씨예보 - 중기예보"})}>중기예보</button>
    </div>
  );
}

export default Wmenu;