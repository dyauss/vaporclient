import React from 'react';

import './login.css';
import { ContainerPos } from '../../components/containers/ContainerPos';
import TitlesH1 from '../../components/title/Titles';
import LoginForm from '../../components/forms/LoginForm';

export default function Login() {
  return (
    <div>
      <TitlesH1 title="Diversos títulos te esperam em um só lugar!"></TitlesH1>
      <div className='container-sm-pos'>
        <LoginForm></LoginForm>    
      </div>   
    </div>
       
         
  );
}