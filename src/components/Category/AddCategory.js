import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        if (inputValue.trim().length > 2) {
          setCategories(cats => [inputValue, ...cats]);
          setinputValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
    value={inputValue}
    onChange={(e)=> handleInputChange(e)} />
</form>
  )
}

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory