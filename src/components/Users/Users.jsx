import s from "./Users.module.css"
import React from 'react'
import * as axios from "axios";
import img from "./../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"

function Pagination(props) {

    return (<div>
            "pagination"
            {props.pages.map((item, j) => <button>ebat{j}</button>)}
        </div>
    )
}

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberSheet}&count=${this.props.pages}`)
            .then((response) => {
                console.log("request to server from componentDidMount")
                console.log(response)
                this.props.setState(response.data);

            })
    }


    followBtnClick(value) {
        this.props.changeFollow(value);
    }

    goToPage(pageNumber) {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pages}`)
            .then((response) => {
                console.log("request to server from goToPage")
                console.log(response)
                this.props.changeNumberSheet(pageNumber, response.data);

            })

    }

    render() {
        let countPagesArray = [];
        let countPages = Math.ceil(this.props.totalCount / this.props.pages);
        for (let i = 1; i <= countPages; i++) {
            countPagesArray.push(i)
        }

        return (
            <div className={s.users}>
                <div>{countPagesArray.map((item, index) => <button
                    className={item === this.props.numberSheet ? s.btn : ""} onClick={() => {
                    this.goToPage(item)
                }}
                    key={index}>{item}</button>)}</div>
                {this.props.users.map(item =>
                    <div key={item.id} className={s.user}>
                        <div>id: {item.id}</div>
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
