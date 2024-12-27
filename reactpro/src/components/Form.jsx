import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({firstName: "", lastName: ""});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
        <h1>{name.firstName}</h1>
        <h1>{name.lastName}</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          onChange={(e) => setName({...name, firstName: e.target.value})}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({...name, lastName: e.target.value})}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e)=> handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
