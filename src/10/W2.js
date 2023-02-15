import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 중기예보
const W2 = (props) => {
  const itemWeatherLong = props.itemWeatherLong; // view data
  let {state} = useLocation();
  const [pickDate, setPickDate] = useState(3);
  const view = [];

  console.log(itemWeatherLong);
  console.log(itemWeatherLong[`rnSt${pickDate}Am`]);

  

  useEffect(() => {
    
  }, [pickDate]);

  return (
    <div className="w2">
      <div className="longWeatherButtonArea">
        <button className="weatherButton" onClick={() => setPickDate(3)}>3일 후 날씨</button>
        <button className="weatherButton" onClick={() => setPickDate(4)}>4일 후 날씨</button>
        <button className="weatherButton" onClick={() => setPickDate(5)}>5일 후 날씨</button>
        <button className="weatherButton" onClick={() => setPickDate(6)}>6일 후 날씨</button>
      </div>
      <div className="longWeatherViewArea">
        <div className="longWeatherViewCard"><span className="date">{pickDate}일 후</span><span className="rain">오전 강수량</span><span className="wcontent">{itemWeatherLong[`rnSt${pickDate}Am`]}%</span></div>
        <div className="longWeatherViewCard"><span className="date">{pickDate}일 후</span><span className="rain">오후 강수량</span><span className="wcontent">{itemWeatherLong[`rnSt${pickDate}Pm`]}%</span></div>
        <div className="longWeatherViewCard"><span className="date">{pickDate}일 후</span><span className="rain">오전 강수량</span><span className="wcontent">{itemWeatherLong[`wf${pickDate}Am`]}</span></div>
        <div className="longWeatherViewCard"><span className="date">{pickDate}일 후</span><span className="rain">오후 강수량</span><span className="wcontent">{itemWeatherLong[`wf${pickDate}Pm`]}</span></div>
      </div>
    </div>
  );
}

export default W2;