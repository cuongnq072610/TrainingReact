import React from 'react';
import styled from 'styled-components'

const DropDown = styled.div`
    
`;

const DropdownList = (props) => {
    const {
        data
    } = props
    return (
        <DropDown>
            <select className='wrapper'>
                <option></option>
                {data.map((item, index) => {
                    return <option key={index}>{item.name}</option>
                })}
            </select>
        </DropDown>
    )
}

export default DropdownList