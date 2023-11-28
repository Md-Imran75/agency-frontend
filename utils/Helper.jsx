// store user for login
export const storeUser = (data) => {
    console.log(data.name)
    localStorage.setItem('user' , 
    JSON.stringify({
       username: data.user.username,
       name: data.user.name,
       jwt: data.jwt

    }))
};

export const userData = () => {

    if (typeof window !== 'undefined') {
         const stringifiedData = localStorage.getItem('user') || '""';
         const user =JSON.parse(stringifiedData) || {};
         return user
       }
}


// validation jwt token

export const isJwtTokenPresent = () => {
    if (typeof window !== 'undefined') {
         const stringifiedData = localStorage.getItem('user') || '""';
         const user =JSON.parse(stringifiedData) || {};
    
         return user.jwt
       }

    // return jwt !== null && jwt !== undefined;
  };