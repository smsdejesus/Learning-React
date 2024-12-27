import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({ person }) {
  let message;
  const display = true;
//   if(display){
//     message = <h1>Message 1</h1>;
//   }else{
//     message = <h1>Message 2</h1>;
//   }
  return display ? <Welcome /> : <Code />; // ternary operator
}
