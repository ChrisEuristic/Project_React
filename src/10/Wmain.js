import Wheader from "./Wheader";
import Wmenu from "./Wmenu";
import W1 from "./W1";
import W2 from "./W2";

import { Routes, Route } from "react-router-dom";

import './style10.css';

import itemJson from '../db/item.json'
import itemWeatherLong from '../db/weather.json'
import itemWeatherShort from '../db/weather2.json'


const Wmain = () => {
  itemWeatherLong = itemWeatherLong.response.body.items.item[0]; // Object
  itemWeatherShort = itemWeatherShort.response.body.items.item;  // Array
  // console.log("itemWeatherShort >> ", itemWeatherShort)
  // console.log("itemJson >> ", itemJson)
  // console.log("itemWeatherLong >> ", itemWeatherLong)

  itemWeatherShort = itemWeatherShort.map(content => {
    let shortWeather = [];
    shortWeather.push(itemJson[content.category][0]);
    shortWeather.push(content.obsrValue);
    shortWeather.push(itemJson[content.category][1]);
    //console.log(shortWeather);
    return shortWeather;
  });

  //console.log("RE: itemWeatherShort >> ", itemWeatherShort);
  return (
    <div className="wmain">
      <Wheader />
      <Routes>
        <Route path="/" element={<Wmenu />} />
        <Route path="/w1" element={<W1 itemWeatherShort={itemWeatherShort}/>} />
        <Route path="/w2" element={<W2 itemWeatherLong={itemWeatherLong}/>} />
      </Routes>
    </div>
  );
}

export default Wmain;