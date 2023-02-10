import qs from 'query-string';
import { useLocation } from 'react-router-dom';

const RoutePage2 = () => {
  let location = useLocation();
  console.log("location >> ", location);
  let item = qs.parse(location);
  console.log(item);

  return (
    <>
      <h1>page2</h1>
    </>
  );
};

export default RoutePage2;