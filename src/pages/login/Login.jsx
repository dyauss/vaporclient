import React from 'react';



import './login.css';
import { ContainerPos } from '../../components/containers/ContainerPos';
import LoginForm from '../../components/forms/LoginForm';

export default function Login() {
  return (
    <div className='container-sm-pos'>    
      <LoginForm></LoginForm>    
    </div>      
         
  );
}