import React, { useState } from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    //
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button onClick={handleSignUp} className="signup-button">
          Sign Up
        </button>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
