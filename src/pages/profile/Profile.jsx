import React from 'react';
import './profile.css';

import TitlesH5 from '../../components/title/Titleh5';
import PaperContainer from '../../components/containers/PaperContainer';
import CarouselOwnedGames from '../../components/carousel/CarouselOwnedGames';
import { ProfilePicture} from '../../components/pictures/ProfilePicture';
import { ProfileBanner } from '../../components/pictures/BannerProfile';
import { Typography } from '@mui/material';


export default function Profile() {
    return (
      <div>
        <PaperContainer>
          <div className='pos-relative'> 
            <ProfileBanner/>
            <div className='pos-absolute'>
              <ProfilePicture />   
            </div>                                           
          </div>      
          <br/>
          <br/>
          <TitlesH5 title='Nickname do usuário (nome do usuário)'/>          
          <h5>Sobre mim:</h5>
          <div className='about-me-box'>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    
          </div>                         
          <br/>
          <h5>Jogos obtidos</h5>
          <div className='centralize'>
            <CarouselOwnedGames/> 
          </div>         
        </PaperContainer>
        
        
      </div>           
    );
  }