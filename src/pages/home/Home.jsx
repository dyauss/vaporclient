import './home.css';
import GameCards from './../../components/cards/Cards';
import { ContainerRow } from '../../components/containers/Row';
import CatalogoJogos from '../../components/title/HighlightGames';

export default function Home() {
  return (
    <div> 
      <CatalogoJogos></CatalogoJogos>
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