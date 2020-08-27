var axios = require('axios');

console.log('starting nodejs server');

// using axios library to make an HTTP request
axios({
    method: 'GET',
    baseURL: 'https://api.oip.tmrnd.com.my',
    url: 'app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country',
    params: {
        startDate: '2020-08-25',
        endDate: '2020-08-27',
        countryCode: 'MY'
    },
    headers: {
        Authorization : 'Bearer <YOUR TOKEN>'
    }
}).then((result) => {
    console.log(result.data);
}).catch(error => {
    console.error('Error Has Occured');
    console.log(error);
});

// Application exited immediately because nothing else to do!
console.log('program ended!');

// This is a very basic demonstration. The application exited immediately after making the API call.
// You can learn to implement a more complex use cases such as:

// 1. Periodically make this API call and store it into your database.
// 2. Create your own REST API service and get a client to make a request to this server. Once a request received, call the API above and return it to the client.