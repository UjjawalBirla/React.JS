import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name : ", name);
    console.log("Email : ", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Rxample</h2>

      <label>Name : </label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <br />

      <label>Email : </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
      />
      <br />

      <label>Submit : </label>
      <button type="submit">Submit</button>
      <br />
    </form>
  );
};

export default SimpleForm;
