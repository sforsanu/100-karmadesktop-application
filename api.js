// api.js

function makeApiCall() {
  const apiUrl = 'http://dev1.100karma.com/api/admin/user/login';

  fetch(apiUrl, {
    credentials: 'include', // Adjust based on your authentication requirements
    // other options...
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Check if the content type is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      return response.json();
    })
    .then(data => {
      console.log('API response:', data);
      // Handle the API response here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here, e.g., display an error message to the user
    });
}

// Call the function when needed
makeApiCall();
