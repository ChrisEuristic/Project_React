const ButtonArea = (props) => {
  let title = [];

  for(let key in props.buttonName){
    title.push(<button key={`key${key}`} className="button" onClick={() => props.selectButton(key)}>{props.buttonName[key]}</button>)
  }

  return (
    <>
      {title}
    </>
  );
};

export default ButtonArea;