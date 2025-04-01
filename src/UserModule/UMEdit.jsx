import React, { useState } from 'react';
import Select from 'react-select';
import '../App.css';

function UMEdit() {

    const [userName, setUserName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [contryCode, setContryCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onchangeuserName = (e) => {
        setUserName(e.target.value);
    }

    const onchangeDisplayName = (e) => {
        setDisplayName(e.target.value)
    }

    const onchangeContryCode = (e) => {
        setContryCode(e.target.value);
    }

    const onchangePhone = (e) => {
        setPhone(e.target.value);
    }

    const onchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmitUM = () => {
        console.log('form submitted successfully');
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
            <div className="row mb-4">
                <div className="col-6 pb-2">
                    <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={onchangeuserName}
                        placeholder="User Name"
                    />
                </div>
                <div className="col-6 pb-2">
                    <input
                        type="text"
                        className="form-control"
                        value={displayName}
                        onChange={onchangeDisplayName}
                        placeholder="Display Name"
                    />
                </div>
            </div>
            <div className="row mb-4">

                <div className="col-2 pb-2">

                    <Select

                        value={contryCode}
                        onChange={onchangeContryCode}
                        aria-label="Country Code"
                    >
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        <option value="+61">+61</option>
                        <option value="+49">+49</option>

                    </Select>
                </div>
                <div className="col-4">

                    <input
                        type="number"
                        className="form-control"
                        value={phone}
                        onChange={onchangePhone}
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                    />
                </div>
                <div className="col-6">
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={onchangeEmail}
                        placeholder="Email"
                    />
                </div>
            </div>
            </div>
            <div className="row justify-content-end" style={{ marginTop: '50vh' }}>
                <div style={{ width: '15vw' }}>
                    <button
                        type="submit"
                        onClick={handleSubmitUM}
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
export default UMEdit;