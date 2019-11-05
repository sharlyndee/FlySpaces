import React, {Component} from 'react';
import './App.css';
import HomeSection from './Pages/HomeSection';
import MapSection from './Pages/MapSection';
import CommonButton from './Component/button';

class App extends Component {
  render(){
    return (
      <div>
        <HomeSection/>
        <MapSection/>
        <div>
          <div className='container-fluid'>
                  <div className='row text-center'>
                    <div className='col-sm-12'>
                    <h1>JAKARTA FEATURED SPACES</h1>
                    <CommonButton>kkj</CommonButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    );
  }
}

export default App;
