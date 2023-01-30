import './style.css'
import MyDiv from './MyDiv';

const MyDiv11 = (probs) => {
  const user = probs.user;
  console.log("div11", probs);
  console.log(user);
  return (
    <div className='mydiv11'>
      <h3>Div11</h3>
      <p>{probs.user}</p>
      <p>{probs.divname}</p>
    </div>
  );
}

export default MyDiv11;