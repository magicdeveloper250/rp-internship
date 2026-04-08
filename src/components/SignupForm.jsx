import { useState } from "react";
import apiClient from "../api/apiClient";
import { isAxiosError } from "axios";
export default function SignupForm() {
  // {"success":false, "error":"Some description"}
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const resp = await apiClient.post("/auth/signup", formData);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.request) {
          setError("Network error");
        } else if (error.response) {
          setError(error.response.data.error);
        }
      }else{
        setError("Unknown error");
      }
      
    }
  };
  return (
    <div className="form-container">
      {error !== null ? <p>{error}</p> : null}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="text"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
