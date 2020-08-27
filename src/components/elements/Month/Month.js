import React, {useState} from 'react'
import Styles from './Styles.module.css'
import UserList from "../UserList/UserList"

const {root, silver, blue, green, red} = Styles

let getMonthColorByCount = (users) => {
    let countUsers = users.length
    return countUsers <= 2 ? silver : countUsers <= 6 ? blue : countUsers <= 10 ? green : red
}

const Month = ({monthData}) => {
    let [visibleUserList, changeVisibleUserList] = useState(false)

    let {name, users} = monthData
    let colorMonth = getMonthColorByCount(users)
    let sortByBirthdayUsers = users.sort((a, b) => new Date(a.dob).getDate() - new Date(b.dob).getDate())

    let onMouseEnterHandler = () => {
        changeVisibleUserList(true)
    }

    let onMouseLeaveHandler = () => {
        changeVisibleUserList(false)
    }

    return (
        <div onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeaveHandler}
             className={`${root} ${colorMonth}`}>
                 <p>{name}</p>
            <UserList visible={visibleUserList} users={sortByBirthdayUsers}/>
        </div>
    )
}

export default Month



