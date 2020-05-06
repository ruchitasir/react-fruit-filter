import React from 'react';

const FruitList= props=> {
   return(
          <div>
              <ul>
                {props.fruits.map((fruit,key)=><li key={key}> {fruit} </li>)}
              </ul>
          </div>
          )
    }

export default FruitList;