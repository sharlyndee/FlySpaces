import React from 'react';
import map from '../Assets/map.png'



const MapSection = () => (
    <div className='container-fluid'>
    <div className='row mt-5 ml-5'>
            <div className='col-sm-5'>
                <h2>Kota Berkembang Pesat</h2> <br/>
                <p className='text textcolor'>Sebagai kota terbesar di Asia Tenggara, Jakarta muncul dalam beberapa
                tahun terakhir sebagai kota populer untuk pengusaha dan persusahaan multinasional.
                Kota yang besar, Jakarta pastinya memiliki tantangannya sendiri, namum tantangan ini telah
                ditangani dengan solusi yang unik dan berhasil-terutama GoJek-yang telah membantu mengurangi 
                sebagian dari kemacetan terparah di dunia. Sementara GoJek manjadi pilihan unicorn paling
                terkenal dari Indonesia, ledakan startup dan UKM pada saat yang sama adalah luar biasa, dan 
                terdorong dari populasi lokal yang besar, kelas menengah yang bertumbuh, dan konsistennya pertumbuhan
                ekonomi. Faktor-faktor ini sudah menjadi sarana yang penting bagi industry
                kantor berlayanan, kantor virtual dan tempat coworking, yang sedang berkembang di seluruh 
                Jakarta dalam beberapa tahun terakhir dengan tempat-tempat baru yang buka 
                <a href='' className='color'><u> Jakarta Barat</u></a>,<a href='' className='color'><u> Jakarta Selatan</u></a>,
                <a href='' className='color'><u> Jakarta Pusat</u></a>, dan lainnya setiap minggunya.</p>
            </div>

                <div className='col-sm-5'>
                    <img src={map} alt='' className='map'></img>
                    </div>
                    <div className='col-sm-5 over'>
                        <h2>Transformasi Startup</h2><br/>
                        <p className='text textcolor'> Kota, ekosistem startup, dan perekonomian di Jakarta sedang berubah cepat, 
                        dan solusi kantor fleksibel sekarang menyusul, dengan pertumbuhan luar biasa dari juara lokal seperti  
                        <a href='' className='color'><u> Workwell</u></a>, <a href='' className='color'><u>UnionSPACE </u></a>(previously Cre8), dan 
                        <a href='' className='color'><u> GoWork </u></a>. 
                        Dengan pertumbuha ekonomi ini datang juga tandingan
                        regional, dan Jakarta telah melihat masuknya perusahaan besar seperti <a href='' className='color'><u>WeWork</u></a>, yang menggakuisisi Spacemob 
                        di 2017. Dengan banyak tempat coworking dan kantor berlayanan di parasan, biarkan FlySpace, sebagai agregator
                        terdepan untuk tempat kerja fleksibel di Jakarta dan Asia tenggara <a href='' className='color'><u>menjadi tempat pilihan mencari</u></a>.
                        </p>
                </div>
    </div>
    </div>

)

export default MapSection