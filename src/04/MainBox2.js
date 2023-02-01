import './style.css'

const MainBox2 = (probs) => {

  return (
    <div className='mainbox2'>
      <div className='dateTitle'>
        {Object.keys(probs.date)[probs.clicked]}
      </div>
      <div>
        <ul className='weatherlist'>
          {probs.chooseWeather}
        </ul>
      </div>
    </div>
  );
};

export default MainBox2;