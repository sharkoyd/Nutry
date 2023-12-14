import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch('http://localhost:80/api/auth/login.php', {
            method: 'POST',
            body: formData,

            credentials: 'include'
        });


        const data = await response.json();
       

        setIsLoading(false);

        if (response.status === 400) {
            toast.current.show({severity:'error', summary: 'Error', detail: data.message, life: 3000});
        } else if (response.status === 200) {
            window.location.href = '/';
        }
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: '80vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Toast ref={toast} />
            <Card title="Login" style={{width: '300px'}}>
                <form onSubmit={handleSubmit} className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {isLoading ? <ProgressSpinner /> : <Button type="submit" label="Login" />}
                </form>
            </Card>
        </div>
    );
}

export default Login;