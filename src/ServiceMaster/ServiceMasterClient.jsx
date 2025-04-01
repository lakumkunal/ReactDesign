import { React, useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const ServiceMasterClient = () => {
    const [selectedService, setSelectedService] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const serviceopt = [
        { value: 'Software Development', label: 'Software Development' },
        { value: 'Web Development', label: 'Web Development' },
        { value: 'App Development', label: 'App Development' }

    ]

    const categoryeopt = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Java', label: 'Java' },
        { value: 'Python', label: 'Python' }

    ]

    const handleservices = (selectedoption) => {
        setSelectedService(selectedoption.value);
        console.log('selected val', selectedoption);
    }

    const handlecategory = (selectedoption) => {
        setSelectedCategory(selectedoption.value)
        console.log('selected category', selectedCategory);
    }

    const fromDateChange = (e) => {
        setFromDate(e.target.value);
        console.log('selectedFromDate', e.target.value);
    }

    const toDateChange = (e) => {
        setToDate(e.target.value);
        console.log('selected to date', e.target.value);
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSubmit = () => {
        console.log('form submitted successfully');
        navigate('/paymentmaster');
        
    }

    const handleReset = () => {
        console.log('form submitted successfully');
    }

    const handleCancel = () => {
        console.log('form submitted successfully');
    }

    return (

        <form className='main-container'>
            <div className="text-center mb-4" style={{ color: '#007bff' }}>
                <h2>User Management</h2>
            </div>
            <div className='form-container'>
                <div className='row mb-4'>
                    <div className='col-6 pb-2'>
                        <Select
                            options={serviceopt}
                            value={selectedService}
                            onChange={handleservices}
                            isSearchable
                            placeholder='--Select--'
                        />
                    </div>
                    <div className='col-6 pb-2'>
                        <Select
                            options={categoryeopt}
                            value={selectedCategory}
                            onChange={handlecategory}

                            placeholder='--Select--'
                            isSearchable
                        />
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-6 pb-2'>
                        <DatePicker
                            onChange={fromDateChange}
                            value={fromDate}
                            className='form-control'
                            dateFormat="yyyy-MM-dd"
                            placeholderText="yyyy-MM-dd"
                        />
                    </div>
                    <div className='col-6 pb-2'>
                        <DatePicker
                            onChange={toDateChange}
                            value={toDate}
                            dateFormat="yyyy-MM-dd"
                            className='form-control'
                            placeholderText="yyyy-MM-dd"
                        />
                    </div>
                </div>
                <div className='right-align'>
                    <input
                        type='text'
                        value={searchText}
                        onChange={handleSearch}
                        placeholder='--Search--'
                        className='form-control'
                    />
                </div>
               
                    {/* <table className = 'table'>
                        <thead>
                            <th>
                                <td>Sr No.</td>
                                <th>Descriptions</th>
                            </th>
                            <tbody>
                                <td>

                                </td>
                            </tbody>
                        </thead>
                    </table> */}
            </div>
            <div className="row justify-content-end" style={{ marginTop: '50vh' }}>
                <div style={{ width: '15vw' }}>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary w-100"
                    >
                        SUBMIT
                    </button>
                </div>
                <div style={{ width: '15vw' }}>
                    <button
                        type="reset"
                        onClick={handleReset}
                        className="btn btn-secondary w-100"
                    >
                        RESET
                    </button>
                </div>
                <div style={{ width: '15vw' }}>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="btn btn-danger w-100"
                    >
                        CANSEL
                    </button>
                </div>
            </div>
        </form>

    )
}

export default ServiceMasterClient;