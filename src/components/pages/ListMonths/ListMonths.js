import React, {Component} from 'react'
import Styles from './Styles.module.css'
import Month from '../../elements/Month/Month'
import {api_user_list} from '../../../api'
import {listMonthsWithObject} from '../../../utils/helper'

const {root} = Styles

export default class ListMonths extends Component {
    constructor() {
        super()
        this.state = {
            listOfMonthsWithUsers:[],
        }
    }

    getListOfMonthsWithUsers(users){
        users.forEach(user => {
            let monthNumber = new Date(user.dob).getMonth()
            listMonthsWithObject[monthNumber].users.push(user)
        })
        return listMonthsWithObject
    }

    async getUsers(){
        let {data} = await api_user_list()
        return data
    }

    async setListOfMonthsWithUsers(){
        try {
            let users = await this.getUsers()
            let listOfMonthsWithUsers = this.getListOfMonthsWithUsers(users)
            this.setState({listOfMonthsWithUsers:listOfMonthsWithUsers})
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.setListOfMonthsWithUsers()
    }

    render() {
        return (
            <div className={root}>
                {
                    this.state.listOfMonthsWithUsers.map(monthData => (<Month monthData={monthData}
                                                                                        key={monthData.id} />))
                }
            </div>
        );
    };
};
