const DataArea = (probs) => {

  let dataTable = ["사고유형_대분류", "사고유형_중분류", "사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수", "치명률"];
  let taccidentCount;
  let critical;

  if(probs.name){
    dataTable = dataTable.map((key) => {
      if(key == "사고건수")
        taccidentCount = parseInt(probs.name[key]);
      if(key == "사망자수")
        critical = parseInt(probs.name[key]) / taccidentCount;
      if(key == "치명률")
        return <tr><td className="thead">{key}</td><td className="tbody" style={{color: 'red'}}>{`${Math.round(critical * 1000)/10}%`}</td></tr>
      if(key == "사고유형_대분류" || key == "사고유형_중분류")
        return <tr><td className="thead">{key}</td><td className="tbody">{probs.name[key]}</td></tr>
      else
        return <tr><td className="thead">{key}</td><td className="tbody">{parseInt(probs.name[key]).toLocaleString()}</td></tr>
    });
  }
  else
    dataTable = [];

  return (
    <div className="data">
      <div className="data-title">상세내용</div>
      <div className="data-tableArea">
        <table>
          {dataTable}
        </table>
      </div>
    </div>
  );
};

export default DataArea;