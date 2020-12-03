import s from "./Users.module.css"
import React from 'react'
import * as axios from "axios";
import img from "./../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"


const Users = (props) => {
    function followBtnClick(value) {
        props.changeFollow(value);
    }

    let getUsers = () => {
        if (props.users.length === 0) {
            console.log('axios')
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(function (response) {
                    props.setState(response.data.items);
                })
        }
    }

    return (
        <div className={s.users}>
            <button onClick={getUsers}>get users</button>
            {props.users.map(item =>
                <div key={item.id} className={s.user}>
                    <div><img src={item.photos.small || img} alt="ava"/></div>
                    <div>
                        <button onClick={() => {
                            followBtnClick(item.id)
                        }}>{item.followed ? "Don't follow" : "Follow"}</button>
                    </div>
                    <div>{item.name}</div>
                    <div>{status}</div>

                </div>
            )}

        </div>
    )
}

export default Users;
