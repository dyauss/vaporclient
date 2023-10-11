import React from 'react'
import './greetings.css'
export default props => {
   const getCurrentHour = new Date().getHours()
   let hello
   if(getCurrentHour >= 0 && getCurrentHour < 6 ){
    hello = "Boa madrugada"
   } else if (getCurrentHour >= 6 && getCurrentHour < 12){
    hello = "Bom dia"
   } else if (getCurrentHour >= 12 && getCurrentHour < 18){
    hello = "Boa tarde"
   }else{
    hello = "Boa noite"
   }
    return (
        <div className='greetings'>{hello} e seja bem-vindo(a) ao Vapor!</div>
    )
}