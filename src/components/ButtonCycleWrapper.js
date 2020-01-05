import React from 'react';
import {
    ClearRounded as ClearAllIcon,
    DoneOutlineRounded as DoneOutlineRoundedIcon
} from '@material-ui/icons';
import '../styles/buttonCycleWrapper.scss'

const ButtonCycleWrapper = ({ children, handleClick }) => {

    return (
        <div className="card-btn-group">
            <div className="cycle-btn-container">
                <div className='inner-btn-container'>
                    <button className="btn btn-decline btn-lg" id='skip' onClick={handleClick} >
                        <ClearAllIcon fontSize='large' style={{PointerEvent:'none'}} />
                    </button>
                </div>
            </div>
            {children}
            <div className="cycle-btn-container">
                <div className='inner-btn-container'>
                    <button className="btn btn-accept btn-lg" id='open' onClick={handleClick}>
                        <DoneOutlineRoundedIcon fontSize="large" style={{PointerEvent:'none'}} />
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ButtonCycleWrapper;