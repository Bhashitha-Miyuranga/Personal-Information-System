import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            required
          />
          {error && <Typography color="error">{error}</Typography>}
         <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2, marginRight: 2 }}>
            Login
          </Button>
          <Button component={RouterLink} to="/home" variant="outlined" type="submit" color="primary" sx={{ marginTop: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
