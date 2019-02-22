import React from 'react'
import PropsType from 'prop-types'
import './Input.css'
const InputField = ({placeholder}) => {
    return (
        <input placeholder={placeholder}/>       
    )
}

InputField.propsType = {
    /**
     * Place holder of input field
     */
    placeholder: PropsType.string
}

InputField.defaultProps = {
    placeholder: ''
}

export default InputField