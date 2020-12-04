import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Users from "./Users";
import {connect} from "react-redux";
import {
    changeFollowUserActionCreator,
    changeNumberSheetActionCreator,
    setStateActionCreator
} from "../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pages: state.usersPage.pages,
        numberSheet: state.usersPage.numberSheet
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => {
            dispatch(changeFollowUserActionCreator(id))
        },
        setState: (state) => {
            dispatch(setStateActionCreator(state))
        },
        changeNumberSheet: (number,state) => {
            dispatch(changeNumberSheetActionCreator(number,state))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;