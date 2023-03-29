
type Url = `/api/${string}`;

const Urls:Record<string,Url> = {
    profile:'/api/profile',
    login:'/api/login'
}

export const useFetch = (url:string)=>{
    const fetch = ()=>{
        // doing some stuff
    }
    return fetch;
}