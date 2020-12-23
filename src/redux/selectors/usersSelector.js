import {createSelector} from "reselect";

function getUsersSimple(state) {
    return state.usersPage.users
}

/*export const getUsers = createSelector(getUsersSimple,getTotalCount (users,totalCount) => {
    return users.filter((item) => {
        return !!item.status;
    })
})*/

export const getUsers = createSelector(getUsersSimple, (users) => {
    return users.filter((i) => true)
})


export function getTotalCount(state) {
    return state.usersPage.totalCount
}

export function getPages(state) {
    return state.usersPage.pages
}

export function getNumberSheet(state) {
    return state.usersPage.numberSheet
}

export function getIsFetching(state) {
    return state.usersPage.isFetching
}

export function getIsRequestGoing(state) {
    return state.usersPage.isRequestGoing
}

export function getIdButton(state) {
    return state.usersPage.idButton
}




