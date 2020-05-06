import React,{useState} from 'react';
import './App.css';
import FruitList from './FruitList'
import FilterInput from './FilterInput';

function App(props) {
  let [fruitDisplay,setFruitDisplay] = useState(props.fruits)
  let [filterValue, setFilterValue] = useState('')
    
    const handleFilterChange =(e)=>{
      e.preventDefault()
      filterValue = e.target.value
      setFilterValue(e.target.value)
      setFruitDisplay(()=>{
        const filteredFruitList = props.fruits.filter(fruit=>
           fruit.toLowerCase().includes(filterValue.toLowerCase()) 
        )
        return(
          filteredFruitList
          )
      })
    }

  return (
    <div className="App">
      <h1>My Fruits</h1>
      <FilterInput value={filterValue} onChange={handleFilterChange} />
     <FruitList fruits={fruitDisplay} />
    </div>
  );
}

export default App;
