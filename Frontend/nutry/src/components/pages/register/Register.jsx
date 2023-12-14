import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useRef } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
    

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);

        const response = await fetch('http://localhost:80/api/auth/register.php', {
            method: 'POST',
            body: formData,
            credentials:'include'
        });

        const data = await response.json();

        console.log(data);

        setIsLoading(false);

        if (response.status === 400) {
            toast.current.show({severity:'error', summary: 'Error', detail: data.message, life: 3000});
        } else if (response.status === 200) {
            navigate('/login');
        }
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: '80vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Toast ref={toast} />
            <Card title="Register" style={{width: '300px'}}>
                <form onSubmit={handleSubmit} className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="first_name">First Name</label>
                        <InputText id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="last_name">Last Name</label>
                        <InputText id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {isLoading ? <ProgressSpinner /> : <Button type="submit" label="Register" />}
                </form>
            </Card>
        </div>
    );
}

export default Register;