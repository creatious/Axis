import axios from 'axios'

export default axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000'
})