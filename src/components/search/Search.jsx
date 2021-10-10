import React, { useState, useEffect } from 'react';
import './search.css';
import { getUsersList } from 'service/users';



const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        getUsersList().then(users => {
            const filteredList = users.filter(user => user.name.toLowerCase().includes(term.toLowerCase()))
            setResults(filteredList)
        })
    }, [term]);

    const UsersList = props => {
        return props.users.map((user) => (
            <div key={user.id} className="item">
                <div className="content">
                    <div className="titlestyling">{user.name}</div>
                </div>
            </div>
        ))
    }

    return (
        <div className="searchBar">
            <div className="ui form">
                <div className="field">
                    <label>Search for Record</label>
                    <br />
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" placeholder="Enter Fullname" />

                </div>
                <div className="ui celled table">
                    <UsersList users={results} />
                </div>
            </div>
        </div>
    )
}

export default Search
