import React from 'react'
import ModeContext from './modeContext'

const ModeState = (props) => {
    return (
        <Mode.Provider value={{}} >
            {props.children}
        </Mode.Provider>
    )
}

export default ModeState
