import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;

    // Based on the input type, we check errors for either email, username, and password
    if (inputType === 'name' && !name) {
      setErrorMessage('Name is required.');
    } else if (inputType === 'email' && !validateEmail(email)) {
      setErrorMessage('Email is invalid');
    } else if (inputType === 'message' && !message) {
      setErrorMessage('Message is required.');
    } else { setErrorMessage(''); }
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!name || !validateEmail(email) || !message) {
      setErrorMessage('Invalid information. Please try again.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Stores the user's info as an object
    const newSignUp = {
      name: name,
      email: email,
      message: message
    }

    // Creates or adds user information to local storage
    if (!localStorage.getItem('emailList')) {
      const emailList = [];
      emailList.push(newSignUp);
      localStorage.setItem('emailList', JSON.stringify(emailList));
    } else {
      const emailList = JSON.parse(localStorage.getItem('emailList'));
      emailList.push(newSignUp);
      localStorage.setItem('emailList', JSON.stringify(emailList));
    }

    // Console logs all users that have registered.
    const emailList = JSON.parse(localStorage.getItem('emailList'));
    for (const user of emailList) {
      console.log(user);
    }

    setErrorMessage(`Thank you signing up and for your message!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');

    // Put a settimeout here to clear setErrorMessage
    setTimeout(() => {
      setErrorMessage('');
    }, 3000); 
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      <p>brian.d.wach@gmail.com</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="nameInput">Name:</label>
        <input
          value={name}
          name="name"
          id="nameInput"
          autoComplete="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
        />
        <label htmlFor="emailInput">Email Address:</label>
        <input
          value={email}
          name="email"
          id="emailInput"
          autoComplete="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
        />
        <label htmlFor="messageInput">Message:</label>
        <input
          value={message}
          name="message"
          id="messageInput"
          autoComplete="off"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;