import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function NavBar(props) {


    function logout() {
        fetch('http://localhost:80/api/auth/logout.php', {
            method: 'POST',
            credentials: 'include'
        })
            .then(
                (result) => {
                    window.location.href = '/';
                },
                (error) => {
                    console.log(error);
                }
            )
    }


    const endItems = [
        {
            
            label: <Link to="/login"><Button type="button" label="Login" icon="pi pi-sign-in" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%' }} /></Link>,
        },
        {
            label: <Link to="/register"><Button type="button" label="Signup" icon="pi pi-user-plus" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%',}} /></Link>,
            
        },
        {
            label: <Link to="/admin-dashboard"><Button type="button" label="ADMIN DASHBOARD" icon="pi pi-sitemap" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%', }} /></Link>,
        },
        {
            label: <Link to="/" onClick={logout}><Button type="button" label="Logout" icon="pi pi-sign-out" text badge="" badgeClassName="p-badge-danger" style={{ width: '100%'}} /></Link>,
        },


    ];
    let displayItems = [];

    if (props.isAuthenticated) {
        if (props.isAdmin) {
            displayItems = [
                endItems[2], // Admin Dashboard
                endItems[3], // Logout
            ];
        } else {
            displayItems = [
                endItems[3], // Logout
            ];
        }
    } else {
        displayItems = [
            endItems[0], // Login
            endItems[1], // Register
        ];
    }
    const start =<img src="src\assets\images\logo2.png" height="60px" alt="" style={{margin:'100%'}}/>

    const end = <Menubar model={displayItems} style={{ height: '10vh', border: '0px',backgroundColor:'#E9EBF8' }} />;

    return (
        <div className="card" >
            <Menubar  model={[]} start={start} end={end} style={{ height: '13vh' ,backgroundColor:'#E9EBF8'}} />
        </div>
    )
}