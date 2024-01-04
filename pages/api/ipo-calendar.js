'use server'

import axios from 'axios';

const getIpoCalendar = async () => {
  console.log(`${process.env.NEXT_PUBLIC_IPO_CALENDAR_URL}/ipo-calendar`)
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_IPO_CALENDAR_URL}/ipo-calendar`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getIpoCalendar;