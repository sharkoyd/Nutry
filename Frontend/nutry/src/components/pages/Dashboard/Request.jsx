import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { useRef } from 'react';

function Request() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [responses, setResponses] = useState([]);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        fetch('http://localhost:80/api/base/getResponses.php', { credentials: 'include' })
            .then(response => response.json())
            .then(data => setResponses(data))
            .catch(error => console.error(error));
    }, []);



    const handleSubmit = () => {
        const data = { title, content }; // The data to send

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        fetch('http://localhost:80/api/base/makeRequest.php', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                toast.current.show({ severity: 'success', summary: 'Successful', detail: data.message, life: 3000 });

                setTitle('');
                setContent('');
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.current.show({ severity: 'error', summary: 'Error', detail: data.message, life: 3000 });
            });
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={() => setSelectedResponse(null)} />
            </div>
        );
    };

    return (
        <div>
            <Toast ref={toast} />
            <Splitter style={{ height: '80vh' }}>
                <SplitterPanel size={60}>
                    <div style={{ marginLeft: '5%', display: 'flex', flexDirection: 'column',  justifyContent: 'center' }}>
                        <h3>Submit a Nutrition Advice Request</h3>
                        <span className="p-float-label">
                            <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="title">Title</label>
                        </span>
                        <Editor style={{ height: '200px' }} value={content} onTextChange={(e) => setContent(e.htmlValue)} />
                        <Button icon='pi pi-send' label="Submit" onClick={handleSubmit}  style={{marginTop:'30px'}}/>
                    </div>
                </SplitterPanel>
                <SplitterPanel size={40}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {responses.map(response => (
                            <Button severity="help" raised label={"📝"+response.title} onClick={() => setSelectedResponse(response)} style={{width:'90%',margin:'5px',textAlign:'left'}} />
                        ))}
                        <Dialog visible={selectedResponse != null} style={{ width: '50vw',height:'80vh' }} header="Response Details" modal footer={renderFooter('displayBasic')} onHide={() => setSelectedResponse(null)}>
                            <h3>Question: </h3>
                            <div style={{border:'2px solid black',padding:'10px',borderRadius:'10px'}}>
                            {selectedResponse && <div dangerouslySetInnerHTML={{ __html: selectedResponse.content }} />}
                            </div>
                            <h3>Answer: </h3>
                            <div style={{border:'2px solid black',padding:'10px',borderRadius:'10px',marginTop:'20px'}}>

                            
                            {selectedResponse && <div dangerouslySetInnerHTML={{ __html: selectedResponse.admin_response }} />}
                            </div>
                        </Dialog>
                    </div>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

export default Request;


