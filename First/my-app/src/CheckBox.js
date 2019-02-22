import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CheckBox = styled.label`
    label {
        font-size: 15px;
    }

    input[type=checkbox] {
        display: none;
    }
    
    input[type=checkbox] + .checkmark {
        cursor: pointer;
        display: inline-block;
        border: 1px solid #989898;
        height: 11px;
        width: 11px;
        margin-right: 7px;
    }

    input[type=checkbox]:checked + .checkmark {
        border: 1px solid #989898;
        background-color: #989898;
        outline: 1px solid #eee;
        outline-offset:-2px;
    }
`;


const CheckBoxAction = ({ label }) => {
    return (
        <CheckBox>
            <input type="checkbox" id={`checkbox-` + label} />
            <span className='checkmark'></span>
            {label}
        </CheckBox>
    )
}

CheckBoxAction.propTypes = {
    label: PropTypes.string.isRequired
}

CheckBoxAction.defaultProps = {
    label: ''
}

export default CheckBoxAction