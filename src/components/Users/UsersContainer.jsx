import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Users from "./Users";
import {connect} from "react-redux";
import {changeFollowUserActionCreator, setStateActionCreator} from "../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => {
            dispatch(changeFollowUserActionCreator(id))
        },
        setState: (state) => {
            dispatch(setStateActionCreator(state))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;