import React, { Component } from 'react'
import "./module.style.css";
import socialmedia from '../../Assets/socialmedia.png'



 class Footer extends Component {
    render() {
        return (
            <div className='container-fluid mt-5 backgroundcolor'>
                <div className='row mt-4 ml-4 p-4'>
                    <div>
                        <p> Copyright © 2019 FlySpaces Inc. All right reserved. </p>
                    </div>
                    <div className='offset-sm-7'>
                        <p>Go to flyspaces.com</p>
                        <img src={socialmedia} alt='' className='socialsize'></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer
