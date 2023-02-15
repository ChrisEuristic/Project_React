import { useLocation } from "react-router-dom";

// 단기예보
const W1 = (props) => {
  const itemWeatherShort = props.itemWeatherShort;
  let {state} = useLocation();
  console.log(state)
  

  let a = itemWeatherShort.map((item) => {
    if(item[2] == "코드값")
      return <div key={item[0]} className="shortWeatherDiv"><span className="shortWeatherSpanTitle">{item[0]}</span><span className="shortWeatherSpanContent">없음</span></div>
    return <div key={item[0]} className="shortWeatherDiv"><span className="shortWeatherSpanTitle">{item[0]}</span><span className="shortWeatherSpanContent">{item[1] + item[2]}</span></div>
  });

  return (
    <div className="w1">
      {a}
    </div>
  );
}

export default W1;