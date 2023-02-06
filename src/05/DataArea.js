const DataArea = (probs) => {

  let dataTable = ["사고유형_대분류", "사고유형_중분류", "사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수", "치명률"];
  let taccidentCount;
  let critical;

  if(!(JSON.stringify(probs.name) == JSON.stringify({}))){
    dataTable = dataTable.map((key) => {
      if(key == "사고건수")
        taccidentCount = parseInt(probs.name[key]);
      if(key == "사망자수")
        critical = parseInt(probs.name[key]) / taccidentCount;
      if(key == "치명률")
        return <tr key={`tr${key}`}><td className="thead" key={`th${key}`}>{key}</td><td className="tbody" key={`td${key}`} style={{color: 'red'}}>{`${Math.round(critical * 1000)/10}%`}</td></tr>
      if(key == "사고유형_대분류" || key == "사고유형_중분류")
        return <tr key={`tr${key}`}><td className="thead" key={`th${key}`}>{key}</td><td className="tbody" key={`td${key}`}>{probs.name[key]}</td></tr>
      else
        return <tr key={`tr${key}`}><td className="thead" key={`th${key}`}>{key}</td><td className="tbody" key={`td${key}`}>{parseInt(probs.name[key]).toLocaleString()}</td></tr>
    });
  }
  else
    dataTable = [];

  

  return (
    <div className="data">
      <div className="data-title">상세내용</div>
      <div className="data-tableArea">
        <table>
          <tbody>
            {dataTable}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataArea;