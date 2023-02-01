// src/App.js
import React, { useState, useEffect } from 'react';

const CountryApp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Simple Country App</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>
            <strong>{country.name.common}</strong> - {country.region}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CountryApp />
    </div>
  );
}

export default App;
