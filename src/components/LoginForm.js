import { useState } from "react";

const LoginForm = ({ role }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call the appropriate API endpoint here
      if (isNewUser) {
        // Call signup API
      } else {
        // Call signin API
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>{role} {isNewUser ? 'Signup' : 'Login'}</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">{isNewUser ? 'Signup' : 'Login'}</button>
        <p>{isNewUser ? 'Already have an account?' : 'New to this site?'} <button type="button" onClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? 'Login' : 'Signup'}</button></p>
      </form>
    );
  };

  export default LoginForm;