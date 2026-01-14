// create a clss based conponent 
// that will allow user to register
//name
//email
//password
//Confirm password
//gender
//country dropdown with at list 5 countries
//terms and condition (cheakbox)
// on form submission validate the input and dispay
//an alert with entered information (expect password fields)
import React, { Component } from "react";
import "./registration.css";

class RegistraionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      country: "",
      termsAccepted: false,
      errors: {}, // <-- validation messages
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  validate = () => {
    const errors = {};
    const {
      username,
      email,
      password,
      confirmPassword,
      gender,
      country,
      termsAccepted,
    } = this.state;

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!gender) {
      errors.gender = "Please select gender";
    }

    if (!country) {
      errors.country = "Please select country";
    }

    if (!termsAccepted) {
      errors.termsAccepted = "You must accept terms & conditions";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.validate()) return;

    const { username, email, gender, country } = this.state;

    alert(
      `Registration Successful!\n\nUsername: ${username}\nEmail: ${email}\nGender: ${gender}\nCountry: ${country}`
    );
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registration Form</h2>

        {/* Username */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <small className="error">{errors.username}</small>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <small className="error">{errors.email}</small>
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <small className="error">{errors.password}</small>
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <small className="error">{errors.confirmPassword}</small>
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />{" "}
          Female
          <br />
          <small className="error">{errors.gender}</small>
        </div>

        {/* Country */}
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
          <small className="error">{errors.country}</small>
        </div>

        {/* Terms */}
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={this.state.termsAccepted}
              onChange={this.handleChange}
            />
            I accept the terms and conditions
          </label>
          <br />
          <small className="error">{errors.termsAccepted}</small>
        </div>

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistraionForm;
