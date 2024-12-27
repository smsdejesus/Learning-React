export default function Message() {
    function handleClick(){
        console.log("Button clicked!");
        alert("Button clicked!");
    }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}