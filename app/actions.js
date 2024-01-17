'use server'

import axios from "axios";

export const postSubscribeEmail = async (data) => {
  try {
    const response = await axios.post(`${process.env.SUBSCRIBE_URL}`, 
      Object.assign(data, { 
        operation: 'subscribe'
      }
    ))
    return response.data;
  } catch(error) {
    console.log(`Something went wrong: ${error}`)
  }
}

export const fetchIPOs = async () => {
  try {
    const response = await axios.get(`${process.env.IPO_CALENDAR_URL}`);    
    const data = response.data.body;
    
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}
