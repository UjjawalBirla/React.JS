import { useState } from "react";

const multiInputForm = () => {
  const [formData, setFormData] = useState({name : "",
                                            email : "",
                                            age : ""
  });
 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData((prev)=>({
        ...prev,
        [name]: value
    }))
    console.log(formData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Rxample</h2>

      <label>Name : </label>
      <input
       onChange={handleChange}
        value={formData.name}
        type="text"
        name="name"
        placeholder="Name"
      />
      <br />

      <label>Email : </label>
      <input
        onChange={handleChange}
        value={formData.email}
        type="email"
        name="email"
        placeholder="Email"
      />
      <br />

      <label>Age : </label>
      <input
        onChange={handleChange}
        value={formData.age}
        type="number"
        name="age"
        placeholder="Age"
      />
      <br />

      <label>Submit : </label>
      <button 
      type="submit">Submit</button>
      <br />
    </form>
  );
};

export default multiInputForm;
