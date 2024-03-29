import React, { Component } from 'react'
import workspace from "../../Assets/workspace.png";
import CommonButton from '../../Component/button/button.js'
import "./module.style.css";



export class Workspace extends Component {
    handleClick = () => {
        alert("Hello!")
    }
    render() {
        return (
            
                <div className='container margin justify-content-center'>
                    <div className='row justify-content-center text-center'>
                    <h1>TEMPAT KERJA UNTUK SEMUA KEBUTAN</h1>
                </div>
                        <div className='row mt-5'>
                            <div className='col-sm-5 workpicsize'>
                                <img src={workspace} alt='' className='workpic'></img>
                            </div>
                            <div className='col-sm-7'>
                                <h3>Tempat Fleksibel dan Hemat Biaya untuk di Sewa</h3>
                                <p className='font-size mt-3'>
                                    Berperabot lengkap dan siap untuk anda bekerja, kantor jangka waktu pendek
                                    menyediakan banyak keuntungan darri ruang kantor tradisional tanpa kontrak Sewa
                                    panjang yang mahal. Harga juga sudah termasuk akses ke ruang meeting, alamat bisnis,
                                    pengaturan telepon, dan tugas-tugas administratif lain jadi anda tidak butuh khawatir
                                    tentang hal-hal kecil. Menyewa kantor jangka waktu pendek juga memberikan
                                    fleksibilitas untuk menimbang bisnis anda karena anda tidak terikat dalam kontrak
                                    tetap jadi jika anda tidak yakin seberapa besar team anda akan berkembang dalam
                                    beberapa bulan, anda tidak perlu khawatir, tempat duduk akan selalu ada.
                                </p> 
                                <br></br>
                                
                                <CommonButton handleClick={this.handleClick} btnstyle='buttonnormal'>Pelajari lebih lanjut</CommonButton>
                                    
                            </div>
                        </div>
                    
                </div>
                
            
        )
    }
}

export default Workspace
