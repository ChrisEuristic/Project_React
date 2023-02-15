const Async = () => {

  console.log("명령1");
  console.log("명령2");
  setTimeout(() => {
    console.log("중간함수");  
  }, 1000);
  console.log("명령3");

  return (
    <></>
  );
};

export default Async