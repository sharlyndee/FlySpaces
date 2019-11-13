import React from 'react';
import "./style.css";






const Cards = ({ id, name, subname, description, pic }) => {
    return (
            <div className="col-sm-12">
                <div className="card mt-5 border-0">
                    <div>
                        <img src={pic} alt="" className="cardpicture"></img>
                        <div className="card-body">
                            <div>
                                <div className='row d-flex justify-content-between'>
                                    <h4>{name}</h4> 
                                    <h6 className='graytext mt-2'>{subname}</h6>
                                 </div>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        
)
}


export default Cards
