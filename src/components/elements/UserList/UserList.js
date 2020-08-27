
import React from 'react'
import Style from './Styles.module.css'
import User from '../User/User'

let {root, active} = Style

const UserList = ({users, visible}) => {
    let styleVisible = visible && active

    return (
        <div className={`${root} ${styleVisible}`}>
            <ul>
                {users.map(user => (<User user={user} key={user.id}/>))}
            </ul>
        </div>
    );
};

export default UserList
