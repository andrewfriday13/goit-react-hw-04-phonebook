import { PropTypes } from "prop-types"
import React from 'react';
import css from '../contact/contact.module.css'


export const Filter = ({filter ,onChange})=>{
  return(
    <label>
      <input 
      className={css.input__form}
      type="text"
       name='filter'
       value={filter} 
       onChange={onChange}/>
    </label>
  )
  
} 
Filter.propTypes={
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}