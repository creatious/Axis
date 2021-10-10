import http from "./api"

export const addUser = async (user) => {
    const response = await http.post('/users', user)
    return response.data
}

export const deleteUser = async (user) => {
    const response = await http.delete('/users/' + user.id)
    return response.data
}

export const updateUser = async (user) => {
    const response = await http.put('/users/' + user.id, user)
    return response.data
}

export const getUsersList = async () => {
    const response = await http.get('/users')
    return response.data
}