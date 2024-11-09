import { useEffect } from "react";   //importing react function
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {  //nothing but a arrow function

    //countries store the value"[]"
    //setCountries() in a default function
    //visited store the value"false"
    //setVisited() in a default function
    //2 state
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    // state jekane event handler sekane uporer ta state nicher ta event handler

    const handleVisitedCountries = (country) => {
        console.log('add this to your visited countries ')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    //3 event handler 
    // calling data from api/using fetch
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    //return of the arrow function"Countries" 
    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h5>Visited Countries: {visitedCountries.length}  </h5>
                <ol> 
                    {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            //3 props patacci 1st ta default key hisabe na pataile error dibe 
                            key={country.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;