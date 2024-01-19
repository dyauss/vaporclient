import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';

import './paperContainer.css'

export default function PaperContainer(props) {
   return(
      <Container component={Paper} elevation={10} maxWidth="sm" sx={{ padding: 2 }} className='paper-container'>{props.children}</Container>
   )
}