const C1Area = (probs) => {
  
  let buttonSet = [];

  for(let i = 0; i < probs.name.length; i++)
    buttonSet.push(<button key={`c1btn${i}`} className="c1Button" onClick={() => probs.setClickedC1Button(i)}>{probs.name[i]}</button>)

  return (
    <div className="c1">
      <div className="c1-title">대분류</div>
      <div className="c1-buttonArea">
        {buttonSet}
      </div>
    </div>
  );
};

export default C1Area;