import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name is mandatory",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "number",
      placeholder: "Mobile",
      label: "Mobile",
    },
    {
      id: 4,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
    },
    {
      id: 6,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "State",
    },
    {
      id: 7,
      name: "message",
      type: "textarea",
      placeholder: "Message",
      label: "Message",
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <hr />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
