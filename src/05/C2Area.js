const C2Area = (probs) => {
  
  let buttonSet = [];
 
  for(let i = 0; i < probs.name.length; i++){
    buttonSet.push(<button key={`c2btn${i}`} className="c2Button" onClick={() => probs.setClickedC2Button(i)}>{probs.name[i]}</button>);
  }
  
  return (
    <div className="c2">
      <div className="c2-title">중분류</div>
      <div className="c2-buttonArea">
        {buttonSet}
      </div>
    </div>
  );
};

export default C2Area;