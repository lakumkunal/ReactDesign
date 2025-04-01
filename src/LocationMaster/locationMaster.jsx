import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country, State } from 'country-state-city';

const LocationMaster = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');

    useEffect(() => {
        // Get all countries from country-state-city package
        const countries = Country.getAllCountries();
        const options = countries.map(country => ({
            value: country.isoCode,
            label: country.name
        }));
        setCountryOptions(options);
    }, []);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption.value);
        setSelectedState(null);
        console.log("Selected Country:", selectedOption.label);

        // Get states of the selected country
        const states = State.getStatesOfCountry(selectedOption.value);
        const options = states.map(state => ({
            value: state.isoCode,
            label: state.name
        }));

        setStateOptions(options);
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        console.log("Selected State:", selectedOption.label);
    };

    const onchangedistrict = (e) => {
        setDistrict(e.target.value);
    }

    const onchangevillage = (e) => {
        setVillage(e.target.value);
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
                <h2>Location Master</h2>
            </div>
            <div className='form-container'>
                <div className='row mb-4'>
                    <div className='col-6 pb-2'>
                        <Select
                            id="country-select"
                            options={countryOptions}
                            value={countryOptions.find(option => option.value === selectedCountry)}
                            onChange={handleCountryChange}
                            isSearchable
                            placeholder="Select a Country"
                        />
                    </div>
                    <div className='col-6 pb-2'>
                        <Select
                            options={stateOptions}
                            value={selectedState}
                            onChange={handleStateChange}
                            isSearchable
                            placeholder="Select a State"
                            isDisabled={!stateOptions.length}
                        />
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-6 pb-2'>
                        <input
                            id="district"
                            value={district}
                            onChange={onchangedistrict}
                            className="form-control"
                            placeholder="District"
                        />
                    </div>
                    <div className='col-6 pb-2'>
                        <input
                            id="village"
                            value={setVillage}
                            onChange={onchangevillage}
                            className="form-control"
                            placeholder="Village"
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

export default LocationMaster;
