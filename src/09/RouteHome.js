import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RouteHome = () => {
  const navigate = useNavigate();
  const url = {
    "사과🍎": '/p2?item=사과🍎',
    "토마토🍅": '/p2?item=토마토🍅',
    "딸기🍓": '/p2?item=딸기🍓'
  }

  const goUrl = (item) => {
    navigate(url[item]);
  }

  return (
    <>
      <h1>HOME</h1>

      <h2>파라미터 전송1</h2>
      <ul>
        <li><Link to="/p1/사과🍎">사과🍎</Link></li>
        <li><Link to="/p1/토마토🍅">토마토🍅</Link></li>
        <li><Link to="/p1/딸기🍓">딸기🍓</Link></li>
      </ul>

      <h2>파라미터 전송2</h2>
      <button onClick={() => goUrl('사과🍎')}>사과🍎</button>
      <button onClick={() => goUrl('토마토🍅')}>토마토🍅</button>
      <button onClick={() => goUrl('딸기🍓')}>딸기🍓</button>
    </>
  );
};

export default RouteHome;