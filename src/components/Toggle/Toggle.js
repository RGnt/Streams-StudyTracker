import React from 'react'
import './toggle.css'
export const Toggle = ({isChecked}) => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}
