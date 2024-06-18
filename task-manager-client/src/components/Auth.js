import React, { useState } from 'react';
import { register, login } from '../utils/api';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Auth = ({ setToken }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = isRegister ? await register(formData) : await login(formData);
    if (response.token) {
      setToken(response.token);
      localStorage.setItem('token', response.token);
    } else {
      console.error(response.msg);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <FormContainer elevation={6}>
        <Typography component="h1" variant="h5">
          {isRegister ? 'Register' : 'Login'}
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          {isRegister && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            {isRegister ? 'Register' : 'Login'}
          </Button>
          <Grid container justifyContent="flex-end" style={{ marginTop: '1rem' }}>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Auth;
