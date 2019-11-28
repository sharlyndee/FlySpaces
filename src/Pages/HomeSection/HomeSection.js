import React from 'react';
import flyspace from '../../Assets/flyspace.png';
import logo from '../../Assets/logo.png'
import CommonButton from '../../Component/button/button.js'
import "./style.css";



class HomeSection  extends React.Component{
  
    handleClick=()=>{
      alert("Hello!")
    }

  render(){
  return(
  <div>
    <div className='container-fluid mt-3 mb-3'>
        <div className='row'>
          <div className='col-4 col-sm-3 col-lg-2 marginleft flyspacesize p-3'>
              <img src={flyspace} alt='logo' className='flyspace' ></img>
            </div>
          
          <div className='mt-4 col-2 col-sm-2 offset-sm-3 offset-1 col-lg-2 p-2  offset-lg-4 offset-md-3  text-right'>
                <p className='tenangfont'> Tentang Kami</p>
              </div>
              
          <div className='mt-4 col-1 col-sm-2 col-lg-2'>
            <CommonButton btnstyle= "buttonsmallfont" handleClick={this.handleClick}>
                  <img src='https://img.icons8.com/carbon-copy/2x/phone.png' alt='' className='phone'></img>
                  HUBUNGGI SEKARANG
                </CommonButton>
            </div>
          
          </div> 
        </div>

    <div className='container-fluid contsize'>
        <div className='row background justify-content-center'>
          <div className='container mt-5 justify-content-center'>
              <h2 className='h1 p-2'>Kami punya 738 ruang kerja fleksibel untuk mu di</h2> 
              <h1 className='h2 p-2'>JAKARTA</h1>
              <p className='h3 p-2'>
                FlySpace memiliki beratus-ratus pilihan ruang kerja fleksibel untuk anda 
                pilih di Jakarta-jelajahi pilihanmu di platform #1 Asia Tenggara
              
              </p>
            <div className=' center '>
              
              <CommonButton handleClick={this.handleClick} btnstyle="buttonlarge" >
              JELAJAHI SEMUA TEMPAT DI JAKARTA
              </CommonButton>
              
            
            </div>
          </div>
        </div> 
      </div>


        <div className='container logosize'>
              <div className='row justify-content-center p-2'>
                <img src={logo} alt='pic'className='pic'></img>
              </div>
             
        </div>
 
    </div>

)
}
}
export default HomeSection