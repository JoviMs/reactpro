export default function Message() {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}
