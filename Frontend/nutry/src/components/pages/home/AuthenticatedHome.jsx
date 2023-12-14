import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import MyMeals from '../Dashboard/MyMeals';
import Stats from '../Dashboard/Stats';
import { Card } from 'primereact/card';
import Request from '../Dashboard/Request';

import AdminDashboard from '../Dashboard/AdminDashboard';


function WorkoutPlan() {
  return <h2>Workout Plan</h2>;
}

function AuthenticatedHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',height:'85vh' }}>
      <Card style={{ width: '25%', borderRadius: '10px' ,color:'white',margin:'10px' }}>
        <div style={{textAlign:'left',color:'black',height:'120px',marginBottom:'30px',borderBottom:'1px solid gray'}}>
          <p style={{fontSize:'25px'}} >TOOLS</p>
          <p style={{color:'gray'}}>
            choose one of the following tools to start your journey
          </p>
        </div>
        <Link to="/my-meals" style={{ display: 'block', marginBottom: '10px' }}>
          <Button type="button" label="MY MEALS" icon="pi pi-table" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%',paddingRight:'100px' }} />

        </Link>
        <Link to="/nutrition-statistics" style={{ display: 'block', marginBottom: '10px' }}>
          <Button type="button" label="NUTRITION STATISTICS" icon="pi pi-chart-bar" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%',paddingRight:'50px' }} />
          
        </Link>
        <Link to="/request" style={{ display: 'block', marginBottom: '10px' }}>
          <Button type="button" label="NUTRITION ADVICE" icon="pi pi-map" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%',paddingRight:'50px' }} />
          
        </Link>

      </Card>
      <div style={{ flex: '1', padding: '10px' }}>
        <Routes>
          
          <Route path="my-meals" element={<MyMeals />} />
          <Route path="nutrition-statistics" element={<Stats />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="request" element={<Request />} />

        </Routes>

        <img src="src\assets\images\logo2.png" height="70%" alt="" style={{marginLeft:'20%', marginTop:'4%', opacity:'0.2', position:'absolute', zIndex: -1,right:'25%',top:'10%',overflow:'clip'}}/>        

      </div>
    </div>
  );
}

export default AuthenticatedHome;