const FOLLOW_USER = 'FOLLOW-USER';
const SET_STATE = 'SET-STATE';
const CHANGE_SHEET = 'CHANGE-SHEET'

let initialState = {
    users: [],
    totalCount: 0,
    pages: 10,      //how many pages to show to one sheet
    numberSheet: 1  //What number of sheets to show user
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


    }

    return state;
}


export function changeFollowUserActionCreator(id) {
    return {type: FOLLOW_USER, id: id}
}

export function setStateActionCreator(state) {
    return {type: SET_STATE, state: state}
}

export function changeNumberSheetActionCreator(number, state) {
    return {type: CHANGE_SHEET, number: number, state: state}
}

export default usersPageReducer;