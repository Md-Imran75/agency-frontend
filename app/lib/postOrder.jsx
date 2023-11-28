import axios from "axios";
import { API_URL } from "@/utils/Url";  // Assuming you only need API_URL here
import { STRAPI_API_TOKEN } from "@/utils/Url";

export default async function postOrder(order) {
  try {
    const apiUrl = `${API_URL}/api/orders`;

    // Assuming you have an authorization token stored somewhere (e.g., in local storage)
    const authToken =STRAPI_API_TOKEN; // Replace with your actual way of getting the token

    const response = await axios.post(apiUrl, order, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    // Check if the response status is in the 2xx range
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      // If the response status is not in the 2xx range, log the response and throw an error
      console.error('Received non-successful response:', response);
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
   
    throw error; // Rethrow the error to propagate it up the call stack
  }
}
