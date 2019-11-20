import React from 'react'



const input = ({ children }) => {
    return (
        <div>
            <div class=" md-form mt-4">
            <input 
                    class='form-control'
                    type='search'
                    placeholder={children}
                    aria-label='Search'
            >               
                </input>
            </div>
        </div>
    )

}

export default input