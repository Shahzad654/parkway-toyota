import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  max-width: 400px;
  width: 100%;
//   border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;

    .title {
      font-size: 1.2em;
      font-weight: bold;
    }

    .close-button {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.2em;
      cursor: pointer;
    }
  }

  form {
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .label {
    margin: 10px 0 5px;
    font-size: 0.9em;
    font-weight: bold;
  }

  .input, .select, .textarea {
    padding: 8px;
    font-size: 0.9em;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin-bottom: 10px;

    &:focus {
      border-color: #007bff;
    }
  }

  .textarea {
    resize: vertical;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .button {
    padding: 10px 20px;
    font-size: 0.9em;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.close {
      background: #f44336;
      color: #fff;
    }

    &.submit {
      background: #007bff;
      color: #fff;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Darwer = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      department: "Sales",
      satisfaction: "Excellent",
      caretaker: "",
      serviceRating: "Excellent",
      facilitiesRating: "Excellent",
      review: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const stopPropagation = (e) => {
      // Stop the click event from propagating to the parent Box element
      e.stopPropagation();
    };
  
    return (
      <ModalWrapper onClick={stopPropagation}> {/* Prevent closing on form click */}
        <div className="header">
          <span className="title">No</span>
          <button
            className="close-button"
            onClick={() => console.log("Modal closed")}
          >
            X
          </button>
        </div>
        <form
          action="https://formsubmit.co/shahzadj2001@gmail.com"
          method="POST"
        >
          {/* Required for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
  
          <label className="label">Your Name *</label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  
          <label className="label">Email *</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
  
          <label className="label">Phone *</label>
          <input
            className="input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(xxx-xxx-xxxx)"
            required
          />
  
          <label className="label">Department Rated *</label>
          <select
            className="select"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="Sales">Sales</option>
            <option value="Service">Service</option>
            <option value="Parts">Parts</option>
            <option value="Overall">Overall</option>
          </select>
  
          <label className="label">Satisfaction/Rating *</label>
          <select
            className="select"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
            required
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
  
          <label className="label">Who Took Care Of You?</label>
          <input
            className="input"
            type="text"
            name="caretaker"
            value={formData.caretaker}
            onChange={handleChange}
          />
  
          <label className="label">Customer Service Rating *</label>
          <select
            className="select"
            name="serviceRating"
            value={formData.serviceRating}
            onChange={handleChange}
            required
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
  
          <label className="label">Facilities Rating *</label>
          <select
            className="select"
            name="facilitiesRating"
            value={formData.facilitiesRating}
            onChange={handleChange}
            required
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
  
          <label className="label">Review</label>
          <textarea
            className="textarea"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows="4"
          />
  
          <div className="button-group">
            <button
              type="button"
              className="button close"
              onClick={() => console.log("Modal close button clicked")}
            >
              Close
            </button>
            <button type="submit" className="button submit">
              Submit
            </button>
          </div>
        </form>
      </ModalWrapper>
    );
  };

  export default Darwer;
  