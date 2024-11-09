// import the css file
import { useState } from 'react';
import './Country.css';  

const Country = ({ country, handleVisitedCountries }) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        // simply add the classname
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>code: <small>{cca3}</small></h3>
            <button style={{margin: '5px'}} onClick={handleVisited}>{visited? 'Visited':'Not Visited'}</button>
            {visited? 'visited this country': 'want to visit'}
            <hr />
            <button onClick={()=> handleVisitedCountries(country)}>Mark As Visited</button>
           
        </div>
    );
};

export default Country;
