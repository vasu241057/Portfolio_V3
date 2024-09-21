import "./FormStyle.css";
import React from "react";
import formAnimation from "../assets/form.webp";

const Form: React.FC = () => {
  return (
    <div className="form">
      <div className="form-img">
        <h1>Contact Us</h1>
        <img src={formAnimation} alt="Form graphics" />
      </div>
      <div className="form-container">
        <label>Your Name</label>
        <input type="text" required></input>

        <label>Email</label>
        <input type="email" required></input>

        <label>Subject</label>
        <input type="text" required></input>

        <label>Message</label>
        <textarea
          required
          rows={6}
          placeholder="Type your massage here"
        ></textarea>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default Form;
