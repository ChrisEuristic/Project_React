import MainBox1 from "./MainBox1";
import MainBox2 from "./MainBox2";
import './style.css'
import { useState } from "react";

const Main = (probs) => {
  const items = probs.weather;
  const item = items[0];
  let infoArry;
  let [finalChooseweather, setFinalChooseWeather] = useState("");

  
  
  
  const setWeather = (date) => {
    switch(date){
      case 1: infoArry = item.frcstOneCn.split(","); break;
      case 2: infoArry = item.frcstTwoCn.split(","); break;
      case 3: infoArry = item.frcstThreeCn.split(","); break;
      case 4: infoArry = item.frcstFourCn.split(","); break;
      default: console.log("Error!");
    }
    infoArry = infoArry.map((item) => 
      item.includes('높음') ? 
      <li key={`${item}`} className="liredAnim">{item.split(":")[0] + " : "}<span className='lired'>{item.split(":")[1]}</span></li> : 
      <li key={`${item}`} className="noliredAnim"><span className='liblack'></span> {item}</li>
    );
    setFinalChooseWeather(infoArry);
    console.log(infoArry);
  };

  return (
    <div className="main">
      <MainBox1 setWeather={setWeather} />
      <MainBox2 chooseWeather={finalChooseweather}/>
    </div>
  );
};

export default Main;