import s from "./Users.module.css"
import React from 'react'
import User from "./User/User";


const Users = (props) => {
    if(props.usersPage.users.length===0){props.setState([
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
        }
    ]);}

    return (
        <div className={s.users}>
            <div>Users</div>
            {props.usersPage.users.map(item =>
                <User changeFollow={props.changeFollow}
                      setState={props.setState}
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      status={item.status}
                      location={item.location}
                      isFollow={item.isFollow}
                      urlPhoto={item.urlPhoto}/>
            )}

        </div>
    )
}

export default Users;
