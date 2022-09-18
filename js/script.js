
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}


const displayCountries = countries =>{
    console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');

    // console.log(allCountriesHTML[0]);
}

const getCountryHTML = country =>{
    return `
        <div class="country">
            <h1>${country.name.common}</h1>
            <h4>Capital :  ${country.capital}</h4>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries()