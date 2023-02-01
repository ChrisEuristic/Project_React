import MainBox1 from "./MainBox1";
import MainBox2 from "./MainBox2";
import './style.css'
import { useEffect, useState } from "react";

const Main = (probs) => {
  const frcstDtCn = probs.weather2;
  const items = probs.weather;
  const item = items[0];
  let infoArry;
  let [finalChooseweather, setFinalChooseWeather] = useState("");
  let [clickedButton, setClickedButton] = useState(0);

/*
  useEffect(() => {
    console.log(clickedButton);
  }, [clickedButton]);*/
  
  const buttonIsVisible = (index) => {
    let i = 0;
    let clickButton;

    for(let k in frcstDtCn){
      if(i == index){
        clickButton = document.querySelector("#btn" + i);
        clickButton.className = "dateButton btnInvisible" + i;
      }
      else {
        clickButton = document.querySelector("#btn" + i);
        clickButton.className = "dateButton btnVisible" + i;
      }
      i++;
    }
  };

  
  const setWeather = (index, date) => {
    setClickedButton(index); // 무슨 버튼을 눌렀는지 기록.

    buttonIsVisible(index);

    infoArry = frcstDtCn[date].split(",");

    infoArry = infoArry.map((item) => 
      item.includes('높음') ? 
      <li key={`${item}`} className="liredAnim">{item.split(":")[0] + " : "}<span className='lired'>{item.split(":")[1]}</span></li> : 
      <li key={`${item}`} className="noliredAnim"><span className='liblack'></span>{item}</li>
    );
    setFinalChooseWeather(infoArry);
    //console.log(infoArry);
  };

  return (
    <div className="main">
      <MainBox1 setWeather={setWeather} date={frcstDtCn} clicked={clickedButton}/>
      <MainBox2 chooseWeather={finalChooseweather}/>
    </div>
  );
};

export default Main;