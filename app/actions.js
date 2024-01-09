'use server'

import axios from "axios";

export const postSubscribeEmail = async (data) => {
  try {
    await axios.post(`${process.env.SUBSCRIBE_URL}`, Object.assign(data, { operation: 'subscribe'}))
  } catch(error) {
    console.log(`Something went wrong: ${error}`)
  }
}