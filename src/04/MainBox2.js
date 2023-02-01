import './style.css'

const MainBox2 = (probs) => {

  return (
    <div className='mainbox2'>
      <div className='dateTitle'></div>
      <ul>
        {probs.chooseWeather}
      </ul>
    </div>
  );
};

export default MainBox2;