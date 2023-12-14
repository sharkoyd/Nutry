import React from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import './AddFood.css';

function AddFood() {
    const toast = useRef(null);

    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        for (const name in data) {
            formData.append(name, data[name]);
        }
    

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            body: formData
        };

        fetch('http://localhost:80/api/base/createFood.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                toast.current.show({severity:'success', summary: 'Success Message', detail:data.message, life: 3000});
                reset(); 
            })
            .catch(err => {
                console.log(err);
                toast.current.show({severity:'error', summary: 'Error Message', detail:'Something went wrong', life: 3000});
            });
    };

    return (
        <div className="p-grid" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
            <Toast ref={toast} />

            <h1 style={{ height: '10%' }}>ADD FOOD</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="p-col-12 p-md-4">
                    <span className="p-float-label">
                        <InputText id="name" name="name" {...register("name", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="name"><i className="pi pi-apple"></i> Name</label>
                    </span>
                    {errors.name && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="quantity" name="quantity" {...register("quantity", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="quantity"><i className="pi pi-sort-numeric-up"></i> Quantity</label>
                    </span>
                    {errors.quantity && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="unit" name="unit" {...register("unit", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="unit"><i className="pi pi-tag"></i> Unit</label>
                    </span>
                    {errors.unit && <p>This field is required</p>}
                </div>

                <div className="p-col-12 p-md-4">
                    <span className="p-float-label">
                        <InputText id="protein" name="protein" {...register("protein", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="protein"><i className="pi pi-chart-bar"></i> Protein</label>
                    </span>
                    {errors.protein && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="fat" name="fat" {...register("fat", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="fat"><i className="pi pi-chart-bar"></i> Fat</label>
                    </span>
                    {errors.fat && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="calories" name="calories" {...register("calories", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="calories"><i className="pi pi-chart-bar"></i> Calories</label>
                    </span>
                    {errors.calories && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="sodium" name="sodium" {...register("sodium", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="sodium"><i className="pi pi-chart-bar"></i> Sodium</label>
                    </span>
                    {errors.sodium && <p>This field is required</p>}

                    <div className="p-col-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button type="submit" label="Submit" />
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <span className="p-float-label">
                        <InputText id="sugar" name="sugar" {...register("sugar", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="sugar"><i className="pi pi-chart-bar"></i> Sugar</label>
                    </span>

                    {errors.sugar && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="fiber" name="fiber" {...register("fiber", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="fiber"><i className="pi pi-chart-bar"></i> Fiber</label>
                    </span>
                    {errors.fiber && <p>This field is required</p>}

                    <span className="p-float-label">
                        <InputText id="cholesterol" name="cholesterol" {...register("cholesterol", { required: true })} className="p-inputtext-sm" />
                        <label htmlFor="cholesterol"><i className="pi pi-chart-bar"></i> Cholesterol</label>
                    </span>
                    {errors.cholesterol && <p>This field is required</p>}
                </div>

            </form>
        </div>
    );

}

export default AddFood;