import React, { useState, useRef } from "react";

const Contact = (props) => {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactState({ ...contactState, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactState.name && contactState.email && contactState.age) {
      const newcontactState = {
        ...contactState,
        id: new Date().getTime().toString(),
      };

      setContactState({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className='main-bg' ref={props.refProp}>
      <h1 className='contact-h1'>Say Hi!</h1>
      <p className='contact-p'>Let's discuss your next project!</p>

      <div class='form-container'>
        <form className='form-control' autocomplete='false'>
          <div className='form-1'>
            <label className='form-label'>Name:</label>
            <input className='form-input' type='text' name='first' />
          </div>

          <div className='form-1'>
            <label className='form-label'>Email:</label>
            <input className='form-input' type='text' name='first' />
          </div>

          <div className='textarea-container'>
            <label className='message-label'>Message: </label>
            <textarea className='message-textarea' type='text' name='first' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
