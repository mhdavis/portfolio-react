import React from 'react';
import "./EmailForm.css"

const EmailForm = (props) => {
  return (
    <div className="contact-email-form">
      <form>
        <div className="contact-input">
          <label htmlFor="input-name">Name</label>
          <input className="input-field" type="text" name="input-name"/>
        </div>
        <div className="contact-input">
          <label htmlFor="input-email">Email</label>
          <input className="input-field" type="text" name="input-email"/>
        </div>
        <textarea className="contact-textarea form-control" rows="8" id="email"></textarea>
        <input className="contact-submit-btn" type="submit" name="contact-submit-form"/>
      </form>
    </div>
  );
}

export default EmailForm;
