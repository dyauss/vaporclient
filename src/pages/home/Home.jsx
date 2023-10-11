import './home.css';
import GameCards from './../../components/cards/Cards';
import { ContainerRow } from '../../components/containers/Row';
import TitlesH1 from '../../components/title/Titles';
import CarouselGames from '../../components/carousel/Carousel';
import Greetings from '../../components/greetings/Greetings';

export default function Home() {
  return (
    <div>
      <Greetings></Greetings>
      <TitlesH1 title='Lançamentos'></TitlesH1>
      <div className='row'>
       <CarouselGames></CarouselGames>
      </div> 
      <TitlesH1 title='Catálogo de jogos'></TitlesH1>
      <div className='row'>  
        <GameCards></GameCards>
        <GameCards></GameCards>
        <GameCards></GameCards>
        <GameCards></GameCards>
        <GameCards></GameCards>
      </div>
    </div>
    
  );
}
