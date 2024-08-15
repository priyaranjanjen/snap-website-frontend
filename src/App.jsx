
import { Grid } from '@mui/material'
import Navbar from '../components/navbar/navbar'
import heroImage from '../images/image-hero-desktop.png';
import audiophile from '../images/client-audiophile.svg';
import databiz from '../images/client-databiz.svg';
import maker from '../images/client-maker.svg';
import meet from '../images/client-meet.svg';

import './App.css'
import Button from '../components/button/button'
import Sidebar from '../components/sidebar/sidebar';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px')

  return (
    <>
      <div className="body">
        <div>
          <Navbar setShowSideMenu={setShowSideMenu}/>
        </div>
        <div className="heroSection">
          <Grid container className='mainGrid' >
            <Grid item md={6} xs={12}>
              <div className='contentSection'>
                <div className='textSection'>
                  <h1>Make remote work</h1>
                  <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                  <Button className={"withBackround"} text={"Learn more"}/>
                </div>
                <div className='brandImages'>
                  <img src={databiz} alt="databiz" className='brand'/>
                  <img src={audiophile} alt="audiophile" className='brand'/>
                  <img src={meet} alt="meet" className='brand'/>
                  <img src={maker} alt="maker" className='brand'/>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12} className='imageSection'>
              <img src={heroImage} alt="heroImage" />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='sidebar'>
        {showSideMenu && isMobile && <Sidebar setShowSideMenu={setShowSideMenu}/>}
      </div>
    </>

  )
}

export default App
