import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  return <>
  {
    // iterate over my array
    people.map((person) => {
      // destructurering
      const {id, name} = person
      
      const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
      }
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      )
    })
  }
  <button className='btn' onClick={() => setPeople([])}>
    clear items
  </button>
  </>
};

export default UseStateArray;
