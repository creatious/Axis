
import http from "./api"
import {v4 as uuidv4} from "uuid"

export const addDelegate = async (delegate) => {
    delegate.id= uuidv4()
    const response = await http.post('/delegates', delegate)
    return response.data
}

export const deleteDelegate = async (delegate) => {
    const response = await http.delete('/delegates/' + delegate.id)
    return response.data
}

export const updateDelegate = async (delegate) => {
    const response = await http.put('/delegates/' + delegate.id, delegate)
    return response.data
}

export const getDelegatesList = async () => {
    const response = await http.get('/delegates')
    return response.data
}