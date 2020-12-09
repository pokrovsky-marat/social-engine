import s from "./Users.module.css";
import React from "react";
import img from "./../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let PresentUsers = (props) => {
    let countPagesArray = [];
    let countPages = Math.ceil(props.totalCount / props.pages);
    for (let i = 1; i <= countPages; i++) {
        countPagesArray.push(i);
    }

    return (
        <div className={s.users}>
            <div>
                {countPagesArray.map((item, index) => (
                    <button
                        className={item === props.numberSheet ? s.btn : ""}
                        onClick={() => {
                            props.goToPage(item);
                        }}
                        key={index}
                    >
                        {item}
                    </button>
                ))}
            </div>
            {props.users.map((item) => (
                <div key={item.id} className={s.user}>
                    <div>id: {item.id}</div>
                    <div>
                        <NavLink to={`/profile/${item.id}`}><img src={item.photos.small || img} alt="ava"/></NavLink>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                debugger
                                if (item.followed) {
                                    axios
                                        .delete(
                                            `https://social-network.samuraijs.com/api/1.0/follow/` + item.id
                                            , {
                                                withCredentials: true,
                                                headers: {"API-KEY": "6197b56b-a973-486a-918e-860f7c5323e8"}
                                            })
                                        .then((response) => {
                                            debugger
                                            if (response.data.resultCode === 0){
                                                props.followBtnClick(item.id)}
                                        });
                                } else {
                                    debugger
                                    axios
                                        .post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/` + item.id
                                            ,null, {
                                                withCredentials: true,
                                                headers: {"API-KEY": "6197b56b-a973-486a-918e-860f7c5323e8"}
                                            })
                                        .then((response) => {
                                            debugger
                                            if (response.data.resultCode === 0){
                                                props.followBtnClick(item.id)}
                                        });
                                }
                            }}
                        >
                            {item.followed ? "Don't follow" : "Follow"}
                        </button>
                    </div>
                    <div>{item.name}</div>
                    <div>{status}</div>
                </div>
            ))}
        </div>
    );
};

export default PresentUsers;
