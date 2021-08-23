export default function StepButton() {
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
