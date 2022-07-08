/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries]= useState([]);
    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1>hoowowo its workin --</h1>
        </div>
    );
};

export default Countries;