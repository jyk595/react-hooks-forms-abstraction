import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  function handleNameChange(event) {
    if (event.target.type === "checkbox") {
      event.target.value = event.target.checked;
    }
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="firstName"
        onChange={handleNameChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleNameChange} 
        value={formData.lastName} 
      />
      <input
        type="checkbox"
        name="admin"
        onchange={handleNameChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
