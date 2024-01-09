'use server'

import axios from 'axios';
import 'dotenv/config'

const getIpoCalendar = async () => {
  try {
    const response = await axios.get(`${process.env.IPO_CALENDAR_URL}`);    
    const data = response.data.body;
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export default getIpoCalendar;