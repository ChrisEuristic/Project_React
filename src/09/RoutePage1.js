import { useParams } from "react-router-dom";

const RoutePage1 = () => {
  const item = useParams().items;

  return (
    <>
      <h2>{`${item} ${item.includes("딸기") || item.includes("사과") ? "는 과일입니다." : "는 채소입니다."}`}</h2>
    </>
  );
};

export default RoutePage1;