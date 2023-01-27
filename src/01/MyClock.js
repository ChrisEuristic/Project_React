
const MyClock = () => {
  return (
    <div className="font-sol">
      Current Time <br />
      {new Date().toLocaleTimeString()}
    </div>
  );
}

export default MyClock;