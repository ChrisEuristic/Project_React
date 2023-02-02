import './style.css'
import MyDiv1 from './MyDiv1';
import MyDiv2 from './MyDiv2';
import { useState } from 'react';

const MyDiv = () => {
  const rname = 'React';
  let [n, setN] = useState();

  const upN = (like) => {
    setN(like);
  };

  return (
    <div id='cover'>
      <header>
        <span onClick={upN}>Probs Example - {rname} {n}</span>
      </header>
      <main>
        <MyDiv1 user={rname} upN={upN} />
        <MyDiv2 user={rname}/>
      </main>
    </div>
  )};

export default MyDiv;