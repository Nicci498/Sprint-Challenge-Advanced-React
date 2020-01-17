import React from 'react';
// import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

  const PlayerCard = (props) => {
    return (
      <div>
          {props.players.map(player =>{
              return(
                <div key={player.id}>
                  <h2>{player.name}</h2>
                  <h4>{player.country}</h4>
                  <p>{player.searches}</p>
                </div>
                
//             <Card key={player.id}>
//                 <CardBody>
//                     <CardTitle>{player.name}</CardTitle>
//                     <CardSubtitle>{player.country}</CardSubtitle>
//                     <CardText>{player.searches}</CardText>
//                 </CardBody>
//             </Card>
            )
          })}

      </div>
    );
  };
  
  export default PlayerCard;