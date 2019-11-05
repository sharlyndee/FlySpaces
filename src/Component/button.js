import React from 'react'

 const button =({handleClick, children}) => {
    return(
    <div>
    <button className='buttonstyle btn btn-warning'
    type='button'
    onClick={handleClick}
    > {children}
    </button>
    </div>
    )

}

export default button