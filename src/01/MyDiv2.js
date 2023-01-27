import '../App.css';

const MyDiv2 = () => {
  const myName = "Ko Keon";
  const myGit = "https://github.com/ChrisEuristic";
  console.log(myName);
  return (
    <div className="App-header font-sol">
      <p>{myName}</p>
      <p><a href={myGit} target="_blank">Goto My GitHub</a></p>
    </div>
  );
};

export default MyDiv2;