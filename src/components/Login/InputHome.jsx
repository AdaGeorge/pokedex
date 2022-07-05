import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'


const InputHome = () => {

   const {register, handleSubmit, reset} = useForm()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const submit = data => {
       dispatch(setNameGlobal(data.nameUser))
       reset('')
       navigate('/pokedex')
   }

  return (
    <form onSubmit={handleSubmit(submit)} >
        <input type="text" placeholder='name' {...register('nameUser')} className='input-sign-up'/>
        <button className='btn-sign-up'>let's begin</button>
    </form>
  )
}

export default InputHome