import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
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
      setErrorMessage('Email is invalid.');
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
    <div>
      <h1 className='text-3xl m-2'>Contact</h1>
      <div className='m-[10px]'>
        <a
          className='text-accent desktop:hover:text-success desktop:active:text-base-content'
          href="mailto:brian.d.wach@gmail.com">brian.d.wach@gmail.com
        </a>
        <form className="form-control mt-[20px]" onSubmit={handleFormSubmit}>


          <label htmlFor="nameInput" className="input input-bordered flex items-center gap-2 w-[325px] bg-white mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              className="grow"
              value={name}
              name="name"
              id="nameInput"
              placeholder='Name'
              autocomplete='name'
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="text"
            />
          </label>

          <label htmlFor="emailInput" className="input input-bordered flex items-center gap-2 w-[325px] bg-white mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              className="grow"
              value={email}
              name="email"
              id="emailInput"
              placeholder="Email"
              autocomplete='email'
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="email"
            />
          </label>

          <label htmlFor="messageInput">
          <textarea
            className="textarea textarea-bordered textarea-lg w-[325px] min-h-[150px] bg-white mb-2"
            value={message}
            name="message"
            id="messageInput"
            placeholder="Message"
            autocomplete='off'
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="text"
          />
          </label>
          <button type="submit" className="btn mb-3 w-fit">Submit</button>
        </form>
        {errorMessage && (
        <div className="mb-3">
          <p className="error-text">{errorMessage}</p>
        </div>)}
      </div>
    </div>
  );
}

export default Contact;