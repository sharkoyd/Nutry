import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import AddFood from  './AddFood';
import AdminRequests from './AdminRequests';
import { TabMenu } from 'primereact/tabmenu';

export default function AdminDashboard() {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {label: 'User Management', icon: 'pi pi-fw pi-users'},
        {label: 'Food Management', icon: 'pi pi-fw pi-apple'},
        {label: 'User Requests', icon: 'pi pi-fw pi-inbox'}, 

    ];
    function makeAdmin(id) {
        //convert id to form data
        const formData = new FormData();
        formData.append('id', id);
        //set request options
        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            body: formData
        };

        fetch('http://localhost:80/api/auth/makeUserAdmin.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(prevData => ({
                    ...prevData,
                    users: prevData.users.map(user => user.id === id ? { ...user, is_staff: user.is_staff === "1" ? "0" : "1" } : user)
                }));
                toast.current.show({ severity: 'success', summary: 'Success Message', detail: data.message, life: 3000 });
            })
            .catch(error => {
                toast.current.show({ severity: 'error', summary: 'Error Message', detail: data.message, life: 3000 });
            });
    }
    function banUser(id) {
        const formData = new FormData();
        formData.append('id', id);
        const requestOptions = {
            credentials: 'include',
            method: 'POST',
            body: formData,
        };

        fetch('http://localhost:80/api/auth/banUser.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(prevData => ({
                    ...prevData,
                    users: prevData.users.map(user => user.id === id ? { ...user, is_active: user.is_active === "1" ? "0" : "1" } : user)
                }));
                toast.current.show({ severity: 'success', summary: 'Success Message', detail: data.message, life: 3000 });

            })
            .catch(error => {
                toast.current.show({ severity: 'error', summary: 'Error Message', detail: 'Failed to update user ban status.', life: 3000 });
                console.log(error);
            });
    }



    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:80/api/base/getAdminData.php?limit=${limit}`, { method: 'GET', credentials: 'include' })
            .then(response => response.json())
            .then(data => setData(data))
    }, [limit]);

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Tooltip target=".make-admin-button" content="Make Admin" position="bottom" />
                <Button icon="pi pi-user-plus" className="p-button-success p-mr-2 make-admin-button" onClick={() => makeAdmin(rowData.id)} />

                <Tooltip target=".ban-user-button" content="Ban User" position="bottom" />
                <Button icon="pi pi-ban" className="p-button-warning ban-user-button" onClick={() => banUser(rowData.id)} />
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData, column) => {
        return <Tag value={rowData[column.field] === "1" ? "Active" : "Banned"} severity={rowData[column.field] === "1" ? "success" : "danger"} />;
    }

    const adminBodyTemplate = (rowData, column) => {
        return <Tag value={rowData[column.field] === "1" ? "Admin" : "User"} severity={rowData[column.field] === "1" ? "info" : "light"} />;
    }

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Toast ref={toast} />
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />                
            {activeIndex === 0 ? (
            <div style={{width:'100%',height:'100%',textAlign:'center'}}>
                    <h3 >Showing {limit} users </h3>
                    <Slider value={limit} onChange={(e) => setLimit(e.value)} min={5} max={1000} step={5} style={{ width: '14em' }} />

                    <DataTable scrollable scrollHeight='60vh' value={data.users} >
                        <Column field="email" header="Email" />
                        <Column field="first_name" header="First Name" />
                        <Column field="last_name" header="Last Name" />
                        <Column field="is_active" header="Status" body={statusBodyTemplate} />
                        <Column field="is_staff" header="Role" body={adminBodyTemplate} />
                        <Column body={actionBodyTemplate} header="Actions" />
                    </DataTable>
                </div>
            ) : activeIndex === 1 ?  (
                <div style={{height:'70vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <AddFood />
                </div>
            ):
            
            (
                <div style={{height:'70vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <AdminRequests />
                </div>
            )}
            
            
        </div>
    );
}



