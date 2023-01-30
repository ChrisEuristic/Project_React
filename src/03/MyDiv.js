import './style.css'
import MyDiv1 from './MyDiv1';
import MyDiv2 from './MyDiv2';

const MyDiv = () => {
  const rname = 'React';

  return (
    <div id='cover'>
      <header>
        Probs Example - {rname}
      </header>
      <main>
        <MyDiv1 user={rname}/>
        <MyDiv2 user={rname}/>
      </main>
    </div>
  )};

export default MyDiv;