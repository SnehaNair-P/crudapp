import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Login.css';
import React, { useContext } from 'react';
import { useAuth } from '../../Component/UseContext/UseContext';
// import { useNavigate } from 'react-router-dom';



function Login() {
 
  const { login } = useAuth();
  // const navigate = useNavigate()


  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault()
   login( formData.username, formData.password)
  //  navigate('/home')
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const user = useContext(useAuth);

  return (
    <div className='login-form'>
      <h2>LOGIN</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        {/* <Form.Label>User Name</Form.Label> */}
        <div className='Login-control '>
        <Form.Control
          type="text"
          placeholder="User Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <div className='Login-control '>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
      </Form.Group>
      <div className='form-button'>
         <button  type="submit">Login {user}</button>
      </div>

    </Form>
    </div>

  );
}

export default Login;
