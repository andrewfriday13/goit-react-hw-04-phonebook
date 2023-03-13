import React from 'react';
import { Formik, Field, Form } from 'formik';
import { PropTypes } from "prop-types"
import css from './contact.module.css'

   


export const ContactForm = ({onSubmit}) => {
  const initialValues ={ 
    name: '',
    number: '',
  }
  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    onSubmit(values.name, values.number);
  };

  return (  
    
    <Formik  
    initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form_contact}>
        <label>
          
        <Field  className={css.input__form} id="firstName"  type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required 
          placeholder='Name'/>
        </label>

        <label>
        <Field  className={css.input__form} id="lastName"  type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required  
          placeholder='Number'/>
        </label>
        <button className={css.submit__btn} type="submit">S U B M I T</button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes={
  onSubmit: PropTypes.func.isRequired,
}