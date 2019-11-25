import React from 'react'
import "./style.css";

 const button =({handleClick, children}) => {
    return(
    <div>
        <button className='buttonstyle btn btncolor'
            type='button'
            onClick={handleClick}
        > 
            {children}
        </button>
    </div>
    )

}

export default button