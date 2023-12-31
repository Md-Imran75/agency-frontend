import { STRAPI_API_TOKEN } from "@/utils/Url";
import { API_URL } from "@/utils/Url";


export default async function getAnything(slug) {
  const authToken =STRAPI_API_TOKEN;

  const response = await fetch(`${API_URL}${slug}`,
  {

    cache: 'no-cache' ,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    console.error('Received non-successful response:', response);
    throw new Error('Failed to fetch products')
  }

  return await response.json();
}
