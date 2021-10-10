import React, { useState, useEffect } from 'react'
import './table.css'
import { getUsersList, deleteUser } from 'service/users'

const Tables = () => {
    const [usersInfo, setUsersInfo] = useState([])

    useEffect(() => {
        getUsersList().then(users => {
            setUsersInfo(users)

        })
    }, [])

    const handleDelete = (user) => {
        deleteUser(user).then(() => {
            getUsersList().then(users => {
                setUsersInfo(users)

            })
        })
    }
    return (
        <div>
            <h2>Users Personal Details</h2>
            <div className="tables">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersInfo.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td><button onClick={() => handleDelete(user)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tables
