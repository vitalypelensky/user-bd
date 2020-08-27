import React from 'react'
import Style from './Styles.module.css'

let {itemList} = Style

const User = ({user}) => {
    let {firstName, lastName, dob} = user
    let userFullName = `${firstName} ${lastName}`
    let userBirthday = new Date(dob).toLocaleDateString()

    return (
        <li className={itemList}>
            <p>Full name: <span>{userFullName}</span></p>
            <p>Birthday: <span>{userBirthday}</span></p>
        </li>
    );
};

export default User
