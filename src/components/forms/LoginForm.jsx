import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function LoginForm() {
    return (
      <div>
        <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
        </Box>
      </div>
    );
  }