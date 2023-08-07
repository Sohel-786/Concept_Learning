import Icon from '../Icon/Icon';
import './Card.css';

function Card({ onplay, player, index, gameEnd }){

    let icon = <Icon />

    if(player === 'O'){
        icon = <Icon name={'circle'}/>
    }else if(player === 'X'){
        icon = <Icon name={'cross'}/>
    }


    return <div 
        style={player === 'X' ?  
                {backgroundColor : 'red', color: 'white', borderColor : 'white'}
                  : player === 'O' ? 
                        {backgroundColor : '#00ff11', color: 'black', borderColor : 'white'} 
                            :  {backgroundColor : 'initial', color: 'white'}

                }
                   className= "card" onClick={() => !gameEnd && player==='' && onplay(index)
                   }>
        {icon}
    </div>
}   

export default Card;