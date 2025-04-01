import React from 'react';
import { useState } from 'react';

function LM() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onchangeuserName = (e) => {
        setUserName(e.target.value);
    }

    const onchangepassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmitLM = () => {
        console.log('login form submitted successfully');
    }

    const handleCansel = () => {
        setUserName('');
        setPassword('');
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light" style={{ backgroundColor: '#f0f8ff' }}>
            <form className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "500px", height: '80vh' }}>
                <div className="text-center mb-4" style={{ color: '#007bff' }}>
                    <h2>Login</h2>
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={onchangeuserName}
                        className="form-control"
                        placeholder="User Name"
                        style={{ height: "10vh" }}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={onchangepassword}
                        className="form-control"
                        placeholder="Password"
                        style={{ height: "10vh" }}
                    />
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    {/* <div className="col-6 text-end">
                        <p>
                            <a href="#">Forgot password?</a>
                        </p>
                    </div> */}
                </div>

                <div className='row' style={{ marginTop: '10vh' }}>
                    <div className="col-6">
                        <button
                            type="button"
                            onClick={handleSubmitLM}
                            className="btn btn-primary w-100 py-3"
                        >
                            SUBMIT
                        </button>
                    </div>
                    <div className='col-6'>
                        <button
                            type="button"
                            onClick={handleCansel}
                            className="btn btn-secondary w-100 py-3"
                        >
                            CANSEL
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default LM;