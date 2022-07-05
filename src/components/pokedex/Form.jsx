import React from 'react'

const Form = ({setPokeSearch, typeList, setChangeType}) => {

   
   const changeInputSearch = e =>{
       e.preventDefault()
       setPokeSearch(e.target.value)
   }

   const changeSelect = e => {
       setChangeType(e.target.value)
   }

  return (
    <form className='input-search'>
        <input 
        className='input-text'
        type="text" 
        placeholder='Search your favorite pokemon'
        onChange={changeInputSearch}
        />

        <select onChange={changeSelect} className='input-select'>
            <option value='All Pokemons'>All Pokemons</option>
            {
                typeList?.map(type=>(
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>

    </form>
  )
}

export default Form