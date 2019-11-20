import React, { Component } from 'react'
import destinationmap from "../../Assets/destinationmap.png";
import "./module.style.css";
//import Input from '../../Component/input/input.js'
import CommonButton from '../../Component/button/button.js'




export class EmailSection extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={destinationmap} alt='' className='mapsize'></img>
                    </div>
                    <div className='col-sm-6'>
                        <h1>Temukan tempat-tempat keren di daerah anda!</h1>
                        <br></br>
                        <p className='fsize'>
                            Ahli tempat kami sudah mencari dari ujung ke unjung untuk menemukan
                            tempat kerja diluarr sana yang berbeda dari lainnya
                        </p>
                        
                        <input class='form-control mt-2 p-2' type='search' placeholder='Nama Depan' aria-label='Search'></input>
                        <input class='form-control mt-2' type='search' placeholder='Nama Belakang' aria-label='Search'></input>
                        <input class='form-control mt-2' type='search' placeholder='Email' aria-label='Search'></input>
                        <input class='form-control mt-2' type='search' placeholder='Telepon' aria-label='Search'></input>
                        
                        <div className='row justify-content-center mt-4'>
                        <CommonButton className='btnfont btn-lg'> Kirimkan</CommonButton>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EmailSection
