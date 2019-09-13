import React, { useState } from 'react';
// import * as styles from './EmailListForm.module.scss';

const emailList = (props) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Subscribe to my email list!</h2>
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}
