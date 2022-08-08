import React from "react";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({
    enterEmail: "",
    enterPassword: "",
    confirmPassword: "",
    newsletter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault(); //prevents page/form from refreshing
    if (formData.passwordInput === formData.passwordConfirm) {
      console.log("Signed up successfully.");
      if (formData.okayNewsletter === true) {
        console.log("Thank you for signing up for our newsletter.");
      }
    } else {
      console.log("Password does not match. Try again.");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="enter email"
        onChange={handleChange}
        name="email"
        value={formData.email} //shifts control from input box to react
        className="placeholder"
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        onChange={handleChange}
        name="passwordInput"
        value={formData.passwordInput} //shifts control from input box to react
        className="placeholder"
      />
      <br />
      <input
        type="password"
        placeholder="confirm password"
        onChange={handleChange}
        name="passwordConfirm"
        value={formData.passwordConfirm} //shifts control from input box to react
        className="placeholder"
      />
      <br />
      <input
        type="checkbox"
        id="newsletter"
        name="okayNewsletter"
        onChange={handleChange}
        checked={formData.okayNewsletter}
      ></input>

      <label htmlFor="okayNewsletter" className="label">
        I want to join the newsletter
      </label>
      <br />
      <button className="button">Sign up</button>
    </form>
  );
}
