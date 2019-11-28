import React from 'react';
import map from '../../Assets/map.png'
import "./style.css";



const MapSection = () => (
    <div className='container-fluid tbmargin'>
        <div className='row mleft'>
                <div className='col-sm-5'>
                    <h1>Kota Berkembang Pesat</h1> <br/>
                    <p className='text graytext'>
                        Sebagai kota terbesar di Asia Tenggara, Jakarta muncul dalam beberapa
                        tahun terakhir sebagai kota populer untuk pengusaha dan persusahaan multinasional.
                        Kota yang besar, Jakarta pastinya memiliki tantangannya sendiri, namum tantangan ini telah
                        ditangani dengan solusi yang unik dan berhasil-terutama GoJek-yang telah membantu mengurangi 
                        sebagian dari kemacetan terparah di dunia. Sementara GoJek manjadi pilihan unicorn paling
                        terkenal dari Indonesia, ledakan startup dan UKM pada saat yang sama adalah luar biasa, dan 
                        terdorong dari populasi lokal yang besar, kelas menengah yang bertumbuh, dan konsistennya pertumbuhan
                        ekonomi. Faktor-faktor ini sudah menjadi sarana yang penting bagi industry
                        kantor berlayanan, kantor virtual dan tempat coworking, yang sedang berkembang di seluruh 
                        Jakarta dalam beberapa tahun terakhir dengan tempat-tempat baru yang buka 
                        <a href='https://www.google.com/' className='color'><u> Jakarta Barat</u></a>,
                        <a href='https://www.google.com/' className='color'><u> Jakarta Selatan</u></a>,
                        <a href='https://www.google.com/' className='color'><u> Jakarta Pusat</u></a>, dan lainnya setiap minggunya.
                    </p>
                    <h1 className='mt-5'>Transformasi Startup</h1><br />
                    <p className='text graytext'> 
                        Kota, ekosistem startup, dan perekonomian di Jakarta sedang berubah cepat,
                        dan solusi kantor fleksibel sekarang menyusul, dengan pertumbuhan luar biasa dari juara lokal seperti
                        <a href='https://www.google.com/' className='color'><u> Workwell</u></a>,
                        <a href='https://www.google.com/' className='color'><u>UnionSPACE </u></a>(previously Cre8), dan
                        <a href='https://www.google.com/' className='color'><u> GoWork </u></a>.
                        Dengan pertumbuha ekonomi ini datang juga tandingan regional, dan Jakarta telah melihat masuknya perusahaan besar seperti
                        <a href='https://www.google.com/' className='color'><u>WeWork</u></a>, yang menggakuisisi Spacemob
                        di 2017. Dengan banyak tempat coworking dan kantor berlayanan di parasan, biarkan FlySpace, sebagai agregator
                        terdepan untuk tempat kerja fleksibel di Jakarta dan Asia tenggara
                        <a href='https://www.google.com/' className='color'><u>menjadi tempat pilihan mencari</u></a>.
                    </p>
                </div>

                    <div className='col-sm-7 sizediv'>
                        <img src={map} alt='' className='map'></img>
                    </div>
                       
        </div>
    </div>

)

export default MapSection