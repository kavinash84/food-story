/* eslint-disable no-param-reassign */
import axios from "axios";

export const apiUtil= axios.create({
    baseURL: 'https://beta.foodstories.store',        
  });

  apiUtil.interceptors.request.use((config) =>{
    // Do something before request is sent
    const localToken = localStorage.getItem("token");
    if(localToken){
        config.headers= {
            'Authorization': `Bearer ${localToken}`
        };
    }
     return config;
}
  , (error) => 
    // Do something with request error
     Promise.reject(error)
  );

// Add a response interceptor
apiUtil.interceptors.response.use((response) => 
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
     response
  , (error) => 
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
     Promise.reject(error)
  );
export const FETCH_ME = "/rest/default/V1/customers/me";

