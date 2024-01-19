import React from 'react';

import './titles.css'

export default function TitlesH1(props) {
  return (
    <div className='title-h1'>
        <h2>{props.title}</h2>     
    </div>
  );
}

