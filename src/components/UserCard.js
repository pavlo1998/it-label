import React from 'react'
import './UserCard.scss'

function UserCard({item}){
    return(
        <div className='card'>
            <img src={item.avatar_url} className="card-img" alt="Avatar"/>
            <p>{item.login}</p>
        </div>
    )
}

export default UserCard;
