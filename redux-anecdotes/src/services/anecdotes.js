import axios from 'axios'

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
   const response = await axios.get(baseUrl)
   console.log(response.data)
   return response.data
}

const create = async content => {
   const newObject = {votes: 0,content}
   const request = await axios.post(baseUrl,newObject)
   return request.data
}

export default {getAll, create}