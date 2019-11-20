import React from 'react';
import "./module.style.css";

const WorkCards = ({ id, name, description, pic }) => {
    return (
       
        <div className="col-sm-4">
            <div className="card mt-5 border-0">
                <div>
                    <img src={pic} alt="" className="cardpic"></img>
                    <div className="card-body">
                        <div>
                            <div className='row d-flex justify-content-between'>
                                <h4>{name}</h4>
                                <p>{description}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
      

    )
}


export default WorkCards;





