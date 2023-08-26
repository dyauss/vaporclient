import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Lógica de autenticação aqui
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="xs" sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Entrar
      </Typography>
      <TextField
        label="E-mail"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        margin="normal"
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Entrar
      </Button>
      <p></p>
      <Typography variant="p" sx={{ textAlign: 'center' }}>
        Ainda não tem uma conta? <a href="/">Clique aqui.</a> 
      </Typography>
    </Container>
  );
}

export default LoginForm;