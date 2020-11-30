const FOLLOW_USER = 'FOLLOW-USER';
const SET_STATE = 'SET-STATE';

let initialState = {
    users: [/*
        {
            id: 0,
            name: "Alex B",
            status: "Ready to chat",
            location: {city: "Moscow", country: "Russia"},
            isFollow: true,
            urlPhoto: "https://www.goldennumber.net/wp-content/uploads/2013/08/florence-colgate-england-most-beautiful-face.jpg"
        },
        {
            id: 1,
            name: "Roman C",
            status: "Kiss me now",
            location: {city: "London", country: "England"},
            isFollow: false,
            urlPhoto: "https://www.goldennumber.net/wp-content/uploads/2013/08/florence-colgate-england-most-beautiful-face.jpg"
        },
        {
            id: 2,
            name: "Marat D",
            status: "I like to move it, move it",
            location: {city: "Paris", country: "France"},
            isFollow: true,
            urlPhoto: "https://www.goldennumber.net/wp-content/uploads/2013/08/florence-colgate-england-most-beautiful-face.jpg"
        },*/
    ]
}

function usersPageReducer(state = initialState, action) {

    if (action.type === FOLLOW_USER) {
        return {
            ...state,
            users: state.users.map(item => {
                if (item.id === action.id) {
                    return {...item, isFollow: !item.isFollow}
                }
                return item
            })
        }
    } else if (action.type === SET_STATE) {
        return {...state, users: action.state};
    }

    return state;
}


export function changeFollowUserActionCreator(id) {
    return {type: FOLLOW_USER, id: id}
}

export function setStateActionCreator(state) {
    return {type: SET_STATE, state: state}
}

export default usersPageReducer;