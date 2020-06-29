// Personal API Key for OpenWeatherMap API
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=9517c4ced3838c35339020d493d089bd";
let input = '';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getInput);

/* Function called by event listener */
function getInput(event) {
    const zip = document.getElementById('zip').value;
    input = document.getElementById('feelings').value;
    getData(baseURL, zip, apiKey);
}

/* Function to GET Web API Data*/
const getData = async(baseURL, zip, key) => {
    const response = await fetch(baseURL + zip + key);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

/* Function to POST data */


/* Function to GET Project Data */
