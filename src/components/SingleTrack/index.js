export default function SingleTrack() {
  const handleClick = () => {
    console.log('played');
  };

  // onMouseDown
  // onMouseUp
  return (
    <div>
      <button onClick={handleClick}>►</button>
    </div>
  );
}
