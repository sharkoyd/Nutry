import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
// import skeleton 
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';
import { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { Chart } from 'primereact/chart';
import { Knob } from 'primereact/knob';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

export default function MyMeals() {
    const toast = useRef(null);
    const [quantityValue, setQuantityValue] = useState(1);
    const [visible, setVisible] = useState(false);
    const [foodDetailsVisible, setFoodDetailsVisible] = useState(false);
    const [mealName, setMealName] = useState('');
    const [value, setValue] = useState('breakfast');
    const [products, setProducts] = useState({});
    const [selectedProduct, setSelectedProduct] = useState({});
    const [finalFoodList, setFinalFoodList] = useState([]);


    const [meals, setMeals] = useState([null]);


    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    function createChart() {
        console.log('createChart()');
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [
                {
                    data: selectedProduct ? [selectedProduct.protein * selectedProduct.quantity_multiplier, selectedProduct.fat * selectedProduct.quantity_multiplier, selectedProduct.sugar * selectedProduct.quantity_multiplier, selectedProduct.fiber * selectedProduct.quantity_multiplier, selectedProduct.cholesterol * selectedProduct.quantity_multiplier, selectedProduct.sodium * selectedProduct.quantity_multiplier] : [0, 0, 0, 0, 0],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                    ],
                    label: 'Value in grams'
                }
            ],
            labels: ['Protein', 'Fat', 'Sugar', 'Fiber', 'cholesterol', 'sodium']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
                , title: {
                    display: true,
                    text: [
                        `Calories: ${selectedProduct.calories * selectedProduct.quantity_multiplier}`,
                        `Protein: ${selectedProduct.protein * selectedProduct.quantity_multiplier}`,
                        `Fat: ${selectedProduct.fat * selectedProduct.quantity_multiplier}`,
                        `Sugar: ${selectedProduct.sugar * selectedProduct.quantity_multiplier}`,
                        `Fiber: ${selectedProduct.fiber * selectedProduct.quantity_multiplier}`,
                        `Cholesterol: ${selectedProduct.cholesterol * selectedProduct.quantity_multiplier}`,
                        `Sodium: ${selectedProduct.sodium * selectedProduct.quantity_multiplier}`

                    ],
                    position: 'bottom',
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },
            }
        };

        setChartData(data);
        setChartOptions(options);
    }


    useEffect(() => {
        if (Object.keys(selectedProduct).length !== 0) {
            createChart();
        }
    }, [selectedProduct]);



    useEffect(() => {
        fetch('http://localhost:80/api/base/getMeals.php', { method: 'GET', credentials: 'include' }) // replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.error('Error:', error));
    }, []);


    const calculateTotalProtein = (meal) => {
        let totalProtein = 0;
        meal.foods.forEach(food => {
            totalProtein += food.quantity_multiplier * parseFloat(food.food_details.protein);
        });
        return parseFloat(totalProtein.toFixed(2));
    };

    const calculateTotalFat = (meal) => {
        let totalFat = 0;
        meal.foods.forEach(food => {
            totalFat += food.quantity_multiplier * parseFloat(food.food_details.fat);
        });
        return parseFloat(totalFat.toFixed(2));
    };

    const calculateTotalCalories = (meal) => {
        let totalCalories = 0;
        meal.foods.forEach(food => {
            totalCalories += food.quantity_multiplier * parseFloat(food.food_details.calories);
        });
        return parseFloat(totalCalories.toFixed(2));
    };
    const calculateTotalSugar = (meal) => {
        let totalSugar = 0;
        meal.foods.forEach(food => {
            totalSugar += food.quantity_multiplier * parseFloat(food.food_details.sugar);
        });
        return parseFloat(totalSugar.toFixed(2));
    };
    const calculateTotalFiber = (meal) => {
        let totalFiber = 0;
        meal.foods.forEach(food => {
            totalFiber += food.quantity_multiplier * parseFloat(food.food_details.fiber);
        });
        return parseFloat(totalFiber.toFixed(2));
    };
    const calculateTotalCholesterol = (meal) => {
        let totalCholesterol = 0;
        meal.foods.forEach(food => {
            totalCholesterol += food.quantity_multiplier * parseFloat(food.food_details.cholesterol);
        });
        return parseFloat(totalCholesterol.toFixed(2));
    };
    const calculateTotalSodium = (meal) => {
        let totalSodium = 0;
        meal.foods.forEach(food => {
            totalSodium += food.quantity_multiplier * parseFloat(food.food_details.sodium);
        });
        return parseFloat(totalSodium.toFixed(2));
    };



    const options = [
        { value: 'breakfast', icon: 'pi pi-sun' },
        { value: 'lunch', icon: 'pi pi-home' },
        { value: 'dinner', icon: 'pi pi-moon' },
        { value: 'snacks', icon: 'pi pi-star' }
    ];

    function getFoods(search) {
        if (search === '') return setProducts([]);
        fetch(`http://localhost:80/api/base/getFoods.php?search=${search}`, { method: 'GET', credentials: 'include' }) // replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }

    function onRowSelect() {
        setFoodDetailsVisible(true);
    }
    function onRowUnselect() {

        setSelectedProduct({});
    }

    function updateSelectedProductQuantity(e) {
        console.log(11111111);
        //using setSelectedProduct() multiply the selected product quantity,protein,fat,calories by e
        let newSelectedProduct = selectedProduct;
        newSelectedProduct.quantity_multiplier = e;
        setSelectedProduct(newSelectedProduct);
        createChart();
    }
    function addFood() {
        // add selectedProduct to finalFoodList
        let foodlist = finalFoodList;
        foodlist.push(selectedProduct);
        setFinalFoodList(foodlist);

    }
    function saveMeal() {
        // create a meal object with mealName, value, finalFoodList
        let finalMeal = {
            name: mealName,
            type: value,
            foods: finalFoodList
        }

        // save finalFoodList to database
        fetch('http://localhost:80/api/base/createMeal.php', { method: 'POST', credentials: 'include', body: JSON.stringify(finalMeal) }) // replace with your actual API endpoint
            // .then(response => response.json())
            // .then(data => setMeals(data))
            .then(error => console.log('Error:', error));
        toast.current.show({ severity: 'success', summary: 'Meal Saved', detail: 'Meal Saved Successfully', life: 3000 });
        //remake the request to get new meals
        fetch('http://localhost:80/api/base/getMeals.php', { method: 'GET', credentials: 'include' }) // replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.error('Error:', error));

        setFinalFoodList([]);
        setSelectedProduct({});
        setMealName('');
        setVisible(false);

    }
    function deleteMeal(id) {


        fetch(`http://localhost:80/api/base/deleteMeal.php?id=${id}`, {
            method: 'GET',

            credentials: 'include'
        })
            .catch(error => console.error('Error:', error));
        //remove the deleted meal from meals
        let newMeals = meals.filter(meal => meal.id !== id);
        setMeals(newMeals);
        toast.current.show({ severity: 'success', summary: 'Meal Deleted', detail: 'Meal Deleted Successfully', life: 3000 });
    }

    return (
        <div className="card" style={{ marginTop: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Toast ref={toast} />


            <DataTable  value={meals} tableStyle={{ width: '70vw',borderRadius:'50px' }}>
                <Column field="name" header="Food Name" body={(rowData) => meals[0] == null ? <Skeleton /> : rowData.name} />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalProtein} header="Protein" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalFat} header="Fat" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalCalories} header="Calories" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalSugar} header="Sugar" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalFiber} header="Fiber" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalCholesterol} header="Cholesterol" />
                <Column body={meals[0] == null ? <Skeleton /> : calculateTotalSodium} header="Sodium" />
                <Column field="type" header="" />
                {/* column for deleting a meal that has a delete icon*/}
                <Column body={(rowData) => <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => { deleteMeal(rowData.id) }} />} />
            </DataTable>
            <SpeedDial className='.speeddial-bottom-right ' radius={120} type="quarter-circle" direction="up-left" style={{ right: 20, bottom: 20 }} buttonClassName="p-button-help" onClick={() => setVisible(true)} />
            <Dialog header='Add Meal' visible={visible} style={{ width: '90vw' }} onHide={() => setVisible(false)}>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <label for='checkbox' className="card flex flex-column align-items-center gap-3">
                            <MultiStateCheckbox name='checkbox' value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
                            <span>{value || 'no value'}</span>
                        </label>
                    </span>
                    <InputText placeholder="Meal Name" onChange={(e) => { setMealName(e.target.value); console.log(finalFoodList.length > 0); }} />
                    <Button label={value && finalFoodList.length > 0 && mealName != '' ? `Create Meal with ${finalFoodList.length} Foods` : 'Fill required fields to create a meal'} severity="normal" icon="pi pi-plus" disabled={!(value && finalFoodList.length > 0 && mealName != '')} text raised onClick={() => { saveMeal() }} />



                </div>

                <div style={{ marginTop: 50, display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search For A Food" onInput={(e) => getFoods(e.target.value)} />
                        </span>
                        {products.length > 0 ?
                            <DataTable scrollable scrollHeight="290px" value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => { setSelectedProduct(e.value) }} dataKey="id"
                                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} tableStyle={{ minWidth: '15vw', width: '15vw' }}>
                                <Column field="name" header="Name"></Column>



                            </DataTable>
                            : null}
                    </div>
                    <div >
                        {finalFoodList.length > 0 ?
                            <div>
                                <h3 style={{ marginLeft: 60 }}>Food in this meal</h3>
                                <DataTable value={finalFoodList} selectionMode="single" selection={selectedProduct} dataKey="id"
                                    metaKeySelection={false} tableStyle={{ minWidth: '20vw', width: '20vw', marginLeft: 60 }}>
                                    <Column field="id" header="Id"></Column>
                                    <Column field="name" header="Name"></Column>
                                    <Column field="calories" header="Calories"></Column>
                                    <Column field="protein" header="Protein"></Column>
                                    <Column field="fat" header="Fat"></Column>
                                    <Column field="sugar" header="Sugar"></Column>
                                    <Column field="fiber" header="Fiber"></Column>
                                    <Column field="cholesterol" header="Cholesterol"></Column>
                                    <Column field="sodium" header="Sodium"></Column>
                                    <Column field="quantity_multiplier" header="Quantity multiplier"></Column>


                                </DataTable>
                            </div>
                            : null}
                    </div>
                </div>
            </Dialog>
            <Dialog header={selectedProduct ? selectedProduct.name : 'no food selected'} visible={foodDetailsVisible} style={{ width: '90vw' }} onHide={() => setFoodDetailsVisible(false)}>
                <div style={{ display: 'flex' }}>
                    <Chart type="polarArea" data={chartData} options={chartOptions} style={{ width: '450px', height: '450px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end ', width: '60%' }}>
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            Add {selectedProduct ? selectedProduct.quantity * selectedProduct.quantity_multiplier : 0} {selectedProduct ? selectedProduct.unit : null} {selectedProduct ? selectedProduct.name : 'no food selected'} to your meal ?
                            <Button label="YES" onClick={() => { addFood(); setFoodDetailsVisible(false) }} severity="success" text raised style={{ marginTop: 20 }} />

                        </div>
                        <Knob value={quantityValue} onChange={(e) => { setQuantityValue(e.value); updateSelectedProductQuantity(e.value) }} min={1} max={50} />
                        <div>
                            <Button style={{ marginRight: 5 }} icon="pi pi-plus" onClick={() => { setQuantityValue(quantityValue + 1); updateSelectedProductQuantity(quantityValue + 1) }} disabled={quantityValue === 50} />
                            <Button style={{ marginLeft: 5 }} icon="pi pi-minus" onClick={() => { setQuantityValue(quantityValue - 1); updateSelectedProductQuantity(quantityValue - 1) }} disabled={quantityValue === 1} />
                        </div>
                        <label style={{ marginTop: 10 }}>quantity multiplier</label>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
