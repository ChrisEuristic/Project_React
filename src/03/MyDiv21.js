import './style.css'

const MyDiv21 = (probs) => {
  const user = probs.user;
  return (
    <div className='mydiv21'>
      <h3>Div21</h3>
      <p>{user}</p>
    </div>
  );
}

export default MyDiv21;