import React from 'react';



import './Login.css';
import SimpleContainer from '../../components/containers/ContainerSM';
import { LoginForm } from '../../components/forms/LoginForm';

export default function Login() {
  return (
    <div>
      <SimpleContainer>
        <LoginForm></LoginForm>
        <h1>Olá!</h1>
      </SimpleContainer>
      <h1>Olá!</h1>
      <LoginForm></LoginForm>
      
    </div>
    
    
  );
}