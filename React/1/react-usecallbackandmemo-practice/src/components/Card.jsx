import { memo } from "react";

function Card({ list }){
    return (
        <div style={{
            display : 'flex',
            gap : '20px'
        }}>
        
        {
            list.map((el, i) => {

                console.log(i);

            return <div style={{
                backgroundColor : 'black',
                color : "white",
                padding : '20px',
            }} key={i}>
                <h2>{el.first_name}</h2>
                <h3>{el.last_name}</h3>
                <h4>{el.role}</h4>
            </div>
        })
        }
        </div>
    )
}

export default memo(Card);