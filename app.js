window.addEventListener("DOMContentLoaded", () => {

    const countryUl = document.querySelector("ul")
    const section = document.querySelector("#section")

const getCountries = async () => {

    
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const countryData = await response.json();


    const countryNames = countryData.map((country) => country.name.common)
    const countryFlags = countryData.map((country) => country.flag)
   

    countryNames.forEach((countryName) => {
        const nameLi = document.createElement("li");
        nameLi.textContent = countryName;
        countryUl.appendChild(nameLi);

    });

    countryFlags.forEach((countryFlag) => {
        const flagLi = document.createElement("li");
        flagLi.textContent = countryFlag;
        countryUl.appendChild(flagLi);
    })
}





const countryButton = document.querySelector("#country-button");
countryButton.addEventListener("click", getCountries);

})