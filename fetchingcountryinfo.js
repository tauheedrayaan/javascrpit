function fetchCountryData() {
    const apiUrl = 'https://restcountries.com/v3.1/name/Sweden'; 
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const countryName = data[0].name.common;
        const capital = data[0].capital || 'N/A';
        const population = data[0].population || 'N/A';
        const region = data[0].region || 'N/A';
  
        const countryInfoContainer = document.querySelector('.country-info');
        const html = `
          <h2>${countryName}</h2>
          <p><strong>Capital:</strong> ${capital}</p>
          <p><strong>Population:</strong> ${population}</p>
          <p><strong>Region:</strong> ${region}</p>
        `;
        countryInfoContainer.innerHTML = html;
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
        const countryInfoContainer = document.querySelector('.country-info');
        countryInfoContainer.innerHTML = '<p>Unable to fetch country data</p>';
      });
}
  window.addEventListener('load', fetchCountryData);
  