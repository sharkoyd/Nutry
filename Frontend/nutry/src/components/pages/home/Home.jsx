import React from 'react'
import NavBar from '../../shared/NavBar'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './home.css'
function Home() {
    const footer = <span>
        <Button label="Learn More" icon="pi pi-check" />
        <Button label="Contact Us" icon="pi pi-user" className="p-button-secondary p-ml-2" />
    </span>;
  return (
    <div>        
      <div className="p-grid p-justify-center">
                <div style={{height:'80vh',display:'flex',flexDirection:'row'}} className="p-col-12 p-md-8 p-lg-6">
                    <div style={{width:'50%',height:'100%',display:'flex',flexDirection:'column',marginTop:'3%',marginLeft:'3%'}}>
                        <p style={{fontSize:'10vh'}}>NUTRY NUTRITION TOOLS</p>
                        <div style={{width:'50%'}}>
                        <p>
                        Nutry is a nutrition tool that helps you to keep track of your nutrition and your daily meals and helps you to reach your goals.
                        </p>
                        </div>
                        

                    </div>
                    <div style={{ height:'100%',width:'50%'}}>
  
                      <img className='big-img' src="src\assets\images\logo2.png" height="80%  " alt="" style={{margin:'10%'}}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home