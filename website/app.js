// Personal API Key for OpenWeatherMap API
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=9517c4ced3838c35339020d493d089bd&units=imperial";
let input, zip, url = '';
// let zip = '';
// let url = '';
// setup new date
let d = new Date();
let today = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getInput);

/* Function called by event listener */
function getInput(event) {
    zip = document.getElementById('zip').value;   
    input = document.getElementById('feelings').value;
    console.log(d);

    getData(baseURL, zip, apiKey)
    .then(function(data) {
        console.log(data);
        // add data to POST request
        postData('/addEntry', {temp: data.main.temp, date: today, input: input});
    });
}

// getData('/all');
// .then(function(data) {
//     console.log(data);
//     // add data to POST request
//     postData('/addEntry', {temp: data.main.temp, date: date, input: input});
// });

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
const postData = async(url = '', data = {}) => {
    console.log("URL:" + url);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }

}

/* Function to GET Project Data */



/* Update UI */