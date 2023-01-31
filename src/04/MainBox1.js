import './style.css'

const MainBox1 = (probs) => {
  return (
    <div className='mainbox1'>
      <button className='dateButton' onClick={() => {probs.setWeather(1)}}>2023-01-27</button>
      <button className='dateButton' onClick={() => {probs.setWeather(2)}}>2023-01-28</button>
      <button className='dateButton' onClick={() => {probs.setWeather(3)}}>2023-01-29</button>
      <button className='dateButton' onClick={() => {probs.setWeather(4)}}>2023-01-30</button>
    </div>
  );
};

export default MainBox1;