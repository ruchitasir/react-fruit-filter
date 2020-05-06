import React from 'react';

const FilterInput= props=> {
   return(
          <div className = 'filter-input'>
              <h4>Filter these fruits:</h4>
              <input type='text' value={props.value} onChange={props.onChange} name="fruit-filter"/>
          </div>
          )
    }

export default FilterInput