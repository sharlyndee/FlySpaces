import React, { Component } from 'react'
import contact from "../../Assets/contact.png";
import "./module.style.css"
import CommonButton from '../../Component/button/button.js'

export class ContactSection extends Component {
    render() {
        return (
            <div>
                <div className='container p-4'>
                    <div className='row mt-5'>
                        <div className='col-sm-5 justify-content-center'>
                            <img src={contact} alt='' className='contactpic'></img>
                        </div>
                        <div className='col-sm-7'>
                            <p className='fontsize'>Hi! saya <b>Aulia</b>, representatif Jakarta dari FlySpaces!</p>
                            <br></br>
                            <p className='fontsize'>
                                Kami di FlySpaces dapat membantu anda menemukan tempat kerja yang sempurna, fleksibel untuk anda dan
                                kebutuhan perusahaan anda.
                            </p>
                            <br></br>
                            <p className='fontsize'><b>Aulia Ramadhina</b>
                            <br></br> <b>Indonesia Sales Executive</b>
                            <br></br><b className='fontsize orange'> +6221 2598 5214 | aulia@flyspaces.com</b></p>
                            <br></br>
                            <CommonButton>Pesan Tour Gratis</CommonButton>

                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSection
