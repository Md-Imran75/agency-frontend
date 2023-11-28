
import { STRAPI_API_TOKEN } from "@/utils/Url";
import { API_URL } from "@/utils/Url";



export default async function getBlogs() {
  const authToken =STRAPI_API_TOKEN;
   try{

  const response = await fetch(`${API_URL}/api/blogs?populate=*`,
  {
    
  cache: 'no-cache' ,
  
    headers: {
      Authorization: `Bearer ${authToken}`,

    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return await response.json();

}catch(error){

  throw new Error('Failed to fetch products');
}
  
  
}


export  async function getBlogsForPagination(page) {
  const authToken =STRAPI_API_TOKEN;

  try {
   
    const response = await fetch(`${API_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=20&populate=*`, {
      cache: 'no-cache' ,
    
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Check if the response status is OK (200)
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }

    return await response.json(); 
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}



export  async function getBlogWithSlug(slug) {
  const authToken =STRAPI_API_TOKEN;
   try{
  
  const response = await fetch(`${API_URL}/api/blogs?populate=*&filters[slug][$eq]=${slug}`,
  {
  cache: 'no-cache' ,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return await response.json();

}catch(error){

  throw new Error('Failed to fetch products');
}
  
  
}