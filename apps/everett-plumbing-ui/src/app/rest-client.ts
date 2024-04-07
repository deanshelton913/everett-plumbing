// Function to log input/output
const logInputOutput = (route: string, data: any) => {
    console.log('Route:', route);
    console.log('Data:', data);
  };
  
  // Function to handle response status
  const handleResponse = async (response: Response) => {
    const contentType = response.headers.get('content-type');
    const data = contentType && contentType.includes('application/json') ? await response.json() : await response.text();
  
    console.log('Response Status:', response.status);
    console.log('Response Object:', data);
  
    if (response.ok) {
      console.log('Success');
    } else if (response.status === 400) {
      console.error('Bad Request:', data);
    } else if (response.status === 500) {
      console.error('Internal Server Error:', data);
    } else {
      console.error('Error:', response.status, data);
    }
  };
  
  // Function to send customer outreach data
  const sendCustomerOutreachData = async (data: any) => {
    const route = '/api/customer-outreach'
    try {
      // Log route and input data
      logInputOutput(route, data);
  
      // Send POST request
      const response = await fetch(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Handle response
      await handleResponse(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export { sendCustomerOutreachData };
  