'use server'

import axios from 'axios';

const getIpoCalendar = async () => {
  try {
    const response = await axios.get(`${process.env.IPO_CALENDAR_URL}/ipo-calendar`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getIpoCalendar;