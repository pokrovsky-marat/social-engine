import s from "./Users.module.css"
import React from 'react'
import * as axios from "axios";
import img from "./../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"


class Users extends React.Component {
    constructor(props) {
        console.log("constructor")
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setState(response.data.items);
            })
    }

    followBtnClick(value) {
        this.props.changeFollow(value);
    }

    render() {
        return (
            <div className={s.users}>

                {this.props.users.map(item =>
                    <div key={item.id} className={s.user}>
                        <div><img src={item.photos.small || img} alt="ava"/></div>
                        <div>
                            <button onClick={() => {
                                this.followBtnClick(item.id)
                            }}>{item.followed ? "Don't follow" : "Follow"}</button>
                        </div>
                        <div>{item.name}</div>
                        <div>{status}</div>

                    </div>
                )}

            </div>
        )
    }
}

export default Users;
