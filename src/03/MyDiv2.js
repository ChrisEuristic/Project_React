import MyDiv21 from './MyDiv21';
import './style.css'
const MyDiv2 = (probs) => {
  const user = probs.user;
  return (
    <div className='mydiv2'>
      <h2>MyDiv2</h2>
      <MyDiv21 user={user} />
    </div>
  )
};

  export default MyDiv2;