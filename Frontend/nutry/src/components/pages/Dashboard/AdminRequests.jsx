import React, { useState, useEffect } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { set } from 'react-hook-form';
const AdminRequests = () => {
    const toast = useRef(null); 
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        fetch('http://localhost:80/api/base/getAllRequests.php',{method: 'GET',credentials: 'include'})
            .then(response => response.json())
            .then(data => setRequests(data.requests? data.requests : []))
            .catch(error => console.error(error));

    }, []);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('request_id', selectedRequest.request_id);
        formData.append('admin_response', answer);

        fetch('http://localhost:80/api/base/respondToRequest.php', {
            method: 'POST',
            credentials: 'include',
            body: formData,            
        }).then((response) => {

            //remove the request from the list
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Request answered successfully', life: 3000 });
            setRequests(prevRequests => prevRequests.filter(request => request.request_id !== selectedRequest.request_id));
            setSelectedRequest(null);
        });
    };

    return (
        <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Toast ref={toast} />
            <Splitter style={{height: '100%',width:'100%'}}>
                <SplitterPanel size={30} style={{display:'flex',flexDirection:'column'}}>
                    <div style={{textAlign:'center',color:'gray'}}>
                        <h3>Unanswered Requests</h3>
                    </div>
                    {requests.map(request => (
                        <Button label={"📝"+request.title+" | "+ request.timestamp } onClick={() => setSelectedRequest(request)} style={{textAlign:'left'}} />
                    ))}
                </SplitterPanel>
                <SplitterPanel size={70}>
                    <Splitter layout="vertical">
                        <SplitterPanel size={80} >
                            <div style={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            {selectedRequest ?<div dangerouslySetInnerHTML={{ __html: selectedRequest.content }} /> : <p>⬅️ Select a Request if Available</p>}
                            </div>
                        </SplitterPanel>
                        <SplitterPanel size={20} style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}>
                        {selectedRequest ?  <Editor style={{height: '100%'}} onTextChange={(e) => setAnswer(e.htmlValue)} />: null}
                            {selectedRequest ? <Button label="Submit Answer" onClick={handleSubmit} />: null}
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

export default AdminRequests;