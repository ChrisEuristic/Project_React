import './style.css'

const MainBox1 = (probs) => {

  let buttonArray = [];

  for(let i = 0; i < Object.keys(probs.date).length; i++){
    buttonArray.push(<button key={i} id={"btn" + i} className='dateButton' onClick={() => {probs.setWeather(i, Object.keys(probs.date)[i])}}>{Object.keys(probs.date)[i]}</button>);
  }

  return (
    <div className='mainbox1'>
      {buttonArray}
    </div>
  );
};

export default MainBox1;