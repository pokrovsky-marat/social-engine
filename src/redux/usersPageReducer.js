const FOLLOW_USER = 'FOLLOW-USER';
const SET_STATE = 'SET-STATE';
const CHANGE_SHEET = 'CHANGE-SHEET'
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER'

let initialState = {
    users: [],
    totalCount: 0,
    pages: 10,      //how many pages to show to one sheet
    numberSheet: 1,  //What number of sheets to show user
    isFetching: false
}

function usersPageReducer(state = initialState, action) {

    if (action.type === FOLLOW_USER) {
        return {
            ...state,
            users: state.users.map(item => {
                if (item.id === action.id) {
                    return {...item, followed: !item.followed}
                }
                return item
            })
        }
    } else if (action.type === SET_STATE) {

        return {...state, users: action.state.items, totalCount: action.state.totalCount};
        // return {...state, users: [...state.users, ...action.state] };
        //Вызывает ошибку

    } else if (action.type === CHANGE_SHEET) {
        return {...state, users: action.state.items, numberSheet: action.number};
    } else if (action.type === TOGGLE_PRELOADER) {

        return {...state, isFetching: action.isFetching};
    }

    return state;
}


export function changeFollow(id) {
    return {type: FOLLOW_USER, id: id}
}

export function setState(state) {
    return {type: SET_STATE, state: state}
}

export function changeNumberSheet(number, state) {
    return {type: CHANGE_SHEET, number: number, state: state}
}

export function togglePreloader(isFetching) {
    return {type: TOGGLE_PRELOADER, isFetching}
}

export default usersPageReducer;